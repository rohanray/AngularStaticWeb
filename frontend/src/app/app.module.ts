import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler} from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { EdsnavigationComponent } from './shared/edsnavigation/edsnavigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './shared/auth/login/login.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProductivityChartComponent } from './dashboard/my-productivity-chart/my-productivity-chart.component';
import { WorkItemsGridComponent } from './dashboard/work-items-grid/work-items-grid.component';
import { GlobalErrorComponent }  from './global-error.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import {
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
} from '@angular/material';
import { SearchClaimComponent } from './dashboard/search-claim/search-claim.component';
import { ViewClaimComponent } from './dashboard/search-claim/view-claim/view-claim.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search-claim', component: SearchClaimComponent },
  { path: 'view-claim', component: ViewClaimComponent },
	{
	  path: 'error',
	   component: GlobalErrorComponent
	},{
	   path: '**',
	   component: PageNotFoundComponent 
      }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EdsnavigationComponent,
    DashboardComponent,
    MyProductivityChartComponent,
    WorkItemsGridComponent,
    GlobalErrorComponent,
		PageNotFoundComponent,
		SearchClaimComponent,
		ViewClaimComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTableModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    )
  ],
  providers: [SelectivePreloadingStrategy,
  GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
