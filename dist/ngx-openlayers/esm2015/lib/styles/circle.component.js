import { __decorate, __param } from "tslib";
import { Component, Input, Host } from '@angular/core';
import { Circle } from 'ol/style';
import { StyleComponent } from './style.component';
let StyleCircleComponent = class StyleCircleComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'style-circle';
    }
    /**
     * WORK-AROUND: since the re-rendering is not triggered on style change
     * we trigger a radius change.
     * see openlayers #6233 and #5775
     */
    update() {
        if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
        }
        this.host.update();
    }
    ngAfterContentInit() {
        // console.log('creating ol.style.Circle instance with: ', this);
        this.instance = new Circle(this);
        this.host.instance.setImage(this.instance);
        this.host.update();
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.radius) {
            this.instance.setRadius(changes.radius.currentValue);
        }
        // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);
    }
    ngOnDestroy() {
        // console.log('removing aol-style-circle');
        this.host.instance.setImage(null);
    }
};
StyleCircleComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
__decorate([
    Input()
], StyleCircleComponent.prototype, "fill", void 0);
__decorate([
    Input()
], StyleCircleComponent.prototype, "radius", void 0);
__decorate([
    Input()
], StyleCircleComponent.prototype, "snapToPixel", void 0);
__decorate([
    Input()
], StyleCircleComponent.prototype, "stroke", void 0);
__decorate([
    Input()
], StyleCircleComponent.prototype, "atlasManager", void 0);
StyleCircleComponent = __decorate([
    Component({
        selector: 'aol-style-circle',
        template: ` <ng-content></ng-content> `
    }),
    __param(0, Host())
], StyleCircleComponent);
export { StyleCircleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3N0eWxlcy9jaXJjbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBZ0IsTUFBTSxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFlL0IsWUFBNEIsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFkekMsa0JBQWEsR0FBRyxjQUFjLENBQUM7SUFjYSxDQUFDO0lBRXBEOzs7O09BSUc7SUFDSCxNQUFNO1FBQ0osSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQiw2REFBNkQ7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsNkdBQTZHO0lBQy9HLENBQUM7SUFFRCxXQUFXO1FBQ1QsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTs7WUFwQ21DLGNBQWMsdUJBQW5DLElBQUk7O0FBVmpCO0lBREMsS0FBSyxFQUFFO2tEQUNHO0FBRVg7SUFEQyxLQUFLLEVBQUU7b0RBQ087QUFFZjtJQURDLEtBQUssRUFBRTt5REFDYTtBQUVyQjtJQURDLEtBQUssRUFBRTtvREFDTztBQUVmO0lBREMsS0FBSyxFQUFFOzBEQUNtQjtBQWJoQixvQkFBb0I7SUFKaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7SUFnQmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtHQWZSLG9CQUFvQixDQW1EaEM7U0FuRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF0bGFzTWFuYWdlciwgQ2lyY2xlLCBGaWxsLCBTdHJva2UgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWNpcmNsZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlLWNpcmNsZSc7XG4gIHB1YmxpYyBpbnN0YW5jZTogQ2lyY2xlO1xuXG4gIEBJbnB1dCgpXG4gIGZpbGw6IEZpbGw7XG4gIEBJbnB1dCgpXG4gIHJhZGl1czogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc3Ryb2tlOiBTdHJva2U7XG4gIEBJbnB1dCgpXG4gIGF0bGFzTWFuYWdlcjogQXRsYXNNYW5hZ2VyO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBob3N0OiBTdHlsZUNvbXBvbmVudCkge31cblxuICAvKipcbiAgICogV09SSy1BUk9VTkQ6IHNpbmNlIHRoZSByZS1yZW5kZXJpbmcgaXMgbm90IHRyaWdnZXJlZCBvbiBzdHlsZSBjaGFuZ2VcbiAgICogd2UgdHJpZ2dlciBhIHJhZGl1cyBjaGFuZ2UuXG4gICAqIHNlZSBvcGVubGF5ZXJzICM2MjMzIGFuZCAjNTc3NVxuICAgKi9cbiAgdXBkYXRlKCkge1xuICAgIGlmICghIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIG9sLnN0eWxlLkNpcmNsZSBpbnN0YW5jZVxcJ3MgcmFkaXVzJyk7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJhZGl1cyh0aGlzLnJhZGl1cyk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuQ2lyY2xlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQ2lyY2xlKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJhZGl1cykge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSYWRpdXMoY2hhbmdlcy5yYWRpdXMuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWNpcmNsZSwgc2V0dGluZyBuZXcgcmFkaXVzOiAnLCBjaGFuZ2VzWydyYWRpdXMnXS5jdXJyZW50VmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1zdHlsZS1jaXJjbGUnKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UobnVsbCk7XG4gIH1cbn1cbiJdfQ==