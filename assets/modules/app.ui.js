(function() {
/* [Prompt/Toggle Rendring]
-------------------------------------------------------------------------------------------------*/
var classes, commonprop, menubarOpt = ["File", "Edit", "Selection", "View", "Tools", "Terminal", "Help"];
$("#content").render("div", {class: "prompt-wrap Gok2N2nEj CGA3xkcxA hidden YiVmwrNp2"})
	.in("div", {class: "BO1Zf4qbZ stDgdv64V A6tyEeQ0U CGA3xkcxA prompt-xender"})
	.in("div", {class: "prompt-input ctrl-pad"})
	.in("div", {class: "A6tyEeQ0U"})
	.in("input", {type: "text", autocomplete: "off", autocapitalize: "off", id: "search_prompt"})
	.out("div", {class: "bash"})
	.in("svg", {class: "expect-path", viewBox: "0 0 24 24"})
	.in("polyline", {points: "9 18 15 12 9 6"});
$(".prompt-xender").render("div", {class: "prompt-list F5OYIlxgO CGA3xkcxA A6tyEeQ0U"})
	.in("div", {class: "promptsb"})
	.in("div", {class: "thumb"}).parent()
	.out("div", {class: "BO1Zf4qbZ czWrKt71F KrebH1xCG ul-xender"});
$("#content").render("div", {class: "Gok2N2nEj PMiBu3q7U BO1Zf4qbZ hidden", style: "z-index:1111"})
	.in("div", {class: "web-settings A6tyEeQ0U BO1Zf4qbZ stDgdv64V"})
	.in("div", {class: "snavbar Q3m1TjFEg A6tyEeQ0U"})
	.in("nav", {class: "fnoDqvqOH"})
	.in("div", {class: "fnoDqvqOH x50ncvXCb QPou3Wze0 cit8okVvn", style: "column-gap:6px;justify-content: flex-start"})
	.in("div", {class: "icon-settings"})
	.in("svg", {fill: "currentColor", width: 18, height: 18, viewBox: "0 0 333 333"})
	.parent().parent()
	.out("div", {class: "close-settings"})
	.in("svg", {width: 14, height: 14, viewBox: "0 0 14 14", fill: "none"})
	.in("path", {class: "expect-path", d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"});
$(".web-settings").render("div", {class: "search-wrap"})
	.in("div", {class: "search-field"})
	.in("div", {class: "search-view A6tyEeQ0U"})
	.in("form", {class: "Q3m1TjFEg YiVmwrNp2"})
	.in("input", {class: "Q3m1TjFEg YiVmwrNp2", type: "text", id: "search_settings", spellCheck: false, placeholder: "Search settings", autocomplete: "off"})
	.parent()
	.out("div", {class: "icon-filter icon Gok2N2nEj g9QmVPFJw fnoDqvqOH YiVmwrNp2 J4FO5DQyr"})
	.in("svg", {width:14, height:24, viewBox: "0 0 64 64", id: "0 0 64 64"})
	.in("polygon", {fill: "none", stroke: "currentColor", points: "2 6 2 10 26 34 26 58 38 58 38 34 62 10 62 6 2 6", "stroke-width": 4, "stroke-miterlimit": "10"})
	.parent().parent()
	.out("div", {class: "clear-all fnoDqvqOH"})
	.in("div", {class: "nmic-clear"})
	.in("div", {class: "stroke-line", style: "--top:1px;"})
	.out("div", {class: "stroke-line", style: "--top:4px;"})
	.out("div", {class: "stroke-line", style: "--top:7px;"})
	.out("div", {class: "stroke-line", style: "--top:10px;"})
	.out("svg", {width:10, height:10, viewBox: "0 0 20 20"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#iconx"})
$(".search-view").render("div", {class: "icon-search icon Gok2N2nEj g9QmVPFJw fnoDqvqOH YiVmwrNp2"})
	.in("svg", {width: 14, height: 14, viewBox: "0 0 60 60"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#search"})
$(".web-settings").render("div", {class: "F5OYIlxgO CGA3xkcxA A6tyEeQ0U stDgdv64V", style: "padding:0 22px;font-size:14px"})
	.in("div", {style: "padding:5px"})
	.in("span", "User Settings").parent()
	.out("div", {class: "F5OYIlxgO CGA3xkcxA"})
	.in("div", {class: "BO1Zf4qbZ A6tyEeQ0U CGA3xkcxA ydNrdEUSf QPou3Wze0", style: "border-top:var(--notesvar-primary-border-solid);", role: "persentation"})
	.in("div", {class: "settings-sidebar settings-wrap A6tyEeQ0U"})
	.in("div", {class: "settings-sidebar-view _3yzWrKt czWrKt71F"})
	.in("ul", {class: "settings-list"}).parent()
	.out("div", {class: "vertical b-sash swDoDxaKt Gok2N2nEj g00OW6qIq YiVmwrNp2"})
	.out("div", {class: "scrollbar-track v-track sidebar-track disabled"})
	.in("div", {class: "scrollbar-thumb"}).parent().parent()
	.out("div", {class: "settings-content settings-wrap A6tyEeQ0U CGA3xkcxA F5OYIlxgO"})
	.in("div", {class: "content-view _3yzWrKt YiVmwrNp2 czWrKt71F KrebH1xCG"})
	.in("h1", "Commonly Used Settings")
	.out("ul", {class: "settings"}).parent()
	.out("div", {class: "scrollbar-track v-track sidebar-track disabled", style: "right:-22px"})
	.in("div", {class: "scrollbar-thumb"})

/* [Top-Navigation Rendring]
-------------------------------------------------------------------------------------------------*/
$("#content").render("div", {class: "menu-bar Q3m1TjFEg g9QmVPFJw Gok2N2nEj"})
	.in("nav", {class: "titlebar-view A6tyEeQ0U Q3m1TjFEg ydNrdEUSf CGA3xkcxA", ariaLabel: "Menu Bar", style: "height:35px;flex-direction:row"})
	.in("div", {class: "notes-logo ydNrdEUSf", style: "user-select:none;padding:0 5px"})
	.in("i", {ariaHidden: true, style: "margin:auto;display:block;width:25px;height:25px;background-image:url(images/icons/notes-favicon-48x48.png);background-repeat:no-repeat;background-position:center;background-size:100%", ariaLabel: "Notes Manager"}).parent()
	.out("div", {class: "items-left-menubar menubar-section ydNrdEUSf CGA3xkcxA"})
	.in("div", {class: "ydNrdEUSf more-all-opt hidden", role: "list", ariaLabel: "More Menu Bar Items", ariaHidden: true, style: "cursor:pointer"})
	.in("div", {class: "Xd6G1wnM1 menu-list", ariaLabel: "More Menu Bar Items", style: "padding:2px 8px;margin-right:-5px"})
	.in("div", {class: "icon-more", style: "width:16px;height:16px"})
	.in("div", {class: "line1", style: "--bgcolor:var(--nm-default-font-color)"})
	.out("div", {class: "line2", style: "--bgcolor:var(--nm-default-font-color)"})
	.out("div", {class: "line3", style: "--bgcolor:var(--nm-default-font-color)"})
$(".items-left-menubar").render("ul", {class: "menubar-list ydNrdEUSf CGA3xkcxA GdiC29Du3 lef-menubar-option", style: "padding:0 5px", ariaLabel: "Menu List"});
createList(menubarOpt, "li", {role: "listitem", class: "ydNrdEUSf YiVmwrNp2 rgOmUTXB5"},
	createCommon(
		menubarOpt, "div", {class: "menu-list list-item rgOmUTXB5 c9eFY3RS0 colgap", role: "listitem"}
	)
);
$(".items-left-menubar").render("div", {class: "ydNrdEUSf more-tab-opt hidden", role: "list", ariaLabel: "More Menu Bar Options", style: "cursor:pointer", ariaHidden: true})
	.in("div", {class: "Xd6G1wnM1 menu-list", style: "padding:2px 8px;margin-left:-5px", ariaLabel: "More Menu Bar Options"})
	.in("svg", {width: 22, height: 22, viewBox: "0 0 48 14", fill: "currentColor", "stroke-width": 0})
	.in("circle", {cx: 9, cy: 9, r: 2.5, style: "transform:translateX(2px)"})
	.out("circle", {cx: 21, cy: 9, r: 2.5, style: "transform:translateX(2px)"})
	.out("circle", {cx: 33, cy: 9, r: 2.5, style: "transform:translateX(2px)"});
$(".menu-bar nav").render("div", {class: "items-middle-menubar menubar-section ydNrdEUSf cit8okVvn", style: "padding:4px 18px"})
	.in("div", {class: "search-user v4iaSbHTz YME4cUU0s Q3m1TjFEg exr9QQpyT QPou3Wze0 x50ncvXCb"})
	.in("div", {class: "search-icon"})
	.in("svg", {width: 16, height: 16, style: "transform:rotate(90deg)", viewBox: "0 0 60 60"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#search"}).parent().parent()
	.out("div", {style: "font-size:13px"})
	.in("span", "Search and send note...");
commonprop={fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": 1};
$(".menu-bar nav").render("div", {class: "items-right-menubar menubar-section ydNrdEUSf x50ncvXCb QPou3Wze0"})
	.in("div", {class: "rgOmUTXB5", ariaLabel: "Toggle Primary Side Bar (Ctrl+B)"})
	.in("div", {class: "side-bar-toggler menu-list mb-sbt toggler-item A6tyEeQ0U active", ariaLabel: "Toggle Primary Side Bar (Ctrl+B)", title: "Toggle Primary Side Bar (Ctrl+B)"})
	.in("svg", {width: 20, height: 20, viewBox: "0 0 24 24"})
	.in("g", commonprop)
	.in("rect", {width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2}).out("path", {d: "M9 3v18"})
$(".items-right-menubar")
	.in("div", {class: "rgOmUTXB5", ariaLabel: "Toggle Terminal Panel (Ctrl+T)"})
	.in("div", {class: "terminal-panel-toggler menu-list mb-tpt toggler-item A6tyEeQ0U", ariaLabel: "Toggle Terminal Panel (Ctrl+T)", title: "Toggle Terminal Panel (Ctrl+T)"})
	.in("svg", {width: 20, height: 20, viewBox: "0 0 24 24", style: "transform:rotate(-90deg)"})
	.in("g", commonprop)
	.in("rect", {width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2}).out("path", {d: "M9 3v18"})
$(".items-right-menubar")
	.in("div", {class: "rgOmUTXB5", ariaLabel: "Toggle Secondry Side Bar (Ctrl+Alt+B)"})
	.in("div", {class: "secondry-sidebar-toggler menu-list mb-ssbt toggler-item A6tyEeQ0U", ariaLabel: "Toggle Secondry Side Bar (Ctrl+Alt+B)", title: "Toggle Secondry Side Bar (Ctrl+Alt+B)"})
	.in("svg", {width: 20, height: 20, viewBox: "0 0 24 24", style: "transform:rotate(-180deg)"})
	.in("g", commonprop)
	.in("rect", {width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2}).out("path", {d: "M9 3v18"})
$(".items-right-menubar")
	.in("div", {class: "rgOmUTXB5", ariaLabel: "Customize Layout"})
	.in("div", {class: "layout-customizer menu-list mb-tpt toggler-item A6tyEeQ0U", ariaLabel: "Customize Layout", title: "Customize Layout"})
	.in("svg", {width: 20, height: 20, viewBox: "-0.5 -0.5 48 48"})
	.in("path", $.extend(commonprop, {d: "m2.9375 5.8691249999999995 0 35.25a2.9375 2.9375 0 0 0 2.9375 2.9375l35.25 0a2.9375 2.9375 0 0 0 2.9375 -2.9375l0 -35.25a2.9375 2.9375 0 0 0 -2.9375 -2.9375l-35.25 0a2.9375 2.9375 0 0 0 -2.9375 2.9375Z"}))
	.out("path", $.extend(commonprop, {d: "m23.505875 44.056625 0 -41.125"}))
	.out("path", $.extend(commonprop, {d: "m23.505875 23.494125 19.583333333333332 0"}));

/* []
-------------------------------------------------------------------------------------------------*/
$("#content").render("div", {class: "grid-inline-view grid-main-view Q3m1TjFEg A6tyEeQ0U"})
	.in("div", {class: "notes-grid-full-brunch Q3m1TjFEg YiVmwrNp2"})
	.in("div", {class: "notes-grid-view Q3m1TjFEg YiVmwrNp2"})
	.in("div", {class: "notes-scrollable-element Q3m1TjFEg YiVmwrNp2 A6tyEeQ0U CGA3xkcxA", role: "presentation"})
	.in("div", {class: "split-view-container Q3m1TjFEg YiVmwrNp2 A6tyEeQ0U CGA3xkcxA x50ncvXCb"})
	.in("div", {class: "tick-sash-container sash-2 BO1Zf4qbZ Gok2N2nEj x9rndxQy7"})
	.in("div", {class: "vertical resize-ps b-sash swDoDxaKt Gok2N2nEj g00OW6qIq YiVmwrNp2"})
	.out("div", {class: "vertical resize-ss hidden b-sash swDoDxaKt Gok2N2nEj g00OW6qIq YiVmwrNp2"})
$(".split-view-container").render("div", {class: "A6tyEeQ0U BO1Zf4qbZ CGA3xkcxA", role: "presentation"})
	.in("div", {class: "A6tyEeQ0U BO1Zf4qbZ CGA3xkcxA x50ncvXCb view-midwrap"});

/* [Activity-Bar Rendring]
-------------------------------------------------------------------------------------------------*/
$(".view-midwrap").render("div", {class: "wsnormal left-activity-bar YiVmwrNp2 Gok2N2nEj", style: "left:0;width:48px"})
	.in("div", {class: "Q3m1TjFEg YiVmwrNp2 CGA3xkcxA wsnormal", style: "background-color:var(--notesvar-activity-bar-background);color:var(--notesvar-activity-bar-color)"})
	.in("div", {class: "content stDgdv64V Ywy5pKll8 YiVmwrNp2 activity-wrap"});
$(".activity-wrap").render("div", {class: "middle-bar"})
	.in("div", {class: "notes-action-bar v-activity"})
	.in("ul", {class: "YiVmwrNp2 Q3m1TjFEg M9kkyExmG activity-ul"});
classes="actvity-label CGA3xkcxA ydNrdEUSf YME4cUU0s v4iaSbHTz";
$(".activity-ul").render("li", {title: "Follow Github", class: "active"})
	.in("div", {class: classes})
	.in("svg", {width: 30, height: 30, viewBox: "0 0 48 48", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#github"});
$(".activity-ul").render("li", {title: "More Menu Bar Options", class: "smore-opt hidden"})
	.in("div", {class: classes, style: "height:30px;"})
	.in("div", {class: classes + " icon-more", style: "width:16px;height:16px;"})
	.in("div", {class: "line1 x-line", style: "--bgcolor:var(--notesvar-activity-bar-color)"})
	.out("div", {class: "line2 x-line", style: "--bgcolor:var(--notesvar-activity-bar-color)"})
	.out("div", {class: "line3 x-line", style: "--bgcolor:var(--notesvar-activity-bar-color)"});
$(".activity-ul").render("li", {title: "Toggle Explorer", class: "optwith active explorer"})
	.in("div", {class: classes})
	.in("svg", {width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#notes"});
$(".activity-ul").render("li", {title: "Search Notes", class: "search-note optwith"})
	.in("div", {class: classes, style: "padding-right:5px"})
	.in("svg", {width: 24, height: 24, viewBox: "0 0 60 60", style: "transform:rotate(90deg)", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#search"});
$(".activity-ul").render("li", {title: "Create Untitled Note", class: "opt-add-untitled-note optwith"})
	.in("div", {class: classes, style: "padding-right:5px"})
	.in("svg", {width: 24, height: 24, viewBox: "0 0 122.88 122.45", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#write"});
$(".activity-ul").render("li", {title: "App themes", ariaLabel: "App themes", class: "optwith"})
	.in("div", {class: classes, style: "padding-right:5px"})
	.in("svg", {width: 24, height: 24, viewBox: "0 0 122.88 98.21", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#themes"});
$(".activity-wrap").render("div", {class: "bottom-bar"})
	.in("div", {class: "notes-bottom-bar v-activity"})
	.in("ul", {class: "YiVmwrNp2 Q3m1TjFEg M9kkyExmG collapse-ul"});
$(".activity-wrap .collapse-ul").render("li", {title: "User Account", ariaLabel: "User Account"})
	.in("div", {class: classes})
	.in("svg", {width: 30, height: 30, viewBox: "0 0 1024 1024"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#userprofile"});
$(".activity-wrap .collapse-ul").render("li", {title: "Settings", class: "settings-opener scopener", ariaLabel: "Settings"})
	.in("div", {class: classes})
	.in("svg", {width: 25.5, height: 25.5, viewBox: "0 0 333 333"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#settings"});

/* [PrimarySideBar Rendring]
-------------------------------------------------------------------------------------------------*/
$(".view-midwrap").render("div", {class: "primary-side-bar Gok2N2nEj YiVmwrNp2 wsnormal", "data-selector": "primarySideBar"})
	.in("div", {class: "BO1Zf4qbZ CGA3xkcxA wsnormal sidebar-view"})
	.in("div", {class: "stDgdv64V BO1Zf4qbZ CGA3xkcxA parent"});
$(".view-midwrap .parent").render("div", {class: "ajax-sash ps-ajax-sash-loader note-sash-loader"})
	.in("div", {class: "s-horizontal Gok2N2nEj g9QmVPFJw Q3m1TjFEg"});
$(".view-midwrap .parent").render("div", {class: "sticky-top", style: "z-index:1"});
$(".parent .sticky-top").render("div", {class: "explorer view-1 ydNrdEUSf YME4cUU0s"})
	.in("div", {class: "view-label cit8okVvn Eo7E6F84I"})
	.in("span", "Explorer").parent()
	.out("div", {class: "optsout primary-more-action xenderfire sma1"})
	.in("svg", {width: 22, height: 22, viewBox: "0 0 48 14", fill: "currentColor", "stroke-width": 0})
	.in("circle", {cx: 9, cy: 9, r: 2.5,style: "transform:translateX(2px)"})
	.out("circle", {cx: 21, cy: 9, r: 2.5,style: "transform:translateX(2px)"})
	.out("circle", {cx: 33, cy: 9, r: 2.5,style: "transform:translateX(2px)"});
$(".parent .sticky-top").render("div", {class: "view-2 ydNrdEUSf YME4cUU0s"})
	.in("div", {class: "cit8okVvn CGA3xkcxA"})
	.in("h3", {class: "Eo7E6F84I"}, "notes manager").parent()
	.out("div", {class: "fnoDqvqOH QPou3Wze0 xender", style: "column-gap:2px"});
$(".parent .xender").render("div", {class: "ctrl-item A6tyEeQ0U reload-notes", title: "Refresh Notes", ariaLabel: "Refresh Notes", role: "button"})
	.in("svg", {width: 14, height: 14, viewBox: "0 0 50 50", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#reload"});
$(".parent .xender").render("div", {class: "ctrl-item A6tyEeQ0U btn-add-note", title: "Add Note", ariaLabel: "Add Note"})
	.in("div", {class: "plus Gok2N2nEj"}, "+")
	.out("svg", {width: 14, height: 14, viewBox: "0 0 16 16", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#addnote"});
$(".parent .sticky-top").render("div", {class: "search-field search-notes-list hidden"})
	.in("div", {class: "search-view A6tyEeQ0U"})
	.in("form", {class: "Q3m1TjFEg YiVmwrNp2"})
	.in("input", {type:"text", class: "Q3m1TjFEg YiVmwrNp2", name: "search-note", id: "r_search_note", spellCheck: false, placeholder: "Search notes", autocomplete: "off"}).parent()
	.out("div", {class: "icon-filter icon Gok2N2nEj g9QmVPFJw fnoDqvqOH YiVmwrNp2 J4FO5DQyr"})
	.in("svg", {width:14, height:14, viewBox:"0 0 64 64", fill:"none", id: "filter", stroke:"currentColor"})
	.in("polygon", {fill:"none", stroke:"currentColor", "stroke-miterlimit":10, "stroke-width":4, points: "2 6 2 10 26 34 26 58 38 58 38 34 62 10 62 6 2 6"}).parent().parent()
	.out("div", {class: "icon-search icon Gok2N2nEj g9QmVPFJw fnoDqvqOH YiVmwrNp2"})
	.in("svg", {width: 14, height: 14, viewBox: "0 0 60 60"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#search"});
$(".view-midwrap .parent").render("div", {class: "main F5OYIlxgO KrebH1xCG A6tyEeQ0U"})
	.in("div", {class: "bring-cap Gok2N2nEj BO1Zf4qbZ PMiBu3q7U", style: "z-index:1"})
	.out("div", {class: "scrollbar-track v-track sidebar-track disabled hidden"})
	.in("div", {class: "scrollbar-thumb"}).parent()
	.out("div", {class: "BO1Zf4qbZ KrebH1xCG A6tyEeQ0U czWrKt71F scrollable-side-bar"})
	.in("ul", {class: "stDgdv64V A6tyEeQ0U note-list view-note-list outline", style: "padding-bottom:10px;z-index:11"})
	.out("div", {class: "create-new-note hidden A6tyEeQ0U", style: "padding:2px 15px;z-index:111", ariaHidden: "true"})
	.in("form", {class: "BO1Zf4qbZ", id: "create_note_form"})
	.in("input", {type:"text", class: "Q3m1TjFEg YiVmwrNp2", id: "new_note", spellCheck: false, autocomplete: "off", ariaHidden: true}).parent()
	.out("div", {class: "alert-box Gok2N2nEj hidden"});

/* []
-------------------------------------------------------------------------------------------------*/
$(".view-midwrap").render("div", {class: "bsplit-view-container Gok2N2nEj wsnormal YiVmwrNp2"})
	.in("div", {class: "BO1Zf4qbZ CGA3xkcxA A6tyEeQ0U parent-view"})
	.in("div", {class: "ajax-sash note-loader-sash note-sash-loader"})
	.in("div", {class: "s-horizontal Gok2N2nEj g9QmVPFJw Q3m1TjFEg"});

/* [TAB-Bar Rendring]
-------------------------------------------------------------------------------------------------*/
$(".parent-view").render("div", {class: "tab-bar A6tyEeQ0U g9QmVPFJw Q3m1TjFEg"})
	.in("div", {class: "view-tab BO1Zf4qbZ CGA3xkcxA ydNrdEUSf QPou3Wze0 xender"});
$(".parent-view .xender").render("div", {class:"items-left CGA3xkcxA cit8okVvn", style:"min-width:160px"})
	.in("div", {class: "dbl-new-note tab-bringcap BO1Zf4qbZ EGaSa3sXQ czWrKt71F x50ncvXCb YdoDMzzAi"})
	.in("ul", {class: "note-list context-list YiVmwrNp2 exr9QQpyT scrollable-active-tab-bar"});
$(".parent-view .xender").render("div", {class: "item-middle item-center hidden ydNrdEUSf item-view"})
	.in("div", {class: "wc-counter"})
	.in("span", {class: "Eo7E6F84I", title: "Words"}, 'W:&nbsp;<span class="xbr-words">0</span>/<span class="words-counter">0</span>')
	.out("span", {title: "Characters"}, ',&nbsp;C:<span class="xbr-chars">0</span>/<span class="chars-counter">0</span>');
$(".parent-view .xender").render("div", {class: "items-right item-view"})
	.in("div", {class: "exr9QQpyT BO1Zf4qbZ pvx", style: "column-gap:7px"});
classes="tab-item rgOmUTXB5 disabled hidden";
$(".pvx").render("div", {class:classes, role:"button", title:"Mail Note", ariaLabel: "Mail Note"})
	.in("svg", {height: 20, width: 20, viewBox: "0 0 512 512", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#mail"});
$(".pvx").render("div", {class:classes, role:"button", title:"Share Note", ariaLabel: "Share Note"})
	.in("svg", {height: 18, width: 18, viewBox: "0 0 48 48", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#share_note"});
$(".pvx").render("div", {class:classes, role:"button", title:"Send Note", ariaLabel: "Send Note"})
	.in("svg", {height: 19, width: 19, viewBox: "0 0 256 256", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#sender"});
$(".pvx").render("div", {class:classes, role:"button", title:"Encrypt Note", ariaLabel: "Encrypt Note"})
	.in("svg", {height: 19, width: 19, viewBox: "0 0 256 256", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#notelocker"});
$(".pvx").render("div", {class:classes, role:"button", title:"Hide Note", ariaLabel: "Hide Note"})
	.in("svg", {height: 18, width: 18, viewBox: "0 0 24 24", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#eyeoff"});
$(".pvx").render("div", {class:classes, role:"button", title:"Tools", ariaLabel: "Tools"})
	.in("svg", {height: 18, width: 18, viewBox: "0 0 32 32", fill: "currentColor"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#tools"});
$(".pvx").render("div", {class: "optsout rgOmUTXB5", role: "button", title: "More Actions...", ariaLabel: "More Actions"})
	.in("svg", {height: 22, width: 22, viewBox: "0 0 48 14", fill: "currentColor", "stroke-width": 0})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#threedot"});

/* [Mirrorwrap Rendring]
-------------------------------------------------------------------------------------------------*/
$(".parent-view").render("div", {class: "YiVmwrNp2 notes-view-split-container"})
	.in("div", {class: "BO1Zf4qbZ A6tyEeQ0U", style: "background-color:var(--notesvar-editor-notes-view-background)"})
	.in("div", {class: "view-note-editor vnexender"});
$(".vnexender").render("div", {class: "A6tyEeQ0U mirror-scroll-collapse czWrKt71F EGaSa3sXQ notes-editable-container", style: "overflow:auto"})
	.in("div", {class: "Gok2N2nEj notes-line-counter mirror-customizer notes-theme-template", style: "position:fixed;transform:translate3d(0,0,0);top:0;width:68px", "data-selector": "lineCounter"})
	.out("div", {class: "Gok2N2nEj notes-theme-template notes-eitable-scrollable-element mirror-customizer"})
	.in("div", {class: "scrollable-mirror BO1Zf4qbZ Gok2N2nEj stDgdv64V", style: "top:0;left:0", "data-box": "editable"})
	.in("div", {class: "title-notes"})
	.in("textarea", {autocorrect: "off", autocapitalize: "off", autocomplete: "off", spellCheck: false, ariaLabel: "Title", ariaRequired: false, tabindex: 1, role: "textbox", ariaRoledescription: "Notes", ariaMultiline: true, ariaAutocomplete: "both", class: "czWrKt71F", rows: 1, id: "title", placeholder: "Title Notes"})
	.out("div", {class: "address-bar ydNrdEUSf", style: "flex-wrap:wrap"})
	.in("div", {class: "date-time x50ncvXCb"})
	.in("span", {class: "date"})
	.out("span", "&nbsp;")
	.out("span", {class: "time"}).parent()
	.out("div", {class: "characters addr-chars chars-counter x50ncvXCb"}).in("span", {class: ":jsp"});
$("div[data-box=editable]").render("div", {class: "title-alert Gok2N2nEj hidden", style: "word-wrap:break-word;font-size:12px;padding:4px 8px;margin-top:3px;width:calc(100% - 30px);color:var(--notesvar-sidebar-alert-box-font-color);background-color:var(--notesvar-sidebar-alert-box-background);border:var(--notesvar-sidebar-border-tree);z-index:111;max-width:300px"})
	.out("div", {contenteditable: true, autocorrect: "off", class: "F5OYIlxgO area-editable", autocapitalize: "off", autocomplete: "off", spellCheck: false, ariaLabel: "Note Editable Mirror", autofocus: true, ariaRequired: false, tabindex: 2, role: "textbox", ariaRoledescription: "Notes", ariaMultiline: true, ariaAutocomplete: "both", style: "padding-bottom:100px"})
	.in("div", {class: "line"}, "<br/>");
$(".vnexender").render("div", {"data-selector": "minimap", class: "Gok2N2nEj section-map-view mirror-scroll-collapse YiVmwrNp2 CSmLJf g9QmVPFJw", style: "width:100px"})
	.in("canvas", {class: "Gok2N2nEj x9rndxQy7 primary-map minimap YiVmwrNp2 CSmLJf g9QmVPFJw Q3m1TjFEg", style: "color:var(--notesvar-minimap-font-color);--secondry-color:var(--notesvar-minimap-font-color-b)"})
	.out("canvas", {class: "Gok2N2nEj x9rndxQy7 secondry-map minimap YiVmwrNp2 CSmLJf g9QmVPFJw Q3m1TjFEg", style: "color:var(--notesvar-minimap-font-color);--secondry-color:var(--notesvar-minimap-font-color-b)"})
	.out("div", {class: "Gok2N2nEj Q3m1TjFEg g9QmVPFJw minimap custom-thumb map-slider"})
	.out("div", {class: "scrollbar-track psb-track v-track sidebar-track track-y CSmLJf"})
	.in("div", {class: "scrollbar-thumb"});
$(".vnexender").render("div", {class: "horizontal-scrollbar"})
	.in("div", {class: "scrollbar-track h-track sidebar-track track-x CSmLJf"})
	.in("div", {class: "scrollbar-thumb"});
$(".vnexender").render("div", {class: "sticky-alert-popup Gok2N2nEj align-x-center"});

/* [Find/Replace Rendring]
-------------------------------------------------------------------------------------------------*/
$(".vnexender").render("div", {class: "find-replace-wrap Gok2N2nEj g9QmVPFJw J4FO5DQyr"})
	.in("div", {class: "A6tyEeQ0U CGA3xkcxA", style: "margin-right:15px;width:343px;"})
	.in("div", {class: "CGA3xkcxA A6tyEeQ0U Q3m1TjFEg ydNrdEUSf QPou3Wze0 fr-xender"});
$(".fr-xender").render("div", {class: "fr-toggler"})
	.in("svg", {width: 20, height: 20, fill: "currentColor", viewBox: "0 0 24 24"})
	.in("path", {d: "M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z"});
$(".fr-xender").render("div", {class: "cit8okVvn A6tyEeQ0U CGA3xkcxA fr-container"});

/* [Terminal Rendring]
-------------------------------------------------------------------------------------------------*/
$(".parent-view").render("div", {class: "terminal-container-view hidden Gok2N2nEj YmTgUJgfF", ariaHidden: true, ariaLabel: "Terminal Section", "data-selector": "terminal"})
	.in("div", {class: "tick-sash-container sash-2 BO1Zf4qbZ Gok2N2nEj x9rndxQy7"})
	.in("div", {class: "horizontal terminal-resizer b-sash swDoDxaKt Gok2N2nEj g00OW6qIq YiVmwrNp2"});
$(".terminal-container-view").render("div", {class: "stDgdv64V BO1Zf4qbZ CGA3xkcxA terminal-wrap"});
$(".terminal-wrap").render("div", {class: "terminal-topbar"})
	.in("div", {class: "ydNrdEUSf QPou3Wze0", style: "height:35px"})
	.in("ul", {class: "ydNrdEUSf GdiC29Du3 cit8okVvn", style: "column-gap:18px"})
	.in("li", {class: "x50ncvXCb", ariaLabel: "Terminal", role: "button"}, "Terminal")
	.out("li", {class: "x50ncvXCb", ariaLabel: "Authentication", role: "button"}, "Authentication")
	.out("li", {class: "x50ncvXCb", ariaLabel: "Servers", role: "button"}, "Servers").parent()
	.out("div", {class: "ydNrdEUSf QPou3Wze0 YME4cUU0s xtb xender"});
$(".xtb.xender").render("div", {role: "button", style: "margin-right:8px"})
	.in("svg", {width: 16, height: 16, fill: "none", viewBox: "0 0 20 18"})
	.in("path", {d: "m5 5 4 4-4 4m5 0h5M2 1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"});
$(".xtb.xender").render("div", {role: "button", class: "optsout rgOmUTXB5", title: "More Options", ariaLabel: "More Options"})
	.in("svg", {width: 22, height: 22, fill: "currentColor", viewBox: "0 0 48 14", "stroke-width": 0})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#threedot"});
$(".xtb.xender").render("div", {role: "button", class: "controller", title: "Maximize Panel Size", ariaLabel: "Maximize Panel Size"})
	.in("svg", {width: 11, height: 11, fill: "none", viewBox: "0 0 14 8", "stroke-width": 0})
	.in("path", {d: "m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"});
$(".xtb.xender").render("div", {role: "button", class: "controller close-panel", title: "Close Panel", ariaLabel: "Close Panel"})
	.in("svg", {width: 11, height: 11, fill: "none", viewBox: "0 0 14 14", "stroke-width": 0})
	.in("path", {d: "m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"});
$(".terminal-wrap").render("div", {class: "terminal-grid-view"})
	.in("div", {class: "scrollbar-track v-track CSmLJf"})
	.in("div", {class: "scrollbar-thumb"}).parent()
	.in("div", {class: "BO1Zf4qbZ KrebH1xCG czWrKt71F", role: "presentation", id: "terminal", style: "padding:10px 18px 8px 18px;cursor:text"})
	.in("div", {class: "executed-command"})
	.out("div", {class: "command-view present-cmd-view"});
$(".present-cmd-view").render("form", {class: ":jsp"})
	.in("div", {contenteditable: true, autocomplete: "off", class: "textarea", autocapitalize: "off", spellCheck: false, autocorrect: "off", ariaLabel: "Terminal cmd", ariaRequired: false, tabindex: 1, role: "textbox", ariaRoledescription: "Terminal", ariaMultiline: true, ariaAutocomplete: "both", ariaHidden: true, autofocus: true, name: "command", style: "overflow:hidden;opacity:0;white-space:nowrap;resize:none;width:1px;height:1px;top:0;left:0;position:absolute"});
$(".present-cmd-view").render("div", {class: "ydNrdEUSf A6tyEeQ0U", id: "command", style: "column-gap:6px"})
	.in("div", {class: "namespace", "data-default-namespace": "[notes-terminal](∼):"}, "[notes-terminal](∼):")
	.out("div", {class: "cli-wrap"})
	.in("div", {class: "cli-cursor"}).in("div", {class: "caret"});

/* [WEB-Interface Rendring]
-------------------------------------------------------------------------------------------------*/
$(".bsplit-view-container").render("div", {class: "web-interface dbl-new-note Gok2N2nEj BO1Zf4qbZ CGA3xkcxA PMiBu3q7U stDgdv64V"})
	.in("div", {class: "Xd6G1wnM1 stDgdv64V YME4cUU0s interface", style: "row-gap:18px"});
$(".interface").render("div", {class: "stDgdv64V v4iaSbHTz LuYXzGx6Q", style: "row-gap:11px"})
	.in("div", {class: "applogo"})
	.in("svg", {fill: "currentColor", viewBox: "0 0 60 60"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#n4"}).parent().parent()
	.out("div", {class: "appname"})
	.in("h1", "Notes Manager");
$(".interface").render("div", {class: "LuYXzGx6Q stDgdv64V YME4cUU0s"})
	.in("span", "Boost or Improve more notes security and storage Signup or Login now?")
	.out("div", {class: "cradential ydNrdEUSf YME4cUU0s GdiC29Du3"})
	.in("a", {class: "hunderline", "data-href": "signup", href: "/"}, "Signup")
	.out("a", {class: "hunderline", "data-href": "login", href: "/"}, "Login");

/* [SecondrySidebar Rendring]
-------------------------------------------------------------------------------------------------*/
$(".view-midwrap").render("div", {class: "secondry-side-bar Gok2N2nEj hidden YiVmwrNp2 wsnormal", "data-selector": "secondrySideBar"})
	.in("div", {class: "BO1Zf4qbZ CGA3xkcxA wsnormal sidebar-view"})
	.in("div", {class: "stDgdv64V BO1Zf4qbZ CGA3xkcxA xmapwrap"})
	.in("div", {class: "ajax-sash ps-ajax-sash-loader note-sash-loader"})
	.in("div", {class: "s-horizontal s-map Gok2N2nEj g9QmVPFJw Q3m1TjFEg"}).parent()
	.out("div", {class: "sticky-top xsendwrap", style: "z-index:1"});
$(".xsendwrap").render("div", {class: "view-1 ydNrdEUSf YME4cUU0s"})
	.in("div", {class: "view-label cit8okVvn Eo7E6F84I"})
	.in("span", "search with").parent()
	.out("div", {class: "optsout secondry-more-action xenderfire sma2"})
	.in("svg", {width: 22, height: 22, viewBox: "0 0 48 14", fill: "currentColor", "stroke-width": 0})
	.in("circle", {cx: 9, cy: 9, r: 2.5, style: "transform:translateX(2px)"})
	.out("circle", {cx: 21, cy: 9, r: 2.5, style: "transform:translateX(2px)"})
	.out("circle", {cx: 33, cy: 9, r: 2.5, style: "transform:translateX(2px)"})
$(".xsendwrap").render("div", {class: "search-field"})
	.in("div", {class: "search-view A6tyEeQ0U"})
	.in("form", {class: "Q3m1TjFEg YiVmwrNp2"})
	.in("input", {type: "text", class: "Q3m1TjFEg YiVmwrNp2", spellCheck: false, id: "r_search_note", placeholder: "Search notes map", autocomplete: "off"});
$(".xsendwrap .search-view").render("div", {class: "icon-filter icon Gok2N2nEj g9QmVPFJw fnoDqvqOH YiVmwrNp2 J4FO5DQyr"})
	.in("svg", {width: 14, height: 14, viewBox: "0 0 64 64", id: "mfilter"})
	.in("polygon", {fill:"none", stroke:"currentColor", "stroke-miterlimit": 10, "stroke-width": 4, points: "2 6 2 10 26 34 26 58 38 58 38 34 62 10 62 6 2 6"});
$(".xsendwrap .search-view").render("div", {class: "icon-search icon Gok2N2nEj g9QmVPFJw fnoDqvqOH YiVmwrNp2"})
	.in("svg", {width: 14, height: 14, viewBox: "0 0 60 60"})
	.in("use", {xlink: "svg/notesmanager.svgall.svg#search"});
$(".xmapwrap").render("div", {class: "main map-view F5OYIlxgO CGA3xkcxA A6tyEeQ0U czWrKt71F"})
	.in("div", {class: "scrollbar-track v-track sidebar-track disabled hidden"})
	.in("div", {class: "scrollbar-thumb"}).parent()
	.out("div", {class: "BO1Zf4qbZ KrebH1xCG A6tyEeQ0U czWrKt71F scrollable-view scrollable-side-bar"})
	.in("ul", {class: "stDgdv64V view-map-list", style: "row-gap:6px;padding-bottom:10px"});

/* [Status-Bar Rendring]
-------------------------------------------------------------------------------------------------*/
commonprop={width:15, height:15, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round"};
classes="sb-item rgOmUTXB5 eCzF3EuiP hidden ";
$("#content").render("div", {class: "status-bar Q3m1TjFEg Gok2N2nEj"})
	.in("footer", {class: "YiVmwrNp2 ydNrdEUSf ZROFGhuL9 Ywy5pKll8", ariaLabel: "Status Bar"})
	.in("div", {class: "items-container sb-right-items ydNrdEUSf YME4cUU0s ZROFGhuL9 GdiC29Du3"})
	.in("div", {class: classes + "notification YiVmwrNp2", ariaLabel: "Notifications", "data-label": "Notifications", "data-selector": "notification"})
	.in("div", {class: "statusbar-items-label item-notification Eo7E6F84I YiVmwrNp2", role: "button"})
	.in("div", {style: "height:100%;display:flex;align-items:center"})
	.in("svg", commonprop)
	.in("path", {d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"})
	.out("path", {d: "M13.73 21a2 2 0 0 1-3.46 0"});
$(".sb-right-items").render("div", {class: classes + "CRLF visual-item", ariaLabel: "CRLF", "data-label": "Select End of Line Sequence", "data-selector": "CRLF"})
	.in("div", {class: "statusbar-items-label item-CRLF Eo7E6F84I", role: "button", ariaLabel: "CRLF"})
	.in("span", "CRLF");
$(".sb-right-items").render("div", {class: classes + "charset visual-item", ariaLabel: "Charset", "data-label": "Charset", "data-selector": "charset"})
	.in("div", {class: "statusbar-items-label item-charset Eo7E6F84I", role: "button", ariaLabel: "Charset"})
	.in("span", "UTF-8");
$(".sb-right-items").render("div", {class: classes + "char-counter visual-item", ariaLabel: "Charaters", "data-label": "Charaters", "data-selector": "charCounter"})
	.in("div", {class: "statusbar-items-label item-chars Eo7E6F84I", role: "button", ariaLabel: "Charaters"})
	.in("span", "Char:&nbsp;").in("span", {class: "xbr-chars"}, '1');
$(".sb-right-items").render("div", {class: classes + "tab-size visual-item", ariaLabel: "Tab Size", "data-label": "Tab Size", "data-selector": "tabSize"})
	.in("div", {class: "statusbar-items-label item-tab Eo7E6F84I", role: "button", ariaLabel: "Tab Size"})
	.in("span", "Tab Size&nbsp;").in("span", {class: "xbr-tab"}, '2');
$(".sb-right-items").render("div", {class: classes + "space-counter visual-item", ariaLabel: "Spaces", "data-label": "Spaces", "data-selector": "spaceCounter"})
	.in("div", {class: "statusbar-items-label item-spaces Eo7E6F84I", role: "button", ariaLabel: "Spaces"})
	.in("span", "Spaces&nbsp;").in("span", {class: "xbr-spaces"}, '0');
$(".sb-right-items").render("div", {class: classes + "line-column visual-item", ariaLabel: "Line Column", "data-label": "Go to Line/Column", "data-selector": "lineColumn"})
	.in("div", {class: "statusbar-items-label item-line-column Eo7E6F84I", role: "button", ariaLabel: "Line Column"})
	.in("span", "Ln:&nbsp;").in("span", {class: "xbr-lines"}, '1').parent()
	.out("span", ", Col:&nbsp;").in("span", {class: "xbr-columns"}, '1');
commonprop.width=commonprop.height=14;
$(".sb-right-items").render("div", {class: classes + "visual-item Write mode", role: "presentation", ariaLabel: "Write Mode", "data-label": "Write Mode", "data-selector": "writeMode"})
	.in("div", {class: "statusbar-items-label write-mode item-wmode Eo7E6F84I stopped", role: "button", ariaLabel: "Write mode"})
	.in("div", {class: "fnoDqvqOH", style: "column-gap:5px"})
	.in("svg", commonprop)
	.in("path", {d: "M12 20h9"})
	.out("path", {d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"}).parent()
	.out("svg", $.extend(commonprop, {class: "stop-pen"}))
	.in("path", {d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"}).parent()
	.out("span", {class: "note-writing-mode"}, "Stopped");
commonprop["class"]="upper";
$(".status-bar footer").render("div", {class: "items-container sb-left-items ydNrdEUSf YME4cUU0s GdiC29Du3"})
	.in("div", {class: "sb-item remote-transfer rgOmUTXB5 YiVmwrNp2 eCzF3EuiP remote-opt hidden", ariaLabel: "Remote", "data-label": "Send Remote Notes online", "data-selector": "remoteTransfer"})
	.in("div", {class: "statusbar-items-label item-remote Eo7E6F84I YiVmwrNp2", role: "button", ariaLabel: "Remote"})
	.in("div", {class: "fnoDqvqOH YiVmwrNp2", style: "column-gap:5px"})
	.in("svg", commonprop)
	.in("polyline", {points: "9 18 15 12 9 6"}).parent()
	.out("svg", (commonprop.class="lower", commonprop))
	.in("polyline", {points: "15 18 9 12 15 6"});
commonprop.width=commonprop.height=16; delete commonprop["class"];
$(".sb-left-items").render("div", {class: "sb-item rgOmUTXB5 YiVmwrNp2 eCzF3EuiP hidden", ariaLabel: "Network", "data-label": "Network Connection", "data-selector": "networkStatus"})
	.in("div", {class: "statusbar-items-label item-network Eo7E6F84I YiVmwrNp2", role: "button", ariaLabel: "Network"})
	.in("div", {class: "fnoDqvqOH YiVmwrNp2", style: "column-gap:5px;"})
	.in("div", {class: "network online", style: "height:100%;display:flex;align-items:center"})
	.in("svg", commonprop)
	.in("circle", {cx: 12, cy: 12, r: 2})
	.out("path", {d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"});
commonprop.width=commonprop.height=14;
$(".sb-left-items").render("div", {class: "sb-item visual-item rgOmUTXB5 eCzF3EuiP hidden", ariaLabel: "Links", "data-label": "Select Links", "data-selector": "linkCounter"})
	.in("div", {class: "statusbar-items-label item-links Eo7E6F84I", role: "button", ariaLabel: "Links"})
	.in("div", {class: "fnoDqvqOH", style: "column-gap:5px"})
	.in("svg", commonprop)
	.in("path", {d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"})
	.out("path", {d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}).parent()
	.out("span", "Links:&nbsp;")
	.in("span", {class: "xbr-link"}, '0')
	.out("span", "/")
	.out("span", {class: "link-counter"}, '0');
$(".sb-left-items").render("div", {class: "sb-item rgOmUTXB5 visual-item eCzF3EuiP title-active hidden", ariaLabel: "Active", "data-label": "Current Active", "data-selector": "titleActive"})
	.in("div", {class: "statusbar-items-label item-ative Eo7E6F84I", role: "button", ariaLabel: "Active"})
	.in("div", {class: "fnoDqvqOH", style: "column-gap:5px"})
	.in("svg", commonprop)
	.in("polygon", {points: "12 2 2 7 12 12 22 7 12 2"})
	.out("polyline", {points: "2 17 12 22 22 17"})
	.out("polyline", {points: "2 12 12 17 22 12"}).parent()
	.out("span", "Active:&nbsp;")
	.in("span", {class: "s-title-active"});
$(".sb-left-items").render("div", {class: "sb-item rgOmUTXB5 eCzF3EuiP screen-toggle hidden", ariaLabel: "Maximize Minimize", "data-label": "Toggle Screen", "data-selector": "screenToggle"})
	.in("div", {class: "statusbar-items-label item-toggle-screen Eo7E6F84I full-screen", role: "button", ariaLabel: "Maximize Minimize"})
	.in("div", {class: "fnoDqvqOH", style: "column-gap:5px"})
	.in("svg", $.extend(commonprop, {class: "fs sctoggle"}))
	.in("use", {xlink: "svg/notesmanager.svgall.svg#fullscreen"}).parent()
	.out("svg", $.extend(commonprop, {class: "efs sctoggle"}))
	.in("use", {xlink: "svg/notesmanager.svgall.svg#exitscreen"}).parent()
	.out("span", {class: ":jsp"})
	.in("span", {class: "screen"}, "Full Screen");
$(".sb-left-items").render("div", {class: "sb-item rgOmUTXB5 eCzF3EuiP visual-item save-status hidden", ariaLabel: "Save Status", "data-label": "Save Status", "data-selector": "autoSave"})
	.in("div", {class: "statusbar-items-label item-save-status Eo7E6F84I", role: "button", ariaLabel: "Save Status"})
	.in("div", {class: "fnoDqvqOH", style: "column-gap:5px"})
	.in("svg", $.extend(commonprop, {class: "expect-path icon-saved", style: "stroke-width: 2"}))
	.in("polyline", {points: "20 6 9 17 4 12"}).parent()
	.out("svg", $.extend(commonprop, {class: "icon-watch", viewBox: "0 0 512.055 512.055", fill:"currentColor"}))
	.in("use", {xlink: "svg/notesmanager.svgall.svg#watch_mirror"}).parent()
	.out("span", "Watching...");
})();

function createList(n,e,i,t){$.each(n,(function(n,o){i['data-name']=o;i.ariaLabel=o.concat(" List Item"),$(".menubar-list").render(e,i).append(t[n])}))}function createCommon(n,e,i){var t=[];return $.each(n,(function(_n,o){i.ariaLabel=o.concat(" List Item"),$().render(e,i,null,null,t).in("span",o).out("span",{class:"invisible nm-cheverone"}).in("svg",{fill:"none","stroke-width":1,stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round", viewBox: "0 0 24 24"}).in("polyline",{points:"9 18 15 12 9 6"})})),t}