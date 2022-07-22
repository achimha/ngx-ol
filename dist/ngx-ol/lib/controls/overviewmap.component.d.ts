import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Layer } from 'ol/layer';
import { View } from 'ol';
import { OverviewMap } from 'ol/control';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class ControlOverviewMapComponent implements OnInit, OnChanges, OnDestroy {
    private map;
    instance: OverviewMap;
    collapsed: boolean;
    collapseLabel: string;
    collapsible: boolean;
    label: string;
    layers: Layer[];
    target: HTMLElement;
    tipLabel: string;
    view: View;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private reloadInstance;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ControlOverviewMapComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ControlOverviewMapComponent, "aol-control-overviewmap", never, { "collapsed": "collapsed"; "collapseLabel": "collapseLabel"; "collapsible": "collapsible"; "label": "label"; "layers": "layers"; "target": "target"; "tipLabel": "tipLabel"; "view": "view"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=overviewmap.component.d.ts.map