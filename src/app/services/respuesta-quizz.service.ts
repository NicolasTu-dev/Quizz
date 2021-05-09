import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cuestionario } from '../models/Cuestionario';

@Injectable({
  providedIn: 'root'
})
export class RespuestaQuizzService {

  cuestionario!: Cuestionario;
  nombreParticipante = '';

  constructor(private _firestore: AngularFirestore) { }

  searchByCode(code: string): Observable<any> {
    return this._firestore.collection('cuestionarios',ref => ref.where('codigo', '==', code)).get();
  }

  setRespuestaUsuario(respuestaUsuario: any): Promise<any> {
    return this._firestore.collection('respuestas').add(respuestaUsuario);
  }

  getRespuestaUsuario(id: string): Observable<any> {
    return this._firestore.collection('respuestas').doc(id).get();
  }

  getRespuestaByIdCuestionario(id: string): Observable<any>{
    return this._firestore.collection('respuestas', ref => ref.where('idCuestionario','==',id)).snapshotChanges();
  }

  deleteRespuestaUsuario(id: string): Promise<any>{
    return this._firestore.collection('respuestas').doc(id).delete();
  }
}


