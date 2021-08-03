import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DocumentaryService {

  constructor(private db: AngularFirestore) { }

  getDocumentaryByTag(tagName: string) {
    return new Promise<any>((resolve)=> {
      this.db.collection('documentaries', ref => ref.where('tagName', '==', tagName)).valueChanges().subscribe(tags => resolve(tags))
    })
  }
  
  getDocumentaryByCategory(categoryName: string) {
    return new Promise<any>((resolve)=> {
      this.db.collection('documentaries', ref => ref.where('categoryName', '==', categoryName)).valueChanges().subscribe(category => resolve(category))
    })
  }

}
