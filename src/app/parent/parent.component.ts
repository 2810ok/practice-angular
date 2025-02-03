import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
@Component({

  selector: 'app-parent',
  imports:[CommonModule,CommonModule],
  template: `
    <h1>Welcome from Parent Component!</h1>
    
  `,
})
export class ParentComponent {
  name: string = 'tata'; 
}