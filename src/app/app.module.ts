import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component'
import { IndexComponent } from './components/index/index.component'
import { DegreeComponent } from './components/degree/degree.component'
import { ProjectComponent } from './components/project/project.component'
import { ProductComponent } from './components/product/product.component'
import { ContactComponent } from './components/contact/contact.component'
import { AboutmeComponent } from './components/aboutme/aboutme.component'
import { ExperienceComponent } from './components/experience/experience.component'

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    DegreeComponent,
    ProjectComponent,
    ProductComponent,
    AboutmeComponent,
    ContactComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
