import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="skeleton" [ngClass]="className"></div>`,
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {
  @Input() className = '';
}
