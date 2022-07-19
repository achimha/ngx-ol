import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { Polygon } from 'ol/geom';
let GeometryPolygonComponent = class GeometryPolygonComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-polygon';
    }
    ngOnInit() {
        this.instance = new Polygon([
            [
                [0, 0],
                [1, 1],
                [0, 1],
            ],
        ]);
        super.ngOnInit();
    }
};
GeometryPolygonComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
GeometryPolygonComponent = __decorate([
    Component({
        selector: 'aol-geometry-polygon',
        template: ` <ng-content></ng-content> `
    })
], GeometryPolygonComponent);
export { GeometryPolygonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2dlb20vZ2VvbWV0cnlwb2x5Z29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU1sQyxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF5QixTQUFRLHVCQUF1QjtJQUluRSxZQUFZLEdBQWlCLEVBQUUsSUFBc0I7UUFDbkQsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUpaLGtCQUFhLEdBQUcsa0JBQWtCLENBQUM7SUFLMUMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDO1lBQzFCO2dCQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ1A7U0FDRixDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUE7O1lBZGtCLFlBQVk7WUFBUSxnQkFBZ0I7O0FBSjFDLHdCQUF3QjtJQUpwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztHQUNXLHdCQUF3QixDQWtCcEM7U0FsQlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaW1wbGVHZW9tZXRyeUNvbXBvbmVudCB9IGZyb20gJy4vc2ltcGxlZ2VvbWV0cnkuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9seWdvbiB9IGZyb20gJ29sL2dlb20nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtZ2VvbWV0cnktcG9seWdvbicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50IGV4dGVuZHMgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdnZW9tZXRyeS1wb2x5Z29uJztcbiAgcHVibGljIGluc3RhbmNlOiBQb2x5Z29uO1xuXG4gIGNvbnN0cnVjdG9yKG1hcDogTWFwQ29tcG9uZW50LCBob3N0OiBGZWF0dXJlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobWFwLCBob3N0KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUG9seWdvbihbXG4gICAgICBbXG4gICAgICAgIFswLCAwXSxcbiAgICAgICAgWzEsIDFdLFxuICAgICAgICBbMCwgMV0sXG4gICAgICBdLFxuICAgIF0pO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==