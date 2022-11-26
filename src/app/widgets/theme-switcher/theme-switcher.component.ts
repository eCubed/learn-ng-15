import { FormsModule } from '@angular/forms';
import { ThemeService } from './../../theming/theme.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'theme-switcher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent{

  selectedThemeName: string = 'Classic Blue'

  constructor(private themeService: ThemeService) {

  }

  onSelectedThemeNameChange(newThemeName: string) {
    console.log(`Change theme to: ${newThemeName}`)
    this.themeService.changeTheme(newThemeName)
  }
}
