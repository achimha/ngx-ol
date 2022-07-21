import { AfterViewInit, QueryList } from '@angular/core';
import { SourceComponent } from './sources/source.component';
import { AttributionComponent } from './attribution.component';
import * as ɵngcc0 from '@angular/core';
export declare class AttributionsComponent implements AfterViewInit {
    private source;
    instance: Array<string>;
    attributions: QueryList<AttributionComponent>;
    constructor(source: SourceComponent);
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AttributionsComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AttributionsComponent, "aol-attributions", never, {}, {}, ["attributions"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb25zLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJhdHRyaWJ1dGlvbnMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IEF0dHJpYnV0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hdHRyaWJ1dGlvbi5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXR0cmlidXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJpdmF0ZSBzb3VyY2U7XG4gICAgaW5zdGFuY2U6IEFycmF5PHN0cmluZz47XG4gICAgYXR0cmlidXRpb25zOiBRdWVyeUxpc3Q8QXR0cmlidXRpb25Db21wb25lbnQ+O1xuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogU291cmNlQ29tcG9uZW50KTtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbn1cbiJdfQ==