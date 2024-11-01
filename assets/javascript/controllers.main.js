(function($, window, document) {

/*
Inject javascript strict mode
----------------------------------------------------------------*/
"use strict";

const magicNode = {"_": "i", "```": "code", "~": "strike", "*": "b"};
magicNode[":"] = "mark";
const codeSeprator=["```", "*", "_", "~", "?", ":"];
var scrolledMinimapValue=0;
const magicCode=[];
const Handler = {};
var calculateY = 0;
window.index=0;
var scrollEndZero;
var visuallizeBackup=[];
window.finished=false;
var hiddenItems = [];
var isFiredCtrlKey=false;

$(document).on("contextmenu", (e)=> e.preventDefault());

function notesManager() {
  if (!(this instanceof notesManager)) {return new notesManager()}
}

const appViewSetting = {
  "notes.statusBar.remoteTransfer": "visible",
  "notes.statusBar.networkStatus": "visible",
  "notes.statusBar.linkCounter": "visible",
  "notes.statusBar.autoSave": "visible",
  "notes.primarySideBar": "visible",
  "notes.menuBar": "visible",
  "notes.activityBar": "visible",
  "notes.lineCounter": "visible",
  "notes.tabBar": "visible",
  "notes.statusBar": "visible",
  "notes.minimap": "visible",
  "notes.terminal": "hidden",
  "notes.secondrySideBar": "hidden",
  "notes.statusBar.tabSize": "visible",
  "notes.statusBar.titleActive": "visible",
  "notes.statusBar.screenToggle": "visible",
  "notes.statusBar.writeMode": "visible",
  "notes.statusBar.spaceCounter": "visible",
  "notes.statusBar.CRLF": "visible",
  "notes.statusBar.charset": "visible",
  "notes.statusBar.charCounter": "visible",
  "notes.tabBar.WC": "visible",
  "notes.tabBar.toolBar": "visible",
  "notes.statusBar.lineColumn": "visible",
  "notes.statusBar.notification": "visible"
};

const defaultLayoutSettings = {
  "notes.primarySideBar.width": 200,
  "notes.activityBar.width": 48,
  "notes.menuBar.height": 35,
  "notes.tabBar.height": 35,
  "notes.minimap.width": 100,
  "notes.terminal.height": 0,
  "notes.statusBar.height": 22,
  "notes.secondrySidBar.width": 200
};

const settingsRegExpMatcher = {

};

const unitModelBox = {
  "notes.terminal.height": 200,
  "notes.secondrySideBar.width": 170,
  "notes.map.scale": 1,
  "notes.primarySideBar.width": 170,
};

unitModelBox["notes.minimap.width"]=100 * unitModelBox["notes.map.scale"];

const defaultTextMirrorInfo = {
  "notes.fontSize": 14,
  "notes.fontWeight": "normal",
  "notes.whiteSpace": "break-spaces",
  "notes.wordWrap": "break-word",
  "notes.fontStyle": "normal",
  "notes.fontFamily": "monospace",
  "notes.tabSize": 2,
  "notes.autoSave": false,
  "notes.mouseZoom": false,
  "notes.writingDirection": "ltr",
  "notes.spellCheck": false,
  "notes.magicCode": true,
  "notes.zoomValue": 100,
  "notes.charset": "UTF-8",
  "notes.findText": null,
  "notes.replaceText": null,
  "notes.showHiddenNote": false,
  "notes.showLockedNote": false,
  "notes.showPinnedNote": false
};

const dialogs = {
  menuList: $(".menubar-list")[0].cloneNode(true),
  primary: $(".primary-dialog").parent(),
  File: $(".file-dialog").parent(),
  Edit: $(".edit-dialog").parent(),
  Selection: $(".selection-dialog").parent(),
  View: $(".view-dialog").parent(),
  Help: $(".help-dialog").parent(),
  statusBar: $(".status-bar-dialog").parent(),
  mirror: $(".mirror-dialog").parent(),
  activity: $(".activity-dialog").parent(),
  tabContext: $(".tabcontext").parent(),
  tabMenuContext: $(".tabmenucontext").parent(),
  menuBarContext: $(".menubarcontext").parent(),
  primaryContext: $(".psmore-action").parent(),
  secondryContext: $(".ssmore-action").parent(),
  settingsContext: $(".settings-context").parent()
};

$(".x-ui-dialog").parent().remove();

var newprompt = $(".prompt-wrap")[0].cloneNode(true);
$(newprompt).addClass("secondry-prompt").find(".prompt-input").empty();
$("#content").prepend(newprompt);

$(".secondry-prompt .prompt-input").render("div", {class: "A6tyEeQ0U ydNrdEUSf"})
  .in("div", {class: "cit8okVvn Eo7E6F84I LuYXzGx6Q"}, "Customoize Layout")
  .out("div", {class: "due-items-right ydNrdEUSf QPou3Wze0 pricon-xender"});
$(".pricon-xender").render("div", {class: "prompt-undo prompt-xbr"})
  .in("svg", {width: 14, height: 14, viewBox: "0 0 24 24"})
  .in("use", {xlink: "svg/notesmanager.svgall.svg#undo"});
$(".pricon-xender").render("div", {class: "close-prompt prompt-xbr"})
  .in("svg", {width: 16, height: 16, viewBox: "0 0 24 24"})
  .in("path", {d: "M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"});
layoutCustomizer([
  {text: "Menu Bar", class: "menu-bar", selected: true},
  {text: "Activity Bar", class: "activity-bar"},
  {text: "Primary Side Bar", class: "primary-side-bar"},
  {text: "Secondry Side Bar", class: "secondry-side-bar"},
  {text: "Panel", class: "panel"},
  {text: "Status Bar", class: "status-bar"}
]);
layoutCustomizer([
  {text: "Left", class: "primary-side-bar"},
  {text: "Right", class: "secondry-side-bar"}
]);
layoutCustomizer([
  {text: "Full Screen", class: "full-screen"},
  {text: "Zen Mode", class: "zen-mode"}
]);
$(".icon-full-screen").render("div", {class: "fr-square"});
/*
--------------------------------------------------------------------------*/

$(".resize-ss, .resize-ps, .terminal-resizer").on("mouseover mouseout", function(e) {
  e.data=e.type=='mouseover' ? 'add' : 'remove';
  $(this)[e.data + "Class"]("hover");
});

function windowResizeEventHandler(settings) {
  adjustLayout();
  minimapSetup(settings);
  hiddenItems = adjustMoreOpt(
    $(".items-left-menubar .menubar-list"), $(".more-tab-opt"), $(".more-all-opt"));
}

function showHideComponent(selector, visibility, isAdjust) {
  visibility==="hidden" ? $(selector).addClass(visibility) : $(selector).removeClass("hidden");
  isAdjust && adjustLayout();
}

$.each(codeSeprator, function(_i, code) {
  code=code.replace(/(\W)/g, "\\$1");
  magicCode.push(new RegExp("^(?:(" + code + ")(\\w|\\d)+(" + code + "))$"));
});

notesManager.prototype={
  autocompleteDialogUI: autocompleteDialogUI,
  constructor: notesManager,
  name: "Notes Manager",
  dialogUI: dialogUI,
  adjustMoreOpt: adjustMoreOpt,
  scroller: scroller,
  length: 0,
  resizer: resizer,
  scroller: scroller,
  adjustLayout: adjustLayout,
  mapManipulation: mapManipulation,
  tabManipulation: tabManipulation,
  noteListManipulation: noteListManipulation
};

notesManager.prototype.caches=notesManager.caches={};
$.extend(notesManager, notesManager.prototype);
notesManager.prototype.constructor=notesManager;

const rlink = "(http(?:s|)\\:\\/\\/)([^\\\\\<\\>\\:\\` \\ \\\"\'])+";
const skipHTML = "((?!(\\&lt\\;|\\&gt\\;|\\&nbsp\\;|\\ )).)+";

notesManager.rLinkIdentifier=new RegExp("^" + rlink + "$");
notesManager.rGlobalLink=new RegExp(rlink, "g");
notesManager.rLinkDetecter=new RegExp(rlink + "$");
/*
--------------------------------------------------------------------------*/
function adjustLayout() {
  const gridscrollWidth = $(".track-y")[0].clientWidth;
  const caches=notesManager.caches;
  caches.activityBarWidth=$(".left-activity-bar")[0].clientWidth;
  caches.rSideBarWidth=$(".secondry-side-bar")[0].clientWidth;
  caches.menuBarHeight=$(".menu-bar")[0].clientHeight;
  caches.lSideBarWidth=$(".primary-side-bar")[0].clientWidth;

  caches.terminalHeight=$(".terminal-container-view")[0].clientHeight;
  caches.winHeight=window.innerHeight;
  caches.winWidth=window.innerWidth;
  caches.appHeight=$("#content")[0].clientHeight;
  caches.appWidth=$("#content")[0].clientWidth;
  caches.gridVScrollWidth=gridscrollWidth > 0 ? gridscrollWidth + 1 : 0;

  caches.statusBarHeight=$(".status-bar")[0].clientHeight;
  caches.tabBarHeight=$(".tab-bar")[0].clientHeight;

  caches["grid-vh"]=caches.appHeight - (caches.statusBarHeight + caches.menuBarHeight);
  caches.sidebarCollapseWidth=caches.rSideBarWidth + caches.lSideBarWidth;
  caches.counterWidth=$(".notes-line-counter")[0].clientWidth;

  $(".primary-side-bar").css("left", caches.activityBarWidth);

  caches.minimapWidth=$(".minimap")[0].clientWidth;
  caches.minimapHeight=$(".minimap")[0].clientHeight;
  
  $(".grid-main-view").css({
    height: caches["grid-vh"],
    top: caches.menuBarHeight
  });

  caches.containerWidth=caches.appWidth - (caches.sidebarCollapseWidth + caches.activityBarWidth);
  caches.mirrorWidth=caches.containerWidth - caches.counterWidth - caches.minimapWidth;

  $(".bsplit-view-container").css({
    width: caches.containerWidth,
    left: caches.activityBarWidth + caches.lSideBarWidth
  });

  $(".notes-line-counter, .notes-editable-container, .notes-view-split-container, .notes-eitable-scrollable-element").css({
    height: caches["grid-vh"] - (caches.tabBarHeight)
  });

  $(".notes-line-counter").css("top", (caches.menuBarHeight + caches.tabBarHeight));

  $(".items-left-menubar").innerWidth((($(".titlebar-view").width() - 35) / 3) - 26);

  $(".notes-eitable-scrollable-element").css({
    left: caches.counterWidth,
    width: caches.mirrorWidth - $(".psb-track")[0].clientWidth
  });

  $(".area-editable").css("--counter-rp", (caches.mirrorWidth + 10));

  $(".minimap").css("right", $(".psb-track").outerWidth());

  $(".resize-ps").css("left", caches.activityBarWidth + caches.lSideBarWidth);
  $(".status-bar").css("top", caches.appHeight - caches.statusBarHeight);
  $(".resize-ss").css("right", caches.rSideBarWidth);
  $(".scrollbar-track.h-track")
  .width(caches.containerWidth - caches.gridVScrollWidth).css("bottom", caches.terminalHeight);
}

/*
--------------------------------------------------------------------------*/
function resizer(sash, resizeModel, direction, max, min, complete, settings) {
  return new resizer.prototype.init(
    sash, resizeModel, direction, max, min, complete, settings
  );
}

function setAxis(_first, end) {
  return !end ? 'Y' : 'X';
}

resizer.prototype = {
  constructor: resizer,
  init: function(sash, resizeModel, direction, max, min, complete, settings) {
    const raxis = /^(left|right)|(top|bottom)$/;
    this.axis=direction.replace(raxis, setAxis);
    const rdecreament=/^(?:right|bottom)$/;
    resizer.resizerTween=this;
    this.allowResizer={X: 'ew-resize', 'Y': 'ns-resize'};
    this.cursor=this.allowResizer[this.axis];
    this.complete=complete;
    this.sash=sash[0];
    this.isDragging=false;
    this.isDecreament=rdecreament.test(direction);
    this.max=max;
    this.min=min;
    this.settings=settings;
    this.unit="px";
    this.direction=direction.toLowerCase();
    this.resizeModel=resizeModel[0];
    this.resizeAllow={X: "Width", Y: "Height"};
    this.with=this.resizeAllow[this.axis];
    this.style=this.resizeAllow[this.axis].toLowerCase();
    this.sash.tween=resizer.resizerTween=this;
    this.initRezier(this);
  },
  resizeNow: function(event) {
    resizer.resizerTween.isDragging && event.preventDefault();
    const tween=resizer.resizerTween;
    let value=event["client"+tween.axis] - tween.mousePos;
    let attachResizer = tween.isDecreament ? - value : value;

    const max = tween.max;
    const min = tween.min;

    let rvalue = tween[tween.style] + attachResizer;
    rvalue = rvalue>=max ? max : (rvalue<=min ? min : rvalue);

    tween.resizeModel.style[tween.style]=rvalue + tween.unit;
    adjustLayout();
  },
  dispatchResizer: function() {
    const tween = resizer.resizerTween;
    tween.resized=tween.resizeModel["client" + tween.with];
    tween.complete && tween.complete(tween);
    $("body").css("cursor", "");
    tween.isDragging=false;
    minimapSetup(tween.settings);
    $(tween.sash).removeClass("active");
    document.removeEventListener("mousedown", tween.activateResizer);
    document.removeEventListener("mousemove", tween.resizeNow);
    document.removeEventListener("mouseup", tween.dispatchResizer);
  },
  activateResizer: function(e) {
    const tween = this.tween;
    tween.mousePos=e["client" + tween.axis];
    $("body").css("cursor", tween.cursor);
    $(tween.sash).addClass("active");
    tween.isDragging=true;
    resizer.resizerTween=tween;
    tween[tween.style]=tween.resizeModel["client" + tween.with];
    document.addEventListener("mousemove", tween.resizeNow);
    document.addEventListener("mouseup", tween.dispatchResizer);
  },
  initRezier: function() {
    this.sash.addEventListener("mousedown", this.activateResizer);
  }
};

resizer.prototype.init.prototype = resizer.prototype;

/*
--------------------------------------------------------------------------*/
function scroller(scrollBox, thumb, Yaxis, margin, complete) {
  return new scroller.prototype.init(scrollBox, thumb, Yaxis, margin, complete);
}

scroller.prototype={
  constructor: scroller,
  init: function(scrollBox, thumb, Yaxis, margin, complete) {
    this.clientOffset=Yaxis ? 'Y' : 'X';
    this.boxModel=scrollBox[0];
    this.complete=complete;
    this.margin=margin;
    this.thumb=thumb[0];
    this.track=$(thumb).parent()[0];
    this.dir=Yaxis ? 'Top' : 'Left';
    this.clientHook=Yaxis ? 'Height' : 'Width';
    this.with=this.clientHook.toLowerCase();
    this.boxModel.scrollHook=this;
    this.adjustScroller() && this.doScroll();
    scroller.source=this;
    this.controllScroller();
    return this;
  },
  adjustScroller: function() {
    this["modelClient" + this.clientHook]=this.boxModel["client" + this.clientHook];
    this["trackClient" + this.clientHook]=this.track["client" + this.clientHook];
    this["modelScroll" + this.clientHook]=this.boxModel["scroll" + this.clientHook];

    const scrollDimension = this["modelScroll" + this.clientHook];
    const trackDimension = this["trackClient" + this.clientHook];
    const clientDimension = this["modelClient" + this.clientHook];

    var thumbDimension = (clientDimension / scrollDimension) * trackDimension;
    $(this.thumb)[this.with](thumbDimension);
    this["thumb" + this.clientHook]=trackDimension;

    thumbDimension >= clientDimension ?
      $(this.thumb).addClass("hidden") : $(this.thumb).removeClass("hidden");
    return !(this.scrollable=thumbDimension >= clientDimension);
  },
  doScroll: function() {
    const scrollValueInPx = (this.boxModel["scroll" + this.dir] / this["modelScroll" + this.clientHook]) * (this["trackClient" + this.clientHook] + (this.margin || 0));
    $(this.thumb).css(this.dir.toLowerCase(), scrollValueInPx);
  },
  controllScroller: function() {
    var source = this, event, prevOffset = 0, value, isDragging=false, scrollValue,
      thumbPos, percent, maxScroll, scrollData = {top: 0, left: 0};

    function ditachScrollController() {
      source.complete && source.complete.call(source, source.scrollData);
      source.thumb.classList.remove("active");
      isDragging=false;
      document.removeEventListener("mousemove", startScrollerHandler);
      document.removeEventListener("mouseup", ditachScrollController);
      document.removeEventListener("touchmove", startScrollerHandler);
      document.removeEventListener("touchend", ditachScrollController);
      source.thumb.removeEventListener("touchstart", startScrollerHandler);
      source.thumb.removeEventListener("mousedown", startScrollerHandler);
    }

    function startScrollerHandler(e) {
      isDragging && e.preventDefault();
      value = collapseEvent(e)["client" + source.clientOffset] - prevOffset;

      maxScroll = ["modelScroll" + source.clientHook];

      value = thumbPos + value;

      value = value < 0 ? 0 : (value >= maxScroll ? maxScroll : value);

      percent = (source["trackClient" + source.clientHook] + (source.margin || 0));
      scrollValue = (value * source["modelScroll" + source.clientHook]) / percent;

      $(source.boxModel)["scroll" + source.dir](scrollValue);

      scrollData[source.dir.toLowerCase()]=scrollValue;
      source.scrollData=scrollData;
      source.doScroll();
    }

    function initScroller(e) {
      event = collapseEvent(e);
      prevOffset = event["client" + source.clientOffset];
      thumbPos=$(source.thumb).css("top", true);
      isDragging=true;
      this.classList.add("active");
      
      document.addEventListener("touchend", ditachScrollController);
      document.addEventListener("mousemove", startScrollerHandler);
      document.addEventListener("mouseup", ditachScrollController);
      document.addEventListener("touchmove", startScrollerHandler);
      document.addEventListener("touchcancel", ditachScrollController);
    }

    this.track.addEventListener("click", function(e) {
      var rOffset = e["client" + source.clientOffset] - e["offset" + source.clientOffset];
      prevOffset = rOffset + (source.thumb["client" + source.clientHook] / 2);
      thumbPos=0;
      e.target===source.track && startScrollerHandler(e);
    });

    this.thumb.addEventListener("mousedown", initScroller);
    this.thumb.addEventListener("touchstart", initScroller);

    function collapseEvent(e) {
      return $.Event({}, (e.touches || [])[0] || {clientX: e.clientX, clientY: e.clientY});
    }
  }
};

scroller.prototype.init.prototype=scroller.prototype;

/*
--------------------------------------------------------------------------*/
function adjustMoreOpt(boxModel, moreOpt, extraOpt, dir) {
  var hiddenItem = [], optPosY, remainderWidth=0, offsetElem;

  $(boxModel).css("width", "");
  
  $(boxModel).height() < boxModel[0].scrollHeight ?
    $(moreOpt).removeClass("hidden") : $(moreOpt).addClass("hidden");

  offsetElem = $(boxModel).children(dir || ":first");
  optPosY = offsetElem.position().top;

  $(boxModel).children().each(function(i, tab) {
    $(tab).position().top > optPosY ? hiddenItem.push( i ) : (remainderWidth += $(tab).width());
  });

  $(boxModel).width(remainderWidth + ($(boxModel).css("padding-left", true) * 2));

  if (extraOpt) {
    if (offsetElem.width() < boxModel.width()) {
      offsetElem.css("visibility", "");
      $(extraOpt).addClass("hidden");
      hiddenItem.length && $(moreOpt).removeClass("hidden");
    } else {
      $(extraOpt).removeClass("hidden");
      $(moreOpt).addClass("hidden");
      offsetElem.css("visibility", "hidden");
      hiddenItem.push([].indexOf.call($(boxModel).children(), offsetElem[0]));
    }
  }
  return hiddenItem;
}

/*
--------------------------------------------------------------------------*/
function jsIndexedDB(dbRequest, table) {
  return new jsIndexedDB.prototype.init(dbRequest, table);
}

jsIndexedDB.note = {};

jsIndexedDB.prototype.init=function(dbRequest, table) {
  table = table || "settings";
  jsIndexedDB.prototype.request=dbRequest;
  jsIndexedDB.request=dbRequest;
  jsIndexedDB.dbStore=transaction(dbRequest.result, table);
  jsIndexedDB.prototype.dbStore=jsIndexedDB.dbStore;
};

$.extend({indexedDB: jsIndexedDB});

jsIndexedDB.prototype.constructor=jsIndexedDB;

$.extend(jsIndexedDB, {
  delete: function(key, resolve, reject, seed) {
    const delColumn = this.dbStore.delete(key);
    seed && seed.push(key);
    $.isFunction(resolve) && delColumn.addEventListener("success", resolve);
    $.isFunction(reject) && delColumn.addEventListener("error", reject);
    return this;
  },
  get: function(key, resolve, reject) {
    const dbFetch = this.dbStore.get(key);
    $.isFunction(resolve) && dbFetch.addEventListener("success", resolve);
    $.isFunction(reject) && dbFetch.addEventListener("error", reject);
    return this;
  },
  getAll: function(resolve, reject) {
    const dbFetch = this.dbStore.getAll();
    $.isFunction(resolve) && dbFetch.addEventListener("success", resolve);
    $.isFunction(reject) && dbFetch.addEventListener("error", reject);
    return this;
  },
  set: function(key, value, resolve, reject) {
    var promise = this.dbStore.put(encodeBuffer(value), key);
    $.isFunction(reject) && promise.addEventListener("error", reject);
    $.isFunction(resolve) && promise.addEventListener("success", resolve);
  }
});

$.extend(jsIndexedDB.note, {
  create: function(noteName, includePos, objSettings, resolve, reject, sourceBackup) {
    sourceBackup = sourceBackup || {};
    var unique, name, Untitled="Untitled-", dbIndexed=this, note = {
      cursorPosition: sourceBackup.cursorPosition || {line: 0, cursor: 0},
      date: sourceBackup.date || currentDateTime(),
      title: sourceBackup.title || "",
      hidden: false,
      locked: false,
      pinned: false,
      open: true,
      text: sourceBackup.text || [],
      includeOffset: sourceBackup.includePos || includePos,
      uid: genUID(),
      included: true,
      scrollData: sourceBackup.scrollData || {top: 0, left: 0},
      cursorOffset: sourceBackup.cursorOffset || {line: 1, cursor: 1},
      saved: !!objSettings.TextMirrorInfo["notes.autoSave"]
    };

    this.updateAll("open", false, noteName, function(allUserData, isExistNote, ut) {
      !includePos && (note.includeOffset=window.index);
      !noteName && window.index++;
      Untitled += window.index;
      name = (noteName || ut || Untitled).trim();
      unique = name.toLowerCase();
      note.unique=unique;
      note.name=name;
      encodeSHA1(unique, function(hashText) {
        $.indexedDB(dbIndexed.request, "UserBackup");
        note.hashID=hashText;
        isExistNote &&
        $.isFunction(resolve) && resolve.call(this, allUserData, note, isExistNote);
        !isExistNote && dbIndexed.set(hashText, note, function() {
          $.isFunction(resolve) && resolve.call(dbIndexed, allUserData, note, this);
        }, reject);
      });
    });
  },
  update: function(hashID, key, value, resolve, reject) {
    const dbIndexed = this;
    this.get(hashID, function() {
      var data = decodeBuffer(this.result);
      if (typeof key === "object") {
        resolve = value;
        reject = resolve;
        $.each(key, function(key, value) {
          data[key]=value;
        });
      } else {
        data[key]=value;
      }
      dbIndexed.set(data.hashID, data, resolve, reject);
    });
  },
  deleteAll: function(resolve, reject) {
    var dbIndexed=this, deletedItems=[], data;
    this.getAll(function() {
      $.each(this.result, function(_i, buffer) {
        data=decodeBuffer(buffer);
        dbIndexed.delete(data.hashID, function() {
          wait(true, function() {
            resolve.call(dbIndexed, deletedItems);
          });
        }, reject, deletedItems);
      });
      !this.result.length && $(".ps-ajax-sash-loader").removeClass("active");
    });
  },
  rename: function(request, data, hashID, newName, resolve, reject) {
    this.delete(hashID, function() {
      encodeSHA1(newName, function(hashText) {
        data.hashID=hashText;
        data.name=newName;
        data.unique=newName.toLowerCase();
        $.indexedDB(request, "UserBackup");
        $.indexedDB.set(hashText, data, resolve, reject);
      });
    });
  },
  updateAll: function(key, value, matcher, callback, dbIndexed=this) {
    this.getAll(function(event) {
      var rUntitled = /^Untitled\-(\d+)$/,
        untitledItem = [],
        isEffect,
        allData = [],
        matched,
        isExistNote = false;
      $.each(this.result || event.srcElement.result, function(_i, buffer, _a, data) {
        data = decodeBuffer(buffer);
        data[key]!==value && (isEffect=true);
        data.name===(matcher || "").toLowerCase() && (isExistNote=true);
        matched = rUntitled.exec(data.name);
        matched && untitledItem.push(+( matched.pop()));
        !isExistNote && (data[key]=value);
        !isExistNote && isEffect && dbIndexed.set(data.hashID, data);
        allData.push(data);
      });
      $.isFunction(callback) &&
        callback.call(this, allData, isExistNote, createUntitled(untitledItem));
    });
  }
});

jsIndexedDB.note.__proto__ = jsIndexedDB.prototype;
$.extend(jsIndexedDB.note.__proto__, jsIndexedDB);
jsIndexedDB.prototype.init.prototype=jsIndexedDB.prototype;

function genUID() {
  var buffer = new Uint8Array(16);
  crypto.getRandomValues(buffer);
  return Array.from(buffer).map(byte=> byte.toString(32).padStart(2, '0')).join("");
}

function createUntitled(items) {
  var title = "Untitled-", max = $(items).max(), dec = max;
  max++;
  if (!max) return false;

  for (; dec >= 1; dec--) {
    if (([].indexOf.call(items, dec)) === -1) {
      max=dec;
      break;
    }
  }

  return (title + max);
}

function currentDateTime() {
  var date, curYear, curMonth, curDay, months, curHour, curMinutes, AmPm;

  date = new Date();
  curYear = date.getFullYear();
  curMonth = date.getMonth();
  curDay = date.getDate();
  curDay = curDay < 10 ? '0' + curDay : curDay;

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  curMonth = months[curMonth];
  curHour = date.getHours();
  curMinutes = date.getMinutes();
  AmPm = curHour >= 12 ? "PM" : "AM";

  return {day: curDay, month: curMonth, year: curYear, hours: curHour, minutes: curMinutes, AmPm};
}

async function encodeSHA1(text, callback, changeCase) {
  var encoder, buffer, hashBuffer, arrayBuffer, hashText;

  encoder = new TextEncoder();
  text = changeCase ? text : text.toLowerCase();
  buffer = encoder.encode(text);

  hashBuffer = await crypto.subtle.digest("SHA-1", buffer);
  arrayBuffer = Array.from(new Uint8Array(hashBuffer));

  hashText = arrayBuffer.map(byte=> byte.toString(16).padStart(2, '0')).join("");
  $.isFunction(callback) && callback.call(this, hashText);
}

function setItem(key, data, storage) {
  data = typeof data === "object" ? JSON.stringify(data) : data;
  storage = storage || "localStorage";
  (storage in window) && window[storage].setItem(key, data);
}

function getSystemColorTheme() {
  var colorBoth = {
    true: "light_78b2914d270f42683c646a152310affd976831d9",
    false: "dark_78b2914d270f42683c646a152310affd976831d9"
  };
  var media = window.matchMedia("(prefers-color-scheme:light)");
  return colorBoth[media.matches];
}

function getItem(key, storage) {
  var result;
  storage = storage || "localStorage";
  (storage in window) && (result=window[storage].getItem(key));
  try {
    result = JSON.parse(result);
  } catch(e) {};
  return result;
}

function encodeBuffer(data, _encoding) {
  var encoder = new TextEncoder();
  data = typeof data === "object" ? JSON.stringify(data) : data;
  return encoder.encode(data);
}

function decodeBuffer(data, _decoding) {
  var decoder = new TextDecoder(), finalDecoded;
  finalDecoded=decoder.decode(data);

  try {
    finalDecoded=JSON.parse(finalDecoded);
  } catch(e) {};

  return finalDecoded; /* decoded Buffer */
}

function wait(isFired, delay, callback) {
  if (isFired) {
    if ($.isFunction(delay)) {
      callback=delay;
      delay=undefined;
    }
    var timeout = window.setTimeout(function() {
      callback.call();
    }, delay || 1000);
    window.clearTimeout(timeout - 1);
  }
}

/*
------------------------------------------------------------------------------*/
function callWith(func, object, uniqueLoad, request) {
  return function(event) {
    func.call(this, event, object, uniqueLoad, request);
  }
}
$.extend({noteLoader: {}});
$.extend($.noteLoader, {
  load: function(request, settings, uniqueLoad) {
    const userStore = transaction(request.result, "UserBackup");
    this.settings=settings;
    this.request=request;
    userStore.getAll().addEventListener("error", callWith(this.fail, this, uniqueLoad, request));
    userStore.getAll().addEventListener("success", callWith(this.done, this, uniqueLoad, request));
  },
  done: function(_event, object, uniqueLoad, request) {
    var data, isIncluded=false, notelist, prevData = {}, seed={}, length = this.result.length;

    var nlength=0, hasMoreData;
    $(".view-note-list li").each(function(_i, list) {
      if (list.data) {
        nlength++;
        seed[list.data.hashID]=list.data;
        prevData[list.data.hashID]=list;
      }
    });

    $.each(this.result.reverse(), function(_i, note) {
      data = decodeBuffer(note);
      data.included && (isIncluded=true);

      if (uniqueLoad) {
        delete seed[data.hashID];

        if (length > nlength && !prevData[data.hashID]) {
          hasMoreData=true;
          seed[data.hashID]=data;
        }
      }

      !uniqueLoad && adjustNoteTabList(data, object.settings, false, object.request);
    });

    if (!$.isEmptyObject(seed) && uniqueLoad) {
      var isRemovedActive, positionSetup;
      $.each(seed, function(i, notesource) {
        if (hasMoreData) {
          positionSetup = $(".scrollable-active-tab-bar").length > 2;
          adjustNoteTabList(notesource, object.settings, positionSetup, object.request);
        } else {
          notelist = prevData[i];
          $(".scrollable-active-tab-bar li").each(function() {
            if (this.data.hashID===notesource.hashID) {
              if ($(this).hasClass("active")) {
                isRemovedActive=$(this).prevAll();
                isRemovedActive=isRemovedActive.length ? isRemovedActive : $(this).nextAll();
                isRemovedActive=isRemovedActive[0];
              }
              $(this).remove();
            }
          });
          $(notelist).remove();
        }
      });
      isRemovedActive && $(isRemovedActive).click();
      !$(".scrollable-active-tab-bar li").length && $(".web-interface").removeClass("hidden");
    }

    showHideTabBar(object.settings);
    $(".ps-ajax-sash-loader").removeClass("active");
    !isIncluded && $(".note-loader-sash").removeClass("active");
    completeLoadedCallback(request, object.settings);
    visuallizeStatusBarOpt($(".scrollable-active-tab-bar li").length);
    tabcontextHandler();

    $(".scrollable-active-tab-bar li").each(function() {
      pinTabBarList(this.data.hashID, this.data.pinned);
    });
  },
  fail: function() {
    alert("failed");
  }
});

/*
------------------------------------------------------------------------------*/
function createFinalNote(_event, request, objSettings, notename) {
  if (_event.currentTarget!==_event.target) return;
  $.indexedDB(request, "UserBackup");
  $(".ps-ajax-sash-loader").addClass("active");
  $.indexedDB.note.create(notename || null, activePosIndex(), objSettings,
    function(_allUserData, note) {
      adjustNoteTabList(note, objSettings, true, request);
      visuallizeStatusBarOpt($(".scrollable-active-tab-bar li").length);
      tabcontextHandler();
  });
}

function adjustNoteTabList(source, objSettings, isEvent, request) {
  var strict, stricted;

  if (!source.hidden && !objSettings.showHiddenNote) {
    stricted = source.hidden || source.pinned || source.locked;
    strict = source.hidden ? "hidden" : "locked";
    strict = source.pinned ? "pinned" : source;

    mapManipulation().renderMapList(source.name, source.text, stricted && strict, "data", source);
    noteListManipulation().renderNoteList(source.name, stricted && strict, "data", source);

    renderTab(source, objSettings, isEvent);
    $(".ps-ajax-sash-loader").removeClass("active");
    pinUnpinWithTabHandler(request);

    if (source.open) {
      setActiveNote(source);
      focusVisibleTab();
      noteMirror(request, source, objSettings);
    }

    closeActiveTab(request, source, objSettings, isEvent);
    switchActiveNote(request, source, objSettings, isEvent);
  }
}

function pinUnpinWithTabHandler(request) {
  $(".pin").on("click", function(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    var data = $(this).parent().parent()[0].data;
    pinUnpinNote(request, data);
  });
}

function renderTab(source, objSettings, isEvent) {
  if (tabExists(source)===false && source.included) {
    $(".web-interface").addClass("hidden");
    tabManipulation(!!isEvent)
      .renderTab(source.name, !!objSettings.TextMirrorInfo["notes.autoSave"] || source.saved, "data", source);
  }
}

function switchActiveNote(request, source, objSettings, isEvent) {
  $(".note-list").children().click(function(e) {
    $(".view-note-list li").removeClass("hidden self first-of end-of");
    $(".search-notes-list").addClass("hidden");
    !isFiredCtrlKey && $(".view-note-list li").removeClass("selected");
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    if (isFiredCtrlKey) {
      $(this).toggleClass("selected");
      return;
    }
    if (this.data.open===true) return;
    $(".note-list").children().each(function(_i, note) {
      note.data.open=false;
    });
    $.indexedDB(request, "UserBackup");
    $.indexedDB.get(source.hashID, function() {
      noteMirror(request, decodeBuffer(this.result), objSettings);
    });
    $.indexedDB.getAll(function() {
      $.each(this.result, function(_i, buffer, _a, data) {
        data = decodeBuffer(buffer);
        data.open=false;
        if (e.currentTarget.data.hashID===data.hashID) {
          source.open=data.open=true;
          source.included=data.included=true;
        }
        $.indexedDB.set(data.hashID, data, function() {
          if (_a.length === _i + 1) {
            renderTab(source, objSettings, isEvent || true);
            setActiveNote(e.currentTarget.data);
            focusVisibleTab();
            showHideTabBar(objSettings);
            closeActiveTab(request, source, objSettings, isEvent);
            switchActiveNote(request, source, objSettings, isEvent);
            pinUnpinWithTabHandler(request);
            visuallizeStatusBarOpt($(".scrollable-active-tab-bar li").length);
            tabcontextHandler();
          }
        });
      });
    });
  });
}

function closeActiveTab(request, source, objSettings, isEvent) {
  $(".scrollable-active-tab-bar .tab-close").click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    showHideTabBar(objSettings);

    $(".opt-add-untitled-note").removeClass("active");
    $(".explorer").addClass("active");

    var currentTab = $(this).parent().parent()[0];
    var data = currentTab.data;
    var nextActiveTab;

    $.indexedDB(request, "UserBackup");

    $.indexedDB.note.update(data.hashID, {open: false, included: false}, function() {
      $(currentTab).remove();
      var hasTab = $(".scrollable-active-tab-bar li");
      visuallizeStatusBarOpt(hasTab.length);
      $(".view-note-list li").each(function(_i, notelist) {
        if (data.hashID===notelist.data.hashID) {
          notelist.data.included=false;
          notelist.data.open=false;
        }
      });
      switchActiveNote(request, source, objSettings, isEvent);
    });
    
    if (data.open) {
      nextActiveTab = $(currentTab).prev().length ?
        $(currentTab).prev() : $(currentTab).next();

      !nextActiveTab.length &&
        ($(".note-loader-sash").removeClass("active"),
        $(".web-interface").removeClass("hidden"),
        $(".note-list").children().removeClass("active"));
      
      if (nextActiveTab.length) {
        nextActiveTab = nextActiveTab[0];
        nextActiveTab.data.open=true;
        $.indexedDB.note.update(nextActiveTab.data.hashID, "open", true, function() {
          setActiveNote(nextActiveTab.data);
          focusVisibleTab();
          switchActiveNote(request, source, objSettings, isEvent);
        });

        $.indexedDB.get(nextActiveTab.data.hashID, function() {
          noteMirror(request, decodeBuffer(this.result), objSettings);
        });
      }
    }
  });
}

function adjustNoteTitle(cleanValue) {
  var data, tab, matched, rUntitledIdentifier=/^untitled\-(\d+)$/i;
  cleanValue=cleanValue.slice(0, 40);
  tab=$(".scrollable-active-tab-bar .active");
  data=noteMirror.collapse.data;
  matched=data.open && rUntitledIdentifier.exec(data.name);

  if (matched) {
    var span=document.createElement("span");
    span.classList.add("forced-title");
    if (!$(tab).find(".forced-title").length) {
      $(tab).find(".note-title").prepend(span);
    }
    $(tab).find(".forced-title").text(cleanValue + " ");
  }
  return matched && cleanValue;
}

function saveTitle(title, tabname) {
  $.indexedDB(noteMirror.collapse.request, "UserBackup");
  var data = noteMirror.collapse.data;
  if (tabname) {
    $.indexedDB.delete(data.hashID);
    data.unique=tabname.toLowerCase();
    data.name=tabname;
    data.title=title;
    encodeSHA1(tabname, (hashText)=> data.hashID=hashText);
    $.indexedDB.note.create(tabname, data.includeOffset, noteMirror.collapse.settings, null, null, data);
    $(".scrollable-active-tab-bar .active .note-title span:last").remove();
    $(".view-note-list li.active .note-view-name").text(tabname);
  } else {
    $.indexedDB.note.update(data.hashID, "title", title);
  }
}

function showHideTabBar(settings) {
  $(".scrollable-active-tab-bar li").removeClass("hidden");
  $(".tab-bar .view-tab").removeClass("self-tab");
  if (settings.appViewInfo.tabBar==="hidden") {
    $(".tab-bar .view-tab").addClass("self-tab");
    $(".scrollable-active-tab-bar li").not(".active").addClass("hidden");
  }
}

function focusVisibleTab() {
  const tabBar = $(".scrollable-active-tab-bar").parent()[0];
  const cwidth = tabBar.clientWidth;
  const acttab = $(tabBar).find("li.active");
  const tabWidth = $(acttab).width();
  const position = acttab.position();
  position.left < 0 && $(tabBar).scrollLeft(0);
  cwidth < position.left && $(tabBar).scrollLeft((position.left - cwidth) + tabWidth);
}

function showNoteInput(appendWith) {
  $(".create-new-note").parent()[appendWith]($(".create-new-note"));
  $(".create-new-note").removeClass("hidden").find("input").focus();
}

function hideNoteInput() {
  $(".alert-box").empty().addClass("hidden");
  $(".create-new-note").addClass("hidden").find("input").val("");
}

function createNote(inputElem, e, request, settings) {
  !$(inputElem).val() && (window.isErrorNotename=true);
  var value = $(inputElem).val();
  hideNoteInput();
  !window.isErrorNotename && createFinalNote(e, request, settings, value);
}

function checkExistsOrValidNotename(request, field, alertBox) {
  $(field || $(".create-new-note").find("input")).on("input", function() {
    alertBox = alertBox || $(".alert-box");
    window.isErrorNotename=true;
    var curValue = this.value || this.textContent;
    var maxLength = 80;
    var rcleanTitle = /[\\\/\:\*\?\<\>\"\|]/g;
    var rFirstWhite = /^\s+/;
    var ellipsis = curValue.slice(0, maxLength);
    var isMaxLength = curValue.trim().length > maxLength;
    var value = isMaxLength ? ellipsis +"..." : curValue;
  
    encodeSHA1(curValue, function(hashText) {
      $.indexedDB(request, "UserBackup");
      $.indexedDB.get(hashText, function() {
        if (this.result) {
          window.isErrorNotename=true;
          alertBox.removeClass("hidden").html(`A note name <span>${value}</span> already exists Please choose a different name`);
        }
      });
    });

    if (!value.trim()) {
      alertBox.removeClass("hidden").html(`A note or title name must be provided.`);
    }
    else if (isMaxLength) {
      alertBox.removeClass("hidden").html(`The note name <span>${value}</span> to be very large Please choose a different name.`);
    }
    else if (rFirstWhite.test(value)) {
      alertBox.removeClass("hidden").html(`The note name is not valid as a <span>${value}</span> note title Please choose a different name.`);
    }
    else if (rcleanTitle.test(value)) {
      alertBox.removeClass("hidden").html(`This note title <span>'${value}'</span> doesn't support.`);
    } else {
      window.isErrorNotename=false;
      Handler.submit=false;
      alertBox.empty().addClass("hidden");
    }
  });
}

noteMirror.focusin=true;
$(".area-editable").on("focusin focusout", function(e) {
  noteMirror.focusin=e.type==="focusin";
});

function tabExists(source) {
  var isExistsTab=false;
  $(".scrollable-active-tab-bar").children().each(function(_i, tab) {
    tab.data.hashID===source.hashID && (isExistsTab=_i);
  });
  return isExistsTab;
}

function activePosIndex() {
  var posIndex=0;
  $(".scrollable-active-tab-bar").children().each(function(_i, tab) {
    if (tab.data.open===true) {
      posIndex=_i;
    }
  });
  return posIndex;
}

function setActiveNote(source) {
  $(".note-list").children().removeClass("active").each(function(_i, note) {
    note.data.open=false;
    if (note.data.hashID===source.hashID) {
      note.data.open=true;
      $(note).addClass("active");
    }
  });
}

/*
------------------------------------------------------------------------------*/
function noteMirror(request, source, settings) {
  return new noteMirror.prototype.init(request, source, settings);
}

noteMirror.prototype = {
  constructor: noteMirror,
  init: function(request, source, settings) {
    this.textMirror=$(".area-editable")[0];
    this.curLines=$(".area-editable .line");
    this.request=request;
    this.isPaste=false;
    this.data=source;
    this.settings=settings;
    this.activeTab=$(".scrollable-active-tab-bar li.active");
    this.activeList=$(".view-note-list li.active");
    noteMirror.collapse=this;
    this.collapse=this;
    this.loadText();
    this.setDate();
    this.maxLine=1111;
    this.maxChar=111111;
  },
  strictText: function(data, line) {
    if (data && line) {
      return (data >= noteMirror.collapse.maxChar) || (line >= noteMirror.collapse.maxLine);
    }
    return data.length >= noteMirror.collapse.maxChar;
  },
  updateMirror: function() {
    var top, left, text, scrollData, line, cursor, position,
      cursorOffset, cursorPosition, hashID, nodeIndex;
    position = noteMirror.collapse.trackCursor();
    left = $(".notes-editable-container").scrollLeft();
    text = noteMirror.collapse.mirrorText();
    top = $(".notes-editable-container").scrollTop();
    scrollData = {left, top};
    line = position.focusLineOffset;
    cursor = line.startOffset;
    cursorPosition = {line, cursor, nodeIndex};
    cursorOffset = {line: line + 1, cursor: cursor + 1, nodeIndex};
    hashID = noteMirror.collapse.data.hashID;
    nodeIndex=[].indexOf.call(position.focusLine.childNodes, position.focusNode);

    function fail() {
      $(".status-bar .save-status").addClass("error");
      $(".status-bar .save-status span").html("Error");
    }

    this.activeList[0].data.text=text;

    function done() {
      $(".status-bar .save-status").addClass("saved");
      $(".status-bar .save-status span").html("Saved");
      window.setTimeout(function() {
        $(".status-bar .save-status span").html("Watching...");
        $(".status-bar .save-status").removeClass("saved");
      }, 1000);
    }

    $.indexedDB(noteMirror.collapse.request, "UserBackup");
    $.indexedDB.note.update(hashID, {
      "text": text,
      "cursorOffset": cursorOffset,
      "scrollData": scrollData,
      "cursorPosition": cursorPosition
    }, done, fail);
  },
  mirrorText: function(isStr) {
    var textBackups = [], rWhiteSpace = /(?:\ |\&nbsp\;)/g;
    $(".area-editable .line").each(function(_i, line) {
      textBackups.push($(line).html().replace(rWhiteSpace, " "));
    });
    return isStr ? textBackups.join("") : textBackups;
  },
  loadText: function() {
    $("#title").val(noteMirror.collapse.data.title);
    var line, data, scrollValue;
    $(".note-loader-sash").addClass("active");

    data = noteMirror.collapse.data;
    scrollValue = data.scrollData;

    !noteMirror.collapse.data.text.length && (noteMirror.collapse.data.text=[""]);
    noteMirror.collapse.data.text.length && $(noteMirror.collapse.textMirror).empty();

    $(noteMirror.collapse.data.text).each(function(_i, text) {
      line = document.createElement("div");
      line.innerHTML=text.replace(/\s/g, "&nbsp;");
      !text && (line.innerHTML="<br/>");
      line.classList.add("line");
      $(noteMirror.collapse.textMirror).append(line);
    });

    noteMirror.scrollMode=true;
    $(".note-loader-sash").removeClass("active");
    highlightLink();
    handleStatusBarAndTabBarFn();
    !$(".line").text() && $(".area-editable").focus();
    !$("#title").val() && $("#title").focus();
    $(".notes-editable-container").scrollTop(scrollValue.top).scrollLeft(scrollValue.left);
    minimapSetup(this.settings);
    minimapSetup(this.settings);
  },
  trackDeepCursor: function() {
    var nodes = [], nodeValue, fakeLine, result = {}, cursorInfo, prevElem, focusNode;

    cursorInfo = noteMirror.collapse.trackCursor();

    if (!noteMirror.focusin||!cursorInfo.focusNode) return;

    prevElem = $(cursorInfo.focusLine).prevAll();
    focusNode = cursorInfo.focusNode;
    fakeLine = document.createElement("div");
    !$(focusNode.parentNode).is(".line") && (focusNode=focusNode.parentNode);
    
    while(focusNode.previousSibling) {
      focusNode=focusNode.previousSibling;
      nodes.unshift(focusNode.cloneNode(true));
    }

    fakeLine.classList.add("line");
    if ((nodeValue=cursorInfo.focusNode.nodeValue)) {
      nodes.push(document.createTextNode(nodeValue.slice(0, cursorInfo.startOffset)));
    }

    result.elements=prevElem.add($(fakeLine).append(nodes));
    result.text=result.elements.text();
    result.chars=result.text.split("").length;
    result.lines=result.elements.length;
    result.firstLine=result.elements[0];

    result.lastLine=result.elements[result.lines - 1];
    result.spaces=result.text.split(/\s/g).length - 1;
    result.words=result.text.split(/\s+/g).length;
    result.columns=$(result.lastLine).text().split("").length || 1;
    result.links=(result.text.match(notesManager.rGlobalLink) || []).length;
    
    result.activeLineText=$(result.lastLine).text();
    result.focusNodes=nodes;
    result.focusLine=cursorInfo.focusLine;
    result.focusNode=cursorInfo.focusNode;
    result.endOffset=result.columns;
    result.cNode=result.focusNode.nodeType!==1 ? result.focusNode : result.focusNode.firstChild;
    return result;
  },
  setCursor: function(focusNode, curOffset) {
    
  },
  trackCursor: function() {
    if (!noteMirror.focusin) return;
    const result = {};
    const selection = window.getSelection();
    const range = selection.focusOffset && selection.getRangeAt(0) || {};

    if (selection.focusNode) {
      result.parent=selection.focusNode.nodeType!==1 ?
      selection.focusNode.parentElement : selection.focusNode
    }
    result.rangeCount=selection.rangeCount;
    result.endOffset=range.endOffset;
    result.startOffset=range.startOffset;
    result.focusNode=selection.focusNode;
    result.focusLine=$(result.focusNode).parents(".line")[0];
    result.focusLine=result.focusLine||result.focusNode;
    result.focusLineOffset=[].indexOf.call($(".line"), result.focusLine);
    return result;
  },
  wordsCounter: function() {
    $(".words-counter").text($(".line").text().split(/\s+/g).length);
  },
  linkCounter: function() {
    var links = ($(".line").text().match(notesManager.rGlobalLink) || []).length;
    $(".link-counter").text(links);
  },
  setDate: function() {
    var data = noteMirror.collapse.data, date = data.date;
    $(".date-time .date").html(date.day + " " + date.month + " " + date.year);
    $(".date-time .time").html(date.hours+":"+date.minutes + " " + date.AmPm);
  },
  countCharacters: function() {
    const deschar = $(".line").text().split("").length;
    const titlechar = $("#title").val().split("").length;

    $(".chars-counter").text(deschar);
    $(".addr-chars").text(deschar + "-" + titlechar + " Characters");
  },
  titleActive: function() {
    var val = $("#title").val();
    $(".title-active").attr("data-label",
      ("Current Active " + (val.length > 14 ? val.slice(0, 14) + "..." : (val || "required")))
    );
    $(".s-title-active").html(val.length > 3 ? val.slice(0, 3) + "..." : (val || "required"));
  }
};

$.extend(noteMirror, noteMirror.prototype);

noteMirror.prototype.init.prototype=noteMirror.prototype;

function updateNoteTitle() {
  var value, maxLength = 80, rtitle = /[\\\/\:\*\?\<\>\"\|]/g;
  $("#title").on("input", function() {
    value=this.value.slice(0, maxLength).trimLeft();
    value=value.replace(rtitle, "").replace(/\s\s/g, " ");
    const tabname = adjustNoteTitle(value);
    this.value=value;
    noteMirror.countCharacters();
    this.style.height="auto";
    this.style.height=this.scrollHeight + "px";
    noteMirror.collapse.titleActive();
    wait(true, function() {
      saveTitle(value, tabname);
    });
  });
  $("#title").on("paste", function(e) {
    e.preventDefault();
    const clipBoard=e.originalEvent.clipboardData.getData("text/plain");
    value=clipBoard.slice(0, maxLength).trimLeft();
    value=value.replace(rtitle, "").replace(/\s\s/g, " ");
    this.value=value;
    noteMirror.countCharacters();
    this.style.height=this.scrollHeight + "px";
    saveTitle(value, adjustNoteTitle(value));
  });
}

function mirrorHandler() {
  $(".area-editable").on("paste", function(e) {
    $(".note-loader-sash").addClass("active");
    noteMirror.collapse.isPaste=true;
    e.preventDefault();
    disabledDocument();
    var clipBoard = e.originalEvent.clipboardData.getData("text/plain"),
      seprator, renderText, htmlData = [], cursor;

    if (noteMirror.collapse.strictText(clipBoard)) {
      clipBoard=clipBoard.slice(0, noteMirror.collapse.maxChar);
    }

    clipBoard = clipBoard.split(/\r\n/);
    
    $.each(clipBoard, function(i, line) {
      i < 1111 && htmlData.push(line.replace(/\s/g, "\x20"));
    });

    seprator = Math.ceil(htmlData.length / 3);

    var i=0, stricted=false, prevLine, prevChar, position;
    prevChar = noteMirror.collapse.mirrorText(true).length;
    prevLine = noteMirror.collapse.mirrorText().length;

    if (prevLine > 100 || prevChar > 1000) {
      for (; i < htmlData.length; i++) {
        prevLine += 1;
        prevChar += htmlData[i].length;
        if (noteMirror.collapse.strictText(prevChar, prevLine)) {
          stricted=true;
          break;
        }
      }
      
      htmlData = htmlData.slice(0, i);
      if ((!i && stricted) ||
        (noteMirror.collapse.strictText(prevChar, prevLine))) {
        $(".note-loader-sash").removeClass("active");
        disabledDocument(false);
        noteMirror.collapse.isPaste=false;
        showAlert("This note is too long. Some text has been cut off the end.");
        return;
      }
    }
    
    $(".status-bar .save-status span").html("Watching...");
    function recursiveLoad(text) {
      if (!text.length) {
        noteMirror.collapse.isPaste=false;
        disabledDocument(false);
        highlightLink();
        $(".note-loader-sash").removeClass("active");
        cursor=noteMirror.trackCursor();
        position=$(cursor.focusLine).position();
        position.top+=$(cursor.focusLine).height();
        $(".notes-editable-container").scrollTop(position.top).scrollLeft(position.left - 8);
        minimapSetup();
        noteMirror.collapse.updateMirror();
        handleStatusBarAndTabBarFn();
        return;
      }

      renderText = text.slice(0,
        htmlData.length < 200 ? htmlData.length : seprator
      ).join("\n");

      htmlData.length < 200 && (text=[]);

      window.setTimeout(function() {
        document.execCommand("insertText", false, renderText);
        recursiveLoad(text.slice(seprator));
      });
    }
    recursiveLoad(htmlData);
  });

  $(".area-editable").on("input", function() {
    if (!noteMirror.collapse.isPaste) {
      $(".write-mode").addClass("typing").find(".note-writing-mode").html("Typing...");
      $(".status-bar .save-status").removeClass("saved").find("span").html("Watching...");
      
      var cursorInfo = noteMirror.trackCursor(), editorInfo = noteMirror.collapse.TextMirrorInfo,
        cursorDeep = noteMirror.collapse.trackDeepCursor();
      
      autoSuggestAndSnippet.call(this, cursorInfo, cursorDeep);
      minimapSetup(noteMirror.collapse.settings);
      handleStatusBarAndTabBarFn();
      wait(true, function() {
        linkAndMagicTextParser(noteMirror.snippet, cursorDeep.cNode, cursorInfo, editorInfo);
        $(".write-mode").removeClass("typing stopped");
        $(".write-mode").addClass("stopped").find(".note-writing-mode").html("Stopped");
        noteMirror.collapse.updateMirror();
      });
    }
  });

  $(".area-editable").on("keyup", function(event) {
    noteMirror.fireBackSpace=false;
    window.iskeyDown=false;
  });

  $(".area-editable").on("click", function(event) {
    handleStatusBarAndTabBarFn();
    $(".autocomplete-dialog").remove();
  });

  $(".area-editable").on("keydown", function(event) {
    moveSnippetListWithArrowKey(event);
    event.keyCode===13 && snippetRenderWithSelect.call($(".autocomplete-dialog li.active")[0], event);
    guidMirror(event);
    window.iskeyDown=true;
    hoverWithClickableLink.call(this, event);
  });
}

$(window).on("keyup", function() {
  window.iskeyDown=false;
  $(".area-editable a").css("cursor", "");
  $(".area-editable").attr("contenteditable", true);
  isFiredCtrlKey=false;
});

function hoverWithClickableLink(event) {
  $(this).on("mouseover", function(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (e.target.nodeName==="A" && event.keyCode===17 && window.iskeyDown) {
      window.clickableLink=true;
      $(e.target).css("cursor", "pointer");
      $(this).removeAttr("contenteditable");
    }
  });
}

$(window).on("keydown", function(event) {
  isFiredCtrlKey=event.keyCode===17;
});

/*
 * Live/Auto [Link] and [Magic-code] Parse and Highlight
--------------------------------------------------------------------------------*/
function linkAndMagicTextParser(matcher, focusNode, cursorInfo, editorInfo) {
  if ($(focusNode).parent(".line").length && focusNode.nodeType!==1) {
    var text, startOffset, endOffset, source={}, matched, magicSign,
      wrapElem, isExtendable=false, freezMatcher;
  
    text = focusNode.nodeValue || $(focusNode).text();
    startOffset=cursorInfo.startOffset-matcher.length;
    endOffset=cursorInfo.endOffset;

    for (; endOffset < text.length; endOffset++) {
      if (!text[endOffset].trim()) {
        break;
      }
    }

    matched = text.substring(startOffset, endOffset);
    $.extend(source, {startOffset, endOffset, focusNode});
    freezMatcher=matched;

    for (let i=0; i < magicCode.length; i++) {
      if ((magicSign=magicCode[i].exec(matched)) && magicSign[1]) {
        isExtendable=true;
        matched=matched.substring(1, matched.length - 1);
        wrapElem=document.createElement(magicNode[magicSign[1]]);
        wrapElem.textContent=matched;
        matched=wrapElem.outerHTML + "&nbsp;";
        break;
      }
    }

    if (notesManager.rLinkIdentifier.test(freezMatcher)) {
      isExtendable=true;
      wrapElem=document.createElement("a");
      wrapElem.href=wrapElem.textContent=matched;
      wrapElem.target="_blank";
      wrapElem.classList.add("link");
      matched=wrapElem.outerHTML + "&nbsp;";
    }

    isExtendable && extendHTML(matched, source, editorInfo);
  }
}

function moveSnippetListWithArrowKey(event) {
  var dialog, hasdialog, racceptKey = /^arrow(?:up|down)$/i, rkeyCode = /^(?:38|40)$/,
    moveWith = {38: "prev", 40: "next"}, reset = {38: ":last", 40: ":first"},
    currentActive, prevActive, position, stc;

  dialog = $(".autocomplete-dialog");
  hasdialog = !!dialog.length;

  if (!hasdialog || (!racceptKey.test(event.key) && !rkeyCode.test(event.keyCode))) {
    return;
  }

  moveWith = moveWith[event.keyCode];
  reset = reset[event.keyCode];

  prevActive = dialog.find("li.active");
  currentActive = (stc=prevActive[moveWith]()[0]) || dialog.find("li"+reset)[0] || prevActive;

  dialog.find("li").removeClass("active");
  position = $(currentActive).addClass("active").position();

  if (position.top < 0 || position.top > dialog.height()) {
    var currentScroll = dialog.find("ul").scrollTop(), listHeight = currentActive.clientHeight,
      scrollValue = position.top < 0 ? currentScroll - listHeight : currentScroll + listHeight;

    if (!stc) {
      scrollValue = position.top < 0 ? 0 : dialog.find("ul")[0].scrollHeight;
    }
    
    dialog.find("ul").scrollTop(scrollValue);
  }
}

function guidMirror(event) {
  if ($(".line").length===1 && event.keyCode===8 && !$(".line:first").text()) {
    event.preventDefault();
  }
}

function handleStatusBarAndTabBarFn() {
  noteMirror.collapse.countCharacters();
  noteMirror.collapse.linkCounter();
  noteMirror.collapse.titleActive();
  noteMirror.collapse.wordsCounter();
  // $.each(noteMirror.collapse.trackDeepCursor(), function(selector, value) {
  //   $(".xbr-" + selector).text(value);
  // });
}

/*
 * [Maximize-minimize] Screen [Toggle-Fullscreen]
--------------------------------------------------------------------------------*/
$(".screen-toggle").click(toggleFullscreen);
function exitFullscreen() {
  $(".screen").text("Full Screen");
  $(".item-toggle-screen").addClass("full-screen").removeClass("exit-full-screen");
  document.exitFullscreen && document.exitFullscreen()||
  document.webkitExitFullscreen || document.webkitExitFullscreen()||
  document.msExitFullscreen && document.msExitFullscreen();
}
function openFullscreen(element) {
  $(".screen").text("Exit Fullscreen");
  $(".item-toggle-screen").removeClass("full-screen").addClass("exit-full-screen");
  element=element||document.documentElement||document.body;
  element.requestFullscreen && element.requestFullscreen()||
  element.webkitRequestFullscreen || element.webkitRequestFullscreen()||
  element.msRequestFullscreen && element.msRequestFullscreen();
}
function toggleFullscreen() {
  (document.fullscreenElement||document.webkitFullscreenElement) ? exitFullscreen() : openFullscreen();
}

/*
 * Online-Offline [Network-Status] Handling
--------------------------------------------------------------------------------*/
window.addEventListener("offline", offline);
window.addEventListener("online", online);
navigator.onLine && online();

function offline() {
  $(".network").removeClass("online").addClass("offline");
}
function online() {
  $(".network").removeClass("offline").addClass("online");
}

function showAlert(message) {
  wait(true, function() {
    $(".sticky-alert-popup").removeClass("active");
  });
  $(".sticky-alert-popup").removeClass("active").addClass("active").html(message);
}

function fnParseLink(matcher) {
  var rDeepExtract = new RegExp(rlink.slice(0, -1) + skipHTML),
    rEntity = /\&(((?:l|g)t)|(nbsp))\;/g;
  if (rEntity.test(matcher)) {
    return matcher.replace(rDeepExtract, function(matchedLink) {
      return '<a class="link" target="_blank" href="'+ matchedLink +'">' + matchedLink + '</a>';
    });
  }
  return '<a class="link" target="_blank" href="'+ matcher +'">' + matcher + '</a>';
}

function highlightLink() {
  var text;
  $(".area-editable .line").each(function(_i, line) {
    if (notesManager.rGlobalLink.test((text=$(line).text()))) {
      line.innerHTML=text
        .replace(/ /g, " ")
        .replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(notesManager.rGlobalLink, fnParseLink);
    }
  });
}

/*
 * Auto suggest and snippet Handler
--------------------------------------------------------------------------------*/
function autoSuggestAndSnippet() {
  var line, metrics, snippetBox, fontHeight, selection, gbcr, cursorInfo, deepCursor,
    snippetValue,
    clientHeight,
    clientWidth,
    localText, rect,
    ctx,
    editorInfo, matcher, sources = {}, matched,
    canva, collapse, listItems = [], offset, range, props = {}, boxWidth, boxHeight;
  
  deepCursor = noteMirror.collapse.trackDeepCursor();
  cursorInfo = noteMirror.trackCursor();
  line = cursorInfo.focusLine;
  editorInfo = noteMirror.collapse.TextMirrorInfo;
  deepCursor.start=cursorInfo.startOffset;
  notesManager.caches.deepCursor=deepCursor;

  canva = document.createElement("canvas");
  ctx = canva.getContext("2d");
  ctx.font=$(line).css("font");
  clientWidth = document.body.clientWidth;
  clientHeight = document.body.clientHeight;
  
  metrics = ctx.measureText(" ");
  fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
  fontHeight += ctx.lineWidth;

  selection=window.getSelection();
  range=selection.getRangeAt(0);
  rect = range.getBoundingClientRect();
  gbcr = {};
  gbcr.y=rect.top + fontHeight;
  gbcr.x=rect.left;

  offset=line.getBoundingClientRect();
  gbcr.y= rect.y ? gbcr.y : (offset.y + fontHeight);
  gbcr.x=gbcr.x ? gbcr.x : offset.x;
  
  snippetBox = autocompleteDialogUI();

  matcher = deepCursor.activeLineText.split(/\s/g).slice(-1).join("").toLowerCase();
  noteMirror.snippet=matcher;

  sources.random=snippetRandom;
  sources.html=snippetsHTML;
  sources.localText=[];
  sources.snippets=snippets;

  $(".line").each(function(_i, line) {
    localText=$(line).text();
    if (deepCursor.focusLine===line) {
      localText=localText.slice(0, -matcher.length);
    }
    [].push.apply(sources.localText, localText.split(/\s/g));
  });

  $(".autocomplete-dialog").remove();
  $.uniqueSort(sources.localText);
  
  $.each(sources, function(snippet, sourceData) {
    $.each(sourceData, function(keywords, value) {
      collapse=!isNaN(keywords) ? value : keywords;
      if (matcher && (collapse.toLowerCase().indexOf(matcher) > -1)) {
        matched=true;
        snippetValue=$.isFunction(value) ? value() : value;
        listItems.push({text: collapse, value: snippetValue, snippet});
      }
    });
  });

  if (matched) {
    $(".autocomplete-dialog ul").empty();
    snippetBox.renderList(listItems);
    snippetBox.render(document.body);
    boxHeight = $(".autocomplete-dialog").height();
    boxWidth = $(".autocomplete-dialog").width();

    gbcr.x + boxWidth > clientWidth ? (props.right=clientWidth-gbcr.x) : (props.left=gbcr.x);
    gbcr.y + boxHeight > clientHeight ? (props.bottom=(clientHeight-gbcr.y) + fontHeight) : (props.top=gbcr.y);
    $(".autocomplete-dialog").css(props);
    $(".autocomplete-dialog li").click(function(e) {
      snippetRenderWithSelect.call(this, e, deepCursor, editorInfo);
    });
  }

  if (!matcher || !matched) {
    $(".autocomplete-dialog").remove();
  }
}

/*
 * Rendrize snippet [TEXT]
--------------------------------------------------------------------------------*/
function renderSnippet(value, snippet, cursorDeep, editorInfo) {
  var selection, range;
  noteMirror.collapse.isPaste=true;

  selection = window.getSelection();
  range = selection.getRangeAt(0);
  range = range.cloneRange();

  range.setStart(cursorDeep.cNode, cursorDeep.start - snippet.length);
  range.setEnd(cursorDeep.cNode, cursorDeep.start);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("insertText", false, value);

  noteMirror.collapse.isPaste=false;
  minimapSetup();
  handleStatusBarAndTabBarFn();
}

function extendHTML(matchedValue, cursorOffset, editorInfo) {
  var selection, range, fragment;
  noteMirror.collapse.isPaste=true;

  selection = window.getSelection();
  range = selection.getRangeAt(0);
  range = range.cloneRange();

  range.collapse(false);

  range.setStart(cursorOffset.focusNode, cursorOffset.startOffset);
  range.setEnd(cursorOffset.focusNode, cursorOffset.endOffset);
  selection.removeAllRanges();
  selection.addRange(range);
  range.deleteContents();

  fragment=document.createDocumentFragment();
  $(fragment).append(matchedValue);
  range.insertNode(fragment);
  selection.collapseToEnd();
  
  minimapSetup();
  noteMirror.collapse.isPaste=false;
  noteMirror.collapse.linkCounter();
}

function snippetRenderWithSelect(e, cursorDeep, collapseCursor, editorInfo) {
  if ($(".autocomplete-dialog").length &&
    (collapseCursor=notesManager.caches.deepCursor)) {
    e.preventDefault();
    var value = $(this).attr("data-value");
    $(".autocomplete-dialog").remove();
    renderSnippet(value, noteMirror.snippet, cursorDeep || collapseCursor, editorInfo);
  }
}

function disabledDocument(isDisabled=true) {
  var innerWrap = document.createElement("div");
  var cover = document.createElement("div");
  cover.ariaLabel="Disabled Document";
  $(innerWrap).addClass("BO1Zf4qbZ PMiBu3q7U CGA3xkcxA A6tyEeQ0U");
  $(innerWrap).css("z-index", 111111);
  cover.ariaHidden=true;
  cover.role="banner";
  cover.ariaDisabled=true;
  cover.dataset["role"]="cover";
  cover.appendChild(innerWrap);
  $(cover).addClass("BO1Zf4qbZ PMiBu3q7U CGA3xkcxA Gok2N2nEj");
  $(cover).css("z-index", 111111);
  isDisabled && $("body").css("pointer-events", "none");
  !isDisabled && $("body").removeAttr("style");
  cover.classList.add("disabled-document");
  !$(".disabled-document").length && isDisabled ?
    document.body.prepend(cover) : $(".disabled-document").remove();
}

/*
 * Minimap Handler
--------------------------------------------------------------------------------*/
function minimapSetup(settings) {
  var X=0, Y=0, scrollTop, remainder, current, finalcalculate, scrollHeight,
    posItems=[], ctx2, canvas2,
    canvas, canvasHeight, canvasWidth, ctx, textWidth, text, matrics, scale, whiteSpace;

  scrollHeight = $(".notes-editable-container")[0].scrollHeight;
  scrollTop = $(".notes-editable-container").scrollTop();
  settings = settings || noteMirror.collapse.settings;
  scale = (settings || {}).unitModelBox["notes.map.scale"];

  canvas2 = $("canvas:last")[0];
  canvas = $("canvas:first")[0];
  ctx2 = canvas2.getContext("2d");
  ctx = canvas.getContext("2d");
  ctx2.imageSmoothingQuality="high";
  ctx.imageSmoothingQuality="high";

  canvas.height=canvas.offsetHeight;
  canvas.width=canvas.offsetWidth;

  canvas2.height=canvas.offsetHeight;
  canvas2.width=canvas2.offsetWidth;

  $("canvas:last").attr("data-scale", scale);

  canvasWidth=canvas.width;
  canvasHeight=canvas.height;

  ctx2.font=$(".area-editable").css("font");
  ctx.font=$(".area-editable").css("font");
  ctx.fillStyle=$(canvas).css("color");

  if (!(isNaN(calculateY) || scrollEndZero===0)) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  $(".line").each(function(i, line) {
    text = line.textContent;
    whiteSpace = /^\s+/g.exec(text) || [];
    matrics = ctx.measureText(text);
    textWidth = (matrics.width / $(line).width()) * canvasWidth

    finalcalculate = calculateY || 0;
    Y = (2 * scale) * i + (i * 2);

    if (Y <= canvasHeight) { current = Y; } else { remainder=Y; }
    X = (whiteSpace.length ? whiteSpace[0].split("").length * 2 : 0);

    var wordWidth, lineWidth = $(line).width(),
      wordrect, xlr=0, words = text.split(/\s/);

    $.each(words, function(_j, word) {
      if (word.trim()) {
        wordWidth = ctx.measureText(word).width;
        wordrect = ((wordWidth) / lineWidth) * textWidth;

        if (_j%2) {
          ctx.fillStyle=$(canvas).css("color");
        } else {
          ctx.fillStyle=$(canvas).css("--secondry-color");
        }

        if (!(isNaN(calculateY) || scrollEndZero===0)) {
          scrolledMinimapValue = Y - finalcalculate;
          posItems.push(Y - finalcalculate);
          ctx.fillRect(X + xlr, scrolledMinimapValue||Y, wordrect, 2 * scale);
          xlr+=wordrect + 2;
        } else {
          ctx.fillRect(X + xlr, Y - finalcalculate||Y, wordrect, 2 * scale);
          xlr+=wordrect + 2;
        }
      }
    });
  });

  remainder = remainder - current;
  calculateY = (scrollTop / (scrollHeight - canvasHeight)) * remainder;
  calculateY && (scrollEndZero=remainder-calculateY);
}

function clearCanvas(canvas) {
  var ctx = canvas[0].getContext("2d");
  ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
  return ctx;
}

function drawSelectionInMinimap(selected, gbRects, e) {
  var canvas, ctx, height, posY, Y, X, textWidth, measureWidth, scale;

  canvas = $("canvas:last")[0];
  ctx = canvas.getContext("2d");

  scale = +$(canvas).attr("data-scale");

  if (!(gbRects.start || selected.length)) return;

  e.type!=="pointerup" && (ctx.fillStyle="#c9bebe4a");
  
  posY = gbRects.start.y;

  var caches = notesManager.caches;
  gbRects.rx = gbRects.mx - (caches.activityBarWidth + caches.lSideBarWidth + caches.counterWidth);

  $.each(selected, function(i, text) {
    measureWidth = ctx.measureText(text).width;
    textWidth = (measureWidth / gbRects.width) * canvas.width;
    height = 2 * scale;

    X = (gbRects.rx / gbRects.width) * canvas.width;
   
    Y = (2 * scale) * i + (i * 2);

    (e.type=="mousemove" && notesManager.caches.isFiredEvent) &&
      ctx.fillRect(
        i===0 ? (gbRects.vx > 0 ? X - textWidth : X) : 0,
        gbRects.my > 0 ? posY - Y : posY, textWidth,
        height + Y
      );
  });
}

notesManager.caches.isFiredEvent=false;
notesManager.caches.gbRects={};

$(".area-editable").on("mousedown", function(e) {
  clearCanvas($("canvas:last"));
  notesManager.caches.cx=e.clientX;
  notesManager.caches.gbRects.mx=e.clientX;
  notesManager.caches.cy=e.clientY;
});

$(".area-editable").on("selectstart mousemove pointerup", function(e) {
  var cursor, start = {}, rect, selection, selected, range;

  if (e.type==="selectstart" ||
    (notesManager.caches.isFiredEvent && e.type==="mousemove")) {
    clearCanvas($("canvas:last"));
  }

  cursor = noteMirror.collapse.trackDeepCursor();

  if (!cursor || !$(cursor.focusLine).hasClass("line")) {
    return;
  }

  var intersect = $(".title-notes")[0].clientHeight + ($(".tab-bar")[0].clientHeight) + 35;

  notesManager.caches.gbRects.width = this.clientWidth;
  notesManager.caches.gbRects.height = this.clientHeight;
  
  selection = window.getSelection();
  range = selection.getRangeAt(0);
  selected = selection.toString();
  rect = range.getBoundingClientRect();
  selected = selected && selected.split(/\n/);

  if (e.type==="selectstart") {
    notesManager.caches.isFiredEvent=true;
    start.x=rect.x;
    start.y=rect.y - intersect;
    notesManager.caches.gbRects.start=start;
  }

  if (e.type==="pointerup") {
    notesManager.caches.isFiredEvent=false;
  }

  if (e.type==="mousemove") {
    notesManager.caches.gbRects.my=notesManager.caches.cy - e.clientY;
    notesManager.caches.gbRects.vx=notesManager.caches.cx - e.clientX;
    notesManager.caches.isFiredEvent &&
      drawSelectionInMinimap(selected, notesManager.caches.gbRects, e);
  } else {
    drawSelectionInMinimap(selected, notesManager.caches.gbRects, e);
  }
});

/*
--------------------------------------------------------------------------------*/
function showHidePrimaryBar(settings, classHandler) {
  var opposit=classHandler==="addClass" ? "removeClass" : "addClass";
  $(".side-bar-toggler")[classHandler && opposit || "toggleClass"]("active");
  $(".primary-side-bar")[classHandler || "toggleClass"]("hidden");
  $(".resize-ps")[classHandler || "toggleClass"]("hidden");
  !classHandler && adjustLayout();
  !classHandler && minimapSetup(settings);
}
function showHideTerminal(settings, classHandler) {
  var opposit=classHandler==="addClass" ? "removeClass" : "addClass";
  $(".terminal-panel-toggler")[classHandler && opposit || "toggleClass"]("active");
  $(".terminal-container-view")[classHandler || "toggleClass"]("hidden");
  !classHandler && adjustLayout();
  !classHandler && minimapSetup(settings);
}
function showHideSecondryBar(settings, classHandler) {
  var opposit=classHandler==="addClass" ? "removeClass" : "addClass";
  $(".secondry-sidebar-toggler")[classHandler && opposit || "toggleClass"]("active");
  $(".resize-ss")[classHandler || "toggleClass"]("hidden");
  $(".secondry-side-bar")[classHandler || "toggleClass"]("hidden");
  !classHandler && adjustLayout();
  !classHandler && minimapSetup(settings);
}

var isclicked=false;
function contextHandlerFn(isStopped) {
  if (!isStopped) {
    isclicked=false;
    $(".menubar-list li").removeClass("active");
  }
  $(".x-ui-dialog").parent().remove();
}

/*
 * Search note [with-list]
--------------------------------------------------------------------------------*/
function searchNoteList(notactive) {
  !notactive &&
  ($(".optwith").removeClass("active"), $(".search-note").addClass("active"));
  $(".search-notes-list").toggleClass("hidden");
  !$(".search-notes-list").hasClass("hidden") && $(".search-notes-list input").focus();
  $(".search-notes-list input").on("input", function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var value, matcher, matched=false, self, lastOf, hasList;

    $(".list-not-found").remove();
    $(".view-note-list li").removeClass("hidden self end-of first-of");
    value = this.value.toLowerCase();

    $(".view-note-list li").each(function(_i, list) {
      matcher=list.textContent.toLowerCase();
      if (matcher.indexOf(value)===-1) {
        list.classList.add("hidden");
      } else { matched=true }
    });

    hasList = !!$(".view-note-list li").length;

    $(".view-note-list li.hidden").addClass("self");
    self = $(".view-note-list li").not(".hidden");
    self.length===1 && self.addClass("self");
    lastOf = self[self.length - 1];
    lastOf && lastOf.classList.add("end-of");
    self.length > 1 && $(self[0]).addClass("first-of");
    !matched && noteListManipulation().renderNotFound();
    !hasList && !this.value && $(".list-not-found").remove();
  });
}

/*
 * Search note [With-Map]
--------------------------------------------------------------------------------*/
function searchMapList(settings) {

}

/*
 *
--------------------------------------------------------------------------------*/
function visuallizeStatusBarOpt(getter) {
  !getter && $(".visual-item").each(function(_i, item) {
    visuallizeBackup.push([$(this).css("display"), item]);
    $(item).removeClass("visible");
  });
  getter && $.each(visuallizeBackup, function(_i, backup) {
    var className = backup[0]==="flex" ? "visible" : "hidden";
    $(backup[1]).addClass(className);
  });
}

function tabcontextHandler() {
  $(".context-list li").on("contextmenu", function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();

    contextHandlerFn();
    $("body").prepend(dialogs.tabContext);

    var prop = {}, contextWidth, appWidth, clientX, collapse;

    prop.left=prop.right="initial";
    prop.top=event.clientY;

    contextWidth = $(".tabcontext").width();
    appWidth = notesManager.caches.appWidth;

    clientX = event.clientX;
    collapse = clientX + contextWidth;
    collapse > appWidth ? (prop.right=appWidth - clientX) : (prop.left=clientX);
    $(".tabcontext").css(prop);
  });
}

/*
 * Rename Notelist
--------------------------------------------------------------------------------*/
function renameNote(request, response, prevName) {
  var list = notesManager.caches.list[0], field, alertBox, clipBoard, data;
  $(".view-note-list li").removeClass("selected");

  field = $(list).find(".note-view-name")[0];

  function initial(event) {
    if (event.type==="focusout" && renameNote.executed) {
      return;
    }
    $(".view-note-list").find(".alert-box").remove();
    event.stopPropagation();
    event.stopImmediatePropagation();
    field.contentEditable=false;
    $(field).removeAttr("contenteditable");
    $(list).removeAttr("style");
    renameNote(request, {data: field.textContent}, prevName);
  }

  if (response && prevName) {
    prevName===response.data.toLowerCase() && (field.textContent=prevName);
    renameNote.executed=false;
    if (!window.isErrorNotename && prevName!==response.data.toLowerCase()) {
      $(".ps-ajax-sash-loader").addClass("active");
      data = list.data;
      $.indexedDB(request, "UserBackup");
      $.indexedDB.note.rename(request, data, list.data.hashID, response.data, function() {
        $(".ps-ajax-sash-loader").removeClass("active");
        $(".view-map-list li, .scrollable-active-tab-bar li").each(function() {
          if (this.data.hashID===data.hashID) {
            $(this).find(".title-list").text(response.data);
          }
        });
      });
    }
    return;
  }

  alertBox = document.createElement("div");
  $(alertBox).addClass("alert-box Gok2N2nEj hidden");

  field.contentEditable=true;
  $(list).css("overflow", "visible");
  prevName = field.textContent.toLowerCase();

  $(field).after(alertBox);
  $(alertBox).css({top: 21, marginLeft: 23, width: "calc(100% - 44px)", whiteSpace: "break-spaces"});

  checkExistsOrValidNotename(request, field, $(alertBox));

  var selection, range;

  range = document.createRange();
  range.setStart(field.firstChild, 0);
  range.setEnd(field.firstChild, field.textContent.length);

  selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  field.focus();

  $(field).on("focusout", initial);
  $(field).on("keydown paste", function(event) {
    if (event.type==="paste") {
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
      clipBoard = event.originalEvent.clipboardData.getData("text/plain");
      clipBoard = clipBoard.split(/\n/)[0].slice(0, 80);
      document.execCommand("insertText", false, clipBoard);
    }
    if (event.keyCode===13 && event.type=="keydown") {
      event.preventDefault();
      renameNote.executed=true;
      initial(event);
    }
  });
}

$(".optwith").click(function() {
  $(".optwith").removeClass("active");
  $(this).addClass("active");

  if ($(this).hasClass("search-note")) {
    searchNoteList(true);
  } else {
    $(".search-notes-list").addClass("hidden");
  }
});

/* Complete loaded notes list [Callback]
--------------------------------------------------------------------------------*/
function completeLoadedCallback(request, settings) {

  const appInfo = settings.appViewInfo, gridvh=notesManager.caches["grid-vh"] + 1;

  resizer($(".resize-ps"), $(".primary-side-bar"), "left", 500, 170, function() {
    settings.unitModelBox["notes.primarySideBar.width"]=this.resized;
    setInfo(request, "unitModelBox", settings.unitModelBox);
  }, settings);

  resizer($(".resize-ss"), $(".secondry-side-bar"), "right", 500, 170, function() {
    settings.unitModelBox["notes.secondrySideBar.width"]=this.resized;
    setInfo(request, "unitModelBox", settings.unitModelBox);
  }, settings);

  resizer($(".terminal-resizer"), $(".terminal-container-view"), "bottom", gridvh, 200, function() {
    settings.unitModelBox["notes.terminal.height"]=this.resized;
    setInfo(request, "unitModelBox", settings.unitModelBox);
  }, settings);

  $(".layout-customizer, .close-prompt").click(function() {
    $(".secondry-prompt").toggleClass("hidden");
  });

  $(".side-bar-toggler").click(function() {
    showHidePrimaryBar(settings);
    appInfo["notes.primarySideBar"]=getHiddenClass(".primary-side-bar");
    setInfo(request, "appViewInfo", appInfo);
  });

  $(".terminal-panel-toggler, .close-panel").click(function() {
    showHideTerminal(settings);
    appInfo["notes.terminal"]=getHiddenClass(".terminal-container-view");
    setInfo(request, "appViewInfo", appInfo);
  });

  $(".secondry-sidebar-toggler").click(function() {
    showHideSecondryBar(settings);
    appInfo["notes.secondrySideBar"]=getHiddenClass(".secondry-side-bar");
    setInfo(request, "appViewInfo", appInfo);
  });

  showHidePrimaryBar(settings, switchClass(appInfo["notes.primarySideBar"]));
  showHideTerminal(settings, switchClass(appInfo["notes.terminal"]));
  showHideSecondryBar(settings, switchClass(appInfo["notes.secondrySideBar"]));

  const rskip = /^notes\.(?:primarySideBar|terminal|secondrySideBar)$/;

  $.each(appInfo, function(targetElementSelector, value) {
    if (rskip.test(targetElementSelector)) {
      return;
    }
    var matcher = targetElementSelector.split("."),
      firstMatched = matcher.pop();
    $("div[data-selector=" + firstMatched + "]").addClass(value);
  });

  adjustLayout();
}

function setInfo(request, key, valueObject) {
  $.indexedDB(request, "settings");
  $.indexedDB.set(key, valueObject);
}

function switchClass(visibility) {
  return visibility==="hidden" ? "addClass" : "removeClass";
}

function getHiddenClass(selector) {
  return $(selector).hasClass("hidden") ? "hidden" : "visible";
}

function detectNextActive(source) {
  var forceElem = $(".scrollable-active-tab-bar li").not(".delete")[0],
    activated = $(source).not(".delete")[0];
  return $(activated).hasClass("delete") ? forceElem : activated;
}

/*
 * Delete Note
--------------------------------------------------------------------------------*/
function deleteNote(request) {
  $(".ps-ajax-sash-loader").addClass("active");
  $.indexedDB(request, "UserBackup");
  var data, deletedItems={}, nextActive, tabBarItems=[];

  $(notesManager.caches.list).each(function(_i, list) {
    data = list.data;
    deletedItems[data.hashID]=data;
    $.indexedDB.delete(data.hashID, function() {
      wait(true, function() {
        $(detectNextActive(nextActive)).click();
        $(tabBarItems).remove();
        $(".ps-ajax-sash-loader").removeClass("active");
        autoShowHideWebInterface();
      });
    });
  }).remove();

  $(".scrollable-active-tab-bar li").each(function(_i, tab) {
    data = tab.data;
    if (deletedItems.hasOwnProperty(data.hashID)) {
      tabBarItems.push(tab);
      $(tab).addClass("delete");
      if (data.open) {
        nextActive=[].slice.call($(tab).prevAll()).reverse();
        nextActive=nextActive.length && nextActive || $(tab).nextAll();
        nextActive=nextActive;
      }
    }
  });

  $(".view-map-list li").each(function(_i, tab) {
    data = tab.data;
    if (deletedItems.hasOwnProperty(data.hashID)) {
      tabBarItems.push(tab);
    }
  });
}

function autoShowHideWebInterface() {
  var includedList = $(".scrollable-active-tab-bar li");
  includedList.length ?
    $(".web-interface").addClass("hidden") : $(".web-interface").removeClass("hidden");
  visuallizeStatusBarOpt(includedList.length)
}

function pinTabBarList(hashID, pinned) {
  $(".scrollable-active-tab-bar li").each(function() {
    if (this.data.hashID===hashID) {
      $(this)[(pinned ? "add" : "remove") + "Class"]("pinned");
    }
  });
}

/*
 * Delete All Notes
--------------------------------------------------------------------------------*/
function deleteAllNotes(request) {
  $(".scrollable-active-tab-bar li").addClass("delete");
  $(".ps-ajax-sash-loader").addClass("active");
  $.indexedDB(request, "UserBackup");
  $.indexedDB.note.deleteAll(function(deletedItems) {
    $(".ps-ajax-sash-loader").removeClass("active");
    $(".note-list li, .view-map-list li").each(function() {
      if (deletedItems.indexOf(this.data.hashID) >= 0) {
        $(this).remove();
      } else {
        $(this).removeClass("delete");
      }
    });
    autoShowHideWebInterface();
  });
}

/*
 * Pin/Unpin Note
--------------------------------------------------------------------------------*/
function pinUnpinNote(request, datasource, resolve) {
  var data = datasource || notesManager.caches.list[0].data;
  data.pinned=data.pinned ? false : true;
  $.indexedDB(request, "UserBackup");
  $.indexedDB.note.update(data.hashID, {pinned: data.pinned}, function() {
    $.isFunction(resolve) && resolve();
    pinTabBarList(data.hashID, data.pinned);
  });
}

/*
 * Download Note
--------------------------------------------------------------------------------*/
function downloadNote() {
  var list = notesManager.caches.list[0], a, data, blob,
    rstripTag = /<\/*(.*?)>/g;
  
  data = list.data;
  data.cleanText = [];
  $.each(data.text, function(_i, text) {
    data.cleanText.push(text.replace(rstripTag, ()=> ""));
  });
 
  blob = new Blob([data.cleanText.join("\n")], {type: "text/plain"});
  a = document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download=data.name;
  a.click();
}

/*
 * Reset Note
--------------------------------------------------------------------------------*/
function resetNote(request) {
  var lines = [].slice.call($(".area-editable .line")), line = lines.shift(),
    data = notesManager.caches.list[0].data;

  if (!data.text[0]) return;
  
  $(".ps-ajax-sash-loader").addClass("active");
  $.indexedDB(request, "UserBackup");
  $.indexedDB.note.update(data.hashID, {text: ""}, function() {
    $(lines).remove();
    $(line).html("<br/>");
    $(".ps-ajax-sash-loader").removeClass("active");
  });
}

/*
 * Mirror Scroller Controller
--------------------------------------------------------------------------------*/
function controlMirrorScroll(event) {
  var element = $(".notes-editable-container")[0];
  noteMirror.execWheel=true;
  event.preventDefault();
  $(element).scrollTop(element.scrollTop - (event.wheelDeltaY < 0 ? -50 : 50));
  minimapSetup();
  scrolledTabBar($(".notes-editable-container"), $(".tab-bar"));
}
$(".mirror-scroll-collapse")[0].addEventListener("wheel", controlMirrorScroll, {passive: false});
$(".mirror-scroll-collapse")[1].addEventListener("wheel", controlMirrorScroll, {passive: false});

var executeScroller=false;
$(".notes-editable-container").on("scroll", function() {
  (executeScroller && !noteMirror.execWheel && noteMirror.collapse) && (minimapSetup());
  executeScroller=true;
  noteMirror.execWheel=false;
  scrolledTabBar($(".notes-editable-container"), $(".tab-bar"));
});

function scrollTabBar(e) {
  e.preventDefault();
  var perScroll = 50, curScrollLeft = this.scrollLeft;
  e.wheelDelta < 0 ? (curScrollLeft+=perScroll) : (curScrollLeft-=perScroll);
  this.scrollLeft=curScrollLeft;
}

function scrolledTabBar(scrollBox, activeElem) {
  scrollBox.scrollTop() > 0 ? activeElem.addClass("active") : activeElem.removeClass("active");
}

$(".scrollable-side-bar").on("scroll", function() {
  scrolledTabBar($(this), $(".sticky-top"));
});

$(".scrollable-active-tab-bar").parent()[0]
  .addEventListener("wheel", scrollTabBar, {passive: false});

function transaction(indexedDB, table) {
  const transaction = indexedDB.transaction([table || "settings"], "readwrite");
  return transaction.objectStore(table || "settings");
}

const indexedDB = window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;
const request = indexedDB.open("notesManager", 1);
request.addEventListener("error", function(event) {
  alert("not support");
});
request.addEventListener("upgradeneeded", function() {
  const db = request.result;
  db.createObjectStore("UserBackup");
  db.createObjectStore("settings");
});
request.addEventListener("success", function() {
  let store = transaction(request.result); /* start quickly dbIndexed transaction */
  checkExistsOrValidNotename(request);

  $(".note-sash-loader").addClass("active");

  $(".preloader").remove();

  /*
    * Database [indexedDB] Handling
  --------------------------------------------------------------------------------*/
  const defaultLayoutInfo = store.get("defaultLayoutInfo");
  const colorTheme = store.get("colorTheme");
  const appViewInfo = store.get("appViewInfo");
  const TextMirrorInfo = store.get("TextMirrorInfo");
  const DIunitModelBox = store.get("unitModelBox");

  store.getAll().addEventListener("error", function() {
    alert("error");
  });

  store.getAll().addEventListener("success", function() {
    const settings = {
      colorTheme: colorTheme.result && decodeBuffer(colorTheme.result) || getSystemColorTheme(),
      appViewInfo: appViewInfo.result && decodeBuffer(appViewInfo.result) || appViewSetting,
      defaultLayoutInfo: defaultLayoutInfo.result && decodeBuffer(defaultLayoutInfo.result) || defaultLayoutSettings,
      TextMirrorInfo: TextMirrorInfo.result && decodeBuffer(TextMirrorInfo.result) || defaultTextMirrorInfo,
      unitModelBox: DIunitModelBox.result && decodeBuffer(DIunitModelBox.result) || unitModelBox
    };

    adjustLayout();
    window.addEventListener("resize", ()=> windowResizeEventHandler(settings));
    document.addEventListener("fullscreenchange", ()=> windowResizeEventHandler(settings));

    [].push.apply(hiddenItems, adjustMoreOpt(
      $(".items-left-menubar .menubar-list"), $(".more-tab-opt"), $(".more-all-opt"))
    );

    setItem("settings", settings);
    const finalSettings = getItem("settings") || settings;

    $.noteLoader.load(request, finalSettings);

    $(".reload-notes").click(function() {
      $.noteLoader.load(request, finalSettings, true);
    });

    /*
    --------------------------------------------------------------------------------*/
    $(".main .bring-cap").on("dblclick", ()=> showNoteInput("append"));
    $(".btn-add-note").click(()=> showNoteInput("prepend"));

    $("#create_note_form").on("submit", function(e) {
      Handler.submit=true;
      e.preventDefault();
      e.data=$(".create-new-note").find("input")[0];
      createNote(e.data, e, request, finalSettings);
    });

    $(".dbl-new-note").on("dblclick", function(e) {
      createFinalNote(e, request, finalSettings);
    });

    $(".opt-add-untitled-note").on("click", function(e) {
      createFinalNote(e, request, finalSettings);
    });

    $(".create-new-note").find("input").on("focusout", function(e) {
      !Handler.submit&&createNote(this, e, request, finalSettings);
      hideNoteInput();
    });

    /*
    --------------------------------------------------------------------------------*/

    !DIunitModelBox.result && store.put(encodeBuffer(unitModelBox), "unitModelBox");
    !TextMirrorInfo.result && store.put(encodeBuffer(defaultTextMirrorInfo), "TextMirrorInfo");
    !colorTheme.result && store.put(encodeBuffer(getSystemColorTheme()), "colorTheme");
    !appViewInfo.result && store.put(encodeBuffer(appViewSetting), "appViewInfo");
    !defaultLayoutInfo.result && store.put(encodeBuffer(defaultLayoutSettings), "defaultLayoutInfo");

    function unitModelBoxHandler() {
      var terminal = $(".terminal-container-view"), gridvh;
      $.each(settings.unitModelBox, function(property, value) {
        var matcher = property.split(".");
        $("div[data-selector=" + matcher[1] + "]").css(matcher[2], value);
      });

      gridvh = notesManager.caches["grid-vh"] + 1;
      gridvh < terminal.height() && terminal.height(gridvh);
      adjustLayout();
    }

    unitModelBoxHandler();
    updateNoteTitle();
    mirrorHandler();

    isclicked=false;
    $(document).on("click", function(e) {
      isclicked=false;
      $(".x-ui-dialog").parent().remove();
      $(".view-note-list li").removeClass("selected");
    });

    $(".left-activity-bar").on("contextmenu", function(event) {
      contextHandlerFn();
      $("body").prepend(dialogs.activity);

      var prop = {}, dialog = $(".activity-dialog"), height, Y;

      height = $(dialog).height();

      prop.left=event.clientX;
      Y=event.clientY;
      prop.top=prop.bottom="initial";

      this.clientHeight < (Y + height) ? (prop.bottom=this.clientHeight-(Y - 57)) : (prop.top=Y);
      $(".activity-dialog").css(prop);
    });

    $(".status-bar").on("contextmenu", function(event) {
      contextHandlerFn();
      $("body").prepend(dialogs.statusBar);

      var prop = {}, dialog = $(".status-bar-dialog"), width, height, X;

      height = $(dialog).height();
      width = $(dialog).width();

      prop.top=event.clientY - height;
      X=event.clientX;
      prop.left=prop.right="initial";

      this.clientWidth < (X + width) ? (prop.right=this.clientWidth-X) : (prop.left=X);
      $(".status-bar-dialog").css(prop);
    });

    $(".tab-bringcap").on("contextmenu pointerdown", function(event) {
      contextHandlerFn();
      if (event.type==="pointerdown") return;
      $("body").prepend(dialogs.tabMenuContext);

      var prop = {}, contextWidth, appWidth, clientX, collapse;

      prop.left=prop.right="initial";
      prop.top=event.clientY;

      contextWidth = $(".tabmenucontext").width();
      appWidth = notesManager.caches.appWidth;

      clientX = event.clientX;
      collapse = clientX + contextWidth;
      collapse > appWidth ? (prop.right=appWidth - clientX) : (prop.left=clientX);
      $(".tabmenucontext").css(prop);
    });

    $(".menu-bar").on("contextmenu pointerdown", function(event) {
      contextHandlerFn();
      if (event.type==="pointerdown") return;
      $("body").prepend(dialogs.menuBarContext);

      var prop = {}, contextWidth, appWidth, clientX, collapse;

      prop.left=prop.right="initial";
      prop.top=event.clientY;

      contextWidth = $(".menubarcontext").width();
      appWidth = notesManager.caches.appWidth;

      clientX = event.clientX;
      collapse = clientX + contextWidth;
      collapse > appWidth ? (prop.right=appWidth - clientX) : (prop.left=clientX);
      $(".menubarcontext").css(prop);
    });

    $(".view-note-list, .bring-cap").on("contextmenu mousedown", function(event) {
      if (event.type==="mousedown") {
        contextHandlerFn();
        return;
      }
      $("body").prepend(dialogs.primary);

      var prop = {}, dialog = $(".primary-dialog"), height, Y, selected,
        stickyHeight = $(".sticky-top").height(),
        boxHeight = this.parentElement.clientHeight;

      height = $(dialog).height();

      prop.left=event.clientX;
      Y=event.clientY;
      prop.top=prop.bottom="initial";

      $(event.target).is(".strict") ?
        $(".primary-dialog li").removeClass("disabled") : $(".list-axios").addClass("disabled");
      
      if (event.target.nodeName==="LI") {
        selected = $(".view-note-list li.selected");
        notesManager.caches.list=(selected.length && selected) || [event.target];
      }

      boxHeight < ((Y - stickyHeight - 57) + height) ?
        (prop.bottom=boxHeight-(Y - stickyHeight - 57)) : (prop.top=Y);
      $(".primary-dialog").css(prop);
      $(".primary-dialog li").click(primaryDialogHandler);
    });

    function primaryDialogHandler(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      contextHandlerFn();

      $(this).hasClass("add-new-note") && showNoteInput("append");
      $(this).hasClass("add-untitle-note") && createFinalNote(e, request, finalSettings);

      $(this).hasClass("pin-unpin") && pinUnpinNote(request);
      $(this).hasClass("reset") && resetNote(request);
  
      $(this).hasClass("search-note-list") && searchNoteList();
      $(this).hasClass("delete-note") && deleteNote.call(this, request);

      $(this).hasClass("rename-note") && renameNote.call(this, request);
      $(this).hasClass("download") && downloadNote();

      $(this).hasClass("delete-all-notes") && deleteAllNotes(request);
    }

    $(".area-editable").on("contextmenu", function(event) {
      contextHandlerFn();
      $("body").prepend(dialogs.mirror);

      var prop = {}, x, y, width, height, fcw, fch, rx;

      prop.top=prop.left=prop.right=prop.bottom="initial";

      rx = 48 + $(".primary-side-bar").width() + 15 + $(".notes-line-counter").width() + $("canvas.minimap").width();

      x = event.clientX;
      y = event.clientY;

      fch = $(".bsplit-view-container")[0].clientHeight;
      fcw = this.clientWidth;

      width = $(".mirror-dialog").width();
      height = $(".mirror-dialog").height();
    
      fcw < ((x - rx) + width) ? (prop.right=fcw-(x - rx)) : (prop.left=x);
      fch < ((y - 57) + height) ? (prop.bottom=fch-(y - 57)) : (prop.top=y);
      $(".mirror-dialog").css(prop);
    });

    function customizeMenuToggle(isFired) {
      $(".menubar-list li").on("click mouseover pointerdown", function(e) {
        e.type==='click' && $(".expanded").remove();
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        e.type==='pointerdown' && (e.type='mouseover');

        var prop = {}, gbRects, listHeight = 0, selector = $(this).attr("data-name");

        if (e.type==='mouseover' &&
          $(".mb-toggle").is($("." + selector.toLowerCase() + "-dialog"))) {
          return;
        }
  
        if (e.type==='mouseover' && !isclicked && !isFired) {
          return;
        }
  
        $(".mb-toggle").not($("." + selector.toLowerCase() + "-dialog")).parent().remove();

        $(".menubar-list li").removeClass("active");
        $(this).addClass("active");
  
        if (!$(".mb-toggle").length) {
          contextHandlerFn(true);
          e.type==='click' && (isclicked=true);
          $("body").prepend(dialogs[selector]);
        } else {
          $(".mb-toggle").parent().remove();
          e.type==='click' && (isclicked=false);
        }

        gbRects = this.getBoundingClientRect();
        listHeight = this.clientHeight - 6;

        prop.left = gbRects.x;
        prop.top = gbRects.y + (!isFired ? listHeight : 0);

        if (isFired) {
          prop.left += this.clientWidth + 5;
        }

        $("." + selector.toLowerCase() + "-dialog").css(prop);
      });
    }
    customizeMenuToggle();

    $(".more-all-opt, .more-tab-opt").click(function(e) {
      $(".menubar-list li").removeClass("active");
      isclicked=false;
      $(".expanded").length ? $(".expanded").remove() :
      $("body").prepend($(dialogs.menuList).addClass("sticky expanded").css("z-index", 111));
      $(".x-ui-dialog").parent().remove();
      customizeMenuToggle(true);

      var calcPosX, calcPosY, prop = {};
      
      calcPosX = e.clientX - e.offsetX;
      calcPosY = e.clientY - e.offsetY;

      calcPosY = calcPosY + $(this).find("div").height() + 5;
      prop.top=calcPosY;
      prop.left=calcPosX;
      $(dialogs.menuList).css(prop);

      $(".expanded li").addClass("hidden").each(function(i, item) {
        hiddenItems.includes(i) && $(item).removeClass("hidden");
      });
    });

    var isToggling1=true, isToggling2=true, isToggling3=true, existsDialog;
    $(document).on("pagehide visibilitychange pointerdown unhandlerejection", function(event) {
      existsDialog = $(event.target).parents(".x-ui-dialog").length;
      if (event.type==="pointerdown" && !!existsDialog) {
        return;
      }
      if (!$(event.target).hasClass("sma1") && !isToggling1) {
        isToggling1=true;
      }
      else if (!$(event.target).hasClass("sma2") && !isToggling2) {
        isToggling2=true;
      }
      else if (!$(event.target).hasClass("scopener") && !isToggling3) {
        isToggling3=true;
      }
      contextHandlerFn();
      $(".psmore-action, .ssmore-action, .settings-context").parent().remove();
      $(".xenderfire").removeClass("active");
    });

    $(".psmore-action, .ssmore-action, .settings-context").parent().remove();

    function moreActionSidebarHandler(contextSelector, dialog) {
      $(this).addClass("active");
      $("body").prepend(dialogs[contextSelector]);

      var gbRects = this.getBoundingClientRect(), props = {}, width;

      props.top=props.left=props.right="initial";
      props.top=gbRects.y + gbRects.height;
      props.left=gbRects.x;

      width = $(dialog).width();
      if (gbRects.x + width > notesManager.caches.appWidth) {
        props.right=notesManager.caches.appWidth-(gbRects.x + gbRects.width);
        delete props["left"];
      }

      $(dialog).css(props);
    }

    $(".primary-more-action").click(function() {
      $(this).removeClass("active");
      if (!isToggling1) {
        isToggling1=true;
        return;
      }
      isToggling1=false;
      moreActionSidebarHandler.call(this, "primaryContext", ".psmore-action");
    });

    $(".secondry-more-action").click(function() {
      $(this).removeClass("active");
      if (!isToggling2) {
        isToggling2=true;
        return;
      }
      isToggling2=false;
      moreActionSidebarHandler.call(this, "secondryContext", ".ssmore-action");
    });

    $(".settings-opener").click(function() {
      if (!isToggling3) {
        isToggling3=true;
        return;
      }
      isToggling3=false;
      $("body").prepend(dialogs.settingsContext);
      $(".settings-context").css("bottom", $(".status-bar")[0].clientHeight).css("left", 48);
    });
  });
});
})(jQrony, window, document);
