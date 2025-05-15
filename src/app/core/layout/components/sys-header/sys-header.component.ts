import {Component} from '@angular/core';
import {NavCategoryComponent} from './sub-components/nav-category/nav-category.component';
import {NavCategoryItemDirective} from './directives/nav-category-item.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'header[kay-sys-header]',
    imports: [
        NavCategoryComponent,
        NavCategoryItemDirective,
        RouterLink
    ],
  templateUrl: './sys-header.component.html',
  styleUrl: './sys-header.component.scss'
})
export class SysHeaderComponent { }
