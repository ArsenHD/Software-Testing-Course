export default class Star {
    readonly name: string;
    readonly distance: number;
    readonly age: number | null;
    readonly mass: number | null;
    readonly imageUrl: string | null;
    readonly id: number;
    constructor(name: string, distance: number, age?: number | null, mass?: number | null, imageUrl?: string | null, id?: number);
}
