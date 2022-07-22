import { Component, Input, Host } from '@angular/core';
import { Icon } from 'ol/style';
// TODO https://github.com/openlayers/openlayers/issues/12694
// import IconAnchorUnits from 'ol/style/IconAnchorUnits';
// import IconOrigin from 'ol/style/IconOrigin';
import { StyleComponent } from './style.component';
export class StyleIconComponent {
    constructor(host) {
        this.host = host;
    }
    ngOnInit() {
        // console.log('creating ol.style.Icon instance with: ', this);
        this.instance = new Icon(this);
        this.host.instance.setImage(this.instance);
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.opacity) {
            this.instance.setOpacity(changes.opacity.currentValue);
        }
        if (changes.rotation) {
            this.instance.setRotation(changes.rotation.currentValue);
        }
        if (changes.scale) {
            this.instance.setScale(changes.scale.currentValue);
        }
        if (changes.src) {
            this.instance = new Icon(this);
            this.host.instance.setImage(this.instance);
        }
        this.host.update();
        // console.log('changes detected in aol-style-icon: ', changes);
    }
}
StyleIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-icon',
                template: ` <div class="aol-style-icon"></div> `
            },] }
];
StyleIconComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Host }] }
];
StyleIconComponent.propDecorators = {
    anchor: [{ type: Input }],
    anchorXUnits: [{ type: Input }],
    anchorYUnits: [{ type: Input }],
    anchorOrigin: [{ type: Input }],
    color: [{ type: Input }],
    crossOrigin: [{ type: Input }],
    img: [{ type: Input }],
    offset: [{ type: Input }],
    offsetOrigin: [{ type: Input }],
    opacity: [{ type: Input }],
    scale: [{ type: Input }],
    snapToPixel: [{ type: Input }],
    rotateWithView: [{ type: Input }],
    rotation: [{ type: Input }],
    size: [{ type: Input }],
    imgSize: [{ type: Input }],
    src: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGltaGEvUHJvamVjdHMvbmd4LW9sL3Byb2plY3RzL25neC1vbC9zcmMvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVoQyw2REFBNkQ7QUFDN0QsMERBQTBEO0FBQzFELGdEQUFnRDtBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQsTUFBTSxPQUFPLGtCQUFrQjtJQXNDN0IsWUFBNEIsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7SUFBRyxDQUFDO0lBRXBELFFBQVE7UUFDTiwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMxRDtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQixnRUFBZ0U7SUFDbEUsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOzs7WUFMUSxjQUFjLHVCQTRDUixJQUFJOzs7cUJBbkNoQixLQUFLOzJCQUVMLEtBQUs7MkJBRUwsS0FBSzsyQkFFTCxLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSztrQkFFTCxLQUFLO3FCQUVMLEtBQUs7MkJBRUwsS0FBSztzQkFFTCxLQUFLO29CQUVMLEtBQUs7MEJBRUwsS0FBSzs2QkFFTCxLQUFLO3VCQUVMLEtBQUs7bUJBRUwsS0FBSztzQkFFTCxLQUFLO2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ29sL3N0eWxlJztcblxuLy8gVE9ETyBodHRwczovL2dpdGh1Yi5jb20vb3BlbmxheWVycy9vcGVubGF5ZXJzL2lzc3Vlcy8xMjY5NFxuLy8gaW1wb3J0IEljb25BbmNob3JVbml0cyBmcm9tICdvbC9zdHlsZS9JY29uQW5jaG9yVW5pdHMnO1xuLy8gaW1wb3J0IEljb25PcmlnaW4gZnJvbSAnb2wvc3R5bGUvSWNvbk9yaWdpbic7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLXN0eWxlLWljb24nLFxuICB0ZW1wbGF0ZTogYCA8ZGl2IGNsYXNzPVwiYW9sLXN0eWxlLWljb25cIj48L2Rpdj4gYCxcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgaW5zdGFuY2U6IEljb247XG5cbiAgQElucHV0KClcbiAgYW5jaG9yOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBhbmNob3JYVW5pdHM6IHN0cmluZzsgLy8gVE9ETyBJY29uQW5jaG9yVW5pdHM7XG4gIEBJbnB1dCgpXG4gIGFuY2hvcllVbml0czogc3RyaW5nOyAvLyBUT0RPIEljb25BbmNob3JVbml0cztcbiAgQElucHV0KClcbiAgYW5jaG9yT3JpZ2luOiBzdHJpbmc7IC8vIEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgY3Jvc3NPcmlnaW46IHN0cmluZzsgLy8gSWNvbk9yaWdpbjtcbiAgQElucHV0KClcbiAgaW1nOiBIVE1MQ2FudmFzRWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQ7XG4gIEBJbnB1dCgpXG4gIG9mZnNldDogW251bWJlciwgbnVtYmVyXTtcbiAgQElucHV0KClcbiAgb2Zmc2V0T3JpZ2luOiBzdHJpbmc7IC8vIEljb25PcmlnaW47XG4gIEBJbnB1dCgpXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc2NhbGU6IG51bWJlcjtcbiAgQElucHV0KClcbiAgc25hcFRvUGl4ZWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJvdGF0ZVdpdGhWaWV3OiBib29sZWFuO1xuICBASW5wdXQoKVxuICByb3RhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKVxuICBzaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBpbWdTaXplOiBbbnVtYmVyLCBudW1iZXJdO1xuICBASW5wdXQoKVxuICBzcmM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgaG9zdDogU3R5bGVDb21wb25lbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NyZWF0aW5nIG9sLnN0eWxlLkljb24gaW5zdGFuY2Ugd2l0aDogJywgdGhpcyk7XG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBJY29uKHRoaXMpO1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5zZXRJbWFnZSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub3BhY2l0eSkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRPcGFjaXR5KGNoYW5nZXMub3BhY2l0eS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5yb3RhdGlvbikge1xuICAgICAgdGhpcy5pbnN0YW5jZS5zZXRSb3RhdGlvbihjaGFuZ2VzLnJvdGF0aW9uLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnNjYWxlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldFNjYWxlKGNoYW5nZXMuc2NhbGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuc3JjKSB7XG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEljb24odGhpcyk7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0SW1hZ2UodGhpcy5pbnN0YW5jZSk7XG4gICAgfVxuICAgIHRoaXMuaG9zdC51cGRhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2hhbmdlcyBkZXRlY3RlZCBpbiBhb2wtc3R5bGUtaWNvbjogJywgY2hhbmdlcyk7XG4gIH1cbn1cbiJdfQ==