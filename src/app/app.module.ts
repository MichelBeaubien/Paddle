import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ShowcaseComponent} from './showcase/showcase.component';
import {ContactComponent} from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'showcase', component: ShowcaseComponent},
    {path: 'contact', component: ContactComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ShowcaseComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
