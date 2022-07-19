import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { LineString } from 'ol/geom';
var GeometryLinestringComponent = /** @class */ (function (_super) {
    __extends(GeometryLinestringComponent, _super);
    function GeometryLinestringComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-linestring';
        return _this;
    }
    GeometryLinestringComponent.prototype.ngOnInit = function () {
        this.instance = new LineString([
            [0, 0],
            [1, 1],
        ]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryLinestringComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    GeometryLinestringComponent = __decorate([
        Component({
            selector: 'aol-geometry-linestring',
            template: " <ng-content></ng-content> "
        })
    ], GeometryLinestringComponent);
    return GeometryLinestringComponent;
}(SimpleGeometryComponent));
export { GeometryLinestringComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnlsaW5lc3RyaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnlsaW5lc3RyaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU1yQztJQUFpRCwrQ0FBdUI7SUFJdEUscUNBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUFyRCxZQUNFLGtCQUFNLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FDakI7UUFMTSxtQkFBYSxHQUFHLHFCQUFxQixDQUFDOztJQUs3QyxDQUFDO0lBRUQsOENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ1AsQ0FBQyxDQUFDO1FBQ0gsaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBVmdCLFlBQVk7Z0JBQVEsZ0JBQWdCOztJQUoxQywyQkFBMkI7UUFKdkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7T0FDVywyQkFBMkIsQ0FldkM7SUFBRCxrQ0FBQztDQUFBLEFBZkQsQ0FBaUQsdUJBQXVCLEdBZXZFO1NBZlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGluZVN0cmluZyB9IGZyb20gJ29sL2dlb20nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktbGluZXN0cmluZycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1saW5lc3RyaW5nJztcbiAgcHVibGljIGluc3RhbmNlOiBMaW5lU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobWFwLCBob3N0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTGluZVN0cmluZyhbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMSwgMV0sXG4gICAgXSk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19