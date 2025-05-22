import { Component } from '@angular/core';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import {SYSTEM_NAVIGATION_CATEGORIES} from '../../navigation/sys-navigation.data';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'kay-sys-sidenav',
    imports: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, RouterLink],
    templateUrl: './sys-sidenav.component.html',
    styleUrl: './sys-sidenav.component.scss'
})
export class SysSidenavComponent {
    readonly systemNavigationCategories = SYSTEM_NAVIGATION_CATEGORIES;
}
