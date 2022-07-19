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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy90aWxld21zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBcUIsVUFBVSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQVNwQyxJQUFhLHNCQUFzQiw4QkFBbkMsTUFBYSxzQkFBdUIsU0FBUSxlQUFlO0lBNkJ6RCxZQUFvQixLQUF5QjtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Q0FDRixDQUFBOztZQWQ0QixrQkFBa0IsdUJBQWhDLElBQUk7O0FBMUJqQjtJQURDLEtBQUssRUFBRTt5REFDVTtBQUVsQjtJQURDLEtBQUssRUFBRTsyREFDWTtBQUVwQjtJQURDLEtBQUssRUFBRTtzREFDTztBQUVmO0lBREMsS0FBSyxFQUFFO3FEQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7c0RBQ3VCO0FBRS9CO0lBREMsS0FBSyxFQUFFOzBEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFOzBFQUMyQjtBQUVuQztJQURDLEtBQUssRUFBRTswREFDVztBQUVuQjtJQURDLEtBQUssRUFBRTt3REFDVztBQUVuQjtJQURDLEtBQUssRUFBRTtnRUFDdUI7QUFFL0I7SUFEQyxLQUFLLEVBQUU7bURBQ0k7QUFFWjtJQURDLEtBQUssRUFBRTtvREFDTztBQUVmO0lBREMsS0FBSyxFQUFFO3FEQUNPO0FBM0JKLHNCQUFzQjtJQUxsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQXNCLENBQUMsRUFBRSxDQUFDO0tBQ2pHLENBQUM7SUE4QmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtHQTdCUixzQkFBc0IsQ0EyQ2xDO1NBM0NZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBmb3J3YXJkUmVmLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZVdNUyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgeyBUaWxlR3JpZCB9IGZyb20gJ29sL3RpbGVncmlkJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXRpbGV3bXMnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VUaWxlV01TQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZVdNU0NvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFRpbGVXTVM7XG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBjcm9zc09yaWdpbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBndXR0ZXI6IG51bWJlcjtcbiAgQElucHV0KClcbiAgaGlkcGk6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzZXJ2ZXJUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcbiAgQElucHV0KClcbiAgdGlsZUxvYWRGdW5jdGlvbjogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcbiAgQElucHV0KClcbiAgdXJsczogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZVdNUyh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0aGlzLmluc3RhbmNlICYmIGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BhcmFtcycpKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVBhcmFtcyh0aGlzLnBhcmFtcyk7XG4gICAgfVxuICB9XG59XG4iXX0=