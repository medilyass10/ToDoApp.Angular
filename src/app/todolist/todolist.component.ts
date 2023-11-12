import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  taskArray = [{ taskname: 'brush teeth', isCompleted: false }];
  constructor() {}
  ngOnInit(): void {}
  onSubmit(Form: NgForm) {
    console.log(Form);
    this.taskArray.push({
      taskname: Form.controls['task'].value,
      isCompleted: false,
    })

    Form.reset();

  }
  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index,1);
  }
  onChange(index: number){
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted ;
  }
}
