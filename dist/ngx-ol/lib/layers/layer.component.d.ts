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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImxheWVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IEV2ZW50IGZyb20gJ29sL2V2ZW50cy9FdmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBob3N0OiBNYXBDb21wb25lbnQgfCBMYXllckdyb3VwQ29tcG9uZW50O1xuICAgIGluc3RhbmNlOiBhbnk7XG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xuICAgIG9wYWNpdHk6IG51bWJlcjtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGV4dGVudDogRXh0ZW50O1xuICAgIHpJbmRleDogbnVtYmVyO1xuICAgIG1pblJlc29sdXRpb246IG51bWJlcjtcbiAgICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG4gICAgcHJlcmVuZGVyOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcbiAgICBwb3N0cmVuZGVyOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OiBNYXBDb21wb25lbnQgfCBMYXllckdyb3VwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG59XG4iXX0=