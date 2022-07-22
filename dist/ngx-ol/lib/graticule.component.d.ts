import { AfterContentInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';
import * as ɵngcc0 from '@angular/core';
export declare class GraticuleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private map;
    instance: any;
    componentType: string;
    strokeStyle: Stroke;
    showLabels: boolean;
    lonLabelPosition: number;
    latLabelPosition: number;
    constructor(map: MapComponent);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GraticuleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GraticuleComponent, "aol-graticule", never, { "strokeStyle": "strokeStyle"; "showLabels": "showLabels"; "lonLabelPosition": "lonLabelPosition"; "latLabelPosition": "latLabelPosition"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=graticule.component.d.ts.map