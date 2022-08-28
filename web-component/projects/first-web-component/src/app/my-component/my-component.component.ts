import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyComponentService } from './my.component.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.initialNavigation();
  }

}
