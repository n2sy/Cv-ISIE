import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bg = "red";
  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.bg = "grey";
  }

  @HostListener('mouseleave') mouseleave() {
    this.bg = "red";
  }


}
