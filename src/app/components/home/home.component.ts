import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  condition1 = false;
  news: any[] = [];
  keyword1 = "finance";

  constructor( private newsService: NewsService, private http: HttpClient ) { 
    newsService.getNews(this.keyword1).subscribe( (resp:any) =>{
        this.news = resp.articles;
        console.log(resp.articles);
    })
  }

  moreInfo() {
    if (this.condition1 === true) {
      this.condition1 = false;
    } else {
      this.condition1 = true;
    }
  }

  openPage(page1: any) {
    window.open(page1, '_blank');
  }

  ngOnInit(): void {

  }

}
