import * as tslib_1 from "tslib";
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
tslib_1.__decorate([
    Input()
], StyleCircleComponent.prototype, "fill", void 0);
tslib_1.__decorate([
    Input()
], StyleCircleComponent.prototype, "radius", void 0);
tslib_1.__decorate([
    Input()
], StyleCircleComponent.prototype, "snapToPixel", void 0);
tslib_1.__decorate([
    Input()
], StyleCircleComponent.prototype, "stroke", void 0);
StyleCircleComponent = tslib_1.__decorate([
    Component({
        selector: 'aol-style-circle',
        template: ` <ng-content></ng-content> `
    }),
    tslib_1.__param(0, Host())
], StyleCircleComponent);
export { StyleCircleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUF5RCxNQUFNLGVBQWUsQ0FBQztBQUM5RyxPQUFPLEVBQUUsTUFBTSxFQUFnQixNQUFNLFVBQVUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFhL0IsWUFBNEIsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFaekMsa0JBQWEsR0FBRyxjQUFjLENBQUM7SUFZYSxDQUFDO0lBRXBEOzs7O09BSUc7SUFDSCxNQUFNO1FBQ0osSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuQiw2REFBNkQ7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsNkdBQTZHO0lBQy9HLENBQUM7SUFFRCxXQUFXO1FBQ1QsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTs7WUFwQ21DLGNBQWMsdUJBQW5DLElBQUk7O0FBUmpCO0lBREMsS0FBSyxFQUFFO2tEQUNHO0FBRVg7SUFEQyxLQUFLLEVBQUU7b0RBQ087QUFFZjtJQURDLEtBQUssRUFBRTt5REFDYTtBQUVyQjtJQURDLEtBQUssRUFBRTtvREFDTztBQVhKLG9CQUFvQjtJQUpoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztJQWNhLG1CQUFBLElBQUksRUFBRSxDQUFBO0dBYlIsb0JBQW9CLENBaURoQztTQWpEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2lyY2xlLCBGaWxsLCBTdHJva2UgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWNpcmNsZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlLWNpcmNsZSc7XG4gIHB1YmxpYyBpbnN0YW5jZTogQ2lyY2xlO1xuXG4gIEBJbnB1dCgpXG4gIGZpbGw6IEZpbGw7XG4gIEBJbnB1dCgpXG4gIHJhZGl1czogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc3Ryb2tlOiBTdHJva2U7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIGhvc3Q6IFN0eWxlQ29tcG9uZW50KSB7fVxuXG4gIC8qKlxuICAgKiBXT1JLLUFST1VORDogc2luY2UgdGhlIHJlLXJlbmRlcmluZyBpcyBub3QgdHJpZ2dlcmVkIG9uIHN0eWxlIGNoYW5nZVxuICAgKiB3ZSB0cmlnZ2VyIGEgcmFkaXVzIGNoYW5nZS5cbiAgICogc2VlIG9wZW5sYXllcnMgIzYyMzMgYW5kICM1Nzc1XG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgaWYgKCEhdGhpcy5pbnN0YW5jZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUuQ2lyY2xlIGluc3RhbmNlXFwncyByYWRpdXMnKTtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKHRoaXMucmFkaXVzKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5DaXJjbGUgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDaXJjbGUodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucmFkaXVzKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJhZGl1cyhjaGFuZ2VzLnJhZGl1cy5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtY2lyY2xlLCBzZXR0aW5nIG5ldyByYWRpdXM6ICcsIGNoYW5nZXNbJ3JhZGl1cyddLmN1cnJlbnRWYWx1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLXN0eWxlLWNpcmNsZScpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZShudWxsKTtcbiAgfVxufVxuIl19