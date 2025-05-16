import {Component} from '@angular/core';
import {NavCategoryComponent} from './sub-components/nav-category/nav-category.component';
import {NavCategoryItemDirective} from './directives/nav-category-item.directive';
import {RouterLink} from '@angular/router';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {HandleThemeService} from '../../../services/handle-theme.service';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'header[kay-sys-header]',
    imports: [
        NavCategoryComponent,
        NavCategoryItemDirective,
        RouterLink,
        MatSlideToggle,
        MatTooltip
    ],
  templateUrl: './sys-header.component.html',
  styleUrl: './sys-header.component.scss'
})
export class SysHeaderComponent {
    constructor(private handleThemeService: HandleThemeService) {}

    toggleTheme(): void {
        this.handleThemeService.toggleTheme();
    }
}
