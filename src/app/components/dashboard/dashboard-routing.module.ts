import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespuestaUsuarioComponent } from '../shared/respuesta-usuario/respuesta-usuario.component';
import { CrearPreguntasComponent } from './crear-preguntas/crear-preguntas.component';
import { CrearQuizzComponent } from './crear-quizz/crear-quizz.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ListCuestionariosComponent } from './list-cuestionarios/list-cuestionarios.component';
import { VerCuestionarioComponent } from './ver-cuestionario/ver-cuestionario.component';

const routes: Routes = [
  {path: '', component: ListCuestionariosComponent},
  {path: 'crearQuizz', component: CrearQuizzComponent},
  {path: 'crearPreguntas', component: CrearPreguntasComponent},
  {path: 'verCuestionario/:id', component: VerCuestionarioComponent},
  {path: 'estadisticas/:id', component: EstadisticasComponent},
  {path: 'respuestaUsuarioAdmin/:id', component: RespuestaUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
