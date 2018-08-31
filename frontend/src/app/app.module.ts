import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityTimerComponent } from './user-dashboard/activity-timer/activity-timer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { APP_BASE_HREF } from '@angular/common';
import { MyProductivityChartComponent } from './user-dashboard/my-productivity-chart/my-productivity-chart.component';
import { PendboxGridComponent } from './user-dashboard/pendbox-grid/pendbox-grid.component';
import { EDSNavigationComponent } from './edsnavigation/edsnavigation.component';
import { AppRoutingModule } from './routing.module';
import { WorkItemComponent } from './work-item/work-item.component';
import { SearchComponent } from './user-dashboard/search/search.component';
import { ViewResultsComponent } from './user-dashboard/search/view-results/view-results.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    ActivityTimerComponent,
    MyProductivityChartComponent,
    PendboxGridComponent,
    EDSNavigationComponent,
    WorkItemComponent,
    SearchComponent,
    ViewResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    AppRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    CodemirrorModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/' + (window.location.pathname.split('/')[1] || '')
    },
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
