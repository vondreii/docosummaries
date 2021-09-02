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

  getCategoryByName(categoryName: string) {
    return new Promise<any>((resolve)=> {
      this.db.collection('categories', ref => ref.where('name', '==', categoryName)).valueChanges().subscribe(categories => resolve(categories))
    })
  }
  
  getCategoryByPrefix(prefix: string) {
    return new Promise<any>((resolve)=> {
      this.db.collection('categories', ref => ref.where('prefix', '==', prefix)).valueChanges().subscribe(categories => resolve(categories))
    })
  }
}
