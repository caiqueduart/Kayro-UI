import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatTooltip } from '@angular/material/tooltip';
import { HandleThemeService } from '../../../../../../services/handle-theme.service';
import { moonIcon, sunIcon } from '../../../models/toggle-theme-button.model';

@Component({
    selector: 'kay-toggle-theme-button',
    imports: [MatSlideToggle, MatTooltip],
    templateUrl: './toggle-theme-button.component.html',
    styleUrl: './toggle-theme-button.component.scss',
})
export class ToggleThemeButtonComponent implements AfterViewInit {
    constructor(private handleThemeService: HandleThemeService) {}

    @ViewChild('toggleThemeButton', { read: ElementRef }) element:
        | ElementRef
        | undefined;

    ngAfterViewInit(): void {
        if (this.element) {
            const toggleThemeButton = this.element.nativeElement;
            const switchIconOn = toggleThemeButton.querySelector(
                '.mdc-switch__icon--on',
            ).firstChild;
            const switchIconOff = toggleThemeButton.querySelector(
                '.mdc-switch__icon--off',
            ).firstChild;

            switchIconOn.setAttribute('d', moonIcon);
            switchIconOff.setAttribute('d', sunIcon);
        }
    }

    toggleTheme(): void {
        this.handleThemeService.toggleTheme();
    }
}
