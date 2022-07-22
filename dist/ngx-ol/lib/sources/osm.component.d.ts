import { AfterContentInit, EventEmitter } from '@angular/core';
import { OSM } from 'ol/source';
import { AttributionLike } from 'ol/source/Source';
import { TileSourceEvent } from 'ol/source/Tile';
import { LoadFunction } from 'ol/Tile';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceXYZComponent } from './xyz.component';
import * as ɵngcc0 from '@angular/core';
export declare class SourceOsmComponent extends SourceXYZComponent implements AfterContentInit {
    protected layer?: LayerTileComponent;
    instance: OSM;
    attributions: AttributionLike;
    cacheSize: number;
    crossOrigin: string;
    maxZoom: number;
    opaque: boolean;
    reprojectionErrorThreshold: number;
    tileLoadFunction: LoadFunction;
    url: string;
    wrapX: boolean;
    tileLoadStart: EventEmitter<TileSourceEvent>;
    tileLoadEnd: EventEmitter<TileSourceEvent>;
    tileLoadError: EventEmitter<TileSourceEvent>;
    constructor(layer?: LayerTileComponent);
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceOsmComponent, [{ optional: true; host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceOsmComponent, "aol-source-osm", never, { "attributions": "attributions"; "cacheSize": "cacheSize"; "crossOrigin": "crossOrigin"; "maxZoom": "maxZoom"; "opaque": "opaque"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "tileLoadFunction": "tileLoadFunction"; "url": "url"; "wrapX": "wrapX"; }, { "tileLoadStart": "tileLoadStart"; "tileLoadEnd": "tileLoadEnd"; "tileLoadError": "tileLoadError"; }, never, never>;
}

//# sourceMappingURL=osm.component.d.ts.map