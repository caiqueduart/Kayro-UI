import { Component } from '@angular/core';
import { MenuSocialComponent } from '../menu-social/menu-social.component';
import { ToggleThemeButtonComponent } from '../toggle-theme-button/toggle-theme-button.component';

@Component({
    selector: 'kay-menu-collapsed',
    imports: [MenuSocialComponent, ToggleThemeButtonComponent],
    templateUrl: './menu-collapsed.component.html',
    styleUrl: './menu-collapsed.component.scss',
})
export class MenuCollapsedComponent {}
