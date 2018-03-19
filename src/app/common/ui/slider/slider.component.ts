import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['slider.component.scss']
})

export class SliderComponent implements OnInit, OnDestroy {
  private isActive = 0;
  private sliderLength = 0;
  private timerSlider: any;
  private isPause = false;

  itemsSlider = [
    {
      idImage: '1',
      img: 'https://www.atrapalo.com/common/photo/vv/63592/6/ticr_640_350.jpg',
      album: 'Galicia',
      idAlbum: '2'
    },
    {
      idImage: '2',
      img: './assets/images/image-02.jpg',
      album: 'Otro',
      idAlbum: '2'
    },
    {
      idImage: '3',
      img: './assets/images/image-01.jpg',
      album: 'Otro más',
      idAlbum: '2'
    },
    {
      idImage: '4',
      img: './assets/images/image-03.jpg',
      album: 'Lore ipsum',
      idAlbum: '2'
    }
  ];

  ngOnInit(): void {
    this.sliderLength = this.itemsSlider.length - 1;
    this.launchSliderTimer();
  }

  ngOnDestroy(): void {
    clearInterval(this.timerSlider);
  }

  private launchSliderTimer(): void {
    this.timerSlider = setInterval(() => {
      this.setIsActive();
    }, 5000);
  }

  public setIsActive(): void {
    if (this.isActive < this.sliderLength) {
      this.isActive++;
    } else {
      this.isActive = 0;
    }
  }

  public setIsPause(state: boolean): void {
    this.isPause = state;
    if (this.isPause) {
      clearInterval(this.timerSlider);
    } else {
      this.launchSliderTimer();
    }
  }
}
