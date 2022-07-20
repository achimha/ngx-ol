var SourceTileWMSComponent_1;
import { __decorate, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileWMS } from 'ol/source';
let SourceTileWMSComponent = SourceTileWMSComponent_1 = class SourceTileWMSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
    }
    ngOnInit() {
        this.instance = new TileWMS(this);
        this.host.instance.setSource(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
        }
    }
};
SourceTileWMSComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "cacheSize", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "crossOrigin", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "gutter", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "hidpi", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "params", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "projection", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "serverType", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "tileGrid", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "url", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "urls", void 0);
__decorate([
    Input()
], SourceTileWMSComponent.prototype, "wrapX", void 0);
SourceTileWMSComponent = SourceTileWMSComponent_1 = __decorate([
    Component({
        selector: 'aol-source-tilewms',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMSComponent_1) }]
    }),
    __param(0, Host())
], SourceTileWMSComponent);
export { SourceTileWMSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy90aWxld21zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBcUIsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVVwQyxJQUFhLHNCQUFzQiw4QkFBbkMsTUFBYSxzQkFBdUIsU0FBUSxlQUFlO0lBNkJ6RCxZQUFvQixLQUF5QjtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Q0FDRixDQUFBOztZQWQ0QixrQkFBa0IsdUJBQWhDLElBQUk7O0FBMUJqQjtJQURDLEtBQUssRUFBRTt5REFDVTtBQUVsQjtJQURDLEtBQUssRUFBRTsyREFDWTtBQUVwQjtJQURDLEtBQUssRUFBRTtzREFDTztBQUVmO0lBREMsS0FBSyxFQUFFO3FEQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7c0RBQ3VCO0FBRS9CO0lBREMsS0FBSyxFQUFFOzBEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFOzBFQUMyQjtBQUVuQztJQURDLEtBQUssRUFBRTswREFDZTtBQUV2QjtJQURDLEtBQUssRUFBRTt3REFDVztBQUVuQjtJQURDLEtBQUssRUFBRTtnRUFDdUI7QUFFL0I7SUFEQyxLQUFLLEVBQUU7bURBQ0k7QUFFWjtJQURDLEtBQUssRUFBRTtvREFDTztBQUVmO0lBREMsS0FBSyxFQUFFO3FEQUNPO0FBM0JKLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQXNCLENBQUMsRUFBRSxDQUFDO0tBQ2pHLENBQUM7SUE4QmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtHQTdCUixzQkFBc0IsQ0EyQ2xDO1NBM0NZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBmb3J3YXJkUmVmLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZVdNUyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgeyBTZXJ2ZXJUeXBlIH0gZnJvbSAnb2wvc291cmNlL3dtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdGlsZXdtcycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVRpbGVXTVNDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VUaWxlV01TQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBpbnN0YW5jZTogVGlsZVdNUztcbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGd1dHRlcjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBoaWRwaTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHNlcnZlclR5cGU6IFNlcnZlclR5cGU7XG4gIEBJbnB1dCgpXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcbiAgQElucHV0KClcbiAgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcbiAgQElucHV0KClcbiAgdXJsczogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZVdNUyh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XG4gICAgfVxuICB9XG59XG4iXX0=