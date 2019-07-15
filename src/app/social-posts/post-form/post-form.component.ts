import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  title : string;
  thought : string;

  @Output() submitted = new EventEmitter<any>();
  @Input() displayForm : boolean;
  

  createNewPost (title, thought) {
    this.title = title;
    this.thought = thought;
    let newPost : Object = {
      user: title,
      content: thought
    }
    this.submitted.emit(newPost);
    console.log(newPost);
    this.resetFields();
    this.displayForm = false;

  }

  resetFields() {
    this.title = '';
    this.thought = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
