goog.require('ga.Map');
goog.require('ga.layer');
goog.require('ol');
goog.require('ol.Attribution');
goog.require('ol.Collection');
goog.require('ol.CollectionEvent');
goog.require('ol.DeviceOrientation');
goog.require('ol.Feature');
goog.require('ol.Geolocation');
goog.require('ol.ImageTile');
goog.require('ol.Kinetic');
goog.require('ol.Map');
goog.require('ol.MapBrowserEvent');
goog.require('ol.Object');
goog.require('ol.Overlay');
goog.require('ol.OverlayPositioning');
goog.require('ol.RendererHint');
goog.require('ol.RendererHints');
goog.require('ol.Tile');
goog.require('ol.TileCoord');
goog.require('ol.View2D');
goog.require('ol.animation');
goog.require('ol.control');
goog.require('ol.control.Attribution');
goog.require('ol.control.Control');
goog.require('ol.control.FullScreen');
goog.require('ol.control.Logo');
goog.require('ol.control.MousePosition');
goog.require('ol.control.ScaleLine');
goog.require('ol.control.ScaleLineUnits');
goog.require('ol.control.Zoom');
goog.require('ol.control.ZoomSlider');
goog.require('ol.control.ZoomToExtent');
goog.require('ol.coordinate');
goog.require('ol.dom.Input');
goog.require('ol.easing');
goog.require('ol.expr');
goog.require('ol.extent');
goog.require('ol.geom.Geometry');
goog.require('ol.geom.GeometryType');
goog.require('ol.geom.LineString');
goog.require('ol.geom.MultiLineString');
goog.require('ol.geom.MultiPoint');
goog.require('ol.geom.MultiPolygon');
goog.require('ol.geom.Point');
goog.require('ol.geom.Polygon');
goog.require('ol.geom2.LineStringCollection');
goog.require('ol.geom2.PointCollection');
goog.require('ol.interaction');
goog.require('ol.interaction.DoubleClickZoom');
goog.require('ol.interaction.DragPan');
goog.require('ol.interaction.DragRotate');
goog.require('ol.interaction.DragRotateAndZoom');
goog.require('ol.interaction.DragZoom');
goog.require('ol.interaction.KeyboardPan');
goog.require('ol.interaction.KeyboardZoom');
goog.require('ol.interaction.MouseWheelZoom');
goog.require('ol.interaction.Select');
goog.require('ol.interaction.TouchPan');
goog.require('ol.interaction.TouchRotate');
goog.require('ol.interaction.TouchZoom');
goog.require('ol.interaction.condition');
goog.require('ol.layer.Group');
goog.require('ol.layer.Image');
goog.require('ol.layer.Layer');
goog.require('ol.layer.Tile');
goog.require('ol.layer.Vector');
goog.require('ol.layer.Vector2');
goog.require('ol.parser.GPX');
goog.require('ol.parser.GeoJSON');
goog.require('ol.parser.KML');
goog.require('ol.parser.TopoJSON');
goog.require('ol.parser.WKT');
goog.require('ol.parser.ogc.GML_v2');
goog.require('ol.parser.ogc.GML_v3');
goog.require('ol.parser.ogc.WMSCapabilities');
goog.require('ol.parser.ogc.WMTSCapabilities');
goog.require('ol.proj');
goog.require('ol.proj.Projection');
goog.require('ol.proj.Units');
goog.require('ol.proj.common');
goog.require('ol.renderer.canvas.Map');
goog.require('ol.source.BingMaps');
goog.require('ol.source.ImageStatic');
goog.require('ol.source.ImageWMS');
goog.require('ol.source.MapQuestOSM');
goog.require('ol.source.MapQuestOpenAerial');
goog.require('ol.source.OSM');
goog.require('ol.source.Source');
goog.require('ol.source.Stamen');
goog.require('ol.source.Tile');
goog.require('ol.source.TileDebug');
goog.require('ol.source.TileJSON');
goog.require('ol.source.TileWMS');
goog.require('ol.source.Vector');
goog.require('ol.source.Vector2');
goog.require('ol.source.WMSGetFeatureInfoMethod');
goog.require('ol.source.WMTS');
goog.require('ol.source.XYZ');
goog.require('ol.style.Fill');
goog.require('ol.style.Icon');
goog.require('ol.style.Rule');
goog.require('ol.style.Shape');
goog.require('ol.style.ShapeType');
goog.require('ol.style.Stroke');
goog.require('ol.style.Style');
goog.require('ol.style.Text');
goog.require('ol.tilegrid.TileGrid');
goog.require('ol.tilegrid.WMTS');
goog.require('ol.tilegrid.XYZ');



/**
 * @constructor
 * @extends {ga.Map}
 * @param {olx.MapOptionsExtern} options Options.
 */
ga.MapExport = function(options) {
  /** @type {ol.MapOptions} */
  var arg = /** @type {ol.MapOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.controls = options.controls;
    arg.interactions = options.interactions;
    arg.layers = options.layers;
    arg.overlays = options.overlays;
    arg.renderer = options.renderer;
    arg.renderers = options.renderers;
    arg.target = options.target;
    arg.view = options.view;
  }
  goog.base(this, arg);
};
goog.inherits(
    ga.MapExport,
    ga.Map);
goog.exportSymbol(
    'ga.Map',
    ga.MapExport);


goog.exportSymbol(
    'ga.layer.create',
    ga.layer.create);



/**
 * @constructor
 * @extends {ol.Attribution}
 * @param {olx.AttributionOptionsExtern} options Options.
 */
ol.AttributionExport = function(options) {
  /** @type {ol.AttributionOptions} */
  var arg = /** @type {ol.AttributionOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.html = options.html;
    arg.tileRanges = options.tileRanges;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.AttributionExport,
    ol.Attribution);
goog.exportSymbol(
    'ol.Attribution',
    ol.AttributionExport);


goog.exportSymbol(
    'ol.Collection',
    ol.Collection);
goog.exportProperty(
    ol.Collection.prototype,
    'clear',
    ol.Collection.prototype.clear);
goog.exportProperty(
    ol.Collection.prototype,
    'extend',
    ol.Collection.prototype.extend);
goog.exportProperty(
    ol.Collection.prototype,
    'forEach',
    ol.Collection.prototype.forEach);
goog.exportProperty(
    ol.Collection.prototype,
    'getArray',
    ol.Collection.prototype.getArray);
goog.exportProperty(
    ol.Collection.prototype,
    'getAt',
    ol.Collection.prototype.getAt);
goog.exportProperty(
    ol.Collection.prototype,
    'getLength',
    ol.Collection.prototype.getLength);
goog.exportProperty(
    ol.Collection.prototype,
    'insertAt',
    ol.Collection.prototype.insertAt);
goog.exportProperty(
    ol.Collection.prototype,
    'pop',
    ol.Collection.prototype.pop);
goog.exportProperty(
    ol.Collection.prototype,
    'push',
    ol.Collection.prototype.push);
goog.exportProperty(
    ol.Collection.prototype,
    'remove',
    ol.Collection.prototype.remove);
goog.exportProperty(
    ol.Collection.prototype,
    'removeAt',
    ol.Collection.prototype.removeAt);
goog.exportProperty(
    ol.Collection.prototype,
    'setAt',
    ol.Collection.prototype.setAt);
goog.exportProperty(
    ol.CollectionEvent.prototype,
    'getElement',
    ol.CollectionEvent.prototype.getElement);



/**
 * @constructor
 * @extends {ol.DeviceOrientation}
 * @param {olx.DeviceOrientationOptionsExtern} options Options.
 */
ol.DeviceOrientationExport = function(options) {
  /** @type {ol.DeviceOrientationOptions} */
  var arg = /** @type {ol.DeviceOrientationOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.tracking = options.tracking;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.DeviceOrientationExport,
    ol.DeviceOrientation);
goog.exportSymbol(
    'ol.DeviceOrientation',
    ol.DeviceOrientationExport);


goog.exportSymbol(
    'ol.Feature',
    ol.Feature);
goog.exportProperty(
    ol.Feature.prototype,
    'getAttributes',
    ol.Feature.prototype.getAttributes);
goog.exportProperty(
    ol.Feature.prototype,
    'getGeometry',
    ol.Feature.prototype.getGeometry);
goog.exportProperty(
    ol.Feature.prototype,
    'getId',
    ol.Feature.prototype.getId);
goog.exportProperty(
    ol.Feature.prototype,
    'set',
    ol.Feature.prototype.set);
goog.exportProperty(
    ol.Feature.prototype,
    'setGeometry',
    ol.Feature.prototype.setGeometry);



/**
 * @constructor
 * @extends {ol.Geolocation}
 * @param {olx.GeolocationOptionsExtern} options Options.
 */
ol.GeolocationExport = function(options) {
  /** @type {ol.GeolocationOptions} */
  var arg = /** @type {ol.GeolocationOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.projection = options.projection;
    arg.tracking = options.tracking;
    arg.trackingOptions = options.trackingOptions;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.GeolocationExport,
    ol.Geolocation);
goog.exportSymbol(
    'ol.Geolocation',
    ol.GeolocationExport);
goog.exportProperty(
    ol.ImageTile.prototype,
    'getImage',
    ol.ImageTile.prototype.getImage);


goog.exportSymbol(
    'ol.Kinetic',
    ol.Kinetic);



/**
 * @constructor
 * @extends {ol.Map}
 * @param {olx.MapOptionsExtern} options Options.
 */
ol.MapExport = function(options) {
  /** @type {ol.MapOptions} */
  var arg = /** @type {ol.MapOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.controls = options.controls;
    arg.interactions = options.interactions;
    arg.layers = options.layers;
    arg.overlays = options.overlays;
    arg.renderer = options.renderer;
    arg.renderers = options.renderers;
    arg.target = options.target;
    arg.view = options.view;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.MapExport,
    ol.Map);
goog.exportSymbol(
    'ol.Map',
    ol.MapExport);
goog.exportProperty(
    ol.Map.prototype,
    'addControl',
    ol.Map.prototype.addControl);
goog.exportProperty(
    ol.Map.prototype,
    'addLayer',
    ol.Map.prototype.addLayer);
goog.exportProperty(
    ol.Map.prototype,
    'addOverlay',
    ol.Map.prototype.addOverlay);
goog.exportProperty(
    ol.Map.prototype,
    'beforeRender',
    ol.Map.prototype.beforeRender);
goog.exportProperty(
    ol.Map.prototype,
    'getControls',
    ol.Map.prototype.getControls);
goog.exportProperty(
    ol.Map.prototype,
    'getFeatureInfo',
    ol.Map.prototype.getFeatureInfo);
goog.exportProperty(
    ol.Map.prototype,
    'getFeatures',
    ol.Map.prototype.getFeatures);
goog.exportProperty(
    ol.Map.prototype,
    'getInteractions',
    ol.Map.prototype.getInteractions);
goog.exportProperty(
    ol.Map.prototype,
    'getLayers',
    ol.Map.prototype.getLayers);
goog.exportProperty(
    ol.Map.prototype,
    'getOverlays',
    ol.Map.prototype.getOverlays);
goog.exportProperty(
    ol.Map.prototype,
    'getRenderer',
    ol.Map.prototype.getRenderer);
goog.exportProperty(
    ol.Map.prototype,
    'removeControl',
    ol.Map.prototype.removeControl);
goog.exportProperty(
    ol.Map.prototype,
    'removeLayer',
    ol.Map.prototype.removeLayer);
goog.exportProperty(
    ol.Map.prototype,
    'removeOverlay',
    ol.Map.prototype.removeOverlay);
goog.exportProperty(
    ol.Map.prototype,
    'updateSize',
    ol.Map.prototype.updateSize);
goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'getCoordinate',
    ol.MapBrowserEvent.prototype.getCoordinate);
goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'getPixel',
    ol.MapBrowserEvent.prototype.getPixel);
goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'preventDefault',
    ol.MapBrowserEvent.prototype.preventDefault);
goog.exportProperty(
    ol.MapBrowserEvent.prototype,
    'stopPropagation',
    ol.MapBrowserEvent.prototype.stopPropagation);


goog.exportSymbol(
    'ol.Object',
    ol.Object);
goog.exportProperty(
    ol.Object.prototype,
    'bindTo',
    ol.Object.prototype.bindTo);
goog.exportProperty(
    ol.Object.prototype,
    'get',
    ol.Object.prototype.get);
goog.exportProperty(
    ol.Object.prototype,
    'notify',
    ol.Object.prototype.notify);
goog.exportProperty(
    ol.Object.prototype,
    'on',
    ol.Object.prototype.on);
goog.exportProperty(
    ol.Object.prototype,
    'once',
    ol.Object.prototype.once);
goog.exportProperty(
    ol.Object.prototype,
    'set',
    ol.Object.prototype.set);
goog.exportProperty(
    ol.Object.prototype,
    'setValues',
    ol.Object.prototype.setValues);
goog.exportProperty(
    ol.Object.prototype,
    'un',
    ol.Object.prototype.un);
goog.exportProperty(
    ol.Object.prototype,
    'unByKey',
    ol.Object.prototype.unByKey);
goog.exportProperty(
    ol.Object.prototype,
    'unbind',
    ol.Object.prototype.unbind);
goog.exportProperty(
    ol.Object.prototype,
    'unbindAll',
    ol.Object.prototype.unbindAll);



/**
 * @constructor
 * @extends {ol.Overlay}
 * @param {olx.OverlayOptionsExtern} options Options.
 */
ol.OverlayExport = function(options) {
  /** @type {ol.OverlayOptions} */
  var arg = /** @type {ol.OverlayOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.element = options.element;
    arg.position = options.position;
    arg.positioning = options.positioning;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.OverlayExport,
    ol.Overlay);
goog.exportSymbol(
    'ol.Overlay',
    ol.OverlayExport);


goog.exportSymbol(
    'ol.OverlayPositioning',
    ol.OverlayPositioning);
goog.exportProperty(
    ol.OverlayPositioning,
    'BOTTOM_LEFT',
    ol.OverlayPositioning.BOTTOM_LEFT);
goog.exportProperty(
    ol.OverlayPositioning,
    'BOTTOM_RIGHT',
    ol.OverlayPositioning.BOTTOM_RIGHT);
goog.exportProperty(
    ol.OverlayPositioning,
    'TOP_LEFT',
    ol.OverlayPositioning.TOP_LEFT);
goog.exportProperty(
    ol.OverlayPositioning,
    'TOP_RIGHT',
    ol.OverlayPositioning.TOP_RIGHT);


goog.exportSymbol(
    'ol.RendererHint',
    ol.RendererHint);
goog.exportProperty(
    ol.RendererHint,
    'CANVAS',
    ol.RendererHint.CANVAS);
goog.exportProperty(
    ol.RendererHint,
    'DOM',
    ol.RendererHint.DOM);
goog.exportProperty(
    ol.RendererHint,
    'WEBGL',
    ol.RendererHint.WEBGL);


goog.exportSymbol(
    'ol.RendererHints',
    ol.RendererHints);
goog.exportProperty(
    ol.RendererHints,
    'createFromQueryData',
    ol.RendererHints.createFromQueryData);
goog.exportProperty(
    ol.Tile.prototype,
    'getTileCoord',
    ol.Tile.prototype.getTileCoord);
goog.exportProperty(
    ol.TileCoord.prototype,
    'getZXY',
    ol.TileCoord.prototype.getZXY);



/**
 * @constructor
 * @extends {ol.View2D}
 * @param {olx.View2DOptionsExtern} options Options.
 */
ol.View2DExport = function(options) {
  /** @type {ol.View2DOptions} */
  var arg = /** @type {ol.View2DOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.center = options.center;
    arg.maxResolution = options.maxResolution;
    arg.maxZoom = options.maxZoom;
    arg.projection = options.projection;
    arg.resolution = options.resolution;
    arg.resolutions = options.resolutions;
    arg.rotation = options.rotation;
    arg.zoom = options.zoom;
    arg.zoomFactor = options.zoomFactor;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.View2DExport,
    ol.View2D);
goog.exportSymbol(
    'ol.View2D',
    ol.View2DExport);
goog.exportProperty(
    ol.View2D.prototype,
    'calculateExtent',
    ol.View2D.prototype.calculateExtent);
goog.exportProperty(
    ol.View2D.prototype,
    'constrainResolution',
    ol.View2D.prototype.constrainResolution);
goog.exportProperty(
    ol.View2D.prototype,
    'constrainRotation',
    ol.View2D.prototype.constrainRotation);
goog.exportProperty(
    ol.View2D.prototype,
    'fitExtent',
    ol.View2D.prototype.fitExtent);
goog.exportProperty(
    ol.View2D.prototype,
    'getView2D',
    ol.View2D.prototype.getView2D);
goog.exportProperty(
    ol.View2D.prototype,
    'getZoom',
    ol.View2D.prototype.getZoom);
goog.exportProperty(
    ol.View2D.prototype,
    'setZoom',
    ol.View2D.prototype.setZoom);


/**
 * @param {olx.animation.BounceOptionsExtern} options Options.
 * @return {ol.PreRenderFunction} Return value.
 */
ol.animation.bounceExport = function(options) {
  /** @type {ol.animation.BounceOptions} */
  var arg =
      /** @type {ol.animation.BounceOptions} */
      (options);
  if (goog.isDefAndNotNull(options)) {
    arg.duration =
        options.duration;
    arg.easing =
        options.easing;
    arg.resolution =
        options.resolution;
    arg.start =
        options.start;
  }
  return ol.animation.bounce(arg);
};
goog.exportSymbol(
    'ol.animation.bounce',
    ol.animation.bounceExport);


/**
 * @param {olx.animation.PanOptionsExtern} options Options.
 * @return {ol.PreRenderFunction} Return value.
 */
ol.animation.panExport = function(options) {
  /** @type {ol.animation.PanOptions} */
  var arg =
      /** @type {ol.animation.PanOptions} */
      (options);
  if (goog.isDefAndNotNull(options)) {
    arg.duration =
        options.duration;
    arg.easing =
        options.easing;
    arg.source =
        options.source;
    arg.start =
        options.start;
  }
  return ol.animation.pan(arg);
};
goog.exportSymbol(
    'ol.animation.pan',
    ol.animation.panExport);


/**
 * @param {olx.animation.RotateOptionsExtern} options Options.
 * @return {ol.PreRenderFunction} Return value.
 */
ol.animation.rotateExport = function(options) {
  /** @type {ol.animation.RotateOptions} */
  var arg =
      /** @type {ol.animation.RotateOptions} */
      (options);
  if (goog.isDefAndNotNull(options)) {
    arg.duration =
        options.duration;
    arg.easing =
        options.easing;
    arg.rotation =
        options.rotation;
    arg.start =
        options.start;
  }
  return ol.animation.rotate(arg);
};
goog.exportSymbol(
    'ol.animation.rotate',
    ol.animation.rotateExport);


/**
 * @param {olx.animation.ZoomOptionsExtern} options Options.
 * @return {ol.PreRenderFunction} Return value.
 */
ol.animation.zoomExport = function(options) {
  /** @type {ol.animation.ZoomOptions} */
  var arg =
      /** @type {ol.animation.ZoomOptions} */
      (options);
  if (goog.isDefAndNotNull(options)) {
    arg.duration =
        options.duration;
    arg.easing =
        options.easing;
    arg.resolution =
        options.resolution;
    arg.start =
        options.start;
  }
  return ol.animation.zoom(arg);
};
goog.exportSymbol(
    'ol.animation.zoom',
    ol.animation.zoomExport);



/**
 * @constructor
 * @extends {ol.control.Attribution}
 * @param {olx.control.AttributionOptionsExtern} options Options.
 */
ol.control.AttributionExport = function(options) {
  /** @type {ol.control.AttributionOptions} */
  var arg = /** @type {ol.control.AttributionOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.AttributionExport,
    ol.control.Attribution);
goog.exportSymbol(
    'ol.control.Attribution',
    ol.control.AttributionExport);
goog.exportProperty(
    ol.control.Attribution.prototype,
    'setMap',
    ol.control.Attribution.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {olx.control.ControlOptionsExtern} options Options.
 */
ol.control.ControlExport = function(options) {
  /** @type {ol.control.ControlOptions} */
  var arg = /** @type {ol.control.ControlOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.element = options.element;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ControlExport,
    ol.control.Control);
goog.exportSymbol(
    'ol.control.Control',
    ol.control.ControlExport);
goog.exportProperty(
    ol.control.Control.prototype,
    'getMap',
    ol.control.Control.prototype.getMap);
goog.exportProperty(
    ol.control.Control.prototype,
    'setMap',
    ol.control.Control.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.FullScreen}
 * @param {olx.control.FullScreenOptionsExtern} options Options.
 */
ol.control.FullScreenExport = function(options) {
  /** @type {ol.control.FullScreenOptions} */
  var arg = /** @type {ol.control.FullScreenOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.keys = options.keys;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.FullScreenExport,
    ol.control.FullScreen);
goog.exportSymbol(
    'ol.control.FullScreen',
    ol.control.FullScreenExport);



/**
 * @constructor
 * @extends {ol.control.Logo}
 * @param {olx.control.LogoOptionsExtern} options Options.
 */
ol.control.LogoExport = function(options) {
  /** @type {ol.control.LogoOptions} */
  var arg = /** @type {ol.control.LogoOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.LogoExport,
    ol.control.Logo);
goog.exportSymbol(
    'ol.control.Logo',
    ol.control.LogoExport);
goog.exportProperty(
    ol.control.Logo.prototype,
    'setMap',
    ol.control.Logo.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.MousePosition}
 * @param {olx.control.MousePositionOptionsExtern} options Options.
 */
ol.control.MousePositionExport = function(options) {
  /** @type {ol.control.MousePositionOptions} */
  var arg = /** @type {ol.control.MousePositionOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.coordinateFormat = options.coordinateFormat;
    arg.projection = options.projection;
    arg.target = options.target;
    arg.undefinedHTML = options.undefinedHTML;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.MousePositionExport,
    ol.control.MousePosition);
goog.exportSymbol(
    'ol.control.MousePosition',
    ol.control.MousePositionExport);
goog.exportProperty(
    ol.control.MousePosition.prototype,
    'setMap',
    ol.control.MousePosition.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.ScaleLine}
 * @param {olx.control.ScaleLineOptionsExtern} options Options.
 */
ol.control.ScaleLineExport = function(options) {
  /** @type {ol.control.ScaleLineOptions} */
  var arg = /** @type {ol.control.ScaleLineOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.minWidth = options.minWidth;
    arg.target = options.target;
    arg.units = options.units;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ScaleLineExport,
    ol.control.ScaleLine);
goog.exportSymbol(
    'ol.control.ScaleLine',
    ol.control.ScaleLineExport);
goog.exportProperty(
    ol.control.ScaleLine.prototype,
    'setMap',
    ol.control.ScaleLine.prototype.setMap);


goog.exportSymbol(
    'ol.control.ScaleLineUnits',
    ol.control.ScaleLineUnits);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'DEGREES',
    ol.control.ScaleLineUnits.DEGREES);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'IMPERIAL',
    ol.control.ScaleLineUnits.IMPERIAL);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'METRIC',
    ol.control.ScaleLineUnits.METRIC);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'NAUTICAL',
    ol.control.ScaleLineUnits.NAUTICAL);
goog.exportProperty(
    ol.control.ScaleLineUnits,
    'US',
    ol.control.ScaleLineUnits.US);



/**
 * @constructor
 * @extends {ol.control.Zoom}
 * @param {olx.control.ZoomOptionsExtern} options Options.
 */
ol.control.ZoomExport = function(options) {
  /** @type {ol.control.ZoomOptions} */
  var arg = /** @type {ol.control.ZoomOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.delta = options.delta;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ZoomExport,
    ol.control.Zoom);
goog.exportSymbol(
    'ol.control.Zoom',
    ol.control.ZoomExport);
goog.exportProperty(
    ol.control.Zoom.prototype,
    'setMap',
    ol.control.Zoom.prototype.setMap);



/**
 * @constructor
 * @extends {ol.control.ZoomSlider}
 * @param {olx.control.ZoomSliderOptionsExtern} options Options.
 */
ol.control.ZoomSliderExport = function(options) {
  /** @type {ol.control.ZoomSliderOptions} */
  var arg = /** @type {ol.control.ZoomSliderOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.maxResolution = options.maxResolution;
    arg.minResolution = options.minResolution;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ZoomSliderExport,
    ol.control.ZoomSlider);
goog.exportSymbol(
    'ol.control.ZoomSlider',
    ol.control.ZoomSliderExport);



/**
 * @constructor
 * @extends {ol.control.ZoomToExtent}
 * @param {olx.control.ZoomToExtentOptionsExtern} options Options.
 */
ol.control.ZoomToExtentExport = function(options) {
  /** @type {ol.control.ZoomToExtentOptions} */
  var arg = /** @type {ol.control.ZoomToExtentOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.className = options.className;
    arg.extent = options.extent;
    arg.target = options.target;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.control.ZoomToExtentExport,
    ol.control.ZoomToExtent);
goog.exportSymbol(
    'ol.control.ZoomToExtent',
    ol.control.ZoomToExtentExport);


/**
 * @param {olx.control.DefaultsOptionsExtern} options Options.
 * @return {ol.Collection} Return value.
 */
ol.control.defaultsExport = function(options) {
  /** @type {ol.control.DefaultsOptions} */
  var arg =
      /** @type {ol.control.DefaultsOptions} */
      (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attribution =
        options.attribution;
    /** @type {ol.control.AttributionOptions} */
    var attributionOptions =
        /** @type {ol.control.AttributionOptions} */
        (options.attributionOptions);
    if (goog.isDefAndNotNull(options.attributionOptions)) {
      attributionOptions.className =
          options.attributionOptions.className;
      attributionOptions.target =
          options.attributionOptions.target;
    }
    arg.attributionOptions =
        attributionOptions;
    arg.logo =
        options.logo;
    /** @type {ol.control.LogoOptions} */
    var logoOptions =
        /** @type {ol.control.LogoOptions} */
        (options.logoOptions);
    if (goog.isDefAndNotNull(options.logoOptions)) {
      logoOptions.className =
          options.logoOptions.className;
      logoOptions.target =
          options.logoOptions.target;
    }
    arg.logoOptions =
        logoOptions;
    arg.zoom =
        options.zoom;
    /** @type {ol.control.ZoomOptions} */
    var zoomOptions =
        /** @type {ol.control.ZoomOptions} */
        (options.zoomOptions);
    if (goog.isDefAndNotNull(options.zoomOptions)) {
      zoomOptions.className =
          options.zoomOptions.className;
      zoomOptions.delta =
          options.zoomOptions.delta;
      zoomOptions.target =
          options.zoomOptions.target;
    }
    arg.zoomOptions =
        zoomOptions;
  }
  return ol.control.defaults(arg);
};
goog.exportSymbol(
    'ol.control.defaults',
    ol.control.defaultsExport);


goog.exportSymbol(
    'ol.coordinate.createStringXY',
    ol.coordinate.createStringXY);


goog.exportSymbol(
    'ol.coordinate.fromProjectedArray',
    ol.coordinate.fromProjectedArray);


goog.exportSymbol(
    'ol.coordinate.toStringHDMS',
    ol.coordinate.toStringHDMS);


goog.exportSymbol(
    'ol.coordinate.toStringXY',
    ol.coordinate.toStringXY);


goog.exportSymbol(
    'ol.dom.Input',
    ol.dom.Input);


goog.exportSymbol(
    'ol.easing.bounce',
    ol.easing.bounce);


goog.exportSymbol(
    'ol.easing.easeIn',
    ol.easing.easeIn);


goog.exportSymbol(
    'ol.easing.easeOut',
    ol.easing.easeOut);


goog.exportSymbol(
    'ol.easing.elastic',
    ol.easing.elastic);


goog.exportSymbol(
    'ol.easing.inAndOut',
    ol.easing.inAndOut);


goog.exportSymbol(
    'ol.easing.linear',
    ol.easing.linear);


goog.exportSymbol(
    'ol.easing.upAndDown',
    ol.easing.upAndDown);


goog.exportSymbol(
    'ol.expr.parse',
    ol.expr.parse);


goog.exportSymbol(
    'ol.expr.register',
    ol.expr.register);


goog.exportSymbol(
    'ol.extent.boundingExtent',
    ol.extent.boundingExtent);


goog.exportSymbol(
    'ol.extent.containsCoordinate',
    ol.extent.containsCoordinate);


goog.exportSymbol(
    'ol.extent.containsExtent',
    ol.extent.containsExtent);


goog.exportSymbol(
    'ol.extent.equals',
    ol.extent.equals);


goog.exportSymbol(
    'ol.extent.extend',
    ol.extent.extend);


goog.exportSymbol(
    'ol.extent.getBottomLeft',
    ol.extent.getBottomLeft);


goog.exportSymbol(
    'ol.extent.getBottomRight',
    ol.extent.getBottomRight);


goog.exportSymbol(
    'ol.extent.getCenter',
    ol.extent.getCenter);


goog.exportSymbol(
    'ol.extent.getHeight',
    ol.extent.getHeight);


goog.exportSymbol(
    'ol.extent.getSize',
    ol.extent.getSize);


goog.exportSymbol(
    'ol.extent.getTopLeft',
    ol.extent.getTopLeft);


goog.exportSymbol(
    'ol.extent.getTopRight',
    ol.extent.getTopRight);


goog.exportSymbol(
    'ol.extent.getWidth',
    ol.extent.getWidth);


goog.exportSymbol(
    'ol.extent.intersects',
    ol.extent.intersects);


goog.exportSymbol(
    'ol.extent.isEmpty',
    ol.extent.isEmpty);


goog.exportSymbol(
    'ol.extent.transform',
    ol.extent.transform);


goog.exportSymbol(
    'ol.geom.Geometry',
    ol.geom.Geometry);


goog.exportSymbol(
    'ol.geom.GeometryType',
    ol.geom.GeometryType);
goog.exportProperty(
    ol.geom.GeometryType,
    'GEOMETRYCOLLECTION',
    ol.geom.GeometryType.GEOMETRYCOLLECTION);
goog.exportProperty(
    ol.geom.GeometryType,
    'LINEARRING',
    ol.geom.GeometryType.LINEARRING);
goog.exportProperty(
    ol.geom.GeometryType,
    'LINESTRING',
    ol.geom.GeometryType.LINESTRING);
goog.exportProperty(
    ol.geom.GeometryType,
    'MULTILINESTRING',
    ol.geom.GeometryType.MULTILINESTRING);
goog.exportProperty(
    ol.geom.GeometryType,
    'MULTIPOINT',
    ol.geom.GeometryType.MULTIPOINT);
goog.exportProperty(
    ol.geom.GeometryType,
    'MULTIPOLYGON',
    ol.geom.GeometryType.MULTIPOLYGON);
goog.exportProperty(
    ol.geom.GeometryType,
    'POINT',
    ol.geom.GeometryType.POINT);
goog.exportProperty(
    ol.geom.GeometryType,
    'POLYGON',
    ol.geom.GeometryType.POLYGON);


goog.exportSymbol(
    'ol.geom.LineString',
    ol.geom.LineString);
goog.exportProperty(
    ol.geom.LineString.prototype,
    'getCoordinates',
    ol.geom.LineString.prototype.getCoordinates);


goog.exportSymbol(
    'ol.geom.MultiLineString',
    ol.geom.MultiLineString);
goog.exportProperty(
    ol.geom.MultiLineString.prototype,
    'getCoordinates',
    ol.geom.MultiLineString.prototype.getCoordinates);


goog.exportSymbol(
    'ol.geom.MultiPoint',
    ol.geom.MultiPoint);
goog.exportProperty(
    ol.geom.MultiPoint.prototype,
    'getCoordinates',
    ol.geom.MultiPoint.prototype.getCoordinates);


goog.exportSymbol(
    'ol.geom.MultiPolygon',
    ol.geom.MultiPolygon);
goog.exportProperty(
    ol.geom.MultiPolygon.prototype,
    'getCoordinates',
    ol.geom.MultiPolygon.prototype.getCoordinates);


goog.exportSymbol(
    'ol.geom.Point',
    ol.geom.Point);
goog.exportProperty(
    ol.geom.Point.prototype,
    'getCoordinates',
    ol.geom.Point.prototype.getCoordinates);


goog.exportSymbol(
    'ol.geom.Polygon',
    ol.geom.Polygon);
goog.exportProperty(
    ol.geom.Polygon.prototype,
    'getCoordinates',
    ol.geom.Polygon.prototype.getCoordinates);


goog.exportSymbol(
    'ol.geom2.LineStringCollection',
    ol.geom2.LineStringCollection);


goog.exportSymbol(
    'ol.geom2.LineStringCollection.pack',
    ol.geom2.LineStringCollection.pack);


goog.exportSymbol(
    'ol.geom2.PointCollection',
    ol.geom2.PointCollection);


goog.exportSymbol(
    'ol.geom2.PointCollection.createEmpty',
    ol.geom2.PointCollection.createEmpty);


goog.exportSymbol(
    'ol.geom2.PointCollection.pack',
    ol.geom2.PointCollection.pack);
goog.exportProperty(
    ol.geom2.PointCollection.prototype,
    'add',
    ol.geom2.PointCollection.prototype.add);


goog.exportSymbol(
    'ol.inherits',
    ol.inherits);



/**
 * @constructor
 * @extends {ol.interaction.DoubleClickZoom}
 * @param {olx.interaction.DoubleClickZoomOptionsExtern} options Options.
 */
ol.interaction.DoubleClickZoomExport = function(options) {
  /** @type {ol.interaction.DoubleClickZoomOptions} */
  var arg = /** @type {ol.interaction.DoubleClickZoomOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.delta = options.delta;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.DoubleClickZoomExport,
    ol.interaction.DoubleClickZoom);
goog.exportSymbol(
    'ol.interaction.DoubleClickZoom',
    ol.interaction.DoubleClickZoomExport);



/**
 * @constructor
 * @extends {ol.interaction.DragPan}
 * @param {olx.interaction.DragPanOptionsExtern} options Options.
 */
ol.interaction.DragPanExport = function(options) {
  /** @type {ol.interaction.DragPanOptions} */
  var arg = /** @type {ol.interaction.DragPanOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.condition = options.condition;
    arg.kinetic = options.kinetic;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.DragPanExport,
    ol.interaction.DragPan);
goog.exportSymbol(
    'ol.interaction.DragPan',
    ol.interaction.DragPanExport);



/**
 * @constructor
 * @extends {ol.interaction.DragRotate}
 * @param {olx.interaction.DragRotateOptionsExtern} options Options.
 */
ol.interaction.DragRotateExport = function(options) {
  /** @type {ol.interaction.DragRotateOptions} */
  var arg = /** @type {ol.interaction.DragRotateOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.condition = options.condition;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.DragRotateExport,
    ol.interaction.DragRotate);
goog.exportSymbol(
    'ol.interaction.DragRotate',
    ol.interaction.DragRotateExport);



/**
 * @constructor
 * @extends {ol.interaction.DragRotateAndZoom}
 * @param {olx.interaction.DragRotateAndZoomOptionsExtern} options Options.
 */
ol.interaction.DragRotateAndZoomExport = function(options) {
  /** @type {ol.interaction.DragRotateAndZoomOptions} */
  var arg = /** @type {ol.interaction.DragRotateAndZoomOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.condition = options.condition;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.DragRotateAndZoomExport,
    ol.interaction.DragRotateAndZoom);
goog.exportSymbol(
    'ol.interaction.DragRotateAndZoom',
    ol.interaction.DragRotateAndZoomExport);



/**
 * @constructor
 * @extends {ol.interaction.DragZoom}
 * @param {olx.interaction.DragZoomOptionsExtern} options Options.
 */
ol.interaction.DragZoomExport = function(options) {
  /** @type {ol.interaction.DragZoomOptions} */
  var arg = /** @type {ol.interaction.DragZoomOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.condition = options.condition;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.DragZoomExport,
    ol.interaction.DragZoom);
goog.exportSymbol(
    'ol.interaction.DragZoom',
    ol.interaction.DragZoomExport);



/**
 * @constructor
 * @extends {ol.interaction.KeyboardPan}
 * @param {olx.interaction.KeyboardPanOptionsExtern} options Options.
 */
ol.interaction.KeyboardPanExport = function(options) {
  /** @type {ol.interaction.KeyboardPanOptions} */
  var arg = /** @type {ol.interaction.KeyboardPanOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.condition = options.condition;
    arg.pixelDelta = options.pixelDelta;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.KeyboardPanExport,
    ol.interaction.KeyboardPan);
goog.exportSymbol(
    'ol.interaction.KeyboardPan',
    ol.interaction.KeyboardPanExport);



/**
 * @constructor
 * @extends {ol.interaction.KeyboardZoom}
 * @param {olx.interaction.KeyboardZoomOptionsExtern} options Options.
 */
ol.interaction.KeyboardZoomExport = function(options) {
  /** @type {ol.interaction.KeyboardZoomOptions} */
  var arg = /** @type {ol.interaction.KeyboardZoomOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.condition = options.condition;
    arg.delta = options.delta;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.KeyboardZoomExport,
    ol.interaction.KeyboardZoom);
goog.exportSymbol(
    'ol.interaction.KeyboardZoom',
    ol.interaction.KeyboardZoomExport);


goog.exportSymbol(
    'ol.interaction.MouseWheelZoom',
    ol.interaction.MouseWheelZoom);



/**
 * @constructor
 * @extends {ol.interaction.Select}
 * @param {olx.interaction.SelectOptionsExtern} options Options.
 */
ol.interaction.SelectExport = function(options) {
  /** @type {ol.interaction.SelectOptions} */
  var arg = /** @type {ol.interaction.SelectOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.condition = options.condition;
    arg.layerFilter = options.layerFilter;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.SelectExport,
    ol.interaction.Select);
goog.exportSymbol(
    'ol.interaction.Select',
    ol.interaction.SelectExport);



/**
 * @constructor
 * @extends {ol.interaction.TouchPan}
 * @param {olx.interaction.TouchPanOptionsExtern} options Options.
 */
ol.interaction.TouchPanExport = function(options) {
  /** @type {ol.interaction.TouchPanOptions} */
  var arg = /** @type {ol.interaction.TouchPanOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.kinetic = options.kinetic;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.TouchPanExport,
    ol.interaction.TouchPan);
goog.exportSymbol(
    'ol.interaction.TouchPan',
    ol.interaction.TouchPanExport);



/**
 * @constructor
 * @extends {ol.interaction.TouchRotate}
 * @param {olx.interaction.TouchRotateOptionsExtern} options Options.
 */
ol.interaction.TouchRotateExport = function(options) {
  /** @type {ol.interaction.TouchRotateOptions} */
  var arg = /** @type {ol.interaction.TouchRotateOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.threshold = options.threshold;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.interaction.TouchRotateExport,
    ol.interaction.TouchRotate);
goog.exportSymbol(
    'ol.interaction.TouchRotate',
    ol.interaction.TouchRotateExport);


goog.exportSymbol(
    'ol.interaction.TouchZoom',
    ol.interaction.TouchZoom);


goog.exportSymbol(
    'ol.interaction.condition.altKeyOnly',
    ol.interaction.condition.altKeyOnly);


goog.exportSymbol(
    'ol.interaction.condition.altShiftKeysOnly',
    ol.interaction.condition.altShiftKeysOnly);


goog.exportSymbol(
    'ol.interaction.condition.always',
    ol.interaction.condition.always);


goog.exportSymbol(
    'ol.interaction.condition.noModifierKeys',
    ol.interaction.condition.noModifierKeys);


goog.exportSymbol(
    'ol.interaction.condition.platformModifierKeyOnly',
    ol.interaction.condition.platformModifierKeyOnly);


goog.exportSymbol(
    'ol.interaction.condition.shiftKeyOnly',
    ol.interaction.condition.shiftKeyOnly);


goog.exportSymbol(
    'ol.interaction.condition.targetNotEditable',
    ol.interaction.condition.targetNotEditable);


/**
 * @param {olx.interaction.DefaultsOptionsExtern} options Options.
 * @return {ol.Collection} Return value.
 */
ol.interaction.defaultsExport = function(options) {
  /** @type {ol.interaction.DefaultsOptions} */
  var arg =
      /** @type {ol.interaction.DefaultsOptions} */
      (options);
  if (goog.isDefAndNotNull(options)) {
    arg.altShiftDragRotate =
        options.altShiftDragRotate;
    arg.doubleClickZoom =
        options.doubleClickZoom;
    arg.dragPan =
        options.dragPan;
    arg.keyboard =
        options.keyboard;
    arg.mouseWheelZoom =
        options.mouseWheelZoom;
    arg.shiftDragZoom =
        options.shiftDragZoom;
    arg.touchPan =
        options.touchPan;
    arg.touchRotate =
        options.touchRotate;
    arg.touchZoom =
        options.touchZoom;
    arg.zoomDelta =
        options.zoomDelta;
  }
  return ol.interaction.defaults(arg);
};
goog.exportSymbol(
    'ol.interaction.defaults',
    ol.interaction.defaultsExport);



/**
 * @constructor
 * @extends {ol.layer.Group}
 * @param {olx.layer.GroupOptionsExtern} options Options.
 */
ol.layer.GroupExport = function(options) {
  /** @type {ol.layer.GroupOptions} */
  var arg = /** @type {ol.layer.GroupOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.brightness = options.brightness;
    arg.contrast = options.contrast;
    arg.hue = options.hue;
    arg.layers = options.layers;
    arg.maxResolution = options.maxResolution;
    arg.minResolution = options.minResolution;
    arg.opacity = options.opacity;
    arg.saturation = options.saturation;
    arg.visible = options.visible;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.GroupExport,
    ol.layer.Group);
goog.exportSymbol(
    'ol.layer.Group',
    ol.layer.GroupExport);



/**
 * @constructor
 * @extends {ol.layer.Image}
 * @param {olx.layer.LayerOptionsExtern} options Options.
 */
ol.layer.ImageExport = function(options) {
  /** @type {ol.layer.LayerOptions} */
  var arg = /** @type {ol.layer.LayerOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.brightness = options.brightness;
    arg.contrast = options.contrast;
    arg.hue = options.hue;
    arg.maxResolution = options.maxResolution;
    arg.minResolution = options.minResolution;
    arg.opacity = options.opacity;
    arg.saturation = options.saturation;
    arg.source = options.source;
    arg.visible = options.visible;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.ImageExport,
    ol.layer.Image);
goog.exportSymbol(
    'ol.layer.Image',
    ol.layer.ImageExport);


goog.exportSymbol(
    'ol.layer.Layer',
    ol.layer.Layer);
goog.exportProperty(
    ol.layer.Layer.prototype,
    'getSource',
    ol.layer.Layer.prototype.getSource);



/**
 * @constructor
 * @extends {ol.layer.Tile}
 * @param {olx.layer.TileOptionsExtern} options Options.
 */
ol.layer.TileExport = function(options) {
  /** @type {ol.layer.TileOptions} */
  var arg = /** @type {ol.layer.TileOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.brightness = options.brightness;
    arg.contrast = options.contrast;
    arg.hue = options.hue;
    arg.maxResolution = options.maxResolution;
    arg.minResolution = options.minResolution;
    arg.opacity = options.opacity;
    arg.preload = options.preload;
    arg.saturation = options.saturation;
    arg.source = options.source;
    arg.visible = options.visible;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.TileExport,
    ol.layer.Tile);
goog.exportSymbol(
    'ol.layer.Tile',
    ol.layer.TileExport);



/**
 * @constructor
 * @extends {ol.layer.Vector}
 * @param {olx.layer.VectorLayerOptionsExtern} options Options.
 */
ol.layer.VectorExport = function(options) {
  /** @type {ol.layer.VectorLayerOptions} */
  var arg = /** @type {ol.layer.VectorLayerOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.maxResolution = options.maxResolution;
    arg.minResolution = options.minResolution;
    arg.opacity = options.opacity;
    arg.source = options.source;
    arg.style = options.style;
    arg.transformFeatureInfo = options.transformFeatureInfo;
    arg.visible = options.visible;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.layer.VectorExport,
    ol.layer.Vector);
goog.exportSymbol(
    'ol.layer.Vector',
    ol.layer.VectorExport);


goog.exportSymbol(
    'ol.layer.Vector2',
    ol.layer.Vector2);


goog.exportSymbol(
    'ol.parser.GPX',
    ol.parser.GPX);


goog.exportSymbol(
    'ol.parser.GeoJSON',
    ol.parser.GeoJSON);


goog.exportSymbol(
    'ol.parser.KML',
    ol.parser.KML);


goog.exportSymbol(
    'ol.parser.TopoJSON',
    ol.parser.TopoJSON);


goog.exportSymbol(
    'ol.parser.WKT',
    ol.parser.WKT);
goog.exportProperty(
    ol.parser.WKT,
    'read',
    ol.parser.WKT.read);
goog.exportProperty(
    ol.parser.WKT,
    'write',
    ol.parser.WKT.write);
goog.exportProperty(
    ol.parser.WKT.prototype,
    'read',
    ol.parser.WKT.prototype.read);
goog.exportProperty(
    ol.parser.WKT.prototype,
    'write',
    ol.parser.WKT.prototype.write);


goog.exportSymbol(
    'ol.parser.ogc.GML_v2',
    ol.parser.ogc.GML_v2);
goog.exportProperty(
    ol.parser.ogc.GML_v2.prototype,
    'read',
    ol.parser.ogc.GML_v2.prototype.read);
goog.exportProperty(
    ol.parser.ogc.GML_v2.prototype,
    'write',
    ol.parser.ogc.GML_v2.prototype.write);


goog.exportSymbol(
    'ol.parser.ogc.GML_v3',
    ol.parser.ogc.GML_v3);
goog.exportProperty(
    ol.parser.ogc.GML_v3.prototype,
    'read',
    ol.parser.ogc.GML_v3.prototype.read);
goog.exportProperty(
    ol.parser.ogc.GML_v3.prototype,
    'write',
    ol.parser.ogc.GML_v3.prototype.write);


goog.exportSymbol(
    'ol.parser.ogc.WMSCapabilities',
    ol.parser.ogc.WMSCapabilities);
goog.exportProperty(
    ol.parser.ogc.WMSCapabilities.prototype,
    'read',
    ol.parser.ogc.WMSCapabilities.prototype.read);


goog.exportSymbol(
    'ol.parser.ogc.WMTSCapabilities',
    ol.parser.ogc.WMTSCapabilities);
goog.exportProperty(
    ol.parser.ogc.WMTSCapabilities.prototype,
    'read',
    ol.parser.ogc.WMTSCapabilities.prototype.read);



/**
 * @constructor
 * @extends {ol.proj.Projection}
 * @param {olx.ProjectionOptionsExtern} options Options.
 */
ol.proj.ProjectionExport = function(options) {
  /** @type {ol.ProjectionOptions} */
  var arg = /** @type {ol.ProjectionOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.axisOrientation = options.axisOrientation;
    arg.code = options.code;
    arg.extent = options.extent;
    arg.global = options.global;
    arg.units = options.units;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.proj.ProjectionExport,
    ol.proj.Projection);
goog.exportSymbol(
    'ol.proj.Projection',
    ol.proj.ProjectionExport);
goog.exportProperty(
    ol.proj.Projection.prototype,
    'getExtent',
    ol.proj.Projection.prototype.getExtent);


goog.exportSymbol(
    'ol.proj.Units',
    ol.proj.Units);
goog.exportProperty(
    ol.proj.Units,
    'DEGREES',
    ol.proj.Units.DEGREES);
goog.exportProperty(
    ol.proj.Units,
    'FEET',
    ol.proj.Units.FEET);
goog.exportProperty(
    ol.proj.Units,
    'METERS',
    ol.proj.Units.METERS);


goog.exportSymbol(
    'ol.proj.addProjection',
    ol.proj.addProjection);


goog.exportSymbol(
    'ol.proj.common.add',
    ol.proj.common.add);


goog.exportSymbol(
    'ol.proj.configureProj4jsProjection',
    ol.proj.configureProj4jsProjection);


goog.exportSymbol(
    'ol.proj.get',
    ol.proj.get);


goog.exportSymbol(
    'ol.proj.getTransform',
    ol.proj.getTransform);


goog.exportSymbol(
    'ol.proj.getTransformFromProjections',
    ol.proj.getTransformFromProjections);


goog.exportSymbol(
    'ol.proj.transform',
    ol.proj.transform);


goog.exportSymbol(
    'ol.proj.transformWithProjections',
    ol.proj.transformWithProjections);
goog.exportProperty(
    ol.renderer.canvas.Map.prototype,
    'getCanvas',
    ol.renderer.canvas.Map.prototype.getCanvas);



/**
 * @constructor
 * @extends {ol.source.BingMaps}
 * @param {olx.source.BingMapsOptionsExtern} options Options.
 */
ol.source.BingMapsExport = function(options) {
  /** @type {ol.source.BingMapsOptions} */
  var arg = /** @type {ol.source.BingMapsOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.culture = options.culture;
    arg.key = options.key;
    arg.style = options.style;
    arg.tileLoadFunction = options.tileLoadFunction;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.BingMapsExport,
    ol.source.BingMaps);
goog.exportSymbol(
    'ol.source.BingMaps',
    ol.source.BingMapsExport);



/**
 * @constructor
 * @extends {ol.source.ImageStatic}
 * @param {olx.source.ImageStaticOptionsExtern} options Options.
 */
ol.source.ImageStaticExport = function(options) {
  /** @type {ol.source.ImageStaticOptions} */
  var arg = /** @type {ol.source.ImageStaticOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.extent = options.extent;
    arg.imageExtent = options.imageExtent;
    arg.imageSize = options.imageSize;
    arg.projection = options.projection;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.ImageStaticExport,
    ol.source.ImageStatic);
goog.exportSymbol(
    'ol.source.ImageStatic',
    ol.source.ImageStaticExport);



/**
 * @constructor
 * @extends {ol.source.ImageWMS}
 * @param {olx.source.ImageWMSOptionsExtern} options Options.
 */
ol.source.ImageWMSExport = function(options) {
  /** @type {ol.source.ImageWMSOptions} */
  var arg = /** @type {ol.source.ImageWMSOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.extent = options.extent;
    arg.params = options.params;
    arg.projection = options.projection;
    arg.ratio = options.ratio;
    arg.resolutions = options.resolutions;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.ImageWMSExport,
    ol.source.ImageWMS);
goog.exportSymbol(
    'ol.source.ImageWMS',
    ol.source.ImageWMSExport);
goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'getParams',
    ol.source.ImageWMS.prototype.getParams);
goog.exportProperty(
    ol.source.ImageWMS.prototype,
    'updateParams',
    ol.source.ImageWMS.prototype.updateParams);


goog.exportSymbol(
    'ol.source.MapQuestOSM',
    ol.source.MapQuestOSM);


goog.exportSymbol(
    'ol.source.MapQuestOpenAerial',
    ol.source.MapQuestOpenAerial);


goog.exportSymbol(
    'ol.source.OSM',
    ol.source.OSM);
goog.exportProperty(
    ol.source.OSM,
    'DATA_ATTRIBUTION',
    ol.source.OSM.DATA_ATTRIBUTION);
goog.exportProperty(
    ol.source.OSM,
    'TILE_ATTRIBUTION',
    ol.source.OSM.TILE_ATTRIBUTION);
goog.exportProperty(
    ol.source.Source.prototype,
    'getExtent',
    ol.source.Source.prototype.getExtent);



/**
 * @constructor
 * @extends {ol.source.Stamen}
 * @param {olx.source.StamenOptionsExtern} options Options.
 */
ol.source.StamenExport = function(options) {
  /** @type {ol.source.StamenOptions} */
  var arg = /** @type {ol.source.StamenOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.layer = options.layer;
    arg.maxZoom = options.maxZoom;
    arg.minZoom = options.minZoom;
    arg.opaque = options.opaque;
    arg.tileLoadFunction = options.tileLoadFunction;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.StamenExport,
    ol.source.Stamen);
goog.exportSymbol(
    'ol.source.Stamen',
    ol.source.StamenExport);


goog.exportSymbol(
    'ol.source.Tile',
    ol.source.Tile);
goog.exportProperty(
    ol.source.Tile.prototype,
    'getTileGrid',
    ol.source.Tile.prototype.getTileGrid);



/**
 * @constructor
 * @extends {ol.source.TileDebug}
 * @param {olx.source.TileDebugOptionsExtern} options Options.
 */
ol.source.TileDebugExport = function(options) {
  /** @type {ol.source.TileDebugOptions} */
  var arg = /** @type {ol.source.TileDebugOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.extent = options.extent;
    arg.projection = options.projection;
    arg.tileGrid = options.tileGrid;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.TileDebugExport,
    ol.source.TileDebug);
goog.exportSymbol(
    'ol.source.TileDebug',
    ol.source.TileDebugExport);



/**
 * @constructor
 * @extends {ol.source.TileJSON}
 * @param {olx.source.TileJSONOptionsExtern} options Options.
 */
ol.source.TileJSONExport = function(options) {
  /** @type {ol.source.TileJSONOptions} */
  var arg = /** @type {ol.source.TileJSONOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.crossOrigin = options.crossOrigin;
    arg.tileLoadFunction = options.tileLoadFunction;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.TileJSONExport,
    ol.source.TileJSON);
goog.exportSymbol(
    'ol.source.TileJSON',
    ol.source.TileJSONExport);



/**
 * @constructor
 * @extends {ol.source.TileWMS}
 * @param {olx.source.TileWMSOptionsExtern} options Options.
 */
ol.source.TileWMSExport = function(options) {
  /** @type {ol.source.TileWMSOptions} */
  var arg = /** @type {ol.source.TileWMSOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.extent = options.extent;
    arg.maxZoom = options.maxZoom;
    arg.params = options.params;
    arg.projection = options.projection;
    arg.tileGrid = options.tileGrid;
    arg.tileLoadFunction = options.tileLoadFunction;
    arg.url = options.url;
    arg.urls = options.urls;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.TileWMSExport,
    ol.source.TileWMS);
goog.exportSymbol(
    'ol.source.TileWMS',
    ol.source.TileWMSExport);
goog.exportProperty(
    ol.source.TileWMS.prototype,
    'getParams',
    ol.source.TileWMS.prototype.getParams);
goog.exportProperty(
    ol.source.TileWMS.prototype,
    'updateParams',
    ol.source.TileWMS.prototype.updateParams);



/**
 * @constructor
 * @extends {ol.source.Vector}
 * @param {olx.source.VectorOptionsExtern} options Options.
 */
ol.source.VectorExport = function(options) {
  /** @type {ol.source.VectorOptions} */
  var arg = /** @type {ol.source.VectorOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.data = options.data;
    arg.extent = options.extent;
    arg.logo = options.logo;
    arg.parser = options.parser;
    arg.projection = options.projection;
    arg.url = options.url;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.VectorExport,
    ol.source.Vector);
goog.exportSymbol(
    'ol.source.Vector',
    ol.source.VectorExport);


goog.exportSymbol(
    'ol.source.Vector2',
    ol.source.Vector2);


goog.exportSymbol(
    'ol.source.WMSGetFeatureInfoMethod',
    ol.source.WMSGetFeatureInfoMethod);



/**
 * @constructor
 * @extends {ol.source.WMTS}
 * @param {olx.source.WMTSOptionsExtern} options Options.
 */
ol.source.WMTSExport = function(options) {
  /** @type {ol.source.WMTSOptions} */
  var arg = /** @type {ol.source.WMTSOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.dimensions = options.dimensions;
    arg.extent = options.extent;
    arg.format = options.format;
    arg.layer = options.layer;
    arg.matrixSet = options.matrixSet;
    arg.maxZoom = options.maxZoom;
    arg.projection = options.projection;
    arg.requestEncoding = options.requestEncoding;
    arg.style = options.style;
    arg.tileGrid = options.tileGrid;
    arg.tileLoadFunction = options.tileLoadFunction;
    arg.url = options.url;
    arg.urls = options.urls;
    arg.version = options.version;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.WMTSExport,
    ol.source.WMTS);
goog.exportSymbol(
    'ol.source.WMTS',
    ol.source.WMTSExport);


goog.exportSymbol(
    'ol.source.WMTS.optionsFromCapabilities',
    ol.source.WMTS.optionsFromCapabilities);
goog.exportProperty(
    ol.source.WMTS.prototype,
    'getDimensions',
    ol.source.WMTS.prototype.getDimensions);
goog.exportProperty(
    ol.source.WMTS.prototype,
    'updateDimensions',
    ol.source.WMTS.prototype.updateDimensions);



/**
 * @constructor
 * @extends {ol.source.XYZ}
 * @param {olx.source.XYZOptionsExtern} options Options.
 */
ol.source.XYZExport = function(options) {
  /** @type {ol.source.XYZOptions} */
  var arg = /** @type {ol.source.XYZOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.attributions = options.attributions;
    arg.crossOrigin = options.crossOrigin;
    arg.extent = options.extent;
    arg.logo = options.logo;
    arg.maxZoom = options.maxZoom;
    arg.minZoom = options.minZoom;
    arg.projection = options.projection;
    arg.tileLoadFunction = options.tileLoadFunction;
    arg.tileUrlFunction = options.tileUrlFunction;
    arg.url = options.url;
    arg.urls = options.urls;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.source.XYZExport,
    ol.source.XYZ);
goog.exportSymbol(
    'ol.source.XYZ',
    ol.source.XYZExport);
goog.exportProperty(
    ol.source.XYZ.prototype,
    'setUrl',
    ol.source.XYZ.prototype.setUrl);



/**
 * @constructor
 * @extends {ol.style.Fill}
 * @param {olx.style.FillOptionsExtern} options Options.
 */
ol.style.FillExport = function(options) {
  /** @type {ol.style.FillOptions} */
  var arg = /** @type {ol.style.FillOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.color = options.color;
    arg.opacity = options.opacity;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.FillExport,
    ol.style.Fill);
goog.exportSymbol(
    'ol.style.Fill',
    ol.style.FillExport);



/**
 * @constructor
 * @extends {ol.style.Icon}
 * @param {olx.style.IconOptionsExtern} options Options.
 */
ol.style.IconExport = function(options) {
  /** @type {ol.style.IconOptions} */
  var arg = /** @type {ol.style.IconOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.height = options.height;
    arg.opacity = options.opacity;
    arg.rotation = options.rotation;
    arg.url = options.url;
    arg.width = options.width;
    arg.xOffset = options.xOffset;
    arg.yOffset = options.yOffset;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.IconExport,
    ol.style.Icon);
goog.exportSymbol(
    'ol.style.Icon',
    ol.style.IconExport);



/**
 * @constructor
 * @extends {ol.style.Rule}
 * @param {olx.style.RuleOptionsExtern} options Options.
 */
ol.style.RuleExport = function(options) {
  /** @type {ol.style.RuleOptions} */
  var arg = /** @type {ol.style.RuleOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.filter = options.filter;
    arg.symbolizers = options.symbolizers;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.RuleExport,
    ol.style.Rule);
goog.exportSymbol(
    'ol.style.Rule',
    ol.style.RuleExport);



/**
 * @constructor
 * @extends {ol.style.Shape}
 * @param {olx.style.ShapeOptionsExtern} options Options.
 */
ol.style.ShapeExport = function(options) {
  /** @type {ol.style.ShapeOptions} */
  var arg = /** @type {ol.style.ShapeOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.fill = options.fill;
    arg.size = options.size;
    arg.stroke = options.stroke;
    arg.type = options.type;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.ShapeExport,
    ol.style.Shape);
goog.exportSymbol(
    'ol.style.Shape',
    ol.style.ShapeExport);


goog.exportSymbol(
    'ol.style.ShapeType',
    ol.style.ShapeType);
goog.exportProperty(
    ol.style.ShapeType,
    'CIRCLE',
    ol.style.ShapeType.CIRCLE);



/**
 * @constructor
 * @extends {ol.style.Stroke}
 * @param {olx.style.StrokeOptionsExtern} options Options.
 */
ol.style.StrokeExport = function(options) {
  /** @type {ol.style.StrokeOptions} */
  var arg = /** @type {ol.style.StrokeOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.color = options.color;
    arg.opacity = options.opacity;
    arg.width = options.width;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.StrokeExport,
    ol.style.Stroke);
goog.exportSymbol(
    'ol.style.Stroke',
    ol.style.StrokeExport);



/**
 * @constructor
 * @extends {ol.style.Style}
 * @param {olx.style.StyleOptionsExtern} options Options.
 */
ol.style.StyleExport = function(options) {
  /** @type {ol.style.StyleOptions} */
  var arg = /** @type {ol.style.StyleOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.rules = options.rules;
    arg.symbolizers = options.symbolizers;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.StyleExport,
    ol.style.Style);
goog.exportSymbol(
    'ol.style.Style',
    ol.style.StyleExport);



/**
 * @constructor
 * @extends {ol.style.Text}
 * @param {olx.style.TextOptionsExtern} options Options.
 */
ol.style.TextExport = function(options) {
  /** @type {ol.style.TextOptions} */
  var arg = /** @type {ol.style.TextOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.color = options.color;
    arg.fontFamily = options.fontFamily;
    arg.fontSize = options.fontSize;
    arg.opacity = options.opacity;
    arg.text = options.text;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.style.TextExport,
    ol.style.Text);
goog.exportSymbol(
    'ol.style.Text',
    ol.style.TextExport);



/**
 * @constructor
 * @extends {ol.tilegrid.TileGrid}
 * @param {olx.tilegrid.TileGridOptionsExtern} options Options.
 */
ol.tilegrid.TileGridExport = function(options) {
  /** @type {ol.tilegrid.TileGridOptions} */
  var arg = /** @type {ol.tilegrid.TileGridOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.minZoom = options.minZoom;
    arg.origin = options.origin;
    arg.origins = options.origins;
    arg.resolutions = options.resolutions;
    arg.tileSize = options.tileSize;
    arg.tileSizes = options.tileSizes;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.tilegrid.TileGridExport,
    ol.tilegrid.TileGrid);
goog.exportSymbol(
    'ol.tilegrid.TileGrid',
    ol.tilegrid.TileGridExport);
goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getMinZoom',
    ol.tilegrid.TileGrid.prototype.getMinZoom);
goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getOrigin',
    ol.tilegrid.TileGrid.prototype.getOrigin);
goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getResolutions',
    ol.tilegrid.TileGrid.prototype.getResolutions);
goog.exportProperty(
    ol.tilegrid.TileGrid.prototype,
    'getTileSize',
    ol.tilegrid.TileGrid.prototype.getTileSize);



/**
 * @constructor
 * @extends {ol.tilegrid.WMTS}
 * @param {olx.tilegrid.WMTSOptionsExtern} options Options.
 */
ol.tilegrid.WMTSExport = function(options) {
  /** @type {ol.tilegrid.WMTSOptions} */
  var arg = /** @type {ol.tilegrid.WMTSOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.matrixIds = options.matrixIds;
    arg.origin = options.origin;
    arg.origins = options.origins;
    arg.resolutions = options.resolutions;
    arg.tileSize = options.tileSize;
    arg.tileSizes = options.tileSizes;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.tilegrid.WMTSExport,
    ol.tilegrid.WMTS);
goog.exportSymbol(
    'ol.tilegrid.WMTS',
    ol.tilegrid.WMTSExport);
goog.exportProperty(
    ol.tilegrid.WMTS.prototype,
    'getMatrixIds',
    ol.tilegrid.WMTS.prototype.getMatrixIds);



/**
 * @constructor
 * @extends {ol.tilegrid.XYZ}
 * @param {olx.tilegrid.XYZOptionsExtern} options Options.
 */
ol.tilegrid.XYZExport = function(options) {
  /** @type {ol.tilegrid.XYZOptions} */
  var arg = /** @type {ol.tilegrid.XYZOptions} */ (options);
  if (goog.isDefAndNotNull(options)) {
    arg.maxZoom = options.maxZoom;
  }
  goog.base(this, arg);
};
goog.inherits(
    ol.tilegrid.XYZExport,
    ol.tilegrid.XYZ);
goog.exportSymbol(
    'ol.tilegrid.XYZ',
    ol.tilegrid.XYZExport);
