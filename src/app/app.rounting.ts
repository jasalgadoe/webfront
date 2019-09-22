import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router"; 
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import { AppComponent } from './app.component';



export const routes: Routes=[{
path:'login',
component:LoginComponent,

},


{
    path:'pages',
    component:ThemeComponent,
    children: [
        {
          path:'',
          loadChildren:'./pages/dashboard/dashboard.module#DashboardModule',
        },
        {
            path: '',
            loadChildren:'./pages/administration/administration.module#AdministrationModule',
        },
        {
            path:'',
            loadChildren:'./pages/settings/settings.module#SettingsModule'
        },
        {path: 'biblioteca', loadChildren:'./pages/biblioteca/biblioteca.module#BibliotecaModule',}
    ]
},
/* 
{path: 'pages', component: ThemeComponent,
    children: [
        
    ]},*/

]

@NgModule ({
    imports:[RouterModule.forRoot(routes,{useHash:true})
    ],
    exports:[RouterModule],
    providers:[]

})
export class AppRoutingModule {}