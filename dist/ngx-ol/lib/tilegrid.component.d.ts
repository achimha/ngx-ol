import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';
import * as ɵngcc0 from '@angular/core';
export declare class TileGridComponent implements OnInit, OnChanges {
    instance: TileGrid;
    extent: Extent;
    maxZoom: number;
    minZoom: number;
    tileSize: number | Size;
    origin?: Coordinate;
    resolutions: number[];
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TileGridComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TileGridComponent, "aol-tilegrid", never, { "extent": "extent"; "maxZoom": "maxZoom"; "minZoom": "minZoom"; "tileSize": "tileSize"; "origin": "origin"; "resolutions": "resolutions"; }, {}, never, never>;
}

//# sourceMappingURL=tilegrid.component.d.ts.map