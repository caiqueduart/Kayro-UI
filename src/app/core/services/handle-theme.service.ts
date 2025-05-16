import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleThemeService {
    toggleTheme(): void {
        const bodyClassList = document.querySelector('body')?.classList;
        const bodyClassListContainsDarkTheme = bodyClassList?.contains('dark-theme');

        if(bodyClassListContainsDarkTheme) {
            bodyClassList?.remove('dark-theme');
            bodyClassList?.add('light-theme');
        } else {
            bodyClassList?.remove('light-theme');
            bodyClassList?.add('dark-theme');
        }
    }
}
