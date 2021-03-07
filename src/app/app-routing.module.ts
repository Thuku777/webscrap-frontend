import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewspageComponent }from './components/newspage/newspage.component';

const routes: Routes = [
  { path: 'allNews', component: NewspageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
