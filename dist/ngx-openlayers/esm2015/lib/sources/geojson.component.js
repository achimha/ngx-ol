var SourceGeoJSONComponent_1;
import { __decorate, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { LayerVectorComponent } from '../layers/layervector.component';
import { SourceComponent } from './source.component';
import { Vector } from 'ol/source';
import { GeoJSON } from 'ol/format';
let SourceGeoJSONComponent = SourceGeoJSONComponent_1 = class SourceGeoJSONComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.format = new GeoJSON(this);
        this.instance = new Vector(this);
        this.host.instance.setSource(this.instance);
    }
};
SourceGeoJSONComponent.ctorParameters = () => [
    { type: LayerVectorComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceGeoJSONComponent.prototype, "defaultDataProjection", void 0);
__decorate([
    Input()
], SourceGeoJSONComponent.prototype, "featureProjection", void 0);
__decorate([
    Input()
], SourceGeoJSONComponent.prototype, "geometryName", void 0);
__decorate([
    Input()
], SourceGeoJSONComponent.prototype, "url", void 0);
SourceGeoJSONComponent = SourceGeoJSONComponent_1 = __decorate([
    Component({
        selector: 'aol-source-geojson',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceGeoJSONComponent_1) }]
    }),
    __param(0, Host())
], SourceGeoJSONComponent);
export { SourceGeoJSONComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL2dlb2pzb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBUXBDLElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUF1QixTQUFRLGVBQWU7SUFZekQsWUFBb0IsS0FBMkI7UUFDN0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTs7WUFUNEIsb0JBQW9CLHVCQUFsQyxJQUFJOztBQVJqQjtJQURDLEtBQUssRUFBRTtxRUFDOEI7QUFFdEM7SUFEQyxLQUFLLEVBQUU7aUVBQzBCO0FBRWxDO0lBREMsS0FBSyxFQUFFOzREQUNhO0FBRXJCO0lBREMsS0FBSyxFQUFFO21EQUNJO0FBVkQsc0JBQXNCO0lBTGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBc0IsQ0FBQyxFQUFFLENBQUM7S0FDakcsQ0FBQztJQWFhLFdBQUEsSUFBSSxFQUFFLENBQUE7R0FaUixzQkFBc0IsQ0FxQmxDO1NBckJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uSW5pdCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IEdlb0pTT04gfSBmcm9tICdvbC9mb3JtYXQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1nZW9qc29uJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlR2VvSlNPTkNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUdlb0pTT05Db21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogVmVjdG9yO1xuICBmb3JtYXQ6IEZlYXR1cmU7XG4gIEBJbnB1dCgpXG4gIGRlZmF1bHREYXRhUHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIGZlYXR1cmVQcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgZ2VvbWV0cnlOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtYXQgPSBuZXcgR2VvSlNPTih0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3Rvcih0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=