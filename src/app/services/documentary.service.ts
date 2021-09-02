import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DocumentaryService {

  constructor(private db: AngularFirestore) { }

  getDocumentaryByTag(tagName: string) {
    return new Promise<any>((resolve)=> {
      this.db.collection('documentaries', ref => ref.where('tagName', '==', tagName)).valueChanges().subscribe(doco => resolve(doco))
    })
  }
  
  getDocumentaryByCategory(categoryName: string, start: string, limit: number) {
    return new Promise<any>((resolve)=> {
      this.db.collection('documentaries', ref => ref.where('categoryName', '==', categoryName)).valueChanges().subscribe(doco => resolve(doco))
    })
  }

  getDocumentaryByIndex(index: string) {
    return new Promise<any>((resolve)=> {
      this.db.collection('documentaries', ref => ref.where('index', '==', index)).valueChanges().subscribe(doco => resolve(doco))
    })
  }

  // Move these
  

  

  // getDocumentaryByTag(tagName: string) {
  //   return new Promise<any>((resolve)=> {
  //     this.db.collection('documentaries', ref => ref.where('tagName', '==', tagName).orderBy('index')).valueChanges().subscribe(tags => resolve(tags))
  //   })
  // }
  
  // getDocumentaryByCategory(categoryName: string, start: string, limit: number) {
  //   return new Promise<any>((resolve)=> {
  //     this.db.collection('documentaries', ref => ref.where('categoryName', '==', categoryName).orderBy('index').startAt(start).limit(limit)).valueChanges().subscribe(category => resolve(category))
  //   })
  // }

}
