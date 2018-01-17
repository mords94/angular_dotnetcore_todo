import { Component } from '@angular/core';
import { sampleProducts, products } from './products';
import { Http } from '@angular/http';
import { BASE_URL } from './config'

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public todos: Todo[];
    private http: Http;

    constructor(http: Http) {
        this.http = http;

        http.get(BASE_URL + '/Todo').subscribe(result => {
            this.todos = result.json() as Todo[];
        }, error => console.error(error));
    }

    toggleTodo(event: any, id: number) {
        this.http.patch(BASE_URL + '/Todo/' + id, {
            finished: event.target.checked,
        }).subscribe(result => {
            console.log("Updated");
        }, error => {
            event.target.checked = !event.target.checked;
            console.log(error);
        });
    }

    removeTodo(id: number) {
        this.http.delete(BASE_URL + '/Todo/' + id).subscribe(result => {
            this.todos = this.todos.filter(todo => {
                return todo.id !== id;
        });
            console.log("Successfully removed");
        }, error => console.error(error));
    }

}


