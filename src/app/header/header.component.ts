import { Component,Input } from '@angular/core';
import { FormComponent } from '../user/form/form.component';

@Component({
  selector: 'app-header',
  imports: [FormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
username: string = ''; 
}