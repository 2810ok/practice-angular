import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-parent',
  imports:[ChildComponent,CommonModule],
  template: `
    <h1>Welcome from Parent Component!</h1>
    <app-child [message]="parentMessage"></app-child>
  `,
})
export class ParentComponent {
  parentMessage: string = 'Hello from Parent Component!'; 
}