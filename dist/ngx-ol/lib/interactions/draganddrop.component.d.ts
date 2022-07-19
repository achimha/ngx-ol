import { OnDestroy, OnInit } from '@angular/core';
import { DragAndDrop } from 'ol/interaction';
import Feature from 'ol/format/Feature';
import { MapComponent } from '../map.component';
import { ProjectionLike } from 'ol/proj';
import * as ɵngcc0 from '@angular/core';
export declare class DragAndDropInteractionComponent implements OnInit, OnDestroy {
    private map;
    instance: DragAndDrop;
    formatConstructors: ((n: Feature) => any)[];
    projection: ProjectionLike;
    target: Element;
    constructor(map: MapComponent);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DragAndDropInteractionComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DragAndDropInteractionComponent, "aol-interaction-draganddrop", never, { "formatConstructors": "formatConstructors"; "projection": "projection"; "target": "target"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2FuZGRyb3AuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImRyYWdhbmRkcm9wLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnQW5kRHJvcCB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyYWdBbmREcm9wSW50ZXJhY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBtYXA7XG4gICAgaW5zdGFuY2U6IERyYWdBbmREcm9wO1xuICAgIGZvcm1hdENvbnN0cnVjdG9yczogKChuOiBGZWF0dXJlKSA9PiBhbnkpW107XG4gICAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gICAgdGFyZ2V0OiBFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50KTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=