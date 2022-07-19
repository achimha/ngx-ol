import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ScaleLine } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlScaleLineComponent = /** @class */ (function () {
    function ControlScaleLineComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-scaleline');
    }
    ControlScaleLineComponent.prototype.ngOnInit = function () {
        this.instance = new ScaleLine(this);
        this.map.instance.addControl(this.instance);
    };
    ControlScaleLineComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-scaleline');
        this.map.instance.removeControl(this.instance);
    };
    ControlScaleLineComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlScaleLineComponent.prototype, "units", void 0);
    ControlScaleLineComponent = __decorate([
        Component({
            selector: 'aol-control-scaleline',
            template: " <ng-content></ng-content> "
        })
    ], ControlScaleLineComponent);
    return ControlScaleLineComponent;
}());
export { ControlScaleLineComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhbGVsaW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3NjYWxlbGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRDtJQUtFLG1DQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLG1EQUFtRDtJQUNyRCxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNFLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVp3QixZQUFZOztJQUZyQztRQURDLEtBQUssRUFBRTs0REFDTTtJQUhILHlCQUF5QjtRQUpyQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLHlCQUF5QixDQWtCckM7SUFBRCxnQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBbEJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2FsZUxpbmUgfSBmcm9tICdvbC9jb250cm9sJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbC1zY2FsZWxpbmUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xTY2FsZUxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBTY2FsZUxpbmU7XG4gIEBJbnB1dCgpXG4gIHVuaXRzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbnN0YW5jaW5nIGFvbC1jb250cm9sLXNjYWxlbGluZScpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTY2FsZUxpbmUodGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1zY2FsZWxpbmUnKTtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=