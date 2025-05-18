import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'kay-nav-category',
    imports: [
        NgClass,
    ],
  templateUrl: './nav-category.component.html',
  styleUrl: './nav-category.component.scss'
})
export class NavCategoryComponent {
    @Input({required: true}) title!: string;

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
