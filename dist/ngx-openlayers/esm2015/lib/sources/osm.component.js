var SourceOsmComponent_1;
import { __decorate, __param } from "tslib";
import { Component, EventEmitter, forwardRef, Host, Input, Optional, Output } from '@angular/core';
import { OSM } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { SourceXYZComponent } from './xyz.component';
let SourceOsmComponent = SourceOsmComponent_1 = class SourceOsmComponent extends SourceXYZComponent {
    constructor(layer) {
        super(layer);
        this.layer = layer;
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngAfterContentInit() {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.instance = new OSM(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this._register(this.instance);
    }
};
SourceOsmComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] }
];
__decorate([
    Input()
], SourceOsmComponent.prototype, "attributions", void 0);
__decorate([
    Input()
], SourceOsmComponent.prototype, "cacheSize", void 0);
__decorate([
    Input()
], SourceOsmComponent.prototype, "crossOrigin", void 0);
__decorate([
    Input()
], SourceOsmComponent.prototype, "maxZoom", void 0);
__decorate([
    Input()
], SourceOsmComponent.prototype, "opaque", void 0);
__decorate([
    Input()
], SourceOsmComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    Input()
], SourceOsmComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    Input()
], SourceOsmComponent.prototype, "url", void 0);
__decorate([
    Input()
], SourceOsmComponent.prototype, "wrapX", void 0);
__decorate([
    Output()
], SourceOsmComponent.prototype, "tileLoadStart", void 0);
__decorate([
    Output()
], SourceOsmComponent.prototype, "tileLoadEnd", void 0);
__decorate([
    Output()
], SourceOsmComponent.prototype, "tileLoadError", void 0);
SourceOsmComponent = SourceOsmComponent_1 = __decorate([
    Component({
        selector: 'aol-source-osm',
        template: ` <div class="aol-source-osm"></div> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceOsmComponent_1) }]
    }),
    __param(0, Optional()),
    __param(0, Host())
], SourceOsmComponent);
export { SourceOsmComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3NtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvb3NtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFJaEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3JELElBQWEsa0JBQWtCLDBCQUEvQixNQUFhLGtCQUFtQixTQUFRLGtCQUFrQjtJQTZCeEQsWUFHWSxLQUEwQjtRQUVwQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFGSCxVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQVR0QyxrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVuRixnQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUVqRixrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQVFuRixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTs7WUFqQnFCLGtCQUFrQix1QkFGbkMsUUFBUSxZQUNSLElBQUk7O0FBM0JQO0lBREMsS0FBSyxFQUFFO3dEQUNzQjtBQUU5QjtJQURDLEtBQUssRUFBRTtxREFDVTtBQUVsQjtJQURDLEtBQUssRUFBRTt1REFDWTtBQUVwQjtJQURDLEtBQUssRUFBRTttREFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTtrREFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTtzRUFDMkI7QUFFbkM7SUFEQyxLQUFLLEVBQUU7NERBQ3VCO0FBRS9CO0lBREMsS0FBSyxFQUFFOytDQUNJO0FBRVo7SUFEQyxLQUFLLEVBQUU7aURBQ087QUFHZjtJQURDLE1BQU0sRUFBRTt5REFDMEU7QUFFbkY7SUFEQyxNQUFNLEVBQUU7dURBQ3dFO0FBRWpGO0lBREMsTUFBTSxFQUFFO3lEQUMwRTtBQTNCeEUsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLHNDQUFzQztRQUNoRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBa0IsQ0FBQyxFQUFFLENBQUM7S0FDN0YsQ0FBQztJQStCRyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxJQUFJLEVBQUUsQ0FBQTtHQS9CRSxrQkFBa0IsQ0FpRDlCO1NBakRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0LCBJbnB1dCwgT3B0aW9uYWwsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT1NNIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uTGlrZSB9IGZyb20gJ29sL3NvdXJjZS9Tb3VyY2UnO1xuaW1wb3J0IHsgVGlsZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1RpbGUnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlWFlaQ29tcG9uZW50IH0gZnJvbSAnLi94eXouY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1vc20nLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXNvdXJjZS1vc21cIj48L2Rpdj4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZU9zbUNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZU9zbUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZVhZWkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBpbnN0YW5jZTogT1NNO1xuXG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgQElucHV0KClcbiAgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBvcGFxdWU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEhvc3QoKVxuICAgIHByb3RlY3RlZCBsYXllcj86IExheWVyVGlsZUNvbXBvbmVudFxuICApIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMudGlsZUdyaWRYWVopIHtcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkWFlaLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT1NNKHRoaXMpO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRzdGFydCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZW5kJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2FkZXJyb3InLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVycm9yLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19