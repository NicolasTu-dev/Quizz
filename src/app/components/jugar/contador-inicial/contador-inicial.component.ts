import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contador-inicial',
  templateUrl: './contador-inicial.component.html',
  styleUrls: ['./contador-inicial.component.css']
})
export class ContadorInicialComponent implements OnInit,OnDestroy {
  contador = 3;
  setInterval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.playContadorInicial();
  }
  ngOnDestroy(): void{
    clearInterval(this.setInterval);
  }

  playContadorInicial(){
    this.setInterval= setInterval(()=> {
      if(this.contador=== 0)
      {
        this.router.navigate(['/jugar/realizarQuizz']);
      }
      this.contador = this.contador - 1;


    },1000)
  }

}
