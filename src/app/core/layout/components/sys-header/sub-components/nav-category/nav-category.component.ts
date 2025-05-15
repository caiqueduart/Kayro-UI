import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

interface NavCategoryItem {
    name: string,
    routerTo: string
}

@Component({
  selector: 'kay-nav-category',
    imports: [
        RouterLink,
        NgClass,
    ],
  templateUrl: './nav-category.component.html',
  styleUrl: './nav-category.component.scss'
})
export class NavCategoryComponent {
    @Input({required: true}) name!: string;
    @Input({required: true}) itens!: NavCategoryItem[];

    isHidden: boolean = true;

    openItemsList(): void {
        this.isHidden = false;
    }

    closeItemsList(): void {
        this.isHidden = true;
    }

    toggleItemsList(): void {
        this.isHidden = !this.isHidden;
    }
}
