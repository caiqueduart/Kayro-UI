import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SysHeaderComponent } from './core/layout/sys-header/sys-header.component';
import { SysFooterComponent } from './core/layout/sys-footer/sys-footer.component';
import {
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
} from '@angular/material/sidenav';
import { SysSidenavComponent } from './core/layout/sys-sidenav/sys-sidenav.component';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        SysHeaderComponent,
        SysFooterComponent,
        MatSidenavContainer,
        SysSidenavComponent,
        MatSidenav,
        MatSidenavContent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    @ViewChild('systemSidenav') systemSidenav!: MatSidenav;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.breakpointObserver
            .observe(['(max-width: 768px)'])
            .subscribe((result) => {
                const isTabletScreen = result.matches;

                if (!isTabletScreen && this.systemSidenav) {
                    this.closeSystemSidenav();
                }
            });
    }

    closeSystemSidenav(): void {
        this.systemSidenav.close().then();
    }
}
