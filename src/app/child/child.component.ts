import { Component, EventEmitter, Input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-child',
  imports:[ParentComponent,CommonModule],
  template: `<h2>Child Component</h2>
  <p>{{ message }}</p> <!-- Display the message received from the parent -->
`,

})
export class ChildComponent {
  @Input() message: string = ''; 
}