import { __decorate } from "tslib";
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
        this.instance.on('change:zoom', (event) => this.changeZoom.emit(event));
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
__decorate([
    Input()
], ViewComponent.prototype, "constrainRotation", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "enableRotation", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "extent", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "maxResolution", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "minResolution", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "maxZoom", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "minZoom", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "resolution", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "resolutions", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "rotation", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "zoom", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "zoomFactor", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "center", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "projection", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "constrainOnlyCenter", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "smoothExtentConstraint", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "constrainResolution", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "smoothResolutionConstraint", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "showFullExtent", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "multiWorld", void 0);
__decorate([
    Input()
], ViewComponent.prototype, "zoomAnimation", void 0);
__decorate([
    Output()
], ViewComponent.prototype, "changeZoom", void 0);
__decorate([
    Output()
], ViewComponent.prototype, "changeResolution", void 0);
__decorate([
    Output()
], ViewComponent.prototype, "changeCenter", void 0);
ViewComponent = __decorate([
    Component({
        selector: 'aol-view',
        template: ` <ng-content></ng-content> `
    })
], ViewComponent);
export { ViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQUMzQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTL0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQXVEeEIsWUFBb0IsSUFBa0I7UUFBbEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQXJEL0Isa0JBQWEsR0FBRyxNQUFNLENBQUM7UUE0QzlCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3RCLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUV4RSxxQkFBZ0IsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUU5RSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO0lBRWpDLENBQUM7SUFFMUMsUUFBUTtRQUNOLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJ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bURBQ2lFO0FBckQvRCxhQUFhO0lBSnpCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztHQUNXLGFBQWEsQ0F3R3pCO1NBeEdZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldyc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0RXZlbnQgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtdmlldycsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaW5zdGFuY2U6IFZpZXc7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3ZpZXcnO1xuXG4gIEBJbnB1dCgpXG4gIGNvbnN0cmFpblJvdGF0aW9uOiBib29sZWFuIHwgbnVtYmVyO1xuICBASW5wdXQoKVxuICBlbmFibGVSb3RhdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZXh0ZW50OiBFeHRlbnQ7XG4gIEBJbnB1dCgpXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluUmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtYXhab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICByZXNvbHV0aW9uczogbnVtYmVyW107XG4gIEBJbnB1dCgpXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgem9vbUZhY3RvcjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBjZW50ZXI6IENvb3JkaW5hdGU7XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgY29uc3RyYWluT25seUNlbnRlcjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc21vb3RoRXh0ZW50Q29uc3RyYWludDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY29uc3RyYWluUmVzb2x1dGlvbjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc21vb3RoUmVzb2x1dGlvbkNvbnN0cmFpbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNob3dGdWxsRXh0ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtdWx0aVdvcmxkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHpvb21BbmltYXRpb24gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlWm9vbTogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VSZXNvbHV0aW9uOiBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4oKTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZUNlbnRlcjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0OiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLlZpZXcgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3KHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOnpvb20nLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLmNoYW5nZVpvb20uZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5jaGFuZ2VSZXNvbHV0aW9uLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6Y2VudGVyJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5jaGFuZ2VDZW50ZXIuZW1pdChldmVudCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSAnem9vbSc6XG4gICAgICAgICAgICAvKiogV29yay1hcm91bmQ6IHNldHRpbmcgdGhlIHpvb20gdmlhIHNldFByb3BlcnRpZXMgZG9lcyBub3Qgd29yay4gKi9cbiAgICAgICAgICAgIGlmICh0aGlzLnpvb21BbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5hbmltYXRlKHsgem9vbTogY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Wm9vbShjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Byb2plY3Rpb24nOlxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFZpZXcodGhpcy5pbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAgICAgLyoqIFdvcmstYXJvdW5kOiBzZXR0aW5nIHRoZSBjZW50ZXIgdmlhIHNldFByb3BlcnRpZXMgZG9lcyBub3Qgd29yay4gKi9cbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Q2VudGVyKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC12aWV3LCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC12aWV3Jyk7XG4gIH1cbn1cbiJdfQ==