import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { SearchNotesComponent } from './search-notes/search-notes.component';
//Adds a date time picker view from material
import {MatDatepickerModule} from '@angular/material/datepicker';
//Edits the length of a note
import { TruncatePipe } from './pipes/truncate-pipe.pipe';
//Transforms bodyofnote into links if needed
import { NgxLinkifyjsModule } from 'ngx-linkifyjs';
// Allows Drag&Drop in Materials
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    CreateNoteComponent,
    NoteDetailsComponent,
    NotesListComponent,
    SearchNotesComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MatDatepickerModule,    
    NgxLinkifyjsModule.forRoot(), // don't remove forRoot() or else !!??
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
