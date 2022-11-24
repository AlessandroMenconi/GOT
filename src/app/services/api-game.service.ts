import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGameService {

  constructor(public http: HttpClient) {}
  
  getListaPersonaggi(page: number, listSize: number): Observable<any> {
    return this.http.get('https://anapioficeandfire.com/api/characters?page=' + page + '&pageSize=' + listSize + '');
  };
  getFilteredGenderNamePersonaggi(filterGender: string, filterName: string, filterCulture: string, listSize: number): Observable<any> {
    let filterC = ''
    let filtersG = '';
    let filters = '';

    if (filterCulture) {
      filterC += 'culture=' + filterCulture
    }
    if (filterGender) {
      filtersG += 'gender=' + filterGender;
    }
    if (filterName) {
      filters += 'name=' + filterName;
    }
    return this.http.get('https://anapioficeandfire.com/api/characters?' + filters + '&' + filtersG + '&' + filterC + '&pageSize=' + listSize);
  }


}


