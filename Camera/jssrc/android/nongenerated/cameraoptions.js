/*
 ****************************************************************
 *	Name    : onCapture
 *	Author  : Kony
 *	Purpose : To capture an image and assign the captured image to image widget.
 *****************************************************************
 */
function onCapture(cameraObject) {
    var rawbytes = cameraObject.rawBytes;
    frmCamBasic.imgRaw.rawBytes = rawbytes;
    var base64 = kony.convertToBase64(rawbytes);
    frmCamBasic.imgBase64.base64 = base64;
}
/*
 ****************************************************************
 *	Name    : onCaptureFrmOverLay
 *	Author  : Kony
 *	Purpose : To capture an image by overlaying a form on top of the camera and assign the captured image to image widget.
 *****************************************************************
 */
function onCaptureFrmOverLay(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCamOverlay.imgCapturedOverlay.rawBytes = cameraObject.rawBytes;
    frmCamOverlay.show();
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCapturePublicMode
 *	Author  : Kony
 *	Purpose : To capture an image in 'PUBLIC' access mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCapturePublicMode(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCamAccessMode.img1AccessMode.rawBytes = cameraObject.rawBytes;
    frmCamAccessMode.lblFrmAccessMode.text = "First image from left is the captured image in public mode. You can see the image in image Gallery of the camera as well.To observe this ,Hide the application and open camera and go to image gallery."
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCapturePrivateMode
 *	Author  : Kony
 *	Purpose : To capture an image in 'PRIVATE' access mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCapturePrivateMode(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCamAccessMode.img2AccessMode.rawBytes = cameraObject.rawBytes;
    frmCamAccessMode.lblFrmAccessMode.text = "Second image from left is the captured image in private mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery."
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCaptureInMemoryMode
 *	Author  : Kony
 *	Purpose : To capture an image in 'INMEMORY' access mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCaptureInMemoryMode(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCamAccessMode.img3AccessMode.rawBytes = cameraObject.rawBytes;
    frmCamAccessMode.lblFrmAccessMode.text = "Third image from left is the captured image in inMemory mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery."
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCapturePortOrientaion
 *	Author  : Kony
 *	Purpose : To capture an image in 'PORTRAIT' orientation mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCapturePortOrientaion(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCamOrientation.imgPortrait.rawBytes = cameraObject.rawBytes;
    frmCamOrientation.lblOrientation.text = "Camera orientation mode is in portrait mode."
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCaptureLandOrientaion
 *	Author  : Kony
 *	Purpose : To capture an image in 'LANDSCAPE' orientation mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCaptureLandOrientaion(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCamOrientation.imgLandscape.rawBytes = cameraObject.rawBytes;
    frmCamOrientation.lblOrientation.text = "Camera orientation mode is in Landscape mode."
    kony.application.dismissLoadingScreen();
}