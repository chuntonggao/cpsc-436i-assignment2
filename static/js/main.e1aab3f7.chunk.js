(this["webpackJsonpmessage-list-no-hooks"]=this["webpackJsonpmessage-list-no-hooks"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(10),i=a.n(r),l=a(5),c=a(1),o=a(3),d=a(4),u=a(2),p=a(7),h=a(6),m=(a(34),a(37)),g="ADD_MESSAGE",b="DELETE_MESSAGE",O="DELETE_ALL_MESSAGES",y="TOGGLE_MESSAGE",E="TOGGLE_ALL_MESSAGES",f="UPDATE_MESSAGE",v=function(){return{type:E,payload:{readOn:new Date}}},j=a(19),k=a.n(j),x=a(20),N=a.n(x),S=function(e){return N()(e).format("MMMM Do YYYY, h:mm:ss a")},M=function(e){var t=e.read,a=e.createdOn,s=e.readOn,r=e.updatedOn;return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"message-item-detail-li"},"Created on: \xa0 ",S(a)),t&&n.a.createElement("li",{className:"message-item-detail-li"},"Read on: \xa0 ",S(s)),n.a.createElement("li",{className:"message-item-detail-li"},"Updated on: \xa0 ",S(r)))},D={deleteMessage:function(e){return{type:b,payload:{id:e}}},toggleMessage:function(e){return{type:y,payload:{id:e,readOn:new Date}}},updateMessage:function(e){var t=e.id,a=e.text;return{type:f,payload:{id:t,text:a,updatedOn:new Date}}}},w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={typing:!1,input:s.props.text,showDetails:!1},s.resetState=s.resetState.bind(Object(u.a)(s)),s.toggleRead=s.toggleRead.bind(Object(u.a)(s)),s.handleKeyUp=s.handleKeyUp.bind(Object(u.a)(s)),s.handleFocusOut=s.handleFocusOut.bind(Object(u.a)(s)),s.handleTyping=s.handleTyping.bind(Object(u.a)(s)),s.startTyping=s.startTyping.bind(Object(u.a)(s)),s.dispatchUpdate=s.dispatchUpdate.bind(Object(u.a)(s)),s.dispatchDelete=s.dispatchDelete.bind(Object(u.a)(s)),s.toggleDetails=s.toggleDetails.bind(Object(u.a)(s)),s}return Object(d.a)(a,[{key:"resetState",value:function(){this.setState({typing:!1,input:this.props.text})}},{key:"toggleRead",value:function(){this.props.toggleMessage(this.props.id)}},{key:"handleKeyUp",value:function(e){"Enter"===e.key?(this.state.input?this.dispatchUpdate():this.dispatchDelete(),this.resetState()):"Escape"===e.key&&this.resetState()}},{key:"handleFocusOut",value:function(){this.state.input?this.dispatchUpdate():this.dispatchDelete(),this.resetState()}},{key:"handleTyping",value:function(e){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{input:e.target.value}))}},{key:"startTyping",value:function(){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{typing:!0}))}},{key:"dispatchUpdate",value:function(){this.props.updateMessage({id:this.props.id,text:this.state.input})}},{key:"dispatchDelete",value:function(){this.props.deleteMessage(this.props.id)}},{key:"toggleDetails",value:function(){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{showDetails:!this.state.showDetails}))}},{key:"render",value:function(){var e=n.a.createElement("input",{type:"checkbox",className:"message-check-box",onChange:this.toggleRead,checked:this.props.read}),t=n.a.createElement("input",{autoFocus:!0,type:"text",value:this.state.input,onKeyUp:this.handleKeyUp,onBlur:this.handleFocusOut,className:"update-Box",onChange:this.handleTyping}),a=k()({"message-label":!0,"messages-strikethrough":this.props.read}),s=n.a.createElement("label",{onClick:this.startTyping,className:a},this.props.text),r=n.a.createElement("button",{className:"details-btn",onClick:this.toggleDetails},"..."),i=n.a.createElement("button",{className:"delete-btn",onClick:this.dispatchDelete},"x");return!1===this.state.typing?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",null,e,s,i,r),this.state.showDetails&&n.a.createElement(M,{read:this.props.read,createdOn:this.props.createdOn,readOn:this.props.readOn,updatedOn:this.props.updatedOn})):n.a.createElement("li",null,e,t,i)}}]),a}(n.a.Component),C=Object(l.b)(null,D)(w),T={addMessage:function(e){return{type:g,payload:{text:e,id:Object(m.a)(),createdOn:new Date}}},toggleAllMessages:v},A={input:"",typing:!1},F=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).formRef=void 0,s.state=A,s.clearForm=s.clearForm.bind(Object(u.a)(s)),s.createMessage=s.createMessage.bind(Object(u.a)(s)),s.handleKeyUp=s.handleKeyUp.bind(Object(u.a)(s)),s.formRef=n.a.createRef(),s.handleFocus=s.handleFocus.bind(Object(u.a)(s)),s.handleChange=s.handleChange.bind(Object(u.a)(s)),s}return Object(d.a)(a,[{key:"clearForm",value:function(){this.setState(A),this.formRef.current&&this.formRef.current.reset()}},{key:"createMessage",value:function(){this.props.addMessage(this.state.input),this.setState(A)}},{key:"handleKeyUp",value:function(e){"Enter"===e.key&&(this.props.addMessage(this.state.input),this.setState(A))}},{key:"handleFocus",value:function(){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{typing:!0}))}},{key:"handleChange",value:function(e){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{input:e.target.value}))}},{key:"render",value:function(){var e=n.a.createElement("input",{id:"toggle-all-btn",type:"checkbox",onClick:this.props.toggleAllMessages}),t=n.a.createElement("form",{id:"create-message-form",ref:this.formRef},n.a.createElement("input",{id:"create-message-input",type:"text",placeholder:"Add a new message",onKeyUp:this.handleKeyUp,onFocus:this.handleFocus,onChange:this.handleChange,value:this.state.input})),a=n.a.createElement("button",{className:"delete-btn",onClick:this.clearForm},"x"),s=n.a.createElement("button",{id:"create-message-btn",onClick:this.createMessage},"+");return n.a.createElement(n.a.Fragment,null,e,t,a,this.state.typing&&s)}}]),a}(n.a.Component),U=Object(l.b)(null,T)(F),L={deleteAllMessages:function(){return{type:O}},toggleAllMessages:v},G={selectedIds:new Set},R=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state=G,e}return Object(d.a)(a,[{key:"render",value:function(){var e=n.a.createElement("input",{id:"toggle-all-btn",className:"hide",type:"checkbox",onClick:this.props.toggleAllMessages}),t=this.props.messages.map((function(e){return n.a.createElement(C,{text:e.text,read:e.read,id:e.id,key:e.id,createdOn:e.createdOn,readOn:e.readOn,updatedOn:e.updatedOn})}));return n.a.createElement("div",{className:"content-div"},n.a.createElement("div",{className:"message-create-div"},this.props.messages.length>0&&e,n.a.createElement(U,null)),n.a.createElement("div",{className:"messages-view-box"},n.a.createElement("br",null),n.a.createElement("ul",null,t)),n.a.createElement("a",{id:"delete-all-button",onClick:this.props.deleteAllMessages},"DELETE ALL"))}}]),a}(n.a.Component),K=Object(l.b)((function(e){return{messages:e.messageList.messages}}),L)(R),_=function(){return n.a.createElement("div",{className:"tutorial-div"},n.a.createElement("h2",null,"Track your messages"),n.a.createElement("div",{className:"feature-div"},n.a.createElement("span",{className:"feature-title"},"1-ADD"),n.a.createElement("div",{className:"feature-text"},"Add a new message by pressing the enter key or tap the '+' button.")),n.a.createElement("div",{className:"feature-div"},n.a.createElement("span",{className:"feature-title"},"2-SEE"),n.a.createElement("div",{className:"feature-text"},"You'll see it right after you add a message. Your latest message will appear first on the list.")),n.a.createElement("div",{className:"feature-div"},n.a.createElement("span",{className:"feature-title"},"3-CHECK"),n.a.createElement("div",{className:"feature-text"},"Check off what you've read with the dark blue checkbox next to your message. Mark all your messages as read with the dark blue check button.")),n.a.createElement("div",{className:"feature-div"},n.a.createElement("span",{className:"feature-title"},"4-CHANGE"),n.a.createElement("div",{className:"feature-text"},"Make changes by tapping on your message. Save it by pressing the enter key or tapping outside of the box. Cancel your change by pressing escape key on your keyword.")),n.a.createElement("div",{className:"feature-div"},n.a.createElement("span",{className:"feature-title"},"5-DELETE"),n.a.createElement("div",{className:"feature-text"},"Delete your message by tapping the 'x' button next to your message. Delete all messages by tapping the 'x' button on the top.")))},Y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={showTutorial:!1},s.toggleTutorial=s.toggleTutorial.bind(Object(u.a)(s)),s}return Object(d.a)(a,[{key:"toggleTutorial",value:function(){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{showTutorial:!this.state.showTutorial}))}},{key:"render",value:function(){var e=n.a.createElement("button",{id:"tutorial-btn",onClick:this.toggleTutorial},"?"),t=n.a.createElement("div",{className:"header-div"},n.a.createElement("div",{className:"title-div"},n.a.createElement("span",{className:"title"},n.a.createElement("a",{href:"#"},"Your Messages")),n.a.createElement("span",{className:"author"},n.a.createElement("a",{href:"https://cgao.info"},"\xa0 Chuntong Gao \xa0")),e));return n.a.createElement("div",{className:"app-container"},t,this.state.showTutorial&&n.a.createElement(_,null),n.a.createElement(K,null),n.a.createElement("div",{className:"spacer"}))}}]),a}(n.a.Component),B=a(8),H=a(21),I=a(15),J=a(16),P=new Date,W={messages:[{text:"This is a read message",read:!0,id:Object(m.a)(),createdOn:P,readOn:void 0,updatedOn:P},{text:"This is an unread message",read:!1,id:Object(m.a)(),createdOn:P,readOn:void 0,updatedOn:P}]},q=Object(B.combineReducers)({messageList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var a=t.payload,s=a.text,n=a.id,r=a.createdOn,i={text:s,read:!1,id:n,createdOn:r,readOn:void 0,updatedOn:r};return{messages:[].concat(Object(J.a)(e.messages),[i])};case b:var l=t.payload.id,o=e.messages.filter((function(e){return e.id!==l}));return{messages:o};case O:return{messages:[]};case y:var d=e.messages.map((function(e){var a=t.payload,s=a.id,n=a.readOn;return e.id===s?!0===e.read?Object(c.a)(Object(c.a)({},e),{},{read:!1,readOn:void 0}):Object(c.a)(Object(c.a)({},e),{},{read:!0,readOn:n}):e}));return{messages:d};case E:var u,p=e.messages.length,h=0,m=Object(I.a)(e.messages);try{for(m.s();!(u=m.n()).done;){var v=u.value;!0===v.read&&(h+=1)}}catch(T){m.e(T)}finally{m.f()}var j=e.messages.map((function(e){return h===p?Object(c.a)(Object(c.a)({},e),{},{read:!1}):Object(c.a)(Object(c.a)({},e),{},{read:!0})}));return{messages:j};case f:var k,x=Object(J.a)(e.messages),N=t.payload,S=N.id,M=N.text,D=N.updatedOn,w=Object(I.a)(x);try{for(w.s();!(k=w.n()).done;){var C=k.value;C.id===S&&(C.text=M,C.updatedOn=D)}}catch(T){w.e(T)}finally{w.f()}return{messages:x};default:return e}}}),z=function(){var e=B.applyMiddleware.apply(void 0,[]);return Object(B.createStore)(q,Object(H.composeWithDevTools)(e))}();i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,{store:z},n.a.createElement(Y,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.e1aab3f7.chunk.js.map