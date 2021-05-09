import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;
  loading= false;

  constructor(private fb: FormBuilder,
              private afAuth: AngularFireAuth,
              private router: Router,
              private toastr: ToastrService,
              private _errorService: ErrorService) {
    this.registroForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['']
    }, {validator: this.checkPassword })
   }

  ngOnInit(): void {
  }

  registro(){
    const usuario = this.registroForm.get('usuario')?.value;
    const password = this.registroForm.get('password')?.value;

    this.loading=true;
    this.afAuth.createUserWithEmailAndPassword(usuario,password).then(rta => {
      rta.user?.sendEmailVerification();
      this.toastr.success('Enviamos un correo electronico para verificar su cuenta!', 'Usuario registrado');
      this.router.navigate(['/usuario'])
    }).catch(error=>{
      this.registroForm.reset();
      this.loading=false;
      this.toastr.error(this._errorService.error(error.code),'Error');
    })
  }

  checkPassword(group: FormGroup):any{
    const pass = group.controls.password?.value;
    const confirmPassword = group.controls.repetirPassword?.value;
    return pass === confirmPassword ? null : {notSame: true}
  }

}
