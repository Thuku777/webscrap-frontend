import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewspageComponent }from './components/newspage/newspage.component';

const routes: Routes = [
  {  path: '', component: HomepageComponent},
  {path: 'newspage', component: NewspageComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
