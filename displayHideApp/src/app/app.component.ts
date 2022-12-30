import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'displayHideApp';

  btnValue: string = 'Enseñar';
  display: boolean = true;
  
  toggle() {
    this.display = !this.display;
    if (this.display) {
      this.btnValue = 'Enseñar'
    } else if (!this.display) {
      this.btnValue = 'Esconder'
    }
  }
}
