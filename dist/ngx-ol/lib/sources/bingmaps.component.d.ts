import { OnInit } from '@angular/core';
import { BingMaps } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { LoadFunction } from 'ol/Tile';
import * as ɵngcc0 from '@angular/core';
export declare class SourceBingmapsComponent extends SourceComponent implements OnInit {
    instance: BingMaps;
    cacheSize: number;
    hidpi: boolean;
    culture: string;
    key: string;
    imagerySet: 'Road' | 'Aerial' | 'AerialWithLabels' | 'collinsBart' | 'ordnanceSurvey';
    maxZoom: number;
    reprojectionErrorThreshold: number;
    tileLoadFunction: LoadFunction;
    wrapX: boolean;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceBingmapsComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceBingmapsComponent, "aol-source-bingmaps", never, { "imagerySet": "imagerySet"; "cacheSize": "cacheSize"; "hidpi": "hidpi"; "culture": "culture"; "key": "key"; "maxZoom": "maxZoom"; "reprojectionErrorThreshold": "reprojectionErrorThreshold"; "tileLoadFunction": "tileLoadFunction"; "wrapX": "wrapX"; }, {}, never, never>;
}

//# sourceMappingURL=bingmaps.component.d.ts.map