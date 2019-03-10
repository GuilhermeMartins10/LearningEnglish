export class Hearth {
    constructor(
        public filled: boolean,
        public urlEmptyHeart: string = '/assets/coracao_vazio.png',
        public urlFilledHeart: string = '/assets/coracao_cheio.png'
    ) {}

    public showHearth(): string {
        if(this.filled){
            return this.urlFilledHeart;
        } else {
            return this.urlEmptyHeart;
        }
    }
}