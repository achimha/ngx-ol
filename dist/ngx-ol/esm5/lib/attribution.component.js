import * as tslib_1 from "tslib";
import { Component, ElementRef, OnInit } from '@angular/core';
var AttributionComponent = /** @class */ (function () {
    function AttributionComponent(elementRef) {
        this.elementRef = elementRef;
    }
    AttributionComponent.prototype.ngOnInit = function () {
        this.label = this.elementRef.nativeElement.innerHTML;
    };
    AttributionComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AttributionComponent = tslib_1.__decorate([
        Component({
            selector: 'aol-attribution',
            template: '<ng-content></ng-content>'
        })
    ], AttributionComponent);
    return AttributionComponent;
}());
export { AttributionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2F0dHJpYnV0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTlEO0lBR0UsOEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDO0lBRTlDLHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUN2RCxDQUFDOztnQkFKK0IsVUFBVTs7SUFIL0Isb0JBQW9CO1FBSmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDO09BQ1csb0JBQW9CLENBUWhDO0lBQUQsMkJBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtYXR0cmlidXRpb24nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGxhYmVsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGFiZWwgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pbm5lckhUTUw7XG4gIH1cbn1cbiJdfQ==