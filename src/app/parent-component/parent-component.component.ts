import { Component, OnInit, OnDestroy ,OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
@Component({

  selector: 'app-parent-component',
  imports: [CommonModule,ChildComponent],
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit, OnDestroy ,OnChanges{
 
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; 
  isActive: boolean = false;  


  ngOnInit() {
    console.log('ParentComponent initialized!');
  }

  ngOnDestroy() {
    console.log('ParentComponent destroyed!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges detected changes: ', changes);
    if (changes['isActive']) {
      console.log(`isActive changed: ${changes['isActive'].currentValue}`);
    }
  }
  toggleCardState() {
    this.isActive = !this.isActive;
    console.log(this.isActive ? 'Card is Active' : 'Card is Inactive');
  }


}
