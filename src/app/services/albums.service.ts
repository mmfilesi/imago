import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* Importamos Observable y los operadores que vayamos a utilizar */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ConfigService } from './config.service';

import { ThumbnailSchema } from '../schemas/thumbnail-schema';
import { AlbumSchema } from '../schemas/album-schema';

@Injectable()
export default class AlbumsService {

  private restStatus: any = {
    albums: {
      loading: false,
      success: false,
      error: false
    }
  };

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {
    // inicializamos restStatus
  }

  getAlbums(): Observable<ThumbnailSchema[]> {
    const url = 'mocks/albums.json'; // coger de config

    return this.http.get(url)
      .map( res => {
        return res.map(item => {
          return new ThumbnailSchema(
            item.id,
            item.slug,
            item.order,
            item.name,
            item.date,
            item.img,
            item.description
          );
        });
    });
  }

  getAlbum(albumSlug): Observable<AlbumSchema> {
    const url = 'mocks/albumMock.json'; // coger de config

    return this.http.get(url)
      .map( res => {
        return new AlbumSchema(
          res.mainData,
          res.galleries
        );
      });
    });
  }

  /*
  private initAlbums(albumsData): void {
    const len: number = Array.isArray(albumsData) ? albumsData.length : 0;
    let i = 0;

    for (; i < len; i++) {
      this.albums.push(new ThumbnailSchema(
        albumsData[i].id,
        albumsData[i].name,
        albumsData[i].date,
        albumsData[i].thumbnail,
        albumsData[i].shortDescription
      ));
    }
  }
  */

}

