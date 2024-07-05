// import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { metaWith } from '../../shared/meta/meta.util';

import { AuthenticationFormComponent } from './components/form.component';
import { HlmButtonDirective } from '../../shared/components/_ui/ui-button-helm/src';
import { HlmCardDirective } from '../../shared/components/_ui/ui-card-helm/src';

// export const routeMeta: RouteMeta = {
// 	meta: metaWith('spartan/examples - Authentication', 'An authenticaton example using spartan UI primitive'),
// 	title: 'spartan/examples - Authentication',
// };

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [AuthenticationFormComponent, HlmButtonDirective, HlmCardDirective],
  host: {
    class: 'block',
  },
  template: `
    <div class="flex flex-col items-center justify-center h-screen md:grid lg:max-w-none lg:grid-cols-2">
      <a
        hlmBtn
        variant="ghost"
        class="absolute right-4 top-4 md:top-8 md:right-8"
        href="/login">
        Login
      </a>
      <div class="bg-muted relative hidden h-full flex-col border-r p-10 text-white lg:flex dark:border-r-zinc-800">
        <div class="absolute inset-0 bg-zinc-900"></div>
        <div class="relative z-20 flex items-center text-lg font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="480" height="480" viewBox="0 0 172 172" style="fill:#26e07f;">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#1fb141">
                <path d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"></path>
              </g>
            </g>
          </svg>
          <a href="/">
            Groove Inc
          </a>
        </div>
        <div class="relative z-20 mt-auto">
          <blockquote class="space-y-2">
            <p class="text-lg">
              "One good thing about music, when it hits you feel no pain”
            </p>
            <footer class="text-sm">Bob Marley</footer>
          </blockquote>
        </div>
      </div>
      <div class="lg:p-8">
        <auth-example-form />
      </div>
    </div>
	`,
})
export default class TypographyPageComponent { }
