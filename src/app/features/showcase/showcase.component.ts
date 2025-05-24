import { Component } from '@angular/core';
import { KayroUiFeaturesComponent } from './kayro-ui-features/kayro-ui-features.component';
import { KayroUiIntroComponent } from './kayro-ui-intro/kayro-ui-intro.component';
import { KayroUiCompatibilityComponent } from './kayro-ui-compatibility/kayro-ui-compatibility.component';
import { KayroUiDemosComponent } from './kayro-ui-demos/kayro-ui-demos.component';

@Component({
    selector: 'kay-showcase',
    imports: [
        KayroUiFeaturesComponent,
        KayroUiIntroComponent,
        KayroUiCompatibilityComponent,
        KayroUiDemosComponent,
    ],
    templateUrl: './showcase.component.html',
    styleUrl: './showcase.component.scss',
})
export class ShowcaseComponent {}
