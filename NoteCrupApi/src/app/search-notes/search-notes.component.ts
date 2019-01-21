import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from "../note";

@Component({
  selector: 'search-notes',
  templateUrl: './search-notes.component.html',
  styleUrls: ['./search-notes.component.css']
})
export class SearchNotesComponent implements OnInit {

  date: Date;
  notes: Note[];

  constructor(private dataService: NoteService) { }

  ngOnInit() {
    this.date = 
  }

  private searchNote() {
    this.dataService.getNoteByDate(this.date).subscribe(notes => this.notes = notes)
  }

  onSubmit() {
    this.searchNote();
  }

}
