import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ZoomSlider } from 'ol/control';
import { MapComponent } from '../map.component';
let ControlZoomSliderComponent = class ControlZoomSliderComponent {
    constructor(map) {
        this.map = map;
        // console.log('instancing aol-control-zoomslider');
    }
    ngOnInit() {
        this.instance = new ZoomSlider(this);
        this.map.instance.addControl(this.instance);
    }
    ngOnDestroy() {
        // console.log('removing aol-control-zoomslider');
        this.map.instance.removeControl(this.instance);
    }
};
ControlZoomSliderComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], ControlZoomSliderComponent.prototype, "className", void 0);
__decorate([
    Input()
], ControlZoomSliderComponent.prototype, "duration", void 0);
__decorate([
    Input()
], ControlZoomSliderComponent.prototype, "maxResolution", void 0);
__decorate([
    Input()
], ControlZoomSliderComponent.prototype, "minResolution", void 0);
ControlZoomSliderComponent = __decorate([
    Component({
        selector: 'aol-control-zoomslider',
        template: ` <ng-content></ng-content> `
    })
], ControlZoomSliderComponent);
export { ControlZoomSliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy96b29tc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBWXJDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDbkMsb0RBQW9EO0lBQ3RELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxXQUFXO1FBQ1Qsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztDQUNGLENBQUE7O1lBYjBCLFlBQVk7O0FBUnJDO0lBREMsS0FBSyxFQUFFOzZEQUNVO0FBRWxCO0lBREMsS0FBSyxFQUFFOzREQUNTO0FBRWpCO0lBREMsS0FBSyxFQUFFO2lFQUNjO0FBRXRCO0lBREMsS0FBSyxFQUFFO2lFQUNjO0FBVlgsMEJBQTBCO0lBSnRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3QkFBd0I7UUFDbEMsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0dBQ1csMEJBQTBCLENBeUJ0QztTQXpCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgWm9vbVNsaWRlciB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLXpvb21zbGlkZXInLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xab29tU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogWm9vbVNsaWRlcjtcblxuICBASW5wdXQoKVxuICBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXpvb21zbGlkZXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgWm9vbVNsaWRlcih0aGlzKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLXpvb21zbGlkZXInKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=