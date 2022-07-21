import { OnDestroy, OnInit } from '@angular/core';
import { DragAndDrop } from 'ol/interaction';
import FeatureFormat from 'ol/format/Feature';
import { MapComponent } from '../map.component';
import { ProjectionLike } from 'ol/proj';
import * as ɵngcc0 from '@angular/core';
export declare class DragAndDropInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DragAndDrop;
    formatConstructors: FeatureFormat[];
    projection: ProjectionLike;
    target: HTMLElement;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragAndDropInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DragAndDropInteractionComponent, "aol-interaction-draganddrop", never, { "formatConstructors": "formatConstructors"; "projection": "projection"; "target": "target"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2FuZGRyb3AuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImRyYWdhbmRkcm9wLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnQW5kRHJvcCB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCBGZWF0dXJlRm9ybWF0IGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyYWdBbmREcm9wSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgaW5zdGFuY2U6IERyYWdBbmREcm9wO1xuICAgIGZvcm1hdENvbnN0cnVjdG9yczogRmVhdHVyZUZvcm1hdFtdO1xuICAgIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICAgIHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==