import {
	ChangeDetectionStrategy,
	Component,
	ViewEncapsulation,
	computed,
	effect,
	inject,
	input,
	untracked,
} from '@angular/core';
import { lucideArrowLeft } from '@ng-icons/lucide';
// import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { hlm } from '@spartan-ng/ui-core';
import { HlmIconComponent, provideIcons } from '../../../ui-icon-helm/src';
import type { ClassValue } from 'clsx';
import { HlmCarouselComponent } from './hlm-carousel.component';
import { HlmButtonDirective } from '../../../ui-button-helm/src';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'button[hlm-carousel-previous], button[hlmCarouselPrevious]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[disabled]': 'isDisabled()',
		'(click)': 'carousel.scrollPrev()',
	},
	hostDirectives: [{ directive: HlmButtonDirective, inputs: ['variant', 'size'] }],
	providers: [provideIcons({ lucideArrowLeft })],
	imports: [HlmIconComponent],
	template: `
		<hlm-icon size="sm" name="lucideArrowLeft" />
		<span class="sr-only">Previous slide</span>
	`,
})
export class HlmCarouselPreviousComponent {
	protected carousel = inject(HlmCarouselComponent);
	_userClass = input<ClassValue>('', { alias: 'class' });
	protected _computedClass = computed(() =>
		hlm(
			'absolute h-8 w-8 rounded-full',
			this.carousel.orientation() === 'horizontal'
				? '-left-12 top-1/2 -translate-y-1/2'
				: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
			this._userClass(),
		),
	);
	protected isDisabled = () => !this.carousel.canScrollPrev();

	constructor() {
		const button = inject(HlmButtonDirective);

		button.variant = 'outline';
		button.size = 'icon';

		effect(() => {
			const computedClass = this._computedClass();

			untracked(() => button.setClass(computedClass));
		});
	}
}
