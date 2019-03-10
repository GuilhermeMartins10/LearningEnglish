import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hearth } from 'src/app/shared/models/hearth.model';

@Component({
  selector: 'app-attemps',
  templateUrl: './attemps.component.html',
  styleUrls: ['./attemps.component.css']
})
export class AttempsComponent implements OnChanges {

  @Input() public attemps: number;
  public hearts: Array<Hearth> = [new Hearth(true), new Hearth(true), new Hearth(true)]

  constructor() { }

  ngOnChanges() {
    if(this.attemps !== this.hearts.length){
      let i = this.hearts.length - this.attemps;
      this.hearts[i - 1].filled = false; 
    }
  }
}
