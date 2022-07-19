import { __decorate } from "tslib";
import { Input } from '@angular/core';
var LayerComponent = /** @class */ (function () {
    function LayerComponent(host) {
        this.host = host;
        this.componentType = 'layer';
    }
    LayerComponent.prototype.ngOnInit = function () {
        if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
        }
        if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
        }
        this.host.instance.getLayers().push(this.instance);
    };
    LayerComponent.prototype.ngOnDestroy = function () {
        this.host.instance.getLayers().remove(this.instance);
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
                properties[key] = changes[key].currentValue;
                if (key === 'prerender') {
                    this.instance.un('prerender', changes[key].previousValue);
                    this.instance.on('prerender', changes[key].currentValue);
                }
                if (key === 'postrender') {
                    this.instance.un('postrender', changes[key].previousValue);
                    this.instance.on('postrender', changes[key].currentValue);
                }
            }
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    __decorate([
        Input()
    ], LayerComponent.prototype, "opacity", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "visible", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "extent", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "zIndex", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "minResolution", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "maxResolution", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "prerender", void 0);
    __decorate([
        Input()
    ], LayerComponent.prototype, "postrender", void 0);
    return LayerComponent;
}());
export { LayerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9wZW5sYXllcnMvIiwic291cmNlcyI6WyJsaWIvbGF5ZXJzL2xheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQyxLQUFLLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBTW5GO0lBc0JFLHdCQUFzQixJQUF3QztRQUF4QyxTQUFJLEdBQUosSUFBSSxDQUFvQztRQXBCdkQsa0JBQWEsR0FBRyxPQUFPLENBQUM7SUFvQmtDLENBQUM7SUFFbEUsaUNBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBTSxVQUFVLEdBQTZCLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFDRCxLQUFLLElBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO2dCQUM1QyxJQUFJLEdBQUcsS0FBSyxXQUFXLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzFEO2dCQUNELElBQUksR0FBRyxLQUFLLFlBQVksRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGO1FBQ0Qsc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBckREO1FBREMsS0FBSyxFQUFFO21EQUNRO0lBRWhCO1FBREMsS0FBSyxFQUFFO21EQUNTO0lBRWpCO1FBREMsS0FBSyxFQUFFO2tEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7a0RBQ087SUFFZjtRQURDLEtBQUssRUFBRTt5REFDYztJQUV0QjtRQURDLEtBQUssRUFBRTt5REFDYztJQUd0QjtRQURDLEtBQUssRUFBRTtxREFDd0I7SUFFaEM7UUFEQyxLQUFLLEVBQUU7c0RBQ3lCO0lBdUNuQyxxQkFBQztDQUFBLEFBM0RELElBMkRDO1NBM0RxQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQsIE9uQ2hhbmdlcywgSW5wdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnb2wvZXZlbnRzJztcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4uL21hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5ZXJHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbGF5ZXJncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0ZW50IH0gZnJvbSAnb2wvZXh0ZW50JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIExheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBpbnN0YW5jZTogYW55O1xuICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdsYXllcic7XG5cbiAgQElucHV0KClcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBASW5wdXQoKVxuICB2aXNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBleHRlbnQ6IEV4dGVudDtcbiAgQElucHV0KClcbiAgekluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1pblJlc29sdXRpb246IG51bWJlcjtcbiAgQElucHV0KClcbiAgbWF4UmVzb2x1dGlvbjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHByZXJlbmRlcjogKGV2dDogRXZlbnQpID0+IHZvaWQ7XG4gIEBJbnB1dCgpXG4gIHBvc3RyZW5kZXI6IChldnQ6IEV2ZW50KSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBob3N0OiBNYXBDb21wb25lbnQgfCBMYXllckdyb3VwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnByZXJlbmRlciAhPT0gbnVsbCAmJiB0aGlzLnByZXJlbmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwcmVyZW5kZXInLCB0aGlzLnByZXJlbmRlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnBvc3RyZW5kZXIgIT09IG51bGwgJiYgdGhpcy5wb3N0cmVuZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bvc3RyZW5kZXInLCB0aGlzLnBvc3RyZW5kZXIpO1xuICAgIH1cbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuZ2V0TGF5ZXJzKCkucHVzaCh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuaG9zdC5pbnN0YW5jZS5nZXRMYXllcnMoKS5yZW1vdmUodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgcHJvcGVydGllczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgcHJvcGVydGllc1trZXldID0gY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKGtleSA9PT0gJ3ByZXJlbmRlcicpIHtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLnVuKCdwcmVyZW5kZXInLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlcmVuZGVyJywgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gJ3Bvc3RyZW5kZXInKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncG9zdHJlbmRlcicsIGNoYW5nZXNba2V5XS5wcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMgZGV0ZWN0ZWQgaW4gYW9sLWxheWVyLCBzZXR0aW5nIG5ldyBwcm9wZXJ0aWVzOiAnLCBwcm9wZXJ0aWVzKTtcbiAgICB0aGlzLmluc3RhbmNlLnNldFByb3BlcnRpZXMocHJvcGVydGllcywgZmFsc2UpO1xuICB9XG59XG4iXX0=