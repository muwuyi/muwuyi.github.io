if(!window.npsSettings&&navigator["userAgent"].indexOf("spider")==-1){window.npsmeter.q=window.npsmeter&&window.npsmeter.q&&window.npsmeter.q[0][0];window.npsSettings=window.npsSettings||{accountId:"",npsId:window.npsmeter&&window.npsmeter.q&&window.npsmeter.q.key||"",projectNo:window.npsmeter&&window.npsmeter.q&&window.npsmeter.q.project_key||"",npssv:window._npsSettings.npssv,iframeSrc:"https://app.npsmeter.cn/npsmeter/npsmeter.html",url:"https://app.npsmeter.cn/",cdnUrl:"https://static.npsmeter.cn/",getMatchCampaignPath:"sdkapi/campaign/matchCampaign",getConfigPath:"sdkapi/campaign/config",getConfigJsonPath:"config/",getNewMessagePath:"sdkapi/campaign/getNewMessage",openViewPath:"sdkapi/campaign/openView",checkOpenPath:"sdkapi/campaign/checkOpen",answerPath:"sdkapi/campaign/answer",openViewUrlList:[],config:null,lastQuestion:null,question:null,debug:window._npsSettings.debug||!1};var css_link=document.createElement("link");css_link.setAttribute("rel","stylesheet");css_link.setAttribute("type","text/css");css_link.setAttribute("href",window.npsSettings.url+"npsmeter/css/npsmeter.css?v=1.1201");document.body.appendChild(css_link);var is_created_iframe=false;window.createIframe=window.createIframe||function(){if(is_created_iframe){return false}else{is_created_iframe=true}var e=document.createElement("iframe");e.style.position="fixed",e.style.opacity=0,e.style.top=-100,e.style.left=-100,e.width=1,e.height=1,e.id="_npsProxyFrame",e.name="_npsProxyFrame",e.src=window.npsSettings.iframeSrc,document.body.appendChild(e);window.iframe=e};window.createIframe();var is_request_config=0;var npsIconList={msg:'<svg t="1611288410788" class="icon npsSvg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1479" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M367.494327 499.897358c0 28.535917-23.164582 51.606355-51.744501 51.606355-28.534893 0-51.699476-23.070438-51.699476-51.606355 0-28.534893 23.164582-51.699476 51.699476-51.699476C344.329744 448.197882 367.494327 471.363488 367.494327 499.897358L367.494327 499.897358zM367.494327 499.897358" p-id="1480"></path><path d="M959.966103 471.269343c0-215.271902-201.053062-390.428154-448.248024-390.428154-247.200078 0-448.25314 175.157275-448.25314 390.428154 0 127.884622 72.03871 247.666706 192.861496 320.646857l0 123.081223c0 8.764618 4.802376 16.763802 12.477172 20.813025 3.53143 1.977028 7.249101 2.918469 11.254322 2.918469 4.611018 0 9.133008-1.316995 13.08911-3.950985l56.783261-37.480636c1.085728-0.661056 2.121314-1.508353 2.732228-2.077312l64.222697-42.75271c32.021298 6.027274 63.944358 9.138124 94.925976 9.138124C758.913041 861.514325 959.966103 686.446078 959.966103 471.269343L959.966103 471.269343zM291.731806 757.641583C178.44874 693.794439 110.879831 586.721819 110.879831 471.175199c0-189.092659 179.816388-342.969259 400.833131-342.969259 221.022882 0 400.838248 153.875576 400.838248 342.969259 0 189.094706-179.86653 342.970282-400.833131 342.970282-30.887474 0-62.904679-3.393283-95.114265-10.076496-6.120394-1.410116-12.620435-0.093121-17.98563 3.487428l-75.149561 50.096978c-1.036609 0.561795-2.539846 1.883907-2.539846 1.883907l-17.137309 11.298324 0-92.568279C303.790446 769.700223 299.12417 761.878071 291.731806 757.641583L291.731806 757.641583zM291.731806 757.641583" p-id="1481"></path><path d="M572.078819 485.393016c0 28.535917-23.164582 51.797713-51.79362 51.797713-28.5308 0-51.699476-23.261797-51.699476-51.797713 0-28.5308 23.168676-51.606355 51.699476-51.606355C548.913213 433.787684 572.078819 456.863239 572.078819 485.393016L572.078819 485.393016zM572.078819 485.393016" p-id="1482"></path><path d="M774.264681 485.393016c0 28.535917-23.168676 51.797713-51.699476 51.797713-28.535917 0-51.704592-23.261797-51.704592-51.797713 0-28.5308 23.168676-51.606355 51.704592-51.606355C751.096005 433.787684 774.264681 456.863239 774.264681 485.393016L774.264681 485.393016zM774.264681 485.393016" p-id="1483"></path></svg>',email:'<svg t="1611296976079" class="icon npsSvg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1382" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M869.888 161.792h-717.824c-47.616 0-86.528 38.912-86.528 86.528v527.36c0 47.616 38.912 86.528 86.528 86.528h717.824c47.616 0 86.528-38.912 86.528-86.528v-527.36c0-48.128-38.912-86.528-86.528-86.528z m-223.232 332.8l267.264-231.424v498.688l-267.264-267.264z m-484.352-294.4h694.272c18.432 0 34.304 8.192 45.056 21.504l-388.096 335.36-392.704-339.456c10.24-10.24 25.088-17.408 41.472-17.408z m-57.856 563.2v-504.832-1.024l271.872 235.008-271.872 271.872v-1.024z m752.128 57.344h-694.272c-15.872 0-30.72-6.656-40.96-16.896l285.696-285.696 106.496 92.16 102.912-89.088 281.6 281.6c-10.24 11.264-25.088 17.92-41.472 17.92z" fill="" p-id="1383"></path></svg>',wenjuan:'<svg t="1611296956226" class="icon npsSvg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1100" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M317.89511111 438.07857778h291.328v32.36977777H317.89511111zM317.89511111 567.55768888h233.0624v32.36977778H317.89511111zM317.89511111 697.0368h161.84888889v32.36977778H317.89511111zM880.16213333 276.18417778l-52.0192 61.98613333-245.30488888 292.34062222-25.61137778 156.43306667 149.59502222-52.39466667L920.91733333 479.41404444l83.22844445-99.19146666-123.98364445-104.0384zM678.1952 693.13422222l-59.83573333 20.95786666 10.25137778-62.5664L834.12764445 406.58488888l49.59573333 41.60853334-205.52817778 244.9408z m236.73742222-282.13475556l-16.54328889-13.88088888-33.05244444-27.73902223 20.80995556-24.79217777 49.59573333 41.60853333-20.80995556 24.80355555z" p-id="1101"></path><path d="M738.70222222 858.88568888h-517.91644444v-582.656h97.10933333v64.73955556h323.69777778v-64.73955556h97.10933333v64.3072h32.36977778v-96.67697777H641.59288889v-32.36977778H576.85333333v-64.73955555H382.63466667v64.73955555h-64.73955556v32.36977778H188.416v647.39555555h582.656v-98.2016h-32.36977778v65.83182222z m-388.43733333-582.656v-32.36977777h64.73955556v-64.73955556h129.4791111v64.73955556h64.73955556v64.73955555h-258.95822222v-32.36977778z" p-id="1102"></path></svg>',zan:'<svg t="1611296965646" class="icon npsSvg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1241" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M64.325539 950.437587l223.870744 0L288.196283 390.768915 64.325539 390.768915 64.325539 950.437587zM105.860515 430.384168l139.64855 0 0 478.889905L105.860515 909.274072 105.860515 430.384168z" p-id="1242"></path><path d="M845.528748 353.460194 623.992165 353.460194l49.203632-98.17395c45.937239-91.886757-20.99108-200.316282-123.828236-200.316282l-223.867674 335.797929 44.775786 0L568.023456 93.912903c27.752064 5.128811 52.000328 21.688975 67.158562 46.167482 18.655895 30.085202 20.289092 66.700121 4.427846 98.419544l-49.198515 98.171903L563.58947 390.767891l60.401672 0 221.535559 0c21.917172 0 42.673915 9.562796 56.897871 26.355251 14.227026 16.787338 20.292162 38.702464 16.558118 60.399625l-62.263066 373.108696c-6.064113 36.141128-37.077453 62.262042-73.684186 62.262042l-382.910946 0-37.308721 0-37.313837 0 0 37.308721 457.999109 0c54.793954 0 101.434204-39.640836 110.303198-93.51279l62.259996-373.108696C967.493543 415.494039 914.788158 353.460194 845.528748 353.460194z" p-id="1243"></path></svg>'};var nps_user_id=window.npsmeter.q&&window.npsmeter.q.user_id||"";var nps_user_name=window.npsmeter.q&&window.npsmeter.q.user_name||"";var nps_params=window.npsmeter.q&&window.npsmeter.q.params||"";var nps_select=[];var nps_access_info={screen:window.screen.width+"*"+window.screen.height,language:navigator.language||navigator.userLanguage};window.npsmeter=function(e){window.npsSettings.npsId=e.key||"";window.npsSettings.projectNo=e.project_key||"";nps_user_id=e&&e.user_id||nps_user_id;nps_user_name=e&&e.user_name||nps_user_name;nps_params=e&&e.params||e;is_request_config=1;getNpsConfig(document.body)};var nps_version="22.08.01";var is_nps_click_btn=!1;var is_nps_error=!1;var is_nps_open=!1;var is_submit_score=!1;var is_nps_onload=!1;var nps_history_href="";var createNpsUserCookies=function(){let t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];let n="";for(let e=0;e<16;e++){let e=parseInt(Math.random()*61);n+=t[e]}return n};var is_nps_submit_text=localStorage.getItem("is_nps_submit_text")||0;var nps_user_cookies=localStorage.getItem("nps_user_cookies")||createNpsUserCookies();localStorage.setItem("nps_user_cookies",nps_user_cookies);var nps_cookies_first_timestamp=Date.parse(new Date)/1e3;var nps_history_url=localStorage.getItem("nps_history_url")||"";var is_nps_custom_close=localStorage.getItem("is_nps_custom_close")||0;var is_nps_complete=0;var is_nps_finish=0;var last_complete_time="";var nps_new_message="";var is_nps_new_msg_popup=0;var nps_is_repeat_open=0;var nps_repeat_open_campaign_no="";var nps_question_list=[];var nps_other_value=[];var is_nps_other_submit=0;var is_nps_submit_contact=0;var nps_popup_timer=null;var reg=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;String.prototype.colorRgb=function(){var e=this.toLowerCase();if(e&&reg.test(e)){if(e.length===4){var t="#";for(var n=1;n<4;n+=1){t+=e.slice(n,n+1).concat(e.slice(n,n+1))}e=t}var i=[];for(var n=1;n<7;n+=2){i.push(parseInt("0x"+e.slice(n,n+2)))}return i.join(",")}else{return e}};var getNpsBrowserInfo=function(){var e={msie:false,firefox:false,opera:false,safari:false,chrome:false,netscape:false,appname:"unknown",version:0},t=window.navigator.userAgent.toLowerCase();if(/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(t)){e[RegExp.$1]=true;e.appname=RegExp.$1;e.version=RegExp.$2}else if(/version\D+(\d[\d.]*).*safari/.test(t)){e.safari=true;e.appname="safari";e.version=RegExp.$2}return{browser_name:e.appname,browser_version:e.version}};var nps_client="";var os=function(){var e=navigator.userAgent,t=/(?:Windows Phone)/.test(e),n=/(?:SymbianOS)/.test(e)||t,i=/(?:Android)/.test(e),s=/(?:Firefox)/.test(e),o=/(?:Chrome|CriOS)/.test(e),r=/(?:iPad|PlayBook)/.test(e)||i&&!/(?:Mobile)/.test(e)||s&&/(?:Tablet)/.test(e),p=/(?:iPhone)/.test(e)&&!r,a=!p&&!i&&!n;return{isTablet:r,isPhone:p,isAndroid:i,isPc:a}}();if(os.isAndroid||os.isPhone){nps_client="mobile"}else if(os.isTablet){nps_client="tablet"}else if(os.isPc){nps_client="pc"}var getNpsOsInfo=function(){var e=navigator.userAgent.toLowerCase();var t="Unknown";var n="Unknown";if(e.indexOf("win")>-1){t="Windows";if(e.indexOf("windows nt 5.0")>-1){n="Windows 2000"}else if(e.indexOf("windows nt 5.1")>-1||e.indexOf("windows nt 5.2")>-1){n="Windows XP"}else if(e.indexOf("windows nt 6.0")>-1){n="Windows Vista"}else if(e.indexOf("windows nt 6.1")>-1||e.indexOf("windows 7")>-1){n="Windows 7"}else if(e.indexOf("windows nt 6.2")>-1||e.indexOf("windows 8")>-1){n="Windows 8"}else if(e.indexOf("windows nt 6.3")>-1){n="Windows 8.1"}else if(e.indexOf("windows nt 6.2")>-1||e.indexOf("windows nt 10.0")>-1){n="Windows 10"}else{n="Unknown"}}else if(e.indexOf("iphone")>-1){t="iPhone"}else if(e.indexOf("mac")>-1){t="Mac"}else if(e.indexOf("x11")>-1||e.indexOf("unix")>-1||e.indexOf("sunname")>-1||e.indexOf("bsd")>-1){t="Unix"}else if(e.indexOf("linux")>-1){if(e.indexOf("android")>-1){t="Android"}else{t="Linux"}}else{t="Unknown"}return{os_name:t,os_version:n}};var browserInfo=getNpsBrowserInfo();var osInfo=getNpsOsInfo();var add_info=Object.assign(browserInfo,osInfo);nps_access_info=Object.assign(add_info,nps_access_info);var nps_ajax=function(t){t=t||{};t.type=(t.type||"GET").toUpperCase();t.dataType=t.dataType||"json";t.contentType=t.contentType||"application/x-www-form-urlencoded";if(t.contentType=="application/json"){params=JSON.stringify(t.data)}else{params=formatNpsParams(t.data)}var n;if(window.XMLHttpRequest){n=new XMLHttpRequest}else{n=ActiveXObject("Microsoft.XMLHTTP")}n.timeout=3e3;n.onreadystatechange=function(){if(n.readyState==4){var e=n.status;if(e>=200&&e<300){t.success&&t.success(n.responseText,n.responseXML)}else{t.error&&t.error(e)}}};if(t.type=="GET"){n.open("GET",t.url+"?"+params,true);n.send(null)}else if(t.type=="POST"){n.open("POST",t.url,true);n.setRequestHeader("Content-Type",t.contentType);n.send(params)}n.ontimeout=function(e){t.timeout&&t.timeout(e)}};var formatNpsParams=function(e){var t=[];for(var n in e){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))}t.push(("v="+Math.random()).replace(".",""));return t.join("&")};var NPS_POST=function(e,t,n){if(window.npsSettings.debug){console.log("【发起请求】:"+e+"   【请求参数】："+JSON.stringify(t))}nps_ajax({url:e,type:"POST",dataType:"json",contentType:"application/json",data:t,success:function(e){if(window.npsSettings.debug){console.log("【请求结果】："+e)}if(n){n(JSON.parse(e))}},error:function(e){if(n){n(JSON.parse(e))}},timeout:function(e){if(n){n({code:505,msg:"请求超时"})}}})};function npsFormatParams(e){var t=[];for(var n in e){t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))}t.push("v="+Math.floor(Math.random()*1e4+500));return t.join("&")}var getJsonP=function(t){var n=t.jsonp;var i=document.getElementsByTagName("head")[0];t.data["callback"]=n;var e=npsFormatParams(t.data);var s=document.createElement("script");i.appendChild(s);window[n]=function(e){i.removeChild(s);clearTimeout(s.timer);window[n]=null;t.success&&t.success(e);t.complete&&t.complete()};s.src=t.url+"?"+e;if(t.time){s.timer=setTimeout(function(){window[n]=null;i.removeChild(s);t.error&&t.error({message:"超时"})},t.time)}};var wait_jsonp=false;var waiting_arr=[];var NPS_GET_JSONP=function(e,t,n){if(window.npsSettings.debug&&e!=window.npsSettings.url+window.npsSettings.getNewMessagePath){console.log("【发起请求】:"+e+"   【请求参数】："+JSON.stringify(t))}if(!wait_jsonp){wait_jsonp=true;getJsonP({url:e,type:"GET",dataType:"jsonp",jsonp:"callbackFunction",data:t,success:function(e){n(e)},complete:function(){wait_jsonp=false;if(waiting_arr.length>0){NPS_GET_JSONP(waiting_arr[0]["url"],waiting_arr[0]["data"],waiting_arr[0]["callback"]);waiting_arr.shift()}},error:function(e){}})}else{waiting_arr.push({url:e,data:t,callback:n})}};var NPS_GET=function(t,e,n){if(window.npsSettings.debug&&t!=window.npsSettings.url+window.npsSettings.getNewMessagePath){console.log("【发起请求】:"+t+"   【请求参数】："+JSON.stringify(e))}nps_ajax({url:t,type:"get",dataType:"json",data:e,success:function(e){if(window.npsSettings.debug&&t!=window.npsSettings.url+window.npsSettings.getNewMessagePath){console.log("【请求结果】："+e)}if(n){n(JSON.parse(e))}},error:function(e){if(n){n(JSON.parse(e))}},timeout:function(e){if(n){n({code:505,msg:"请求超时"})}}})};var getNpsDomByClass=function(e,t){var n=e?document.getElementById(e):document;var i=n.getElementsByTagName("*");var s=[];var o="";for(var r=0;r<i.length;r++){o=i[r].className;switch(i[r].className){case"nps-scale-face-button":o="nps-scale-button";break;case"nps-scale-select-button":o="nps-scale-button";break;case"nps-scale-checkbox-button":o="nps-scale-button";break}if(o==t){s.push(i[r])}}return s};var removeNpsByClass=function(e,t){let n=document.body.getElementsByClassName(t);for(i=0;i<n.length;i++){if(n[i]!=null)n[i].parentNode.removeChild(n[i])}};var getNpsChildDom=function(e){var t=e.childNodes;for(var n=0;n<t.length;n++){if(t[n].nodeName=="#text"){e.removeChild(t[n])}}return t};var getNpsChildDomByParams=function(e){if(e===undefined)return;var t=function(e,t,n){var t=t||"*",i=document.getElementsByTagName(t),s=typeof document.body.style.maxHeight==="undefined"?"className":"class";n=n||s,Arr=[];for(var o=0;o<i.length;o++){if(i[o].getAttribute(n)==e){Arr.push(i[o])}}return Arr};if(e.indexOf("#")===0){return document.getElementById(e.substring(1))}else if(e.indexOf(".")===0){return t(e.substring(1))}else if(e.match(/=/g)){return t(e.substring(e.search(/=/g)+1),null,e.substring(0,e.search(/=/g)))}else if(e.match(/./g)){return t(e.split(".")[1],e.split(".")[0])}};var hasNpsClass=function(e,t){return e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))};var removeNpsClass=function(e,t){if(hasNpsClass(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}};var shuffleOptions=function(e){for(var t=e.length-1;t>=0;t--){var n=Math.floor(Math.random()*(t+1));var i=e[n];e[n]=e[t];e[t]=i}return e};var npsHasStringInArray=function(e,t){var n=false;try{e.forEach(function(e){if(e.indexOf(t)!=-1){n=true;throw Error()}})}catch(e){}return n};var addNpsClass=function(e,t){if(!hasNpsClass(e,t))e.className+=" "+t};var getNpsCurrentDate=function(e){var t=new Date;var n=t.getFullYear();var i=t.getMonth();var s=t.getDate();var o=t.getDay();var r=t.getHours();var p=t.getMinutes();var a=t.getSeconds();i=i+1;if(i<10)i="0"+i;if(s<10)s="0"+s;if(r<10)r="0"+r;if(p<10)p="0"+p;if(a<10)a="0"+a;var c="";if(e==1){c=n+"-"+i+"-"+s}else if(e==2){c=n+"-"+i+"-"+s+" "+r+":"+p+":"+a}return c};var getNpsNextDate=function(e,t,n){var i=new Date(e);i.setDate(i.getDate()+t);var s=i.getFullYear();var o=i.getMonth();var e=i.getDate();var t=i.getDay();var r=i.getHours();var p=i.getMinutes();var a=i.getSeconds();o=o+1;if(o<10)o="0"+o;if(e<10)e="0"+e;if(r<10)r="0"+r;if(p<10)p="0"+p;if(a<10)a="0"+a;var c="";if(n==1){c=s+"-"+o+"-"+e}else if(n==2){c=s+"-"+o+"-"+e+" "+r+":"+p+":"+a}return c};var getNpsDomain=function(){var e=document.domain.match(/[^\.]+/g);if(e.length==2)return e.join(".");else if(e.length>=3){e.shift();return e.join(".")}};var npsPoweredBy=function(){var e="https://www.npsmeter.cn/?come_from="+getNpsDomain()+"&come_deail="+encodeURIComponent(window.location.href)+"&wid="+window.npsSettings.npsId;window.open(e)};var removeCustomCss=function(){var e=document.getElementsByTagName("link");for(var t=0;t<=e.length;t++){if(e[t]&&e[t].title&&e[t].title.indexOf("nps-custom")!=-1){e[t].parentNode.removeChild(e[t])}}};var getConfigRequest=function(n,e,i,s){var e=e==1?1:0;var t=nps_user_cookies||createNpsUserCookies();if(window.npsSettings.npsId){NPS_GET_JSONP(window.npsSettings.cdnUrl+window.npsSettings.getConfigJsonPath+window.npsSettings.npsId+".json",{id:window.npsSettings.npsId,account_id:window.npsSettings.accountId,is_customer_open:e,uuid:t,has_response_text:is_nps_submit_text},function(e){if(window.npsSettings.debug){if(e["show_type"]=="CUSTOM"){console.log("======问卷【"+window.npsSettings.npsId+"】获取配置成功(自定义触发)")}else{console.log("======问卷【"+window.npsSettings.npsId+"】获取配置成功(按访问行为触发)")}}if(!e["submit_text"]){e["submit_text"]="提交"}if(!e["new_message_title"]){e["new_message_title"]="您有新的消息！"}if(!e["new_message_btn"]){e["new_message_btn"]="重新提交"}window.npsSettings.config=e;window.npsSettings.config.primary_color=e["primary_color"].colorRgb();window.npsSettings.config.text_color_rgb=e["text_color"].colorRgb();window.npsSettings.config.mask_bg_color=e["mask_bg_color"].colorRgb();window.npsSettings.npsId=e["id"];window.npsSettings.accountId=e["account_id"];if(i==1){window.npsSettings.config.position="bc_new"}removeCustomCss();if(window.npsSettings.config.position=="br_new"&&window.npsSettings.config.diy_css==1){var t=document.createElement("link");t.setAttribute("rel","stylesheet");t.setAttribute("type","text/css");t.setAttribute("title","nps-custom");t.setAttribute("href",window.npsSettings.cdnUrl+"css/diy_css_"+window.npsSettings.npsId+".css");document.body.appendChild(t)}if(window.npsSettings.config.show_logo==undefined){window.npsSettings.config.show_logo=1}is_nps_submit_text=localStorage.getItem("is_nps_submit_text");if(is_nps_submit_text==1){getNewMessageRequest(n,function(){_afterConfig(n,s,e)})}else{_afterConfig(n,s,e)}})}else{var o={project_no:window.npsSettings.projectNo,href:encodeURIComponent(window.location.href),is_customer_open:e};NPS_GET(window.npsSettings.url+window.npsSettings.getMatchCampaignPath,o,function(e){if(e.code==200){var t=e.data;if(t){if(window.npsSettings.debug){console.log("全局埋点：获取到"+t.length+"个匹配的问卷")}var p="";try{t.forEach(function(o,e){if(o.open_cookies_config==1){var t=Date.parse(new Date)/1e3;var n=Number(localStorage.getItem(nps_user_cookies+"_"+o.campaign_no+"cookies_first_time"))||Date.parse(new Date)/1e3;if(n+o.from_first_day*3600*24>t){if(window.npsSettings.debug){console.log(e+"......问卷【"+o.campaign_no+"】开启了距离首次访问时间控制，未到距离首次访问时间,首次访问时间："+n+",下次触发时间："+(n+o.from_first_day*3600*24))}return true}}var i=localStorage.getItem("is_complete_"+o.campaign_no)||0;var s=localStorage.getItem("last_complete_time_"+o.campaign_no)||"";if((o.style_type=="DIALOG"||o.style_type=="DIALOG_SINGLE")&&i==1&&s&&o.repeat_duration){if(getNpsCurrentDate(2)<getNpsNextDate(s,o.repeat_duration,2)){if(window.npsSettings.debug){console.log(e+"......问卷【"+o.campaign_no+"】疲劳度控制，上次触发时间："+getNpsNextDate(s,0,2)+"，下次可触发时间："+getNpsNextDate(s,o.repeat_duration,2))}return true}}if(o.is_global_fatigue==1&&o.global_fatigue_config.relevance_list){var r="";o.global_fatigue_config.relevance_list.forEach(function(e){var t=localStorage.getItem("last_complete_time_"+e)||"";var n=0;var i=o.global_fatigue_config.duration;var s=o.global_fatigue_config.time_unit;if(i&&s){if(s=="month"){n=i*30}else if(s=="week"){n=i*7}else if(s=="day"){n=i}}if(t&&n){if(getNpsCurrentDate(2)<=getNpsNextDate(t,n,2)){r=e}}});if(r!=""){if(window.npsSettings.debug){console.log(e+"......问卷【"+o.campaign_no+"】疲劳度控制：问卷【"+r+"】已触发过")}return true}}p=o.campaign_no;throw new Error("EndIterative")})}catch(e){if(e.message!="EndIterative")throw e}}if(p==""){if(window.npsSettings.debug){console.warn("====== 没有匹配的问卷")}return false}window.npsSettings.npsId=p;NPS_GET_JSONP(window.npsSettings.cdnUrl+window.npsSettings.getConfigJsonPath+window.npsSettings.npsId+".json",{id:window.npsSettings.npsId},function(e){window.npsSettings.config=e;window.npsSettings.config.primary_color=e["primary_color"].colorRgb();window.npsSettings.config.text_color_rgb=e["text_color"].colorRgb();window.npsSettings.config.mask_bg_color=e["mask_bg_color"].colorRgb();window.npsSettings.npsId=e["id"];if(window.npsSettings.config.show_logo==undefined){window.npsSettings.config.show_logo=1}if(window.npsSettings.config.status!=1&&(window.npsSettings.config.type=="DIALOG"||window.npsSettings.config.type=="DIALOG_SINGLE")){if(window.npsSettings.debug){console.error("====== 问卷【"+window.npsSettings.npsId+"】未开启。请在用户后台找到对应问卷并开启。详见 https://www.yuque.com/zwaq57/ss173i/nnyi7h#Ih2hf")}return false}if(window.npsSettings.config.has_min_fatigue==1&&window.npsSettings.config.is_open_min_fatigue==1){if(window.npsSettings.config.min_fatigue_duration>0){try{window.npsSettings.config.project_campaign_ids.forEach(function(e){var t=localStorage.getItem("is_complete_"+e)||0;var n=localStorage.getItem("last_complete_time_"+e)||"";if(t==1&&n){if(getNpsCurrentDate(2)<getNpsNextDate(n,window.npsSettings.config.min_fatigue_duration,2)){if(window.npsSettings.debug){console.warn("====== 触发失败（全局最小疲劳度控制），问卷ID："+e+" 上次触发时间："+getNpsNextDate(n,0,2)+"，疲劳度"+window.npsSettings.config.min_fatigue_duration+"天")}throw new Error("Rrror")}}})}catch(e){if(e.message!="EndIterative"){return false}}}}if(!n){window.createIframe(window.npsSettings);is_nps_complete=localStorage.getItem("is_complete_"+window.npsSettings.npsId)||0;last_complete_time=localStorage.getItem("last_complete_time_"+window.npsSettings.npsId)||"";if(is_nps_complete==1&&last_complete_time){if(window.npsSettings.debug){console.warn("====== 触发失败(疲劳度控制)，上次触发时间："+getNpsNextDate(last_complete_time,0,2)+"，下次可触发时间："+getNpsNextDate(last_complete_time,window.npsSettings.config.repeat_duration,2)+"，详见 https://www.yuque.com/zwaq57/ss173i/nnyi7h#O4fmi")}if(getNpsCurrentDate(2)>=getNpsNextDate(last_complete_time,window.npsSettings.config.repeat_duration,2)){is_nps_complete=0;localStorage.setItem("is_complete_"+window.npsSettings.npsId,is_nps_complete);last_complete_time="";localStorage.setItem("last_complete_time_"+window.npsSettings.npsId,last_complete_time)}}}if(s){s()}})}})}};var _afterConfig=function(e,t,n){if(window.npsSettings.config.status!=1&&(window.npsSettings.config.type=="DIALOG"||window.npsSettings.config.type=="DIALOG_SINGLE")){if(window.npsSettings.debug){console.error("====== 问卷【"+window.npsSettings.npsId+"】未开启。请在用户后台找到对应问卷并开启。详见 https://www.yuque.com/zwaq57/ss173i/nnyi7h#Ih2hf")}return false}var i=localStorage.getItem("is_nps_custom_close");if(i==1){var s=localStorage.getItem("custom_close_limit_time");if(s){if(getNpsCurrentDate(2)<s){if(window.npsSettings.debug){console.warn("====== 触发失败（用户开启不再显示），不再显示截止："+s)}return false}}}if(window.npsSettings.config.has_min_fatigue==1&&window.npsSettings.config.is_open_min_fatigue==1){if(window.npsSettings.config.min_fatigue_duration>0){try{window.npsSettings.config.project_campaign_ids.forEach(function(e){var t=localStorage.getItem("is_complete_"+e)||0;var n=localStorage.getItem("last_complete_time_"+e)||"";if(t==1&&n){if(getNpsCurrentDate(2)<getNpsNextDate(n,window.npsSettings.config.min_fatigue_duration,2)){if(window.npsSettings.debug){console.warn("====== 触发失败（全局最小疲劳度控制），问卷ID："+e+" 上次触发时间："+getNpsNextDate(n,0,2)+"，疲劳度"+window.npsSettings.config.min_fatigue_duration+"天")}throw new Error("Rrror")}}})}catch(e){if(e.message!="EndIterative"){return false}}}}if(!e){window.createIframe(window.npsSettings);is_nps_complete=localStorage.getItem("is_complete_"+window.npsSettings.npsId)||0;last_complete_time=localStorage.getItem("last_complete_time_"+window.npsSettings.npsId)||"";if(window.npsSettings.config.is_fatigue){if(is_nps_complete==1&&last_complete_time){if(window.npsSettings.config.show_type=="AUTO"){if(getNpsCurrentDate(2)>=getNpsNextDate(last_complete_time,window.npsSettings.config.repeat_duration,2)){is_nps_complete=0;localStorage.setItem("is_complete_"+window.npsSettings.npsId,is_nps_complete);last_complete_time="";localStorage.setItem("last_complete_time_"+window.npsSettings.npsId,last_complete_time)}else{if(window.npsSettings.debug){console.warn("====== 触发失败（疲劳度控制），上次触发时间："+getNpsNextDate(last_complete_time,0,2)+"，下次可触发时间："+getNpsNextDate(last_complete_time,window.npsSettings.config.repeat_duration,2)+"，详见 https://www.yuque.com/zwaq57/ss173i/nnyi7h#O4fmi")}return false}}}}else{is_nps_complete=0;localStorage.setItem("is_complete_"+window.npsSettings.npsId,is_nps_complete);last_complete_time="";localStorage.setItem("last_complete_time_"+window.npsSettings.npsId,last_complete_time)}}if(t){t(n)}};var getNewMessageRequest=function(e,n){var t=nps_user_cookies||createNpsUserCookies();NPS_GET(window.npsSettings.url+window.npsSettings.getNewMessagePath,{id:window.npsSettings.npsId,uuid:t},function(e){if(e.code==200){if(e.data&&e.data.content){nps_new_message=e.data.content;nps_is_repeat_open=e.data.is_repeat;nps_repeat_open_campaign_no=e.data.campaign_no;var t=window.location.href;window.postMessage("newMsg",t);is_nps_new_msg_popup=true;if(window.npsSettings.debug){console.warn("====== 有回复消息时不弹问卷")}return false}else{if(n){n()}}}})};var openViewRequest=function(t,e,n){var i={id:window.npsSettings.config.id,uuid:nps_user_cookies,first_view_time:nps_cookies_first_timestamp,userid:nps_user_id,username:nps_user_name,params:nps_params,nps_access_info:nps_access_info,current_url:window.location.href,referrer_url:document.referrer,is_customer_open:e,is_initiative_repeat:n};if(window.npsSettings.npsId){i.scope="global"}else{i.scope="part"}NPS_POST(window.npsSettings.url+window.npsSettings.openViewPath,i,function(e){if(e.code==200){is_nps_error=!1;window.npsSettings.question=e.data;nps_question_list.push(e.data);if(t){t(e)}is_nps_complete=1;localStorage.setItem("is_complete_"+window.npsSettings.npsId,is_nps_complete);last_complete_time=getNpsCurrentDate(2);localStorage.setItem("last_complete_time_"+window.npsSettings.npsId,last_complete_time)}else{if(window.npsSettings.config.type=="ICON"){is_nps_error=!0;if(t){t(e)}}}})};var answerRequest=function(e,t,n,i,s,o,r,p){nps_other_value.push(r);NPS_POST(window.npsSettings.url+window.npsSettings.answerPath,{id:window.npsSettings.npsId,question_id:e,question_type:t,view_id:n,view_unique_id:i,rating:s,answer:o,other_value:r},function(e){if(e.code==200){localStorage.setItem("is_nps_submit_text",1);window.npsSettings.lastQuestion=window.npsSettings.question;window.npsSettings.question=e.data;nps_question_list.push(e.data);if(p){p(e)}}else if(e.code==505){if(window.npsSettings.debug){console.log("====== "+e.msg)}window.npsSettings.question={is_complete:1};if(p){var e={code:200};p(e)}}})};var autoStartOpenNpsView=function(){is_nps_complete=localStorage.getItem("is_complete_"+window.npsSettings.npsId)||0;last_complete_time=localStorage.getItem("last_complete_time_"+window.npsSettings.npsId)||"";if(is_nps_complete==1&&last_complete_time){if(getNpsCurrentDate(2)>=getNpsNextDate(last_complete_time,window.npsSettings.config.repeat_duration,2)){if(window.npsSettings.config.show_type=="CUSTOM"){if(window.npsSettings.debug){console.warn("====== 自定义调用，不自动触发，仅在主动调用的情况下显示。修改为按行为触发或者手动调用。详见https://www.yuque.com/zwaq57/ss173i/nnyi7h#knqP1 ")}}else{if(window.npsSettings.config.survey_delay){nps_popup_timer=setTimeout(function(){openNpsView()},window.npsSettings.config.survey_delay*1e3)}else{openNpsView()}}}}else{if(window.npsSettings.config){if(window.npsSettings.config.show_type=="CUSTOM"){if(window.npsSettings.debug){console.warn("====== 自定义调用，不自动触发，仅在主动调用的情况下显示。修改为按行为触发或者手动调用。详见https://www.yuque.com/zwaq57/ss173i/nnyi7h#knqP1 ")}}else{if(window.npsSettings.config.survey_delay){if(window.npsSettings.debug){console.log("等待"+window.npsSettings.config.survey_delay+"s后触发")}nps_popup_timer=setTimeout(function(){openNpsView()},window.npsSettings.config.survey_delay*1e3)}else{openNpsView()}}}}};var openNpsView=function(){var e=localStorage.getItem("is_complete_"+window.npsSettings.npsId)||0;if(e==1){if(window.npsSettings.debug){console.warn("====== 触发失败（当前页面已触发过）")}}if(nps_popup_timer){clearTimeout(nps_popup_timer)}if(e==0){if(window.npsSettings.config.is_global_fatigue==1){if(window.npsSettings.config.global_fatigue_config.relevance_list){var o="";window.npsSettings.config.global_fatigue_config.relevance_list.forEach(function(e){var t=localStorage.getItem("last_complete_time_"+e)||"";var n=0;var i=window.npsSettings.config.global_fatigue_config.duration;var s=window.npsSettings.config.global_fatigue_config.time_unit;if(i&&s){if(s=="month"){n=i*30}else if(s=="week"){n=i*7}else if(s=="day"){n=i}}if(t&&n){if(getNpsCurrentDate(2)<=getNpsNextDate(t,n,2)){o=e}}});if(o!=""){if(window.npsSettings.debug){console.warn("====== 触发失败（全局疲劳控制），问卷【"+o+"】已触发过，详见 https://www.yuque.com/zwaq57/ss173i/nnyi7h#ywmlS")}return false}}}var t=window.location.href;if(!document.querySelector(".nps-survey")){openViewRequest(function(){window.postMessage("createPopup",t)})}}};var getNpsConfig=function(a,c,e,t,n){getConfigRequest(e,t,n,function(e){if(window.npsSettings.config.open_cookies_config==1&&window.npsSettings.config.show_type!="CUSTOM"){var t=Date.parse(new Date)/1e3;nps_cookies_first_timestamp=Number(localStorage.getItem(nps_user_cookies+"_"+window.npsSettings.npsId+"cookies_first_time"))||Date.parse(new Date)/1e3;localStorage.setItem(nps_user_cookies+"_"+window.npsSettings.npsId+"cookies_first_time",nps_cookies_first_timestamp);if(nps_cookies_first_timestamp+window.npsSettings.config.from_first_day*3600*24>t){if(window.npsSettings.debug){console.warn("====== 触发失败（开启了距离首次访问时间控制），未到距离首次访问时间，可触发时间："+(nps_cookies_first_timestamp+window.npsSettings.config.from_first_day*3600*24),"现在时间："+t+"详见 https://www.yuque.com/zwaq57/ss173i/nnyi7h#KAqlG")}return false}}if(c){c();return false}if(window.npsSettings.config.type=="DIALOG"||window.npsSettings.config.type=="DIALOG_SINGLE"){if(is_nps_open){return false}is_nps_open=true;autoStartOpenNpsView()}else if(window.npsSettings.config.type=="ICON"&&window.npsSettings.config.status==1){if(window.npsSettings.debug){console.warn("====== 按钮模式，不自动触发。点击按钮即可显示")}nps_history_url=localStorage.getItem("nps_history_url");if(nps_history_url!=""&&nps_history_url!=window.location.href){if(document.querySelector(".nps-lightweight-app")){removeNpsByClass(this,"nps-lightweight-app")}localStorage.setItem("nps_history_url",window.location.href)}var n=function(e,t){var n=document.createElement("div");n.setAttribute("class","nps-lightweight-app-launcher nps-launcher");n.style.background="rgb("+window.npsSettings.config.primary_color+")";n.style.width=window.npsSettings.config.icon_side_length+"px";n.style.height=window.npsSettings.config.icon_side_length+"px";n.style.right=window.npsSettings.config.icon_padding_right+"px";n.style.bottom=window.npsSettings.config.icon_padding_bottom+"px";n.style.display="block";var i=false;var s=document.createElement("div");if(s.setAttribute("class","nps-lightweight-app-launcher-icon nps-lightweight-app-launcher-icon-open")){var t=document.createElement("img");t.setAttribute("src",""),t.setAttribute("alt",""),t.setAttribute("class","nps-lightweight-app-launcher-custom-icon-open"),s.appendChild(t)}else i?(s.setAttribute("class","nps-lightweight-app-launcher-icon nps-lightweight-app-launcher-icon-self-serve"),s.innerHTML=""):s.innerHTML=npsIconList[window.npsSettings.config.icon],s.style.width="40px !important";n.appendChild(s);return n},i=function(e,t){var n=document.createElement("div");n.setAttribute("class","nps-lightweight-app-launcher nps-launcher");n.style.bottom=window.npsSettings.config.icon_padding_bottom+"px";var i=false;var s=document.createElement("div");if(s.setAttribute("class","nps-side-btn")){var t=document.createElement("img");t.setAttribute("src",""),t.setAttribute("alt",""),t.setAttribute("class","nps-lightweight-app-launcher-custom-icon-open"),s.appendChild(t)}else i?(s.setAttribute("class","nps-lightweight-app-launcher-icon nps-lightweight-app-launcher-icon-self-serve"),s.innerHTML=""):s.innerHTML=npsIconList[window.npsSettings.config.icon],s.setAttribute("style","fill:rgb("+window.npsSettings.config.primary_color+")");s.append(window.npsSettings.config.icon_content);n.appendChild(s);return n},s=function(e,t){var n=t.querySelector(".nps-lightweight-app-launcher-custom-icon-open");!n||n.complete?e.appendChild(t):(n.addEventListener("load",function(){e.appendChild(t)}),n.addEventListener("error",function(){e.appendChild(t)}))};var o=document.createElement("div");if(o.setAttribute("class","nps-lightweight-app"),document.body.appendChild(o)){if(window.npsSettings.config.icon_style=="CIRCLE"){var r=n(a,window.iframe)}else{var r=i(a,window.iframe)}s(o,r)}var p=window.location.href;o.onclick=function(){if(is_nps_click_btn){return false}is_nps_click_btn=!0;document.querySelector(".nps-lightweight-app-launcher").style.display="none";if(!document.querySelector(".nps-survey")){openViewRequest(function(){window.postMessage("createPopup",p)})}}}if(window.npsSettings.openViewUrlList.indexOf(window.location.pathname)!=-1){if(!document.querySelector(".nps-survey")){openViewRequest(function(){window.postMessage("createPopup",p)})}}})};window.npsmeter.checkOpen=function(e){if(e&&e!=window.npsSettings.npsId){window.npsSettings.npsId=e;if(window.npsSettings.debug){console.log("======调用新的问卷【"+e+"】的配置请求")}getNpsConfig(document.body,function(){if(customFatigue()===false){if(window.npsmeterCb&&typeof window.npsmeterCb.checkOpen=="function"){window.npsmeterCb.checkOpen({status:false})}return false}check=checkOpenRequest(1,0,function(e){if(window.npsmeterCb&&typeof window.npsmeterCb.checkOpen=="function"){window.npsmeterCb.checkOpen({status:e})}})},e,1,0)}else{var t=e||window.npsSettings.npsId;if(!window.npsSettings.config||window.npsSettings.config&&window.npsSettings.config.id!=t){if(window.npsSettings.debug){console.log("======自定义触发，没有问卷配置，发起问卷【"+window.npsSettings.npsId+"】的配置请求")}getNpsConfig(document.body,function(){if(customFatigue()===false){if(window.npsmeterCb&&typeof window.npsmeterCb.checkOpen=="function"){window.npsmeterCb.checkOpen({status:false})}return false}check=checkOpenRequest(1,0,function(e){if(window.npsmeterCb&&typeof window.npsmeterCb.checkOpen=="function"){window.npsmeterCb.checkOpen({status:e})}})},e,1,0)}else{if(customFatigue()===false){if(window.npsmeterCb&&typeof window.npsmeterCb.checkOpen=="function"){window.npsmeterCb.checkOpen({status:false})}return false}check=checkOpenRequest(1,0,function(e){if(window.npsmeterCb&&typeof window.npsmeterCb.checkOpen=="function"){window.npsmeterCb.checkOpen({status:e})}})}}};var checkOpenRequest=function(e,t,n){var i={id:window.npsSettings.config.id,uuid:nps_user_cookies,first_view_time:nps_cookies_first_timestamp,userid:nps_user_id,username:nps_user_name,params:nps_params,nps_access_info:nps_access_info,current_url:window.location.href,referrer_url:document.referrer,is_customer_open:e,is_initiative_repeat:t};if(window.npsSettings.npsId){i.scope="global"}else{i.scope="part"}var s=window.npsSettings.url+window.npsSettings.checkOpenPath;if(window.npsSettings.debug){console.log("【发起请求】:"+s+"   【请求参数】："+JSON.stringify(i))}var o=true;nps_ajax({url:s,type:"POST",dataType:"json",contentType:"application/json",data:i,success:function(e){if(window.npsSettings.debug){console.log("【请求结果】："+e)}re=JSON.parse(e);if(n){n(re.data)}},error:function(e){},timeout:function(e){if(n){n(false)}}});return o};var customFatigue=function(e){var t=localStorage.getItem("is_nps_custom_close");if(t==1){var n=localStorage.getItem("custom_close_limit_time");if(n){if(getNpsCurrentDate(2)<n){if(window.npsSettings.debug){console.warn("====== 触发失败（用户开启不再显示），不再显示截止："+n)}return false}}}if(window.npsSettings.config.has_min_fatigue==1&&window.npsSettings.config.is_open_min_fatigue==1){if(window.npsSettings.config.min_fatigue_duration>0){try{window.npsSettings.config.project_campaign_ids.forEach(function(e){var t=localStorage.getItem("is_complete_"+e)||0;var n=localStorage.getItem("last_complete_time_"+e)||"";if(t==1&&n){if(getNpsCurrentDate(2)<getNpsNextDate(n,window.npsSettings.config.min_fatigue_duration,2)){if(window.npsSettings.debug){console.warn("====== 触发失败（全局最小疲劳度控制），问卷ID："+e+" 上次触发时间："+getNpsNextDate(n,0,2)+"，疲劳度"+window.npsSettings.config.min_fatigue_duration+"天")}throw new Error("Rrror")}}})}catch(e){if(e.message!="EndIterative"){return false}}}}if(window.npsSettings.config.custom_fatigue==1){is_nps_complete=localStorage.getItem("is_complete_"+window.npsSettings.npsId)||0;last_complete_time=localStorage.getItem("last_complete_time_"+window.npsSettings.npsId)||"";if(is_nps_complete==1&&last_complete_time&&window.npsSettings.config.repeat_duration){var i=getNpsCurrentDate(2);var s=getNpsNextDate(last_complete_time,window.npsSettings.config.repeat_duration,2);if(i<s){if(window.npsSettings.debug){console.warn("====== 触发失败（自定义调用受疲劳度控制），上次触发时间："+getNpsNextDate(last_complete_time,0,2),"下次可触发时间："+s+"，详见 https://www.yuque.com/zwaq57/ss173i/nnyi7h#pmMn2")}return false}}}if(window.npsSettings.config.open_cookies_config==1){var o=Date.parse(new Date)/1e3;nps_cookies_first_timestamp=Number(localStorage.getItem(nps_user_cookies+"_"+window.npsSettings.npsId+"cookies_first_time"))||Date.parse(new Date)/1e3;localStorage.setItem(nps_user_cookies+"_"+window.npsSettings.npsId+"cookies_first_time",nps_cookies_first_timestamp);if(nps_cookies_first_timestamp+window.npsSettings.config.from_first_day*3600*24>o){if(window.npsSettings.debug){console.warn("====== 触发失败（开启了距离首次访问时间控制），未到距离首次访问时间，可触发时间："+(nps_cookies_first_timestamp+window.npsSettings.config.from_first_day*3600*24),"现在时间："+o+"详见 https://www.yuque.com/zwaq57/ss173i/nnyi7h#KAqlG")}return false}}if(e){e()}};window.npsmeter.open=function(e,t){if(is_nps_new_msg_popup==1){if(window.npsSettings.debug){console.log("======有回复消息时不弹问卷")}return false}is_nps_finish=0;nps_select=[];if(!document.querySelector(".nps-survey")){if(e&&e!=window.npsSettings.npsId){window.npsSettings.npsId=e;if(window.npsSettings.debug){console.log("======调用新的问卷【"+e+"】的配置请求")}getNpsConfig(document.body,function(){customFatigue(function(){openViewRequest(function(){if(t==1){window.npsSettings.config.position="br_new";var e=document.querySelector(".nps-msg-box");if(e){e.setAttribute("class","nps_animate_animated nps_animate_fadeOut");e.addEventListener("animationend",function(){removeNpsByClass("","nps-msg-popup")})}}window.postMessage("createPopup",window.location.href)},1,t)})},e,1,t)}else{var n=e||window.npsSettings.npsId;if(!window.npsSettings.config||window.npsSettings.config&&window.npsSettings.config.id!=n){if(window.npsSettings.debug){console.log("======自定义触发，没有问卷配置，发起问卷【"+window.npsSettings.npsId+"】的配置请求")}getNpsConfig(document.body,function(){customFatigue(function(){openViewRequest(function(){if(t==1){window.npsSettings.config.position="br_new";var e=document.querySelector(".nps-msg-box");if(e){e.setAttribute("class","nps_animate_animated nps_animate_fadeOut");e.addEventListener("animationend",function(){removeNpsByClass("","nps-msg-popup")})}}window.postMessage("createPopup",window.location.href)},1,t)})},e,1,t)}else{customFatigue(function(){openViewRequest(function(){if(t==1){window.npsSettings.config.position="br_new";var e=document.querySelector(".nps-msg-box");if(e){e.setAttribute("class","nps_animate_animated nps_animate_fadeOut");e.addEventListener("animationend",function(){removeNpsByClass("","nps-msg-popup")})}}window.postMessage("createPopup",window.location.href)},1,t)})}}}else{if(window.npsSettings.debug){console.log("======不可重复弹出问卷")}}};window.npsmeter.close=function(){if(nps_popup_timer){clearTimeout(nps_popup_timer)}var e=document.querySelector(".nps-animate-box");if(e){e.setAttribute("class","nps_animate_animated nps_animate_fadeOut");removeNpsByClass("","nps-survey");is_nps_open=!1;is_nps_click_btn=!1;if(window.npsSettings.config.type=="ICON"){document.querySelector(".nps-lightweight-app-launcher").style.display="block"}}if(window.npsSettings.config&&window.npsmeterCb&&typeof window.npsmeterCb.close=="function"&&is_nps_finish==0){window.npsmeterCb.close({campaignId:window.npsSettings.config.id?window.npsSettings.config.id:0,campaignType:window.npsSettings.config.campaign_type})}var t=document.querySelector(".nps-mask");if(t){removeNpsByClass("","nps-mask")}};window.npsmeter.closeBtn=function(){if(document.querySelector(".nps-lightweight-app")){removeNpsByClass(this,"nps-lightweight-app");is_nps_click_btn=!1}};window.npsmeter.hideBtn=function(){if(document.querySelector(".nps-lightweight-app")&&document.querySelector(".nps-lightweight-app-launcher")){document.querySelector(".nps-lightweight-app-launcher").style.display="none"}};window.npsmeter.showBtn=function(){if(document.querySelector(".nps-lightweight-app")&&document.querySelector(".nps-lightweight-app-launcher")){document.querySelector(".nps-lightweight-app-launcher").style.display="block"}};window.addEventListener("message",function(e){var t=e.data;var n=window.document.body;if(t=="onLoad"){if(is_nps_onload){return false}if(window.npsSettings.debug){console.log("=========Npsmetr onload=========")}is_nps_onload=true;if(!window.npsSettings.npsId&&!window.npsSettings.projectNo){return false}if(!is_request_config){getNpsConfig(e)}else{if(window.npsSettings.debug){console.log("======页面载入完成，已发起过配置请求，不再重复请求配置")}}}if(t=="createPopup"){if(window.npsmeterCb&&typeof window.npsmeterCb.open=="function"){window.npsmeterCb.open({campaignId:window.npsSettings.config.id,campaignType:window.npsSettings.config.campaign_type})}var i=function(e){return e.replace(/\$\{\w.+\}/g,"")};var s=function(e){return function(t){return e.toString().match(/\/\*([\s\S]*?)\*\//)[1].replace(/\$\{\w.+\}/g,function(e){e=e.replace("${","").replace("}","");return t[e]})}};var o={questionTemplate1Box:s(function(){
/*
                    <div class="nps-step" style="overflow: hidden;position:relative;top:0px;">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 16px; margin: auto;margin-bottom:8px;">
                                    <div class="nps-title-box" style="margin:0 45px;">
                                        <div style="line-height: 1.5;font-size:14px; text-align:center;font-weight:600;place-content: center; flex-direction: column;color:${text_color};">
                                            ${title}
                                        </div>
                                    </div>
                                    <div>
                                        <div style="margin-top: 12px;text-align:center;font-size:0;">
                                            <div style="color:${text_color};display:inline-block;line-height:32px;font-size:12px;opacity:0.5;">
                                            ${low_legend}
                                            </div>
                                            <div class="nps-scale" id="nps_ces_${question_id}" dir="ltr" style="font-size:0;display:inline-block;margin:0 12px;"></div>
                                            <div style="color:${text_color};display:inline-block;line-height:32px;font-size:12px;opacity:0.5;">
                                                ${high_legend}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplate1:s(function(){
/*
                    <div class="nps-scale-button-box" style="margin-right:8px;display:inline-block;">
                        <div class="nps-scale-button" style="border-radius: ${btn_radius}px;
                        background-color: rgba(${text_color_rgb}, 0.06); box-sizing: border-box; text-align: center; line-height: 32px;height:32px;width:32px; cursor: pointer;">
                            <span style="color: rgb(${text_color_rgb}, 0.75);font-size:14px;">
                                ${rating}
                            </span>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplateFaceBox:s(function(){
/*
                    <div class="nps-step" style="overflow: hidden;position:relative;top:0px;">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 16px; margin: auto;margin-bottom:8px;">
                                    <div class="nps-title-box" style="margin:0 45px;">
                                        <div style="line-height: 1.5;font-size:14px; text-align:center;font-weight:600;place-content: center; flex-direction: column;color:${text_color};">
                                            ${title}
                                        </div>
                                    </div>
                                    <div>
                                        <div style="margin-top: 12px;text-align:center;font-size:0;">
                                            <div class="nps-scale" id="face_${question_id}" dir="ltr" style="font-size:0;display:inline-block;margin:0 12px;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplateFace:s(function(){
/*
                    <div class="nps-scale-button-box" style="margin-right:8px;display:inline-block;">
                        <div class="nps-scale-button" style="text-align: center;width:67px; cursor: pointer;">
                            <img style="width:32px;height:32px;transform-origin: 50% 100%;" src="${img_url}"/>
                            <div style="color: rgb(${text_color_rgb}, 0.6);font-size:12px;margin-top:8px;line-height:18px;">
                                ${content}
                            </div>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplate2:s(function(){
/*
                    <div class="nps-step" question_id="textarea_${question_id}" style="overflow: hidden;position:relative;">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 16px; margin: auto;">
                    <div class="nps-title-box" style="margin:0 45px;">
                    <div style="line-height: 1.5;font-size:14px; text-align:center;font-weight:600;place-content: center; flex-direction: column;color:${text_color};">
                       ${title}
                    </div>
                    </div>
                    <div style="width:516px;max-width: 100%;margin:12px auto;">
                       <textarea id="nps-survey-textarea" rows="4" placeholder="${text_placeholder}"
                        style="width:100%; border: 1px solid rgb(222,222,222,0.7);border-radius: ${box_radius}px;
                       color: ${text_color}; background-color: rgb(253, 253, 253); box-shadow: rgba(10, 10, 10, 0.1) 1px 1px 1px inset; outline: none;font-size: 14px; padding: 8px 12px; resize: vertical; box-sizing: border-box; transition: border 200ms ease 0s; height: 64px; margin: initial; zoom: 1; line-height: normal; white-space: pre-wrap; vertical-align: baseline; text-align: initial; user-select: auto; font-family: inherit; text-decoration: none; direction: ltr;resize:none;"></textarea>
                        <div style="width:516px;max-width: 100%;margin-top:5px;border: 1px solid rgb(222,222,222,0.7);border-radius:${box_radius}px;
                        color: ${text_color};
                        display:${is_get_contact}">
                            <input id="nps-contact-input" style="width:100%;box-sizing:border-box;border:none;outline:none;padding:5px;" placeholder="${contact_placeholder}"/>
                        </div>
                    </div>
                    <div style="width:516px;max-width: 100%;margin:0 auto;">
                    <button id="nps-submit" style="width:100%;color: rgb(253, 253, 253);border-radius: ${btn_radius}px;
                    background-color: rgb(${primary_color}); padding: 8px 14px; cursor: pointer; display: inline-block; font-size: 14px; border: none; margin: initial; line-height: normal; white-space: nowrap; vertical-align: baseline; text-align: center; user-select: none; font-family: inherit; text-decoration: none;">
                        ${submit_text}
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),questionTemplate3Box:s(function(){
/*
                    <div class="nps-step" id="nps_step_select_${question_id}" style="overflow: hidden;position:relative;top:0px">
                        <div>
                            <div class="nps-step-box" style="padding: 16px; margin: auto;">
                                <div class="nps-title-box" style="margin:0 45px;">
                                    <div style="line-height: 1.5;font-size:14px; text-align:center;font-weight:600;place-content: center; flex-direction: column;color:${text_color};">
                                       ${title}
                                    </div>
                                </div>
                                <div>
                                    <div class="nps-scale" id="select_${question_id}" style="white-space:normal;font-size:0;text-align:center;overflow:hidden;width:516px;max-width:100%;margin:12px auto 0px auto;"></div>
                                    <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                        <input style="width:516px;max-width:100%;margin:0 auto;margin-top:5px;height:32px;line-height32px;display:block;" placeholder="请输入..."/>
                                        <div style="width:516px;max-width: 100%;margin:0 auto;margin-top:10px;">
                                           <button class="select-other-input-submit" id="nps-submit" style="width:100%;border-radius:${btn_radius}px;
                                                color: rgb(253, 253, 253); background-color: rgb(${primary_color}); cursor: pointer; display: inline-block; font-size: 14px; border: none; margin: initial; zoom: 1; line-height: 32px; white-space: nowrap; vertical-align: baseline; text-align: center; user-select: none; font-family: inherit; text-decoration: none;">
                                                ${submit_text}
                                           </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>
                    */}),questionTemplate3:s(function(){
/*
                    <div style="margin-right:8px;min-width:80px;display:inline-block;">
                        <div class="nps-scale-button" style="border-radius: ${btn_radius}px;
                            background-color: rgba(${text_color_rgb}, 0.06); box-sizing: border-box;text-align: center; cursor: pointer;padding:6px 12px;margin-bottom:8px;">
                            <span style="color:rgba(${text_color_rgb},0.75);font-size:14px;">
                               ${rating}
                            </span>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplate4Box:s(function(){
/*
                    <div class="nps-step" id="nps_step_checkbox_${question_id}" style="overflow: hidden;position:relative;top:0px">
                        <div>
                            <div class="nps-step-box" style="padding: 16px; margin: auto;">
                                <div class="nps-title-box" style="margin:0 45px;">
                                    <div style="line-height: 1.5;font-size:14px; text-align:center;font-weight:600;place-content: center; flex-direction: column;color:${text_color};">
                                       ${title}
                                    </div>
                                </div>
                                <div>
                                    <div class="nps-scale" id="checkbox_${question_id}" style="white-space:normal;font-size:0;text-align:center;overflow:hidden;width:516px;max-width:100%;margin:12px auto 8px auto;"></div>
                                    <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                        <input style="width:516px;max-width:100%;margin:0 auto;margin-top:5px;height:32px;line-height32px;display:block;" placeholder="请输入..."/>
                                    </div>
                                    <div style="width:516px;max-width: 100%;margin:0 auto;margin-top:10px;">
                                       <button id="nps-submit" style="width:100%;color: rgb(253, 253, 253);border-radius: ${btn_radius}px;
                                       background-color: rgb(${primary_color}); cursor: pointer; display: inline-block; font-size: 14px; border: none;margin: initial;line-height: 32px; white-space: nowrap; vertical-align: baseline; text-align: center; user-select: none; font-family: inherit; text-decoration: none;">
                                            ${submit_text}
                                       </button>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                    */}),questionTemplate4:s(function(){
/*
                    <div style="margin-right:8px;min-width:80px;display:inline-block;">
                        <div class="nps-scale-button" style="border-radius: ${btn_radius}px;
                            background-color: rgba(${text_color_rgb}, 0.06); box-sizing: border-box; text-align: center; cursor: pointer;padding:6px 12px;margin-bottom:8px;">
                            <span style="color:rgba(${text_color_rgb},0.75);font-size:14px;">
                               ${rating}
                            </span>
                            <span class="rating_index" style="display:none">${rating_index}</span>
							<span class="check_exclusive" style="display:none">${exclusive}</span>
                        </div>
                    </div>
                    */}),thankHtml:s(function(){
/*
                    <div class="nps-step" style="overflow: auto;">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 16px; margin: auto;">
                    <div class="nps-title-box">
                    <div dir="ltr" style="line-height: 1.5; font-size: 14px; text-align:center;font-weight:600;color:${text_color}">
                    ${thank}
                        <div style="text-align:center;margin-top:10px;display:${show_thanks_icon}">
                            <img style="width:120px;height:120px;display:block;margin:0 auto;" src="${thanks_icon}"/>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),errorHtml:s(function(){
/*
                    <div class="nps-step" style="overflow: auto;height:auto !import">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 16px; margin: auto;">
                    <div class="nps-title-box" style="margin-bottom: 20px; margin-right: 40px;">
                    <div dir="ltr" style="line-height: 1.5; font-size: 16px; min-height: 26px; display: flex; place-content: center; flex-direction: column;color:${text_color}">
                       oops，功能暂不可用
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),html:s(function(){
/*
                    <div style="font-family: sans-serif; font-size: 14px; box-sizing: border-box;">
                    <div style="position:relative;">
                    <div class="nps-animate-box nps_animate_animated nps_animate_fadeInUp" style="">
                    <div>
                    <div class="nps-box-shadow" style="border-radius:${box_radius}px;
                    background-color: ${background_color}; color: rgb(51, 51, 51); box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px; box-sizing: border-box; border-bottom-left-radius: 0; border-bottom-right-radius: 0; overflow: hidden;">
                    <div style="position:relative;">
                        <div class="nps-question-box" style="max-height: 100vh; display: flex; flex-direction: column;">
                        </div>
                        
                       <div class="nps-popup-close-box" style="position:absolute;height:100%;right:0;top:0;display:flex;align-items:center">
                           <img id="nps-custom-set" style="display:${is_open_custom_fatigue};width:20px;height:20px;cursor: pointer;margin-top:14px;margin-right:5px;" src="data:image/png;base64,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">
                           <img id="nps-popup-close" style="width:25px;height:25px;cursor: pointer;margin-top: 14px;margin-right:10px;" src="data:image/png;base64,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" />
                       </div>

                       <div class="nps-custom-set-box" style="padding:2px 0;position:absolute;top:40px;right:45px;background-color:#fff;box-shadow: rgb(0 0 0 / 25%) 0px 0px 5px;border-radius:3px;display:none;">
                            <div id="btn-nps-custom-set" style="user-select: none;line-height:26px;font-size:13px;padding:2px 5px;cursor:pointer;color:rgba(${text_color_rgb}, 0.75);">
                                ${custom_fatigue_text}
                            </div>
                        </div>
                    </div>
           
                    <div style="flex-shrink: 0;border-top:1px solid rgba(${text_color_rgb}, 0.1)">
                    <div class="nps-survey-status" style="display:${show_logo}">
                    <div style="display:${show_logo}">
                    <div style="padding: 5px 0; background-color: rgba(${primary_color}, 0.06);">
                    <div>
                    <div class="nps-appear" style="transition: opacity 500ms ease 0s; opacity: 0;display:none;">2 / 2</div>
                    </div>
                    <div>
                    <div style="text-align: center;font-size: 12px;text-align:center;line-height:17px;">
                    <span style="color: rgba(${text_color_rgb},0.3);">Powered by</span>
                    <a href="javascript:;" onclick="npsPoweredBy()" style="text-decoration: none; color: rgb(${primary_color});">
                    NPSMeter
                    </a>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div style="position: absolute; right: 0px; top: 0px;">
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */})};var r={questionTemplate1Box:s(function(){
/*
                    <div class="nps-step" style="overflow: hidden;position:relative;top:0px;">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 20px; margin: auto;">
                    <div class="nps-title-box" style="min-height:52px;margin-right: 40px;">
                    <div style="line-height: 1.5; font-size: 16px; min-height: 26px; display: -webkit-box; place-content: center; flex-direction: column;color:${text_color};word-break:break-all;text-overflow: ellipsis;-o-text-overflow:ellipsis;overflow: hidden;
             -webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                       ${title}
                    </div>
                    </div>
                    <div>
                    <div class="nps-scale" id="nps_ces_${question_id}" dir="ltr" style="display: flex; flex-wrap: nowrap; margin-left: -2px; margin-right: -2px; ">
           
                    </div>
                    <div class="nps-legend-text" dir="ltr" style="display: flex; flex-wrap: nowrap; justify-content: space-between; font-size: 12px; color: #333333; margin-top: 8px;">
                        <div style="color:${text_color}">
                           ${low_legend}
                        </div>
                        <div style="color:${text_color}">
                           ${high_legend}
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),questionTemplate1:s(function(){
/*
                    <div class="nps-scale-button-box" style="padding: 0px 2px; flex: 1 1 0%;">
                       <div class="nps-scale-button" style="border-radius: ${btn_radius}px;
                       background-color: rgba(${primary_color}, 0.2); color: rgb(92, 55, 67); box-sizing: border-box; height: 40px; text-align: center; line-height: 40px; cursor: pointer;">
                           <span style="color:${text_color}">
                               ${rating}
                           </span>
                           <span class="rating_index" style="display:none">${rating_index}</span>
                       </div>
                    </div>
                    */}),questionTemplateFaceBox:s(function(){
/*
                    <div class="nps-step" style="overflow: hidden;position:relative;top:0px;">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 16px; margin: auto;margin-bottom:8px;">
                                    <div class="nps-title-box" style="margin:0 45px;">
                                        <div style="line-height: 1.5;font-size:14px; text-align:center;font-weight:600;place-content: center; flex-direction: column;color:${text_color};">
                                            ${title}
                                        </div>
                                    </div>
                                    <div>
                                        <div style="margin-top: 12px;text-align:center;font-size:0;">
                                            <div class="nps-scale" id="face_${question_id}" dir="ltr" style="font-size:0;display:inline-block;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplateFace:s(function(){
/*
                    <div class="nps-scale-button-box" style="display:inline-block;">
                        <div class="nps-scale-button" style="text-align: center;width:53.5px; cursor: pointer;">
                            <img style="width:30px;height:30px;transform-origin: 50% 100%;" src="${img_url}"/>
                            <div style="color: rgb(${text_color_rgb}, 0.6);font-size:12px;margin-top:8px;line-height:18px;">
                                ${content}
                            </div>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplate2:s(function(){
/*
                    <div class="nps-step" question_id="textarea_${question_id}" style="overflow: hidden;position:relative;">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 20px; margin: auto;">
                    <div class="nps-title-box" style="min-height:52px; margin-right: 40px;">
                    <div style="line-height: 1.5; font-size: 16px; min-height: 26px; display: flex; place-content: center; flex-direction: column;color:${text_color};word-break:break-all;text-overflow: ellipsis;-o-text-overflow:ellipsis;overflow: hidden;
             -webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                    ${title}
                    </div>
                    </div>
           
                    <textarea id="nps-survey-textarea" 
                    rows="4" style="width: 100%; border: 1px solid rgb(219, 219, 219);border-radius:${box_radius}px; color: rgb(51, 51, 51); background-color: rgb(253, 253, 253); box-shadow: rgba(10, 10, 10, 0.1) 0px 1px 2px inset; outline: none; font-size: 14px; padding: 8px; resize: vertical; box-sizing: border-box; transition: border 200ms ease 0s; height: initial; margin: initial; line-height: normal; white-space: pre-wrap; vertical-align: baseline; text-align: initial; user-select: auto; font-family: inherit; text-decoration: none;"></textarea>
                    <div style="width:516px;max-width: 100%;margin-top:5px;border: 1px solid rgb(219, 219, 219);border-radius:${box_radius}px;
                        color:rgb(51,51,51);display:${is_get_contact};">
                            <input id="nps-contact-input" style="width:100%;box-sizing:border-box;border:none;outline:none;padding:5px;" placeholder="${contact_placeholder}"/>
                        </div>
                    </div>
                    </div>
                    <div style="margin: auto; padding: 0px 20px 20px; display: flex; flex-direction: row-reverse;">
                    <button id="nps-submit" style="color: rgb(253, 253, 253);border-radius:${btn_radius}px;
                    background-color: rgb(${primary_color}); padding: 8px 14px; cursor: pointer; display: inline-block; font-size: 14px; border: none; min-width: 100px; width: initial; margin: initial;line-height: normal; white-space: nowrap; vertical-align: baseline; text-align: center; user-select: none; font-family: inherit; text-decoration: none;">
                        ${submit_text}
                    </button>
                    </div>
                    </div>
                    </div>
                    */}),questionTemplate3Box:s(function(){
/*
                    <div class="nps-step" id="nps_step_select_${question_id}" style="overflow: hidden;position:relative;top:0px">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 20px; margin: auto;">
                                    <div class="nps-title-box" style="min-height:52px; margin-right: 40px;">
                                        <div style="line-height: 1.5; font-size: 16px; min-height: 26px; display: -webkit-box; place-content: center; flex-direction: column;color:${text_color};word-break:break-all;text-overflow: ellipsis;-o-text-overflow:ellipsis;overflow: hidden;
                                            -webkit-line-clamp: 2;-webkit-box-orient: vertical;"">
                                            ${title}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="nps-scale" id="select_${question_id}" style="margin-left: -2px; margin-right: -2px;overflow:hidden;"></div>
                                        <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                            <input style="max-width:100%;margin-top:5px;height:32px;line-height32px;display:block;" placeholder="请输入..."/>
                                            <div style="margin: auto; margin-top:10px; display: flex; flex-direction: row-reverse;">
                                                <button id="nps-submit" style="color: rgb(253, 253, 253);border-radius:${btn_radius}px;
                                                    background-color: rgb(${primary_color}); padding: 8px 14px; cursor: pointer; display: inline-block; font-size: 14px; border: none; min-width: 100px; width: initial; margin: initial; zoom: 1; line-height: normal; white-space: nowrap; vertical-align: baseline; text-align: center; user-select: none; font-family: inherit; text-decoration: none;">
                                                    ${submit_text}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplate3:s(function(){
/*
                    <div style="padding: 5px 2px;margin-right:5px;float:left;min-width:80px;">
                    <div class="nps-scale-button" style="border-radius:${btn_radius}px;
                    background-color: rgba(${primary_color}, 0.2); color: rgb(92, 55, 67); box-sizing: border-box; height: 40px; text-align: center; line-height: 40px; cursor: pointer;padding:0 15px;">
                    <span style="color:${text_color}">
                       ${rating}
                    </span>
                    <span class="rating_index" style="display:none">${rating_index}</span>
                    </div>
                    </div>
                    */}),questionTemplate4Box:s(function(){
/*
                    <div class="nps-step" id="nps_step_checkbox_${question_id}" style="overflow: hidden;position:relative;top:0px">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 20px; margin: auto;">
                                    <div class="nps-title-box" style="min-height:52px; margin-right: 40px;">
                                        <div style="line-height: 1.5; font-size: 16px; min-height: 26px; display: -webkit-box; place-content: center; flex-direction: column;color:${text_color};word-break:break-all;text-overflow: ellipsis;-o-text-overflow:ellipsis;overflow: hidden;
                                            -webkit-line-clamp: 2;-webkit-box-orient: vertical;"">
                                            ${title}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="nps-scale" id="checkbox_${question_id}" style="margin-left: -2px; margin-right: -2px;overflow:hidden;"></div>
                                        <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                            <input style="max-width:100%;margin-top:5px;height:32px;line-height32px;display:block;" placeholder="请输入..."/>
                                        </div>
                                        <div style="margin: auto; margin-top:10px; display: flex; flex-direction: row-reverse;">
                                            <button id="nps-submit" style="color: rgb(253, 253, 253);border-radius:${btn_radius}px;
                                                background-color: rgb(${primary_color}); padding: 8px 14px; cursor: pointer; display: inline-block; font-size: 14px; border: none; min-width: 100px; width: initial; margin: initial; zoom: 1; line-height: normal; white-space: nowrap; vertical-align: baseline; text-align: center; user-select: none; font-family: inherit; text-decoration: none;">
                                                ${submit_text}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplate4:s(function(){
/*
                    <div style="padding: 5px 2px;margin-right:5px;float:left;min-width:80px;">
                    <div class="nps-scale-button" style="border-radius:${btn_radius}px;
                    background-color: rgba(${primary_color}, 0.2); color: rgb(92, 55, 67); box-sizing: border-box; height: 40px; text-align: center; line-height: 40px; cursor: pointer;padding:0 15px;">
                    <span style="color:${text_color}">
                       ${rating}
                    </span>
                    <span class="rating_index" style="display:none">${rating_index}</span>
					<span class="check_exclusive" style="display:none">${exclusive}</span>
                    </div>
                    </div>
                    */}),thankHtml:s(function(){
/*
                    <div class="nps-step" style="overflow: auto;">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 20px; margin: auto;">
                    <div class="nps-title-box" style="margin-bottom: 20px; margin-right: 40px;">
                    <div dir="ltr" style="line-height: 1.5; font-size: 16px; min-height: 26px; display: flex; place-content: center; flex-direction: column;color:${text_color}">
                    ${thank}
                    </div>
                    </div>
                        <div style="text-align:center;margin-top:10px;display:${show_thanks_icon}">
                            <img style="width:120px;height:120px;display:block;margin:0 auto;" src="${thanks_icon}"/>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),errorHtml:s(function(){
/*
                    <div class="nps-step" style="overflow: auto;height:auto !import">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 20px; margin: auto;">
                    <div class="nps-title-box" style="margin-bottom: 20px; margin-right: 40px;">
                    <div dir="ltr" style="line-height: 1.5; font-size: 16px; min-height: 26px; display: flex; place-content: center; flex-direction: column;color:${text_color}">
                       oops，功能暂不可用
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),html:s(function(){
/*
                    <div style="font-family: sans-serif; font-size: 14px; box-sizing: border-box;">
                    <div style="position:relative;">
                    <div class="nps-animate-box nps_animate_animated nps_animate_fadeInUp" style="">
                    <div>
                    <div class="nps-box-shadow" style="background-color: rgb(253, 253, 253); color: rgb(51, 51, 51);border-radius:${box_radius}px; box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px; box-sizing: border-box; border-bottom-left-radius: 0; border-bottom-right-radius: 0; overflow: hidden;">
                    <div style="position:relative;">
                        <div class="nps-question-box" style="max-height: 100vh; display: flex; flex-direction: column;">
                        </div>
                        
                       <div class="nps-popup-close-box" style="position:absolute;height:100%;right:0;top:0;display:flex;align-items:center">
                           <div id="nps-popup-close" style="color: rgb(112, 112, 112); cursor: pointer; margin-right: 20px; font-size: 16px; background-color: rgb(241, 241, 241); border-radius: 5px; height: 26px; width: 40px; box-sizing: border-box; text-align: center; line-height: 26px;">X</div>
                       </div>
                    </div>
           
                    <div style="flex-shrink: 0;">
                    <div class="nps-survey-status" style="display:${show_logo}">
                    <div style="display:${show_logo}">
                    <div style="padding: 10px 20px; display: flex; justify-content: space-between; align-items: flex-end; background-color: rgba(${primary_color}, 0.1);">
                    <div>
                    <div class="nps-appear" style="transition: opacity 500ms ease 0s; opacity: 0;">2 / 2</div>
                    </div>
                    <div>
                    <div style="text-align: center; color: rgb(132, 132, 132); font-size: 12px">
                    Powered by
                    <a href="javascript:;" onclick="npsPoweredBy()" style="text-decoration: none; color: rgb(${primary_color}); font-weight: bold;">
                    NPSmeter
                    </a>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div style="position: absolute; right: 0px; top: 0px;">
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */})};var p={questionTemplate1Box:s(function(){
/*
                    <div class="nps-step" style="overflow: hidden;position:relative;top:0px;">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 20px; margin: auto;">
                                    <div class="nps-title-box" style="margin-right: 40px;margin-top:10px;">
                                        <div style="line-height: 1.2; font-size: 14px; display: -webkit-box; place-content: center; flex-direction: column;;font-weight:600;color:${text_color};word-break:break-all;">
                                           ${title}
                                        </div>
                                    </div>
                                    <div style="margin-top:16px;">
                                        <div class="nps-scale" id="nps_ces_${question_id}" style="display: flex; flex-wrap: nowrap; margin-left: -2px; margin-right: -2px; "></div>
                                        <div class="nps-legend-text" dir="ltr" style="display: flex; flex-wrap: nowrap; justify-content: space-between; font-size: 12px; color: #333333; margin-top: 8px;">
                                            <div style="color:rgba(${text_color_rgb},0.5)">
                                               ${low_legend}
                                            </div>
                                            <div style="color:rgba(${text_color_rgb},0.5)">
                                               ${high_legend}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplate1:s(function(){
/*
                    <div class="nps-scale-button-box" style="padding: 0px 2px; flex: 1 1 0%;">
                       <div class="nps-scale-button" style="border-radius:${btn_radius}px;
                       background-color: rgba(${text_color_rgb}, 0.06); color: rgb(92, 55, 67); box-sizing: border-box; height: 32px; text-align: center; line-height: 32px; cursor: pointer;">
                           <span style="color:rgba(${text_color_rgb}, 0.75)">
                               ${rating}
                           </span>
                           <span class="rating_index" style="display:none">${rating_index}</span>
                       </div>
                    </div>
                    */}),questionTemplateFaceBox:s(function(){
/*
                    <div class="nps-step" style="overflow: hidden;position:relative;top:0px;">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 16px; margin: auto;margin-bottom:8px;">
                                    <div class="nps-title-box" style="margin:0 45px;">
                                        <div style="line-height: 1.5;font-size:14px; text-align:center;font-weight:600;place-content: center; flex-direction: column;color:${text_color};">
                                            ${title}
                                        </div>
                                    </div>
                                    <div>
                                        <div style="margin-top: 12px;text-align:center;font-size:0;">
                                            <div class="nps-scale" id="face_${question_id}" dir="ltr" style="font-size:0;display:inline-block;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplateFace:s(function(){
/*
                    <div class="nps-scale-button-box" style="display:inline-block;">
                        <div class="nps-scale-button" style="text-align: center;width:53.5px; cursor: pointer;">
                            <img style="width:30px;height:30px;transform-origin: 50% 100%;" src="${img_url}"/>
                            <div style="color: rgb(${text_color_rgb}, 0.6);font-size:12px;margin-top:8px;line-height:18px;">
                                ${content}
                            </div>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplate2:s(function(){
/*
                    <div class="nps-step" question_id="textarea_${question_id}" style="overflow: hidden;position:relative;">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 16px; margin: auto;">
                    <div class="nps-title-box" style="margin-right: 40px;margin-top:10px;">
                    <div style="line-height: 1.5;font-size:14px;font-weight:600;place-content: center; flex-direction: column;color:${text_color};word-break:break-all;">
                       ${title}
                    </div>
                    </div>
                    <div style="width:516px;max-width: 100%;margin:12px auto;">
                       <textarea id="nps-survey-textarea" placeholder="${text_placeholder}"
                        rows="4" style="width:100%; border: 1px solid rgb(222,222,222,0.7);border-radius:${box_radius}px;
                       color: ${text_color}; background-color: rgb(253, 253, 253); box-shadow: rgba(10, 10, 10, 0.1) 1px 1px 1px inset; outline: none; font-size: 14px; padding: 8px 12px; resize: vertical; box-sizing: border-box; transition: border 200ms ease 0s; height: 100px; margin: initial; zoom: 1; line-height: normal; white-space: pre-wrap; vertical-align: baseline; text-align: initial; user-select: auto; font-family: inherit; text-decoration: none; direction: ltr;resize:none;"></textarea>
                        <div style="width:516px;max-width: 100%;margin-top:5px;border: 1px solid rgb(222,222,222,0.7);border-radius:${box_radius}px;
                        color: ${text_color};
                        display:${is_get_contact};">
                            <input id="nps-contact-input" style="width:100%;box-sizing:border-box;border:none;outline:none;padding:5px;" placeholder="${contact_placeholder}"/>
                        </div>
                    </div>
                    <div style="width:516px;max-width: 100%;margin:0 auto;">
                    <button id="nps-submit" style="width:100%;color: rgb(253, 253, 253);border-radius:${btn_radius}px;
                    background-color: rgb(${primary_color}); padding: 8px 14px; cursor: pointer; display: inline-block; font-size: 14px; border: none;margin: initial; zoom: 1; white-space: nowrap; vertical-align: baseline; text-align: center; user-select: none; font-family: inherit; text-decoration: none;">
                        ${submit_text}
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),questionTemplate3Box:s(function(){
/*
                    <div class="nps-step" style="overflow: hidden;position:relative;top:0px">
                        <div class="nps-step-box" style="padding: 16px; margin: auto;">
                            <div class="nps-title-box" style="margin-right: 40px;margin-top:10px;">
                                <div style="line-height: 1.5;font-size:14px;font-weight:600;place-content: center; flex-direction: column;color:${text_color};word-break:break-all;">
                                   ${title}
                                </div>
                            </div>
                            <div>
                                <div class="nps-scale" id="select_${question_id}" style="white-space:normal;font-size:0;overflow:hidden;width:516px;max-width:100%;margin:12px auto 0px auto;"></div>
                                <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                    <input placeholder="请输入..."/>
                                    <div style="width:516px;max-width: 100%;margin:0 auto;margin-top:10px;">
                                       <button class="select-other-input-submit" id="nps-submit" style="width:100%;border-radius:${btn_radius}px;
                                            color: rgb(253, 253, 253); background-color: rgb(${primary_color}); cursor: pointer; display: inline-block; font-size: 14px; border: none; margin: initial; zoom: 1; line-height: 32px; white-space: nowrap; vertical-align: baseline; text-align: center; user-select: none; font-family: inherit; text-decoration: none;">
                                            ${submit_text}
                                       </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplate3:s(function(){
/*
                    <div style="margin-right:8px;width:100%;display:inline-block;">
                        <div class="nps-scale-button" style="border-radius: ${btn_radius}px;
                            background-color: rgba(${text_color_rgb}, 0.06); box-sizing: border-box;cursor: pointer;padding:6px 12px;margin-bottom:8px;">
                            <span style="color:rgba(${text_color_rgb},0.75);font-size:14px;word-break:break-all;line-height:1.5;">
                               ${rating}
                            </span>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplate4Box:s(function(){
/*
                    <div class="nps-step" id="nps_step_checkbox_${question_id}" style="overflow: hidden;position:relative;top:0px">
                        <div>
                            <div class="nps-step-box" style="padding: 16px; margin: auto;">
                                <div class="nps-title-box" style="margin-right: 40px;margin-top:10px;">
                                    <div style="line-height: 1.5;font-size:14px;font-weight:600;place-content: center; flex-direction: column;color:${text_color};word-break:break-all;">
                                       ${title}
                                    </div>
                                </div>
                                <div>
                                    <div class="nps-scale" id="checkbox_${question_id}" style="white-space:normal;font-size:0;overflow:hidden;width:516px;max-width:100%;margin:12px auto 0 auto;"></div>
                                    <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                        <input placeholder="请输入..."/>
                                    </div>
                                    <div style="width:516px;max-width: 100%;margin:0 auto;margin-top:10px;">
                                       <button id="nps-submit" style="width:100%;border-radius:${btn_radius}px;
                                            color: rgb(253, 253, 253); background-color: rgb(${primary_color}); cursor: pointer; display: inline-block; font-size: 14px; border: none; line-height: 32px; white-space: nowrap;text-align: center; user-select: none;text-decoration: none;">
                                            ${submit_text}
                                       </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplate4:s(function(){
/*
                    <div style="margin-right:8px;width:100%;display:inline-block;">
                        <div class="nps-scale-button" style="border-radius: ${btn_radius}px;
                        background-color: rgba(${text_color_rgb}, 0.06); box-sizing: border-box;cursor: pointer;padding:6px 12px;margin-bottom:8px;">
                            <span style="color:rgba(${text_color_rgb},0.75);font-size:14px;word-break:break-all;line-height:1.5;">
                               ${rating}
                            </span>
                            <span class="rating_index" style="display:none">${rating_index}</span>
							<span class="check_exclusive" style="display:none">${exclusive}</span>
                        </div>
                    </div>
                    */}),thankHtml:s(function(){
/*
                    <div class="nps-step" style="overflow: auto;">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 16px; margin: auto;">
                    <div class="nps-title-box">
                    <div dir="ltr" style="line-height: 1.5; font-size: 14px;font-weight:600;color:${text_color}">
                    ${thank}
                        <div style="text-align:center;margin-top:10px;display:${show_thanks_icon}">
                            <img style="width:120px;height:120px;display:block;margin:0 auto;" src="${thanks_icon}"/>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),errorHtml:s(function(){
/*
                    <div class="nps-step" style="overflow: auto;height:auto !import">
                    <div>
                    <div>
                    <div class="nps-step-box" style="padding: 16px; margin: auto;">
                    <div class="nps-title-box" style="margin-bottom: 20px; margin-right: 40px;">
                    <div dir="ltr" style="line-height: 1.5; font-size: 16px; min-height: 26px; display: flex; place-content: center; flex-direction: column;color:${text_color}">
                       oops，功能暂不可用
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),html:s(function(){
/*
                    <div style="font-family: sans-serif; font-size: 14px; box-sizing: border-box;">
                        <div>
                            <div class="nps-animate-box nps_animate_animated nps_animate_fadeInUp" style="">
                                <div>
                                    <div class="nps-box-shadow" style="border-radius:${box_radius}px;
                                    background-color: ${background_color};box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px;color: rgb(51, 51, 51); box-sizing: border-box;overflow: hidden;border-bottom-left-radius: 0;border-bottom-right-radius: 0;">
                                        <div style="position:relative;">
                                            <div class="nps-question-box" style="max-height: 75vh;overflow:auto;-webkit-overflow-scrolling : touch;"></div>
                                
                                            <div class="nps-popup-close-box" style="position:absolute;height:100%;right:0;top:0;display:flex;align-items:center">
                                                <img id="nps-custom-set" style="display:${is_open_custom_fatigue};width:20px;height:20px;cursor: pointer;margin-top:14px;margin-right:5px;" src="data:image/png;base64,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">
                                                <img id="nps-popup-close" style="width:25px;height:25px;cursor: pointer;margin-top: 14px;margin-right:10px;" src="data:image/png;base64,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" />
                                            </div>

                                            <div class="nps-custom-set-box" style="padding:2px 0;position:absolute;top:40px;right:45px;background-color:#fff;box-shadow: rgb(0 0 0 / 25%) 0px 0px 5px;border-radius:3px;display:none;">
                                                <div id="btn-nps-custom-set" style="user-select: none;line-height:26px;font-size:13px;padding:2px 5px;cursor:pointer;color:rgba(${text_color_rgb}, 0.75);">
                                                    ${custom_fatigue_text}
                                                </div>
                                            </div>
                                        </div>
                   
                                        <div style="flex-shrink: 0;border-top:1px solid rgba(${text_color_rgb}, 0.1)">
                                            <div class="nps-survey-status" style="display:${show_logo}">
                                                <div style="display:${show_logo}">
                                                    <div style="padding: 5px 0; background-color: rgba(${primary_color}, 0.06);">
                                                        <div>
                                                            <div class="nps-appear" style="transition: opacity 500ms ease 0s; opacity: 0;display:none;">2 / 2</div>
                                                        </div>
                                                        <div>
                                                            <div style="text-align: center;font-size: 12px;text-align:center;line-height:17px;">
                                                                <span style="color: rgba(${text_color_rgb},0.3);">Powered by</span>
                                                                <a href="javascript:;" onclick="npsPoweredBy()" style="text-decoration: none; color: rgb(${primary_color});">
                                                                    NPSMeter
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="position: absolute; right: 0px; top: 0px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    */})};var a={questionTemplate1Box:s(function(){
/*
                    <div class="nps-step" style="">
                        <div>
                            <div>
                                <div class="nps-step-box" style="">
                                    <div class="nps-title-box" style="">
                                        <div class="nps-title-text" style="">
                                            ${title}
                                        </div>
                                    </div>
                                    <div class="nps-scale-box" style="">
                                        <div class="nps-scale" id="nps_ces_${question_id}" style=""></div>
                                        <div class="nps-legend-text" dir="ltr" style="">
                                            <div class="nps-legend-low" style="">
                                                ${low_legend}
                                            </div>
                                            <div class="nps-legend-high" style="">
                                                ${high_legend}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplate1:s(function(){
/*
                    <div class="nps-scale-button-box" style="">
                        <div class="nps-scale-button" style="">
                            <span style="color:rgba(${text_color_rgb}, 0.75)">
                                ${rating}
                            </span>
                            <span class="rating_index" style="">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplateFaceBox:s(function(){
/*
                    <div class="nps-step" style="">
                        <div>
                            <div>
                                <div class="nps-step-face-box" style="">
                                    <div class="nps-title-face-box" style="">
                                        <div class="nps-title-face-text" style="">
                                            ${title}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="nps-scale-face-box" style="">
                                            <div class="nps-scale-face" id="face_${question_id}" dir="ltr" style=""></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplateFace:s(function(){
/*
                    <div class="nps-scale-button-face-box" style="">
                        <div class="nps-scale-face-button" style="">
                            <img class="nps-scale-face" style="" src="${img_url}"/>
                            <div style="color: rgb(${text_color_rgb}, 0.6);font-size:12px;margin-top:8px;line-height:18px;">
                                ${content}
                            </div>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplate2:s(function(){
/*
                    <div class="nps-step" question_id="textarea_${question_id}" style="">
                    <div>
                    <div>
                    <div class="nps-step-text-box" style="">
                    <div class="nps-title-box" >
                    <div class="nps-step-text-text" style="">
                        ${title}
                    </div>
                    </div>
                    <div class="nps-text-box" style="">
                        <textarea class="nps-textarea" id="nps-survey-textarea" placeholder="${text_placeholder}"
                        rows="4" style=""></textarea>
                        <div class="nps-text-get-contact" style="display:${is_get_contact};">
                            <input class="nps-text-get-contact-input" id="nps-contact-input" style=""  placeholder="${contact_placeholder}"/>
                        </div>
                    </div>
                    <div class="nps-text-button-box" style="">
                    <button class="nps-text-button" id="nps-submit" style="">
                        ${submit_text}
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),questionTemplate3Box:s(function(){
/*
                    <div class="nps-step" style="">
                        <div class="nps-step-select-box" style="">
                            <div class="nps-title-select-box" style="">
                                <div class="nps-title-select-text" style="">
                                    ${title}
                                </div>
                            </div>
                            <div>
                                <div class="nps-scale-select" id="select_${question_id}" style=""></div>
                                <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                    <input placeholder="请输入..."/>
                                    <div class="nps-scale-select-button-box" style="">
                                        <button class="select-other-input-submit" id="nps-submit" style="">
                                            ${submit_text}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplate3:s(function(){
/*
                    <div style="margin-right:8px;width:100%;display:inline-block;">
                        <div class="nps-scale-select-button" style="">
                            <span class="nps-scale-select-button-text" style="">
                                ${rating}
                            </span>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplate4Box:s(function(){
/*
                    <div class="nps-step" id="nps_step_checkbox_${question_id}" style="">
                        <div>
                            <div class="nps-step-checkbox-box" style="">
                                <div class="nps-title-checkbox-box" style="">
                                    <div class="nps-title-checkbox-text" style="">
                                        ${title}
                                    </div>
                                </div>
                                <div>
                                    <div class="nps-scale-checkbox" id="checkbox_${question_id}" style=""></div>
                                    <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                        <input placeholder="请输入..."/>
                                    </div>
                                    <div class="nps-submit-checkbox-box" style="">
                                        <button class="nps-submit-checkbox-button" id="nps-submit" style="">
                                            ${submit_text}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplate4:s(function(){
/*
                    <div style="margin-right:8px;width:100%;display:inline-block;">
                        <div class="nps-scale-checkbox-button" style="">
                            <span class="nps-scale-checkbox-text" style="">
                                ${rating}
                            </span>
                            <span class="rating_index" style="display:none">${rating_index}</span>
							<span class="check_exclusive" style="display:none">${exclusive}</span>
                        </div>
                    </div>
                    */}),thankHtml:s(function(){
/*
                    <div class="nps-step" style="">
                    <div>
                    <div>
                    <div class="nps-step-thank-box" style="">
                    <div class="nps-title-thank-box">
                    <div class="nps-thank-text" dir="ltr" style="">
                    ${thank}
                        <div class="nps-thank-img-box" style="display:${show_thanks_icon}">
                            <img class="nps-thank-img" style="" src="${thanks_icon}"/>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),errorHtml:s(function(){
/*
                    <div class="nps-step" style="">
                    <div>
                    <div>
                    <div class="nps-step-error-box" style="">
                    <div class="nps-title-error-box" style="">
                    <div class="nps-error-text" dir="ltr" style="">
                        oops，功能暂不可用
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    */}),html:s(function(){
/*
                    <div class="nps-main" style="">
                        <div>
                            <div class="nps-animate-box nps_animate_animated nps_animate_fadeInUp" style="">
                                <div>
                                    <div class="nps-box-shadow" style="">
                                        <div style="position:relative;">
                                            <div class="nps-question-box" style=""></div>
                                
                                            <div class="nps-popup-close-box" style="">
                                                <img class="nps-custom-set" id="nps-custom-set" style="display:${is_open_custom_fatigue};" src="data:image/png;base64,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">
                                                <img class="nps-popup-close" id="nps-popup-close" style="" src="data:image/png;base64,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" />
                                            </div>

                                            <div class="nps-custom-set-box" style="">
                                                <div class="btn-nps-custom-set" id="btn-nps-custom-set" style="">
                                                    ${custom_fatigue_text}
                                                </div>
                                            </div>
                                        </div>
                    
                                        <div style="flex-shrink: 0;border-top:1px solid rgba(${text_color_rgb}, 0.1)">
                                            <div class="nps-survey-status" style="display:${show_logo}">
                                                <div style="display:${show_logo}">
                                                    <div style="padding: 5px 0; background-color: rgba(${primary_color}, 0.06);">
                                                        <div>
                                                            <div class="nps-appear" style="transition: opacity 500ms ease 0s; opacity: 0;display:none;">2 / 2</div>
                                                        </div>
                                                        <div>
                                                            <div style="text-align: center;font-size: 12px;text-align:center;line-height:17px;">
                                                                <span style="color: rgba(${text_color_rgb},0.3);">Powered by</span>
                                                                <a href="javascript:;" onclick="npsPoweredBy()" style="text-decoration: none; color: rgb(${primary_color});">
                                                                    NPSMeter
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="position: absolute; right: 0px; top: 0px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    */})};var c={questionTemplate1Box:s(function(){
/*
                    <div class="nps-step" id="nps_step_nps_ces_${question_id}" style="overflow: hidden;position:relative;top:0px;">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 15px 20px; margin: auto;">
                                    <div class="nps-title-box" style="margin-top:25px;">
                                        <div style="line-height: 1.2; font-size: 14px; display: -webkit-box; place-content: center; flex-direction: column;font-weight:600;color:${text_color};word-break:break-all;">
                                           ${title}
                                        </div>
                                    </div>
                                    <div style="margin-top:16px;">
                                        <div class="nps-scale" id="nps_ces_${question_id}" style="display: flex; flex-wrap: nowrap; margin-left: -2px; margin-right: -2px; "></div>
                                        <div class="nps-legend-text" dir="ltr" style="display: flex; flex-wrap: nowrap; justify-content: space-between; font-size: 12px; color: #333333; margin-top: 8px;">
                                            <div style="color:rgba(${text_color_rgb},0.5)">
                                               0分：${low_legend}
                                            </div>
                                            <div style="color:rgba(${text_color_rgb},0.5)">
                                               10分：${high_legend}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line-box">
                            <div class="line" style="background-color:rgba(${text_color_rgb},0.1)"></div>
                        </div>
                    </div>
                    */}),questionTemplate1:s(function(){
/*
                    <div class="nps-scale-button-box" style="padding: 0px 2px; flex: 1 1 0%;">
                       <div class="nps-scale-button" style="border-radius:${btn_radius}px;
                       background-color: rgba(${text_color_rgb}, 0.06); color: rgb(92, 55, 67); box-sizing: border-box; height: 32px; text-align: center; line-height: 32px; cursor: pointer;">
                           <span style="color:rgba(${text_color_rgb}, 0.75)">
                               ${rating}
                           </span>
                           <span class="rating_index" style="display:none">${rating_index}</span>
                       </div>
                    </div>
                    */}),questionTemplateFaceBox:s(function(){
/*
                    <div class="nps-step" style="overflow: hidden;position:relative;top:0px;">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 16px; margin: auto;margin-bottom:8px;">
                                    <div class="nps-title-box" style="margin-top:20px;">
                                        <div style="line-height: 1.5;font-size:14px;font-weight:600;place-content: center; flex-direction: column;color:${text_color};">
                                            ${title}
                                        </div>
                                    </div>
                                    <div>
                                        <div style="margin-top: 12px;text-align:center;font-size:0;">
                                            <div class="nps-scale" id="face_${question_id}" dir="ltr" style="font-size:0;display:inline-block;"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),questionTemplateFace:s(function(){
/*
                    <div class="nps-scale-button-box" style="display:inline-block;">
                        <div class="nps-scale-button" style="text-align: center;width:53.5px; cursor: pointer;">
                            <img style="width:30px;height:30px;transform-origin: 50% 100%;" src="${img_url}"/>
                            <div style="color: rgb(${text_color_rgb}, 0.6);font-size:12px;margin-top:8px;line-height:18px;">
                                ${content}
                            </div>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplate2:s(function(){
/*
                    <div class="nps-step" question_id="textarea_${question_id}" style="position:relative;">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 16px; margin: auto;">
                                    <div class="nps-title-box" style="margin-top:25px;">
                                        <div style="line-height: 1.5;font-size:14px;font-weight:600;place-content: center; flex-direction: column;color:${text_color};word-break:break-all;">
                                            ${title}
                                        </div>
                                    </div>
                                    <div style="width:516px;max-width: 100%;margin:8px auto;">
                                        <textarea id="nps-survey-textarea" rows="4"
                                            placeholder="${text_placeholder}"
                                            style="width:100%; border: 1px solid rgb(222,222,222,0.7);border-radius:${box_radius}px;
                                            color: ${text_color}; background-color: rgb(253, 253, 253); 
                                            box-shadow: rgba(10, 10, 10, 0.1) 1px 1px 1px inset; outline: none; 
                                            font-size: 14px; padding: 8px 12px; box-sizing: border-box; 
                                            transition: border 200ms ease 0s; height: 80px;resize:none;"></textarea>
                                        <div style="width:516px;max-width: 100%;margin-top:5px;border: 1px solid rgb(222,222,222,0.7);border-radius:${box_radius}px;
                                        color: ${text_color};
                                        display:${is_get_contact}">
                                            <input id="nps-contact-input" style="width:100%;box-sizing:border-box;border:none;outline:none;padding:5px;" placeholder="${contact_placeholder}"/>
                                        </div>    
                                    </div>
                                    <div style="width:516px;max-width: 100%;margin:0 auto;">
                                        <button id="nps-submit" style="width:100%;color: rgb(253, 253, 253);border-radius:${btn_radius}px;margin-top:10px;
                                            background-color: rgb(${primary_color});cursor: pointer; display: inline-block; font-size: 14px; border: none; zoom: 1; line-height: 40px; white-space: nowrap; text-align: center; user-select: none; text-decoration: none;">
                                            ${submit_text}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line-box">
                            <div class="line" style="background-color:rgba(${text_color_rgb},0.1)"></div>
                        </div>
                    </div>
                    */}),questionTemplate3Box:s(function(){
/*
                    <div class="nps-step" id="nps_step_select_${question_id}" style="position:relative;top:0px">
                        <div>
                            <div class="nps-step-box" style="padding: 16px; margin: auto;">
                                <div class="nps-title-box" style="margin-top:25px;">
                                    <div style="line-height: 1.5;font-size:14px;font-weight:600;place-content: center; flex-direction: column;color:${text_color};word-break:break-all;">
                                       ${title}
                                    </div>
                                </div>
                                <div>
                                    <div class="nps-scale" id="select_${question_id}" style="white-space:normal;font-size:0;overflow:hidden;width:516px;max-width:100%;margin:8px auto 0px auto;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;"></div>
                                    <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                        <input placeholder="请输入..."/>
                                        <div class="select-other-input-submit-box" style="width:516px;max-width: 100%;margin:0 auto;margin-top:10px;">
                                           <button class="select-other-input-submit" id="nps-submit" style="width:100%;border-radius:${btn_radius}px;
                                                color: rgb(253, 253, 253); background-color: rgb(${primary_color}); cursor: pointer; display: inline-block; font-size: 14px; border: none; margin: initial; zoom: 1; line-height: 32px; white-space: nowrap; vertical-align: baseline; text-align: center; user-select: none; font-family: inherit; text-decoration: none;">
                                                ${submit_text}
                                           </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line-box">
                            <div class="line" style="background-color:rgba(${text_color_rgb},0.1)"></div>
                        </div>
                    </div>
                    */}),questionTemplate3:s(function(){
/*
                    <div class="nps-select-box">
                        <div class="nps-scale-button" style="border-radius: ${btn_radius}px;height:calc(100% - 8px);
                            background-color: rgba(${text_color_rgb}, 0.06); box-sizing: border-box;cursor: pointer;padding:6px 12px;margin-bottom:8px;">
                            <span style="color:rgba(${text_color_rgb},0.75);font-size:14px;word-break:break-all;display: block;line-height:1.5;">
                                ${rating}
                            </span>
                            <span class="rating_index" style="display:none">${rating_index}</span>
                        </div>
                    </div>
                    */}),questionTemplate4Box:s(function(){
/*
                    <div class="nps-step" id="nps_step_checkbox_${question_id}" style="position:relative;top:0px">
                        <div>
                            <div class="nps-step-box" style="padding: 16px; margin: auto;">
                                <div class="nps-title-box" style="margin-top:25px;">
                                    <div style="line-height: 1.5;font-size:14px;font-weight:600;place-content: center; flex-direction: column;color:${text_color};word-break:break-all;">
                                       ${title}
                                    </div>
                                </div>
                                <div>
                                    <div class="nps-scale" id="checkbox_${question_id}" style="white-space:normal;font-size:0;overflow:hidden;width:516px;max-width:100%;margin:8px auto 0 auto;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;"></div>
                                    <div class="nps-other-input-box" id="nps_other_input_box_${question_id}">
                                        <input placeholder="请输入..."/>
                                    </div>
                                    <div style="width:516px;max-width: 100%;margin:0 auto;">
                                        <button id="nps-submit" style="width:100%;border-radius:${btn_radius}px;margin-top:10px;
                                            color: rgb(253, 253, 253); background-color: rgb(${primary_color}); cursor: pointer; display: inline-block; font-size: 14px; border: none; zoom: 1; line-height: 40px; white-space: nowrap;text-align: center; user-select: none; text-decoration: none;">
                                            ${submit_text}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line-box">
                            <div class="line" style="background-color:rgba(${text_color_rgb},0.1)"></div>
                        </div>
                    </div>
                    */}),questionTemplate4:s(function(){
/*
                    <div class="nps-select-box">
                        <div class="nps-scale-button" style="border-radius: ${btn_radius}px;height:calc(100% - 8px);
                            background-color: rgba(${text_color_rgb}, 0.06); box-sizing: border-box;cursor: pointer;padding:6px 12px;margin-bottom:8px;">
                            <span style="color:rgba(${text_color_rgb},0.75);font-size:14px;word-break:break-all;display: block;line-height:1.5;">
                               ${rating}
                            </span>
                            <span class="rating_index" style="display:none">${rating_index}</span>
							<span class="check_exclusive" style="display:none">${exclusive}</span>
                        </div>
                    </div>
                    */}),thankHtml:s(function(){
/*
                    <div class="nps-step" style="overflow: auto;">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 16px; margin: auto;">
                                    <div>
                                        <div style="line-height: 1.5; font-size: 14px;font-weight:600;color:${text_color};margin-top:20px;">
                                            ${thank}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),errorHtml:s(function(){
/*
                    <div class="nps-step" style="overflow: auto;height:auto !import">
                        <div>
                            <div>
                                <div class="nps-step-box" style="padding: 16px; margin: auto;">
                                    <div class="nps-title-box" style="margin-bottom: 20px;">
                                        <div style="line-height: 1.5; font-size: 16px; min-height: 26px; display: flex; place-content: center; flex-direction: column;color:${text_color}">
                                           oops，功能暂不可用
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    */}),html:s(function(){
/*
                    <div class="nps-global-style">
                        <div>
                            <div class="nps-animate-box nps_animate_animated nps_animate_fadeInUp" style="">
                                <div>
                                    <div class="nps-box-shadow template4" style="background-color: ${background_color};">
                                        <div style="position:relative;">
                                            <div class="nps-question-box" style="max-height: 75vh;overflow:auto;-webkit-overflow-scrolling : touch;"></div>
                                
                                            <div class="nps-popup-close-box">
                                                <img id="nps-popup-close" src="data:image/png;base64,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" />
                                            </div>
                                        </div>
                   
                                        <div style="flex-shrink: 0;border-top:1px solid rgba(${border_top_color_rgb}, 0.1);
                                        padding-bottom:${padding_bottom};
                                        background-color:rgba(${padding_color},0.06)">
                                            <div class="nps-survey-status" style="display:${show_logo}">
                                                <div style="display:${show_logo}">
                                                    <div style="padding: 5px 0;">
                                                        <div>
                                                            <div style="text-align: center;font-size: 12px;text-align:center;line-height:17px;">
                                                                <span style="color: rgba(${text_color_rgb},0.3);">Powered by</span>
                                                                <a href="javascript:;" onclick="npsPoweredBy()" style="text-decoration: none; color: rgb(${primary_color});">
                                                                    NPSMeter
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="position: absolute; right: 0px; top: 0px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    */})};var w=r;var l=false;if(window.npsSettings.config.campaign_style_type=="DIALOG_SINGLE"){w=c;l=true}else if(window.npsSettings.config.type=="ICON"||window.npsSettings.config.position=="br_new"){if(window.npsSettings.config.diy_css==1){w=a}else{w=p}l=true}else if(window.npsSettings.config.position=="bc_new"&&document.body.clientWidth>640){w=o;l=true}var _=function(){var i=getNpsDomByClass("nps_ces_"+window.npsSettings.question.id,"nps-scale-button");var s=i.length;var o="rgba("+window.npsSettings.config.primary_color+", 1)";var r="rgba("+window.npsSettings.config.primary_color+", 0.2)";if(l){r="rgba("+window.npsSettings.config.text_color_rgb+", 0.06)"}var e=function(){var e=getNpsChildDom(this)[1].innerHTML;for(var t=e;t<s;t++){getNpsChildDom(i[t])[0].style.color="rgba("+window.npsSettings.config.text_color_rgb+",0.75)";i[t].style.backgroundColor=r}for(var n=0;n<=e;n++){getNpsChildDom(i[n])[0].style.color="#fff";i[n].style.backgroundColor=o}};for(var t in i){i[t].onmouseover=e}getNpsDomByClass("","nps-step").pop().querySelector(".nps-scale").onmouseleave=function(){for(var e in i){getNpsChildDom(i[e])[0].style.color="rgba("+window.npsSettings.config.text_color_rgb+",0.75)";i[e].style.backgroundColor=r}};for(var t in i){i[t].onclick=u}};var g=function(){var e=getNpsDomByClass("nps_ces_"+window.npsSettings.question.id,"nps-scale-button");var t=e.length;for(var n in e){e[n].onmouseover=null}getNpsDomByClass("","nps-step").pop().querySelector(".nps-scale").onmouseleave=null;for(var n in e){e[n].onclick=null}};var u=function(){g();var e=getNpsChildDom(this)[0].innerHTML.replace(/[\r\n]/g,"").replace(/\ +/g,"");answerRequest(window.npsSettings.question.id,window.npsSettings.question.type,window.npsSettings.question.view_id,window.npsSettings.question.view_unique_id,e,"","",function(e){if(e.code==200){d(function(){if(nps_other_value!=""){nps_other_value.forEach(function(e,t){if(e!=""){if(nps_question_list[t]["type"]=="text"){document.querySelector(".nps-step[question_id="+"textarea_"+nps_question_list[t]["id"]+"] #nps-survey-textarea").value=e}else{document.querySelector("#nps_other_input_box_"+nps_question_list[t]["id"]+" input").value=e}}})}})}else{console.log(e.message)}})};var f=function(){var s=getNpsDomByClass("face_"+window.npsSettings.question.id,"nps-scale-button");var o=s.length;var r=window.npsSettings.config.text_color;if(l){r="rgba("+window.npsSettings.config.text_color_rgb+", 0.6)"}var e=function(){var e=getNpsChildDom(this)[2].innerHTML.replace(/[\r\n]/g,"").replace(/\ +/g,"");for(var t=0;t<o;t++){if(!hasNpsClass(s[t],"is_select")){getNpsChildDom(s[t])[0].style.transform="scale(1)";getNpsChildDom(s[t])[1].style.color=r}}getNpsChildDom(this)[0].style.transform="scale(1.2)";getNpsChildDom(this)[1].style.color=window.npsSettings.config.text_color};var t=function(){getNpsChildDom(this)[0].style.color=r;getNpsChildDom(this)[0].style.transform="scale(1)"};for(var n in s){s[n].onmouseover=e;s[n].onmouseleave=t}var i=function(){var e=getNpsChildDom(this)[2].innerHTML.replace(/[\r\n]/g,"").replace(/\ +/g,"");var t=getNpsChildDom(this)[2].innerHTML.replace(/(^\s*)|(\s*$)/g,"");t=Number(t)+1;nps_select=[];for(var n in s){s[n].onclick=null}if(!hasNpsClass(this,"is_select")){for(var i=0;i<o;i++){if(!hasNpsClass(s[i],"is_select")){getNpsChildDom(s[i])[0].setAttribute("src",window.npsSettings.question.rating_list[i].def_url)}}addNpsClass(this,"is_select");getNpsChildDom(this)[1].style.color=window.npsSettings.config.text_color;getNpsChildDom(this)[0].setAttribute("src",window.npsSettings.question.rating_list[e].url);this.onmouseleave=null;nps_select.push(t)}else{removeNpsClass(this,"is_select");getNpsChildDom(this)[1].style.color=r;getNpsChildDom(this)[0].style.transform="scale(1)";nps_select.splice(nps_select.indexOf(t),1)}answerRequest(window.npsSettings.question.id,window.npsSettings.question.type,window.npsSettings.question.view_id,window.npsSettings.question.view_unique_id,"",nps_select,"",function(e){if(e.code==200){d()}else{console.log(e.message)}})};for(var n in s){s[n].onclick=i}var p=function(e){if(is_nps_other_submit){return false}is_nps_other_submit=1;var t=document.querySelector("#nps_other_input_box_"+window.npsSettings.question.id+" #nps-submit");var i=window.npsSettings.question.id;var s=window.npsSettings.question.type;if(t){t.onclick=function(){var n=getNpsChildDom(document.getElementById("nps_other_input_box_"+window.npsSettings.question.id))[0].value;answerRequest(window.npsSettings.question.id,window.npsSettings.question.type,window.npsSettings.question.view_id,window.npsSettings.question.view_unique_id,"",e,n,function(e){if(e.code==200){if(window.npsSettings.config.campaign_style_type=="DIALOG_SINGLE"&&e.data.is_complete==0){document.querySelector("#nps_other_input_box_"+i+" input").setAttribute("readOnly","true");document.querySelector("#nps_other_input_box_"+i+" .select-other-input-submit-box").style.display="none";var t=document.getElementById("nps_step_select_"+i);if(t){t.style.height="auto";t.style.height=t.scrollHeight+"px"}d(window.npsSettings.config.campaign_style_type,s,function(){document.querySelector("#nps_other_input_box_"+i+" input").value=n;if(nps_other_value!=""){nps_other_value.forEach(function(e,t){if(e!=""){if(nps_question_list[t]["type"]=="text"){document.querySelector(".nps-step[question_id="+"textarea_"+nps_question_list[t]["id"]+"] #nps-survey-textarea").value=e}else{document.querySelector("#nps_other_input_box_"+nps_question_list[t]["id"]+" input").value=e}}})}})}else{d(function(){if(nps_other_value!=""){nps_other_value.forEach(function(e,t){if(e!=""){if(nps_question_list[t]["type"]=="text"){document.querySelector(".nps-step[question_id="+"textarea_"+nps_question_list[t]["id"]+"] #nps-survey-textarea").value=e}else{document.querySelector("#nps_other_input_box_"+nps_question_list[t]["id"]+" input").value=e}}})}})}}else{console.log(e.message)}})}}}};var m=function(){var o=getNpsDomByClass("select_"+window.npsSettings.question.id,"nps-scale-button");var n=o.length;var r="rgba("+window.npsSettings.config.primary_color+", 0.2)";var p=window.npsSettings.config.text_color;if(l){r="rgba("+window.npsSettings.config.text_color_rgb+", 0.06)";p="rgba("+window.npsSettings.config.text_color_rgb+", 0.75)"}var e=function(){var e=getNpsChildDom(this)[1].innerHTML.replace(/[\r\n]/g,"").replace(/\ +/g,"");for(var t=0;t<n;t++){if(!hasNpsClass(o[t],"is_select")){getNpsChildDom(o[t])[0].style.color=p;o[t].style.backgroundColor=r}}getNpsChildDom(this)[0].style.color="#fff";this.style.backgroundColor="rgba("+window.npsSettings.config.primary_color+", 1)"};var t=function(){getNpsChildDom(this)[0].style.color=p;this.style.backgroundColor=r};for(var i in o){o[i].onmouseover=e;o[i].onmouseleave=t}var s=function(){var e=getNpsChildDom(this)[0].innerHTML.replace(/(^\s*)|(\s*$)/g,"");var t=document.getElementById("nps_other_input_box_"+window.npsSettings.question.id);if(e.indexOf("其他")!=-1){t.style.display="block";var n=getNpsChildDom(document.getElementById("nps_other_input_box_"+window.npsSettings.question.id))[0];n.focus();getNpsChildDom(this)[0].style.color="#fff";this.style.backgroundColor="rgba("+window.npsSettings.config.primary_color+", 1)";this.onmouseleave=null;a(e);var i=document.getElementById("nps_step_select_"+window.npsSettings.question.id);if(i){i.style.height="auto";i.style.height=i.scrollHeight+"px"}if(window.npsSettings.config.campaign_style_type=="DIALOG_SINGLE"){setTimeout(function(){var e=document.querySelector(".nps-question-box");e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},300)}}else{if(t){t.style.display="none"}nps_select=[];for(var s in o){o[s].onclick=null}var i=document.getElementById("nps_step_select_"+window.npsSettings.question.id);if(i){i.style.height="auto";i.style.height=i.scrollHeight+"px"}if(!hasNpsClass(this,"is_select")){addNpsClass(this,"is_select");getNpsChildDom(this)[0].style.color="#fff";this.style.backgroundColor="rgba("+window.npsSettings.config.primary_color+", 1)";this.onmouseleave=null;nps_select.push(e)}else{removeNpsClass(this,"is_select");getNpsChildDom(this)[0].style.color=p;this.style.backgroundColor=r;nps_select.splice(nps_select.indexOf(e),1)}answerRequest(window.npsSettings.question.id,window.npsSettings.question.type,window.npsSettings.question.view_id,window.npsSettings.question.view_unique_id,"",nps_select,"",function(e){if(e.code==200){d(function(){if(nps_other_value!=""){nps_other_value.forEach(function(e,t){if(e!=""){if(nps_question_list[t]["type"]=="text"){document.querySelector(".nps-step[question_id="+"textarea_"+nps_question_list[t]["id"]+"] #nps-survey-textarea").value=e}else{document.querySelector("#nps_other_input_box_"+nps_question_list[t]["id"]+" input").value=e}}})}})}else{console.log(e.message)}})}};for(var i in o){o[i].onclick=s}var a=function(e){if(is_nps_other_submit){return false}is_nps_other_submit=1;var t=document.querySelector("#nps_other_input_box_"+window.npsSettings.question.id+" #nps-submit");var i=window.npsSettings.question.id;var s=window.npsSettings.question.type;if(t){t.onclick=function(){var n=getNpsChildDom(document.getElementById("nps_other_input_box_"+window.npsSettings.question.id))[0].value;answerRequest(window.npsSettings.question.id,window.npsSettings.question.type,window.npsSettings.question.view_id,window.npsSettings.question.view_unique_id,"",e,n,function(e){if(e.code==200){if(window.npsSettings.config.campaign_style_type=="DIALOG_SINGLE"&&e.data.is_complete==0){document.querySelector("#nps_other_input_box_"+i+" input").setAttribute("readOnly","true");document.querySelector("#nps_other_input_box_"+i+" .select-other-input-submit-box").style.display="none";var t=document.getElementById("nps_step_select_"+i);if(t){t.style.height="auto";t.style.height=t.scrollHeight+"px"}d(window.npsSettings.config.campaign_style_type,s,function(){document.querySelector("#nps_other_input_box_"+i+" input").value=n;if(nps_other_value!=""){nps_other_value.forEach(function(e,t){if(e!=""){if(nps_question_list[t]["type"]=="text"){document.querySelector(".nps-step[question_id="+"textarea_"+nps_question_list[t]["id"]+"] #nps-survey-textarea").value=e}else{document.querySelector("#nps_other_input_box_"+nps_question_list[t]["id"]+" input").value=e}}})}})}else{d(function(){if(nps_other_value!=""){nps_other_value.forEach(function(e,t){if(e!=""){if(nps_question_list[t]["type"]=="text"){document.querySelector(".nps-step[question_id="+"textarea_"+nps_question_list[t]["id"]+"] #nps-survey-textarea").value=e}else{document.querySelector("#nps_other_input_box_"+nps_question_list[t]["id"]+" input").value=e}}})}})}}else{console.log(e.message)}})}}}};var S=function(){nps_select=[];var n=getNpsDomByClass("checkbox_"+window.npsSettings.question.id,"nps-scale-button");var i=n.length;var p="rgba("+window.npsSettings.config.primary_color+", 0.2)";var a=window.npsSettings.config.text_color;if(l){p="rgba("+window.npsSettings.config.text_color_rgb+", 0.06)";a="rgba("+window.npsSettings.config.text_color_rgb+", 0.75)"}var e=function(){var e=getNpsChildDom(this)[1].innerHTML.replace(/[\r\n]/g,"").replace(/\ +/g,"");for(var t=0;t<i;t++){if(!hasNpsClass(n[t],"is_select")){getNpsChildDom(n[t])[0].style.color=a;n[t].style.backgroundColor=p}}if(!hasNpsClass(this,"is_select")){getNpsChildDom(this)[0].style.color="#fff";this.style.backgroundColor="rgba("+window.npsSettings.config.primary_color+", 0.7)"}};var t=function(){if(!hasNpsClass(this,"is_select")){getNpsChildDom(this)[0].style.color=a;this.style.backgroundColor=p}};for(var s in n){n[s].onmouseover=e;n[s].onmouseleave=t}if(document.querySelector(".nps-scale-checkbox")){document.querySelector(".nps-scale-checkbox").onmouseleave=function(){for(var e in n){if(!hasNpsClass(n[e],"is_select")){getNpsChildDom(n[e])[0].style.color=a;n[e].style.backgroundColor=p}}}}else{document.querySelector(".nps-scale").onmouseleave=function(){for(var e in n){if(!hasNpsClass(n[e],"is_select")){getNpsChildDom(n[e])[0].style.color=a;n[e].style.backgroundColor=p}}}}var o=function(){var e=getNpsChildDom(this)[0].innerHTML.replace(/[\r\n]/g,"").replace(/\ +/g,"");var t=document.getElementById("nps_other_input_box_"+window.npsSettings.question.id);if(e.indexOf("其他")!=-1){t.style.display="block";var n=getNpsChildDom(document.getElementById("nps_other_input_box_"+window.npsSettings.question.id))[0];n.focus()}if(!hasNpsClass(this,"is_select")){if(this.getElementsByClassName("check_exclusive")[0].innerText=="exclusive"){if(document.getElementsByClassName("exclusive")&&document.getElementsByClassName("exclusive").length>0){var i=document.getElementsByClassName("exclusive");for(let e=0;e<i.length;e++){var s=getNpsChildDom(i[e])[0].innerHTML.replace(/[\r\n]/g,"").replace(/\ +/g,"");console.log(s);removeNpsClass(i[e],"is_select");getNpsChildDom(i[e])[0].style.color=a;i[e].style.backgroundColor=p;if(nps_select.indexOf(s)!=-1)nps_select.splice(nps_select.indexOf(s),1)}}addNpsClass(this,"exclusive")}addNpsClass(this,"is_select");getNpsChildDom(this)[0].style.color="#fff";this.style.backgroundColor="rgba("+window.npsSettings.config.primary_color+", 1)";nps_select.push(e)}else{removeNpsClass(this,"is_select");getNpsChildDom(this)[0].style.color=a;this.style.backgroundColor=p;nps_select.splice(nps_select.indexOf(e),1)}var o="";if(nps_select){if(!npsHasStringInArray(nps_select,"其他")){t.style.display="none";o=""}else{o=getNpsChildDom(document.getElementById("nps_other_input_box_"+window.npsSettings.question.id))[0].value}}var r=document.getElementById("nps_step_checkbox_"+window.npsSettings.question.id);if(r){r.style.height="auto";r.style.height=r.scrollHeight+"px"}};for(var s in n){n[s].onclick=o}var c=document.querySelector("#nps_step_checkbox_"+window.npsSettings.question.id+" #nps-submit");if(c){c.onclick=function(){if(nps_select==""){if(window.npsSettings.debug){console.log("多选题至少选择一个选项")}return false}if(c.getAttribute("is_click")==1){return false}c.setAttribute("is_click","1");var s=window.npsSettings.question.id;var o=window.npsSettings.question.type;var r="";if(npsHasStringInArray(nps_select,"其他")){r=getNpsChildDom(document.getElementById("nps_other_input_box_"+s))[0].value}answerRequest(window.npsSettings.question.id,window.npsSettings.question.type,window.npsSettings.question.view_id,window.npsSettings.question.view_unique_id,"",nps_select,r,function(e){if(e.code==200){if(e.data.is_complete==0){if(window.npsSettings.config.campaign_style_type=="DIALOG_SINGLE"){var t=c.scrollHeight;var n=document.getElementById("nps_step_checkbox_"+s);n.style.height=n.clientHeight-t-10+"px";c.remove()}var i=document.getElementById("nps_step_checkbox_"+s);if(i){i.style.height="auto";i.style.height=i.scrollHeight+"px"}d(window.npsSettings.config.campaign_style_type,o,function(){document.querySelector("#nps_other_input_box_"+s+" input").value=r;if(nps_other_value!=""){nps_other_value.forEach(function(e,t){if(e!=""){if(nps_question_list[t]["type"]=="text"){document.querySelector(".nps-step[question_id="+"textarea_"+nps_question_list[t]["id"]+"] #nps-survey-textarea").value=e}else{document.querySelector("#nps_other_input_box_"+nps_question_list[t]["id"]+" input").value=e}}})}})}else{d(function(){if(nps_other_value!=""){nps_other_value.forEach(function(e,t){if(e!=""){if(nps_question_list[t]["type"]=="text"){document.querySelector(".nps-step[question_id="+"textarea_"+nps_question_list[t]["id"]+"] #nps-survey-textarea").value=e}else{document.querySelector("#nps_other_input_box_"+nps_question_list[t]["id"]+" input").value=e}}})}})}}else{console.log(e.message)}});if(window.npsmeterCb&&typeof window.npsmeterCb.submit=="function"){window.npsmeterCb.submit({campaignId:window.npsSettings.config.id,campaignType:window.npsSettings.config.campaign_type,questionId:window.npsSettings.question.id,questionType:window.npsSettings.question.type,content:nps_select})}}}};var h=function(){var r=document.querySelector(".nps-step[question_id="+"textarea_"+window.npsSettings.question.id+"] #nps-submit");if(r){r.onclick=function(){r.onclick=null;var i=document.querySelector(".nps-step[question_id="+"textarea_"+window.npsSettings.question.id+"] #nps-survey-textarea").value;var e=document.querySelector(".nps-step[question_id="+"textarea_"+window.npsSettings.question.id+"] #nps-contact-input").value;if(window.npsSettings.question.is_required&&!i){r.onclick=null;h();return false}var s=window.npsSettings.question.id;var o=window.npsSettings.question.type;if(e!=""){is_nps_submit_contact=1}answerRequest(window.npsSettings.question.id,window.npsSettings.question.type,window.npsSettings.question.view_id,window.npsSettings.question.view_unique_id,"",i,e,function(e){if(e.code==200){if(window.npsSettings.config.campaign_style_type=="DIALOG_SINGLE"&&e.data.is_complete==0){var t=r.scrollHeight;var n=document.querySelector(".nps-step[question_id="+"textarea_"+s+"]");n.style.height=n.clientHeight-t-10+"px";r.remove();document.querySelector(".nps-step[question_id="+"textarea_"+s+"] #nps-survey-textarea").readOnly=true;d(window.npsSettings.config.campaign_style_type,o,function(){document.querySelector(".nps-step[question_id="+"textarea_"+s+"] #nps-survey-textarea").value=i;if(nps_other_value!=""){nps_other_value.forEach(function(e,t){if(e!=""){if(nps_question_list[t]["type"]=="text"){document.querySelector(".nps-step[question_id="+"textarea_"+nps_question_list[t]["id"]+"] #nps-contact-input").value=e}else{document.querySelector("#nps_other_input_box_"+nps_question_list[t]["id"]+" input").value=e}}})}})}else{d()}}else{console.log(e.message)}});if(window.npsmeterCb&&typeof window.npsmeterCb.submit=="function"){window.npsmeterCb.submit({campaignId:window.npsSettings.config.id,campaignType:window.npsSettings.config.campaign_type,question_id:window.npsSettings.question.id,question_type:window.npsSettings.question.type,content:i})}}}};var y=function(n){var i="";n.forEach(function(e,t){if(e.indexOf("其他")!=-1){i=e;n.splice(t,1)}});if(i){n.push(i)}return n};var d=function(e,t,n){if(window.npsSettings.config.type=="ICON"&&is_nps_error){if(document.querySelector(".nps-question-box")){document.querySelector(".nps-question-box").innerHTML+=w.errorHtml({text_color:window.npsSettings.config.text_color});if(!window.npsSettings.config.is_show_thanks_icon||!window.npsSettings.config.thanks_icon||window.npsSettings.config.position!="bc_new"&&window.npsSettings.config.position!="br_new"){setTimeout(function(){C()},2e3)}}}else{if(window.npsSettings.question.is_complete==0){if(window.npsSettings.question.type=="nps"||window.npsSettings.question.type=="ces"){if(document.querySelector(".nps-question-box")){document.querySelector(".nps-question-box").innerHTML+=w.questionTemplate1Box({title:window.npsSettings.question.title,high_legend:window.npsSettings.question.high_legend,low_legend:window.npsSettings.question.low_legend,primary_color:window.npsSettings.config.primary_color,text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,btn_radius:window.npsSettings.config.btn_radius,box_radius:window.npsSettings.config.box_radius,question_id:window.npsSettings.question.id})}var i="";for(var s=0;s<window.npsSettings.question.rating_list.length;s++){i+=w.questionTemplate1({rating_index:s,primary_color:window.npsSettings.config.primary_color,rating:window.npsSettings.question.rating_list[s],text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,btn_radius:window.npsSettings.config.btn_radius,box_radius:window.npsSettings.config.box_radius})}document.getElementById("nps_ces_"+window.npsSettings.question.id).innerHTML+=i;_()}else if(window.npsSettings.question.type=="face"){if(document.querySelector(".nps-question-box")){document.querySelector(".nps-question-box").innerHTML+=w.questionTemplateFaceBox({title:window.npsSettings.question.title,primary_color:window.npsSettings.config.primary_color,text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,btn_radius:window.npsSettings.config.btn_radius,box_radius:window.npsSettings.config.box_radius,submit_text:window.npsSettings.config.submit_text,question_id:window.npsSettings.question.id})}var i="";for(var s=0;s<window.npsSettings.question.rating_list.length;s++){i+=w.questionTemplateFace({rating_index:s,content:window.npsSettings.question.rating_list[s].content,img_url:window.npsSettings.question.rating_list[s].url,primary_color:window.npsSettings.config.primary_color,rating:window.npsSettings.question.rating_list[s],text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb})}document.getElementById("face_"+window.npsSettings.question.id).innerHTML+=i;f()}else if(window.npsSettings.question.type=="text"){if(document.querySelector(".nps-question-box")){document.querySelector(".nps-question-box").innerHTML+=w.questionTemplate2({title:window.npsSettings.question.title,high_legend:window.npsSettings.question.high_legend,low_legend:window.npsSettings.question.low_legend,primary_color:window.npsSettings.config.primary_color,text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,btn_radius:window.npsSettings.config.btn_radius,box_radius:window.npsSettings.config.box_radius,question_id:window.npsSettings.question.id,submit_text:window.npsSettings.config.submit_text,is_get_contact:window.npsSettings.question.is_get_contact&&is_nps_submit_contact==0?"block":"none",contact_placeholder:window.npsSettings.question.contact_placeholder,text_placeholder:window.npsSettings.question.is_set_text_placeholder==1?window.npsSettings.question.text_placeholder:""})}h();document.querySelector(".nps-step[question_id="+"textarea_"+window.npsSettings.question.id+"] #nps-survey-textarea").focus()}else if(window.npsSettings.question.type=="select"){if(document.querySelector(".nps-question-box")){document.querySelector(".nps-question-box").innerHTML+=w.questionTemplate3Box({title:window.npsSettings.question.title,primary_color:window.npsSettings.config.primary_color,text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,btn_radius:window.npsSettings.config.btn_radius,box_radius:window.npsSettings.config.box_radius,submit_text:window.npsSettings.config.submit_text,question_id:window.npsSettings.question.id})}var i="";if(window.npsSettings.question.is_option_random==1){shuffleOptions(window.npsSettings.question.rating_list);y(window.npsSettings.question.rating_list)}for(var s=0;s<window.npsSettings.question.rating_list.length;s++){i+=w.questionTemplate3({rating_index:s,primary_color:window.npsSettings.config.primary_color,rating:window.npsSettings.question.rating_list[s],text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,btn_radius:window.npsSettings.config.btn_radius,box_radius:window.npsSettings.config.box_radius})}if(document.getElementById("select_"+window.npsSettings.question.id)){document.getElementById("select_"+window.npsSettings.question.id).innerHTML+=i}m()}else if(window.npsSettings.question.type=="checkbox"){nps_select=[];if(document.querySelector(".nps-question-box")){document.querySelector(".nps-question-box").innerHTML+=w.questionTemplate4Box({title:window.npsSettings.question.title,primary_color:window.npsSettings.config.primary_color,text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,btn_radius:window.npsSettings.config.btn_radius,box_radius:window.npsSettings.config.box_radius,submit_text:window.npsSettings.config.submit_text,question_id:window.npsSettings.question.id})}var i="";if(window.npsSettings.question.is_option_random==1){shuffleOptions(window.npsSettings.question.rating_list);y(window.npsSettings.question.rating_list)}for(var s=0;s<window.npsSettings.question.rating_list.length;s++){i+=w.questionTemplate4({rating_index:s,background_color:window.npsSettings.config.background_color,primary_color:window.npsSettings.config.primary_color,rating:window.npsSettings.question.rating_list[s],exclusive:window.npsSettings.question.exclusive&&window.npsSettings.question.exclusive[s]==1?"exclusive":"",text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,btn_radius:window.npsSettings.config.btn_radius,box_radius:window.npsSettings.config.box_radius})}if(getNpsDomByClass("","nps-step").pop().querySelector(".nps-scale-checkbox")){getNpsDomByClass("","nps-step").pop().querySelector(".nps-scale-checkbox").innerHTML+=i}else{getNpsDomByClass("","nps-step").pop().querySelector(".nps-scale").innerHTML+=i}S()}}else{var o=window.npsSettings.config.thanks_fields||"感谢您的反馈~";var r="none";if(window.npsSettings.config.is_show_thanks_icon&&(window.npsSettings.config.position=="bc_new"||window.npsSettings.config.position=="br_new")){r="block"}if(document.querySelector(".nps-question-box")){document.querySelector(".nps-question-box").innerHTML+=w.thankHtml({thank:o,text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,thanks_icon:window.npsSettings.config.thanks_icon,show_thanks_icon:r})}if(window.npsmeterCb&&typeof window.npsmeterCb.finish=="function"){window.npsmeterCb.finish({campaignId:window.npsSettings.config.id,campaignType:window.npsSettings.config.campaign_type})}is_nps_finish=1;if(is_nps_complete==0){is_nps_complete=1;localStorage.setItem("is_complete_"+window.npsSettings.npsId,is_nps_complete);last_complete_time=getNpsCurrentDate(2);localStorage.setItem("last_complete_time_"+window.npsSettings.npsId,last_complete_time)}else{if(!window.npsSettings.config.is_show_thanks_icon||!window.npsSettings.config.thanks_icon||window.npsSettings.config.position!="bc_new"&&window.npsSettings.config.position!="br_new"){setTimeout(function(){C()},2e3)}}}is_nps_other_submit=0}var p=getNpsDomByClass("","nps-step").length;if(p>1){var a=getNpsDomByClass("","nps-step")[p-2];var c=a.scrollHeight;var l=getNpsDomByClass("","nps-step")[p-1];var g=l.scrollHeight;if(window.npsSettings.config.campaign_style_type=="DIALOG_SINGLE"){l.style.height="0px";l.style.cssText+=";-webkit-transition:all 500ms ease-in;";setTimeout(function(){l.style.height=g+2+"px"},50);if(window.npsSettings.question.is_complete==1){for(var s=0;s<p-1;s++){var u=getNpsDomByClass("","nps-step")[0];u.remove()}setTimeout(function(){C()},2e3)}else{a.addEventListener("transitionend",function(e){if(a){l.style.top="0px"}});setTimeout(function(){var e=document.querySelector(".nps-question-box");e.scrollTo({top:e.scrollHeight,behavior:"smooth"})},300)}}else if(window.npsSettings.config.type=="ICON"||window.npsSettings.config.position=="br_new"){a.style.display="none";a.remove();l.style.display="block"}else{l.style.height="0px";l.style.cssText+=";-webkit-transition:all 500ms ease-in;";a.style.height=c+"px";a.style.cssText+=";-webkit-transition:all 500ms ease-in;";setTimeout(function(){a.style.height="0px";a.style.top=-c+"px";l.style.height=g+"px"},50);var d=false;a.addEventListener("transitionend",function(e){if(a&&!d){d=true;a.remove();l.style.top="0px"}if(window.npsSettings.question.is_complete==1){if(!window.npsSettings.config.is_show_thanks_icon||!window.npsSettings.config.thanks_icon||window.npsSettings.config.position!="bc_new"&&window.npsSettings.config.position!="br_new"){setTimeout(function(){C()},2e3)}}});setTimeout(function(){d=true},1e3)}}if(e=="DIALOG_SINGLE"){if(n){n()}}};var v=document.createElement("div");v.setAttribute("class","nps-survey");v.innerHTML=w.html({background_color:window.npsSettings.config.background_color,box_radius:window.npsSettings.config.box_radius,btn_radius:window.npsSettings.config.btn_radius,primary_color:window.npsSettings.config.primary_color,text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,show_logo:window.npsSettings.config.show_logo==1?"block":"none",padding_color:window.npsSettings.config.show_logo==1?window.npsSettings.config.primary_color:"",border_top_color_rgb:window.npsSettings.config.show_logo==1?window.npsSettings.config.text_color_rgb:"",padding_bottom:nps_client=="pc"?"0px":"25px",custom_fatigue_text:window.npsSettings.config.custom_fatigue_text,is_open_custom_fatigue:window.npsSettings.config.is_open_custom_fatigue==1?"block":"none"});document.body.appendChild(v);d();var b=520;if(l){b=640}if(window.npsSettings.config.has_mask==1&&nps_client=="mobile"){var x=document.createElement("div");x.setAttribute("class","nps-mask");document.body.appendChild(x);document.querySelector(".nps-mask").style.backgroundColor="rgba("+window.npsSettings.config.mask_bg_color+","+window.npsSettings.config.mask_opacity/100+")"}if(document.body.clientWidth>b){if(window.npsSettings.config.diy_css!=1){document.querySelector(".nps-animate-box").style.bottom=0}document.querySelector(".nps-animate-box").style.zIndex=2147483647;document.querySelector(".nps-popup-close-box").style.height="auto";document.getElementById("nps-popup-close").style.marginTop="14px";if(window.npsSettings.config.type=="ICON"||window.npsSettings.config.position=="br_new"||window.npsSettings.config.campaign_style_type=="DIALOG_SINGLE"){if(window.npsSettings.config.diy_css!=1){document.querySelector(".nps-animate-box").style.right=window.npsSettings.config.modal_padding_right+"px";document.querySelector(".nps-animate-box").style.bottom=window.npsSettings.config.modal_padding_bottom+"px";document.querySelector(".nps-animate-box").firstElementChild.style.width="300px"}}else{if(window.npsSettings.config.position=="br"){document.querySelector(".nps-animate-box").style.right=window.npsSettings.config.modal_padding_right+"px";document.querySelector(".nps-animate-box").style.bottom=window.npsSettings.config.modal_padding_bottom+"px";document.querySelector(".nps-animate-box").firstElementChild.style.width=b+"px"}else if(window.npsSettings.config.position=="bl"){document.querySelector(".nps-animate-box").style.left="20px";document.querySelector(".nps-animate-box").firstElementChild.style.width=b+"px"}else if(window.npsSettings.config.position=="bp"){addNpsClass(document.querySelector(".nps-survey"),"bp");document.querySelector(".nps-animate-box").style.right=0;document.querySelector(".nps-animate-box").style.width="100%";if(document.body.clientWidth>=640){document.querySelector(".nps-question-box").style.width="600px";document.querySelector(".nps-popup-close-box").style.height="100%";document.getElementById("nps-popup-close").style.marginTop=0}document.querySelector(".nps-question-box").style.margin="0 auto";document.querySelector(".nps-step").style.height="auto"}else if(window.npsSettings.config.position=="ct"){document.querySelector(".nps-animate-box").style.right="50%";document.querySelector(".nps-animate-box").style.marginRight="-"+b/2+"px";document.querySelector(".nps-animate-box").firstElementChild.style.width=b+"px";document.querySelector(".nps-animate-box").style.bottom=(document.documentElement.clientHeight-document.querySelector(".nps-animate-box").clientHeight)/2+"px"}else{document.querySelector(".nps-animate-box").style.right="50%";document.querySelector(".nps-animate-box").style.marginRight="-"+b/2+"px";document.querySelector(".nps-animate-box").firstElementChild.style.width=b+"px"}}}else{if(window.npsSettings.config.campaign_style_type=="DIALOG_SINGLE"){document.querySelector(".nps-animate-box").style.bottom=0;document.querySelector(".nps-animate-box").style.left=0;document.querySelector(".nps-animate-box").style.right=0;document.querySelector(".nps-animate-box").style.zIndex=2147483647;document.querySelector(".nps-popup-close-box").style.height="auto";document.getElementById("nps-popup-close").style.marginTop="10px"}else if(window.npsSettings.config.type=="ICON"||window.npsSettings.config.position=="br_new"){document.querySelector(".nps-animate-box").style.zIndex=2147483647;document.querySelector(".nps-popup-close-box").style.height="auto";document.getElementById("nps-popup-close").style.marginTop="14px";if(window.npsSettings.config.diy_css!=1){document.querySelector(".nps-animate-box").style.right="10px";document.querySelector(".nps-animate-box").style.bottom="10px";document.querySelector(".nps-animate-box").firstElementChild.style.width="300px"}}else{if(window.npsSettings.config.position=="ct"){document.querySelector(".nps-animate-box").style.bottom=(document.documentElement.clientHeight-document.querySelector(".nps-animate-box").clientHeight)/2+"px"}else{document.querySelector(".nps-animate-box").style.bottom=0}document.querySelector(".nps-animate-box").style.left=0;document.querySelector(".nps-animate-box").style.right=0;document.querySelector(".nps-animate-box").style.zIndex=2147483647;document.querySelector(".nps-survey-status").style.display="none";document.querySelector(".nps-box-shadow").style.borderRadius="0px";document.querySelector(".nps-popup-close-box").style.height="auto";document.getElementById("nps-popup-close").style.marginTop="16px"}}var q=document.getElementById("nps-popup-close");q.onmouseover=function(){q.style.backgroundColor=l?"transparent":"#E9EAEC"};q.onmouseout=function(){q.style.backgroundColor=l?"transparent":"#EFF0EF"};var C=function(){var e=document.querySelector(".nps-animate-box");if(e){e.style["animation-name"]="fadeOut";e.style["animation-duration"]="0.5s";nps_other_value=[];is_nps_submit_contact=0;e.addEventListener("animationend",function(){removeNpsByClass("","nps-survey");is_nps_open=!1;is_nps_click_btn=!1;if(window.npsSettings.config.type=="ICON"){document.querySelector(".nps-lightweight-app-launcher").style.display="block"}})}if(window.npsmeterCb&&typeof window.npsmeterCb.close=="function"&&is_nps_finish==0){window.npsmeterCb.close({campaignId:window.npsSettings.config.id,campaignType:window.npsSettings.config.campaign_type})}var t=document.querySelector(".nps-mask");if(t){removeNpsByClass("","nps-mask")}};q.onclick=function(){C();is_nps_click_btn=!1;if(window.npsSettings.config.type=="ICON"){document.querySelector(".nps-lightweight-app-launcher").style.display="block"}};var N=document.getElementById("nps-custom-set");if(N){N.onclick=function(){var e=document.querySelector(".nps-custom-set-box");if(e.style.display=="block"){e.style.display="none"}else{var t=localStorage.getItem("is_nps_custom_close")||0;if(t==1){var n=document.getElementById("btn-nps-custom-set");n.style.backgroundColor="rgb("+window.npsSettings.config.primary_color+")";n.style.color="#fff"}e.style.display="block"}}}var I=document.getElementById("btn-nps-custom-set");if(I){I.onclick=function(){var e=localStorage.getItem("is_nps_custom_close")||0;if(e==1){I.style.backgroundColor="#ffffff";I.style.color="rgba("+window.npsSettings.config.text_color_rgb+", 0.75)";localStorage.setItem("is_nps_custom_close",0)}else{I.style.backgroundColor="rgb("+window.npsSettings.config.primary_color+")";I.style.color="#fff";localStorage.setItem("is_nps_custom_close",1);localStorage.setItem("custom_close_limit_time",getNpsNextDate(getNpsCurrentDate(2),window.npsSettings.config.custom_fatigue_duration,2));console.log("不再显示截止："+getNpsNextDate(getNpsCurrentDate(2),window.npsSettings.config.custom_fatigue_duration,2));setTimeout(function(){C()},500)}}}var k=document.getElementById("nps-survey-textarea");if(k){k.onfocus=function(){k.style.border="1px solid rgb("+window.npsSettings.config.primary_color+")"};k.onblur=function(){k.style.border="1px solid rgb(219, 219, 219)"}}}else if(t=="newMsg"){var i=function(e){return e.replace(/\$\{\w.+\}/g,"")};var s=function(e){return function(t){return e.toString().match(/\/\*([\s\S]*?)\*\//)[1].replace(/\$\{\w.+\}/g,function(e){e=e.replace("${","").replace("}","");return t[e]})}};var T=s(function(){
/*
                <div class="nps-msg-box nps_animate_animated nps_animate_fadeInUp">
                    <div class="nps-msg-top-bar" style="background-color:rgba(${primary_color}, 1);display:none;"></div>
                    <div class="nps-msg-container">
                        <div class="nps-msg-close-box">
                            <span class="nps-msg-close" id="npsMsgCloseBtn" style="color:${text_color};opacity:0.5;">x</span>
                        </div>
                        <div class="flex align-center">
                            <img style="width:15px;height:15px;" src="data:image/png;base64,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"/>
                            <span style="font-size:14px;color:${text_color};margin-left:5px;font-weight:600;">
                                <span>您有新的消息！</span>
                            </span>
                        </div>
                        <div class="nps-msg-line" style="background-color:rgba(${text_color_rgb},0.15);"></div>
                        <div class="nps-msg-content" style="color:${text_color};">
                            <pre style="opacity:0.75;white-space:pre-wrap;word-wrap:break-word;">${content}</pre>
                            <div style="display:${is_repeat}">
                                <div class="nps-repeat" style="background-color:rgba(${primary_color},1)" id="repeatNpsBtn">
                                    <span>重新评分</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="display:${show_logo}" class="nps-msg-footer-bar">
                        <div style="background-color:rgba(${primary_color}, 0.06);">
                            <div style="border-top:1px solid rgba(${text_color_rgb},0.1)">
                                <a style="cursor:pointer;text-decoration:none;" target="blank" href="https://app.npsmeter.cn/s/?source=product&plan=message&redirect_url=https%3A%2F%2Fwww.npsmeter.cn%2F">
                                    <span style="font-size:12px;line-height:28px;color:${text_color};opacity:0.3;">Powered by</span>
                                    <span style="font-size:12px;line-height:28px;color:rgba(${primary_color}, 1);">NPSMeter</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            */});var D=document.createElement("div");D.setAttribute("class","nps-msg-popup");D.innerHTML=T({new_message_title:window.npsSettings.config.new_message_title,new_message_btn:window.npsSettings.config.new_message_btn,primary_color:window.npsSettings.config.primary_color,text_color:window.npsSettings.config.text_color,text_color_rgb:window.npsSettings.config.text_color_rgb,content:nps_new_message,show_logo:window.npsSettings.config.show_logo==1?"block":"none",is_repeat:nps_is_repeat_open==1?"block":"none"});document.body.appendChild(D);var E=document.getElementById("npsMsgCloseBtn");var O=function(){var e=document.querySelector(".nps-msg-box");if(e){is_nps_new_msg_popup=0;e.setAttribute("class","nps_animate_animated nps_animate_fadeOut");removeNpsByClass("","nps-msg-popup")}};E.onclick=function(){O()};var B=document.getElementById("repeatNpsBtn");var L=function(){npsmeter.open(nps_repeat_open_campaign_no,1)};B.onclick=function(){L()}}},false);if(window.npsmeterCb&&typeof window.npsmeterCb.onReady=="function"){window.npsmeterCb.onReady()}}