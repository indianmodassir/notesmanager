dialogUI.render({class: "status-bar-dialog x-ui-dialog"}, [
  {class: "show-hide-status-bar", override: true, checkbox: true, text: "Hide Status Bar"},
  {checkbox: true, text: "Remote Notes Sender"},
  {checkbox: true, text: "Auto save Status"},
  {checkbox: true, text: "Hide Network Status"},
  {checkbox: true, text: "Editor Links Counter"},
  {checkbox: true, text: "Editor Title Activation"},
  {checkbox: true, text: "Fullscreen Switcher"},
  {checkbox: true, text: "Editor Write mode Status"},
  {checkbox: true, text: "Editor Selection (Lines, Columns)"},
  {checkbox: true, text: "Editor Spaces Counter"},
  {checkbox: true, text: "Editor Tab Size"},
  {checkbox: true, text: "Editor Characters Counter"},
  {checkbox: true, text: "Editor Encoding"},
  {checkbox: true, text: "Editor End of Line"},
  {checkbox: true, text: "Notification"}
]);

dialogUI.render({class: "activity-dialog x-ui-dialog"}, [
  {checkbox: true, text: "Toggle Explorer", shortcut: "Ctrl+Shift+E"},
  {checkbox: true, text: "Github"},
  {checkbox: true, text: "Color Theme"},
  {checkbox: true, text: "Search", shortcut: "Ctrl+Shift+F"},
  {override: true, checkbox: true, text: "Accounts"},
  {checkbox: true, text: "Hide Activity Bar"},
  {checkbox: true, text: "Untitled Note Creator"}
]);

dialogUI.render({class: "primary-dialog x-ui-dialog"}, [
  {text: "New Note...", shortcut: "Ctrl+Shift+F", class: "add-new-note"},
  {text: "New Untitled Note...", shortcut: "Ctrl+Shift+F", class: "add-untitle-note"},
  {text: "Hide Note", disabled: true, class: "list-axios"},
  {text: "Encrypt Note", disabled: true, class: "list-axios"},
  {override: true, text: "Search Notes...", shortcut: "Ctrl+Shift+F", class: "search-note-list"},
  {override: true, text: "Rename...", shortcut: "Ctrl+Shift+F", disabled: true, class: "list-axios rename-note"},
  {collapse: true, text: "Delete", disabled: true, class: "list-axios delete-note"},
  {override: true, text: "Download", disabled: true, class: "list-axios download"},
  {collapse: true, text: "Reset", disabled: true, class: "list-axios reset"},
  {text: "Pin/Unpin Note (Bookmarks notes...)", disabled: true, class: "list-axios pin-unpin"},
  {text: "Delete All Notes (with hidden and encrypted notes...)", class: "delete-all-notes"}
]);

dialogUI.render({class: "mirror-dialog x-ui-dialog"}, [
  {override: true, text: "Close tab", disabled: true, shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Underline", disabled: true, shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Bold", disabled: true, shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Italic", disabled: true, shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Strike", disabled: true, shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Cut", disabled: true, shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Copy", disabled: true, shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Paste", disabled: true, shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Delete", disabled: true, shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Select All", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Right-to-left reading order", disabled: true, shortcut: "Ctrl+Shift+F"},
  {text: "Compress this document", disabled: true, shortcut: "Ctrl+Shift+F"}
]);

dialogUI.render({class: "file-dialog x-ui-dialog mb-toggle"}, [
  {text: "New Empty Notes", shortcut: "Ctrl+Shift+F"},
  {text: "New Notes...", shortcut: "Ctrl+Shift+F"},
  {text: "New Window", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "New Notes...", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Open Notes...", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Open Hidden Notes...", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Open Locked Notes...", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Save", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Save As...", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Share Notes", moreopt: true, shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Auto Save", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Preferences", moreopt: true, shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Revert Notes", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Close Notes", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Print", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Download", shortcut: "Ctrl+Shift+F"},
  {text: "Close all Tabs", shortcut: "Ctrl+Shift+F"}
]);

dialogUI.render({class: "edit-dialog x-ui-dialog mb-toggle"}, [
  {text: "Cut", shortcut: "Ctrl+Shift+F"},
  {text: "Copy", shortcut: "Ctrl+Shift+F"},
  {text: "Paste", shortcut: "Ctrl+Shift+F"},
  {text: "Delete", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Find", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Find Next", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Replace", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Find Previous", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Find Notes", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Goto", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Insert Time/Date", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Font", shortcut: "Ctrl+Shift+F"},
  {text: "Clear/Reset Notes", shortcut: "Ctrl+Shift+F"}
]);

dialogUI.render({class: "selection-dialog x-ui-dialog mb-toggle"}, [
  {override:true, text: "Select All", shortcut: "Ctrl+Shift+F"},
  {text: "Copy Line Up", shortcut: "Ctrl+Shift+F"},
  {text: "Copy Line Down", shortcut: "Ctrl+Shift+F"},
  {text: "Move Line Up", shortcut: "Ctrl+Shift+F"},
  {text: "Move Line Down", shortcut: "Ctrl+Shift+F"},
  {text: "Goto Line Up", shortcut: "Ctrl+Shift+F"},
  {text: "Goto Line Down", shortcut: "Ctrl+Shift+F"}
]);

dialogUI.render({class: "view-dialog x-ui-dialog mb-toggle"}, [
  {text: "Command Palette...", shortcut: "Ctrl+Shift+F"},
  {text: "Open View...", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Appearance", moreopt: true, shortcut: "Ctrl+Shift+F"},
  {text: "Search", shortcut: "Ctrl+Shift+F"},
  {text: "Terminal", shortcut: "Ctrl+Shift+F"},
  {text: "Show all Hidden Notes", shortcut: "Ctrl+Shift+F"},
  {text: "Show Line Counters", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Word Wrap", shortcut: "Ctrl+Shift+F"},
  {text: "Settings", shortcut: "Ctrl+Shift+F"}
]);

dialogUI.render({class: "help-dialog x-ui-dialog mb-toggle"}, [
  {text: "Command Help", shortcut: "Ctrl+Shift+F"},
  {text: "Welcome", shortcut: "Ctrl+Shift+F"},
  {text: "Show All Commands", shortcut: "Ctrl+Shift+F"},
  {text: "Documentation", shortcut: "Ctrl+Shift+F"},
  {text: "Show Release Notes", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Keyboard Shortcuts Reference", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Keyboard Shortcuts Help", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Show All Keyboard Shortcuts", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Video Tutorials", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Tips and Tricks", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Contact Us", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Join Us on YouTube", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Report Issue", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Join US on Github", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "View License", shortcut: "Ctrl+Shift+F"},
  {collapse: true, text: "Privacy Statement", shortcut: "Ctrl+Shift+F"},
  {override: true, text: "Check for Updates...", shortcut: "Ctrl+Shift+F"},
  {text: "About", shortcut: "Ctrl+Shift+F"}
]);

dialogUI.render({class: "x-ui-dialog tabcontext"}, [
  {text: "Close", shortcut: "Ctrl+Shift+F"},
  {text: "Close Others"},
  {text: "Close to the Right"},
  {text: "Close All", shortcut: "Ctrl+Shift+F"},
  {text: "Pin", shortcut: "Ctrl+Shift+F", override: true},
  {text: "Delete this Tab Bar Note"}
]);

dialogUI.render({class: "x-ui-dialog tabmenucontext"}, [
  {text: "New Note...", shortcut: "Ctrl+Shift+F"},
  {text: "Multiple Tabs"},
  {text: "Single Tab"},
  {text: "Hide Tab Bar"},
  {text: "Delete All Notes (With hidden & encrypted)"}
]);

dialogUI.render({class: "psmore-action"}, [
  {text: "Sort by Name"},
  {text: "Open Notes"},
  {text: "Note Tree"},
  {text: "Sort by Update"}
]);

dialogUI.render({class: "ssmore-action"}, [
  {text: "Search with UID"},
  {text: "Search with Name"}
]);

dialogUI.render({class: "x-ui-dialog menubarcontext"}, [
  {text: "Menu Bar"},
  {text: "Sender Note Center"},
  {text: "Layout Controls"}
]);

dialogUI.render({class: "settings-context"}, [
  {text: "Command Palette...", shortcut: "Ctrl+Shift+P", override: true},
  {text: "Settings", shortcut: "Ctrl+Shift+P"},
  {text: "Keyboards Shortcuts", shortcut: "Ctrl+Shift+P"},
  {text: "Themes", shortcut: "Ctrl+Shift+P"},
  {text: "Show All Commands", shortcut: "Ctrl+Shift+P", override: true},
  {text: "Check for Updates..."}
]);

renderSettingsList($(".settings-list"), [
  "Auto Save Delay",
  "Auto Save",
  "Font Size",
  "Font Family",
  "Font Style",
  "Autosuggest",
  "Autocomplete",
  "Show Hidden Notes",
  "Show App Welcome",
  "Magic Code",
  "Auto Detect Color Scheme",
  "Preferred Light Color Theme",
  "Preferred Dark Color Theme",
  "Color Theme",
  "Hide Minimap",
  "Hide Layout Controller",
  "Hide Left Side Bar",
  "Hide Right Side Bar",
  "Hide Terminal",
  "Hide Tabs",
  "Hide Status Bar",
  "Hide Line Numbers",
  "Hide Activity Bar",
  "Full Screen",
  "Encoding",
  "Show Toolbar",
  "Minimap",
  "Word Separators",
  "Word Break",
  "Vertical Scrollbar Size",
  "Vertical Scrollbar",
  "Horizontal Scrollbar Size",
  "Horizontal Scrollbar",
  "Padding Top",
  "Padding Bottom",
  "Mouse Wheel Zoom",
  "Mouse Wheel Scroll Sensivity",
  "Links",
  "Line Numbers",
  "Line Height",
  "Latter Spacing",
  "Scroll Sensivity",
  "Word Wrap",
  "Insert Spaces",
  "Tab Size",
  "Font Weight"
]);

renderSettingsComponents($(".settings"), [
  {
    title: "Auto Save",
    description: "Controls auto save of editors that have unsaved changes.",
    bound: true,
    active: true,
    options: [
      "off",
      "onFocusChange",
      "onWindowChange"
    ]
  },
  {
    title: "Font Size",
    description: "Controls the font size in pixels.",
    bound: true,
    selected: 11
  },
  {
    title: "Font Family",
    description: "Controls the font family.",
    selected: "Consolas, 'Courier New', monospace"
  },
  {
    title: "Tab Size",
    description: "The number of spaces a tab is equal to. This setting is overridden based on the notes contents when Editor: Detect Indentation is on.",
    bound: true,
    selected: 2,
    modified: true
  },
  {
    title: "Insert Spaces",
    description: "Insert spaces when pressing Tab. This setting is overridden based on the file contents when Editor: Detect Indentation is on.",
    bound: true,
    modified: true,
    switches: "insert_spaces"
  },
  {
    title: "Word Wrap",
    description: "Controls how lines should wrap.",
    bound: true,
    modified: true,
    options: ["on", "off"]
  },
]);