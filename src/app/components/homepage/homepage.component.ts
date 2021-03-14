import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/shared/rest-api.service'; 
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  articleList: any;
  newsStation: any;

  constructor(private restApiService: RestApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.restApiService.getArticles().forEach((n: Data) => {
        if(n.id == this.route.snapshot.params.id) {
          this.articleList = n;
        }
      })
    })

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
