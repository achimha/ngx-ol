import { AfterContentInit, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { WMTS as SourceWMTS } from 'ol/source';
import WMTS from 'ol/tilegrid/WMTS';
import { ProjectionLike } from 'ol/proj';
import { LoadFunction } from 'ol/Tile';
import { TileSourceEvent } from 'ol/source/Tile';
import { RequestEncoding } from 'ol/source/WMTS';
import * as ɵngcc0 from '@angular/core';
export declare class SourceTileWMTSComponent extends SourceComponent implements AfterContentInit, OnChanges {
    instance: SourceWMTS;
    cacheSize?: number;
    crossOrigin?: string;
    tileGrid: WMTS;
    projection: ProjectionLike;
    reprojectionErrorThreshold?: number;
    requestEncoding?: RequestEncoding | undefined;
    layer: string;
    style: string;
    tileClass?: any;
    tilePixelRatio?: number;
    version?: string;
    format?: string;
    matrixSet: string;
    dimensions?: any;
    url?: string;
    tileLoadFunction?: LoadFunction;
    urls?: string[];
    wrapX?: boolean;
    tileLoadStart: EventEmitter<TileSourceEvent>;
    tileLoadEnd: EventEmitter<TileSourceEvent>;
    tileLoadError: EventEmitter<TileSourceEvent>;
    tileGridWMTS: TileGridWMTSComponent;
    constructor(layer: LayerTileComponent);
    ngOnChanges(changes: SimpleChanges): void;
    setLayerSource(): void;
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceTileWMTSComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceTileWMTSComponent, "aol-source-tilewmts", never, { "url": "url"; "tileGrid": "tileGrid"; "cacheSize": "cacheSize"; "crossOrigin": "crossOrigin"; "projection": "projection"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "requestEncoding": "requestEncoding"; "layer": "layer"; "style": "style"; "tileClass": "tileClass"; "tilePixelRatio": "tilePixelRatio"; "version": "version"; "format": "format"; "matrixSet": "matrixSet"; "dimensions": "dimensions"; "tileLoadFunction": "tileLoadFunction"; "urls": "urls"; "wrapX": "wrapX"; }, { "tileLoadStart": "tileLoadStart"; "tileLoadEnd": "tileLoadEnd"; "tileLoadError": "tileLoadError"; }, ["tileGridWMTS"], ["*"]>;
}

//# sourceMappingURL=tilewmts.component.d.ts.map