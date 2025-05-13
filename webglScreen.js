const WebglScreenOrientation=
{
    //竖屏
    Portrait:0,
    //横屏
    Landscape:1,
    //自动
    AutoRotation:2,
}

function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function SetOrientation(ScreenOrientation)
{
    window.WebglOrientation=ScreenOrientation
    RotScreen()
}
function GetOrientation()
{
    return window.WebglOrientation
}
function SetFullScreen(isFull)
{
	try{
		if(isFull)
		launchFullscreen(window.document.body)
		else
		document.webkitCancelFullScreen()
	}catch(e){
		
	}
 
}
function GetFullScreen()
{
    return document.fullscreenElement==window.document.body
}
function GetOrientation()
{
    return window.WebglOrientation
}
function RotScreen()
{
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isIOS =  /iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    // Get actual usable viewport dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    if(window.WebglOrientation==WebglScreenOrientation.AutoRotation)
    {
        window.gameframe.style.transform="";
        window.gameframe.style.transformOrigin="";
        window.gameframe.style.height = '100%';
        window.gameframe.style.width = '100%';
        return;
    }
    
    var orientation = window.orientation;
    
    // For mobile devices, handle orientation differently
    if(isMobile) {
        if(orientation == 180 || orientation == 0 || orientation == -180 || orientation == 360){
            if(window.WebglOrientation==WebglScreenOrientation.Landscape)
            {
                window.gameframe.style.transformOrigin="top left";
                window.gameframe.style.transform="rotate(90deg) translateY(-" + windowWidth + "px)";
                window.gameframe.style.height = (windowWidth - 50) + "px";
                window.gameframe.style.width = (windowHeight - 50) + "px";
                
                // Add additional adjustment for iOS Chrome bottom UI
                // if(isIOS && /CriOS/i.test(navigator.userAgent)) {
                //     // Add a small adjustment for the bottom UI bar (approximately 44px)
                //     window.gameframe.style.width = (windowHeight - 44) + "px";
                // }
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = '100%';
                window.gameframe.style.width =  (windowHeight) + "px";
            }
        } else {
            if(window.WebglOrientation==WebglScreenOrientation.Portrait)
            {
                window.gameframe.style.transformOrigin="top right";
                window.gameframe.style.transform="rotate(-90deg) translateY(-" + windowHeight + "px)";
                window.gameframe.style.height = (windowWidth - 50) + "px";
                window.gameframe.style.width = (windowHeight - 50) + "px";
                
                // Add additional adjustment for iOS Chrome bottom UI
                // if(isIOS && /CriOS/i.test(navigator.userAgent)) {
                //     // Add a small adjustment for the bottom UI bar (approximately 44px)
                //     window.gameframe.style.height = (windowWidth - 44) + "px";
                // }
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = (windowHeight) + "px";
                window.gameframe.style.width = '100%';
            }
        }
    } else {
        // For desktop, use the original logic with actual viewport values instead of vh/vw
        if(orientation == 180 || orientation == 0 || orientation == -180 || orientation == 360){
            if(window.WebglOrientation==WebglScreenOrientation.Landscape)
            {
                window.gameframe.style.transformOrigin="top left";
                window.gameframe.style.transform="rotate(90deg) translateY(-" + windowWidth + "px)";
                window.gameframe.style.height = windowWidth + "px";
                window.gameframe.style.width = windowHeight + "px";
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = windowHeight + "px";
                window.gameframe.style.width = windowWidth + "px";
            }
        } else {
            if(window.WebglOrientation==WebglScreenOrientation.Portrait)
            {
                window.gameframe.style.transformOrigin="top right";
                window.gameframe.style.transform="rotate(-90deg) translateY(-" + windowHeight + "px)";
                window.gameframe.style.height = windowWidth + "px";
                window.gameframe.style.width = windowHeight + "px";
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = windowHeight + "px";
                window.gameframe.style.width = windowWidth + "px";
            }
        }
    }
}
