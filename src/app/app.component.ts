import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gameInProgress = true;
  public endMessage: string;

  public endGame(type: string): void {
    this.endMessage = type;
    this.gameInProgress = false;
  }

  public restartGame(): void {
    this.gameInProgress = true;
    this.endMessage = undefined;
  }
}
