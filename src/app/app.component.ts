import { Component, Input } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'E-Learning';
  show: boolean = false;

  func() {
    console.log('called');
  }
}
