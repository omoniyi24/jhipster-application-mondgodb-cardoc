import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'car',
                loadChildren: './car/car.module#CarDocMongodbCarModule'
            },
            {
                path: 'document',
                loadChildren: './document/document.module#CarDocMongodbDocumentModule'
            },
            {
                path: 'content',
                loadChildren: './content/content.module#CarDocMongodbContentModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarDocMongodbEntityModule {}
