import * as tslib_1 from "tslib";
import { Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit, SimpleChanges, OnChanges, } from '@angular/core';
import { Map } from 'ol';
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
        // TODO this.instance.on('prerender', (event: RenderEvent) => this.onprerender.emit(event));
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
    tslib_1.__decorate([
        Input()
    ], MapComponent.prototype, "width", void 0);
    tslib_1.__decorate([
        Input()
    ], MapComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        Input()
    ], MapComponent.prototype, "pixelRatio", void 0);
    tslib_1.__decorate([
        Input()
    ], MapComponent.prototype, "keyboardEventTarget", void 0);
    tslib_1.__decorate([
        Input()
    ], MapComponent.prototype, "loadTilesWhileAnimating", void 0);
    tslib_1.__decorate([
        Input()
    ], MapComponent.prototype, "loadTilesWhileInteracting", void 0);
    tslib_1.__decorate([
        Input()
    ], MapComponent.prototype, "logo", void 0);
    tslib_1.__decorate([
        Input()
    ], MapComponent.prototype, "renderer", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "olClick", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "dblClick", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "moveStart", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "moveEnd", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "pointerDrag", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "pointerMove", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "onpostrender", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "postRender", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "onprerender", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "propertyChange", void 0);
    tslib_1.__decorate([
        Output()
    ], MapComponent.prototype, "singleClick", void 0);
    MapComponent = tslib_1.__decorate([
        Component({
            selector: 'aol-map',
            template: "\n    <div [style.width]=\"width\" [style.height]=\"height\"></div>\n    <ng-content></ng-content>\n  "
        })
    ], MapComponent);
    return MapComponent;
}());
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osYUFBYSxFQUNiLGFBQWEsRUFDYixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLElBQUksQ0FBQztBQWV6QjtJQWdERSxzQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTlDN0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHN0IsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUVmLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFxQ2hCLG1HQUFtRztRQUNuRyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUErQixDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQStCLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUErQixDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQStCLENBQUM7UUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFlLENB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25DaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ29sJztcbmltcG9ydCBNYXBCcm93c2VyRXZlbnQgZnJvbSAnb2wvTWFwQnJvd3NlckV2ZW50JztcbmltcG9ydCBNYXBFdmVudCBmcm9tICdvbC9NYXBFdmVudCc7XG5pbXBvcnQgeyBPYmplY3RFdmVudCB9IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgUmVuZGVyRXZlbnQgZnJvbSAnb2wvcmVuZGVyL0V2ZW50JztcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtbWFwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBpbnN0YW5jZTogTWFwO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdtYXAnO1xuXG4gIEBJbnB1dCgpXG4gIHdpZHRoID0gJzEwMCUnO1xuICBASW5wdXQoKVxuICBoZWlnaHQgPSAnMTAwJSc7XG4gIEBJbnB1dCgpXG4gIHBpeGVsUmF0aW86IG51bWJlcjtcbiAgQElucHV0KClcbiAga2V5Ym9hcmRFdmVudFRhcmdldDogSFRNTEVsZW1lbnQgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxvYWRUaWxlc1doaWxlQW5pbWF0aW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsb2FkVGlsZXNXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsb2dvOiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoKVxuICByZW5kZXJlcjogJ2NhbnZhcycgfCAnd2ViZ2wnO1xuXG4gIEBPdXRwdXQoKVxuICBvbENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PjtcbiAgQE91dHB1dCgpXG4gIGRibENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PjtcbiAgQE91dHB1dCgpXG4gIG1vdmVTdGFydDogRXZlbnRFbWl0dGVyPE1hcEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG1vdmVFbmQ6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XG4gIEBPdXRwdXQoKVxuICBwb2ludGVyRHJhZzogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50Pj47XG4gIEBPdXRwdXQoKVxuICBwb2ludGVyTW92ZTogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50Pj47XG4gIEBPdXRwdXQoKVxuICBvbnBvc3RyZW5kZXI6IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBwb3N0UmVuZGVyOiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25wcmVyZW5kZXI6IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBwcm9wZXJ0eUNoYW5nZTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHNpbmdsZUNsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PjtcblxuICAvLyB3ZSBwYXNzIGVtcHR5IGFycmF5cyB0byBub3QgZ2V0IGRlZmF1bHQgY29udHJvbHMvaW50ZXJhY3Rpb25zIGJlY2F1c2Ugd2UgaGF2ZSBvdXIgb3duIGRpcmVjdGl2ZXNcbiAgY29udHJvbHM6IENvbnRyb2xbXSA9IFtdO1xuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLm9sQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50Pj4oKTtcbiAgICB0aGlzLmRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+KCk7XG4gICAgdGhpcy5tb3ZlU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICAgIHRoaXMubW92ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XG4gICAgdGhpcy5wb2ludGVyRHJhZyA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PigpO1xuICAgIHRoaXMucG9pbnRlck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50Pj4oKTtcbiAgICB0aGlzLm9ucG9zdHJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XG4gICAgdGhpcy5wb3N0UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBFdmVudD4oKTtcbiAgICB0aGlzLm9ucHJlcmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD4oKTtcbiAgICB0aGlzLnByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgICB0aGlzLnNpbmdsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuTWFwIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNYXAodGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRUYXJnZXQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4pID0+IHRoaXMub2xDbGljay5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignZGJsY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50PikgPT4gdGhpcy5kYmxDbGljay5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW92ZXN0YXJ0JywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5tb3ZlU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vdmVlbmQnLCAoZXZlbnQ6IE1hcEV2ZW50KSA9PiB0aGlzLm1vdmVFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3BvaW50ZXJkcmFnJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4pID0+IHRoaXMucG9pbnRlckRyYWcuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3BvaW50ZXJtb3ZlJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4pID0+IHRoaXMucG9pbnRlck1vdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bvc3RyZW5kZXInLCAoZXZlbnQ6IFJlbmRlckV2ZW50KSA9PiB0aGlzLm9ucG9zdHJlbmRlci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIChldmVudDogTWFwRXZlbnQpID0+IHRoaXMucG9zdFJlbmRlci5lbWl0KGV2ZW50KSk7XG4gICAgLy8gVE9ETyB0aGlzLmluc3RhbmNlLm9uKCdwcmVyZW5kZXInLCAoZXZlbnQ6IFJlbmRlckV2ZW50KSA9PiB0aGlzLm9ucHJlcmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NpbmdsZWNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4pID0+IHRoaXMuc2luZ2xlQ2xpY2suZW1pdChldmVudCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1tYXAsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIHByb3BlcnRpZXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS51cGRhdGVTaXplKCk7XG4gIH1cbn1cbiJdfQ==