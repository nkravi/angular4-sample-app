import {Component, Input} from '@angular/core';

import {Hero} from '../shared/hero.model';

import {HeroService} from '../shared/hero.service';

@Component({
  selector: 'toh-hero-create-new',
  templateUrl: 'hero-create-new.component.html',
  styleUrls: ['hero-create-new.component.scss']
})

export class HeroFormComponent {
  @Input() heroes: Hero[];
  @Input() selectedHero: Hero;

  hero: Hero;
  powers: string[];
  error: string;

  constructor(private heroService: HeroService) {
    this.hero = new Hero('', '', '');

    this.heroService.getHeroesPowers().then(powers => this.powers = powers);
  }

  onSubmit() {
    this.heroService.create(this.hero)
      .then(() => {
        this.selectedHero = null;
      }, (response) => {
        if (response.status === 500) {
          this.error = 'heroDuplicated';
        }
      });
  }
}
