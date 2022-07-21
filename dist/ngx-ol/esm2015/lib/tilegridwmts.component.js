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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWR3bXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhY2hpbWhhL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi90aWxlZ3JpZHdtdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLElBQUksTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVF6RCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFzQixTQUFRLGlCQUFpQjtJQWtCMUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGLENBQUE7QUFqQkM7SUFEQyxLQUFLLEVBQUU7cURBQ1k7QUFFcEI7SUFEQyxLQUFLLEVBQUU7c0RBQ2U7QUFFdkI7SUFEQyxLQUFLLEVBQUU7MERBQ2M7QUFFdEI7SUFEQyxLQUFLLEVBQUU7d0RBQ1k7QUFFcEI7SUFEQyxLQUFLLEVBQUU7b0RBQ087QUFFZjtJQURDLEtBQUssRUFBRTt3REFDVztBQUVuQjtJQURDLEtBQUssRUFBRTtxREFDVTtBQWhCUCxxQkFBcUI7SUFKakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyxxQkFBcUIsQ0FxQmpDO1NBckJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFdNVFMgZnJvbSAnb2wvdGlsZWdyaWQvV01UUyc7XG5pbXBvcnQgeyBUaWxlR3JpZENvbXBvbmVudCB9IGZyb20gJy4vdGlsZWdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXRpbGVncmlkLXdtdHMnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIFRpbGVHcmlkV01UU0NvbXBvbmVudCBleHRlbmRzIFRpbGVHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IFdNVFM7XG5cbiAgQElucHV0KClcbiAgb3JpZ2luPzogQ29vcmRpbmF0ZTtcbiAgQElucHV0KClcbiAgb3JpZ2lucz86IENvb3JkaW5hdGVbXTtcbiAgQElucHV0KClcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xuICBASW5wdXQoKVxuICBtYXRyaXhJZHM6IHN0cmluZ1tdO1xuICBASW5wdXQoKVxuICBzaXplcz86IFNpemVbXTtcbiAgQElucHV0KClcbiAgdGlsZVNpemVzPzogU2l6ZVtdO1xuICBASW5wdXQoKVxuICB3aWR0aHM/OiBudW1iZXJbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFdNVFModGhpcyk7XG4gIH1cbn1cbiJdfQ==