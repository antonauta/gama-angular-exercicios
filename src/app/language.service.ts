import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Language } from 'src/typings/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _language = new BehaviorSubject(0);

  languagem = this._language.asObservable();

  constructor(private httpClient: HttpClient) { }

  getLanguage(): Observable<Language[]> {
    return this.httpClient.get<Language[]>('http://localhost:3000/AllLanguages');
  }
}
