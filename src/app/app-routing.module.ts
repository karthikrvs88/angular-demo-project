import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: '/home' }  // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
