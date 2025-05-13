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
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        if(orientation == 180 || orientation == 0 || orientation == -180 || orientation == 360){
            if(window.WebglOrientation==WebglScreenOrientation.Landscape)
            {
                window.gameframe.style.transformOrigin="top left";
                window.gameframe.style.transform="rotate(90deg) translateY(-100vw)";
                window.gameframe.style.height = '100vw';
                window.gameframe.style.width = '100vh';
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
                window.gameframe.style.transform="rotate(-90deg) translateY(-100vh)";
                window.gameframe.style.height = '100vw';
                window.gameframe.style.width = '100vh';
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
        // For desktop, use the original logic
        if(orientation == 180 || orientation == 0 || orientation == -180 || orientation == 360){
            if(window.WebglOrientation==WebglScreenOrientation.Landscape)
            {
                window.gameframe.style.transformOrigin="top left";
                window.gameframe.style.transform="rotate(90deg) translateY(-100vw)";
                window.gameframe.style.height = '100vw';
                window.gameframe.style.width = '100vh';
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = '100vh';
                window.gameframe.style.width = '100vw';
            }
        } else {
            if(window.WebglOrientation==WebglScreenOrientation.Portrait)
            {
                window.gameframe.style.transformOrigin="top right";
                window.gameframe.style.transform="rotate(-90deg) translateY(-100vh)";
                window.gameframe.style.height = '100vw';
                window.gameframe.style.width = '100vh';
            }
            else
            {
                window.gameframe.style.transform="";
                window.gameframe.style.transformOrigin="";
                window.gameframe.style.height = '100vh';
                window.gameframe.style.width = '100vw';
            }
        }
    }
}
