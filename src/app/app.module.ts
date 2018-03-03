/* =======================================================================
  core
======================================================================= */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

/* =======================================================================
  services
======================================================================= */

import { ConfigService } from './services/config.service';

/* =======================================================================
  components
======================================================================= */

import { AppComponent } from './app.component';

/* layout */
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainSidebarComponent } from './common/main-sidebar/main-sidebar.component';

/* views */
import { ViewHomeComponent } from './home/view-home.component';
import { ViewAlbumComponent } from './album/view-album.component';

/* components */
import { ThumbnailComponent } from './common/layout/thumbnail/thumbnail.component';
import { SliderComponent } from './common/ui/slider/slider.component';

/* Routes */
const appRoutes: Routes = [
  { path: 'home', component: ViewHomeComponent },
  { path: 'album/:idAlbum', component: ViewAlbumComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainSidebarComponent,
    ViewHomeComponent,
    ViewAlbumComponent,
    ThumbnailComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// https://coursetro.com/posts/code/110/Creating-and-Using-Angular-5-Services
// http://reactivex.io/rxjs/class/es6/Subscription.js~Subscription.html
// http://blog.enriqueoriol.com/2016/07/introduccion-angular-2-parte-iii-servicios.html
// ** https://codecraft.tv/courses/angular/http/http-with-observables/
// https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-a5b791ece755