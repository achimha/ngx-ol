import { AfterContentInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Stroke } from 'ol/style';
import { MapComponent } from './map.component';
import * as ɵngcc0 from '@angular/core';
export declare class GraticuleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private map;
    instance: any;
    componentType: string;
    strokeStyle: Stroke;
    showLabels: boolean;
    lonLabelPosition: number;
    latLabelPosition: number;
    constructor(map: MapComponent);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GraticuleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GraticuleComponent, "aol-graticule", never, { "strokeStyle": "strokeStyle"; "showLabels": "showLabels"; "lonLabelPosition": "lonLabelPosition"; "latLabelPosition": "latLabelPosition"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdGljdWxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJncmF0aWN1bGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Ryb2tlIH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdyYXRpY3VsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG1hcDtcbiAgICBpbnN0YW5jZTogYW55O1xuICAgIGNvbXBvbmVudFR5cGU6IHN0cmluZztcbiAgICBzdHJva2VTdHlsZTogU3Ryb2tlO1xuICAgIHNob3dMYWJlbHM6IGJvb2xlYW47XG4gICAgbG9uTGFiZWxQb3NpdGlvbjogbnVtYmVyO1xuICAgIGxhdExhYmVsUG9zaXRpb246IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCk7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==