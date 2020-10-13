import { WorkspaceComponent } from './layout/main-outlet/workspace/workspace.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: LayoutComponent,
  children: [
      {
        path: '', component: WorkspaceComponent, data: {}
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
