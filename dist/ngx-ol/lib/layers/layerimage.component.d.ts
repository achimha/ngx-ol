import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent';
import * as ɵngcc0 from '@angular/core';
export declare class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
    opacity: number;
    visible: boolean;
    extent: Extent;
    minResolution: number;
    maxResolution: number;
    zIndex: number;
    constructor(map: MapComponent, group?: LayerGroupComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerImageComponent, [null, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LayerImageComponent, "aol-layer-image", never, { "opacity": "opacity"; "visible": "visible"; "extent": "extent"; "minResolution": "minResolution"; "maxResolution": "maxResolution"; "zIndex": "zIndex"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJpbWFnZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibGF5ZXJpbWFnZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExheWVySW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICBleHRlbnQ6IEV4dGVudDtcbiAgICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gICAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuICAgIHpJbmRleDogbnVtYmVyO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBncm91cD86IExheWVyR3JvdXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG59XG4iXX0=