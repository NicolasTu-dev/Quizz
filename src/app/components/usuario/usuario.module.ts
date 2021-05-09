import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    RecuperarPasswordComponent,
    VerificarCorreoComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
