import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string;
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      title: this.text,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.reminder = false;
  }
}
