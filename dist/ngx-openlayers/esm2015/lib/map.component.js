import { __decorate } from "tslib";
import { Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit, SimpleChanges, OnChanges, } from '@angular/core';
import Map from 'ol/Map';
let MapComponent = class MapComponent {
    constructor(host) {
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
    ngOnInit() {
        // console.log('creating ol.Map instance with:', this);
        this.instance = new Map(this);
        this.instance.setTarget(this.host.nativeElement.firstElementChild);
        this.instance.on('click', (event) => this.olClick.emit(event));
        this.instance.on('dblclick', (event) => this.dblClick.emit(event));
        this.instance.on('movestart', (event) => this.moveStart.emit(event));
        this.instance.on('moveend', (event) => this.moveEnd.emit(event));
        this.instance.on('pointerdrag', (event) => this.pointerDrag.emit(event));
        this.instance.on('pointermove', (event) => this.pointerMove.emit(event));
        this.instance.on('postrender', (event) => this.onpostrender.emit(event));
        this.instance.on('postrender', (event) => this.postRender.emit(event));
        this.instance.on('prerender', (event) => this.onprerender.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.instance.on('singleclick', (event) => this.singleClick.emit(event));
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
        // console.log('changes detected in aol-map, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    ngAfterViewInit() {
        this.instance.updateSize();
    }
};
MapComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
        template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL21hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEdBQUcsTUFBTSxRQUFRLENBQUM7QUFlekIsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQWdEdkIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQTlDN0Isa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHN0IsVUFBSyxHQUFHLE1BQU0sQ0FBQztRQUVmLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFxQ2hCLG1HQUFtRztRQUNuRyxhQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQWtCLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FB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eEI7U0FoR1ksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEFmdGVyVmlld0luaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgTWFwIGZyb20gJ29sL01hcCc7XG5pbXBvcnQgTWFwQnJvd3NlckV2ZW50IGZyb20gJ29sL01hcEJyb3dzZXJFdmVudCc7XG5pbXBvcnQgTWFwRXZlbnQgZnJvbSAnb2wvTWFwRXZlbnQnO1xuaW1wb3J0IE9iamVjdEV2ZW50IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgUmVuZGVyRXZlbnQgZnJvbSAnb2wvcmVuZGVyL0V2ZW50JztcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IEludGVyYWN0aW9uIH0gZnJvbSAnb2wvaW50ZXJhY3Rpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtbWFwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwiaGVpZ2h0XCI+PC9kaXY+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHB1YmxpYyBpbnN0YW5jZTogTWFwO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdtYXAnO1xuXG4gIEBJbnB1dCgpXG4gIHdpZHRoID0gJzEwMCUnO1xuICBASW5wdXQoKVxuICBoZWlnaHQgPSAnMTAwJSc7XG4gIEBJbnB1dCgpXG4gIHBpeGVsUmF0aW86IG51bWJlcjtcbiAgQElucHV0KClcbiAga2V5Ym9hcmRFdmVudFRhcmdldDogRWxlbWVudCB8IHN0cmluZztcbiAgQElucHV0KClcbiAgbG9hZFRpbGVzV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvYWRUaWxlc1doaWxlSW50ZXJhY3Rpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvZ286IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJlbmRlcmVyOiAnY2FudmFzJyB8ICd3ZWJnbCc7XG5cbiAgQE91dHB1dCgpXG4gIG9sQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgZGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgbW92ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgbW92ZUVuZDogRXZlbnRFbWl0dGVyPE1hcEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHBvaW50ZXJEcmFnOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHBvaW50ZXJNb3ZlOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG9ucG9zdHJlbmRlcjogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvbnByZXJlbmRlcjogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgc2luZ2xlQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+O1xuXG4gIC8vIHdlIHBhc3MgZW1wdHkgYXJyYXlzIHRvIG5vdCBnZXQgZGVmYXVsdCBjb250cm9scy9pbnRlcmFjdGlvbnMgYmVjYXVzZSB3ZSBoYXZlIG91ciBvd24gZGlyZWN0aXZlc1xuICBjb250cm9sczogQ29udHJvbFtdID0gW107XG4gIGludGVyYWN0aW9uczogSW50ZXJhY3Rpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogRWxlbWVudFJlZikge1xuICAgIHRoaXMub2xDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMuZGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgICB0aGlzLm1vdmVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XG4gICAgdGhpcy5tb3ZlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBFdmVudD4oKTtcbiAgICB0aGlzLnBvaW50ZXJEcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XG4gICAgdGhpcy5wb2ludGVyTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMub25wb3N0cmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD4oKTtcbiAgICB0aGlzLnBvc3RSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICAgIHRoaXMub25wcmVyZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PigpO1xuICAgIHRoaXMucHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICAgIHRoaXMuc2luZ2xlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5NYXAgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1hcCh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFRhcmdldCh0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5vbENsaWNrLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkYmxjbGljaycsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLmRibENsaWNrLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb3Zlc3RhcnQnLCAoZXZlbnQ6IE1hcEV2ZW50KSA9PiB0aGlzLm1vdmVTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW92ZWVuZCcsIChldmVudDogTWFwRXZlbnQpID0+IHRoaXMubW92ZUVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcmRyYWcnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5wb2ludGVyRHJhZy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcm1vdmUnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5wb2ludGVyTW92ZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25wb3N0cmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5wb3N0UmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVyZW5kZXInLCAoZXZlbnQ6IFJlbmRlckV2ZW50KSA9PiB0aGlzLm9ucHJlcmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwcm9wZXJ0eWNoYW5nZScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMucHJvcGVydHlDaGFuZ2UuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3NpbmdsZWNsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMuc2luZ2xlQ2xpY2suZW1pdChldmVudCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1tYXAsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIHByb3BlcnRpZXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZS51cGRhdGVTaXplKCk7XG4gIH1cbn1cbiJdfQ==