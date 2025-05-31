import { Component } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'kay-social-menu',
    imports: [MatTooltip, NgOptimizedImage],
    templateUrl: './social-menu.component.html',
    styleUrl: './social-menu.component.scss',
})
export class SocialMenuComponent {}
