import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import WMTS from 'ol/tilegrid/WMTS';
import { TileGridComponent } from './tilegrid.component';
let TileGridWMTSComponent = class TileGridWMTSComponent extends TileGridComponent {
    ngOnInit() {
        this.instance = new WMTS(this);
    }
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
export { TileGridWMTSComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi90aWxlZ3JpZHdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVF6RCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLGlCQUFpQjtJQWtCMUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGLENBQUE7QUFqQkM7SUFEQyxLQUFLLEVBQUU7cURBQ1k7QUFFcEI7SUFEQyxLQUFLLEVBQUU7c0RBQ2U7QUFFdkI7SUFEQyxLQUFLLEVBQUU7MERBQ2M7QUFFdEI7SUFEQyxLQUFLLEVBQUU7d0RBQ1k7QUFFcEI7SUFEQyxLQUFLLEVBQUU7b0RBQ087QUFFZjtJQURDLEtBQUssRUFBRTt3REFDc0I7QUFFOUI7SUFEQyxLQUFLLEVBQUU7cURBQ1U7QUFoQlAscUJBQXFCO0lBSmpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDO0dBQ1cscUJBQXFCLENBcUJqQztTQXJCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBXTVRTIGZyb20gJ29sL3RpbGVncmlkL1dNVFMnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuL3RpbGVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC10aWxlZ3JpZC13bXRzJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZFdNVFNDb21wb25lbnQgZXh0ZW5kcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGluc3RhbmNlOiBXTVRTO1xuXG4gIEBJbnB1dCgpXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XG4gIEBJbnB1dCgpXG4gIG9yaWdpbnM/OiBDb29yZGluYXRlW107XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcbiAgQElucHV0KClcbiAgbWF0cml4SWRzOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgc2l6ZXM/OiBTaXplW107XG4gIEBJbnB1dCgpXG4gIHRpbGVTaXplcz86IChudW1iZXIgfCBTaXplKVtdO1xuICBASW5wdXQoKVxuICB3aWR0aHM/OiBudW1iZXJbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdNVFModGhpcyk7XG4gIH1cbn1cbiJdfQ==