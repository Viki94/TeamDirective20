export class Pet {
    creator: string;
    content: string;
    date: string;
    img: string;

    constructor(creator: string, content: string, date: string, img: string) {
        this.creator = creator;
        this.content = content;
        this.date = date;
        this.img = img;
    }
};