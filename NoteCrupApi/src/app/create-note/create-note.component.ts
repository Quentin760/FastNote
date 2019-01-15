import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  note: Note = new Note();
  submitted = false;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  newNote(): void {
    this.submitted = false;
    this.note = new Note();
  }

  save() {
    this.noteService.createNote(this.note)
    .subscribe(
      data =>
      console.log(data),
      error => console.log(error)
    );
    this.note = new Note();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
