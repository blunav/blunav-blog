(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4463:function(A,t,e){Promise.resolve().then(e.bind(e,5233)),Promise.resolve().then(e.bind(e,8747)),Promise.resolve().then(e.bind(e,5176)),Promise.resolve().then(e.bind(e,8476)),Promise.resolve().then(e.bind(e,8759)),Promise.resolve().then(e.bind(e,4442)),Promise.resolve().then(e.bind(e,5305)),Promise.resolve().then(e.bind(e,7252)),Promise.resolve().then(e.t.bind(e,3950,23)),Promise.resolve().then(e.t.bind(e,6340,23))},5305:function(A,t,e){"use strict";e.d(t,{FlipWords:function(){return o}});var n=e(7573),i=e(9585),r=e(4357),a=e(1513),s=e(1731);let o=A=>{let{words:t,duration:e=3e3,className:o}=A,[u,c]=(0,i.useState)(t[0]),[l,d]=(0,i.useState)(!1),h=(0,i.useCallback)(()=>{c(t[t.indexOf(u)+1]||t[0]),d(!0)},[u,t]);return(0,i.useEffect)(()=>{l||setTimeout(()=>{h()},e)},[l,e,h]),(0,n.jsx)(r.M,{onExitComplete:()=>{d(!1)},children:(0,n.jsx)(a.E.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:10},exit:{opacity:0,y:-10,position:"absolute"},className:(0,s.cn)("text-foreground relative inline-block px-2 text-left",o),children:u},u)})}},7252:function(A,t,e){"use strict";e.d(t,{InfiniteMoving:function(){return a}});var n=e(7573),i=e(9585),r=e(1731);let a=A=>{let{direction:t="left",speed:e="fast",pauseOnHover:a=!0,className:s,children:o}=A,u=i.useRef(null),[c,l]=(0,i.useState)(!1);(0,i.useEffect)(()=>{u.current&&(Array.from(u.current.children).forEach(A=>{let t=A.cloneNode(!0);u.current&&u.current.appendChild(t)}),d(),h(),l(!0))},[]);let d=()=>{u.current&&("left"===t?u.current.style.setProperty("--animation-direction","forwards"):u.current.style.setProperty("--animation-direction","reverse"))},h=()=>{u.current&&("fast"===e?u.current.style.setProperty("--animation-duration","20s"):"normal"===e?u.current.style.setProperty("--animation-duration","40s"):u.current.style.setProperty("--animation-duration","80s"))};return(0,n.jsx)("div",{ref:u,className:(0,r.cn)("flex w-max min-w-full shrink-0 flex-nowrap gap-4",c&&"animate-scroll",a&&"hover:[animation-play-state:paused]",s),children:o})}},2188:function(A,t,e){"use strict";e.d(t,{cn:function(){return r},m:function(){return r}});var n=e(5579);let i=(0,n.Ik)(()=>(0,n.t8)((0,n._K)(),{extend:{classGroups:{shadow:[{shadow:["border","border-inner"]}],animate:[{animate:["accordion-up","accordion-down"]}]}}})),r=function(){for(var A=arguments.length,t=Array(A),e=0;e<A;e++)t[e]=arguments[e];return i((0,n.dV)(t))}},1731:function(A,t,e){"use strict";e.d(t,{cn:function(){return n.cn}});var n=e(2188)},5233:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/hero-image.0d164489.png",height:636,width:960,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEWptcDG1ePe5/W7wcpocnzW2uKtush/ipKBmaZjeIPSz9V6kqFueYOXlpuEj5pASFGPqrqcprSfvM2Joq9JWWRaX2qg+tufAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nAXBhwEAIQgAsVNRwP7F/Vc1ocMsBUHDc2LMir+yCMnRVGXkqrRtv9tnFxjVAUKRshYfAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},8747:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/aai.74d61ca4.png",height:194,width:296,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEX+/v/DyuPP1eh2h8DZ3u6BkcWUoM2rtdfc4O/v8fjbkkvaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nB3FuQ0AMAwDsZP8xfsvHMBsCDDLUenOiDDwWqX2krKs5AMHPgBcjzbDFQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},5176:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/airport-ai.83833268.png",height:1038,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEWFn7lwdl2GnLGAlqhndIJwfYp+j5pzhJiKpbyAkqJiaVRaZGpTXWNseYR6gWhgbHep6h9FAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nAXBiQEAIAgDsWsFFb/9xzUBJoChbrO7mXX2zm4iI3LUYOlJS/oPSADEGy5J8AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},8476:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/airport.3a692e26.png",height:844,width:1500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEUxSR1MR0yqsJ9/lVNzc2xSU1NjZWGkpqevsbZVUVN5gmeYnZa7vLBPYztqcV97enzHxMeGiI2YoX18hnAn+N2wAAAAEXRSTlMBcv5d/cf7/f5Cz4vPQMbdU8fTVjgAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAuSURBVHicFcm3EQAgDACxBxtMjvvvyqFWgJsVIIedfFsQk0W1I+Sg/o7+0xUBHhXXAOx+8bsqAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},8759:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/floweasy-ai.77fdf1ac.png",height:683,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEW9v8CurrGQmZ+PkJjX1dGzsbF9c3yVj5G/w8iwtriAZHGJh4rKz8XIqKDh4+S3trSgmp+brK6Wsrpib3Zua21VXWEeSOs1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nAXBBwKAIAwAsaOUDhfK+P9XTWiqeaEdP8Xv8MWRYp5UrPBWvkEjnih7/hmVATgwyG/bAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},4442:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/pax-os.f49110ac.png",height:822,width:1232,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEWkrK5vamF/jJWpoZZbWVWhpaeut7deYWNrdHF2cmbAy8xua21RXmHTvZ8ZKCvSxbaUiXvC1eGci3aIjYtNVl2jmYssMi479tXAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAXBCQKAIAgAwUVB0DQ7tP8/tRkgtVYckpT7xY04sby/xaU14hFlzOy9Hv4DGYkBS/AYGk0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}}},function(A){A.O(0,[890,950,714,293,528,744],function(){return A(A.s=4463)}),_N_E=A.O()}]);