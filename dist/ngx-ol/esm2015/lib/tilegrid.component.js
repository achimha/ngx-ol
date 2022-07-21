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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFjaGltaGEvbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL3RpbGVncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxRQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFTNUMsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFnQjVCLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTNCQztJQURDLEtBQUssRUFBRTtpREFDTztBQUVmO0lBREMsS0FBSyxFQUFFO2tEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFO2tEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFO21EQUNnQjtBQUV4QjtJQURDLEtBQUssRUFBRTtpREFDWTtBQUVwQjtJQURDLEtBQUssRUFBRTtzREFDYztBQWRYLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyxpQkFBaUIsQ0ErQjdCO1NBL0JZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjcmVhdGVYWVogfSBmcm9tICdvbC90aWxlZ3JpZCc7XG5pbXBvcnQgVGlsZUdyaWQgZnJvbSAnb2wvdGlsZWdyaWQvVGlsZUdyaWQnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcbmltcG9ydCB7IFNpemUgfSBmcm9tICdvbC9zaXplJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXRpbGVncmlkJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBUaWxlR3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgaW5zdGFuY2U6IFRpbGVHcmlkO1xuXG4gIEBJbnB1dCgpXG4gIGV4dGVudDogRXh0ZW50O1xuICBASW5wdXQoKVxuICBtYXhab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblpvb206IG51bWJlcjtcbiAgQElucHV0KClcbiAgdGlsZVNpemU6IG51bWJlciB8IFNpemU7XG4gIEBJbnB1dCgpXG4gIG9yaWdpbj86IENvb3JkaW5hdGU7XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb25zOiBudW1iZXJbXTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMucmVzb2x1dGlvbnMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBjcmVhdGVYWVoodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVGlsZUdyaWQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghdGhpcy5yZXNvbHV0aW9ucykge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IGNyZWF0ZVhZWih0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBUaWxlR3JpZCh0aGlzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==