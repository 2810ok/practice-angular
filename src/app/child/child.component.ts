import { Component, EventEmitter, Input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-child',
  imports:[ParentComponent,CommonModule],
  template: `
  <p> welcome{{ username }}</p> 
`,

})
export class ChildComponent {
  @Input() username: string = ''; 
}