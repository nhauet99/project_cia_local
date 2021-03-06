var width = 1200, height = 1200;
var visibilityList = ["public","private","protected","default"];
var GRAPH_CONFIG = {
    CENTER_POSITION: {x: 100,y: 100},
    RADIUS: 200,
    ONE_NODE: [{x: 250, y: 100}],
    TWO_NODE: [{x: 100,y: 100},{x: 400,y: 100}],
    THREE_NODE: [{x: 250,y: 100},{x: 20,y:200},{x:480,y:200}],
    FOUR_NODE: [{x: 250,y: 100},{x: 250,y: 20},{x: 20,y:200},{x: 480,y: 200}],
    PROPERTY_HOVER_MAIN_COLOR: "#424242",
    PROPERTY_HOVER_COLOR: "#444466",
    CALL_DEPENDENCE_COLOR: "#664444",
    USE_DEPENDENCE_COLOR: "#446644",
    INHERIT_DEPENDENCE_COLOR: "#444466"
};
var CHANGESETVIEW_CONFIG = {
    BACKGROUND_COLOR: "#37474F",
    TEXT_COLOR: "white",
    TEXT_PADDING: 2,
    TRANSITION_DURATION: 300,
    LEVEL_BOX_WIDTH: 30,
    LEVEL_BOX_HEIGHT: 20
};
var CLASSDRAWER_CONFIG = {
    WIDTH: 200,
    TITLE_HEIGHT: 25,
    ATTR_PANEL_MINHEIGHT: 0,
    METHOD_PANEL_MINHEIGHT: 0,
    TITLE_FONT_SIZE: 12,
    NORMAL_FONT_SIZE: 12,
    FILL_COLOR: "white",
    STROKE_COLOR:  "black",
    HOVER_COLOR: "blue",
    PROPERTY_HEIGHT: 30,
    PROPERTY_PADDING: 1,
    PROPERTY_WIDTH: 200,
    STROKE_WIDTH: "2px",
    MAX_CLASSNAME_LENGTH: 14,
    MAX_NAME_LENGTH: 12,
    MAX_TYPE_LENGTH: 7,
    MAX_TEXT_LENGTH: 22
};
var PROJECTVIEW_CONFIG = {
    BACKGROUND_COLOR: "#37474F",
    TEXT_COLOR: "white",
    SEARCH_TEXT_COLOR: "red",
    SEARCH_BOX_WIDTH: 110,
    TRANSITION_DURATION: 300,
    ICON_SIZE: 13,
    ARROW_ICON_SIZE: 10,
    PADDING_TOP: 0,
    PADDING_LEFT: 10,
    NODE_HEIGHT: 15,
    NODE_PADDING_LEFT: 20,
    TEXT_POSITION: {x: 14+10+8,y: 10} // X = ICON_SIZE + ARROW_ICON_SIZE +
                                      // padding
};
var CLASSVIEW_CONFIG = {
    BACKGROUND_COLOR: "#ffffff",
    HEADER_FONT_SIZE: "14px",
    TAB_SEGMENT_WIDTH: 1,
    TAB_SEGMENT_COLOR: "#fff",
    ZOOM_ICON_SIZE: 20,
    ZOOM_ICON_RIGHT: 20,
    ZOOM_ICON_BOTTOM: 20,
    ZOOM_DELTA: 0.2,
    MAX_ZOOM: 5,
    MIN_ZOOM: 0.1,
    ACTIVEBAR_COLOR: "teal",
    ACTIVEBAR_HEIGHT: 4,
    TAB_SERVICE_ICON_SIZE: 10,
    ICON_MARGIN: 5
};
var VIEW_CONFIG = {
    NAVIGATION: 24,
    HEADER_HEIGHT: 25,
    HEADER_FULLHEIGHT: 30,
    MIN_HEIGHT_VIEW : 2000,
    TITLE_COLOR: "#263238",
    ICON_SIZE: 15,
    STATUS_ICON_SIZE : 15,
    SCROLLBAR_HEIGHT : 5
};
var FULLGRAPH_CONFIG = {
    EXTERNAL_LIB: "#ba7752",
    ROOT_POSITION: {x: 100, y: 50},
    MIN_WIDTH_NODE: 120,
    MIN_HEIGHT_NODE: 30, // = TITLE_HEIGHT_NODE + PADDING_NODE
    FONT_SIZE: "12px",
    PADDING_NODE: 3,
    ICON_SIZE: 16,
    TITLE_HEIGHT_NODE: 30,
    TITLE_COLOR: "#263238",
    STROKE_COLOR: "#424242",
    MAX_NAME_LENGTH: 15,
    CHANGE_HIGHLIGHT_COLOR: "#4242CD",
    IMPACT_HIGHLIGHT_COLOR: "#CD4242",
    DEPEND_STROKE_COLOR: "#ee2222",
    SELECTED_DEPEND_STROKE_COLOR: "#6794ee",
    DEPENDED_STROKE_COLOR: "#22ee22",
    LINE_STROKE_COLOR: "#777777",
    ICON_POSITION: { x: 7, y: 7 },
    TEXT_POSITION: { x: 30, y: 20 }
};
// FONT_SIZE
// FULLGRAPH_CONFIG.TEXT_POSITION = {x: FULLGRAPH_CONFIG.ICON_SIZE+FULLGRAPH_CONFIG.ICON_POSITION.x+ 5,y: FULLGRAPH_CONFIG.TITLE_HEIGHT_NODE-14/2+FULLGRAPH_CONFIG.PADDING_NODE/2};

var LOAD_DATA = {
    PROJECT_VIEW: 1,
    DEPENDENCY_VIEW: 2,
    CHANGE_IMPACT_VIEW: 3,
    PACKAGE_DIAGRAM_VIEW: 4
};

var DEPENDENCY_DISPLAYING_MODE = {
    NONE: 0,
    PARTIAL: 1,
    ALL: 2
};

var DATA_FLOW_MODE = {
    FULL: 0,
    VIEW_TO_DATABASE: 1
};