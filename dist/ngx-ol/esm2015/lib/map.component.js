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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osYUFBYSxFQUNiLGFBQWEsRUFDYixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxHQUFHLE1BQU0sUUFBUSxDQUFDO0FBZXpCLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFnRHZCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUE5QzdCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRzdCLFVBQUssR0FBRyxNQUFNLENBQUM7UUFFZixXQUFNLEdBQUcsTUFBTSxDQUFDO1FBcUNoQixtR0FBbUc7UUFDbkcsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFHL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJ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LFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBBZnRlclZpZXdJbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IE1hcCBmcm9tICdvbC9NYXAnO1xuaW1wb3J0IE1hcEJyb3dzZXJFdmVudCBmcm9tICdvbC9NYXBCcm93c2VyRXZlbnQnO1xuaW1wb3J0IE1hcEV2ZW50IGZyb20gJ29sL01hcEV2ZW50JztcbmltcG9ydCBPYmplY3RFdmVudCBmcm9tICdvbC9PYmplY3QnO1xuaW1wb3J0IFJlbmRlckV2ZW50IGZyb20gJ29sL3JlbmRlci9FdmVudCc7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbiB9IGZyb20gJ29sL2ludGVyYWN0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLW1hcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbc3R5bGUud2lkdGhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0XT1cImhlaWdodFwiPjwvZGl2PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgaW5zdGFuY2U6IE1hcDtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnbWFwJztcblxuICBASW5wdXQoKVxuICB3aWR0aCA9ICcxMDAlJztcbiAgQElucHV0KClcbiAgaGVpZ2h0ID0gJzEwMCUnO1xuICBASW5wdXQoKVxuICBwaXhlbFJhdGlvOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIGtleWJvYXJkRXZlbnRUYXJnZXQ6IEVsZW1lbnQgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxvYWRUaWxlc1doaWxlQW5pbWF0aW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsb2FkVGlsZXNXaGlsZUludGVyYWN0aW5nOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsb2dvOiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoKVxuICByZW5kZXJlcjogJ2NhbnZhcycgfCAnd2ViZ2wnO1xuXG4gIEBPdXRwdXQoKVxuICBvbENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIGRibENsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG1vdmVTdGFydDogRXZlbnRFbWl0dGVyPE1hcEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIG1vdmVFbmQ6IEV2ZW50RW1pdHRlcjxNYXBFdmVudD47XG4gIEBPdXRwdXQoKVxuICBwb2ludGVyRHJhZzogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBwb2ludGVyTW92ZTogRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBvbnBvc3RyZW5kZXI6IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBwb3N0UmVuZGVyOiBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+O1xuICBAT3V0cHV0KClcbiAgb25wcmVyZW5kZXI6IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD47XG4gIEBPdXRwdXQoKVxuICBwcm9wZXJ0eUNoYW5nZTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PjtcbiAgQE91dHB1dCgpXG4gIHNpbmdsZUNsaWNrOiBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PjtcblxuICAvLyB3ZSBwYXNzIGVtcHR5IGFycmF5cyB0byBub3QgZ2V0IGRlZmF1bHQgY29udHJvbHMvaW50ZXJhY3Rpb25zIGJlY2F1c2Ugd2UgaGF2ZSBvdXIgb3duIGRpcmVjdGl2ZXNcbiAgY29udHJvbHM6IENvbnRyb2xbXSA9IFtdO1xuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvc3Q6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLm9sQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgICB0aGlzLmRibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XG4gICAgdGhpcy5tb3ZlU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEV2ZW50PigpO1xuICAgIHRoaXMubW92ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwRXZlbnQ+KCk7XG4gICAgdGhpcy5wb2ludGVyRHJhZyA9IG5ldyBFdmVudEVtaXR0ZXI8TWFwQnJvd3NlckV2ZW50PigpO1xuICAgIHRoaXMucG9pbnRlck1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcEJyb3dzZXJFdmVudD4oKTtcbiAgICB0aGlzLm9ucG9zdHJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UmVuZGVyRXZlbnQ+KCk7XG4gICAgdGhpcy5wb3N0UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBFdmVudD4oKTtcbiAgICB0aGlzLm9ucHJlcmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxSZW5kZXJFdmVudD4oKTtcbiAgICB0aGlzLnByb3BlcnR5Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgICB0aGlzLnNpbmdsZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNYXBCcm93c2VyRXZlbnQ+KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuTWFwIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNYXAodGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRUYXJnZXQodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NsaWNrJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMub2xDbGljay5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignZGJsY2xpY2snLCAoZXZlbnQ6IE1hcEJyb3dzZXJFdmVudCkgPT4gdGhpcy5kYmxDbGljay5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW92ZXN0YXJ0JywgKGV2ZW50OiBNYXBFdmVudCkgPT4gdGhpcy5tb3ZlU3RhcnQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vdmVlbmQnLCAoZXZlbnQ6IE1hcEV2ZW50KSA9PiB0aGlzLm1vdmVFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3BvaW50ZXJkcmFnJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMucG9pbnRlckRyYWcuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3BvaW50ZXJtb3ZlJywgKGV2ZW50OiBNYXBCcm93c2VyRXZlbnQpID0+IHRoaXMucG9pbnRlck1vdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bvc3RyZW5kZXInLCAoZXZlbnQ6IFJlbmRlckV2ZW50KSA9PiB0aGlzLm9ucG9zdHJlbmRlci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIChldmVudDogTWFwRXZlbnQpID0+IHRoaXMucG9zdFJlbmRlci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJlcmVuZGVyJywgKGV2ZW50OiBSZW5kZXJFdmVudCkgPT4gdGhpcy5vbnByZXJlbmRlci5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbigncHJvcGVydHljaGFuZ2UnLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLnByb3BlcnR5Q2hhbmdlLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdzaW5nbGVjbGljaycsIChldmVudDogTWFwQnJvd3NlckV2ZW50KSA9PiB0aGlzLnNpbmdsZUNsaWNrLmVtaXQoZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtbWFwLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UudXBkYXRlU2l6ZSgpO1xuICB9XG59XG4iXX0=