import { AfterContentInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Size } from 'ol/size';
import { XYZ } from 'ol/source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LoadFunction, UrlFunction } from 'ol/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import * as ɵngcc0 from '@angular/core';
export declare class SourceXYZComponent extends SourceComponent implements AfterContentInit, OnChanges {
    protected layer?: LayerTileComponent;
    instance: XYZ;
    cacheSize: number;
    crossOrigin: string;
    opaque: boolean;
    projection: string;
    reprojectionErrorThreshold: number;
    minZoom: number;
    maxZoom: number;
    tileGrid: TileGrid;
    tileLoadFunction?: LoadFunction;
    tilePixelRatio: number;
    tileSize: number | Size;
    tileUrlFunction?: UrlFunction;
    url: string;
    urls: string[];
    wrapX: boolean;
    tileGridXYZ: TileGridComponent;
    tileLoadStart: EventEmitter<TileSourceEvent>;
    tileLoadEnd: EventEmitter<TileSourceEvent>;
    tileLoadError: EventEmitter<TileSourceEvent>;
    constructor(layer?: LayerTileComponent);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    init(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceXYZComponent, [{ optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceXYZComponent, "aol-source-xyz", never, { "tileGrid": "tileGrid"; "cacheSize": "cacheSize"; "crossOrigin": "crossOrigin"; "opaque": "opaque"; "projection": "projection"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "minZoom": "minZoom"; "maxZoom": "maxZoom"; "tileLoadFunction": "tileLoadFunction"; "tilePixelRatio": "tilePixelRatio"; "tileSize": "tileSize"; "tileUrlFunction": "tileUrlFunction"; "url": "url"; "urls": "urls"; "wrapX": "wrapX"; }, { "tileLoadStart": "tileLoadStart"; "tileLoadEnd": "tileLoadEnd"; "tileLoadError": "tileLoadError"; }, ["tileGridXYZ"], ["*"]>;
}

//# sourceMappingURL=xyz.component.d.ts.map