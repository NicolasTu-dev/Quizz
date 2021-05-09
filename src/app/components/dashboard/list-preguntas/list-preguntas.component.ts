import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuestionario } from 'src/app/models/Cuestionario';
import { Pregunta } from 'src/app/models/Pregunta';
import { QuizzService } from 'src/app/services/quizz.service';
import { nanoid } from 'nanoid'
import { ThisReceiver } from '@angular/compiler';
import { User } from 'src/app/interfaces/User';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-preguntas',
  templateUrl: './list-preguntas.component.html',
  styleUrls: ['./list-preguntas.component.css']
})
export class ListPreguntasComponent implements OnInit {
  listPreguntas: Pregunta[]=[];
  tituloCuestionario: string;
  descripcionCuestionario: string;
  loading = false;

  constructor(private _quizzService: QuizzService,
             private router: Router, 
             private toastr: ToastrService) {
    this._quizzService.getPreguntas().subscribe(data => {
      this.listPreguntas.push(data);
      console.log(this.listPreguntas);
    })
    this.tituloCuestionario  = this._quizzService.tituloCuestionario;
    this.descripcionCuestionario = this._quizzService.descripcion;
   }
   

  ngOnInit(): void {
    if(this.tituloCuestionario=== ' '|| this.descripcionCuestionario === ''){
      this.router.navigate(['/dashboard'])
    }
  }

  eliminarPregunta(index: number){
    this.listPreguntas.splice(index, 1);
  }

  finalizarCuestionario(){
    const codigo = this.generarCodigo();
    const usuario: User = JSON.parse(localStorage.getItem('user') || '{}');

    const cuestionario: Cuestionario={
      uid: usuario.uid,
      titulo: this.tituloCuestionario,
      descripcion: this.descripcionCuestionario,
      codigo: codigo,
      cantPreguntas: this.listPreguntas.length,
      fechaCreacion: new Date(),
      listPreguntas: this.listPreguntas
    }

    console.log (cuestionario);
    
    this.loading= true;
    this._quizzService.crearCuestionario(cuestionario).then(data => {
      this.toastr.success('El cuestionario fue registrado con exito!', 'Cuestionario Registrado')
      this.router.navigate(['/dashboard'])
    }).catch(error =>{
      this.loading = false;
      console.log(error);
    });
  }

  generarCodigo():string{
    return nanoid(6).toUpperCase();
  }
}
