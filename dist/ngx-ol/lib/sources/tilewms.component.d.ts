import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileWMS } from 'ol/source';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LoadFunction } from 'ol/Tile';
import { ServerType } from 'ol/source/wms';
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
    serverType: ServerType;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidGlsZXdtcy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZVdNUyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgeyBTZXJ2ZXJUeXBlIH0gZnJvbSAnb2wvc291cmNlL3dtcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3VyY2VUaWxlV01TQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAgIGluc3RhbmNlOiBUaWxlV01TO1xuICAgIGNhY2hlU2l6ZTogbnVtYmVyO1xuICAgIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gICAgZ3V0dGVyOiBudW1iZXI7XG4gICAgaGlkcGk6IGJvb2xlYW47XG4gICAgcGFyYW1zOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgICB9O1xuICAgIHByb2plY3Rpb246IHN0cmluZztcbiAgICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICAgIHNlcnZlclR5cGU6IFNlcnZlclR5cGU7XG4gICAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xuICAgIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcbiAgICB1cmw6IHN0cmluZztcbiAgICB1cmxzOiBzdHJpbmdbXTtcbiAgICB3cmFwWDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xufVxuIl19