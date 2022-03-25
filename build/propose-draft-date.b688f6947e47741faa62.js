!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=React},function(e,t){e.exports=wp.data},function(e,t){e.exports=wp.hooks},function(e,t){e.exports=wp.components},function(e,t){e.exports=wp.date},function(e,t){e.exports=wp.i18n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.autoloadFormats=t.unregisterFormat=t.registerFormat=t.autoloadPlugins=t.unregisterPlugin=t.registerPlugin=t.autoloadBlocks=t.afterUpdateBlocks=t.beforeUpdateBlocks=t.unregisterBlock=t.registerBlock=t.autoload=void 0;var o=window.wp,n=o.blocks,a=o.plugins,i=o.richText,s=o.hooks,c=o.data,l=function(){},u=function(e){var t=e.getContext,r=e.register,o=e.unregister,n=e.before,a=void 0===n?l:n,i=e.after,s=void 0===i?l:i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,u={},d=function(){a();var e=t(),n=[];return e.keys().forEach((function(t){var a=e(t);a!==u[t]&&(u[t]&&o(u[t]),r(a),n.push(a),u[t]=a)})),s(n),e},f=d();c(f,d)};t.autoload=u;var d=null,f=function(e){var t=e.name,r=e.settings,o=e.filters,a=e.styles;t&&r&&n.registerBlockType(t,r),o&&Array.isArray(o)&&o.forEach((function(e){var t=e.hook,r=e.namespace,o=e.callback;s.addFilter(t,r,o)})),a&&Array.isArray(a)&&a.forEach((function(e){return n.registerBlockStyle(t,e)}))};t.registerBlock=f;var p=function(e){var t=e.name,r=e.settings,o=e.filters,a=e.styles;t&&r&&n.unregisterBlockType(t),o&&Array.isArray(o)&&o.forEach((function(e){var t=e.hook,r=e.namespace;s.removeFilter(t,r)})),a&&Array.isArray(a)&&a.forEach((function(e){return n.unregisterBlockStyle(t,e.name)}))};t.unregisterBlock=p;var g=function(){d=c.select("core/block-editor").getSelectedBlockClientId(),c.dispatch("core/block-editor").clearSelectedBlock()};t.beforeUpdateBlocks=g;var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.name}));t.length&&(c.select("core/block-editor").getBlocks().forEach((function(e){var r=e.name,o=e.clientId;t.includes(r)&&c.dispatch("core/block-editor").selectBlock(o)})),d?c.dispatch("core/block-editor").selectBlock(d):c.dispatch("core/block-editor").clearSelectedBlock(),d=null)};t.afterUpdateBlocks=m;t.autoloadBlocks=function(e,t){var r=e.getContext,o=e.register,n=void 0===o?f:o,a=e.unregister,i=void 0===a?p:a,s=e.before,c=void 0===s?g:s,l=e.after;u({getContext:r,register:n,unregister:i,before:c,after:void 0===l?m:l},t)};var v=function(e){var t=e.name,r=e.settings,o=e.filters;t&&r&&a.registerPlugin(t,r),o&&Array.isArray(o)&&o.forEach((function(e){var t=e.hook,r=e.namespace,o=e.callback;s.addFilter(t,r,o)}))};t.registerPlugin=v;var b=function(e){var t=e.name,r=e.settings,o=e.filters;t&&r&&a.unregisterPlugin(t),o&&Array.isArray(o)&&o.forEach((function(e){var t=e.hook,r=e.namespace;s.removeFilter(t,r)}))};t.unregisterPlugin=b;t.autoloadPlugins=function(e,t){var r=e.getContext,o=e.register,n=void 0===o?v:o,a=e.unregister,i=void 0===a?b:a,s=e.before,c=e.after;u({getContext:r,register:n,unregister:i,before:s,after:c},t)};var h=function(e){var t=e.name,r=e.settings;t&&r&&i.registerFormatType(t,r)};t.registerFormat=h;var k=function(e){var t=e.name,r=e.settings;t&&r&&i.unregisterFormatType(t)};t.unregisterFormat=k;t.autoloadFormats=function(e,t){var r=e.getContext,o=e.register,n=void 0===o?h:o,a=e.unregister,i=void 0===a?k:a,s=e.before,c=e.after;u({getContext:r,register:n,unregister:i,before:s,after:c},t)}},function(e,t){e.exports=wp.editPost},function(e,t,r){"use strict";r.r(t);var o=r(6);r(9);Object(o.autoloadPlugins)({getContext:()=>r(10)},(e,t)=>{0})},function(e,t,r){},function(e,t,r){var o={"./propose-draft-date/index.tsx":11};function n(e){var t=a(e);return r(t)}function a(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}n.keys=function(){return Object.keys(o)},n.resolve=a,e.exports=n,n.id=10},function(e,t,r){"use strict";r.r(t),r.d(t,"name",(function(){return y})),r.d(t,"settings",(function(){return P}));var o=r(0),n=r.n(o),a=r(7),i=r(1),s=r(2);const c=({children:e,hasPublishAction:t,isFloating:r,postStatus:o,isPublished:a})=>{const i=Object(s.applyFilters)("proposed_date.is_floating",r);if(a||t||!i)return null;return Object(s.applyFilters)("proposed_date.supported_statuses",["auto-draft","draft","future"]).includes(o)?n.a.createElement(n.a.Fragment,null,e):null};var l=({children:e})=>{const t=Object(i.useSelect)(e=>{var t,r;const{getCurrentPost:o,isCurrentPostPublished:n,isEditedPostDateFloating:a,getEditedPostAttribute:i}=e("core/editor");return{hasPublishAction:Boolean(null===(r=null===(t=o())||void 0===t?void 0:t._links)||void 0===r?void 0:r["wp:action-publish"])||!1,isFloating:a(),postStatus:i("status"),isPublished:n()}});return n.a.createElement(c,Object.assign({},t),e)},u=r(5),d=r(3),f=r(4);function p(e){return e(Object(f.__experimentalGetSettings)())}function g(e){const t=function(e){const t=Object(i.useSelect)(e=>e("core/editor").getEditedPostAttribute("meta"));return t?t[e]:void 0}(e),{editPost:r}=Object(i.useDispatch)("core/editor");return[t,Object(o.useCallback)(t=>{r({meta:{[e]:t}})},[r,e])]}const m=({date:e,onChangeDate:t,is12HourTime:r=!1})=>{const a=Object(o.useCallback)(e=>{t(e),(null===document||void 0===document?void 0:document.activeElement)&&document.activeElement.blur()},[t]);return n.a.createElement(d.DateTimePicker,{key:"date-time-picker",currentDate:e,onChange:a,is12Hour:r})};var v=({children:e})=>{const[t,r]=g("proposed_publish_date"),{is12HourTime:o}=p(e=>({is12HourTime:/a(?!\\)/i.test(e.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""))}));let a=Object(i.useSelect)(e=>e("core/editor").getEditedPostAttribute("date"));return a=t.length>0?t:a,n.a.createElement(m,{date:a,is12HourTime:o,onChangeDate:r},e)};const b=({date:e,proposedDate:t,isFloating:r})=>{const o=Object(s.applyFilters)("proposed_date.is_floating",r),{dateFormat:n}=p(e=>({dateFormat:`${e.formats.date} ${e.formats.time}`}));let a=Object(u.__)("Immediately");return e&&!o?a=Object(f.dateI18n)(n,e):o&&t&&(a=Object(f.dateI18n)(n,t)),Object(s.applyFilters)("proposed_date.date_label",a,t,e)};var h=function(){const[e]=g("proposed_publish_date"),{date:t,isFloating:r}=Object(i.useSelect)(e=>({date:e("core/editor").getEditedPostAttribute("date"),isFloating:e("core/editor").isEditedPostDateFloating()}));return n.a.createElement(b,{date:t,proposedDate:e,isFloating:r})};function k(){return n.a.createElement(d.PanelRow,{className:"edit-post-post-schedule"},n.a.createElement("span",null,Object(u.__)("Publish")),n.a.createElement(d.Dropdown,{position:"bottom left",contentClassName:"edit-post-post-schedule__dialog",renderToggle:({onToggle:e,isOpen:t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(d.Button,{className:"edit-post-post-schedule__toggle",onClick:e,"aria-expanded":t,isLink:!0},n.a.createElement(h,null))),renderContent:()=>n.a.createElement(v,null)}))}const y="propose-draft-date",P={render:function(){return n.a.createElement(a.PluginPostStatusInfo,null,n.a.createElement(l,null,n.a.createElement(k,null)))}}}]);