import { OnDestroy } from '@angular/core';
import { Source } from 'ol';
import { LayerComponent } from '../layers/layer.component';
import * as ɵngcc0 from '@angular/core';
export declare abstract class SourceComponent implements OnDestroy {
    protected host: LayerComponent;
    instance: Source;
    componentType: string;
    attributions: any;
    constructor(host: LayerComponent);
    ngOnDestroy(): void;
    protected _register(s: Source): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SourceComponent, never, never, { "attributions": "attributions"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzb3VyY2UuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllci5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgaG9zdDogTGF5ZXJDb21wb25lbnQ7XG4gICAgaW5zdGFuY2U6IFNvdXJjZTtcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmc7XG4gICAgYXR0cmlidXRpb25zOiBhbnk7XG4gICAgY29uc3RydWN0b3IoaG9zdDogTGF5ZXJDb21wb25lbnQpO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIF9yZWdpc3RlcihzOiBTb3VyY2UpOiB2b2lkO1xufVxuIl19