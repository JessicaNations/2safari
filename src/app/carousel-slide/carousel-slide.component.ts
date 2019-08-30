import { ListKeyManagerOption } from '@angular/cdk/a11y';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MatCarouselSlide } from '@ngmodule/material-carousel';
import { Router } from '@angular/router';


@Component({
  selector: 'my-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss']
})
export class CarouselSlideComponent
  implements ListKeyManagerOption, MatCarouselSlide, OnInit {
  @Input() public image: SafeStyle;
  @Input() public overlayColor = '#00000040';
  @Input() public hideOverlay = false;
  @Input() public disabled = false; // implements ListKeyManagerOption

  @ViewChild(TemplateRef) public templateRef: TemplateRef<any>;

  constructor(public sanitizer: DomSanitizer) {  // , private router: Router
  }

  public ngOnInit(): void {
    if (this.image) {
      this.image = this.sanitizer.bypassSecurityTrustStyle(`url("${this.image}")`);
    }
  }
}
