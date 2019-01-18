import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Observable } from 'rxjs';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],

})
export class NotesListComponent implements OnInit {
  
  notes: Observable<Note[]>;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteNotes() {
    this.noteService.deleteAll()
    .subscribe(
      data => {
      console.log(data);
      this.reloadData();
      },
      error => console.log('ERROR: ' + error)
    );
    }
  reloadData() {
      this.notes = this.noteService.getNoteList();
    }
}

