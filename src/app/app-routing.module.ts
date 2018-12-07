import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddbookComponent } from './addbook/addbook.component';
import { DetaddressComponent } from './detaddress/detaddress.component';

const routes :Routes = [
        { path:'detaddress',
          component:DetaddressComponent},

        { path:'addbook',
          component:AddbookComponent},

        { path:'addbook/:id',
          component:AddbookComponent}
      ];
        
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{ } 