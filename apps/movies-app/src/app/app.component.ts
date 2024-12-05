import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppShellComponent } from './app-shell/app-shell.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, AppShellComponent],
  selector: 'ens-root',
  template: `
    <app-shell>
      <h1>A title</h1>
      <router-outlet />
    </app-shell>
  `,
})
export class AppComponent {
  title = 'movies';
}
