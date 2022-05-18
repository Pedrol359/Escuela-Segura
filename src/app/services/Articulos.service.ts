import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  constructor(private firestore: AngularFirestore, private router: Router,) { }
  
  // Variables 
  
}
