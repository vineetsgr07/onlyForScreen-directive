import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[onlyForScreen]"
})
export class OnlyForScreenDirective {
  public screenWidth: string;
  @Input("onlyForScreen") onlyForScreen: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.display = "none";
  }
  
  ngOnInit() {
    this.checkWidth();
    console.log(this.onlyForScreen, this.onlyForScreen);
  }

  public checkWidth() {
    let width = window.innerWidth;

    if (width <= 768) {
      this.el.nativeElement.style.display = "inline";
      this.screenWidth = "mobile";
    } else if (width > 768 && width <= 992) {
      this.el.nativeElement.style.display = "inline";
      this.screenWidth = "tablet";
    } else {
      this.el.nativeElement.style.display = "inline";
      this.screenWidth = "desktop";
    }
  }
}
