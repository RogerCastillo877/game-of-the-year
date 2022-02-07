import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './pages/init/init.component';
import { GotyComponent } from './pages/goty/goty.component';

const routes: Routes = [
    { path: 'inicio', component: InitComponent },
    { path: 'goty', component: GotyComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}