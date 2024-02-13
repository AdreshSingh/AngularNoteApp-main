import { Component, Input } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-noteshome',
  template: `
  <main>
    <div class="container">
    <app-note-details [notes]="notes" />
   </div>
  </main>
  `,
  styleUrls: ['./noteshome.component.css']
})
export class NoteshomeComponent {
  notes: any;
  constructor(private noteService: NotesService) {
    this.notes = this.noteService.notes;
  }
}
