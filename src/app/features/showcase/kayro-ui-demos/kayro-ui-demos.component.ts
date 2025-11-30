import { Component } from '@angular/core';
import { DragAnimalsComponent } from './components/drag-animals/drag-animals.component';

@Component({
    selector: 'kay-ui-demos',
    imports: [DragAnimalsComponent],
    templateUrl: './kayro-ui-demos.component.html',
    styleUrl: './kayro-ui-demos.component.scss',
})
export class KayroUiDemosComponent {}
