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
    target: Element;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcnZpZXdtYXAuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm92ZXJ2aWV3bWFwLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXIgfSBmcm9tICdvbC9sYXllcic7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgT3ZlcnZpZXdNYXAgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29udHJvbE92ZXJ2aWV3TWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgaW5zdGFuY2U6IE92ZXJ2aWV3TWFwO1xuICAgIGNvbGxhcHNlZDogYm9vbGVhbjtcbiAgICBjb2xsYXBzZUxhYmVsOiBzdHJpbmc7XG4gICAgY29sbGFwc2libGU6IGJvb2xlYW47XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBsYXllcnM6IExheWVyW107XG4gICAgdGFyZ2V0OiBFbGVtZW50O1xuICAgIHRpcExhYmVsOiBzdHJpbmc7XG4gICAgdmlldzogVmlldztcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIHByaXZhdGUgcmVsb2FkSW5zdGFuY2U7XG59XG4iXX0=