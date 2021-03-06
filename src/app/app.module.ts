import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

import { RestDataSource } from './rest.datasource';
import { RepositoryModel } from './repository.model';
import { DisplayView } from './display-view.service';
import { StargazersPipe } from './pipes/stargazers.pipe';
import { LimitLength } from './pipes/limitLengthString.pipe';
import { MylistComponent } from './mylist/mylist.component';
import { RepositoryDisplayComponent } from './repository-display/repository-display.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'my-list', component: MylistComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/search' }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StargazersPipe,
    LimitLength,
    MylistComponent,
    RepositoryDisplayComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [RestDataSource, RepositoryModel, AuthGuard, DisplayView],
  bootstrap: [AppComponent]
})
export class AppModule { }
