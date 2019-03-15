import { Component, EventEmitter, Output } from '@angular/core';
import { Phrase } from '../shared/models/phrase.model';
import { PHRASES } from '../fakeDB/phrases-mock';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  public phrases: Phrase[] = PHRASES;
  public instruction = 'Traduza a frase: ';
  public response = '';
  public round = 0;
  public roundPhrase: Phrase;
  public progress = 0;
  public attemps = 3;
  @Output() public endGame: EventEmitter<string> = new EventEmitter();

  constructor(private toastr: ToastrService) {
    this.updateRound();
  }

  public updateAnswer(response: Event): void {
    this.response = (<HTMLInputElement>response.target).value;
  }

  public answerVerify(): void {
    if (this.roundPhrase.phrasePtBr === this.response) {
      this.toastr.success('Parabéns!', 'Você acertou.');
      this.progress = this.progress + (100 / this.phrases.length);
      this.round++;
      if (this.round === this.phrases.length) {
        this.endGame.emit('victory');
      }
      this.updateRound();
    } else {
      this.toastr.error('Tente novamente...', 'Você errou!');
      this.attemps--;
      if (this.attemps === -1) {
        this.endGame.emit('defeat');
      }
    }
  }

  public updateRound() {
    this.roundPhrase = this.phrases[this.round];
    this.response = '';
  }
}
