(function(e){function i(i){for(var o,a,s=i[0],g=i[1],A=i[2],c=0,l=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&l.push(n[a][0]),n[a]=0;for(o in g)Object.prototype.hasOwnProperty.call(g,o)&&(e[o]=g[o]);u&&u(i);while(l.length)l.shift()();return r.push.apply(r,A||[]),t()}function t(){for(var e,i=0;i<r.length;i++){for(var t=r[i],o=!0,a=1;a<t.length;a++){var g=t[a];0!==n[g]&&(o=!1)}o&&(r.splice(i--,1),e=s(s.s=t[0]))}return e}var o={},n={app:0},r=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1335a3e6":"ab74487f"}[e]+".js"}function s(i){if(o[i])return o[i].exports;var t=o[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var i=[],t=n[e];if(0!==t)if(t)i.push(t[2]);else{var o=new Promise((function(i,o){t=n[e]=[i,o]}));i.push(t[2]=o);var r,g=document.createElement("script");g.charset="utf-8",g.timeout=120,s.nc&&g.setAttribute("nonce",s.nc),g.src=a(e);var A=new Error;r=function(i){g.onerror=g.onload=null,clearTimeout(c);var t=n[e];if(0!==t){if(t){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;A.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",A.name="ChunkLoadError",A.type=o,A.request=r,t[1](A)}n[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:g})}),12e4);g.onerror=g.onload=r,document.head.appendChild(g)}return Promise.all(i)},s.m=e,s.c=o,s.d=function(e,i,t){s.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,i){if(1&i&&(e=s(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var o in e)s.d(t,o,function(i){return e[i]}.bind(null,o));return t},s.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(i,"a",i),i},s.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},s.p="/ma-thesis-experiment/",s.oe=function(e){throw console.error(e),e};var g=window["webpackJsonp"]=window["webpackJsonp"]||[],A=g.push.bind(g);g.push=i,g=g.slice();for(var c=0;c<g.length;c++)i(g[c]);var u=A;r.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"034f":function(e,i,t){"use strict";t("85ec")},1:function(e,i){},2:function(e,i){},"2d6d":function(e,i,t){"use strict";t("cbdc")},"2e80":function(e,i){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAFBAUEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDy/wj4R8NXPgvQp5/DukyzS6dbvJJJZRszsY1JJJXJJPetn/hCvCn/Qs6N/4ARf/E0eCv8AkQ/Dv/YMtv8A0UtbtAGF/wAIV4U/6FnRv/ACL/4mj/hCvCn/AELOjf8AgBF/8TW7RQBhf8IV4U/6FnRv/ACL/wCJo/4Qrwp/0LOjf+AEX/xNbtFAGF/whXhT/oWdG/8AACL/AOJo/wCEK8Kf9Czo3/gBF/8AE1u0UAYX/CFeFP8AoWdG/wDACL/4mj/hCvCn/Qs6N/4ARf8AxNbtFAGF/wAIV4U/6FnRv/ACL/4mj/hCvCn/AELOjf8AgBF/8TW7RQBD4E/5J54a/wCwVa/+ilroK5/wJ/yTzw1/2CrX/wBFLXQUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBxHgr/kQ/Dv8A2DLb/wBFLW7WF4K/5EPw7/2DLb/0UtbtABRRRQAUUUUAFFFFABRRRQAUUUUAQ+BP+SeeGv8AsFWv/opa6Cuf8Cf8k88Nf9gq1/8ARS10FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAcR4K/5EPw7/ANgy2/8ARS1u1heCv+RD8O/9gy2/9FLW7QAUUUUAFFFFABRRRQAUUUUAFFFFAEPgT/knnhr/ALBVr/6KWugrn/An/JPPDX/YKtf/AEUtdBQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHEeCv+RD8O/wDYMtv/AEUtbtYXgr/kQ/Dv/YMtv/RS1u0AFFFFABRRRQAUUUUAFFFFABRRRQBD4E/5J54a/wCwVa/+ilroK5/wJ/yTzw1/2CrX/wBFLXQUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBxHgr/kQ/Dv8A2DLb/wBFLW7WF4K/5EPw7/2DLb/0UtbtABRRRQAUUUUAFFFFABRRRQAUUUUAQ+BP+SeeGv8AsFWv/opa6Cuf8Cf8k88Nf9gq1/8ARS10FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAcR4K/5EPw7/ANgy2/8ARS1u1heCv+RD8O/9gy2/9FLW7QAUUUUAFFFFABRRRQAUUUUAFFFFAEPgT/knnhr/ALBVr/6KWugrn/An/JPPDX/YKtf/AEUtdBQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAHP/wDCCeD/APoVND/8F0P/AMTR/wAIJ4P/AOhU0P8A8F0P/wATXQUUAc//AMIJ4P8A+hU0P/wXQ/8AxNH/AAgng/8A6FTQ/wDwXQ//ABNdBRQBz/8Awgng/wD6FTQ//BdD/wDE0f8ACCeD/wDoVND/APBdD/8AE10FFAHP/wDCCeD/APoVND/8F0P/AMTR/wAIJ4P/AOhU0P8A8F0P/wATXQUUAc//AMIJ4P8A+hU0P/wXQ/8AxNH/AAgng/8A6FTQ/wDwXQ//ABNdBRQBz/8Awgng/wD6FTQ//BdD/wDE0f8ACCeD/wDoVND/APBdD/8AE10FFAEcEENrbxW9vFHDBEgSOONQqooGAABwABxipKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q=="},"3ba2":function(e,i){e.exports=[{image:"images/e01_1500-100.jpg"},{image:"images/e02_1500-233.3.jpg"},{image:"images/e03_1500-366.7.jpg"},{image:"images/e04_1500-500.jpg"},{image:"images/e05_1500-633.3.jpg"},{image:"images/e06_1500-766.7.jpg"},{image:"images/e07_1500-900.jpg"},{image:"images/e08_1917-100.jpg"},{image:"images/e09_1917-233.3.jpg"},{image:"images/e10_1917-366.7.jpg"},{image:"images/e11_1917-500.jpg"},{image:"images/e12_1917-633.3.jpg"},{image:"images/e13_1917-766.7.jpg"},{image:"images/e14_1917-900.jpg"},{image:"images/e15_2333-100.jpg"},{image:"images/e16_2333-233.3.jpg"},{image:"images/e17_2333-366.7.jpg"},{image:"images/e18_2333-500.jpg"},{image:"images/e19_2333-633.3.jpg"},{image:"images/e20_2333-766.7.jpg"},{image:"images/e21_2333-900.jpg"},{image:"images/e22_2750-100.jpg"},{image:"images/e23_2750-233.3.jpg"},{image:"images/e24_2750-366.7.jpg"},{image:"images/e25_2750-500.jpg"},{image:"images/e26_2750-633.3.jpg"},{image:"images/e27_2750-766.7.jpg"},{image:"images/e28_2750-900.jpg"},{image:"images/e29_3167-100.jpg"},{image:"images/e30_3167-233.3.jpg"},{image:"images/e31_3167-366.7.jpg"},{image:"images/e32_3167-500.jpg"},{image:"images/e33_3167-633.3.jpg"},{image:"images/e34_3167-766.7.jpg"},{image:"images/e35_3167-900.jpg"},{image:"images/e36_3583-100.jpg"},{image:"images/e37_3583-233.3.jpg"},{image:"images/e38_3583-366.7.jpg"},{image:"images/e39_3583-500.jpg"},{image:"images/e40_3583-633.3.jpg"},{image:"images/e41_3583-766.7.jpg"},{image:"images/e42_3583-900.jpg"},{image:"images/e43_4000-100.jpg"},{image:"images/e44_4000-233.3.jpg"},{image:"images/e45_4000-366.7.jpg"},{image:"images/e46_4000-500.jpg"},{image:"images/e47_4000-633.3.jpg"},{image:"images/e48_4000-766.7.jpg"},{image:"images/e49_4000-900.jpg"}]},4969:function(e,i,t){"use strict";t("e2a8")},"4c49":function(e,i,t){},"56d7":function(e,i,t){"use strict";t.r(i);var o=t("2b0e"),n=t("7591"),r=t.n(n),a=t("3665"),s=function(){var e=this,i=e.$createElement,o=e._self._c||i;return o("Experiment",{attrs:{title:"Universität Osnabrück - IKW","image-assets":e.pictures,wide:!0}},[o("ConnectInteractiveScreen",{attrs:{title:"Einen Augenblick, bitte."}},[o("p",[e._v("Es fehlen noch ein paar kleine Schritte zur Vorbereitung des Experiments.")]),o("br"),o("div",{staticClass:"bouncy"}),o("br"),o("p",[e._v("Danke für die Geduld!")]),o("br"),o("p",[e._v("Wenn diese Seite länger als 30 Sekunden angezeigt wird, lade die Seite bitte erneut.")])]),o("Screen",{staticClass:"welcome"},[o("div",{staticClass:"logos"}),o("h2",[e._v("Willkommen")]),o("p",{staticStyle:{"text-align":"center"}},[e._v(" Vielen Dank für die Teilnahme an dieser Studie! ")]),o("p",[e._v(" Das Ziel dieses Projekts ist, etwas darüber herauszufinden, wie Klassifikationsaufgaben von Menschen erlernt und ausgeführt werden. Dabei handelt es sich um eine Kooperation zwischen der Universität Bremen (Abteilung Allgemeine Psychologie) und der Universität Osnabrück (Institut für Kognitionswissenschaften). Insgesamt wird die Teilnahme etwa 10 bis 15 Minuten in Anspruch nehmen. ")]),o("p",[e._v(" Die Teilnahme erfolgt vollkommen anonym und freiwillig. Das Experiment kann jederzeit abgebrochen werden. Dazu genügt es, den Browser-Tab bzw. das Fenster zu schließen. In diesem Fall werden keine Daten gespeichert. Datenspeicherung und -übertragung finden erst am Ende des Experiments statt. Studierende der Psychologie und der Cognitive Science der Universitäten Osnabrück und Bremen haben am Ende des Experiments außerdem die Möglichkeit eine halbe Probandenstunde zu erhalten und werden dazu auf eine externe Webseite weitergeleitet. ")]),o("button",{staticStyle:{width:"40%"},on:{click:function(i){return e.fsEnter()}}},[e._v(" Bitte diesen Button klicken, um in den Vollbild-Modus zu wechseln. ")]),o("p",[e._v(' Mit dem Klick auf den "Weiter"-Button erkläre ich, dass '),o("ol",[o("li",[e._v("Ich einverstanden bin, dass meine Daten anonymisiert auf der Plattform Open Science Framework (osf.io) veröffentlicht werden und im Rahmen von wissenschaftlichen Publikationen (z.B. Vorträge, Veröffentlichung in Fachzeitschriften) verwendet werden. Bitte beachten Sie, dass Sie eine Löschung Ihrer Daten im Nachhinein nicht mehr veranlassen können, da die Daten nur in anonymisierter Form gespeichert werden.")]),o("li",[e._v("Ich freiwillig teilnehme und weiß, dass ich die Studie jederzeit ohne Angabe von Gründen abbrechen kann ohne dass mir daraus Nachteile entstehen. In diesem Fall werden keine Daten gespeichert.")]),o("li",[e._v("Ich ausreichend über die Studie aufgeklärt wurde.")])]),e._v(" Weitere Fragen können per Email an "),o("a",{attrs:{href:"tanton@uos.de"}},[e._v("tanton@uos.de")]),e._v(" gerichtet werden. ")]),o("p",{staticStyle:{"text-align":"center"}},[e._v(" Auf 'weiter' klicken, um mit dem Experiment zu beginnen. "),o("button",{on:{click:function(i){return e.$magpie.nextScreen()}}},[e._v("Weiter")])]),o("hr"),o("p",{staticClass:"footer"},[o("b",[e._v("Studienverantwortlicher:")]),e._v(" Tobias Anton "),o("br"),o("b",[e._v("Addresse:")]),e._v(" Cognium Gebäude, Raum 0430, Hochschulring 18, 28359 Bremen "),o("br"),o("b",[e._v("Kontakt:")]),e._v(" "),o("a",{attrs:{href:"tanton@uos.de"}},[e._v("tanton@uos.de")])])]),o("InstructionScreen",[1==e.thisCond()||2==e.thisCond()?o("div",[o("p",[e._v("Im ersten Abschnitt des Experiments werden dir nacheinander einige Beispiele geometrischer Figuren gezeigt, die sich in ihrer Farbe und Größe unterscheiden. Deine Aufgabe ist es, zu erlernen, ob eine Figur zur Kategorie "),o("b",[e._v("Nobz")]),e._v(" oder zur Kategorie "),o("b",[e._v("Grot")]),e._v(" gehört:")]),o("img",{staticStyle:{display:"block",margin:"-80px auto",position:"relative","z-index":"-1"},attrs:{src:t("2e80")}}),o("p",[e._v("Klicke dazu bei jedem Beispiel, das dir gezeigt wird, auf die entsprechende Schaltfläche. Nach jeder Entscheidung bekommst du eine Rückmeldung darüber, ob deine Wahl richtig oder falsch war. Am Anfang musst du raten, letztendlich aber wirst du lernen, wie man die Objekte richtig kategorisiert.")]),o("p",[e._v("Gib dein Bestes, um die Kategorien Nobz und Grot zu meistern!")])]):o("div",[o("p",[e._v("Im ersten Abschnitt des Experiments werden dir nacheinander einige Beispiele geometrischer Figuren gezeigt. Deine Aufgabe ist es, anhand von Farbe und Größe eine Regel zu erlernen, mit der Du entscheiden kannst, ob eine Figur zur Kategorie "),o("b",[e._v("Nobz")]),e._v(" oder zur Kategorie "),o("b",[e._v("Grot")]),e._v(" gehört:")]),o("img",{staticStyle:{display:"block",margin:"-80px auto",position:"relative","z-index":"-1"},attrs:{src:t("2e80")}}),o("p",[e._v("Klicke dazu bei jedem Beispiel, das dir gezeigt wird, auf die entsprechende Schaltfläche. Nach jeder Entscheidung bekommst du eine Rückmeldung darüber, ob deine Wahl richtig oder falsch war. Am Anfang musst du raten, letztendlich aber wirst du lernen, wie man die Objekte richtig kategorisiert.")]),o("p",[e._v("Gib dein Bestes, um die Regeln für Kategorien Nobz und Grot zu meistern!")])])]),e._l(1==e.thisCond()||3==e.thisCond()?e.train_random:e.train_sorted,(function(i,t){return o("Screen",{key:t},[o("Record",{attrs:{data:i}}),o("Record",{attrs:{data:e.grpIdent(e.coin),global:!0}}),o("img",{attrs:{src:i.image}}),o("XorTraining",{attrs:{response:e.$magpie.measurements.response,options:["Nobz","Grot"],correct:"heads"===e.coin?i.correct1:i.correct2,feedbackTime:-1},on:{"update:response":function(i){return e.$set(e.$magpie.measurements,"response",i)}}}),e.$magpie.measurements.response?o("p",[e.$magpie.measurements.response===("heads"===e.coin?i.correct1:i.correct2)?o("span",[o("b",[e._v("Korrekt!")])]):o("span",[o("b",[e._v("Falsch")])]),o("button",{on:{click:function(i){return e.$magpie.saveAndNextScreen()}}},[e._v("Weiter")])]):e._e()],1)})),o("InstructionScreen",[o("div",{staticStyle:{"text-align":"center"}},[o("h3",[e._v("Gut gemacht!")]),o("p",[e._v("Die Lernphase ist beendet, nun folgt der zweite Teil.")]),o("p",[e._v("Die Aufgabe ist die gleiche wie zuvor, nur werden nun alte sowie neue Objekte gezeigt. Dieses mal wirst du jedoch keine Rückmeldung erhalten.")]),o("p",[e._v("Wende bitte an, was du im ersten Teil gelernt hast!")])])]),e._l(e.generalization,(function(i,t){return o("Screen",{key:t},[o("Record",{attrs:{data:i}}),o("img",{attrs:{src:i.image}}),o("XorGeneralization",{attrs:{response:e.$magpie.measurements.response,options:["Nobz","Grot"],feedbackTime:-1},on:{"update:response":function(i){return e.$set(e.$magpie.measurements,"response",i)}}})],1)})),o("InstructionScreen",[o("div",[o("h3",[e._v("Vielen Dank!")]),o("p",[e._v("Nun zum letzten Abschnitt der Studie. In diesem Durchgang möchten wir gerne wissen, wie hoch du die Wahrscheinlichkeit einschätzt, dass das gezeigte Beispiel zu einer der beiden Kategorien gehört. Verschiebe dazu den Regler in die jeweilige Richtung: ")]),o("XorProbability",{staticStyle:{width:"70%"},attrs:{response:e.$magpie.measurements.prob,initial:50,left:"Nobz",right:"Grot"},on:{"update:response":function(i){return e.$set(e.$magpie.measurements,"prob",i)}}}),o("p",[e._v("Wenn du denkst, dass beide Kategorien gleich wahrscheinlich sind, belasse den Regler einfach in der Mitte.")])],1)]),e._l(e.probability,(function(i,t){return o("Screen",{key:t},[o("Record",{attrs:{data:i}}),o("img",{attrs:{src:i.image}}),o("XorProbability",{attrs:{response:e.$magpie.measurements.prob,initial:50,left:"Nobz",right:"Grot"},on:{"update:response":function(i){return e.$set(e.$magpie.measurements,"prob",i)}}}),o("button",{on:{click:function(i){return e.$magpie.saveAndNextScreen()}}},[e._v(" Weiter ")])],1)})),o("Demographics",{attrs:{education:!1,gender:!1}}),o("SubmitResults")],2)},g=[],A=t("2ef0"),c=t.n(A),u=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"forced_choice"},[t("div",{staticClass:"options"},e._l(e.options,(function(i){return t("div",{key:i,staticClass:"option",style:{pointerEvents:e.compPointer},on:{click:function(t){e.onOptionClick(i),e.chosen=i}}},[t("div",{style:{backgroundColor:e.bgClick(i,e.correct,e.chosen)},attrs:{id:i}},[e._v(" "+e._s(i)+" ")])])})),0)])},l=[],m={name:"XorTraining",props:{options:{type:Array,required:!0},correct:{type:String,required:!0}},data(){return{backgroundColor:"",pointerEvents:"auto",chosen:null}},computed:{compPointer:function(){return this.pointerEvents}},methods:{onOptionClick(e){this.$emit("update:response",e),this.pointerEvents="none"},bgClick(e,i,t){var o="#1e1e1e00";return null==t||(e==t&&i!=t?o="#3333ff":(e!=t&&i!=t||e==t&&i==t)&&(o="#ffd633")),this.backgroundColor=o}}},d=m,K=(t("2d6d"),t("2877")),p=Object(K["a"])(d,u,l,!1,null,"29f34cba",null),h=p.exports,b=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"forced_choice"},[t("div",{staticClass:"options"},e._l(e.options,(function(i){return t("div",{key:i,staticClass:"option",style:{pointerEvents:e.compPointer},on:{click:function(t){e.onOptionClick(i),e.chosen=i,e.$magpie.saveAndNextScreen()}}},[t("div",{style:{backgroundColor:e.bgClick(i,e.chosen)},attrs:{id:i}},[e._v(" "+e._s(i)+" ")])])})),0)])},f=[],v={name:"XorGeneralization",props:{options:{type:Array,required:!0}},data(){return{backgroundColor:"",pointerEvents:"auto",chosen:null}},computed:{compPointer:function(){return this.pointerEvents}},methods:{onOptionClick(e){this.$emit("update:response",e),this.pointerEvents="none"},bgClick(e,i){var t=i===e?"#49b694":"#1e1e1e00";return this.backgroundColor=t}}},F=v,C=(t("7486"),Object(K["a"])(F,b,f,!1,null,"23ebe42c",null)),U=C.exports,_=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"slider"},[t("div",{staticClass:"slider-element"},[t("div",{staticClass:"left"},[t("b",[e._v(e._s(e.left))]),e._v(" "),t("br"),e._v(e._s(100-e.value)+"%")]),t("Slider",{staticClass:"slider",attrs:{tooltip:e.tooltip?"always":"none",min:e.min,max:e.max,interval:e.interval,disabled:e.disabled},model:{value:e.value,callback:function(i){e.value=i},expression:"value"}}),t("div",{staticClass:"right"},[t("b",[e._v(e._s(e.right))]),e._v(" "),t("br"),e._v(e._s(100-(100-e.value))+"%")])],1)])},R=[],w=t("4971b"),k=t.n(w),B=(t("24df"),{name:"XorProbability",components:{Slider:k.a},props:{left:{type:String,optional:!0,default:"A"},right:{type:String,optional:!0,default:"B"},initial:{type:Number,optional:!0,default:50},min:{type:Number,optional:!0,default:0},max:{type:Number,optional:!0,default:100},interval:{type:Number,optional:!0,default:1},tooltip:{type:Boolean,optional:!0,default:!1},disabled:{type:Boolean,optional:!0,default:!1}},data(){return{value:this.initial}},watch:{value(){this.disabled||this.$emit("update:response",this.value)}}}),j=B,y=(t("fb27"),Object(K["a"])(j,_,R,!1,null,"f901e1aa",null)),D=y.exports,E=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("Screen",e._b({attrs:{title:"Weitere Angaben"}},"Screen",e.$attrs,!1),[t("Slide",[t("p",[e._v(" Die folgenden Fragen zu beantworten ist völlig optional, wird uns jedoch bei der Analyse der Ergebnisse weiterhelfen. ")]),t("div",{staticStyle:{"text-align":"center",width:"auto",margin:"0 auto"}},[e.age?t("p",[t("label",[e._v(" Dein Alter (in Jahren): "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.$magpie.measurements.age,expression:"$magpie.measurements.age"}],attrs:{type:"number",max:"110",min:"18"},domProps:{value:e.$magpie.measurements.age},on:{input:function(i){i.target.composing||e.$set(e.$magpie.measurements,"age",i.target.value)}}})])]):e._e(),e.gender?t("p",[t("label",[e._v(" Gender: "),t("DropdownInput",{attrs:{options:["","male","female","other"],response:e.$magpie.measurements.gender},on:{"update:response":function(i){return e.$set(e.$magpie.measurements,"gender",i)}}})],1)]):e._e(),e.education?t("p",[t("label",[e._v("Dein höchster Bildungsabschluss: "),t("DropdownInput",{attrs:{orientation:"horizontal",options:["(keine Angabe)","kein Abschluss","Haupt- oder Volksschule","Realschule / mittlere Reife","(Fach-)Gymnasium / Abitur","Berufsausbildung","Hochschule (Bachelor, Vordiplom)","Hochschule (Master, Diplom)","Promotion"],response:e.$magpie.measurements.education},on:{"update:response":function(i){return e.$set(e.$magpie.measurements,"education",i)}}})],1)]):e._e(),e.languages?t("p",[t("label",[e._v(" Muttersprache(n): "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.$magpie.measurements.languages,expression:"$magpie.measurements.languages"}],attrs:{type:"text",placeholder:"deutsch, englisch, latein..."},domProps:{value:e.$magpie.measurements.languages},on:{input:function(i){i.target.composing||e.$set(e.$magpie.measurements,"languages",i.target.value)}}})])]):e._e(),t("hr"),e._t("default",null,{measurements:e.$magpie.measurements}),t("p",[t("b",[e._v("Beschreibe bitte, wie du bei der Kategorisierung im zweiten Abschnitt vorgegangen bist:")]),t("TextareaInput",{attrs:{response:e.$magpie.measurements.strategy},on:{"update:response":function(i){return e.$set(e.$magpie.measurements,"strategy",i)}}})],1),t("hr"),t("p",[t("label",[t("p",[t("b",[e._v("Gibt es einen Grund aus dem wir deine Daten nicht auswerten sollten?")]),e._v(" "),t("br"),e._v(" (z.B. längere Unterbrechung, Unkonzentriertheit, laute Umgebung, zweite Teilnahme, etc...) ")]),t("MultipleChoiceInput",{attrs:{options:["Ja (Daten werden entfernt)","Nein (Daten werden behalten)"],orientation:"horizontal",response:e.$magpie.measurements.usage},on:{"update:response":function(i){return e.$set(e.$magpie.measurements,"usage",i)}}})],1)]),t("p",[e._v("Dir entsteht kein Nachteil, diese Frage zu ehrlich beantworten! "),t("br"),e._v("Die Zuverlässigkeit unserer Daten ist uns jedoch sehr wichtig.")]),t("p"),t("hr"),t("p",[e._v(" Hast du noch weitere Anmerkungen? Wir freuen uns über jegliches Feedback! "),t("TextareaInput",{attrs:{response:e.$magpie.measurements.comments},on:{"update:response":function(i){return e.$set(e.$magpie.measurements,"comments",i)}}})],1)],2),t("div",[t("hr"),t("p",[e._v(" Durch klicken auf 'Beenden' wird der Vollbildmodus verlassen und deine Daten werden übermittelt. "),t("button",{on:{click:function(i){e.$magpie.addExpData(e.$magpie.measurements),e.$magpie.nextScreen(),e.fsExit()}}},[e._v(" Beenden ")])])])])],1)},Q=[],z={name:"Demographics",props:{age:{type:Boolean,default:!0},gender:{type:Boolean,default:!0},education:{type:Boolean,default:!0},languages:{type:Boolean,default:!0},comments:{type:Boolean,default:!0}},methods:{fsExit:function(){document.exitFullscreen()}}},S=z,x=(t("4969"),Object(K["a"])(S,E,Q,!1,null,null,null)),P=x.exports,N=function(){var e=this,i=e.$createElement,t=e._self._c||i;return e.$magpie.debug?t("DebugResultsScreen"):t("Screen",{attrs:{title:"Fertig."}},[t("Slide",[t("p",[e._v("Einen Augenblick, Daten werden übermittelt.")]),t("Wait",{attrs:{time:0},on:{done:function(i){e.submit((function(){return e.$magpie.nextSlide()}))}}})],1),t("Slide",[e.error?t("div",[t("p",[e._v("Oh nein! Es gab ein Problem bei der Datenübermittlung.")]),t("p",[e._v(" Bitte kontaktiere "),t("a",{attrs:{href:"mailto:"+e.$magpie.contactEmail}},[e._v("den Autor des Experiments.")]),e._v(". ")]),t("p",{domProps:{textContent:e._s(e.error)}})]):t("div",[t("p",[e._v(" Vielen lieben Dank für die Teilnahme! "),t("Wait",{attrs:{time:3e3},on:{done:e.redirectToCompletionUrl}})],1),t("p",[e._v(" Cognitive Science Studierende der Uni Osnabrück und Psychologie Studierende der Uni Bremen können "),t("a",{attrs:{href:"https://marauderpixie.github.io/ma-thesis-vp-hours/",target:"_blank"}},[e._v("diesem Link folgen")]),e._v(", um eine halbe Probandenstunde zu erhalten. ")]),t("p",[e._v("Dieses Fenster kann nun geschlossen werden.")])])])],1)},$=[],I=t("2012"),G=t("b702"),O=t("8fc6"),M=t("0abc"),T={name:"SubmitResults",components:{Slide:M["a"],DebugResultsScreen:O["a"],Wait:G["a"],Screen:I["a"]},props:{},data(){return{error:null}},methods:{async submit(e){try{await this.$magpie.submit(),e()}catch(i){this.error=i.message,e()}},redirectToCompletionUrl(){this.$magpie.completionUrl&&"prolific"===this.$magpie.mode&&(window.location=this.$magpie.completionUrl)}}},W=T,J=Object(K["a"])(W,N,$,!1,null,null,null),L=J.exports,X=t("76c6"),V=t.n(X),H=t("a798"),q=t.n(H),Y=t("c418"),Z=t.n(Y),ee=t("3ba2"),ie=t.n(ee),te=[];for(let me=0;me<12;me++)te[me]=c.a.shuffle(V.a);const oe=te.flat();var ne=c.a.sample(["shape","size"]),re=[],ae=[];for(let me=0;me<4;me++)re[me]="size"==ne?c.a.shuffle(q.a):c.a.shuffle(Z.a);for(let me=0;me<10;me++)ae[me]=c.a.shuffle(V.a);const se=[re.flat(),ae.flat()].flat();var ge={name:"App",components:{XorTraining:h,XorGeneralization:U,XorProbability:D,Demographics:P,SubmitResults:L},data(){return{pictures:ie.a.map(e=>e.image),train_random:oe,train_sorted:se,generalization:c.a.shuffle(ie.a),probability:c.a.shuffle(ie.a),coin:c.a.sample(["heads","tails"])}},methods:{thisChain:function(){var e=this.$magpie.socket.chain;return e},thisCond:function(){var e=this.$magpie.socket.variant;return e},grpIdent:function(e){const i={condition:this.$magpie.socket.variant,assignment:"heads"===e?"correct1":"correct2"},t=Object.assign({},i);return t},fsEnter:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}}},Ae=ge,ce=(t("034f"),Object(K["a"])(Ae,s,g,!1,null,null,null)),ue=ce.exports,le={experimentId:"7",serverUrl:"magpie.jemu.name/api/submit_experiment/",socketUrl:"wss://magpie.jemu.name/socket",completionUrl:"https://...",contactEmail:"tanton@uos.de",mode:"directLink",language:"de"};o["default"].config.productionTip=!1,o["default"].use(r.a,{prefix:"Canvas"}),o["default"].use(a["a"],le),new o["default"]({render:e=>e(ue)}).$mount("#app")},7486:function(e,i,t){"use strict";t("7e00")},"76c6":function(e,i){e.exports=[{image:"images/e01_1500-100.jpg",correct1:"Nobz",correct2:"Grot"},{image:"images/e07_1500-900.jpg",correct1:"Grot",correct2:"Nobz"},{image:"images/e09_1917-233.3.jpg",correct1:"Nobz",correct2:"Grot"},{image:"images/e13_1917-766.7.jpg",correct1:"Grot",correct2:"Nobz"},{image:"images/e41_3583-766.7.jpg",correct1:"Nobz",correct2:"Grot"},{image:"images/e07_1500-900.jpg",correct1:"Grot",correct2:"Nobz"},{image:"images/e49_4000-900.jpg",correct1:"Nobz",correct2:"Grot"},{image:"images/e13_1917-766.7.jpg",correct1:"Grot",correct2:"Nobz"}]},"7e00":function(e,i,t){},"85ec":function(e,i,t){},a798:function(e,i){e.exports=[{image:"images/e41_3583-766.7.jpg",correct1:"Nobz",correct2:"Grot"},{image:"images/e07_1500-900.jpg",correct1:"Grot",correct2:"Nobz"},{image:"images/e49_4000-900.jpg",correct1:"Nobz",correct2:"Grot"},{image:"images/e13_1917-766.7.jpg",correct1:"Grot",correct2:"Nobz"}]},c418:function(e,i){e.exports=[{image:"images/e01_1500-100.jpg",correct1:"Nobz",correct2:"Grot"},{image:"images/e07_1500-900.jpg",correct1:"Grot",correct2:"Nobz"},{image:"images/e09_1917-233.3.jpg",correct1:"Nobz",correct2:"Grot"},{image:"images/e13_1917-766.7.jpg",correct1:"Grot",correct2:"Nobz"}]},cbdc:function(e,i,t){},e2a8:function(e,i,t){},fb27:function(e,i,t){"use strict";t("4c49")}});
//# sourceMappingURL=app.206478fb.js.map