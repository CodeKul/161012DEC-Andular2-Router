import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  private cost = 0;
  constructor(
    private router : Router    
  ) { }

  ngOnInit() {
    this.router.routerState.root.queryParams.subscribe(query => this.cost = query['cost']);
  }
}
