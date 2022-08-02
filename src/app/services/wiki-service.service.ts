import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WikiDataServiceService } from './wiki-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class WikiServiceService {

  constructor(
    private _wikiDataService: WikiDataServiceService
  ) { }

  getWikiSearch(value: string): Observable<any> {
    return this._wikiDataService.getWikiApi(value).pipe(
      map((data: any) => {

        return data.query.search.slice(0, 4);
      })
    );
  }
}