import { OnInit } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { MapComponent } from '../map.component';
import SimpleGeometry from 'ol/geom/SimpleGeometry';
import * as ɵngcc0 from '@angular/core';
export declare abstract class SimpleGeometryComponent implements OnInit {
    protected map: MapComponent;
    protected host: FeatureComponent;
    instance: SimpleGeometry;
    componentType: string;
    srid: string;
    constructor(map: MapComponent, host: FeatureComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SimpleGeometryComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SimpleGeometryComponent, never, never, { "srid": "srid"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInNpbXBsZWdlb21ldHJ5LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgU2ltcGxlR2VvbWV0cnkgZnJvbSAnb2wvZ2VvbS9TaW1wbGVHZW9tZXRyeSc7XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIG1hcDogTWFwQ29tcG9uZW50O1xuICAgIHByb3RlY3RlZCBob3N0OiBGZWF0dXJlQ29tcG9uZW50O1xuICAgIGluc3RhbmNlOiBTaW1wbGVHZW9tZXRyeTtcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmc7XG4gICAgc3JpZDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xufVxuIl19