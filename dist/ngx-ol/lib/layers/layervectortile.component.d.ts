import { OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Feature } from 'ol';
import { Style } from 'ol/style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { StyleFunction } from 'ol/style/Style';
import * as ɵngcc0 from '@angular/core';
export declare class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges {
    renderBuffer: number;
    renderMode: any | string;
    renderOrder: (feature1: Feature, feature2: Feature) => number;
    style: Style | Style[] | StyleFunction;
    updateWhileAnimating: boolean;
    updateWhileInteracting: boolean;
    visible: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerVectorTileComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerVectorTileComponent, "aol-layer-vectortile", never, { "renderBuffer": "renderBuffer"; "renderMode": "renderMode"; "renderOrder": "renderOrder"; "style": "style"; "updateWhileAnimating": "updateWhileAnimating"; "updateWhileInteracting": "updateWhileInteracting"; "visible": "visible"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJsYXllcnZlY3RvcnRpbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlRnVuY3Rpb24gfSBmcm9tICdvbC9zdHlsZS9TdHlsZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYXllclZlY3RvclRpbGVDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICByZW5kZXJCdWZmZXI6IG51bWJlcjtcbiAgICByZW5kZXJNb2RlOiBhbnkgfCBzdHJpbmc7XG4gICAgcmVuZGVyT3JkZXI6IChmZWF0dXJlMTogRmVhdHVyZSwgZmVhdHVyZTI6IEZlYXR1cmUpID0+IG51bWJlcjtcbiAgICBzdHlsZTogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcbiAgICB1cGRhdGVXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcbiAgICB1cGRhdGVXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==