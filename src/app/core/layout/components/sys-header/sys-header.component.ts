import {Component} from '@angular/core';
import {NavCategoryComponent} from './sub-components/nav-category/nav-category.component';
import {NavCategoryItemDirective} from './directives/nav-category-item.directive';
import {RouterLink} from '@angular/router';
import {MatTooltip} from '@angular/material/tooltip';
import {NgOptimizedImage} from '@angular/common';
import {MenuToggleThemeComponent} from './sub-components/menu-toggle-theme/menu-toggle-theme.component';
import {HeaderNavigationComponent} from './sub-components/header-navigation/header-navigation.component';

@Component({
  selector: 'header[kay-sys-header]',
    imports: [
        NavCategoryComponent,
        NavCategoryItemDirective,
        RouterLink,
        MatTooltip,
        NgOptimizedImage,
        MenuToggleThemeComponent,
        HeaderNavigationComponent
    ],
  templateUrl: './sys-header.component.html',
  styleUrl: './sys-header.component.scss'
})
export class SysHeaderComponent { }
