import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFirestore) { }

  getAllCategories() {
    return new Promise<any>((resolve)=> {
      this.db.collection('categories').valueChanges({ idField: 'id' }).subscribe(categories => resolve(categories));
    })
  }
}
