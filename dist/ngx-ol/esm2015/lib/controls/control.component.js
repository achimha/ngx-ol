import { __decorate } from "tslib";
import { Component, ContentChild } from '@angular/core';
import { Control } from 'ol/control';
import { MapComponent } from '../map.component';
import { ContentComponent } from '../content.component';
let ControlComponent = class ControlComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'control';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Control(this);
            this.map.instance.addControl(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeControl(this.instance);
        }
    }
};
ControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    ContentChild(ContentComponent, { static: true })
], ControlComponent.prototype, "content", void 0);
ControlComponent = __decorate([
    Component({
        selector: 'aol-control',
        template: ` <ng-content></ng-content> `
    })
], ControlComponent);
export { ControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU14RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQU8zQixZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBTjlCLGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBTU8sQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFmMEIsWUFBWTs7QUFGckM7SUFEQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7aURBQ3ZCO0FBTGYsZ0JBQWdCO0lBSjVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztHQUNXLGdCQUFnQixDQXNCNUI7U0F0QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb250ZW50LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdjb250cm9sJztcbiAgaW5zdGFuY2U6IENvbnRyb2w7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRlbnQ6IENvbnRlbnRDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNvbnRlbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBDb250cm9sKHRoaXMpO1xuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbCh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==