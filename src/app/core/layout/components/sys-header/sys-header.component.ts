import {Component} from '@angular/core';
import {NavCategoryComponent} from './sub-components/nav-category/nav-category.component';

@Component({
  selector: 'header[kay-sys-header]',
    imports: [
        NavCategoryComponent
    ],
  templateUrl: './sys-header.component.html',
  styleUrl: './sys-header.component.scss'
})
export class SysHeaderComponent { }
