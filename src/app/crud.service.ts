import { Injectable } from '@angular/core';
import { Examinee } from './examinee';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from '@firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CrudService {


  examinees: any = [];
  actualExaminee: Examinee = new Examinee;
  router: Router
  
  constructor(public firestore: Firestore, router: Router) {
    this.router = router;
  }

  getExaminees () {
    const dbInstance = collection(this.firestore, 'examinees');
    getDocs(dbInstance)
      .then((response) => {
        this.examinees = [...response.docs.map((item) => {
          return {...item.data(), id: item.id}
        })]
      })
      
  }

  addExaminee (value: Examinee) {
    const dbInstance = collection(this.firestore, 'examinees');
    this.actualExaminee = {
      nev : value.nev,
      osztaly : value.osztaly,
      terem : Number(value.terem),
      megerkezett : false
    }
    console.log(this.actualExaminee);
    
    if (this.actualExaminee.nev.length === 0 || this.actualExaminee.osztaly.length === 0 || this.actualExaminee.terem === 0) {
      alert('Minden mezőt ki kell tölteni!')
    } else {
      addDoc(dbInstance, this.actualExaminee)
        .then(() => {
          this.router.navigate(['/'])
        })
    }
  }

  changeStateOfExaminee (megerkezett: boolean, id: string) {
    const examineeDoc = doc(this.firestore, 'examinees', id);
    const newState = megerkezett ? false : true
    updateDoc(examineeDoc, {megerkezett: newState})
  }

  deleteExaminee (id: string) {
    const examineeDoc = doc(this.firestore, 'examinees', id);
    deleteDoc(examineeDoc)
  }
}
