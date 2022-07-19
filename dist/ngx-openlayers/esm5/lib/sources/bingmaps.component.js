import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef } from '@angular/core';
import { BingMaps } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerTileComponent } from '../layers/layertile.component';
var SourceBingmapsComponent = /** @class */ (function (_super) {
    __extends(SourceBingmapsComponent, _super);
    function SourceBingmapsComponent(layer) {
        var _this = _super.call(this, layer) || this;
        _this.imagerySet = 'Aerial';
        return _this;
    }
    SourceBingmapsComponent_1 = SourceBingmapsComponent;
    SourceBingmapsComponent.prototype.ngOnInit = function () {
        this.instance = new BingMaps(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceBingmapsComponent_1;
    SourceBingmapsComponent.ctorParameters = function () { return [
        { type: LayerTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "hidpi", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "culture", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "key", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "imagerySet", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "reprojectionErrorThreshold", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "tileLoadFunction", void 0);
    __decorate([
        Input()
    ], SourceBingmapsComponent.prototype, "wrapX", void 0);
    SourceBingmapsComponent = SourceBingmapsComponent_1 = __decorate([
        Component({
            selector: 'aol-source-bingmaps',
            template: " <div class=\"aol-source-bingmaps\"></div> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceBingmapsComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceBingmapsComponent);
    return SourceBingmapsComponent;
}(SourceComponent));
export { SourceBingmapsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZ21hcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy9iaW5nbWFwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFRbkU7SUFBNkMsMkNBQWU7SUFzQjFELGlDQUFvQixLQUF5QjtRQUE3QyxZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQUNiO1FBWkQsZ0JBQVUsR0FBOEUsUUFBUSxDQUFDOztJQVlqRyxDQUFDO2dDQXhCVSx1QkFBdUI7SUEwQmxDLDBDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O2dCQVAwQixrQkFBa0IsdUJBQWhDLElBQUk7O0lBbEJqQjtRQURDLEtBQUssRUFBRTs4REFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTswREFDTztJQUVmO1FBREMsS0FBSyxFQUFFOzREQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFO3dEQUNJO0lBRVo7UUFEQyxLQUFLLEVBQUU7K0RBQ3lGO0lBRWpHO1FBREMsS0FBSyxFQUFFOzREQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFOytFQUMyQjtJQUVuQztRQURDLEtBQUssRUFBRTtxRUFDdUI7SUFFL0I7UUFEQyxLQUFLLEVBQUU7MERBQ087SUFwQkosdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLDZDQUEyQztZQUNyRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEseUJBQXVCLEVBQXZCLENBQXVCLENBQUMsRUFBRSxDQUFDO1NBQ2xHLENBQUM7UUF1QmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQXRCUix1QkFBdUIsQ0E4Qm5DO0lBQUQsOEJBQUM7Q0FBQSxBQTlCRCxDQUE2QyxlQUFlLEdBOEIzRDtTQTlCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBPbkluaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJpbmdNYXBzIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS1iaW5nbWFwcycsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtc291cmNlLWJpbmdtYXBzXCI+PC9kaXY+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VCaW5nbWFwc0NvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZUJpbmdtYXBzQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IEJpbmdNYXBzO1xuXG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBoaWRwaTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY3VsdHVyZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBrZXk6IHN0cmluZztcbiAgQElucHV0KClcbiAgaW1hZ2VyeVNldDogJ1JvYWQnIHwgJ0FlcmlhbCcgfCAnQWVyaWFsV2l0aExhYmVscycgfCAnY29sbGluc0JhcnQnIHwgJ29yZG5hbmNlU3VydmV5JyA9ICdBZXJpYWwnO1xuICBASW5wdXQoKVxuICBtYXhab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlcHJvamVjdGlvbkVycm9yVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpbGVMb2FkRnVuY3Rpb246IExvYWRGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBCaW5nTWFwcyh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=