import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { Vector } from 'ol/source';
import { GeoJSON } from 'ol/format';
var SourceGeoJSONComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceGeoJSONComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "defaultDataProjection", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "featureProjection", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "geometryName", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceGeoJSONComponent.prototype, "url", void 0);
    SourceGeoJSONComponent = SourceGeoJSONComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-source-geojson',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceGeoJSONComponent_1; }) }]
        }),
        tslib_1.__param(0, Host())
    ], SourceGeoJSONComponent);
    return SourceGeoJSONComponent;
}(SourceComponent));
export { SourceGeoJSONComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9nZW9qc29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBUXBDO0lBQTRDLGtEQUFlO0lBWXpELGdDQUFvQixLQUEyQjtlQUM3QyxrQkFBTSxLQUFLLENBQUM7SUFDZCxDQUFDOytCQWRVLHNCQUFzQjtJQWdCakMseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztnQkFSMEIsb0JBQW9CLHVCQUFsQyxJQUFJOztJQVJqQjtRQURDLEtBQUssRUFBRTt5RUFDOEI7SUFFdEM7UUFEQyxLQUFLLEVBQUU7cUVBQzBCO0lBRWxDO1FBREMsS0FBSyxFQUFFO2dFQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFO3VEQUNJO0lBVkQsc0JBQXNCO1FBTGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsd0JBQXNCLEVBQXRCLENBQXNCLENBQUMsRUFBRSxDQUFDO1NBQ2pHLENBQUM7UUFhYSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtPQVpSLHNCQUFzQixDQXFCbEM7SUFBRCw2QkFBQztDQUFBLEFBckJELENBQTRDLGVBQWUsR0FxQjFEO1NBckJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgRmVhdHVyZUZvcm1hdCBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgR2VvSlNPTiB9IGZyb20gJ29sL2Zvcm1hdCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLWdlb2pzb24nLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VHZW9KU09OQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlR2VvSlNPTkNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBWZWN0b3I7XG4gIGZvcm1hdDogRmVhdHVyZUZvcm1hdDtcbiAgQElucHV0KClcbiAgZGVmYXVsdERhdGFQcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgZmVhdHVyZVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICBnZW9tZXRyeU5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm1hdCA9IG5ldyBHZW9KU09OKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==