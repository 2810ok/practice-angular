import { Component,ViewEncapsulation } from '@angular/core';
import { NoEncapComponent } from '../no-encap/no-encap.component';
import { EmulatedEncapComponent } from '../emulated-encap/emulated-encap.component';
@Component({
  selector: 'app-shadow-dom-encap',
  template: `
  <h2>ShadowDom</h2>
  <div class="shadow-message">Shadow DOM encapsulation</div>
  <app-emulated-encap></app-emulated-encap>
  <app-no-encap> </app-no-encap>
`,
styles: ['h2, .shadow-message { color: blue; }'],
encapsulation: ViewEncapsulation.ShadowDom,
imports: [NoEncapComponent,EmulatedEncapComponent],
})
export class ShadowDomEncapComponent {

}
