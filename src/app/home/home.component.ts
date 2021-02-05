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

  DoGetMSW(id?: number): void {
    this.rest.getMockApiData(id).subscribe((res) => console.log(res));
  }

  DoGetRXJS(id?: number): void {
    this.rest.mockRXJSAPI(id).subscribe((res) => console.log(res));
  }
}
