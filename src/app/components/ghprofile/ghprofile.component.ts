import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './ghprofile.component.html',
  styleUrls: ['./ghprofile.component.scss']
})
export class GhProfile implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
