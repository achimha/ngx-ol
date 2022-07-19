import { __decorate, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Image } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
let LayerImageComponent = class LayerImageComponent extends LayerComponent {
    constructor(map, group) {
        super(group || map);
    }
    ngOnInit() {
        this.instance = new Image(this);
        super.ngOnInit();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
};
LayerImageComponent.ctorParameters = () => [
    { type: MapComponent },
    { type: LayerGroupComponent, decorators: [{ type: Optional }] }
];
__decorate([
    Input()
], LayerImageComponent.prototype, "opacity", void 0);
__decorate([
    Input()
], LayerImageComponent.prototype, "visible", void 0);
__decorate([
    Input()
], LayerImageComponent.prototype, "extent", void 0);
__decorate([
    Input()
], LayerImageComponent.prototype, "minResolution", void 0);
__decorate([
    Input()
], LayerImageComponent.prototype, "maxResolution", void 0);
__decorate([
    Input()
], LayerImageComponent.prototype, "zIndex", void 0);
LayerImageComponent = __decorate([
    Component({
        selector: 'aol-layer-image',
        template: ` <ng-content></ng-content> `
    }),
    __param(1, Optional())
], LayerImageComponent);
export { LayerImageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJpbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU83RCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGNBQWM7SUFnQnJELFlBQVksR0FBaUIsRUFBYyxLQUEyQjtRQUNwRSxLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBOztZQVprQixZQUFZO1lBQXNCLG1CQUFtQix1QkFBdEMsUUFBUTs7QUFaeEM7SUFEQyxLQUFLLEVBQUU7b0RBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7b0RBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7bURBQ087QUFFZjtJQURDLEtBQUssRUFBRTswREFDYztBQUV0QjtJQURDLEtBQUssRUFBRTswREFDYztBQUV0QjtJQURDLEtBQUssRUFBRTttREFDTztBQWRKLG1CQUFtQjtJQUovQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztJQWlCZ0MsV0FBQSxRQUFRLEVBQUUsQ0FBQTtHQWhCL0IsbUJBQW1CLENBNEIvQjtTQTVCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1sYXllci1pbWFnZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJJbWFnZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgc291cmNlOiBJbWFnZTtcblxuICBASW5wdXQoKVxuICBvcGFjaXR5OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHZpc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGV4dGVudDogRXh0ZW50O1xuICBASW5wdXQoKVxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgekluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlKHRoaXMpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==