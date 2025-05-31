import { Component, Input } from '@angular/core';
import { ToggleThemeButtonComponent } from './components/menu/toggle-theme-button/toggle-theme-button.component';
import { SocialMenuComponent } from './components/menu/social-menu/social-menu.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { CollapsedMenuComponent } from './components/menu/collapsed-menu/collapsed-menu.component';
import { MatSidenav } from '@angular/material/sidenav';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';

@Component({
    selector: 'header[kay-sys-header]',
    imports: [
        ToggleThemeButtonComponent,
        HeaderNavigationComponent,
        SocialMenuComponent,
        MatIcon,
        MatIconButton,
        MatMenu,
        MatMenuTrigger,
        CollapsedMenuComponent,
    ],
    templateUrl: './sys-header.component.html',
    styleUrl: './sys-header.component.scss',
})
export class SysHeaderComponent {
    @Input() systemSidenav!: MatSidenav;

    toggleSystemSidenav(): void {
        this.systemSidenav.toggle().then();
    }
}
