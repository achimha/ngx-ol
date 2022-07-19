import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileWMS } from 'ol/source';
import { TileGrid } from 'ol/tilegrid';
import { LoadFunction } from 'ol/Tile';
import * as ɵngcc0 from '@angular/core';
export declare class SourceTileWMSComponent extends SourceComponent implements OnChanges, OnInit {
    instance: TileWMS;
    cacheSize: number;
    crossOrigin: string;
    gutter: number;
    hidpi: boolean;
    params: {
        [key: string]: any;
    };
    projection: string;
    reprojectionErrorThreshold: number;
    serverType: string;
    tileGrid: TileGrid;
    tileLoadFunction: LoadFunction;
    url: string;
    urls: string[];
    wrapX: boolean;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceTileWMSComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceTileWMSComponent, "aol-source-tilewms", never, { "cacheSize": "cacheSize"; "crossOrigin": "crossOrigin"; "gutter": "gutter"; "hidpi": "hidpi"; "params": "params"; "projection": "projection"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "serverType": "serverType"; "tileGrid": "tileGrid"; "tileLoadFunction": "tileLoadFunction"; "url": "url"; "urls": "urls"; "wrapX": "wrapX"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidGlsZXdtcy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbGVXTVMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgVGlsZUdyaWQgfSBmcm9tICdvbC90aWxlZ3JpZCc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNvdXJjZVRpbGVXTVNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gICAgaW5zdGFuY2U6IFRpbGVXTVM7XG4gICAgY2FjaGVTaXplOiBudW1iZXI7XG4gICAgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgICBndXR0ZXI6IG51bWJlcjtcbiAgICBoaWRwaTogYm9vbGVhbjtcbiAgICBwYXJhbXM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgIH07XG4gICAgcHJvamVjdGlvbjogc3RyaW5nO1xuICAgIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gICAgc2VydmVyVHlwZTogc3RyaW5nO1xuICAgIHRpbGVHcmlkOiBUaWxlR3JpZDtcbiAgICB0aWxlTG9hZEZ1bmN0aW9uOiBMb2FkRnVuY3Rpb247XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgdXJsczogc3RyaW5nW107XG4gICAgd3JhcFg6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IobGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==