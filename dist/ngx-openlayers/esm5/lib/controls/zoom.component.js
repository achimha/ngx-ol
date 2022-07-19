import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Zoom } from 'ol/control';
import { MapComponent } from '../map.component';
var ControlZoomComponent = /** @class */ (function () {
    function ControlZoomComponent(map) {
        this.map = map;
        // console.log('instancing aol-control-zoom');
    }
    ControlZoomComponent.prototype.ngOnInit = function () {
        this.instance = new Zoom(this);
        this.map.instance.addControl(this.instance);
    };
    ControlZoomComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-zoom');
        this.map.instance.removeControl(this.instance);
    };
    ControlZoomComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "duration", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomInLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomOutLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomInTipLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "zoomOutTipLabel", void 0);
    __decorate([
        Input()
    ], ControlZoomComponent.prototype, "delta", void 0);
    ControlZoomComponent = __decorate([
        Component({
            selector: 'aol-control-zoom',
            template: " <ng-content></ng-content> "
        })
    ], ControlZoomComponent);
    return ControlZoomComponent;
}());
export { ControlZoomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy96b29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhEO0lBZ0JFLDhCQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ25DLDhDQUE4QztJQUNoRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLDRDQUE0QztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQVp3QixZQUFZOztJQVpyQztRQURDLEtBQUssRUFBRTswREFDUztJQUVqQjtRQURDLEtBQUssRUFBRTs2REFDbUI7SUFFM0I7UUFEQyxLQUFLLEVBQUU7OERBQ29CO0lBRTVCO1FBREMsS0FBSyxFQUFFO2dFQUNlO0lBRXZCO1FBREMsS0FBSyxFQUFFO2lFQUNnQjtJQUV4QjtRQURDLEtBQUssRUFBRTt1REFDTTtJQWRILG9CQUFvQjtRQUpoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLG9CQUFvQixDQTZCaEM7SUFBRCwyQkFBQztDQUFBLEFBN0JELElBNkJDO1NBN0JZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBab29tIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtem9vbScsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFpvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBab29tO1xuXG4gIEBJbnB1dCgpXG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHpvb21JbkxhYmVsOiBzdHJpbmcgfCBOb2RlO1xuICBASW5wdXQoKVxuICB6b29tT3V0TGFiZWw6IHN0cmluZyB8IE5vZGU7XG4gIEBJbnB1dCgpXG4gIHpvb21JblRpcExhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHpvb21PdXRUaXBMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkZWx0YTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW5zdGFuY2luZyBhb2wtY29udHJvbC16b29tJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IFpvb20odGhpcyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC16b29tJyk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19