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

//# sourceMappingURL=tilewms.component.d.ts.map