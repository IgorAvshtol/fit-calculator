(this["webpackJsonpfit-calculator"]=this["webpackJsonpfit-calculator"]||[]).push([[0],{112:function(e,a,t){e.exports={main:"Main_main__1vgOn",mainDark:"Main_mainDark__3WhwH"}},113:function(e,a,t){e.exports={wrapper:"Container_wrapper__20JN9",container:"Container_container__3uBCG"}},15:function(e,a,t){e.exports={sidebar:"Sidebar_sidebar__3Bc21",time:"Sidebar_time__15WtB",clock:"Sidebar_clock__2gu2N",date:"Sidebar_date__2Ofc7",navigation:"Sidebar_navigation__2MHkv",purpose:"Sidebar_purpose__2jqKW",purposeDark:"Sidebar_purposeDark__2Rbzx",purposeScroll:"Sidebar_purposeScroll__3BCOQ",purposeScrollDark:"Sidebar_purposeScrollDark__vxC1X",purposeContent:"Sidebar_purposeContent__2XAW8",purposeContentScroll:"Sidebar_purposeContentScroll__2xY3-",purposeContentScrollDark:"Sidebar_purposeContentScrollDark__38-mG",circle:"Sidebar_circle__MkBMx",circleDark:"Sidebar_circleDark__3gw24",purposeText:"Sidebar_purposeText__1hnbx",calculation:"Sidebar_calculation__24RLx",calculationScroll:"Sidebar_calculationScroll__3J156",calculationContent:"Sidebar_calculationContent__1bdIa",calculationContentDark:"Sidebar_calculationContentDark__3l-RK",calculationText:"Sidebar_calculationText__12VR3"}},154:function(e,a,t){e.exports={preloader:"Preloader_preloader__1xPMS"}},168:function(e,a,t){},3:function(e,a,t){e.exports={calculatorBlock:"Calculator_calculatorBlock__27c7w",calculator:"Calculator_calculator__1N0FZ",leftBlock:"Calculator_leftBlock__11YK8",mainTitle:"Calculator_mainTitle__Tob9U",mainTitleDark:"Calculator_mainTitleDark__2vq7M",title:"Calculator_title__1HgLc",howToUse:"Calculator_howToUse__2xpNi",howToUseDark:"Calculator_howToUseDark__9XfjZ",howToUseCover:"Calculator_howToUseCover__18vp7",howToUseBlock:"Calculator_howToUseBlock__1rWgi",howToUseText:"Calculator_howToUseText__2Bw9X",rightBlock:"Calculator_rightBlock__N_qJl",mainCalcBlock:"Calculator_mainCalcBlock__2SI9A",mainCalcBlockDark:"Calculator_mainCalcBlockDark__3ixoP",calcBlock:"Calculator_calcBlock__3gwqg",growthAndWeight:"Calculator_growthAndWeight__3VyEn",growth:"Calculator_growth__1fwdc",growthInput:"Calculator_growthInput__z8Iwh",growthInputDark:"Calculator_growthInputDark__ABSaW",weight:"Calculator_weight__3KuQ1",weightInput:"Calculator_weightInput__3uBs5",weightInputDark:"Calculator_weightInputDark__1Bmwo",ageAndSex:"Calculator_ageAndSex__2G5GI",age:"Calculator_age__gXk_n",ageInput:"Calculator_ageInput__3jbLl",ageInputDark:"Calculator_ageInputDark__2sV7i",sex:"Calculator_sex__zFlIV",selectSex:"Calculator_selectSex__32PTL",selectSexDark:"Calculator_selectSexDark__2tlmo",yourPurpose:"Calculator_yourPurpose__J3YFo",purposeInput:"Calculator_purposeInput__2Xb5l",hrRight:"Calculator_hrRight__3LPQy",hrRightDark:"Calculator_hrRightDark__48-J_",topFood:"Calculator_topFood__2Way5",topFoodDark:"Calculator_topFoodDark__3G5uZ",topFoodHr:"Calculator_topFoodHr__3w6_Y",topFoodHrDark:"Calculator_topFoodHrDark__3fPiF",searchInput:"Calculator_searchInput__3ROrJ",searchInputDark:"Calculator_searchInputDark__1oxtZ",searchIcon:"Calculator_searchIcon__LkDt4",selectFood:"Calculator_selectFood__EzZFY",selectFoodDark:"Calculator_selectFoodDark__1l6KD",food:"Calculator_food__3TZ2I",foodConfirmed:"Calculator_foodConfirmed__2iLg9",foodConfirmedDark:"Calculator_foodConfirmedDark__3CSsR",foodConfirmedCover:"Calculator_foodConfirmedCover__2dclM",foodConfirmedBlock:"Calculator_foodConfirmedBlock__wblRE",errorMessage:"Calculator_errorMessage__1HnZr",errorSearch:"Calculator_errorSearch__1STGl",btnComplete:"Calculator_btnComplete__10bLd",imgBtnRight:"Calculator_imgBtnRight__34k8o",imgBtnLeft:"Calculator_imgBtnLeft__1z9or",btnCompleteDark:"Calculator_btnCompleteDark__1ulen",dietFinal:"Calculator_dietFinal__EIUW-",dietFinalDark:"Calculator_dietFinalDark__q_xfr",dietFinalCover:"Calculator_dietFinalCover__3Fntl",dietDataBlock:"Calculator_dietDataBlock__3_nYW",dietResult:"Calculator_dietResult__3FPDh",caloriesCompositions:"Calculator_caloriesCompositions__19dfR",caloriesFinal:"Calculator_caloriesFinal__1lY2S",caloriesFinalDark:"Calculator_caloriesFinalDark__2TAMm",finalChart:"Calculator_finalChart__11FXI",finalChartDark:"Calculator_finalChartDark__36GqF",chartBlock:"Calculator_chartBlock__3Mjj-",protein:"Calculator_protein__210O5",fat:"Calculator_fat__1Ex0_",carbonates:"Calculator_carbonates__2pQvW",finalBlock:"Calculator_finalBlock__3MQKz",dietFinalHr:"Calculator_dietFinalHr__1YzTW",dietFinalHrDark:"Calculator_dietFinalHrDark__3i0na",dietFinalDataBlock:"Calculator_dietFinalDataBlock__WEC3s",dietFinalData:"Calculator_dietFinalData__30bLu",dietFinalDataDark:"Calculator_dietFinalDataDark__1h9qB"}},305:function(e,a,t){"use strict";t.r(a);var c=t(1),r=t(45),l=t.n(r),o=(t(168),t(7)),i=t(107),n=t(15),s=t.n(n),d=t(327),j=t(2);function u(e){var a="en",t=Object(c.useState)(new Date),r=Object(o.a)(t,2),l=r[0],n=r[1];Object(c.useEffect)((function(){setInterval((function(){n(new Date)}),1e3)}),[]);var u=Object(c.useState)(!1),_=Object(o.a)(u,2),b=_[0],h=_[1],O=Object(c.useState)(!0),p=Object(o.a)(O,2),m=p[0],x=p[1],C=function(){window.scrollY<550?(h(!1),x(!0)):(x(!m),h(!b))};Object(c.useEffect)((function(){return window.addEventListener("scroll",C),function(){return window.removeEventListener("scroll",C)}}),[]);var k=l.toLocaleDateString(a,{weekday:"long"}),f=l.toLocaleTimeString(a,{hour:"numeric",hour12:!1,minute:"numeric"}),v="".concat(k,",  ").concat(l.toLocaleDateString(a,{month:"long"}),"\n\n ").concat(l.getDate());return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:s.a.sidebar,children:[Object(j.jsx)("div",{children:Object(j.jsx)(d.a,{onChange:function(){return e.setTheme(!e.theme)}})}),Object(j.jsxs)("div",{className:s.a.time,children:[Object(j.jsx)("div",{className:s.a.clock,children:f}),Object(j.jsx)("div",{className:s.a.date,children:v})]}),Object(j.jsxs)("div",{className:s.a.navigation,children:[Object(j.jsx)("div",{className:b?s.a.purposeScroll:s.a.purpose,children:Object(j.jsx)(i.Link,{to:"instruction",smooth:!0,children:Object(j.jsxs)("div",{className:b?s.a.purposeContentScroll&&e.theme?s.a.purposeContentScroll:s.a.purposeContentScrollDark:s.a.purposeContent,children:[Object(j.jsx)("div",{className:e.theme?s.a.circle:s.a.circleDark}),Object(j.jsxs)("div",{className:s.a.purposeText,children:["\u0421 \u0447\u0435\u0433\u043e \u043d\u0430\u0447\u0430\u0442\u044c",Object(j.jsx)("div",{children:"\u0426\u0435\u043b\u044c"})]})]})})}),Object(j.jsx)("div",{className:m?s.a.calculation:s.a.calculationScroll,children:Object(j.jsx)(i.Link,{to:"calculator",smooth:!0,children:Object(j.jsxs)("div",{className:e.theme?s.a.calculationContent:s.a.calculationContentDark,children:[Object(j.jsx)("div",{className:s.a.circle}),Object(j.jsxs)("div",{className:s.a.purposeText,children:["\u0420\u0430\u0446\u0438\u043e\u043d \u043f\u0438\u0442\u0430\u043d\u0438\u044f",Object(j.jsx)("div",{children:"\u0420\u0430\u0441\u0447\u0451\u0442"})]})]})})})]})]})})}var _=t(35),b=t.n(_);function h(e){return Object(j.jsx)("div",{className:e.theme?b.a.discriptionBlock:b.a.discriptionBlockBlack,id:"instruction",children:Object(j.jsxs)("div",{className:b.a.discription,children:[Object(j.jsx)("h1",{children:"\u0411\u0443\u0434\u044c \u0447\u0435\u0441\u0442\u0435\u043d \u0441\u0430\u043c \u0441 \u0441\u043e\u0431\u043e\u0439"}),Object(j.jsx)("h2",{children:"\u0428\u0430\u0433 1. \u0412\u044b\u0431\u0435\u0440\u0438 \u0446\u0435\u043b\u044c"}),Object(j.jsxs)("div",{className:b.a.text,children:[Object(j.jsx)("p",{children:"\u041d\u0430\u0447\u0430\u0442\u044c \u043d\u0443\u0436\u043d\u043e \u0441 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0446\u0435\u043b\u0438 \u0438 \u044d\u0442\u043e \u043f\u0440\u043e\u0449\u0435, \u0447\u0435\u043c \u043a\u0430\u0436\u0435\u0442\u0441\u044f. \u0412\u0441\u0435 \u201c\u0445\u043e\u0442\u0435\u043b\u043a\u0438\u201d \u043c\u043e\u0436\u043d\u043e \u0441\u0432\u0435\u0441\u0442\u0438 \u043a \u0434\u0432\u0443\u043c \u0436\u0435\u043b\u0430\u043d\u0438\u044f\u043c:"}),Object(j.jsx)("li",{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434 (\u0443\u0431\u0440\u0430\u0442\u044c \u0436\u0438\u0440, \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u044b\u0448\u0446, \u0441\u043d\u0438\u0437\u0438\u0442\u044c/\u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043c\u0430\u0441\u0441\u0443 \u0442\u0435\u043b\u0430)."}),Object(j.jsx)("li",{children:"\u0423\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438 (\u0441\u0442\u0430\u0442\u044c \u0441\u0438\u043b\u044c\u043d\u0435\u0435, \u0431\u0435\u0433\u0430\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u0435\u0435/\u0434\u043e\u043b\u044c\u0448\u0435, \u043f\u043e\u0432\u044b\u0441\u0438\u0442\u044c \u0432\u044b\u043d\u043e\u0441\u043b\u0438\u0432\u043e\u0441\u0442\u044c, \u043f\u0440\u044b\u0433\u0430\u0442\u044c \u0432\u044b\u0448\u0435 \u0438 \u0442.\u043f.)."}),Object(j.jsx)("p",{children:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043b\u044e\u0434\u0438 \u0445\u043e\u0442\u044f\u0442 \u0434\u043e\u0441\u0442\u0438\u0447\u044c \u043e\u0431\u0430 \u043f\u0443\u043d\u043a\u0442\u0430 \u0441\u0440\u0430\u0437\u0443 \u0432 \u0442\u043e\u0439 \u0438\u043b\u0438 \u0438\u043d\u043e\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438. \u041d\u0430\u0434\u043e \u043f\u043e\u043d\u044f\u0442\u044c, \u0447\u0442\u043e \u043f\u0440\u0435\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u0443 \u0446\u0435\u043b\u044c \u043b\u0435\u0433\u0447\u0435, \u0442\u043e\u0433\u0434\u0430 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0435\u0451 \u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u2013 \u0432\u044b\u0448\u0435. \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0440\u0430\u0441\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u044b \u2013 \u0437\u0430\u043b\u043e\u0433 \u0443\u0441\u043f\u0435\u0445\u0430. \u0412\u044b\u0431\u0435\u0440\u0438 \u0447\u0442\u043e-\u0442\u043e \u043e\u0434\u043d\u043e, \u043d\u0435 \u0443\u0441\u043b\u043e\u0436\u043d\u044f\u0439."})]}),Object(j.jsx)("h2",{children:"\u0428\u0430\u0433 2. \u0421\u0434\u0435\u043b\u0430\u0439 \u0446\u0435\u043b\u044c \u044f\u0441\u043d\u043e\u0439"}),Object(j.jsxs)("div",{className:b.a.text,children:[Object(j.jsx)("p",{children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434"}),Object(j.jsx)("p",{children:"\u0422\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u0441\u0442\u0440\u0430\u0434\u0430\u0442\u044c \u043e\u0442 \u043e\u0436\u0438\u0440\u0435\u043d\u0438\u044f, \u0438\u043b\u0438 \u0431\u044b\u0442\u044c \u0436\u0443\u0442\u043a\u0438\u043c \u0434\u0440\u0438\u0449\u0435\u043c, \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c, \u043a\u0430\u043a \u043c\u0435\u0448\u043e\u043a \u0441 \u043a\u0430\u0440\u0442\u043e\u0448\u043a\u043e\u0439, \u043d\u043e \u0435\u0441\u043b\u0438 \u0442\u044b \u0432\u044b\u0431\u0440\u0430\u043b \u044d\u0442\u0443 \u0446\u0435\u043b\u044c, \u0442\u043e \u0435\u0451 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043b\u044e\u0434\u0435\u0439 \u043c\u043e\u0436\u043d\u043e \u0441\u0432\u0435\u0441\u0442\u0438 \u043a \u0434\u0432\u0443\u043c \u0432\u0438\u0434\u0430\u043c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439:"}),Object(j.jsx)("li",{children:"\u0423\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0436\u0438\u0440\u0430."}),Object(j.jsx)("li",{children:"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u044b\u0448\u0446."}),Object(j.jsx)("p",{children:"\u041d\u0435 \u0432\u0430\u0436\u043d\u043e, \u043a\u0430\u043a \u0442\u044b \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0448\u044c \u0441\u0435\u0439\u0447\u0430\u0441, \u0438 \u043a\u0430\u043a \u0445\u043e\u0442\u0435\u043b \u0431\u044b \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043c. \u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435 \u0436\u0435\u043b\u0430\u0435\u043c\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u044d\u0442\u043e \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e\u0442\u0435\u0440\u044f \u0436\u0438\u0440\u0430 \u0438 \u043d\u0430\u0431\u043e\u0440 \u043c\u044b\u0448\u0446 \u0432 \u0442\u043e\u043c \u0438\u043b\u0438 \u0438\u043d\u043e\u043c \u0441\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438."})]}),Object(j.jsx)("h2",{children:"\u0428\u0430\u0433 3. \u0421\u043e\u0441\u0442\u0430\u0432\u044c \u043f\u043b\u0430\u043d \u043f\u0438\u0442\u0430\u043d\u0438\u044f"}),Object(j.jsxs)("div",{className:b.a.text,children:["\u041a\u0430\u043a\u043e\u0439 \u0431\u044b \u043d\u0438 \u0431\u044b\u043b\u0430 \u0442\u0432\u043e\u044f \u0446\u0435\u043b\u044c, \u0442\u044b \u043d\u0435 \u0434\u043e\u0441\u0442\u0438\u0433\u043d\u0435\u0448\u044c \u0435\u0435 \u0431\u0435\u0437 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0438\u0442\u0430\u043d\u0438\u044f. \u0412\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432\u0435\u0441\u0430 \u0442\u0435\u043b\u0430 \u0432 \u043b\u044e\u0431\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443, \u0441\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u043a \u0434\u0432\u0443\u043c \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c:",Object(j.jsx)("li",{children:"\u0427\u0442\u043e\u0431\u044b \u0442\u0435\u0440\u044f\u0442\u044c \u0432\u0435\u0441, \u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u043a\u0430\u043b\u043e\u0440\u0438\u0439, \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0434\u0435\u0444\u0438\u0446\u0438\u0442\u0435 \u043a\u0430\u043b\u043e\u0440\u0438\u0439."}),Object(j.jsx)("li",{children:"\u0427\u0442\u043e\u0431\u044b \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0442\u044c \u0432\u0435\u0441, \u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043a\u0430\u043b\u043e\u0440\u0438\u0439, \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0438\u0437\u0431\u044b\u0442\u043a\u0435 \u043a\u0430\u043b\u043e\u0440\u0438\u0439."}),"\u0412\u0441\u0451, \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0443\u043a\u0435 \u043d\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e. \u0422\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u0438 \u0434\u0432\u0430."]}),Object(j.jsx)("hr",{className:e.theme?b.a.discriptionHr:b.a.discriptionHrDark})]})})}var O=t(12),p=t(41),m=t.n(p);function x(e){var a=e.content,t=e.theme,r=e.setValue,l=Object(c.useState)(0),i=Object(o.a)(l,2),n=i[0],s=i[1],d=a.length;Object(c.useEffect)((function(){r(a[0])}),[]);return!Array.isArray(a)||a.length<=0?null:Object(j.jsxs)("div",{children:[a.map((function(e,a){return Object(j.jsx)("div",{children:a===n&&Object(j.jsx)("input",{disabled:!0,className:t?m.a.input:m.a.inputDark,value:e})},a)})),Object(j.jsx)("label",{onClick:function(){s((function(e){return e===d-1?(r(a[0]),0):(r(a[e+1]),e+1)}))},className:t?m.a.labelNext:m.a.labelNextDark}),Object(j.jsx)("label",{onClick:function(){s((function(e){return 0===e?(r(a[e]),d-1):(r(a[d-1]),e-1)}))},className:t?m.a.labelPrev:m.a.labelPrevDark})]})}var C=t(109),k=t.n(C),f=t(147),v=t(17),g=t(148),D=t.n(g).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"38c3a417-44c2-476d-ad1b-ea982c1c54f6"}}),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return D.get("users?page=".concat(e,"&count=").concat(a)).then((function(e){return e.data}))},F={outputFoodList:[],inputFoodList:[],outputData:[],foodCalories:[{product:"",calories:""}],isFatching:!1},S=t(28),B=t(80),w=t.n(B);function T(e){var a=e.theme,t=e.productName,c=e.setErrorSearch,r=e.errorSearch,l=Object(S.b)(),o=Object(S.c)((function(e){return e.foods.inputFoodList})).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return 0===o.length&&"initial"!==r&&c("\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),Object(j.jsx)("div",{className:w.a.scrollBlock,children:o.map((function(e){return Object(j.jsx)("div",{onClick:function(){return l((a=e.name,t=e.id,{type:"REPLACE_FOOD",foodTitle:a,id:t}));var a,t},className:a?w.a.foodTitle:w.a.foodTitleDark,children:e.name},e.id)}))})}var I=t(49),L=t.n(I),E=t(150),R=t.n(E),H=t(151),y=t.n(H),P=t(328),U=t(329);function A(e){var a=e.theme,t=e.moveCard,r=e.index,l=e.item,i=e.id,n=e.dragMode,s=e.setDragMode,d=Object(S.b)(),u=Object(c.useRef)(null),_=Object(P.a)({accept:n?"remove":"no draggable",collect:function(e){return{handlerId:e.getHandlerId()}},hover:function(e,a){var c;if(u.current){var l=e.index,o=r;if(l!==o){var i=null===(c=u.current)||void 0===c?void 0:c.getBoundingClientRect(),n=(i.bottom-i.top)/2,s=a.getClientOffset().y-i.top;l<o&&s<n||l>o&&s>n||(t(l,o),e.index=o)}}}}),b=Object(o.a)(_,2),h=b[0].handlerId,O=b[1];console.log(h);var p=Object(U.a)({type:"remove",item:function(){return{id:i,index:r}},collect:function(e){return{isDragging:e.isDragging()}}});return(0,Object(o.a)(p,2)[1])(O(u)),Object(j.jsxs)("div",{ref:u,className:a?L.a.title:L.a.titleDark,"data-handler-id":h,children:[Object(j.jsx)(R.a,{className:a?L.a.dehazeIcon:L.a.dehazeIconDark,style:n?{opacity:.6}:{opacity:.2},onClick:function(){return s(!n)}}),l,n?Object(j.jsx)(y.a,{className:L.a.removeIcon,style:{opacity:.6},onClick:function(){return d({type:"DELETE_FOOD",foodId:i})}}):null]})}t(307);var M=t(158),W={options:{plugins:{datalabels:{color:"white",textAlign:"center",font:{weight:"bold",size:30}}}},datasets:[{label:"# of Votes",data:[131.3,67.5,178.9],backgroundColor:["#62BF9A","#81D5A4","#56B1A2"],borderColor:["#62BF9A"],borderWidth:1}]},z=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(M.a,{data:W})})},G=t(42),q=t.n(G),V=t.p+"static/media/loader.e61adeab.png",X=t(154),Y=t.n(X);function J(){return Object(j.jsx)("div",{className:Y.a.preloader,children:Object(j.jsx)("img",{src:V})})}function K(e){var a=e.theme,t=e.fetch,c=Object(S.c)((function(e){return e.foods.foodCalories}));return Object(j.jsx)("div",{className:a?q.a.scrollBlock:q.a.scrollBlockDark,children:t?Object(j.jsx)(J,{}):c.map((function(e,t){if(""!==e.product)return Object(j.jsx)("div",{className:a?q.a.title:q.a.titleDark,children:Object(j.jsxs)("div",{className:q.a.spanBlock,children:[Object(j.jsx)("span",{children:e.product}),Object(j.jsx)("div",{className:q.a.caloriesCalumn,children:Object(j.jsx)("span",{children:e.calories})})]})},t)}))})}var Q=t(3),Z=t.n(Q),$=t(155),ee=t.n($),ae=t.p+"static/media/btnCoverUp.cc4eb8c8.png",te=t.p+"static/media/btnCoverDarkUp.ea02d5a1.png",ce=t.p+"static/media/btnCoverDown.e21e7dc4.png",re=t.p+"static/media/btnCoverDarkDown.b6780fef.png",le=t.p+"static/media/howUseCover.0a16a3a9.png",oe=t.p+"static/media/howUseCoverDark.1c2b3c25.png",ie=t.p+"static/media/foodCover.c2c3e7e7.png",ne=t.p+"static/media/foodCoverDark.f177e64d.png",se=t(157),de=t(326);function je(e){var a=Object(S.b)(),t=Object(S.c)((function(e){return e.foods.outputFoodList})),r=Object(c.useState)(t),l=Object(o.a)(r,2),i=l[0],n=l[1];Object(c.useEffect)((function(){n(t)}),[t]),Object(c.useEffect)((function(){var e,t;a((e=1,t=10,function(){var a=Object(f.a)(k.a.mark((function a(c){var r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,N(e,t);case 2:r=a.sent,c({type:"GET_FOODS_LIST",foodList:r.items});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()))}),[]);var s=Object(c.useState)("176"),d=Object(o.a)(s,2),u=d[0],_=d[1],b=Object(c.useState)(""),h=Object(o.a)(b,2),p=h[0],m=h[1],C=Object(c.useState)("73"),v=Object(o.a)(C,2),g=v[0],D=v[1],F=Object(c.useState)(""),B=Object(o.a)(F,2),w=B[0],I=B[1],L=Object(c.useState)("26"),E=Object(o.a)(L,2),R=E[0],H=E[1],y=Object(c.useState)(""),P=Object(o.a)(y,2),U=P[0],M=P[1],W=Object(c.useState)(""),G=Object(o.a)(W,2),q=G[0],V=G[1],X=Object(c.useState)(""),Y=Object(o.a)(X,2),J=Y[0],Q=Y[1],$=Object(c.useState)("initial"),je=Object(o.a)($,2),ue=je[0],_e=je[1],be=Object(c.useState)(""),he=Object(o.a)(be,2),Oe=he[0],pe=he[1],me=Object(c.useState)(""),xe=Object(o.a)(me,2),Ce=xe[0],ke=xe[1],fe=Object(c.useState)(""),ve=Object(o.a)(fe,2),ge=ve[0],De=ve[1],Ne=Object(c.useState)(!1),Fe=Object(o.a)(Ne,2),Se=Fe[0],Be=Fe[1],we=Object(c.useState)(!1),Te=Object(o.a)(we,2),Ie=Te[0],Le=Te[1],Ee=e.theme;Object(c.useEffect)((function(){V("men")}),[]);var Re=function(e,a){var t=i[e];t&&n((function(c){var r=Object(O.a)(c),l=r.splice(a,1,t);return r.splice(e,1,l[0]),r}))};return Object(j.jsx)("div",{className:Z.a.calculatorBlock,id:"calculator",children:Object(j.jsx)(de.a,{backend:se.a,children:Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),alert(["growth:"+u,"weight:"+g,"age:"+R,"sex:"+q,"purpose:"+Oe,"type:"+Ce,"active:"+ge,"selectProducts:"+t.map((function(e){return e.name}))]),Le(!0),i.map((function(e){return setTimeout((function(){a(function(e){return{type:"FOOD_CALORIES",productName:e}}(e.name)),Le(!1)}),4e3)}))},children:[Object(j.jsxs)("div",{className:Z.a.calculator,children:[Object(j.jsxs)("div",{className:Z.a.leftBlock,children:[Object(j.jsx)("div",{className:Ee?Z.a.mainTitle:Z.a.mainTitleDark,children:Object(j.jsx)("h1",{className:Z.a.title,children:"\u0420\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0446\u0438\u043e\u043d\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f"})}),Object(j.jsxs)("div",{className:Ee?Z.a.howToUse:Z.a.howToUseDark,children:[Object(j.jsx)("img",{src:Ee?le:oe,className:Z.a.howToUseCover,alt:"block-cover"}),Object(j.jsxs)("div",{className:Z.a.howToUseBlock,children:[Object(j.jsx)("h1",{children:"\u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsxs)("div",{className:Z.a.howToUseText,children:[Object(j.jsx)("p",{children:"\u0421\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043b\u0430\u043d\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f."}),"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0438 \u043f\u0440\u043e\u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0448 \u0440\u0430\u0446\u0438\u043e\u043d \u043f\u0438\u0442\u0430\u043d\u0438\u044f. \u041a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440\u043e\u043c:",Object(j.jsx)("li",{children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0441\u0435\u0431\u0435."}),Object(j.jsx)("li",{children:"\u0421\u043e\u0441\u0442\u0430\u0432\u0442\u0435 \u0442\u043e\u043f \u0432\u0430\u0448\u0438\u0445 \u043b\u044e\u0431\u0438\u043c\u044b\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432."}),Object(j.jsx)("li",{children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0440\u0430\u0441\u0447\u0435\u0442 \u0440\u0430\u0446\u0438\u043e\u043d\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u044f."})]})]})]}),Object(j.jsxs)("div",{className:Ee?Z.a.topFood:Z.a.topFoodDark,children:[Object(j.jsx)("hr",{className:Ee?Z.a.topFoodHr:Z.a.topFoodHrDark}),Object(j.jsxs)("div",{className:Z.a.howToUseBlock,children:[Object(j.jsx)("h1",{children:"\u0422\u043e\u043f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"}),Object(j.jsx)("div",{className:Z.a.howToUseText,children:Object(j.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u043b\u044e\u0431\u0438\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b \u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0435 \u0438\u0445 \u043e\u0442 1 \u0434\u043e 10"})}),Object(j.jsx)("input",{value:J,onChange:function(e){Q(e.currentTarget.value),_e("")},placeholder:"\u041f\u043e\u0438\u0441\u043a",className:Ee?Z.a.searchInput:Z.a.searchInputDark}),Object(j.jsx)(ee.a,{className:Z.a.searchIcon}),ue&&"initial"!==ue?Object(j.jsx)("div",{className:Z.a.errorSearch,children:ue}):null]})]}),Object(j.jsx)("div",{className:Ee?Z.a.selectFood:Z.a.selectFoodDark,children:Object(j.jsx)("div",{className:Z.a.howToUseBlock,children:Object(j.jsx)("div",{className:Z.a.scrollBlock,children:Object(j.jsx)(T,{theme:Ee,productName:J,setErrorSearch:_e,errorSearch:ue})})})})]}),Object(j.jsxs)("div",{className:Z.a.rightBlock,children:[Object(j.jsx)("div",{className:Ee?Z.a.mainCalcBlock:Z.a.mainCalcBlockDark,children:Object(j.jsxs)("div",{className:Z.a.calcBlock,children:[Object(j.jsxs)("div",{className:Z.a.growthAndWeight,children:[Object(j.jsxs)("div",{className:Z.a.growth,children:[Object(j.jsx)("span",{children:"\u0420\u043e\u0441\u0442"}),Object(j.jsx)("label",{htmlFor:"growth"}),Object(j.jsx)("input",{id:"growth",className:Ee?Z.a.growthInput:Z.a.growthInputDark,value:u,onChange:function(e){m(""),_(e.currentTarget.value)},onBlur:function(){""===u&&m("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0440\u043e\u0441\u0442")}}),p?Object(j.jsx)("div",{className:Z.a.errorMessage,children:p}):null]}),Object(j.jsxs)("div",{className:Z.a.weight,children:[Object(j.jsx)("span",{children:"\u0412\u0435\u0441"}),Object(j.jsx)("label",{htmlFor:"weight"}),Object(j.jsx)("input",{id:"weight",className:Ee?Z.a.weightInput:Z.a.weightInputDark,value:g,onChange:function(e){I(""),D(e.currentTarget.value)},onBlur:function(){""===g&&I("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0435\u0441")}}),w?Object(j.jsx)("div",{className:Z.a.errorMessage,children:w}):null]})]}),Object(j.jsxs)("div",{className:Z.a.ageAndSex,children:[Object(j.jsxs)("div",{className:Z.a.age,children:[Object(j.jsx)("span",{children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(j.jsx)("label",{htmlFor:"age"}),Object(j.jsx)("input",{id:"age",className:Ee?Z.a.ageInput:Z.a.ageInputDark,value:R,onChange:function(e){M(""),H(e.currentTarget.value)},onBlur:function(){""===R&&M("\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u043e\u0437\u0440\u0430\u0441\u0442")}}),U?Object(j.jsx)("div",{className:Z.a.errorMessage,children:U}):null]}),Object(j.jsxs)("div",{className:Z.a.weight,children:[Object(j.jsx)("span",{children:"\u041f\u043e\u043b"}),Object(j.jsx)("label",{htmlFor:"sex"}),Object(j.jsxs)("select",{className:Ee?Z.a.selectSex:Z.a.selectSexDark,onChange:function(e){V(e.currentTarget.value)},children:[Object(j.jsx)("option",{id:"men",value:"men",children:"\u041c\u0443\u0436\u0441\u043a\u043e\u0439"}),Object(j.jsx)("option",{id:"women",value:"women",children:"\u0416\u0435\u043d\u0441\u043a\u0438\u0439"})]})]})]}),Object(j.jsxs)("div",{className:Z.a.yourPurpose,children:[Object(j.jsx)("span",{children:"\u0412\u0430\u0448\u0430 \u0446\u0435\u043b\u044c"}),Object(j.jsx)(x,{content:["\u0421\u043d\u0438\u0437\u0438\u0442\u044c \u0432\u0435\u0441","\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0444\u043e\u0440\u043c\u0443"],setValue:pe,theme:Ee})]}),Object(j.jsxs)("div",{className:Z.a.yourPurpose,children:[Object(j.jsx)("span",{children:"\u0422\u0438\u043f \u043f\u0438\u0442\u0430\u043d\u0438\u044f"}),Object(j.jsx)(x,{content:["\u041a\u0435\u0442\u043e","\u0421\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439"],setValue:ke,theme:Ee})]}),Object(j.jsxs)("div",{className:Z.a.yourPurpose,children:[Object(j.jsx)("span",{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438"}),Object(j.jsx)(x,{content:["\u041b\u0451\u0433\u043a\u0430\u044f","\u0421\u0440\u0435\u0434\u043d\u044f\u044f","\u0422\u044f\u0436\u0451\u043b\u0430\u044f"],setValue:De,theme:Ee})]}),Object(j.jsx)("hr",{className:Ee?Z.a.hrRight:Z.a.hrRightDark})]})}),Object(j.jsxs)("div",{className:Ee?Z.a.foodConfirmed:Z.a.foodConfirmedDark,children:[Object(j.jsx)("img",{src:Ee?ie:ne,className:Z.a.foodConfirmedCover,alt:"block-cover"}),Object(j.jsx)("div",{className:Z.a.foodConfirmedBlock,children:i.map((function(e,a){return Object(j.jsx)(A,{item:e.name,index:a,id:e.id,theme:Ee,dragMode:Se,setDragMode:Be,moveCard:Re},e.id)}))})]})]})]}),Object(j.jsx)("img",{src:Ee?ae:te,className:Z.a.imgBtnRight,alt:"btn-cover"}),Object(j.jsx)("img",{src:Ee?ce:re,className:Z.a.imgBtnLeft,alt:"btn-cover"}),Object(j.jsx)("button",{type:"submit",className:Ee?Z.a.btnComplete:Z.a.btnCompleteDark,children:"\u0420\u0410\u0421\u0421\u0427\u0418\u0422\u0410\u0422\u042c"}),Object(j.jsxs)("div",{className:Z.a.finalBlock,children:[Object(j.jsxs)("div",{className:Z.a.leftBlock,children:[Object(j.jsxs)("div",{className:Ee?Z.a.dietFinal:Z.a.dietFinalDark,children:[Object(j.jsx)("img",{src:Ee?le:oe,className:Z.a.dietFinalCover,alt:"block-cover"}),Object(j.jsx)("hr",{className:Ee?Z.a.dietFinalHr:Z.a.dietFinalHrDark}),Object(j.jsxs)("div",{className:Z.a.dietFinalDataBlock,children:[Object(j.jsx)("h1",{children:"\u0412\u0430\u0448 \u0440\u0430\u0446\u0438\u043e\u043d"}),Object(j.jsxs)("div",{className:Z.a.dietResult,children:[Object(j.jsxs)("div",{className:Z.a.caloriesCompositions,children:[Object(j.jsxs)("div",{className:Ee?Z.a.caloriesFinal:Z.a.caloriesFinalDark,children:[Object(j.jsx)("h1",{children:"\u041a\u0430\u043b\u043e\u0440\u0438\u0438"}),Object(j.jsx)("p",{children:"1852"})]}),Object(j.jsxs)("div",{className:Ee?Z.a.caloriesFinal:Z.a.caloriesFinalDark,children:[Object(j.jsx)("h1",{children:"\u0411\u0435\u043b\u043a\u0438"}),Object(j.jsx)("p",{children:"131.3"})]})]}),Object(j.jsxs)("div",{className:Z.a.caloriesCompositions,children:[Object(j.jsxs)("div",{className:Ee?Z.a.caloriesFinal:Z.a.caloriesFinalDark,children:[Object(j.jsx)("h1",{children:"\u0416\u0438\u0440\u044b"}),Object(j.jsx)("p",{children:"65.1"})]}),Object(j.jsxs)("div",{className:Ee?Z.a.caloriesFinal:Z.a.caloriesFinalDark,children:[Object(j.jsx)("h1",{children:"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b"}),Object(j.jsx)("p",{children:"179.8"})]})]})]})]})]}),Object(j.jsx)("div",{className:Ee?Z.a.finalChart:Z.a.finalChartDark,children:Object(j.jsxs)("div",{className:Z.a.chartBlock,children:[Object(j.jsx)(z,{}),Object(j.jsx)("span",{className:Z.a.protein,children:"\u0411\u0435\u043b\u043a\u0438"}),Object(j.jsx)("span",{className:Z.a.fat,children:"\u0416\u0438\u0440\u044b"}),Object(j.jsx)("span",{className:Z.a.carbonates,children:"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b"})]})})]}),Object(j.jsx)("div",{className:Z.a.rightBlock,children:Object(j.jsxs)("div",{className:Ee?Z.a.dietFinalData:Z.a.dietFinalDataDark,children:[Object(j.jsx)("hr",{className:Ee?Z.a.dietFinalHr:Z.a.dietFinalHrDark}),Object(j.jsxs)("div",{className:Z.a.dietFinalDataBlock,children:[Object(j.jsx)("h1",{children:"\u041a\u0430\u043b\u043e\u0440\u0438\u0439\u043d\u043e\u0441\u0442\u044c"}),Object(j.jsx)("div",{className:Z.a.dietResult,children:Object(j.jsx)(K,{theme:Ee,fetch:Ie})})]})]})})]})]})})})})}var ue=t(112),_e=t.n(ue),be=t(113),he=t.n(be);function Oe(){var e=Object(c.useState)(!0),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(j.jsx)("div",{className:t?_e.a.main:_e.a.mainDark,children:Object(j.jsx)("div",{className:he.a.wrapper,children:Object(j.jsxs)("div",{className:he.a.container,children:[Object(j.jsx)(u,{theme:t,setTheme:r}),Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{theme:t}),Object(j.jsx)(je,{theme:t})]})]})})})}var pe=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(Oe,{})})},me=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,331)).then((function(a){var t=a.getCLS,c=a.getFID,r=a.getFCP,l=a.getLCP,o=a.getTTFB;t(e),c(e),r(e),l(e),o(e)}))},xe=t(48),Ce=t(156),ke=Object(xe.b)({foods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_FOODS_LIST":return Object(v.a)(Object(v.a)({},e),{},{inputFoodList:a.foodList});case"SEARCH_PRODUCT":return Object(v.a)(Object(v.a)({},e),{},{inputFoodList:Object(O.a)(e.inputFoodList.filter((function(e){return e.name.toLowerCase().includes(a.productName.toLowerCase())})))});case"REPLACE_FOOD":return Object(v.a)(Object(v.a)({},e),{},{outputFoodList:[].concat(Object(O.a)(e.outputFoodList),[{id:a.id,name:a.foodTitle}])});case"DELETE_FOOD":return Object(v.a)(Object(v.a)({},e),{},{outputFoodList:Object(O.a)(e.outputFoodList.filter((function(e){return e.id!==a.foodId})))});case"FOOD_CALORIES":return Object(v.a)(Object(v.a)({},e),{},{foodCalories:[].concat(Object(O.a)(e.foodCalories),[{product:a.productName,calories:"223\u043a\u041a\u0430\u043b"}])});case"IS_FETCHING":return Object(v.a)(Object(v.a)({},e),{},{isFetching:a.isFetching});default:return e}}}),fe=Object(xe.c)(ke,Object(xe.a)(Ce.a));l.a.render(Object(j.jsx)(S.a,{store:fe,children:Object(j.jsx)(pe,{})}),document.getElementById("root")),me()},35:function(e,a,t){e.exports={discriptionBlock:"Instruction_discriptionBlock__10aQ3",discriptionBlockBlack:"Instruction_discriptionBlockBlack__1qC3c",discription:"Instruction_discription__21GlA",text:"Instruction_text__q2ntz",discriptionHr:"Instruction_discriptionHr__GuP3Q",discriptionHrDark:"Instruction_discriptionHrDark__l1Kyw"}},41:function(e,a,t){e.exports={input:"Slider_input__8TVgg",inputDark:"Slider_inputDark__2Eq7Z",labelNext:"Slider_labelNext__3vkx-",labelNextDark:"Slider_labelNextDark__ndjxY",labelPrev:"Slider_labelPrev__fv8WN",labelPrevDark:"Slider_labelPrevDark__H9u67"}},42:function(e,a,t){e.exports={scrollBlock:"FoodCalories_scrollBlock__1vDMv",scrollBlockDark:"FoodCalories_scrollBlockDark__28upE",title:"FoodCalories_title__146iF",titleDark:"FoodCalories_titleDark__1yGH6",spanBlock:"FoodCalories_spanBlock__3jV_F",caloriesCalumn:"FoodCalories_caloriesCalumn__1Cxs6"}},49:function(e,a,t){e.exports={scrollBlock:"FoodConfirmedList_scrollBlock__28JTL",title:"FoodConfirmedList_title__2RaQd",titleDark:"FoodConfirmedList_titleDark__1fx2K",dehazeIcon:"FoodConfirmedList_dehazeIcon__3p_Uq",dehazeIconDark:"FoodConfirmedList_dehazeIconDark__3FXLn",removeIcon:"FoodConfirmedList_removeIcon__1FJKX"}},80:function(e,a,t){e.exports={scrollBlock:"FoodList_scrollBlock__2XzOC",foodTitle:"FoodList_foodTitle__2PL4M",foodTitleDark:"FoodList_foodTitleDark__lXHMc"}}},[[305,1,2]]]);
//# sourceMappingURL=main.241a204b.chunk.js.map