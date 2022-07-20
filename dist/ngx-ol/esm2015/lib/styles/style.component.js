import * as tslib_1 from "tslib";
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
tslib_1.__decorate([
    Input()
], StyleComponent.prototype, "geometry", void 0);
tslib_1.__decorate([
    Input()
], StyleComponent.prototype, "fill", void 0);
tslib_1.__decorate([
    Input()
], StyleComponent.prototype, "image", void 0);
tslib_1.__decorate([
    Input()
], StyleComponent.prototype, "stroke", void 0);
tslib_1.__decorate([
    Input()
], StyleComponent.prototype, "text", void 0);
tslib_1.__decorate([
    Input()
], StyleComponent.prototype, "zIndex", void 0);
StyleComponent = tslib_1.__decorate([
    Component({
        selector: 'aol-style',
        template: ` <ng-content></ng-content> `
    }),
    tslib_1.__param(0, Optional()), tslib_1.__param(1, Optional())
], StyleComponent);
export { StyleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3N0eWxlcy9zdHlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQXVCLEtBQUssRUFBUSxNQUFNLFVBQVUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU92RSxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBa0J6QixZQUF3QixXQUE2QixFQUFjLFNBQStCO1FBZjNGLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBZ0I3QixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxRQUFRO1FBQ04sMkRBQTJEO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0YsQ0FBQTs7WUFsQnNDLGdCQUFnQix1QkFBeEMsUUFBUTtZQUF5RCxvQkFBb0IsdUJBQTFDLFFBQVE7O0FBWmhFO0lBREMsS0FBSyxFQUFFO2dEQUN1QztBQUUvQztJQURDLEtBQUssRUFBRTs0Q0FDRztBQUVYO0lBREMsS0FBSyxFQUFFOzZDQUNLO0FBRWI7SUFEQyxLQUFLLEVBQUU7OENBQ087QUFFZjtJQURDLEtBQUssRUFBRTs0Q0FDRztBQUVYO0lBREMsS0FBSyxFQUFFOzhDQUNPO0FBaEJKLGNBQWM7SUFKMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0lBbUJhLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQWlDLG1CQUFBLFFBQVEsRUFBRSxDQUFBO0dBbEJ2RCxjQUFjLENBb0MxQjtTQXBDWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3B0aW9uYWwsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmlsbCwgSW1hZ2UsIFN0cm9rZSwgU3R5bGUsIFRleHQgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBHZW9tZXRyeSB9IGZyb20gJ29sL2dlb20nO1xuaW1wb3J0IHsgRmVhdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyVmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9tZXRyeUZ1bmN0aW9uIH0gZnJvbSAnb2wvc3R5bGUvU3R5bGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBob3N0OiBGZWF0dXJlQ29tcG9uZW50IHwgTGF5ZXJWZWN0b3JDb21wb25lbnQ7XG4gIHB1YmxpYyBpbnN0YW5jZTogU3R5bGU7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3N0eWxlJztcblxuICBASW5wdXQoKVxuICBnZW9tZXRyeTogc3RyaW5nIHwgR2VvbWV0cnkgfCBHZW9tZXRyeUZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBmaWxsOiBGaWxsO1xuICBASW5wdXQoKVxuICBpbWFnZTogSW1hZ2U7XG4gIEBJbnB1dCgpXG4gIHN0cm9rZTogU3Ryb2tlO1xuICBASW5wdXQoKVxuICB0ZXh0OiBUZXh0O1xuICBASW5wdXQoKVxuICB6SW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBmZWF0dXJlSG9zdDogRmVhdHVyZUNvbXBvbmVudCwgQE9wdGlvbmFsKCkgbGF5ZXJIb3N0OiBMYXllclZlY3RvckNvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUnKTtcbiAgICB0aGlzLmhvc3QgPSAhIWZlYXR1cmVIb3N0ID8gZmVhdHVyZUhvc3QgOiBsYXllckhvc3Q7XG4gICAgaWYgKCF0aGlzLmhvc3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYW9sLXN0eWxlIG11c3QgYmUgYXBwbGllZCB0byBhIGZlYXR1cmUgb3IgYSBsYXllcicpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndXBkYXRpbmcgc3R5bGVcXCdzIGhvc3Q6ICcsIHRoaXMuaG9zdCk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLmNoYW5nZWQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhb2wtc3R5bGUgaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdHlsZSh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U3R5bGUodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==