import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPoint } from 'ol/geom';
import * as ɵngcc0 from '@angular/core';
export declare class GeometryMultiPointComponent extends SimpleGeometryComponent implements OnInit {
    componentType: string;
    instance: MultiPoint;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GeometryMultiPointComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GeometryMultiPointComponent, "aol-geometry-multipoint", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnZW9tZXRyeW11bHRpcG9pbnQuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aVBvaW50IH0gZnJvbSAnb2wvZ2VvbSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xuICAgIGluc3RhbmNlOiBNdWx0aVBvaW50O1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19