import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appInput]'
})
export class LinkDirective{

    constructor(
        private element: ElementRef
    ){}

    @HostListener('blur') onBlur(){
        
        let value: string = this.element.nativeElement.value;

        if (!value.includes('.com')) {
            this.element.nativeElement.value = value.toLowerCase() + '.com';
        }
    }

}