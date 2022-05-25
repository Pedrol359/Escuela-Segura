import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class InstitucionesService {
    constructor(private firestore: AngularFirestore, private router: Router) { }
    //Objeto Institucion
    institucion = {
        id: 0,
        nombre: "",
        descripcion: "",
        direccion: "",
        telefono: ""
    }
    //Métodos
    agregarInstitucion(institucion: any): Promise<any> {
        return this.firestore.collection('Instituciones de Apoyo').add(institucion);
    }
    obtenerInstituciones(): Observable<any> {
        return this.firestore.collection('Instituciones de Apoyo').snapshotChanges();
    }
    actualizarInstituciones(institucion: any, id: string): Promise<any> {
        return this.firestore.collection('Instituciones de Apoyo').doc(id).update(institucion)
    }
    eliminarInstitucion(idInstitucion: string) {
        return this.firestore.collection('Instituciones de Apoyo').doc(idInstitucion).delete()
    }

}