import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Graticule } from 'ol';
import { MapComponent } from './map.component';
let GraticuleComponent = class GraticuleComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'graticule';
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
            }
        }
        if (properties) {
            this.instance = new Graticule(properties);
        }
        this.instance.setMap(this.map.instance);
    }
    ngAfterContentInit() {
        this.instance = new Graticule({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition,
        });
        this.instance.setMap(this.map.instance);
    }
    ngOnDestroy() {
        this.instance.setMap(null);
    }
};
GraticuleComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], GraticuleComponent.prototype, "strokeStyle", void 0);
__decorate([
    Input()
], GraticuleComponent.prototype, "showLabels", void 0);
__decorate([
    Input()
], GraticuleComponent.prototype, "lonLabelPosition", void 0);
__decorate([
    Input()
], GraticuleComponent.prototype, "latLabelPosition", void 0);
GraticuleComponent = __decorate([
    Component({
        selector: 'aol-graticule',
        template: '<ng-content></ng-content>'
    })
], GraticuleComponent);
export { GraticuleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdGljdWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL2dyYXRpY3VsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF5RCxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWE3QixZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBWDlCLGtCQUFhLEdBQUcsV0FBVyxDQUFDO0lBV0ssQ0FBQztJQUV6QyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUVoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFFRCxLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQzdDO1NBQ0Y7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUM1QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtTQUN4QyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7O1lBbEMwQixZQUFZOztBQVJyQztJQURDLEtBQUssRUFBRTt1REFDWTtBQUVwQjtJQURDLEtBQUssRUFBRTtzREFDWTtBQUVwQjtJQURDLEtBQUssRUFBRTs0REFDaUI7QUFFekI7SUFEQyxLQUFLLEVBQUU7NERBQ2lCO0FBWGQsa0JBQWtCO0lBSjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRSwyQkFBMkI7S0FDdEMsQ0FBQztHQUNXLGtCQUFrQixDQStDOUI7U0EvQ1ksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdyYXRpY3VsZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFN0cm9rZSB9IGZyb20gJ29sL3N0eWxlJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vbWFwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1ncmF0aWN1bGUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBHcmF0aWN1bGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGluc3RhbmNlOiBhbnk7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ2dyYXRpY3VsZSc7XG5cbiAgQElucHV0KClcbiAgc3Ryb2tlU3R5bGU6IFN0cm9rZTtcbiAgQElucHV0KClcbiAgc2hvd0xhYmVsczogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9uTGFiZWxQb3NpdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBsYXRMYWJlbFBvc2l0aW9uOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG5cbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgR3JhdGljdWxlKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgICB0aGlzLmluc3RhbmNlLnNldE1hcCh0aGlzLm1hcC5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHcmF0aWN1bGUoe1xuICAgICAgc3Ryb2tlU3R5bGU6IHRoaXMuc3Ryb2tlU3R5bGUsXG4gICAgICBzaG93TGFiZWxzOiB0aGlzLnNob3dMYWJlbHMsXG4gICAgICBsb25MYWJlbFBvc2l0aW9uOiB0aGlzLmxvbkxhYmVsUG9zaXRpb24sXG4gICAgICBsYXRMYWJlbFBvc2l0aW9uOiB0aGlzLmxhdExhYmVsUG9zaXRpb24sXG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRNYXAodGhpcy5tYXAuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRNYXAobnVsbCk7XG4gIH1cbn1cbiJdfQ==