import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themes: Theme[] = [
    { name: 'Classic Blue', mainColor: '#000088', linkColor: '#1aa6c4' },
    { name: 'Sylvan', mainColor: '#008800', linkColor: '#8cbd1a' }
  ]

  themeSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this.themes[0])

  constructor() { }

  changeTheme(themeName: string) {
    this.themeSubject.next(this.themes.find(t => t.name === themeName) ?? this.themes[0])
  }

  themeChanged$(): Observable<Theme> {
    return this.themeSubject.asObservable()
  }
}
