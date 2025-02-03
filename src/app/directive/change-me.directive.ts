import { Directive,ElementRef,Input, OnInit ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective implements OnInit{
   @Input() myName="";
  constructor(private el:ElementRef,private renderer:Renderer2) {
    //this.el.nativeElement.style.background = "red";
   }

   ngOnInit() {
     this.el.nativeElement.innerText=this.myName;
     this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue');
     this.renderer.setAttribute(this.el.nativeElement,'title','this is example div');
     this.renderer.addClass(this.el.nativeElement,'container');

   }


}
