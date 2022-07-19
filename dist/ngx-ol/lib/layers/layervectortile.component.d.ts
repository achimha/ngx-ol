import { OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { RenderType } from 'ol/layer/VectorTile';
import { Feature } from 'ol';
import { Style } from 'ol/style';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { StyleFunction } from 'ol/style/Style';
import * as ɵngcc0 from '@angular/core';
export declare class LayerVectorTileComponent extends LayerComponent implements OnInit, OnChanges {
    renderBuffer: number;
    renderMode: RenderType | string;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJsYXllcnZlY3RvcnRpbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZW5kZXJUeXBlIH0gZnJvbSAnb2wvbGF5ZXIvVmVjdG9yVGlsZSc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIHJlbmRlckJ1ZmZlcjogbnVtYmVyO1xuICAgIHJlbmRlck1vZGU6IFJlbmRlclR5cGUgfCBzdHJpbmc7XG4gICAgcmVuZGVyT3JkZXI6IChmZWF0dXJlMTogRmVhdHVyZSwgZmVhdHVyZTI6IEZlYXR1cmUpID0+IG51bWJlcjtcbiAgICBzdHlsZTogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcbiAgICB1cGRhdGVXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcbiAgICB1cGRhdGVXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==