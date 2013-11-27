

//********************************************************
//	Extent the filter funciton in order to obtain correct data
//
//  Based on OpenLayers.Filter.FeatureId Class 
//  https://github.com/openlayers/openlayers/blob/master/lib/OpenLayers/Filter/FeatureId.js
//
//
//********************************************************


OpenLayers.Filter.DataId = OpenLayers.Class(OpenLayers.Filter, {
    fids: null,
    type: "FID",
    initialize: function(options) {
        this.fids = [];
        OpenLayers.Filter.prototype.initialize.apply(this, [options]);
    },
    evaluate: function(feature) {
        for (var i=0, len=this.fids.length; i<len; i++) {
            var fid = feature.data.nr;
            if (fid == this.fids[i]) {
                return true;
            }
        }
        return false;
    },
    clone: function() {
        var filter = new OpenLayers.Filter.DataId();
        OpenLayers.Util.extend(filter, this);
        filter.fids = this.fids.slice();
        return filter;
    },
    CLASS_NAME: "OpenLayers.Filter.DataId"
});




