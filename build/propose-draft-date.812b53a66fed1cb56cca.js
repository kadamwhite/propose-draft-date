!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=React},function(e,t){e.exports=wp.data},function(e,t){e.exports=wp.components},function(e,t){e.exports=wp.date},function(e,t){e.exports=wp.i18n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.autoloadFormats=t.unregisterFormat=t.registerFormat=t.autoloadPlugins=t.unregisterPlugin=t.registerPlugin=t.autoloadBlocks=t.afterUpdateBlocks=t.beforeUpdateBlocks=t.unregisterBlock=t.registerBlock=t.autoload=void 0;var n=window.wp,o=n.blocks,i=n.plugins,a=n.richText,s=n.hooks,c=n.data,l=function(){},u=function(e){var t=e.getContext,r=e.register,n=e.unregister,o=e.before,i=void 0===o?l:o,a=e.after,s=void 0===a?l:a,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,u={},d=function(){i();var e=t(),o=[];return e.keys().forEach((function(t){var i=e(t);i!==u[t]&&(u[t]&&n(u[t]),r(i),o.push(i),u[t]=i)})),s(o),e},f=d();c(f,d)};t.autoload=u;var d=null,f=function(e){var t=e.name,r=e.settings,n=e.filters,i=e.styles;t&&r&&o.registerBlockType(t,r),n&&Array.isArray(n)&&n.forEach((function(e){var t=e.hook,r=e.namespace,n=e.callback;s.addFilter(t,r,n)})),i&&Array.isArray(i)&&i.forEach((function(e){return o.registerBlockStyle(t,e)}))};t.registerBlock=f;var g=function(e){var t=e.name,r=e.settings,n=e.filters,i=e.styles;t&&r&&o.unregisterBlockType(t),n&&Array.isArray(n)&&n.forEach((function(e){var t=e.hook,r=e.namespace;s.removeFilter(t,r)})),i&&Array.isArray(i)&&i.forEach((function(e){return o.unregisterBlockStyle(t,e.name)}))};t.unregisterBlock=g;var p=function(){d=c.select("core/block-editor").getSelectedBlockClientId(),c.dispatch("core/block-editor").clearSelectedBlock()};t.beforeUpdateBlocks=p;var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.name}));t.length&&(c.select("core/block-editor").getBlocks().forEach((function(e){var r=e.name,n=e.clientId;t.includes(r)&&c.dispatch("core/block-editor").selectBlock(n)})),d?c.dispatch("core/block-editor").selectBlock(d):c.dispatch("core/block-editor").clearSelectedBlock(),d=null)};t.afterUpdateBlocks=m;t.autoloadBlocks=function(e,t){var r=e.getContext,n=e.register,o=void 0===n?f:n,i=e.unregister,a=void 0===i?g:i,s=e.before,c=void 0===s?p:s,l=e.after;u({getContext:r,register:o,unregister:a,before:c,after:void 0===l?m:l},t)};var v=function(e){var t=e.name,r=e.settings,n=e.filters;t&&r&&i.registerPlugin(t,r),n&&Array.isArray(n)&&n.forEach((function(e){var t=e.hook,r=e.namespace,n=e.callback;s.addFilter(t,r,n)}))};t.registerPlugin=v;var b=function(e){var t=e.name,r=e.settings,n=e.filters;t&&r&&i.unregisterPlugin(t),n&&Array.isArray(n)&&n.forEach((function(e){var t=e.hook,r=e.namespace;s.removeFilter(t,r)}))};t.unregisterPlugin=b;t.autoloadPlugins=function(e,t){var r=e.getContext,n=e.register,o=void 0===n?v:n,i=e.unregister,a=void 0===i?b:i,s=e.before,c=e.after;u({getContext:r,register:o,unregister:a,before:s,after:c},t)};var h=function(e){var t=e.name,r=e.settings;t&&r&&a.registerFormatType(t,r)};t.registerFormat=h;var k=function(e){var t=e.name,r=e.settings;t&&r&&a.unregisterFormatType(t)};t.unregisterFormat=k;t.autoloadFormats=function(e,t){var r=e.getContext,n=e.register,o=void 0===n?h:n,i=e.unregister,a=void 0===i?k:i,s=e.before,c=e.after;u({getContext:r,register:o,unregister:a,before:s,after:c},t)}},function(e,t){e.exports=wp.editPost},function(e,t,r){"use strict";r.r(t);var n=r(5);r(8);Object(n.autoloadPlugins)({getContext:()=>r(9)},(e,t)=>{0})},function(e,t,r){},function(e,t,r){var n={"./propose-draft-date/index.tsx":10};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=9},function(e,t,r){"use strict";r.r(t),r.d(t,"name",(function(){return k})),r.d(t,"settings",(function(){return y}));var n=r(0),o=r.n(n),i=r(6),a=r(1);const s=({children:e,hasPublishAction:t,isFloating:r,isPublished:n})=>n||t||!r?null:o.a.createElement(o.a.Fragment,null,e);var c=({children:e})=>{const t=Object(a.useSelect)(e=>{var t,r;const{getCurrentPost:n,isCurrentPostPublished:o,isEditedPostDateFloating:i}=e("core/editor");return{hasPublishAction:Boolean(null===(r=null===(t=n())||void 0===t?void 0:t._links)||void 0===r?void 0:r["wp:action-publish"])||!1,isFloating:i(),isPublished:o()}});return o.a.createElement(s,Object.assign({},t),e)},l=r(4),u=r(2),d=r(3);function f(e){return e(Object(d.__experimentalGetSettings)())}function g(e){const t=function(e){const t=Object(a.useSelect)(e=>e("core/editor").getEditedPostAttribute("meta"));return t?t[e]:void 0}(e),{editPost:r}=Object(a.useDispatch)("core/editor");return[t,Object(n.useCallback)(t=>{r({meta:{[e]:t}})},[r,e])]}const p=({date:e,onChangeDate:t,is12HourTime:r=!1})=>{const i=Object(n.useCallback)(e=>{t(e),(null===document||void 0===document?void 0:document.activeElement)&&document.activeElement.blur()},[t]);return o.a.createElement(u.DateTimePicker,{key:"date-time-picker",currentDate:e,onChange:i,is12Hour:r})};var m=({children:e})=>{const[t,r]=g("proposed_publish_date"),{is12HourTime:n}=f(e=>({is12HourTime:/a(?!\\)/i.test(e.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""))}));return o.a.createElement(p,{date:t,is12HourTime:n,onChangeDate:r},e)};const v=({date:e,isFloating:t,proposedDate:r})=>{const{dateFormat:n}=f(e=>({dateFormat:`${e.formats.date} ${e.formats.time}`}));return e&&!t?Object(d.dateI18n)(n,e):t&&r?Object(d.dateI18n)(n,r):Object(l.__)("Immediately")};var b=function(){const[e]=g("proposed_publish_date"),{date:t,isFloating:r}=Object(a.useSelect)(e=>({date:e("core/editor").getEditedPostAttribute("date"),isFloating:e("core/editor").isEditedPostDateFloating()}));return o.a.createElement(v,{date:t,isFloating:r,proposedDate:e})};function h(){return o.a.createElement(u.PanelRow,{className:"edit-post-post-schedule"},o.a.createElement("span",null,Object(l.__)("Publish")),o.a.createElement(u.Dropdown,{position:"bottom left",contentClassName:"edit-post-post-schedule__dialog",renderToggle:({onToggle:e,isOpen:t})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(u.Button,{className:"edit-post-post-schedule__toggle",onClick:e,"aria-expanded":t,isLink:!0},o.a.createElement(b,null))),renderContent:()=>o.a.createElement(m,null)}))}const k="propose-draft-date",y={render:function(){return o.a.createElement(i.PluginPostStatusInfo,null,o.a.createElement(c,null,o.a.createElement(h,null)))}}}]);