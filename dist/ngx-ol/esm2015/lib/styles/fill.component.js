import { Component, Input, Optional } from '@angular/core';
import { Fill } from 'ol/style';
import { StyleComponent } from './style.component';
import { StyleCircleComponent } from './circle.component';
import { StyleTextComponent } from './text.component';
export class StyleFillComponent {
    constructor(styleHost, styleCircleHost, styleTextHost) {
        if (!styleHost) {
            throw new Error('aol-style-stroke must be a descendant of aol-style');
        }
        if (!!styleTextHost) {
            this.host = styleTextHost;
        }
        else if (!!styleCircleHost) {
            this.host = styleCircleHost;
        }
        else {
            this.host = styleHost;
        }
        // console.log('creating aol-style-fill with: ', this);
    }
    ngOnInit() {
        // console.log('creating ol.style.Fill instance with: ', this);
        this.instance = new Fill(this);
        switch (this.host.componentType) {
            case 'style':
                this.host.instance.setFill(this.instance);
                // console.log('setting ol.style instance\'s fill:', this.host);
                break;
            case 'style-text':
                this.host.instance.setFill(this.instance);
                break;
            case 'style-circle':
                this.host.fill = this.instance;
                // console.log('setting ol.style.circle instance\'s fill:', this.host);
                break;
            default:
                throw new Error('unknown host type: ' + this.host);
            // break;
        }
    }
    ngOnChanges(changes) {
        if (!this.instance) {
            return;
        }
        if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
        }
        this.host.update();
        // console.log('changes detected in aol-style-fill, setting new color: ', changes);
    }
}
StyleFillComponent.decorators = [
    { type: Component, args: [{
                selector: 'aol-style-fill',
                template: ` <div class="aol-style-fill"></div> `
            },] }
];
StyleFillComponent.ctorParameters = () => [
    { type: StyleComponent, decorators: [{ type: Optional }] },
    { type: StyleCircleComponent, decorators: [{ type: Optional }] },
    { type: StyleTextComponent, decorators: [{ type: Optional }] }
];
StyleFillComponent.propDecorators = {
    color: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGltaGEvUHJvamVjdHMvbmd4LW9sL3Byb2plY3RzL25neC1vbC9zcmMvIiwic291cmNlcyI6WyJsaWIvc3R5bGVzL2ZpbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFRdEQsTUFBTSxPQUFPLGtCQUFrQjtJQVE3QixZQUNjLFNBQXlCLEVBQ3pCLGVBQXFDLEVBQ3JDLGFBQWlDO1FBRTdDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7U0FDM0I7YUFBTSxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO1FBQ0QsdURBQXVEO0lBQ3pELENBQUM7SUFFRCxRQUFRO1FBQ04sK0RBQStEO1FBQy9ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUMvQixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsZ0VBQWdFO2dCQUNoRSxNQUFNO1lBQ1IsS0FBSyxZQUFZO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLE1BQU07WUFDUixLQUFLLGNBQWM7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLHVFQUF1RTtnQkFDdkUsTUFBTTtZQUNSO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELFNBQVM7U0FDVjtJQUNILENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLG1GQUFtRjtJQUNyRixDQUFDOzs7WUE1REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxzQ0FBc0M7YUFDakQ7OztZQVRRLGNBQWMsdUJBbUJsQixRQUFRO1lBbEJKLG9CQUFvQix1QkFtQnhCLFFBQVE7WUFsQkosa0JBQWtCLHVCQW1CdEIsUUFBUTs7O29CQU5WLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPcHRpb25hbCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbGwgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlQ2lyY2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jaXJjbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0eWxlVGV4dENvbXBvbmVudCB9IGZyb20gJy4vdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdvbC9jb2xvcic7XG5pbXBvcnQgeyBDb2xvckxpa2UgfSBmcm9tICdvbC9jb2xvcmxpa2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhb2wtc3R5bGUtZmlsbCcsXG4gIHRlbXBsYXRlOiBgIDxkaXYgY2xhc3M9XCJhb2wtc3R5bGUtZmlsbFwiPjwvZGl2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBTdHlsZUZpbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8qIHRoZSB0eXBpbmdzIGRvIG5vdCBoYXZlIHRoZSBzZXR0ZXJzICovXG4gIHByaXZhdGUgaG9zdDogLypTdHlsZUNvbXBvbmVudHxTdHlsZUNpcmNsZUNvbXBvbmVudHxTdHlsZVRleHRDb21wb25lbnQqLyBhbnk7XG4gIHB1YmxpYyBpbnN0YW5jZTogRmlsbDtcblxuICBASW5wdXQoKVxuICBjb2xvcjogQ29sb3IgfCBDb2xvckxpa2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgc3R5bGVIb3N0OiBTdHlsZUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBzdHlsZUNpcmNsZUhvc3Q6IFN0eWxlQ2lyY2xlQ29tcG9uZW50LFxuICAgIEBPcHRpb25hbCgpIHN0eWxlVGV4dEhvc3Q6IFN0eWxlVGV4dENvbXBvbmVudFxuICApIHtcbiAgICBpZiAoIXN0eWxlSG9zdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhb2wtc3R5bGUtc3Ryb2tlIG11c3QgYmUgYSBkZXNjZW5kYW50IG9mIGFvbC1zdHlsZScpO1xuICAgIH1cbiAgICBpZiAoISFzdHlsZVRleHRIb3N0KSB7XG4gICAgICB0aGlzLmhvc3QgPSBzdHlsZVRleHRIb3N0O1xuICAgIH0gZWxzZSBpZiAoISFzdHlsZUNpcmNsZUhvc3QpIHtcbiAgICAgIHRoaXMuaG9zdCA9IHN0eWxlQ2lyY2xlSG9zdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ob3N0ID0gc3R5bGVIb3N0O1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgYW9sLXN0eWxlLWZpbGwgd2l0aDogJywgdGhpcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRpbmcgb2wuc3R5bGUuRmlsbCBpbnN0YW5jZSB3aXRoOiAnLCB0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlID0gbmV3IEZpbGwodGhpcyk7XG4gICAgc3dpdGNoICh0aGlzLmhvc3QuY29tcG9uZW50VHlwZSkge1xuICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0RmlsbCh0aGlzLmluc3RhbmNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgb2wuc3R5bGUgaW5zdGFuY2VcXCdzIGZpbGw6JywgdGhpcy5ob3N0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHlsZS10ZXh0JzpcbiAgICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldEZpbGwodGhpcy5pbnN0YW5jZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3R5bGUtY2lyY2xlJzpcbiAgICAgICAgdGhpcy5ob3N0LmZpbGwgPSB0aGlzLmluc3RhbmNlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBvbC5zdHlsZS5jaXJjbGUgaW5zdGFuY2VcXCdzIGZpbGw6JywgdGhpcy5ob3N0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gaG9zdCB0eXBlOiAnICsgdGhpcy5ob3N0KTtcbiAgICAgIC8vIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuY29sb3IpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uuc2V0Q29sb3IoY2hhbmdlcy5jb2xvci5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QudXBkYXRlKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLXN0eWxlLWZpbGwsIHNldHRpbmcgbmV3IGNvbG9yOiAnLCBjaGFuZ2VzKTtcbiAgfVxufVxuIl19