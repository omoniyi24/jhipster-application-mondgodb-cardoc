import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarDocMongodbSharedModule } from 'app/shared';
import {
    CarComponent,
    CarDetailComponent,
    CarUpdateComponent,
    CarDeletePopupComponent,
    CarDeleteDialogComponent,
    carRoute,
    carPopupRoute
} from './';

const ENTITY_STATES = [...carRoute, ...carPopupRoute];

@NgModule({
    imports: [CarDocMongodbSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [CarComponent, CarDetailComponent, CarUpdateComponent, CarDeleteDialogComponent, CarDeletePopupComponent],
    entryComponents: [CarComponent, CarUpdateComponent, CarDeleteDialogComponent, CarDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarDocMongodbCarModule {}
