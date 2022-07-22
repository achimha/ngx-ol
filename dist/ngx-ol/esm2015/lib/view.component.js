import { Component, Input, EventEmitter, Output } from '@angular/core';
import View from 'ol/View';
import { MapComponent } from './map.component';
export class ViewComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'view';
        this.zoomAnimation = false;
        this.changeZoom = new EventEmitter();
        this.changeResolution = new EventEmitter();
        this.changeCenter = new EventEmitter();
    }
    ngOnInit() {
        // console.log('creating ol.View instance with: ', this);
        this.instance = new View(this);
        this.host.instance.setView(this.instance);
        // TODO this.instance.on('change:zoom', (event: ObjectEvent) => this.changeZoom.emit(event));
        this.instance.on('change:resolution', (event) => this.changeResolution.emit(event));
        this.instance.on('change:center', (event) => this.changeCenter.emit(event));
    }
    ngOnChanges(changes) {
        const properties = {};
        if (!this.instance) {
            return;
        }
        for (const key in changes) {
            if (changes.hasOwnProperty(key)) {
                switch (key) {
                    case 'zoom':
                        /** Work-around: setting the zoom via setProperties does not work. */
                        if (this.zoomAnimation) {
                            this.instance.animate({ zoom: changes[key].currentValue });
                        }
                        else {
                            this.instance.setZoom(changes[key].currentValue);
                        }
                        break;
                    case 'projection':
                        this.instance = new View(this);
                        this.host.instance.setView(this.instance);
                        break;
                    case 'center':
                        /** Work-around: setting the center via setProperties does not work. */
                        this.instance.setCenter(changes[key].currentValue);
                        break;
                    default:
                        break;
                }
                properties[key] = changes[key].currentValue;
            }
        }
        // console.log('changes detected in aol-view, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    }
    ngOnDestroy() {
        // console.log('removing aol-view');
    }
}
ViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-view',
                template: ` <ng-content></ng-content> `
            },] }
];
ViewComponent.ctorParameters = () => [
    { type: MapComponent }
];
ViewComponent.propDecorators = {
    constrainRotation: [{ type: Input }],
    enableRotation: [{ type: Input }],
    extent: [{ type: Input }],
    maxResolution: [{ type: Input }],
    minResolution: [{ type: Input }],
    maxZoom: [{ type: Input }],
    minZoom: [{ type: Input }],
    resolution: [{ type: Input }],
    resolutions: [{ type: Input }],
    rotation: [{ type: Input }],
    zoom: [{ type: Input }],
    zoomFactor: [{ type: Input }],
    center: [{ type: Input }],
    projection: [{ type: Input }],
    constrainOnlyCenter: [{ type: Input }],
    smoothExtentConstraint: [{ type: Input }],
    constrainResolution: [{ type: Input }],
    smoothResolutionConstraint: [{ type: Input }],
    showFullExtent: [{ type: Input }],
    multiWorld: [{ type: Input }],
    zoomAnimation: [{ type: Input }],
    changeZoom: [{ type: Output }],
    changeResolution: [{ type: Output }],
    changeCenter: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGltaGEvUHJvamVjdHMvbmd4LW9sL3Byb2plY3RzL25neC1vbC9zcmMvIiwic291cmNlcyI6WyJsaWIvdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQStDLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBQzNCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVMvQyxNQUFNLE9BQU8sYUFBYTtJQXVEeEIsWUFBb0IsSUFBa0I7UUFBbEIsU0FBSSxHQUFKLElBQUksQ0FBYztRQXJEL0Isa0JBQWEsR0FBRyxNQUFNLENBQUM7UUE0QzlCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3RCLGVBQVUsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUV4RSxxQkFBZ0IsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUU5RSxpQkFBWSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDO0lBRWpDLENBQUM7SUFFMUMsUUFBUTtRQUNOLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUMsNkZBQTZGO1FBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUMsS0FBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFVBQVUsR0FBNkIsRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsUUFBUSxHQUFHLEVBQUU7b0JBQ1gsS0FBSyxNQUFNO3dCQUNULHFFQUFxRTt3QkFDckUsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFOzRCQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzt5QkFDNUQ7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO3lCQUNsRDt3QkFDRCxNQUFNO29CQUNSLEtBQUssWUFBWTt3QkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMxQyxNQUFNO29CQUNSLEtBQUssUUFBUTt3QkFDWCx1RUFBdUU7d0JBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDbkQsTUFBTTtvQkFDUjt3QkFDRSxNQUFNO2lCQUNUO2dCQUNELFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2FBQzdDO1NBQ0Y7UUFDRCxxRkFBcUY7UUFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1Qsb0NBQW9DO0lBQ3RDLENBQUM7OztZQTNHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7OztZQVJRLFlBQVk7OztnQ0FhbEIsS0FBSzs2QkFFTCxLQUFLO3FCQUVMLEtBQUs7NEJBRUwsS0FBSzs0QkFFTCxLQUFLO3NCQUVMLEtBQUs7c0JBRUwsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLEtBQUs7dUJBRUwsS0FBSzttQkFFTCxLQUFLO3lCQUVMLEtBQUs7cUJBRUwsS0FBSzt5QkFFTCxLQUFLO2tDQUVMLEtBQUs7cUNBRUwsS0FBSztrQ0FFTCxLQUFLO3lDQUVMLEtBQUs7NkJBRUwsS0FBSzt5QkFFTCxLQUFLOzRCQUdMLEtBQUs7eUJBR0wsTUFBTTsrQkFFTixNQUFNOzJCQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IFZpZXcgZnJvbSAnb2wvVmlldyc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2JqZWN0RXZlbnQgfSBmcm9tICdvbC9PYmplY3QnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICdvbC9jb29yZGluYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXZpZXcnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHVibGljIGluc3RhbmNlOiBWaWV3O1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICd2aWV3JztcblxuICBASW5wdXQoKVxuICBjb25zdHJhaW5Sb3RhdGlvbjogYm9vbGVhbiB8IG51bWJlcjtcbiAgQElucHV0KClcbiAgZW5hYmxlUm90YXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGV4dGVudDogRXh0ZW50O1xuICBASW5wdXQoKVxuICBtYXhSZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4Wm9vbTogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5ab29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgcmVzb2x1dGlvbnM6IG51bWJlcltdO1xuICBASW5wdXQoKVxuICByb3RhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICB6b29tOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIHpvb21GYWN0b3I6IG51bWJlcjtcbiAgQElucHV0KClcbiAgY2VudGVyOiBDb29yZGluYXRlO1xuICBASW5wdXQoKVxuICBwcm9qZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbnN0cmFpbk9ubHlDZW50ZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNtb290aEV4dGVudENvbnN0cmFpbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNvbnN0cmFpblJlc29sdXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHNtb290aFJlc29sdXRpb25Db25zdHJhaW50OiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzaG93RnVsbEV4dGVudDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbXVsdGlXb3JsZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICB6b29tQW5pbWF0aW9uID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIGNoYW5nZVpvb206IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlUmVzb2x1dGlvbjogRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T2JqZWN0RXZlbnQ+KCk7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VDZW50ZXI6IEV2ZW50RW1pdHRlcjxPYmplY3RFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9iamVjdEV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaG9zdDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGluZyBvbC5WaWV3IGluc3RhbmNlIHdpdGg6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlldyh0aGlzKTtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0Vmlldyh0aGlzLmluc3RhbmNlKTtcblxuICAgIC8vIFRPRE8gdGhpcy5pbnN0YW5jZS5vbignY2hhbmdlOnpvb20nLCAoZXZlbnQ6IE9iamVjdEV2ZW50KSA9PiB0aGlzLmNoYW5nZVpvb20uZW1pdChldmVudCkpO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2NoYW5nZTpyZXNvbHV0aW9uJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5jaGFuZ2VSZXNvbHV0aW9uLmVtaXQoZXZlbnQpKTtcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2U6Y2VudGVyJywgKGV2ZW50OiBPYmplY3RFdmVudCkgPT4gdGhpcy5jaGFuZ2VDZW50ZXIuZW1pdChldmVudCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgY2FzZSAnem9vbSc6XG4gICAgICAgICAgICAvKiogV29yay1hcm91bmQ6IHNldHRpbmcgdGhlIHpvb20gdmlhIHNldFByb3BlcnRpZXMgZG9lcyBub3Qgd29yay4gKi9cbiAgICAgICAgICAgIGlmICh0aGlzLnpvb21BbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5hbmltYXRlKHsgem9vbTogY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Wm9vbShjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Byb2plY3Rpb24nOlxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaWV3KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFZpZXcodGhpcy5pbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAgICAgLyoqIFdvcmstYXJvdW5kOiBzZXR0aW5nIHRoZSBjZW50ZXIgdmlhIHNldFByb3BlcnRpZXMgZG9lcyBub3Qgd29yay4gKi9cbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Q2VudGVyKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC12aWV3LCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC12aWV3Jyk7XG4gIH1cbn1cbiJdfQ==