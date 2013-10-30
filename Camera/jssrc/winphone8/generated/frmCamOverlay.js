//Form JS File
function frmCamOverlay_cameraOverlay_onCapture_seq0(eventobject) {
    onCaptureFrmOverLay.call(this, eventobject);
};

function addWidgetsfrmCamOverlay() {
    var cameraOverlay = new kony.ui.Camera({
        "id": "cameraOverlay",
        "isVisible": true,
        "text": "Camera",
        "skin": "sknCameraNormal",
        "focusSkin": "sknCameraFocus",
        "onCapture": frmCamOverlay_cameraOverlay_onCapture_seq0,
        "compressionLevel": 0,
        "scaleFactor": 80
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [2, 5, 2, 5],
        "padding": [1, 10, 1, 10],
        "vExpand": false,
        "hExpand": true,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": true,
        "paddingInPixel": true,
        "containerWeight": 8
    }, {
        "enablePhotoCropFeature": false,
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": true,
        "overlayConfig": {
            "tapAnywhere": false
        }
    });
    var imgCapturedOverlay = new kony.ui.Image2({
        "id": "imgCapturedOverlay",
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "margin": [4, 1, 4, 1],
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "referenceWidth": 90,
        "referenceHeight": 120,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    frmCamOverlay.add(
    cameraOverlay, imgCapturedOverlay);
};

function frmCamOverlayGlobals() {
    var MenuId = [];
    frmCamOverlay = new kony.ui.Form2({
        "id": "frmCamOverlay",
        "title": "Camera overlay",
        "needAppMenu": true,
        "enabledForIdleTimeout": false,
        "type": constants.FORM_TYPE_NATIVE,
        "skin": "sknFrmFormBgImg",
        "addWidgets": addWidgetsfrmCamOverlay
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "maxAppMenuButtons": 4,
        "animateHeaderFooter": false,
        "inTransitionConfig": {
            "inTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "outTransitionConfig": {
            "outTransition": "Slide",
            "transitionMode": "Parallel",
            "transitionSpeed": "0"
        },
        "directChildrenIDs": ["cameraOverlay", "imgCapturedOverlay"]
    });
};