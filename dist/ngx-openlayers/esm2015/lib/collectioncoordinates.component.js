import { __decorate, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { MapComponent } from './map.component';
import { GeometryLinestringComponent } from './geom/geometrylinestring.component';
import { GeometryPolygonComponent } from './geom/geometrypolygon.component';
import { GeometryMultiPointComponent } from './geom/geometrymultipoint.component';
import { GeometryMultiLinestringComponent } from './geom/geometrymultilinestring.component';
import { GeometryMultiPolygonComponent } from './geom/geometrymultipolygon.component';
import { transform } from 'ol/proj';
let CollectionCoordinatesComponent = class CollectionCoordinatesComponent {
    constructor(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';
        if (!!geometryLinestring) {
            this.host = geometryLinestring;
        }
        else if (!!geometryPolygon) {
            this.host = geometryPolygon;
        }
        else if (!!geometryMultipoint) {
            this.host = geometryMultipoint;
        }
        else if (!!geometryMultilinestring) {
            this.host = geometryMultilinestring;
        }
        else if (!!geometryMultipolygon) {
            this.host = geometryMultipolygon;
        }
        else {
            throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
    }
    ngOnInit() {
        this.map.instance.on('change:view', (e) => this.onMapViewChanged(e));
        this.mapSrid = this.map.instance.getView().getProjection().getCode();
        this.transformCoordinates();
    }
    ngOnChanges(changes) {
        this.transformCoordinates();
    }
    onMapViewChanged(event) {
        this.mapSrid = event.target.get(event.key).getProjection().getCode();
        this.transformCoordinates();
    }
    transformCoordinates() {
        let transformedCoordinates;
        if (this.srid === this.mapSrid) {
            transformedCoordinates = this.coordinates;
        }
        else {
            switch (this.host.componentType) {
                case 'geometry-linestring':
                case 'geometry-multipoint':
                    transformedCoordinates = this.coordinates.map((c) => transform(c, this.srid, this.mapSrid));
                    break;
                case 'geometry-polygon':
                case 'geometry-multilinestring':
                    transformedCoordinates = this.coordinates.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid)));
                    break;
                case 'geometry-multipolygon':
                    transformedCoordinates = this.coordinates.map((ccc) => ccc.map((cc) => cc.map((c) => transform(c, this.srid, this.mapSrid))));
                    break;
            }
        }
        this.host.instance.setCoordinates(transformedCoordinates);
    }
};
CollectionCoordinatesComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: GeometryLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryPolygonComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPointComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiLinestringComponent, decorators: [{ type: Optional }] },
    { type: GeometryMultiPolygonComponent, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], CollectionCoordinatesComponent.prototype, "coordinates", void 0);
__decorate([
    Input()
], CollectionCoordinatesComponent.prototype, "srid", void 0);
CollectionCoordinatesComponent = __decorate([
    Component({
        selector: 'aol-collection-coordinates',
        template: ` <div class="aol-collection-coordinates"></div> `
    }),
    __param(1, Optional()),
    __param(2, Optional()),
    __param(3, Optional()),
    __param(4, Optional()),
    __param(5, Optional())
], CollectionCoordinatesComponent);
export { CollectionCoordinatesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbmNvb3JkaW5hdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbGxlY3Rpb25jb29yZGluYXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV0RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTXBDLElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBU3pDLFlBQ1UsR0FBaUIsRUFDYixrQkFBK0MsRUFDL0MsZUFBeUMsRUFDekMsa0JBQStDLEVBQy9DLHVCQUF5RCxFQUN6RCxvQkFBbUQ7UUFMdkQsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVJuQixZQUFPLEdBQUcsV0FBVyxDQUFDO1FBSzlCLFNBQUksR0FBRyxXQUFXLENBQUM7UUFVakIsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztTQUNoQzthQUFNLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQztTQUM3QjthQUFNLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUM7U0FDaEM7YUFBTSxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRTtZQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLHVCQUF1QixDQUFDO1NBQ3JDO2FBQU0sSUFBSSxDQUFDLENBQUMsb0JBQW9CLEVBQUU7WUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQztTQUNsQzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO1NBQ3ZGO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQUs7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixJQUFJLHNCQUF3RSxDQUFDO1FBRTdFLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzlCLHNCQUFzQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDM0M7YUFBTTtZQUNMLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQy9CLEtBQUsscUJBQXFCLENBQUM7Z0JBQzNCLEtBQUsscUJBQXFCO29CQUN4QixzQkFBc0IsR0FBSSxJQUFJLENBQUMsV0FBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDOUcsTUFBTTtnQkFDUixLQUFLLGtCQUFrQixDQUFDO2dCQUN4QixLQUFLLDBCQUEwQjtvQkFDN0Isc0JBQXNCLEdBQUksSUFBSSxDQUFDLFdBQThCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FDdkUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNyRCxDQUFDO29CQUNGLE1BQU07Z0JBQ1IsS0FBSyx1QkFBdUI7b0JBQzFCLHNCQUFzQixHQUFJLElBQUksQ0FBQyxXQUFnQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQzFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUN0RSxDQUFDO29CQUNGLE1BQU07YUFDVDtTQUNGO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUNGLENBQUE7O1lBaEVnQixZQUFZO1lBQ08sMkJBQTJCLHVCQUExRCxRQUFRO1lBQ29CLHdCQUF3Qix1QkFBcEQsUUFBUTtZQUN1QiwyQkFBMkIsdUJBQTFELFFBQVE7WUFDNEIsZ0NBQWdDLHVCQUFwRSxRQUFRO1lBQ3lCLDZCQUE2Qix1QkFBOUQsUUFBUTs7QUFWWDtJQURDLEtBQUssRUFBRTttRUFDc0Q7QUFFOUQ7SUFEQyxLQUFLLEVBQUU7NERBQ1c7QUFQUiw4QkFBOEI7SUFKMUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxRQUFRLEVBQUUsa0RBQWtEO0tBQzdELENBQUM7SUFZRyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxRQUFRLEVBQUUsQ0FBQTtHQWZGLDhCQUE4QixDQTBFMUM7U0ExRVksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlMaW5lc3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bGluZXN0cmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlQb2x5Z29uQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5cG9seWdvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aVBvaW50Q29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlNdWx0aUxpbmVzdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL2dlb20vZ2VvbWV0cnltdWx0aWxpbmVzdHJpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb21ldHJ5TXVsdGlQb2x5Z29uQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9tL2dlb21ldHJ5bXVsdGlwb2x5Z29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdvbC9wcm9qJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXMnLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLWNvbGxlY3Rpb24tY29vcmRpbmF0ZXNcIj48L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvbkNvb3JkaW5hdGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBwcml2YXRlIGhvc3Q6IGFueTtcbiAgcHJpdmF0ZSBtYXBTcmlkID0gJ0VQU0c6Mzg1Nyc7XG5cbiAgQElucHV0KClcbiAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVbXSB8IENvb3JkaW5hdGVbXVtdIHwgQ29vcmRpbmF0ZVtdW11bXTtcbiAgQElucHV0KClcbiAgc3JpZCA9ICdFUFNHOjM4NTcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlMaW5lc3RyaW5nOiBHZW9tZXRyeUxpbmVzdHJpbmdDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlQb2x5Z29uOiBHZW9tZXRyeVBvbHlnb25Db21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlNdWx0aXBvaW50OiBHZW9tZXRyeU11bHRpUG9pbnRDb21wb25lbnQsXG4gICAgQE9wdGlvbmFsKCkgZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmc6IEdlb21ldHJ5TXVsdGlMaW5lc3RyaW5nQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIGdlb21ldHJ5TXVsdGlwb2x5Z29uOiBHZW9tZXRyeU11bHRpUG9seWdvbkNvbXBvbmVudFxuICApIHtcbiAgICBpZiAoISFnZW9tZXRyeUxpbmVzdHJpbmcpIHtcbiAgICAgIHRoaXMuaG9zdCA9IGdlb21ldHJ5TGluZXN0cmluZztcbiAgICB9IGVsc2UgaWYgKCEhZ2VvbWV0cnlQb2x5Z29uKSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeVBvbHlnb247XG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5TXVsdGlwb2ludCkge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aXBvaW50O1xuICAgIH0gZWxzZSBpZiAoISFnZW9tZXRyeU11bHRpbGluZXN0cmluZykge1xuICAgICAgdGhpcy5ob3N0ID0gZ2VvbWV0cnlNdWx0aWxpbmVzdHJpbmc7XG4gICAgfSBlbHNlIGlmICghIWdlb21ldHJ5TXVsdGlwb2x5Z29uKSB7XG4gICAgICB0aGlzLmhvc3QgPSBnZW9tZXRyeU11bHRpcG9seWdvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtY29sbGVjdGlvbi1jb29yZGluYXRlcyBtdXN0IGJlIGEgY2hpbGQgb2YgYSBnZW9tZXRyeSBjb21wb25lbnQnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5vbignY2hhbmdlOnZpZXcnLCAoZSkgPT4gdGhpcy5vbk1hcFZpZXdDaGFuZ2VkKGUpKTtcbiAgICB0aGlzLm1hcFNyaWQgPSB0aGlzLm1hcC5pbnN0YW5jZS5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpLmdldENvZGUoKTtcbiAgICB0aGlzLnRyYW5zZm9ybUNvb3JkaW5hdGVzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1hcFZpZXdDaGFuZ2VkKGV2ZW50KSB7XG4gICAgdGhpcy5tYXBTcmlkID0gZXZlbnQudGFyZ2V0LmdldChldmVudC5rZXkpLmdldFByb2plY3Rpb24oKS5nZXRDb2RlKCk7XG4gICAgdGhpcy50cmFuc2Zvcm1Db29yZGluYXRlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2Zvcm1Db29yZGluYXRlcygpIHtcbiAgICBsZXQgdHJhbnNmb3JtZWRDb29yZGluYXRlczogQ29vcmRpbmF0ZVtdIHwgQ29vcmRpbmF0ZVtdW10gfCBDb29yZGluYXRlW11bXVtdO1xuXG4gICAgaWYgKHRoaXMuc3JpZCA9PT0gdGhpcy5tYXBTcmlkKSB7XG4gICAgICB0cmFuc2Zvcm1lZENvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcztcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xuICAgICAgICBjYXNlICdnZW9tZXRyeS1saW5lc3RyaW5nJzpcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktbXVsdGlwb2ludCc6XG4gICAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9ICh0aGlzLmNvb3JkaW5hdGVzIGFzIENvb3JkaW5hdGVbXSkubWFwKChjKSA9PiB0cmFuc2Zvcm0oYywgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ2VvbWV0cnktcG9seWdvbic6XG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LW11bHRpbGluZXN0cmluZyc6XG4gICAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9ICh0aGlzLmNvb3JkaW5hdGVzIGFzIENvb3JkaW5hdGVbXVtdKS5tYXAoKGNjKSA9PlxuICAgICAgICAgICAgY2MubWFwKChjKSA9PiB0cmFuc2Zvcm0oYywgdGhpcy5zcmlkLCB0aGlzLm1hcFNyaWQpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dlb21ldHJ5LW11bHRpcG9seWdvbic6XG4gICAgICAgICAgdHJhbnNmb3JtZWRDb29yZGluYXRlcyA9ICh0aGlzLmNvb3JkaW5hdGVzIGFzIENvb3JkaW5hdGVbXVtdW10pLm1hcCgoY2NjKSA9PlxuICAgICAgICAgICAgY2NjLm1hcCgoY2MpID0+IGNjLm1hcCgoYykgPT4gdHJhbnNmb3JtKGMsIHRoaXMuc3JpZCwgdGhpcy5tYXBTcmlkKSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Q29vcmRpbmF0ZXModHJhbnNmb3JtZWRDb29yZGluYXRlcyk7XG4gIH1cbn1cbiJdfQ==