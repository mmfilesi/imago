import { Component, OnInit, OnDestroy, Input, Output, HostListener, EventEmitter } from '@angular/core';

import { GallerySchema } from '../../schemas/gallery-schema';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent implements OnInit, OnDestroy {
  @Input()  galleries: Array<GallerySchema>;
  @Input()  idItemActive: string;
  @Output() clickCloseViewport: EventEmitter<string> = new EventEmitter<string>();

  constructor(
  ) {}

  private indexGalleryActive: number;
  private indexImgActive: number;

  viewport: any = {
    imagePath: '',
    imageName: '',
    imageDescription: '',
    galleryName: '',
    show: false
  };

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keydownViewport(event);
  }


/* ========================================================
  hooks
======================================================== */

  ngOnInit() {
    this.initView();
    this.setActiveById(this.idItemActive);
  }

  ngOnDestroy() {
  }


/* ========================================================
  actions
======================================================== */

  initView(): void {
    document.getElementById('main-app').classList.add('hideScroll');
  }

  setActiveById(idThumbnail: string): void {
    const len: number = this.galleries.length;
    let lem: number;
    let i = 0;
    let c = 0;

    for (; i < len; i ++) {
      lem = this.galleries[i].list.length;
      c = 0;
      for (; c < lem; c++) {
        if (this.galleries[i].list[c].id === idThumbnail) {
          this.indexGalleryActive = i;
          this.indexImgActive = c;
          break;
        }
      }
    }

    this.setViewportData();
  }

  setViewportData(): void {
    this.viewport.galleryName       = this.galleries[this.indexGalleryActive].name;
    this.viewport.imagePath         = this.galleries[this.indexGalleryActive].list[this.indexImgActive].img;
    this.viewport.imageName         = this.galleries[this.indexGalleryActive].list[this.indexImgActive].name;
    this.viewport.imageDescription  = this.galleries[this.indexGalleryActive].list[this.indexImgActive].description;
  }

  hideViewport(): void {
    document.getElementById('main-app').classList.remove('hideScroll');
    this.clickCloseViewport.emit();
  }

  keydownViewport(event: KeyboardEvent): void {
    if (this.viewport.show) {
      switch (event.keyCode) {
        case 32:
        case 39:
        case 40:
        this.showNextImg();
        break;
        case 37:
        case 38:
        this.showPrevImg();
        break;
        case 13:
        case 27:
        this.hideViewport();
        break;
        default:
      }
    }
  }

  showNextImg(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }

    if (this.indexGalleryActive + 1 === this.galleries.length &&
      this.indexImgActive + 1 === this.galleries[this.indexGalleryActive].list.length) {
      this.indexGalleryActive = 0;
      this.indexImgActive = 0;

    } else if (this.indexImgActive + 1 === this.galleries[this.indexGalleryActive].list.length) {
      this.indexGalleryActive++;
      this.indexImgActive = 0;

    } else {
      this.indexImgActive++;

    }
    this.setViewportData();
  }

  showPrevImg(event?: MouseEvent): void {
    const maxLength = this.galleries.length - 1;

    if (event) {
      event.stopPropagation();
    }

    if (this.indexGalleryActive - 1 === 0 &&
      this.indexImgActive === 0) {
      this.indexGalleryActive = maxLength;
      this.indexImgActive = this.galleries[maxLength].list.length - 1;

    } else if (this.indexImgActive - 1 === 0) {
      this.indexGalleryActive--;
      this.indexImgActive = this.galleries[this.indexGalleryActive].list.length - 1;

    } else {
      this.indexImgActive--;

    }

    this.setViewportData();
  }

}
