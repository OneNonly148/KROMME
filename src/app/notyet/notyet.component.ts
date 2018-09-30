import { Component, OnInit } from '@angular/core';
import { faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notyet',
  templateUrl: './notyet.component.html',
  styleUrls: ['./notyet.component.css']
})
export class NotyetComponent implements OnInit {
  faBan = faBan
  constructor() { }

  ngOnInit() {
  }

}
