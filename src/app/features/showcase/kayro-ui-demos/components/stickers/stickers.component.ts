import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'kay-stickers',
    imports: [CdkDrag, NgOptimizedImage],
    templateUrl: './stickers.component.html',
    styleUrl: './stickers.component.scss',
})
export class StickersComponent {}
