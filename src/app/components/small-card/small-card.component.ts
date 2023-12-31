import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { articleMock } from '../../mocks/mocks-cards';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  constructor() {}

  @Input() photoCoverS: string = ''
  @Input() cardTitleS: string = ''
  @Input() cardDateS: string = ''
  @Input() articleId: number = 0
}
