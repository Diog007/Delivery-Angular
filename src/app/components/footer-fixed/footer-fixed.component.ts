import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-fixed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-fixed.component.html',
  styleUrls: ['./footer-fixed.component.scss']
})
export class FooterFixedComponent {
  activeTab = 'pedidos';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
