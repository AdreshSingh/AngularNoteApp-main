import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotesService } from '../notes.service';
import { Notes } from '../notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-add',
  template: `
  <div class="card my-5 mx-5">
    <h3 class="container-fluid bg-primary jumbotron text-light">Add more Notes</h3>
    <form class="row bg-subtle card-body" [formGroup]="addNotes" (submit)="submitNotes()">
      <div class="col">
        <label for="note-title" class="form-label lead">Title:</label><input id="note-title" type="text" class="form-control" name="note-title" formControlName ="noteTitle">
      </div>
      <div class="col">
        <label for="note-text" class="form-label lead">Note:</label>
        <input type="text" class="form-control" id="note-text" name="note-text" formControlName="noteText">
      </div>
      <div class="container" style="margin-top: 7px;">
        <input type="submit" name="submit" class="btn btn-primary mb-3" value="Submit">
      </div>
    </form>
  </div>
  `,
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent {
  router = inject(Router)
  constructor(private noteService: NotesService) { }

  private id: Notes[] = this.noteService.notes

  addNotes = new FormGroup({
    noteTitle: new FormControl(''),
    noteText: new FormControl('')
  })

  submitNotes() {
    this.noteService.submitNotes(
      this.id.length,
      this.addNotes.value.noteTitle ?? '',
      this.addNotes.value.noteText ?? ''
    );
    this.addNotes.setValue({noteTitle:"",noteText: ""});
    this.router.navigateByUrl('/');
  }
}
