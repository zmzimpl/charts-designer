(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"/TS9":function(e,t,a){e.exports={operateContainer:"operateContainer___1ga00",mzSiderbar:"mzSiderbar___3TFwj",mzToolbar:"mzToolbar___3R8Lx",mzMainContainer:"mzMainContainer___3OeJD",mzDesignBoard:"mzDesignBoard___116y1",mzDesignSetting:"mzDesignSetting___3N3n1",mzDesignSettingHeader:"mzDesignSettingHeader___2_6k7"}},"2UQq":function(e,t,a){e.exports={mzDesignBoardToolbar:"mzDesignBoardToolbar___2Oc2n",mzDesignBoard:"mzDesignBoard___2fDH7",mzDesignBoardArea:"mzDesignBoardArea___2eLz8",mzDesignBoardMenu:"mzDesignBoardMenu___GZFIp",widgetItemsBox:"widgetItemsBox___19X39",widgetItem:"widgetItem___3odgM",widgetItemImg:"widgetItemImg___vxkBL",widgetItemTitle:"widgetItemTitle___HDfRC",widgetItemOverlay:"widgetItemOverlay___3wDwW"}},Er0X:function(e,t,a){e.exports={mzSettingWrapper:"mzSettingWrapper___3LDLW"}},L5TS:function(e,t,a){"use strict";a.r(t),a.d(t,"PanelOperate",(function(){return de}));a("7Kak");var n=a("9yH6"),i=a("fWQN"),r=a("mtLc"),l=a("yKVA"),c=a("879j"),s=a("q1tI"),o=a.n(s),m=a("DaOR"),u=a("26re"),d=a("eFNv"),g=function(){return o.a.createElement("div",null,"GlobalSetting")},p=g,v=a("Er0X"),h=a.n(v),b=function(){return o.a.createElement("div",{className:h.a.mzSettingWrapper},"ItemSetting")},_=b,f=function(){return o.a.createElement("div",null,"DataBinding")},w=f,y=(a("bbsP"),a("/wGt")),k=(a("+L6B"),a("2/Rp")),z=(a("fu2T"),a("gK9i")),E=function(){function e(){Object(i["a"])(this,e)}return Object(r["a"])(e,null,[{key:"subscribe",value:function(e,t,a){var n=this.eventity,i=n[e];if(!i)return i=n[e]=[],i.push({subscriber:t,context:a}),this;for(var r=0;r<i.length;r++){var l=i[r];if(l.subscriber===t)return this}return i.push({subscriber:t,context:a}),this}},{key:"once",value:function(e,t,a){var n=this.eventity;return n[e]=[{subscriber:t,context:a}],this}},{key:"publish",value:function(e,t){var a=this.eventity,n=a[e];if(!n)return this;for(var i=0;i<n.length;i++){var r=n[i];r.context?r.subscriber.call(r.context,t):r.subscriber(t)}return this}},{key:"unsubscribe",value:function(e,t,a){var n=this.eventity,i=n[e];if(!i)return this;if(t)for(var r=0;r<i.length;r++){var l=i[r];l.subscriber===t&&l.context===a&&i.splice(r,1)}else n[e]=[];return this}}]),e}();E.eventity={};var S,B=function(){function e(){Object(i["a"])(this,e)}return Object(r["a"])(e,[{key:"execute",value:function(t,a,n){e.undoStack.push({action:t,reverse:a,ctx:n}),t.call(n),e.redoStack.length=0}}],[{key:"undo",value:function(){var e;if(null===(e=this.undoStack)||void 0===e?void 0:e.length){var t=this.undoStack.pop();t&&(t.reverse.call(t.ctx),this.redoStack.push(t))}}},{key:"redo",value:function(){var e;if(null===(e=this.redoStack)||void 0===e?void 0:e.length){var t=this.redoStack.pop();t&&(t.action.call(t.ctx),this.undoStack.push(t))}}},{key:"clear",value:function(){this.redoStack=[],this.undoStack=[]}}]),e}();B.undoStack=[],B.redoStack=[],function(e){e["widgetDrawerVisible"]="widgetDrawerVisible",e["widgetDragging"]="widgetDragging"}(S||(S={}));var x,D,W=a("JaaR"),C=a("k5nK"),I=a("VA6q"),O=(a("4gc0"),a("L+iq"),a("9BHx")),N=(a("diaF"),a("R2r0")),j=a.n(N),H=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(i["a"])(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r)),e.grid=void 0,e}return Object(r["a"])(a,[{key:"componentDidMount",value:function(){var e=this;this.initCanvas(),this.initListener(),this.drawGrid(),this.drawWidget(),onresize=function(){e.resizeCanvas()}}},{key:"initCanvas",value:function(){this.grid=O["GridStack"].init({resizable:{handles:"e, se, s, sw, w"},column:84,cellHeightUnit:"px",minWidth:2,float:!0,minRow:42});var e={x:2,y:0,width:12,height:8,content:"item 1"},t={x:14,y:0,width:12,height:8,content:"item 2"};this.grid.addWidget(e),this.grid.addWidget(t)}},{key:"drawGrid",value:function(){}},{key:"drawWidget",value:function(){}},{key:"initListener",value:function(){}},{key:"resizeCanvas",value:function(){setTimeout((function(){}),66)}},{key:"render",value:function(){return o.a.createElement("div",{className:j.a.canvasContainer,id:"grid-container"},o.a.createElement("div",{className:j.a.gridStackWrapper+" grid-stack"}))}}]),a}(o.a.Component),G=H;(function(e){e["Bar"]="Bar",e["Line"]="Line",e["Area"]="Area",e["Pie"]="Pie",e["Combination"]="Combination",e["Gauge"]="Gauge",e["Sactter"]="Scatter",e["Rectangle"]="Rectangle",e["Image"]="Image",e["Text"]="Text"})(x||(x={})),function(e){e["Bar"]="Bar",e["StackBar"]="StackBar",e["HorizontalBar"]="HorizontalBar",e["HorizontalStackBar"]="HorizontalStackBar",e["Line"]="Line",e["Area"]="Area",e["StackArea"]="StackArea",e["Pie"]="Pie",e["Doughnut"]="Doughnut",e["Rose"]="Rose",e["Combination"]="Combination",e["Gauge"]="Gauge",e["Image"]="Image",e["Text"]="Text"}(D||(D={}));var A=(new Map).set("\u56fe\u8868",[x.Bar,x.Pie,x.Line,x.Area,x.Combination,x.Gauge,x.Sactter]).set("\u90e8\u4ef6",[x.Image,x.Text]).set("\u5f62\u72b6",[x.Rectangle]),L=[{title:"\u666e\u901a\u67f1\u56fe",type:D.Bar,image:"https://echarts.apache.org/next/examples/data/thumb/bar-simple.webp?_v_=1607083425377"},{title:"\u5806\u53e0\u67f1\u56fe",type:D.StackBar,image:"https://www.echartsjs.com/ecg-storage/ec_gallery_thumbnail/x2sKgOz9LA.png?v=1597885103771"},{title:"\u6761\u5f62\u56fe",type:D.HorizontalBar,image:"https://echarts.apache.org/next/examples/data/thumb/bar-y-category.webp?_v_=1607083425377"},{title:"\u5806\u53e0\u6761\u5f62\u56fe",type:D.HorizontalStackBar,image:"https://echarts.apache.org/next/examples/data/thumb/bar-y-category-stack.webp?_v_=1607083425377"}],T=[{title:"\u6298\u7ebf\u56fe",type:D.Line,image:"https://echarts.apache.org/next/examples/data/thumb/line-simple.webp?_v_=1607083425377"}],M=(new Map).set(x.Bar,L).set(x.Line,T),R=a("2UQq"),K=a.n(R),P=z["a"].Panel,V=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(e){var n;return Object(i["a"])(this,a),n=t.call(this,e),n.widgetGeneralOptions=A,n.widgetGeneralMap=M,n.drawerBodyStyle={padding:"0px"},n.panelHeaderStyle={padding:"4px 12px"},n.state={visible:!1,widget:{type:"chart",name:"Chart"},defaultActiveKey:n.widgetGeneralOptions.get("\u56fe\u8868")},n.showDrawer=function(){n.setState({visible:!0})},n.closeDrawer=function(){n.setState({visible:!1})},E.subscribe(S.widgetDrawerVisible,(function(e){n.state.visible?e.widget.type===n.state.widget.type?n.setState({visible:!1}):n.setState({widget:e.widget}):n.setState({visible:!0,widget:e.widget,defaultActiveKey:n.widgetGeneralOptions.get(e.widget.name)})})),n}return Object(r["a"])(a,[{key:"componentWillUnmount",value:function(){E.unsubscribe(S.widgetDrawerVisible)}},{key:"render",value:function(){var e,t=this,a=o.a.createElement("div",null,"\u9009\u62e9",this.state.widget.name,o.a.createElement(W["a"],{className:"".concat(K.a.mzDesignBoardMenu," pointer"),onClick:this.closeDrawer})),n=null===(e=this.widgetGeneralOptions.get(this.state.widget.name))||void 0===e?void 0:e.map((function(e){var a,n=null===(a=t.widgetGeneralMap.get(e))||void 0===a?void 0:a.map((function(e){return o.a.createElement("div",{className:K.a.widgetItem,key:e.title,draggable:!0},o.a.createElement("div",{className:K.a.widgetItemOverlay}),o.a.createElement("img",{src:e.image,className:K.a.widgetItemImg,alt:e.title}),o.a.createElement("div",{className:K.a.widgetItemTitle},e.title))}));return o.a.createElement(P,{header:e,key:e},o.a.createElement("div",{className:K.a.widgetItemsBox},n))}));return o.a.createElement("div",{className:K.a.mzDesignBoard,style:{width:this.state.visible?"calc(100% - 256px)":"100%"}},o.a.createElement("div",{className:K.a.mzDesignBoardToolbar},o.a.createElement(k["a"],{type:"link",onClick:function(e){return B.undo()}},o.a.createElement(C["a"],null)," \u64a4\u9500"),o.a.createElement(k["a"],{type:"link",onClick:function(e){return B.redo()}},o.a.createElement(I["a"],null)," \u91cd\u505a")),o.a.createElement("div",{className:K.a.mzDesignBoardArea},o.a.createElement(G,null)),o.a.createElement(y["a"],{title:a,placement:"left",closable:!1,mask:!1,bodyStyle:this.drawerBodyStyle,onClose:this.closeDrawer,visible:this.state.visible,getContainer:!1,style:{position:"absolute"}},o.a.createElement(z["a"],{bordered:!1,defaultActiveKey:this.state.defaultActiveKey,expandIconPosition:"right",ghost:!0},n)))}}]),a}(o.a.Component),U=V,q=(a("14J3"),a("BMrR")),J=(a("jCWc"),a("kPKH")),X=a("ga3A"),F=a("lfch"),Q=a("4i/N"),Z=a("LM08"),Y=a.n(Z),$=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(r["a"])(a,[{key:"render",value:function(){return o.a.createElement("div",{className:Y.a.mzHeaderWrapper},o.a.createElement(q["a"],null,o.a.createElement(J["a"],{flex:"310px"},"Report Name"),o.a.createElement(J["a"],{flex:"auto"},o.a.createElement("div",{className:Y.a.mzHeaderBtnWrapper},o.a.createElement(X["a"],null)," \u4fdd\u5b58"),o.a.createElement("div",{className:Y.a.mzHeaderBtnWrapper},o.a.createElement(F["a"],null)," \u53e6\u5b58\u4e3a")),o.a.createElement(J["a"],{flex:"40px",className:Y.a.mzCloseBtnWrapper},o.a.createElement(Q["a"],null))))}}]),a}(o.a.Component),ee=$,te=a("QpHG"),ae=a("yyWI"),ne=a("sj+h"),ie=a("yU8i"),re=a("azkv"),le=a.n(re),ce=[{type:"Chart",name:"\u56fe\u8868",icon:o.a.createElement(te["a"],null)},{type:"Unit",name:"\u90e8\u4ef6",icon:o.a.createElement(ae["a"],null)},{type:"Shape",name:"\u5f62\u72b6",icon:o.a.createElement(ne["a"],null)},{type:"Template",name:"\u6a21\u677f",icon:o.a.createElement(ie["a"],null)}],se=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(r["a"])(a,[{key:"publishWidgetClick",value:function(e){E.publish(S.widgetDrawerVisible,{widget:e})}},{key:"render",value:function(){var e=this,t=ce.map((function(t,a){return o.a.createElement("div",{className:le.a.mzWidget,key:t.type+a,onClick:function(){return e.publishWidgetClick(t)}},o.a.createElement("div",{className:le.a.mzWidgetIcon},t.icon),o.a.createElement("div",{className:le.a.mzWidgetName},t.name))}));return o.a.createElement("div",{className:le.a.mzSiderbarWrapper},t)}}]),a}(o.a.Component),oe=se,me=a("/TS9"),ue=a.n(me),de=function(e){Object(l["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;Object(i["a"])(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r)),e.state={currentSetting:"Item"},e.setCurrentSetting=function(t){e.setState({currentSetting:t.target.value})},e}return Object(r["a"])(a,[{key:"render",value:function(){var e,t=this.state.currentSetting;return"Global"===t?e=o.a.createElement(p,null):"Data"===t?e=o.a.createElement(w,null):"Item"===t&&(e=o.a.createElement(_,null)),o.a.createElement("div",{className:ue.a.operateContainer},o.a.createElement("div",{className:ue.a.mzToolbar},o.a.createElement(ee,null)),o.a.createElement("div",{className:"".concat(ue.a.mzSiderbar," fixed")},o.a.createElement(oe,null)),o.a.createElement("div",{className:ue.a.mzMainContainer},o.a.createElement("div",{className:ue.a.mzDesignBoard},o.a.createElement(U,null)),o.a.createElement("div",{className:ue.a.mzDesignSetting},o.a.createElement("div",{className:ue.a.mzDesignSettingHeader},o.a.createElement(n["a"].Group,{defaultValue:"Item",value:t,onChange:this.setCurrentSetting,optionType:"button"},o.a.createElement(n["a"].Button,{value:"Global"},o.a.createElement(m["a"],{title:"\u5168\u5c40\u914d\u7f6e"})," ","Global"===t?"\u5168\u5c40\u914d\u7f6e":""),o.a.createElement(n["a"].Button,{value:"Data"},o.a.createElement(u["a"],{title:"\u6570\u636e\u7ed1\u5b9a"})," ","Data"===t?"\u6570\u636e\u7ed1\u5b9a":""),o.a.createElement(n["a"].Button,{value:"Item"},o.a.createElement(d["a"],{title:"\u5c5e\u6027\u8bbe\u7f6e"})," ","Item"===t?"\u5c5e\u6027\u8bbe\u7f6e":""))),e)))}}]),a}(o.a.Component);t["default"]=de},LM08:function(e,t,a){e.exports={mzHeaderWrapper:"mzHeaderWrapper___2SImo",mzCloseBtnWrapper:"mzCloseBtnWrapper___1ACXU",mzHeaderBtnWrapper:"mzHeaderBtnWrapper___DcX1t"}},R2r0:function(e,t,a){e.exports={canvasContainer:"canvasContainer___3V7hg",canvasWrapper:"canvasWrapper___1OqLG",gridStackWrapper:"gridStackWrapper___3A05-"}},azkv:function(e,t,a){e.exports={mzSiderbarWrapper:"mzSiderbarWrapper___791EE",mzWidget:"mzWidget___2NBck",mzWidgetIcon:"mzWidgetIcon___2EX9k",mzWidgetName:"mzWidgetName___1orJv"}}}]);