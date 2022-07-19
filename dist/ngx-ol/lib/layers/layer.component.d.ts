import { OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Event } from 'ol/events';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImxheWVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICdvbC9ldmVudHMnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9sYXllcmdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgaG9zdDogTWFwQ29tcG9uZW50IHwgTGF5ZXJHcm91cENvbXBvbmVudDtcbiAgICBpbnN0YW5jZTogYW55O1xuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZztcbiAgICBvcGFjaXR5OiBudW1iZXI7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICBleHRlbnQ6IEV4dGVudDtcbiAgICB6SW5kZXg6IG51bWJlcjtcbiAgICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gICAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuICAgIHByZXJlbmRlcjogKGV2dDogRXZlbnQpID0+IHZvaWQ7XG4gICAgcG9zdHJlbmRlcjogKGV2dDogRXZlbnQpID0+IHZvaWQ7XG4gICAgY29uc3RydWN0b3IoaG9zdDogTWFwQ29tcG9uZW50IHwgTGF5ZXJHcm91cENvbXBvbmVudCk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xufVxuIl19