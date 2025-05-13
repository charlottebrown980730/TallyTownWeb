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
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isChrome = /CriOS/i.test(navigator.userAgent);
    
    // Get actual usable viewport dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const gameContainer = document.getElementById("game-container");
    const gameContainerHeight = gameContainer.clientHeight;
    
    if(window.WebglOrientation==WebglScreenOrientation.AutoRotation)
    {
        window.gameframe.style.transform="";
        window.gameframe.style.transformOrigin="";
        window.gameframe.style.height = '100%';
        window.gameframe.style.width = '100%';
        
        // Fix for iOS Chrome bottom UI gap
        if(isIOS && isChrome) {
            document.documentElement.style.height = window.innerHeight + 'px';
            document.body.style.height = window.innerHeight + 'px';
            gameContainer.style.height = window.innerHeight + 'px';
        }
        return;
    }
    
    var orientation = window.orientation;
    
    // For mobile devices, handle orientation differently
    if(isMobile) {
        // Fix for iOS Chrome bottom UI gap
        if(isIOS && isChrome) {
            document.documentElement.style.height = window.innerHeight + 'px';
            document.body.style.height = window.innerHeight + 'px';
            gameContainer.style.height = window.innerHeight + 'px';
        }
        
        if(orientation == 180 || orientation == 0 || orientation == -180 || orientation == 360){
            if(window.WebglOrientation==WebglScreenOrientation.Landscape)
            {
                window.gameframe.style.transformOrigin="top left";
                window.gameframe.style.transform="rotate(90deg) translateY(-" + windowWidth + "px)";
                window.gameframe.style.height = windowWidth + "px";
                window.gameframe.style.width = gameContainerHeight + "px";
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = '100%';
                window.gameframe.style.width = '100%';
            }
        } else {
            if(window.WebglOrientation==WebglScreenOrientation.Portrait)
            {
                window.gameframe.style.transformOrigin="top right";
                window.gameframe.style.transform="rotate(-90deg) translateY(-" + gameContainerHeight + "px)";
                window.gameframe.style.height = windowWidth + "px";
                window.gameframe.style.width = gameContainerHeight + "px";
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = '100%';
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
                window.gameframe.style.width = gameContainerHeight + "px";
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = '100%';
                window.gameframe.style.width = '100%';
            }
        } else {
            if(window.WebglOrientation==WebglScreenOrientation.Portrait)
            {
                window.gameframe.style.transformOrigin="top right";
                window.gameframe.style.transform="rotate(-90deg) translateY(-" + gameContainerHeight + "px)";
                window.gameframe.style.height = windowWidth + "px";
                window.gameframe.style.width = gameContainerHeight + "px";
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = '100%';
                window.gameframe.style.width = '100%';
            }
        }
    }
}
