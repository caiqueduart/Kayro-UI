import { Component } from '@angular/core';
import {MenuSocialComponent} from '../menu-social/menu-social.component';
import {MenuToggleThemeComponent} from '../menu-toggle-theme/menu-toggle-theme.component';

@Component({
  selector: 'kay-menu-collapsed',
    imports: [
        MenuSocialComponent,
        MenuToggleThemeComponent
    ],
  templateUrl: './menu-collapsed.component.html',
  styleUrl: './menu-collapsed.component.scss'
})
export class MenuCollapsedComponent {

}
