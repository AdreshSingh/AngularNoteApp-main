import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteshomeComponent } from './noteshome/noteshome.component';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NoteshomeComponent,
    NotesAddComponent,
    NoteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
