import { __decorate, __extends, __param } from "tslib";
import { Component, ContentChild, EventEmitter, forwardRef, Host, Input, Optional, Output, } from '@angular/core';
import { XYZ } from 'ol/source';
import { LayerTileComponent } from '../layers/layertile.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
var SourceXYZComponent = /** @class */ (function (_super) {
    __extends(SourceXYZComponent, _super);
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
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceXYZComponent_1; }) }]
        }),
        __param(0, Optional()),
        __param(0, Host())
    ], SourceXYZComponent);
    return SourceXYZComponent;
}(SourceComponent));
export { SourceXYZComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieHl6LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3h5ei5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxHQUVQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLaEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT3JEO0lBQXdDLHNDQUFlO0lBMkNyRCw0QkFHWSxLQUEwQjtRQUh0QyxZQUtFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBSFcsV0FBSyxHQUFMLEtBQUssQ0FBcUI7UUFUdEMsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFbkYsaUJBQVcsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFakYsbUJBQWEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7O0lBUW5GLENBQUM7MkJBakRVLGtCQUFrQjtJQW1EN0IsK0NBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsd0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQU0sVUFBVSxHQUE2QixFQUFFLENBQUM7UUFFaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVB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biAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5pbXBvcnQgeyBYWVogfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgVGlsZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL1RpbGUnO1xuaW1wb3J0IHsgTG9hZEZ1bmN0aW9uLCBVcmxGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcblxuaW1wb3J0IHsgTGF5ZXJUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS14eXonLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VYWVpDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VYWVpDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBpbnN0YW5jZTogWFlaO1xuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IHN0cmluZztcbiAgQElucHV0KClcbiAgb3BhcXVlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlR3JpZDogVGlsZUdyaWQ7XG4gIEBJbnB1dCgpXG4gIHRpbGVMb2FkRnVuY3Rpb24/OiBMb2FkRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHRpbGVQaXhlbFJhdGlvOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpbGVTaXplOiBudW1iZXIgfCBTaXplO1xuICBASW5wdXQoKVxuICB0aWxlVXJsRnVuY3Rpb24/OiBVcmxGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHVybHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcblxuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50KVxuICB0aWxlR3JpZFhZWjogVGlsZUdyaWRDb21wb25lbnQ7XG5cbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkU3RhcnQ6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICB0aWxlTG9hZEVuZDogRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRpbGVTb3VyY2VFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIHRpbGVMb2FkRXJyb3I6IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUaWxlU291cmNlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASG9zdCgpXG4gICAgcHJvdGVjdGVkIGxheWVyPzogTGF5ZXJUaWxlQ29tcG9uZW50XG4gICkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy50aWxlR3JpZFhZWikge1xuICAgICAgdGhpcy50aWxlR3JpZCA9IHRoaXMudGlsZUdyaWRYWVouaW5zdGFuY2U7XG4gICAgfVxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCd1cmwnKSkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFhZWih0aGlzKTtcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3RpbGVsb2Fkc3RhcnQnLCAoZXZlbnQ6IFRpbGVTb3VyY2VFdmVudCkgPT4gdGhpcy50aWxlTG9hZFN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVuZCcsIChldmVudDogVGlsZVNvdXJjZUV2ZW50KSA9PiB0aGlzLnRpbGVMb2FkRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCd0aWxlbG9hZGVycm9yJywgKGV2ZW50OiBUaWxlU291cmNlRXZlbnQpID0+IHRoaXMudGlsZUxvYWRFcnJvci5lbWl0KGV2ZW50KSk7XG5cbiAgICB0aGlzLl9yZWdpc3Rlcih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19