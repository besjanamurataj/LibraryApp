import { Library } from './../models/library';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor( private http:HttpClient) { }

  getLibrary(){
    return this.http.get<any>('assets/library-large.json')
    .toPromise()
    .then(res => <Library[]>res.data)
    .then(data => { return data; });

  }
}
