import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

// Student Components
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentCountComponent } from './student-count/student-count.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

// fxFlex Property
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import { AngularMaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentDetailsComponent,
    StudentCountComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
