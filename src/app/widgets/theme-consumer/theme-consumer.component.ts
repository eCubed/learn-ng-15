import { ThemeService } from './../../theming/theme.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, Renderer2, ViewChildren } from '@angular/core';
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
  @ViewChildren("pTags", { read: ElementRef}) paragraphElements!: QueryList<ElementRef>

  currentTheme!: Theme;

  constructor(private themeService: ThemeService,
              private renderer: Renderer2) {
    this.themeSubscription = this.themeService.themeChanged$().subscribe((theme) => {
      console.log(`The chosen theme is: ${theme.name}`)
      this.currentTheme = theme;
      
      if (this.paragraphElements != null) {
        this.paragraphElements.forEach(pe => {
          this.renderer.setStyle(pe.nativeElement, 'color', this.currentTheme.mainColor);
        })
      }

    })
  }


  ngAfterViewInit(): void {
    console.log(`cont of html headings: ${this.paragraphElements.length }`)
    this.paragraphElements.forEach(pe => {
      this.renderer.setStyle(pe.nativeElement, 'color', this.currentTheme.mainColor);
    })
  }

  ngOnDestroy(): void {
    if(this.themeSubscription != null) {
      this.themeSubscription.unsubscribe();
    }
  }

}
