import { Component ,Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './user/form/form.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ChangeMeDirective } from './directive/change-me.directive';
import { ShadowDomEncapComponent } from './ViewEncapsulation/shadow-dom-encap/shadow-dom-encap.component';
import { CustomepipePipe } from './customepipe.pipe';
@Component({

  selector: 'app-root',
  imports: [CustomepipePipe,RouterOutlet,HeaderComponent,FormComponent,UserModule,FormsModule,ParentComponentComponent,CommonModule,ShadowDomEncapComponent,ChildComponent,ParentComponent,ChangeMeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'my-app';
  
}
