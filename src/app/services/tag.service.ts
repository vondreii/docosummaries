import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  // categoriesList = new Map([
  //   ["animals-plants-wildlife", "animals-plants-wildlife"],
  //   ["biographies", "biographies"],
  //   ["business", "business"],
  //   ["conspiracies", "conspiracies"],
  //   ["construction-and-engineering", "construction-and-engineering"],
  //   ["disasters-man-made", "disasters-man-made"]
  // ]); 

  constructor(private db: AngularFirestore) { }

  getAllTags() {
    return new Promise<any>((resolve)=> {
      this.db.collection('tags').valueChanges({ idField: 'id' }).subscribe(tags => resolve(tags));
    })
  }

  getTagByCategory(categoryName: string) {
    return new Promise<any>((resolve)=> {
      this.db.collection('tags', ref => ref.where('categoryName', '==', categoryName)).valueChanges().subscribe(tags => resolve(tags))
    })
  }
}
