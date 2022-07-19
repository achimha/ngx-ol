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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW9sLyIsInNvdXJjZXMiOlsibGliL2xheWVycy9sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0MsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1uRjtJQXNCRSx3QkFBc0IsSUFBd0M7UUFBeEMsU0FBSSxHQUFKLElBQUksQ0FBb0M7UUFwQnZELGtCQUFhLEdBQUcsT0FBTyxDQUFDO0lBb0JrQyxDQUFDO0lBRWxFLGlDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQU0sVUFBVSxHQUE2QixFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsT0FBTztTQUNSO1FBQ0QsS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztnQkFDNUMsSUFBSSxHQUFHLEtBQUssV0FBVyxFQUFFO29CQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUMxRDtnQkFDRCxJQUFJLEdBQUcsS0FBSyxZQUFZLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtRQUNELHNGQUFzRjtRQUN0RixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQXJERDtRQURDLEtBQUssRUFBRTttREFDUTtJQUVoQjtRQURDLEtBQUssRUFBRTttREFDUztJQUVqQjtRQURDLEtBQUssRUFBRTtrREFDTztJQUVmO1FBREMsS0FBSyxFQUFFO2tEQUNPO0lBRWY7UUFEQyxLQUFLLEVBQUU7eURBQ2M7SUFFdEI7UUFEQyxLQUFLLEVBQUU7eURBQ2M7SUFHdEI7UUFEQyxLQUFLLEVBQUU7cURBQ3dCO0lBRWhDO1FBREMsS0FBSyxFQUFFO3NEQUN5QjtJQXVDbkMscUJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQTNEcUIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJ29sL2V2ZW50cyc7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IExheWVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2xheWVyZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IEV4dGVudCB9IGZyb20gJ29sL2V4dGVudCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgaW5zdGFuY2U6IGFueTtcbiAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnbGF5ZXInO1xuXG4gIEBJbnB1dCgpXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KClcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgZXh0ZW50OiBFeHRlbnQ7XG4gIEBJbnB1dCgpXG4gIHpJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKVxuICBtaW5SZXNvbHV0aW9uOiBudW1iZXI7XG4gIEBJbnB1dCgpXG4gIG1heFJlc29sdXRpb246IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwcmVyZW5kZXI6IChldnQ6IEV2ZW50KSA9PiB2b2lkO1xuICBASW5wdXQoKVxuICBwb3N0cmVuZGVyOiAoZXZ0OiBFdmVudCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaG9zdDogTWFwQ29tcG9uZW50IHwgTGF5ZXJHcm91cENvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcmVyZW5kZXIgIT09IG51bGwgJiYgdGhpcy5wcmVyZW5kZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnN0YW5jZS5vbigncHJlcmVuZGVyJywgdGhpcy5wcmVyZW5kZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wb3N0cmVuZGVyICE9PSBudWxsICYmIHRoaXMucG9zdHJlbmRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLm9uKCdwb3N0cmVuZGVyJywgdGhpcy5wb3N0cmVuZGVyKTtcbiAgICB9XG4gICAgdGhpcy5ob3N0Lmluc3RhbmNlLmdldExheWVycygpLnB1c2godGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmhvc3QuaW5zdGFuY2UuZ2V0TGF5ZXJzKCkucmVtb3ZlKHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IHByb3BlcnRpZXM6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHByb3BlcnRpZXNba2V5XSA9IGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWU7XG4gICAgICAgIGlmIChrZXkgPT09ICdwcmVyZW5kZXInKSB7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS51bigncHJlcmVuZGVyJywgY2hhbmdlc1trZXldLnByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2Uub24oJ3ByZXJlbmRlcicsIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09ICdwb3N0cmVuZGVyJykge1xuICAgICAgICAgIHRoaXMuaW5zdGFuY2UudW4oJ3Bvc3RyZW5kZXInLCBjaGFuZ2VzW2tleV0ucHJldmlvdXNWYWx1ZSk7XG4gICAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigncG9zdHJlbmRlcicsIGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjaGFuZ2VzIGRldGVjdGVkIGluIGFvbC1sYXllciwgc2V0dGluZyBuZXcgcHJvcGVydGllczogJywgcHJvcGVydGllcyk7XG4gICAgdGhpcy5pbnN0YW5jZS5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGZhbHNlKTtcbiAgfVxufVxuIl19