import { OnDestroy, OnInit } from '@angular/core';
import { Group } from 'ol/layer';
import { LayerComponent } from './layer.component';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class LayerGroupComponent extends LayerComponent implements OnInit, OnDestroy {
    instance: Group;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerGroupComponent, [null, { optional: true; skipSelf: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerGroupComponent, "aol-layer-group", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJncm91cC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibGF5ZXJncm91cC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGF5ZXJHcm91cENvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGluc3RhbmNlOiBHcm91cDtcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgZ3JvdXA/OiBMYXllckdyb3VwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19