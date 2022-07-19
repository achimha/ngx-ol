import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { LineString } from 'ol/geom';
let GeometryLinestringComponent = class GeometryLinestringComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-linestring';
    }
    ngOnInit() {
        this.instance = new LineString([
            [0, 0],
            [1, 1],
        ]);
        super.ngOnInit();
    }
};
GeometryLinestringComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryLinestringComponent = __decorate([
    Component({
        selector: 'aol-geometry-linestring',
        template: ` <ng-content></ng-content> `
    })
], GeometryLinestringComponent);
export { GeometryLinestringComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnlsaW5lc3RyaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnlsaW5lc3RyaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU1yQyxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUE0QixTQUFRLHVCQUF1QjtJQUl0RSxZQUFZLEdBQWlCLEVBQUUsSUFBc0I7UUFDbkQsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUpaLGtCQUFhLEdBQUcscUJBQXFCLENBQUM7SUFLN0MsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNQLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YsQ0FBQTs7WUFYa0IsWUFBWTtZQUFRLGdCQUFnQjs7QUFKMUMsMkJBQTJCO0lBSnZDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0dBQ1csMkJBQTJCLENBZXZDO1NBZlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGluZVN0cmluZyB9IGZyb20gJ29sL2dlb20nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktbGluZXN0cmluZycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1saW5lc3RyaW5nJztcbiAgcHVibGljIGluc3RhbmNlOiBMaW5lU3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobWFwLCBob3N0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTGluZVN0cmluZyhbXG4gICAgICBbMCwgMF0sXG4gICAgICBbMSwgMV0sXG4gICAgXSk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxufVxuIl19