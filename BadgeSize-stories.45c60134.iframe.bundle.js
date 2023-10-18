"use strict";(self.webpackChunkpcf_project=self.webpackChunkpcf_project||[]).push([[670],{"./FluentUIBadge/FluentUIBadgeApp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@griffel/react/makeStyles.esm.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fluentui/tokens/lib/themes/teams/lightTheme.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@fluentui/tokens/lib/themes/teams/darkTheme.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@fluentui/tokens/lib/themes/teams/highContrastTheme.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@fluentui/tokens/lib/themes/web/lightTheme.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@fluentui/tokens/lib/themes/web/darkTheme.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@fluentui/react-provider/lib/components/FluentProvider/FluentProvider.js"),_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@fluentui/react-badge/lib/components/Badge/Badge.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const useStyles=(0,_fluentui_react_components__WEBPACK_IMPORTED_MODULE_2__.Z)({badge:{marginLeft:"5px"}}),themes={TeamsLight:_fluentui_react_components__WEBPACK_IMPORTED_MODULE_3__.Y,TeamsDark:_fluentui_react_components__WEBPACK_IMPORTED_MODULE_4__.$,TeamsHighContrast:_fluentui_react_components__WEBPACK_IMPORTED_MODULE_5__.$,WebLight:_fluentui_react_components__WEBPACK_IMPORTED_MODULE_6__.w,WebDark:_fluentui_react_components__WEBPACK_IMPORTED_MODULE_7__._},FluentUIBadgeApp=props=>{const activetheme=themes[props.theme],classes=useStyles();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_8__.r,{theme:activetheme,children:(()=>{let inputs=[];return null!=props.input&&(null!=props.separator&&""!=props.separator?props.input?.split(props.separator).forEach((x=>inputs.push(x))):inputs.push(props.input)),inputs})().map(((input,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_9__.C,{className:classes.badge,appearance:props.appearance,size:props.size,shape:props.shape,color:props.color,children:input},`badge-${index}.`)))})};FluentUIBadgeApp.displayName="FluentUIBadgeApp";const __WEBPACK_DEFAULT_EXPORT__=FluentUIBadgeApp;try{FluentUIBadgeApp.displayName="FluentUIBadgeApp",FluentUIBadgeApp.__docgenInfo={description:"",displayName:"FluentUIBadgeApp",props:{input:{defaultValue:null,description:"",name:"input",required:!0,type:{name:"string | undefined"}},separator:{defaultValue:null,description:"",name:"separator",required:!0,type:{name:"string | undefined"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"filled"'},{value:'"ghost"'},{value:'"outline"'},{value:'"tint"'}]}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"enum",value:[{value:'"circular"'},{value:'"rounded"'},{value:'"square"'}]}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"brand"'},{value:'"danger"'},{value:'"important"'},{value:'"informative"'},{value:'"severe"'},{value:'"subtle"'},{value:'"success"'},{value:'"warning"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extra-large"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"enum",value:[{value:'"WebLight"'},{value:'"WebDark"'},{value:'"TeamsLight"'},{value:'"TeamsDark"'},{value:'"TeamsHighContrast"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["FluentUIBadge/FluentUIBadgeApp.tsx#FluentUIBadgeApp"]={docgenInfo:FluentUIBadgeApp.__docgenInfo,name:"FluentUIBadgeApp",path:"FluentUIBadge/FluentUIBadgeApp.tsx#FluentUIBadgeApp"})}catch(__react_docgen_typescript_loader_error){}},"./stories/BadgeSize.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExtraLarge:()=>ExtraLarge,Large:()=>Large,Medium:()=>Medium,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _FluentUIBadge_FluentUIBadgeApp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./FluentUIBadge/FluentUIBadgeApp.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"FluentUI Badge/Size",component:_FluentUIBadge_FluentUIBadgeApp__WEBPACK_IMPORTED_MODULE_1__.Z},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FluentUIBadge_FluentUIBadgeApp__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Small=Template.bind({});Small.args={input:"small",separator:void 0,appearance:"filled",shape:"circular",color:"brand",size:"small",theme:"WebLight"};const Medium=Template.bind({});Medium.args={input:"medium",separator:void 0,appearance:"filled",shape:"circular",color:"brand",size:"medium",theme:"WebLight"};const Large=Template.bind({});Large.args={input:"large",separator:void 0,appearance:"filled",shape:"circular",color:"brand",size:"large",theme:"WebLight"};const ExtraLarge=Template.bind({});ExtraLarge.args={input:"extra-large",separator:void 0,appearance:"filled",shape:"circular",color:"brand",size:"extra-large",theme:"WebLight"},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"args => <FluentUIBadgeApp {...args} />",...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:"args => <FluentUIBadgeApp {...args} />",...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"args => <FluentUIBadgeApp {...args} />",...Large.parameters?.docs?.source}}},ExtraLarge.parameters={...ExtraLarge.parameters,docs:{...ExtraLarge.parameters?.docs,source:{originalSource:"args => <FluentUIBadgeApp {...args} />",...ExtraLarge.parameters?.docs?.source}}};const __namedExportsOrder=["Small","Medium","Large","ExtraLarge"]}}]);