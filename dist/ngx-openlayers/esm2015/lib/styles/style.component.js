import { __decorate, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Style } from 'ol/style';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
let StyleComponent = class StyleComponent {
    constructor(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    update() {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    }
    ngOnInit() {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    }
};
StyleComponent.ctorParameters = () => [
    { type: FeatureComponent, decorators: [{ type: Optional }] },
    { type: LayerVectorComponent, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], StyleComponent.prototype, "geometry", void 0);
__decorate([
    Input()
], StyleComponent.prototype, "fill", void 0);
__decorate([
    Input()
], StyleComponent.prototype, "image", void 0);
__decorate([
    Input()
], StyleComponent.prototype, "stroke", void 0);
__decorate([
    Input()
], StyleComponent.prototype, "text", void 0);
__decorate([
    Input()
], StyleComponent.prototype, "zIndex", void 0);
StyleComponent = __decorate([
    Component({
        selector: 'aol-style',
        template: ` <ng-content></ng-content> `
    }),
    __param(0, Optional()), __param(1, Optional())
], StyleComponent);
export { StyleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL3N0eWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBdUIsS0FBSyxFQUFRLE1BQU0sVUFBVSxDQUFDO0FBRTVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBT3ZFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFrQnpCLFlBQXdCLFdBQTZCLEVBQWMsU0FBK0I7UUFmM0Ysa0JBQWEsR0FBRyxPQUFPLENBQUM7UUFnQjdCLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDSixzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFFBQVE7UUFDTiwyREFBMkQ7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRixDQUFBOztZQWxCc0MsZ0JBQWdCLHVCQUF4QyxRQUFRO1lBQXlELG9CQUFvQix1QkFBMUMsUUFBUTs7QUFaaEU7SUFEQyxLQUFLLEVBQUU7Z0RBQ3VDO0FBRS9DO0lBREMsS0FBSyxFQUFFOzRDQUNHO0FBRVg7SUFEQyxLQUFLLEVBQUU7NkNBQ0s7QUFFYjtJQURDLEtBQUssRUFBRTs4Q0FDTztBQUVmO0lBREMsS0FBSyxFQUFFOzRDQUNHO0FBRVg7SUFEQyxLQUFLLEVBQUU7OENBQ087QUFoQkosY0FBYztJQUoxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7SUFtQmEsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFpQyxXQUFBLFFBQVEsRUFBRSxDQUFBO0dBbEJ2RCxjQUFjLENBb0MxQjtTQXBDWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsbCwgSW1hZ2UsIFN0cm9rZSwgU3R5bGUsIFRleHQgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20nO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBob3N0OiBGZWF0dXJlQ29tcG9uZW50IHwgTGF5ZXJWZWN0b3JDb21wb25lbnQ7XG4gIHB1YmxpYyBpbnN0YW5jZTogU3R5bGU7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlJztcblxuICBASW5wdXQoKVxuICBnZW9tZXRyeTogc3RyaW5nIHwgR2VvbWV0cnkgfCBHZW9tZXRyeUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBmaWxsOiBGaWxsO1xuICBASW5wdXQoKVxuICBpbWFnZTogSW1hZ2U7XG4gIEBJbnB1dCgpXG4gIHN0cm9rZTogU3Ryb2tlO1xuICBASW5wdXQoKVxuICB0ZXh0OiBUZXh0O1xuICBASW5wdXQoKVxuICB6SW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmZWF0dXJlSG9zdDogRmVhdHVyZUNvbXBvbmVudCwgQE9wdGlvbmFsKCkgbGF5ZXJIb3N0OiBMYXllclZlY3RvckNvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUnKTtcbiAgICB0aGlzLmhvc3QgPSAhIWZlYXR1cmVIb3N0ID8gZmVhdHVyZUhvc3QgOiBsYXllckhvc3Q7XG4gICAgaWYgKCF0aGlzLmhvc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlIG11c3QgYmUgYXBwbGllZCB0byBhIGZlYXR1cmUgb3IgYSBsYXllcicpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndXBkYXRpbmcgc3R5bGVcXCdzIGhvc3Q6ICcsIHRoaXMuaG9zdCk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLmNoYW5nZWQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdHlsZSh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U3R5bGUodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==