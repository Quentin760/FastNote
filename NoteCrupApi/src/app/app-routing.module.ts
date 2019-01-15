import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { CreateNoteComponent } from './create-note/create-note.component';

const routes: Routes = [
  {path: '', redirectTo: 'note', pathMatch: 'full'},
  {path: 'note', component: NotesListComponent},
  {path: 'add', component: CreateNoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
