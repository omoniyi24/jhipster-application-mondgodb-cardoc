import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ICar } from 'app/shared/model/car.model';
import { AccountService } from 'app/core';
import { CarService } from './car.service';

@Component({
    selector: 'jhi-car',
    templateUrl: './car.component.html'
})
export class CarComponent implements OnInit, OnDestroy {
    cars: ICar[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected carService: CarService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.carService
            .query()
            .pipe(
                filter((res: HttpResponse<ICar[]>) => res.ok),
                map((res: HttpResponse<ICar[]>) => res.body)
            )
            .subscribe(
                (res: ICar[]) => {
                    this.cars = res;
                },
                (res: HttpErrorResponse) => this.onError(res.message)
            );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInCars();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ICar) {
        return item.id;
    }

    registerChangeInCars() {
        this.eventSubscriber = this.eventManager.subscribe('carListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
