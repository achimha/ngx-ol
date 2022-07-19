import { AfterViewInit, QueryList } from '@angular/core';
import { Attribution } from 'ol/control';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
import * as ɵngcc0 from '@angular/core';
export declare class AttributionsComponent implements AfterViewInit {
    private source;
    instance: Array<Attribution>;
    attributions: QueryList<AttributionComponent>;
    constructor(source: SourceComponent);
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AttributionsComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AttributionsComponent, "aol-attributions", never, {}, {}, ["attributions"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhdHRyaWJ1dGlvbnMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IEF0dHJpYnV0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXR0cmlidXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJpdmF0ZSBzb3VyY2U7XG4gICAgaW5zdGFuY2U6IEFycmF5PEF0dHJpYnV0aW9uPjtcbiAgICBhdHRyaWJ1dGlvbnM6IFF1ZXJ5TGlzdDxBdHRyaWJ1dGlvbkNvbXBvbmVudD47XG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBTb3VyY2VDb21wb25lbnQpO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xufVxuIl19