import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'kay-ui-intro',
    imports: [MatButton, NgOptimizedImage],
    templateUrl: './kayro-ui-intro.component.html',
    styleUrl: './kayro-ui-intro.component.scss',
})
export class KayroUiIntroComponent {}
