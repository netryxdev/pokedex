import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Components
import { PokeListComponent } from './pokemon-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/poke-details.component';

const routes: Routes = [
    { path: '', 
    loadChildren: () => import('./app.module').then(p => p.AppModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}