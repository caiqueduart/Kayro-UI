import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleThemeService {
    toggleTheme(): void {
        const body = document.querySelector('body');
        const bodyClassList = body?.classList;
        const bodyClassListContainsDarkTheme = bodyClassList?.contains('dark-theme');

        if(bodyClassListContainsDarkTheme) {
            body?.classList.remove('dark-theme');
            body?.classList.add('light-theme');
        } else {
            body?.classList.remove('light-theme');
            body?.classList.add('dark-theme');
        }
    }
}
