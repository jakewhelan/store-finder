// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routing module
import { AppRoutingModule } from './app.routes';

// shared module
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { StoreListComponent } from './store-list/store-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// services
import { StoreLocationService } from './store-list/store-location.service';

@NgModule({
  declarations: [
    AppComponent,
    StoreListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    StoreLocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
