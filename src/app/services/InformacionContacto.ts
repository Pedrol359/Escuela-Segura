import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class InformacionContactoService {
    constructor(private firestore: AngularFirestore, private router: Router) { }
    //Objeto retornado
    informacionContacto =
        {
            correo: '',
            latitud: '',
            longitud: '',
            sitioWeb: '',
            urlImagen: ''
        }
    //Métodos
    obtenerContacto(): Observable<any> {
        return this.firestore.collection('Informacion de contacto').snapshotChanges();
    }

    actualizarContacto(informacionContacto: any, id: string): Promise<any> {
        return this.firestore.collection('Instituciones de Apoyo').doc(id).update(informacionContacto)
    }
}