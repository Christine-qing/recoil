(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(188)),i={title:"useRecoilState()",sidebar_label:"useRecoilState()"},c={id:"api-reference/core/useRecoilState",title:"useRecoilState()",description:"Returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state when called.",source:"@site/docs/api-reference/core/useRecoilState.md",permalink:"/docs/api-reference/core/useRecoilState",editUrl:"https://github.com/justjavac/recoil/tree/master/docs/api-reference/core/useRecoilState.md",sidebar_label:"useRecoilState()",sidebar:"someSidebar",previous:{title:"isRecoilValue(value)",permalink:"/docs/api-reference/core/isRecoilValue"},next:{title:"useRecoilValue()",permalink:"/docs/api-reference/core/useRecoilValue"}},l=[{value:"Example",id:"example",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state when called."),Object(o.b)("p",null,"This hook will implicitly subscribe the component to the given state."),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": an ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/core/atom"}),Object(o.b)("inlineCode",{parentName:"a"},"atom"))," or a ",Object(o.b)("em",{parentName:"li"},"writeable")," ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api-reference/core/selector"}),Object(o.b)("inlineCode",{parentName:"a"},"selector")),". Writeable selectors are selectors that were have both a ",Object(o.b)("inlineCode",{parentName:"li"},"get")," and ",Object(o.b)("inlineCode",{parentName:"li"},"set")," in their definition while read-only selectors only have a ",Object(o.b)("inlineCode",{parentName:"li"},"get"),".")),Object(o.b)("p",null,"This is the recommended hook to use when a component intends to read and write state."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import {atom, selector, useRecoilState} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelcius = selector({\n  key: 'tempCelcius',\n  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),\n});\n\nfunction TempCelcius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelcius);\n\n  const addTenCelcius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n\n  return (\n    <div>\n      Temp (Celcius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelcius}>Add 10 Celcius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n    </div>\n  );\n}\n")))}u.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);