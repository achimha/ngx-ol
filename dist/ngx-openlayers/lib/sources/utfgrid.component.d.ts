import { OnInit } from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { UTFGrid } from 'ol/source';
import * as ɵngcc0 from '@angular/core';
export declare class SourceUTFGridComponent extends SourceComponent implements OnInit {
    instance: UTFGrid;
    tileJSON: JSON;
    url: string;
    constructor(layer: LayerTileComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceUTFGridComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceUTFGridComponent, "aol-source-utfgrid", never, { "tileJSON": "tileJSON"; "url": "url"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRmZ3JpZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidXRmZ3JpZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVVRGR3JpZCB9IGZyb20gJ29sL3NvdXJjZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3VyY2VVVEZHcmlkQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpbnN0YW5jZTogVVRGR3JpZDtcbiAgICB0aWxlSlNPTjogSlNPTjtcbiAgICB1cmw6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19