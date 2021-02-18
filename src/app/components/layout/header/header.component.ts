import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RestApiService } from '../../../services/shared/rest-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  headersList: any;

  collapsed = true;
  toggleCollapsed(): void {
      this.collapsed = !this.collapsed;
    }

    constructor(private restApiService: RestApiService) { }

    ngOnInit(): void {
      this.restApiService.getHeaders().subscribe((data) => {
        console.log(data);
        this.headersList = data;
      });
    }
  
}
