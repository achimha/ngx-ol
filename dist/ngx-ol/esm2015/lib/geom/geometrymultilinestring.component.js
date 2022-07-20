import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiLineString } from 'ol/geom';
let GeometryMultiLinestringComponent = class GeometryMultiLinestringComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multilinestring';
    }
    ngOnInit() {
        this.instance = new MultiLineString([
            [
                [0, 0],
                [1, 1],
            ],
        ]);
        super.ngOnInit();
    }
};
GeometryMultiLinestringComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryMultiLinestringComponent = tslib_1.__decorate([
    Component({
        selector: 'aol-geometry-multilinestring',
        template: ` <ng-content></ng-content> `
    })
], GeometryMultiLinestringComponent);
export { GeometryMultiLinestringComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTTFDLElBQWEsZ0NBQWdDLEdBQTdDLE1BQWEsZ0NBQWlDLFNBQVEsdUJBQXVCO0lBSTNFLFlBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSlosa0JBQWEsR0FBRywwQkFBMEIsQ0FBQztJQUtsRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLENBQUM7WUFDbEM7Z0JBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNQO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBOztZQWJrQixZQUFZO1lBQVEsZ0JBQWdCOztBQUoxQyxnQ0FBZ0M7SUFKNUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDhCQUE4QjtRQUN4QyxRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7R0FDVyxnQ0FBZ0MsQ0FpQjVDO1NBakJZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpTGluZVN0cmluZyB9IGZyb20gJ29sL2dlb20nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktbXVsdGlsaW5lc3RyaW5nJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBHZW9tZXRyeU11bHRpTGluZXN0cmluZ0NvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktbXVsdGlsaW5lc3RyaW5nJztcbiAgcHVibGljIGluc3RhbmNlOiBNdWx0aUxpbmVTdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIGhvc3Q6IEZlYXR1cmVDb21wb25lbnQpIHtcbiAgICBzdXBlcihtYXAsIGhvc3QpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNdWx0aUxpbmVTdHJpbmcoW1xuICAgICAgW1xuICAgICAgICBbMCwgMF0sXG4gICAgICAgIFsxLCAxXSxcbiAgICAgIF0sXG4gICAgXSk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19