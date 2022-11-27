import { ThemeService } from './../../theming/theme.service';
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Theme } from 'src/app/theming/theme';

@Component({
  selector: 'theme-consumer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-consumer.component.html',
  styleUrls: ['./theme-consumer.component.scss']
})
export class ThemeConsumerComponent implements AfterViewInit, OnDestroy {

  themeSubscription: Subscription
  cssStyle!: Record<string, string | undefined | null>;

  currentTheme!: Theme;

  // overridable properties
  @Input()
  padding: string | null = null;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService.themeChanged$().subscribe((theme) => {
      this.currentTheme = theme
      // this.updateStyles()
    })
  }

  updateStyles() {

   this.cssStyle = {
    color: this.currentTheme.mainColor,
    padding: this.padding ?? '1rem'
   }

  }

  ngAfterViewInit(): void {
    // this.updateStyles();
  }

  ngOnDestroy(): void {
    if(this.themeSubscription != null) {
      this.themeSubscription.unsubscribe();
    }
  }

}
