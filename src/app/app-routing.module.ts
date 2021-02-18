import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './components/channel/channel.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'articles' },
  { path: 'articles', component: ChannelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
