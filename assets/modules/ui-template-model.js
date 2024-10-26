/*
----------------------------------------------------------------------------*/
function dialogUI(identifier, UISource) {
  return new dialogUI.prototype.init(identifier, UISource);
}

dialogUI.prototype = {
  constructor: dialogUI,
  init: function(identifier, UISource) {
    this.listClass="ydNrdEUSf YME4cUU0s QPou3Wze0 x50ncvXCb";
    this.identifier=identifier;
    this.UISource=UISource;
    this.completeList=[];
    this.dialogSetup();
    this.isRender=true;
    this.renderUL=function(data) {
      var underList = document.createElement("ul");
      data && underList.appendChild(data);
      return underList;
    };
    this.setComponents(UISource, this);
    return this;
  },
  create: function(identifier, UISource) {
    return dialogUI(identifier, UISource);
  },
  render: function(identifier, UISource) {
    const result = dialogUI(identifier, UISource);
    document.body.prepend(result.dialogStructure);
  },
  renderText: function(text, shortcut, parent) {
    var span = document.createElement("span"), cloneSpan, cloneDiv,
      div = document.createElement("div");

    $(div).addClass("text Eo7E6F84I");
    span.textContent=text;
    div.appendChild(span), parent.appendChild(div);

    if (shortcut) {
      cloneDiv = document.createElement("div");
      cloneSpan = document.createElement("span");
      cloneSpan.textContent=shortcut;
      cloneDiv.classList.add("shortcut-key");
      cloneDiv.appendChild(cloneSpan), parent.appendChild(cloneDiv);
    }
  },
  setComponents: function(UISource, init) {
    var teek, extractList;

    if (!UISource.length) {
      this.completeList.push(this.tmpList);
      this.tmpList=undefined;
      $(this.wrapInner).append(this.completeList);
      this.isRender=true;
      return;
    }

    teek = UISource.shift();
    init.isRender && (init.tmpList=this.renderUL());
    extractList = this.extractList(teek.class);
    init.isRender=false;

    teek.disabled && extractList.list.classList.add("disabled");
    extractList.list.classList.add("strict");
    this.renderIcon("20 6 9 17 4 12", 16, teek.checkbox, "icon-check", extractList.item1);
    this.renderText(teek.text, teek.shortcut, extractList.item2);
    this.renderIcon("9 18 15 12 9 6", 20, teek.moreopt, "icon-more", extractList.item3);

    if (teek.override||teek.collapse) {
      if (this.tmpList.childNodes.length) {
        this.completeList.push(this.tmpList);
        init.isRender=true;
      }
      !teek.collapse && this.completeList.push(this.renderUL(extractList.list));
      teek.collapse && this.completeList[this.completeList.length - 1].appendChild(extractList.list);
    } else {
      this.tmpList && this.tmpList.appendChild(extractList.list);
    }
    this.setComponents(UISource, this);
  },
  extractList: function(classList) {
    var list, item1, item2, item3;

    list = document.createElement("li");
    item1 = document.createElement("div");
    item2 = item1.cloneNode();
    item3 = item2.cloneNode();
    $(list).addClass(this.listClass);

    item1.classList.add("item-left");
    item2.classList.add("item-center");
    item3.classList.add("item-right");
    classList && $(list).addClass(classList);
    $(list).append(item1, item2, item3);
    return {list, item1, item2, item3};
  },
  renderIcon: function(nspoint, dimension, includeIcon, classList, parent) {
    var iconwrap = document.createElement("div");
    iconwrap.classList.add(classList);
    if (!includeIcon) {
      parent.appendChild(iconwrap);
      return;
    }
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
      polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");

    svg.width=svg.height=dimension;
    $(svg).attr("viewBox", "0 0 24 24");
    $(polyline).attr("points", nspoint);
    svg.appendChild(polyline);
    iconwrap.appendChild(svg), parent.appendChild(iconwrap);
  },
  dialogSetup: function() {
    const cover = document.createElement("span");
    const dialog = document.createElement("div");
    const wrapInner = dialog.cloneNode();
    dialog.classList.add("dialog");
    dialog.dataset["jspid"]=$.expando;
    dialog.role="dialog";
    dialog.ariaHidden=true;
    dialog.dataset["ui"]="dialog";
    dialog.dataset["build"]="js";
    wrapInner.classList.add("wrapinner");
    dialog.appendChild(wrapInner);
    cover.appendChild(dialog);
    this.wrapInner=wrapInner;
    wrapInner.dataset["timestamp"]=Date.now();
    $.each(this.identifier, function(attr, value) {
      attr=="class" ? $(dialog).addClass(value) : $(dialog).attr(attr, value);
    });
    this.dialogStructure=cover;
  }
};

$.extend(dialogUI, dialogUI.prototype);

dialogUI.prototype.init.prototype=dialogUI.prototype;


/*
----------------------------------------------------------------------------*/
function autocompleteDialogUI() {
  return new autocompleteDialogUI.prototype.init();
}

autocompleteDialogUI.prototype = {
  customizeRendring: function() {
    if (this.totalList.length) {
      if (this.totalList.length > this.limit) {
        var limit = this.totalList.slice(0, this.limit);
        this.totalList=this.totalList.slice(this.limit);
        $(this.readyNode).append(limit);
      }
      else {
        $(this.readyNode).append(this.totalList);
        this.totalList.splice(-this.totalList.length);
      }
    }
  },
  constructor: autocompleteDialogUI,
  init: function() {
    this.limit=100;
    this.snippetDiloagSetup();
  },
  renderText: function(text, parent) {
    var textWrap = document.createElement("div"),
      span = document.createElement("span");

    span.textContent=text;
    textWrap.classList.add("snippet-text");
    textWrap.appendChild(span), parent.appendChild(textWrap);
  },
  renderList: function(UISource) {
    var init = this, underList;
    $(this.readyNode).empty();
    this.totalList=[];
    $.each(UISource, function(_i, sourceObject) {
      underList = document.createElement("li");
      underList.dataset["snippet"]=sourceObject.snippet;
      underList.dataset["value"]=sourceObject.value;
      init.renderIcon(sourceObject.snippet, underList);
      init.renderText(sourceObject.text, underList);
      init.totalList.push(underList);
    });
    this.totalList[0].classList.add("active");
    this.customizeRendring();
  },
  renderIcon: function(iconType, parent) {
    var path, polyline, svg, iconwrap, rect, line, polygon, copyLine, copyPolyline;

    polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon"),
    rect = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
    line = document.createElementNS("http://www.w3.org/2000/svg", "line"),
    path = document.createElementNS("http://www.w3.org/2000/svg", "path"),
    polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline"),
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
    iconwrap = document.createElement("div");

    $(svg).attr("width", 18).attr("height", 18);
    $(svg).attr("viewBox", "0 0 24 24");
    iconwrap.classList.add("snippet-icon");

    if (iconType==="random") {
      $(polygon).attr("points", "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2");
      copyLine=line.cloneNode();
      $(copyLine).attr("x1", 12).attr("y1", 22).attr("x2", 12).attr("y2", 15.5);
      copyPolyline=polyline.cloneNode();
      $(copyPolyline).attr("points", "22 8.5 12 15.5 2 8.5");
      $(polyline).attr("points", "2 15.5 12 8.5 22 15.5");
      $(line).attr("x1", 12).attr("y1", 2).attr("x2", 12).attr("y2", 8.5);
      svg.append(polygon, copyLine, copyPolyline, polyline, line);
    }
    else if (iconType==="snippets") {
      $(rect).attr("x", 3).attr("y", 3).attr("rx", 2).attr("ry", 2).width(18).height(18);
      svg.appendChild(rect);
    }
    else if (iconType==="html") {
      $(path).attr("d", "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z");
      svg.appendChild(path);
    } else {
      $(path).attr("d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z");
      $(polyline).attr("points", "3.27 6.96 12 12.01 20.73 6.96");
      $(line).attr("x1", 12).attr("y1", 22.8).attr("x2", 12).attr("y2", 12);
      svg.append(path, polyline, line);
    }
    iconwrap.appendChild(svg), parent.appendChild(iconwrap);
  },
  render: function(where, skip) {
    if (skip && !$(".autocomplete-dialog").length) {
      $(where).prepend(this.autocompleteDialogUI);
    } else {
      $(where).prepend(this.autocompleteDialogUI);
    }
  },
  remove: function() {
    $(".autocomplete-dialog").remove();
  },
  snippetDiloagSetup: function() {
    var dialog = document.createElement("div"),
      viewBox = dialog.cloneNode(),
      underList = document.createElement("ul");

    viewBox.classList.add("view-box");
    dialog.classList.add("autocomplete-dialog");
    dialog.dataset["jspid"]=$.expando;
    dialog.role="dialog";
    dialog.ariaHidden=true;
    dialog.dataset["ui"]="dialog";
    dialog.dataset["build"]="js";
    viewBox.appendChild(underList);
    this.renderScrollbar(dialog), dialog.appendChild(viewBox);
    this.readyNode=underList;
    this.autocompleteDialogUI=dialog;
  },
  renderScrollbar: function(parent) {
    var track = document.createElement("div"),
      thumb = track.cloneNode();

    thumb.classList.add("scrollbar-thumb");
    $(track).addClass("scrollbar-track v-track");
    track.appendChild(thumb), parent.appendChild(track);
  }
};

autocompleteDialogUI.prototype.init.prototype=autocompleteDialogUI.prototype;


/*
----------------------------------------------------------------------------*/
function mapManipulation() {
  return new mapManipulation.prototype.init();
}

mapManipulation.prototype = {
  constructor: mapManipulation,
  init: function() {
    return this;
  },
  renderMapList: function(title, description, strict, key, attachments) {
    var wrap = document.createElement("div"), text,
      textContent = "",
      titleWrap = wrap.cloneNode(),
      descWrap = wrap.cloneNode(),
      li = document.createElement("li");

    $(titleWrap).addClass("map-title Eo7E6F84I title-list map-view-2");
    $(descWrap).addClass("map-text F5OYIlxgO map-view-2");
    text = description.slice(0, 232);
    $(text).each(function(_i, textData) {
      textContent += `<p>${textData.replace(/\<br\/*\>/g, "")}</p>`;
    });
    descWrap.innerHTML=textContent;
    titleWrap.textContent=title;
    $(li).addClass("view-map-note Q3m1TjFEg");
    $(wrap).addClass("Q3m1TjFEg YiVmwrNp2 CGA3xkcxA stDgdv64V");
    wrap.append(titleWrap, descWrap);
    li.appendChild(wrap);
    li[key]=attachments;
    strict && li.classList.add(strict);
    $(".view-map-list").prepend(li);
  },
  renderNotFound: function() {
    var wrap = document.createElement("div"),
      li = document.createElement("li"),
      iconwrap = wrap.cloneNode(),
      rect = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
      path = document.createElementNS("http://www.w3.org/2000/svg", "path"),
      g = document.createElementNS("http://www.w3.org/2000/svg", "g"),
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      
    iconwrap.classList.add("icon-prefix");
    $(li).addClass("map-not-found not-found");
    $(rect).attr("x", 3).attr("y", 3).attr("rx", 2).attr("ry", 2);
    $(path).attr("d", "M9 3v18");
    $(svg).attr("viewBox", "0 0 24 24");
    g.append(rect, path);
    svg.appendChild(g);
    iconwrap.appendChild(svg);
    wrap.textContent="Map Not Found";
    wrap.classList.add("eCzF3EuiP");
    li.append(iconwrap, wrap);
    $(".view-map-list").empty().append(li);
  }
};

mapManipulation.prototype.init.prototype=mapManipulation.prototype;


/*
----------------------------------------------------------------------------*/
function noteListManipulation() {
  return new noteListManipulation.prototype.init();
}

noteListManipulation.prototype = {
  constructor: noteListManipulation,
  init: function() {
    this.viewBox="0 0 24 24";
  },
  renderNoteList: function(notesTitle, strict, key, attachments) {
    var wrap = document.createElement("div"), cloneSvg, cloneUse, cloneWrap,
      rootHref = "svg/notesmanager.svgall.svg#",
      iconwrap = wrap.cloneNode(),
      li = document.createElement("li"),
      use = document.createElementNS("http://www.w3.org/2000/svg", "use"),
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    iconwrap.classList.add("note-icon");
    $(wrap).add(li).addClass("Eo7E6F84I strict");
    wrap.textContent=notesTitle;
    $(svg).width(19).height(19);
    iconwrap.appendChild(svg);
    li.append(wrap, iconwrap);
    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", rootHref.concat("fnote"));
    svg.appendChild(use);
    $(svg).attr("viewBox", this.viewBox);
    li[key]=attachments;
    wrap.classList.add("note-view-name");

    if (strict) {
      cloneWrap = document.createElement("div");
      cloneSvg = svg.cloneNode();
      cloneUse = use.cloneNode();
      cloneWrap.classList.add(strict === "hidden" ? "icon-hidden" : "lock");
      $(cloneSvg).width(14).height(14);
      cloneUse.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", rootHref.concat(strict));
      cloneWrap.appendChild(cloneSvg);
      cloneSvg.appendChild(cloneUse);
      li.appendChild(cloneWrap);
    }
    $(".view-note-list").prepend(li);
  },
  renderNotFound: function() {
    var wrap = document.createElement("div"),
      li = document.createElement("li"),
      use = document.createElementNS("http://www.w3.org/2000/svg", "use"),
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    wrap.textContent="Notes Not Found";
    li.classList.add("list-not-found");
    wrap.classList.add("eCzF3EuiP");
    $(svg).width(19).height(19);
    $(svg).attr("viewBox", this.viewBox);
    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "svg/notesmanager.svgall.svg#fnote");
    svg.appendChild(use);
    li.append(wrap, svg);
    $(".view-note-list li").addClass("hidden");
    $(".view-note-list").append(li);
  }
};

noteListManipulation.prototype.init.prototype=noteListManipulation.prototype;


/*
----------------------------------------------------------------------------*/
function tabManipulation(isEvent) {
  return new tabManipulation.prototype.init(isEvent);
}

tabManipulation.prototype = {
  constructor: tabManipulation,
  init: function(isEvent) {
    this.isEvent=isEvent;
  },
  renderTab: function(title, autosave, key, attachments) {
    var rootxlink = "svg/notesmanager.svgall.svg", cloneUse, cloneSvg,
      tabItems = $(".scrollable-active-tab-bar").children(),
      list = document.createElement("li"),
      viewWrap = document.createElement("div"),
      textWrap = viewWrap.cloneNode(),
      iconAwrap = viewWrap.cloneNode(),
      iconBwrap = viewWrap.cloneNode(),
      pinwrap = document.createElement("div"),
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
      use = document.createElementNS("http://www.w3.org/2000/svg", "use");

    $(list).attr("data-autosave", !!autosave);
    viewWrap.classList.add("view-list");
    iconAwrap.classList.add("icon-note");
    $(iconBwrap).addClass("fnoDqvqOH tab-close").attr("data-content", "●");
    textWrap.innerHTML='<span class="title-list">'+ title + '</span>';
    $(textWrap).addClass("note-title");

    $(pinwrap).addClass("fnoDqvqOH pin");

    cloneUse = use.cloneNode();
    cloneSvg = svg.cloneNode();
    $(cloneSvg).attr("viewBox", "0 0 256 256").width(14).height(14);
    cloneUse.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", rootxlink.concat("#pin"));

    cloneSvg.appendChild(cloneUse);
    pinwrap.appendChild(cloneSvg);

    cloneUse = use.cloneNode();
    cloneSvg = svg.cloneNode();

    $(svg).attr("viewBox", "0 0 24 24").width(14).height(14);
    $(cloneSvg).attr("viewBox", "0 0 16 16").width(16).height(16);
    
    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", rootxlink.concat("#fnote"));
    cloneUse.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", rootxlink.concat("#iconx"));
    svg.appendChild(use);
    cloneSvg.appendChild(cloneUse);
    iconAwrap.appendChild(svg);
    iconBwrap.appendChild(cloneSvg);
    viewWrap.append(iconAwrap, textWrap, iconBwrap, pinwrap);
    list.appendChild(viewWrap);
    list[key]=attachments;
    attachments.pinned && list.classList.add("pinned");
    this.isEvent && tabItems.filter(".active").length ?
      tabItems.filter(".active").after(list) : $(".scrollable-active-tab-bar").append(list);
  }
};

tabManipulation.prototype.init.prototype=tabManipulation.prototype;

/*
----------------------------------------------------------------------------*/
function renderSettingsList(parent, listsource) {
  var list, listItems = [];
  listsource.sort();
  $(listsource).each(function(_i, data) {
    list = document.createElement("li");
    list.textContent=data;
    list.ariaLabel=data;
    list.dataset["value"]=data.toLowerCase();
    listItems.push(list);
  });
  $(parent).append(listItems);
}

/*
----------------------------------------------------------------------------*/
function renderSettingsComponents(parent, UISource) {
  return new renderSettingsComponents.prototype.init(parent, UISource);
}

renderSettingsComponents.prototype = {
  constructor: renderSettingsComponents,
  renderize: function(parent, UISource) {
    var data, stack = this;
    $(UISource).each(function(_i, source) {
      data = stack.renderList(
        source.title,
        source.bound,
        source.description,
        source.switches,
        source.listsource
      );
      stack.renderMultiList(
        source.title, source.options, source.selected, data.section
      );
      
      data.list.dataset["attached"]=source.title.toLowerCase();
      source.active && $(data.list).addClass("active");
      data.list.classList.add(source.title.replace(/\s+/g, "-").toLowerCase());
      $(parent).append(data.list);
    });
  },
  init: function(parent, UISource) {
    this.renderize(parent, UISource);
  },
  renderList: function(title, bound, subtitle, switches, listsource) {
    const icoHref = "svg/notesmanager.svgall.svg#settings_props";
    const underList = document.createElement("ul");
    const propWrap = document.createElement("div");
    const wrap = document.createElement("div");
    const list = document.createElement("li");
    const propSec = document.createElement("div");
    const wrapLabel = propSec.cloneNode();
    const titleWrap = document.createElement("span");
    const subtitleWrap = titleWrap.cloneNode();
    const subWrap = document.createElement("div");
    const checkbox = document.createElement("input");
    const boxwrap = document.createElement("div");
    const label = document.createElement("label");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");

    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", icoHref);

    $(listsource).each(function(_i, source) {
      const li = document.createElement("li");
      li.textContent=source;
      underList.appendChild(li);
    });

    label.setAttribute("for", switches);
    checkbox.id=switches;
    $(polyline).attr("points", "20 6 9 17 4 12");

    checkbox.classList.add("ui-checkbox");
    checkbox.type="checkbox";
    boxwrap.classList.add("checkbox");
    checkbox.ariaHidden=checkbox.hidden=true;

    propSec.classList.add("props-section");
    propWrap.classList.add("props-wrap");

    $(wrapLabel).addClass("settings-label mrg-collapse");

    subtitleWrap.textContent=subtitle;
    titleWrap.textContent="Settings: " + title;

    wrapLabel.appendChild(titleWrap);
    subWrap.classList.add("mrg-collapse");

    wrap.classList.add("settings-icon");
    $(svg).width(16).height(16).attr("viewBox", "0 0 24 24").attr("fill", "none")
      .attr("stroke", "currentColor").addClass("expect-path");

    const cloneSvg = svg.cloneNode();
    cloneSvg.appendChild(polyline);
    boxwrap.appendChild(cloneSvg);
    label.appendChild(boxwrap);

    switches && subWrap.appendChild(checkbox);
    switches && subWrap.appendChild(label);
    subWrap.appendChild(subtitleWrap);
    listsource && subWrap.appendChild(underList);

    svg.appendChild(use);
    propSec.append(wrapLabel, subWrap);
    wrap.appendChild(svg);
    propWrap.appendChild(propSec);
    bound && propSec.classList.add("prop-main");
    list.append(wrap, propWrap);
    return {list: list, section: propSec};
  },
  renderMultiList: function(value, listsource, selected, parent) {
    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    const multiWrap = document.createElement("div");
    const underList = document.createElement("ul");
    const input = document.createElement("input");
    const dialog = document.createElement("div");
    const iconwrap = document.createElement("div");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    multiWrap.classList.add("mrg-collapse");
    input.classList.add("ui-field");
    input.type="text";
    input.value=selected||(listsource && listsource[0]);
    input.ariaHidden=true;
    input.id=value.replace(/\s+/g, "_");
    listsource && (input.readOnly=true);
    !listsource && (input.style.cursor="initial");
    
    svg.classList.add("expect-path");
    $(svg).width(20).height(20).attr("viewBox", "0 0 24 24");
    $(polyline).attr("points", "9 18 15 12 9 6");

    dialog.classList.add("multi-options");
    dialog.dataset["jspid"]=$.expando;
    dialog.role="dialog";
    dialog.ariaHidden=true;
    dialog.dataset["ui"]="dialog";
    dialog.dataset["build"]="js";
    iconwrap.classList.add("switches");
    svg.appendChild(polyline);
    iconwrap.appendChild(svg);

    $(listsource).each(function(_i, source) {
      const list = document.createElement("li");
      list.textContent=source;
      list.ariaLabel=source;
      list.dataset["value"]=source;
      list.dataset["index"]=_i;
      list.classList.add("Eo7E6F84I");
      underList.appendChild(list);
    });

    dialog.appendChild(underList);
    listsource && multiWrap.appendChild(iconwrap);
    (listsource || selected) && multiWrap.appendChild(input);
    listsource && multiWrap.appendChild(dialog);
    parent && parent.appendChild(multiWrap);
  }
};

renderSettingsComponents.prototype.init.prototype=renderSettingsComponents.prototype;

/*
----------------------------------------------------------------------------*/
function layoutCustomizer(UISource) {
  return new layoutCustomizer.prototype.init(UISource);
}

layoutCustomizer.prototype={
  constructor: layoutCustomizer,
  init: function(UISource) {
    var ul = document.createElement("ul"), list, self=this;
    $.each(UISource, function(_i, source) {
      list = document.createElement("li");
      $(list).addClass("list-" + source.class);
      source.selected && (list.classList.add("selected"));
      self.renderLayoutIcon(source.class, list);
      self.renderList(list, source.text);
      ul.appendChild(list);
    });

    $(".secondry-prompt .ul-xender").append(ul);
  },
  renderLayoutIcon: function(layoutType, parent) {
    var wrap = document.createElement("div"),
      icon = wrap.cloneNode();

    $(icon).addClass("icon-" + layoutType + " fr-icon");
    wrap.classList.add("icon-wrap");
    wrap.appendChild(icon);
    parent.appendChild(wrap);
  },
  renderVisibilityIcon: function(parent) {

  },
  renderList: function(parent, text) {
    var wrap = document.createElement("div"),
      inner = wrap.cloneNode();

    $(wrap).addClass("item-left Eo7E6F84I");
    $(inner).addClass("textwrap Eo7E6F84I");
    inner.textContent=text;
    wrap.appendChild(inner);
    parent.appendChild(wrap);
  }
};

layoutCustomizer.prototype.init.prototype=layoutCustomizer.prototype;