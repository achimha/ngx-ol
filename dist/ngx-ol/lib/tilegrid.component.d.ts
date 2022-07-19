import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import TileGrid from 'ol/tilegrid/TileGrid';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { Size } from 'ol/size';
import * as ɵngcc0 from '@angular/core';
export declare class TileGridComponent implements OnInit, OnChanges {
    instance: TileGrid;
    extent: Extent;
    maxZoom: number;
    minZoom: number;
    tileSize: number | Size;
    origin?: Coordinate;
    resolutions: number[];
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TileGridComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TileGridComponent, "aol-tilegrid", never, { "extent": "extent"; "maxZoom": "maxZoom"; "minZoom": "minZoom"; "tileSize": "tileSize"; "origin": "origin"; "resolutions": "resolutions"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRpbGVncmlkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGlsZUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgaW5zdGFuY2U6IFRpbGVHcmlkO1xuICAgIGV4dGVudDogRXh0ZW50O1xuICAgIG1heFpvb206IG51bWJlcjtcbiAgICBtaW5ab29tOiBudW1iZXI7XG4gICAgdGlsZVNpemU6IG51bWJlciB8IFNpemU7XG4gICAgb3JpZ2luPzogQ29vcmRpbmF0ZTtcbiAgICByZXNvbHV0aW9uczogbnVtYmVyW107XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==