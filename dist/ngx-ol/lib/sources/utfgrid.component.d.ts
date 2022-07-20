import { OnInit } from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { UTFGrid } from 'ol/source';
import { Config } from 'ol/source/TileJSON';
export declare class SourceUTFGridComponent extends SourceComponent implements OnInit {
    instance: UTFGrid;
    tileJSON: Config;
    url: string;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
}
