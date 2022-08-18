import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Osztaly {
  value: string;
  viewValue: string;
}

interface Terem {
  value: number;
  viewValue: number;
}

@Component({
  selector: 'app-new-examinee',
  templateUrl: './new-examinee.component.html',
  styleUrls: ['./new-examinee.component.scss']
})
export class NewExamineeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  osztalyok: Array<Osztaly> = [
    {value: '12a', viewValue: '12.a'},
    {value: '12b', viewValue: '12.b'},
    {value: '12c', viewValue: '12.c'},
    {value: 'else', viewValue: 'Egyéb'},
  ];

  termek: Array<Terem> = [
    {value: 4, viewValue: 4},
    {value: 9, viewValue: 9},
    {value: 103, viewValue: 103},
    {value: 104, viewValue: 104},
    {value: 105, viewValue: 105},
    {value: 202, viewValue: 202},
    {value: 203, viewValue: 203},
    {value: 204, viewValue: 204},
    {value: 205, viewValue: 205},
  ];

  nev = new FormControl('', [Validators.required]);
  osztaly = new FormControl('', [Validators.required]);
  terem = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.nev.hasError('required')) {
      return 'A mező kitöltése kötelező!';
    }

    return this.nev.hasError('text') ? 'Not a valid email' : '';
  }

}
