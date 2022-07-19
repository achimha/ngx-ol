import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
var TileGridComponent = /** @class */ (function () {
    function TileGridComponent() {
    }
    TileGridComponent.prototype.ngOnInit = function () {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    };
    TileGridComponent.prototype.ngOnChanges = function (changes) {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    };
    __decorate([
        Input()
    ], TileGridComponent.prototype, "extent", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "maxZoom", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "minZoom", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "tileSize", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "origin", void 0);
    __decorate([
        Input()
    ], TileGridComponent.prototype, "resolutions", void 0);
    TileGridComponent = __decorate([
        Component({
            selector: 'aol-tilegrid',
            template: ''
        })
    ], TileGridComponent);
    return TileGridComponent;
}());
export { TileGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvdGlsZWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLFFBQVEsTUFBTSxzQkFBc0IsQ0FBQztBQVM1QztJQUFBO0lBK0JBLENBQUM7SUFmQyxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQTFCRDtRQURDLEtBQUssRUFBRTtxREFDTztJQUVmO1FBREMsS0FBSyxFQUFFO3NEQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFO3NEQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFO3VEQUNnQjtJQUV4QjtRQURDLEtBQUssRUFBRTtxREFDWTtJQUVwQjtRQURDLEtBQUssRUFBRTswREFDYztJQWRYLGlCQUFpQjtRQUo3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyxpQkFBaUIsQ0ErQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQS9CRCxJQStCQztTQS9CWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY3JlYXRlWFlaIH0gZnJvbSAnb2wvdGlsZWdyaWQnO1xuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnb2wvY29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC10aWxlZ3JpZCcsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgY2xhc3MgVGlsZUdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIGluc3RhbmNlOiBUaWxlR3JpZDtcblxuICBASW5wdXQoKVxuICBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KClcbiAgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5ab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpbGVTaXplOiBudW1iZXIgfCBTaXplO1xuICBASW5wdXQoKVxuICBvcmlnaW4/OiBDb29yZGluYXRlO1xuICBASW5wdXQoKVxuICByZXNvbHV0aW9uczogbnVtYmVyW107XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLnJlc29sdXRpb25zKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gY3JlYXRlWFlaKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVHcmlkKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMucmVzb2x1dGlvbnMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBjcmVhdGVYWVoodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZUdyaWQodGhpcyk7XG4gICAgfVxuICB9XG59XG4iXX0=