import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent }  from '../content/start.component';
import { SenderComponent }  from '../content/sender.component';
import { DriverComponent }  from '../content/driver.component';
import { NotFoundComponent }  from '../content/notFound.component';

const appRoutes : Routes = [
  {path: 'sender', component: SenderComponent},
  {path: 'driver', component: DriverComponent},
  {path: '', component: StartComponent},
  {path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
