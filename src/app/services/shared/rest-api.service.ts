import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // API
  apiURLArticles = 'https://kenyamediabackend.herokuapp.com/api/aggregator/all-news'

  apiURLHeader = 'https://kenyamediabackend.herokuapp.com/api/aggregator/maincategory'

  constructor(private http: HttpClient) { }

  // Get all articles
  getArticles() {
    return this.http.get(this.apiURLArticles);
  }

  // Get the headers in navbar
  getHeaders() {
    return this.http.get(this.apiURLHeader);
  }

}
