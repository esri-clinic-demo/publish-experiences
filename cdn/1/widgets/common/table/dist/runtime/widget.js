System.register(["jimu-core","jimu-theme","jimu-arcgis","jimu-ui","jimu-layouts/layout-runtime","jimu-ui/advanced/data-source-selector","jimu-core/data-source"],(function(e,t){var a={},o={},i={},s={},l={},n={},r={};return{setters:[function(e){a.AppMode=e.AppMode,a.BaseVersionManager=e.BaseVersionManager,a.CONSTANTS=e.CONSTANTS,a.ClauseLogic=e.ClauseLogic,a.ClauseOperator=e.ClauseOperator,a.DataRecordsSelectionChangeMessage=e.DataRecordsSelectionChangeMessage,a.DataSourceComponent=e.DataSourceComponent,a.DataSourceManager=e.DataSourceManager,a.DataSourceStatus=e.DataSourceStatus,a.Immutable=e.Immutable,a.MessageManager=e.MessageManager,a.MutableStoreManager=e.MutableStoreManager,a.React=e.React,a.ReactResizeDetector=e.ReactResizeDetector,a.WidgetState=e.WidgetState,a.appActions=e.appActions,a.appConfigUtils=e.appConfigUtils,a.cancelablePromise=e.cancelablePromise,a.classNames=e.classNames,a.css=e.css,a.dataSourceUtils=e.dataSourceUtils,a.esri=e.esri,a.getAppStore=e.getAppStore,a.jsx=e.jsx,a.lodash=e.lodash,a.polished=e.polished,a.privilegeUtils=e.privilegeUtils},function(e){o.Global=e.Global},function(e){i.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){s.AdvancedSelect=e.AdvancedSelect,s.Alert=e.Alert,s.Button=e.Button,s.DataActionDropDown=e.DataActionDropDown,s.Icon=e.Icon,s.Popper=e.Popper,s.Select=e.Select,s.Tab=e.Tab,s.Tabs=e.Tabs,s.TextInput=e.TextInput,s.WidgetPlaceholder=e.WidgetPlaceholder,s.defaultMessages=e.defaultMessages},function(e){l.LayoutItemSizeModes=e.LayoutItemSizeModes},function(e){n.AllDataSourceTypes=e.AllDataSourceTypes},function(e){r.FeatureDataRecordImpl=e.FeatureDataRecordImpl}],execute:function(){e((()=>{var e={47001:e=>{e.exports='<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 1h16a1 1 0 011 1v5H1V2a1 1 0 011-1zm11 7H7v3h6V8zm0 4H7v3h6v-3zm1 3v-3h5v3h-5zm-1 1H7v3h6v-3zm1 3h4a1 1 0 001-1v-2h-5v3zm0-8V8h5v3h-5zM1 8h5v3H1V8zm0 4h5v3H1v-3zm0 4h5v3H2a1 1 0 01-1-1v-2zM0 2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2z" fill="#000"></path></svg>'},63391:e=>{e.exports='<svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M0 0h400v40H0z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M80 55H20v9h60v-9zm100 0h-60v9h60v-9zm40 0h60v9h-60v-9zm160 0h-60v9h60v-9zM20 135h60v9H20v-9zm160 0h-60v9h60v-9zm40 0h60v9h-60v-9zm160 0h-60v9h60v-9zM20 215h60v9H20v-9zm160 0h-60v9h60v-9zm40 0h60v9h-60v-9zm160 0h-60v9h60v-9zM20 295h60v9H20v-9zm160 0h-60v9h60v-9zm40 0h60v9h-60v-9zm160 0h-60v9h60v-9zM20 95h60v9H20v-9zm160 0h-60v9h60v-9zm40 0h60v9h-60v-9zm160 0h-60v9h60v-9zM20 175h60v9H20v-9zm160 0h-60v9h60v-9zm40 0h60v9h-60v-9zm160 0h-60v9h60v-9zM20 255h60v9H20v-9zm160 0h-60v9h60v-9zm40 0h60v9h-60v-9zm160 0h-60v9h60v-9zM20 334h60v9H20v-9zm160 0h-60v9h60v-9zm40 0h60v9h-60v-9zm160 0h-60v9h60v-9zM20 374h60v9H20v-9zm160 0h-60v9h60v-9zm40 0h60v9h-60v-9zm160 0h-60v9h60v-9z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 39h1v40h98V39h1v40h99V39h1v40h99V39h1v40h99V39h1v360h-1v-40h-99v40h99v1H0V39zm1 320v40h98v-40H1zm98-1H1v-39h98v39zm1 1v40h99v-40h-99zm99-1h-99v-39h99v39zm1 1v40h99v-40h-99zm99-1h-99v-39h99v39zm1 0h99v-39h-99v39zM1 318v-38h98v38H1zm99 0v-38h99v38h-99zm0-39h99v-39h-99v39zm100 39v-38h99v38h-99zm0-39h99v-39h-99v39zm100 39v-38h99v38h-99zm0-39h99v-39h-99v39zM1 279h98v-39H1v39zm0-79v39h98v-39H1zm98-1H1v-39h98v39zm1 1v39h99v-39h-99zm99-1h-99v-39h99v39zm1 1v39h99v-39h-99zm99-1h-99v-39h99v39zm1 1v39h99v-39h-99zm99-1h-99v-39h99v39zM1 159v-39h98v39H1zm99 0v-39h99v39h-99zm0-40h99V80h-99v39zm100 40v-39h99v39h-99zm0-40h99V80h-99v39zm100 40v-39h99v39h-99zm0-40h99V80h-99v39zM1 119h98V80H1v39z" fill="#000"></path></svg>'},33869:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.5a.522.522 0 01-.516.527H2.976L6.473 11.6a.535.535 0 010 .746.508.508 0 01-.73 0L1 7.5l4.743-4.846a.508.508 0 01.73 0 .535.535 0 010 .746L2.976 6.973h11.508c.285 0 .516.236.516.527z" fill="#000"></path></svg>'},55339:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.745 8l6.1 6.1a.527.527 0 11-.745.746L8 8.746l-6.1 6.1a.527.527 0 11-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 01.746-.746l6.1 6.1 6.1-6.1a.527.527 0 01.746.746L8.746 8z" fill="#000"></path></svg>'},85226:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0H0v1h16V0z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 11a3 3 0 106 0 3 3 0 00-6 0zm3 2a2 2 0 100-4 2 2 0 000 4z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 6c2.583 0 5.166 1.45 7.75 4.349a.972.972 0 010 1.302C13.166 14.551 10.583 16 8 16S2.834 14.55.25 11.651a.972.972 0 010-1.302C2.834 7.449 5.417 6 8 6zm0 1c-2.237 0-4.558 1.303-6.961 4 2.403 2.697 4.724 4 6.96 4 2.238 0 4.559-1.303 6.962-4C12.558 8.303 10.237 7 8 7z" fill="#000"></path><path d="M0 3h13v1H0V3zM3 6H0v1h3V6z" fill="#000"></path></svg>'},65283:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.438 1C.196 1 0 1.224 0 1.5s.196.5.438.5h15.124c.242 0 .438-.224.438-.5s-.196-.5-.438-.5H.438zM0 7.5c0-.276.196-.5.438-.5h15.124c.242 0 .438.224.438.5s-.196.5-.438.5H.438C.196 8 0 7.776 0 7.5zM0 13.5c0-.276.196-.5.438-.5h15.124c.242 0 .438.224.438.5s-.196.5-.438.5H.438C.196 14 0 13.776 0 13.5z" fill="#000"></path></svg>'},88865:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.986 1a6.992 6.992 0 015.723 2.969l-2.551-.938a.5.5 0 10-.345.938l4.228 1.555.163-.944.013-.005-.009-.019.6-3.471a.5.5 0 10-.985-.17l-.403 2.33A8 8 0 000 7.5c-.016.277.21.501.486.501a.53.53 0 00.517-.5A7 7 0 017.986 1zM8.015 15a6.992 6.992 0 01-5.724-2.969l2.551.938a.497.497 0 00.642-.296.5.5 0 00-.297-.642L.96 10.476l-.163.944-.013.005.009.019-.6 3.471a.5.5 0 10.985.17l.403-2.33A8 8 0 0016 8.5a.477.477 0 00-.485-.501.53.53 0 00-.518.5A7 7 0 018.015 15z" fill="#000"></path></svg>'},30224:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-1.27 4.936a6.5 6.5 0 11.707-.707l4.136 4.137a.5.5 0 11-.707.707l-4.137-4.137z" fill="#000"></path></svg>'},95884:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.88 2.825a.5.5 0 00-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 10-.707.707l1.265 1.265a1 1 0 001.466-.056l2.323-2.71zm0 8a.5.5 0 00-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 10-.707.708l1.265 1.264a1 1 0 001.466-.056l2.323-2.71zM9 4.5a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM8.5 13a.5.5 0 000-1h-8a.5.5 0 000 1h8z" fill="#000"></path></svg>'},87830:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.5a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM16 12.5a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM5.146 2.12a.5.5 0 01.055.705l-2.324 2.71a1 1 0 01-1.466.057L.146 4.327a.5.5 0 01.708-.707l1.264 1.265 2.323-2.71a.5.5 0 01.705-.055zM5.146 10.12a.5.5 0 01.055.705l-2.324 2.71a1 1 0 01-1.466.057L.146 12.328a.5.5 0 11.708-.708l1.264 1.265 2.323-2.71a.5.5 0 01.705-.055z" fill="#000"></path></svg>'},43036:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.366 7.841l-.732-.682-3.125 3.349-1.635-1.84-.748.664 2.365 2.66 3.875-4.15z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3V1.167C4.5.469 5.204 0 6 0h4c.796 0 1.5.47 1.5 1.167V3h4a.5.5 0 010 1H14l-.929 11.077a1 1 0 01-.997.923H3.926a1 1 0 01-.997-.923L2 4H.5a.5.5 0 010-1h4zM3.003 4h9.994l-.923 11H3.926L3.003 4zM10.5 1v2h-5V1c0-.04 5-.04 5 0z" fill="#000"></path></svg>'},73150:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.938 8A7 7 0 011.01 9H0a8.001 8.001 0 0015.938-1A8 8 0 001.02 3.98L1 .702a.5.5 0 10-1 .006L.031 5.9l5.128-.826a.5.5 0 00-.16-.987L1.819 4.6A7 7 0 0114.938 8z" fill="#000"></path></svg>'},5528:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.5 1a.5.5 0 000 1h15a.5.5 0 000-1H.5zM0 7.5A.5.5 0 01.5 7h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zm0 6a.5.5 0 01.5-.5h15a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z" fill="#C5C5C5"></path></svg>'},28732:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 0H0v1h16V0z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 11a3 3 0 106 0 3 3 0 00-6 0zm3 2a2 2 0 100-4 2 2 0 000 4z" fill="#000"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 6c2.583 0 5.166 1.45 7.75 4.349a.972.972 0 010 1.302C13.166 14.551 10.583 16 8 16S2.834 14.55.25 11.651a.972.972 0 010-1.302C2.834 7.449 5.417 6 8 6zm0 1c-2.237 0-4.558 1.303-6.961 4 2.403 2.697 4.724 4 6.96 4 2.238 0 4.559-1.303 6.962-4C12.558 8.303 10.237 7 8 7z" fill="#000"></path><path d="M0 3h13v1H0V3zM3 6H0v1h3V6z" fill="#000"></path></svg>'},22357:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.88 2.825a.5.5 0 00-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 10-.707.707l1.265 1.265a1 1 0 001.466-.056l2.323-2.71zm0 8a.5.5 0 00-.759-.65l-2.323 2.71-1.265-1.265a.5.5 0 10-.707.708l1.265 1.264a1 1 0 001.466-.056l2.323-2.71zM9 4.5a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM8.5 13a.5.5 0 000-1h-8a.5.5 0 000 1h8z" fill="#000"></path></svg>'},53431:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.12a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM16 12.12a.5.5 0 01-.5.5h-8a.5.5 0 010-1h8a.5.5 0 01.5.5zM5.146 2.12a.5.5 0 01.055.705l-2.324 2.71a1 1 0 01-1.466.057L.146 4.327a.5.5 0 01.708-.707l1.264 1.265 2.323-2.71a.5.5 0 01.705-.055zM5.146 10.12a.5.5 0 01.055.705l-2.324 2.71a1 1 0 01-1.466.057L.146 12.328a.5.5 0 11.708-.708l1.264 1.265 2.323-2.71a.5.5 0 01.705-.055z" fill="#C5C5C5"></path></svg>'},34534:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.366 7.841l-.732-.682-3.125 3.349-1.635-1.84-.748.664 2.365 2.66 3.875-4.15z" fill="#C5C5C5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3V1.167C4.5.469 5.204 0 6 0h4c.796 0 1.5.47 1.5 1.167V3h4a.5.5 0 010 1H14l-.929 11.077a1 1 0 01-.997.923H3.926a1 1 0 01-.997-.923L2 4H.5a.5.5 0 010-1h4zM3.003 4h9.994l-.923 11H3.926L3.003 4zM10.5 1v2h-5V1c0-.04 5-.04 5 0z" fill="#C5C5C5"></path></svg>'},26826:e=>{"use strict";e.exports=i},48891:e=>{"use strict";e.exports=a},11840:e=>{"use strict";e.exports=r},74758:e=>{"use strict";e.exports=l},34796:e=>{"use strict";e.exports=o},30726:e=>{"use strict";e.exports=s},338:e=>{"use strict";e.exports=n}},t={};function d(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,d),i.exports}d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var a in t)d.o(t,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var c={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(c),d.d(c,{default:()=>he});var e,t,a=d(48891),o=d(34796);!function(e){e.Dropdown="DROPDOWN",e.Tabs="TABS"}(e||(e={})),function(e){e.Single="SINGLE",e.Multiple="MULTIPLE"}(t||(t={}));var i=d(26826);const s={_widgetLabel:"Table",_widgetDescription:"This is an interactive table widget",showAllRecords:"Show all records",refresh:"Refresh",showHideCols:"Show/hide columns",toggleSelect:"Show selection/all",_action_viewInTable_label:"View in table",tableDataActionLable:"{layer} table selection"};var l=d(30726);class n extends a.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.6.0",description:"Add editable to table fields.",upgrader:(e,t)=>{let a=e;return 0===a.layersConfig.length||a.layersConfig.forEach(((e,t)=>{const o=e.tableFields.map((e=>Object.assign(Object.assign({},e),{editAuthority:!0})));a=a.setIn(["layersConfig",t,"tableFields"],o)})),a}}]}}const r=new n;var u=d(74758);function h(e,t,o){var i,s,l,n,r,d;const{id:c,enableDataAction:u,isHeightAuto:h,isWidthAuto:v}=o,p=null===(s=null===(i=(0,a.getAppStore)().getState())||void 0===i?void 0:i.appConfig)||void 0===s?void 0:s.theme,g="themes/morandi/"===p,m="themes/ink/"===p;return a.css`
    ${"&.table-widget-"+c} {
      .table-indent{
        width: calc(100% - 32px);
        height: calc(100% - 26px);
        margin: 10px 16px 16px;
        ${h&&"min-height: 240px;"};
        ${v&&"min-width: 360px;"};
        .horizontal-action-dropdown{
          position: absolute;
          right: 17px;
          top: 55px;
          padding-left: 8px;
          border-left: 1px solid ${e.colors.palette.light[200]};
          button{
            width: 32px;
            height: 32px;
          }
        }
        .tool-dividing-line{
          height: 16px;
          width: 1px;
          display: inline-flex;
          background-color: ${e.colors.palette.light[400]};
          margin: 8px 4px;
        }
        .data-action-btn{
          position: relative;
          // top: 1px;
        }
      }
      .tab-flex{
        width: 100%;
      }
      .top-drop{
        width: 30%;
        min-width: 150px;
        button{
          line-height: 1.5;
        }
      }
      .nav-underline{
        height: 32px;
        border-bottom: 1px solid ${e.colors.palette.light[300]};
        .nav-item{
          ${(g||m)&&"height: 30px;"}
        }
      }
      .nav-item + .nav-item{
        margin-left: 0;
      }
      .csv-dropdown-con{
        button{
          border-radius: 13px;
        }
      }
      .vertical-tag-list{
        width: 20%;
        display: inline-block;
        .tagBtn{
          width: 100%;
        }
      }
      .horizontal-tag-list{
        .tagBtn{
          width: 150px;
        }
        .tab-content{
          height: 8px;
        }
      }
      .vertical-tag-list,
      .horizontal-tag-list{
        margin-bottom: 4px;
        .activeBtn{
          color: #fff;
          background-color: #076fe5;
        }
      }
      .dropdown-tag-list{
        height: 40px;
        margin-bottom: 4px;
        .dropdown-button{
          height: 30px;
        }
      }
      .vertical-render-con{
        width: 80%;
        position: absolute;
        left: 20%;
        height: 100%;
        top: 0;
      }
      .dropdown-render-con,
      .horizontal-render-con{
        width: 100%;
        height: 100%;
      }
      .top-button-list{
        margin: 8px 0;
        position: absolute;
        right: 17px;
        top: 47px;
        ${t?"display: none":"display: flex"};
        .top-button{
          display: inline-flex;
          button{
            width: 32px;
            height: 32px;
          }
        }
      }
      .table-search-div{
        position: absolute;
        left: 18px;
        .table-search{
          .search-icon{
            z-index: 2;
          }
          .search-input{
            border: 1px solid ${e.colors.palette.light[400]};
            border-radius: 2px;
            .input-wrapper{
              height: 30px;
              border: none;
            }
          }
        }
      }
      .table-con{
        width: 100%;
        height: calc(100% - 46px);
        .esri-feature-table__loader-container{
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -16px;
          margin-top: -20px;
          z-index: 2;
        }
        .esri-feature-table__title{
          display: none
        }
        .esri-feature-table__menu{
          position: absolute;
          right: ${u?"60px":"11px"};
          top: 51px;
          ${!t&&"display: none"};
          .esri-button-menu{
            button{
              :hover{
                background-color: ${e.darkTheme?g?e.colors.palette.light[800]:e.colors.palette.light[600]:e.colors.palette.light[100]};
              }
              background-color: ${e.darkTheme?e.colors.palette.light[500]:e.colors.white};
              color: ${e.colors.black};
              border-radius: ${g?"50%":"2px"};
              border: 1px solid ${e.darkTheme?e.colors.palette.light[500]:e.colors.palette.light[400]};
            }
          }
        }
        .esri-column__sorter{
          overflow-x: hidden;
        }
      }
      .adv-select-con{
        width: 200px;
        visibility: hidden;
        position: absolute;
        right: 17px;
        top: 56px;
      }
      .placeholder-table-con{
        height: calc(100% - 85px);
        width: 100%;
        position: relative;
        top: 40px;
        .jimu-widget-placeholder{
          width: 100%;
        }
        .placeholder-alert-con{
          position: absolute;
          right: 10px;
          bottom: 10px;
        }
      }
      .placeholder-reset-con{
        height: calc(100% - 114px);
        width: calc(100% - 32px);
        position: absolute;
        top: 95px;
        z-index: 1001;
        .placeholder-reset-button{
          position: absolute;
          top: calc(50% + 42px);
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      }
      .ds-container{
        position: absolute;
        display: none;
      }
      .dropdown-button-content{
        .table-action-option-close{
          display: none;
        }
      }
      .refresh-loading-con {
        right: 0;
        bottom: 1px;
        height: ${a.polished.rem(24)};
        .auto-refresh-loading {
          background: ${a.polished.rgba(null===(r=null===(n=null===(l=e.colors)||void 0===l?void 0:l.palette)||void 0===n?void 0:n.dark)||void 0===r?void 0:r[100],.2)};
          color: ${null===(d=e.colors)||void 0===d?void 0:d.black};
          font-size: ${a.polished.rem(12)};
          line-height: ${a.polished.rem(24)};
          padding: 0 ${a.polished.rem(7)};
        }
      }
    }
  `}var v=d(87830),p=d.n(v),g=d(95884),m=d.n(g),b=d(65283),f=d.n(b),S=d(43036),y=d.n(S),w=d(88865),x=d.n(w),T=d(85226),C=d.n(T),I=d(53431),j=d.n(I),z=d(22357),O=d.n(z),M=d(5528),A=d.n(M),D=d(34534),N=d.n(D),R=d(73150),P=d.n(R),L=d(28732),F=d.n(L),E=function(e,t,a,o){return new(a||(a=Promise))((function(i,s){function l(e){try{r(o.next(e))}catch(e){s(e)}}function n(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,n)}r((o=o.apply(e,t||[])).next())}))};function H(e,t){if(!t)return e;const a=new RegExp(`(${t})`,"gi");return e.replace(a,"<strong >$1</strong>")}function k(e,t,a){const o=a||"jimuName",i=e.length>t.length,s=i?t:e;return(i?e:t).filter((e=>!s.some((t=>(null==t?void 0:t[o])===(null==e?void 0:e[o])))))}function V(e,t,o){const i=t.searchFields.split(","),s=t.searchExact?a.ClauseOperator.StringOperatorIs:a.ClauseOperator.StringOperatorContains;if(t.searchFields){const t=i.map((t=>a.dataSourceUtils.createSQLClause(t,s,e))),l=a.dataSourceUtils.createSQLExpression(a.ClauseLogic.Or,t);return a.dataSourceUtils.getArcGISSQL(l,o)}}function B(e,t){const o=null==e?void 0:e.darkTheme,i=o?t?O():j():t?m():p();return a.css`
    .widget-table-tool-icon-show-selection{
      background: url('data:image/svg+xml;utf8,${encodeURIComponent(i)}') no-repeat center;
      background-size: 100%;
      width: 16px;
      height: 16px;
    }
    .widget-table-tool-icon-show-all{
      background: url('data:image/svg+xml;utf8,${encodeURIComponent(o?A():f())}') no-repeat center;
      background-size: 100%;
      width: 16px;
      height: 16px;
    }
    .widget-table-tool-icon-selection-clear{
      background: url('data:image/svg+xml;utf8,${encodeURIComponent(o?N():y())}') no-repeat center;
      background-size: 100%;
      width: 16px;
      height: 16px;
    }
    .widget-table-tool-icon-refresh{
      background: url('data:image/svg+xml;utf8,${encodeURIComponent(o?P():x())}') no-repeat center;
      background-size: 100%;
      width: 16px;
      height: 16px;
    }
    .widget-table-tool-icon-show-hide-cols{
      background: url('data:image/svg+xml;utf8,${encodeURIComponent(o?F():C())}') no-repeat center;
      background-size: 100%;
      width: 16px;
      height: 16px;
    }
    .esri-button-menu__item .esri-button-menu__item-label{
      padding: 4px 15px !important;
    }
    .table-popup-search{
      .search-icon{
        z-index: 2;
      }
      .popup-search-input{
        border: 1px solid ${e.colors.palette.light[400]};
        border-radius: 2px;
        .input-wrapper{
          height: 30px;
          border: none;
        }
      }
    }
    .table-action-option{
      width: 100%;
      display: inline-flex;
      flex-direction: row;
      .table-action-option-tab{
        margin: auto 8px;
      }
      .table-action-option-close{
        flex: 1;
        button{
          :hover {
            color: ${e.colors.white};
          }
          float: right;
        }
      }
    }
    .esri-popover--open{
      z-index: 1005 !important;
      .esri-date-picker__calendar{
        background-color: ${e.colors.white};
      }
    }
    .jimu-dropdown-menu{
      z-index: 1006 !important;
    }
  `}var _=d(338),$=d(30224),Q=d.n($);const U=e=>{const{className:t}=e,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a}(e,["className"]),i=(0,a.classNames)("jimu-icon-component",t);return a.React.createElement(l.Icon,Object.assign({className:i,icon:Q()},o))};var W=d(33869),q=d.n(W);const G=e=>{const{className:t}=e,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a}(e,["className"]),i=(0,a.classNames)("jimu-icon-component",t);return a.React.createElement(l.Icon,Object.assign({className:i,icon:q()},o))};var J=d(55339),K=d.n(J);const X=e=>{const{className:t}=e,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a}(e,["className"]),i=(0,a.classNames)("jimu-icon-component",t);return a.React.createElement(l.Icon,Object.assign({className:i,icon:K()},o))};const Y=e=>{const{className:t}=e,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a}(e,["className"]),i=(0,a.classNames)("jimu-icon-component",t);return a.React.createElement(l.Icon,Object.assign({className:i,icon:f()},o))};const Z=e=>{const{className:t}=e,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a}(e,["className"]),i=(0,a.classNames)("jimu-icon-component",t);return a.React.createElement(l.Icon,Object.assign({className:i,icon:y()},o))};const ee=e=>{const{className:t}=e,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a}(e,["className"]),i=(0,a.classNames)("jimu-icon-component",t);return a.React.createElement(l.Icon,Object.assign({className:i,icon:x()},o))};const te=e=>{const{className:t}=e,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a}(e,["className"]),i=(0,a.classNames)("jimu-icon-component",t);return a.React.createElement(l.Icon,Object.assign({className:i,icon:C()},o))};const ae=e=>{const{className:t}=e,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a}(e,["className"]),i=(0,a.classNames)("jimu-icon-component",t);return a.React.createElement(l.Icon,Object.assign({className:i,icon:p()},o))};const oe=e=>{const{className:t}=e,o=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(a[o[i]]=e[o[i]])}return a}(e,["className"]),i=(0,a.classNames)("jimu-icon-component",t);return a.React.createElement(l.Icon,Object.assign({className:i,icon:m()},o))};var ie=d(11840),se=function(e,t,a,o){return new(a||(a=Promise))((function(i,s){function l(e){try{r(o.next(e))}catch(e){s(e)}}function n(e){try{r(o.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,n)}r((o=o.apply(e,t||[])).next())}))};const{BREAK_POINTS:le,SELECTION_DATA_VIEW_ID:ne,DATA_VIEW_ID_FOR_NO_SELECTION:re}=a.CONSTANTS,de=d(63391),ce=[a.DataSourceStatus.NotReady,a.DataSourceStatus.LoadError],ue=new(0,a.esri.Sanitizer);class he extends a.React.PureComponent{constructor(e){super(e),this.promises=[],this.FeatureTable=null,this.FeatureLayer=null,this.getFieldsFromDatasource=()=>{var e;const{config:t}=this.props,{layersConfig:a}=t,{activeTabId:o}=this.state,i=this.getDataActionTable(),s=a.asMutable({deep:!0}).concat(i).find((e=>e.id===o)),l=this.dsManager.getDataSource(null===(e=s.useDataSource)||void 0===e?void 0:e.dataSourceId),n=null==l?void 0:l.getSchema(),r=(null==n?void 0:n.fields)?Object.values(null==n?void 0:n.fields):[],d=["CreationDate","Creator","EditDate","Editor","GlobalID"];let c=r.filter((e=>!d.includes(e.jimuName)));return(null==c?void 0:c.length)>50&&(c=c.slice(0,50)),{allFields:r,tableFields:c}},this.onToolStyleChange=(e,t)=>{e<le[0]?this.setState({mobileFlag:!0}):this.setState({mobileFlag:!1}),e<300?this.setState({searchToolFlag:!0}):this.setState({searchToolFlag:!1})},this.onDataSourceCreated=e=>{this.setState({dataSource:e});const t=(null==e?void 0:e.dataViewId)===ne,a=!!e.getMainDataSource().getDataView(re);t&&a&&this.destoryTable().then((()=>{this.createTable(e)}))},this.updateGeometryAndSql=e=>{var t;if(!(null===(t=this.table)||void 0===t?void 0:t.layer))return;const o=null==e?void 0:e.getCurrentQueryParams();this.table.layer.definitionExpression!==(null==o?void 0:o.where)&&(this.table.layer.definitionExpression=null==o?void 0:o.where),a.dataSourceUtils.changeJimuFeatureLayerQueryToJSAPILayerQuery(e,(0,a.Immutable)(o)).then((e=>{var t,o,i;if(!(null==e?void 0:e.geometry))return;const s=e.geometry,l=null===(t=s)||void 0===t?void 0:t.toJSON(),n=null===(i=null===(o=this.table)||void 0===o?void 0:o.filterGeometry)||void 0===i?void 0:i.toJSON();a.lodash.isDeepEqual(n,l)||(this.table.filterGeometry=s)})),setTimeout((()=>{this.asyncSelectedRebuild(e)}),500)},this.onDataSourceInfoChange=(e,t)=>{var o,i,s,l;if(!e)return void this.destoryTable().then((()=>{this.setState({emptyTable:!0})}));this.dataSourceChange=!0,(null==e?void 0:e.status)===a.DataSourceStatus.Loaded&&(null==t?void 0:t.status)===a.DataSourceStatus.Loaded&&(this.dataSourceChange=!1);let{dataSource:n}=this.state;const{selectQueryFlag:r,activeTabId:d,selfDsChange:c}=this.state,{config:u}=this.props,{layersConfig:h}=u,v=this.getDataActionTable(),p=h.asMutable({deep:!0}).concat(v).find((e=>e.id===d)),g=null==p?void 0:p.useDataSource;if(!n&&g||(null==n?void 0:n.id)!==(null==g?void 0:g.dataSourceId)){if(n=this.dsManager.getDataSource(null==g?void 0:g.dataSourceId),!n)return void this.setState({emptyTable:!0})}else if(!n&&!g)return;if(!(null==e?void 0:e.status)||(null==e?void 0:e.status)===a.DataSourceStatus.NotReady)return void this.destoryTable().then((()=>{this.setState({notReady:!0,emptyTable:!0})}));this.setState({notReady:!1,emptyTable:!1});const m=this.getLoadingStatus(n,null==e?void 0:e.status),b=(null==n?void 0:n.getAutoRefreshInterval())||0;this.toggleAutoRefreshLoading(n,m,b),this.setState({showLoading:m,interval:b});const f=n&&n.getCurrentQueryParams();!p.dataActionObject&&(null==e?void 0:e.widgetQueries)!==(null==t?void 0:t.widgetQueries)&&this.updateGeometryAndSql(n);const S=null==t?void 0:t.selectedIds,y=null==e?void 0:e.selectedIds,w=null==t?void 0:t.sourceVersion,x=null==e?void 0:e.sourceVersion,T=null==e?void 0:e.gdbVersion,C=null==t?void 0:t.gdbVersion,I=(null===(o=null==p?void 0:p.useDataSource)||void 0===o?void 0:o.dataSourceId)===(null==n?void 0:n.id)&&(null==t?void 0:t.status)===(null==e?void 0:e.status)&&(null==t?void 0:t.instanceStatus)===(null==e?void 0:e.instanceStatus)&&(null==e?void 0:e.widgetQueries)===(null==t?void 0:t.widgetQueries)&&S===y&&w===x&&T===C;if(ce.includes(null==e?void 0:e.status)||this.updatingTable||I)return;if(this.setState({selectRecords:null==n?void 0:n.getSelectedRecords()}),C&&T&&T!==C&&this.table)return this.updatingTable=!0,void this.destoryTable().then((()=>{this.createTable(n,!0)}));const j=(null===(i=null==p?void 0:p.useDataSource)||void 0===i?void 0:i.dataSourceId)!==(null==n?void 0:n.id),z=(!(null==t?void 0:t.status)||ce.includes(null==t?void 0:t.status))&&e&&!ce.includes(null==e?void 0:e.status),O=S!==y&&(0!==(null==S?void 0:S.length)||0!==(null==y?void 0:y.length)),M=(null==e?void 0:e.status)===(null==t?void 0:t.status)&&(null==e?void 0:e.instanceStatus)===(null==t?void 0:t.instanceStatus),A=null===(s=null==n?void 0:n.getDataSourceJson())||void 0===s?void 0:s.isOutputFromWidget,D=!(p.dataActionObject||(null==e?void 0:e.status)!==a.DataSourceStatus.Unloaded||(null==e?void 0:e.instanceStatus)!==a.DataSourceStatus.Created||O||M||A);if(z||j||D||w!==x){if(null==p?void 0:p.dataActionObject)return;if(!this.dataActionCanLoad)return;return this.updatingTable=!0,void this.destoryTable().then((()=>{this.createTable(n)}))}p.dataActionObject||S===y||(r?(this.asyncSelectedWhenSelection(y||(0,a.Immutable)([])),setTimeout((()=>{this.asyncSelectedRebuild(n)}),500)):c?this.setState({selfDsChange:!1}):setTimeout((()=>{this.asyncSelectedRebuild(n)}),500)),!p.dataActionObject&&(null===(l=this.table)||void 0===l?void 0:l.layer)&&S===y&&(this.table.layer.definitionExpression=f.where)},this.onQueryRequired=e=>{var t;const{dataSource:a}=this.state,o=null==a?void 0:a.id;(null===(t=null==e?void 0:e[o])||void 0===t?void 0:t.needRefresh)&&(this.updatingTable=!0,this.destoryTable().then((()=>{this.createTable(a)})))},this.getLayerObjectIdField=()=>{var e,t,a,o;const{dataSource:i}=this.state;return(null===(t=null===(e=this.table)||void 0===e?void 0:e.layer)||void 0===t?void 0:t.objectIdField)||(null===(o=null===(a=i)||void 0===a?void 0:a.layer)||void 0===o?void 0:o.objectIdField)||"OBJECTID"},this.asyncSelectedWhenSelection=e=>{const{dataSource:t}=this.state,a=this.getLayerObjectIdField(),o=t&&t.getCurrentQueryParams();let i=!0;e.forEach((e=>{e||(i=!1)}));const s=e.length>0&&i?`${a} IN (${e.map((e=>e)).join()})`:o.where;0===e.length&&this.setState({selectQueryFlag:!1}),this.table&&this.table.layer&&(this.table.layer.definitionExpression=s)},this.getFeatureLayer=(e,t)=>{var o,i,s,l;const{id:n}=this.props,r=e,d=null===(o=null==e?void 0:e.getDataSourceJson())||void 0===o?void 0:o.isDataInDataSourceInstance;let c;if((null==t?void 0:t.length)>0)return a.dataSourceUtils.createFeatureLayerByRecords(r,t);{const t=e&&e.getCurrentQueryParams();if(d){const e={returnGeometry:!0};return r.dataViewId!==a.CONSTANTS.SELECTION_DATA_VIEW_ID||r.sourceRecords&&0!==r.sourceRecords.length||r.getMainDataSource().getDataView(a.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION)&&(e.pageSize=null===(l=null===(s=null===(i=r.getMainDataSource().getDataSourceJson())||void 0===i?void 0:i.dataViews)||void 0===s?void 0:s[a.CONSTANTS.DATA_VIEW_ID_FOR_NO_SELECTION])||void 0===l?void 0:l.pageSize),r.load(e,{widgetId:n}).then((e=>se(this,void 0,void 0,(function*(){const t=yield Promise.resolve(e);return a.dataSourceUtils.createFeatureLayerByRecords(r,t)}))))}if(!this.FeatureLayer)return Promise.resolve(c);if(r.itemId){const e=parseInt(r.layerId),a={portalItem:{id:r.itemId,portal:{url:r.portalUrl}},definitionExpression:t.where,layerId:e||void 0};r.url&&(a.url=r.url),c=new this.FeatureLayer(a)}else{if(!r.url)return r.layer?r.load({returnGeometry:!0},{widgetId:n}).then((e=>se(this,void 0,void 0,(function*(){const t=yield Promise.resolve(e);return a.dataSourceUtils.createFeatureLayerByRecords(r,t)})))):Promise.resolve(c);c=new this.FeatureLayer({definitionExpression:t.where,url:r.url})}}return d?Promise.resolve(c):c.load().then((()=>se(this,void 0,void 0,(function*(){return yield Promise.resolve(c)}))))},this.getFieldEditable=(e,t)=>{const a=((null==e?void 0:e.fields)||[]).find((e=>e.name===t));return!a||(null==a?void 0:a.editable)},this.dsAsyncSelectTable=(e,t,o,i)=>{const{id:s}=this.props,l=this.table,n=this.getLayerObjectIdField(),r=t&&t.length>0?`${n} IN (${t.map((e=>e.dataSource?e.getId():e.objectId)).join()})`:"1=2";i&&e.clearSelection(),e.query({where:r,returnGeometry:!0}).then((t=>{const i=null==t?void 0:t.records;i&&(a.MessageManager.getInstance().publishMessage(new a.DataRecordsSelectionChangeMessage(s,t.records)),l.layer.queryFeatureCount().then((e=>{0===e?this.setState({emptyData:!0}):this.setState({emptyData:!1})})),i.length>0?e.selectRecordsByIds(i.map((e=>e.getId())),i):e.clearSelection(),o||setTimeout((()=>{this.asyncSelectedRebuild(e)}),500))}))},this.getTableMenuItem=e=>{let t=[];return e.enableSelect&&(t=t.concat([{label:this.formatMessage("showSelection"),iconClass:"widget-table-tool-icon-show-selection",clickFunction:()=>{this.onShowSelection()}},{label:this.formatMessage("clearSelection"),iconClass:"widget-table-tool-icon-selection-clear",clickFunction:()=>{this.onSelectionClear()}}])),e.enableRefresh&&t.push({label:this.formatMessage("refresh"),iconClass:"widget-table-tool-icon-refresh",clickFunction:()=>{this.onTableRefresh()}}),t.push({label:this.formatMessage("showHideCols"),iconClass:"widget-table-tool-icon-show-hide-cols",clickFunction:()=>{this.popupShowHideCols()}}),t},this.createTable=(e,o)=>{var i,s,l;const{config:n,id:r}=this.props,{layersConfig:d}=n,{activeTabId:c}=this.state;let{dataSource:u}=this.state;if(!u&&e&&(u=e),!u)return void(this.updatingTable=!1);const h=null===(i=u)||void 0===i?void 0:i.getLayerDefinition();if((null==u?void 0:u.dataViewId)===ne){if(!(null===(s=null==u?void 0:u.getDataSourceJson())||void 0===s?void 0:s.isDataInDataSourceInstance)||0===(null==u?void 0:u.getSourceRecords().length))return this.setState({emptyTable:!0}),this.dataSourceChange=!1,this.dataActionCanLoad=!0,void(this.updatingTable=!1);this.setState({emptyTable:!1})}const v=this.getDataActionTable(),p=d.asMutable({deep:!0}).concat(v).find((e=>e.id===c));if(!p)return;let g;0===document.getElementsByClassName(`table-container-${r}`).length?(g=document&&document.createElement("div"),g.className=`table-container-${r}`,this.refs.tableContainer&&this.refs.tableContainer.appendChild(g)):g=document.getElementsByClassName(`table-container-${r}`)[0];const{allFields:m}=this.getFieldsFromDatasource(),b=k(m,p.tableFields).map((e=>e.jimuName)),f=p.dataActionObject,S=this.dataActionTableRecords[p.id];if(f){const e=null===(l=p.useDataSource)||void 0===l?void 0:l.dataSourceId;e&&(u=this.dsManager.getDataSource(e))}(()=>{const e=this.currentRequestId+1;this.currentRequestId++;const i=(null==u?void 0:u.type)===_.AllDataSourceTypes.SceneLayer?u.getAssociatedDataSource():u;if(i){const s=a.cancelablePromise.cancelable(this.getFeatureLayer(i,S).then((s=>se(this,void 0,void 0,(function*(){var l,n;if(e!==this.currentRequestId)return;if(!s)return;if(!this.FeatureTable)return;let r;if(r=s.layer?s.layer:s,!this.refs.currentEl)return;const d=yield this.getDsAccessibleInfo(null==s?void 0:s.url),c=yield a.privilegeUtils.checkExbAccess(a.privilegeUtils.CheckTarget.Experience).then((e=>{var t;return p.enableEdit&&(null===(t=null==e?void 0:e.capabilities)||void 0===t?void 0:t.canEditFeature)})),v=p.enableEdit&&(d||c),m=null===(l=i)||void 0===l?void 0:l.getSchema(),y=p.tableFields.map((e=>{var t;const a=null===(t=null==m?void 0:m.fields)||void 0===t?void 0:t[e.jimuName];return Object.assign(Object.assign({name:e.jimuName,label:null==a?void 0:a.alias},v?{editable:this.getFieldEditable(h,e.jimuName)&&(null==e?void 0:e.editAuthority)}:{}),{visible:b.indexOf(e.jimuName)<0})}));if(0===(null==y?void 0:y.length))return this.dataSourceChange=!1,this.dataActionCanLoad=!0,this.updatingTable=!1,void this.setState({emptyTable:!1});v&&r.on("edits",(function(e){var t,a;const{addedFeatures:o,updatedFeatures:i,deletedFeatures:s}=e,l=o&&o.length>0,n=i&&i.length>0,r=s&&s.length>0;if(l||n||r){const o=null===(a=null===(t=null==e?void 0:e.edits)||void 0===t?void 0:t.updateFeatures)||void 0===a?void 0:a[0];if(o){const e=new ie.FeatureDataRecordImpl(o,u);u.afterUpdateRecord(e)}}}));const w=u.getGDBVersion();w&&(r.gdbVersion=w),this.table=new this.FeatureTable({layer:r,container:g,visibleElements:{header:!0,menu:!0,menuItems:{clearSelection:!1,refreshData:!1,toggleColumns:!1}},menuConfig:{items:this.getTableMenuItem(p)},fieldConfigs:y,attachmentsEnabled:p.enableAttachements,editingEnabled:v}),o?(()=>{const e=u.getSelectedRecords();this.dsAsyncSelectTable(u,e,!1,!0)})():f||setTimeout((()=>{this.asyncSelectedRebuild(u)}),500);const x=this.table;if(x.grid.visibleElements.selectionColumn=!1,p.enableSelect){const e=({context:e,native:a})=>{var o,i,s,l;const n=(null===(i=null===(o=null==a?void 0:a.path)||void 0===o?void 0:o[0])||void 0===i?void 0:i.nodeName)||(null===(l=null===(s=null==a?void 0:a.path)||void 0===s?void 0:s[0])||void 0===l?void 0:l.tagName);"INPUT"!==n&&"SELECT"!==n&&(clearTimeout(this.timerFn),this.timerFn=setTimeout((()=>{var a,o;this.setState({selfDsChange:!0});const i=e.item.feature;p.selectMode===t.Single&&this.table.clearSelection(),e.selected?this.table.deselectRows(i):this.table.selectRows(i);const s=null===(o=null===(a=x.grid)||void 0===a?void 0:a.selectedItems)||void 0===o?void 0:o.toArray();this.dsAsyncSelectTable(u,s,!0)}),200))};x.grid.on("row-click",e)}null===(n=null==x?void 0:x.domNode)||void 0===n||n.addEventListener("dblclick",(e=>{clearTimeout(this.timerFn)})),S||this.updateGeometryAndSql(u),this.dataSourceChange=!1,this.dataActionCanLoad=!0,this.updatingTable=!1,this.setState({emptyTable:!1})})))));0!==this.promises.length&&this.promises.forEach((e=>e.cancel())),this.promises.push(s)}})()},this.asyncSelectedRebuild=e=>{var t,a;const o=null==e?void 0:e.getSelectedRecordIds();if((null===(t=this.table)||void 0===t?void 0:t.clearSelection)&&this.table.clearSelection(),(null==o?void 0:o.length)>0){const e=[];o.forEach((t=>{t&&e.push(parseInt(t))})),(null===(a=this.table)||void 0===a?void 0:a.selectRows)&&this.table.selectRows(e)}},this.formatMessage=(e,t)=>{const a=Object.assign({},s,l.defaultMessages);return this.props.intl.formatMessage({id:e,defaultMessage:a[e]},t)},this.onTagClick=e=>{const{id:t}=this.props;this.setState({activeTabId:e,selectQueryFlag:!1,tableShowColumns:void 0}),this.props.dispatch(a.appActions.widgetStatePropChange(t,"activeTabId",e))},this.handleTagChange=e=>{var t;const o=null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.value,{id:i}=this.props;this.setState({activeTabId:o,selectQueryFlag:!1}),this.props.dispatch(a.appActions.widgetStatePropChange(i,"activeTabId",o))},this.onShowSelection=()=>{const{dataSource:e,selectQueryFlag:t}=this.state;if(t){const t=e&&e.getCurrentQueryParams();this.table.layer.definitionExpression=t.where,this.changeMenuConfig("showSelection")}else{const e=this.table.grid.selectedItems.items;if(0===e.length)return;const t=this.getLayerObjectIdField(),a=`${t} IN (${e.map((e=>{var a;return(null===(a=e.feature)||void 0===a?void 0:a.attributes[t])||e.objectId})).join()})`;this.table.layer.definitionExpression=a,this.changeMenuConfig("showAll")}setTimeout((()=>{this.asyncSelectedRebuild(e)}),500),this.setState({selectQueryFlag:!t})},this.resetTable=()=>{var e;const{id:t}=this.props,{selectQueryFlag:o,dataSource:i}=this.state;if(o){if(this.changeMenuConfig("showSelection"),null===(e=this.table)||void 0===e?void 0:e.layer){const e=i&&i.getCurrentQueryParams();this.table.layer.definitionExpression=e.where}this.setState({selectQueryFlag:!1,selfDsChange:!0})}this.setState({searchText:""}),this.table&&this.table.clearSelection(),i.clearSelection(),i.updateQueryParams({where:"1=1"},t),a.MessageManager.getInstance().publishMessage(new a.DataRecordsSelectionChangeMessage(t,[]))},this.onSelectionClear=()=>{this.resetTable()},this.onTableRefresh=()=>{const{dataSource:e}=this.state;this.table&&this.table.refresh(),setTimeout((()=>{this.asyncSelectedRebuild(e)}),0)},this.changeMenuConfig=e=>{var t;const a=(null===(t=this.table.menuConfig)||void 0===t?void 0:t.items)||[];a.length>0&&(a[0].label=this.formatMessage(e),a[0].iconClass={showSelection:"widget-table-tool-icon-show-selection",showAll:"widget-table-tool-icon-show-all"}[e]),this.table.menuConfig={items:a}},this.popupShowHideCols=()=>{const e=this.refs.advancedSelect.getElementsByTagName("button")[0];e&&e.click()},this.getQueryOptions=e=>{var t;let a="1=1";const{useDataSources:o}=this.props,{searchText:i,dataSource:s}=this.state,l=o&&o[0];return s&&l&&s.query?(i&&e.enableSearch&&e.searchFields&&(a=(a||"1=1")+" AND ",a+=null===(t=V(i,e,s))||void 0===t?void 0:t.sql),{where:a}):null},this.handleChange=e=>{e?this.setState({searchText:e,isShowSuggestion:(null==e?void 0:e.length)>2},(()=>{clearTimeout(this.suggestionsQueryTimeout),this.suggestionsQueryTimeout=setTimeout((()=>{this.getSearchSuggestions(e)}),200)})):this.setState({searchText:e},(()=>{this.handleSubmit()}))},this.getSearchSuggestions=e=>{var t;const{config:a}=this.props,{dataSource:o,activeTabId:i}=this.state;if((null==e?void 0:e.length)<3)return!1;(function(e,t,a){var o;return E(this,void 0,void 0,(function*(){let i={page:1,pageSize:10};const s=t.searchFields.split(",");if(t.enableSearch&&t.searchFields){const s=null===(o=V(e,t,a))||void 0===o?void 0:o.sql;i.where=s;const l=a.getCurrentQueryParams();i=a.mergeQueryParams(i,l)}const l=new RegExp(`(${e})`,"gi");return function(e,t){return E(this,void 0,void 0,(function*(){return t?yield t.query(e).then((e=>E(this,void 0,void 0,(function*(){return yield function(e,t){return E(this,void 0,void 0,(function*(){return yield Promise.resolve((null==t?void 0:t.records)||[])}))}(0,e)})))):yield Promise.resolve([])}))}(i,a).then((t=>E(this,void 0,void 0,(function*(){let a=[];return s.forEach((o=>{t.forEach((t=>{var i;const s=null===(i=null==t?void 0:t.feature)||void 0===i?void 0:i.attributes[o];if(s&&!a.includes(s)&&s.match(l)){const t={suggestionHtml:H(s,e),suggestion:s};a.push(t)}}))})),a=function(e,t){const a=e[0]?[e[0]]:[];for(let o=1;o<e.length;o++){const i=e[o];let s=!1;for(let e=0;e<a.length;e++)if(i[t]===a[e][t]){s=!0;break}s||a.push(i)}return a}(a,"suggestion"),Promise.resolve(a)}))))}))})(e,null===(t=a.layersConfig)||void 0===t?void 0:t.find((e=>e.id===i)),o).then((e=>{this.setState({searchSuggestion:e})}))},this.handleSubmit=()=>{const{dataSource:e}=this.state,{id:t}=this.props,a=this.props.config.layersConfig.find((e=>e.id===this.state.activeTabId)),o=this.getQueryOptions(a);e.updateQueryParams(o,t)},this.onKeyUp=e=>{e&&e.target&&"Enter"===e.key&&this.handleSubmit()},this.getTextInputPrefixElement=()=>{const{theme:e}=this.props;return(0,a.jsx)(l.Button,{type:"tertiary",icon:!0,size:"sm",onClick:e=>this.handleSubmit(),className:"search-icon"},(0,a.jsx)(U,{color:e.colors.palette.light[800]}))},this.renderSearchTools=()=>{const{searchText:e,searchToolFlag:t,isOpenSearchPopper:o}=this.state,{theme:i}=this.props;return(0,a.jsx)("div",{className:"table-search-div"},t?(0,a.jsx)("div",{className:"float-right",ref:e=>this.refs.searchPopup=e},(0,a.jsx)(l.Button,{type:"tertiary",icon:!0,size:"sm",className:"tools-menu",title:this.formatMessage("search"),onClick:e=>{this.setState({isOpenSearchPopper:!o})}},(0,a.jsx)(U,null)),(0,a.jsx)(l.Popper,{placement:"right-start",reference:this.refs.searchPopup,offset:[-10,-30],open:o,showArrow:!1,toggle:e=>{this.setState({isOpenSearchPopper:!o})}},(0,a.jsx)("div",{className:"d-flex align-items-center table-popup-search m-2"},(0,a.jsx)(l.Button,{type:"tertiary",icon:!0,size:"sm",onClick:e=>{this.setState({isOpenSearchPopper:!1})},className:"search-back mr-1"},(0,a.jsx)(G,{color:i.colors.palette.dark[800]})),(0,a.jsx)(l.TextInput,{className:"popup-search-input",placeholder:this.formatMessage("search"),onChange:e=>this.handleChange(e.target.value),value:e||"",onKeyDown:e=>this.onKeyUp(e),prefix:this.getTextInputPrefixElement(),allowClear:!0})))):(0,a.jsx)("div",{className:"d-flex align-items-center table-search"},(0,a.jsx)(l.TextInput,{className:"search-input",placeholder:this.formatMessage("search"),onChange:e=>this.handleChange(e.target.value),value:e||"",onKeyDown:e=>this.onKeyUp(e),prefix:this.getTextInputPrefixElement(),allowClear:!0})))},this.getInitFields=()=>{const{activeTabId:e}=this.state,{config:t}=this.props,{layersConfig:a}=t,o=this.getDataActionTable(),i=a.asMutable({deep:!0}).concat(o).find((t=>t.id===e)),{tableFields:s}=i,l=[];for(const e of s)l.push({value:e.name,label:e.alias});return l},this.onValueChangeFromRuntime=e=>{e||(e=[]);const{tableShowColumns:t}=this.state,a=this.getInitFields(),o=t||a,i=e.length>o.length;k(o,e,"value").forEach((e=>{i?this.table.showColumn(e.value):this.table.hideColumn(e.value)})),this.setState({tableShowColumns:e})},this.getDataActionTable=()=>{const{viewInTableObj:e}=this.props,t=[];for(const a in e){const o=e[a];this.dataActionTableRecords[a]=o.records,t.push(Object.assign({},o.daLayerItem))}return t},this.onCloseTab=(e,t)=>{const{id:o,viewInTableObj:i}=this.props;t&&t.stopPropagation(),this.removeConfig=!0,this.setState({tableShowColumns:void 0});const s=i;delete s[e],delete this.dataActionTableRecords[e],a.MutableStoreManager.getInstance().updateStateValue(o,"viewInTableObj",s)},this.getLoadingStatus=(e,t)=>{const{stateShowLoading:o}=this.props;let i=!1;return(o||window.jimuConfig.isInBuilder||e&&t===a.DataSourceStatus.Loading)&&(i=!0),i},this.setRefreshLoadingString=(e=!1)=>{if(!e)return!1;let t=0;const a=this;clearInterval(this.autoRefreshLoadingTime),this.autoRefreshLoadingTime=setInterval((()=>{t++,a.setState({autoRefreshLoadingString:a.getLoadingString(t)})}),6e4)},this.getLoadingString=e=>{let t=this.formatMessage("lastUpdateAFewTime");return e>1&&e<=2?t=this.formatMessage("lastUpdateAMinute"):e>2&&(t=this.formatMessage("lastUpdateTime",{updateTime:e})),t},this.toggleAutoRefreshLoading=(e,t,a)=>{this.resetAutoRefreshTimes(a,t),a>0&&this.setRefreshLoadingString(t)},this.resetAutoRefreshTimes=(e,t=!1)=>{const a=this;clearTimeout(this.resetAutoRefreshTime),e<=0&&clearInterval(this.autoRefreshLoadingTime),this.resetAutoRefreshTime=setTimeout((()=>{t&&e>0&&a.setState({autoRefreshLoadingString:a.formatMessage("lastUpdateAFewTime")}),a.setState({showLoading:t})}),0)},this.renderLoading=(e,t)=>{const{autoRefreshLoadingString:o}=this.state;return(0,a.jsx)("div",{className:"position-absolute refresh-loading-con d-flex align-items-center"},e&&(0,a.jsx)("div",{className:"loading-con"}),t>0&&(0,a.jsx)("div",{className:"flex-grow-1 auto-refresh-loading"},o))},this.onSuggestionConfirm=e=>{this.setState({searchText:e,isShowSuggestion:!1},(()=>{this.handleSubmit()}))},this.clearMessageAction=()=>{a.MessageManager.getInstance().publishMessage(new a.DataRecordsSelectionChangeMessage(this.props.id,[])),this.setState({emptyData:!1})},this.state={apiLoaded:!1,dataSource:void 0,activeTabId:void 0,downloadOpen:!1,searchText:"",selectQueryFlag:!1,mobileFlag:!1,searchToolFlag:!1,tableShowColumns:void 0,isOpenSearchPopper:!1,emptyTable:!1,emptyData:!1,selectRecords:[],notReady:!1,selfDsChange:!1,advancedTableField:[],showLoading:!1,interval:0,autoRefreshLoadingString:"",isShowSuggestion:!1,searchSuggestion:[]},this.dataSourceChange=!1,this.dataActionCanLoad=!0,this.dataActionTableRecords={},this.updatingTable=!1,this.removeConfig=!1,this.currentRequestId=0,this.timerFn=null,this.debounceOnResize=a.lodash.debounce(((e,t)=>this.onToolStyleChange(e,t)),200),this.dsManager=a.DataSourceManager.getInstance()}static getDerivedStateFromProps(e,t){var a;const{config:o}=e,{layersConfig:i}=o,{activeTabId:s}=t,l=new he(e).getDataActionTable(),n=i.asMutable({deep:!0}).concat(l);if((!s||n.findIndex((e=>e.id===s))<0)&&n.length>0){const e=n.find((e=>{var t;return e.id===(null===(t=n[0])||void 0===t?void 0:t.id)})),t=e&&e.tableFields.map((e=>({value:e.name,label:e.alias})));return{activeTabId:null===(a=n[0])||void 0===a?void 0:a.id,advancedTableField:t}}return null}componentDidMount(){this.state.apiLoaded||(0,i.loadArcGISJSAPIModules)(["esri/widgets/FeatureTable","esri/layers/FeatureLayer"]).then((e=>{[this.FeatureTable,this.FeatureLayer]=e,this.setState({apiLoaded:!0}),this.destoryTable().then((()=>{this.createTable()}))}))}componentWillUnmount(){const{id:e}=this.props;this.promises.forEach((e=>e.cancel())),this.table&&(this.table.menu.open=!1),clearTimeout(this.suggestionsQueryTimeout),clearInterval(this.autoRefreshLoadingTime),a.MutableStoreManager.getInstance().updateStateValue(e,"viewInTableObj",{})}componentDidUpdate(e,t){var o,i,s,l,n,r,d,c,u,h,v,p,g,m,b,f;const{activeTabId:S,dataSource:y,advancedTableField:w}=this.state,{id:x,config:T,currentPageId:C,state:I,belongToDataSourceInfos:j,appMode:z}=this.props,{layersConfig:O}=T,M=this.getDataActionTable(),A=O.asMutable({deep:!0}).concat(M),D=(null===(i=null===(o=this.props)||void 0===o?void 0:o.stateProps)||void 0===i?void 0:i.removeLayerFlag)||!1,N=null===(l=null===(s=this.props)||void 0===s?void 0:s.stateProps)||void 0===l?void 0:l.dataActionActiveObj,R=(null==N?void 0:N.dataActionTable)?null==N?void 0:N.activeTabId:S;if(!!(null===(r=null===(n=this.props)||void 0===n?void 0:n.stateProps)||void 0===r?void 0:r.optionChangeSuggestion)&&(this.setState({isShowSuggestion:!1}),this.props.dispatch(a.appActions.widgetStatePropChange(x,"optionChangeSuggestion",!1))),D){const e=document.getElementsByClassName("esri-popover esri-popover--open");e&&e.length>0&&e[0].remove(),this.props.dispatch(a.appActions.widgetStatePropChange(x,"removeLayerFlag",!1))}const P=I===a.WidgetState.Closed,L=e.currentPageId!==C,F=e.appMode===a.AppMode.Run&&z===a.AppMode.Design;(P||L||F)&&this.table&&(this.table.menu.open=!1);const E=e.config.layersConfig.concat(M).find((e=>e.id===t.activeTabId)),H=A.find((e=>e.id===R));if(this.removeConfig){if(this.removeConfig=!1,!H)return}else if(!E||!H)return;const k=null===(d=H.tableFields)||void 0===d?void 0:d.map((e=>({value:e.name,label:e.alias})));a.lodash.isDeepEqual(k,w)&&R===t.activeTabId||this.setState({advancedTableField:k});const V=["enableAttachements","enableEdit","allowCsv","enableSelect","selectMode","tableFields"];let B=!1;for(const e of V)if("tableFields"!==e?(null==E?void 0:E[e])!==(null==H?void 0:H[e]):!a.lodash.isDeepEqual(null==E?void 0:E[e],null==H?void 0:H[e])){B=!0;break}const _=null===(c=null==E?void 0:E.useDataSource)||void 0===c?void 0:c.dataSourceId,$=null===(u=null==H?void 0:H.useDataSource)||void 0===u?void 0:u.dataSourceId,Q=null===(v=null===(h=null==e?void 0:e.belongToDataSourceInfos)||void 0===h?void 0:h[_])||void 0===v?void 0:v.widgetQueries,U=null===(p=null==j?void 0:j[$])||void 0===p?void 0:p.widgetQueries,W=null===(m=null===(g=null==e?void 0:e.belongToDataSourceInfos)||void 0===g?void 0:g[_])||void 0===m?void 0:m.sourceVersion,q=null===(b=null==j?void 0:j[$])||void 0===b?void 0:b.sourceVersion,G=null===(f=null==j?void 0:j[$])||void 0===f?void 0:f.status;if(H.dataActionObject||_!==$||Q===U||this.updateGeometryAndSql(y),(null==N?void 0:N.dataActionTable)&&this.dataActionCanLoad&&!this.updatingTable)return this.dataActionCanLoad=!1,this.props.dispatch(a.appActions.widgetStatePropChange(x,"dataActionActiveObj",{activeTabId:R,dataActionTable:!1})),this.updatingTable=!0,void this.setState({activeTabId:R,searchText:"",tableShowColumns:void 0},(()=>{this.destoryTable().then((()=>{this.createTable()}))}));(()=>{const e=!ce.includes(G),t=e&&(null==E?void 0:E.id)!==(null==H?void 0:H.id),a=e&&(null==E?void 0:E.id)===(null==H?void 0:H.id)&&B,o=y&&q&&W!==q&&!(null==H?void 0:H.dataActionObject);return t||a||o})()&&(this.updatingTable=!0,this.setState({searchText:"",tableShowColumns:void 0},(()=>{null==y||y.updateQueryParams({where:"1=1"},x),this.destoryTable().then((()=>{this.createTable()}))})))}getDsAccessibleInfo(e){return e?fetch(`${e}?f=pjson`).then((e=>se(this,void 0,void 0,(function*(){return yield e.json()})))).then((e=>!Object.keys(e).includes("error"))):Promise.resolve(!1)}destoryTable(){return se(this,void 0,void 0,(function*(){return this.table&&(this.table.menu.open=!1,!this.table.destroyed&&this.table.destroy()),yield Promise.resolve()}))}render(){var t,i,s,n,r,c;const{activeTabId:u,dataSource:v,selectQueryFlag:p,tableShowColumns:g,mobileFlag:m,emptyTable:b,selectRecords:f,notReady:S,advancedTableField:y,showLoading:w,interval:x,isShowSuggestion:T,searchSuggestion:C}=this.state,{config:I,id:j,theme:z,isRTL:O,enableDataAction:M,isHeightAuto:A,isWidthAuto:D}=this.props,{layersConfig:N,arrangeType:R}=I,P=this.getDataActionTable(),L=N.asMutable({deep:!0}).concat(P);let F;const E=L.find((e=>e.id===u));L.length>0&&(F=E?E.useDataSource:L[0].useDataSource);const H=(0,a.classNames)("jimu-widget","widget-table","surface-1","table-widget-"+j);if(!F)return(0,a.jsx)(l.WidgetPlaceholder,{widgetId:j,iconSize:"large",style:{position:"absolute",left:0,top:0},icon:de,"data-testid":"tablePlaceholder"});const k=R===e.Tabs,V=this.getInitFields(),_=null==v?void 0:v.getLabel(),$=a.appConfigUtils.getWidgetIdByOutputDataSource(F),Q=null===(t=(0,a.getAppStore)().getState())||void 0===t?void 0:t.appConfig,U=null===(s=null===(i=null==Q?void 0:Q.widgets)||void 0===i?void 0:i[$])||void 0===s?void 0:s.label,W=this.formatMessage("tableDataActionLable",{layer:(null===(r=null===(n=v)||void 0===n?void 0:n.layerDefinition)||void 0===r?void 0:r.name)||""}),q=(null===(c=null==v?void 0:v.getSelectedRecords())||void 0===c?void 0:c.length)>0,G={id:j,enableDataAction:M,isHeightAuto:A,isWidthAuto:D},J=E.enableSearch&&E.searchFields;return(0,a.jsx)("div",{className:H,css:h(z,m,G),ref:e=>this.refs.currentEl=e},(0,a.jsx)("div",{className:"table-indent"},(0,a.jsx)("div",{className:"d-flex "+(k?"horizontal-tag-list":"dropdown-tag-list")},k?(0,a.jsx)(l.Tabs,{type:"underline",onChange:this.onTagClick,className:"tab-flex",value:u,onClose:this.onCloseTab,scrollable:!0},L.map((e=>{const t=!!e.dataActionObject;return(0,a.jsx)(l.Tab,{key:e.id,id:e.id,title:e.name,className:"text-truncate tag-size",closeable:t},(0,a.jsx)("div",{className:"mt-2"}))}))):(0,a.jsx)(l.Select,{size:"sm",value:u,onChange:this.handleTagChange,className:"top-drop"},L.map((e=>(0,a.jsx)("option",{key:e.id,value:e.id,title:e.name},(0,a.jsx)("div",{className:"table-action-option"},(0,a.jsx)("div",{className:"table-action-option-tab",title:e.name},e.name),e.dataActionObject&&(0,a.jsx)("div",{className:"table-action-option-close"},(0,a.jsx)(l.Button,{size:"sm",icon:!0,type:"tertiary",onClick:t=>this.onCloseTab(e.id,t)},(0,a.jsx)(X,{size:"s"}))))))))),(0,a.jsx)("div",{className:R===e.Tabs?"horizontal-render-con":"dropdown-render-con"},J&&this.renderSearchTools(),J&&(0,a.jsx)("div",{ref:"suggestPopup",style:{position:"relative",top:25}},(0,a.jsx)(l.Popper,{css:a.css`
    & {
      max-height: ${a.polished.rem(300)};
      min-width: ${a.polished.rem(200)};
      overflow: auto;
    }
    button {
      display: block;
      width: 100%;
      text-align: left;
      border: none;
      border-radius: 0;
    }
    button:hover {
      border: none;
    }
  `,placement:"bottom-start",reference:this.refs.suggestPopup,offset:[0,8],open:T,trapFocus:!1,autoFocus:!1,toggle:e=>{this.setState({isShowSuggestion:!T})}},C.map(((e,t)=>{const o=ue.sanitize(e.suggestionHtml);return(0,a.jsx)(l.Button,{key:t,type:"secondary",size:"sm",onClick:()=>this.onSuggestionConfirm(e.suggestion),dangerouslySetInnerHTML:{__html:o}})})))),v&&m&&f&&M&&!b&&(0,a.jsx)("div",{className:"horizontal-action-dropdown"},(0,a.jsx)(l.DataActionDropDown,{dataName:W,widgetId:j,dataSource:v,records:f})),(0,a.jsx)("div",{className:"top-button-list"},E.enableSelect&&(0,a.jsx)("div",{className:"top-button ml-2"},(0,a.jsx)(l.Button,{size:"sm",onClick:this.onShowSelection,icon:!0,title:p?this.formatMessage("showAll"):this.formatMessage("showSelection"),disabled:b||!q},p?(0,a.jsx)(Y,null):O?(0,a.jsx)(oe,null):(0,a.jsx)(ae,null))),E.enableSelect&&(0,a.jsx)("div",{className:"top-button ml-2"},(0,a.jsx)(l.Button,{size:"sm",onClick:this.onSelectionClear,icon:!0,title:this.formatMessage("clearSelection"),disabled:b||!q},(0,a.jsx)(Z,null))),E.enableRefresh&&(0,a.jsx)("div",{className:"top-button ml-2"},(0,a.jsx)(l.Button,{size:"sm",onClick:this.onTableRefresh,icon:!0,title:this.formatMessage("refresh"),disabled:b},(0,a.jsx)(ee,null))),(0,a.jsx)("div",{className:"top-button ml-2"},(0,a.jsx)(l.Button,{size:"sm",onClick:this.popupShowHideCols,icon:!0,title:this.formatMessage("showHideCols"),disabled:b},(0,a.jsx)(te,null))),v&&!m&&f&&M&&!b&&(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)("span",{className:"tool-dividing-line"}),(0,a.jsx)("div",{className:"top-button data-action-btn"},(0,a.jsx)(l.DataActionDropDown,{dataName:W,widgetId:j,dataSource:v,records:f})))),v&&(0,a.jsx)("div",{ref:"advancedSelect",className:"adv-select-con"},(0,a.jsx)(l.AdvancedSelect,{fluid:!0,staticValues:y,isMultiple:!0,selectedValues:g||V,isEmptyOptionHidden:!1,onChange:this.onValueChangeFromRuntime})),b&&(0,a.jsx)("div",{className:"placeholder-table-con"},(0,a.jsx)(l.WidgetPlaceholder,{icon:d(47001),message:this.formatMessage("noData")}),S&&(0,a.jsx)("div",{className:"placeholder-alert-con"},(0,a.jsx)(l.Alert,{form:"tooltip",size:"small",type:"warning",text:this.formatMessage("outputDataIsNotGenerated",{outputDsLabel:_,sourceWidgetName:U})}))),(0,a.jsx)("div",{ref:"tableContainer",className:"table-con"}),(w||x>0)&&this.renderLoading(w,x),(0,a.jsx)("div",{className:"ds-container"},(0,a.jsx)(a.DataSourceComponent,{widgetId:j,useDataSource:(0,a.Immutable)(F),onDataSourceCreated:this.onDataSourceCreated,onDataSourceInfoChange:this.onDataSourceInfoChange,onQueryRequired:this.onQueryRequired})),(0,a.jsx)(o.Global,{styles:B(z,O)}),(0,a.jsx)(a.ReactResizeDetector,{handleWidth:!0,handleHeight:!0,onResize:this.debounceOnResize}))))}}he.versionManager=r,he.mapExtraStateProps=(e,t)=>{var o,i,s,l,n,r,d,c,h,v,p,g,m,b,f,S;const{layoutId:y,layoutItemId:w,id:x}=t,T=null===(i=null===(o=null==e?void 0:e.appConfig)||void 0===o?void 0:o.widgets)||void 0===i?void 0:i[x],C=null==T?void 0:T.enableDataAction,I=null===(s=null==T?void 0:T.useDataSources)||void 0===s?void 0:s.map((e=>e.dataSourceId)),j=a.DataSourceManager.getInstance(),z={};null==I||I.forEach((t=>{var a,o;const i=null===(a=j.getDataSource(t))||void 0===a?void 0:a.belongToDataSource;z[t]=null===(o=null==e?void 0:e.dataSourcesInfo)||void 0===o?void 0:o[null==i?void 0:i.id]}));const O=null===(l=(e&&e.appConfig).layouts)||void 0===l?void 0:l[y],M=null===(r=null===(n=null==O?void 0:O.content)||void 0===n?void 0:n[w])||void 0===r?void 0:r.setting,A=(null===(d=null==M?void 0:M.autoProps)||void 0===d?void 0:d.height)===u.LayoutItemSizeModes.Auto||!0===(null===(c=null==M?void 0:M.autoProps)||void 0===c?void 0:c.height),D=(null===(h=null==M?void 0:M.autoProps)||void 0===h?void 0:h.width)===u.LayoutItemSizeModes.Auto||!0===(null===(v=null==M?void 0:M.autoProps)||void 0===v?void 0:v.width);return{appMode:null===(p=null==e?void 0:e.appRuntimeInfo)||void 0===p?void 0:p.appMode,isRTL:null===(g=null==e?void 0:e.appContext)||void 0===g?void 0:g.isRTL,stateShowLoading:null===(b=null===(m=null==e?void 0:e.widgetsState)||void 0===m?void 0:m[t.id])||void 0===b?void 0:b.showLoading,currentPageId:null===(f=null==e?void 0:e.appRuntimeInfo)||void 0===f?void 0:f.currentPageId,viewInTableObj:null===(S=null==t?void 0:t.mutableStateProps)||void 0===S?void 0:S.viewInTableObj,enableDataAction:void 0===C||C,belongToDataSourceInfos:z,isHeightAuto:A,isWidthAuto:D}}})(),c})())}}}));