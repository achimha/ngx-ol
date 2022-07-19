import { __decorate, __extends, __param } from "tslib";
import { Component, Input, Optional } from '@angular/core';
import { Image } from 'ol/layer';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';
import { LayerGroupComponent } from './layergroup.component';
var LayerImageComponent = /** @class */ (function (_super) {
    __extends(LayerImageComponent, _super);
    function LayerImageComponent(map, group) {
        return _super.call(this, group || map) || this;
    }
    LayerImageComponent.prototype.ngOnInit = function () {
        this.instance = new Image(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerImageComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    LayerImageComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: LayerGroupComponent, decorators: [{ type: Optional }] }
    ]; };
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
            template: " <ng-content></ng-content> "
        }),
        __param(1, Optional())
    ], LayerImageComponent);
    return LayerImageComponent;
}(LayerComponent));
export { LayerImageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXJpbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDakMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU83RDtJQUF5Qyx1Q0FBYztJQWdCckQsNkJBQVksR0FBaUIsRUFBYyxLQUEyQjtlQUNwRSxrQkFBTSxLQUFLLElBQUksR0FBRyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFYZ0IsWUFBWTtnQkFBc0IsbUJBQW1CLHVCQUF0QyxRQUFROztJQVp4QztRQURDLEtBQUssRUFBRTt3REFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTt3REFDUztJQUVqQjtRQURDLEtBQUssRUFBRTt1REFDTztJQUVmO1FBREMsS0FBSyxFQUFFOzhEQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFOzhEQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFO3VEQUNPO0lBZEosbUJBQW1CO1FBSi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBaUJnQyxXQUFBLFFBQVEsRUFBRSxDQUFBO09BaEIvQixtQkFBbUIsQ0E0Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTVCRCxDQUF5QyxjQUFjLEdBNEJ0RDtTQTVCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnb2wvbGF5ZXInO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1sYXllci1pbWFnZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJJbWFnZUNvbXBvbmVudCBleHRlbmRzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgc291cmNlOiBJbWFnZTtcblxuICBASW5wdXQoKVxuICBvcGFjaXR5OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHZpc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGV4dGVudDogRXh0ZW50O1xuICBASW5wdXQoKVxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgekluZGV4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobWFwOiBNYXBDb21wb25lbnQsIEBPcHRpb25hbCgpIGdyb3VwPzogTGF5ZXJHcm91cENvbXBvbmVudCkge1xuICAgIHN1cGVyKGdyb3VwIHx8IG1hcCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEltYWdlKHRoaXMpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==