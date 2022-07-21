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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRmZ3JpZC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidXRmZ3JpZC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVVEZHcmlkIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ29sL3NvdXJjZS9UaWxlSlNPTic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3VyY2VVVEZHcmlkQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBpbnN0YW5jZTogVVRGR3JpZDtcbiAgICB0aWxlSlNPTjogQ29uZmlnO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=