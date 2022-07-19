import { __decorate, __extends, __param } from "tslib";
import { Component, Host, Input, forwardRef, ContentChild } from '@angular/core';
import { VectorTile } from 'ol';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvc291cmNlcy92ZWN0b3J0aWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFHaEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVNyRDtJQUErQyw2Q0FBZTtJQTBCNUQsbUNBQW9CLEtBQStCO2VBQ2pELGtCQUFNLEtBQUssQ0FBQztJQUNkLENBQUM7a0NBNUJVLHlCQUF5QjtJQThCcEMsbURBQW1EO0lBQ25ELHNEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1FBQ2hELHFFQUFxRTtRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O2dCQVgwQix3QkFBd0IsdUJBQXRDLElBQUk7O0lBdkJqQjtRQURDLEtBQUssRUFBRTtnRUFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTsrREFDVTtJQUVsQjtRQURDLEtBQUssRUFBRTtpRUFDbUI7SUFFM0I7UUFEQyxLQUFLLEVBQUU7cUVBQ2U7SUFFdkI7UUFEQyxLQUFLLEVBQUU7c0VBQ3FCO0lBRTdCO1FBREMsS0FBSyxFQUFFOzBEQUNJO0lBRVo7UUFEQyxLQUFLLEVBQUU7MkRBQ087SUFFZjtRQURDLEtBQUssRUFBRTs0REFDTztJQUdmO1FBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQztzRUFDRztJQUdqQztRQURDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQzt3RUFDSztJQXZCMUIseUJBQXlCO1FBTHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMkJBQXlCLEVBQXpCLENBQXlCLENBQUMsRUFBRSxDQUFDO1NBQ3BHLENBQUM7UUEyQmEsV0FBQSxJQUFJLEVBQUUsQ0FBQTtPQTFCUix5QkFBeUIsQ0FzQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQXRDRCxDQUErQyxlQUFlLEdBc0M3RDtTQXRDWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QsIElucHV0LCBmb3J3YXJkUmVmLCBDb250ZW50Q2hpbGQsIEFmdGVyQ29udGVudEluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZlY3RvclRpbGUgfSBmcm9tICdvbCc7XG5pbXBvcnQgRmVhdHVyZSBmcm9tICdvbC9mb3JtYXQvRmVhdHVyZSc7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuaW1wb3J0IHsgTGF5ZXJWZWN0b3JUaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVydmVjdG9ydGlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybWF0Q29tcG9uZW50IH0gZnJvbSAnLi4vZm9ybWF0cy9mb3JtYXQuY29tcG9uZW50JztcbmltcG9ydCB7IFRpbGVHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vdGlsZWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9qZWN0aW9uTGlrZSB9IGZyb20gJ29sL3Byb2onO1xuaW1wb3J0IHsgVXJsRnVuY3Rpb24gfSBmcm9tICdvbC9UaWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXNvdXJjZS12ZWN0b3J0aWxlJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFNvdXJjZUNvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCkgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFNvdXJjZVZlY3RvclRpbGVDb21wb25lbnQgZXh0ZW5kcyBTb3VyY2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHVibGljIGluc3RhbmNlOiBWZWN0b3JUaWxlO1xuICBASW5wdXQoKVxuICBjYWNoZVNpemU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgb3ZlcmxhcHM6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHByb2plY3Rpb246IFByb2plY3Rpb25MaWtlO1xuICBASW5wdXQoKVxuICB0aWxlUGl4ZWxSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlVXJsRnVuY3Rpb246IFVybEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZztcbiAgQElucHV0KClcbiAgdXJsczogc3RyaW5nW107XG4gIEBJbnB1dCgpXG4gIHdyYXBYOiBib29sZWFuO1xuXG4gIEBDb250ZW50Q2hpbGQoRm9ybWF0Q29tcG9uZW50KVxuICBmb3JtYXRDb21wb25lbnQ6IEZvcm1hdENvbXBvbmVudDtcbiAgZm9ybWF0OiBGZWF0dXJlO1xuICBAQ29udGVudENoaWxkKFRpbGVHcmlkQ29tcG9uZW50KVxuICB0aWxlR3JpZENvbXBvbmVudDogVGlsZUdyaWRDb21wb25lbnQ7XG4gIHRpbGVHcmlkOiBUaWxlR3JpZDtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIGxheWVyOiBMYXllclZlY3RvclRpbGVDb21wb25lbnQpIHtcbiAgICBzdXBlcihsYXllcik7XG4gIH1cblxuICAvKiBuZWVkIHRoZSBjaGlsZHJlbiB0byBjb25zdHJ1Y3QgdGhlIE9MMyBvYmplY3QgKi9cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuZm9ybWF0ID0gdGhpcy5mb3JtYXRDb21wb25lbnQuaW5zdGFuY2U7XG4gICAgdGhpcy50aWxlR3JpZCA9IHRoaXMudGlsZUdyaWRDb21wb25lbnQuaW5zdGFuY2U7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnNvdXJjZS5WZWN0b3JUaWxlIGluc3RhbmNlIHdpdGg6JywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWZWN0b3JUaWxlKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRTb3VyY2UodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==