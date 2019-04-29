import { IDocument } from 'app/shared/model/document.model';

export interface ICar {
    id?: string;
    model?: string;
    documents?: IDocument[];
}

export class Car implements ICar {
    constructor(public id?: string, public model?: string, public documents?: IDocument[]) {}
}
