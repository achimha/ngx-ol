import { AfterContentInit } from '@angular/core';
import { VectorTile } from 'ol';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmVjdG9ydGlsZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZWN0b3JUaWxlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcbmltcG9ydCB7IExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdENvbXBvbmVudCB9IGZyb20gJy4uL2Zvcm1hdHMvZm9ybWF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IFVybEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgaW5zdGFuY2U6IFZlY3RvclRpbGU7XG4gICAgY2FjaGVTaXplOiBudW1iZXI7XG4gICAgb3ZlcmxhcHM6IGJvb2xlYW47XG4gICAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gICAgdGlsZVBpeGVsUmF0aW86IG51bWJlcjtcbiAgICB0aWxlVXJsRnVuY3Rpb246IFVybEZ1bmN0aW9uO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHVybHM6IHN0cmluZ1tdO1xuICAgIHdyYXBYOiBib29sZWFuO1xuICAgIGZvcm1hdENvbXBvbmVudDogRm9ybWF0Q29tcG9uZW50O1xuICAgIGZvcm1hdDogRmVhdHVyZTtcbiAgICB0aWxlR3JpZENvbXBvbmVudDogVGlsZUdyaWRDb21wb25lbnQ7XG4gICAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xuICAgIGNvbnN0cnVjdG9yKGxheWVyOiBMYXllclZlY3RvclRpbGVDb21wb25lbnQpO1xuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkO1xufVxuIl19