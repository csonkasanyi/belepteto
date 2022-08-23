import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { CrudService } from '../crud.service';
import { Examinee } from '../examinee';

interface Osztaly {
  value: string;
  viewValue: string;
}

interface Terem {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  crud: CrudService
  constructor(public firestore: Firestore, crud: CrudService) {
    this.crud = crud;
  }
  
  ngOnInit(): void {
    this.crud.getExaminees()
  }

  osztalyok: Array<Osztaly> = [
    {value: 'all', viewValue: 'Minden osztály'},
    {value: '12.a', viewValue: '12.a'},
    {value: '12.b', viewValue: '12.b'},
    {value: '12.c', viewValue: '12.c'},
    {value: 'else', viewValue: 'Egyéb'},
  ];

  termek: Array<Terem> = [
    {value: 'all', viewValue: 'Minden terem'},
    {value: '4', viewValue: '4'},
    {value: '9', viewValue: '9'},
    {value: '103', viewValue: '103'},
    {value: '104', viewValue: '104'},
    {value: '105', viewValue: '105'},
    {value: '202', viewValue: '202'},
    {value: '203', viewValue: '203'},
    {value: '204', viewValue: '204'},
    {value: '205', viewValue: '205'},
  ];
}
