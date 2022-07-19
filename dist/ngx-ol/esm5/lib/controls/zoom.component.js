import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlZoomComponent = /** @class */ (function () {
    function ControlZoomComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    ControlZoomComponent.prototype.ngOnInit = function () {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    };
    ControlZoomComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomInLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomOutLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomInTipLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomOutTipLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "delta", void 0);
    ControlZoomComponent = __decorate([
        Component({
            selector: 'aol-control-zoom',
            template: " <ng-content></ng-content> "
        })
    ], ControlZoomComponent);
    return ControlZoomComponent;
}());
export { ControlZoomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvem9vbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQWdCRSw4QkFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNuQyw4Q0FBOEM7SUFDaEQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFad0IsWUFBWTs7SUFackM7UUFEQyxLQUFLLEVBQUU7MERBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7NkRBQ21CO0lBRTNCO1FBREMsS0FBSyxFQUFFOzhEQUNvQjtJQUU1QjtRQURDLEtBQUssRUFBRTtnRUFDZTtJQUV2QjtRQURDLEtBQUssRUFBRTtpRUFDZ0I7SUFFeEI7UUFEQyxLQUFLLEVBQUU7dURBQ007SUFkSCxvQkFBb0I7UUFKaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7T0FDVyxvQkFBb0IsQ0E2QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTdCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWm9vbSB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXpvb20nLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xab29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogWm9vbTtcblxuICBASW5wdXQoKVxuICBkdXJhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICB6b29tSW5MYWJlbDogc3RyaW5nIHwgTm9kZTtcbiAgQElucHV0KClcbiAgem9vbU91dExhYmVsOiBzdHJpbmcgfCBOb2RlO1xuICBASW5wdXQoKVxuICB6b29tSW5UaXBMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB6b29tT3V0VGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGVsdGE6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBab29tKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtem9vbScpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==