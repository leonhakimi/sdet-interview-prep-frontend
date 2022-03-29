import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddNewHooperComponent } from './add-new-hooper/add-new-hooper.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AddNewHooperComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
