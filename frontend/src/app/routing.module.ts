import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { WorkItemComponent } from './work-item/work-item.component';
import { SearchComponent } from './user-dashboard/search/search.component';

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
  { path: 'search', component: SearchComponent }
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
