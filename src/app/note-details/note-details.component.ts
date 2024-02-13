import { Component, Input } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-note-details',
  template: `
    <div>
      <ul class="list-group" *ngFor="let note of notes">
      <li class="list-group-item list-group-item-action list-group-item-info mx-5 my-2">
          <div class="card card-body">
            <h2 class="card-title">{{note.noteTitle}}</h2>
            <p class="card-text">{{note.noteText}}</p>
          </div>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent {
  @Input() notes!: Notes[];
}
