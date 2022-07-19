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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3RpbGVncmlkd210cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sSUFBSSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUXpEO0lBQTJDLHlDQUFpQjtJQUE1RDs7SUFxQkEsQ0FBQztJQUhDLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFoQkQ7UUFEQyxLQUFLLEVBQUU7eURBQ1k7SUFFcEI7UUFEQyxLQUFLLEVBQUU7MERBQ2U7SUFFdkI7UUFEQyxLQUFLLEVBQUU7OERBQ2M7SUFFdEI7UUFEQyxLQUFLLEVBQUU7NERBQ1k7SUFFcEI7UUFEQyxLQUFLLEVBQUU7d0RBQ087SUFFZjtRQURDLEtBQUssRUFBRTs0REFDc0I7SUFFOUI7UUFEQyxLQUFLLEVBQUU7eURBQ1U7SUFoQlAscUJBQXFCO1FBSmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO09BQ1cscUJBQXFCLENBcUJqQztJQUFELDRCQUFDO0NBQUEsQUFyQkQsQ0FBMkMsaUJBQWlCLEdBcUIzRDtTQXJCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBXTVRTIGZyb20gJ29sL3RpbGVncmlkL1dNVFMnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RpbGVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC10aWxlZ3JpZC13bXRzJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZFdNVFNDb21wb25lbnQgZXh0ZW5kcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBXTVRTO1xuXG4gIEBJbnB1dCgpXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XG4gIEBJbnB1dCgpXG4gIG9yaWdpbnM/OiBDb29yZGluYXRlW107XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcbiAgQElucHV0KClcbiAgbWF0cml4SWRzOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgc2l6ZXM/OiBTaXplW107XG4gIEBJbnB1dCgpXG4gIHRpbGVTaXplcz86IChudW1iZXIgfCBTaXplKVtdO1xuICBASW5wdXQoKVxuICB3aWR0aHM/OiBudW1iZXJbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdNVFModGhpcyk7XG4gIH1cbn1cbiJdfQ==