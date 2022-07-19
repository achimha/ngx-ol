import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { createXYZ } from 'ol/tilegrid';
import TileGrid from 'ol/tilegrid/TileGrid';
let TileGridComponent = class TileGridComponent {
    ngOnInit() {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
    }
    ngOnChanges(changes) {
        if (!this.resolutions) {
            this.instance = createXYZ(this);
        }
        else {
            this.instance = new TileGrid(this);
        }
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
export { TileGridComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvdGlsZWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLFFBQVEsTUFBTSxzQkFBc0IsQ0FBQztBQVM1QyxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWdCNUIsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Q0FDRixDQUFBO0FBM0JDO0lBREMsS0FBSyxFQUFFO2lEQUNPO0FBRWY7SUFEQyxLQUFLLEVBQUU7a0RBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7a0RBQ1E7QUFFaEI7SUFEQyxLQUFLLEVBQUU7bURBQ2dCO0FBRXhCO0lBREMsS0FBSyxFQUFFO2lEQUNZO0FBRXBCO0lBREMsS0FBSyxFQUFFO3NEQUNjO0FBZFgsaUJBQWlCO0lBSjdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLGlCQUFpQixDQStCN0I7U0EvQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNyZWF0ZVhZWiB9IGZyb20gJ29sL3RpbGVncmlkJztcbmltcG9ydCBUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZCc7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgU2l6ZSB9IGZyb20gJ29sL3NpemUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtdGlsZWdyaWQnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIFRpbGVHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBpbnN0YW5jZTogVGlsZUdyaWQ7XG5cbiAgQElucHV0KClcbiAgZXh0ZW50OiBFeHRlbnQ7XG4gIEBJbnB1dCgpXG4gIG1heFpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWluWm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB0aWxlU2l6ZTogbnVtYmVyIHwgU2l6ZTtcbiAgQElucHV0KClcbiAgb3JpZ2luPzogQ29vcmRpbmF0ZTtcbiAgQElucHV0KClcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5yZXNvbHV0aW9ucykge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGNyZWF0ZVhZWih0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlR3JpZCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLnJlc29sdXRpb25zKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gY3JlYXRlWFlaKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFRpbGVHcmlkKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuIl19