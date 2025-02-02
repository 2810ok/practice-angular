import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
   UserName:string="joy";
   userEmail ="joy@gmail.com";
   userPass="";
  condition=false;
 
  displayData() {
    if (this.userPass.trim() !== '') {
      this.condition = true;
  
    } else {
      this.condition = false;
      alert('Please enter a password!');
    }
  }

   hide(){
    this.condition=false;
    this.userPass="";
   }
  
}  
