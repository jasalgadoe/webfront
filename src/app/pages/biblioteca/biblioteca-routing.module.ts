import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AreasComponent} from './areas/areas.component';
import { LibroComponent } from './libro/libro.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialComponent } from './editorial/editorial.component';


const routes: Routes = [
  {path:'areas',component:AreasComponent},
  {path:'libro',component:LibroComponent},
  {path:'existencia',component:ExistenciaComponent},
  {path:'tipo',component:LibroComponent},
  {path:'autores',component:AutoresComponent},
{path:'editorial',component:EditorialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliotecaRoutingModule { }
