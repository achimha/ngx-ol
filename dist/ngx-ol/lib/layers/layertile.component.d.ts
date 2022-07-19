import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Tile } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import * as ɵngcc0 from '@angular/core';
export declare class LayerTileComponent extends LayerComponent implements OnInit, OnDestroy, OnChanges {
    source: Tile;
    preload: number;
    useInterimTilesOnError: boolean;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerTileComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerTileComponent, "aol-layer-tile", never, { "preload": "preload"; "useInterimTilesOnError": "useInterimTilesOnError"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJ0aWxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJsYXllcnRpbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExheWVyVGlsZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gICAgc291cmNlOiBUaWxlO1xuICAgIHByZWxvYWQ6IG51bWJlcjtcbiAgICB1c2VJbnRlcmltVGlsZXNPbkVycm9yOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBncm91cD86IExheWVyR3JvdXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG59XG4iXX0=