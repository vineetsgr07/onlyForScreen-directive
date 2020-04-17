import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[onlyForScreen]"
})
export class OnlyForScreenDirective {
  public screenWidth: string;
  @Input("onlyForScreen") onlyForScreen: string;
  width: number = 0;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.display = "none";
  }
  ngOnInit() {
    this.checkWidth();
    // console.log(this.onlyForScreen, this.onlyForScreen);
  }

  //TODO: Fix this, partially Not Working
  @HostListener("window:resize") onResize() {
    this.checkWidth();
  }

  public checkWidth() {
    let width = window.innerWidth;

    if (width <= 768 && this.onlyForScreen === "mobile") {
      return (this.el.nativeElement.style.display = "inline");
    }

    if (width > 768 && width <= 992) {
      this.el.nativeElement.style.display = "inline";
    }

    if (width > 992) {
      this.el.nativeElement.style.display = "inline";
    }
  }
}
