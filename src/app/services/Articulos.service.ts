import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class ArticuloService {
    constructor(private firestore: AngularFirestore, private router: Router) { }
    //Objeto Articulo
    articulo = {
        titulo: "",
        destacado: "",
        autor: "",
        descripcion: "",
        contenido: "",
        urlImagen: "",
        fecha: ""
    }
    //metodos
    agregarArticulo(articulo: any): Promise<any> {
        return this.firestore.collection('Articulos').add(articulo);
    }
    obtenerArticulos(): Observable<any> {
        return this.firestore.collection('Articulos').snapshotChanges();
    }
    actualizarArticulo(articulo: any,id:string): Promise<any> {
        return this.firestore.collection('Articulos').doc(id).update(articulo)
    }
    eliminarArticulo(idArticulo:string){
        return this.firestore.collection('Articulos').doc(idArticulo).delete()
    }

}