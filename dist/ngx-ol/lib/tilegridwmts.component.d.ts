import { OnInit } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';
import * as ɵngcc0 from '@angular/core';
export declare class TileGridWMTSComponent extends TileGridComponent implements OnInit {
    instance: WMTS;
    origin?: Coordinate;
    origins?: Coordinate[];
    resolutions: number[];
    matrixIds: string[];
    sizes?: Size[];
    tileSizes?: Size[];
    widths?: number[];
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TileGridWMTSComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TileGridWMTSComponent, "aol-tilegrid-wmts", never, { "origin": "origin"; "origins": "origins"; "resolutions": "resolutions"; "matrixIds": "matrixIds"; "sizes": "sizes"; "tileSizes": "tileSizes"; "widths": "widths"; }, {}, never, never>;
}

//# sourceMappingURL=tilegridwmts.component.d.ts.map