import { Component } from '@angular/core';
import { NavTitleServiceService } from './services/nav-title-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buycomparer';

  constructor(private navTitleService: NavTitleServiceService) {
    this.navTitleService.changeTitle.subscribe(newTitle => this.title = newTitle);
  }
}
