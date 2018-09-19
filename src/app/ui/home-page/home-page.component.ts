import { Component, OnInit } from '@angular/core';
import { firebase } from '@firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})

/*interface Invitee {
  name: string;
  ref: string;
}*/

export class HomePageComponent {
  invitees: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.invitees = db.collection('invitees').valueChanges();
  }
}
