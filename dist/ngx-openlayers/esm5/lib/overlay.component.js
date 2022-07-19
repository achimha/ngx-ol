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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9vdmVybGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLElBQUksQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU92RDtJQXdCRSwwQkFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQXZCckMsa0JBQWEsR0FBRyxTQUFTLENBQUM7SUF1QmMsQ0FBQztJQUV6QyxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOztnQkFkd0IsWUFBWTs7SUFuQnJDO1FBREMsWUFBWSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO3FEQUN2QjtJQUcxQjtRQURDLEtBQUssRUFBRTtnREFDWTtJQUVwQjtRQURDLEtBQUssRUFBRTtvREFDUztJQUVqQjtRQURDLEtBQUssRUFBRTt5REFDaUM7SUFFekM7UUFEQyxLQUFLLEVBQUU7dURBQ1c7SUFFbkI7UUFEQyxLQUFLLEVBQUU7eURBQ2E7SUFFckI7UUFEQyxLQUFLLEVBQUU7cURBQ1M7SUFFakI7UUFEQyxLQUFLLEVBQUU7OERBQ3FCO0lBRTdCO1FBREMsS0FBSyxFQUFFOzJEQUNjO0lBdEJYLGdCQUFnQjtRQUo1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsMkJBQTJCO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0F1QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXZDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcmxheSwgUGFuT3B0aW9ucyB9IGZyb20gJ29sJztcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCBPdmVybGF5UG9zaXRpb25pbmcgZnJvbSAnb2wvT3ZlcmxheVBvc2l0aW9uaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLW92ZXJsYXknLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBjb21wb25lbnRUeXBlID0gJ292ZXJsYXknO1xuICBpbnN0YW5jZTogT3ZlcmxheTtcbiAgZWxlbWVudDogRWxlbWVudDtcbiAgQENvbnRlbnRDaGlsZChDb250ZW50Q29tcG9uZW50LCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBjb250ZW50OiBDb250ZW50Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG9mZnNldDogbnVtYmVyW107XG4gIEBJbnB1dCgpXG4gIHBvc2l0aW9uaW5nOiBPdmVybGF5UG9zaXRpb25pbmcgfCBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHN0b3BFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgaW5zZXJ0Rmlyc3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGF1dG9QYW46IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGF1dG9QYW5BbmltYXRpb246IFBhbk9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIGF1dG9QYW5NYXJnaW46IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY29udGVudC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE92ZXJsYXkodGhpcyk7XG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5hZGRPdmVybGF5KHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVPdmVybGF5KHRoaXMuaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxufVxuIl19