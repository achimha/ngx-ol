import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
let ModifyInteractionComponent = class ModifyInteractionComponent {
    constructor(map) {
        this.map = map;
        this.modifyEnd = new EventEmitter();
        this.modifyStart = new EventEmitter();
        this.olChange = new EventEmitter();
        this.olChangeActive = new EventEmitter();
        this.propertyChange = new EventEmitter();
    }
    ngOnInit() {
        this.instance = new Modify(this);
        this.instance.on('change', (event) => this.olChange.emit(event));
        this.instance.on('change:active', (event) => this.olChangeActive.emit(event));
        this.instance.on('propertychange', (event) => this.propertyChange.emit(event));
        this.instance.on('modifyend', (event) => this.modifyEnd.emit(event));
        this.instance.on('modifystart', (event) => this.modifyStart.emit(event));
        this.map.instance.addInteraction(this.instance);
    }
    ngOnDestroy() {
        this.map.instance.removeInteraction(this.instance);
    }
};
ModifyInteractionComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], ModifyInteractionComponent.prototype, "condition", void 0);
__decorate([
    Input()
], ModifyInteractionComponent.prototype, "deleteCondition", void 0);
__decorate([
    Input()
], ModifyInteractionComponent.prototype, "pixelTolerance", void 0);
__decorate([
    Input()
], ModifyInteractionComponent.prototype, "style", void 0);
__decorate([
    Input()
], ModifyInteractionComponent.prototype, "features", void 0);
__decorate([
    Input()
], ModifyInteractionComponent.prototype, "wrapX", void 0);
__decorate([
    Input()
], ModifyInteractionComponent.prototype, "source", void 0);
__decorate([
    Output()
], ModifyInteractionComponent.prototype, "modifyEnd", void 0);
__decorate([
    Output()
], ModifyInteractionComponent.prototype, "modifyStart", void 0);
__decorate([
    Output()
], ModifyInteractionComponent.prototype, "olChange", void 0);
__decorate([
    Output()
], ModifyInteractionComponent.prototype, "olChangeActive", void 0);
__decorate([
    Output()
], ModifyInteractionComponent.prototype, "propertyChange", void 0);
ModifyInteractionComponent = __decorate([
    Component({
        selector: 'aol-interaction-modify',
        template: ''
    })
], ModifyInteractionComponent);
export { ModifyInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vbC8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmFjdGlvbnMvbW9kaWZ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVl4QyxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQTZCckMsWUFBb0IsR0FBaUI7UUFBakIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVZyQyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUU1QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFOUMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFFM0MsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRWpELG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQUVULENBQUM7SUFFekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0YsQ0FBQTs7WUFmMEIsWUFBWTs7QUF6QnJDO0lBREMsS0FBSyxFQUFFOzZEQUNjO0FBRXRCO0lBREMsS0FBSyxFQUFFO21FQUNvQjtBQUU1QjtJQURDLEtBQUssRUFBRTtrRUFDZ0I7QUFFeEI7SUFEQyxLQUFLLEVBQUU7eURBQ2dDO0FBRXhDO0lBREMsS0FBSyxFQUFFOzREQUNzQjtBQUU5QjtJQURDLEtBQUssRUFBRTt5REFDUTtBQUVoQjtJQURDLEtBQUssRUFBRTswREFDUTtBQUdoQjtJQURDLE1BQU0sRUFBRTs2REFDbUM7QUFFNUM7SUFEQyxNQUFNLEVBQUU7K0RBQ3FDO0FBRTlDO0lBREMsTUFBTSxFQUFFOzREQUNrQztBQUUzQztJQURDLE1BQU0sRUFBRTtrRUFDd0M7QUFFakQ7SUFEQyxNQUFNLEVBQUU7a0VBQ3dDO0FBM0J0QywwQkFBMEI7SUFKdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7R0FDVywwQkFBMEIsQ0E0Q3RDO1NBNUNZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RpZnkgfSBmcm9tICdvbC9pbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBGZWF0dXJlIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tICdvbC9zb3VyY2UnO1xuaW1wb3J0IHsgTW9kaWZ5RXZlbnQgfSBmcm9tICdvbC9pbnRlcmFjdGlvbi9Nb2RpZnknO1xuaW1wb3J0IHsgU3R5bGVGdW5jdGlvbiB9IGZyb20gJ29sL3N0eWxlL1N0eWxlJztcbmltcG9ydCB7IENvbmRpdGlvbiB9IGZyb20gJ29sL2V2ZW50cy9jb25kaXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtaW50ZXJhY3Rpb24tbW9kaWZ5JyxcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBNb2RpZnlJbnRlcmFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgaW5zdGFuY2U6IE1vZGlmeTtcblxuICBASW5wdXQoKVxuICBjb25kaXRpb24/OiBDb25kaXRpb247XG4gIEBJbnB1dCgpXG4gIGRlbGV0ZUNvbmRpdGlvbj86IENvbmRpdGlvbjtcbiAgQElucHV0KClcbiAgcGl4ZWxUb2xlcmFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHN0eWxlPzogU3R5bGUgfCBTdHlsZVtdIHwgU3R5bGVGdW5jdGlvbjtcbiAgQElucHV0KClcbiAgZmVhdHVyZXM6IENvbGxlY3Rpb248RmVhdHVyZT47XG4gIEBJbnB1dCgpXG4gIHdyYXBYPzogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc291cmNlPzogVmVjdG9yO1xuXG4gIEBPdXRwdXQoKVxuICBtb2RpZnlFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgbW9kaWZ5U3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgb2xDaGFuZ2VBY3RpdmUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgcHJvcGVydHlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vZGlmeUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBNYXBDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBNb2RpZnkodGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5vbENoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOmFjdGl2ZScsIChldmVudDogTW9kaWZ5RXZlbnQpID0+IHRoaXMub2xDaGFuZ2VBY3RpdmUuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Byb3BlcnR5Y2hhbmdlJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5wcm9wZXJ0eUNoYW5nZS5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignbW9kaWZ5ZW5kJywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5tb2RpZnlFbmQuZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ21vZGlmeXN0YXJ0JywgKGV2ZW50OiBNb2RpZnlFdmVudCkgPT4gdGhpcy5tb2RpZnlTdGFydC5lbWl0KGV2ZW50KSk7XG4gICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkSW50ZXJhY3Rpb24odGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVJbnRlcmFjdGlvbih0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuIl19