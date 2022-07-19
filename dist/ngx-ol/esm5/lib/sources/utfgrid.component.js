import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
import { UTFGrid } from 'ol/source';
var SourceUTFGridComponent = /** @class */ (function (_super) {
    __extends(SourceUTFGridComponent, _super);
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
    __decorate([
        Input()
    ], SourceUTFGridComponent.prototype, "tileJSON", void 0);
    __decorate([
        Input()
    ], SourceUTFGridComponent.prototype, "url", void 0);
    SourceUTFGridComponent = SourceUTFGridComponent_1 = __decorate([
        Component({
            selector: 'aol-source-utfgrid',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceUTFGridComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceUTFGridComponent);
    return SourceUTFGridComponent;
}(SourceComponent));
export { SourceUTFGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRmZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy91dGZncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQU9wQztJQUE0QywwQ0FBZTtJQUt6RCxnQ0FBb0IsS0FBeUI7ZUFDM0Msa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzsrQkFQVSxzQkFBc0I7SUFTakMseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Z0JBUDBCLGtCQUFrQix1QkFBaEMsSUFBSTs7SUFIUjtRQUFSLEtBQUssRUFBRTs0REFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTt1REFBYTtJQUhWLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHdCQUFzQixFQUF0QixDQUFzQixDQUFDLEVBQUUsQ0FBQztTQUNqRyxDQUFDO1FBTWEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQUxSLHNCQUFzQixDQWFsQztJQUFELDZCQUFDO0NBQUEsQUFiRCxDQUE0QyxlQUFlLEdBYTFEO1NBYlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVVRGR3JpZCB9IGZyb20gJ29sL3NvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdXRmZ3JpZCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVVURkdyaWRDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VVVEZHcmlkQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFVURkdyaWQ7XG4gIEBJbnB1dCgpIHRpbGVKU09OOiBKU09OO1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclRpbGVDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFVURkdyaWQodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19