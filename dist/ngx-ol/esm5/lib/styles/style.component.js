import { __decorate, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Style } from 'ol/style';
import { FeatureComponent } from '../feature.component';
import { LayerVectorComponent } from '../layers/layervector.component';
var StyleComponent = /** @class */ (function () {
    function StyleComponent(featureHost, layerHost) {
        this.componentType = 'style';
        // console.log('creating aol-style');
        this.host = !!featureHost ? featureHost : layerHost;
        if (!this.host) {
            throw new Error('aol-style must be applied to a feature or a layer');
        }
    }
    StyleComponent.prototype.update = function () {
        // console.log('updating style\'s host: ', this.host);
        this.host.instance.changed();
    };
    StyleComponent.prototype.ngOnInit = function () {
        // console.log('creating aol-style instance with: ', this);
        this.instance = new Style(this);
        this.host.instance.setStyle(this.instance);
    };
    StyleComponent.ctorParameters = function () { return [
        { type: FeatureComponent, decorators: [{ type: Optional }] },
        { type: LayerVectorComponent, decorators: [{ type: Optional }] }
    ]; };
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
            template: " <ng-content></ng-content> "
        }),
        __param(0, Optional()), __param(1, Optional())
    ], StyleComponent);
    return StyleComponent;
}());
export { StyleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFjaGltaGEvbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3N0eWxlcy9zdHlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQXVCLEtBQUssRUFBUSxNQUFNLFVBQVUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU92RTtJQWtCRSx3QkFBd0IsV0FBNkIsRUFBYyxTQUErQjtRQWYzRixrQkFBYSxHQUFHLE9BQU8sQ0FBQztRQWdCN0IscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Z0JBakJvQyxnQkFBZ0IsdUJBQXhDLFFBQVE7Z0JBQXlELG9CQUFvQix1QkFBMUMsUUFBUTs7SUFaaEU7UUFEQyxLQUFLLEVBQUU7b0RBQ3VDO0lBRS9DO1FBREMsS0FBSyxFQUFFO2dEQUNHO0lBRVg7UUFEQyxLQUFLLEVBQUU7aURBQ0s7SUFFYjtRQURDLEtBQUssRUFBRTtrREFDTztJQUVmO1FBREMsS0FBSyxFQUFFO2dEQUNHO0lBRVg7UUFEQyxLQUFLLEVBQUU7a0RBQ087SUFoQkosY0FBYztRQUoxQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFtQmEsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFpQyxXQUFBLFFBQVEsRUFBRSxDQUFBO09BbEJ2RCxjQUFjLENBb0MxQjtJQUFELHFCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FwQ1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9wdGlvbmFsLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbGwsIEltYWdlLCBTdHJva2UsIFN0eWxlLCBUZXh0IH0gZnJvbSAnb2wvc3R5bGUnO1xuaW1wb3J0IHsgR2VvbWV0cnkgfSBmcm9tICdvbC9nZW9tJztcbmltcG9ydCB7IEZlYXR1cmVDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllclZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvbWV0cnlGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgaG9zdDogRmVhdHVyZUNvbXBvbmVudCB8IExheWVyVmVjdG9yQ29tcG9uZW50O1xuICBwdWJsaWMgaW5zdGFuY2U6IFN0eWxlO1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdzdHlsZSc7XG5cbiAgQElucHV0KClcbiAgZ2VvbWV0cnk6IHN0cmluZyB8IEdlb21ldHJ5IHwgR2VvbWV0cnlGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgZmlsbDogRmlsbDtcbiAgQElucHV0KClcbiAgaW1hZ2U6IEltYWdlO1xuICBASW5wdXQoKVxuICBzdHJva2U6IFN0cm9rZTtcbiAgQElucHV0KClcbiAgdGV4dDogVGV4dDtcbiAgQElucHV0KClcbiAgekluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZmVhdHVyZUhvc3Q6IEZlYXR1cmVDb21wb25lbnQsIEBPcHRpb25hbCgpIGxheWVySG9zdDogTGF5ZXJWZWN0b3JDb21wb25lbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlJyk7XG4gICAgdGhpcy5ob3N0ID0gISFmZWF0dXJlSG9zdCA/IGZlYXR1cmVIb3N0IDogbGF5ZXJIb3N0O1xuICAgIGlmICghdGhpcy5ob3N0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FvbC1zdHlsZSBtdXN0IGJlIGFwcGxpZWQgdG8gYSBmZWF0dXJlIG9yIGEgbGF5ZXInKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIHN0eWxlXFwncyBob3N0OiAnLCB0aGlzLmhvc3QpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5jaGFuZ2VkKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlIGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3R5bGUodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFN0eWxlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=