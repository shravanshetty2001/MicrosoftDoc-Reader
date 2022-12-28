import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl='http://localhost:9090/search';
  constructor(private http:HttpClient) { }
  public SearchDoc(search:any):Observable<any>
  {
    return this.http.get(`${this.baseUrl +'?query='+ search.kword + '&type='+ search.type}`,search);
  }
}
