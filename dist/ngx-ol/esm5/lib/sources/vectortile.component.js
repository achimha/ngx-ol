import * as tslib_1 from "tslib";
import { Component, Host, Input, forwardRef, ContentChild } from '@angular/core';
import { VectorTile } from 'ol/source';
import { LayerVectorTileComponent } from '../layers/layervectortile.component';
import { FormatComponent } from '../formats/format.component';
import { TileGridComponent } from '../tilegrid.component';
import { SourceComponent } from './source.component';
var SourceVectorTileComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SourceVectorTileComponent, _super);
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
    tslib_1.__decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "cacheSize", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "overlaps", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "projection", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "tilePixelRatio", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "tileUrlFunction", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "url", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "urls", void 0);
    tslib_1.__decorate([
        Input()
    ], SourceVectorTileComponent.prototype, "wrapX", void 0);
    tslib_1.__decorate([
        ContentChild(FormatComponent, { static: false })
    ], SourceVectorTileComponent.prototype, "formatComponent", void 0);
    tslib_1.__decorate([
        ContentChild(TileGridComponent, { static: false })
    ], SourceVectorTileComponent.prototype, "tileGridComponent", void 0);
    SourceVectorTileComponent = SourceVectorTileComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'aol-source-vectortile',
            template: " <ng-content></ng-content> ",
            providers: [{ provide: SourceComponent, useExisting: forwardRef(function () { return SourceVectorTileComponent_1; }) }]
        }),
        tslib_1.__param(0, Host())
    ], SourceVectorTileComponent);
    return SourceVectorTileComponent;
}(SourceComponent));
export { SourceVectorTileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy92ZWN0b3J0aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHdkMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVNyRDtJQUErQyxxREFBZTtJQTBCNUQsbUNBQW9CLEtBQStCO2VBQ2pELGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7a0NBNUJVLHlCQUF5QjtJQThCcEMsbURBQW1EO0lBQ25ELHNEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQ2hELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O2dCQVgwQix3QkFBd0IsdUJBQXRDLElBQUk7O0lBdkJqQjtRQURDLEtBQUssRUFBRTtnRUFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTsrREFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTtpRUFDbUI7SUFFM0I7UUFEQyxLQUFLLEVBQUU7cUVBQ2U7SUFFdkI7UUFEQyxLQUFLLEVBQUU7c0VBQ3FCO0lBRTdCO1FBREMsS0FBSyxFQUFFOzBEQUNJO0lBRVo7UUFEQyxLQUFLLEVBQUU7MkRBQ087SUFFZjtRQURDLEtBQUssRUFBRTs0REFDTztJQUdmO1FBREMsWUFBWSxDQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQztzRUFDaEI7SUFHakM7UUFEQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7d0VBQ2Q7SUF2QjFCLHlCQUF5QjtRQUxyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSw2QkFBNkI7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDJCQUF5QixFQUF6QixDQUF5QixDQUFDLEVBQUUsQ0FBQztTQUNwRyxDQUFDO1FBMkJhLG1CQUFBLElBQUksRUFBRSxDQUFBO09BMUJSLHlCQUF5QixDQXNDckM7SUFBRCxnQ0FBQztDQUFBLEFBdENELENBQStDLGVBQWUsR0FzQzdEO1NBdENZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVjdG9yVGlsZSB9IGZyb20gJ29sL3NvdXJjZSc7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9ydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0Q29tcG9uZW50IH0gZnJvbSAnLi4vZm9ybWF0cy9mb3JtYXQuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbGVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgVXJsRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS12ZWN0b3J0aWxlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHVibGljIGluc3RhbmNlOiBWZWN0b3JUaWxlO1xuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgb3ZlcmxhcHM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICB0aWxlUGl4ZWxSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlVXJsRnVuY3Rpb246IFVybEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcbiAgQElucHV0KClcbiAgdXJsczogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuXG4gIEBDb250ZW50Q2hpbGQoRm9ybWF0Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgZm9ybWF0Q29tcG9uZW50OiBGb3JtYXRDb21wb25lbnQ7XG4gIGZvcm1hdDogRmVhdHVyZTtcbiAgQENvbnRlbnRDaGlsZChUaWxlR3JpZENvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHRpbGVHcmlkQ29tcG9uZW50OiBUaWxlR3JpZENvbXBvbmVudDtcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIC8qIG5lZWQgdGhlIGNoaWxkcmVuIHRvIGNvbnN0cnVjdCB0aGUgT0wzIG9iamVjdCAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5mb3JtYXQgPSB0aGlzLmZvcm1hdENvbXBvbmVudC5pbnN0YW5jZTtcbiAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZENvbXBvbmVudC5pbnN0YW5jZTtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc291cmNlLlZlY3RvclRpbGUgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3RvclRpbGUodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19