import { Component,ViewEncapsulation } from '@angular/core';
import { NoEncapComponent } from '../no-encap/no-encap.component'; 
@Component({
  selector: 'app-emulated-encap',
  template: `
  <h2>Emulated</h2>
  <div class="emulated-message">Emulated encapsulation</div>

`,
styles: ['h2, .emulated-message { color: green; }'],
encapsulation: ViewEncapsulation.Emulated,
imports: [NoEncapComponent],
})
export class EmulatedEncapComponent {

}
