import { Component, Input } from '@angular/core';
import { ToggleThemeButtonComponent } from './sub-components/menu/toggle-theme-button/toggle-theme-button.component';
import { HeaderNavigationComponent } from './sub-components/navigation/header-navigation/header-navigation.component';
import { MenuSocialComponent } from './sub-components/menu/menu-social/menu-social.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { MenuCollapsedComponent } from './sub-components/menu/menu-collapsed/menu-collapsed.component';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'header[kay-sys-header]',
    imports: [
        ToggleThemeButtonComponent,
        HeaderNavigationComponent,
        MenuSocialComponent,
        MatIcon,
        MatIconButton,
        MatMenu,
        MatMenuTrigger,
        MenuCollapsedComponent,
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
