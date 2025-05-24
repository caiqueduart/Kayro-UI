import { Directive } from '@angular/core';

@Directive({
    selector: 'a[kay-header-nav-category-item]',
    host: { class: 'kay-header-nav-category-item' },
})
export class NavCategoryItemDirective {}
