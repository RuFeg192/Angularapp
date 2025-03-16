import {Component,Input} from '@angular/core';

@Component({
    selector:'app-todo-list',
    standalone:true,
    templateUrl:'./todo-list.component.html'
})
export class TodoListComponent{
    @Input() title = 'Мои задачи';
}

