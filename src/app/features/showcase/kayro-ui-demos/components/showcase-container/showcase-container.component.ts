import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'kay-showcase-container',
    imports: [MatIconButton, MatIcon, MatTooltip],
    templateUrl: './showcase-container.component.html',
    styleUrl: './showcase-container.component.scss',
})
export class ShowcaseContainerComponent {
    protected isLoaded = true;

    protected reload(): void {
        this.isLoaded = false;

        setTimeout(() => {
            this.isLoaded = true;
        });
    }
}
