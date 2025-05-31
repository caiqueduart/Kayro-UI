import { Directive } from '@angular/core';

@Directive({
    selector: 'a[kay-nav-category-item]',
    host: { class: 'kay-nav-category-item' },
})
export class NavCategoryItemDirective {}
