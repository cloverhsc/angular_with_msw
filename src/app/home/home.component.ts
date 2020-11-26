import { RestHandlerService } from './../rest-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private rest: RestHandlerService) {}

  ngOnInit(): void {}

  Doget(): void {
    this.rest.getMockApiData().subscribe((res) => console.log(res));
  }
}
