import { Component, input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'kay-showcase-container',
    imports: [MatIconButton, MatIcon, MatTooltip, NgOptimizedImage],
    templateUrl: './showcase-container.component.html',
    styleUrl: './showcase-container.component.scss',
})
export class ShowcaseContainerComponent {
    hideWatermark = input<boolean>(false);
    protected isLoaded = true;

    protected reload(): void {
        this.isLoaded = false;

        setTimeout(() => {
            this.isLoaded = true;
        });
    }
}
