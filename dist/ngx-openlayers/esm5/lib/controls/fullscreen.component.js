import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FullScreen } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlFullScreenComponent = /** @class */ (function () {
    function ControlFullScreenComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-fullscreen');
    }
    ControlFullScreenComponent.prototype.ngOnInit = function () {
        this.instance = new FullScreen(this);
        this.map.instance.addControl(this.instance);
    };
    ControlFullScreenComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-fullscreen');
        this.map.instance.removeControl(this.instance);
    };
    ControlFullScreenComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "className", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "labelActive", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "tipLabel", void 0);
    __decorate([
        Input()
    ], ControlFullScreenComponent.prototype, "keys", void 0);
    ControlFullScreenComponent = __decorate([
        Component({
            selector: 'aol-control-fullscreen',
            template: " <ng-content></ng-content> "
        })
    ], ControlFullScreenComponent);
    return ControlFullScreenComponent;
}());
export { ControlFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9mdWxsc2NyZWVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhEO0lBY0Usb0NBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDbkMsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCw2Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0Usa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBWndCLFlBQVk7O0lBVnJDO1FBREMsS0FBSyxFQUFFO2lFQUNVO0lBRWxCO1FBREMsS0FBSyxFQUFFOzZEQUNNO0lBRWQ7UUFEQyxLQUFLLEVBQUU7bUVBQ1k7SUFFcEI7UUFEQyxLQUFLLEVBQUU7Z0VBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7NERBQ007SUFaSCwwQkFBMEI7UUFKdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7T0FDVywwQkFBMEIsQ0EyQnRDO0lBQUQsaUNBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTNCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWZ1bGxzY3JlZW4nLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xGdWxsU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogRnVsbFNjcmVlbjtcblxuICBASW5wdXQoKVxuICBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGFiZWxBY3RpdmU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGlwTGFiZWw6IHN0cmluZztcbiAgQElucHV0KClcbiAga2V5czogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2luc3RhbmNpbmcgYW9sLWNvbnRyb2wtZnVsbHNjcmVlbicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBGdWxsU2NyZWVuKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtZnVsbHNjcmVlbicpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==