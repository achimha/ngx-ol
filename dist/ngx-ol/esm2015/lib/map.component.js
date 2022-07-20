import * as tslib_1 from "tslib";
import { Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit, SimpleChanges, OnChanges, } from '@angular/core';
import { Map } from 'ol';
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
        // TODO this.instance.on('prerender', (event: RenderEvent) => this.onprerender.emit(event));
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
        template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osYUFBYSxFQUNiLGFBQWEsRUFDYixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLElBQUksQ0FBQztBQWV6QixJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBZ0R2QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBOUM3QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUc3QixVQUFLLEdBQUcsTUFBTSxDQUFDO1FBRWYsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQXFDaEIsbUdBQW1HO1FBQ25HLGFBQVEsR0FBYyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBRy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQStCLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQUNoRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQStCLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQUNuRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQy9DLElBQUksQ0FBQyxX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O1FBQ0Qsb0ZBQW9GO1FBQ3BGLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7O1lBaEQyQixVQUFVOztBQTNDcEM7SUFEQyxLQUFLLEVBQUU7MkNBQ087QUFFZjtJQURDLEtBQUssRUFBRTs0Q0FDUTtBQUVoQjtJQURDLEtBQUssRUFBRTtnREFDVztBQUVuQjtJQURDLEtBQUssRUFBRTt5REFDa0M7QUFFMUM7SUFEQyxLQUFLLEVBQUU7NkRBQ3lCO0FBRWpDO0lBREMsS0FBSyxFQUFFOytEQUMyQjtBQUVuQztJQURDLEtBQUssRUFBRTswQ0FDZTtBQUV2QjtJQURDLEtBQUssRUFBRTs4Q0FDcUI7QUFHN0I7SUFEQyxNQUFNLEVBQUU7NkNBQzBDO0FBRW5EO0lBREMsTUFBTSxFQUFFOzhDQUMyQztBQUVwRDtJQURDLE1BQU0sRUFBRTsrQ0FDeUI7QUFFbEM7SUFEQyxNQUFNLEVBQUU7NkNBQ3VCO0FBRWhDO0lBREMsTUFBTSxFQUFFO2lEQUM4QztBQUV2RDtJQURDLE1BQU0sRUFBRTtpREFDOEM7QUFFdkQ7SUFEQyxNQUFNLEVBQUU7a0RBQytCO0FBRXhDO0lBREMsTUFBTSxFQUFFO2dEQUMwQjtBQUVuQztJQURDLE1BQU0sRUFBRTtpREFDOEI7QUFFdkM7SUFEQyxNQUFNLEVBQUU7b0RBQ2lDO0FBRTFDO0lBREMsTUFBTSxFQUFFO2lEQUM4QztBQTFDNUMsWUFBWTtJQVB4QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUU7OztHQUdUO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FnR3hCO1NBaEdZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlclZpZXdJbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwIH0gZnJvbSAnb2wnO1xuaW1wb3J0IE1hcEJyb3dzZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xuaW1wb3J0IE1hcEV2ZW50IGZyb20gJ29sL01hcEV2ZW50JztcbmltcG9ydCB7IE9iamVjdEV2ZW50IH0gZnJvbSAnb2wvT2JqZWN0JztcbmltcG9ydCBSZW5kZXJFdmVudCBmcm9tICdvbC9yZW5kZXIvRXZlbnQnO1xuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgSW50ZXJhY3Rpb24gfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1tYXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW3N0eWxlLndpZHRoXT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodF09XCJoZWlnaHRcIj48L2Rpdj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHVibGljIGluc3RhbmNlOiBNYXA7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ21hcCc7XG5cbiAgQElucHV0KClcbiAgd2lkdGggPSAnMTAwJSc7XG4gIEBJbnB1dCgpXG4gIGhlaWdodCA9ICcxMDAlJztcbiAgQElucHV0KClcbiAgcGl4ZWxSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICBrZXlib2FyZEV2ZW50VGFyZ2V0OiBIVE1MRWxlbWVudCB8IHN0cmluZztcbiAgQElucHV0KClcbiAgbG9hZFRpbGVzV2hpbGVBbmltYXRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvYWRUaWxlc1doaWxlSW50ZXJhY3Rpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvZ286IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJlbmRlcmVyOiAnY2FudmFzJyB8ICd3ZWJnbCc7XG5cbiAgQE91dHB1dCgpXG4gIG9sQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+O1xuICBAT3V0cHV0KClcbiAgZGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+O1xuICBAT3V0cHV0KClcbiAgbW92ZVN0YXJ0OiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgbW92ZUVuZDogRXZlbnRFbWl0dGVyPE1hcEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHBvaW50ZXJEcmFnOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PjtcbiAgQE91dHB1dCgpXG4gIHBvaW50ZXJNb3ZlOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PjtcbiAgQE91dHB1dCgpXG4gIG9ucG9zdHJlbmRlcjogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHBvc3RSZW5kZXI6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvbnByZXJlbmRlcjogRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHByb3BlcnR5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgc2luZ2xlQ2xpY2s6IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+O1xuXG4gIC8vIHdlIHBhc3MgZW1wdHkgYXJyYXlzIHRvIG5vdCBnZXQgZGVmYXVsdCBjb250cm9scy9pbnRlcmFjdGlvbnMgYmVjYXVzZSB3ZSBoYXZlIG91ciBvd24gZGlyZWN0aXZlc1xuICBjb250cm9sczogQ29udHJvbFtdID0gW107XG4gIGludGVyYWN0aW9uczogSW50ZXJhY3Rpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogRWxlbWVudFJlZikge1xuICAgIHRoaXMub2xDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PigpO1xuICAgIHRoaXMuZGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50Pj4oKTtcbiAgICB0aGlzLm1vdmVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XG4gICAgdGhpcy5tb3ZlRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBFdmVudD4oKTtcbiAgICB0aGlzLnBvaW50ZXJEcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ8TW91c2VFdmVudD4+KCk7XG4gICAgdGhpcy5wb2ludGVyTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+PigpO1xuICAgIHRoaXMub25wb3N0cmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD4oKTtcbiAgICB0aGlzLnBvc3RSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICAgIHRoaXMub25wcmVyZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFJlbmRlckV2ZW50PigpO1xuICAgIHRoaXMucHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICAgIHRoaXMuc2luZ2xlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50Pj4oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5NYXAgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1hcCh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFRhcmdldCh0aGlzLmhvc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50PikgPT4gdGhpcy5vbENsaWNrLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdkYmxjbGljaycsIChldmVudDogTWFwQnJvd3NlckV2ZW50PE1vdXNlRXZlbnQ+KSA9PiB0aGlzLmRibENsaWNrLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdtb3Zlc3RhcnQnLCAoZXZlbnQ6IE1hcEV2ZW50KSA9PiB0aGlzLm1vdmVTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW92ZWVuZCcsIChldmVudDogTWFwRXZlbnQpID0+IHRoaXMubW92ZUVuZC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcmRyYWcnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50PikgPT4gdGhpcy5wb2ludGVyRHJhZy5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9pbnRlcm1vdmUnLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50PikgPT4gdGhpcy5wb2ludGVyTW92ZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25wb3N0cmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5wb3N0UmVuZGVyLmVtaXQoZXZlbnQpKTtcbiAgICAvLyBUT0RPIHRoaXMuaW5zdGFuY2Uub24oJ3ByZXJlbmRlcicsIChldmVudDogUmVuZGVyRXZlbnQpID0+IHRoaXMub25wcmVyZW5kZXIuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignc2luZ2xlY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudDxNb3VzZUV2ZW50PikgPT4gdGhpcy5zaW5nbGVDbGljay5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLW1hcCwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZVNpemUoKTtcbiAgfVxufVxuIl19