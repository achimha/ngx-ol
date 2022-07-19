import { __decorate } from "tslib";
import { Component, ContentChild } from '@angular/core';
import { Control } from 'ol/control';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
var ControlComponent = /** @class */ (function () {
    function ControlComponent(map) {
        this.map = map;
        this.componentType = 'control';
    }
    ControlComponent.prototype.ngOnInit = function () {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Control(this);
            this.map.instance.addControl(this.instance);
        }
    };
    ControlComponent.prototype.ngOnDestroy = function () {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    };
    ControlComponent.ctorParameters = function () { return [
        { type: MapComponent }
    ]; };
    __decorate([
        ContentChild(ContentComponent, { static: true })
    ], ControlComponent.prototype, "content", void 0);
    ControlComponent = __decorate([
        Component({
            selector: 'aol-control',
            template: " <ng-content></ng-content> "
        })
    ], ControlComponent);
    return ControlComponent;
}());
export { ControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU94RDtJQU9FLDBCQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBTjlCLGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBTU8sQ0FBQztJQUV6QyxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOztnQkFkd0IsWUFBWTs7SUFGckM7UUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7cURBQ3ZCO0lBTGYsZ0JBQWdCO1FBSjVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztPQUNXLGdCQUFnQixDQXNCNUI7SUFBRCx1QkFBQztDQUFBLEFBdEJELElBc0JDO1NBdEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGlsZUdyaWRDb21wb25lbnQgfSBmcm9tICcuLi90aWxlZ3JpZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnY29udHJvbCc7XG4gIGluc3RhbmNlOiBDb250cm9sO1xuICBlbGVtZW50OiBFbGVtZW50O1xuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRlbnQ6IENvbnRlbnRDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNvbnRlbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDb250cm9sKHRoaXMpO1xuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==