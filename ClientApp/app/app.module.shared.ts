import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './components/app/app.component';
import { AddTodo } from './components/addtodo/addtodo.component';
import { DoneDirective } from "./directives/done.directive";
import { ViewTodo } from "./components/viewtodo/viewtodo.component";

@NgModule({
    declarations: [
        ViewTodo,
        AppComponent,  
        AddTodo,
        DoneDirective
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'todo/:id', component: ViewTodo },

        ])
    ]
})
export class AppModuleShared {
}


