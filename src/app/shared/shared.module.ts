// imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { KeysPipe } from './pipes/keys/keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    KeysPipe
  ],
  exports: [
    // @angular modules
    HttpModule,
    FormsModule,
    RouterModule,

    // components
    HeaderComponent,
    FooterComponent,

    // pipes
    KeysPipe
  ]
})
export class SharedModule { }
