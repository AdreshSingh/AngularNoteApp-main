import { Injectable } from '@angular/core';
import { Notes } from './notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public notes: Notes[]  = [{
    id: 1,
    noteTitle: "Welcome",
    noteText: "Hi, we are statring"
  }];
  constructor() { }

  submitNotes(id: Number,noteTitle: String, noteText: String){
    try{
      this.notes.push({id,noteTitle,noteText});
    console.log(this.notes);
    }catch(error){
      console.log(error)
    }
  }
}
