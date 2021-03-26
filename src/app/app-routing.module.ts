import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './components/channel/channel.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewspageComponent }from './components/newspage/newspage.component';

const routes: Routes = [
  { path: 'allNews/name', component: NewspageComponent },
  { path: '', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
