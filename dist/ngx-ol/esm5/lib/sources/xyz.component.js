import * as tslib_1 from "tslib";
import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Optional, Output, } from '@angular/core';
import { XYZ } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
var SourceXYZComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceXYZComponent, _super);
    function SourceXYZComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.layer = layer;
        _this.tileLoadStart = new EventEmitter();
        _this.tileLoadEnd = new EventEmitter();
        _this.tileLoadError = new EventEmitter();
        return _this;
    }
    SourceXYZComponent_1 = SourceXYZComponent;
    SourceXYZComponent.prototype.ngAfterContentInit = function () {
        if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
        }
        this.init();
    };
    SourceXYZComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        this.instance.setProperties(properties, false);
        if (changes.hasOwnProperty('url')) {
            this.init();
        }
    };
    SourceXYZComponent.prototype.init = function () {
        var _this = this;
        this.instance = new XYZ(this);
        this.instance.on('tileloadstart', function (event) { return _this.tileLoadStart.emit(event); });
        this.instance.on('tileloadend', function (event) { return _this.tileLoadEnd.emit(event); });
        this.instance.on('tileloaderror', function (event) { return _this.tileLoadError.emit(event); });
        this._register(this.instance);
    };
    var SourceXYZComponent_1;
    SourceXYZComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "cacheSize", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "crossOrigin", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "opaque", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "projection", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "reprojectionErrorThreshold", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "minZoom", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "maxZoom", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileGrid", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileLoadFunction", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "tilePixelRatio", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileSize", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "tileUrlFunction", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "url", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "urls", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceXYZComponent.prototype, "wrapX", void 0);
    tslib_1.__decorate([
        ContentChild(TileGridComponent, { static: false })
    ], SourceXYZComponent.prototype, "tileGridXYZ", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceXYZComponent.prototype, "tileLoadStart", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceXYZComponent.prototype, "tileLoadEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], SourceXYZComponent.prototype, "tileLoadError", void 0);
    SourceXYZComponent = SourceXYZComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-source-xyz',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceXYZComponent_1; }) }]
        }),
        tslib_1.__param(0, Optional()),
        tslib_1.__param(0, Host())
    ], SourceXYZComponent);
    return SourceXYZComponent;
}(SourceComponent));
export { SourceXYZComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3h5ei5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLaEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3JEO0lBQXdDLDhDQUFlO0lBMkNyRCw0QkFHWSxLQUEwQjtRQUh0QyxZQUtFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBSFcsV0FBSyxHQUFMLEtBQUssQ0FBcUI7UUFUdEMsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbkYsaUJBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFakYsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7O0lBUW5GLENBQUM7MkJBakRVLGtCQUFrQjtJQW1EN0IsK0NBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQU0sVUFBVSxHQUE2QixFQUFFLENBQUM7UUFFaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQzthQUM3QztTQUNGO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxpQ0FBSSxHQUFKO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQXNCLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBRTlGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OztnQkF0Q21CLGtCQUFrQix1QkFGbkMsUUFBUSxZQUNSLElBQUk7O0lBMUNQO1FBREMsS0FBSyxFQUFFO3lEQUNVO0lBRWxCO1FBREMsS0FBSyxFQUFFOzJEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFO3NEQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFOzBEQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFOzBFQUMyQjtJQUVuQztRQURDLEtBQUssRUFBRTt1REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTt1REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTt3REFDVztJQUVuQjtRQURDLEtBQUssRUFBRTtnRUFDd0I7SUFFaEM7UUFEQyxLQUFLLEVBQUU7OERBQ2U7SUFFdkI7UUFEQyxLQUFLLEVBQUU7d0RBQ2dCO0lBRXhCO1FBREMsS0FBSyxFQUFFOytEQUNzQjtJQUU5QjtRQURDLEtBQUssRUFBRTttREFDSTtJQUVaO1FBREMsS0FBSyxFQUFFO29EQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7cURBQ087SUFHZjtRQURDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQzsyREFDcEI7SUFHL0I7UUFEQyxNQUFNLEVBQUU7NkRBQzBFO0lBRW5GO1FBREMsTUFBTSxFQUFFOzJEQUN3RTtJQUVqRjtRQURDLE1BQU0sRUFBRTs2REFDMEU7SUF6Q3hFLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFrQixFQUFsQixDQUFrQixDQUFDLEVBQUUsQ0FBQztTQUM3RixDQUFDO1FBNkNHLG1CQUFBLFFBQVEsRUFBRSxDQUFBO1FBQ1YsbUJBQUEsSUFBSSxFQUFFLENBQUE7T0E3Q0Usa0JBQWtCLENBcUY5QjtJQUFELHlCQUFDO0NBQUEsQUFyRkQsQ0FBd0MsZUFBZSxHQXFGdEQ7U0FyRlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5pbXBvcnQgeyBYWVogfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgVGlsZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1RpbGUnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uLCBVcmxGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcblxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS14eXonLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VYWVpDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VYWVpDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBpbnN0YW5jZTogWFlaO1xuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgQElucHV0KClcbiAgb3BhcXVlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlR3JpZDogVGlsZUdyaWQ7XG4gIEBJbnB1dCgpXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHRpbGVQaXhlbFJhdGlvOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpbGVTaXplOiBudW1iZXIgfCBTaXplO1xuICBASW5wdXQoKVxuICB0aWxlVXJsRnVuY3Rpb24/OiBVcmxGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHVybHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcblxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgdGlsZUdyaWRYWVo6IFRpbGVHcmlkQ29tcG9uZW50O1xuXG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZFN0YXJ0OiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgdGlsZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZEVycm9yOiBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGlsZVNvdXJjZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEhvc3QoKVxuICAgIHByb3RlY3RlZCBsYXllcj86IExheWVyVGlsZUNvbXBvbmVudFxuICApIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKHRoaXMudGlsZUdyaWRYWVopIHtcbiAgICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkWFlaLmluc3RhbmNlO1xuICAgIH1cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgndXJsJykpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBYWVoodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZHN0YXJ0JywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlbmQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZEVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigndGlsZWxvYWRlcnJvcicsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRXJyb3IuZW1pdChldmVudCkpO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXIodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==