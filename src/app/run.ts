import { Training } from "./training";

export class Run {
    id: number;
    date: string;
    distance: number;
    title: string;
    time: number;
    avspeed: number;
    score: number;
    status: string;
    comment: string;
    training: Training;
}