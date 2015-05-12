var map;





function init() {

    map = new ga.Map({
        target: 'map',
        view: new ol.View({
            resolution: 250,
            center: [720000, 188000]
        })
    });


    // Create a background layer
    var tlm = ga.layer.create('ch.swisstopo.swisstlm3d-karte-grau');
    var boundaries = ga.layer.create('ch.swisstopo.swissboundaries3d-land-flaeche.fill');



    map.addLayer(tlm);
    map.addLayer(boundaries);


    var lang = 'de';
    var requestedLang = i18n.lng();
    if ($.inArray(requestedLang, ['de', 'fr', 'it', 'en']) > 0) {
        lang = requestedLang;
    }


    var styleCache = {};

    var textStyleFunction = function(feature, resolution) {

        var style = null;

        if (resolution < 50) {

	    var lang_code = feature.get('lang');
        var label = feature.get('name');

        var text = new ol.style.Text({
            font: '12px Calibri,sans-serif',
            text: label,
            baseline: 'ideographic',
            align: 'right',
            offsetX: 40,
            fill: new ol.style.Fill({
                color: '#000'
            }),
            stroke: new ol.style.Stroke({
                color: '#fff',
                width: 3
            })
        });


        var styles = {
            'de': [new ol.style.Style({
                text: text
            })]
        };


        var style = styles['de'];

        }

        return style;
    };

	
	
    var styleFunction = function(feature, resolution) {
	
	    var lang_code = feature.get('lang');
        var radius = 7;
        var colours = {
            "b": 'rgba(0,0,250,0.7)',
            "gr": 'rgba(102,204,102,0.8)',
            "s": 'rgba(0,0,0,1.0)',
            "r": 'rgba(255,0,51,0.7)',
            "w": 'rgba(255, 255,255,1.0)',
            "ge": 'rgba(255,204,0,0.8)'
        };

        var colour_code = feature.get('colour');
        var colour = colours[colour_code];
        var fill = colour;
        /*var stroke = new ol.style.Stroke({
            color: 'rgba(0,0,0.0.5)',
            width: 1
        });  */


        /* var text = new ol.style.Text({
            font: '12px Calibri,sans-serif',
            text: getText(feature, resolution),
            baseline: 'ideographic',
            align: 'right',
            offsetX: 40,
            fill: new ol.style.Fill({
                color: '#000'
            }),
            stroke: new ol.style.Stroke({
                color: '#fff',
                width: 3
            })
        }); */


        var stroke = new ol.style.Stroke({
            color: '#aaa',
            width: 1
        });
        var fill = new ol.style.Fill({
            color: colour
        });

        var styles = {
            'de': [new ol.style.Style({
                //text: text,
                image: new ol.style.RegularShape(
                    ({
                        fill: fill,
                        stroke: stroke,
                        points: 4,
                        radius: radius,
                        angle: Math.PI / 4
                    }))
            })],
            'fr': [new ol.style.Style({
                //text: text,
                image: new ol.style.RegularShape(
                    ({
                        fill: fill,
                        stroke: stroke,
                        points: 3,
                        radius: radius,
                        angle: 0
                    }))
            })],
            'rm': [new ol.style.Style({
                //text: text,
                image: new ol.style.RegularShape(
                    ({
                        fill: fill,
                        stroke: stroke,
                        points: 5,
                        radius: radius - 2,
                        angle: 0
                    }))
            })],
            'it': [new ol.style.Style({
                //text: text,
                image: new ol.style.Circle({
                    radius: radius - 2,
                    fill: new ol.style.Fill({
                        color: colour
                    }),
                    stroke: stroke
                })
            })]
        };


        var style = null;
        if (!style) {

            style = [new ol.style.Style({
                image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                        color: colour
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#000',
                        width: 1
                    })
                })


            })];
            // styleCache[radius] = style;
        }



        var style = styles[lang_code];

        return style;
    };

    var source = new ol.source.GeoJSON({
        url: 'data/storymap.json'
    });



    var vector = new ol.layer.Vector({
        source: source,
        style: styleFunction
    });

    map.addLayer(vector);
    var vector2 = new ol.layer.Vector({
        source: source,
        style: textStyleFunction
    });
    map.addLayer(vector2);

    // Popup showing the position the user clicked
    var popup = new ol.Overlay({
        element: document.getElementById('popup'),
        stopEvent: false
    });

    map.addOverlay(popup);

    var findFeatures = function(pixel) {
        var features = [];
        map.forEachFeatureAtPixel(pixel, function(feature, layer) {
            features.push(feature);
        });
        return features;
    };

    var displayFeatureInfo = function(pixel, coordinate) {
        var features = findFeatures(pixel);
        var element = popup.getElement();
        var feature = features[0];
        if (feature) {
            var content = i18n.t('text.colour') + ': ' + i18n.t('text.' + feature.get('colour')) + '<br>' +
                i18n.t('text.language') + ': ' + i18n.t('text.' + feature.get('lang'));
            $(element).popover('destroy');
            popup.setPosition(coordinate);
            $(element).popover({
                'placement': 'auto top',
                'animation': false,
                'html': true,
                'content': feature.get('description'),
                'title': feature.get('name') + '<a class="close" href="#");">&times;</a>'
            });
            //$(element).popover('show');
            $('#feature-info-title').text(feature.get('name'));
            $('#feature-info-body').html(content);
            $('#feature-info').modal('show')
        } else {
            $(element).popover('destroy');

        }
    };


    map.on('singleclick', function(evt) {
        var pixel = evt.pixel;
        var coordinate = evt.coordinate;
        displayFeatureInfo(pixel, coordinate);
    });
}
