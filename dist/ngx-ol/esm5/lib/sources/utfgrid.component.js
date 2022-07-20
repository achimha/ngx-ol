import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { UTFGrid } from 'ol/source';
var SourceUTFGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceUTFGridComponent, _super);
    function SourceUTFGridComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceUTFGridComponent_1 = SourceUTFGridComponent;
    SourceUTFGridComponent.prototype.ngOnInit = function () {
        this.instance = new UTFGrid(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceUTFGridComponent_1;
    SourceUTFGridComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], SourceUTFGridComponent.prototype, "tileJSON", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceUTFGridComponent.prototype, "url", void 0);
    SourceUTFGridComponent = SourceUTFGridComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-source-utfgrid',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceUTFGridComponent_1; }) }]
        }),
        tslib_1.__param(0, Host())
    ], SourceUTFGridComponent);
    return SourceUTFGridComponent;
}(SourceComponent));
export { SourceUTFGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRmZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy91dGZncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVFwQztJQUE0QyxrREFBZTtJQUt6RCxnQ0FBb0IsS0FBeUI7ZUFDM0Msa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzsrQkFQVSxzQkFBc0I7SUFTakMseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Z0JBUDBCLGtCQUFrQix1QkFBaEMsSUFBSTs7SUFIUjtRQUFSLEtBQUssRUFBRTs0REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7dURBQWE7SUFIVixzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQyxFQUFFLENBQUM7U0FDakcsQ0FBQztRQU1hLG1CQUFBLElBQUksRUFBRSxDQUFBO09BTFIsc0JBQXNCLENBYWxDO0lBQUQsNkJBQUM7Q0FBQSxBQWJELENBQTRDLGVBQWUsR0FhMUQ7U0FiWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVVEZHcmlkIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ29sL3NvdXJjZS9UaWxlSlNPTic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdXRmZ3JpZCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVVURkdyaWRDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VVVEZHcmlkQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFVURkdyaWQ7XG4gIEBJbnB1dCgpIHRpbGVKU09OOiBDb25maWc7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVVRGR3JpZCh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=