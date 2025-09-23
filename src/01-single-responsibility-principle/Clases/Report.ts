import {IReport} from '../interfaces/IReport';


export class Report implements IReport {

    constructor( public title: string, public content: string) {
    }
    }