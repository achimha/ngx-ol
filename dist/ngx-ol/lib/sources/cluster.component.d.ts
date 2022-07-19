import { AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Cluster, Vector } from 'ol/source';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { SourceVectorComponent } from './vector.component';
import * as ɵngcc0 from '@angular/core';
export declare class SourceClusterComponent extends SourceComponent implements AfterContentInit, OnChanges {
    instance: Cluster;
    distance: number;
    geometryFunction?: (feature: Feature) => Point;
    wrapX?: boolean;
    sourceVectorComponent: SourceVectorComponent;
    source: Vector;
    constructor(layer: LayerVectorComponent);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceClusterComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceClusterComponent, "aol-source-cluster", never, { "distance": "distance"; "geometryFunction": "geometryFunction"; "wrapX": "wrapX"; }, {}, ["sourceVectorComponent"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2x1c3Rlci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiY2x1c3Rlci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJ29sL2dlb20nO1xuaW1wb3J0IHsgQ2x1c3RlciwgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi92ZWN0b3IuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNvdXJjZUNsdXN0ZXJDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICAgIGluc3RhbmNlOiBDbHVzdGVyO1xuICAgIGRpc3RhbmNlOiBudW1iZXI7XG4gICAgZ2VvbWV0cnlGdW5jdGlvbj86IChmZWF0dXJlOiBGZWF0dXJlKSA9PiBQb2ludDtcbiAgICB3cmFwWD86IGJvb2xlYW47XG4gICAgc291cmNlVmVjdG9yQ29tcG9uZW50OiBTb3VyY2VWZWN0b3JDb21wb25lbnQ7XG4gICAgc291cmNlOiBWZWN0b3I7XG4gICAgY29uc3RydWN0b3IobGF5ZXI6IExheWVyVmVjdG9yQ29tcG9uZW50KTtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbn1cbiJdfQ==