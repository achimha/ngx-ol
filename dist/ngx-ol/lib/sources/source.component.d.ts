import { OnDestroy } from '@angular/core';
import Source from 'ol/source/Source';
import { LayerComponent } from '../layers/layer.component';
import * as ɵngcc0 from '@angular/core';
export declare abstract class SourceComponent implements OnDestroy {
    protected host: LayerComponent;
    instance: Source;
    componentType: string;
    attributions: any;
    protected constructor(host: LayerComponent);
    ngOnDestroy(): void;
    protected _register(s: Source): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SourceComponent, never, never, { "attributions": "attributions"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzb3VyY2UuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgU291cmNlIGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xuaW1wb3J0IHsgTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGhvc3Q6IExheWVyQ29tcG9uZW50O1xuICAgIGluc3RhbmNlOiBTb3VyY2U7XG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xuICAgIGF0dHJpYnV0aW9uczogYW55O1xuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihob3N0OiBMYXllckNvbXBvbmVudCk7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgX3JlZ2lzdGVyKHM6IFNvdXJjZSk6IHZvaWQ7XG59XG4iXX0=