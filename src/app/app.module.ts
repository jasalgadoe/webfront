import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.rounting';
import { ThemeComponent } from './theme/theme.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThemeComponent,
    AdministrationComponent,
    SettingsComponent,
    BibliotecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
