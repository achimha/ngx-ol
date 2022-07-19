import { OnInit } from '@angular/core';
import { Fill, Image, Stroke, Style, Text } from 'ol/style';
import { Geometry } from 'ol/geom';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
import { GeometryFunction } from 'ol/style/Style';
import * as ɵngcc0 from '@angular/core';
export declare class StyleComponent implements OnInit {
    private host;
    instance: Style;
    componentType: string;
    geometry: string | Geometry | GeometryFunction;
    fill: Fill;
    image: Image;
    stroke: Stroke;
    text: Text;
    zIndex: number;
    constructor(featureHost: FeatureComponent, layerHost: LayerVectorComponent);
    update(): void;
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StyleComponent, [{ optional: true; }, { optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StyleComponent, "aol-style", never, { "geometry": "geometry"; "fill": "fill"; "image": "image"; "stroke": "stroke"; "text": "text"; "zIndex": "zIndex"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0eWxlLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbGwsIEltYWdlLCBTdHJva2UsIFN0eWxlLCBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0eWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGhvc3Q7XG4gICAgaW5zdGFuY2U6IFN0eWxlO1xuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZztcbiAgICBnZW9tZXRyeTogc3RyaW5nIHwgR2VvbWV0cnkgfCBHZW9tZXRyeUZ1bmN0aW9uO1xuICAgIGZpbGw6IEZpbGw7XG4gICAgaW1hZ2U6IEltYWdlO1xuICAgIHN0cm9rZTogU3Ryb2tlO1xuICAgIHRleHQ6IFRleHQ7XG4gICAgekluZGV4OiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoZmVhdHVyZUhvc3Q6IEZlYXR1cmVDb21wb25lbnQsIGxheWVySG9zdDogTGF5ZXJWZWN0b3JDb21wb25lbnQpO1xuICAgIHVwZGF0ZSgpOiB2b2lkO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG59XG4iXX0=