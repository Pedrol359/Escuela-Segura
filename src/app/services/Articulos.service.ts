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
    articulo ={
        id:"",
        titulo:"",
        autor:"",
        descripcion:"",
        contenido:"",
        urlImagen:""
    }
//metodos
  agregarArticulo(articulo: any): Promise<any> {
    return this.firestore.collection('Articulos').add(articulo);
  }
  obtenerArticulos(): Observable<any> {
    return this.firestore.collection('Articulos').snapshotChanges();
  }

}