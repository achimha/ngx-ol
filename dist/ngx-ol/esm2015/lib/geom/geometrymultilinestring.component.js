import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiLineString } from 'ol/geom';
export class GeometryMultiLinestringComponent extends SimpleGeometryComponent {
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
}
GeometryMultiLinestringComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-multilinestring',
                template: ` <ng-content></ng-content> `
            },] }
];
GeometryMultiLinestringComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hpbWhhL1Byb2plY3RzL25neC1vbC9wcm9qZWN0cy9uZ3gtb2wvc3JjLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFNMUMsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLHVCQUF1QjtJQUkzRSxZQUFZLEdBQWlCLEVBQUUsSUFBc0I7UUFDbkQsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUpaLGtCQUFhLEdBQUcsMEJBQTBCLENBQUM7SUFLbEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDO1lBQ2xDO2dCQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDUDtTQUNGLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7OztZQU5RLFlBQVk7WUFGWixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IH0gZnJvbSAnLi9zaW1wbGVnZW9tZXRyeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aUxpbmVTdHJpbmcgfSBmcm9tICdvbC9nZW9tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LW11bHRpbGluZXN0cmluZycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dlb21ldHJ5LW11bHRpbGluZXN0cmluZyc7XG4gIHB1YmxpYyBpbnN0YW5jZTogTXVsdGlMaW5lU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobWFwLCBob3N0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTXVsdGlMaW5lU3RyaW5nKFtcbiAgICAgIFtcbiAgICAgICAgWzAsIDBdLFxuICAgICAgICBbMSwgMV0sXG4gICAgICBdLFxuICAgIF0pO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==