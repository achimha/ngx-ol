import { __decorate } from "tslib";
import { Component, ElementRef, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
var AttributionComponent = /** @class */ (function () {
    function AttributionComponent(elementRef) {
        this.elementRef = elementRef;
    }
    AttributionComponent.prototype.ngOnInit = function () {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    };
    AttributionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AttributionComponent = __decorate([
        Component({
            selector: 'aol-attribution',
            template: '<ng-content></ng-content>'
        })
    ], AttributionComponent);
    return AttributionComponent;
}());
export { AttributionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQU16QztJQUlFLDhCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUU5Qyx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkFMK0IsVUFBVTs7SUFKL0Isb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDO09BQ1csb0JBQW9CLENBVWhDO0lBQUQsMkJBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXR0cmlidXRpb24gfSBmcm9tICdvbC9jb250cm9sJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWF0dHJpYnV0aW9uJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXR0cmlidXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpbnN0YW5jZTogQXR0cmlidXRpb247XG4gIGh0bWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5odG1sID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgQXR0cmlidXRpb24odGhpcyk7XG4gIH1cbn1cbiJdfQ==