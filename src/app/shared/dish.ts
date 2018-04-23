import { Comment } from '../comment';
export class Dish {
    name: string;
    images: string;
    category: string;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}