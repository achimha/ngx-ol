import { Component } from '@angular/core';
import { FeatureComponent } from '../feature.component';
import { SimpleGeometryComponent } from './simplegeometry.component';
import { MapComponent } from '../map.component';
import { MultiPoint } from 'ol/geom';
export class GeometryMultiPointComponent extends SimpleGeometryComponent {
    constructor(map, host) {
        super(map, host);
        this.componentType = 'geometry-multipoint';
    }
    ngOnInit() {
        this.instance = new MultiPoint([
            [0, 0],
            [1, 1],
        ]);
        super.ngOnInit();
    }
}
GeometryMultiPointComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-geometry-multipoint',
                template: ` <ng-content></ng-content> `
            },] }
];
GeometryMultiPointComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: FeatureComponent }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbWV0cnltdWx0aXBvaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoaW1oYS9Qcm9qZWN0cy9uZ3gtb2wvcHJvamVjdHMvbmd4LW9sL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9nZW9tL2dlb21ldHJ5bXVsdGlwb2ludC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQU1yQyxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsdUJBQXVCO0lBSXRFLFlBQVksR0FBaUIsRUFBRSxJQUFzQjtRQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBSlosa0JBQWEsR0FBRyxxQkFBcUIsQ0FBQztJQUs3QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ1AsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7O1lBTlEsWUFBWTtZQUZaLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWF0dXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2ltcGxlR2VvbWV0cnlDb21wb25lbnQgfSBmcm9tICcuL3NpbXBsZWdlb21ldHJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpUG9pbnQgfSBmcm9tICdvbC9nZW9tJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWdlb21ldHJ5LW11bHRpcG9pbnQnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEdlb21ldHJ5TXVsdGlQb2ludENvbXBvbmVudCBleHRlbmRzIFNpbXBsZUdlb21ldHJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZ2VvbWV0cnktbXVsdGlwb2ludCc7XG4gIHB1YmxpYyBpbnN0YW5jZTogTXVsdGlQb2ludDtcblxuICBjb25zdHJ1Y3RvcihtYXA6IE1hcENvbXBvbmVudCwgaG9zdDogRmVhdHVyZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKG1hcCwgaG9zdCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE11bHRpUG9pbnQoW1xuICAgICAgWzAsIDBdLFxuICAgICAgWzEsIDFdLFxuICAgIF0pO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cbn1cbiJdfQ==