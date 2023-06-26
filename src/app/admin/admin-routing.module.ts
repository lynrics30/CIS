import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
        path: '',
        component: HomeComponent, children:[
          {
            path:'dashboard',
            component: DashboardComponent
          },
          {
            path:'sidebar',
            component: SidebarComponent
          },
        {
            path:'',
            redirectTo: '/home',
            pathMatch: 'full'
        }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }