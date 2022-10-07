import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MenuComponent } from './components/menu/menu.component';
import { SentComponent } from './components/sent/sent.component';
import { VersionComponent } from './components/version/version.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LogInComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'version', component: VersionComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'sent', component: SentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
