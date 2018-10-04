import { Training } from './training';
import { Run } from './run';

export const RUNS: Run[] = [
    {
        id: 1,
        date: '2018-09-27',
        distance: 10,
        title: "first run yo!",
        time: 60,
        avspeed: 6,
        score: 7,
        overdue: 'overdueRun',
        finished: 'yes',
        comment: 'pretty nice weather!',
        training: {
            id:1,
            name: 'marathon',
            description: 'wooo',
            type: 'test'
        }        
    },
    {
        id: 2,
        date: '2018-10-01',
        distance: 5,
        title: "short 5k!",
        time: 30,
        avspeed: 6,
        score: 7,
        overdue: 'no',
        finished: 'yes',
        comment: 'pretty nice weather!',
        training: {
            id:1,
            name: 'marathon',
            description: 'wooo',
            type: 'test'
        }        
    },
    {
        id: 3,
        date: '2018-10-03',
        distance: 20,
        title: "first run yo!",
        time: 130,
        avspeed: 6.5,
        score: 6,
        overdue: 'no',
        finished: 'yes',
        comment: 'pretty nice weather!',
        training: {
            id:1,
            name: 'marathon',
            description: 'wooo',
            type: 'test'
        }        
    },
    {
        id: 4,
        date: '2018-10-06',
        distance: 15,
        title: "afternoon 15k",
        time: null,
        avspeed: null,
        score: null,
        overdue: 'no',
        finished: 'no',
        comment: '',
        training: {
            id:1,
            name: 'marathon',
            description: 'wooo',
            type: 'test'
        }        
    }
]