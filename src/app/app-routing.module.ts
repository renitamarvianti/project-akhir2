import { NgModule } from '@angular/core';
import { KaryawanComponent } from './karyawan/karyawan.component';
import { Routes,RouterModule } from '@angular/router';
import { KaryawanStartComponent } from './karyawan/karyawan-start/karyawan-start.component';
import { KaryawanDetailComponent } from './karyawan/karyawan-detail/karyawan-detail.component';
import { KaryawanEditComponent } from './karyawan/karyawan-edit/karyawan-edit.component';

const appRoutes:Routes=[
    { path:'',redirectTo:'/karyawans',pathMatch:'full'},
    { path:'karyawans',component:KaryawanComponent,children:[
        { path:'',component:KaryawanStartComponent},
        { path:'new',component:KaryawanEditComponent},
        { path:':id',component:KaryawanDetailComponent},
        { path:':id/edit',component:KaryawanEditComponent},
    ]},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}