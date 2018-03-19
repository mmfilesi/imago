import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ThumbnailSchema } from '../../../schemas/thumbnail-schema';

@Component({
  selector: 'app-thumbnail-container',
  templateUrl: './thumbnail-container.component.html',
  styleUrls: ['./thumbnail-container.component.scss']
})

export class ThumbnailContainerComponent {
  @Input() list: Array<ThumbnailSchema>;
  @Output() clickThumbnail = new EventEmitter<string>();

  onClickThumbnail(thumbnailItem: ThumbnailSchema): void {
    this.clickThumbnail.emit(thumbnailItem);
  }

  trackByItemId(index: number, item: ThumbnailSchema): string {
    return item.id;
  }
}
