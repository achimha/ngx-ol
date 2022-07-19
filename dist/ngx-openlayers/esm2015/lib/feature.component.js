import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Feature } from 'ol';
import { SourceVectorComponent } from './sources/vector.component';
let FeatureComponent = class FeatureComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'feature';
    }
    ngOnInit() {
        this.instance = new Feature();
        if (this.id !== undefined) {
            this.instance.setId(this.id);
        }
        this.host.instance.addFeature(this.instance);
    }
    ngOnDestroy() {
        this.host.instance.removeFeature(this.instance);
    }
    ngOnChanges(changes) {
        if (this.instance) {
            this.instance.setId(this.id);
        }
    }
};
FeatureComponent.ctorParameters = () => [
    { type: SourceVectorComponent }
];
__decorate([
    Input()
], FeatureComponent.prototype, "id", void 0);
FeatureComponent = __decorate([
    Component({
        selector: 'aol-feature',
        template: ` <ng-content></ng-content> `
    })
], FeatureComponent);
export { FeatureComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9mZWF0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBTW5FLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBTzNCLFlBQW9CLElBQTJCO1FBQTNCLFNBQUksR0FBSixJQUFJLENBQXVCO1FBTnhDLGtCQUFhLEdBQUcsU0FBUyxDQUFDO0lBTWlCLENBQUM7SUFFbkQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7Q0FDRixDQUFBOztZQW5CMkIscUJBQXFCOztBQUYvQztJQURDLEtBQUssRUFBRTs0Q0FDd0I7QUFMckIsZ0JBQWdCO0lBSjVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztHQUNXLGdCQUFnQixDQTBCNUI7U0ExQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBJbnB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ29sJztcbmltcG9ydCB7IFNvdXJjZVZlY3RvckNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlcy92ZWN0b3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWZlYXR1cmUnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIEZlYXR1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnZmVhdHVyZSc7XG4gIHB1YmxpYyBpbnN0YW5jZTogRmVhdHVyZTtcblxuICBASW5wdXQoKVxuICBpZDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogU291cmNlVmVjdG9yQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgRmVhdHVyZSgpO1xuICAgIGlmICh0aGlzLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0SWQodGhpcy5pZCk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5hZGRGZWF0dXJlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLnJlbW92ZUZlYXR1cmUodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0SWQodGhpcy5pZCk7XG4gICAgfVxuICB9XG59XG4iXX0=