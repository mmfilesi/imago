import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import AlbumsService from '../services/albums.service';

import { GallerySchema } from '../schemas/gallery-schema';
import { AlbumSchema } from '../schemas/album-schema';
import { ThumbnailSchema } from '../schemas/thumbnail-schema';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss'],
  providers: [AlbumsService]
})
export class ViewAlbumComponent implements OnInit, OnDestroy {

  thumbailActive: ThumbnailSchema;
  showViewport = false;

  albumSlug: string;
  albumSuscriber: any;
  galleryActive: string;
  albumData: any = {
    mainData: {},
    galleries: []
  };

  /* inject the activatated route */
  constructor(
    private route: ActivatedRoute,
    private _albumsService: AlbumsService
  ) {}


/* ========================================================
  hooks
======================================================== */

  ngOnInit() {
    /* subscribe to the parameters observable.
      The Angular router will handle unsubscribing from ParamMap on its own.
    */
    this.route.paramMap.subscribe((params) => {
      this.albumSlug = params.get('albumSlug');
      this.initRest();
    });
  }

  /* Hay que desuscribir los suscribers propios */
  ngOnDestroy() {
    this.albumSuscriber.unsubscribe();
  }

/* ========================================================
  rest
======================================================== */

  initRest() {
    this.getAlbum();
  }

  getAlbum() {
    this.albumSuscriber = this._albumsService.getAlbum(this.albumSlug).subscribe( (data: AlbumSchema) => {
      this.albumData     = data;
      this.galleryActive = this.albumData.galleries[0].id;
    });
  }

/* ========================================================
  layout
======================================================== */

  trackByGalleryId(index: number, gallery: GallerySchema): string {
    return gallery.id;
  }

  trackByThumbnailId(index: number, thumbnail: ThumbnailSchema): string {
    return thumbnail.id;
  }

/* ========================================================
  actions
======================================================== */

  setGallery(idGallery: string): void {
    this.galleryActive = idGallery;
  }

  hideViewport(): void {
    this.showViewport = false;
  }

  openViewport(thumbnail: ThumbnailSchema): void {
    this.showViewport = true;
    this.thumbailActive = thumbnail;
  }

  showImg(thumbnail: ThumbnailSchema): void {
    this.openViewport(thumbnail);
  }

}
