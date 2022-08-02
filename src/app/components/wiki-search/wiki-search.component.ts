import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Result } from 'src/app/interfaces/result';
import { WikiServiceService } from 'src/app/services/wiki-service.service';


@Component({
  selector: 'wiki-search',
  templateUrl: './wiki-search.component.html',
  styleUrls: ['./wiki-search.component.scss']
})
export class WikiSearchComponent {
  searchField: FormControl
  results: Result[] = []

  constructor(
    private _wikiService: WikiServiceService,
    private _router: Router
  ) {
    this.searchField = new FormControl('')
  }

  onChange(e: Event) {
    this.results = []
    console.log('evento ' + this.searchField.value)
    this._wikiService.getWikiSearch(this.searchField.value).subscribe((respuesta: Result[]) => {
      this.results = respuesta;
    })
  }

  redirect() {
    this._router.navigate(['/home'])
  }
}
