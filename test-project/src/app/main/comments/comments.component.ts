import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Comment } from 'src/types/comment';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comments: Comment[] = [];

  constructor(private api:ApiService){}
  
  ngOnInit(): void {
    this.api.getComment(5).subscribe((comments)=>{
      console.log(comments);
      this.comments = comments
    })
  }
}
