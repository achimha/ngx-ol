import { __decorate } from "tslib";
import { Component, ContentChild, Input } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay } from 'ol';
import { ContentComponent } from './content.component';
let OverlayComponent = class OverlayComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    }
};
OverlayComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    ContentChild(ContentComponent, { static: true })
], OverlayComponent.prototype, "content", void 0);
__decorate([
    Input()
], OverlayComponent.prototype, "id", void 0);
__decorate([
    Input()
], OverlayComponent.prototype, "offset", void 0);
__decorate([
    Input()
], OverlayComponent.prototype, "positioning", void 0);
__decorate([
    Input()
], OverlayComponent.prototype, "stopEvent", void 0);
__decorate([
    Input()
], OverlayComponent.prototype, "insertFirst", void 0);
__decorate([
    Input()
], OverlayComponent.prototype, "autoPan", void 0);
__decorate([
    Input()
], OverlayComponent.prototype, "autoPanAnimation", void 0);
__decorate([
    Input()
], OverlayComponent.prototype, "autoPanMargin", void 0);
OverlayComponent = __decorate([
    Component({
        selector: 'aol-overlay',
        template: '<ng-content></ng-content>'
    })
], OverlayComponent);
export { OverlayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLElBQUksQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU92RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQXdCM0IsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQXZCckMsa0JBQWEsR0FBRyxTQUFTLENBQUM7SUF1QmMsQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFmMEIsWUFBWTs7QUFuQnJDO0lBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2lEQUN2QjtBQUcxQjtJQURDLEtBQUssRUFBRTs0Q0FDWTtBQUVwQjtJQURDLEtBQUssRUFBRTtnREFDUztBQUVqQjtJQURDLEtBQUssRUFBRTtxREFDaUM7QUFFekM7SUFEQyxLQUFLLEVBQUU7bURBQ1c7QUFFbkI7SUFEQyxLQUFLLEVBQUU7cURBQ2E7QUFFckI7SUFEQyxLQUFLLEVBQUU7aURBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7MERBQ3FCO0FBRTdCO0lBREMsS0FBSyxFQUFFO3VEQUNjO0FBdEJYLGdCQUFnQjtJQUo1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsMkJBQTJCO0tBQ3RDLENBQUM7R0FDVyxnQkFBZ0IsQ0F1QzVCO1NBdkNZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPdmVybGF5LCBQYW5PcHRpb25zIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IE92ZXJsYXlQb3NpdGlvbmluZyBmcm9tICdvbC9PdmVybGF5UG9zaXRpb25pbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtb3ZlcmxheScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGNvbXBvbmVudFR5cGUgPSAnb3ZlcmxheSc7XG4gIGluc3RhbmNlOiBPdmVybGF5O1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRlbnQ6IENvbnRlbnRDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgaWQ6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KClcbiAgb2Zmc2V0OiBudW1iZXJbXTtcbiAgQElucHV0KClcbiAgcG9zaXRpb25pbmc6IE92ZXJsYXlQb3NpdGlvbmluZyB8IHN0cmluZztcbiAgQElucHV0KClcbiAgc3RvcEV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBpbnNlcnRGaXJzdDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgYXV0b1BhbjogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgYXV0b1BhbkFuaW1hdGlvbjogUGFuT3B0aW9ucztcbiAgQElucHV0KClcbiAgYXV0b1Bhbk1hcmdpbjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jb250ZW50LmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgT3ZlcmxheSh0aGlzKTtcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLmFkZE92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMubWFwLmluc3RhbmNlLnJlbW92ZU92ZXJsYXkodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICB9XG59XG4iXX0=