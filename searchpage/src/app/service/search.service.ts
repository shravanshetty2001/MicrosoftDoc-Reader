import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchDto } from '../class/search-dto';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl='http://localhost:8085/DocList';
  constructor(private http:HttpClient) { }
  public SearchDoc(search:SearchDto):Observable<SearchDto>
  {
    return this.http.post<SearchDto>(this.baseUrl,search);
  }
  
}
