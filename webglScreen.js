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
    if(window.WebglOrientation==WebglScreenOrientation.AutoRotation)
    {
        //window.gameframe.style.height = 'calc(100vh - 3px)';
        //window.gameframe.style.width = 'calc(100vw - 3px)';	

        window.gameframe.style.transform="";
		window.gameframe.style.transformOrigin=""
				window.gameframe.style.height = '100vh';
            window.gameframe.style.width = '100vw';
        return;
    }
    var orientation = window.orientation;
    //开始时调用
    if(orientation == 180 || orientation == 0 || orientation == -180||orientation == 360){
        if(window.WebglOrientation==WebglScreenOrientation.Landscape)
        {
            //注意竖屏时要把 iframe的宽设置为当前窗口的高度 高设置为当前窗口的宽度

			window.gameframe.style.transformOrigin="top left"
			window.gameframe.style.transform="rotate(90deg) translateY(-100vw)"
			window.gameframe.style.height = '100vw';
            window.gameframe.style.width = '100vh';
            //window.gameframe.style.height = window.innerWidth;
            //window.gameframe.style.width =  window.innerHeight;	

            //通过css样式旋转90度
          
        }
        else
        {
            //window.gameframe.style.height = 'calc(100vh - 3px)';
            //window.gameframe.style.width = 'calc(100vw - 3px)';	
			 //window.gameframe.style.height =  window.innerHeight;
			//window.gameframe.style.width = window.innerWidth;	

            window.gameframe.style.transform="";
			window.gameframe.style.transformOrigin=""
			window.gameframe.style.height = '100vh';
             window.gameframe.style.width = '100vw';	;
        }
    }else{
            if(window.WebglOrientation==WebglScreenOrientation.Portrait)
            {
                //注意竖屏时要把 iframe的宽设置为当前窗口的高度 高设置为当前窗口的宽度

			   //window.gameframe.style.height = 'calc(100vw - 3px)';
                //window.gameframe.style.width = 'calc(100vh - 3px)';
				window.gameframe.style.transformOrigin="top right"
				window.gameframe.style.transform="rotate(-90deg) translateY(-100vh)"
				 window.gameframe.style.height = '100vw';
                window.gameframe.style.width = '100vh';
                //window.gameframe.style.height = window.innerWidth;
                //window.gameframe.style.width =window.innerHeight;	
                //通过css样式旋转90度

            }
            else
            {
                window.gameframe.style.height = '100vh';
                window.gameframe.style.width = '100vw';
				//window.gameframe.style.height =  window.innerHeight;
				//window.gameframe.style.width = window.innerWidth;	
				window.gameframe.style.transform="";
				window.gameframe.style.transformOrigin=""
            }
    }
}
