import {Component} from '@angular/core';
import {MenuToggleThemeComponent} from './sub-components/menu/menu-toggle-theme/menu-toggle-theme.component';
import {HeaderNavigationComponent} from './sub-components/navigation/header-navigation/header-navigation.component';
import {MenuSocialComponent} from './sub-components/menu/menu-social/menu-social.component';

@Component({
  selector: 'header[kay-sys-header]',
    imports: [
        MenuToggleThemeComponent,
        HeaderNavigationComponent,
        MenuSocialComponent
    ],
  templateUrl: './sys-header.component.html',
  styleUrl: './sys-header.component.scss'
})
export class SysHeaderComponent { }
