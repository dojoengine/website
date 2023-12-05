export interface Article {
    title: string;
    subtitle: string;
    date: string;
    author: string;
    author_desc: string;
    author_img: string;
    tags: string[];
    content: string;
    contentHtml?: string;
    contentReact?: JSX.Element;
    id: string;
    category: string;
    cover: string;
    cover_small: string;
    summary: string[];
}

export enum Categories {
    gaming = 'gaming',

}