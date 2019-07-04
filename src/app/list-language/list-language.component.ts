import { Component, OnInit } from '@angular/core';
import { Language } from 'src/typings/language';

@Component({
  selector: 'app-list-language',
  templateUrl: './list-language.component.html',
  styleUrls: ['./list-language.component.css']
})
export class ListLanguageComponent implements OnInit {

  languagem: Language[];
  constructor() { }

  ngOnInit() {
  }

}
