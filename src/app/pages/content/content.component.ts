import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { articleMock, Articles } from '../../mocks/mocks-cards';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  constructor(
    private route: ActivatedRoute
  ) {}
  article: articleMock = {
    idn: 0,
    id: "0",
    photoCover: "",
    cardTitle: "",
    cardDate: "",
    cardDescription: ""
  }

  photoCover: string = ""
  cardTitle: string = ""
  cardDescription: string = ""
  cardDate: string = ""
  private id:string | null = "0"
  idn: number = 0

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id'))

      this.setValuesToComponent(this.id)
   }
  setValuesToComponent(id:string | null){
    const result = Articles.filter( article => article.id == this.id)[0]

    this.photoCover = result.photoCover;
    this.cardDescription = result.cardDescription;
    this.cardTitle = result.cardTitle;
    this.cardDate = result.cardDate;
  }
}
