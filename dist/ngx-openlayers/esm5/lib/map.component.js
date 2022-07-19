import { __decorate } from "tslib";
import { Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit, SimpleChanges, OnChanges, } from '@angular/core';
import Map from 'ol/Map';
var MapComponent = /** @class */ (function () {
    function MapComponent(host) {
        this.host = host;
        this.componentType = 'map';
        this.width = '100%';
        this.height = '100%';
        // we pass empty arrays to not get default controls/interactions because we have our own directives
        this.controls = [];
        this.interactions = [];
        this.olClick = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.moveStart = new EventEmitter();
        this.moveEnd = new EventEmitter();
        this.pointerDrag = new EventEmitter();
        this.pointerMove = new EventEmitter();
        this.onpostrender = new EventEmitter();
        this.postRender = new EventEmitter();
        this.onprerender = new EventEmitter();
        this.propertyChange = new EventEmitter();
        this.singleClick = new EventEmitter();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('creating ol.Map instance with:', this);
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', function (event) { return _this.olClick.emit(event); });
        this.instance.on('dblclick', function (event) { return _this.dblClick.emit(event); });
        this.instance.on('movestart', function (event) { return _this.moveStart.emit(event); });
        this.instance.on('moveend', function (event) { return _this.moveEnd.emit(event); });
        this.instance.on('pointerdrag', function (event) { return _this.pointerDrag.emit(event); });
        this.instance.on('pointermove', function (event) { return _this.pointerMove.emit(event); });
        this.instance.on('postrender', function (event) { return _this.onpostrender.emit(event); });
        this.instance.on('postrender', function (event) { return _this.postRender.emit(event); });
        this.instance.on('prerender', function (event) { return _this.onprerender.emit(event); });
        this.instance.on('propertychange', function (event) { return _this.propertyChange.emit(event); });
        this.instance.on('singleclick', function (event) { return _this.singleClick.emit(event); });
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    MapComponent.prototype.ngAfterViewInit = function () {
        this.instance.updateSize();
    };
    MapComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], MapComponent.prototype, "width", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "height", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "pixelRatio", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "keyboardEventTarget", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "loadTilesWhileAnimating", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "loadTilesWhileInteracting", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "logo", void 0);
    __decorate([
        Input()
    ], MapComponent.prototype, "renderer", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "olClick", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "dblClick", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "moveStart", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "moveEnd", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "pointerDrag", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "pointerMove", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "onpostrender", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "postRender", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "onprerender", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "propertyChange", void 0);
    __decorate([
        Output()
    ], MapComponent.prototype, "singleClick", void 0);
    MapComponent = __decorate([
        Component({
            selector: 'aol-map',
            template: "\n    <div [style.width]=\"width\" [style.height]=\"height\"></div>\n    <ng-content></ng-content>\n  "
        })
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUM7QUFlekI7SUFnREUsc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUE5QzdCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRzdCLFVBQUssR0FBRyxNQUFNLENBQUM7UUFFZixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBcUNoQixtR0FBbUc7UUFDbkcsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFHL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFD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QUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLHdHQUdUO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FnR3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWhHRCxJQWdHQztTQWhHWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBNYXAgZnJvbSAnb2wvTWFwJztcbmltcG9ydCBNYXBCcm93c2VyRXZlbnQgZnJvbSAnb2wvTWFwQnJvd3NlckV2ZW50JztcbmltcG9ydCBNYXBFdmVudCBmcm9tICdvbC9NYXBFdmVudCc7XG5pbXBvcnQgT2JqZWN0RXZlbnQgZnJvbSAnb2wvT2JqZWN0JztcbmltcG9ydCBSZW5kZXJFdmVudCBmcm9tICdvbC9yZW5kZXIvRXZlbnQnO1xuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1tYXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIj48L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIGluc3RhbmNlOiBNYXA7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ21hcCc7XG5cbiAgQElucHV0KClcbiAgd2lkdGggPSAnMTAwJSc7XG4gIEBJbnB1dCgpXG4gIGhlaWdodCA9ICcxMDAlJztcbiAgQElucHV0KClcbiAgcGl4ZWxSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBrZXlib2FyZEV2ZW50VGFyZ2V0OiBFbGVtZW50IHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBsb2FkVGlsZXNXaGlsZUFuaW1hdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9hZFRpbGVzV2hpbGVJbnRlcmFjdGluZzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9nbzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcmVuZGVyZXI6ICdjYW52YXMnIHwgJ3dlYmdsJztcblxuICBAT3V0cHV0KClcbiAgb2xDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBkYmxDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBtb3ZlU3RhcnQ6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XG4gIEBPdXRwdXQoKVxuICBtb3ZlRW5kOiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgcG9pbnRlckRyYWc6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgcG9pbnRlck1vdmU6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25wb3N0cmVuZGVyOiBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgcG9zdFJlbmRlcjogRXZlbnRFbWl0dGVyPE1hcEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG9ucHJlcmVuZGVyOiBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgcHJvcGVydHlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD47XG4gIEBPdXRwdXQoKVxuICBzaW5nbGVDbGljazogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG5cbiAgLy8gd2UgcGFzcyBlbXB0eSBhcnJheXMgdG8gbm90IGdldCBkZWZhdWx0IGNvbnRyb2xzL2ludGVyYWN0aW9ucyBiZWNhdXNlIHdlIGhhdmUgb3VyIG93biBkaXJlY3RpdmVzXG4gIGNvbnRyb2xzOiBDb250cm9sW10gPSBbXTtcbiAgaW50ZXJhY3Rpb25zOiBJbnRlcmFjdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5vbENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XG4gICAgdGhpcy5kYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMubW92ZVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBFdmVudD4oKTtcbiAgICB0aGlzLm1vdmVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICAgIHRoaXMucG9pbnRlckRyYWcgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgICB0aGlzLnBvaW50ZXJNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XG4gICAgdGhpcy5vbnBvc3RyZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PigpO1xuICAgIHRoaXMucG9zdFJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XG4gICAgdGhpcy5vbnByZXJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XG4gICAgdGhpcy5wcm9wZXJ0eUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gICAgdGhpcy5zaW5nbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLk1hcCBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTWFwKHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0VGFyZ2V0KHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjbGljaycsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLm9sQ2xpY2suZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2RibGNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMuZGJsQ2xpY2suZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vdmVzdGFydCcsIChldmVudDogTWFwRXZlbnQpID0+IHRoaXMubW92ZVN0YXJ0LmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5tb3ZlRW5kLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb2ludGVyZHJhZycsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLnBvaW50ZXJEcmFnLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb2ludGVybW92ZScsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLnBvaW50ZXJNb3ZlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBSZW5kZXJFdmVudCkgPT4gdGhpcy5vbnBvc3RyZW5kZXIuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bvc3RyZW5kZXInLCAoZXZlbnQ6IE1hcEV2ZW50KSA9PiB0aGlzLnBvc3RSZW5kZXIuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3ByZXJlbmRlcicsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25wcmVyZW5kZXIuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2luZ2xlY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5zaW5nbGVDbGljay5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLW1hcCwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVNpemUoKTtcbiAgfVxufVxuIl19