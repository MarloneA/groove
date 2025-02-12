import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideTwitter } from '@ng-icons/lucide';
import { HeaderDarkModeComponent } from './header-dark-mode.component';
import { HeaderMobileNavComponent } from './header-mobile-nav.component';
import { HeaderThemePickerComponent } from './header-theme-picker.component';
import { HlmButtonDirective } from '../_ui/ui-button-helm/src';
import { HlmIconComponent } from '../_ui/ui-icon-helm/src';
import { NavLinkDirective } from '../../spartan-nav-link.directive';
import { SpartanLogoComponent } from '../../spartan-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    HlmButtonDirective,
    RouterLink,
    HlmIconComponent,
    HeaderThemePickerComponent,
    NavLinkDirective,
    HeaderMobileNavComponent,
    HeaderDarkModeComponent,
    SpartanLogoComponent,
  ],
  providers: [provideIcons({ lucideTwitter, lucideGithub })],
  host: {
    class: 'block sticky w-full top-0 z-40 bg-background/95 bg-blur-lg p-2 sm:px-4 border-b border-border',
  },
  template: `
		<div class="flex items-center justify-between w-full mx-auto max-w-screen-xl">
			<nav class="flex items-center">
				<a hlmBtn variant="ghost" class="mr-3 hidden p-1.5 sm:flex" routerLink="/">
					<spartan-logo class="w-14" />
					<span class="sr-only">spartan</span>
				</a>

				<spartan-mobile-nav class="sm:hidden" />

				<div class="hidden sm:flex sm:space-x-2">
					<a spartanNavLink="/login">Login</a>
					<a spartanNavLink="/music">Music</a>
				</div>
			</nav>

			<div class="flex space-x-2">
				<a href="https://github.com/MarloneA" target="_blank" size="sm" variant="ghost" hlmBtn>
					<span class="sr-only">Github</span>
					<hlm-icon name="lucideGithub" size="sm" />
				</a>
				<!-- <spartan-theme-picker /> -->
				<spartan-dark-mode />
			</div>
		</div>
	`,
})
export class HeaderComponent { }
