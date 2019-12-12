(window.webpackJsonpSettings=window.webpackJsonpSettings||[]).push([[4],{315:function(t,e,a){var n=a(321);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(133).default)("abc3afd6",n,!0,{})},316:function(t,e,a){var n=a(327);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(133).default)("5cbce4f5",n,!0,{})},320:function(t,e,a){"use strict";var n=a(315);a.n(n).a},321:function(t,e,a){(t.exports=a(132)(!1)).push([t.i,"\n.force[data-v-4c2d595a] {\n\tbackground: var(--color-main-background);\n\tborder-color: var(--color-error);\n\tcolor: var(--color-error);\n}\n.force[data-v-4c2d595a]:hover,\n.force[data-v-4c2d595a]:active {\n\tbackground: var(--color-error);\n\tborder-color: var(--color-error) !important;\n\tcolor: var(--color-main-background);\n}\n",""])},326:function(t,e,a){"use strict";var n=a(316);a.n(n).a},327:function(t,e,a){(t.exports=a(132)(!1)).push([t.i,"\n.force[data-v-46598ca8] {\n\tbackground: var(--color-main-background);\n\tborder-color: var(--color-error);\n\tcolor: var(--color-error);\n}\n.force[data-v-46598ca8]:hover,\n.force[data-v-46598ca8]:active {\n\tbackground: var(--color-error);\n\tborder-color: var(--color-error) !important;\n\tcolor: var(--color-main-background);\n}\n",""])},328:function(e,a,n){"use strict";n.r(a);var i=n(122),s={name:"AppScore",props:["score"],computed:{scoreImage:function(){var t="rating/s"+Math.round(10*this.score)+".svg";return OC.imagePath("core",t)}}},r=n(26),o=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"app-score-image",attrs:{src:this.scoreImage}})}),[],!1,null,null,null).exports,p={computed:{appGroups:function(){return this.app.groups.map((function(t){return{id:t,name:t}}))},loading:function(){var t=this;return function(e){return t.$store.getters.loading(e)}},installing:function(){return this.$store.getters.loading("install")},enableButtonText:function(){return this.app.needsDownload?t("settings","Download and enable"):t("settings","Enable")},forceEnableButtonText:function(){return this.app.needsDownload,t("settings","Enable untested app")},enableButtonTooltip:function(){return!!this.app.needsDownload&&t("settings","The app will be downloaded from the app store")},forceEnableButtonTooltip:function(){var e=t("settings","This app is not marked as compatible with your Nextcloud version. If you continue you will still be able to install the app. Note that the app might not work as expected.");return this.app.needsDownload?e+" "+t("settings","The app will be downloaded from the app store"):e}},mounted:function(){this.app.groups.length>0&&(this.groupCheckedAppsData=!0)},methods:{asyncFindGroup:function(t){return this.$store.dispatch("getGroups",{search:t,limit:5,offset:0})},isLimitedToGroups:function(t){return!(!this.app.groups.length&&!this.groupCheckedAppsData)},setGroupLimit:function(){this.groupCheckedAppsData||this.$store.dispatch("enableApp",{appId:this.app.id,groups:[]})},canLimitToGroups:function(t){return!(t.types&&t.types.includes("filesystem")||t.types.includes("prelogin")||t.types.includes("authentication")||t.types.includes("logging")||t.types.includes("prevent_group_restriction"))},addGroupLimitation:function(t){var e=this.app.groups.concat([]).concat([t.id]);this.$store.dispatch("enableApp",{appId:this.app.id,groups:e})},removeGroupLimitation:function(t){var e=this.app.groups.concat([]),a=e.indexOf(t.id);a>-1&&e.splice(a,1),this.$store.dispatch("enableApp",{appId:this.app.id,groups:e})},forceEnable:function(t){this.$store.dispatch("forceEnableApp",{appId:t,groups:[]}).then((function(t){OC.Settings.Apps.rebuildNavigation()})).catch((function(t){OC.Notification.show(t)}))},enable:function(t){this.$store.dispatch("enableApp",{appId:t,groups:[]}).then((function(t){OC.Settings.Apps.rebuildNavigation()})).catch((function(t){OC.Notification.show(t)}))},disable:function(t){this.$store.dispatch("disableApp",{appId:t}).then((function(t){OC.Settings.Apps.rebuildNavigation()})).catch((function(t){OC.Notification.show(t)}))},remove:function(t){this.$store.dispatch("uninstallApp",{appId:t}).then((function(t){OC.Settings.Apps.rebuildNavigation()})).catch((function(t){OC.Notification.show(t)}))},install:function(t){this.$store.dispatch("enableApp",{appId:t}).then((function(t){OC.Settings.Apps.rebuildNavigation()})).catch((function(t){OC.Notification.show(t)}))},update:function(t){this.$store.dispatch("updateApp",{appId:t}).then((function(t){OC.Settings.Apps.rebuildNavigation()})).catch((function(t){OC.Notification.show(t)}))}}},c=Object(r.a)(p,void 0,void 0,!1,null,null,null).exports,l={name:"SvgFilterMixin",data:function(){return{filterId:""}},computed:{filterUrl:function(){return"url(#".concat(this.filterId,")")}},mounted:function(){this.filterId="invertIconApps"+Math.floor(100*Math.random())+(new Date).getSeconds()+(new Date).getMilliseconds()}},u=Object(r.a)(l,void 0,void 0,!1,null,null,null).exports,d={name:"AppItem",components:{AppScore:o},mixins:[c,u],props:{app:{},category:{},listView:{type:Boolean,default:!0}},data:function(){return{isSelected:!1,scrolled:!1}},computed:{hasRating:function(){return this.app.appstoreData&&this.app.appstoreData.ratingNumOverall>5}},watch:{"$route.params.id":function(t){this.isSelected=this.app.id===t}},mounted:function(){this.isSelected=this.app.id===this.$route.params.id},watchers:{},methods:{showAppDetails:function(t){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:if("INPUT"!==t.currentTarget.tagName&&"A"!==t.currentTarget.tagName){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,regeneratorRuntime.awrap(this.$router.push({name:"apps-details",params:{category:this.category,id:this.app.id}}));case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}}),null,this,[[2,7]])},prefix:function(t,e){return t+"_"+e}}},g=(n(320),Object(r.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section",class:{selected:t.isSelected},on:{click:t.showAppDetails}},[a("div",{staticClass:"app-image app-image-icon",on:{click:t.showAppDetails}},[t.listView&&!t.app.preview||!t.listView&&!t.app.screenshot?a("div",{staticClass:"icon-settings-dark"}):t._e(),t._v(" "),t.listView&&t.app.preview?a("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"}},[a("defs",[a("filter",{attrs:{id:t.filterId}},[a("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"}})],1)]),t._v(" "),a("image",{staticClass:"app-icon",attrs:{x:"0",y:"0",width:"32",height:"32",preserveAspectRatio:"xMinYMin meet",filter:t.filterUrl,"xlink:href":t.app.preview}})]):t._e(),t._v(" "),!t.listView&&t.app.screenshot?a("img",{attrs:{src:t.app.screenshot,width:"100%"}}):t._e()]),t._v(" "),a("div",{staticClass:"app-name",on:{click:t.showAppDetails}},[t._v("\n\t\t"+t._s(t.app.name)+"\n\t")]),t._v(" "),t.listView?t._e():a("div",{staticClass:"app-summary"},[t._v("\n\t\t"+t._s(t.app.summary)+"\n\t")]),t._v(" "),t.listView?a("div",{staticClass:"app-version"},[t.app.version?a("span",[t._v(t._s(t.app.version))]):t.app.appstoreData.releases[0].version?a("span",[t._v(t._s(t.app.appstoreData.releases[0].version))]):t._e()]):t._e(),t._v(" "),a("div",{staticClass:"app-level"},[300===t.app.level?a("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.t("settings","This app is supported via your current Nextcloud subscription."),expression:"t('settings', 'This app is supported via your current Nextcloud subscription.')",modifiers:{auto:!0}}],staticClass:"supported icon-checkmark-color"},[t._v("\n\t\t\t"+t._s(t.t("settings","Supported")))]):t._e(),t._v(" "),200===t.app.level?a("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.t("settings","Featured apps are developed by and within the community. They offer central functionality and are ready for production use."),expression:"t('settings', 'Featured apps are developed by and within the community. They offer central functionality and are ready for production use.')",modifiers:{auto:!0}}],staticClass:"official icon-checkmark"},[t._v("\n\t\t\t"+t._s(t.t("settings","Featured")))]):t._e(),t._v(" "),t.hasRating&&!t.listView?a("AppScore",{attrs:{score:t.app.score}}):t._e()],1),t._v(" "),a("div",{staticClass:"actions"},[t.app.error?a("div",{staticClass:"warning"},[t._v("\n\t\t\t"+t._s(t.app.error)+"\n\t\t")]):t._e(),t._v(" "),t.loading(t.app.id)?a("div",{staticClass:"icon icon-loading-small"}):t._e(),t._v(" "),t.app.update?a("input",{staticClass:"update primary",attrs:{type:"button",value:t.t("settings","Update to {update}",{update:t.app.update}),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){return e.stopPropagation(),t.update(t.app.id)}}}):t._e(),t._v(" "),t.app.canUnInstall?a("input",{staticClass:"uninstall",attrs:{type:"button",value:t.t("settings","Remove"),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){return e.stopPropagation(),t.remove(t.app.id)}}}):t._e(),t._v(" "),t.app.active?a("input",{staticClass:"enable",attrs:{type:"button",value:t.t("settings","Disable"),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){return e.stopPropagation(),t.disable(t.app.id)}}}):t._e(),t._v(" "),t.app.active||!t.app.canInstall&&!t.app.isCompatible?t.app.active?t._e():a("input",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.forceEnableButtonTooltip,expression:"forceEnableButtonTooltip",modifiers:{auto:!0}}],staticClass:"enable force",attrs:{type:"button",value:t.forceEnableButtonText,disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){return e.stopPropagation(),t.forceEnable(t.app.id)}}}):a("input",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.enableButtonTooltip,expression:"enableButtonTooltip",modifiers:{auto:!0}}],staticClass:"enable",attrs:{type:"button",value:t.enableButtonText,disabled:!t.app.canInstall||t.installing||t.loading(t.app.id)},on:{click:function(e){return e.stopPropagation(),t.enable(t.app.id)}}})])])}),[],!1,null,"4c2d595a",null).exports),h={name:"PrefixMixin",methods:{prefix:function(t,e){return t+"_"+e}}},v=Object(r.a)(h,void 0,void 0,!1,null,null,null).exports,f=n(322),m=n.n(f),_={name:"AppList",components:{AppItem:g},mixins:[v],props:["category","app","search"],computed:{counter:function(){return this.apps.filter((function(t){return t.update})).length},loading:function(){return this.$store.getters.loading("list")},hasPendingUpdate:function(){return this.apps.filter((function(t){return t.update})).length>1},showUpdateAll:function(){return this.hasPendingUpdate&&["installed","updates"].includes(this.category)},apps:function(){var t=this,e=this.$store.getters.getAllApps.filter((function(e){return-1!==e.name.toLowerCase().search(t.search.toLowerCase())})).sort((function(t,e){var a=""+(t.active?0:1)+(t.update?0:1)+t.name,n=""+(e.active?0:1)+(e.update?0:1)+e.name;return OC.Util.naturalSortCompare(a,n)}));return"installed"===this.category?e.filter((function(t){return t.installed})):"enabled"===this.category?e.filter((function(t){return t.active&&t.installed})):"disabled"===this.category?e.filter((function(t){return!t.active&&t.installed})):"app-bundles"===this.category?e.filter((function(t){return t.bundles})):"updates"===this.category?e.filter((function(t){return t.update})):e.filter((function(e){return e.appstore&&void 0!==e.category&&(e.category===t.category||e.category.indexOf(t.category)>-1)}))},bundles:function(){var t=this;return this.$store.getters.getServerData.bundles.filter((function(e){return t.bundleApps(e.id).length>0}))},bundleApps:function(){return function(t){return this.$store.getters.getAllApps.filter((function(e){return e.bundleId===t}))}},searchApps:function(){var t=this;return""===this.search?[]:this.$store.getters.getAllApps.filter((function(e){return-1!==e.name.toLowerCase().search(t.search.toLowerCase())&&!t.apps.find((function(t){return t.id===e.id}))}))},useAppStoreView:function(){return!this.useListView&&!this.useBundleView},useListView:function(){return"installed"===this.category||"enabled"===this.category||"disabled"===this.category||"updates"===this.category},useBundleView:function(){return"app-bundles"===this.category},allBundlesEnabled:function(){var t=this;return function(e){return 0===t.bundleApps(e).filter((function(t){return!t.active})).length}},bundleToggleText:function(){var e=this;return function(a){return e.allBundlesEnabled(a)?t("settings","Disable all"):t("settings","Enable all")}}},methods:{toggleBundle:function(t){return this.allBundlesEnabled(t)?this.disableBundle(t):this.enableBundle(t)},enableBundle:function(t){var e=this.bundleApps(t).map((function(t){return t.id}));this.$store.dispatch("enableApp",{appId:e,groups:[]}).catch((function(t){console.error(t),OC.Notification.show(t)}))},disableBundle:function(t){var e=this.bundleApps(t).map((function(t){return t.id}));this.$store.dispatch("disableApp",{appId:e,groups:[]}).catch((function(t){OC.Notification.show(t)}))},updateAll:function(){var t=this,e=m()(1);this.apps.filter((function(t){return t.update})).map((function(a){return e((function(){return t.$store.dispatch("updateApp",{appId:a.id})}))}))}}},b=Object(r.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app-content-inner"}},[a("div",{staticClass:"apps-list",class:{installed:t.useBundleView||t.useListView,store:t.useAppStoreView},attrs:{id:"apps-list"}},[t.useListView?[t.showUpdateAll?a("div",{staticClass:"counter"},[t._v("\n\t\t\t\t"+t._s(t.t("settings","{counter} apps have an update available",{counter:t.counter}))+"\n\t\t\t\t"),t.showUpdateAll?a("button",{staticClass:"primary",attrs:{id:"app-list-update-all"},on:{click:t.updateAll}},[t._v("\n\t\t\t\t\t"+t._s(t.t("settings","Update all"))+"\n\t\t\t\t")]):t._e()]):t._e(),t._v(" "),a("transition-group",{staticClass:"apps-list-container",attrs:{name:"app-list",tag:"div"}},t._l(t.apps,(function(e){return a("AppItem",{key:e.id,attrs:{app:e,category:t.category}})})),1)]:t._e(),t._v(" "),t.useBundleView?a("transition-group",{staticClass:"apps-list-container",attrs:{name:"app-list",tag:"div"}},[t._l(t.bundles,(function(e){return[a("div",{key:e.id,staticClass:"apps-header"},[a("div",{staticClass:"app-image"}),t._v(" "),a("h2",[t._v(t._s(e.name)+" "),a("input",{attrs:{type:"button",value:t.bundleToggleText(e.id)},on:{click:function(a){return t.toggleBundle(e.id)}}})]),t._v(" "),a("div",{staticClass:"app-version"}),t._v(" "),a("div",{staticClass:"app-level"}),t._v(" "),a("div",{staticClass:"app-groups"}),t._v(" "),a("div",{staticClass:"actions"},[t._v("\n\t\t\t\t\t\t \n\t\t\t\t\t")])]),t._v(" "),t._l(t.bundleApps(e.id),(function(n){return a("AppItem",{key:e.id+n.id,attrs:{app:n,category:t.category}})}))]}))],2):t._e(),t._v(" "),t.useAppStoreView?t._l(t.apps,(function(e){return a("AppItem",{key:e.id,attrs:{app:e,category:t.category,"list-view":!1}})})):t._e()],2),t._v(" "),a("div",{staticClass:"apps-list installed",attrs:{id:"apps-list-search"}},[a("div",{staticClass:"apps-list-container"},[""!==t.search&&t.searchApps.length>0?[a("div",{staticClass:"section"},[a("div"),t._v(" "),a("td",{attrs:{colspan:"5"}},[a("h2",[t._v(t._s(t.t("settings","Results from other categories")))])])]),t._v(" "),t._l(t.searchApps,(function(e){return a("AppItem",{key:e.id,attrs:{app:e,category:t.category,"list-view":!0}})}))]:t._e()],2)]),t._v(" "),""===t.search||t.loading||0!==t.searchApps.length||0!==t.apps.length?t._e():a("div",{staticClass:"emptycontent emptycontent-search",attrs:{id:"apps-list-empty"}},[a("div",{staticClass:"icon-settings-dark",attrs:{id:"app-list-empty-icon"}}),t._v(" "),a("h2",[t._v(t._s(t.t("settings","No apps found for your version")))])]),t._v(" "),a("div",{attrs:{id:"searchresults"}})])}),[],!1,null,null,null).exports,y=n(4),C=n(317),A=n.n(C),w=n(324),k=n.n(w),x=n(325),D=n.n(x),S={name:"AppDetails",components:{Multiselect:i.Multiselect,AppScore:o},mixins:[c,v,u],props:["category","app"],data:function(){return{groupCheckedAppsData:!1}},computed:{appstoreUrl:function(){return"https://apps.nextcloud.com/apps/".concat(this.app.id)},licence:function(){return this.app.licence?t("settings","{license}-licensed",{license:(""+this.app.licence).toUpperCase()}):null},hasRating:function(){return this.app.appstoreData&&this.app.appstoreData.ratingNumOverall>5},author:function(){return"string"==typeof this.app.author?[{"@value":this.app.author}]:this.app.author["@value"]?[this.app.author]:this.app.author},appGroups:function(){return this.app.groups.map((function(t){return{id:t,name:t}}))},groups:function(){return this.$store.getters.getGroups.filter((function(t){return"disabled"!==t.id})).sort((function(t,e){return t.name.localeCompare(e.name)}))},renderMarkdown:function(){var t=new k.a.Renderer;return t.link=function(t,e,a){try{var n=decodeURIComponent(unescape(t)).replace(/[^\w:]/g,"").toLowerCase()}catch(t){return""}if(0!==n.indexOf("http:")&&0!==n.indexOf("https:"))return"";var i='<a href="'+t+'" rel="noreferrer noopener"';return e&&(i+=' title="'+e+'"'),i+=">"+a+"</a>"},t.image=function(t,e,a){return a||e},t.blockquote=function(t){return t},D.a.sanitize(k()(this.app.description.trim(),{renderer:t,gfm:!1,highlight:!1,tables:!1,breaks:!1,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1}),{SAFE_FOR_JQUERY:!0,ALLOWED_TAGS:["strong","p","a","ul","ol","li","em","del","blockquote"]})}},mounted:function(){this.app.groups.length>0&&(this.groupCheckedAppsData=!0)}},N=(n(326),Object(r.a)(S,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"20px"},attrs:{id:"app-details-view"}},[a("h2",[t.app.preview?t._e():a("div",{staticClass:"icon-settings-dark"}),t._v(" "),t.app.previewAsIcon&&t.app.preview?a("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32"}},[a("defs",[a("filter",{attrs:{id:t.filterId}},[a("feColorMatrix",{attrs:{in:"SourceGraphic",type:"matrix",values:"-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"}})],1)]),t._v(" "),a("image",{staticClass:"app-icon",attrs:{x:"0",y:"0",width:"32",height:"32",preserveAspectRatio:"xMinYMin meet",filter:t.filterUrl,"xlink:href":t.app.preview}})]):t._e(),t._v("\n\t\t"+t._s(t.app.name)+"\n\t")]),t._v(" "),t.app.screenshot?a("img",{attrs:{src:t.app.screenshot,width:"100%"}}):t._e(),t._v(" "),300===t.app.level||200===t.app.level||t.hasRating?a("div",{staticClass:"app-level"},[300===t.app.level?a("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.t("settings","This app is supported via your current Nextcloud subscription."),expression:"t('settings', 'This app is supported via your current Nextcloud subscription.')",modifiers:{auto:!0}}],staticClass:"supported icon-checkmark-color"},[t._v("\n\t\t\t"+t._s(t.t("settings","Supported")))]):t._e(),t._v(" "),200===t.app.level?a("span",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.t("settings","Featured apps are developed by and within the community. They offer central functionality and are ready for production use."),expression:"t('settings', 'Featured apps are developed by and within the community. They offer central functionality and are ready for production use.')",modifiers:{auto:!0}}],staticClass:"official icon-checkmark"},[t._v("\n\t\t\t"+t._s(t.t("settings","Featured")))]):t._e(),t._v(" "),t.hasRating?a("AppScore",{attrs:{score:t.app.appstoreData.ratingOverall}}):t._e()],1):t._e(),t._v(" "),t.author?a("div",{staticClass:"app-author"},[t._v("\n\t\t"+t._s(t.t("settings","by"))+"\n\t\t"),t._l(t.author,(function(e,n){return a("span",{key:n},[e["@attributes"]&&e["@attributes"].homepage?a("a",{attrs:{href:e["@attributes"].homepage}},[t._v(t._s(e["@value"]))]):e["@value"]?a("span",[t._v(t._s(e["@value"]))]):a("span",[t._v(t._s(e))]),n+1<t.author.length?a("span",[t._v(", ")]):t._e()])}))],2):t._e(),t._v(" "),t.licence?a("div",{staticClass:"app-licence"},[t._v("\n\t\t"+t._s(t.licence)+"\n\t")]):t._e(),t._v(" "),a("div",{staticClass:"actions"},[a("div",{staticClass:"actions-buttons"},[t.app.update?a("input",{staticClass:"update primary",attrs:{type:"button",value:t.t("settings","Update to {version}",{version:t.app.update}),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){return t.update(t.app.id)}}}):t._e(),t._v(" "),t.app.canUnInstall?a("input",{staticClass:"uninstall",attrs:{type:"button",value:t.t("settings","Remove"),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){return t.remove(t.app.id)}}}):t._e(),t._v(" "),t.app.active?a("input",{staticClass:"enable",attrs:{type:"button",value:t.t("settings","Disable"),disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){return t.disable(t.app.id)}}}):t._e(),t._v(" "),t.app.active||!t.app.canInstall&&!t.app.isCompatible?t.app.active?t._e():a("input",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.forceEnableButtonTooltip,expression:"forceEnableButtonTooltip",modifiers:{auto:!0}}],staticClass:"enable force",attrs:{type:"button",value:t.forceEnableButtonText,disabled:t.installing||t.loading(t.app.id)},on:{click:function(e){return t.forceEnable(t.app.id)}}}):a("input",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.enableButtonTooltip,expression:"enableButtonTooltip",modifiers:{auto:!0}}],staticClass:"enable primary",attrs:{type:"button",value:t.enableButtonText,disabled:!t.app.canInstall||t.installing||t.loading(t.app.id)},on:{click:function(e){return t.enable(t.app.id)}}})]),t._v(" "),a("div",{staticClass:"app-groups"},[t.app.active&&t.canLimitToGroups(t.app)?a("div",{staticClass:"groups-enable"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.groupCheckedAppsData,expression:"groupCheckedAppsData"}],staticClass:"groups-enable__checkbox checkbox",attrs:{id:t.prefix("groups_enable",t.app.id),type:"checkbox"},domProps:{value:t.app.id,checked:Array.isArray(t.groupCheckedAppsData)?t._i(t.groupCheckedAppsData,t.app.id)>-1:t.groupCheckedAppsData},on:{change:[function(e){var a=t.groupCheckedAppsData,n=e.target,i=!!n.checked;if(Array.isArray(a)){var s=t.app.id,r=t._i(a,s);n.checked?r<0&&(t.groupCheckedAppsData=a.concat([s])):r>-1&&(t.groupCheckedAppsData=a.slice(0,r).concat(a.slice(r+1)))}else t.groupCheckedAppsData=i},t.setGroupLimit]}}),t._v(" "),a("label",{attrs:{for:t.prefix("groups_enable",t.app.id)}},[t._v(t._s(t.t("settings","Limit to groups")))]),t._v(" "),a("input",{staticClass:"group_select",attrs:{type:"hidden",title:t.t("settings","All"),value:""}}),t._v(" "),t.isLimitedToGroups(t.app)?a("Multiselect",{staticClass:"multiselect-vue",attrs:{options:t.groups,value:t.appGroups,"options-limit":5,placeholder:t.t("settings","Limit app usage to groups"),label:"name","track-by":"id",multiple:!0,"close-on-select":!1,"tag-width":60},on:{select:t.addGroupLimitation,remove:t.removeGroupLimitation,"search-change":t.asyncFindGroup}},[a("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v(t._s(t.t("settings","No results")))])]):t._e()],1):t._e()])]),t._v(" "),a("ul",{staticClass:"app-dependencies"},[t.app.missingMinOwnCloudVersion?a("li",[t._v("\n\t\t\t"+t._s(t.t("settings","This app has no minimum Nextcloud version assigned. This will be an error in the future."))+"\n\t\t")]):t._e(),t._v(" "),t.app.missingMaxOwnCloudVersion?a("li",[t._v("\n\t\t\t"+t._s(t.t("settings","This app has no maximum Nextcloud version assigned. This will be an error in the future."))+"\n\t\t")]):t._e(),t._v(" "),t.app.canInstall?t._e():a("li",[t._v("\n\t\t\t"+t._s(t.t("settings","This app cannot be installed because the following dependencies are not fulfilled:"))+"\n\t\t\t"),a("ul",{staticClass:"missing-dependencies"},t._l(t.app.missingDependencies,(function(e,n){return a("li",{key:n},[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])})),0)])]),t._v(" "),a("p",{staticClass:"documentation"},[t.app.internal?t._e():a("a",{staticClass:"appslink",attrs:{href:t.appstoreUrl,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","View in store"))+" ↗")]),t._v(" "),t.app.website?a("a",{staticClass:"appslink",attrs:{href:t.app.website,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","Visit website"))+" ↗")]):t._e(),t._v(" "),t.app.bugs?a("a",{staticClass:"appslink",attrs:{href:t.app.bugs,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","Report a bug"))+" ↗")]):t._e(),t._v(" "),t.app.documentation&&t.app.documentation.user?a("a",{staticClass:"appslink",attrs:{href:t.app.documentation.user,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","User documentation"))+" ↗")]):t._e(),t._v(" "),t.app.documentation&&t.app.documentation.admin?a("a",{staticClass:"appslink",attrs:{href:t.app.documentation.admin,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","Admin documentation"))+" ↗")]):t._e(),t._v(" "),t.app.documentation&&t.app.documentation.developer?a("a",{staticClass:"appslink",attrs:{href:t.app.documentation.developer,target:"_blank",rel:"noreferrer noopener"}},[t._v(t._s(t.t("settings","Developer documentation"))+" ↗")]):t._e()]),t._v(" "),a("div",{staticClass:"app-description",domProps:{innerHTML:t._s(t.renderMarkdown)}})])}),[],!1,null,"46598ca8",null).exports);y.default.use(A.a);var T={name:"Apps",components:{AppContent:i.AppContent,AppNavigation:i.AppNavigation,AppNavigationItem:i.AppNavigationItem,AppSidebar:i.AppSidebar,Content:i.Content,AppDetails:N,AppList:b},props:{category:{type:String,default:"installed"},id:{type:String,default:""}},data:function(){return{searchQuery:""}},computed:{loading:function(){return this.$store.getters.loading("categories")},loadingList:function(){return this.$store.getters.loading("list")},currentApp:function(){var t=this;return this.apps.find((function(e){return e.id===t.id}))},categories:function(){return this.$store.getters.getCategories},apps:function(){return this.$store.getters.getAllApps},updateCount:function(){return this.$store.getters.getUpdateCount},settings:function(){return this.$store.getters.getServerData},menu:function(){var e=this,a=this.$store.getters.getCategories;a=(a=Array.isArray(a)?a:[]).map((function(t){var e={};return e.id="app-category-"+t.ident,e.icon="icon-category-"+t.ident,e.classes=[],e.router={name:"apps-category",params:{category:t.ident}},e.text=t.displayName,e}));var n=[{id:"app-category-your-apps",classes:[],router:{name:"apps"},icon:"icon-category-installed",text:t("settings","Your apps")},{id:"app-category-enabled",classes:[],icon:"icon-category-enabled",router:{name:"apps-category",params:{category:"enabled"}},text:t("settings","Active apps")},{id:"app-category-disabled",classes:[],icon:"icon-category-disabled",router:{name:"apps-category",params:{category:"disabled"}},text:t("settings","Disabled apps")}];if(!this.settings.appstoreEnabled)return n;this.$store.getters.getUpdateCount>0&&n.push({id:"app-category-updates",classes:[],icon:"icon-download",router:{name:"apps-category",params:{category:"updates"}},text:t("settings","Updates"),utils:{counter:this.$store.getters.getUpdateCount}}),n.push({id:"app-category-app-bundles",classes:[],icon:"icon-category-app-bundles",router:{name:"apps-category",params:{category:"app-bundles"}},text:t("settings","App bundles")});var i=(a=n.concat(a)).findIndex((function(t){return t.id==="app-category-"+e.category}));return i>=0?a[i].classes.push("active"):a[0].classes.push("active"),a.push({id:"app-developer-docs",classes:[],href:this.settings.developerDocumentation,text:t("settings","Developer documentation")+" ↗"}),a}},watch:{category:function(t,e){this.setSearch("")}},beforeMount:function(){this.$store.dispatch("getCategories"),this.$store.dispatch("getAllApps"),this.$store.dispatch("getGroups",{offset:0,limit:5}),this.$store.commit("setUpdateCount",this.$store.getters.getServerData.updateCount)},mounted:function(){this.appSearch=new OCA.Search(this.setSearch,this.resetSearch)},methods:{setSearch:function(t){this.searchQuery=t},resetSearch:function(){this.setSearch("")},hideAppDetails:function(){this.$router.push({name:"apps-category",params:{category:this.category}})}}},$=Object(r.a)(T,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content",{class:{"with-app-sidebar":t.currentApp},attrs:{"app-name":"settings","content-class":{"icon-loading":t.loadingList},"navigation-class":{"icon-loading":t.loading}}},[a("AppNavigation",[a("ul",{attrs:{id:"appscategories"}},t._l(t.menu,(function(t){return a("AppNavigationItem",{key:t.key,attrs:{item:t}})})),1)]),t._v(" "),a("AppContent",{staticClass:"app-settings-content",class:{"icon-loading":t.loadingList}},[a("AppList",{attrs:{category:t.category,app:t.currentApp,search:t.searchQuery}})],1),t._v(" "),t.id&&t.currentApp?a("AppSidebar",{on:{close:t.hideAppDetails}},[a("AppDetails",{attrs:{category:t.category,app:t.currentApp}})],1):t._e()],1)}),[],!1,null,null,null);a.default=$.exports}}]);
//# sourceMappingURL=vue-4.js.map?v=af6d81075993658615ba