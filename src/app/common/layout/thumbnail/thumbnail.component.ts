import { Component, Input, OnInit } from '@angular/core';
import { ThumbnailSchema } from '../../../schemas/thumbnail-schema';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})

export class ThumbnailComponent implements OnInit {
  showDescription: boolean = false;
  @Input() thumbnail: ThumbnailSchema;

  ngOnInit(): void {
  }
}
