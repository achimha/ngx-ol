var SourceXYZComponent_1;
import { __decorate, __param } from "tslib";
import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Optional, Output, } from '@angular/core';
import { XYZ } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
let SourceXYZComponent = SourceXYZComponent_1 = class SourceXYZComponent extends SourceComponent {
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
        this.init();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.init();
        }
    }
    init() {
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this._register(this.instance);
    }
};
SourceXYZComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] }
];
__decorate([
    Input()
], SourceXYZComponent.prototype, "cacheSize", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "crossOrigin", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "opaque", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "projection", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "minZoom", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "maxZoom", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "tileGrid", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "tilePixelRatio", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "tileSize", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "tileUrlFunction", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "url", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "urls", void 0);
__decorate([
    Input()
], SourceXYZComponent.prototype, "wrapX", void 0);
__decorate([
    ContentChild(TileGridComponent)
], SourceXYZComponent.prototype, "tileGridXYZ", void 0);
__decorate([
    Output()
], SourceXYZComponent.prototype, "tileLoadStart", void 0);
__decorate([
    Output()
], SourceXYZComponent.prototype, "tileLoadEnd", void 0);
__decorate([
    Output()
], SourceXYZComponent.prototype, "tileLoadError", void 0);
SourceXYZComponent = SourceXYZComponent_1 = __decorate([
    Component({
        selector: 'aol-source-xyz',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceXYZComponent_1) }]
    }),
    __param(0, Optional()),
    __param(0, Host())
], SourceXYZComponent);
export { SourceXYZComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3h5ei5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBS2hDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU9yRCxJQUFhLGtCQUFrQiwwQkFBL0IsTUFBYSxrQkFBbUIsU0FBUSxlQUFlO0lBMkNyRCxZQUdZLEtBQTBCO1FBRXBDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUZILFVBQUssR0FBTCxLQUFLLENBQXFCO1FBVHRDLGtCQUFhLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRW5GLGdCQUFXLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRWpGLGtCQUFhLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO0lBUW5GLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLE1BQU0sVUFBVSxHQUE2QixFQUFFLENBQUM7UUFFaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQzthQUM3QztTQUNGO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU5RixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTs7WUF2Q3FCLGtCQUFrQix1QkFGbkMsUUFBUSxZQUNSLElBQUk7O0FBMUNQO0lBREMsS0FBSyxFQUFFO3FEQUNVO0FBRWxCO0lBREMsS0FBSyxFQUFFO3VEQUNZO0FBRXBCO0lBREMsS0FBSyxFQUFFO2tEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFO3NEQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFO3NFQUMyQjtBQUVuQztJQURDLEtBQUssRUFBRTttREFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTttREFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTtvREFDVztBQUVuQjtJQURDLEtBQUssRUFBRTs0REFDd0I7QUFFaEM7SUFEQyxLQUFLLEVBQUU7MERBQ2U7QUFFdkI7SUFEQyxLQUFLLEVBQUU7b0RBQ2dCO0FBRXhCO0lBREMsS0FBSyxFQUFFOzJEQUNzQjtBQUU5QjtJQURDLEtBQUssRUFBRTsrQ0FDSTtBQUVaO0lBREMsS0FBSyxFQUFFO2dEQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7aURBQ087QUFHZjtJQURDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQzt1REFDRDtBQUcvQjtJQURDLE1BQU0sRUFBRTt5REFDMEU7QUFFbkY7SUFEQyxNQUFNLEVBQUU7dURBQ3dFO0FBRWpGO0lBREMsTUFBTSxFQUFFO3lEQUMwRTtBQXpDeEUsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFLDZCQUE2QjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBa0IsQ0FBQyxFQUFFLENBQUM7S0FDN0YsQ0FBQztJQTZDRyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxJQUFJLEVBQUUsQ0FBQTtHQTdDRSxrQkFBa0IsQ0FxRjlCO1NBckZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xuaW1wb3J0IHsgWFlaIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcbmltcG9ydCB7IExvYWRGdW5jdGlvbiwgVXJsRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XG5cbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbGVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UteHl6JyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlWFlaQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlWFlaQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IFhZWjtcbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGNyb3NzT3JpZ2luOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9wYXF1ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5ab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB0aWxlUGl4ZWxSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcbiAgQElucHV0KClcbiAgdGlsZVVybEZ1bmN0aW9uPzogVXJsRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1cmxzOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG5cbiAgQENvbnRlbnRDaGlsZChUaWxlR3JpZENvbXBvbmVudClcbiAgdGlsZUdyaWRYWVo6IFRpbGVHcmlkQ29tcG9uZW50O1xuXG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEhvc3QoKVxuICAgIHByb3RlY3RlZCBsYXllcj86IExheWVyVGlsZUNvbXBvbmVudFxuICApIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMudGlsZUdyaWRYWVopIHtcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkWFlaLmluc3RhbmNlO1xuICAgIH1cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBYWVoodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlbmQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXIodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==