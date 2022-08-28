import { Component, OnInit } from '@angular/core';
import { MyComponentService } from '../my.component.service';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})
export class PageAComponent implements OnInit {

  constructor(private myComponentService: MyComponentService) { }

  ngOnInit() {
  }

  async load() {
    console.log(this.myComponentService.test());
  }
}
