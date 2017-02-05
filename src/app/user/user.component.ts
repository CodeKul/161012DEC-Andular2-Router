import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  myId = 0;
  myId1 = 0;

  @ViewChild('google')
  google : ElementRef;

  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( xyz => {
      this.myId = xyz['id'];
      this.myId1 = xyz['id1'];
    });
  }

  goToGuest() {
    this.router.navigate(['/guest'], {queryParams : {cost:85}});
    //this.google.nativeElement.click();
    //window.open('http://google.com');
  }
}
