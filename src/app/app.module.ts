import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router' ;

import {routes} from './app.routes' ;
import { AppComponent } from './app.component';
import {About,AboutHomeComponent, AboutItemComponent} from './about.component' ;
import {Home} from './home.component' ;


@NgModule({
  declarations: [
   AppComponent,
   About, AboutHomeComponent, AboutItemComponent, 
   Home
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
