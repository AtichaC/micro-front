import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryAddService {
  constructor(private http: HttpClient) {}
  addCategories(model: any) {
    return this.http.post<void>(
      'https://dev.tks.co.th/codepulseapi/api/Categories',
      model
    );
  }
}
