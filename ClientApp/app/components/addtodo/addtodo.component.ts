import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { BASE_URL } from '../app/config';

@Component({
    selector: 'add-todo',
    templateUrl: './addtodo.component.html'
})
export class AddTodo {
    @Input() todoList: Todo[];
    public todoName: string;
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    addTodo() {
        this.http.post(BASE_URL + '/Todo', {
            Name: this.todoName
        }).subscribe(result => {
            console.log("Successfully added");
            this.todoList.push(result.json() as Todo);
            this.todoName = '';
        }, error => console.error(error));
    }
}