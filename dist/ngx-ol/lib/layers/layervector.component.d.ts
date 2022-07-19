import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { Vector } from 'ol/layer';
import { Style } from 'ol/style';
import { StyleFunction } from 'ol/style/Style';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as ɵngcc0 from '@angular/core';
export declare class LayerVectorComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
    source: Vector;
    renderBuffer: number;
    style: Style | Style[] | StyleFunction;
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerVectorComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerVectorComponent, "aol-layer-vector", never, { "renderBuffer": "renderBuffer"; "style": "style"; "updateWhileAnimating": "updateWhileAnimating"; "updateWhileInteracting": "updateWhileInteracting"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3IuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImxheWVydmVjdG9yLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL2xheWVyJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGF5ZXJWZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAgIHNvdXJjZTogVmVjdG9yO1xuICAgIHJlbmRlckJ1ZmZlcjogbnVtYmVyO1xuICAgIHN0eWxlOiBTdHlsZSB8IFN0eWxlW10gfCBTdHlsZUZ1bmN0aW9uO1xuICAgIHVwZGF0ZVdoaWxlQW5pbWF0aW5nOiBib29sZWFuO1xuICAgIHVwZGF0ZVdoaWxlSW50ZXJhY3Rpbmc6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==