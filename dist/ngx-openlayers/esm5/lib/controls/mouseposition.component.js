import { __decorate } from "tslib";
import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import MousePosition from 'ol/control/MousePosition';
import { MapComponent } from '../map.component';
var ControlMousePositionComponent = /** @class */ (function () {
    function ControlMousePositionComponent(map, element) {
        this.map = map;
        this.element = element;
    }
    ControlMousePositionComponent.prototype.ngOnInit = function () {
        this.target = this.element.nativeElement;
        // console.log('ol.control.MousePosition init: ', this);
        this.instance = new MousePosition(this);
        this.map.instance.addControl(this.instance);
    };
    ControlMousePositionComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-control-mouseposition');
        this.map.instance.removeControl(this.instance);
    };
    ControlMousePositionComponent.ctorParameters = function () { return [
        { type: MapComponent },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ControlMousePositionComponent.prototype, "coordinateFormat", void 0);
    __decorate([
        Input()
    ], ControlMousePositionComponent.prototype, "projection", void 0);
    ControlMousePositionComponent = __decorate([
        Component({
            selector: 'aol-control-mouseposition',
            template: ""
        })
    ], ControlMousePositionComponent);
    return ControlMousePositionComponent;
}());
export { ControlMousePositionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91c2Vwb3NpdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9tb3VzZXBvc2l0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxhQUFhLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBUWhEO0lBUUUsdUNBQW9CLEdBQWlCLEVBQVUsT0FBbUI7UUFBOUMsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDO0lBRXRFLGdEQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3pDLHdEQUF3RDtRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELG1EQUFXLEdBQVg7UUFDRSxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkFad0IsWUFBWTtnQkFBbUIsVUFBVTs7SUFMbEU7UUFEQyxLQUFLLEVBQUU7MkVBQzJCO0lBRW5DO1FBREMsS0FBSyxFQUFFO3FFQUNtQjtJQUxoQiw2QkFBNkI7UUFKekMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7T0FDVyw2QkFBNkIsQ0FxQnpDO0lBQUQsb0NBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXJCWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IE1vdXNlUG9zaXRpb24gZnJvbSAnb2wvY29udHJvbC9Nb3VzZVBvc2l0aW9uJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZUZvcm1hdCB9IGZyb20gJ29sL2Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgUHJvamVjdGlvbkxpa2UgfSBmcm9tICdvbC9wcm9qJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtbW91c2Vwb3NpdGlvbicsXG4gIHRlbXBsYXRlOiBgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbE1vdXNlUG9zaXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBNb3VzZVBvc2l0aW9uO1xuICBASW5wdXQoKVxuICBjb29yZGluYXRlRm9ybWF0OiBDb29yZGluYXRlRm9ybWF0O1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZTtcbiAgdGFyZ2V0OiBFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbC5jb250cm9sLk1vdXNlUG9zaXRpb24gaW5pdDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb3VzZVBvc2l0aW9uKHRoaXMpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZpbmcgYW9sLWNvbnRyb2wtbW91c2Vwb3NpdGlvbicpO1xuICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZUNvbnRyb2wodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cbiJdfQ==