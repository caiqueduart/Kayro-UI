import { Component } from '@angular/core';
import { StickersComponent } from './components/stickers/stickers.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ShowcaseContainerComponent } from './components/showcase-container/showcase-container.component';

@Component({
    selector: 'kay-ui-demos',
    imports: [StickersComponent, WelcomeComponent, ShowcaseContainerComponent],
    templateUrl: './kayro-ui-demos.component.html',
    styleUrl: './kayro-ui-demos.component.scss',
})
export class KayroUiDemosComponent {}
