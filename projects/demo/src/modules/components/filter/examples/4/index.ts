import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiAppearance} from '@taiga-ui/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const Department = {
    IT: 'IT',
    HR: 'HR',
    HeadOffice: 'Heads',
    Delivery: 'Delivery',
    Admin: 'Administrative',
    Business: 'Business lines',
    MB: 'Business technologies',
    Finance: 'Corporate Finance',
    Payment: 'Payment Systems',
    Operating: 'Operating service lines',
    Marketing: 'Media-marketing',
    Security: 'Security Service',
} as const;

@Component({
    selector: 'tui-filter-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFilterExample4 {
    readonly items = Object.values(Department);

    readonly filters$ = new BehaviorSubject<readonly string[]>([]);

    @tuiPure
    get model$(): Observable<readonly string[]> {
        return this.filters$.pipe(
            map(value => (value.length === this.items.length ? [] : value)),
        );
    }

    @tuiPure
    get buttonAppearance$(): Observable<TuiAppearance> {
        return this.filters$.pipe(
            map(value =>
                value.length === this.items.length
                    ? TuiAppearance.WhiteblockActive
                    : TuiAppearance.Whiteblock,
            ),
        );
    }

    onModelChange(model: readonly string[]): void {
        this.filters$.next(model);
    }

    toggleAll(): void {
        this.filters$.next(
            this.items.length === this.filters$.value.length ? [] : [...this.items],
        );
    }
}
