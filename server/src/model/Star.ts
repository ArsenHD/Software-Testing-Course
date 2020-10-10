export default class Star {
    constructor(
        public readonly name: string,
        public readonly distance: number,
        public readonly age: number | null = null,
        public readonly mass: number | null = null,
        public readonly imageUrl: string | null = null,
        public readonly id: number = 0
    ) {}
}