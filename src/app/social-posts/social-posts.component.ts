import { Component, OnInit } from '@angular/core';

interface Post {
  user: string,
  content: string
}

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts : Post[];
  displayForm : boolean;

  constructor() {
    this.posts = [
      {
        user: "Mike",
        content: "This is a sample post, I'm goint to type a lot here so that i can see what it will be like for the post to fill the entire page. This is to ensure that the spacing is right and that nothing overflows with the "
      },
      {
        user: "Jeana",
        content: "This is another post, probably about her wife"
      },
      {
        user: "Grandma",
        content: "Sample post about recipies for scalloped potatoes"
      }
    ];
   }

  toggleDisplay() {
    if (this.displayForm === false || this.displayForm === undefined) {
      this.displayForm = true;
    }
    else {
      this.displayForm = false;
    }
  }

  onSubmit(event) {
    this.posts.splice(0,0,event);
    console.log(`Adding ${event.content} worked!`)
    console.log(this.posts);
  }


  ngOnInit() {
  }

}
