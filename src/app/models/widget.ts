export class Widget {
    id: number;
    type: string;

    // For images
    url?: string;

    // For text
    text?: string;

    constructor(id: number, type: string) {
        this.id = id;
        this.type = type;
    }
}