import { Run } from "./run";
export class Training {
    totalDistance: number;
    totalFinishedDistance: number;
    totalTime: number;
    totalFinishedTime: number;
    numberOfRuns: number;
    totalFinishedRuns: number;
    runs: Array<Run>;
    id: number;
    name: string;
    description: string;
    type: string;
}