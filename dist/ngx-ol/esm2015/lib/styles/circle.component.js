import { Component, Input, Host } from '@angular/core';
import { Circle } from 'ol/style';
import { StyleComponent } from './style.component';
export class StyleCircleComponent {
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
}
StyleCircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-circle',
                template: ` <ng-content></ng-content> `
            },] }
];
StyleCircleComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
StyleCircleComponent.propDecorators = {
    fill: [{ type: Input }],
    radius: [{ type: Input }],
    snapToPixel: [{ type: Input }],
    stroke: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoaW1oYS9Qcm9qZWN0cy9uZ3gtb2wvcHJvamVjdHMvbmd4LW9sL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQXlELE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxNQUFNLEVBQWdCLE1BQU0sVUFBVSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1uRCxNQUFNLE9BQU8sb0JBQW9CO0lBYS9CLFlBQTRCLElBQW9CO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBWnpDLGtCQUFhLEdBQUcsY0FBYyxDQUFDO0lBWWEsQ0FBQztJQUVwRDs7OztPQUlHO0lBQ0gsTUFBTTtRQUNKLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkIsNkRBQTZEO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixpRUFBaUU7UUFDakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN0RDtRQUNELDZHQUE2RztJQUMvRyxDQUFDO0lBRUQsV0FBVztRQUNULDRDQUE0QztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7WUFMUSxjQUFjLHVCQW1CUixJQUFJOzs7bUJBVGhCLEtBQUs7cUJBRUwsS0FBSzswQkFFTCxLQUFLO3FCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2lyY2xlLCBGaWxsLCBTdHJva2UgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWNpcmNsZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVDaXJjbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlLWNpcmNsZSc7XG4gIHB1YmxpYyBpbnN0YW5jZTogQ2lyY2xlO1xuXG4gIEBJbnB1dCgpXG4gIGZpbGw6IEZpbGw7XG4gIEBJbnB1dCgpXG4gIHJhZGl1czogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzbmFwVG9QaXhlbDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc3Ryb2tlOiBTdHJva2U7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIGhvc3Q6IFN0eWxlQ29tcG9uZW50KSB7fVxuXG4gIC8qKlxuICAgKiBXT1JLLUFST1VORDogc2luY2UgdGhlIHJlLXJlbmRlcmluZyBpcyBub3QgdHJpZ2dlcmVkIG9uIHN0eWxlIGNoYW5nZVxuICAgKiB3ZSB0cmlnZ2VyIGEgcmFkaXVzIGNoYW5nZS5cbiAgICogc2VlIG9wZW5sYXllcnMgIzYyMzMgYW5kICM1Nzc1XG4gICAqL1xuICB1cGRhdGUoKSB7XG4gICAgaWYgKCEhdGhpcy5pbnN0YW5jZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUuQ2lyY2xlIGluc3RhbmNlXFwncyByYWRpdXMnKTtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0UmFkaXVzKHRoaXMucmFkaXVzKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0LnVwZGF0ZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zdHlsZS5DaXJjbGUgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDaXJjbGUodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEltYWdlKHRoaXMuaW5zdGFuY2UpO1xuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMucmFkaXVzKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFJhZGl1cyhjaGFuZ2VzLnJhZGl1cy5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtY2lyY2xlLCBzZXR0aW5nIG5ldyByYWRpdXM6ICcsIGNoYW5nZXNbJ3JhZGl1cyddLmN1cnJlbnRWYWx1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLXN0eWxlLWNpcmNsZScpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZShudWxsKTtcbiAgfVxufVxuIl19