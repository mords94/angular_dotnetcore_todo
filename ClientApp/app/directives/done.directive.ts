import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[done]'
})
export class DoneDirective {
    element: ElementRef;
    constructor(el: ElementRef) {
        this.element = el;
    }
     

    private highlight(color: string) {
        this.element.nativeElement.style.backgroundColor = color;
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

}