import { AfterViewInit, QueryList } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
import * as ɵngcc0 from '@angular/core';
export declare class AttributionsComponent implements AfterViewInit {
    private source;
    instance: Array<string>;
    attributions: QueryList<AttributionComponent>;
    constructor(source: SourceComponent);
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AttributionsComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AttributionsComponent, "aol-attributions", never, {}, {}, ["attributions"], ["*"]>;
}

//# sourceMappingURL=attributions.component.d.ts.map