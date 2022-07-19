import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { defaults } from 'ol/control';
import { MapComponent } from '../map.component';
let DefaultControlComponent = class DefaultControlComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach((c) => this.map.instance.addControl(c));
    }
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach((c) => this.map.instance.removeControl(c));
    }
};
DefaultControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], DefaultControlComponent.prototype, "attribution", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "attributionOptions", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "rotate", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "rotateOptions", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "zoom", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "zoomOptions", void 0);
DefaultControlComponent = __decorate([
    Component({
        selector: 'aol-control-defaults',
        template: ''
    })
], DefaultControlComponent);
export { DefaultControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2wvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQVcsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBTS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1oRCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQWVsQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO0lBQUcsQ0FBQztJQUV6QyxRQUFRO1FBQ04sbURBQW1EO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsV0FBVztRQUNULGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNGLENBQUE7O1lBWjBCLFlBQVk7O0FBWnJDO0lBREMsS0FBSyxFQUFFOzREQUNhO0FBRXJCO0lBREMsS0FBSyxFQUFFO21FQUMrQjtBQUV2QztJQURDLEtBQUssRUFBRTt1REFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTs4REFDcUI7QUFFN0I7SUFEQyxLQUFLLEVBQUU7cURBQ007QUFFZDtJQURDLEtBQUssRUFBRTs0REFDaUI7QUFiZCx1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVyx1QkFBdUIsQ0EyQm5DO1NBM0JZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sLCBkZWZhdWx0cyB9IGZyb20gJ29sL2NvbnRyb2wnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJ29sJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgQXR0cmlidXRpb25PcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9BdHRyaWJ1dGlvbic7XG5pbXBvcnQgeyBPcHRpb25zIGFzIFJvdGF0ZU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1JvdGF0ZSc7XG5pbXBvcnQgeyBPcHRpb25zIGFzIFpvb21PcHRpb25zIH0gZnJvbSAnb2wvY29udHJvbC9ab29tJztcblxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1jb250cm9sLWRlZmF1bHRzJyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IENvbGxlY3Rpb248Q29udHJvbD47XG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBhdHRyaWJ1dGlvbk9wdGlvbnM6IEF0dHJpYnV0aW9uT3B0aW9ucztcbiAgQElucHV0KClcbiAgcm90YXRlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICByb3RhdGVPcHRpb25zOiBSb3RhdGVPcHRpb25zO1xuICBASW5wdXQoKVxuICB6b29tOiBib29sZWFuO1xuICBASW5wdXQoKVxuICB6b29tT3B0aW9uczogWm9vbU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb2wuY29udHJvbC5kZWZhdWx0cyBpbml0OiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gZGVmYXVsdHModGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKChjKSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5hZGRDb250cm9sKGMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmluZyBhb2wtY29udHJvbC1kZWZhdWx0cycpO1xuICAgIHRoaXMuaW5zdGFuY2UuZm9yRWFjaCgoYykgPT4gdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlQ29udHJvbChjKSk7XG4gIH1cbn1cbiJdfQ==