import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theming/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learn-ng-15';
  constructor(private themeService: ThemeService) {

  }

  ngOnInit(): void {
    const themeNameToLoad = localStorage.getItem('themeName') ?? 'Classic Blue'
    this.themeService.changeTheme(themeNameToLoad)
  }
}
