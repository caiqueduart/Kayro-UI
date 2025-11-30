import { Component } from '@angular/core';
import { StickersComponent } from './components/stickers/stickers.component';

@Component({
    selector: 'kay-ui-demos',
    imports: [StickersComponent],
    templateUrl: './kayro-ui-demos.component.html',
    styleUrl: './kayro-ui-demos.component.scss',
})
export class KayroUiDemosComponent {}
