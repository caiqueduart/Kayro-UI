import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';
import {KayroUiFeaturesComponent} from './kayro-ui-features/kayro-ui-features.component';
import {KayroUiIntroComponent} from './kayro-ui-intro/kayro-ui-intro.component';

@Component({
  selector: 'kay-showcase',
    imports: [
        MatButton,
        NgOptimizedImage,
        KayroUiFeaturesComponent,
        KayroUiIntroComponent
    ],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss'
})
export class ShowcaseComponent {

}
