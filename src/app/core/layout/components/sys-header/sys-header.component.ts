import {Component} from '@angular/core';
import {MatTooltip} from '@angular/material/tooltip';
import {NgOptimizedImage} from '@angular/common';
import {MenuToggleThemeComponent} from './sub-components/menu-toggle-theme/menu-toggle-theme.component';
import {HeaderNavigationComponent} from './sub-components/header-navigation/header-navigation.component';
import {MenuSocialComponent} from './sub-components/menu-social/menu-social.component';

@Component({
  selector: 'header[kay-sys-header]',
    imports: [
        MatTooltip,
        NgOptimizedImage,
        MenuToggleThemeComponent,
        HeaderNavigationComponent,
        MenuSocialComponent
    ],
  templateUrl: './sys-header.component.html',
  styleUrl: './sys-header.component.scss'
})
export class SysHeaderComponent { }
