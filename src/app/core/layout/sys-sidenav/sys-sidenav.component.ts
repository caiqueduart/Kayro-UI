import { Component, Input } from '@angular/core';
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { SYSTEM_NAVIGATION_CATEGORIES } from '../../navigation/sys-navigation.data';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'kay-sys-sidenav',
    imports: [
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        RouterLink,
        MatIcon,
        MatIconButton,
        MatTooltip,
    ],
    templateUrl: './sys-sidenav.component.html',
    styleUrl: './sys-sidenav.component.scss',
})
export class SysSidenavComponent {
    @Input() systemSidenav!: MatSidenav;
    readonly systemNavigationCategories = SYSTEM_NAVIGATION_CATEGORIES;

    closeSystemSidenav(): void {
        this.systemSidenav.close().then();
    }
}
