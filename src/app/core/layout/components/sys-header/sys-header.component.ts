import {Component} from '@angular/core';
import {NavCategoryComponent} from './sub-components/nav-category/nav-category.component';
import {NavCategoryItemDirective} from './directives/nav-category-item.directive';
import {RouterLink} from '@angular/router';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatTooltip} from '@angular/material/tooltip';
import {NgOptimizedImage} from '@angular/common';
import {NavToggleThemeComponent} from './sub-components/nav-toggle-theme/nav-toggle-theme.component';

@Component({
  selector: 'header[kay-sys-header]',
    imports: [
        NavCategoryComponent,
        NavCategoryItemDirective,
        RouterLink,
        MatSlideToggle,
        MatTooltip,
        NgOptimizedImage,
        NavToggleThemeComponent
    ],
  templateUrl: './sys-header.component.html',
  styleUrl: './sys-header.component.scss'
})
export class SysHeaderComponent { }
