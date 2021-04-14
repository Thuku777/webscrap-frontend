import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/shared/rest-api.service'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {

  articleList: any;
  newsStation: any;
  newsPage: any;
  name: any;

  constructor(private route: ActivatedRoute, private restApiService: RestApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
    });

    this.restApiService.getNewsPage(this.name).subscribe((data) => {
      console.log(data);
      this.newsPage = data;
    });

    // this.restApiService.getArticles().subscribe((data) => {
    //   console.log(data);
    //   this.articleList = data;
    // });

    // this.restApiService.getNewsStation().subscribe((data) => {
    //   console.log(data);
    //   this.newsStation = data;
    // });
  }

}
