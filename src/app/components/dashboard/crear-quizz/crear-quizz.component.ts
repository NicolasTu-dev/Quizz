import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-crear-quizz',
  templateUrl: './crear-quizz.component.html',
  styleUrls: ['./crear-quizz.component.css']
})
export class CrearQuizzComponent implements OnInit {
  cuestionarioForm: FormGroup;
  mostrarError = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _quizzService: QuizzService) { 
    this.cuestionarioForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  siguiente() {
    
    if(this.cuestionarioForm.invalid) {

      // Mostrar el error por 3 segundos
      this.mostrarError = true;
      setTimeout(() => {
        this.mostrarError = false;
      }, 3000);
    }else{
      // Si el formulario es valido
      this._quizzService.tituloCuestionario = this.cuestionarioForm.get('titulo')?.value;
      this._quizzService.descripcion = this.cuestionarioForm.get('descripcion')?.value;
      this.router.navigate(['/dashboard/crearPreguntas']);
    }
  }

}
