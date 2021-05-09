import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RespuestaQuizzService } from 'src/app/services/respuesta-quizz.service';

@Component({
  selector: 'app-respuesta-usuario',
  templateUrl: './respuesta-usuario.component.html',
  styleUrls: ['./respuesta-usuario.component.css']
})
export class RespuestaUsuarioComponent implements OnInit {
  id: string;
  loading = false;
  respuestaCuestionario: any;
  rutaAnterior = '';

  constructor(private _respuestaUsuarioService: RespuestaQuizzService,
              private aRoute: ActivatedRoute,
              private router: Router) { 
    this.rutaAnterior= this.aRoute.snapshot.url[0].path;
    this.id = this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.obtenerRespuestaUsuario();
  }

  obtenerRespuestaUsuario(){
    this.loading = true;
    this._respuestaUsuarioService.getRespuestaUsuario(this.id).subscribe(doc => {
      console.log(doc);
      if(doc.exists === false){
        this.router.navigate(['/']);
        return;
      }
      this.respuestaCuestionario = doc.data();
      this.loading = false;
    }, error =>{
      console.log(error);
      this.loading = false;
    })
  }
  volver(){
    if(this.rutaAnterior === 'respuestaUsuarioAdmin'){
      this.router.navigate(['/dashboard/estadisticas', this.respuestaCuestionario.idCuestionario])
    }else{
      this.router.navigate(['/']);
    }
  }
}
