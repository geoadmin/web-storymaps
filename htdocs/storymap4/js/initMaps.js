// define colors
var fillColor = '#2d578b';
var highlightColor = 'red';

var selectedId = 2167;

var overviewLayer;
var detailedLayer;
var detailedMap;

var select, selectedFeature, selectStyle;

function initMaps() {

    var defaultStyle = {
        'Point': [new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: 'rgba(255,255,0,0.5)'
                }),
                radius: 5,
                stroke: new ol.style.Stroke({
                    color: '#ff0',
                    width: 1
                })
            })
        })],
        'MultiPoint': [new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: 'rgba(45,87,139,0.4)'
                }),
                radius: 8,
                stroke: new ol.style.Stroke({
                    color: '#2d578b',
                    width: 2
                })
            })
        })]
    };

    var selectStroke = new ol.style.Stroke({
        color: [255, 0, 0, 1],
        width: 3
    });

    var selectFill = new ol.style.Fill({
        color: [255, 0, 0, 0.75]
    });

    selectStyle = new ol.style.Style({
        fill: selectFill,
        stroke: selectStroke,
        image: new ol.style.Circle({
            radius: 10,
            fill: selectFill,
            stroke: selectStroke
        })
    });

    var nodataFill = new ol.style.Fill({
        color: [204, 204, 204, 0.75]
    });
    var nodataStroke = new ol.style.Stroke({
        color: [124, 124, 124, 1],
        width: 2
    });


    nodataStyle = new ol.style.Style({
        fill: nodataFill,
        stroke: nodataStroke,
        image: new ol.style.Circle({
            radius: 5,
            fill: nodataFill,
            stroke: nodataStroke
        })
    });


    var styleFunction = function(feature, resolution) {
        var featureStyleFunction = feature.getStyleFunction();
        if (featureStyleFunction) {
            return featureStyleFunction.call(feature, resolution);
        } else {
            if (feature.getProperties().nodata != undefined) {
                return [nodataStyle];
            } else {
                return defaultStyle[feature.getGeometry().getType()];


            }
        }
    };

    var vectorLayer = new ol.layer.Vector({
        source: new ol.source.GeoJSON({
            //projection: 'EPSG:21781',
            url: 'data/hydromessstationen.geojson'
        }),
        style: styleFunction
    });

    overviewLayer = vectorLayer;

    detailedLayer = new ol.layer.Vector({
        source: new ol.source.GeoJSON({
            //projection: 'EPSG:21781',
            url: 'data/hydromessstationen.geojson'
        }),
        style: selectStyle
    });


    var layer = ga.layer.create('ch.swisstopo.pixelkarte-farbe');
    var img = ga.layer.create('ch.swisstopo.swissimage');


    select = new ol.interaction.Select({
        style: selectStyle
    });


    var overView = new ga.Map({
        target: 'overviewMap',
        interactions: ol.interaction.defaults().extend([select]),
        layers: [layer, vectorLayer],
        view: new ol.View2D({
            resolution: 500,
            center: [670000, 160000]
        })
    });



    detailedMap = new ga.Map({
        target: 'detailMap',
        layers: [img, detailedLayer],
        view: new ol.View2D({
            resolution: 20,
            center: [670000, 160000]
        })
    });


    var flyTo = function(center) {
        var duration = 2000;
        var start = +new Date();
        var pan = ol.animation.pan({
            duration: duration,
            source: /** @type {ol.Coordinate} */ (detailedMap.getView().getCenter())
        });
        /* var bounce = ol.animation.bounce({
    duration: duration,
    resolution: 4 * detailedMap.getView().getResolution(),
    start: start
  }); */
        // detailedMap.beforeRender(pan);
        detailedMap.getView().setCenter(center);
    };


    var displayFeatureInfo = function(pixel) {



        var feature = overView.forEachFeatureAtPixel(pixel, function(feature, layer) {
            return feature;
        });
        if (feature) {
            selectedFeature = feature;
            selectedId = selectedFeature.get('nr');
            var center = selectedFeature.getGeometry().getExtent();
            flyTo(ol.extent.getCenter(center));
            updateChart(selectedId);

        }
        $('#' + overView.getTarget()).css({
            cursor: (feature) ? 'pointer' : ''
        });

    };

    $(overView.getViewport()).on('mousemove', function(evt) {
        var pixel = overView.getEventPixel(evt.originalEvent);
        $.debounce(250, displayFeatureInfo(pixel));
    });

    //overView.on('singleclick', function(evt) {console.log(evt.coordinate)});

}

// TODO

function zoomToFeature(selectedId) {

    var feature = getDetailFeatureFromId(selectedId);

    var extent = feature.getGeometry().getExtent();

    var extent = [extent[0] - 50, extent[1] - 50, extent[2] + 50, extent[3] + 50];

    detailedMap.getView().fitExtent(extent, [50, 50]);

}

function filteringOutLayer(ids, layer) {
    var source = layer.getSource();
    var features = source.getFeatures();

    for (var i = 0; i < features.length; i++) {
        var feat = features[i];
        var prop = feat.getProperties();
        if ($.inArray(prop.nr, ids) < 0) {
            source.removeFeature(feat);
        }
    }
}



function loadData() {

    var url = '/cgi-bin/hydro.cgi'; //data/sms.json

    var jqxhr = $.getJSON(url, function(data) {

        selection = data.mesPar;
        loadChart(data.mesPar);
        selectedId = data.strnrs[Math.floor(Math.random() * data.strnrs.length)];
        zoomToFeature(selectedId);
        updateChart(selectedId);

        filteringOutLayer(data.strnrs, overviewLayer);
        filteringOutLayer(data.strnrs, detailedLayer);

    }).fail(function() {
        console.log('error');
    });
}
