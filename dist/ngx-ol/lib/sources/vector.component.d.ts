import { OnInit } from '@angular/core';
import { Vector } from 'ol/source';
import Feature from 'ol/format/Feature';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { LoadingStrategy } from 'ol/source/Vector';
import * as ɵngcc0 from '@angular/core';
export declare class SourceVectorComponent extends SourceComponent implements OnInit {
    instance: Vector;
    overlaps: boolean;
    useSpatialIndex: boolean;
    wrapX: boolean;
    url: string;
    format: Feature;
    strategy: LoadingStrategy;
    constructor(layer: LayerVectorComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceVectorComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceVectorComponent, "aol-source-vector", never, { "overlaps": "overlaps"; "useSpatialIndex": "useSpatialIndex"; "wrapX": "wrapX"; "url": "url"; "format": "format"; "strategy": "strategy"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ2ZWN0b3IuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnb2wvc291cmNlL1ZlY3Rvcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTb3VyY2VWZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGluc3RhbmNlOiBWZWN0b3I7XG4gICAgb3ZlcmxhcHM6IGJvb2xlYW47XG4gICAgdXNlU3BhdGlhbEluZGV4OiBib29sZWFuO1xuICAgIHdyYXBYOiBib29sZWFuO1xuICAgIHVybDogc3RyaW5nO1xuICAgIGZvcm1hdDogRmVhdHVyZTtcbiAgICBzdHJhdGVneTogTG9hZGluZ1N0cmF0ZWd5O1xuICAgIGNvbnN0cnVjdG9yKGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbn1cbiJdfQ==