import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { articleMock } from '../../mocks/mocks-cards';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent{
  constructor() {}

  @Input() article: articleMock = {
    idn: 0,
    id: "0",
    photoCover: "",
    cardTitle: "",
    cardDate: "",
    cardDescription: ""
  }
}
