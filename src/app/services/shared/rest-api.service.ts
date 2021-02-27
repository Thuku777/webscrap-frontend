import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // API
  apiURLArticles = 'http://backendtest.kenyamedialive.com/api/aggregator/all-news'

  apiURLHeader = 'http://backendtest.kenyamedialive.com/api/aggregator/maincategory'

  apiURLSubNav = 'http://backendtest.kenyamedialive.com/api/aggregator/sub-category'

  apiNewsStation = 'http://backendtest.kenyamedialive.com/api/aggregator/news-station'

  constructor(private http: HttpClient) { }

  // Get all articles
  getArticles() {
    return this.http.get(this.apiURLArticles);
  }

  // Get the headers in navbar
  getHeaders() {
    return this.http.get(this.apiURLHeader);
  }

  // Get the headers in navbar
  getSubHeaders() {
    return this.http.get(this.apiURLSubNav);
  }

  // Get the specific news station 
  getNewsStation() {
    return this.http.get(this.apiNewsStation)
  }

}
