import {Component} from '@angular/core';
import {MenuToggleThemeComponent} from './sub-components/menu/menu-toggle-theme/menu-toggle-theme.component';
import {HeaderNavigationComponent} from './sub-components/navigation/header-navigation/header-navigation.component';
import {MenuSocialComponent} from './sub-components/menu/menu-social/menu-social.component';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {MenuCollapsedComponent} from './sub-components/menu/menu-collapsed/menu-collapsed.component';

@Component({
    selector: 'header[kay-sys-header]',
    imports: [
        MenuToggleThemeComponent,
        HeaderNavigationComponent,
        MenuSocialComponent,
        MatIcon,
        MatIconButton,
        MatMenu,
        MatMenuTrigger,
        MenuCollapsedComponent
    ],
    templateUrl: './sys-header.component.html',
    styleUrl: './sys-header.component.scss'
})
export class SysHeaderComponent { }
