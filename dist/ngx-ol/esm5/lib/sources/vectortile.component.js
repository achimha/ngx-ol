import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef, ContentChild } from '@angular/core';
import { VectorTile } from 'ol/source';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
var SourceVectorTileComponent = /** @class */ (function (_super) {
    __extends(SourceVectorTileComponent, _super);
    function SourceVectorTileComponent(layer) {
        return _super.call(this, layer) || this;
    }
    SourceVectorTileComponent_1 = SourceVectorTileComponent;
    /* need the children to construct the OL3 object */
    SourceVectorTileComponent.prototype.ngAfterContentInit = function () {
        this.format = this.formatComponent.instance;
        this.tileGrid = this.tileGridComponent.instance;
        // console.log('creating ol.source.VectorTile instance with:', this);
        this.instance = new VectorTile(this);
        this.host.instance.setSource(this.instance);
    };
    var SourceVectorTileComponent_1;
    SourceVectorTileComponent.ctorParameters = function () { return [
        { type: LayerVectorTileComponent, decorators: [{ type: Host }] }
    ]; };
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "cacheSize", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "overlaps", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "projection", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "tilePixelRatio", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "tileUrlFunction", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "urls", void 0);
    __decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "wrapX", void 0);
    __decorate([
        ContentChild(FormatComponent)
    ], SourceVectorTileComponent.prototype, "formatComponent", void 0);
    __decorate([
        ContentChild(TileGridComponent)
    ], SourceVectorTileComponent.prototype, "tileGridComponent", void 0);
    SourceVectorTileComponent = SourceVectorTileComponent_1 = __decorate([
        Component({
            selector: 'aol-source-vectortile',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorTileComponent_1; }) }]
        }),
        __param(0, Host())
    ], SourceVectorTileComponent);
    return SourceVectorTileComponent;
}(SourceComponent));
export { SourceVectorTileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy92ZWN0b3J0aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHdkMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVNyRDtJQUErQyw2Q0FBZTtJQTBCNUQsbUNBQW9CLEtBQStCO2VBQ2pELGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7a0NBNUJVLHlCQUF5QjtJQThCcEMsbURBQW1EO0lBQ25ELHNEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQ2hELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O2dCQVgwQix3QkFBd0IsdUJBQXRDLElBQUk7O0lBdkJqQjtRQURDLEtBQUssRUFBRTtnRUFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTsrREFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTtpRUFDbUI7SUFFM0I7UUFEQyxLQUFLLEVBQUU7cUVBQ2U7SUFFdkI7UUFEQyxLQUFLLEVBQUU7c0VBQ3FCO0lBRTdCO1FBREMsS0FBSyxFQUFFOzBEQUNJO0lBRVo7UUFEQyxLQUFLLEVBQUU7MkRBQ087SUFFZjtRQURDLEtBQUssRUFBRTs0REFDTztJQUdmO1FBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQztzRUFDRztJQUdqQztRQURDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQzt3RUFDSztJQXZCMUIseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMkJBQXlCLEVBQXpCLENBQXlCLENBQUMsRUFBRSxDQUFDO1NBQ3BHLENBQUM7UUEyQmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQTFCUix5QkFBeUIsQ0FzQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQXRDRCxDQUErQyxlQUFlLEdBc0M3RDtTQXRDWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlY3RvclRpbGUgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvZm9ybWF0L0ZlYXR1cmUnO1xuaW1wb3J0IFRpbGVHcmlkIGZyb20gJ29sL3RpbGVncmlkL1RpbGVHcmlkJztcbmltcG9ydCB7IExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllcnZlY3RvcnRpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1hdENvbXBvbmVudCB9IGZyb20gJy4uL2Zvcm1hdHMvZm9ybWF0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4uL3RpbGVncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3VyY2VDb21wb25lbnQgfSBmcm9tICcuL3NvdXJjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcbmltcG9ydCB7IFVybEZ1bmN0aW9uIH0gZnJvbSAnb2wvVGlsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1zb3VyY2UtdmVjdG9ydGlsZScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTb3VyY2VDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQpIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHB1YmxpYyBpbnN0YW5jZTogVmVjdG9yVGlsZTtcbiAgQElucHV0KClcbiAgY2FjaGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG92ZXJsYXBzOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgQElucHV0KClcbiAgdGlsZVBpeGVsUmF0aW86IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZVVybEZ1bmN0aW9uOiBVcmxGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHVybHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICB3cmFwWDogYm9vbGVhbjtcblxuICBAQ29udGVudENoaWxkKEZvcm1hdENvbXBvbmVudClcbiAgZm9ybWF0Q29tcG9uZW50OiBGb3JtYXRDb21wb25lbnQ7XG4gIGZvcm1hdDogRmVhdHVyZTtcbiAgQENvbnRlbnRDaGlsZChUaWxlR3JpZENvbXBvbmVudClcbiAgdGlsZUdyaWRDb21wb25lbnQ6IFRpbGVHcmlkQ29tcG9uZW50O1xuICB0aWxlR3JpZDogVGlsZUdyaWQ7XG5cbiAgY29uc3RydWN0b3IoQEhvc3QoKSBsYXllcjogTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50KSB7XG4gICAgc3VwZXIobGF5ZXIpO1xuICB9XG5cbiAgLyogbmVlZCB0aGUgY2hpbGRyZW4gdG8gY29uc3RydWN0IHRoZSBPTDMgb2JqZWN0ICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1hdCA9IHRoaXMuZm9ybWF0Q29tcG9uZW50Lmluc3RhbmNlO1xuICAgIHRoaXMudGlsZUdyaWQgPSB0aGlzLnRpbGVHcmlkQ29tcG9uZW50Lmluc3RhbmNlO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5zb3VyY2UuVmVjdG9yVGlsZSBpbnN0YW5jZSB3aXRoOicsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmVjdG9yVGlsZSh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=