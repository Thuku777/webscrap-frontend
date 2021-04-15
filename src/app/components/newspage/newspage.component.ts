import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/shared/rest-api.service'; 
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router, private restApiService: RestApiService) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
       return false;
    }

    this.router.events.subscribe((evt) => {
       if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
       }
   });
}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      console.log(this.name);
    });

    this.route.params.subscribe(
      params => {
          const name = +params['name'];
          this.restApiService.getNewsPage(name);
      }
  );

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
