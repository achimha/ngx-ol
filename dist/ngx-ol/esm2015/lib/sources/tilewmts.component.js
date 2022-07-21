var SourceTileWMTSComponent_1;
import { __decorate, __param } from "tslib";
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
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "cacheSize", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "crossOrigin", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "tileGrid", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "projection", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "reprojectionErrorThreshold", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "requestEncoding", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "layer", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "style", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "tileClass", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "tilePixelRatio", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "version", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "format", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "matrixSet", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "dimensions", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "url", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "tileLoadFunction", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "urls", void 0);
__decorate([
    Input()
], SourceTileWMTSComponent.prototype, "wrapX", void 0);
__decorate([
    Output()
], SourceTileWMTSComponent.prototype, "tileLoadStart", void 0);
__decorate([
    Output()
], SourceTileWMTSComponent.prototype, "tileLoadEnd", void 0);
__decorate([
    Output()
], SourceTileWMTSComponent.prototype, "tileLoadError", void 0);
__decorate([
    ContentChild(TileGridWMTSComponent, { static: false })
], SourceTileWMTSComponent.prototype, "tileGridWMTS", void 0);
SourceTileWMTSComponent = SourceTileWMTSComponent_1 = __decorate([
    Component({
        selector: 'aol-source-tilewmts',
        template: ` <ng-content></ng-content> `,
        providers: [{ provide: SourceComponent, useExisting: forwardRef(() => SourceTileWMTSComponent_1) }]
    }),
    __param(0, Host())
], SourceTileWMTSComponent);
export { SourceTileWMTSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXdtdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvdGlsZXdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxJQUFJLEVBQ0osS0FBSyxFQUNMLFVBQVUsRUFFVixZQUFZLEVBR1osTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLElBQUksSUFBSSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFZL0MsSUFBYSx1QkFBdUIsK0JBQXBDLE1BQWEsdUJBQXdCLFNBQVEsZUFBZTtJQWlEMUQsWUFBb0IsS0FBeUI7UUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBVmYsa0JBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbkYsZ0JBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFakYsa0JBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFPbkYsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxHQUFHLEVBQUU7b0JBQ1gsS0FBSyxLQUFLO3dCQUNSLElBQUksQ0FBQyxHQUFHLEdB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RSxDQUFBO0dBakRSLHVCQUF1QixDQXdGbkM7U0F4RlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0LFxuICBJbnB1dCxcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29udGVudENoaWxkLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExheWVyVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlR3JpZFdNVFNDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZHdtdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdNVFMgYXMgU291cmNlV01UUyB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgV01UUyBmcm9tICdvbC90aWxlZ3JpZC9XTVRTJztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcbmltcG9ydCB7IFRpbGVTb3VyY2VFdmVudCB9IGZyb20gJ29sL3NvdXJjZS9UaWxlJztcbmltcG9ydCB7IFJlcXVlc3RFbmNvZGluZyB9IGZyb20gJ29sL3NvdXJjZS9XTVRTJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS10aWxld210cycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVRpbGVXTVRTQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVGlsZVdNVFNDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBpbnN0YW5jZTogU291cmNlV01UUztcbiAgQElucHV0KClcbiAgY2FjaGVTaXplPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBjcm9zc09yaWdpbj86IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlsZUdyaWQ6IFdNVFM7XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICByZXByb2plY3Rpb25FcnJvclRocmVzaG9sZD86IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVxdWVzdEVuY29kaW5nPzogUmVxdWVzdEVuY29kaW5nIHwgdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBsYXllcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aWxlQ2xhc3M/OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHRpbGVQaXhlbFJhdGlvPzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB2ZXJzaW9uPzogc3RyaW5nO1xuICBASW5wdXQoKVxuICBmb3JtYXQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1hdHJpeFNldDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaW1lbnNpb25zPzogYW55O1xuICBASW5wdXQoKVxuICB1cmw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVybHM/OiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgd3JhcFg/OiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuXG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRXTVRTQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgdGlsZUdyaWRXTVRTOiBUaWxlR3JpZFdNVFNDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSAndXJsJzpcbiAgICAgICAgICAgIHRoaXMudXJsID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG5cbiAgc2V0TGF5ZXJTb3VyY2UoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTb3VyY2VXTVRTKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVycm9yJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aWxlR3JpZFdNVFMpIHtcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkV01UUy5pbnN0YW5jZTtcbiAgICAgIHRoaXMuc2V0TGF5ZXJTb3VyY2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==