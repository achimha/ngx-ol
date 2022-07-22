import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import Event from 'ol/events/Event';
import { MapComponent } from '../map.component';
import { LayerGroupComponent } from './layergroup.component';
import { Extent } from 'ol/extent';
import * as ɵngcc0 from '@angular/core';
export declare abstract class LayerComponent implements OnInit, OnChanges, OnDestroy {
    protected host: MapComponent | LayerGroupComponent;
    instance: any;
    componentType: string;
    opacity: number;
    visible: boolean;
    extent: Extent;
    zIndex: number;
    minResolution: number;
    maxResolution: number;
    prerender: (evt: Event) => void;
    postrender: (evt: Event) => void;
    constructor(host: MapComponent | LayerGroupComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LayerComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<LayerComponent, never, never, { "opacity": "opacity"; "visible": "visible"; "extent": "extent"; "zIndex": "zIndex"; "minResolution": "minResolution"; "maxResolution": "maxResolution"; "prerender": "prerender"; "postrender": "postrender"; }, {}, never>;
}

//# sourceMappingURL=layer.component.d.ts.map