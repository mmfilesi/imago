/* Importamos las piezas del core que vamos a necesitar */
import { Component, OnInit, OnDestroy } from '@angular/core';

/* Router para gestionar las rutas */
import {Router} from '@angular/router';

/* Los servicios que utiliza este componente */
import AlbumsService from '../services/albums.service';

/* La clase que nos sirve de referencia para el tipado */
import { ThumbnailSchema } from '../schemas/thumbnail-schema';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss'],
  /* servicios que va a usar */
  providers: [AlbumsService]
})

export class ViewHomeComponent implements OnInit, OnDestroy {
  albumsLayout;
  albumsSuscriber;

  constructor(
    private router: Router,
    private _albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  ngOnDestroy() {
    this.albumsSuscriber.unsubscribe();
  }

  getAlbums() {
    this.albumsSuscriber = this._albumsService.getAlbums().subscribe( data => {
      this.albumsLayout = data;
    });
  }

  goAlbum(idAlbum) {
    this.router.navigate(['album', idAlbum]);
  }

  trackByAlbumId(index: number, album: ThumbnailSchema): string {
    return album.id;
  }
}
