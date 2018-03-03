import {Injectable} from '@angular/core';

// seteamos esto al principio https://angular.io/api/core/APP_INITIALIZER

@Injectable()
export class ConfigService {
  private config: any = {
    environment: 'mock',
    rest: {
      baseUrl: {
        mock: '',
        dev: '',
        prod: ''
      }
    }
  };

  constructor() {}

  getBaseUrl(): string {
    return 'lllll';
  }

}
