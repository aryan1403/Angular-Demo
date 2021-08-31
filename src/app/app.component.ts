import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './getData';
import { service } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  names: Observable<any>;
  errorMessage = '';
  constructor(private name: service) {
     this.names = this.name.getName();
      console.log(this.names);
    }
}
