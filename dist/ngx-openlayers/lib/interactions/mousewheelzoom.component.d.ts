import { OnDestroy, OnInit } from '@angular/core';
import { MouseWheelZoom } from 'ol/interaction';
import { MapComponent } from '../map.component';
import * as ɵngcc0 from '@angular/core';
export declare class MouseWheelZoomInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: MouseWheelZoom;
    duration: number;
    timeout: number;
    useAnchor: boolean;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MouseWheelZoomInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MouseWheelZoomInteractionComponent, "aol-interaction-mousewheelzoom", never, { "duration": "duration"; "timeout": "timeout"; "useAnchor": "useAnchor"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2V3aGVlbHpvb20uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm1vdXNld2hlZWx6b29tLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vdXNlV2hlZWxab29tIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNb3VzZVdoZWVsWm9vbUludGVyYWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgbWFwO1xuICAgIGluc3RhbmNlOiBNb3VzZVdoZWVsWm9vbTtcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xuICAgIHRpbWVvdXQ6IG51bWJlcjtcbiAgICB1c2VBbmNob3I6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==