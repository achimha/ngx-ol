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

//# sourceMappingURL=style.component.d.ts.map