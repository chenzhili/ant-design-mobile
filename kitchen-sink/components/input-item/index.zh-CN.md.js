webpackJsonp([107],{376:function(t,e){t.exports={content:["section",["p","\u7528\u4e8e\u63a5\u53d7\u5355\u884c\u6587\u672c\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u652f\u6301\u901a\u8fc7\u952e\u76d8\u6216\u8005\u526a\u5207\u677f\u8f93\u5165\u6587\u672c\u3002"]],["li",["p","\u901a\u8fc7\u5149\u6807\u53ef\u4ee5\u5728\u6c34\u5e73\u65b9\u5411\u8fdb\u884c\u79fb\u52a8\u3002"]],["li",["p","\u5bf9\u7279\u5b9a\u683c\u5f0f\u7684\u6587\u672c\u8fdb\u884c\u5904\u7406\uff0ceg\uff1a\u9690\u85cf\u5bc6\u7801\u3002"]]]],meta:{category:"Components",type:"Data Entry",title:"InputItem",subtitle:"\u6587\u672c\u8f93\u5165",filename:"components/input-item/index.zh-CN.md"},api:["section",["h2","API"],["p",["strong",["code","InputItem"]," \u5fc5\u987b\u7528 ",["a",{title:null,href:"https://mobile.ant.design/components/list"},"List"]," \u7ec4\u4ef6\u5305\u88f9\u624d\u80fd\u6b63\u5e38\u4f7f\u7528"]],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","type"],["td","\u53ef\u4ee5\u662f\u94f6\u884c\u5361",["code","bankCard"],"; \u624b\u673a\u53f7",["code","phone"],"(\u6b64\u65f6\u6700\u5927\u957f\u5ea6\u56fa\u5b9a\u4e3a11,",["code","maxLength"],"\u8bbe\u7f6e\u65e0\u6548); \u5bc6\u7801",["code","password"],"; \u6570\u5b57",["code","number"],"(\u4e3a\u4e86\u5c3d\u91cf\u5524\u8d77",["code","\u5e26\u5c0f\u6570\u70b9"],"\u7684\u6570\u5b57\u952e\u76d8\uff0c\u6b64\u7c7b\u578b\u5e76\u4e0d\u662f\u539f\u751f number\uff0c\u800c\u662f",["code",'<input type="text" pattern="[0-9]*" />'],"); ",["code","digit"],"(\u8868\u793a\u539f\u751f\u7684 number \u7c7b\u578b); ",["code","money"],"(\u5e26\u5c0f\u6570\u70b9\u7684\u6a21\u62df\u7684\u6570\u5b57\u952e\u76d8) \u4ee5\u53ca\u5176\u4ed6\u6807\u51c6 html input type \u7c7b\u578b"],["td","String"],["td",["code","text"]]],["tr",["td","value"],["td","value \u503c(\u53d7\u63a7\u4e0e\u5426\u53c2\u8003",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html"},"https://facebook.github.io/react/docs/forms.html"],")"],["td","String"],["td","\u65e0"]],["tr",["td","defaultValue"],["td","\u8bbe\u7f6e\u521d\u59cb\u9ed8\u8ba4\u503c"],["td","String"],["td","-"]],["tr",["td","placeholder"],["td","placeholder"],["td","String"],["td","''"]],["tr",["td","editable"],["td","\u662f\u5426\u53ef\u7f16\u8f91"],["td","bool"],["td","true"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","bool"],["td","false"]],["tr",["td","clear"],["td","\u662f\u5426\u5e26\u6e05\u9664\u529f\u80fd(\u4ec5",["code","editable"],"\u4e3a",["code","true"],",",["code","disabled"],"\u4e3a",["code","false"],"\u624d\u751f\u6548)"],["td","bool"],["td","false"]],["tr",["td","maxLength"],["td","\u6700\u5927\u957f\u5ea6"],["td","number"],["td","\u65e0\u3002\u9664money\u7c7b\u578b\u5916\uff0c\u4ec5\u5f53text, email, search, password, tel, or url \u6709\u6548\u3002\u5177\u4f53\u53ef\u4ee5\u67e5\u770b\u6587\u6863 ",["a",{title:null,href:"https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/input\uff0c\u4ee5\u53ca\u76f8\u5173issue"},"https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/input\uff0c\u4ee5\u53ca\u76f8\u5173issue"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/2966"},"https://github.com/ant-design/ant-design-mobile/issues/2966"]]],["tr",["td","onChange"],["td","change \u4e8b\u4ef6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(val: string): void"],["td","-"]],["tr",["td","onBlur"],["td","blur \u4e8b\u4ef6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(val: string): void"],["td","-"]],["tr",["td","onFocus"],["td","focus \u4e8b\u4ef6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(val: string): void"],["td","-"]],["tr",["td","error"],["td","\u62a5\u9519\u6837\u5f0f"],["td","bool"],["td","false"]],["tr",["td","onErrorClick"],["td","\u70b9\u51fb\u62a5\u9519 icon \u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(e: Object): void"],["td","\u65e0"]],["tr",["td","extra"],["td","\u53f3\u8fb9\u6ce8\u91ca"],["td","string or node"],["td","''"]],["tr",["td","onExtraClick"],["td","extra \u70b9\u51fb\u4e8b\u4ef6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"],["td","(e: Object): void"],["td","\u65e0"]],["tr",["td","onVirtualKeyboardConfirm"],["td","\u865a\u62df\u952e\u76d8\u70b9\u51fb\u786e\u8ba4\u65f6\u7684\u56de\u8c03\u51fd\u6570"],["td","(val: string): void"],["td","\u65e0"]],["tr",["td","labelNumber"],["td","\u6807\u7b7e\u7684\u6587\u5b57\u4e2a\u6570\uff0c\u53ef\u7528",["code","2-7"],"\u4e4b\u95f4\u7684\u6570\u5b57"],["td","number"],["td",["code","5"]]],["tr",["td","updatePlaceholder"],["td","\u5f53\u6e05\u9664\u5185\u5bb9\u65f6\uff0c\u662f\u5426\u5c06\u6e05\u9664\u524d\u7684\u5185\u5bb9\u66ff\u6362\u5230 placeholder \u4e2d"],["td","bool"],["td","false"]],["tr",["td","prefixListCls"],["td","\u5217\u8868 className \u524d\u7f00"],["td","String"],["td",["code","am-list"]]],["tr",["td","name"],["td","input \u7684 name"],["td","String"],["td","\u65e0"]],["tr",["td","moneyKeyboardAlign"],["td","\u6587\u5b57\u6392\u7248\u8d77\u59cb\u65b9\u5411, \u53ea\u6709 ",["code","type='money'"]," \u652f\u6301\uff0c \u53ef\u9009\u4e3a ",["code","'left'"],", ",["code","'right'"]],["td","String"],["td","'right'"]],["tr",["td","moneyKeyboardWrapProps"],["td","\u81ea\u5b9a\u4e49\u91d1\u989d\u865a\u62df\u952e\u76d8\u5c5e\u6027"],["td","Object"],["td","{}"]],["tr",["td","moneyKeyboardHeader"],["td","\u81ea\u5b9a\u4e49\u91d1\u989d\u865a\u62df\u952e\u76d8\u5934\u90e8"],["td","ReactNode"],["td","null"]],["tr",["td","locale"],["td","\u56fd\u9645\u5316\uff0c\u53ef\u8986\u76d6\u5168\u5c40",["code","[LocaleProvider](https://mobile.ant.design/components/locale-provider)"],"\u7684\u914d\u7f6e, \u5f53",["code","type"],"\u4e3a",["code","money"],"\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u786e\u8ba4\u6309\u94ae\u7684\u6587\u6848\u3002"],["td","Object: { confirmLabel }"],["td","\u65e0"]],["tr",["td","autoAdjustHeight"],["td","\u9632\u6b62\u8f93\u5165\u6846\u88ab\u952e\u76d8\u906e\u6321\u3002(\u4ec5 ",["code","type=money"],"\u65f6\u6709\u6548)"],["td","bool"],["td","false"]],["tr",["td","disabledKeys"],["td","\u7981\u7528\u90e8\u5206\u6570\u5b57\u6309\u952e(\u4ec5 ",["code","type=money"],"\u65f6\u6709\u6548)"],["td","array"],["td","null"],["td","null"]]]],["blockquote",["p","\u6ce8\u610f: \u4e0d\u8981\u5728\u53d7\u63a7\u7ec4\u4ef6\u7684 ",["code","onChange"]," \u4e8b\u4ef6\u4e2d\u5f02\u6b65\u8bbe\u7f6e ",["code","value"],"\uff0c\u5426\u5219\u4e2d\u6587\u8f93\u5165\u53ef\u80fd\u5e26\u6765\u95ee\u9898\uff0c",["a",{title:null,href:"https://github.com/facebook/react/issues/3926"},"\u76f8\u5173\u95ee\u9898\u53c2\u8003"],"\u3002"],["p","\u6ce8\u610f: ",["code","InputItem"]," \u5f53 ",["code","type=number"]," \u65f6\u4e0d\u652f\u6301\u8f93\u5165\u8d1f\u53f7, \u4f60\u53ef\u4ee5\u5229\u7528 ",["code","type=text"]," \u6765\u81ea\u5df1\u5b9e\u73b0\u3002"],["p","\u6ce8\u610f: \u4f7f\u7528 ",["code","moneyKeyboardHeader"]," \u65f6\uff0c\u9875\u9762\u4e2d\u53ea\u80fd\u6709\u4e00\u4e2a ",["code","type=money"]," \u7684 ",["code","InputItem"],"\u3002"]],["h2","InputItem methods"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","focus"],["td","\u4f7f input \u805a\u7126"],["td","(): void"],["td","-"]]]]]}}});