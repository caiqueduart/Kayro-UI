import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'kay-drag-animals',
    imports: [CdkDrag, NgOptimizedImage],
    templateUrl: './drag-animals.component.html',
    styleUrl: './drag-animals.component.scss',
})
export class DragAnimalsComponent {}
