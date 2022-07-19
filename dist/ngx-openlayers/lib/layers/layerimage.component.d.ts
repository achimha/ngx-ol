import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Image } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent';
import * as ɵngcc0 from '@angular/core';
export declare class LayerImageComponent extends LayerComponent implements OnInit, OnChanges {
    source: Image;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJpbWFnZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibGF5ZXJpbWFnZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExheWVySW1hZ2VDb21wb25lbnQgZXh0ZW5kcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBzb3VyY2U6IEltYWdlO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGV4dGVudDogRXh0ZW50O1xuICAgIG1pblJlc29sdXRpb246IG51bWJlcjtcbiAgICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG4gICAgekluZGV4OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==