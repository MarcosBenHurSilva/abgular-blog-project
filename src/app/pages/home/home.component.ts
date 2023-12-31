import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { NgFor } from '@angular/common';
import { articleMock, Articles } from '../../mocks/mocks-cards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
             BigCardComponent,
             MenuBarComponent,
             MenuTitleComponent,
             SmallCardComponent,
             NgFor
            ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor() {}

  sideArticles: articleMock[] = []
  bigArticle = Articles[0]

  getArticles(): void {
    Articles.forEach(element => {
      if (element.id !== 0) {
        this.sideArticles.push(element)
      }
    });
  }

  ngOnInit(): void {
    this.getArticles();
  }
}
