import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiLineString } from 'ol/geom';
var GeometryMultiLinestringComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GeometryMultiLinestringComponent, _super);
    function GeometryMultiLinestringComponent(map, host) {
        var _this = _super.call(this, map, host) || this;
        _this.componentType = 'geometry-multilinestring';
        return _this;
    }
    GeometryMultiLinestringComponent.prototype.ngOnInit = function () {
        this.instance = new MultiLineString([
            [
                [0, 0],
                [1, 1],
            ],
        ]);
        _super.prototype.ngOnInit.call(this);
    };
    GeometryMultiLinestringComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: FeatureComponent }
    ]; };
    GeometryMultiLinestringComponent = tslib_1.__decorate([
        Component({
            selector: 'aol-geometry-multilinestring',
            template: " <ng-content></ng-content> "
        })
    ], GeometryMultiLinestringComponent);
    return GeometryMultiLinestringComponent;
}(SimpleGeometryComponent));
export { GeometryMultiLinestringComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTTFDO0lBQXNELDREQUF1QjtJQUkzRSwwQ0FBWSxHQUFpQixFQUFFLElBQXNCO1FBQXJELFlBQ0Usa0JBQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxTQUNqQjtRQUxNLG1CQUFhLEdBQUcsMEJBQTBCLENBQUM7O0lBS2xELENBQUM7SUFFRCxtREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQztZQUNsQztnQkFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ1A7U0FDRixDQUFDLENBQUM7UUFDSCxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDOztnQkFaZ0IsWUFBWTtnQkFBUSxnQkFBZ0I7O0lBSjFDLGdDQUFnQztRQUo1QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLGdDQUFnQyxDQWlCNUM7SUFBRCx1Q0FBQztDQUFBLEFBakJELENBQXNELHVCQUF1QixHQWlCNUU7U0FqQlksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlMaW5lU3RyaW5nIH0gZnJvbSAnb2wvZ2VvbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1tdWx0aWxpbmVzdHJpbmcnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1tdWx0aWxpbmVzdHJpbmcnO1xuICBwdWJsaWMgaW5zdGFuY2U6IE11bHRpTGluZVN0cmluZztcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKG1hcCwgaG9zdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE11bHRpTGluZVN0cmluZyhbXG4gICAgICBbXG4gICAgICAgIFswLCAwXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgXSxcbiAgICBdKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG59XG4iXX0=