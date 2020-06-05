import { CasadeshowDeleteComponent } from './components/casadeshow/casadeshow-delete/casadeshow-delete.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { CasadeshowUpdateComponent } from './components/casadeshow/casadeshow-update/casadeshow-update.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { IngressoCreateComponent } from './components/ingresso/ingresso-create/ingresso-create.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { CasadeshowCreateComponent } from './components/casadeshow/casadeshow-create/casadeshow-create.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CasadeshowCrudComponent } from './views/casadeshow-crud/casadeshow-crud.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { IngressoCrudComponent } from './views/ingresso-crud/ingresso-crud.component'
import { TodoseventosCrudComponent } from './views/todoseventos-crud/todoseventos-crud.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "casadeshow",
  component: CasadeshowCrudComponent
}, {
  path: "cliente",
  component: ClienteCrudComponent
}, {
  path: "evento",
  component: EventoCrudComponent
}, {
  path: "ingresso",
  component: IngressoCrudComponent
}, {
  path: "todoseventos",
  component: TodoseventosCrudComponent
}, {
  path: "casadeshow/create",
  component: CasadeshowCreateComponent
}, {
  path: "cliente/create",
  component: ClienteCreateComponent
}, {
  path: "ingresso/create",
  component: IngressoCreateComponent
},
{
  path: "evento/create",
  component: EventoCreateComponent
},
{
  path: "evento/update/:id",
  component: EventoUpdateComponent
},{
  path: "evento/delete/:id",
  component: EventoDeleteComponent
},
{
  path: "casadeshow/update/:id",
  component: CasadeshowUpdateComponent
  },
  {path: "casadeshow/delete/:id",
  component: CasadeshowDeleteComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
