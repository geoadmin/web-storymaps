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
    //var tlm = ga.layer.create('ch.swisstopo.swissimage');
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


    var newStyleFunction = function(feature, resolution) {


        // if (resolution > 25) return false;

        var lang_code = feature.get('lang');
        var colour_code = feature.get('colour');

        var colours = {
            "b": '3e00ff', //blau
            "gr": '009c00', //green
            "s": '000000', //schwarz
            "r": 'ff2a2a', //red
            "w": 'ffffff', //weiss
            "ge": 'ffc300' //gelb
        };

        var shapes = {
            'de': 'triangle',
            'fr': 'square',
            'it': 'circle',
            'rm': 'pentagon'
        };


        return [new ol.style.Style({
            image: new ol.style.Icon(({
                anchor: [7, 7],
                anchorXUnits: 'pixels',
                anchorYUnits: 'pixels',
                opacity: 1.0,
                scale: 1.0, //lang_code == 'fr' ? 0.8: 1.0,
                src: 'img/' + shapes[lang_code] + '_' + colours[colour_code] + '_14.png'
            }))
        })]




    }


    var source = new ol.source.GeoJSON({
        url: 'data/storymap.json'
    });



    var vector = new ol.layer.Vector({
        source: source,
        style: newStyleFunction //iconStyle //styleFunction
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
