import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public url: SafeResourceUrl;
  childValue: string;
  showHome: boolean = true;
  showLearning: boolean = false;
  showMyAccount: boolean = false;

  videoData: string[] = [
    'https://www.youtube.com/embed/BBpAmxU_NQo',
    'https://www.youtube.com/embed/impKjLh9YT0',
    'https://www.youtube.com/embed/BBpAmxU_NQo',
  ];

  videoURL: String = 'https://www.youtube.com/embed/impKjLh9YT0';

  constructor(private sanitizer: DomSanitizer) {}
  values1: number[] = [1, 2, 3, 4];

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {}

  setValue($event: any) {
    this.childValue = $event;
    if (this.childValue == 'home') {
      this.showLearning = false;
      this.showHome = true;
      this.showMyAccount = false;
    } else if (this.childValue == 'learning') {
      this.showLearning = true;
      this.showHome = false;
      this.showMyAccount = false;
    } else if (this.childValue == 'account') {
      this.showLearning = false;
      this.showHome = false;
      this.showMyAccount = true;
    }
  }

  next(id: any) {
    if (id == 1) {
      for (let i = 0; i < 4; i++) {
        this.values1[i]++;
        if (this.values1[i] == 9) {
          this.values1[i] = 0;
        }
      }
    }
  }

  previous(id: any) {
    if (id == 1) {
      for (let i = 0; i < 3; i++) {
        this.values1[i]--;
        if (this.values1[i] == -1) {
          this.values1[i] = 9;
        }
      }
    }
  }

  imageObject1: Array<object> = [
    {
      image: '../assets/4.jpg',
      thumbImage: '../assets/4.jpg',
      alt: '',
    },
    {
      image: '../assets/2.jpg',
      thumbImage: '../assets/2.jpg',
      alt: '',
    },
  ];
  sliderInfinite = true;
  sliderAutoSlide = false;
  sliderAnimationSpeed = 10;
}
