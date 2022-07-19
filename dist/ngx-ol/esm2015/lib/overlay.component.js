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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxJQUFJLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPdkQsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUF3QjNCLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7UUF2QnJDLGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBdUJjLENBQUM7SUFFekMsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztZQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBZjBCLFlBQVk7O0FBbkJyQztJQURDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztpREFDdkI7QUFHMUI7SUFEQyxLQUFLLEVBQUU7NENBQ1k7QUFFcEI7SUFEQyxLQUFLLEVBQUU7Z0RBQ1M7QUFFakI7SUFEQyxLQUFLLEVBQUU7cURBQ2lDO0FBRXpDO0lBREMsS0FBSyxFQUFFO21EQUNXO0FBRW5CO0lBREMsS0FBSyxFQUFFO3FEQUNhO0FBRXJCO0lBREMsS0FBSyxFQUFFO2lEQUNTO0FBRWpCO0lBREMsS0FBSyxFQUFFOzBEQUNxQjtBQUU3QjtJQURDLEtBQUssRUFBRTt1REFDYztBQXRCWCxnQkFBZ0I7SUFKNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFLDJCQUEyQjtLQUN0QyxDQUFDO0dBQ1csZ0JBQWdCLENBdUM1QjtTQXZDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcmxheSwgUGFuT3B0aW9ucyB9IGZyb20gJ29sJztcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCBPdmVybGF5UG9zaXRpb25pbmcgZnJvbSAnb2wvT3ZlcmxheVBvc2l0aW9uaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLW92ZXJsYXknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb21wb25lbnRUeXBlID0gJ292ZXJsYXknO1xuICBpbnN0YW5jZTogT3ZlcmxheTtcbiAgZWxlbWVudDogRWxlbWVudDtcbiAgQENvbnRlbnRDaGlsZChDb250ZW50Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9mZnNldDogbnVtYmVyW107XG4gIEBJbnB1dCgpXG4gIHBvc2l0aW9uaW5nOiBPdmVybGF5UG9zaXRpb25pbmcgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHN0b3BFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgaW5zZXJ0Rmlyc3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGF1dG9QYW46IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGF1dG9QYW5BbmltYXRpb246IFBhbk9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIGF1dG9QYW5NYXJnaW46IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY29udGVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJsYXkodGhpcyk7XG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRPdmVybGF5KHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVPdmVybGF5KHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxufVxuIl19