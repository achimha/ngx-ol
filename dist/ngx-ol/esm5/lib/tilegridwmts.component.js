import { __decorate, __extends } from "tslib";
import { Component, Input } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
var TileGridWMTSComponent = /** @class */ (function (_super) {
    __extends(TileGridWMTSComponent, _super);
    function TileGridWMTSComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileGridWMTSComponent.prototype.ngOnInit = function () {
        this.instance = new WMTS(this);
    };
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "origin", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "origins", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "resolutions", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "matrixIds", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "sizes", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "tileSizes", void 0);
    __decorate([
        Input()
    ], TileGridWMTSComponent.prototype, "widths", void 0);
    TileGridWMTSComponent = __decorate([
        Component({
            selector: 'aol-tilegrid-wmts',
            template: ''
        })
    ], TileGridWMTSComponent);
    return TileGridWMTSComponent;
}(TileGridComponent));
export { TileGridWMTSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi90aWxlZ3JpZHdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVF6RDtJQUEyQyx5Q0FBaUI7SUFBNUQ7O0lBcUJBLENBQUM7SUFIQyx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBaEJEO1FBREMsS0FBSyxFQUFFO3lEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFOzBEQUNlO0lBRXZCO1FBREMsS0FBSyxFQUFFOzhEQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFOzREQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFO3dEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7NERBQ1c7SUFFbkI7UUFEQyxLQUFLLEVBQUU7eURBQ1U7SUFoQlAscUJBQXFCO1FBSmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1cscUJBQXFCLENBcUJqQztJQUFELDRCQUFDO0NBQUEsQUFyQkQsQ0FBMkMsaUJBQWlCLEdBcUIzRDtTQXJCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBXTVRTIGZyb20gJ29sL3RpbGVncmlkL1dNVFMnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RpbGVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC10aWxlZ3JpZC13bXRzJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZFdNVFNDb21wb25lbnQgZXh0ZW5kcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBXTVRTO1xuXG4gIEBJbnB1dCgpXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XG4gIEBJbnB1dCgpXG4gIG9yaWdpbnM/OiBDb29yZGluYXRlW107XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcbiAgQElucHV0KClcbiAgbWF0cml4SWRzOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgc2l6ZXM/OiBTaXplW107XG4gIEBJbnB1dCgpXG4gIHRpbGVTaXplcz86IFNpemVbXTtcbiAgQElucHV0KClcbiAgd2lkdGhzPzogbnVtYmVyW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBXTVRTKHRoaXMpO1xuICB9XG59XG4iXX0=