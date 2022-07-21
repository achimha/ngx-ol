import { AfterContentInit } from '@angular/core';
import { VectorTile } from 'ol/source';
import Feature from 'ol/format/Feature';
import TileGrid from 'ol/tilegrid/TileGrid';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
import { ProjectionLike } from 'ol/proj';
import { UrlFunction } from 'ol/Tile';
import * as ɵngcc0 from '@angular/core';
export declare class SourceVectorTileComponent extends SourceComponent implements AfterContentInit {
    instance: VectorTile;
    cacheSize: number;
    overlaps: boolean;
    projection: ProjectionLike;
    tilePixelRatio: number;
    tileUrlFunction: UrlFunction;
    url: string;
    urls: string[];
    wrapX: boolean;
    formatComponent: FormatComponent;
    format: Feature;
    tileGridComponent: TileGridComponent;
    tileGrid: TileGrid;
    constructor(layer: LayerVectorTileComponent);
    ngAfterContentInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceVectorTileComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceVectorTileComponent, "aol-source-vectortile", never, { "cacheSize": "cacheSize"; "overlaps": "overlaps"; "projection": "projection"; "tilePixelRatio": "tilePixelRatio"; "tileUrlFunction": "tileUrlFunction"; "url": "url"; "urls": "urls"; "wrapX": "wrapX"; }, {}, ["formatComponent", "tileGridComponent"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmVjdG9ydGlsZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZWN0b3JUaWxlIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XG5pbXBvcnQgeyBMYXllclZlY3RvclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXRDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtYXRzL2Zvcm1hdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBVcmxGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIGluc3RhbmNlOiBWZWN0b3JUaWxlO1xuICAgIGNhY2hlU2l6ZTogbnVtYmVyO1xuICAgIG92ZXJsYXBzOiBib29sZWFuO1xuICAgIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICAgIHRpbGVQaXhlbFJhdGlvOiBudW1iZXI7XG4gICAgdGlsZVVybEZ1bmN0aW9uOiBVcmxGdW5jdGlvbjtcbiAgICB1cmw6IHN0cmluZztcbiAgICB1cmxzOiBzdHJpbmdbXTtcbiAgICB3cmFwWDogYm9vbGVhbjtcbiAgICBmb3JtYXRDb21wb25lbnQ6IEZvcm1hdENvbXBvbmVudDtcbiAgICBmb3JtYXQ6IEZlYXR1cmU7XG4gICAgdGlsZUdyaWRDb21wb25lbnQ6IFRpbGVHcmlkQ29tcG9uZW50O1xuICAgIHRpbGVHcmlkOiBUaWxlR3JpZDtcbiAgICBjb25zdHJ1Y3RvcihsYXllcjogTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50KTtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbn1cbiJdfQ==