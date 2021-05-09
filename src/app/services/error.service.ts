import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  error(code: string): string{

    switch(code){

      //Email ya registrado
      case 'auth/email-already-in-use':
        return 'El email ya esta en uso';

      // Correo invalido
      case 'auth/invalid-email':
        return 'El email es invalido';

      // Contraseña debil
      case 'auth/weak-password':
        return 'La contraseña es debil';

      case 'auth/user-not-found':
        return 'Correo invalido';

      case 'auth/wrong-password':
        return 'La contraseña es invalida';

      default:
        return 'Error desconocido';
    }

  }
}
