import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LetsplayComponent } from './components/letsplay/letsplay.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'main', component: MainpageComponent },
  { path: 'play', component: LetsplayComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
