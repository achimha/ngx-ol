import { OnInit } from '@angular/core';
import { TileJSON } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import * as ɵngcc0 from '@angular/core';
export declare class SourceTileJSONComponent extends SourceComponent implements OnInit {
    instance: TileJSON;
    url: string;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceTileJSONComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceTileJSONComponent, "aol-source-tilejson", never, { "url": "url"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=tilejson.component.d.ts.map