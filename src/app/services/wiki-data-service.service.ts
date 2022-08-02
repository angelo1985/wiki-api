import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiDataServiceService {

  constructor(
    private _http: HttpClient
  ) { }

  getWikiApi(value: string): Observable<any> {
    return this._http.get<any>(`/posts?action=query&list=search&format=json&srsearch=${value}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    
  }
}
