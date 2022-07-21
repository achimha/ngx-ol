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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZ21hcHMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImJpbmdtYXBzLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCaW5nTWFwcyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW5zdGFuY2U6IEJpbmdNYXBzO1xuICAgIGNhY2hlU2l6ZTogbnVtYmVyO1xuICAgIGhpZHBpOiBib29sZWFuO1xuICAgIGN1bHR1cmU6IHN0cmluZztcbiAgICBrZXk6IHN0cmluZztcbiAgICBpbWFnZXJ5U2V0OiAnUm9hZCcgfCAnQWVyaWFsJyB8ICdBZXJpYWxXaXRoTGFiZWxzJyB8ICdjb2xsaW5zQmFydCcgfCAnb3JkbmFuY2VTdXJ2ZXknO1xuICAgIG1heFpvb206IG51bWJlcjtcbiAgICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICAgIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcbiAgICB3cmFwWDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19