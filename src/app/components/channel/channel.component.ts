import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../services/shared/rest-api.service'; 

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  articleList: any;

  constructor(private restApiService: RestApiService) { }

  ngOnInit(): void {
    this.restApiService.getArticles().subscribe((data) => {
      console.log(data);
      this.articleList = data;
    });
  }

}
