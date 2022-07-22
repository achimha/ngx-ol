import { Component, Input, Optional } from '@angular/core';
import { Style } from 'ol/style';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
export class StyleComponent {
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
}
StyleComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style',
                template: ` <ng-content></ng-content> `
            },] }
];
StyleComponent.ctorParameters = () => [
    { type: FeatureComponent, decorators: [{ type: Optional }] },
    { type: LayerVectorComponent, decorators: [{ type: Optional }] }
];
StyleComponent.propDecorators = {
    geometry: [{ type: Input }],
    fill: [{ type: Input }],
    image: [{ type: Input }],
    stroke: [{ type: Input }],
    text: [{ type: Input }],
    zIndex: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hpbWhhL1Byb2plY3RzL25neC1vbC9wcm9qZWN0cy9uZ3gtb2wvc3JjLyIsInNvdXJjZXMiOlsibGliL3N0eWxlcy9zdHlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBdUIsS0FBSyxFQUFRLE1BQU0sVUFBVSxDQUFDO0FBRTVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBT3ZFLE1BQU0sT0FBTyxjQUFjO0lBa0J6QixZQUF3QixXQUE2QixFQUFjLFNBQStCO1FBZjNGLGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBZ0I3QixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxRQUFRO1FBQ04sMkRBQTJEO1FBQzNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDOzs7WUFQUSxnQkFBZ0IsdUJBMEJWLFFBQVE7WUF6QmQsb0JBQW9CLHVCQXlCNkIsUUFBUTs7O3VCQWIvRCxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSztxQkFFTCxLQUFLO21CQUVMLEtBQUs7cUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbGwsIEltYWdlLCBTdHJva2UsIFN0eWxlLCBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgaG9zdDogRmVhdHVyZUNvbXBvbmVudCB8IExheWVyVmVjdG9yQ29tcG9uZW50O1xuICBwdWJsaWMgaW5zdGFuY2U6IFN0eWxlO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZSc7XG5cbiAgQElucHV0KClcbiAgZ2VvbWV0cnk6IHN0cmluZyB8IEdlb21ldHJ5IHwgR2VvbWV0cnlGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgZmlsbDogRmlsbDtcbiAgQElucHV0KClcbiAgaW1hZ2U6IEltYWdlO1xuICBASW5wdXQoKVxuICBzdHJva2U6IFN0cm9rZTtcbiAgQElucHV0KClcbiAgdGV4dDogVGV4dDtcbiAgQElucHV0KClcbiAgekluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZmVhdHVyZUhvc3Q6IEZlYXR1cmVDb21wb25lbnQsIEBPcHRpb25hbCgpIGxheWVySG9zdDogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlJyk7XG4gICAgdGhpcy5ob3N0ID0gISFmZWF0dXJlSG9zdCA/IGZlYXR1cmVIb3N0IDogbGF5ZXJIb3N0O1xuICAgIGlmICghdGhpcy5ob3N0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZSBtdXN0IGJlIGFwcGxpZWQgdG8gYSBmZWF0dXJlIG9yIGEgbGF5ZXInKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIHN0eWxlXFwncyBob3N0OiAnLCB0aGlzLmhvc3QpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5jaGFuZ2VkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3R5bGUodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFN0eWxlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=