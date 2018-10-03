import { Training } from './training';
import { Run } from './run';

export const RUNS: Run[] = [
    {
        id: 1,
        avspeed: 10,
        date: '2018-10-10',
        distance: 10,
        overdue: 'no',
        score: 7,
        time: 60,
        training: {
            id:1,
            name: 'marathon',
            description: 'wooo',
            type: 'test'
        }
    },
    {
        id: 2,
        avspeed: 10,
        date: '2018-10-11',
        distance: 5,
        overdue: 'no',
        score: 7,
        time: 30,
        training: {
            id:1,
            name: 'marathon',
            description: 'wooo',
            type: 'test'
        }
    },
    {
        id: 3,
        avspeed: 10,
        date: '2018-10-12',
        distance: 15,
        overdue: 'no',
        score: 3,
        time: 90,
        training: {
            id:1,
            name: 'marathon',
            description: 'wooo',
            type: 'test'
        }
    }
]