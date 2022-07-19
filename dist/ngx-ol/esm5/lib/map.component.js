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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osYUFBYSxFQUNiLGFBQWEsRUFDYixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxHQUFHLE1BQU0sUUFBUSxDQUFDO0FBZXpCO0lBZ0RFLHNCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBOUM3QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUc3QixVQUFLLEdBQUcsTUFBTSxDQUFDO1FBRWYsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQXFDaEIsbUdBQW1HO1FBQ25HLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBRy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNuRCxJ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LFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSx3R0FHVDtTQUNGLENBQUM7T0FDVyxZQUFZLENBZ0d4QjtJQUFELG1CQUFDO0NBQUEsQUFoR0QsSUFnR0M7U0FoR1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEFmdGVyVmlld0luaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgTWFwIGZyb20gJ29sL01hcCc7XG5pbXBvcnQgTWFwQnJvd3NlckV2ZW50IGZyb20gJ29sL01hcEJyb3dzZXJFdmVudCc7XG5pbXBvcnQgTWFwRXZlbnQgZnJvbSAnb2wvTWFwRXZlbnQnO1xuaW1wb3J0IE9iamVjdEV2ZW50IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgUmVuZGVyRXZlbnQgZnJvbSAnb2wvcmVuZGVyL0V2ZW50JztcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtbWFwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBpbnN0YW5jZTogTWFwO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdtYXAnO1xuXG4gIEBJbnB1dCgpXG4gIHdpZHRoID0gJzEwMCUnO1xuICBASW5wdXQoKVxuICBoZWlnaHQgPSAnMTAwJSc7XG4gIEBJbnB1dCgpXG4gIHBpeGVsUmF0aW86IG51bWJlcjtcbiAgQElucHV0KClcbiAga2V5Ym9hcmRFdmVudFRhcmdldDogRWxlbWVudCB8IHN0cmluZztcbiAgQElucHV0KClcbiAgbG9hZFRpbGVzV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvYWRUaWxlc1doaWxlSW50ZXJhY3Rpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvZ286IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJlbmRlcmVyOiAnY2FudmFzJyB8ICd3ZWJnbCc7XG5cbiAgQE91dHB1dCgpXG4gIG9sQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgZGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgbW92ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgbW92ZUVuZDogRXZlbnRFbWl0dGVyPE1hcEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHBvaW50ZXJEcmFnOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHBvaW50ZXJNb3ZlOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG9ucG9zdHJlbmRlcjogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvbnByZXJlbmRlcjogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgc2luZ2xlQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuXG4gIC8vIHdlIHBhc3MgZW1wdHkgYXJyYXlzIHRvIG5vdCBnZXQgZGVmYXVsdCBjb250cm9scy9pbnRlcmFjdGlvbnMgYmVjYXVzZSB3ZSBoYXZlIG91ciBvd24gZGlyZWN0aXZlc1xuICBjb250cm9sczogQ29udHJvbFtdID0gW107XG4gIGludGVyYWN0aW9uczogSW50ZXJhY3Rpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogRWxlbWVudFJlZikge1xuICAgIHRoaXMub2xDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMuZGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgICB0aGlzLm1vdmVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XG4gICAgdGhpcy5tb3ZlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBFdmVudD4oKTtcbiAgICB0aGlzLnBvaW50ZXJEcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XG4gICAgdGhpcy5wb2ludGVyTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMub25wb3N0cmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD4oKTtcbiAgICB0aGlzLnBvc3RSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICAgIHRoaXMub25wcmVyZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PigpO1xuICAgIHRoaXMucHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICAgIHRoaXMuc2luZ2xlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5NYXAgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1hcCh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFRhcmdldCh0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vbENsaWNrLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkYmxjbGljaycsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLmRibENsaWNrLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb3Zlc3RhcnQnLCAoZXZlbnQ6IE1hcEV2ZW50KSA9PiB0aGlzLm1vdmVTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW92ZWVuZCcsIChldmVudDogTWFwRXZlbnQpID0+IHRoaXMubW92ZUVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcmRyYWcnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5wb2ludGVyRHJhZy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcm1vdmUnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5wb2ludGVyTW92ZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25wb3N0cmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5wb3N0UmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVyZW5kZXInLCAoZXZlbnQ6IFJlbmRlckV2ZW50KSA9PiB0aGlzLm9ucHJlcmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NpbmdsZWNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMuc2luZ2xlQ2xpY2suZW1pdChldmVudCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1tYXAsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIHByb3BlcnRpZXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS51cGRhdGVTaXplKCk7XG4gIH1cbn1cbiJdfQ==