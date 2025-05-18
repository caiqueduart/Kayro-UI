import { Component } from '@angular/core';
import {MatTooltip} from "@angular/material/tooltip";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'kay-menu-social',
    imports: [
        MatTooltip,
        NgOptimizedImage
    ],
  templateUrl: './menu-social.component.html',
  styleUrl: './menu-social.component.scss'
})
export class MenuSocialComponent {

}
