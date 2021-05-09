import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaQuizzService } from 'src/app/services/respuesta-quizz.service';

@Component({
  selector: 'app-ingresar-nombre',
  templateUrl: './ingresar-nombre.component.html',
  styleUrls: ['./ingresar-nombre.component.css']
})
export class IngresarNombreComponent implements OnInit {
  nombre = '';
  errorText = '';
  error= false;

  constructor(private _respuestaQuizzService: RespuestaQuizzService,
              private router: Router) { }

  ngOnInit(): void {
    this.validarRefresh();
  }

    ingresarNombre(){
      if(this.nombre === ''){
        this.errorMensaje('Ingrese su nombre');
        return;
      }
      this._respuestaQuizzService.nombreParticipante = this.nombre;
      this.router.navigate(['/jugar/iniciarContador'])
    }

    validarRefresh(){
      if (this._respuestaQuizzService.cuestionario=== undefined){
        this.router.navigate(['/']);
      } 
    }

    errorMensaje(text: string){
      this.errorText = text;
      this.error = true;
      // Mostramos el error por 4 segundos
      setTimeout(() => {
        this.error = false;
      }, 4000);
    }
}
