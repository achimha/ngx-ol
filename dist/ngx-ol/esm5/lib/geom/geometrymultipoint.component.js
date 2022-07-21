import { __decorate, __extends } from "tslib";
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPoint } from 'ol/geom';
var GeometryMultiPointComponent = /** @class */ (function (_super) {
    __extends(GeometryMultiPointComponent, _super);
    function GeometryMultiPointComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-multipoint';
        return _this;
    }
    GeometryMultiPointComponent.prototype.ngOnInit = function () {
        this.instance = new MultiPoint([
            [0, 0],
            [1, 1],
        ]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryMultiPointComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    GeometryMultiPointComponent = __decorate([
        Component({
            selector: 'aol-geometry-multipoint',
            template: " <ng-content></ng-content> "
        })
    ], GeometryMultiPointComponent);
    return GeometryMultiPointComponent;
}(SimpleGeometryComponent));
export { GeometryMultiPointComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFNckM7SUFBaUQsK0NBQXVCO0lBSXRFLHFDQUFZLEdBQWlCLEVBQUUsSUFBc0I7UUFBckQsWUFDRSxrQkFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQ2pCO1FBTE0sbUJBQWEsR0FBRyxxQkFBcUIsQ0FBQzs7SUFLN0MsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNQLENBQUMsQ0FBQztRQUNILGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7O2dCQVZnQixZQUFZO2dCQUFRLGdCQUFnQjs7SUFKMUMsMkJBQTJCO1FBSnZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO09BQ1csMkJBQTJCLENBZXZDO0lBQUQsa0NBQUM7Q0FBQSxBQWZELENBQWlELHVCQUF1QixHQWV2RTtTQWZZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpUG9pbnQgfSBmcm9tICdvbC9nZW9tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LW11bHRpcG9pbnQnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktbXVsdGlwb2ludCc7XG4gIHB1YmxpYyBpbnN0YW5jZTogTXVsdGlQb2ludDtcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKG1hcCwgaG9zdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE11bHRpUG9pbnQoW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEsIDFdLFxuICAgIF0pO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==