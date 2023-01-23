import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { LoginComponent } from './principal/login/login.component';
import { MensajeComponent } from './principal/mensaje/mensaje.component';
import { SignupComponent } from './principal/signup/signup.component';
import { VistaComponent } from './principal/vista/vista.component';

//le agregamos , canActivate: [CanactivateGuard] a todos menos a login(que es el home acesible a todo usuario)
//editar menu.ts
const routes: Routes = [
  {path: 'mensaje', component: MensajeComponent, canActivate:[CanactivateGuard], canDeactivate: [CandesactivateGuard]}, //mensaje usa canActivate y canDeactivate
  
  {path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard]},
  {path: 'form', component: SignupComponent, canDeactivate: [CandesactivateGuard]}, //frm de signup solo usa candeactivate
  {path: 'busqueda', component: BusquedaComponent, canActivate: [CanactivateGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
