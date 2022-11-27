import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from './theme';
import { themes } from './themes';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themes: Theme[] = themes

  themeSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this.themes[0])

  constructor() { }

  changeTheme(themeName: string) {

    const newTheme = this.themes.find(t => t.name === themeName) ?? this.themes[0]

    document.documentElement.style.setProperty(`--main-color`, newTheme.mainColor)
    document.documentElement.style.setProperty(`--link-color`, newTheme.linkColor)
    document.documentElement.style.setProperty(`--error-color`, newTheme.errorColor)
    document.documentElement.style.setProperty(`--border-radius`, newTheme.borderRadius)
    document.documentElement.style.setProperty(`--system-background-color`, newTheme.systemBackgroundColor)
    document.documentElement.style.setProperty(`--text-color`, newTheme.textColor)
    document.documentElement.style.setProperty(`--gap`, newTheme.gap)
    document.documentElement.style.setProperty(`--padding`, newTheme.padding)
    document.documentElement.style.setProperty(`--margin`, newTheme.margin)

    localStorage.setItem('themeName', newTheme.name);

    this.themeSubject.next(newTheme)
  }

  themeChanged$(): Observable<Theme> {
    return this.themeSubject.asObservable()
  }
}
