window.__require=function t(e,o,i){function l(r,c){if(!o[r]){if(!e[r]){var s=r.split("/");if(s=s[s.length-1],!e[s]){var a="function"==typeof __require&&__require;if(!c&&a)return a(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+r+"'")}r=s}var u=o[r]={exports:{}};e[r][0].call(u.exports,function(t){return l(e[r][1][t]||t)},u,u.exports,t,e,o,i)}return o[r].exports}for(var n="function"==typeof __require&&__require,r=0;r<i.length;r++)l(i[r]);return l}({changeColor:[function(t,e){"use strict";cc._RF.push(e,"e0ae45F40hG+rJ2DWk5t2Ui","changeColor"),cc.Class({extends:cc.Component,properties:{longNote:{default:null,type:cc.Sprite},textLable:{default:null,type:cc.Node},longNote_white:{default:null,type:cc.SpriteFrame},longNote_pink:{default:null,type:cc.SpriteFrame},longNote_purple:{default:null,type:cc.SpriteFrame},longNote_gray:{default:null,type:cc.SpriteFrame},longNote_blue:{default:null,type:cc.SpriteFrame}},changeColor:function(t,e){switch(e){case"pink":this.longNote.spriteFrame=this.longNote_pink,console.log(e);break;case"purple":this.longNote.spriteFrame=this.longNote_purple,console.log(e);break;case"gray":this.longNote.spriteFrame=this.longNote_gray,console.log(e);break;case"blue":this.longNote.spriteFrame=this.longNote_blue,this.textLable.changeColor="#FFFFFF",console.log(e);break;case"white":this.longNote.spriteFrame=this.longNote_white,console.log(e)}}}),cc._RF.pop()},{}],link:[function(t,e){"use strict";cc._RF.push(e,"935fe3muadICICZ/fRQtjDg","link"),cc.Class({extends:cc.Component,properties:{},link:function(t,e){switch(e){case"QQ":window.open("https://jq.qq.com/?_wv=1027&k=9E0n4bUx")}},start:function(){}}),cc._RF.pop()},{}],saveText:[function(t,e){"use strict";cc._RF.push(e,"02fa2svKGxAg5tmTzDHCpT9","saveText"),cc.Class({extends:cc.Component,properties:{editBox:{default:null,type:cc.EditBox},editBox1:{default:null,type:cc.EditBox},editBox2:{default:null,type:cc.EditBox},editBox3:{default:null,type:cc.EditBox},editBox4:{default:null,type:cc.EditBox},editBox5:{default:null,type:cc.EditBox},editBox6:{default:null,type:cc.EditBox},textNum:{default:1,type:cc.Integer}},saveText:function(){for(var t=this.editBox.string;null!=localStorage.getItem(this.textNum)&&localStorage.getItem(this.textNum)!=t;)this.textNum+=1;""!=t&&localStorage.setItem(this.textNum,t),this.editBox.string=""},saveTextToWeb:function(){for(var t=["\u518d\u6f2b\u957f\u7684\u51ac\u5929\uff0c\u7b49\u4e00\u7b49\u82b1\u4e5f\u4f1a\u5f00\u7684\uff0c\u800c\u6211\u4eec\u9700\u8981\u7684\u53ea\u662f\u4ed8\u51fa\u4e00\u70b9\u8010\u5fc3\uff0c\u5b58\u7559\u4e00\u4e9b\u5e0c\u671b\u3002\u7b49\u82b1\u671f\u5982\u7ea6\uff0c\u53ef\u62b5\u5c81\u6708\u65e0\u5e38\u3002","\u4eba\u7684\u4e00\u751f\uff0c\u672a\u5fc5\u90fd\u6ce2\u6f9c\u58ee\u9614\u8361\u6c14\u56de\u80a0\uff0c\u5de6\u53f3\u6211\u4eec\u5982\u4f55\u6d3b\u7740\u7684\u5f80\u5f80\u662f\u90a3\u4e9b\u6bcf\u5929\u90fd\u5728\u4e0a\u6f14\uff0c\u90fd\u5728\u8c22\u5e55\u7684\u751f\u547d\u573a\u666f\u3002\u5728\u9633\u5149\u4e0b\u7ec6\u788e\u5982\u5fae\u5c18\u822c\u7ffb\u98de\u8df3\u8dc3\u7684\uff0c\u6070\u4f3c\u6211\u4eec\u7684\u4e00\u751f\uff0c\u53ea\u662f\uff0c\u6709\u7684\u4eba\u62fc\u5c3d\u5168\u8eab\u529b\u6c14\u628a\u5fae\u5c18\u821e\u51fa\u4e86\u5149\u8292\u3002","\u5fd9\u8d77\u6765\u771f\u597d\uff0c\u6240\u6709\u6742\u4e03\u6742\u516b\u7684\u5fc3\u601d\u90fd\u4e0d\u89c1\u4e86\uff0c \u7d2f\u4e86\u5012\u5934\u5c31\u7761\uff0c\u997f\u4e86\u5f20\u5634\u5c31\u5403\uff0c\u4e00\u5207\u6b23\u6b23\u7136\uff0c\u771f\u597d\uff0c\u8fd9\u5c31\u662f\u6625\u5929\uff0c\u4e07\u7269\u90fd\u6709\u590d\u82cf\u7684\u673a\u4f1a\uff0c\u4f60\u6211\u4e5f\u4e0d\u4f8b\u5916\u3002","\u5141\u8bb8\u4e00\u671d\u4e07\u5ff5\u4ff1\u7070\uff0c\u4e5f\u5141\u8bb8\u4e00\u671d\u8de8\u8e8d\u6ee1\u5fd7\uff0c\u4eba\u751f\u7684\u8fdb\u7a0b\u5c31\u662f\u5982\u6b64\uff0c\u6211\u4eec\u5bf9\u6b64\u53ea\u80fd\u8bf4\u597d\uff0c\u8fd9\u4e2a\u4e16\u754c\u6709\u65f6\u4e0d\u5927\u53cb\u597d\uff0c\u82e5\u662f\u53d1\u5149\u7684\u540c\u65f6\u8fd8\u80fd\u4e3a\u4ed6\u4eba\u7167\u4eae\u9053\u8def\uff0c\u4e5f\u4e0d\u5931\u4e3a\u6765\u5230\u4eba\u95f4\u7684\u6700\u597d\u5956\u8d4f\uff0c\u6211\u4eec\u90fd\u662f\u8ff7\u9014\u7684\u661f\u661f\uff0c\u5374\u4f9d\u7136\u8bd5\u7740\u628a\u9ed1\u6697\u70b9\u4eae\u3002","\u4f1a\u6709\u4eba\u5728\u98ce\u91cc\u96e8\u91cc\u7b49\u4f60\uff0c\u4ed6\u4f1a\u4e0d\u987e\u4e00\u5207\u6765\u62e5\u62b1\u4f60\uff0c\u4ed6\u4f1a\u5e26\u4f60\u53bb\u6652\u6652\u592a\u9633\uff0c\u628a\u5c81\u6708\u667e\u5e72\u3002\u800c\u5728\u90a3\u4e4b\u524d\uff0c\u8bf7\u4f60\u597d\u597d\u7167\u987e\u81ea\u5df1\u3002","\u80fd\u7ed9\u4f60\u7684\u5b9e\u5728\u4e0d\u591a\uff0c\u6240\u4ee5\u6211\u60f3\u628a\u8fd9\u8f88\u5b50\u6700\u5355\u7eaf\u7684\u559c\u6b22\u548c\u5b88\u62a4\uff0c\u8fd8\u6709\u6570\u4e0d\u5c3d\u7684\u6e29\u67d4\u5168\u90fd\u7ed9\u4f60\u3002"],e=0;e<6;e++){for(var o=t[e];null!=localStorage.getItem(this.textNum)&&localStorage.getItem(this.textNum)!=o;)this.textNum+=1;""!=o&&localStorage.setItem(this.textNum,o)}},setText:function(){for(var t=[this.editBox1,this.editBox2,this.editBox3,this.editBox4,this.editBox5,this.editBox6],e=[1,2,3,4,5,6],o=5;o>=0;o--){var i=Math.round(Math.random()*o);t[o].string=localStorage.getItem(e[i]),e.splice(i,1)}},start:function(){this.saveTextToWeb(),this.setText()}}),cc._RF.pop()},{}]},{},["changeColor","link","saveText"]);