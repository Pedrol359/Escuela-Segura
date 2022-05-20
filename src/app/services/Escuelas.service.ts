import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class EscuelasService {
    constructor(private firestore: AngularFirestore, private router: Router) { }
    //Objeto Escuela
    escuela = {
        id: "",
        nombre: "",
        nivel: "",
        direccion: ""
    }
    //metodos
    agregarEscuela(escuela: any): Promise<any> {
        return this.firestore.collection('Escuelas Seguras').add(escuela);
    }
    obtenerEscuelas(): Observable<any> {
        return this.firestore.collection('Escuelas Seguras').snapshotChanges();
    }
    eliminarEscuela(idEscuela:string){
        return this.firestore.collection('Escuelas Seguras').doc(idEscuela).delete()
    }

}