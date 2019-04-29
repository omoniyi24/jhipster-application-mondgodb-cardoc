import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarDocMongodbSharedModule } from 'app/shared';
import {
    DocumentComponent,
    DocumentDetailComponent,
    DocumentUpdateComponent,
    DocumentDeletePopupComponent,
    DocumentDeleteDialogComponent,
    documentRoute,
    documentPopupRoute
} from './';

const ENTITY_STATES = [...documentRoute, ...documentPopupRoute];

@NgModule({
    imports: [CarDocMongodbSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        DocumentComponent,
        DocumentDetailComponent,
        DocumentUpdateComponent,
        DocumentDeleteDialogComponent,
        DocumentDeletePopupComponent
    ],
    entryComponents: [DocumentComponent, DocumentUpdateComponent, DocumentDeleteDialogComponent, DocumentDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarDocMongodbDocumentModule {}
