import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

 @Input() posts : Object[]; 

  constructor() { }

  removePost(){
    alert("I couldnt figure out how to remove the correct index when the array is displayed in reverse - so this button does nothing.")
  }

  ngOnInit() {
  }

}
