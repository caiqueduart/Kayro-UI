import { Component } from '@angular/core';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';

@Component({
    selector: 'kay-sys-sidenav',
    imports: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle],
    templateUrl: './sys-sidenav.component.html',
    styleUrl: './sys-sidenav.component.scss'
})
export class SysSidenavComponent {

}
