import { Component } from '@angular/core';
import { NavCategoryComponent } from '../../../../sys-navigation/components/nav-category/nav-category.component';
import { NavCategoryItemDirective } from '../../../../sys-navigation/directives/nav-category-item.directive';
import { RouterLink } from '@angular/router';
import { SYSTEM_NAVIGATION_CATEGORIES } from '../../../../sys-navigation/sys-navigation.data';

@Component({
    selector: 'kay-header-navigation',
    imports: [NavCategoryComponent, NavCategoryItemDirective, RouterLink],
    templateUrl: './header-navigation.component.html',
    styleUrl: './header-navigation.component.scss',
})
export class HeaderNavigationComponent {
    readonly systemNavigationCategories = SYSTEM_NAVIGATION_CATEGORIES;
}
