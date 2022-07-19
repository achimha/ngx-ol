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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi90aWxlZ3JpZHdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVF6RDtJQUEyQyx5Q0FBaUI7SUFBNUQ7O0lBcUJBLENBQUM7SUFIQyx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBaEJEO1FBREMsS0FBSyxFQUFFO3lEQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFOzBEQUNlO0lBRXZCO1FBREMsS0FBSyxFQUFFOzhEQUNjO0lBRXRCO1FBREMsS0FBSyxFQUFFOzREQUNZO0lBRXBCO1FBREMsS0FBSyxFQUFFO3dEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7NERBQ3NCO0lBRTlCO1FBREMsS0FBSyxFQUFFO3lEQUNVO0lBaEJQLHFCQUFxQjtRQUpqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQztPQUNXLHFCQUFxQixDQXFCakM7SUFBRCw0QkFBQztDQUFBLEFBckJELENBQTJDLGlCQUFpQixHQXFCM0Q7U0FyQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgV01UUyBmcm9tICdvbC90aWxlZ3JpZC9XTVRTJztcbmltcG9ydCB7IFRpbGVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi90aWxlZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtdGlsZWdyaWQtd210cycsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgVGlsZUdyaWRXTVRTQ29tcG9uZW50IGV4dGVuZHMgVGlsZUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogV01UUztcblxuICBASW5wdXQoKVxuICBvcmlnaW4/OiBDb29yZGluYXRlO1xuICBASW5wdXQoKVxuICBvcmlnaW5zPzogQ29vcmRpbmF0ZVtdO1xuICBASW5wdXQoKVxuICByZXNvbHV0aW9uczogbnVtYmVyW107XG4gIEBJbnB1dCgpXG4gIG1hdHJpeElkczogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHNpemVzPzogU2l6ZVtdO1xuICBASW5wdXQoKVxuICB0aWxlU2l6ZXM/OiAobnVtYmVyIHwgU2l6ZSlbXTtcbiAgQElucHV0KClcbiAgd2lkdGhzPzogbnVtYmVyW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBXTVRTKHRoaXMpO1xuICB9XG59XG4iXX0=