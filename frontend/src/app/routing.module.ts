import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { WorkItemComponent } from './work-item/work-item.component';
import { SearchComponent } from './user-dashboard/search/search.component';
import { X12EditorComponent } from './x12-editor/x12-editor.component';
import { MonacoComponent } from './monaco/monaco.component';
import { FriendlyX12Component } from './friendly-x12/friendly-x12.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    data: { preload: true }
  },
  {
    path: 'newworkitem',
    component: WorkItemComponent,
    data: { preload: true }
  },
  { path: 'pendedworkitem', component: WorkItemComponent },
  { path: 'demandworkitem', component: WorkItemComponent },
  { path: '', component: UserDashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'monaco', component: MonacoComponent },
  { path: 'x12', component: X12EditorComponent },
  { path: 'friendlyX12', component: FriendlyX12Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategy]
})
export class AppRoutingModule {}
