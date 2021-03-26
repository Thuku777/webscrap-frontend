import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/shared/rest-api.service'; 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articleList: any;
  newsStation: any;

  constructor(private restApiService: RestApiService) { }

  ngOnInit(): void {

    this.restApiService.getArticles().subscribe((data) => {
      console.log(data);
      this.articleList = data;
    });

    this.restApiService.getNewsStation().subscribe((data) => {
      console.log(data);
      this.newsStation = data;
    });
  }

}
