import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
let ViewComponent = class ViewComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'view';
        this.zoomAnimation = false;
        this.changeZoom = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeCenter = new EventEmitter();
    }
    ngOnInit() {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        // TODO this.instance.on('change:zoom', (event: ObjectEvent) => this.changeZoom.emit(event));
        this.instance.on('change:resolution', (event) => this.changeResolution.emit(event));
        this.instance.on('change:center', (event) => this.changeCenter.emit(event));
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'zoom':
                        /** Work-around: setting the zoom via setProperties does not work. */
                        if (this.zoomAnimation) {
                            this.instance.animate({ zoom: changes[key].currentValue });
                        }
                        else {
                            this.instance.setZoom(changes[key].currentValue);
                        }
                        break;
                    case 'projection':
                        this.instance = new View(this);
                        this.host.instance.setView(this.instance);
                        break;
                    case 'center':
                        /** Work-around: setting the center via setProperties does not work. */
                        this.instance.setCenter(changes[key].currentValue);
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    ngOnDestroy() {
        // console.log('removing aol-view');
    }
};
ViewComponent.ctorParameters = () => [
    { type: MapComponent }
];
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "constrainRotation", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "enableRotation", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "extent", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "maxResolution", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "minResolution", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "maxZoom", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "minZoom", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "resolution", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "resolutions", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "rotation", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "zoom", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "zoomFactor", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "center", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "projection", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "constrainOnlyCenter", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "smoothExtentConstraint", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "constrainResolution", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "smoothResolutionConstraint", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "showFullExtent", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "multiWorld", void 0);
tslib_1.__decorate([
    Input()
], ViewComponent.prototype, "zoomAnimation", void 0);
tslib_1.__decorate([
    Output()
], ViewComponent.prototype, "changeZoom", void 0);
tslib_1.__decorate([
    Output()
], ViewComponent.prototype, "changeResolution", void 0);
tslib_1.__decorate([
    Output()
], ViewComponent.prototype, "changeCenter", void 0);
ViewComponent = tslib_1.__decorate([
    Component({
        selector: 'aol-view',
        template: ` <ng-content></ng-content> `
    })
], ViewComponent);
export { ViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQUMzQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTL0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXVEeEIsWUFBb0IsSUFBa0I7UUFBbEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQXJEL0Isa0JBQWEsR0FBRyxNQUFNLENBQUM7UUE0QzlCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3RCLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUV4RSxxQkFBZ0IsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUU5RSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO0lBRWpDLENBQUM7SUFFMUMsUUFBUTtRQUNOLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUMsNkZBQTZGO1FBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FB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R1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgVmlldyBmcm9tICdvbC9WaWV3JztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPYmplY3RFdmVudCB9IGZyb20gJ29sL09iamVjdCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtdmlldycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaW5zdGFuY2U6IFZpZXc7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3ZpZXcnO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnN0cmFpblJvdGF0aW9uOiBib29sZWFuIHwgbnVtYmVyO1xuICBASW5wdXQoKVxuICBlbmFibGVSb3RhdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZXh0ZW50OiBFeHRlbnQ7XG4gIEBJbnB1dCgpXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXhab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXNvbHV0aW9uczogbnVtYmVyW107XG4gIEBJbnB1dCgpXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgem9vbUZhY3RvcjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBjZW50ZXI6IENvb3JkaW5hdGU7XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgY29uc3RyYWluT25seUNlbnRlcjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc21vb3RoRXh0ZW50Q29uc3RyYWludDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY29uc3RyYWluUmVzb2x1dGlvbjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc21vb3RoUmVzb2x1dGlvbkNvbnN0cmFpbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNob3dGdWxsRXh0ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtdWx0aVdvcmxkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHpvb21BbmltYXRpb24gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlWm9vbTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VSZXNvbHV0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZUNlbnRlcjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLlZpZXcgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3KHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xuXG4gICAgLy8gVE9ETyB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6em9vbScsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMuY2hhbmdlWm9vbS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOnJlc29sdXRpb24nLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLmNoYW5nZVJlc29sdXRpb24uZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpjZW50ZXInLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLmNoYW5nZUNlbnRlci5lbWl0KGV2ZW50KSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICBjYXNlICd6b29tJzpcbiAgICAgICAgICAgIC8qKiBXb3JrLWFyb3VuZDogc2V0dGluZyB0aGUgem9vbSB2aWEgc2V0UHJvcGVydGllcyBkb2VzIG5vdCB3b3JrLiAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuem9vbUFuaW1hdGlvbikge1xuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmFuaW1hdGUoeyB6b29tOiBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRab29tKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncHJvamVjdGlvbic6XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpZXcodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Vmlldyh0aGlzLmluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgICAgICAvKiogV29yay1hcm91bmQ6IHNldHRpbmcgdGhlIGNlbnRlciB2aWEgc2V0UHJvcGVydGllcyBkb2VzIG5vdCB3b3JrLiAqL1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zZXRDZW50ZXIoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXZpZXcsIHNldHRpbmcgbmV3IHByb3BlcnRpZXM6ICcsIHByb3BlcnRpZXMpO1xuICAgIHRoaXMuaW5zdGFuY2Uuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBmYWxzZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLXZpZXcnKTtcbiAgfVxufVxuIl19