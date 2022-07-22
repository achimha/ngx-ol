import { Component, ContentChild, Input } from '@angular/core';
import { MapComponent } from './map.component';
import Overlay from 'ol/Overlay';
import { ContentComponent } from './content.component';
export class OverlayComponent {
    constructor(map) {
        this.map = map;
        this.componentType = 'overlay';
    }
    ngOnInit() {
        if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new Overlay(this);
            this.map.instance.addOverlay(this.instance);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
        }
    }
}
OverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-overlay',
                template: '<ng-content></ng-content>'
            },] }
];
OverlayComponent.ctorParameters = () => [
    { type: MapComponent }
];
OverlayComponent.propDecorators = {
    content: [{ type: ContentChild, args: [ContentComponent, { static: true },] }],
    id: [{ type: Input }],
    offset: [{ type: Input }],
    positioning: [{ type: Input }],
    stopEvent: [{ type: Input }],
    insertFirst: [{ type: Input }],
    autoPan: [{ type: Input }],
    autoPanAnimation: [{ type: Input }],
    autoPanMargin: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGltaGEvUHJvamVjdHMvbmd4LW9sL3Byb2plY3RzL25neC1vbC9zcmMvIiwic291cmNlcyI6WyJsaWIvb3ZlcmxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxPQUFvQyxNQUFNLFlBQVksQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU12RCxNQUFNLE9BQU8sZ0JBQWdCO0lBd0IzQixZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBdkJyQyxrQkFBYSxHQUFHLFNBQVMsQ0FBQztJQXVCYyxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSwyQkFBMkI7YUFDdEM7OztZQVBRLFlBQVk7OztzQkFZbEIsWUFBWSxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQkFHL0MsS0FBSztxQkFFTCxLQUFLOzBCQUVMLEtBQUs7d0JBRUwsS0FBSzswQkFFTCxLQUFLO3NCQUVMLEtBQUs7K0JBRUwsS0FBSzs0QkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCBPdmVybGF5LCB7IFBhbk9wdGlvbnMsIFBvc2l0aW9uaW5nIH0gZnJvbSAnb2wvT3ZlcmxheSc7XG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FvbC1vdmVybGF5JyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29tcG9uZW50VHlwZSA9ICdvdmVybGF5JztcbiAgaW5zdGFuY2U6IE92ZXJsYXk7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRlbnQ6IENvbnRlbnRDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgaWQ6IG51bWJlciB8IHN0cmluZztcbiAgQElucHV0KClcbiAgb2Zmc2V0OiBudW1iZXJbXTtcbiAgQElucHV0KClcbiAgcG9zaXRpb25pbmc6IFBvc2l0aW9uaW5nO1xuICBASW5wdXQoKVxuICBzdG9wRXZlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGluc2VydEZpcnN0OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBhdXRvUGFuOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBhdXRvUGFuQW5pbWF0aW9uOiBQYW5PcHRpb25zO1xuICBASW5wdXQoKVxuICBhdXRvUGFuTWFyZ2luOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IE1hcENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNvbnRlbnQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBPdmVybGF5KHRoaXMpO1xuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UuYWRkT3ZlcmxheSh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgdGhpcy5tYXAuaW5zdGFuY2UucmVtb3ZlT3ZlcmxheSh0aGlzLmluc3RhbmNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==