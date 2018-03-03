import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})

export class MainHeaderComponent {
  mainTitle: string;

  constructor(private router: Router) {
    this.mainTitle = 'Cuadernos';
  }

  goHome() {
    this.router.navigate(['home']);
  }
}

/* https://angular.io/guide/styleguide#!#02-07 */