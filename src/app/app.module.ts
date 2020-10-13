import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { AccordionComponent } from './layout/sidebar/accordion/accordion.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
