import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SysHeaderComponent} from './core/layout/sys-header/sys-header.component';
import {SysFooterComponent} from './core/layout/sys-footer/sys-footer.component';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {SysSidenavComponent} from './core/layout/sys-sidenav/sys-sidenav.component';

@Component({
  selector: 'app-root',
    imports: [
        RouterOutlet,
        SysHeaderComponent,
        SysFooterComponent,
        MatSidenavContainer,
        SysSidenavComponent,
        MatSidenav,
        MatSidenavContent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
