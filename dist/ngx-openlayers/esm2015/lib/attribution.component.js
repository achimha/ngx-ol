import { __decorate } from "tslib";
import { Component, ElementRef, OnInit } from '@angular/core';
import { Attribution } from 'ol/control';
let AttributionComponent = class AttributionComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.html = this.elementRef.nativeElement.innerHTML;
        this.instance = new Attribution(this);
    }
};
AttributionComponent.ctorParameters = () => [
    { type: ElementRef }
];
AttributionComponent = __decorate([
    Component({
        selector: 'aol-attribution',
        template: '<ng-content></ng-content>'
    })
], AttributionComponent);
export { AttributionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvYXR0cmlidXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQU16QyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUkvQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUU5QyxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0YsQ0FBQTs7WUFOaUMsVUFBVTs7QUFKL0Isb0JBQW9CO0lBSmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFLDJCQUEyQjtLQUN0QyxDQUFDO0dBQ1csb0JBQW9CLENBVWhDO1NBVlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF0dHJpYnV0aW9uIH0gZnJvbSAnb2wvY29udHJvbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1hdHRyaWJ1dGlvbicsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW5zdGFuY2U6IEF0dHJpYnV0aW9uO1xuICBodG1sOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTDtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEF0dHJpYnV0aW9uKHRoaXMpO1xuICB9XG59XG4iXX0=