import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './home/test/test.component';
const appRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'home', component: TestComponent }

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);   