import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
var ViewComponent = /** @class */ (function () {
    function ViewComponent(host) {
        this.host = host;
        this.componentType = 'view';
        this.zoomAnimation = false;
        this.changeZoom = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeCenter = new EventEmitter();
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        this.instance.on('change:zoom', function (event) { return _this.changeZoom.emit(event); });
        this.instance.on('change:resolution', function (event) { return _this.changeResolution.emit(event); });
        this.instance.on('change:center', function (event) { return _this.changeCenter.emit(event); });
    };
    ViewComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
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
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-view');
    };
    ViewComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
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
            template: " <ng-content></ng-content> "
        })
    ], ViewComponent);
    return ViewComponent;
}());
export { ViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BILE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQUMzQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFTL0M7SUF1REUsdUJBQW9CLElBQWtCO1FBQWxCLFNBQUksR0FBSixJQUFJLENBQWM7UUFyRC9CLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBNEM5QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUd0QixlQUFVLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFFeEUscUJBQWdCLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFFOUUsaUJBQVksR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUVqQyxDQUFDO0lBRTFDLGdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBa0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxLQUFrQixJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FB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UUFEQyxNQUFNLEVBQUU7dURBQ2lFO0lBckQvRCxhQUFhO1FBSnpCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLGFBQWEsQ0F3R3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXhHRCxJQXdHQztTQXhHWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBWaWV3IGZyb20gJ29sL1ZpZXcnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE9iamVjdEV2ZW50IH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXZpZXcnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHVibGljIGluc3RhbmNlOiBWaWV3O1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICd2aWV3JztcblxuICBASW5wdXQoKVxuICBjb25zdHJhaW5Sb3RhdGlvbjogYm9vbGVhbiB8IG51bWJlcjtcbiAgQElucHV0KClcbiAgZW5hYmxlUm90YXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGV4dGVudDogRXh0ZW50O1xuICBASW5wdXQoKVxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5ab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xuICBASW5wdXQoKVxuICByb3RhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICB6b29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHpvb21GYWN0b3I6IG51bWJlcjtcbiAgQElucHV0KClcbiAgY2VudGVyOiBDb29yZGluYXRlO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbnN0cmFpbk9ubHlDZW50ZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNtb290aEV4dGVudENvbnN0cmFpbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNvbnN0cmFpblJlc29sdXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNtb290aFJlc29sdXRpb25Db25zdHJhaW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzaG93RnVsbEV4dGVudDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbXVsdGlXb3JsZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICB6b29tQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNoYW5nZVpvb206IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlUmVzb2x1dGlvbjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VDZW50ZXI6IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5WaWV3IGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlldyh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Vmlldyh0aGlzLmluc3RhbmNlKTtcblxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTp6b29tJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5jaGFuZ2Vab29tLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMuY2hhbmdlUmVzb2x1dGlvbi5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmNlbnRlcicsIChldmVudDogT2JqZWN0RXZlbnQpID0+IHRoaXMuY2hhbmdlQ2VudGVyLmVtaXQoZXZlbnQpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiB7IFtpbmRleDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ3pvb20nOlxuICAgICAgICAgICAgLyoqIFdvcmstYXJvdW5kOiBzZXR0aW5nIHRoZSB6b29tIHZpYSBzZXRQcm9wZXJ0aWVzIGRvZXMgbm90IHdvcmsuICovXG4gICAgICAgICAgICBpZiAodGhpcy56b29tQW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuYW5pbWF0ZSh7IHpvb206IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldFpvb20oY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwcm9qZWN0aW9uJzpcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlldyh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRWaWV3KHRoaXMuaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgICAgIC8qKiBXb3JrLWFyb3VuZDogc2V0dGluZyB0aGUgY2VudGVyIHZpYSBzZXRQcm9wZXJ0aWVzIGRvZXMgbm90IHdvcmsuICovXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNldENlbnRlcihjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSBjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtdmlldywgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtdmlldycpO1xuICB9XG59XG4iXX0=