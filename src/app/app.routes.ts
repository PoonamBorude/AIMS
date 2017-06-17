import {Routes,RouterModule} from '@angular/router' ;

import { About , AboutHomeComponent, AboutItemComponent } from 'app/about.component';
import { Home } from 'app/home.component';

export const routes: Routes = [
  { path: '', component: Home } ,
  { path: 'about',
   component: About,
   children : [
      { path: '', component: AboutHomeComponent }, 
      { path: 'item', component: AboutItemComponent
      }
   ]
 }
];


    