import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/shared/rest-api.service'; 

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.css']
})
export class QuickLinksComponent implements OnInit {

  newsStation: any;

  constructor(private restApiService: RestApiService) { }

  ngOnInit(): void {
    this.restApiService.getNewsStation().subscribe((data) => {
      console.log(data);
      this.newsStation = data;
    });
  }

}
