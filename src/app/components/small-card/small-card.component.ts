import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  cardDate = new Date('2023-12-28'); // Example date
}
