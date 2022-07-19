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
    tileSizes?: (number | Size)[];
    widths?: number[];
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TileGridWMTSComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TileGridWMTSComponent, "aol-tilegrid-wmts", never, { "origin": "origin"; "origins": "origins"; "resolutions": "resolutions"; "matrixIds": "matrixIds"; "sizes": "sizes"; "tileSizes": "tileSizes"; "widths": "widths"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ0aWxlZ3JpZHdtdHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBXTVRTIGZyb20gJ29sL3RpbGVncmlkL1dNVFMnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RpbGVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUaWxlR3JpZFdNVFNDb21wb25lbnQgZXh0ZW5kcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaW5zdGFuY2U6IFdNVFM7XG4gICAgb3JpZ2luPzogQ29vcmRpbmF0ZTtcbiAgICBvcmlnaW5zPzogQ29vcmRpbmF0ZVtdO1xuICAgIHJlc29sdXRpb25zOiBudW1iZXJbXTtcbiAgICBtYXRyaXhJZHM6IHN0cmluZ1tdO1xuICAgIHNpemVzPzogU2l6ZVtdO1xuICAgIHRpbGVTaXplcz86IChudW1iZXIgfCBTaXplKVtdO1xuICAgIHdpZHRocz86IG51bWJlcltdO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=