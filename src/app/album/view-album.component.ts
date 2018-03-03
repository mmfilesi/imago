import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.scss']
})
export class ViewAlbumComponent implements OnInit, OnDestroy {
  idAlbum: string;

  /* inject the activatated route */
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /* subscribe to the parameters observable.
      The Angular router will handle unsubscribing from ParamMap on its own.
    */
    this.route.paramMap.subscribe((params) => {
      this.idAlbum = params.get('idAlbum');
      this.initRest();
    });
  }

  ngOnDestroy() {

  }

  initRest() {
    console.log(this.idAlbum);
  }

}
