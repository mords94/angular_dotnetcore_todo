import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { BASE_URL } from '../app/config';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
    selector: 'view-todo',
    templateUrl: './viewtodo.component.html'
})
export class ViewTodo {
    todo: Todo = { id: 0, name: '', finished: false } as Todo;
    private http: Http;

    constructor(http: Http, private route: ActivatedRoute, private router: Router) {
        this.http = http;

        this.route.params.subscribe(params => {
            this.fetchTodo(); 
        });
    }

    ngOnInit() {
        this.fetchTodo();
    }

    fetchTodo() {
        let id = this.route.snapshot.paramMap.get('id');
        this.http.get(BASE_URL + '/todo/' + id).subscribe(result => {
            this.todo = result.json() as Todo;
        }, error => console.error(error));
    }
}