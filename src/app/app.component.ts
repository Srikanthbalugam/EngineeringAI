import { Component } from '@angular/core';
import { TestService } from './test.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getApiData: any;
  rowJsonData: any;

  constructor(private testService: TestService) {
    // This is for time period
    var time = timer(0, 10000);
    var x = time.subscribe(() => {
      this.testService.getDetails().subscribe((details) => {
        this.getApiData = details['hits'];
        console.log(this.getApiData)
      })
    })
  }

  getRowDetails(x) {
    return this.rowJsonData = x;
  }
}
