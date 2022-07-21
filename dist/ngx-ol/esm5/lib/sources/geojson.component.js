import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { Vector } from 'ol/source';
import { GeoJSON } from 'ol/format';
var SourceGeoJSONComponent = /** @class */ (function (_super) {
    __extends(SourceGeoJSONComponent, _super);
    function SourceGeoJSONComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceGeoJSONComponent_1 = SourceGeoJSONComponent;
    SourceGeoJSONComponent.prototype.ngOnInit = function () {
        this.format = new GeoJSON(this);
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceGeoJSONComponent_1;
    SourceGeoJSONComponent.ctorParameters = function () { return [
        { type: LayerVectorComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "defaultDataProjection", void 0);
    __decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "featureProjection", void 0);
    __decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "geometryName", void 0);
    __decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "url", void 0);
    SourceGeoJSONComponent = SourceGeoJSONComponent_1 = __decorate([
        Component({
            selector: 'aol-source-geojson',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceGeoJSONComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceGeoJSONComponent);
    return SourceGeoJSONComponent;
}(SourceComponent));
export { SourceGeoJSONComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9nZW9qc29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBUXBDO0lBQTRDLDBDQUFlO0lBWXpELGdDQUFvQixLQUEyQjtlQUM3QyxrQkFBTSxLQUFLLENBQUM7SUFDZCxDQUFDOytCQWRVLHNCQUFzQjtJQWdCakMseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztnQkFSMEIsb0JBQW9CLHVCQUFsQyxJQUFJOztJQVJqQjtRQURDLEtBQUssRUFBRTt5RUFDOEI7SUFFdEM7UUFEQyxLQUFLLEVBQUU7cUVBQzBCO0lBRWxDO1FBREMsS0FBSyxFQUFFO2dFQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFO3VEQUNJO0lBVkQsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXNCLEVBQXRCLENBQXNCLENBQUMsRUFBRSxDQUFDO1NBQ2pHLENBQUM7UUFhYSxXQUFBLElBQUksRUFBRSxDQUFBO09BWlIsc0JBQXNCLENBcUJsQztJQUFELDZCQUFDO0NBQUEsQUFyQkQsQ0FBNEMsZUFBZSxHQXFCMUQ7U0FyQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCBGZWF0dXJlRm9ybWF0IGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBHZW9KU09OIH0gZnJvbSAnb2wvZm9ybWF0JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtZ2VvanNvbicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUdlb0pTT05Db21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VHZW9KU09OQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFZlY3RvcjtcbiAgZm9ybWF0OiBGZWF0dXJlRm9ybWF0O1xuICBASW5wdXQoKVxuICBkZWZhdWx0RGF0YVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICBmZWF0dXJlUHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybWF0ID0gbmV3IEdlb0pTT04odGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19