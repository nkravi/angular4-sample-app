import {OpaqueToken} from '@angular/core';

import {IAppConfig} from './iapp.config';

export let APP_CONFIG = new OpaqueToken('app.config');

let heroesRoute = 'heroes';
export const AppConfig: IAppConfig = {
  routes: {
    heroes: heroesRoute,
    heroById: heroesRoute + '/:id'
  },
  endpoints: {
    heroes: 'https://tour-of-heroes-sample-app.herokuapp.com/heroes',
    heroesPowers: 'https://tour-of-heroes-sample-app.herokuapp.com/heroesPowers'
  }
};
