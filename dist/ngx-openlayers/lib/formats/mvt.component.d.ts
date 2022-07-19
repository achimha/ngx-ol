import { FormatComponent } from './format.component';
import { MVT } from 'ol/format';
import { Geometry } from 'ol/geom';
import GeometryType from 'ol/geom/GeometryType';
import * as ɵngcc0 from '@angular/core';
export declare class FormatMVTComponent extends FormatComponent {
    instance: MVT;
    featureClass: ((geom: Geometry | {
        [k: string]: any;
    }) => any) | ((geom: GeometryType, arg2: number[], arg3: number[] | number[][], arg4: {
        [k: string]: any;
    }) => any);
    geometryName: string;
    layerName: string;
    layers: string[];
    constructor();
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FormatMVTComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FormatMVTComponent, "aol-format-mvt", never, { "featureClass": "featureClass"; "geometryName": "geometryName"; "layerName": "layerName"; "layers": "layers"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZ0LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJtdnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtYXRDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1hdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTVZUIH0gZnJvbSAnb2wvZm9ybWF0JztcbmltcG9ydCB7IEdlb21ldHJ5IH0gZnJvbSAnb2wvZ2VvbSc7XG5pbXBvcnQgR2VvbWV0cnlUeXBlIGZyb20gJ29sL2dlb20vR2VvbWV0cnlUeXBlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvcm1hdE1WVENvbXBvbmVudCBleHRlbmRzIEZvcm1hdENvbXBvbmVudCB7XG4gICAgaW5zdGFuY2U6IE1WVDtcbiAgICBmZWF0dXJlQ2xhc3M6ICgoZ2VvbTogR2VvbWV0cnkgfCB7XG4gICAgICAgIFtrOiBzdHJpbmddOiBhbnk7XG4gICAgfSkgPT4gYW55KSB8ICgoZ2VvbTogR2VvbWV0cnlUeXBlLCBhcmcyOiBudW1iZXJbXSwgYXJnMzogbnVtYmVyW10gfCBudW1iZXJbXVtdLCBhcmc0OiB7XG4gICAgICAgIFtrOiBzdHJpbmddOiBhbnk7XG4gICAgfSkgPT4gYW55KTtcbiAgICBnZW9tZXRyeU5hbWU6IHN0cmluZztcbiAgICBsYXllck5hbWU6IHN0cmluZztcbiAgICBsYXllcnM6IHN0cmluZ1tdO1xuICAgIGNvbnN0cnVjdG9yKCk7XG59XG4iXX0=