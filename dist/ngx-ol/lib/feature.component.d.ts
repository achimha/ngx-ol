import { OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';
import * as ɵngcc0 from '@angular/core';
export declare class FeatureComponent implements OnInit, OnDestroy, OnChanges {
    private host;
    componentType: string;
    instance: Feature;
    id: string | number | undefined;
    constructor(host: SourceVectorComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FeatureComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FeatureComponent, "aol-feature", never, { "id": "id"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=feature.component.d.ts.map