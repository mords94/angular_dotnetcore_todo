import { Component } from '@angular/core';
import { sampleProducts, products } from './products';
import { Http } from '@angular/http';
import { BASE_URL } from './config'
import { Router } from '@angular/router';
@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public todos: Todo[];
    private router: Router;
    private http: Http;

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
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

    goTo(event: Event, id: number) {
        event.preventDefault();
        this.router.navigate(['/todo', id]);
    }
}


