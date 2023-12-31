import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover: string = "https://www.aceinfoway.com/blog/wp-content/uploads/2022/08/7-Most-Suitable-AngularJS-Frameworks.png";
  contentDate: string = "December 31, 2023"
  contentTitle: string = "Minha Notícia"
  contentDescription: string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Assumenda explicabo, unde saepe modi maiores culpa doloremque earum beatae nobis odit,obcaecati voluptatibus est nisi tempora officia vero dolores blanditiis sequi."

  constructor(){}

  ngOnInit(): void {
      
  }
}
