import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavCategoryComponent} from './sub-components/nav-category/nav-category.component';
import {NavCategoryItemDirective} from './directives/nav-category-item.directive';
import {RouterLink} from '@angular/router';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {HandleThemeService} from '../../../services/handle-theme.service';
import {MatTooltip} from '@angular/material/tooltip';
import {moonIcon, sunIcon} from './models/toggle-theme-button.model';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'header[kay-sys-header]',
    imports: [
        NavCategoryComponent,
        NavCategoryItemDirective,
        RouterLink,
        MatSlideToggle,
        MatTooltip,
        NgOptimizedImage
    ],
  templateUrl: './sys-header.component.html',
  styleUrl: './sys-header.component.scss'
})
export class SysHeaderComponent implements AfterViewInit {

    constructor(private handleThemeService: HandleThemeService) {}

    @ViewChild('toggleThemeButton', { read: ElementRef }) element: ElementRef | undefined;

    ngAfterViewInit(): void {

        if (this.element) {
            const toggleThemeButton = this.element.nativeElement;
            const switchIconOn = toggleThemeButton.querySelector('.mdc-switch__icon--on').firstChild;
            const switchIconOff = toggleThemeButton.querySelector('.mdc-switch__icon--off').firstChild;

            switchIconOn.setAttribute('d', moonIcon);
            switchIconOff.setAttribute('d', sunIcon);
        }
    }

    toggleTheme(): void {
        this.handleThemeService.toggleTheme();
    }
}
