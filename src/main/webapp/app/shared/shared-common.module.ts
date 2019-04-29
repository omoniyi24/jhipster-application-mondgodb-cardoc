import { NgModule } from '@angular/core';

import { CarDocMongodbSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CarDocMongodbSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CarDocMongodbSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CarDocMongodbSharedCommonModule {}
