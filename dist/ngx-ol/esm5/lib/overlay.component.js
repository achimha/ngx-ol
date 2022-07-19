import { __decorate } from "tslib";
import { Component, ContentChild, Input } from '@angular/core';
import { MapComponent } from './map.component';
import { Overlay } from 'ol';
import { ContentComponent } from './content.component';
var OverlayComponent = /** @class */ (function () {
    function OverlayComponent(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    OverlayComponent.prototype.ngOnInit = function () {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    };
    OverlayComponent.prototype.ngOnDestroy = function () {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    };
    OverlayComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
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
    return OverlayComponent;
}());
export { OverlayComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxJQUFJLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPdkQ7SUF3QkUsMEJBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUF2QnJDLGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBdUJjLENBQUM7SUFFekMsbUNBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7Z0JBZHdCLFlBQVk7O0lBbkJyQztRQURDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztxREFDdkI7SUFHMUI7UUFEQyxLQUFLLEVBQUU7Z0RBQ1k7SUFFcEI7UUFEQyxLQUFLLEVBQUU7b0RBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7eURBQ2lDO0lBRXpDO1FBREMsS0FBSyxFQUFFO3VEQUNXO0lBRW5CO1FBREMsS0FBSyxFQUFFO3lEQUNhO0lBRXJCO1FBREMsS0FBSyxFQUFFO3FEQUNTO0lBRWpCO1FBREMsS0FBSyxFQUFFOzhEQUNxQjtJQUU3QjtRQURDLEtBQUssRUFBRTsyREFDYztJQXRCWCxnQkFBZ0I7UUFKNUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBdUM1QjtJQUFELHVCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IE92ZXJsYXksIFBhbk9wdGlvbnMgfSBmcm9tICdvbCc7XG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgT3ZlcmxheVBvc2l0aW9uaW5nIGZyb20gJ29sL092ZXJsYXlQb3NpdGlvbmluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1vdmVybGF5JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29tcG9uZW50VHlwZSA9ICdvdmVybGF5JztcbiAgaW5zdGFuY2U6IE92ZXJsYXk7XG4gIGVsZW1lbnQ6IEVsZW1lbnQ7XG4gIEBDb250ZW50Q2hpbGQoQ29udGVudENvbXBvbmVudCwgeyBzdGF0aWM6IHRydWUgfSlcbiAgY29udGVudDogQ29udGVudENvbXBvbmVudDtcblxuICBASW5wdXQoKVxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBvZmZzZXQ6IG51bWJlcltdO1xuICBASW5wdXQoKVxuICBwb3NpdGlvbmluZzogT3ZlcmxheVBvc2l0aW9uaW5nIHwgc3RyaW5nO1xuICBASW5wdXQoKVxuICBzdG9wRXZlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGluc2VydEZpcnN0OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBhdXRvUGFuOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBhdXRvUGFuQW5pbWF0aW9uOiBQYW5PcHRpb25zO1xuICBASW5wdXQoKVxuICBhdXRvUGFuTWFyZ2luOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNvbnRlbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPdmVybGF5KHRoaXMpO1xuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkT3ZlcmxheSh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlT3ZlcmxheSh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==