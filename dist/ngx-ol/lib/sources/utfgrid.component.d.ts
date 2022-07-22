import { OnInit } from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { UTFGrid } from 'ol/source';
import { Config } from 'ol/source/TileJSON';
import * as ɵngcc0 from '@angular/core';
export declare class SourceUTFGridComponent extends SourceComponent implements OnInit {
    instance: UTFGrid;
    tileJSON: Config;
    url: string;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceUTFGridComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceUTFGridComponent, "aol-source-utfgrid", never, { "tileJSON": "tileJSON"; "url": "url"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=utfgrid.component.d.ts.map