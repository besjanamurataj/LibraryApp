import { environment } from './../../environments/environment';
import { Library } from './../models/library';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 const baseUrl = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor( private http:HttpClient) { }

  getBook(){
    return this.http.get(baseUrl);
  }

  create(book:Library){
    return this.http.post<Library[]>(baseUrl,book);
  }

  deleteBook(id:string){
     return this.http.delete(baseUrl+ '/' +id);
  }

   update(id:string,book:Library){
     return this.http.put(baseUrl+ '/' +id, book)
   }
}
