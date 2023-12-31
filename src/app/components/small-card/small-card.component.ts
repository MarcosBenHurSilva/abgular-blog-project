import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  constructor() {}

  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDate: string = '';
  @Input() articleId: number = 0;
}
