import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteshomeComponent } from './noteshome/noteshome.component';
import { NotesAddComponent } from './notes-add/notes-add.component';

const routes: Routes = [
  {
    path: '',
    component: NoteshomeComponent,
    title: 'NOTE ALL 📝'
  },
  {
    path: 'add',
    component: NotesAddComponent,
    title: "Write your notes",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
