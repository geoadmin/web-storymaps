var map;



function init() {

    var hiks = ga.layer.create('ch.swisstopo.hiks-siegfried');
    var layer = ga.layer.create('ch.swisstopo.swissimage');
    map = new ga.Map({
        target: 'map',
        layers: [hiks, layer],
        tooltip: false,
        view: new ol.View({
            resolution: 10,
            center: [790000, 145000]
        })
    });

    initSlider(0.4);
    swipeLayer(layer);
}
