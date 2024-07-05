// import type { RouteMeta } from '@analogjs/router';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { lucideLayers, lucidePuzzle, lucideStar } from '@ng-icons/lucide';
import { HlmButtonDirective } from '../../shared/components/_ui/ui-button-helm/src';
import { HlmBadgeDirective } from '../../shared/components/_ui/ui-badge-helm/src';
import { HlmCardContentDirective, HlmCardDescriptionDirective, HlmCardDirective, HlmCardHeaderDirective, HlmCardTitleDirective } from '../../shared/components/_ui/ui-card-helm/src';
import { HlmIconComponent } from '../../shared/components/_ui/ui-icon-helm/src';
import { HeaderComponent } from '../../shared/components/header/header.component';

const container = 'mx-auto flex flex-col items-center gap-4 text-center';
const subHeading = 'font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl';
const lead = 'leading-normal text-muted-foreground sm:text-xl sm:leading-8';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HlmButtonDirective,
    RouterLink,
    HlmBadgeDirective,
    HlmCardDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmCardDescriptionDirective,
    HlmCardContentDirective,
    HlmIconComponent,
    HeaderComponent
  ],
  host: {
    class: 'block p-4 pb-12 pt-6 sm:pb-24 sm:pt-12',
  },
  providers: [provideIcons({ lucideLayers, lucidePuzzle, lucideStar })],
  template: `
   <app-header/>
		<section class="pt-6 pb-8 space-y-6 md:pb-12 md:pt-10 lg:py-32">
			<div class="${container} max-w-[64rem]">
				<a
					target="_blank"
					href="https://github.com/goetzrobin/spartan"
					hlmBadge
					class="!bg-primary !text-foreground-primary !hover:bg-primary/90"
				>
					Discover new music.
				</a>
				<h1 class="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl">
					Curate the perfect playlist in a matter of seconds.
				</h1>
				<p class="${lead} max-w-[42rem]">
          Groove is a self-adapting music app that builds your perfect playlist based on your likes and dislikes.
          It will ask you what you like and then curate a perfect playlist for your next adventure/awakening/discovery.
          Let it set your soul on fire.
          Have fun!
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a hlmBtn size="lg" routerLink="/documentation">Get Started</a>
					<a
						hlmBtn
						size="lg"
						variant="outline"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/MarloneA/groove"
					>
						Check it out on github.
						<hlm-icon class="w-4 h-4 ml-2" name="lucideStar" />
					</a>
				</div>
			</div>
		</section>

		<section id="tools" class="py-8 space-y-6 md:py-12 lg:py-24">
			<div class="${container} max-w-[58rem]">
				<h2 class="${subHeading}">Supported Apps</h2>
				<p class="${lead} max-w-[42rem]">
					groove works with all popular music platforms to build you the perfect playlists,
          if you don't see your platform of choice below, don't worry we are actively shipping
          more updates.
				</p>
			</div>
			<div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
        @for (app of appList; track app.id) {
          <a routerLink="/stack" hlmCard class="group">
            <div hlmCardHeader>
              <hlm-icon class="group-hover:text-primary transition-colors" name="lucideLayers" size="xl" />
              <h3 hlmCardTitle>{{app.name}}</h3>
              <p hlmCardDescription>
                {{ app.desc }}
              </p>
            </div>
          </a>
        }
			</div>
		</section>
	`,
})
export class LandingComponent {

  appList = [
    {
      id: 1,
      name: "spotify",
      desc: "Generate new playlists, update current playlists build new genres and share your groove"
    },
    {
      id: 2,
      name: "apple music",
      desc: "Works seemlessly with apple music to deliver the best selection of music from your personal preferences."
    },
    {
      id: 3,
      name: "Deezer",
      desc: "Works seemlessly with deezer to deliver the best selection of music from your personal preferences."
    },
    {
      id: 4,
      name: "Youtube music",
      desc: "Works seemlessly with deezer to deliver the best selection of music from your personal preferences."
    },
    {
      id: 5,
      name: "soundcloud",
      desc: "Works seemlessly with deezer to deliver the best selection of music from your personal preferences."
    },
    {
      id: 5,
      name: "amazon music",
      desc: "Works seemlessly with deezer to deliver the best selection of music from your personal preferences."
    },
    {
      id: 5,
      name: "tidal",
      desc: "Works seemlessly with deezer to deliver the best selection of music from your personal preferences."
    },
    {
      id: 5,
      name: "qobuz",
      desc: "Works seemlessly with deezer to deliver the best selection of music from your personal preferences."
    },

  ]
}
