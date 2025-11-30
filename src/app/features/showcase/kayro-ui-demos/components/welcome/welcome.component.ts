import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'kay-welcome',
    imports: [NgClass],
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements AfterViewInit {
    private _observer!: IntersectionObserver;
    private readonly _host = inject(ElementRef);
    protected startAnime = false;

    ngAfterViewInit(): void {
        this._observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    this.startAnime = true;
                    this._observer.disconnect();
                }
            },
            { threshold: 0.6 }, // começa quando 100% do elemento estiver visível
        );

        this._observer.observe(this._host.nativeElement);
    }

    ngOnDestroy(): void {
        this._observer?.disconnect();
    }
}
