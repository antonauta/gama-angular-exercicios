import { Component, OnInit, Input } from '@angular/core';
import { Language } from 'src/typings/language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

@Input() data: Language
  constructor() { }

  ngOnInit() {
  }

}
