import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { NotesListComponent } from '../notes-list/notes-list.component';
import {NgxLinkifyjsService, Link, LinkType} from 'ngx-linkifyjs';

//Two codes imported from Angular Website and Stack OverFlow
//https://angular.io/api/common/SlicePipe for pipe of slice see HTML area.
// See pipe file for URL to detail.





@Component({
  selector: 'note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  @Input() 
  note: Note;


  constructor(
    private noteService: NoteService, 
    private listComponent: NotesListComponent, 
    public linkifyService: NgxLinkifyjsService) 
            {
  const foundLinks: Link[] = this.linkifyService.find(
    this.noteService.getNoteList.toString()   );
            }
  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.noteService.updateNote(this.note.id, {
      titleofnote: this.note.titleofnote, 
      bodyofnote: this.note.bodyofnote, 
      dateofnote: this.note.dateofnote, 
      active: isActive})
    .subscribe(
      data => {
        console.log(data);
        this.note = data as Note;
      },
      error => console.log(error))
  }

  deleteNote() {
    this.noteService.deleteNote(this.note.id)
    .subscribe(
      data => {
        console.log(data);
        this.listComponent.reloadData();
      },
      error => console.log(error)
    );
  }



}
