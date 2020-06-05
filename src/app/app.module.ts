import { CasadeshowUpdateComponent } from './components/casadeshow/casadeshow-update/casadeshow-update.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { CasadeshowCrudComponent } from './views/casadeshow-crud/casadeshow-crud.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { IngressoCrudComponent } from './views/ingresso-crud/ingresso-crud.component';
import { TodoseventosCrudComponent } from './views/todoseventos-crud/todoseventos-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { CasadeshowCreateComponent } from './components/casadeshow/casadeshow-create/casadeshow-create.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { IngressoCreateComponent } from './components/ingresso/ingresso-create/ingresso-create.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { CasadeshowReadComponent } from './components/casadeshow/casadeshow-read/casadeshow-read.component';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { CasadeshowRead2Component } from './components/casadeshow/casadeshow-read2/casadeshow-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData} from '@angular/common';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { CasadeshowDeleteComponent } from './components/casadeshow/casadeshow-delete/casadeshow-delete.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CasadeshowCrudComponent,
    EventoCrudComponent,
    ClienteCrudComponent,
    IngressoCrudComponent,
    TodoseventosCrudComponent,
    RedDirective,
    ForDirective,
    CasadeshowCreateComponent,
    EventoCreateComponent,
    IngressoCreateComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    CasadeshowReadComponent,
    EventoReadComponent,
    CasadeshowRead2Component,
    CasadeshowUpdateComponent,
    EventoUpdateComponent,
    CasadeshowDeleteComponent,
    EventoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
