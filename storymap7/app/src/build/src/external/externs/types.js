/**
 * @externs
 */


/**
 * @type {Object}
 */
var olx;


/**
 * @type {Object}
 */
olx.animation = {};


/**
 * @type {Object}
 */
olx.control = {};


/**
 * @type {Object}
 */
olx.interaction = {};


/**
 * @type {Object}
 */
olx.layer = {};


/**
 * @type {Object}
 */
olx.parser = {};


/**
 * @type {Object}
 */
olx.source = {};


/**
 * @type {Object}
 */
olx.style = {};


/**
 * @type {Object}
 */
olx.tilegrid = {};



/**
 * @interface
 */
olx.AttributionOptionsExtern = function() {};


/**
 * @type {string}
 */
olx.AttributionOptionsExtern.prototype.html;


/**
 * @type {Object.<string, Array.<ol.TileRange>>|undefined}
 */
olx.AttributionOptionsExtern.prototype.tileRanges;



/**
 * @interface
 */
olx.DeviceOrientationOptionsExtern = function() {};


/**
 * @type {boolean|undefined}
 */
olx.DeviceOrientationOptionsExtern.prototype.tracking;



/**
 * @interface
 */
olx.GeolocationOptionsExtern = function() {};


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.GeolocationOptionsExtern.prototype.projection;


/**
 * @type {boolean|undefined}
 */
olx.GeolocationOptionsExtern.prototype.tracking;


/**
 * @type {GeolocationPositionOptions|undefined}
 */
olx.GeolocationOptionsExtern.prototype.trackingOptions;



/**
 * @interface
 */
olx.GetFeatureInfoOptionsExtern = function() {};


/**
 * @type {function()|undefined}
 */
olx.GetFeatureInfoOptionsExtern.prototype.error;


/**
 * @type {Array.<ol.layer.Layer>|undefined}
 */
olx.GetFeatureInfoOptionsExtern.prototype.layers;


/**
 * @type {ol.Pixel}
 */
olx.GetFeatureInfoOptionsExtern.prototype.pixel;


/**
 * @type {function(Array.<Array.<string|undefined>>)}
 */
olx.GetFeatureInfoOptionsExtern.prototype.success;



/**
 * @interface
 */
olx.GetFeaturesOptionsExtern = function() {};


/**
 * @type {function()|undefined}
 */
olx.GetFeaturesOptionsExtern.prototype.error;


/**
 * @type {Array.<ol.layer.Layer>|undefined}
 */
olx.GetFeaturesOptionsExtern.prototype.layers;


/**
 * @type {ol.Pixel}
 */
olx.GetFeaturesOptionsExtern.prototype.pixel;


/**
 * @type {function(Array.<Array.<ol.Feature|undefined>>)}
 */
olx.GetFeaturesOptionsExtern.prototype.success;



/**
 * @interface
 */
olx.MapOptionsExtern = function() {};


/**
 * @type {ol.Collection|Array.<ol.control.Control>|undefined}
 */
olx.MapOptionsExtern.prototype.controls;


/**
 * @type {ol.Collection|undefined}
 */
olx.MapOptionsExtern.prototype.interactions;


/**
 * @type {Array.<ol.layer.Base>|ol.Collection|undefined}
 */
olx.MapOptionsExtern.prototype.layers;


/**
 * @type {ol.Collection|Array.<ol.Overlay>|undefined}
 */
olx.MapOptionsExtern.prototype.overlays;


/**
 * @type {ol.RendererHint|undefined}
 */
olx.MapOptionsExtern.prototype.renderer;


/**
 * @type {Array.<ol.RendererHint>|undefined}
 */
olx.MapOptionsExtern.prototype.renderers;


/**
 * @type {Element|string|undefined}
 */
olx.MapOptionsExtern.prototype.target;


/**
 * @type {ol.IView|undefined}
 */
olx.MapOptionsExtern.prototype.view;



/**
 * @interface
 */
olx.OverlayOptionsExtern = function() {};


/**
 * @type {Element|undefined}
 */
olx.OverlayOptionsExtern.prototype.element;


/**
 * @type {ol.Coordinate|undefined}
 */
olx.OverlayOptionsExtern.prototype.position;


/**
 * @type {ol.OverlayPositioning|undefined}
 */
olx.OverlayOptionsExtern.prototype.positioning;



/**
 * @interface
 */
olx.Proj4jsProjectionOptionsExtern = function() {};


/**
 * @type {string}
 */
olx.Proj4jsProjectionOptionsExtern.prototype.code;


/**
 * @type {ol.Extent|undefined}
 */
olx.Proj4jsProjectionOptionsExtern.prototype.extent;


/**
 * @type {boolean|undefined}
 */
olx.Proj4jsProjectionOptionsExtern.prototype.global;



/**
 * @interface
 */
olx.ProjectionOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.ProjectionOptionsExtern.prototype.axisOrientation;


/**
 * @type {string}
 */
olx.ProjectionOptionsExtern.prototype.code;


/**
 * @type {ol.Extent|undefined}
 */
olx.ProjectionOptionsExtern.prototype.extent;


/**
 * @type {boolean|undefined}
 */
olx.ProjectionOptionsExtern.prototype.global;


/**
 * @type {ol.proj.Units}
 */
olx.ProjectionOptionsExtern.prototype.units;



/**
 * @interface
 */
olx.View2DOptionsExtern = function() {};


/**
 * @type {ol.Coordinate|undefined}
 */
olx.View2DOptionsExtern.prototype.center;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.maxResolution;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.maxZoom;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.View2DOptionsExtern.prototype.projection;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.resolution;


/**
 * @type {Array.<number>|undefined}
 */
olx.View2DOptionsExtern.prototype.resolutions;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.rotation;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.zoom;


/**
 * @type {number|undefined}
 */
olx.View2DOptionsExtern.prototype.zoomFactor;



/**
 * @interface
 */
olx.animation.BounceOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.animation.BounceOptionsExtern.prototype.duration;


/**
 * @type {function(number):number|undefined}
 */
olx.animation.BounceOptionsExtern.prototype.easing;


/**
 * @type {number}
 */
olx.animation.BounceOptionsExtern.prototype.resolution;


/**
 * @type {number|undefined}
 */
olx.animation.BounceOptionsExtern.prototype.start;



/**
 * @interface
 */
olx.animation.PanOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.animation.PanOptionsExtern.prototype.duration;


/**
 * @type {function(number):number|undefined}
 */
olx.animation.PanOptionsExtern.prototype.easing;


/**
 * @type {ol.Coordinate}
 */
olx.animation.PanOptionsExtern.prototype.source;


/**
 * @type {number|undefined}
 */
olx.animation.PanOptionsExtern.prototype.start;



/**
 * @interface
 */
olx.animation.RotateOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.animation.RotateOptionsExtern.prototype.duration;


/**
 * @type {function(number):number|undefined}
 */
olx.animation.RotateOptionsExtern.prototype.easing;


/**
 * @type {number}
 */
olx.animation.RotateOptionsExtern.prototype.rotation;


/**
 * @type {number|undefined}
 */
olx.animation.RotateOptionsExtern.prototype.start;



/**
 * @interface
 */
olx.animation.ZoomOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.animation.ZoomOptionsExtern.prototype.duration;


/**
 * @type {function(number):number|undefined}
 */
olx.animation.ZoomOptionsExtern.prototype.easing;


/**
 * @type {number}
 */
olx.animation.ZoomOptionsExtern.prototype.resolution;


/**
 * @type {number|undefined}
 */
olx.animation.ZoomOptionsExtern.prototype.start;



/**
 * @interface
 */
olx.control.AttributionOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.control.AttributionOptionsExtern.prototype.className;


/**
 * @type {Element|undefined}
 */
olx.control.AttributionOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.control.ControlOptionsExtern = function() {};


/**
 * @type {Element|undefined}
 */
olx.control.ControlOptionsExtern.prototype.element;


/**
 * @type {Element|undefined}
 */
olx.control.ControlOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.control.DefaultsOptionsExtern = function() {};


/**
 * @type {boolean|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.attribution;


/**
 * @type {olx.control.AttributionOptionsExtern|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.attributionOptions;


/**
 * @type {boolean|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.logo;


/**
 * @type {olx.control.LogoOptionsExtern|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.logoOptions;


/**
 * @type {boolean|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.zoom;


/**
 * @type {olx.control.ZoomOptionsExtern|undefined}
 */
olx.control.DefaultsOptionsExtern.prototype.zoomOptions;



/**
 * @interface
 */
olx.control.FullScreenOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.control.FullScreenOptionsExtern.prototype.className;


/**
 * @type {boolean|undefined}
 */
olx.control.FullScreenOptionsExtern.prototype.keys;


/**
 * @type {Element|undefined}
 */
olx.control.FullScreenOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.control.LogoOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.control.LogoOptionsExtern.prototype.className;


/**
 * @type {Element|undefined}
 */
olx.control.LogoOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.control.MousePositionOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.control.MousePositionOptionsExtern.prototype.className;


/**
 * @type {ol.CoordinateFormatType|undefined}
 */
olx.control.MousePositionOptionsExtern.prototype.coordinateFormat;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.control.MousePositionOptionsExtern.prototype.projection;


/**
 * @type {Element|undefined}
 */
olx.control.MousePositionOptionsExtern.prototype.target;


/**
 * @type {string|undefined}
 */
olx.control.MousePositionOptionsExtern.prototype.undefinedHTML;



/**
 * @interface
 */
olx.control.ScaleLineOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.control.ScaleLineOptionsExtern.prototype.className;


/**
 * @type {number|undefined}
 */
olx.control.ScaleLineOptionsExtern.prototype.minWidth;


/**
 * @type {Element|undefined}
 */
olx.control.ScaleLineOptionsExtern.prototype.target;


/**
 * @type {ol.control.ScaleLineUnits|undefined}
 */
olx.control.ScaleLineOptionsExtern.prototype.units;



/**
 * @interface
 */
olx.control.ZoomOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.control.ZoomOptionsExtern.prototype.className;


/**
 * @type {number|undefined}
 */
olx.control.ZoomOptionsExtern.prototype.delta;


/**
 * @type {Element|undefined}
 */
olx.control.ZoomOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.control.ZoomSliderOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.control.ZoomSliderOptionsExtern.prototype.className;


/**
 * @type {number|undefined}
 */
olx.control.ZoomSliderOptionsExtern.prototype.maxResolution;


/**
 * @type {number|undefined}
 */
olx.control.ZoomSliderOptionsExtern.prototype.minResolution;



/**
 * @interface
 */
olx.control.ZoomToExtentOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.control.ZoomToExtentOptionsExtern.prototype.className;


/**
 * @type {ol.Extent|undefined}
 */
olx.control.ZoomToExtentOptionsExtern.prototype.extent;


/**
 * @type {Element|undefined}
 */
olx.control.ZoomToExtentOptionsExtern.prototype.target;



/**
 * @interface
 */
olx.interaction.DefaultsOptionsExtern = function() {};


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.altShiftDragRotate;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.doubleClickZoom;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.dragPan;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.keyboard;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.mouseWheelZoom;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.shiftDragZoom;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.touchPan;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.touchRotate;


/**
 * @type {boolean|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.touchZoom;


/**
 * @type {number|undefined}
 */
olx.interaction.DefaultsOptionsExtern.prototype.zoomDelta;



/**
 * @interface
 */
olx.interaction.DoubleClickZoomOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.interaction.DoubleClickZoomOptionsExtern.prototype.delta;



/**
 * @interface
 */
olx.interaction.DragPanOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.DragPanOptionsExtern.prototype.condition;


/**
 * @type {ol.Kinetic|undefined}
 */
olx.interaction.DragPanOptionsExtern.prototype.kinetic;



/**
 * @interface
 */
olx.interaction.DragRotateAndZoomOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.DragRotateAndZoomOptionsExtern.prototype.condition;



/**
 * @interface
 */
olx.interaction.DragRotateOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.DragRotateOptionsExtern.prototype.condition;



/**
 * @interface
 */
olx.interaction.DragZoomOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.DragZoomOptionsExtern.prototype.condition;



/**
 * @interface
 */
olx.interaction.KeyboardPanOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.KeyboardPanOptionsExtern.prototype.condition;


/**
 * @type {number|undefined}
 */
olx.interaction.KeyboardPanOptionsExtern.prototype.pixelDelta;



/**
 * @interface
 */
olx.interaction.KeyboardZoomOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.KeyboardZoomOptionsExtern.prototype.condition;


/**
 * @type {number|undefined}
 */
olx.interaction.KeyboardZoomOptionsExtern.prototype.delta;



/**
 * @interface
 */
olx.interaction.SelectOptionsExtern = function() {};


/**
 * @type {ol.interaction.ConditionType|undefined}
 */
olx.interaction.SelectOptionsExtern.prototype.condition;


/**
 * @type {undefined|function(ol.layer.Layer):boolean}
 */
olx.interaction.SelectOptionsExtern.prototype.layerFilter;



/**
 * @interface
 */
olx.interaction.TouchPanOptionsExtern = function() {};


/**
 * @type {ol.Kinetic|undefined}
 */
olx.interaction.TouchPanOptionsExtern.prototype.kinetic;



/**
 * @interface
 */
olx.interaction.TouchRotateOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.interaction.TouchRotateOptionsExtern.prototype.threshold;



/**
 * @interface
 */
olx.layer.BaseOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.layer.BaseOptionsExtern.prototype.brightness;


/**
 * @type {number|undefined}
 */
olx.layer.BaseOptionsExtern.prototype.contrast;


/**
 * @type {number|undefined}
 */
olx.layer.BaseOptionsExtern.prototype.hue;


/**
 * @type {number|undefined}
 */
olx.layer.BaseOptionsExtern.prototype.maxResolution;


/**
 * @type {number|undefined}
 */
olx.layer.BaseOptionsExtern.prototype.minResolution;


/**
 * @type {number|undefined}
 */
olx.layer.BaseOptionsExtern.prototype.opacity;


/**
 * @type {number|undefined}
 */
olx.layer.BaseOptionsExtern.prototype.saturation;


/**
 * @type {boolean|undefined}
 */
olx.layer.BaseOptionsExtern.prototype.visible;



/**
 * @interface
 */
olx.layer.GroupOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.layer.GroupOptionsExtern.prototype.brightness;


/**
 * @type {number|undefined}
 */
olx.layer.GroupOptionsExtern.prototype.contrast;


/**
 * @type {number|undefined}
 */
olx.layer.GroupOptionsExtern.prototype.hue;


/**
 * @type {Array.<ol.layer.Base>|ol.Collection|undefined}
 */
olx.layer.GroupOptionsExtern.prototype.layers;


/**
 * @type {number|undefined}
 */
olx.layer.GroupOptionsExtern.prototype.maxResolution;


/**
 * @type {number|undefined}
 */
olx.layer.GroupOptionsExtern.prototype.minResolution;


/**
 * @type {number|undefined}
 */
olx.layer.GroupOptionsExtern.prototype.opacity;


/**
 * @type {number|undefined}
 */
olx.layer.GroupOptionsExtern.prototype.saturation;


/**
 * @type {boolean|undefined}
 */
olx.layer.GroupOptionsExtern.prototype.visible;



/**
 * @interface
 */
olx.layer.LayerOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.brightness;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.contrast;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.hue;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.maxResolution;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.minResolution;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.opacity;


/**
 * @type {number|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.saturation;


/**
 * @type {ol.source.Source}
 */
olx.layer.LayerOptionsExtern.prototype.source;


/**
 * @type {boolean|undefined}
 */
olx.layer.LayerOptionsExtern.prototype.visible;



/**
 * @interface
 */
olx.layer.TileOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.layer.TileOptionsExtern.prototype.brightness;


/**
 * @type {number|undefined}
 */
olx.layer.TileOptionsExtern.prototype.contrast;


/**
 * @type {number|undefined}
 */
olx.layer.TileOptionsExtern.prototype.hue;


/**
 * @type {number|undefined}
 */
olx.layer.TileOptionsExtern.prototype.maxResolution;


/**
 * @type {number|undefined}
 */
olx.layer.TileOptionsExtern.prototype.minResolution;


/**
 * @type {number|undefined}
 */
olx.layer.TileOptionsExtern.prototype.opacity;


/**
 * @type {number|undefined}
 */
olx.layer.TileOptionsExtern.prototype.preload;


/**
 * @type {number|undefined}
 */
olx.layer.TileOptionsExtern.prototype.saturation;


/**
 * @type {ol.source.Source}
 */
olx.layer.TileOptionsExtern.prototype.source;


/**
 * @type {boolean|undefined}
 */
olx.layer.TileOptionsExtern.prototype.visible;



/**
 * @interface
 */
olx.layer.VectorLayerOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.layer.VectorLayerOptionsExtern.prototype.maxResolution;


/**
 * @type {number|undefined}
 */
olx.layer.VectorLayerOptionsExtern.prototype.minResolution;


/**
 * @type {number|undefined}
 */
olx.layer.VectorLayerOptionsExtern.prototype.opacity;


/**
 * @type {ol.source.Source}
 */
olx.layer.VectorLayerOptionsExtern.prototype.source;


/**
 * @type {ol.style.Style|undefined}
 */
olx.layer.VectorLayerOptionsExtern.prototype.style;


/**
 * @type {function(Array.<ol.Feature>):string|undefined}
 */
olx.layer.VectorLayerOptionsExtern.prototype.transformFeatureInfo;


/**
 * @type {boolean|undefined}
 */
olx.layer.VectorLayerOptionsExtern.prototype.visible;



/**
 * @interface
 */
olx.parser.GMLOptionsExtern = function() {};


/**
 * @type {boolean|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.curve;


/**
 * @type {boolean|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.extractAttributes;


/**
 * @type {string|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.featureNS;


/**
 * @type {Array.<string>|string|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.featureType;


/**
 * @type {string|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.geometryName;


/**
 * @type {boolean|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.multiCurve;


/**
 * @type {boolean|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.multiSurface;


/**
 * @type {olx.parser.GMLReadOptionsExtern|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.readOptions;


/**
 * @type {string|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.schemaLocation;


/**
 * @type {boolean|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.surface;


/**
 * @type {olx.parser.GMLWriteOptionsExtern|undefined}
 */
olx.parser.GMLOptionsExtern.prototype.writeOptions;



/**
 * @interface
 */
olx.parser.GMLReadOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.parser.GMLReadOptionsExtern.prototype.axisOrientation;



/**
 * @interface
 */
olx.parser.GMLWriteOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.parser.GMLWriteOptionsExtern.prototype.axisOrientation;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.parser.GMLWriteOptionsExtern.prototype.srsName;



/**
 * @interface
 */
olx.parser.GPXOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.parser.GPXOptionsExtern.prototype.creator;


/**
 * @type {string|undefined}
 */
olx.parser.GPXOptionsExtern.prototype.defaultDesc;


/**
 * @type {boolean|undefined}
 */
olx.parser.GPXOptionsExtern.prototype.extractAttributes;


/**
 * @type {boolean|undefined}
 */
olx.parser.GPXOptionsExtern.prototype.extractRoutes;


/**
 * @type {boolean|undefined}
 */
olx.parser.GPXOptionsExtern.prototype.extractTracks;


/**
 * @type {boolean|undefined}
 */
olx.parser.GPXOptionsExtern.prototype.extractWaypoints;



/**
 * @interface
 */
olx.parser.GPXWriteOptionsExtern = function() {};


/**
 * @type {Array.<ol.Feature>|ol.Feature}
 */
olx.parser.GPXWriteOptionsExtern.prototype.features;


/**
 * @type {Object|undefined}
 */
olx.parser.GPXWriteOptionsExtern.prototype.metadata;



/**
 * @interface
 */
olx.parser.KMLOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.parser.KMLOptionsExtern.prototype.dimension;


/**
 * @type {boolean|undefined}
 */
olx.parser.KMLOptionsExtern.prototype.extractAttributes;


/**
 * @type {boolean|undefined}
 */
olx.parser.KMLOptionsExtern.prototype.extractStyles;


/**
 * @type {number|undefined}
 */
olx.parser.KMLOptionsExtern.prototype.maxDepth;


/**
 * @type {Array.<string>|undefined}
 */
olx.parser.KMLOptionsExtern.prototype.trackAttributes;



/**
 * @interface
 */
olx.source.BingMapsOptionsExtern = function() {};


/**
 * @type {string|undefined}
 */
olx.source.BingMapsOptionsExtern.prototype.culture;


/**
 * @type {string}
 */
olx.source.BingMapsOptionsExtern.prototype.key;


/**
 * @type {string}
 */
olx.source.BingMapsOptionsExtern.prototype.style;


/**
 * @type {ol.TileLoadFunctionType|undefined}
 */
olx.source.BingMapsOptionsExtern.prototype.tileLoadFunction;



/**
 * @interface
 */
olx.source.ImageStaticOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.ImageStaticOptionsExtern.prototype.attributions;


/**
 * @type {null|string|undefined}
 */
olx.source.ImageStaticOptionsExtern.prototype.crossOrigin;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.ImageStaticOptionsExtern.prototype.extent;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.ImageStaticOptionsExtern.prototype.imageExtent;


/**
 * @type {ol.Size|undefined}
 */
olx.source.ImageStaticOptionsExtern.prototype.imageSize;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.source.ImageStaticOptionsExtern.prototype.projection;


/**
 * @type {string|undefined}
 */
olx.source.ImageStaticOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.ImageWMSOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.ImageWMSOptionsExtern.prototype.attributions;


/**
 * @type {null|string|undefined}
 */
olx.source.ImageWMSOptionsExtern.prototype.crossOrigin;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.ImageWMSOptionsExtern.prototype.extent;


/**
 * @type {Object.<string,*>}
 */
olx.source.ImageWMSOptionsExtern.prototype.params;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.source.ImageWMSOptionsExtern.prototype.projection;


/**
 * @type {number|undefined}
 */
olx.source.ImageWMSOptionsExtern.prototype.ratio;


/**
 * @type {Array.<number>|undefined}
 */
olx.source.ImageWMSOptionsExtern.prototype.resolutions;


/**
 * @type {string|undefined}
 */
olx.source.ImageWMSOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.MapQuestOptionsExtern = function() {};


/**
 * @type {ol.TileLoadFunctionType|undefined}
 */
olx.source.MapQuestOptionsExtern.prototype.tileLoadFunction;



/**
 * @interface
 */
olx.source.OSMOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.OSMOptionsExtern.prototype.attributions;


/**
 * @type {number|undefined}
 */
olx.source.OSMOptionsExtern.prototype.maxZoom;


/**
 * @type {ol.TileLoadFunctionType|undefined}
 */
olx.source.OSMOptionsExtern.prototype.tileLoadFunction;


/**
 * @type {string|undefined}
 */
olx.source.OSMOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.StamenOptionsExtern = function() {};


/**
 * @type {string}
 */
olx.source.StamenOptionsExtern.prototype.layer;


/**
 * @type {number|undefined}
 */
olx.source.StamenOptionsExtern.prototype.maxZoom;


/**
 * @type {number|undefined}
 */
olx.source.StamenOptionsExtern.prototype.minZoom;


/**
 * @type {boolean|undefined}
 */
olx.source.StamenOptionsExtern.prototype.opaque;


/**
 * @type {ol.TileLoadFunctionType|undefined}
 */
olx.source.StamenOptionsExtern.prototype.tileLoadFunction;


/**
 * @type {string|undefined}
 */
olx.source.StamenOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.TileDebugOptionsExtern = function() {};


/**
 * @type {ol.Extent|undefined}
 */
olx.source.TileDebugOptionsExtern.prototype.extent;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.source.TileDebugOptionsExtern.prototype.projection;


/**
 * @type {ol.tilegrid.TileGrid|undefined}
 */
olx.source.TileDebugOptionsExtern.prototype.tileGrid;



/**
 * @interface
 */
olx.source.TileJSONOptionsExtern = function() {};


/**
 * @type {null|string|undefined}
 */
olx.source.TileJSONOptionsExtern.prototype.crossOrigin;


/**
 * @type {ol.TileLoadFunctionType|undefined}
 */
olx.source.TileJSONOptionsExtern.prototype.tileLoadFunction;


/**
 * @type {string}
 */
olx.source.TileJSONOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.TileWMSOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.TileWMSOptionsExtern.prototype.attributions;


/**
 * @type {null|string|undefined}
 */
olx.source.TileWMSOptionsExtern.prototype.crossOrigin;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.TileWMSOptionsExtern.prototype.extent;


/**
 * @type {number|undefined}
 */
olx.source.TileWMSOptionsExtern.prototype.maxZoom;


/**
 * @type {Object.<string,*>}
 */
olx.source.TileWMSOptionsExtern.prototype.params;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.source.TileWMSOptionsExtern.prototype.projection;


/**
 * @type {ol.tilegrid.TileGrid|undefined}
 */
olx.source.TileWMSOptionsExtern.prototype.tileGrid;


/**
 * @type {ol.TileLoadFunctionType|undefined}
 */
olx.source.TileWMSOptionsExtern.prototype.tileLoadFunction;


/**
 * @type {string|undefined}
 */
olx.source.TileWMSOptionsExtern.prototype.url;


/**
 * @type {Array.<string>|undefined}
 */
olx.source.TileWMSOptionsExtern.prototype.urls;



/**
 * @interface
 */
olx.source.Vector2OptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.Vector2OptionsExtern.prototype.attributions;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.Vector2OptionsExtern.prototype.extent;


/**
 * @type {Array.<ol.geom2.PointCollection>|undefined}
 */
olx.source.Vector2OptionsExtern.prototype.pointCollections;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.source.Vector2OptionsExtern.prototype.projection;



/**
 * @interface
 */
olx.source.VectorOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.VectorOptionsExtern.prototype.attributions;


/**
 * @type {Object|string|undefined}
 */
olx.source.VectorOptionsExtern.prototype.data;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.VectorOptionsExtern.prototype.extent;


/**
 * @type {string|undefined}
 */
olx.source.VectorOptionsExtern.prototype.logo;


/**
 * @type {ol.parser.Parser}
 */
olx.source.VectorOptionsExtern.prototype.parser;


/**
 * @type {ol.proj.ProjectionLike|undefined}
 */
olx.source.VectorOptionsExtern.prototype.projection;


/**
 * @type {string|undefined}
 */
olx.source.VectorOptionsExtern.prototype.url;



/**
 * @interface
 */
olx.source.WMSGetFeatureInfoOptionsExtern = function() {};


/**
 * @type {ol.source.WMSGetFeatureInfoMethod}
 */
olx.source.WMSGetFeatureInfoOptionsExtern.prototype.method;


/**
 * @type {Object}
 */
olx.source.WMSGetFeatureInfoOptionsExtern.prototype.params;



/**
 * @interface
 */
olx.source.WMTSOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.attributions;


/**
 * @type {string|null|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.crossOrigin;


/**
 * @type {Object|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.dimensions;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.extent;


/**
 * @type {string|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.format;


/**
 * @type {string}
 */
olx.source.WMTSOptionsExtern.prototype.layer;


/**
 * @type {string}
 */
olx.source.WMTSOptionsExtern.prototype.matrixSet;


/**
 * @type {number|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.maxZoom;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.source.WMTSOptionsExtern.prototype.projection;


/**
 * @type {ol.source.WMTSRequestEncoding|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.requestEncoding;


/**
 * @type {string}
 */
olx.source.WMTSOptionsExtern.prototype.style;


/**
 * @type {ol.tilegrid.WMTS}
 */
olx.source.WMTSOptionsExtern.prototype.tileGrid;


/**
 * @type {ol.TileLoadFunctionType|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.tileLoadFunction;


/**
 * @type {string|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.url;


/**
 * @type {Array.<string>|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.urls;


/**
 * @type {string|undefined}
 */
olx.source.WMTSOptionsExtern.prototype.version;



/**
 * @interface
 */
olx.source.XYZOptionsExtern = function() {};


/**
 * @type {Array.<ol.Attribution>|undefined}
 */
olx.source.XYZOptionsExtern.prototype.attributions;


/**
 * @type {null|string|undefined}
 */
olx.source.XYZOptionsExtern.prototype.crossOrigin;


/**
 * @type {ol.Extent|undefined}
 */
olx.source.XYZOptionsExtern.prototype.extent;


/**
 * @type {string|undefined}
 */
olx.source.XYZOptionsExtern.prototype.logo;


/**
 * @type {number|undefined}
 */
olx.source.XYZOptionsExtern.prototype.maxZoom;


/**
 * @type {number|undefined}
 */
olx.source.XYZOptionsExtern.prototype.minZoom;


/**
 * @type {ol.proj.ProjectionLike}
 */
olx.source.XYZOptionsExtern.prototype.projection;


/**
 * @type {ol.TileLoadFunctionType|undefined}
 */
olx.source.XYZOptionsExtern.prototype.tileLoadFunction;


/**
 * @type {ol.TileUrlFunctionType|undefined}
 */
olx.source.XYZOptionsExtern.prototype.tileUrlFunction;


/**
 * @type {string|undefined}
 */
olx.source.XYZOptionsExtern.prototype.url;


/**
 * @type {Array.<string>|undefined}
 */
olx.source.XYZOptionsExtern.prototype.urls;



/**
 * @interface
 */
olx.style.FillOptionsExtern = function() {};


/**
 * @type {string|ol.expr.Expression|undefined}
 */
olx.style.FillOptionsExtern.prototype.color;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.FillOptionsExtern.prototype.opacity;



/**
 * @interface
 */
olx.style.IconOptionsExtern = function() {};


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.height;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.opacity;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.rotation;


/**
 * @type {string|ol.expr.Expression}
 */
olx.style.IconOptionsExtern.prototype.url;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.width;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.xOffset;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.IconOptionsExtern.prototype.yOffset;



/**
 * @interface
 */
olx.style.RuleOptionsExtern = function() {};


/**
 * @type {ol.expr.Expression|string|undefined}
 */
olx.style.RuleOptionsExtern.prototype.filter;


/**
 * @type {Array.<ol.style.Symbolizer>|undefined}
 */
olx.style.RuleOptionsExtern.prototype.symbolizers;



/**
 * @interface
 */
olx.style.ShapeOptionsExtern = function() {};


/**
 * @type {ol.style.Fill|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.fill;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.size;


/**
 * @type {ol.style.Stroke|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.stroke;


/**
 * @type {ol.style.ShapeType|undefined}
 */
olx.style.ShapeOptionsExtern.prototype.type;



/**
 * @interface
 */
olx.style.StrokeOptionsExtern = function() {};


/**
 * @type {string|ol.expr.Expression|undefined}
 */
olx.style.StrokeOptionsExtern.prototype.color;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.StrokeOptionsExtern.prototype.opacity;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.StrokeOptionsExtern.prototype.width;



/**
 * @interface
 */
olx.style.StyleOptionsExtern = function() {};


/**
 * @type {Array.<ol.style.Rule>|undefined}
 */
olx.style.StyleOptionsExtern.prototype.rules;


/**
 * @type {Array.<ol.style.Symbolizer>|undefined}
 */
olx.style.StyleOptionsExtern.prototype.symbolizers;



/**
 * @interface
 */
olx.style.TextOptionsExtern = function() {};


/**
 * @type {string|ol.expr.Expression|undefined}
 */
olx.style.TextOptionsExtern.prototype.color;


/**
 * @type {string|ol.expr.Expression|undefined}
 */
olx.style.TextOptionsExtern.prototype.fontFamily;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.TextOptionsExtern.prototype.fontSize;


/**
 * @type {number|ol.expr.Expression|undefined}
 */
olx.style.TextOptionsExtern.prototype.opacity;


/**
 * @type {string|ol.expr.Expression}
 */
olx.style.TextOptionsExtern.prototype.text;



/**
 * @interface
 */
olx.tilegrid.TileGridOptionsExtern = function() {};


/**
 * @type {number|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.minZoom;


/**
 * @type {ol.Coordinate|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.origin;


/**
 * @type {Array.<ol.Coordinate>|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.origins;


/**
 * @type {!Array.<number>}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.resolutions;


/**
 * @type {ol.Size|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.tileSize;


/**
 * @type {Array.<ol.Size>|undefined}
 */
olx.tilegrid.TileGridOptionsExtern.prototype.tileSizes;



/**
 * @interface
 */
olx.tilegrid.WMTSOptionsExtern = function() {};


/**
 * @type {!Array.<string>}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.matrixIds;


/**
 * @type {ol.Coordinate|undefined}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.origin;


/**
 * @type {Array.<ol.Coordinate>|undefined}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.origins;


/**
 * @type {!Array.<number>}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.resolutions;


/**
 * @type {ol.Size|undefined}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.tileSize;


/**
 * @type {Array.<ol.Size>|undefined}
 */
olx.tilegrid.WMTSOptionsExtern.prototype.tileSizes;



/**
 * @interface
 */
olx.tilegrid.XYZOptionsExtern = function() {};


/**
 * @type {number}
 */
olx.tilegrid.XYZOptionsExtern.prototype.maxZoom;
