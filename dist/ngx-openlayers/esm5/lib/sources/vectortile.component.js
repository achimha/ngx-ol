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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9ydGlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9zb3VyY2VzL3ZlY3RvcnRpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLElBQUksQ0FBQztBQUdoQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBU3JEO0lBQStDLDZDQUFlO0lBMEI1RCxtQ0FBb0IsS0FBK0I7ZUFDakQsa0JBQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQztrQ0E1QlUseUJBQXlCO0lBOEJwQyxtREFBbUQ7SUFDbkQsc0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDaEQscUVBQXFFO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7Z0JBWDBCLHdCQUF3Qix1QkFBdEMsSUFBSTs7SUF2QmpCO1FBREMsS0FBSyxFQUFFO2dFQUNVO0lBRWxCO1FBREMsS0FBSyxFQUFFOytEQUNVO0lBRWxCO1FBREMsS0FBSyxFQUFFO2lFQUNtQjtJQUUzQjtRQURDLEtBQUssRUFBRTtxRUFDZTtJQUV2QjtRQURDLEtBQUssRUFBRTtzRUFDcUI7SUFFN0I7UUFEQyxLQUFLLEVBQUU7MERBQ0k7SUFFWjtRQURDLEtBQUssRUFBRTsyREFDTztJQUVmO1FBREMsS0FBSyxFQUFFOzREQUNPO0lBR2Y7UUFEQyxZQUFZLENBQUMsZUFBZSxDQUFDO3NFQUNHO0lBR2pDO1FBREMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO3dFQUNLO0lBdkIxQix5QkFBeUI7UUFMckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwyQkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxFQUFFLENBQUM7U0FDcEcsQ0FBQztRQTJCYSxXQUFBLElBQUksRUFBRSxDQUFBO09BMUJSLHlCQUF5QixDQXNDckM7SUFBRCxnQ0FBQztDQUFBLEFBdENELENBQStDLGVBQWUsR0FzQzdEO1NBdENZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgSW5wdXQsIGZvcndhcmRSZWYsIENvbnRlbnRDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmVjdG9yVGlsZSB9IGZyb20gJ29sJztcbmltcG9ydCBGZWF0dXJlIGZyb20gJ29sL2Zvcm1hdC9GZWF0dXJlJztcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XG5pbXBvcnQgeyBMYXllclZlY3RvclRpbGVDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJ2ZWN0b3J0aWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXRDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtYXRzL2Zvcm1hdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBVcmxGdW5jdGlvbiB9IGZyb20gJ29sL1RpbGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc291cmNlLXZlY3RvcnRpbGUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU291cmNlQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTb3VyY2VWZWN0b3JUaWxlQ29tcG9uZW50KSB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlVmVjdG9yVGlsZUNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBwdWJsaWMgaW5zdGFuY2U6IFZlY3RvclRpbGU7XG4gIEBJbnB1dCgpXG4gIGNhY2hlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBvdmVybGFwczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgcHJvamVjdGlvbjogUHJvamVjdGlvbkxpa2U7XG4gIEBJbnB1dCgpXG4gIHRpbGVQaXhlbFJhdGlvOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHRpbGVVcmxGdW5jdGlvbjogVXJsRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIHVybDogc3RyaW5nO1xuICBASW5wdXQoKVxuICB1cmxzOiBzdHJpbmdbXTtcbiAgQElucHV0KClcbiAgd3JhcFg6IGJvb2xlYW47XG5cbiAgQENvbnRlbnRDaGlsZChGb3JtYXRDb21wb25lbnQpXG4gIGZvcm1hdENvbXBvbmVudDogRm9ybWF0Q29tcG9uZW50O1xuICBmb3JtYXQ6IEZlYXR1cmU7XG4gIEBDb250ZW50Q2hpbGQoVGlsZUdyaWRDb21wb25lbnQpXG4gIHRpbGVHcmlkQ29tcG9uZW50OiBUaWxlR3JpZENvbXBvbmVudDtcbiAgdGlsZUdyaWQ6IFRpbGVHcmlkO1xuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgbGF5ZXI6IExheWVyVmVjdG9yVGlsZUNvbXBvbmVudCkge1xuICAgIHN1cGVyKGxheWVyKTtcbiAgfVxuXG4gIC8qIG5lZWQgdGhlIGNoaWxkcmVuIHRvIGNvbnN0cnVjdCB0aGUgT0wzIG9iamVjdCAqL1xuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5mb3JtYXQgPSB0aGlzLmZvcm1hdENvbXBvbmVudC5pbnN0YW5jZTtcbiAgICB0aGlzLnRpbGVHcmlkID0gdGhpcy50aWxlR3JpZENvbXBvbmVudC5pbnN0YW5jZTtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc291cmNlLlZlY3RvclRpbGUgaW5zdGFuY2Ugd2l0aDonLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZlY3RvclRpbGUodGhpcyk7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19