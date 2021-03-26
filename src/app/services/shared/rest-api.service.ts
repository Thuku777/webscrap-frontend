import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // API
  apiURLArticles = 'https://kenyamediabackend.herokuapp.com/api/aggregator/all-news'

  apiURLHeader = 'https://kenyamediabackend.herokuapp.com/api/aggregator/maincategory'

  // apiURLSubNav = 'https://kenyamediabackend.herokuapp.com/api/aggregator/sub-category'

  apiNewsStation = 'https://kenyamediabackend.herokuapp.com/api/aggregator/news-station'

  // apiSpecificNewsStation = 'http://127.0.0.1:8000/api/aggregator/specificnewsstation?ref='

  constructor(private http: HttpClient) { }

  // Get all articles
  getArticles() {
    return this.http.get(this.apiURLArticles);
  }

  // Get the headers in navbar
  getHeaders() {
    return this.http.get(this.apiURLHeader);
  }

  // Get the sub-headers in navbar
  // getSubHeaders() {
  //   return this.http.get(this.apiURLSubNav);
  // }

  // Get the specific news station 
  getNewsStation() {
    return this.http.get(this.apiNewsStation)
  }

}
