export interface IHero {
    id: number;
    name: string;
    starRating: number;
    imageUrl: string;
}

export class Hero implements IHero {
    constructor(
        public id: number,
        public name: string,
        public starRating: number,
        public imageUrl: string) { }
}
