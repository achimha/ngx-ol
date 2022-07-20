var SourceTileWMTSComponent_1;
import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, ContentChild, Output, EventEmitter, } from '@angular/core';
import { LayerTileComponent } from '../layers/layertile.component';
import { SourceComponent } from './source.component';
import { TileGridWMTSComponent } from '../tilegridwmts.component';
import { WMTS as SourceWMTS } from 'ol/source';
let SourceTileWMTSComponent = SourceTileWMTSComponent_1 = class SourceTileWMTSComponent extends SourceComponent {
    constructor(layer) {
        super(layer);
        this.tileLoadStart = new EventEmitter();
        this.tileLoadEnd = new EventEmitter();
        this.tileLoadError = new EventEmitter();
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'url':
                        this.url = changes[key].currentValue;
                        this.setLayerSource();
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
    }
    setLayerSource() {
        this.instance = new SourceWMTS(this);
        this.instance.on('tileloadstart', (event) => this.tileLoadStart.emit(event));
        this.instance.on('tileloadend', (event) => this.tileLoadEnd.emit(event));
        this.instance.on('tileloaderror', (event) => this.tileLoadError.emit(event));
        this.host.instance.setSource(this.instance);
    }
    ngAfterContentInit() {
        if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
        }
    }
};
SourceTileWMTSComponent.ctorParameters = () => [
    { type: LayerTileComponent, decorators: [{ type: Host }] }
];
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "cacheSize", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "crossOrigin", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "tileGrid", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "projection", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "reprojectionErrorThreshold", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "requestEncoding", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "layer", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "style", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "tileClass", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "tilePixelRatio", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "version", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "format", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "matrixSet", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "dimensions", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "url", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "tileLoadFunction", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "urls", void 0);
tslib_1.__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "wrapX", void 0);
tslib_1.__decorate([
    Output()
], SourceTileWMTSComponent.prototype, "tileLoadStart", void 0);
tslib_1.__decorate([
    Output()
], SourceTileWMTSComponent.prototype, "tileLoadEnd", void 0);
tslib_1.__decorate([
    Output()
], SourceTileWMTSComponent.prototype, "tileLoadError", void 0);
tslib_1.__decorate([
    ContentChild(TileGridWMTSComponent, { static: false })
], SourceTileWMTSComponent.prototype, "tileGridWMTS", void 0);
SourceTileWMTSComponent = SourceTileWMTSComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'aol-source-tilewmts',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent_1) }]
    }),
    tslib_1.__param(0, Host())
], SourceTileWMTSComponent);
export { SourceTileWMTSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdGlsZXdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUNMLFVBQVUsRUFFVixZQUFZLEVBR1osTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLElBQUksSUFBSSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFZL0MsSUFBYSx1QkFBdUIsK0JBQXBDLE1BQWEsdUJBQXdCLFNBQVEsZUFBZTtJQWlEMUQsWUFBb0IsS0FBeUI7UUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBVmYsa0JBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbkYsZ0JBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFakYsa0JBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFPbkYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxHQUFHLEVBQUU7b0JBQ1gsS0FBSyxLQUFLO3dCQUNSLElBQUksQ0FBQyxHQUFHLEdB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QUUsQ0FBQTtHQWpEUix1QkFBdUIsQ0F3Rm5DO1NBeEZZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRXTVRTQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWR3bXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXTVRTIGFzIFNvdXJjZVdNVFMgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IFdNVFMgZnJvbSAnb2wvdGlsZWdyaWQvV01UUyc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5pbXBvcnQgeyBUaWxlU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvVGlsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0RW5jb2RpbmcgfSBmcm9tICdvbC9zb3VyY2UvV01UUyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdGlsZXdtdHMnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VUaWxlV01UU0NvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVRpbGVXTVRTQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IFNvdXJjZVdNVFM7XG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZT86IG51bWJlcjtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpbGVHcmlkOiBXTVRTO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgcmVwcm9qZWN0aW9uRXJyb3JUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlcXVlc3RFbmNvZGluZz86IFJlcXVlc3RFbmNvZGluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KClcbiAgbGF5ZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3R5bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlsZUNsYXNzPzogYW55O1xuICBASW5wdXQoKVxuICB0aWxlUGl4ZWxSYXRpbz86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdmVyc2lvbj86IHN0cmluZztcbiAgQElucHV0KClcbiAgZm9ybWF0Pzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtYXRyaXhTZXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGltZW5zaW9ucz86IGFueTtcbiAgQElucHV0KClcbiAgdXJsPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aWxlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmxzPzogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHdyYXBYPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRTdGFydDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkRW5kOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcblxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkV01UU0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHRpbGVHcmlkV01UUzogVGlsZUdyaWRXTVRTQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgICAgICB0aGlzLnVybCA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNldExheWVyU291cmNlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxuXG4gIHNldExheWVyU291cmNlKCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU291cmNlV01UUyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlbmQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGlsZUdyaWRXTVRTKSB7XG4gICAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZFdNVFMuaW5zdGFuY2U7XG4gICAgICB0aGlzLnNldExheWVyU291cmNlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=