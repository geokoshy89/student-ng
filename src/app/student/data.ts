import { IStudent } from './student.model';

export const students:IStudent[] = [
    {
        id: 123324,
        name: 'George',
        address: 'Leopoldstrasse,Germany'
    },
    {
        id: 453324,
        name: 'Ramanujan',
        address: 'Chennai,India'
    },
    {
        id: 18794,
        name: 'Bhose',
        address: 'Chennai,India'
    },
    {
        id: 1212324,
        name: 'Abdul Kalam',
        address: 'Nileshwaram,India'
    }

];

export const mockresponse={
    status:'1',
    message:'Successfully fetched students',
    data:students
}