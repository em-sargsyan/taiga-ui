import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoModule} from '@maskito/angular';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {
    TuiCalendarModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiPrimitiveTextfieldModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiInputTagModule} from '@taiga-ui/kit/components/input-tag';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputDateMultiComponent} from './input-date-multi.component';

@NgModule({
    imports: [
        CommonModule,
        MaskitoModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiCalendarModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiInputTagModule,
        FormsModule,
        TuiMapperPipeModule,
        TuiHostedDropdownModule,
        TuiTextfieldControllerModule,
        TuiPrimitiveTextfieldModule,
    ],
    declarations: [TuiInputDateMultiComponent],
    exports: [TuiInputDateMultiComponent],
})
export class TuiInputDateMultiModule {}
