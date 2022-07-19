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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9nZW9qc29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVFwQyxJQUFhLHNCQUFzQiw4QkFBbkMsTUFBYSxzQkFBdUIsU0FBUSxlQUFlO0lBWXpELFlBQW9CLEtBQTJCO1FBQzdDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGLENBQUE7O1lBVDRCLG9CQUFvQix1QkFBbEMsSUFBSTs7QUFSakI7SUFEQyxLQUFLLEVBQUU7cUVBQzhCO0FBRXRDO0lBREMsS0FBSyxFQUFFO2lFQUMwQjtBQUVsQztJQURDLEtBQUssRUFBRTs0REFDYTtBQUVyQjtJQURDLEtBQUssRUFBRTttREFDSTtBQVZELHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQXNCLENBQUMsRUFBRSxDQUFDO0tBQ2pHLENBQUM7SUFhYSxXQUFBLElBQUksRUFBRSxDQUFBO0dBWlIsc0JBQXNCLENBcUJsQztTQXJCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBHZW9KU09OIH0gZnJvbSAnb2wvZm9ybWF0JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtZ2VvanNvbicsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZUdlb0pTT05Db21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VHZW9KU09OQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFZlY3RvcjtcbiAgZm9ybWF0OiBGZWF0dXJlO1xuICBASW5wdXQoKVxuICBkZWZhdWx0RGF0YVByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICBmZWF0dXJlUHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIGdlb21ldHJ5TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvckNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybWF0ID0gbmV3IEdlb0pTT04odGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3IodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19