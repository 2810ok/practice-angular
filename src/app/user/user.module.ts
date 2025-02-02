import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,FooterComponent,FormComponent
  ],
  exports:[
    FooterComponent,FormComponent
  ]
})
export class UserModule { }
