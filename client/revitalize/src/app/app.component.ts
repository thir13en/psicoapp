import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  name = 'User name';

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.apiService.get('massages').subscribe((res: any) => console.log(res));
  }

  submit(form: NgForm): void {
    console.log(form);
    debugger;
  }

}