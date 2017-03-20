// imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent
  ],
  exports: [
    // @angular modules
    HttpModule,
    FormsModule,
    RouterModule,

    // components
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
