import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { Circle } from 'ol/geom';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
let GeometryCircleComponent = class GeometryCircleComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-circle';
        // defaulting coordinates to [0,0]. To be overridden in child component.
        this.instance = new Circle([0, 0]);
    }
    get radius() {
        return this.instance.getRadius();
    }
    set radius(radius) {
        this.instance.setRadius(radius);
    }
};
GeometryCircleComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
__decorate([
    Input()
], GeometryCircleComponent.prototype, "radius", null);
GeometryCircleComponent = __decorate([
    Component({
        selector: 'aol-geometry-circle',
        template: ` <ng-content></ng-content> `
    })
], GeometryCircleComponent);
export { GeometryCircleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnljaXJjbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvZ2VvbS9nZW9tZXRyeWNpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXdCLFNBQVEsdUJBQXVCO0lBWWxFLFlBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBWlosa0JBQWEsR0FBRyxpQkFBaUIsQ0FBQztRQWF2Qyx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFYRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQU9GLENBQUE7O1lBTGtCLFlBQVk7WUFBUSxnQkFBZ0I7O0FBUHJEO0lBREMsS0FBSyxFQUFFO3FEQUdQO0FBUFUsdUJBQXVCO0lBSm5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0dBQ1csdUJBQXVCLENBaUJuQztTQWpCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaXJjbGUgfSBmcm9tICdvbC9nZW9tJztcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1nZW9tZXRyeS1jaXJjbGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5Q2lyY2xlQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1jaXJjbGUnO1xuICBwdWJsaWMgaW5zdGFuY2U6IENpcmNsZTtcblxuICBASW5wdXQoKVxuICBnZXQgcmFkaXVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0UmFkaXVzKCk7XG4gIH1cbiAgc2V0IHJhZGl1cyhyYWRpdXM6IG51bWJlcikge1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKHJhZGl1cyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKG1hcCwgaG9zdCk7XG4gICAgLy8gZGVmYXVsdGluZyBjb29yZGluYXRlcyB0byBbMCwwXS4gVG8gYmUgb3ZlcnJpZGRlbiBpbiBjaGlsZCBjb21wb25lbnQuXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDaXJjbGUoWzAsIDBdKTtcbiAgfVxufVxuIl19