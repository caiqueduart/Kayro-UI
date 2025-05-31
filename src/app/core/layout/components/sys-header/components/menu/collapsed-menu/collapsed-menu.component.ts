import { Component } from '@angular/core';
import { SocialMenuComponent } from '../social-menu/social-menu.component';
import { ToggleThemeButtonComponent } from '../toggle-theme-button/toggle-theme-button.component';

@Component({
    selector: 'kay-collapsed-menu',
    imports: [SocialMenuComponent, ToggleThemeButtonComponent],
    templateUrl: './collapsed-menu.component.html',
    styleUrl: './collapsed-menu.component.scss',
})
export class CollapsedMenuComponent {}
