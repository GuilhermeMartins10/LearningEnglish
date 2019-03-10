import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Phrase } from '../shared/models/phrase.model';
import { PHRASES } from '../fakeDB/phrases-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  public phrases: Phrase[] = PHRASES;
  public instruction: string = 'Traduza a frase: ';
  public response: string = '';
  public round: number = 0;
  public roundPhrase: Phrase;
  public progress: number = 0;
  public attemps: number = 3;
  @Output() public endGame: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.updateRound();
  }

  public updateAnswer(response: Event): void {
    this.response = (<HTMLInputElement>response.target).value;
  }

  public answerVerify(): void {
    if (this.roundPhrase.phrasePtBr === this.response) {
      alert('A tradução está correta!');
      this.progress = this.progress + (100 / this.phrases.length);
      this.round++;
      if(this.round === this.phrases.length) {
        this.endGame.emit('victory');
      }
      this.updateRound();
    }
    else {
      alert('A tradução está incorreta!');
      this.attemps--;
      if(this.attemps === -1){
        this.endGame.emit('defeat');
      }
    }
  }

  public updateRound(){
    this.roundPhrase = this.phrases[this.round];
    this.response = '';
  }

}
