!function($){$.extend({toast:function(obj){if(!$("#daftplugPublicToastMessage").length){var title=obj.title,showTime=obj.duration||2e3,width=obj.width||"auto",height=obj.height||"20px",position=obj.position||"",backgroundColor=obj.backgroundColor||"rgba(0, 0, 0, .7)",textColor=obj.textColor||"#fff",flag,lineheight;if("bottom"==position?position="bottom: 50px;":"middle"==position?position="top: calc(45% - 15px);":"top"==position?position="top: 0px;":""===position&&(position="top: 80%;"),obj.flag||!0)var content="<div id='daftplugPublicToastMessage' style='position: fixed;display: none; z-index:999;font-size: 18px; "+position+";left: 0;width:100%; height: "+height+"; text-align: center'>";else var content="<div id='daftplugPublicToastMessage' style='position: fixed; display: none;z-index:999; top: 0; left: 0;width:100%; height:100%; text-align: center'>";content+='<div id="toast-content" style="display: inline-block; width: '+width+";min-height: "+height+";padding: 8px 14px;background-color: "+backgroundColor+";text-align: center;line-height: "+(obj.lineheight||height)+";border-radius: 15px;color: "+textColor+';">'+title+"</div>",content+="</div>",$("body").append(content),$("#daftplugPublicToastMessage").fadeIn(200),setTimeout((function(){$("#daftplugPublicToastMessage").fadeOut(200)}),showTime),setTimeout((function(){$("#daftplugPublicToastMessage").remove()}),showTime+300)}}})}(jQuery);