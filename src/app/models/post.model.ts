export class Post {
    id: number;
    caption: string;
    info: {where: string, with: string};
    imgSrc: string;
    videoSrc: string;
    description: string;
    likes: any[];
    comments: any[];
    creator: string;

    constructor(caption: string, info: {where: string, with: string}, imgSrc: string, videoSrc: string, description: string, likes: any[], comments: any[], creator: string) {
        this.id = 0;
        this.caption = caption;
        this.info = info;
        this.imgSrc = imgSrc;
        this.videoSrc = videoSrc;
        this.description = description;
        this.likes = likes;
        this.comments = comments;
        this.creator = creator;
    }
};