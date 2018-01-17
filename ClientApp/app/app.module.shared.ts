import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { AddTodo } from './components/addtodo/addtodo.component';

@NgModule({
    declarations: [
        AppComponent,  
        AddTodo,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'todos', component: AppComponent, pathMatch: 'full' },
        ])
    ]
})
export class AppModuleShared {
}


