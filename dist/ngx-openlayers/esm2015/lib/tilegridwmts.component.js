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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3RpbGVncmlkd210cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sSUFBSSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUXpELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXNCLFNBQVEsaUJBQWlCO0lBa0IxRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0YsQ0FBQTtBQWpCQztJQURDLEtBQUssRUFBRTtxREFDWTtBQUVwQjtJQURDLEtBQUssRUFBRTtzREFDZTtBQUV2QjtJQURDLEtBQUssRUFBRTswREFDYztBQUV0QjtJQURDLEtBQUssRUFBRTt3REFDWTtBQUVwQjtJQURDLEtBQUssRUFBRTtvREFDTztBQUVmO0lBREMsS0FBSyxFQUFFO3dEQUNzQjtBQUU5QjtJQURDLEtBQUssRUFBRTtxREFDVTtBQWhCUCxxQkFBcUI7SUFKakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyxxQkFBcUIsQ0FxQmpDO1NBckJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFdNVFMgZnJvbSAnb2wvdGlsZWdyaWQvV01UUyc7XG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdGlsZWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXRpbGVncmlkLXdtdHMnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIFRpbGVHcmlkV01UU0NvbXBvbmVudCBleHRlbmRzIFRpbGVHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFdNVFM7XG5cbiAgQElucHV0KClcbiAgb3JpZ2luPzogQ29vcmRpbmF0ZTtcbiAgQElucHV0KClcbiAgb3JpZ2lucz86IENvb3JkaW5hdGVbXTtcbiAgQElucHV0KClcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xuICBASW5wdXQoKVxuICBtYXRyaXhJZHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICBzaXplcz86IFNpemVbXTtcbiAgQElucHV0KClcbiAgdGlsZVNpemVzPzogKG51bWJlciB8IFNpemUpW107XG4gIEBJbnB1dCgpXG4gIHdpZHRocz86IG51bWJlcltdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgV01UUyh0aGlzKTtcbiAgfVxufVxuIl19