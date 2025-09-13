html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    font-family: sans-serif
}

body {
    margin: 0
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
    display: block
}

audio,canvas,progress,video {
    vertical-align: baseline;
    display: inline-block
}

audio:not([controls]) {
    height: 0;
    display: none
}

[hidden],template {
    display: none
}

a {
    background-color: #0000
}

a:active,a:hover {
    outline: 0
}

abbr[title] {
    border-bottom: 1px dotted
}

b,strong {
    font-weight: 700
}

dfn {
    font-style: italic
}

h1 {
    margin: .67em 0;
    font-size: 2em
}

mark {
    color: #000;
    background: #ff0
}

small {
    font-size: 80%
}

sub,sup {
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
    position: relative
}

sup {
    top: -.5em
}

sub {
    bottom: -.25em
}

img {
    border: 0
}

svg:not(:root) {
    overflow: hidden
}

hr {
    box-sizing: content-box;
    height: 0
}

pre {
    overflow: auto
}

code,kbd,pre,samp {
    font-family: monospace;
    font-size: 1em
}

button,input,optgroup,select,textarea {
    color: inherit;
    font: inherit;
    margin: 0
}

button {
    overflow: visible
}

button,select {
    text-transform: none
}

button,html input[type=button],input[type=reset] {
    -webkit-appearance: button;
    cursor: pointer
}

button[disabled],html input[disabled] {
    cursor: default
}

button::-moz-focus-inner,input::-moz-focus-inner {
    border: 0;
    padding: 0
}

input {
    line-height: normal
}

input[type=checkbox],input[type=radio] {
    box-sizing: border-box;
    padding: 0
}

input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
    height: auto
}

input[type=search] {
    -webkit-appearance: none
}

input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

legend {
    border: 0;
    padding: 0
}

textarea {
    overflow: auto
}

optgroup {
    font-weight: 700
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

td,th {
    padding: 0
}

@font-face {
    font-family: webflow-icons;
    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)format("truetype");
    font-weight: 400;
    font-style: normal
}

[class^=w-icon-],[class*=\ w-icon-] {
    speak: none;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    font-family: webflow-icons!important
}

.w-icon-slider-right:before {
    content: "î˜€"
}

.w-icon-slider-left:before {
    content: "î˜"
}

.w-icon-nav-menu:before {
    content: "î˜‚"
}

.w-icon-arrow-down:before,.w-icon-dropdown-toggle:before {
    content: "î˜ƒ"
}

.w-icon-file-upload-remove:before {
    content: "î¤€"
}

.w-icon-file-upload-icon:before {
    content: "î¤ƒ"
}

* {
    box-sizing: border-box
}

html {
    height: 100%
}

body {
    color: #333;
    background-color: #fff;
    min-height: 100%;
    margin: 0;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px
}

img {
    vertical-align: middle;
    max-width: 100%;
    display: inline-block
}

html.w-mod-touch * {
    background-attachment: scroll!important
}

.w-block {
    display: block
}

.w-inline-block {
    max-width: 100%;
    display: inline-block
}

.w-clearfix:before,.w-clearfix:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-clearfix:after {
    clear: both
}

.w-hidden {
    display: none
}

.w-button {
    color: #fff;
    line-height: inherit;
    cursor: pointer;
    background-color: #3898ec;
    border: 0;
    border-radius: 0;
    padding: 9px 15px;
    text-decoration: none;
    display: inline-block
}

input.w-button {
    -webkit-appearance: button
}

html[data-w-dynpage] [data-w-cloak] {
    color: #0000!important
}

.w-code-block {
    margin: unset
}

pre.w-code-block code {
    all: inherit
}

.w-optimization {
    display: contents
}

.w-webflow-badge,.w-webflow-badge>img {
    box-sizing: unset;
    width: unset;
    height: unset;
    max-height: unset;
    max-width: unset;
    min-height: unset;
    min-width: unset;
    margin: unset;
    padding: unset;
    float: unset;
    clear: unset;
    border: unset;
    border-radius: unset;
    background: unset;
    background-image: unset;
    background-position: unset;
    background-size: unset;
    background-repeat: unset;
    background-origin: unset;
    background-clip: unset;
    background-attachment: unset;
    background-color: unset;
    box-shadow: unset;
    transform: unset;
    direction: unset;
    font-family: unset;
    font-weight: unset;
    color: unset;
    font-size: unset;
    line-height: unset;
    font-style: unset;
    font-variant: unset;
    text-align: unset;
    letter-spacing: unset;
    -webkit-text-decoration: unset;
    text-decoration: unset;
    text-indent: unset;
    text-transform: unset;
    list-style-type: unset;
    text-shadow: unset;
    vertical-align: unset;
    cursor: unset;
    white-space: unset;
    word-break: unset;
    word-spacing: unset;
    word-wrap: unset;
    transition: unset
}

.w-webflow-badge {
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 0 0 0 1px #0000001a,0 1px 3px #0000001a;
    visibility: visible!important;
    opacity: 1!important;
    z-index: 2147483647!important;
    color: #aaadb0!important;
    overflow: unset!important;
    background-color: #fff!important;
    border-radius: 3px!important;
    width: auto!important;
    height: auto!important;
    margin: 0!important;
    padding: 6px!important;
    font-size: 12px!important;
    line-height: 14px!important;
    text-decoration: none!important;
    display: inline-block!important;
    position: fixed!important;
    inset: auto 12px 12px auto!important;
    transform: none!important
}

.w-webflow-badge>img {
    position: unset;
    visibility: unset!important;
    opacity: 1!important;
    vertical-align: middle!important;
    display: inline-block!important
}

h1,h2,h3,h4,h5,h6 {
    margin-bottom: 10px;
    font-weight: 700
}

h1 {
    margin-top: 20px;
    font-size: 38px;
    line-height: 44px
}

h2 {
    margin-top: 20px;
    font-size: 32px;
    line-height: 36px
}

h3 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px
}

h4 {
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px
}

h5 {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px
}

h6 {
    margin-top: 10px;
    font-size: 12px;
    line-height: 18px
}

p {
    margin-top: 0;
    margin-bottom: 10px
}

blockquote {
    border-left: 5px solid #e2e2e2;
    margin: 0 0 10px;
    padding: 10px 20px;
    font-size: 18px;
    line-height: 22px
}

figure {
    margin: 0 0 10px
}

figcaption {
    text-align: center;
    margin-top: 5px
}

ul,ol {
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 40px
}

.w-list-unstyled {
    padding-left: 0;
    list-style: none
}

.w-embed:before,.w-embed:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-embed:after {
    clear: both
}

.w-video {
    width: 100%;
    padding: 0;
    position: relative
}

.w-video iframe,.w-video object,.w-video embed {
    border: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0
}

fieldset {
    border: 0;
    margin: 0;
    padding: 0
}

button,[type=button],[type=reset] {
    cursor: pointer;
    -webkit-appearance: button;
    border: 0
}

.w-form {
    margin: 0 0 15px
}

.w-form-done {
    text-align: center;
    background-color: #ddd;
    padding: 20px;
    display: none
}

.w-form-fail {
    background-color: #ffdede;
    margin-top: 10px;
    padding: 10px;
    display: none
}

label {
    margin-bottom: 5px;
    font-weight: 700;
    display: block
}

.w-input,.w-select {
    color: #333;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 100%;
    height: 38px;
    margin-bottom: 10px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.42857;
    display: block
}

.w-input::placeholder,.w-select::placeholder {
    color: #999
}

.w-input:focus,.w-select:focus {
    border-color: #3898ec;
    outline: 0
}

.w-input[disabled],.w-select[disabled],.w-input[readonly],.w-select[readonly],fieldset[disabled] .w-input,fieldset[disabled] .w-select {
    cursor: not-allowed
}

.w-input[disabled]:not(.w-input-disabled),.w-select[disabled]:not(.w-input-disabled),.w-input[readonly],.w-select[readonly],fieldset[disabled]:not(.w-input-disabled) .w-input,fieldset[disabled]:not(.w-input-disabled) .w-select {
    background-color: #eee
}

textarea.w-input,textarea.w-select {
    height: auto
}

.w-select {
    background-color: #f3f3f3
}

.w-select[multiple] {
    height: auto
}

.w-form-label {
    cursor: pointer;
    margin-bottom: 0;
    font-weight: 400;
    display: inline-block
}

.w-radio {
    margin-bottom: 5px;
    padding-left: 20px;
    display: block
}

.w-radio:before,.w-radio:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-radio:after {
    clear: both
}

.w-radio-input {
    float: left;
    margin: 3px 0 0 -20px;
    line-height: normal
}

.w-file-upload {
    margin-bottom: 10px;
    display: block
}

.w-file-upload-input {
    opacity: 0;
    z-index: -100;
    width: .1px;
    height: .1px;
    position: absolute;
    overflow: hidden
}

.w-file-upload-default,.w-file-upload-uploading,.w-file-upload-success {
    color: #333;
    display: inline-block
}

.w-file-upload-error {
    margin-top: 10px;
    display: block
}

.w-file-upload-default.w-hidden,.w-file-upload-uploading.w-hidden,.w-file-upload-error.w-hidden,.w-file-upload-success.w-hidden {
    display: none
}

.w-file-upload-uploading-btn {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 400;
    display: flex
}

.w-file-upload-file {
    background-color: #fafafa;
    border: 1px solid #ccc;
    flex-grow: 1;
    justify-content: space-between;
    margin: 0;
    padding: 8px 9px 8px 11px;
    display: flex
}

.w-file-upload-file-name {
    font-size: 14px;
    font-weight: 400;
    display: block
}

.w-file-remove-link {
    cursor: pointer;
    width: auto;
    height: auto;
    margin-top: 3px;
    margin-left: 10px;
    padding: 3px;
    display: block
}

.w-icon-file-upload-remove {
    margin: auto;
    font-size: 10px
}

.w-file-upload-error-msg {
    color: #ea384c;
    padding: 2px 0;
    display: inline-block
}

.w-file-upload-info {
    padding: 0 12px;
    line-height: 38px;
    display: inline-block
}

.w-file-upload-label {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: 400;
    display: inline-block
}

.w-icon-file-upload-icon,.w-icon-file-upload-uploading {
    width: 20px;
    margin-right: 8px;
    display: inline-block
}

.w-icon-file-upload-uploading {
    height: 20px
}

.w-container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto
}

.w-container:before,.w-container:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-container:after {
    clear: both
}

.w-container .w-row {
    margin-left: -10px;
    margin-right: -10px
}

.w-row:before,.w-row:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-row:after {
    clear: both
}

.w-row .w-row {
    margin-left: 0;
    margin-right: 0
}

.w-col {
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative
}

.w-col .w-col {
    padding-left: 0;
    padding-right: 0
}

.w-col-1 {
    width: 8.33333%
}

.w-col-2 {
    width: 16.6667%
}

.w-col-3 {
    width: 25%
}

.w-col-4 {
    width: 33.3333%
}

.w-col-5 {
    width: 41.6667%
}

.w-col-6 {
    width: 50%
}

.w-col-7 {
    width: 58.3333%
}

.w-col-8 {
    width: 66.6667%
}

.w-col-9 {
    width: 75%
}

.w-col-10 {
    width: 83.3333%
}

.w-col-11 {
    width: 91.6667%
}

.w-col-12 {
    width: 100%
}

.w-hidden-main {
    display: none!important
}

@media screen and (max-width: 991px) {
    .w-container {
        max-width:728px
    }

    .w-hidden-main {
        display: inherit!important
    }

    .w-hidden-medium {
        display: none!important
    }

    .w-col-medium-1 {
        width: 8.33333%
    }

    .w-col-medium-2 {
        width: 16.6667%
    }

    .w-col-medium-3 {
        width: 25%
    }

    .w-col-medium-4 {
        width: 33.3333%
    }

    .w-col-medium-5 {
        width: 41.6667%
    }

    .w-col-medium-6 {
        width: 50%
    }

    .w-col-medium-7 {
        width: 58.3333%
    }

    .w-col-medium-8 {
        width: 66.6667%
    }

    .w-col-medium-9 {
        width: 75%
    }

    .w-col-medium-10 {
        width: 83.3333%
    }

    .w-col-medium-11 {
        width: 91.6667%
    }

    .w-col-medium-12 {
        width: 100%
    }

    .w-col-stack {
        width: 100%;
        left: auto;
        right: auto
    }
}

@media screen and (max-width: 767px) {
    .w-hidden-main,.w-hidden-medium {
        display:inherit!important
    }

    .w-hidden-small {
        display: none!important
    }

    .w-row,.w-container .w-row {
        margin-left: 0;
        margin-right: 0
    }

    .w-col {
        width: 100%;
        left: auto;
        right: auto
    }

    .w-col-small-1 {
        width: 8.33333%
    }

    .w-col-small-2 {
        width: 16.6667%
    }

    .w-col-small-3 {
        width: 25%
    }

    .w-col-small-4 {
        width: 33.3333%
    }

    .w-col-small-5 {
        width: 41.6667%
    }

    .w-col-small-6 {
        width: 50%
    }

    .w-col-small-7 {
        width: 58.3333%
    }

    .w-col-small-8 {
        width: 66.6667%
    }

    .w-col-small-9 {
        width: 75%
    }

    .w-col-small-10 {
        width: 83.3333%
    }

    .w-col-small-11 {
        width: 91.6667%
    }

    .w-col-small-12 {
        width: 100%
    }
}

@media screen and (max-width: 479px) {
    .w-container {
        max-width:none
    }

    .w-hidden-main,.w-hidden-medium,.w-hidden-small {
        display: inherit!important
    }

    .w-hidden-tiny {
        display: none!important
    }

    .w-col {
        width: 100%
    }

    .w-col-tiny-1 {
        width: 8.33333%
    }

    .w-col-tiny-2 {
        width: 16.6667%
    }

    .w-col-tiny-3 {
        width: 25%
    }

    .w-col-tiny-4 {
        width: 33.3333%
    }

    .w-col-tiny-5 {
        width: 41.6667%
    }

    .w-col-tiny-6 {
        width: 50%
    }

    .w-col-tiny-7 {
        width: 58.3333%
    }

    .w-col-tiny-8 {
        width: 66.6667%
    }

    .w-col-tiny-9 {
        width: 75%
    }

    .w-col-tiny-10 {
        width: 83.3333%
    }

    .w-col-tiny-11 {
        width: 91.6667%
    }

    .w-col-tiny-12 {
        width: 100%
    }
}

.w-widget {
    position: relative
}

.w-widget-map {
    width: 100%;
    height: 400px
}

.w-widget-map label {
    width: auto;
    display: inline
}

.w-widget-map img {
    max-width: inherit
}

.w-widget-map .gm-style-iw {
    text-align: center
}

.w-widget-map .gm-style-iw>button {
    display: none!important
}

.w-widget-twitter {
    overflow: hidden
}

.w-widget-twitter-count-shim {
    vertical-align: top;
    text-align: center;
    background: #fff;
    border: 1px solid #758696;
    border-radius: 3px;
    width: 28px;
    height: 20px;
    display: inline-block;
    position: relative
}

.w-widget-twitter-count-shim * {
    pointer-events: none;
    -webkit-user-select: none;
    user-select: none
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
    text-align: center;
    color: #999;
    font-family: serif;
    font-size: 15px;
    line-height: 12px;
    position: relative
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
    display: block;
    position: relative
}

.w-widget-twitter-count-shim.w--large {
    width: 36px;
    height: 28px
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 18px
}

.w-widget-twitter-count-shim:not(.w--vertical) {
    margin-left: 5px;
    margin-right: 8px
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
    margin-left: 6px
}

.w-widget-twitter-count-shim:not(.w--vertical):before,.w-widget-twitter-count-shim:not(.w--vertical):after {
    content: " ";
    pointer-events: none;
    border: solid #0000;
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: 0
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
    border-width: 4px;
    border-color: #75869600 #5d6c7b #75869600 #75869600;
    margin-top: -4px;
    margin-left: -9px
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -10px
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
    border-width: 4px;
    border-color: #fff0 #fff #fff0 #fff0;
    margin-top: -4px;
    margin-left: -8px
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -9px
}

.w-widget-twitter-count-shim.w--vertical {
    width: 61px;
    height: 33px;
    margin-bottom: 8px
}

.w-widget-twitter-count-shim.w--vertical:before,.w-widget-twitter-count-shim.w--vertical:after {
    content: " ";
    pointer-events: none;
    border: solid #0000;
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
    left: 50%
}

.w-widget-twitter-count-shim.w--vertical:before {
    border-width: 5px;
    border-color: #5d6c7b #75869600 #75869600;
    margin-left: -5px
}

.w-widget-twitter-count-shim.w--vertical:after {
    border-width: 4px;
    border-color: #fff #fff0 #fff0;
    margin-left: -4px
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 22px
}

.w-widget-twitter-count-shim.w--vertical.w--large {
    width: 76px
}

.w-background-video {
    color: #fff;
    height: 500px;
    position: relative;
    overflow: hidden
}

.w-background-video>video {
    object-fit: cover;
    z-index: -100;
    background-position: 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    inset: -100%
}

.w-background-video>video::-webkit-media-controls-start-playback-button {
    -webkit-appearance: none;
    display: none!important
}

.w-background-video--control {
    background-color: #0000;
    padding: 0;
    position: absolute;
    bottom: 1em;
    right: 1em
}

.w-background-video--control>[hidden] {
    display: none!important
}

.w-slider {
    text-align: center;
    clear: both;
    -webkit-tap-highlight-color: #0000;
    tap-highlight-color: #0000;
    background: #ddd;
    height: 300px;
    position: relative
}

.w-slider-mask {
    z-index: 1;
    white-space: nowrap;
    height: 100%;
    display: block;
    position: relative;
    left: 0;
    right: 0;
    overflow: hidden
}

.w-slide {
    vertical-align: top;
    white-space: normal;
    text-align: left;
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative
}

.w-slider-nav {
    z-index: 2;
    text-align: center;
    -webkit-tap-highlight-color: #0000;
    tap-highlight-color: #0000;
    height: 40px;
    margin: auto;
    padding-top: 10px;
    position: absolute;
    inset: auto 0 0
}

.w-slider-nav.w-round>div {
    border-radius: 100%
}

.w-slider-nav.w-num>div {
    font-size: inherit;
    line-height: inherit;
    width: auto;
    height: auto;
    padding: .2em .5em
}

.w-slider-nav.w-shadow>div {
    box-shadow: 0 0 3px #3336
}

.w-slider-nav-invert {
    color: #fff
}

.w-slider-nav-invert>div {
    background-color: #2226
}

.w-slider-nav-invert>div.w-active {
    background-color: #222
}

.w-slider-dot {
    cursor: pointer;
    background-color: #fff6;
    width: 1em;
    height: 1em;
    margin: 0 3px .5em;
    transition: background-color .1s,color .1s;
    display: inline-block;
    position: relative
}

.w-slider-dot.w-active {
    background-color: #fff
}

.w-slider-dot:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff
}

.w-slider-dot:focus.w-active {
    box-shadow: none
}

.w-slider-arrow-left,.w-slider-arrow-right {
    cursor: pointer;
    color: #fff;
    -webkit-tap-highlight-color: #0000;
    tap-highlight-color: #0000;
    -webkit-user-select: none;
    user-select: none;
    width: 80px;
    margin: auto;
    font-size: 40px;
    position: absolute;
    inset: 0;
    overflow: hidden
}

.w-slider-arrow-left [class^=w-icon-],.w-slider-arrow-right [class^=w-icon-],.w-slider-arrow-left [class*=\ w-icon-],.w-slider-arrow-right [class*=\ w-icon-] {
    position: absolute
}

.w-slider-arrow-left:focus,.w-slider-arrow-right:focus {
    outline: 0
}

.w-slider-arrow-left {
    z-index: 3;
    right: auto
}

.w-slider-arrow-right {
    z-index: 4;
    left: auto
}

.w-icon-slider-left,.w-icon-slider-right {
    width: 1em;
    height: 1em;
    margin: auto;
    inset: 0
}

.w-slider-aria-label {
    clip: rect(0 0 0 0);
    border: 0;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden
}

.w-slider-force-show {
    display: block!important
}

.w-dropdown {
    text-align: left;
    z-index: 900;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    position: relative
}

.w-dropdown-btn,.w-dropdown-toggle,.w-dropdown-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    position: relative
}

.w-dropdown-toggle {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    padding-right: 40px;
    display: inline-block
}

.w-dropdown-toggle:focus {
    outline: 0
}

.w-icon-dropdown-toggle {
    width: 1em;
    height: 1em;
    margin: auto 20px auto auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0
}

.w-dropdown-list {
    background: #ddd;
    min-width: 100%;
    display: none;
    position: absolute
}

.w-dropdown-list.w--open {
    display: block
}

.w-dropdown-link {
    color: #222;
    padding: 10px 20px;
    display: block
}

.w-dropdown-link.w--current {
    color: #0082f3
}

.w-dropdown-link:focus {
    outline: 0
}

@media screen and (max-width: 767px) {
    .w-nav-brand {
        padding-left:10px
    }
}

.w-lightbox-backdrop {
    cursor: auto;
    letter-spacing: normal;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    visibility: visible;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    color: #fff;
    text-align: center;
    z-index: 2000;
    opacity: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: #000000e6;
    outline: 0;
    font-family: Helvetica Neue,Helvetica,Ubuntu,Segoe UI,Verdana,sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.2;
    list-style: disc;
    position: fixed;
    inset: 0;
    -webkit-transform: translate(0)
}

.w-lightbox-backdrop,.w-lightbox-container {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    overflow: auto
}

.w-lightbox-content {
    height: 100vh;
    position: relative;
    overflow: hidden
}

.w-lightbox-view {
    opacity: 0;
    width: 100vw;
    height: 100vh;
    position: absolute
}

.w-lightbox-view:before {
    content: "";
    height: 100vh
}

.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before {
    height: 86vh
}

.w-lightbox-frame,.w-lightbox-view:before {
    vertical-align: middle;
    display: inline-block
}

.w-lightbox-figure {
    margin: 0;
    position: relative
}

.w-lightbox-group .w-lightbox-figure {
    cursor: pointer
}

.w-lightbox-img {
    width: auto;
    max-width: none;
    height: auto
}

.w-lightbox-image {
    float: none;
    max-width: 100vw;
    max-height: 100vh;
    display: block
}

.w-lightbox-group .w-lightbox-image {
    max-height: 86vh
}

.w-lightbox-caption {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: #0006;
    padding: .5em 1em;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden
}

.w-lightbox-embed {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0
}

.w-lightbox-control {
    cursor: pointer;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 24px;
    width: 4em;
    transition: all .3s;
    position: absolute;
    top: 0
}

.w-lightbox-left {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==);
    display: none;
    bottom: 0;
    left: 0
}

.w-lightbox-right {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+);
    display: none;
    bottom: 0;
    right: 0
}

.w-lightbox-close {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=);
    background-size: 18px;
    height: 2.6em;
    right: 0
}

.w-lightbox-strip {
    white-space: nowrap;
    padding: 0 1vh;
    line-height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto hidden
}

.w-lightbox-item {
    box-sizing: content-box;
    cursor: pointer;
    width: 10vh;
    padding: 2vh 1vh;
    display: inline-block;
    -webkit-transform: translate(0,0)
}

.w-lightbox-active {
    opacity: .3
}

.w-lightbox-thumbnail {
    background: #222;
    height: 10vh;
    position: relative;
    overflow: hidden
}

.w-lightbox-thumbnail-image {
    position: absolute;
    top: 0;
    left: 0
}

.w-lightbox-thumbnail .w-lightbox-tall {
    width: 100%;
    top: 50%;
    transform: translateY(-50%)
}

.w-lightbox-thumbnail .w-lightbox-wide {
    height: 100%;
    left: 50%;
    transform: translate(-50%)
}

.w-lightbox-spinner {
    box-sizing: border-box;
    border: 5px solid #0006;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-left: -20px;
    animation: .8s linear infinite spin;
    position: absolute;
    top: 50%;
    left: 50%
}

.w-lightbox-spinner:after {
    content: "";
    border: 3px solid #0000;
    border-bottom-color: #fff;
    border-radius: 50%;
    position: absolute;
    inset: -4px
}

.w-lightbox-hide {
    display: none
}

.w-lightbox-noscroll {
    overflow: hidden
}

@media (min-width: 768px) {
    .w-lightbox-content {
        height:96vh;
        margin-top: 2vh
    }

    .w-lightbox-view,.w-lightbox-view:before {
        height: 96vh
    }

    .w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before {
        height: 84vh
    }

    .w-lightbox-image {
        max-width: 96vw;
        max-height: 96vh
    }

    .w-lightbox-group .w-lightbox-image {
        max-width: 82.3vw;
        max-height: 84vh
    }

    .w-lightbox-left,.w-lightbox-right {
        opacity: .5;
        display: block
    }

    .w-lightbox-close {
        opacity: .8
    }

    .w-lightbox-control:hover {
        opacity: 1
    }
}

.w-lightbox-inactive,.w-lightbox-inactive:hover {
    opacity: 0
}

.w-richtext:before,.w-richtext:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-richtext:after {
    clear: both
}

.w-richtext[contenteditable=true]:before,.w-richtext[contenteditable=true]:after {
    white-space: initial
}

.w-richtext ol,.w-richtext ul {
    overflow: hidden
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,.w-richtext .w-richtext-figure-selected[data-rt-type=video] div:after,.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,.w-richtext .w-richtext-figure-selected[data-rt-type=image] div {
    outline: 2px solid #2895f7
}

.w-richtext figure.w-richtext-figure-type-video>div:after,.w-richtext figure[data-rt-type=video]>div:after {
    content: "";
    display: none;
    position: absolute;
    inset: 0
}

.w-richtext figure {
    max-width: 60%;
    position: relative
}

.w-richtext figure>div:before {
    cursor: default!important
}

.w-richtext figure img {
    width: 100%
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
    opacity: .6
}

.w-richtext figure div {
    color: #0000;
    font-size: 0
}

.w-richtext figure.w-richtext-figure-type-image,.w-richtext figure[data-rt-type=image] {
    display: table
}

.w-richtext figure.w-richtext-figure-type-image>div,.w-richtext figure[data-rt-type=image]>div {
    display: inline-block
}

.w-richtext figure.w-richtext-figure-type-image>figcaption,.w-richtext figure[data-rt-type=image]>figcaption {
    caption-side: bottom;
    display: table-caption
}

.w-richtext figure.w-richtext-figure-type-video,.w-richtext figure[data-rt-type=video] {
    width: 60%;
    height: 0
}

.w-richtext figure.w-richtext-figure-type-video iframe,.w-richtext figure[data-rt-type=video] iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0
}

.w-richtext figure.w-richtext-figure-type-video>div,.w-richtext figure[data-rt-type=video]>div {
    width: 100%
}

.w-richtext figure.w-richtext-align-center {
    clear: both;
    margin-left: auto;
    margin-right: auto
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image>div,.w-richtext figure.w-richtext-align-center[data-rt-type=image]>div {
    max-width: 100%
}

.w-richtext figure.w-richtext-align-normal {
    clear: both
}

.w-richtext figure.w-richtext-align-fullwidth {
    text-align: center;
    clear: both;
    width: 100%;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block
}

.w-richtext figure.w-richtext-align-fullwidth>div {
    padding-bottom: inherit;
    display: inline-block
}

.w-richtext figure.w-richtext-align-fullwidth>figcaption {
    display: block
}

.w-richtext figure.w-richtext-align-floatleft {
    float: left;
    clear: none;
    margin-right: 15px
}

.w-richtext figure.w-richtext-align-floatright {
    float: right;
    clear: none;
    margin-left: 15px
}

.w-nav {
    z-index: 1000;
    background: #ddd;
    position: relative
}

.w-nav:before,.w-nav:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-nav:after {
    clear: both
}

.w-nav-brand {
    float: left;
    color: #333;
    text-decoration: none;
    position: relative
}

.w-nav-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    display: inline-block;
    position: relative
}

.w-nav-link.w--current {
    color: #0082f3
}

.w-nav-menu {
    float: right;
    position: relative
}

[data-nav-menu-open] {
    text-align: center;
    background: #c8c8c8;
    min-width: 200px;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: visible;
    display: block!important
}

.w--nav-link-open {
    display: block;
    position: relative
}

.w-nav-overlay {
    width: 100%;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: hidden
}

.w-nav-overlay [data-nav-menu-open] {
    top: 0
}

.w-nav[data-animation=over-left] .w-nav-overlay {
    width: auto
}

.w-nav[data-animation=over-left] .w-nav-overlay,.w-nav[data-animation=over-left] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    right: auto
}

.w-nav[data-animation=over-right] .w-nav-overlay {
    width: auto
}

.w-nav[data-animation=over-right] .w-nav-overlay,.w-nav[data-animation=over-right] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    left: auto
}

.w-nav-button {
    float: right;
    cursor: pointer;
    -webkit-tap-highlight-color: #0000;
    tap-highlight-color: #0000;
    -webkit-user-select: none;
    user-select: none;
    padding: 18px;
    font-size: 24px;
    display: none;
    position: relative
}

.w-nav-button:focus {
    outline: 0
}

.w-nav-button.w--open {
    color: #fff;
    background-color: #c8c8c8
}

.w-nav[data-collapse=all] .w-nav-menu {
    display: none
}

.w-nav[data-collapse=all] .w-nav-button,.w--nav-dropdown-open,.w--nav-dropdown-toggle-open {
    display: block
}

.w--nav-dropdown-list-open {
    position: static
}

@media screen and (max-width: 991px) {
    .w-nav[data-collapse=medium] .w-nav-menu {
        display:none
    }

    .w-nav[data-collapse=medium] .w-nav-button {
        display: block
    }
}

@media screen and (max-width: 767px) {
    .w-nav[data-collapse=small] .w-nav-menu {
        display:none
    }

    .w-nav[data-collapse=small] .w-nav-button {
        display: block
    }

    .w-nav-brand {
        padding-left: 10px
    }
}

@media screen and (max-width: 479px) {
    .w-nav[data-collapse=tiny] .w-nav-menu {
        display:none
    }

    .w-nav[data-collapse=tiny] .w-nav-button {
        display: block
    }
}

.w-tabs {
    position: relative
}

.w-tabs:before,.w-tabs:after {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-tabs:after {
    clear: both
}

.w-tab-menu {
    position: relative
}

.w-tab-link {
    vertical-align: top;
    text-align: left;
    cursor: pointer;
    color: #222;
    background-color: #ddd;
    padding: 9px 30px;
    text-decoration: none;
    display: inline-block;
    position: relative
}

.w-tab-link.w--current {
    background-color: #c8c8c8
}

.w-tab-link:focus {
    outline: 0
}

.w-tab-content {
    display: block;
    position: relative;
    overflow: hidden
}

.w-tab-pane {
    display: none;
    position: relative
}

.w--tab-active {
    display: block
}

@media screen and (max-width: 479px) {
    .w-tab-link {
        display:block
    }
}

.w-ix-emptyfix:after {
    content: ""
}

@keyframes spin {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}

.w-dyn-empty {
    background-color: #ddd;
    padding: 10px
}

.w-dyn-hide,.w-dyn-bind-empty,.w-condition-invisible {
    display: none!important
}

.wf-layout-layout {
    display: grid
}

@font-face {
    font-family: Dmsans;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd822_DMSans-Italic.ttf)format("truetype");
    font-weight: 400;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: Dmsans;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd81b_DMSans-Thin.ttf)format("truetype");
    font-weight: 100;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Dmsans;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd823_DMSans-Regular.ttf)format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Dmsans;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd824_DMSans-Light.ttf)format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Dmsans;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd825_DMSans-Medium.ttf)format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Dmsans;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd827_DMSans-Bold.ttf)format("truetype");
    font-weight: 700;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Dmsans;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd826_DMSans-ExtraLight.ttf)format("truetype");
    font-weight: 200;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Dmsans;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd828_DMSans-SemiBold.ttf)format("truetype");
    font-weight: 600;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Dmsans;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666f7894bb61fd6857a984da_DMSans-ThinItalic.ttf)format("truetype");
    font-weight: 100;
    font-style: italic;
    font-display: swap
}

@font-face {
    font-family: Dmmono;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666f78c2d150b5c5b95f1bad_DMMono-Regular.ttf)format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Dmmono;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666f78c24f48d80e38c992dd_DMMono-Medium.ttf)format("truetype");
    font-weight: 500;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Dmmono;
    src: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666f78c280cb0cb4eb3b1c4c_DMMono-Light.ttf)format("truetype");
    font-weight: 300;
    font-style: normal;
    font-display: swap
}

:root {
    --shadow: #292929;
    --shadow-lite: #3d3d3d;
    --insight: #f0ff45;
    --neutral-11: #3d3d3d;
    --stratus: #9fa8a7;
    --neutral-0: white;
    --nimbus: #f0f0f0;
    --neutral-12: #171717;
    --primary-blue: #4245ff;
    --eggplant-brand: #964f7d;
    --black: black;
    --neutral-10: #858585;
    --neutral-9: #8f8f8f;
    --neutral-6: #e2e2e2;
    --neutral-8: #c7c7c7;
    --neutral-3: #f8f8f8;
    --teal-brand: #2fb2af;
    --eggplant-light: #c095b1;
    --neutral-7: #dbdbdb;
    --neutral-1: #fcfcfc;
    --neutral-5: #e8e8e8;
    --sky: #a8e8f3;
    --grass: #4cec8c;
    --sun: #ff9a74;
    --meadow: #ffcee6;
    --clay-lightest: #f8eae6;
    --neutral-4: #f3f3f3;
    --min-height: 300px;
    --primary-blue-lite: #6690ff;
    --teal-lightest: #d5f0ef;
    --teal-light: #82d1cf;
    --teal-dark: #124342;
    --eggplant-lightest: #eadce5;
    --eggplant-dark: #4b283f;
    --coral-brand: #ed5e4f;
    --coral-lightest: #fedfdc;
    --coral-light: #fb9f95;
    --coral-dark: #7c3027;
    --clay-brand: #c68173;
    --clay-light: #ebc0b5;
    --clay-dark: #6f4b42;
    --peach-brand: #fdcfb6;
    --peach-lightest: #fff5f0;
    --peach-light: #fee2d3;
    --peach-dark: #7f685b;
    --lilac-brand: #c9c7f5;
    --lilac-lightest: #f4f4fd;
    --lilac-light: #dfddf9;
    --lilac-dark: #65647b;
    --chartreuse-brand: #c1a836;
    --dark-blue: #13343d;
    --bright-red: #ed1500;
    --on-hover-aw: #c11303;
    --on-click-aw: #9c0f01
}

.w-layout-grid {
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.w-layout-layout {
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    grid-auto-columns: 1fr;
    justify-content: center;
    padding: 20px
}

.w-layout-cell {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.w-layout-vflex {
    flex-direction: column;
    align-items: flex-start;
    display: flex
}

.w-checkbox {
    margin-bottom: 5px;
    padding-left: 20px;
    display: block
}

.w-checkbox:before {
    content: " ";
    grid-area: 1/1/2/2;
    display: table
}

.w-checkbox:after {
    content: " ";
    clear: both;
    grid-area: 1/1/2/2;
    display: table
}

.w-checkbox-input {
    float: left;
    margin: 4px 0 0 -20px;
    line-height: normal
}

.w-checkbox-input--inputType-custom {
    border: 1px solid #ccc;
    border-radius: 2px;
    width: 12px;
    height: 12px
}

.w-checkbox-input--inputType-custom.w--redirected-checked {
    background-color: #3898ec;
    background-image: url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-color: #3898ec
}

.w-checkbox-input--inputType-custom.w--redirected-focus {
    box-shadow: 0 0 3px 1px #3898ec
}

.w-pagination-wrapper {
    flex-wrap: wrap;
    justify-content: center;
    display: flex
}

.w-pagination-previous {
    color: #333;
    background-color: #fafafa;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 9px 20px;
    font-size: 14px;
    display: block
}

.w-pagination-previous-icon {
    margin-right: 4px
}

.w-pagination-next {
    color: #333;
    background-color: #fafafa;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-left: 10px;
    margin-right: 10px;
    padding: 9px 20px;
    font-size: 14px;
    display: block
}

.w-pagination-next-icon {
    margin-left: 4px
}

.w-layout-blockcontainer {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
    display: block
}

.w-form-formradioinput--inputType-custom {
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 12px;
    height: 12px
}

.w-form-formradioinput--inputType-custom.w--redirected-focus {
    box-shadow: 0 0 3px 1px #3898ec
}

.w-form-formradioinput--inputType-custom.w--redirected-checked {
    border-width: 4px;
    border-color: #3898ec
}

.w-embed-youtubevideo {
    background-image: url(https://d3e54v103j8qbb.cloudfront.net/static/youtube-placeholder.2b05e7d68d.svg);
    background-position: 50%;
    background-size: cover;
    width: 100%;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    position: relative
}

.w-embed-youtubevideo:empty {
    min-height: 75px;
    padding-bottom: 56.25%
}

.w-page-count {
    text-align: center;
    width: 100%;
    margin-top: 20px
}

@media screen and (max-width: 991px) {
    .w-layout-blockcontainer {
        max-width:728px
    }
}

@media screen and (max-width: 767px) {
    .w-layout-blockcontainer {
        max-width:none
    }
}

body {
    color: var(--shadow);
    font-family: Dmsans,sans-serif;
    font-size: 16px;
    line-height: 1.5rem
}

h1 {
    color: var(--shadow);
    letter-spacing: -.05em;
    text-wrap: pretty;
    margin-top: 0;
    margin-bottom: 1rem;
    padding-bottom: 0;
    font-family: Dmsans,sans-serif;
    font-size: 3rem;
    font-weight: 500;
    line-height: 3.3rem
}

h2,h3 {
    letter-spacing: -.05em;
    text-wrap: pretty;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-family: Dmsans,sans-serif;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 2.9rem
}

h4 {
    letter-spacing: -.05em;
    margin-top: 0;
    margin-bottom: .75rem;
    font-family: Dmsans,sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.8rem
}

h5 {
    letter-spacing: -.05em;
    margin-top: 0;
    margin-bottom: .5rem;
    font-family: Dmsans,sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5rem
}

h6 {
    margin-top: 0;
    margin-bottom: .25rem;
    font-family: Dmsans,sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px
}

p {
    text-wrap: pretty;
    margin-bottom: 1rem;
    font-family: Dmsans,sans-serif;
    font-size: 1.125rem;
    line-height: 140%
}

a {
    color: var(--shadow);
    text-decoration: none
}

a:hover {
    color: var(--shadow-lite)
}

ul {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 18px;
    line-height: 120%
}

ol {
    color: var(--shadow);
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 40px;
    font-size: 18px;
    font-weight: 400;
    line-height: 120%
}

li {
    margin-bottom: 1rem;
    font-size: 1.125rem
}

img {
    max-width: 100%;
    display: inline-block
}

strong {
    color: #000;
    font-weight: 700
}

blockquote {
    border-top: 0px none var(--insight);
    border-left: 5px solid var(--insight);
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 0 20px;
    font-family: Dmmono,sans-serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.5rem
}

figure {
    margin-bottom: 10px
}

.paragraph-1 {
    color: var(--neutral-11);
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%
}

.paragraph-1.g-font-weight-black-900 {
    font-family: Dmsans,sans-serif;
    font-weight: 500
}

.paragraph-1.g-mg-bottom-medium {
    text-align: left;
    white-space: normal;
    margin-bottom: 1rem;
    position: static
}

.paragraph-1.g-text-align-center {
    text-align: center;
    margin-bottom: 10px
}

.paragraph-1.g-mg-bottom-large {
    text-align: left;
    font-family: Dmsans,sans-serif
}

.paragraph-1.padding-t-tiny {
    padding-top: 10px;
    padding-bottom: 10px
}

.paragraph-2 {
    color: var(--neutral-11);
    font-family: DM Mono;
    font-size: .875rem;
    line-height: 150%
}

.paragraph-2.g-text-color-neutral-6.g-display-inline {
    font-family: Dmmono,sans-serif
}

.paragraph-2.g-mg-bottom-large {
    white-space: normal
}

.paragraph-2.g-mg-bottom-large._404 {
    font-family: Dmsans,sans-serif;
    text-wrap: pretty!important
}

.container {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: relative
}

.container.background-grid {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd8a9_Grid.webp);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}

.container.product-hero {
    z-index: 2;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    transform-origin: 50% 100%;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.container.align-center {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.container.align-center.margin-top-huge {
    margin-top: 12rem
}

.container.grid-bg.margin-top-medium {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb12_grid-2.webp);
    background-position: 50% 36%
}

.container.flex-container {
    display: flex
}

.container.vertical-flex {
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.container.background-color-gray-dark.margin-bottom-medium-lrg {
    margin-bottom: 5rem
}

.container.margin-bottom-medium-lrg {
    color: var(--stratus)
}

.container.no-padding-mobile.padding-medium.hide-2,.container.no-padding-mobile.padding-large.hide-2 {
    display: none
}

.container.centered {
    text-align: center;
    max-width: 820px
}

.container.persona-overlay {
    margin-top: 15%
}

.container.quote-row {
    background-color: var(--neutral-0)
}

.container.home-product-section {
    padding-left: 0;
    padding-right: 0;
    position: sticky;
    top: 0
}

.container.home-surfaces {
    background-color: var(--shadow);
    color: var(--nimbus);
    padding-top: 1rem;
    padding-left: 0;
    padding-right: 0
}

.container.product-hero-copy {
    z-index: 2;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    transform-origin: 50% 100%;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.header-7 {
    color: #353535;
    align-self: flex-start;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 118%
}

.header-2 {
    color: var(--neutral-12);
    font-size: 4rem;
    font-weight: 900;
    line-height: 150%
}

.paragraph-3 {
    color: var(--nimbus);
    font-size: .75rem;
    line-height: 150%
}

.padding-t-tiny {
    padding-top: 4px
}

.button-primary {
    border: 2px solid var(--primary-blue);
    background-color: var(--primary-blue);
    color: var(--neutral-0);
    text-align: center;
    letter-spacing: .1em;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    padding: 12px 16px;
    font-size: .6875rem;
    font-weight: 900;
    line-height: 150%;
    transition: color .2s,background-color .2s,border-color .2s;
    display: block
}

.button-primary:hover {
    background-color: #0004e1;
    border-color: #0000
}

.button-primary:active {
    background-color: #0003a1;
    border-color: #9c0f01
}

.button-primary:focus-visible,.button-primary[data-wf-focus-visible] {
    outline-offset: 2px;
    outline: 2px solid #4245ff
}

.button-primary.cc-hero-button {
    font-style: normal
}

.button-primary.cc-hero-button:hover {
    background-color: #0004e1;
    border-color: #0004e1
}

.button-primary.cc-video {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd472_icon-button-play-white.svg);
    background-position: 90%;
    background-repeat: no-repeat;
    background-size: auto;
    padding-right: 40px
}

.button-primary.cc-video.modal-open_btn {
    display: block
}

.button-primary.button-alignment {
    display: inline-block
}

.padding-b-small {
    padding-bottom: 32px
}

.header {
    color: var(--neutral-12);
    -webkit-text-stroke-color: var(--eggplant-brand);
    flex: 1;
    align-self: center;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 135%
}

.header.g-mg-bottom-small {
    flex: 0 auto;
    margin-right: 5px
}

.header.g-mg-bottom-small.g-text-align-center {
    justify-content: center
}

.header.g-text-align-center {
    text-align: center;
    justify-content: center
}

.header.g-display-inline {
    font-style: normal
}

.g-text-align-center {
    text-align: center
}

.padding-b-xxsmall {
    padding-bottom: 8px
}

.rich-text-2 {
    clear: none;
    font-size: 16px;
    text-decoration: none
}

.rich-text-2 h2 {
    color: var(--neutral-12);
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 900;
    line-height: 140%
}

.rich-text-2 p {
    color: var(--neutral-12);
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    line-height: 150%
}

.rich-text-2 h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 140%
}

.rich-text-2 ul {
    color: var(--neutral-12);
    margin-bottom: 2rem;
    font-size: 1.125rem;
    list-style-type: disc
}

.rich-text-2 ol {
    color: var(--neutral-12);
    margin-bottom: 2rem;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 150%;
    list-style-type: decimal
}

.rich-text-2 li {
    margin-bottom: 0;
    font-family: Dmsans,sans-serif
}

.rich-text-2 figure {
    margin-top: 2rem;
    margin-bottom: 2rem
}

.rich-text-2 h4 {
    margin-bottom: .75rem
}

.rich-text-2 h5,.rich-text-2 h6 {
    margin-bottom: 2rem
}

.rich-text-2 blockquote {
    float: right;
    color: var(--neutral-12);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd188_quote.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: auto;
    border-left: 0 #0000;
    width: 40%;
    margin-bottom: .75rem;
    margin-left: 24px;
    padding: 0;
    font-size: 1.25rem;
    font-weight: 900;
    line-height: 130%
}

.paragraph-hero {
    color: var(--neutral-11);
    margin-top: 1.5rem;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 150%
}

.paragraph-hero.g-text-align-center {
    display: block
}

.paragraph-hero.cc-no-top-margin {
    margin-top: 0
}

.paragraph-hero.cc-no-top-margin.g-mg-bottom-large {
    color: var(--black);
    -webkit-text-stroke-color: var(--black);
    font-style: normal
}

.paragraph-hero.cc-no-top-margin.g-mg-bottom-large.g-text-color-neutral-0 {
    color: var(--neutral-0)
}

.g-text-align-left {
    text-align: left
}

.header-5 {
    color: var(--neutral-12);
    font-size: 2rem;
    font-weight: 600;
    line-height: 140%
}

.container-small {
    width: 100%;
    max-width: 848px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px
}

.container-small.cc-flex-vertical-center {
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
    display: flex
}

.container-small.feature-category {
    margin-bottom: 126px
}

.container-small.learn-category {
    border-bottom: 1px solid var(--stratus);
    margin-bottom: 126px;
    margin-left: 1rem;
    padding-left: 0
}

.body {
    color: var(--neutral-11)
}

.post-summary {
    color: var(--black);
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 140%
}

.post-summary.g-mg-bottom-medium {
    color: var(--stratus);
    letter-spacing: -1px;
    font-family: Dmsans,sans-serif
}

.g-font-weight-regular-400 {
    font-weight: 400
}

.g-font-weight-bold-700 {
    font-weight: 700
}

.g-font-weight-black-900 {
    font-weight: 900
}

.g-text-color-neutral-12 {
    color: var(--neutral-12)
}

.g-text-color-neutral-11 {
    color: var(--neutral-11)
}

.g-text-color-neutral-10 {
    color: var(--neutral-10)
}

.g-text-color-neutral-9 {
    color: var(--neutral-9)
}

.g-text-color-neutral-6 {
    color: var(--neutral-6)
}

.button-secondary {
    border: 2px solid var(--neutral-12);
    color: var(--neutral-12);
    text-align: center;
    letter-spacing: .1em;
    text-transform: uppercase;
    background-color: #0000;
    border-radius: 4px;
    padding: 12px 16px;
    font-size: .6875rem;
    font-weight: 900;
    line-height: 150%;
    transition: color .2s,background-color .2s,border-color .2s
}

.button-secondary:hover {
    border-color: var(--neutral-12);
    color: #1c1c1c;
    background-color: #1717170f
}

.button-secondary:active {
    background-color: #1717171f
}

.button-secondary:focus-visible,.button-secondary[data-wf-focus-visible] {
    outline-offset: 2px;
    outline: 2px solid #4245ff
}

.button-secondary.cc-white {
    border-color: var(--neutral-0);
    color: var(--neutral-0)
}

.button-secondary.cc-white:hover {
    border-color: var(--neutral-8);
    color: var(--neutral-3)
}

.button-secondary.cc-hero-button {
    font-style: normal
}

.button-ghost {
    color: var(--primary-blue);
    text-align: center;
    letter-spacing: .1em;
    text-transform: uppercase;
    background-color: #0000;
    border: 2px solid #0000;
    border-radius: 4px;
    padding: 12px 16px;
    font-size: .6875rem;
    font-weight: 900;
    line-height: 150%;
    transition: background-color .2s,border-color .2s,color .2s
}

.button-ghost:hover {
    background-color: #1717170f;
    border-color: #17171700
}

.button-ghost:active {
    border-color: var(--neutral-6);
    background-color: #1717171f
}

.button-cursor {
    clear: none;
    color: var(--primary-blue);
    white-space: nowrap;
    background-color: #0000;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd35_arrow-cursor-right.svg);
    background-position: 96%;
    background-repeat: no-repeat;
    background-size: auto;
    margin-bottom: 0;
    padding: 0 22% 0 0;
    font-size: 1rem;
    font-weight: 900;
    line-height: 150%;
    text-decoration: none;
    transition: background-position .2s
}

.button-cursor:hover {
    color: #0004e1;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccfda_arrow-cursor-hover-right.svg);
    background-position: 100%
}

.button-cursor:active {
    color: #0003a1;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccf70_arrow-cursor-pressed-right.svg)
}

.button-cursor.cc-back {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccf72_arrow-button-cursor-blue-left.svg);
    background-position: 4%;
    padding-left: 40px;
    padding-right: 0
}

.button-cursor.cc-back:hover {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd014_arrow-cursor-hover-left.svg);
    background-position: 0%
}

.button-cursor.cc-back:active {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccf75_arrow-cursor-pressed-left.svg)
}

.button-cursor.cc-hero {
    color: var(--shadow);
    text-transform: uppercase;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd922_Arrow.svg);
    background-repeat: no-repeat;
    background-size: auto;
    align-self: flex-start;
    margin-top: auto;
    font-family: DM Mono;
    font-size: 1rem;
    font-weight: 500;
    display: flex
}

.main.summit-2024 {
    font-family: DM Sans
}

.main.allow-overflow {
    overflow: visible
}

.section-hero-free-trial {
    background-image: linear-gradient(90deg,#2fb2af26,#c095b126)
}

.section-hero-free-trial.g-section-padding-medium.new-gray {
    background-color: #f0f0f0;
    background-image: none
}

.section-hero-free-trial.g-section-padding-medium.new-gray.launch-signup {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd94d_product-launch-header-right.webp);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 75%;
    display: none
}

.g-section-padding-medium {
    padding-top: 5rem;
    padding-bottom: 5rem
}

.g-section-padding-small {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem
}

.hero-free-trial_layout {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template: "content.form"/13fr 2fr 10.75fr;
    grid-auto-columns: 1fr;
    place-items: start stretch;
    display: grid
}

.hero-free-trial_left-content-wrapper {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.hero-free-trial_features-grid {
    grid-column-gap: 32px;
    grid-row-gap: 1.5rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 2rem;
    display: grid
}

.free-trial-form-wrapper {
    background-color: var(--neutral-0);
    border-radius: 4px;
    overflow: hidden
}

.free-trial-form-wrapper.form-border {
    box-shadow: none;
    border: 1px solid #000;
    border-radius: 0
}

.free-trial-form_header-wrapper {
    background-image: linear-gradient(135deg,var(--teal-brand),var(--eggplant-light));
    padding-top: 8px;
    padding-bottom: 8px
}

.section-testimonials-free-trial {
    overflow: hidden
}

.testimonial-card {
    grid-row-gap: 16px;
    background-color: var(--neutral-3);
    border-radius: 4px;
    flex-direction: column;
    flex: none;
    max-width: 100%;
    height: 100%;
    padding: 34px 34px 24px;
    display: flex
}

.testimonial-card_bio-wrapper {
    grid-column-gap: 16px;
    align-items: center;
    display: flex
}

.resource-card-image {
    object-fit: contain;
    width: 100px;
    height: 50px
}

.g-overflow-hidden {
    overflow: hidden
}

.about-layout {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template: "content.figure"/5fr 1fr 6fr;
    grid-auto-columns: 1fr;
    align-items: center;
    display: grid
}

.footer {
    background-color: var(--shadow);
    padding-top: 5rem;
    padding-bottom: 2.5rem
}

.footer.cc-landing {
    padding-bottom: 5rem
}

.footer.section.related {
    padding-top: 2rem;
    padding-bottom: 2rem
}

.footer-logo-link-block {
    margin-bottom: 3rem
}

.divider {
    background-color: var(--neutral-11);
    width: 100%;
    height: 1px
}

.divider.cc-neutral-8 {
    background-color: var(--neutral-8)
}

.footer-legal-wrapper {
    grid-column-gap: 10px;
    grid-row-gap: 16px;
    flex-flow: column;
    grid-template-rows: auto;
    grid-template-columns: 1fr 2fr;
    grid-auto-columns: 1fr;
    display: flex
}

.g-text-decoration-none {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    text-decoration: none;
    display: flex
}

.g-text-decoration-none.w--current {
    color: var(--shadow)
}

.g-display-inline {
    display: inline
}

.footer-legal-links-wrapper {
    grid-column-gap: 16px;
    align-items: flex-start;
    display: flex
}

.footer-link {
    color: var(--stratus);
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: .875rem;
    line-height: 1.75rem;
    text-decoration: none;
    transition: all .2s;
    display: flex
}

.footer-link:hover {
    color: var(--nimbus);
    text-decoration: underline
}

.footer-social-links {
    grid-column-gap: 16px;
    justify-content: center;
    display: flex
}

.footer-social-link-block {
    border-radius: 100%;
    max-width: 35px
}

.navbar {
    z-index: 999;
    border-bottom: 1px solid var(--shadow);
    background-color: var(--neutral-0);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding-left: 0%;
    padding-right: 0%;
    display: flex
}

.nav-logo-link-block {
    width: 104px
}

.nav-logo-link-block:focus-visible,.nav-logo-link-block[data-wf-focus-visible] {
    outline-color: var(--primary-blue);
    outline-offset: 2px;
    border-radius: 4px;
    outline-width: 2px;
    outline-style: solid
}

.nav-logo-link-block.w--current {
    border-radius: 4px
}

.g-mg-bottom-small {
    margin-bottom: .5rem
}

.g-spacing-clean {
    margin: 0;
    padding: 0
}

.g-mg-top-medium {
    margin-top: 1rem
}

.g-mg-top-medium.python-modal-cta {
    justify-content: space-between;
    width: 45%;
    display: flex
}

.g {
    margin-bottom: 1rem
}

.g-shadow-100 {
    box-shadow: 0 4px 24px #1c1c1c29
}

.section-interactive-demo {
    position: relative
}

.g-show-landscape-below {
    display: none
}

.g-mg-top-large {
    margin-top: 1.5rem
}

.g-mg-bottom-large {
    margin-bottom: 1.5rem
}

.g-text-color-neutral-0 {
    color: var(--neutral-0)
}

.g-text-color-neutral-8 {
    color: var(--neutral-8)
}

.footer-landing-layout {
    grid-column-gap: 16px;
    grid-row-gap: 0px;
    grid-template: "legal social-links"/auto auto;
    grid-auto-columns: auto;
    place-items: center start;
    display: grid
}

.footer-landing_legal-layout {
    grid-column-gap: 32px;
    align-items: center;
    display: flex
}

.hubspot-form-wrapper {
    background-color: var(--neutral-0);
    border: 1px solid #000;
    max-width: 700px;
    min-height: 430px;
    padding: 32px
}

.hubspot-form-wrapper.g-shadow-100 {
    object-fit: contain
}

.hubspot-form-wrapper.margin-bottom-30rem {
    margin-bottom: 30rem
}

.hubspot-form-wrapper.light-form {
    border-color: var(--stratus);
    background-color: var(--nimbus);
    max-width: 720px
}

.hubspot-form-wrapper.light-form.fill-width {
    width: 100%
}

.home-logos_layout {
    grid-column-gap: 32px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    place-items: center;
    margin-top: 2.5rem;
    display: grid
}

.home-customer-logo-wrapper {
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 8px;
    display: flex
}

.home-customer-logo {
    object-fit: contain;
    width: 100%;
    height: 64px;
    max-height: 64px
}

.list-home {
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none
}

.list-item-bullets {
    margin-bottom: .125rem;
    padding-left: 0;
    list-style-type: disc
}

.list-item-bullets.u-mb-1 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd3d_list-bullet-dark.svg)
}

.product-feature-item_image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0%
}

.cta-section-buttons-wrapper {
    grid-column-gap: 24px;
    margin-top: 2rem;
    display: flex
}

.buttons-wrapper {
    grid-column-gap: 24px;
    display: flex
}

.buttons-wrapper.cc-home {
    flex-flow: column;
    align-items: flex-start;
    padding-top: 0;
    display: flex
}

.no-controls-slider {
    background-color: #0000;
    height: 440px
}

.no-controls-slider_arrow,.no-controls-slider_slide-nav {
    display: none
}

.image-100pc {
    object-fit: cover;
    width: 100%;
    height: 100%
}

.container-large {
    width: 71%;
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px
}

.warehouse-link-block {
    background-color: var(--neutral-3);
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 160px;
    padding: 56px 40px;
    display: flex;
    position: relative
}

.investors-logo-image {
    object-fit: contain;
    width: auto;
    max-width: none;
    height: auto;
    min-height: 26px;
    max-height: 2.3rem
}

.section-hero {
    background-image: linear-gradient(140deg,#c095b126,#2fb2af26)
}

.section-hero.g-section-padding-medium {
    background-image: none
}

.section-hero.g-section-padding-small {
    background-image: linear-gradient(140deg,#c095b126,#2fb2af26);
    min-height: 420px
}

.section-hero.g-section-padding-small.g-overflow-hidden {
    background-image: none
}

.section-hero.g-section-padding-small.g-overflow-hidden.is-hidden {
    display: none
}

.hero-layout {
    grid-column-gap: 32px;
    grid-row-gap: 2.5rem;
    grid-template: "title.content"/5fr 1fr 6fr;
    grid-auto-columns: 1fr;
    align-items: center;
    display: grid
}

.customer-stories_link-block {
    text-decoration: none;
    display: block
}

.customers-stories_image-wrapper {
    height: 145px;
    margin-bottom: 1rem;
    position: relative;
    overflow: hidden
}

.customer-stories-logo-wrapper {
    background-color: var(--neutral-0);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 56px;
    padding: 16px;
    display: flex;
    position: absolute;
    inset: auto 16px 16px auto;
    box-shadow: 0 0 24px #1c1c1c29
}

.customer-stories_logo-image {
    object-fit: contain;
    height: 100%
}

.perks-list {
    column-count: 2;
    margin-bottom: 0
}

.perks-list_item {
    grid-column-gap: 24px;
    align-items: center;
    margin-bottom: 1rem;
    display: flex
}

.perks-list_icon {
    width: 32px;
    height: 32px
}

.values-list {
    column-count: 2;
    column-rule-width: 0px;
    column-gap: 32px
}

.values-list_item {
    margin-bottom: 2rem;
    display: inline-block
}

.nav-container {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex
}

.nav-links_list {
    z-index: 3;
    clear: none;
    margin-bottom: 0;
    list-style-type: none;
    display: flex;
    position: static
}

.nav-links_list-item {
    font-family: Dmmono,sans-serif;
    font-size: 14px;
    transition: opacity .2s
}

.nav-dropdown {
    font-family: Dmmono,sans-serif;
    font-size: 14px;
    display: block;
    position: static
}

.nav-dropdown_toggle {
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    color: var(--neutral-12);
    cursor: default;
    border-radius: 4px;
    justify-content: flex-start;
    align-items: center;
    padding: 28px 20px 28px 25px;
    font-family: Dmmono,sans-serif;
    font-size: .9rem;
    font-weight: 400;
    transition: all .2s;
    display: flex
}

.nav-dropdown_toggle:focus-visible,.nav-dropdown_toggle[data-wf-focus-visible] {
    outline-offset: 2px;
    outline: 2px solid #4245ff
}

.nav-dropdown_toggle.w--open {
    color: var(--stratus);
    transition-property: none
}

.nav-dropdown_toggle.extra {
    padding-left: 70px;
    padding-right: 45px
}

.nav-dropdown_toggle.extra-left {
    padding-left: 50px
}

.nav-button-wrapper {
    grid-column-gap: 24px;
    justify-content: flex-end;
    align-items: center;
    font-size: .875rem;
    line-height: 1rem;
    display: flex
}

.nav-left-wrapper {
    align-items: center;
    display: flex;
    position: static
}

.nav-dropdown-list {
    background-color: #0000;
    inset: 80px auto auto 0
}

.nav-dropdown-list.w--open {
    z-index: 1;
    transition: opacity .2s;
    position: absolute
}

.nav-dropdown-list.w--open:hover {
    color: var(--stratus)
}

.nav-dropdown-list_card-wrapper {
    background-color: #292929;
    width: 100%;
    min-height: 22rem;
    padding: 3rem 5%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 24px #1c1c1c29
}

.nav-dropdown_toggle-carat {
    z-index: 2;
    border-color: transparent transparent var(--neutral-0);
    background-color: #f0ff45;
    width: 100%;
    height: 5px;
    display: none;
    position: absolute;
    top: 79px;
    left: 25px
}

.nav-link_text-link {
    color: var(--neutral-12);
    padding: 28px 0;
    font-family: Dmmono,sans-serif;
    font-size: .9rem;
    font-weight: 500;
    text-decoration: none;
    transition: all .2s;
    display: block;
    position: relative
}

.nav-link_text-link:hover {
    color: var(--stratus)
}

.nav-link_text-link:focus-visible,.nav-link_text-link[data-wf-focus-visible] {
    outline-offset: 1px;
    outline: 2px solid #4245ff
}

.nav-link_text-link.nav-mobile-only,.nav-dropdown_chevron {
    display: none
}

.g-image-zoom-parent {
    overflow: hidden
}

.side-tab-link {
    border-bottom: 1px solid var(--neutral-7);
    background-color: var(--neutral-0);
    color: var(--neutral-11);
    border-left: 2px solid #4245ff00;
    justify-content: space-between;
    align-items: center;
    min-height: 72px;
    padding: 4px 24px;
    font-size: 1rem;
    line-height: 150%;
    text-decoration: none;
    display: flex
}

.side-tab-link:hover {
    background-color: var(--neutral-1)
}

.side-tab-link.w--current {
    border-left-color: var(--primary-blue);
    background-color: var(--neutral-3);
    color: var(--primary-blue);
    font-weight: 900
}

.cc-hero-button {
    padding: 14px 24px;
    font-size: .8125rem
}

.product-feature-item_image-wrapper {
    width: 100%;
    margin-bottom: 1.5rem;
    padding-top: 60%;
    position: relative
}

.hero-figure-wrapper {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 360px;
    display: flex
}

.hero-image-wrapper {
    width: 100%;
    height: 100%;
    position: relative
}

.hero-image {
    object-fit: contain;
    width: 100%;
    height: 100%;
    position: static;
    left: 0%;
    right: 0%
}

.accordion-trigger {
    z-index: 3;
    background-color: var(--neutral-0);
    justify-content: space-between;
    align-items: center;
    padding: 14px 24px;
    text-decoration: none;
    display: flex;
    position: sticky;
    top: 0
}

.accordion-content {
    position: relative;
    overflow: hidden
}

.paragraph-allcaps {
    text-transform: uppercase;
    font-size: .8125rem;
    line-height: 150%
}

.section-privacy-content {
    padding-top: 5rem;
    padding-bottom: 5rem
}

.sigma-rich-text {
    padding-top: 0;
    padding-bottom: 0
}

.sigma-rich-text a {
    text-decoration: underline
}

.sigma-rich-text h3 {
    font-size: 2rem
}

.sigma-rich-text h4 {
    font-size: 1.5rem
}

.sigma-rich-text h5 {
    background-color: var(--nimbus);
    margin-bottom: 1rem;
    padding: 1.25rem 2rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5rem
}

.sigma-rich-text h6 {
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.125rem
}

.tabs-snowflake-link-icon {
    width: 32px
}

.section-live-demo-title {
    background-color: var(--nimbus);
    padding-top: 3rem;
    padding-bottom: 3rem
}

.section-live-demo-content {
    padding-top: 5rem;
    padding-bottom: 5rem
}

.demo-tab-link {
    text-align: center;
    text-transform: uppercase;
    background-color: #0000;
    border-bottom: 1px solid #0000;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0 .725rem;
    display: flex
}

.demo-tab-link.w--current {
    border-bottom-color: var(--primary-blue);
    background-color: #0000;
    flex-direction: column;
    align-items: center
}

.tabs-demo-usage-menu {
    grid-column-gap: 15rem;
    grid-row-gap: 15rem;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 2.5rem;
    display: flex
}

.section-contact-title {
    background-image: linear-gradient(90deg,#2fb2af26,#c095b126);
    padding-top: 3rem;
    padding-bottom: 3rem
}

.contact_offices-layout {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    display: grid
}

.section-resource-content.background-color-light.padding-top-bottom-medium {
    padding-top: 4rem;
    padding-bottom: 4rem
}

.resource-content {
    grid-column-gap: 48px;
    display: flex
}

.resource-content__left {
    grid-row-gap: 3.5rem;
    flex-direction: column;
    width: 50%;
    display: flex
}

.resource-content__right {
    width: 50%
}

.g-mg-bottom-xlarge {
    margin-bottom: 2.5rem
}

.g-mg-bottom-xxlarge {
    margin-bottom: 3.5rem
}

.resource-speaker-wrap {
    margin-top: 2rem;
    margin-bottom: 4rem
}

.resource-speaker {
    display: flex
}

.resource-speaker__image {
    border-radius: 100%;
    width: 48px;
    height: 48px;
    margin-right: 1rem
}

.resource-speaker__list {
    grid-row-gap: 2rem;
    flex-direction: column;
    display: flex
}

.resource-cta {
    color: var(--primary-blue);
    font-size: 1rem;
    line-height: 150%;
    text-decoration: none;
    display: flex
}

.resource-cta.w--current {
    grid-column-gap: 20px;
    align-items: center
}

.section-page-blog {
    padding-top: 5rem;
    padding-bottom: 5rem
}

.blog-page-flex-wrapper {
    grid-column-gap: .25rem;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 1.5rem;
    display: flex
}

.pill-blog-category {
    background-color: var(--nimbus);
    color: var(--shadow);
    border-radius: 50px;
    margin-top: 15px;
    padding: 0 .5rem;
    font-size: .75rem;
    text-decoration: none;
    display: block
}

.pill-blog-category:hover {
    background-color: var(--insight)
}

.section-blog-hero {
    background-image: linear-gradient(265deg,#2fb2af33,#fbd2ce33);
    padding-top: 5rem;
    padding-bottom: 5rem
}

.section-blog-list {
    padding-top: 5rem;
    padding-bottom: 5rem
}

.g-hidden {
    display: none
}

.resources-embed-video {
    border: 1px solid var(--shadow);
    width: 100%;
    padding-top: 56%;
    position: relative
}

.resources-embed-video.transparent {
    opacity: 0
}

.blog-hero-image {
    width: 100%;
    max-width: 1008px;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    display: block
}

.blog-hero-image.announcement-hero-image {
    max-width: 800px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: block
}

.search {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd9c_search.svg);
    background-position: 16px;
    background-repeat: no-repeat;
    background-size: auto;
    border: 1px #000;
    border-radius: 4px;
    height: auto;
    margin-bottom: 0;
    padding: 13.5px 16px 13.5px 48px;
    font-size: 16px;
    line-height: 150%
}

.search:focus {
    border-color: var(--primary-blue)
}

.search.cc-filters {
    background-position: 96%;
    margin-bottom: 1rem;
    padding-left: 16px;
    padding-right: 48px
}

.pagination-class {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template: "prev page-count next"/1fr auto 1fr;
    grid-auto-columns: 1fr;
    align-items: center;
    display: grid
}

.pagination_page-count {
    color: var(--neutral-9);
    margin-top: 0;
    font-size: 1rem;
    font-weight: 900;
    line-height: 150%
}

.pagination_button {
    color: var(--neutral-8);
    background-color: #0000;
    border-style: none;
    border-width: 0;
    border-radius: 0;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    margin: 0;
    padding: 0;
    line-height: 150%;
    transition: all .2s;
    display: flex
}

.pagination_button:hover {
    color: var(--primary-blue)
}

.interactive-demos-nav {
    border-bottom: 1px solid var(--neutral-5);
    background-color: var(--neutral-0);
    justify-content: center;
    align-items: center;
    height: 80px;
    display: flex;
    position: relative
}

.interactive-demos-nav_layout {
    justify-content: space-between;
    align-items: center;
    display: flex
}

.interactive-demos-buttons-wrapper {
    grid-column-gap: 24px;
    align-items: center;
    display: flex
}

.single-interactive-demo {
    width: 100%;
    height: 100%
}

.interactive-demos-tabs_component-wrapper {
    height: 100%
}

.interactive-demos-tabs_menu {
    grid-column-gap: 32px;
    border-bottom: 1px solid var(--neutral-5);
    justify-content: center;
    height: 53px;
    display: flex
}

.interactive-demos-tabs_pane {
    height: 100%
}

.interactive-demos-tabs_link {
    grid-column-gap: 32px;
    color: var(--neutral-11);
    text-transform: uppercase;
    background-color: #0000;
    border-bottom: 1px solid #4245ff00;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
    font-size: .8125rem;
    font-weight: 700;
    display: flex
}

.interactive-demos-tabs_link.w--current {
    border-bottom: 1px solid var(--primary-blue);
    color: var(--primary-blue);
    background-color: #0000;
    font-weight: 900
}

.interactive-demo-embed {
    width: 100%;
    height: 100%
}

.badges-of-honor-layout {
    grid-column-gap: 41px;
    justify-content: center;
    align-items: center;
    max-height: 124px;
    display: flex
}

.badges-of-honor_image {
    object-fit: contain;
    width: 124px;
    height: 124px
}

.section-bug-bounty-content {
    padding-top: 5rem;
    padding-bottom: 5rem
}

.utility-page-wrap {
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    height: 50vh;
    max-height: 100%;
    display: flex
}

.utility-page-content {
    grid-column-gap: 70px;
    grid-row-gap: 70px;
    text-align: center;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: auto;
    height: 100%;
    display: flex
}

.g-mg-bottom-xsmall {
    margin-bottom: .25rem
}

.empty-state {
    display: none
}

.align-center {
    justify-content: center;
    display: flex
}

.align-center.flex-vertical-center {
    justify-content: center;
    align-items: center
}

.partner-item {
    background-color: var(--neutral-0);
    border-radius: 4px;
    flex-flow: column;
    max-width: 24rem;
    height: 100%;
    min-height: 14rem;
    padding: 2rem;
    display: flex
}

.partner-image-wrapper {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 60px;
    display: flex
}

.margin-b-xsmall {
    margin-bottom: .5rem
}

.resource-wrapper {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: stretch;
    margin-top: 2rem;
    margin-bottom: 4rem;
    display: flex
}

.overflow-hidden {
    overflow: hidden
}

.section {
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative
}

.section.no-padding-bottom.background-color-shadow {
    margin-bottom: 0;
    padding-bottom: 10px
}

.section.no-padding-bottom._100m-arr-backer {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67f47f7145f1987b2f61c6bd_41f96f80d2140c5b28874822e43ec539_100m-arr-backer.svg);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 100%
}

.section.background-color-nimbus.data-apps-color-dark {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/688aa3399cad4270f7408b51_2b63c26c61a76e74101549f456257b2e_data-apps-webinar-backer-darker.svg);
    background-position: 100% 0;
    background-size: auto 1200px
}

.section.background-color-gray-dark {
    display: block
}

.section.background-color-gray-dark.hide {
    display: none
}

.section.background-color-gray-dark.bg-scroll {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6827a20f53790f3b5d655eae_pixelated-12.avif);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto;
    height: 100vh
}

.section.hero-templates {
    background-color: var(--neutral-0)
}

.section.hero-templates.no-padding-bottom {
    background-image: none
}

.section.no-padding-top {
    padding-top: 0
}

.section.no-padding {
    padding-top: 0;
    padding-bottom: 0
}

.section.no-padding.border-top.border-bottom.background-color-gray-medium.border-color-light {
    border-bottom-color: var(--stratus)
}

.section.no-padding.border-top.background-color-light.border-color-light {
    border-top-color: var(--stratus)
}

.section.no-padding.border-top.background-color-light.border-color-light.border-bottom {
    border-bottom-color: var(--stratus)
}

.section.no-padding.border-top.background-color-light.hide-2 {
    display: block
}

.section.no-padding.border-top.backgound-color-white.width-100 {
    width: 100%
}

.section.no-padding.border-top.background-color-gray-medium.border-color-light,.section.border-top.background-color-gray-medium.border-color-light,.section.border-top.background-color-gray-medium-copy.border-color-light {
    border-top-color: var(--stratus)
}

.section.background-color-yellow.border-bottom.data-apps-callout {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67cf2f05786d4888cee00d65_data-apps-texture-webinar.svg);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: auto 300px
}

.section.background-color-yellow.padding-top-bottom-medium.da-live {
    display: block
}

.section.background-color-gray-medium {
    color: var(--nimbus)
}

.section.background-color-gray-medium.da-live {
    display: block
}

.section.background-color-gray-medium.data-apps-live {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67cf497227392c6dc76eafad_c8822636df0868a66b3025c52de25b34_data-apps-texture-main-event.svg);
    background-position: 50% 0;
    background-size: auto
}

.section.background-color-gray-medium.data-apps-live.da-live {
    background-position: 50% 30px;
    background-repeat: repeat-x;
    display: block
}

.section.background-color-shadow-light.overflow-hidden.no-padding-bottom {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9bd_ai_bg_pattern.svg);
    background-position: 50% 111%;
    background-repeat: repeat-x;
    background-size: auto 280px
}

.section.background-color-shadow-light.overflow-hidden.no-padding-bottom.self-service {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdab2_lines-thin.svg);
    background-position: 50% 100%;
    height: 400px
}

.section.background-color-shadow-light.overflow-hidden.no-padding-bottom.why-sigma {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdab2_lines-thin.svg);
    background-position: 50% 100%
}

.section.background-color-shadow-light.overflow-hidden.python-temp,.section.background-color-shadow-light.why-sigma {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdab2_lines-thin.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto;
    padding-bottom: 0
}

.section.color-nimbus {
    background-color: var(--nimbus)
}

.section.small-padding {
    padding-top: 0;
    padding-bottom: 0
}

.section.background-color-gray-light-2 {
    background-color: var(--neutral-3);
    overflow: hidden
}

.section.background-color-dark {
    background-color: var(--shadow);
    color: var(--nimbus)
}

.section.background-color-dark.worldtour-snowflake {
    padding-top: 0
}

.section.background-color-gray-light {
    overflow: hidden
}

.section.background-color-gray-light-copy-2 {
    background-color: #fcfcfc;
    overflow: hidden
}

.section.background-color-gray-light-2 {
    overflow: hidden
}

.section.customer-stories-hero {
    background-color: #858585;
    background-image: linear-gradient(#ffffffd6,#ffffffd6),url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9aa_sigma-footer-pattern1.svg);
    background-position: 0 0,100% 101%;
    background-repeat: repeat,no-repeat;
    background-size: auto,70%;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    min-height: 480px;
    display: flex
}

.section.background-color-nimbus-2 {
    background-color: #f0f0f0
}

.section.background-color-nimbus-light {
    background-color: #f3f3f3
}

.section.section-summit {
    padding-bottom: 7rem
}

.section.background-color-shadow {
    background-color: var(--shadow)
}

.section.background-color-shadow.no-padding-bottom {
    background-image: none;
    padding-bottom: 0
}

.section.background-color-shadow.no-padding-bottom.da-live {
    display: block
}

.section.background-color-shadow.no-padding.da-live {
    display: none
}

.section.background-color-shadow.dark-lines {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cda74_lines-alt.svg);
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: auto
}

.section.blog {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67001c7c4d13ae59d49e8601_geometry-lines-topleft.svg);
    background-position: 100% -3px;
    background-repeat: no-repeat;
    background-size: auto
}

.section.background-color-light.no-padding-top.hide-2 {
    display: none
}

.section.background-color-light.no-margin-top {
    padding-top: 0
}

.section.background-color-light.yellow-lines {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67200b9131861e7579fb67dd_lines-top-yellow.svg);
    background-position: 50% 0;
    background-repeat: repeat-x;
    background-size: auto
}

.section.background-color-light.search-block {
    border-bottom: 1px solid var(--stratus);
    display: none
}

.section.background-color-light.ai-header {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68bb1ac9195b94e641a74b86_triangle-fade-vertical.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto 40%;
    padding-top: 0;
    padding-bottom: 2rem
}

.section.background-color-shadow-light-nopattern {
    background-color: var(--shadow);
    color: var(--nimbus)
}

.section.padding-top-tiny {
    padding-top: 3rem
}

.section.padding-top-bottom-tiny {
    padding-top: 1rem;
    padding-bottom: 1rem
}

.section.padding-top-bottom-tiny.background-color-nimbus.hide-2 {
    display: none
}

.section.background-color-sky {
    background-color: var(--sky)
}

.section.background-color-sky.worldtour-db {
    padding-top: 0
}

.section.background-color-sky.product-launch-header {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66e8b90df35ad88da8b15792_product-launch-corner-fall-24.svg);
    background-position: 100% 103%;
    background-repeat: no-repeat;
    background-size: 500px
}

.section.background-color-white {
    background-color: var(--neutral-0)
}

.section.background-color-white.border-top.padding-top-bottom-tiny.width-100 {
    width: 100%
}

.section.background-color-white.no-padding-top.margin-top-large.data {
    padding-bottom: 0
}

.section.margin-bottom-10rem {
    margin-bottom: 10rem
}

.section.no-margin-top {
    padding-top: 0
}

.section.padding-top-small {
    padding-top: 2.5rem
}

.section.product-launch {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6765af4db5e500fb0ee864da_PL-corner.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 40%;
    margin-left: 0;
    margin-right: 0
}

.section.product-launch.spring-showcase {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681a8251cfb80692b1518a7e_32007e5b4b5f4407c98abb7c1d2b4857_black-slant-grid-wide.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto 250px
}

.section.product-launch-past {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6765b0417663a7dcb1b13ed8_PL-corner-white.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 25%
}

.section.data-apps-conf {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67ab88d4276515c5804ff258_data-apps-conf-backer.svg);
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-size: auto;
    padding-bottom: 0
}

.section.background-color-grass {
    background-color: var(--grass)
}

.section.data-apps-event-promo {
    background-color: var(--shadow);
    color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67a29f9e0fb4058b7c39ec4b_data-apps-conf-backer.svg);
    background-position: 100% 10%;
    background-repeat: no-repeat;
    background-size: auto;
    padding-top: 3rem;
    padding-bottom: 3rem
}

.section.data-apps-header-light {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67cf2feaa1e2fe6ffa9b246f_e33bbfa0eab6d18731bc7a8c4719178e_data-apps-webinar-backer.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: auto 1200px
}

.section.snowflake-summit-25 {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67d0cd09b542925bd7bfd947_yellow-grid.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: 800px;
    padding-bottom: 0
}

.section.data-madness-promo {
    background-color: var(--sun);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67d1cfd2b1eaa64c1a7c92cf_data-madness.avif);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 2rem;
    padding-bottom: 2rem
}

.section.data-madness-promo.da-live {
    display: none
}

.section.data-apps-cta {
    background-color: var(--shadow-lite);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cda74_lines-alt.svg);
    background-position: 0 -50px;
    background-repeat: repeat-x;
    background-size: auto;
    padding-bottom: 0
}

.section.si-partner-logos {
    background-color: var(--shadow);
    color: var(--nimbus);
    padding-top: 1rem;
    padding-bottom: 1rem
}

.section.snowflake-summit-25-2 {
    background-color: #292929;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67d0cd09b542925bd7bfd947_yellow-grid.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: 800px;
    padding-bottom: 0
}

.section.customer-awards {
    background-color: #292929;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67dda5555c77e4d961883969_3b7f56d4ed90935afd2a049b63d345b8_awards-2025-pink.svg);
    background-position: 50% 115%;
    background-repeat: repeat-x;
    background-size: auto 500px;
    padding-bottom: 0
}

.section.databricks-summit-25 {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68b09f77f1403e7cc00ba759_pattern-orange-rectangles.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto 400px;
    padding-bottom: 0
}

.section.state-of-bi-2025 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67ef31b9356d8328aadeaa6f_state-of-bi-dots-gray.svg);
    background-position: 50% 103%;
    background-repeat: repeat-x;
    background-size: auto 260px;
    padding-top: 3rem;
    padding-bottom: 0
}

.section._100m-arr-lower {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67f4b923c82dda32c0ceb0ae_100m-arr-backer-lower.svg);
    background-position: 0 0;
    background-size: 100%;
    display: none
}

.section._100m-arr-lower-wide {
    border-top: 1px solid var(--shadow-lite);
    border-bottom: 1px solid var(--shadow-lite);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67f4b923c82dda32c0ceb0ae_100m-arr-backer-lower.svg);
    background-position: 0 0;
    background-size: 100%
}

.section._100m-arr-lower-box {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67f4b923c82dda32c0ceb0ae_100m-arr-backer-lower.svg);
    background-position: 0 0;
    background-size: 100%;
    padding-bottom: 0
}

.section.no-bottom {
    padding-bottom: 0
}

.section.spring-showcase-25 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681a8251cfb80692b1518a7e_32007e5b4b5f4407c98abb7c1d2b4857_black-slant-grid-wide.svg);
    background-position: 50% 110%;
    background-repeat: repeat-x;
    background-size: auto 550px
}

.section.bg-scroll {
    background-color: #ced0cc;
    height: 100vh
}

.section.header-stack-holder {
    overflow: hidden
}

.section.header-stack-holder.no-padding-bottom {
    height: 80vh
}

.section.home-grid {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/685106838d461923ec10fc64_0ae8ba725281d3ce0757318ef80f6942_grid-fade.svg);
    background-position: 50% 0;
    background-repeat: repeat-x;
    background-size: auto 590px;
    padding-top: 0;
    padding-bottom: 6.6rem
}

.section.home-grid.reduced-padding {
    padding-bottom: 4rem
}

.section.hide-mobile-portrait.background-color-primary {
    border-top: 1px solid var(--shadow-lite)
}

.section.quote-row {
    border-bottom: 1px solid var(--shadow-lite);
    background-color: var(--neutral-0);
    padding-top: 0;
    padding-bottom: 0
}

.section.home-product-header {
    border-top: 1px solid var(--shadow-lite);
    padding-top: 1rem;
    padding-bottom: 1rem
}

.section.sticky-section {
    padding-top: 0;
    position: static
}

.section.mq-form-backer {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68509f0b0c2a6304d753c550_91912c9ceda24e39adaa405946b83ce6_MQ-blue-texture.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: auto 200%
}

.section.ai-section {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68547c8d8688de6dd0a9d6b9_c43331394345d378954046a1ebeeda8f_grid-fade-invert.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto 600px
}

.section.ai {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68547c8d8688de6dd0a9d6b9_c43331394345d378954046a1ebeeda8f_grid-fade-invert.svg);
    background-position: 50% 110%;
    background-repeat: repeat-x;
    background-size: auto 590px;
    padding-top: 0;
    overflow: hidden
}

.section.data-apps-callout {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    padding-top: 0;
    padding-bottom: 0
}

.section.data-apps-section {
    background-color: var(--shadow);
    color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/685492cb6d2835cd7c7186f4_data-apps-header.svg);
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-size: 100%;
    padding-top: 8rem
}

.section.background-color-pink {
    background-color: var(--meadow)
}

.section.home-quote {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68509f0b0c2a6304d753c550_91912c9ceda24e39adaa405946b83ce6_MQ-blue-texture.svg);
    background-position: 0%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    padding-left: 11rem
}

.section.home-quote.orange {
    background-color: var(--sun);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6854c7150b48ee383260ba65_quote-texture-orange.svg)
}

.section.home-quote.orange.hide-mobile-portrait {
    background-position: -1px
}

.section.home-quote.pink {
    background-color: var(--meadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68549590dc6c01f91df7386e_quote-texture-vertical-hash.svg)
}

.section.home-quote.blue {
    background-color: var(--sky);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6854c71538029b6270251009_quote-texture-blue.svg)
}

.section.diff-architecture {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6854b9031a7ab92f392493aa_248889c4f2779b9ab2e0f7cf9a1ce03c_archi-texture.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 600px
}

.section.diff-self-service {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6854f40444844ecbded6e2e3_self-service-texture.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: auto
}

.section.diff-ai-workflows {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6854f7e647929cf97abcd558_63dffcdd2a27926041bd273683894b9e_diff-ai-workflow.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 50%
}

.section.gart-disclaimer {
    background-color: var(--shadow);
    padding-top: 0;
    padding-bottom: 2rem
}

.section.background-color-white-2 {
    background-color: #fff
}

.section.launch-callout {
    background-color: var(--neutral-0);
    padding-top: 2rem;
    padding-bottom: 2rem
}

.section.background-color-white-2-2 {
    background-color: #fff
}

.newsroom-link-wrapper {
    background-color: #f8f8f800;
    height: 100%;
    padding: 24px;
    text-decoration: none;
    transition: background-color .2s
}

.newsroom-link-wrapper:hover {
    background-color: #f8f8f8
}

.card {
    background-color: var(--clay-lightest);
    border-radius: 4px;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 32px;
    display: flex
}

.card.cc-neutral-3 {
    background-color: var(--neutral-3)
}

.retailers-card {
    grid-column-gap: 16px;
    grid-row-gap: 8px;
    background-color: var(--neutral-3);
    border-radius: 4px;
    grid-template: "icon title""icon description"".cta"/32px 1fr;
    grid-auto-columns: 1fr;
    height: 100%;
    padding: 24px;
    display: flex
}

.section-neutral-3 {
    background-color: var(--neutral-3)
}

.section-neutral-0.g-section-padding-medium {
    background-color: #0000;
    background-image: none;
    padding-top: 2rem;
    padding-bottom: 2rem
}

.section-neutral-0.g-section-padding-small {
    background-color: #0000;
    padding-top: 5.6rem;
    transition: color .2s,background-position .2s
}

.text-only-hero-layout {
    grid-column-gap: 32px;
    grid-row-gap: 2.5rem;
    grid-template: "title"/7fr 5fr;
    grid-auto-columns: 1fr;
    align-items: center;
    display: grid
}

.what-is-embedded-analytics-list_item {
    grid-column-gap: 32px;
    grid-row-gap: 2rem;
    border-top: 1px solid var(--shadow);
    grid-template: "title.content"/3fr 1fr 8fr;
    grid-auto-columns: 1fr;
    margin-bottom: 3rem;
    padding-top: 25px;
    display: grid
}

.collection-filters-layout {
    grid-column-gap: 32px;
    grid-row-gap: 2rem;
    grid-template: "filters list"/3fr 9fr;
    grid-auto-columns: 1fr;
    display: grid
}

.announcements-list-layout {
    grid-column-gap: 32px;
    grid-row-gap: 4rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.dropdown {
    width: 100%
}

.dropdown.cc-mobile-only {
    display: none
}

.dropdown-toggle {
    border: 1px solid var(--neutral-5);
    background-color: var(--neutral-3);
    color: var(--neutral-12);
    border-radius: 4px;
    width: 100%;
    padding: 13px 40px 13px 16px;
    font-size: 14px;
    display: none
}

.dropdown-list {
    background-color: var(--neutral-0);
    border-radius: 0 0 4px 4px;
    box-shadow: 4px 0 24px #1c1c1c29
}

.dropdown-link.w--current {
    background-color: var(--neutral-4);
    color: var(--neutral-12)
}

.resources-tile-wrapper {
    border: 1px solid var(--shadow);
    background-color: var(--neutral-0);
    border-radius: 0;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    transition: all .2s;
    display: flex;
    overflow: hidden
}

.resources-tile-wrapper:hover {
    background-color: var(--neutral-0);
    box-shadow: inset 0 -20px 0 -6px var(--insight)
}

.resources-tile-wrapper:focus-visible,.resources-tile-wrapper[data-wf-focus-visible] {
    outline-offset: -3px;
    outline: 3px solid #00e
}

.resources-tile-bottom-content {
    grid-column-gap: 21px;
    grid-row-gap: 21px;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    padding: 32px;
    display: flex
}

.slider-wrapper {
    position: relative
}

.slider-item.cc-width-30pc {
    width: 31.25%;
    margin-bottom: 16px;
    display: block
}

.slider-track {
    grid-column-gap: 3%;
    grid-row-gap: 5%;
    width: 100%;
    display: flex;
    overflow: scroll
}

.slider-buttons {
    justify-content: flex-end;
    display: flex;
    position: absolute;
    inset: -68px 0% auto auto
}

.slider-arrow {
    color: var(--primary-blue);
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    font-size: 16px;
    text-decoration: none;
    transition: all .2s;
    display: flex;
    inset: -68px 0% auto auto
}

.slider-arrow:hover {
    color: var(--neutral-12)
}

.customer-story-card {
    grid-row-gap: 16px;
    background-color: var(--neutral-3);
    border-radius: 4px;
    flex-direction: column;
    flex: none;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 100%;
    height: 100%;
    padding: 34px 34px 24px;
    display: flex
}

.custom-pagination-link {
    background-color: var(--neutral-0);
    color: #8f8f8f;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    font-size: 16px;
    font-weight: 900;
    text-decoration: none;
    display: flex
}

.custom-pagination-link:hover {
    color: #171717
}

.custom-pagination-link.w--current {
    color: #000
}

.custom-pagination-wrapper {
    justify-content: center;
    align-items: center;
    display: flex
}

.select-filters {
    border: 1px solid var(--neutral-5);
    color: var(--neutral-12);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccdff_chevron-small.svg);
    background-position: 96%;
    background-repeat: no-repeat;
    background-size: auto;
    border-radius: 4px;
    height: 48px;
    padding: 11px 16px 13px;
    font-size: 16px;
    line-height: 100%
}

.select-filters:focus {
    border-color: var(--neutral-5)
}

.blog-author-wrapper {
    grid-column-gap: .5rem;
    flex-wrap: wrap;
    align-items: center;
    display: flex
}

.blog-author-text-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: .5rem;
    display: flex
}

.blog-author-picture {
    object-fit: cover;
    border-radius: 50%;
    width: 48px;
    height: 48px
}

.blog-author-share-wrapper {
    justify-content: space-between;
    align-items: center;
    display: flex
}

.blog-author-share-wrapper.g-mg-bottom-medium {
    grid-column-gap: 40px;
    margin-bottom: 1rem
}

.blog-share-wrapper {
    grid-column-gap: 8px;
    display: flex
}

.share-link-block {
    background-color: var(--neutral-9);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    transition: background-color .2s;
    display: flex
}

.share-link-block:hover {
    background-color: var(--neutral-8)
}

.pros-rich-text {
    clear: none
}

.pros-rich-text h2 {
    color: var(--neutral-12);
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 900;
    line-height: 140%
}

.pros-rich-text p {
    color: var(--neutral-11);
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 150%
}

.pros-rich-text h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 140%
}

.pros-rich-text ul {
    color: var(--neutral-11);
    margin-bottom: 2rem;
    padding-left: 0;
    font-size: 1rem
}

.pros-rich-text ol {
    color: var(--neutral-11);
    margin-bottom: 2rem;
    font-size: 1rem;
    line-height: 150%
}

.pros-rich-text li {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd1fe_checkmark.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: auto;
    margin-bottom: 1rem;
    padding-left: 40px
}

.pros-rich-text figure {
    margin-top: 2rem;
    margin-bottom: 2rem
}

.pros-rich-text h4,.pros-rich-text h5,.pros-rich-text h6 {
    margin-bottom: 2rem
}

.cons-rich-text {
    clear: none
}

.cons-rich-text h2 {
    color: var(--neutral-12);
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 900;
    line-height: 140%
}

.cons-rich-text p {
    color: var(--neutral-11);
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 150%
}

.cons-rich-text h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 140%
}

.cons-rich-text ul {
    color: var(--neutral-11);
    margin-bottom: 2rem;
    padding-left: 0;
    font-size: 1rem
}

.cons-rich-text ol {
    color: var(--neutral-11);
    margin-bottom: 2rem;
    font-size: 1rem;
    line-height: 150%
}

.cons-rich-text li {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd26f_cross.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: auto;
    margin-bottom: 1rem;
    padding-left: 40px
}

.cons-rich-text figure {
    margin-top: 2rem;
    margin-bottom: 2rem
}

.cons-rich-text h4,.cons-rich-text h5,.cons-rich-text h6 {
    margin-bottom: 2rem
}

.rich-text-how-to {
    clear: none;
    font-size: 16px
}

.rich-text-how-to h2 {
    color: var(--neutral-12);
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 900;
    line-height: 140%
}

.rich-text-how-to p {
    color: var(--neutral-11);
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 150%
}

.rich-text-how-to h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 140%
}

.rich-text-how-to ul {
    color: var(--neutral-11);
    margin-bottom: 2rem;
    font-size: 1rem
}

.rich-text-how-to ol {
    color: var(--neutral-11);
    margin-bottom: 2rem;
    font-size: 1rem;
    line-height: 150%
}

.rich-text-how-to li {
    margin-bottom: 1rem
}

.rich-text-how-to figure {
    border-radius: 4px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    overflow: hidden;
    box-shadow: 0 4px 24px #1c1c1c29
}

.rich-text-how-to h4,.rich-text-how-to h5,.rich-text-how-to h6 {
    margin-bottom: 2rem
}

.rich-text-how-to a {
    text-decoration: none
}

.how-to-article-footer-wrapper {
    grid-column-gap: 64px;
    grid-row-gap: 2rem;
    justify-content: space-between;
    display: flex
}

.how-to-article-footer-column {
    grid-row-gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    display: flex
}

.how-to-article-footer-button-wrapper {
    grid-column-gap: 32px;
    grid-row-gap: 1rem;
    flex-direction: row;
    justify-content: flex-start;
    display: flex
}

.max-width-medium {
    max-width: 40rem;
    margin-left: 0;
    margin-right: 0
}

.nav-logo-image {
    width: 100%;
    height: 32px
}

.footer-social-image {
    object-fit: contain;
    width: 100%;
    height: 2rem
}

.integrations-image-wrapper {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: space-between;
    align-items: flex-start;
    height: 48px;
    margin-bottom: 1.5rem;
    display: flex
}

.integrations-image {
    object-fit: contain;
    object-position: 0% 50%;
    width: 100%;
    max-width: 120px;
    height: 100%
}

.integrations-item {
    background-color: var(--neutral-3);
    border-radius: 4px;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    align-items: flex-start;
    max-width: none;
    min-height: auto;
    padding: 2rem 2rem 2.9rem;
    display: flex
}

.integrations-filter-radio-button-field {
    color: var(--neutral-11);
    text-transform: uppercase;
    cursor: pointer;
    border-bottom: 2px solid #4245ff00;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    padding: 16px 6px;
    font-size: .8125rem;
    font-weight: 600;
    transition: all .2s;
    display: flex;
    position: relative
}

.integrations-filter-radio-button-field:hover {
    background-color: var(--neutral-3)
}

.integrations-filter-radio-button {
    cursor: pointer;
    border-style: none;
    border-radius: 0%;
    width: 100%;
    height: 100%;
    margin-left: 0;
    position: absolute;
    inset: 0%
}

.integrations-filter-radio-button.w--redirected-checked {
    border-style: none;
    border-color: var(--insight)
}

.integrations-filter-radio-button.w--redirected-focus {
    box-shadow: none;
    border: 0 #ccc0
}

.integrations-filter-radio-button-label {
    font-weight: 600;
    position: relative
}

.integrations-filters-form {
    grid-column-gap: 16px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    position: sticky;
    top: 0;
    overflow: visible
}

.integrations-filters-form-block {
    min-width: 190px;
    margin-bottom: 0
}

.resources-dropdown {
    height: 48px;
    display: none
}

.resources-dropdown-toggle {
    background-color: #f8f8f8;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    align-items: center;
    height: 48px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex
}

.resources-dropdown-toggle.w--open {
    color: #171717;
    font-size: .875rem
}

.resources-dropdown-links {
    background-color: #fcfcfc
}

.resources-dropdown-links.w--open {
    background-color: #0000
}

.resources-dropdown-links.g-shadow-100.w--open {
    border-radius: 4px;
    overflow: hidden
}

.resource-dropdown-link {
    color: #171717;
    background-color: #fcfcfc;
    align-items: center;
    height: 48px;
    font-size: 1rem;
    display: flex
}

.resource-dropdown-link.w--current {
    color: #171717;
    background-color: #f8f8f8
}

.col {
    flex: 0 auto;
    margin-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px
}

.col.col-lg-6 {
    flex-basis: 50%;
    max-width: 50%
}

.col.col-lg-6.col-sm-12 {
    padding-right: 0
}

.col.col-lg-12 {
    flex-basis: 100%;
    max-width: 100%
}

.col.col-lg-4 {
    flex-basis: 33.33%;
    max-width: 33.3333%
}

.col.col-lg-4.col-sm-12 {
    flex-flow: column;
    display: flex
}

.col.col-lg-4.col-md-6.col-sm-12 {
    padding-left: 0;
    padding-right: 0
}

.col.col-lg-4.col-md-12 {
    min-width: 1px
}

.col.col-lg-3 {
    flex-basis: 25%;
    max-width: 25%
}

.col.col-lg-5 {
    flex-basis: 41.67%;
    max-width: 41.6667%
}

.col.col-lg-5.col-md-12 {
    align-self: center
}

.col.col-lg-5.col-md-12.g-section-padding-weekly-demo-header {
    align-self: flex-start;
    height: 100%;
    padding-top: 10rem;
    padding-left: 40px
}

.col.col-lg-7 {
    flex-basis: 58.33%;
    max-width: 58.3333%
}

.col.col-lg-7.col-md-12 {
    align-self: flex-start
}

.col.col-lg-1 {
    flex-basis: 8.33%;
    max-width: 8.33333%
}

.col.col-md-12 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: flex
}

.col.col-md-12.col-lg-12.summit-24 {
    text-align: center
}

.col.col-md-12._2-col-top {
    align-items: flex-start
}

.col.col-lg-8 {
    flex-basis: 66.67%;
    max-width: 66.6667%
}

.col.col-lg-8.col-sm-12 {
    padding-left: 0
}

.col.col-lg-8.blog-header {
    margin-bottom: auto;
    padding-left: 0
}

.col.col-lg-9 {
    flex-basis: 75%;
    max-width: 75%
}

.col.col-lg-10 {
    flex-basis: 83.33%;
    max-width: 83.3333%
}

.u-mb-3 {
    margin-bottom: 3em
}

.row {
    flex-flow: wrap;
    align-content: stretch;
    margin-left: -16px;
    margin-right: -16px;
    display: flex
}

.row.justify-center {
    grid-column-gap: 23px;
    grid-row-gap: 23px;
    justify-content: center
}

.row.align-center.justify-between {
    padding-top: 0
}

.row.justify-between {
    justify-content: space-between;
    padding-top: 40px
}

.row.justify-between.align-center {
    align-items: flex-start
}

.row.align-center {
    color: #fff;
    align-items: center
}

.row.columns {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.row.columns._2col-form {
    grid-template-rows: auto
}

.card-icon-default {
    background-color: var(--neutral-3);
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    margin-right: 1rem;
    padding: 32px;
    display: flex
}

.integrations-collapsible-gradient {
    background-image: linear-gradient(to top,var(--neutral-3)50%,#f8f8f800);
    justify-content: flex-start;
    align-items: center;
    height: 2rem;
    display: flex;
    position: absolute;
    inset: auto 0% 0%
}

.faqs-side-tab-link {
    grid-column-gap: 4px;
    border-bottom: 1px solid var(--neutral-7);
    color: var(--neutral-11);
    border-left: 2px solid #4245ff00;
    justify-content: space-between;
    align-items: center;
    min-height: 48px;
    padding: 12px 16px 12px 24px;
    font-size: .875rem;
    line-height: 150%;
    text-decoration: none;
    display: flex
}

.faqs-side-tab-link:hover {
    background-color: var(--neutral-3)
}

.faqs-side-tab-link.w--current {
    border-left-color: var(--primary-blue);
    background-color: var(--neutral-3);
    color: var(--primary-blue);
    font-weight: 900
}

.aspect-ratio-16-9 {
    aspect-ratio: 16/9;
    width: 100%;
    height: auto;
    padding-top: 0%;
    overflow: hidden
}

.aspect-ratio-16-9.g-image-zoom-parent.g-mg-bottom-small {
    padding-top: 0%
}

.aspect-ratio-16-9.no-scale {
    box-sizing: border-box;
    object-fit: contain
}

.aspect-ratio-16-9.img-cover {
    object-fit: cover
}

.u-img-cover {
    background-color: var(--nimbus);
    object-fit: cover;
    width: 100%;
    max-width: none;
    height: 100%;
    display: block;
    position: static;
    inset: 0%;
    transform: none
}

.u-img-cover.video {
    z-index: 1
}

.u-img-cover.video.u--z-10 {
    display: block;
    position: relative;
    overflow: hidden
}

.u-img-cover.aspect-ratio-16-9.contain {
    object-fit: contain
}

.g-show-tablet-below {
    display: none
}

.faqs-side-tab-articles-link {
    border-bottom: 1px none var(--neutral-7);
    color: var(--neutral-11);
    border-left: 2px solid #4245ff00;
    justify-content: space-between;
    align-items: center;
    min-height: 48px;
    padding: 12px 24px 12px 40px;
    font-size: .875rem;
    line-height: 120%;
    text-decoration: none;
    display: flex
}

.faqs-side-tab-articles-link:hover {
    background-color: var(--neutral-3)
}

.faqs-side-tab-articles-link.w--current {
    border-left-color: var(--primary-blue);
    background-color: var(--neutral-3);
    color: var(--primary-blue);
    font-weight: 900
}

.faqs-side-tab-link-chevron {
    object-fit: cover;
    flex: none;
    width: 24px;
    height: 24px
}

.content-box-image {
    background-color: var(--shadow-lite);
    border: 0 #000;
    width: 100%;
    margin-bottom: 0;
    padding-top: 0;
    position: relative;
    overflow: visible
}

.content-box-image.customers {
    height: auto;
    max-height: 180px;
    display: flex
}

.content-box-image.blog-thumb {
    max-height: 208px;
    overflow: clip
}

.content-box-image.fpo {
    filter: blur(5px)
}

.comparisons-link-block {
    text-decoration: none;
    display: block
}

.skip-to-button {
    background-color: var(--neutral-4);
    color: var(--neutral-12);
    text-align: center;
    letter-spacing: .1em;
    text-transform: uppercase;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    height: 0;
    padding: 0 16px;
    font-size: .6875rem;
    font-weight: 900;
    line-height: 150%;
    transition: color .2s,background-color .2s,border-color .2s;
    display: flex;
    overflow: hidden
}

.skip-to-button:focus-visible,.skip-to-button[data-wf-focus-visible] {
    outline-offset: 2px;
    outline: 2px solid #4245ff;
    height: 44px
}

.infinite-marquee-wrapper {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: flex;
    overflow: hidden
}

.infinite-marquee-wrapper.g-section-padding-large {
    padding-top: 4rem;
    padding-bottom: 4rem
}

.infinite-marquee-wrapper.g-section-padding-large.padding-t-lrg {
    padding-top: 0;
    padding-bottom: 0
}

.infinite-marquee-logos {
    flex: none;
    display: flex
}

.infinite-marquee-logos.cc-badges {
    grid-column-gap: 45px;
    padding-left: 40px;
    padding-right: 40px
}

.logo-aspect-ratio {
    width: 200px;
    height: 80px;
    position: relative
}

.logo-contain {
    filter: grayscale();
    object-fit: contain;
    width: 100%;
    height: 100%;
    padding: 14px 40px;
    position: absolute;
    inset: 0%
}

.aspect-ratio-100-61 {
    width: 100%;
    margin-bottom: 0;
    padding-top: 0%;
    position: relative
}

.u-img-contain {
    z-index: 5;
    object-fit: contain;
    width: 100%;
    max-width: 10rem;
    height: 100%;
    position: static;
    inset: 0% 0% auto auto
}

.hero-default-layout {
    grid-column-gap: 26px;
    grid-row-gap: 1.5rem;
    grid-template: "title.figure""cta.figure"/5fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.hero-default-layout.python {
    grid-template-columns: 6.5fr .5fr 8.5fr
}

.flex-horizontal {
    display: flex
}

.flex-horizontal.justify-space-between {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: flex-start
}

.breadcrumb-list {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    flex-flow: wrap;
    justify-content: flex-start;
    margin-left: 0;
    font-weight: 400;
    display: flex
}

.breadcrumb-item {
    color: var(--shadow);
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 0;
    padding-right: 1rem;
    font-size: 1rem;
    line-height: 180%;
    display: flex
}

.breadcrumb-item:hover:where(.w-variant-10089934-e25b-f8b2-7538-c5bf942f104f) {
    color: var(--nimbus)
}

.breadcrumb-ellipsis {
    color: var(--shadow);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.rich-text-free-trial {
    clear: none;
    font-size: 16px
}

.rich-text-free-trial h2 {
    color: var(--neutral-12);
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 900;
    line-height: 140%
}

.rich-text-free-trial p {
    color: var(--neutral-11);
    font-size: 1.125rem;
    line-height: 150%
}

.rich-text-free-trial h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 140%
}

.rich-text-free-trial ul {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    color: var(--neutral-11);
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    display: grid
}

.rich-text-free-trial ol {
    color: var(--neutral-11);
    margin-bottom: 2rem;
    font-size: 1rem;
    line-height: 150%
}

.rich-text-free-trial li {
    margin-bottom: 1rem
}

.rich-text-free-trial figure {
    margin-top: 2rem;
    margin-bottom: 2rem
}

.rich-text-free-trial h4,.rich-text-free-trial h5,.rich-text-free-trial h6 {
    margin-bottom: 2rem
}

.rich-text-free-trial strong {
    color: var(--black)
}

.utility-page-form {
    flex-direction: column;
    align-items: stretch;
    display: flex
}

.site-search-input {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd9c_search.svg);
    background-position: 16px;
    background-repeat: no-repeat;
    background-size: auto;
    border: 1px #000;
    border-radius: 4px;
    width: 100%;
    height: auto;
    margin-bottom: 0;
    padding: 13.5px 16px 13.5px 48px;
    font-size: 16px;
    line-height: 150%
}

.site-search-input:focus {
    border-color: var(--primary-blue)
}

.site-search-wrapper {
    width: 100%;
    position: relative
}

.site-search-button {
    color: #3330;
    background-color: #0000;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd9c_search.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto;
    width: 40px;
    position: absolute;
    inset: 0% auto 0% 8px
}

.flex-vertical-stretch {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-direction: column;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    display: flex
}

.modal-wrapper {
    z-index: 99999;
    background-color: #141414cc;
    flex-direction: column;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    display: none;
    position: fixed;
    inset: 0;
    overflow: scroll
}

.modal-container {
    z-index: 5;
    background-color: #fff;
    width: 85%;
    max-width: 600px;
    margin: 10vh auto 20px;
    padding: 40px;
    display: block;
    position: relative;
    overflow: hidden
}

.modal-container.cc-video {
    z-index: 6;
    background-color: #0000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    max-width: none;
    height: 100vh;
    margin-top: 0;
    display: flex;
    position: absolute;
    inset: 0%
}

.modal-close_btn {
    z-index: 10;
    color: #000;
    padding: 12px 16px;
    font-size: 2.2rem;
    font-weight: 500;
    line-height: .7;
    text-decoration: none;
    transition: opacity .2s;
    position: absolute;
    inset: 0% 0% auto auto
}

.modal-close_btn:hover {
    color: #444
}

.modal-close_btn.cc-video {
    color: var(--neutral-0)
}

.sr-only {
    white-space: nowrap;
    border: 0 solid #0000;
    width: 1px;
    height: 1px;
    margin-top: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden
}

.modal-close_area {
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0
}

.u-mb-0 {
    margin-bottom: 0
}

.u-mb-1 {
    margin-bottom: 1em
}

.aspect-ratio-100-57 {
    width: 100%;
    margin-bottom: 0;
    padding-top: 0%;
    display: none;
    position: static
}

.customer-stories-playicon {
    width: 96px;
    height: 96px;
    margin: auto;
    position: absolute;
    inset: 0%
}

.g-font-family-spacegrotesk {
    font-family: Spacegrotesk
}

.g-section-padding-xsmall {
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: static
}

.navbar-neutral-12 {
    z-index: 3;
    background-color: var(--shadow-lite);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 88px;
    display: flex;
    position: relative
}

.nested-list-item-bullets {
    margin-bottom: .125rem;
    padding-left: 0
}

.content-box-link {
    border: 0px none var(--stratus);
    background-color: var(--neutral-0);
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding: 0;
    text-decoration: none;
    display: flex
}

.home-test-card {
    grid-row-gap: 16px;
    border: 1px solid var(--neutral-6);
    background-color: var(--neutral-0);
    border-radius: 8px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    padding: 32px 24px 24px;
    display: flex;
    position: relative;
    overflow: hidden
}

.home-test-card.cc-summits-takeover {
    border-style: none;
    border-color: var(--neutral-11);
    color: #222;
    -webkit-text-stroke-color: var(--neutral-11);
    background-color: #222
}

.home-test-card_accent-color {
    background-color: #eddb7f;
    width: 100%;
    height: 16px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0
}

.home-test-card_accent-color.cc-blue {
    background-color: var(--primary-blue);
    background-color: #4245ff;
    height: 11px
}

.it-admin-content-layout {
    grid-column-gap: 64px;
    grid-row-gap: 56px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.subprocessors-table {
    margin-bottom: 2rem
}

.subprocessors-table-heading {
    border-bottom: 1px solid var(--neutral-7);
    display: flex
}

.subprocessors-table-cell {
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px
}

.subprocessors-table-cell.cc-head {
    color: var(--neutral-12);
    text-transform: uppercase;
    font-weight: 600
}

.subprocessors-table-cell.cc-territory {
    width: 50%
}

.snowpark-item_image-wrapper {
    width: 100%;
    margin-bottom: 1rem;
    padding-top: 55%;
    position: relative
}

.ai-blog-card {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    background-color: var(--neutral-0);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1.5fr;
    grid-auto-columns: 1fr;
    padding: 24px;
    text-decoration: none;
    display: grid;
    box-shadow: 4px 0 24px #1c1c1c29
}

.invert-colors {
    filter: invert()
}

.countdown {
    color: var(--neutral-1);
    height: 30px;
    margin-bottom: 1.5rem;
    font-family: Spacegrotesk;
    font-size: 1.25rem;
    line-height: 1.5
}

.ai-blog-card_bottom-content {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    display: flex
}

.summits-takeover-card,.snowpark-bottom-content {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    display: flex
}

.snowpark-feature-item {
    flex-direction: column;
    display: flex
}

.hero-summit-button-wrapper {
    background-color: #fff;
    border-radius: 8px;
    width: 152px;
    margin: auto;
    padding: 16px 12px 16px 16px;
    text-decoration: none;
    position: absolute
}

.hero-summit-button-wrapper.g-shadow-100 {
    padding: 4px
}

.accordion-trigger-nested {
    z-index: 3;
    background-color: var(--neutral-0);
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    padding: 10px 24px;
    text-decoration: none;
    display: flex;
    position: sticky;
    top: 0
}

.header-4 {
    color: var(--neutral-12);
    font-family: "Lato 2";
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 150%
}

.blog-authors-collection-list {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    flex-flow: row;
    display: flex
}

.video-wrapper-modal {
    width: 100%;
    max-width: 946px;
    margin-bottom: 32px
}

.no-text-decoration {
    text-decoration: none
}

.accordion-mobile-trigger {
    justify-content: space-between;
    display: flex
}

.guide-banner {
    background-color: var(--shadow-lite);
    padding-top: 3rem;
    padding-bottom: 3rem
}

.guide-banner.g-mg-top-large.g-mg-bottom-large.blog-banner-color {
    background-color: #ebebeb;
    background-image: none
}

.guide-banner-image {
    object-fit: contain;
    width: 100%;
    height: 346px
}

.main-nav-wrapper {
    height: 80px
}

.g2-desktop-report-img {
    margin-bottom: 2rem
}

.section-black {
    background-color: var(--black)
}

.link-color-light-blue {
    color: #90d8f8
}

.sales-gif {
    z-index: 2;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    inset: 0%
}

.section-cta-white-version {
    background-color: var(--neutral-4);
    background-image: linear-gradient(120deg,#2fb2af33,#fbd2ce33);
    padding-top: 4rem;
    padding-bottom: 4rem
}

.newsletter-form {
    margin-bottom: 1rem
}

.section-python-features {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex
}

.div-block-27 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 2.5rem;
    display: grid
}

.python-icon {
    width: 32px;
    height: 32px;
    margin-top: 8px;
    margin-bottom: 1rem
}

.grid-4 {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 1rem
}

.div-block-29 {
    background-color: #faf3cf00;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    display: flex;
    position: relative
}

.python-modal-container {
    background-color: #00000073;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: none;
    position: absolute;
    inset: 0%
}

.python-modal {
    background-color: var(--neutral-0);
    flex-direction: row;
    align-items: center;
    width: 600px;
    height: 450px;
    display: flex;
    position: relative
}

.grid-5 {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    height: 100%
}

.python-modal-image {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd6fd_TG1_RevenuePlanning_2x.webp);
    background-position: 0 0;
    background-size: cover
}

.python-modal-textarea {
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem
}

.python-modal-closebtn {
    cursor: pointer;
    background-color: #dedede;
    border-radius: 100px;
    padding: 5px 10px;
    position: absolute;
    inset: 1% 1% auto auto
}

.features-text-holder {
    flex-direction: column;
    justify-content: flex-end;
    display: block
}

.features-text-holder.cc-python {
    flex-flow: column;
    justify-content: flex-start;
    padding-left: 24px;
    padding-right: 24px;
    display: flex
}

.image-19 {
    opacity: .52;
    border: 10px solid #fff3;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    padding-left: 0;
    padding-right: 0;
    box-shadow: 0 2px 5px #0003
}

.weekly-demo-content-section {
    background-color: var(--neutral-1)
}

.weekly-demo-content-section.g-section-padding-small.section-black {
    background-color: var(--black)
}

.step-nav-div {
    align-self: center
}

.fs-toc_h-trigger {
    display: none
}

.content-align-center {
    justify-content: center;
    align-items: flex-start
}

.content-align-center.tableau {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start
}

.share-link-block-2 {
    background-color: #8f8f8f;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    transition: background-color .2s;
    display: flex
}

.share-link-block-2:hover {
    background-color: #c7c7c7
}

.header-6-2 {
    color: #000;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 140%
}

.paragraph-3-3 {
    color: #575757;
    font-size: .75rem;
    line-height: 150%
}

.paragraph-1-3 {
    color: #575757;
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%
}

.grid-section {
    background-color: var(--neutral-0);
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    display: flex
}

.pricing-check-cell {
    text-align: left;
    border-right: 1px solid #bec3c7;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 16%;
    padding: 15px 20px;
    display: flex
}

.pricing-description-cell-2 {
    background-color: #f5f5f5;
    border-right: 1px solid #bec3c7;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 22%;
    padding: 15px 20px;
    display: flex
}

.pricing-rows-titles {
    background-color: var(--neutral-0);
    height: 50px;
    margin-bottom: 10px;
    padding-top: 40px;
    padding-bottom: 20px;
    display: flex;
    position: sticky;
    top: 0
}

.div-block-118 {
    width: 40%
}

.pricing-rows-2 {
    border-bottom: 1px solid #bec3c7;
    display: flex
}

.pricing-description-col-titles-2 {
    justify-content: center;
    align-items: flex-end;
    width: 22%;
    display: flex
}

.matrix-title {
    color: var(--black);
    text-align: left;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-left: 20px;
    font-family: Dmsans,sans-serif;
    font-size: 1vw;
    font-weight: 700;
    line-height: 150%
}

.pricing-check-column-titles {
    text-align: center;
    justify-content: center;
    align-items: flex-end;
    width: 15%;
    padding-left: 15px;
    padding-right: 15px;
    display: flex
}

.matrix-copy {
    color: var(--black);
    text-align: left;
    -webkit-text-stroke-color: var(--black);
    flex: 1;
    padding-top: 0;
    padding-bottom: 0;
    font-family: Dmsans,sans-serif;
    font-size: 1vw;
    font-weight: 400;
    line-height: 117%
}

.tableau-e-book {
    background-color: var(--neutral-4);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: block
}

.section-9 {
    background-image: linear-gradient(120deg,#2fb2af33,#fbd2ce33)
}

.tableau-banner {
    background-color: var(--neutral-4);
    background-image: linear-gradient(120deg,#2fb2af33,#fbd2ce33);
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: none
}

.box-shadow {
    box-shadow: 0 2px 5px #0003
}

.box-shadow.embedded-whitepaper-image {
    display: inline-block;
    transform: rotate(-7deg)
}

.quote-mod {
    background-color: var(--neutral-4)
}

.ebook-embedded-img {
    transform: rotate(7deg)
}

.quick-stack-10 {
    grid-column-gap: 100px;
    grid-row-gap: 100px;
    color: var(--neutral-9);
    margin-bottom: 46px
}

.bread-crumb-link-white,.bread-crumb-link-white.w--current {
    color: var(--neutral-0)
}

.sigma-vs-salesforce-ebook-image {
    flex: 0 auto
}

.bold-white {
    color: #fff;
    letter-spacing: 0;
    font-weight: 500
}

.impact-award-img {
    max-width: 150px;
    margin-bottom: 10px
}

.thank-you-toc-cta-card {
    background-color: var(--insight);
    border-radius: 4px;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px;
    display: flex
}

.thank-you-toc-wrapper {
    margin-bottom: 2.5rem;
    display: flex;
    position: sticky;
    top: 24px
}

.chip-steps {
    border: 2px solid var(--grass);
    text-transform: uppercase;
    background-color: #d5f0ef00;
    border-radius: 100px;
    padding-left: 8px;
    padding-right: 8px;
    font-family: DM Mono;
    font-size: .75rem;
    display: inline-block
}

.section-summit {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd78d_summit-green-header-sm.webp);
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: contain
}

.free-trial-form-header {
    background-image: linear-gradient(#000,#000);
    padding-top: 8px;
    padding-bottom: 8px
}

.global-styles {
    display: block;
    position: fixed;
    inset: 0% auto auto 0%
}

.text-color-white {
    color: #fff
}

.padding-section-medium {
    padding-top: 5rem;
    padding-bottom: 5rem
}

.margin-vertical {
    margin-left: 0;
    margin-right: 0
}

.padding-section-large {
    padding-top: 7rem;
    padding-bottom: 7rem
}

.margin-bottom,.margin-bottom.margin-xxsmall {
    margin-top: 0;
    margin-left: 0;
    margin-right: 0
}

.text-align-center {
    text-align: center
}

.text-align-center.margin-top-small.journey-button {
    margin-top: 0
}

.text-align-center.margin-bottom-small {
    z-index: 1;
    position: relative
}

.text-align-center.text-color-light.no-margin-bottom {
    margin-bottom: 0
}

.text-align-center.text-color-sky.text-size-3rem {
    font-size: 3rem
}

.text-align-center.text-color-sky.text-size-4rem {
    font-size: 4rem
}

.max-width-large {
    width: 100%;
    max-width: 48rem
}

.max-width-large.refined {
    max-width: 46rem
}

.padding-top {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0
}

.max-width-full {
    width: 100%;
    max-width: none
}

.text-rich-text h6 {
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: 1rem
}

.text-rich-text h3 {
    font-size: 2rem;
    line-height: 2.7rem
}

.text-rich-text h4 {
    font-size: 1.5rem
}

.text-rich-text h5 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5rem
}

.fs-styleguide_label {
    color: #fff;
    background-color: #2d62ff;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .25rem .75rem .3rem;
    font-weight: 600;
    display: flex
}

.fs-styleguide_label.is-tag {
    background-color: #dd23bb
}

.text-size-tiny {
    font-size: .75rem
}

.text-size-tiny.text-style-allcaps {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    display: flex
}

.nav_menu_link {
    color: #fff;
    padding: 1rem
}

.heading-style-h2 {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 2.9rem
}

.fs-styleguide_section-header {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border-bottom: 1px solid #eee;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    padding-bottom: 3rem;
    line-height: 1.4;
    display: grid
}

.padding-section-large-2 {
    padding-top: 8rem;
    padding-bottom: 8rem
}

.icon-1x1-medium {
    width: 2rem;
    height: 2rem
}

.fs-styleguide_hero-label {
    color: #000;
    text-transform: uppercase;
    background-color: #eee;
    border-radius: .25rem;
    padding: .25rem .375rem;
    font-size: .75rem;
    font-weight: 500;
    text-decoration: none
}

.padding-custom3 {
    padding: 3.5rem
}

.heading-style-h6-2 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5
}

.spacer-xxhuge {
    width: 100%;
    padding-top: 12rem
}

.fs-styleguide_background {
    border: 1px solid #0000001a;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    display: flex
}

.background-color-secondary {
    background-color: #f0ff45
}

.spacer-xhuge {
    width: 100%;
    padding-top: 8rem
}

.overflow-visible {
    overflow: visible
}

.fs-styleguide_header-block {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    place-items: center start;
    display: grid
}

.pointer-events-none {
    pointer-events: none
}

.margin-xsmall {
    margin: .5rem
}

.icon-1x1-large {
    width: 2.5rem;
    height: 2.5rem
}

.margin-horizontal {
    margin-top: 0;
    margin-bottom: 0
}

.fs-styleguide_item-header {
    border-bottom: 1px solid #0000001a;
    width: 100%;
    padding-bottom: 2rem
}

.padding-bottom {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0
}

.fs-styleguide_heading-header {
    font-size: 6rem
}

.fs-styleguide_heading-header.is-white {
    color: var(--neutral-5)
}

.fs-styleguide_item-wrapper {
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    display: flex
}

.text-weight-xbold {
    font-weight: 800
}

.fs-styleguide_section {
    grid-column-gap: 6rem;
    grid-row-gap: 6rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    place-items: start;
    display: grid
}

.fs-styleguide_section.is-vertical {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-columns: 1fr
}

.icon-1x1-small {
    flex: none;
    width: 1rem;
    height: 1rem
}

.form_checkbox {
    flex-direction: row;
    align-items: center;
    margin-bottom: .5rem;
    padding-left: 0;
    display: flex
}

.padding-small {
    padding: 1rem
}

.fs-styleguide_header {
    color: #fff;
    background-color: #363636
}

.padding-vertical {
    padding-left: 0;
    padding-right: 0
}

.form_input {
    background-color: #0000;
    border: 1px solid #eee;
    min-height: 3rem;
    margin-bottom: .75rem;
    padding: .5rem 1rem
}

.form_input::placeholder,.form_input.is-select-input {
    color: #222
}

.form_input.is-text-area {
    min-height: 8rem;
    padding-top: .75rem
}

.pointer-events-auto {
    pointer-events: auto
}

.max-width-medium-2 {
    width: 100%;
    max-width: 32rem
}

.text-color-alternate {
    color: #fff
}

.padding-horizontal {
    padding-top: 0;
    padding-bottom: 0
}

.text-weight-medium {
    font-weight: 500
}

.spacer-medium {
    width: 100%;
    padding-top: 2rem
}

.text-style-muted {
    opacity: .6
}

.margin-custom1 {
    margin: 1.5rem
}

.text-size-regular {
    font-size: 1rem
}

.fs-styleguide_spacing-all {
    display: none
}

.form_component {
    margin-bottom: 0
}

.spacer-xxlarge {
    width: 100%;
    padding-top: 5rem
}

.text-align-left {
    text-align: left
}

.spacer-huge {
    width: 100%;
    padding-top: 6rem
}

.text-style-strikethrough {
    text-decoration: line-through
}

.margin-xxlarge {
    margin: 5rem
}

.margin-small {
    margin: 1rem
}

.hide {
    display: none
}

.h1-larger {
    text-wrap: balance;
    font-size: 3.75rem;
    line-height: 4rem
}

.overflow-scroll-2 {
    overflow: scroll
}

.margin-tiny-2 {
    margin: .125rem
}

.padding-xhuge {
    padding: 8rem
}

.max-width-small {
    width: 100%;
    max-width: 20rem
}

.icon-height-small {
    height: 1rem
}

.padding-xxhuge {
    padding: 12rem
}

.text-color-primary {
    color: #000
}

.padding-large {
    padding: 3rem
}

.aspect-ratio-portrait {
    aspect-ratio: 2/3;
    object-fit: cover
}

.button-group {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.z-index-1 {
    z-index: 1;
    position: relative
}

.text-align-right {
    text-align: right
}

.padding-section-small {
    padding-top: 3rem;
    padding-bottom: 3rem
}

.aspect-ratio-landscape {
    aspect-ratio: 3/2;
    object-fit: cover
}

.text-weight-normal {
    font-weight: 400
}

.padding-custom1 {
    padding: 1.5rem
}

.form_radio {
    flex-direction: row;
    align-items: center;
    margin-bottom: .5rem;
    padding-left: 0;
    display: flex
}

.text-weight-light {
    text-wrap: pretty;
    font-weight: 300
}

.text-weight-light.max-width-medium.pad-2rem {
    margin-bottom: 2rem
}

.fs-styleguide_classes {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.spacer-xlarge {
    width: 100%;
    padding-top: 4rem
}

.padding-0 {
    padding: 0
}

.overflow-auto-2 {
    overflow: auto
}

.text-style-italic {
    font-style: italic
}

.max-width-xlarge {
    width: 100%;
    max-width: 64rem
}

.margin-xxhuge {
    margin: 12rem
}

.text-weight-semibold {
    font-weight: 600
}

.padding-custom2 {
    padding: 2.5rem
}

.fs-styleguide_2-col {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    display: grid
}

.fs-styleguide_2-col.is-align-start {
    align-items: start
}

.max-width-xxlarge {
    width: 100%;
    max-width: 80rem
}

.fs-styleguide_empty-box {
    z-index: -1;
    background-color: #2d40ea0d;
    border: 1px dashed #2d40ea;
    min-width: 3rem;
    height: 3rem;
    position: relative
}

.text-color-secondary {
    color: #222
}

.spacer-tiny {
    width: 100%;
    padding-top: .125rem
}

.aspect-ratio-widescreen {
    aspect-ratio: 16/9;
    object-fit: cover
}

.heading-style-h4-2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.4
}

.margin-large {
    margin: 3rem
}

.margin-0 {
    margin: 0
}

.icon-height-large {
    height: 3rem
}

.margin-xxsmall {
    margin: .25rem
}

.form_message-success {
    color: #114e0b;
    background-color: #cef5ca;
    padding: 1.25rem
}

.aspect-ratio-square {
    aspect-ratio: 1;
    object-fit: cover
}

.background-color-alternate {
    background-color: #fff;
    justify-content: center;
    align-items: center
}

.heading-style-h3 {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 2.6rem;
    display: block
}

.fs-styleguide_heading-medium {
    font-family: Dmsans,sans-serif;
    font-size: 4rem;
    font-weight: 500
}

.margin-xlarge {
    margin: 4rem
}

.button {
    border: 1px solid var(--shadow);
    color: var(--shadow);
    text-align: center;
    white-space: nowrap;
    background-color: #f0ff45;
    border-radius: 8rem;
    padding: .65rem 1.5rem;
    font-family: Dmmono,sans-serif;
    font-weight: 400;
    transition: all .275s,all .2s;
    position: static
}

.button:hover {
    background-color: var(--neutral-0)
}

.button.is-text {
    color: #000;
    background-color: #0000;
    border: 2px solid #0000
}

.button.is-secondary {
    color: #000;
    white-space: nowrap;
    word-break: normal;
    background-color: #0000;
    border: 1px solid #222;
    font-family: Dmmono,sans-serif
}

.button.is-secondary:hover {
    background-color: #9fa8a745
}

.button.is-secondary.background-is-shadow {
    border-color: var(--nimbus);
    color: var(--nimbus)
}

.button.is-secondary.background-is-shadow:hover {
    background-color: var(--shadow-lite)
}

.button.is-secondary.is-white {
    background-color: var(--neutral-0)
}

.button.is-secondary.is-white:hover {
    background-color: var(--neutral-8)
}

.button.is-secondary.is-white.button-block {
    margin-bottom: 1rem;
    margin-right: 1rem
}

.button.is-secondary.is-white.button-cal-google {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681e9786eb7f192689e866d3_googlecalendar-black.svg);
    background-size: 24px
}

.button.is-secondary.is-white.button-cal-outlook {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681e978538863926dae1058d_outlook-black.svg);
    background-position: 18px;
    background-size: 28px
}

.button.is-secondary.is-white.is-empty {
    border-top-color: var(--nimbus);
    border-right-color: var(--nimbus);
    border-bottom-color: var(--nimbus);
    border-left-color: var(--nimbus);
    color: var(--nimbus);
    background-color: #0000
}

.button.is-secondary.is-yellow {
    background-color: var(--insight)
}

.button.is-secondary.is-small {
    padding: .3rem 1rem;
    font-size: 14px
}

.button.is-secondary.is-white-empty {
    border-color: var(--stratus);
    color: var(--nimbus)
}

.button.is-large {
    padding: 1rem 2rem
}

.button.is-large.background-is-shadow:hover {
    background-color: var(--shadow-lite)
}

.button.is-icon {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex
}

.button.is-small {
    padding: .5rem 1.25rem
}

.button.is-small.background-is-shadow:hover {
    background-color: var(--shadow-lite)
}

.button.background-color-black {
    color: var(--neutral-0);
    background-color: #000
}

.button.bacground-is-shadow:hover {
    background-color: var(--shadow-lite)
}

.button.margin-top-small.pop-up-modal_btn {
    margin-top: 56%
}

.button.margin-top-small.pop-up-modal_btn.is-secondary.is-white {
    margin-top: 45%
}

.button.da-live {
    display: none
}

.button.is-dark {
    background-color: var(--shadow);
    color: var(--nimbus)
}

.button.is-green {
    background-color: var(--grass)
}

.button.is-green:hover {
    background-color: var(--neutral-0);
    color: var(--shadow)
}

.button.show-mobile-portrait {
    display: none
}

.button.shadow-large.z-index-2.pop-up-modal_btn {
    margin-top: 3rem
}

.button.product-launch-feature-btn {
    background-color: var(--neutral-0);
    margin-top: auto
}

.margin-medium {
    margin: 2rem
}

.padding-left {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0
}

.align-center-2 {
    margin-left: auto;
    margin-right: auto
}

.text-style-allcaps {
    text-transform: uppercase
}

.text-style-allcaps.text-size-small.text-color-white.text-family-mono {
    font-family: DM Mono
}

.text-style-allcaps.text-size-small.text-family-mono {
    letter-spacing: 1px;
    margin-left: 0;
    margin-right: auto;
    padding: 0;
    font-family: DM Mono
}

.text-style-allcaps.text-size-small.text-family-mono.header-nudge {
    margin-left: .2rem
}

.text-style-allcaps.text-family-mono.text-size-small {
    color: var(--stratus);
    font-family: Dmmono,sans-serif
}

.text-style-allcaps.text-family-mono.text-size-small.margin-bottom-tiny {
    color: var(--shadow-lite);
    margin-left: 0;
    font-family: Dmmono,sans-serif;
    display: block
}

.text-style-allcaps.text-family-mono.text-size-small-2 {
    color: #9fa8a7
}

.text-style-allcaps.text-style-mono {
    font-family: Dmmono,sans-serif
}

.text-style-allcaps.text-style-mono.bold {
    font-weight: 700
}

.text-style-allcaps.text-style-bold {
    font-weight: 700
}

.text-style-allcaps.text-style-mono-bold.text-style-mono {
    font-weight: 500
}

.fs-styleguide_spacing {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    background-image: linear-gradient(#fff0,#2d40ea1a);
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    place-content: start;
    place-items: start stretch;
    display: grid;
    position: relative
}

.margin-custom2 {
    margin: 2.5rem
}

.nav_button {
    padding: 1rem
}

.text-weight-bold {
    font-weight: 700
}

.padding-medium {
    height: 100%;
    padding: 2rem
}

.form_radio-icon {
    width: .875rem;
    height: .875rem;
    margin-top: 0;
    margin-left: 0;
    margin-right: .5rem
}

.form_radio-icon.w--redirected-checked {
    border-width: .25rem;
    width: .875rem;
    height: .875rem
}

.form_radio-icon.w--redirected-focus {
    width: .875rem;
    height: .875rem;
    box-shadow: 0 0 .25rem 0 #3898ec
}

.fs-styleguide_background-space {
    width: 1px;
    height: 1px;
    margin: 5rem
}

.text-size-small {
    word-break: normal;
    font-size: .875rem;
    line-height: 1.5rem
}

.padding-xxlarge {
    padding: 5rem
}

.text-size-large {
    font-size: 1.5rem;
    line-height: 2.1rem
}

.text-size-large.text-style-italic {
    text-wrap: pretty
}

.form_message-error {
    color: #3b0b0b;
    background-color: #f8e4e4;
    margin-top: .75rem;
    padding: .75rem
}

.padding-xsmall {
    padding: .5rem
}

.spacer-xsmall {
    width: 100%;
    padding-top: .5rem
}

.container-large-4 {
    width: 100%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto
}

.spacing-clean {
    margin: 0;
    padding: 0
}

.fs-styleguide_4-col {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    display: grid
}

.heading-style-h5 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5
}

.spacer-small {
    width: 100%;
    padding-top: 1rem
}

.fs-styleguide_3-col {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: stretch;
    width: 100%;
    display: grid
}

.fs-styleguide_3-col.is-align-start {
    align-items: start
}

.fs-styleguide_item {
    grid-column-gap: 1.125rem;
    grid-row-gap: 1.125rem;
    border-bottom: 1px solid #0000001a;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    place-content: start;
    place-items: start;
    padding-bottom: 3rem;
    display: grid;
    position: relative
}

.fs-styleguide_item.is-stretch {
    justify-items: stretch
}

.fs-styleguide_item.background-color-primary,.fs-styleguide_item.background-color-secondary,.fs-styleguide_item.background-color-tertiary {
    padding: 14px
}

.text-style-nowrap {
    white-space: nowrap
}

.margin-huge {
    margin: 6rem
}

.nav_component {
    background-color: #000;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: relative;
    inset: 0% 0% auto
}

.padding-xxsmall {
    padding: .25rem
}

.z-index-2 {
    z-index: 2;
    position: relative
}

.margin-top,.margin-top.margin-medium,.margin-top.margin-small {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0
}

.margin-xhuge {
    margin: 8rem
}

.padding-huge {
    padding: 6rem
}

.fs-styleguide_spacer-box {
    background-color: #2d40ea1a;
    border: 1px dashed #2d40ea;
    width: 100%;
    position: relative
}

.padding-global {
    padding-left: 2.5rem;
    padding-right: 2.5rem
}

.max-width-xxsmall {
    width: 100%;
    max-width: 12rem
}

.text-style-link {
    color: #000;
    text-decoration: underline
}

.padding-tiny {
    padding: .125rem
}

.margin-right {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0
}

.max-width-xsmall {
    width: 100%;
    max-width: 16rem
}

.background-color-tertiary {
    background-color: var(--nimbus)
}

.text-size-medium-2 {
    font-family: Dmsans,sans-serif;
    font-size: 1.25rem
}

.padding-xlarge {
    padding: 4rem
}

.margin-left {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0
}

.fs-styleguide_row {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    flex-direction: row;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.spacer-large {
    padding-top: 3rem
}

.background-color-primary {
    background-color: var(--shadow);
    color: #fff
}

.container-medium {
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    display: flex
}

.text-style-quote {
    border-left: .25rem solid #e2e2e2;
    margin-bottom: 0;
    padding: 0 1.25rem;
    font-size: 1.25rem;
    line-height: 1.5
}

.spacer-xxsmall {
    width: 100%;
    padding-top: .25rem
}

.fs-styleguide_1-col {
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    display: grid
}

.fs-styleguide_message {
    color: #5e5515;
    background-color: #fcf8d8;
    border-radius: .25rem;
    padding: .25rem .5rem;
    font-size: .875rem
}

.nav_logo {
    width: 10rem
}

.margin-custom3 {
    margin: 3.5rem
}

.layer-2 {
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 0%
}

.form_checkbox-icon {
    border-radius: .125rem;
    width: .875rem;
    height: .875rem;
    margin: 0 .5rem 0 0
}

.form_checkbox-icon.w--redirected-checked {
    background-size: 90%;
    border-radius: .125rem;
    width: .875rem;
    height: .875rem;
    margin: 0 .5rem 0 0
}

.form_checkbox-icon.w--redirected-focus {
    border-radius: .125rem;
    width: .875rem;
    height: .875rem;
    margin: 0 .5rem 0 0;
    box-shadow: 0 0 .25rem 0 #3898ec
}

.nav_container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.icon-height-medium {
    height: 2rem
}

.padding-right {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0
}

.fs-style_layout {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.fs-select_toggle-5 {
    border: 2px solid #000;
    border-radius: .25rem;
    padding: .75rem 4rem .75rem 1rem
}

.fs-select_toggle-5:focus-visible,.fs-select_toggle-5[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.footer_link {
    color: #acacac;
    text-align: right;
    letter-spacing: .02rem;
    font-size: 1rem;
    text-decoration: none
}

.footer_link:hover {
    opacity: .8
}

.footer_link:focus-visible,.footer_link[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-checkbox_field-6 {
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    max-width: 30rem;
    margin-bottom: 0;
    padding: 2rem 2rem 2rem 7rem;
    position: relative
}

.fs-checkbox_field-6:hover {
    color: #696969;
    border-color: #696969
}

.section_icons.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-checkbox_label-7 {
    width: auto;
    margin-bottom: 0;
    font-weight: 500;
    display: none;
    position: absolute;
    inset: 0% auto auto 0%
}

.fs-rangeslider_input-1 {
    display: none
}

.fs-checkbox_field-2 {
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    padding: .5rem 1rem;
    font-weight: 500;
    display: flex;
    position: relative
}

.fs-checkbox_field-2:hover {
    color: #696969;
    border-color: #696969
}

.fs-checkbox_field-2.is-active {
    color: #fff;
    background-color: #501aff;
    border-color: #501aff
}

.fs-tag_text-3 {
    font-weight: 500
}

.fs-style_dropdown-toggle {
    background-color: #f3f2f8;
    border-bottom: 2px solid #fff;
    width: 100%;
    padding: 1rem 2rem 1rem 1.5rem
}

.fs-style_dropdown-toggle:focus-visible,.fs-style_dropdown-toggle[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-checkbox_button-1 {
    opacity: 1;
    border-style: none;
    border-radius: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    inset: 0% 0% auto;
    box-shadow: 1px 1px 3px #0000
}

.fs-checkbox_button-1.w--redirected-checked {
    background-color: #0000;
    background-image: none
}

.fs-checkbox_button-1.w--redirected-focus {
    box-shadow: none
}

.fs-checkbox_button-1.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-checkbox_button-1.no-bg {
    width: auto
}

.fs-empty_text-2 {
    font-size: 2rem;
    font-weight: 400
}

.section_emptys.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-reset_block-2 {
    background-color: #000;
    border-radius: 999rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1rem;
    display: flex
}

.heading-medium {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2
}

.fs-radio_field-4 {
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    padding: 1rem 1.5rem;
    font-weight: 500;
    display: flex;
    position: relative
}

.fs-radio_field-4:hover {
    color: #696969;
    border-color: #696969
}

.fs-radio_field-4.is-active {
    color: #fff;
    background-color: #501aff;
    border-color: #501aff
}

.fs-rangeslider_handle-text-1 {
    text-align: center;
    margin-bottom: -2.25rem;
    margin-left: -.4rem;
    font-size: 1.25rem;
    position: absolute;
    inset: auto auto 0% 0%
}

.section_sort.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-style_form-block-icon {
    width: 3rem;
    margin-right: .5rem
}

.fs-style_block-header {
    border-bottom: 1px solid #f0f0f0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    display: flex
}

.fs-empty-2 {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 2px solid #000;
    border-radius: .5rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    place-content: center;
    place-items: center start;
    width: 100%;
    padding: 2.5rem;
    display: grid
}

.fs-rangeslider_wrapper-3 {
    align-items: center;
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    display: block;
    position: relative
}

.fs-tag_close-block-2 {
    background-color: #000;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    padding: .25rem;
    display: flex
}

.fs-checkbox_button-9 {
    border-radius: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    inset: 0%
}

.fs-checkbox_button-9:focus-visible,.fs-checkbox_button-9[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-checkbox_field-3 {
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    padding: 1rem 1.5rem 1rem 1.25rem;
    font-weight: 500;
    display: flex;
    position: relative
}

.fs-checkbox_field-3:hover {
    color: #696969;
    border-color: #696969
}

.fs-checkbox_field-3.is-active {
    color: #fff;
    background-color: #501aff;
    border-color: #501aff
}

.fs-select_toggle-1 {
    border: 2px solid #000;
    border-radius: .25rem;
    padding: .75rem 4rem .75rem 1rem
}

.fs-select_toggle-1:focus-visible,.fs-select_toggle-1[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-radio_icon-1 {
    z-index: 1;
    flex: none;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
    position: relative
}

.fs-empty_image-2 {
    background-color: #f0f0f0;
    border-radius: 99rem;
    width: 4rem;
    margin-bottom: 1rem
}

.fs-tag_close-icon-2 {
    width: 1.75rem
}

.fs-checkbox_toggle-7 {
    cursor: pointer;
    border-radius: 999rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 2.5rem;
    margin-bottom: 0;
    margin-right: 1.5rem;
    padding: .25rem;
    display: flex;
    position: relative
}

.fs-rangeslider_track-4 {
    background-image: linear-gradient(#fffc,#fffc),url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd7b8_waves.svg);
    background-position: 0 0,50%;
    background-repeat: repeat,repeat-x;
    background-size: auto,contain;
    height: .5rem;
    margin-left: auto;
    margin-right: auto;
    position: relative
}

.fs-checkbox_button-4 {
    border: 1px #000;
    border-radius: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    inset: 0%;
    box-shadow: 1px 1px 3px #0000
}

.fs-checkbox_button-4.w--redirected-checked {
    background-color: #0000;
    background-image: none;
    border-style: none
}

.fs-checkbox_button-4.w--redirected-focus {
    box-shadow: none;
    border-style: none;
    border-radius: 0
}

.fs-checkbox_button-4.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-rangeslider_input-3 {
    display: none
}

.fs-radio_icon-6 {
    width: 4rem;
    height: 4rem;
    margin-top: 2.25rem;
    margin-left: 1.5rem;
    position: absolute;
    inset: 0% auto auto 0%
}

.fs-empty-1 {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 2px solid #000;
    border-radius: .5rem;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    place-content: start;
    place-items: start;
    width: 100%;
    padding: 2.5rem 2rem;
    display: grid
}

.footer_finsweet-icon {
    width: 1.6rem
}

.disclaimer.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-rangeslider_fill-4 {
    background-color: #fff;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd7b8_waves.svg);
    background-position: 50%;
    background-size: contain;
    border-radius: 999px;
    width: 20%;
    height: 100%;
    position: absolute
}

.fs-empty_paragraph-1 {
    color: #575757
}

.fs-radio_label-2 {
    margin-bottom: 0;
    font-weight: 500
}

.fs-style_list-item-icon {
    background-color: #501aff;
    width: 2rem;
    min-width: 2rem;
    padding: .2rem
}

.fs-checkbox_toggle-dot-9 {
    z-index: 2;
    background-color: #000;
    border-radius: .25rem;
    flex: none;
    width: 2rem;
    height: 2rem;
    margin-top: .5rem;
    margin-left: .5rem;
    display: block;
    position: absolute;
    inset: 0% auto 0% 0%
}

.fs-checkbox_button-7 {
    border-radius: 999rem;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    inset: 0%
}

.fs-checkbox_button-7:focus-visible,.fs-checkbox_button-7[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-checkbox_label-8 {
    margin-bottom: 0;
    font-weight: 500;
    display: none
}

.fs-style_dropdown-icon {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1.5rem
}

.fs-checkbox_button-8 {
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    inset: 0%
}

.fs-checkbox_button-8:focus-visible,.fs-checkbox_button-8[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-rangeslider_wrapper-1 {
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;
    padding: 1rem .5rem;
    display: block;
    position: relative
}

.fs-radio_icon-5 {
    z-index: 2;
    width: 4rem;
    margin-bottom: .5rem;
    position: relative
}

.fs-radio_field-5 {
    color: #000;
    text-align: center;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 30rem;
    margin-bottom: 0;
    padding: 2rem;
    display: flex;
    position: relative
}

.fs-radio_field-5:hover {
    color: #696969;
    border-color: #696969
}

.fs-style_form {
    background-color: #fff;
    border: 1px solid #d8d8d8;
    max-width: 90rem;
    margin-left: auto;
    margin-right: auto;
    position: relative
}

.footer_logo-link {
    position: relative
}

.footer_logo-link:focus-visible,.footer_logo-link[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-rangeslider_track-2 {
    background-color: #f0f0f0;
    border-radius: 999rem;
    height: .25rem;
    margin-left: auto;
    margin-right: auto;
    position: relative
}

.fs-tag_text-1 {
    font-weight: 500
}

.fs-style_grid-row {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    display: grid
}

.fs-tag_template-2 {
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 0;
    text-decoration: none;
    display: flex
}

.fs-tag_template-2:hover {
    opacity: .7
}

.fs-tag_template-2:focus-visible,.fs-tag_template-2[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-style_header {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border-bottom: 1px solid #0000001a;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    justify-content: start;
    place-items: center start;
    padding-bottom: 1.5rem;
    display: grid
}

.fs-radio_button-1 {
    border-style: none;
    border-radius: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    inset: 0%;
    box-shadow: 1px 1px 3px #0000
}

.fs-radio_button-1.w--redirected-focus {
    box-shadow: none
}

.fs-radio_button-1.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-style_block {
    border: 1px solid #0000001a;
    flex-direction: column;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    place-content: start;
    place-items: flex-start start;
    padding: 2rem;
    display: flex
}

.fs-checkbox_mask-8 {
    z-index: 1;
    background-color: #cecece;
    border-radius: 999rem;
    position: absolute;
    inset: 0%
}

.fs-style_components {
    background-color: #1a1a1a;
    margin-bottom: 0;
    padding: 6rem 4vw
}

.fs-reset_text-3 {
    font-weight: 500
}

.fs-select_link-block-icon-2 {
    width: 1.25rem;
    margin-right: .5rem
}

.fs-select_list-4.w--open {
    border: 2px solid #000;
    border-radius: .25rem;
    margin-top: .5rem
}

.footer_logo {
    width: 10rem
}

.fs-rangeslider_handle-left-4 {
    z-index: 1;
    color: #fff;
    cursor: grab;
    background-color: #000;
    border-radius: 999rem;
    flex-direction: row;
    flex: none;
    justify-content: center;
    align-items: center;
    padding: .25rem .75rem;
    font-size: 1rem;
    display: flex;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px #0000001a
}

.fs-rangeslider_handle-left-4:focus {
    background-color: #501aff
}

.fs-rangeslider_handle-left-4:focus-visible,.fs-rangeslider_handle-left-4[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-dropdown-1 {
    z-index: 998;
    margin-left: 0
}

.fs-checkbox_mask-7 {
    z-index: 1;
    background-color: #000;
    border-radius: 999rem;
    position: absolute;
    inset: 0%
}

.fs-checkbox_toggle-8 {
    cursor: pointer;
    border-radius: 999rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 2.5rem;
    height: 1rem;
    margin-bottom: 0;
    margin-right: 1.5rem;
    padding: .25rem;
    display: flex;
    position: relative
}

.fs-radio_column {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    align-items: center;
    min-height: 3rem;
    display: grid
}

.fs-rangeslider_handle-left-2 {
    z-index: 1;
    cursor: grab;
    background-color: #000;
    border-radius: 999rem;
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 10px #0000001a
}

.fs-rangeslider_handle-left-2:focus {
    background-color: #501aff
}

.fs-rangeslider_handle-left-2:focus-visible,.fs-rangeslider_handle-left-2[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-dropdown_icon-line-2 {
    background-color: #000;
    width: 100%;
    height: 2px
}

.fs-style_row {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    align-items: center;
    min-height: 3rem;
    display: grid
}

.fs-style_row.is-tag {
    flex-wrap: wrap;
    display: flex
}

.fs-rangeslider_input-4 {
    display: none
}

.fs-select_toggle-2 {
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .75rem 4rem .75rem 1rem;
    display: flex
}

.fs-select_toggle-2:focus-visible,.fs-select_toggle-2[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_field-5 {
    margin-bottom: 0;
    display: none
}

.fs-radio_label-1 {
    margin-bottom: 0;
    font-weight: 500;
    position: relative
}

.max-width-small-2 {
    max-width: 28rem
}

.fs-checkbox_row {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    align-items: start;
    min-height: 3rem;
    display: grid
}

.fs-checkbox_field-10 {
    color: #000;
    cursor: pointer;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;
    padding: 0;
    font-weight: 500;
    display: flex;
    position: relative
}

.fs-select_text-3 {
    color: #575757
}

.fs-dropdown_list-2.w--open {
    background-color: #0000;
    margin-top: .5rem;
    padding: 1rem 1.25rem;
    position: relative
}

.fs-select_field-6 {
    margin-bottom: 0;
    display: none
}

.fs-reset-3 {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .25rem 0;
    text-decoration: none;
    display: flex
}

.fs-reset-3:hover {
    opacity: .7
}

.fs-reset-3:focus-visible,.fs-reset-3[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-radio_field-2 {
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    padding: .5rem 1rem;
    font-weight: 500;
    display: flex;
    position: relative
}

.fs-radio_field-2:hover {
    color: #696969;
    border-color: #696969
}

.fs-radio_field-2.is-active {
    color: #501aff;
    border-color: #501aff
}

.fs-checkbox_block-icon-5 {
    width: 1.5rem
}

.fs-tag_template-3 {
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .5rem 1rem;
    text-decoration: none;
    display: flex;
    position: relative
}

.fs-tag_template-3:focus-visible,.fs-tag_template-3[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-dropdown_icon-block-2 {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;
    display: flex;
    position: relative
}

.fs-select-6 {
    z-index: 99;
    margin-left: 0
}

.fs-radio_icon-2 {
    flex: none;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1.5rem
}

.fs-style_grid-column {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid
}

.fs-style_list-item {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    justify-content: start;
    place-items: start;
    line-height: 1.7;
    display: grid
}

.fs-select-5 {
    z-index: 99;
    margin-left: 0
}

.fs-style_class {
    color: #1a1a1a;
    background-color: #1a6eff14;
    margin-left: .1rem;
    margin-right: .1rem;
    padding: .1rem .4rem;
    font-size: .9rem;
    font-weight: 500;
    display: inline-block
}

.fs-radio_button-5 {
    opacity: 1;
    border: 2px solid #000;
    border-radius: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    display: block;
    position: absolute;
    inset: 0%
}

.fs-radio_button-5:focus-visible,.fs-radio_button-5[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-radio_label-3 {
    margin-bottom: 0;
    font-weight: 500
}

.fs-select-1 {
    z-index: 99;
    margin-left: 0
}

.section_tags.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-select_field-2 {
    margin-bottom: 0;
    display: none
}

.fs-radio_button-6 {
    border: 2px solid #000;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 1rem;
    margin-left: 0;
    margin-right: 1rem;
    display: block;
    position: absolute;
    inset: 0% 0% auto auto;
    box-shadow: 1px 1px 3px #0000
}

.fs-radio_button-6.w--redirected-checked {
    background-color: #501aff;
    border-color: #501aff
}

.fs-radio_button-6.w--redirected-focus {
    box-shadow: none
}

.fs-radio_button-6.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-style_form-header {
    flex-direction: row;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    place-content: center flex-start;
    place-items: flex-end start;
    max-width: 90rem;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.fs-sort_button-1 {
    color: #000;
    background-color: #fff;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd7cc_arrow-up-down-1-black.svg);
    background-position: 12px;
    background-repeat: no-repeat;
    background-size: 1.75rem;
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .75rem 1.5rem .75rem 3rem;
    font-weight: 500;
    display: flex
}

.fs-sort_button-1:focus-visible,.fs-sort_button-1[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-sort_button-1.is-desc {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd7b7_arrow-up-1-black.svg)
}

.fs-sort_button-1.is-asc {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd7c3_arrow-down-1-black.svg)
}

.fs-select_text-4 {
    color: #575757
}

.fs-select_list-3.w--open {
    border: 2px solid #000;
    border-radius: .25rem;
    margin-top: 1rem
}

.fs-checkbox_label-10 {
    margin-bottom: 0;
    font-weight: 500
}

.fs-dropdown_label-2 {
    margin-right: 0;
    display: inline-block
}

.text-color-grey {
    color: #575757
}

.text-color-grey.text-style-mono {
    color: var(--stratus);
    font-family: Dmmono,sans-serif
}

.fs-checkbox_label-5 {
    z-index: 2;
    margin-bottom: 0;
    font-weight: 500;
    position: relative
}

.section_dropdowns.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-checkbox_button-2 {
    border-width: 2px;
    border-color: #000;
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0;
    margin-left: 0;
    margin-right: .75rem;
    box-shadow: 1px 1px 3px #0000
}

.fs-checkbox_button-2.w--redirected-checked {
    background-color: #501aff;
    background-size: .75rem;
    border-color: #fff
}

.fs-checkbox_button-2.w--redirected-focus {
    box-shadow: none
}

.fs-checkbox_button-2.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-style_dropdown {
    z-index: 0;
    width: 100%;
    max-width: 35rem;
    margin-top: auto;
    margin-left: 0;
    margin-right: 0;
    padding-top: 2rem
}

.fs-reset-4 {
    border: 2px solid #000;
    border-radius: .5rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    text-decoration: none;
    display: flex
}

.fs-reset-4:hover {
    opacity: .7
}

.fs-reset-4:focus-visible,.fs-reset-4[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-rangeslider_handle-text-2 {
    text-align: center;
    font-size: 1.25rem;
    position: relative
}

.fs-radio_label-4 {
    margin-bottom: 0;
    font-weight: 500;
    position: relative
}

.fs-radio_field-6 {
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    max-width: 30rem;
    margin-bottom: 0;
    padding: 2rem 2rem 2rem 7rem;
    position: relative
}

.fs-radio_field-6:hover {
    color: #696969;
    border-color: #696969
}

.fs-style_native {
    color: #fff;
    text-transform: none;
    background-color: #109155;
    margin-left: .1rem;
    margin-right: .1rem;
    padding: .1rem .4rem;
    font-size: .9rem;
    display: inline-block
}

.fs-rangeslider_wrapper-4 {
    align-items: center;
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    display: block;
    position: relative
}

.fs-checkbox_block-5 {
    z-index: 3;
    background-color: #501aff;
    border-radius: 0 0 0 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .5rem .5rem 1rem 1rem;
    display: flex;
    position: absolute;
    inset: 0% 0% auto auto
}

.fs-checkbox_toggle-9 {
    cursor: pointer;
    background-color: #f0f0f0;
    border-radius: .5rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 3rem;
    margin-bottom: 0;
    margin-right: 1.5rem;
    padding: .25rem .75rem;
    font-size: .85rem;
    display: flex;
    position: relative
}

.fs-rangeslider_handle-left-3 {
    z-index: 1;
    color: #fff;
    cursor: grab;
    background-color: #000;
    border-radius: .25rem;
    flex-direction: row;
    flex: none;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding: .25rem .5rem;
    font-size: 1rem;
    display: flex;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px #0000001a
}

.fs-rangeslider_handle-left-3:focus {
    background-color: #501aff
}

.fs-rangeslider_handle-left-3:focus-visible,.fs-rangeslider_handle-left-3[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-dropdown_icon-1 {
    color: #000;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1.25rem;
    font-size: 1rem
}

.footer_wrapper {
    flex-direction: row;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.fs-select_link-3 {
    background-color: #fff;
    border-bottom: 1px solid #e7e7e7;
    padding: .75rem 1rem
}

.fs-select_link-3:hover {
    opacity: .7
}

.fs-select_link-3:focus-visible,.fs-select_link-3[data-wf-focus-visible] {
    z-index: 1;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_link-3.w--current {
    color: #696969;
    background-color: #f0f0f0
}

.fs-rangeslider_fill-2 {
    background-color: #000;
    border-radius: 999px;
    width: 20%;
    height: 100%;
    position: absolute
}

.filter-platform-item {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border: 1px #333;
    border-radius: 0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;
    padding-left: 0;
    font-weight: 500;
    display: flex;
    position: relative
}

.filter-platform-item:hover {
    color: #696969;
    border-color: #696969
}

.filter-platform-item:active {
    background-color: #fff
}

.filter-platform-item.is-active {
    color: #fff;
    background-color: #501aff;
    border-color: #501aff
}

.filter-platform-item.is-active:active {
    background-color: #4089a7
}

.fs-style_css {
    font-style: italic;
    font-weight: 400
}

.fs-dropdown_toggle-2 {
    background-color: #f0f0f0;
    border: 2px solid #0000;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1.25rem;
    font-weight: 500;
    display: flex
}

.fs-dropdown_toggle-2:focus-visible,.fs-dropdown_toggle-2[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-radio_text-6 {
    color: #575757;
    font-size: .875rem;
    font-weight: 400
}

.fs-rangeslider_track-1 {
    background-color: #f0f0f0;
    border-radius: 999rem;
    width: 100%;
    height: .25rem;
    margin-left: auto;
    margin-right: auto;
    position: relative
}

.fs-dropdown-2 {
    width: 100%;
    margin-left: 0
}

.fs-rangeslider_input-2 {
    display: none
}

.fs-dropdown_group-2 {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    justify-content: start;
    place-items: start;
    display: grid
}

.fs-checkbox_label-3 {
    margin-bottom: 0;
    font-weight: 500
}

.fs-select_toggle-4 {
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .75rem 4rem .75rem 1rem;
    display: flex
}

.fs-select_toggle-4:focus-visible,.fs-select_toggle-4[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-icon {
    width: 3rem
}

.fs-checkbox_icon-1 {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .3rem
}

.fs-select_link-1 {
    background-color: #fff;
    border-bottom: 1px solid #e7e7e7;
    padding: .75rem 1rem
}

.fs-select_link-1:hover {
    opacity: .7
}

.fs-select_link-1:focus-visible,.fs-select_link-1[data-wf-focus-visible] {
    z-index: 1;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_link-1.w--current {
    color: #696969;
    background-color: #f0f0f0
}

.fs-select_link-4 {
    background-color: #fff;
    border-bottom: 1px solid #e7e7e7;
    padding: .75rem 1rem
}

.fs-select_link-4:hover {
    opacity: .7
}

.fs-select_link-4:focus-visible,.fs-select_link-4[data-wf-focus-visible] {
    z-index: 1;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_link-4.w--current {
    color: #696969;
    background-color: #f0f0f0
}

.fs-select_list-1.w--open {
    border: 2px solid #000;
    border-radius: .25rem;
    margin-top: 1rem
}

.fs-style_form-wrapper {
    grid-column-gap: 1.5rem;
    grid-row-gap: 2rem;
    flex-wrap: wrap;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    display: grid
}

.fs-style_link {
    color: #575757;
    text-decoration: underline
}

.fs-rangeslider_handle-right-2 {
    z-index: 1;
    cursor: grab;
    background-color: #000;
    border-radius: 999rem;
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 10px #0000001a
}

.fs-rangeslider_handle-right-2:focus {
    background-color: #501aff
}

.fs-rangeslider_handle-right-2:focus-visible,.fs-rangeslider_handle-right-2[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_list-2.w--open {
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    margin-top: 1rem
}

.fs-reset-1 {
    border: 2px solid #000;
    border-radius: 999rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .25rem 1rem .25rem .5rem;
    text-decoration: none;
    display: flex
}

.fs-reset-1:hover {
    opacity: .7
}

.fs-reset-1:focus-visible,.fs-reset-1[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_link-6 {
    border-top: 1px solid #f0f0f0;
    padding: .5rem 1rem
}

.fs-select_link-6:hover {
    opacity: .7
}

.fs-select_link-6:focus-visible,.fs-select_link-6[data-wf-focus-visible] {
    z-index: 1;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_link-6.w--current {
    color: #696969;
    background-color: #f0f0f0
}

.fs-checkbox_label-4 {
    z-index: 1;
    width: 100%;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    position: relative
}

.fs-select_list-5 {
    background-color: #0000
}

.fs-select_list-5.w--open {
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    margin-top: 1rem
}

.fs-range_values-2 {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    position: relative
}

.fs-reset_icon-4 {
    width: 2.5rem
}

.fs-radio_check-block-5 {
    z-index: 3;
    background-color: #501aff;
    border-bottom-left-radius: 999rem;
    padding: .5rem .5rem 1rem 1rem;
    position: absolute;
    inset: 0% 0% auto auto
}

.fs-checkbox_icon-6 {
    width: 4rem;
    height: 4rem;
    margin-top: 2.25rem;
    margin-left: 1.5rem;
    position: absolute;
    inset: 0% auto auto 0%
}

.fs-checkbox_toggle-dot-8 {
    z-index: 2;
    background-color: #000;
    border-radius: 999rem;
    flex: none;
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    position: absolute;
    left: 0
}

.fs-reset_icon-1 {
    width: 2rem;
    margin-right: .5rem
}

.fs-style_interaction-icon {
    color: #9b9b9b;
    align-items: center;
    margin-right: .5rem;
    display: flex
}

.fs-select_toggle-3 {
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .75rem 4rem .75rem 1rem;
    display: flex
}

.fs-select_toggle-3:focus-visible,.fs-select_toggle-3[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_link-block-5 {
    border-bottom: 1px solid #f0f0f0;
    border-radius: 0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: .5rem 1rem;
    font-weight: 500;
    display: flex
}

.fs-select_link-block-5:focus-visible,.fs-select_link-block-5[data-wf-focus-visible] {
    z-index: 2;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b;
    position: relative
}

.fs-style_attribute {
    color: #501aff;
    font-weight: 500
}

.fs-checkbox_mask-9 {
    z-index: 1;
    background-color: #f0f0f0;
    border-radius: .5rem;
    position: absolute;
    inset: 0%
}

.fs-checkbox_label-1 {
    z-index: 1;
    margin-bottom: 0;
    padding-right: 6px;
    font-family: DM Mono;
    font-size: 13px;
    font-weight: 400;
    display: none;
    position: relative
}

.footer_finsweet {
    grid-column-gap: .6rem;
    grid-row-gap: .6rem;
    color: #fff;
    grid-template-rows: auto;
    grid-template-columns: auto auto auto auto;
    grid-auto-columns: 1fr;
    align-content: center;
    align-items: center;
    text-decoration: none;
    display: grid
}

.footer_finsweet:hover {
    opacity: .8
}

.footer_finsweet:focus-visible,.footer_finsweet[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-style_interaction {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.fs-checkbox_text-6 {
    color: #575757;
    font-size: .875rem;
    font-weight: 400
}

.fs-checkbox_field-5 {
    text-align: center;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 30rem;
    margin-bottom: 0;
    padding: 2rem;
    display: flex;
    position: relative
}

.fs-checkbox_field-5:hover {
    color: #696969;
    border-color: #696969
}

.fs-style_form-block {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-right: 2rem;
    font-size: 2rem;
    display: flex
}

.fs-sort_button-2-2.is-desc {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd80b_arrow-up-2-black.svg);
    background-size: 1.25rem
}

.fs-rangeslider_handle-right-3 {
    z-index: 1;
    color: #fff;
    cursor: grab;
    background-color: #000;
    border-radius: .25rem;
    flex-direction: row;
    flex: none;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding: .25rem .5rem;
    font-size: 1rem;
    display: flex;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px #0000001a
}

.fs-rangeslider_handle-right-3:focus {
    background-color: #501aff
}

.fs-rangeslider_handle-right-3:focus-visible,.fs-rangeslider_handle-right-3[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.section_searchbars.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-radio_check-icon-5 {
    width: 1.5rem
}

.fs-select-2 {
    z-index: 99;
    margin-left: 0
}

.fs-radio_label {
    margin-bottom: 1rem
}

.fs-radio_label-6 {
    margin-bottom: .25rem;
    font-weight: 500
}

.section_checkboxes.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-reset_icon-3 {
    width: 2.25rem;
    margin-right: .25rem
}

.fs-reset_text-2 {
    font-weight: 500
}

.fs-select_link-5 {
    background-color: #fff;
    border-bottom: 1px solid #e7e7e7;
    padding: .75rem 1rem
}

.fs-select_link-5:hover {
    opacity: .7
}

.fs-select_link-5:focus-visible,.fs-select_link-5[data-wf-focus-visible] {
    z-index: 1;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_link-5.w--current {
    color: #696969;
    background-color: #f0f0f0
}

.fs-select_link-block-6 {
    border-radius: 0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: .5rem 1rem;
    font-weight: 500;
    display: flex
}

.fs-select_link-block-6:focus-visible,.fs-select_link-block-6[data-wf-focus-visible] {
    z-index: 2;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b;
    position: relative
}

.fs-checkbox_text-on-9 {
    z-index: 2;
    position: relative
}

.fs-radio_field-1 {
    color: #000;
    cursor: pointer;
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;
    padding: .5rem 1rem;
    font-weight: 500;
    display: flex;
    position: relative
}

.fs-radio_field-1:hover {
    opacity: 1;
    color: #696969;
    border-color: #696969
}

.fs-radio_field-1.is-active {
    color: #fff;
    background-color: #501aff;
    border-color: #501aff
}

.fs-reset_icon-2 {
    object-fit: contain;
    width: 1.75rem;
    height: 1.75rem
}

.fs-rangeslider_handle-1 {
    z-index: 1;
    cursor: grab;
    background-color: #fff;
    border: 3px solid #000;
    border-radius: 100rem;
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 1px 1px 10px #0000001a
}

.fs-rangeslider_handle-1:focus {
    background-color: #501aff;
    border-color: #501aff
}

.fs-rangeslider_handle-1:focus-visible,.fs-rangeslider_handle-1[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.section_rangesliders.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-checkbox_button-10-2.w--redirected-checked {
    background-color: #501aff
}

.fs-checkbox_button-3 {
    border-width: 2px;
    border-color: #000;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0;
    margin-left: 0;
    margin-right: .75rem;
    box-shadow: 1px 1px 3px #0000
}

.fs-checkbox_button-3.w--redirected-checked {
    background-color: #501aff;
    background-size: .75rem;
    border-color: #fff
}

.fs-checkbox_button-3.w--redirected-focus {
    box-shadow: none
}

.fs-checkbox_button-3.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-checkbox_text-off-9 {
    z-index: 2;
    margin-left: 1rem;
    position: relative
}

.fs-radio_button-3 {
    border-width: 2px;
    border-color: #000;
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0;
    margin-left: 0;
    margin-right: .75rem;
    box-shadow: 1px 1px 3px #0000
}

.fs-radio_button-3.w--redirected-checked {
    border-color: #f0f0f0
}

.fs-radio_button-3.w--redirected-focus {
    box-shadow: none
}

.fs-radio_button-3.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-checkbox_button-6 {
    border: 2px solid #000;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 1rem;
    margin-left: 0;
    margin-right: 1rem;
    display: block;
    position: absolute;
    inset: 0% 0% auto auto
}

.fs-checkbox_button-6.w--redirected-checked {
    background-color: #501aff;
    background-size: .75rem;
    border-color: #501aff
}

.fs-checkbox_button-6.w--redirected-focus {
    box-shadow: none
}

.fs-checkbox_button-6.w--redirected-focus-visible {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-dropdown_icon-bar-2 {
    background-color: #000;
    flex: none;
    width: 2px;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    position: absolute
}

.fs-empty_paragraph-2 {
    color: #575757
}

.fs-select_link-block-icon-5 {
    width: 1.5rem;
    margin-right: .5rem
}

.fs-checkbox_label {
    margin-bottom: 1rem
}

.section_features {
    border-bottom: 1px solid #0000001a
}

.fs-select_label-4 {
    background-color: #fff;
    margin-top: -.65rem;
    margin-left: .75rem;
    margin-right: .5rem;
    padding-left: .25rem;
    padding-right: .25rem;
    font-size: .875rem;
    font-weight: 500;
    position: absolute;
    inset: 0% auto auto 0%
}

.fs-checkbox_field-4 {
    background-color: var(--nimbus);
    color: #000;
    cursor: pointer;
    border: 2px solid #0000;
    border-radius: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    margin-right: .5rem;
    padding: .25rem .65rem;
    font-weight: 500;
    display: flex;
    position: relative
}

.fs-checkbox_field-4:hover {
    color: #696969;
    border-color: #0000
}

.fs-checkbox_field-4.is-active {
    border-style: solid;
    border-width: 2px;
    border-color: black black var(--shadow);
    background-color: var(--shadow);
    color: var(--nimbus)
}

.fs-empty_text-1 {
    font-size: 2rem
}

.fs-tag_close-icon-1 {
    width: 2rem;
    margin-left: 1rem
}

.fs-tag_template-1 {
    border: 2px solid #000;
    border-radius: 999rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .25rem .4rem .25rem 1rem;
    text-decoration: none;
    display: flex
}

.fs-tag_template-1:hover {
    opacity: .7
}

.fs-tag_template-1:focus-visible,.fs-tag_template-1[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-rangeslider_fill-1 {
    background-color: #000;
    border-radius: 999px;
    width: 20%;
    height: 100%;
    position: absolute
}

.fs-style_grid-block {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.fs-radio_field-3 {
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    padding: 1rem 1.5rem 1rem 1.25rem;
    font-weight: 500;
    display: flex;
    position: relative
}

.fs-radio_field-3:hover {
    color: #696969;
    border-color: #696969
}

.fs-radio_field-3.is-active {
    color: #fff;
    background-color: #501aff;
    border-color: #501aff
}

.hide_this_block {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 1px dashed #d1d1d1;
    border-radius: .5rem;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    justify-content: start;
    place-items: center start;
    padding: .5rem;
    display: grid;
    position: relative
}

.fs-tag_text-2 {
    font-weight: 500
}

.fs-style_dropdown-list {
    background-color: #0000;
    display: block;
    position: relative
}

.fs-tag_close-block-3 {
    background-color: #000;
    border-radius: 99rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -.5rem;
    margin-left: 1rem;
    margin-right: -.65rem;
    padding: .1rem;
    display: flex;
    position: absolute;
    inset: 0% 0% auto auto
}

.fs-tag_close-block-3:hover {
    background-color: #696969
}

.fs-checkbox_icon-5 {
    z-index: 2;
    width: 4rem;
    margin-bottom: .5rem;
    position: relative
}

.fs-reset_text-1 {
    font-weight: 500
}

.fs-radio_button-4 {
    border-style: none;
    border-radius: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    inset: 0%;
    box-shadow: 1px 1px 3px #0000
}

.fs-radio_button-4.w--redirected-focus {
    box-shadow: none;
    border-style: none
}

.fs-radio_button-4.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-dropdown_toggle-1 {
    border: 2px solid #000;
    border-radius: .25rem;
    padding: 1rem 3rem 1rem 1.25rem;
    font-weight: 500
}

.fs-dropdown_toggle-1:focus-visible,.fs-dropdown_toggle-1[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-radio_label-5 {
    z-index: 2;
    margin-bottom: 0;
    font-weight: 500;
    display: block;
    position: relative
}

.fs-tag_close-icon-3 {
    width: 1.3rem
}

.page-padding {
    padding-left: 4vw;
    padding-right: 4vw
}

.search-field {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd7bb_search-black.svg);
    background-position: 12px;
    background-repeat: no-repeat;
    background-size: 2.25rem;
    border: 0 solid #000;
    height: 3.75rem;
    margin-bottom: 0;
    padding-left: 3.25rem;
    padding-right: 0;
    font-family: Dmmono,sans-serif;
    font-size: 14px
}

.search-field:focus {
    border-color: #501aff
}

.fs-select_link-block-icon-6 {
    width: 1.5rem;
    margin-right: .25rem
}

.fs-radio_check-mask-5 {
    z-index: 1;
    background-color: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .5rem .5rem 1rem 1rem;
    display: block;
    position: absolute;
    inset: 0%
}

.fs-checkbox_button-5 {
    border-style: none;
    border-radius: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    display: block;
    position: absolute;
    inset: 0%
}

.fs-checkbox_button-5:focus-visible,.fs-checkbox_button-5[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-rangeslider_wrapper-2 {
    align-items: center;
    width: 100%;
    padding: 1rem .5rem;
    display: block;
    position: relative
}

.fs-checkbox_toggle-dot-7 {
    z-index: 2;
    background-color: #fff;
    border-radius: 999rem;
    flex: none;
    width: 1rem;
    height: 1rem;
    display: block;
    position: relative
}

.fs-checkbox_label-9 {
    margin-bottom: 0;
    font-weight: 500;
    display: none
}

.fs-check_mask-5 {
    z-index: 1;
    background-color: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .5rem .5rem 1rem 1rem;
    display: flex;
    position: absolute;
    inset: 0%
}

.fs-style_form-label {
    color: #fff;
    background-color: #575757;
    flex: none;
    justify-content: flex-start;
    align-items: center;
    padding: .85rem 1.5rem;
    display: flex;
    position: relative;
    inset: 0% auto auto 0%
}

.fs-checkbox_label-2 {
    margin-bottom: 0;
    font-weight: 500
}

.fs-rangeslider_fill-3 {
    background-color: #575757;
    border-radius: 999px;
    width: 20%;
    height: 100%;
    position: absolute
}

.fs-checkbox_label-6 {
    margin-bottom: .25rem;
    font-weight: 500
}

.fs-select_field-4 {
    margin-bottom: 0;
    display: none
}

.section_resets.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-checkbox_icon-2 {
    flex: none;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem
}

.fs-rangeslider_track-3 {
    background-color: #f0f0f0;
    height: .25rem;
    margin-left: auto;
    margin-right: auto;
    position: relative
}

.fs-style_form-icon {
    width: 1rem;
    margin-right: .5rem
}

.fs-select_link-block-2 {
    border-bottom: 1px solid #f0f0f0;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: .5rem 1rem;
    display: flex
}

.fs-select_link-block-2:hover {
    opacity: .7
}

.fs-select_link-block-2:focus-visible,.fs-select_link-block-2[data-wf-focus-visible] {
    z-index: 1;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b;
    position: relative
}

.fs-select_link-block-2.w--current {
    color: #696969;
    background-color: #f0f0f0
}

.fs-select_toggle-6 {
    border: 2px solid #000;
    border-radius: .25rem;
    padding: .75rem 4rem .75rem 1rem
}

.fs-select_toggle-6:focus-visible,.fs-select_toggle-6[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_label-3 {
    margin-right: .5rem;
    font-weight: 500
}

.fs-select_list-block-6 {
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    margin-top: 1rem
}

.fs-dropdown_list-1.w--open {
    background-color: #fff;
    border: 2px solid #000;
    border-radius: .25rem;
    margin-top: .5rem;
    padding: 1rem
}

.fs-select_field-1 {
    margin-bottom: 0;
    display: none
}

.fs-radio_button-2 {
    border-width: 2px;
    border-color: #000;
    flex: none;
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0;
    margin-left: 0;
    margin-right: .75rem;
    box-shadow: 1px 1px 3px #0000
}

.fs-radio_button-2.w--redirected-checked {
    border-color: #501aff
}

.fs-radio_button-2.w--redirected-focus {
    box-shadow: none
}

.fs-radio_button-2.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-rangeslider_handle-right-4 {
    z-index: 1;
    color: #fff;
    cursor: grab;
    background-color: #000;
    border-radius: 999rem;
    flex-direction: row;
    flex: none;
    justify-content: center;
    align-items: center;
    padding: .25rem .75rem;
    font-size: 1rem;
    display: flex;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 10px #0000001a
}

.fs-rangeslider_handle-right-4:focus {
    background-color: #501aff
}

.fs-rangeslider_handle-right-4:focus-visible,.fs-rangeslider_handle-right-4[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.footer_grid {
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    place-content: center end;
    align-self: center;
    place-items: center end;
    display: grid
}

.fs-select_field-3 {
    margin-bottom: 0;
    display: none
}

.section_selects.is-border-top {
    border-top: 1px solid #f0f0f0
}

.fs-reset-2 {
    border: 2px solid #000;
    border-radius: 999rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: .25rem .3rem .25rem 1rem;
    text-decoration: none;
    display: flex
}

.fs-reset-2:hover {
    opacity: .7
}

.fs-reset-2:focus-visible,.fs-reset-2[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-select_list-6 {
    background-color: #0000
}

.fs-dropdown_list-group-1 {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.fs-search_field-2 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd7bb_search-black.svg);
    background-position: 0;
    background-repeat: no-repeat;
    background-size: 2.25rem;
    border: 1px #000;
    border-bottom: 2px solid #000;
    height: 3.75rem;
    margin-bottom: 0;
    padding-left: 3rem;
    padding-right: 0;
    font-size: 1rem
}

.fs-search_field-2:focus {
    border-bottom-color: #501aff
}

.fs-select-4,.fs-select-3 {
    z-index: 99;
    margin-left: 0
}

.fs-style_dropdown-list-grid {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    color: #000000b3;
    background-color: #f3f2f8;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    margin-top: 1rem;
    padding: 2rem 2rem 2rem 1.5rem;
    display: grid;
    position: relative
}

.footer_finsweet-logo {
    width: 5rem;
    display: block;
    position: relative;
    top: .2rem
}

.footer-4 {
    background-color: #000
}

.container-large-6 {
    width: 100%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto
}

.fs-sort_button-2-3 {
    color: #000;
    background-color: #0000;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd7b9_arrow-up-down-2-black.svg);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 1.5rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: .5rem 1.5rem .5rem 0;
    font-weight: 500;
    display: flex
}

.fs-sort_button-2-3:focus-visible,.fs-sort_button-2-3[data-wf-focus-visible] {
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.fs-sort_button-2-3.is-asc {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd7fc_arrow-down-2-black.svg);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 1.25rem
}

.filter-box {
    border-width: 1px;
    border-color: #aaa;
    border-radius: 1px;
    width: 1.25rem;
    min-width: 20px;
    height: 1.25rem;
    margin-top: 2px;
    margin-left: -20px;
    margin-right: .5rem;
    box-shadow: 1px 1px 3px #0000
}

.filter-box.w--redirected-checked {
    background-color: #f0ff45;
    background-size: .75rem;
    border-width: 2px;
    border-color: #000
}

.filter-box.w--redirected-focus {
    box-shadow: none
}

.filter-box.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.page-wrapper-4 {
    overflow: hidden
}

.text-style-link-3 {
    text-decoration: underline
}

.text-style-link-3:hover {
    color: #501aff;
    border-bottom-color: #501aff
}

.text-style-link-3:focus {
    box-shadow: 0 0 0 2px #000
}

.content_collection-list {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.content_collection-list.top-three {
    grid-template-columns: 1fr 1fr 1fr
}

.content_collection-list._2-column {
    grid-template-columns: 1fr 1fr
}

.filter_content {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    margin-top: 2rem;
    display: block
}

.filter_grid {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: .4fr;
    grid-auto-columns: 1fr;
    align-items: start;
    display: block
}

.filter_sort-by {
    z-index: 1;
    border-style: solid;
    border-width: 1px;
    border-color: #dae4d8 #dae4d8 var(--neutral-8);
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    font-family: Dmmono,sans-serif;
    display: flex;
    position: relative
}

.filter_column {
    border-style: none solid;
    border-width: 0 1px 1px;
    border-color: #dfdfdf #dfdfdf var(--stratus);
    background-color: #fff
}

.dropdown_icon {
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 1rem 0 0;
    font-size: 1rem;
    display: flex;
    position: absolute
}

.dropdown_list {
    display: none
}

.dropdown_list.w--open {
    background-color: #fff
}

.filter_empty {
    text-align: center;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    display: block
}

.filter_wrapper {
    background-color: #fff0;
    width: 23.5%;
    display: none
}

.filter_form-wrapper {
    margin-bottom: 0;
    display: block
}

.sort_field {
    color: #000;
    cursor: pointer;
    border-bottom: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
    padding: 1rem 2rem 1rem 1.5rem;
    text-decoration: none;
    display: flex
}

.sort_field.w--current {
    color: #3c7c43;
    background-color: #f4f9f4
}

.filter_block {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border-bottom: 1px solid var(--neutral-8);
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: block;
    position: relative
}

.filter_block.width-50 {
    width: 50%
}

.filter_block.no-border {
    border-bottom-style: none;
    width: 50%;
    margin-top: 1rem
}

.filter_block.width-100 {
    width: 100%
}

.filter_block-header {
    z-index: 10;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    background-color: #fff;
    flex-direction: row;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    display: block;
    position: relative;
    inset: 0% 0% auto
}

.filter_options {
    max-height: none;
    padding: 0 1.25rem 25px;
    position: relative;
    overflow: visible
}

.heading-small-7 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4
}

.heading-small-7.filter-heading-btn {
    color: #333;
    background-color: #fff;
    width: 100%;
    padding: 0;
    font-family: Dmsans,sans-serif;
    font-weight: 600;
    line-height: 1.1;
    display: block;
    position: relative
}

.dropdown-3 {
    width: 50%;
    margin-left: 0;
    margin-right: 0
}

.collection-item {
    height: auto;
    margin-top: 0;
    margin-bottom: 5px;
    margin-right: 5px;
    display: inline-block
}

.collection-list-3 {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    flex-flow: column;
    display: block
}

.filter-toggle {
    border-style: solid;
    border-width: 1px;
    border-color: #ddd #ddd var(--neutral-8);
    justify-content: space-between;
    align-items: center;
    width: 23.5%;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    transition: all .3s;
    position: relative
}

.filter-toggle:hover {
    background-color: #eee
}

.sort-by {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    width: 60%;
    display: block
}

.sort-by.hide {
    display: none
}

.filter-toggle-btn {
    z-index: 1;
    color: #333;
    background-color: #0000;
    justify-content: flex-start;
    align-self: auto;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    font-family: Dmmono,sans-serif;
    display: flex;
    position: absolute
}

.clear-all {
    z-index: 3;
    color: #333;
    text-transform: uppercase;
    background-color: #0000;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1rem 0 0;
    font-family: Dmmono,sans-serif;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    position: absolute;
    top: 0;
    right: 0
}

.f-image-cover {
    z-index: 2;
    object-fit: cover;
    border-radius: 0;
    width: 100%;
    max-width: 1000px;
    height: 100%;
    position: relative;
    transform: none
}

.f-image-cover.architecture {
    max-width: 700px
}

.dropdown-carrot {
    margin-top: 2px
}

.f-title-wrapper-center {
    z-index: 5;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    position: relative
}

.grid-col-5 {
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 0
}

.f-logo-plain {
    justify-content: center;
    align-items: center;
    min-height: 96px;
    padding: 24px;
    display: flex
}

.is-white {
    color: var(--neutral-6)
}

.journey-card-line-divider {
    border-style: none dashed none none;
    border-width: 1px;
    border-color: var(--shadow)var(--shadow-lite);
    width: 1px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    font-family: Dmsans,sans-serif
}

.journey-card-line-divider.margin-top-medium {
    border-color: var(--stratus)var(--shadow-lite)var(--stratus)var(--stratus);
    border-left-width: 1px;
    margin-top: 0
}

.color-subtitle {
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    padding: 0 .5rem;
    font-family: Dmmono,sans-serif;
    font-size: 14px;
    display: inline-block
}

.color-subtitle.green {
    background-color: #4cec8c
}

.color-subtitle.orange.text-color-dark {
    color: var(--shadow)
}

.color-subtitle.pink {
    text-transform: uppercase;
    background-color: #ffcee6;
    padding-top: 0;
    padding-bottom: 0
}

.color-subtitle.sky {
    background-color: var(--sky);
    padding-top: 0;
    padding-bottom: 0
}

.color-subtitle.blue {
    background-color: var(--sky);
    color: var(--shadow)
}

.color-subtitle.grey {
    background-color: #c1c8c9
}

.color-subtitle.yellow-2 {
    background-color: var(--insight);
    color: var(--shadow)
}

.color-subtitle.grey-stratus {
    background-color: var(--stratus)
}

.color-subtitle.gray-light {
    background-color: var(--nimbus)
}

.color-subtitle.white {
    background-color: var(--neutral-0);
    color: var(--shadow)
}

.color-subtitle.blue {
    background-color: #a8e8f3
}

.color-subtitle.white-outline {
    border: 1px solid #fff
}

.color-subtitle.yellow {
    background-color: #f0ff45
}

.color-subtitle.orange {
    background-color: #ff9a74;
    padding-top: 0;
    padding-bottom: 0
}

.color-subtitle.blue-2 {
    background-color: #a8e8f3
}

.color-subtitle.white-outline-2 {
    border: 1px solid #fff
}

.color-subtitle.yellow-2 {
    background-color: #f0ff45
}

.color-subtitle.orange-2 {
    background-color: #ff9a74;
    padding-top: 0;
    padding-bottom: 0
}

.striped-divider {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66be5499067782d22fb41677_dark-horizon-lines.svg);
    background-position: 50% 0;
    background-repeat: repeat-x;
    background-size: 718px;
    background-attachment: scroll;
    width: 100%;
    height: 100px
}

.striped-divider.flipped {
    border-top: 1px solid var(--shadow);
    background-color: var(--shadow-lite);
    transform-style: preserve-3d;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66be51b174d639c73b1a568f_dark-lines.svg);
    background-repeat: repeat-x;
    background-size: auto 150px;
    background-attachment: scroll;
    transform: rotateX(180deg)rotateY(0)rotate(0)
}

.striped-divider.flipped.lighter {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd8aa_Frame%207625.webp);
    transform: rotate(0)
}

.striped-divider.flipped.shifted {
    background-position: 50% 0;
    background-size: auto 175px
}

.rotator-text-tab-links {
    background-color: #3d3d3d;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    padding: .5rem .75rem;
    display: inline-block
}

.rotator-tab-link {
    background-color: #c8c8c800;
    border: 1px solid #0000;
    padding: .5rem 1.75rem
}

.rotator-tab-link.w--current {
    background-color: #c8c8c800;
    border: 1px solid #bdc757;
    border-radius: 50px
}

.text-block-16 {
    color: var(--neutral-12);
    -webkit-text-stroke-color: var(--nimbus);
    text-transform: uppercase;
    font-family: DM Mono;
    font-size: 14px
}

.text-block-16:focus {
    border: 1px solid #c5cd35;
    border-radius: 20px;
    padding: 5px 20px
}

.card_swiper_inner {
    border-bottom: 2px solid var(--shadow-lite);
    background-color: var(--neutral-0);
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 36rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    position: relative;
    top: 1px;
    left: 1px
}

.tab-pane-tab-1 {
    margin-top: 0;
    margin-bottom: 0;
    transition: all .25ms;
    position: absolute;
    top: 2rem;
    left: 3rem
}

.tab-marker {
    z-index: 49;
    grid-column-gap: 19px;
    grid-row-gap: 19px;
    border: 0 solid #000;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 50px;
    padding-left: 20px;
    display: flex;
    position: absolute;
    inset: 0 0 auto auto
}

.rotator-tab-number {
    background-color: #4cec8c;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    display: flex
}

.rotator-tab-number._2 {
    background-color: #a8e8f3
}

.rotator-tab-number._3 {
    z-index: -15;
    background-color: #ff9a74;
    position: relative
}

.rotator-tab-number._4 {
    background-color: #ffcee6
}

.rotator-tab-number._5 {
    background-color: #f0ff45
}

.rotator-tab-number._7 {
    background-color: var(--sky)
}

.card_swiper_content {
    width: 80%
}

.tab-pane-tab-2 {
    margin-top: 26px;
    margin-bottom: 26px
}

.tab-pane-tab-3,.tab-pane-tab-4,.tab-pane-tab-5 {
    margin-top: 26px
}

.grid-card_content {
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    background-color: #3d3d3d;
    border-radius: 8px;
    flex-flow: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: auto;
    padding: 2rem;
    transition: all .2s;
    display: block
}

.grid-card_content:hover {
    background-color: var(--shadow);
    transform: scale(1.05)
}

.grid-card_content.text-color-light {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    display: block
}

.flex-right-center {
    justify-content: flex-end;
    align-items: center;
    display: flex
}

.grid-3-2 {
    padding-left: 0;
    padding-right: 0
}

.text-field-round {
    color: #000;
    border: 1px solid #e5e7eb;
    border-radius: 3px;
    height: 48px;
    margin-bottom: 0;
    padding: 8px 16px;
    font-family: DM Mono;
    font-size: 13.5px;
    font-weight: 400;
    line-height: 32px
}

.text-field-round:hover,.text-field-round:focus {
    border-color: #d1d5db
}

.form-h {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    align-items: center;
    display: flex
}

.footnote-wrapper {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.cta-form-block {
    width: 100%;
    margin-bottom: 0
}

.email-signup {
    background-color: #4cec8c;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd871_sigma_strip.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto 60px;
    flex-flow: column;
    justify-content: center;
    align-items: center
}

.email-signup.section {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9c1_sigma-footer-pattern2.svg),url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66c3cc4aab26abf0f2c64623_sigma-footer-pattern1.svg);
    background-position: 101% -1%,-1% 102%;
    background-repeat: no-repeat,no-repeat;
    background-size: auto,auto 125px;
    background-attachment: scroll,scroll;
    padding-top: 8rem;
    padding-bottom: 6rem
}

.email-signup.section.hide {
    display: block
}

.icon-2 {
    color: #160042;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    display: flex
}

.cell-14 {
    grid-column-gap: 23px;
    grid-row-gap: 23px;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    font-family: DM Sans;
    display: flex
}

.cell-15 {
    justify-content: flex-start;
    align-items: flex-start
}

.platform-icon {
    z-index: 4;
    background-color: #fff0;
    border-radius: 0;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 30px;
    margin-bottom: 6px;
    margin-right: 6px;
    padding: 0;
    display: flex;
    position: absolute;
    inset: auto 0% 0% auto;
    box-shadow: 0 2px 5px #0003
}

.platform-icon.hide {
    display: none
}

.feature-block {
    grid-column-gap: 2.4rem;
    grid-row-gap: 2.4rem;
    border-top: 1px none var(--stratus);
    flex-flow: column;
    grid-template-rows: auto;
    grid-template-columns: .75fr 1fr;
    grid-auto-columns: 1fr;
    height: 100%;
    margin-bottom: 1rem;
    padding: 0 1rem 2rem 0;
    display: grid
}

.collection-list-4 {
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    flex-flow: column;
    display: flex
}

.text-block-18 {
    font-family: Dmmono,sans-serif
}

.text-link-allcaps {
    box-shadow: inset 0 -2px 0 0 var(--shadow);
    color: #292929;
    text-transform: uppercase;
    font-family: DM Mono;
    text-decoration: none;
    transition: all .2s
}

.text-link-allcaps:hover {
    box-shadow: inset 0 -11px 0 0 var(--insight)
}

.text-link-allcaps.shadow-light.inverse {
    box-shadow: inset 0 -1px 0 0 var(--insight);
    color: var(--insight)
}

.text-link-allcaps.shadow-light.inverse:hover {
    box-shadow: inset 0 -11px 0 0 var(--shadow);
    -webkit-text-stroke-color: #f0ff4500
}

.text-link-allcaps.shadow-light.inverse.text-size-small {
    vertical-align: baseline;
    flex-flow: row;
    margin-bottom: 0;
    display: inline;
    position: static;
    inset: auto 0% 0%
}

.text-link-allcaps.no-margin-bottom.text-size-small {
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none
}

.text-link-allcaps.no-margin-bottom.text-size-small.no-underline {
    box-shadow: inset 0 0 0 0 var(--insight);
    font-size: 1rem;
    font-weight: 500;
    transition: all .3s
}

.text-link-allcaps.no-margin-bottom.text-size-small.no-underline:hover {
    box-shadow: inset 0 -11px 0 0 var(--insight)
}

.text-link-allcaps.no-margin-bottom.text-size-small.text-color-light {
    box-shadow: inset 0 -2px 0 0 var(--stratus);
    color: var(--nimbus)
}

.text-link-allcaps.no-margin-bottom.text-size-small.text-color-light:hover {
    box-shadow: inset 0 -4px 0 0 var(--insight)
}

.text-link-allcaps.text-size-small {
    font-family: Dmmono,sans-serif
}

.text-link-allcaps.text-size-small.shadow-light {
    text-decoration: none
}

.text-link-allcaps.inverse {
    box-shadow: inset 0 -1px 0 0 var(--insight);
    color: var(--insight)
}

.text-link-allcaps.inverse:hover {
    box-shadow: inset 0 -11px 0 0 var(--shadow)
}

.text-link-allcaps.inverse.text-color-light {
    box-shadow: inset 0 -1px 0 0 var(--neutral-0);
    color: var(--neutral-0)
}

.text-link-allcaps.inverse.text-color-light:hover {
    box-shadow: inset 0 -11px 0 0 var(--shadow)
}

.tabs-content-4 {
    width: 90%;
    min-height: 38rem;
    margin-top: 3.5rem;
    display: inline-block;
    overflow: visible
}

.text-block-16-over-color {
    color: var(--neutral-12);
    -webkit-text-stroke-color: var(--nimbus);
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: 14px;
    line-height: 0
}

.text-block-16-over-color:focus {
    border: 1px solid #c5cd35;
    border-radius: 20px;
    padding: 5px 20px
}

.rotator-tab-link-text {
    color: var(--neutral-5);
    -webkit-text-stroke-color: var(--nimbus);
    text-transform: uppercase;
    font-family: DM Mono;
    font-size: 14px
}

.rotator-tab-link-text:focus {
    border: 1px solid #c5cd35;
    border-radius: 20px;
    padding: 5px 20px
}

.f-margin-bottom-24 {
    margin-bottom: 24px
}

.heading-11-copy {
    color: #000;
    text-align: left;
    font-size: 49px;
    line-height: 42px
}

.quick-stack-15-copy {
    width: 100%;
    max-width: 80rem;
    padding-left: 0;
    padding-right: 0
}

.button-primary-l-copy {
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    -webkit-backdrop-filter: blur(64px);
    backdrop-filter: blur(64px);
    color: #fff;
    letter-spacing: -.2px;
    background-color: #030711;
    border-radius: 44px;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 8px 24px;
    font-family: DM Mono;
    font-size: 14px;
    font-weight: 400;
    line-height: 32px;
    text-decoration: none;
    transition: all .2s,border-color .4s,background-color .4s,color .4s;
    display: flex
}

.button-primary-l-copy:hover {
    opacity: 1;
    background-color: #03071180
}

.button-primary-l-copy.w--current {
    background-color: #344256;
    border-color: #48566a
}

.div-block-140 {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    display: flex
}

.div-block-141 {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    flex-flow: column;
    display: flex
}

.image-26 {
    margin-bottom: -10px
}

.footnote-copy {
    color: #030711;
    font-size: 9px;
    line-height: 11px;
    text-decoration: none
}

.colored_tag {
    border: 2px solid #4cec8c;
    border-radius: 20px;
    align-self: center;
    padding: 0 14px
}

.colored_tag.sun {
    border-color: #ff9a74
}

.colored_tag.sky {
    border-color: #a8e8f3
}

.testimonial-card-features {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 1rem;
    display: none
}

.testimonial-card-co {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: row;
    justify-content: flex-start;
    align-self: auto;
    align-items: flex-start;
    margin-top: 2rem;
    display: flex
}

.b-testimonial-count-divider {
    color: #95a1b2;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px
}

.b-caption-medium {
    letter-spacing: .01em;
    margin-bottom: 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.8
}

.b-caption-medium.b-text-weight-semibold {
    font-family: DM Mono
}

.b-testimonial-count {
    color: #95a1b2;
    align-items: center;
    display: flex
}

.b-testimonial-count.hidden {
    display: none
}

.b-paragraph-regular {
    letter-spacing: -.02em;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6
}

.b-paragraph-regular.text-color-gray-700 {
    font-family: DM Mono
}

.quote.text-size-xl.text-weight-medium {
    color: var(--shadow)
}

.h1-subpage-hero {
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 3.75rem;
    font-weight: 400;
    line-height: 4.25rem
}

.cta-block {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.cta-block.snowpark {
    justify-content: center;
    align-items: center
}

.card-expand-on-hover {
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    background-color: #3d3d3d;
    border-radius: 0;
    flex-flow: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    height: auto;
    padding: 0 0 20px;
    transition: all .2s;
    display: flex
}

.card-expand-on-hover:hover {
    background-color: var(--shadow);
    transform: scale(1.05)
}

.accordian-toggle {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
    padding: 0;
    display: flex
}

.accordian-item {
    border-top: 2px solid #000;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 12px;
    transition: all .2s;
    display: block
}

.accordian-item.last {
    border-bottom: 2px solid #000
}

.accordian-item.hide {
    display: none
}

.accordian-item._1px {
    border-top-width: 1px
}

.accordian-item.dark {
    border-top-color: var(--neutral-10)
}

.accordian-wrapper {
    border-radius: 8px;
    flex-direction: column;
    width: 100%;
    display: flex
}

.accordian-dropdown {
    background-color: #0000;
    width: 100%;
    max-width: none;
    display: flex;
    position: static;
    overflow: hidden
}

.accordian-title-wrapper {
    white-space: normal;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: flex
}

.accordian-content {
    width: 100%;
    max-width: 440px;
    margin-left: 0;
    margin-right: auto;
    padding-top: 4px;
    padding-bottom: 4px
}

.accordian-icon {
    color: var(--shadow);
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    display: flex
}

.paragraph-regular {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.7
}

.nav-dropdown-list-column {
    color: var(--neutral-0);
    width: 25%
}

.nav-dropdown-list-column_title {
    color: var(--stratus);
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
    padding-left: .5rem;
    font-family: Dmmono,sans-serif;
    font-size: .8rem
}

.nav-dropdown-list-column_title.padding-top-small {
    padding-top: 2rem
}

.nav-dropdown-list-column_link {
    color: var(--neutral-0);
    max-width: 135px;
    margin-bottom: 7px;
    padding: .25rem 0 .25rem .5rem;
    font-family: Dmsans,sans-serif;
    font-size: 14px;
    line-height: 1.1rem;
    transition: all 40ms;
    display: block
}

.nav-dropdown-list-column_link:hover {
    color: var(--neutral-0);
    -webkit-text-stroke-color: #fff;
    background-color: #ffffff1a
}

.nav-dropdown-list-column_link:active {
    color: var(--neutral-0)
}

.nav-dropdown-list-column_link_img {
    border-left: 1px solid var(--shadow);
    margin-left: .5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: .5rem;
    display: block
}

.nav-dropdown-list-column_link_img:hover {
    border-left-color: var(--stratus)
}

.nav-dropdown-list-ad {
    background-color: #0b0b0b;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdab2_lines-thin.svg);
    background-position: 100% 100%;
    background-repeat: repeat-x;
    background-size: auto 50%;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 25%;
    height: 100%;
    padding: 0;
    display: flex;
    position: absolute;
    inset: 0% 0% 0% auto
}

.nav-dropdown-list-columns {
    padding-left: 0;
    padding-right: 0;
    display: flex
}

.section-13 {
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.quick-stack-15-copy-copy {
    border: 1px none var(--stratus);
    background-color: #9fa8a71a;
    align-self: center;
    width: 100%;
    max-width: 80rem;
    padding: 34px 37px
}

.div-block-141-copy {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    flex-flow: column;
    display: flex
}

.cell-15-copy {
    justify-content: center;
    align-items: flex-start
}

.nav-dropdown_text {
    font-weight: 500
}

.timeline-stack {
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
    border-top: 1px solid var(--stratus);
    width: 100%;
    margin-bottom: auto;
    padding: 0
}

.timeline-cell {
    padding-top: 1.25rem
}

.div-block-154 {
    position: relative
}

.great-place-to-work {
    z-index: 2;
    width: 4.6rem;
    max-width: none;
    position: absolute;
    inset: 0% 5% auto auto
}

.b-team-detail {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 0;
    display: flex
}

.b-team-avatar {
    background-color: #f3f4f6;
    border-radius: 100%;
    flex: none;
    width: 120px;
    height: 120px;
    overflow: hidden
}

.team-wrapper {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 2rem;
    display: block
}

.team-collection-list {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.profile-pic {
    filter: grayscale()
}

.text-family-mono {
    margin-bottom: 0;
    font-family: Dmmono,sans-serif
}

.text-family-mono.hanging-punctuation {
    text-indent: -.55em;
    margin-bottom: 1rem;
    font-size: 2.2rem
}

.text-family-mono.hanging-punctuation.card-quote-callout {
    letter-spacing: -.05rem;
    margin-top: 3rem;
    font-size: 1.5rem;
    line-height: 1.8rem
}

.text-family-mono.hanging-punctuation.text-size-medium {
    font-size: 1.5rem
}

.text-family-mono.hanging-punctuation.home-quote-text {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 150%
}

.text-family-mono.text-color-light.align-center {
    text-align: center
}

.logo-title-wrapper {
    grid-column-gap: 17px;
    grid-row-gap: 17px;
    text-align: center;
    flex-flow: column;
    max-width: 620px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.h5-heading {
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 32px;
    font-weight: 500;
    line-height: 1.25
}

.logo-cell {
    justify-content: center;
    align-items: center
}

.quick-stack-21 {
    padding-left: 0;
    padding-right: 0
}

.card_swiper_outer {
    background-color: var(--shadow-lite);
    width: 100%;
    display: inline-block;
    position: relative
}

.no-padding-bottom {
    margin-bottom: 0;
    padding-bottom: 0
}

.no-margin-bottom {
    margin-bottom: 0
}

.no-margin-bottom.text-align-center {
    margin-bottom: 2rem
}

.home-hero-bg {
    background-color: #f0f0f0;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdaba_home-pattern.svg),url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd909_home_bg_pattern.svg);
    background-position: 50% 100%,105% 100px;
    background-repeat: repeat-x,no-repeat;
    background-size: auto,60%;
    background-attachment: scroll,scroll
}

.text-size-medium {
    font-size: 1.125rem
}

.background-color-gray-dark {
    background-color: #292929
}

.text-color-light {
    color: var(--neutral-0)
}

.text-color-light.text-style-thin,.text-color-light.text-style-normal {
    font-weight: 400
}

.text-color-light.text-style-underline {
    text-decoration: underline
}

.text-color-light.width-50-centered {
    width: 50%;
    margin-left: auto;
    margin-right: auto
}

.text-color-light.text-size-larger {
    letter-spacing: -.03em
}

.text-size-xl {
    font-size: 3rem;
    line-height: 3.5rem
}

.text-size-xl.text-weight-medium.margin-top-bottom-small.hanging-punctuation {
    text-indent: -.38em
}

.text-size-xl.font-weight-bold {
    font-weight: 500
}

.background-color-gray-light {
    background-color: #f0f0f0
}

.features-stack {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: var(--shadow);
    margin-top: 3rem;
    margin-bottom: 4rem;
    padding: 0
}

.filter-buttons {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: flex-start;
    display: flex
}

.section-neutral-0-2 {
    display: block
}

.header--5 {
    color: #171717;
    -webkit-text-stroke-color: #964f7d;
    flex: 1;
    align-self: center;
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 135%
}

.header--5.g-display-inline {
    font-style: normal
}

.header-5-2 {
    color: #171717;
    font-size: 2rem;
    font-weight: 900;
    line-height: 140%
}

.header-5-2.g-font-weight-regular-400.g-text-color-neutral-0.g-mg-bottom-xlarge.launch {
    color: #000;
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 400
}

.free-trail-form_wrapper-2 {
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden
}

.container-9 {
    opacity: 1;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px
}

.paragraph-hero-2 {
    color: #575757;
    margin-top: 1.5rem;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 150%
}

.divider-2 {
    background-color: #575757;
    width: 100%;
    height: 1px
}

.divider-2.cc-neutral-8 {
    background-color: #c7c7c7
}

.header-3-2 {
    color: #171717;
    align-self: auto;
    font-size: 3rem;
    font-weight: 900;
    line-height: 130%
}

.header-3-2.g-mg-bottom-large.header-kerned {
    letter-spacing: -.15rem;
    line-height: 110%
}

.header-5-3 {
    color: #171717;
    font-size: 2rem;
    font-weight: 900;
    line-height: 140%
}

.paragraph-2-3 {
    color: #575757;
    font-size: .875rem;
    line-height: 150%
}

.paragraph-2-3.g-mg-bottom-large {
    white-space: normal
}

.border-bottom {
    border-bottom: 1px solid var(--shadow-lite)
}

.no-padding {
    grid-column-gap: 1rem;
    grid-row-gap: 6.3rem;
    grid-template-rows: auto;
    padding: 0
}

.no-padding.min-height-400 {
    min-height: 400px
}

.no-padding.min-height-400.no-gap {
    grid-column-gap: 0px;
    grid-row-gap: 0px
}

.no-padding.grid-gap-4rem {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem
}

.no-padding.margin-top {
    margin-top: 56px
}

.border-left {
    border-left: 1px solid var(--shadow)
}

.border-left.border-right.feature-single-column {
    padding-top: 4rem;
    padding-left: 4rem;
    padding-right: 4rem
}

.border-left.feature-padding.border-color-light {
    border-left-color: var(--stratus);
    justify-content: center;
    align-items: flex-start;
    font-weight: 500
}

.border-right {
    border-right: 1px solid var(--shadow)
}

.border-right.background-color-light-2.cell-position-relative {
    justify-content: flex-end;
    align-items: flex-end
}

.border-right.background-color-light-2.cell-position-relative.video {
    justify-content: center;
    align-items: center;
    padding: 1rem
}

.border-right.product-launch-videos {
    border-right-color: var(--stratus);
    justify-content: center;
    align-items: flex-start
}

.border-right.feature-padding.flex-align-bottom {
    justify-content: flex-end;
    align-items: flex-start
}

.border-right.feature-stat-padding {
    padding-bottom: 4rem;
    padding-left: 4rem;
    padding-right: 2rem
}

.border-top {
    border-top: 1px solid var(--shadow-lite)
}

.background-color-yellow {
    background-color: #f0ff45
}

.cta-block-buttons {
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    justify-content: center;
    align-items: center;
    display: flex
}

.margin-bottom-small {
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
    display: block
}

.background-color-black {
    background-color: #000
}

.background-color-light {
    background-color: #f0f0f0
}

.background-color-light.padding-small {
    padding-top: 1rem
}

.grid-with-borders {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: var(--shadow);
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 0;
    position: relative;
    overflow: clip
}

.grid-with-borders.no-margins {
    border-bottom: 1px #000;
    margin-top: 0;
    margin-bottom: 0
}

.grid-with-borders.apps {
    background-color: var(--neutral-0);
    padding: 1rem 1rem 2rem
}

.grid-with-borders.data-leaders {
    width: 100%
}

.margin-top-medium {
    margin-top: 4rem
}

.margin-top-bottom {
    margin-top: 4rem;
    margin-bottom: 4rem
}

.font-size-large {
    font-size: 1.5rem;
    line-height: 2rem
}

.font-size-large.font-style-mono {
    font-family: Dmmono,sans-serif
}

.font-weight-bold {
    font-weight: 700
}

.momentum-leader {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border-top: 1px solid #000;
    justify-content: flex-start;
    align-items: center;
    margin-top: 3rem;
    margin-left: 0;
    margin-right: auto;
    padding-top: 2.5rem;
    display: flex
}

.momentum-leader-badges {
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    justify-content: center;
    align-items: center;
    display: flex
}

.image-full-width {
    width: 100%
}

.flex-spaceb-flex {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: space-between;
    align-items: stretch;
    display: flex
}

.flex-spaceb-flex.margin-top-bottom {
    grid-column-gap: 1.6rem;
    grid-row-gap: 1.6rem
}

.white {
    color: var(--nimbus)
}

.margin-top-tiny {
    margin-top: 1rem
}

.background-color-gray-medium {
    background-color: var(--neutral-11)
}

.margin-top-bottom-small {
    margin-top: 2rem;
    margin-bottom: 2rem
}

.margin-top-bottom-small.hanging-punctuation {
    text-indent: -.3em
}

.margin-top-small {
    margin-top: 2.5rem
}

.margin-top-small.svg {
    min-width: 800px
}

.margin-top-small.width-100 {
    width: 100%
}

.margin-bottom-tiny {
    margin-bottom: 1rem
}

.email-signup-text {
    align-self: baseline;
    display: block
}

.email-signup-arrow-text {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.font-size-tiny {
    font-size: .75rem;
    line-height: 1rem
}

.form-input-textfield {
    border-style: none;
    border-radius: 3px;
    height: 2.75rem;
    display: inline-block
}

.form-input-button {
    background-color: var(--black);
    text-transform: uppercase;
    border-radius: 3px;
    height: 2.75rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-family: DM Mono
}

.email-signup-checkbox {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    display: flex
}

.email-list-form {
    width: 100%;
    margin-top: .5rem
}

.email-form-inputs {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    justify-content: space-between;
    display: flex
}

.email-signup-arrow {
    width: 24px;
    margin-top: 7px;
    margin-left: 8px
}

.nav-separator {
    border-top: 1px solid #979797;
    border-radius: 2px;
    width: 20px;
    height: auto;
    margin-top: .85rem;
    margin-bottom: .85rem;
    margin-left: .5rem;
    padding-top: 0;
    padding-bottom: 0
}

.background-color-shadow-light {
    background-color: var(--shadow-lite)
}

.hero-templates-copy {
    background-color: #dfdfdf;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd8af_tight-stack-pattern-fade.svg);
    background-position: 50% 0;
    background-size: auto 101%
}

.blog-home-quickstack {
    border-bottom: 1px solid #000;
    margin-bottom: 46px;
    padding-bottom: 1rem;
    padding-left: 0;
    padding-right: 0
}

.blog-home-quickstack.border-color-light {
    border-bottom-color: var(--stratus)
}

.cell-32-2 {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    flex-flow: column
}

.page-tabs-nav-wrapper {
    background-color: #0000
}

.page-tabs-nav {
    float: none;
    background-color: var(--shadow-lite);
    vertical-align: baseline;
    border-radius: 50px;
    padding: .5rem;
    display: inline-block
}

.page-tabs-nav.white {
    border: 2px solid var(--nimbus);
    background-color: var(--neutral-0);
    outline-color: var(--nimbus);
    outline-offset: 0px;
    outline-width: 0;
    outline-style: solid;
    box-shadow: 0 2px 20px -9px #0000
}

.page-tabs-nav-link {
    color: var(--neutral-0);
    text-transform: uppercase;
    border: 1px solid #0000;
    border-radius: 50px;
    padding: .5rem 1.75rem
}

.page-tabs-nav-link.w--current {
    border-color: var(--insight);
    color: var(--neutral-0)
}

.page-tabs-nav-link.shadow {
    color: var(--shadow);
    letter-spacing: .5px;
    font-weight: 600;
    transition: all .2s
}

.page-tabs-nav-link.shadow.w--current {
    border-color: var(--shadow);
    background-color: var(--insight);
    letter-spacing: .5px;
    font-weight: 600
}

.page-tabs-sticky {
    z-index: 99;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 20px
}

.page-tabs-sticky.margin-bottom-medium.text-size-tiny {
    z-index: 300
}

.page-tabs-sticky.text-size-tiny {
    position: sticky
}

.quickstack-card {
    border: 2px solid var(--stratus);
    background-color: #f0f0f000
}

.icon-header {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.quickstck-icon {
    z-index: 4;
    background-color: #fff;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    width: 30px;
    min-width: 30px;
    height: 30px;
    margin-bottom: 6px;
    margin-right: 6px;
    padding: 7px;
    display: flex;
    position: static;
    inset: auto 0% 0% auto;
    box-shadow: 0 2px 5px #0003
}

.lottie-animation-1 {
    z-index: -1;
    width: 39%;
    position: absolute;
    inset: -16% -12% auto auto
}

.contact-container {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 4rem;
    display: flex
}

.refine {
    max-width: 280px
}

.right-bottom {
    justify-content: flex-end;
    align-items: flex-end
}

.tertiary-link {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    display: flex
}

.link-arrow {
    vertical-align: baseline;
    flex-flow: row;
    justify-content: flex-start;
    width: 18px;
    margin-left: 0;
    display: inline-flex;
    position: relative;
    inset: 0% 0% 0% auto
}

.link-arrow.is-inverse {
    filter: invert()
}

.link-arrow.external {
    padding-bottom: 5px
}

.eyebrow {
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 25px
}

.eyebrow.text-color-nimbus {
    color: var(--nimbus)
}

.eyebrow.text-color-stratus {
    color: var(--stratus);
    margin-bottom: .5rem
}

.eyebrow.text-color-stratus.hide-2 {
    display: none
}

.eyebrow.text-color-stratus.text-size-tinier {
    font-size: .875rem
}

.lottie-animation-2 {
    z-index: -1;
    width: 39%;
    position: absolute;
    inset: auto auto -16% -12%
}

.two-column-40-60.bottom-margin {
    padding: 0
}

.tabs {
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.background-video {
    border-radius: 9px;
    width: 100%;
    height: 460px;
    box-shadow: 0 2px 11px #0003
}

.quick-stack-36 {
    grid-column-gap: 57px;
    padding: 0
}

.verticals-tab-left-cell {
    grid-column-gap: 0px;
    grid-row-gap: 0px
}

.slide-nav-hidden-2 {
    display: none;
    bottom: -50px
}

.text-family-mono-copy {
    letter-spacing: 1px;
    font-family: DM Mono
}

.lottie-animation-3 {
    z-index: -1;
    width: 39%;
    position: absolute;
    inset: -16% -12% auto auto
}

.lottie-animation-4 {
    z-index: -1;
    width: 39%;
    position: absolute;
    inset: auto auto -16% -12%
}

.lottie-animation-5 {
    z-index: -1;
    width: 39%;
    position: absolute;
    inset: -16% -12% auto auto
}

.square-tag-card-1 {
    background-color: var(--grass);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    padding: 8px 20px;
    font-family: DM Mono;
    font-size: 14px;
    display: inline-block
}

.square-tag-card-1.color-insight {
    background-color: var(--insight)
}

.square-tag-card-1.color-sun {
    background-color: var(--sun)
}

.square-tag-card-1.color-sky {
    background-color: var(--sky)
}

.square-tag-card-1.color-meadow {
    background-color: var(--meadow)
}

.b-testimonial-banner-dark-bkgrnd {
    border-top: 1px none var(--stratus);
    justify-content: flex-start;
    width: 100%;
    height: 64px;
    padding-top: 16px;
    display: flex;
    position: relative;
    inset: auto 0% 0%
}

.b-card-arrow {
    border: 1px solid var(--insight);
    color: var(--insight);
    -webkit-text-stroke-color: var(--insight);
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    transition: all .3s;
    display: flex;
    inset: auto 0% 0% auto
}

.b-card-arrow:hover {
    background-color: var(--insight);
    color: var(--shadow);
    -webkit-text-stroke-color: var(--shadow)
}

.gallery-slide {
    vertical-align: baseline;
    object-fit: fill;
    margin-right: 40px
}

.b-card-prev {
    border: 1px solid var(--insight);
    background-color: var(--shadow);
    -webkit-text-stroke-color: var(--insight);
    border-radius: 0;
    right: 62px
}

.b-card-prev:hover {
    background-color: var(--insight);
    color: var(--shadow);
    -webkit-text-stroke-color: var(--shadow)
}

.b-card-next {
    border: 1px solid var(--insight);
    background-color: var(--shadow);
    border-radius: 0;
    right: 15px
}

.b-card-slider {
    background-color: #0000;
    flex-direction: column;
    align-items: flex-start;
    width: auto;
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    position: static
}

.b-card-slider.labeled_nav {
    top: 0
}

.b-card-mask {
    max-width: 870px;
    overflow: visible
}

.b-card-slide {
    margin-right: 2.5rem
}

.b-card-slider-card {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    border: 1px solid var(--stratus);
    box-shadow: none;
    background-color: #f0f0f0;
    border-radius: 0;
    grid-template-rows: auto;
    grid-template-columns: 2.75rem 1fr;
    grid-auto-columns: 1fr;
    width: auto;
    padding: 0 1.5rem;
    text-decoration: none;
    display: grid
}

.b-card-vertical-bar {
    background-color: var(--stratus);
    flex-direction: column;
    align-items: flex-start;
    width: 1px;
    display: flex
}

.card-content {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2.5rem;
    padding-bottom: 3.5rem;
    padding-right: 3rem;
    display: flex
}

.card-link {
    justify-content: flex-start;
    align-items: flex-end
}

.card-link.compact {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.b-icon-xsmall-card {
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    display: flex
}

.button-2 {
    color: #292929;
    text-align: center;
    background-color: #f0ff45;
    border: 1px solid #292929;
    border-radius: 8rem;
    padding: .75rem 1.5rem;
    font-family: Dmmono,sans-serif;
    font-weight: 400;
    transition: all .275s,all .2s
}

.button-2:hover {
    color: #f0ff45;
    background-color: #292929
}

.button-2.is-secondary {
    color: #000;
    background-color: #0000;
    border: 1px solid #222
}

.button-2.is-secondary:hover {
    background-color: #9fa8a745
}

.container-10 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: relative
}

.quickstack-header {
    width: 100%;
    padding: 0
}

._75--width {
    max-width: 850px
}

.product-hero-image-container {
    border-radius: 0;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 4rem;
    display: flex;
    position: relative;
    overflow: visible
}

.product-hero-image-container.no-margin-top {
    margin-top: 0
}

.tertiary-link-underlined {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: auto;
    display: flex
}

.flex-left {
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: baseline;
    width: 100%;
    display: flex
}

.max-height-40px {
    max-height: 40px
}

.main-2 {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: block
}

.f-margin-bottom-65 {
    margin-bottom: 1.25rem
}

.f-footer-large-grid {
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    margin-top: 3rem;
    margin-left: -.5rem
}

.f-footer-block {
    flex-direction: column;
    margin-bottom: 2rem
}

.f-footer-block.no-header {
    margin-top: 2rem
}

.footer-copyright-social {
    border-top: 1px solid var(--shadow-lite);
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 3rem;
    padding-top: 1rem;
    display: flex
}

.cell-38-2,.cell-39-2,.cell-40 {
    justify-content: center;
    align-items: flex-start
}

.no-padding-2 {
    grid-column-gap: 2rem;
    grid-row-gap: 6.3rem;
    padding: 0
}

.u-img-contain-2 {
    z-index: 5;
    object-fit: contain;
    width: 100%;
    max-width: none;
    height: 100%;
    position: static;
    inset: 0% 0% auto auto
}

.cell-40-2 {
    justify-content: center;
    align-items: flex-start
}

.paragraph-1-5 {
    color: #3d3d3d;
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%
}

.cell-41,.cell-42 {
    justify-content: center;
    align-items: flex-start
}

.quick-stack-40-2 {
    width: 100%;
    padding: 0
}

.tabs-content-8 {
    width: 100%
}

.tab-link-2 {
    background-color: #ddd0;
    border-radius: 140px;
    padding: 6px 24px
}

.tab-link-2.w--current {
    background-color: #f0ff45;
    border: 1px solid #3d3d3d;
    border-radius: 180px;
    padding: 6px 23px
}

.quick-stack-41 {
    grid-column-gap: 57px;
    padding: 0
}

.tab-title-2 {
    color: #292929;
    text-transform: uppercase;
    font-family: Dmsans,sans-serif;
    font-size: 13px;
    font-weight: 700
}

.tabs-11 {
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.resources-tile-wrapper-3 {
    background-color: #fff;
    border: 1px solid #292929;
    border-radius: 0;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    transition: all .2s;
    display: flex;
    overflow: hidden
}

.resources-tile-wrapper-3:hover {
    background-color: #fff;
    box-shadow: inset 0 -20px 0 -6px #f0ff45
}

.resources-tile-wrapper-3:focus-visible,.resources-tile-wrapper-3[data-wf-focus-visible] {
    outline-offset: -3px;
    outline: 3px solid #00e
}

.h3-heading-4 {
    letter-spacing: -.02em;
    margin-top: 0;
    font-size: 48px;
    line-height: 1.2
}

.button-cursor-5 {
    clear: none;
    color: #4245ff;
    white-space: nowrap;
    background-color: #0000;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd35_arrow-cursor-right.svg);
    background-position: 96%;
    background-repeat: no-repeat;
    background-size: auto;
    margin-bottom: 0;
    padding: 0 22% 0 0;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 900;
    line-height: 150%;
    text-decoration: none;
    transition: background-position .2s
}

.button-cursor-5:hover {
    color: #0004e1;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccfda_arrow-cursor-hover-right.svg);
    background-position: 100%
}

.button-cursor-5:active {
    color: #0003a1;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccf70_arrow-cursor-pressed-right.svg)
}

.button-cursor-5.cc-hero {
    color: #292929;
    text-transform: uppercase;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd922_Arrow.svg);
    background-repeat: no-repeat;
    background-size: auto;
    align-self: flex-start;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 500
}

.quick-stack-38-2-2 {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    width: 100%;
    height: 400px;
    padding: 0
}

.cell-38-2 {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: flex
}

.cell-39-2 {
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.quick-stack-39-2 {
    grid-column-gap: 29px;
    grid-row-gap: 32px;
    padding: 0
}

.cell-40-2 {
    grid-column-gap: 16px;
    grid-row-gap: 16px
}

.tab-link-2-2 {
    background-color: #ddd0;
    border-radius: 140px;
    padding-top: 6px;
    padding-bottom: 6px
}

.tab-link-2-2.w--current {
    background-color: #f0ff45;
    border: 1px solid #3d3d3d;
    border-radius: 180px;
    padding-top: 6px;
    padding-bottom: 6px
}

.code-embed {
    background-color: #f7f7f7;
    padding-top: 60px;
    padding-right: 60px;
    display: block
}

.resources-tile-wrapper-3-2:focus-visible,.resources-tile-wrapper-3-2[data-wf-focus-visible] {
    outline-offset: -3px;
    outline: 3px solid #00e
}

.code-embed-4 {
    justify-content: center;
    align-items: flex-start;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.tab-menue-white-2 {
    background-color: #fff;
    border-radius: 70px;
    justify-content: center;
    align-items: center;
    margin-bottom: 75px;
    padding: 9px;
    display: flex
}

.tab-link-2-2 {
    background-color: #ddd0;
    border-radius: 140px;
    padding: 6px 24px
}

.tab-link-2-2.w--current {
    background-color: #f0ff45;
    border: 1px solid #3d3d3d;
    border-radius: 180px;
    padding: 6px 23px
}

.quick-stack-39-2 {
    grid-column-gap: 57px;
    padding: 0
}

.tab-title-2-2 {
    color: #292929;
    text-transform: uppercase;
    font-family: Dmsans,sans-serif;
    font-size: 13px;
    font-weight: 700
}

.tabs-content-8-2 {
    width: 100%
}

.quick-stack-40-2 {
    grid-column-gap: 57px;
    padding: 0
}

.f-margin-bottom-65-2 {
    margin-bottom: 33px
}

.text-link-allcaps-2 {
    color: #292929;
    text-transform: uppercase;
    font-family: DM Mono;
    text-decoration: none;
    transition: all .2s;
    box-shadow: inset 0 -2px #292929
}

.text-link-allcaps-2:hover {
    box-shadow: inset 0 -11px #f0ff45
}

.text-link-allcaps-2.no-margin-bottom.text-size-small {
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 500
}

.text-link-allcaps-2.no-margin-bottom.text-size-small.text-color-nimbus {
    box-shadow: inset 0 -2px 0 0 var(--nimbus);
    color: var(--nimbus);
    font-weight: 300
}

.text-link-allcaps-2.no-margin-bottom.text-size-small.text-color-nimbus:hover {
    box-shadow: inset 0 -2px 0 0 var(--insight)
}

.text-link-allcaps-2.no-margin-bottom.text-size-small.text-color-nimbus-2 {
    color: #f0f0f0;
    font-weight: 300;
    box-shadow: inset 0 -2px #f0f0f0
}

.text-link-allcaps-2.no-margin-bottom.text-size-small.text-color-nimbus-2:hover {
    box-shadow: inset 0 -2px #f0ff45
}

.right-arrow-3-2 {
    color: #292929;
    background-color: #0000;
    border: 1px solid #292929;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 6px;
    transition: all .3s;
    display: flex;
    inset: auto 0% -90px auto
}

.right-arrow-3-2:hover {
    color: #fff;
    background-color: #292929;
    border-color: #292929
}

.resources-tile-wrapper-3-2 {
    background-color: #fff;
    border: 1px solid #292929;
    border-radius: 0;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    transition: all .2s;
    display: flex;
    overflow: hidden
}

.resources-tile-wrapper-3-2:hover {
    background-color: #fff;
    box-shadow: inset 0 -20px 0 -6px #f0ff45
}

.resources-tile-wrapper-3-2:focus-visible,.resources-tile-wrapper-3-2[data-wf-focus-visible] {
    outline-offset: -3px;
    outline: 3px solid #00e
}

.h3-heading-4-2 {
    letter-spacing: -.02em;
    margin-top: 0;
    font-size: 48px;
    line-height: 1.2
}

.left-arrow-3-2 {
    color: #292929;
    background-color: #0000;
    border: 1px solid #292929;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 6px;
    transition: all .3s;
    display: flex;
    inset: auto 60px -90px auto
}

.left-arrow-3-2:hover {
    color: #fff;
    background-color: #292929
}

.button-cursor-5-2 {
    clear: none;
    color: #4245ff;
    white-space: nowrap;
    background-color: #0000;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd35_arrow-cursor-right.svg);
    background-position: 96%;
    background-repeat: no-repeat;
    background-size: auto;
    margin-bottom: 0;
    padding: 0 22% 0 0;
    font-size: 1rem;
    font-weight: 900;
    line-height: 150%;
    text-decoration: none;
    transition: background-position .2s
}

.button-cursor-5-2:hover {
    color: #0004e1;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccfda_arrow-cursor-hover-right.svg);
    background-position: 100%
}

.button-cursor-5-2:active {
    color: #0003a1;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccf70_arrow-cursor-pressed-right.svg)
}

.button-cursor-5-2.cc-hero-2 {
    color: #292929;
    text-transform: uppercase;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd922_Arrow.svg);
    background-repeat: no-repeat;
    background-size: auto;
    align-self: flex-start;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 500
}

.cell-39-2,.cell-40-2 {
    justify-content: center;
    align-items: flex-start
}

.cell-39-2,.cell-40-2 {
    justify-content: center;
    align-items: flex-start
}

.quick-stack-38-2 {
    width: 100%;
    padding: 0
}

.no-padding-2-2 {
    grid-column-gap: 2rem;
    grid-row-gap: 6.3rem;
    padding: 0
}

.u-img-contain-2-2 {
    z-index: 5;
    object-fit: contain;
    width: 100%;
    max-width: none;
    height: 100%;
    position: static;
    inset: 0% 0% auto auto
}

.cell-38-2 {
    justify-content: center;
    align-items: flex-start
}

.paragraph-1-5-2 {
    color: #3d3d3d;
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%
}

.cell-39-2,.cell-40-2,.cell-41-2 {
    justify-content: center;
    align-items: flex-start
}

.paragraph-1-6 {
    color: #3d3d3d;
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%
}

.cell-42-2,.cell-43 {
    justify-content: center;
    align-items: flex-start
}

.customer-logo {
    z-index: 4;
    background-color: #fff;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    width: 140px;
    min-width: auto;
    max-width: none;
    height: 55px;
    margin-bottom: 12px;
    margin-right: 12px;
    padding: 9px 14px;
    display: flex;
    position: absolute;
    inset: auto 0% 0% auto;
    box-shadow: 0 2px 5px #0003
}

.image-44 {
    max-height: 100%
}

.company-logo {
    width: 180px;
    max-width: 180px
}

.customer-info {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    justify-content: center;
    align-items: flex-start;
    padding-bottom: 4rem
}

.padding-right-small {
    padding-right: 1rem
}

.margin-top-bottom-tiny {
    text-wrap: pretty;
    margin-top: 1rem;
    margin-bottom: 1.5rem
}

.journey_card {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    position: relative
}

.journey_card._100-percent {
    width: 100%
}

.journey_card_text {
    background-color: var(--neutral-0);
    width: 50%;
    padding-top: 4rem;
    padding-bottom: 4rem;
    position: relative
}

.journey_card_text.left {
    padding-left: 5rem
}

.journey_card_text.right {
    padding-left: 0;
    padding-right: 5rem
}

.journey_card_image {
    background-color: var(--nimbus);
    width: 45%;
    display: block;
    position: relative;
    overflow: hidden
}

.journey_card_image.right {
    width: 40%
}

.journey_card_image.right.wider {
    width: 50%
}

.journey_card_image.left {
    background-color: var(--nimbus);
    width: 40%
}

.journey_card_inner {
    background-color: var(--neutral-0);
    justify-content: space-between;
    align-items: stretch;
    min-height: 30rem;
    display: flex;
    position: relative
}

.journey_card_inner.text-right {
    flex-flow: row-reverse;
    min-height: 29rem
}

.journey_card_image_img {
    width: auto;
    height: 100%;
    display: block;
    position: absolute;
    top: 0
}

.journey_card_image_img.right {
    background-color: var(--nimbus);
    object-fit: contain;
    width: 420px;
    right: 0
}

.journey_card_image_img.right.lottie-backer {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66919a2cf19b47a964635d25_HP-1_V3.webp);
    background-position: 0%;
    background-size: cover
}

.journey_card_image_img.right.bottom-align {
    object-position: 50% 100%;
    width: 430px
}

.journey_card_image_img.right.fpo {
    filter: blur(5px)
}

.journey_card_image_img.right.speed {
    object-position: 100% 25%;
    width: auto
}

.journey_card_image_img.right.wider {
    width: 520px
}

.journey_card_image_img.left {
    object-fit: contain;
    left: 0
}

.journey_card_image_img.left.bottom-align {
    object-position: 50% 100%
}

.journey_card_image_img.left.fpo {
    filter: blur(5px)
}

.journey_card_content {
    border: 2px solid var(--shadow);
    position: relative
}

.journey_card_color_bar {
    width: 26px;
    height: 100%;
    position: absolute;
    top: 0
}

.journey_card_color_bar.left {
    border-right: 2px solid var(--shadow)
}

.journey_card_color_bar.left.green {
    background-color: var(--grass)
}

.journey_card_color_bar.right {
    border-left: 2px solid var(--shadow);
    right: 0
}

.journey_card_color_bar.right.blue {
    background-color: var(--sky)
}

.journey_card_color_bar.orange {
    background-color: var(--sun)
}

.journey_card_color_bar.gray {
    background-color: var(--stratus)
}

.journey_card_color_bar.pink {
    background-color: var(--meadow)
}

.margin-top-large {
    margin-top: 6rem
}

.nav-dropdown-list-column-link {
    color: #fff;
    max-width: 135px;
    margin-bottom: 7px;
    padding: .25rem 0 .25rem .5rem;
    font-family: Dmsans,sans-serif;
    font-size: 14px;
    line-height: 1.1rem;
    transition: all 40ms;
    display: block
}

.nav-dropdown-list-column-link:hover {
    color: var(--nimbus);
    background-color: #ffffff1a
}

.nav-dropdown-list-column-link:active {
    color: #fff
}

.swiper.carousel-swiper {
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.swiper-wrapper {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    height: 380px;
    display: flex
}

.card_swiper.swiper {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto
}

.card_swiper.swiper.margin-top-medium {
    margin-top: 0
}

.card_swiper_arrows {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    justify-content: flex-end;
    align-items: center;
    display: flex
}

.card_swiper_arrows.margin-top-small {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem
}

.card_swiper_arrow {
    background-color: var(--neutral-0);
    border: 2px solid #000;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    transition: all .2s;
    display: flex
}

.card_swiper_arrow:hover {
    background-color: var(--insight)
}

.card_swiper_arrow.swiper_arrow_prev {
    border-width: 1px;
    border-color: var(--shadow);
    cursor: pointer;
    border-right-style: none;
    border-radius: 0%
}

.card_swiper_arrow.swiper_arrow_next {
    border: 1px solid var(--shadow);
    cursor: pointer;
    border-radius: 0%
}

.card_swiper_arrow_img {
    width: 20px
}

.card_swiper_arrow_img.prev {
    transform-style: preserve-3d;
    width: 18px;
    position: relative;
    right: 2px;
    transform: rotateX(0)rotateY(180deg)rotate(0)
}

.card_swiper_arrow_img.next {
    width: 18px;
    position: relative;
    left: 2px
}

.wrap-v-small-2 {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-direction: column;
    display: flex
}

.subheading {
    color: #4b5563;
    letter-spacing: -.3px;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 32px
}

.countdown-container {
    grid-column-gap: 48px;
    grid-row-gap: 48px;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 625px;
    display: flex
}

.wrap-v-regular-2 {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    flex-direction: column;
    display: flex
}

.countdown-asset {
    width: 100%;
    max-width: 590px
}

.icon-regular-2 {
    flex: none;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    display: flex
}

.icon-regular-2.icon-nudge {
    margin-top: 1px
}

.icon-regular-2.icon-nudge.transparent {
    opacity: 0
}

.cta-card-outline-2 {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    border-radius: 16px;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding: 32px;
    transition: all .3s;
    display: flex;
    position: relative;
    overflow: hidden
}

.cta-card-outline-2:hover {
    box-shadow: 0 24px 64px #d9d9d97a
}

.countdown-grid {
    grid-column-gap: 72px;
    grid-row-gap: 72px;
    grid-template-rows: auto
}

.wrap-v-x-small {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-direction: column;
    display: flex
}

.scrollbar-css {
    display: none
}

.icon-large {
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    display: flex
}

.wrap-v-x-large {
    grid-column-gap: 11px;
    grid-row-gap: 11px;
    flex-direction: column;
    display: flex
}

.countdown-side-right {
    background-color: #f3f4f6;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 155px 32px;
    display: flex;
    position: absolute;
    inset: 0% 0% 0% auto
}

.wrap-v-regular-3 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-direction: column;
    display: flex
}

.image-cover-3 {
    object-fit: cover;
    width: 100%;
    height: 100%
}

.margin-rl-auto {
    margin-left: auto;
    margin-right: auto
}

.margin-rl-auto.max-width-medium.margin-zero {
    margin-left: 0
}

.background-color-light-2 {
    background-color: var(--nimbus)
}

.product-subheading {
    color: var(--neutral-0);
    text-align: center;
    letter-spacing: .5px;
    text-transform: uppercase;
    text-wrap: balance;
    width: 75%;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    font-family: Dmmono,sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.75rem
}

.product-subheading.no-margin-bottom {
    margin-bottom: 0
}

.product-subheading.text-color-dark {
    color: var(--shadow-lite)
}

.text-style-mono {
    font-family: Dmmono,sans-serif
}

.text-style-mono.no-padding {
    flex: 0 auto;
    width: auto;
    margin-bottom: 0;
    display: flex
}

.text-style-mono.hanging-punctuation {
    text-indent: -.55rem;
    margin-top: 1rem
}

.text-style-mono.text-style-allcaps {
    font-weight: 400
}

.text-style-mono.text-style-allcaps.text-size-tiny {
    position: relative
}

.text-style-mono.text-style-allcaps.text-size-tiny.key-text {
    z-index: 1;
    background-color: var(--neutral-0);
    padding-top: .5rem;
    padding-bottom: .5rem
}

.text-style-mono.text-style-thin {
    font-weight: 300
}

.text-style-mono.text-size-1-4 {
    font-size: 1.4rem
}

.text-style-mono.text-color-meadow {
    color: var(--meadow)
}

.text-style-mono.text-style-allcaps.text-size-tiny.text-style-underlined {
    border-bottom: 1px solid #9fa8a7
}

.button-4 {
    color: #292929;
    text-align: center;
    background-color: #f0ff45;
    border: 1px solid #292929;
    border-radius: 8rem;
    padding: .65rem 1.5rem;
    font-family: Dmmono,sans-serif;
    font-weight: 400;
    transition: all .275s,all .2s
}

.button-4:hover {
    color: #f0ff45;
    background-color: #292929
}

.button-4.background-color-black {
    color: #fff;
    background-color: #000
}

.text-style-mono-2 {
    font-family: Dmmono,sans-serif
}

.text-style-mono-2.no-padding-2 {
    margin-bottom: 0
}

.grid-internal {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: #000;
    margin-top: 0;
    margin-bottom: 2rem;
    padding: 0
}

.grid-internal.on-dark {
    background-color: var(--neutral-10)
}

.grid-internal._3x3 {
    grid-column-gap: .9px;
    grid-row-gap: .9px;
    background-color: var(--shadow)
}

.image-absolute-contain {
    object-fit: contain;
    width: 100%;
    max-width: 100%;
    height: auto;
    position: absolute;
    inset: auto 0 0 auto;
    overflow: visible
}

.image-absolute-contain.right {
    object-position: 100% 50%
}

.image-absolute-contain.fpo {
    background-color: #d8d8d8;
    height: 100%
}

.cell-position-relative {
    position: relative
}

.image-filter-white {
    filter: brightness(1340%)grayscale();
    margin-right: 12px
}

.text-span-5 {
    text-decoration: line-through
}

.customer-page-title {
    font-size: 2.8rem
}

.div-block-193 {
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    margin-bottom: 12px;
    display: flex
}

.customer-logo-wrapper {
    background-color: var(--neutral-0);
    border-radius: 6px;
    padding: 18px
}

.customers-more-about {
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    display: flex
}

.customer-link {
    box-shadow: inset 0 -2px 0 0 var(--shadow);
    transition: all .2s
}

.customer-link:hover {
    box-shadow: inset 0 -12px 0 0 var(--insight)
}

.customer-data-cell {
    grid-column-gap: 11px;
    grid-row-gap: 11px;
    border-top: 1px solid var(--shadow);
    padding-top: 13px
}

.customer-rich-text {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.customer-rich-text blockquote {
    background-color: var(--neutral-0);
    box-shadow: inset 1svw 0 0 0 var(--insight);
    border-left-style: none;
    border-left-width: 10px;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 0 3rem;
    font-size: 1.8rem;
    transition: all .3s
}

.customer-rich-text blockquote:hover {
    box-shadow: inset 2svw 0 0 0 var(--insight)
}

.customer-rich-text h2,.customer-rich-text h3 {
    margin-top: 60px
}

.customer-rich-text h4,.customer-rich-text h5 {
    margin-top: 40px
}

.customer-rich-text h6 {
    text-transform: uppercase;
    -webkit-text-fill-color: inherit;
    background-clip: border-box;
    border-bottom: 1px solid #000;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 40px;
    margin-bottom: -1.5rem;
    margin-right: auto;
    padding: 0 9px 0 0;
    font-family: Dmmono,sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    display: flex;
    overflow: visible
}

.customer-rich-text p {
    text-align: left;
    font-family: Dmsans,sans-serif;
    font-weight: 400
}

.customer-rich-text a {
    text-decoration: underline
}

.stats {
    padding-top: 13px
}

.stats._1 {
    background-color: var(--shadow);
    border-top-style: none;
    border-top-width: 2px;
    padding: 30px 14px
}

.stats._1.invert-blue {
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: var(--sky);
    border-right-style: solid;
    border-right-width: 1px;
    border-right-color: var(--sky);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--sky);
    border-left-style: solid;
    border-left-width: 1px;
    border-left-color: var(--sky);
    background-color: #0000
}

.stats._2 {
    background-color: var(--shadow);
    border-top-style: none;
    border-top-width: 2px;
    padding: 30px 14px
}

.stats._3 {
    background-color: var(--shadow);
    border-top-style: none;
    padding: 30px 14px
}

.customer-stat {
    color: var(--shadow);
    margin-bottom: 8px;
    font-family: Dmmono,sans-serif;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 100%
}

.customer-stat.blue {
    color: var(--sky)
}

.customer-stat-label {
    text-transform: uppercase;
    max-width: 300px;
    font-family: Dmmono,sans-serif;
    font-size: 14px;
    line-height: 1.2rem
}

.no-margins {
    padding: 0
}

.job-location {
    font-size: 1.2rem
}

.loading-container {
    opacity: 1;
    transition: opacity .2s
}

.root {
    transition: opacity .2s
}

.job-listing {
    border-bottom: 1px solid #e9e9e9;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex
}

.department-section {
    margin-bottom: 3rem
}

.job-title {
    text-decoration: none
}

.job-title:hover {
    color: #0076d1
}

.lottie-loading-animation-2 {
    width: 50%;
    margin-left: auto;
    margin-right: auto
}

.careers-container {
    max-width: 100%;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto
}

.submit-button-2 {
    display: none
}

.tertiary-link-margin-top {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 40px;
    display: block;
    position: static
}

.text-block-22-2 {
    color: #171717;
    -webkit-text-stroke-color: #f0f0f0;
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: 14px
}

.text-block-22-2:focus {
    border: 1px solid #c5cd35;
    border-radius: 20px;
    padding: 5px 20px
}

.tab_menu {
    vertical-align: middle;
    border-radius: 150px;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
    margin-bottom: 4rem;
    padding: .5rem;
    display: inline-block
}

.tab_menu.background-color-light-2 {
    margin-top: 1rem
}

.tab_menu.background-color-nimbus {
    background-color: var(--nimbus)
}

.tab_menu.background-color-white {
    background-color: var(--neutral-0)
}

.tab_menu_link {
    text-transform: uppercase;
    background-color: #ddd0;
    border: 1px solid #0000;
    border-radius: 150px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px
}

.tab_menu_link.w--current {
    background-color: var(--insight);
    border-color: #000
}

.tab_menu_link.nimbus {
    background-color: var(--nimbus)
}

.tab_menu_link.nimbus.w--current,.tab_menu_link.light.w--current {
    background-color: var(--insight)
}

.backgound-color-white {
    background-color: var(--nimbus)
}

.flex-left {
    background-color: #f0f0f0;
    justify-content: flex-start;
    align-items: flex-start
}

.margin-bottom-medium {
    margin-bottom: 4rem
}

.grid-gap-4rem {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem
}

.grid-gap-3rem {
    grid-column-gap: 3.3rem;
    grid-row-gap: 3.3rem
}

.text-color-yellow {
    color: var(--insight)
}

._404 {
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.max-height-100px {
    max-height: 100px
}

.wrapper-partner-logo {
    flex: 0 auto;
    order: 0;
    justify-content: center;
    align-self: center;
    align-items: center;
    height: 80px;
    max-height: 80px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 0;
    padding-bottom: 0;
    display: inline-flex;
    position: static;
    overflow: clip
}

.accordion-trigger-2 {
    z-index: 3;
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 14px 24px;
    text-decoration: none;
    display: flex;
    position: sticky;
    top: 0
}

.container-13 {
    opacity: 1;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px
}

.row-3 {
    flex-wrap: wrap;
    place-content: stretch flex-start;
    align-items: stretch;
    margin-left: -16px;
    margin-right: -16px;
    display: flex
}

.section-18 {
    background-color: #fcfcfc
}

.section-18.g-section-padding-small {
    background-color: var(--nimbus)
}

.announcement-ribbon {
    z-index: 99;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
    display: block;
    position: relative;
    overflow: hidden
}

.announcement-ribbon.hide-2,.announcement-ribbon.show {
    display: block
}

.card-icon-default-2 {
    background-color: #f8f8f8;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    margin-right: 1rem;
    padding: 32px;
    display: flex
}

.card-icon-icon {
    width: 32px;
    height: 32px;
    margin-bottom: .25rem
}

.section-partner-cta {
    background-color: var(--insight);
    padding-top: 4rem;
    padding-bottom: 4rem
}

.template-thumbnail {
    max-width: 50%;
    position: absolute;
    inset: auto 0% 0% auto
}

.hidden {
    display: none
}

.form-block-4 {
    max-width: 600px
}

.image-cover {
    object-fit: cover;
    width: 100%;
    height: 101%;
    transition: all .2s
}

.image-cover:hover {
    transform: none
}

.feature-outline-l {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    border-radius: 0;
    flex-direction: column;
    align-items: stretch;
    padding: 24px 24px 0;
    transition: all .3s;
    display: flex
}

.feature-outline-l:hover {
    box-shadow: 0 24px 64px #d9d9d97a
}

.resources-3-column {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    flex-flow: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.wrap-v-x-small-2 {
    z-index: 5;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    position: relative
}

.feature-image-l {
    aspect-ratio: 16/9;
    background-color: var(--stratus);
    border-radius: 0;
    height: auto;
    overflow: hidden
}

.resources-flex {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    padding: 2rem;
    display: flex
}

.resources-flex.background-color-nimbus {
    flex-flow: column;
    justify-content: flex-start;
    display: flex
}

.resources-flex.background-color-sky {
    background-color: var(--sky)
}

.resources-flex.background-color-green {
    background-color: var(--grass)
}

.resources-flex.background-color-pink {
    background-color: var(--meadow)
}

.resources-flex.background-color-white {
    background-color: #fff;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0
}

.resources-flex.align-right {
    justify-content: flex-start;
    align-items: flex-end
}

.resources-card-dark {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    border: 1px solid var(--shadow-lite);
    background-color: var(--shadow-lite);
    border-radius: 0;
    flex-flow: column;
    align-items: stretch;
    padding: 24px 24px 0;
    transition: all .3s;
    display: flex
}

.resources-card-dark:hover {
    outline-color: var(--shadow-lite);
    outline-offset: 0px;
    background-color: #29292900;
    border-style: solid;
    border-color: #464646;
    outline-width: 10px;
    outline-style: none
}

.resources-card-dark.text-color-light {
    border-color: var(--shadow-lite);
    height: 100%;
    padding: 0
}

.resources-card-dark.text-color-light:hover {
    outline-color: var(--stratus);
    outline-offset: 0px;
    color: var(--stratus);
    border-style: solid;
    outline-width: 0;
    outline-style: solid
}

.resources-card-dark.text-color-light.no-hover:hover {
    background-color: var(--shadow-lite);
    outline-color: var(--nimbus);
    color: var(--nimbus)
}

.cta-cards-link {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: auto;
    font-size: 0;
    font-weight: 200;
    text-decoration: none;
    display: flex
}

.cta-cards-link.text-color-light:hover {
    color: var(--insight)
}

.background-color-nimbus {
    background-color: var(--nimbus)
}

.list-gid-col-2 {
    grid-column-gap: 3rem;
    grid-row-gap: 0rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-bottom: 0;
    padding-left: 30px;
    display: grid
}

.page-tabs-border-section {
    border: 1px solid var(--stratus);
    background-color: var(--neutral-0);
    width: 100%;
    max-width: 1000px;
    margin-bottom: 4rem;
    padding: 3rem 3rem 4rem;
    position: relative;
    overflow: hidden
}

.page-tabs-border-section.page-tabs-callout {
    background-color: var(--insight)
}

.page-tabs-border-section.no-style {
    background-color: #0000;
    border-style: none;
    margin-bottom: 0;
    padding: 0
}

.logos-grid-col-4 {
    grid-column-gap: 4.5rem;
    grid-row-gap: 2rem;
    flex-flow: wrap;
    grid-template: ".""Area"/1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    place-items: center;
    display: grid
}

.max-width-half {
    max-width: 50%
}

.flex-left-center-small {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    justify-content: flex-start;
    align-items: center;
    margin-right: 1rem;
    padding: .5rem;
    display: flex
}

.page-tabs-center {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.padding-left-small {
    padding-left: 1.875rem
}

.grid-with-borders-alt {
    grid-column-gap: 1px;
    grid-row-gap: 0px;
    background-color: var(--shadow-lite);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr
}

.padding-top-tiny {
    padding-top: 1rem
}

.padding-top-tiny.padding-bottom-lrg {
    margin-bottom: 1.1rem
}

.padding-bottom-tiny {
    padding-bottom: 1rem
}

.image-absolute-contain-2 {
    object-fit: contain;
    object-position: 100% 0%;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0
}

.momentum-badge {
    width: 120px
}

.striped-divider-gray {
    aspect-ratio: auto;
    background-color: var(--nimbus);
    object-fit: cover;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9e6_light-lines.svg);
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: auto 150px;
    height: 150px
}

.max-width-large-2 {
    max-width: 850px
}

.margin-top-bottom-tiny-2 {
    margin-top: 1.75rem;
    margin-bottom: 1.75rem
}

.product-subheading-w-icon {
    grid-column-gap: .25rem;
    grid-row-gap: .25rem;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.paragraph-1134 {
    display: block
}

.paragraph-1135,.paragraph-1136 {
    display: flex
}

.hero-grid-col-2 {
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    padding: 0
}

.grid-col-2-4rem {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    padding: 0;
    display: grid
}

.grid-col-2-4rem.margin-small.small-gap {
    grid-column-gap: 1.7rem
}

.grid-col-2-4rem.justify-content {
    place-items: stretch stretch
}

.padding-top-medium {
    padding-top: 4rem
}

.grid-col-2-3rem {
    grid-column-gap: 1.7rem;
    grid-row-gap: 3rem;
    grid-template-columns: .75fr .6fr;
    padding: 0
}

.grid-col-2-3rem.home {
    grid-column-gap: 3rem;
    grid-template-columns: 1.5fr 1.35fr;
    max-width: 975px;
    margin-left: auto;
    margin-right: auto
}

.tertiary-link-dark {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    font-size: .9rem;
    text-decoration: none;
    display: flex
}

.tertiary-link-dark.hide {
    display: flex
}

.img-round {
    border-radius: 200px;
    max-width: 100px;
    margin-top: 1rem;
    padding-top: 0;
    padding-bottom: 0
}

.features-stack-icon {
    justify-content: center;
    align-items: center;
    height: 35px;
    display: flex
}

.features-stack-cell {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    justify-content: center;
    align-items: center
}

.cell-50 {
    justify-content: center;
    align-items: flex-start
}

.heading-24 {
    margin-top: 40px
}

.max-width-medium-3-2 {
    max-width: 40rem
}

.infinite-marquee-wrapper-2 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 0;
    padding-top: 40px;
    padding-bottom: 30px;
    display: flex;
    overflow: hidden
}

.background-rad-banner {
    background-color: #171717
}

.paragraph-1-8 {
    color: #575757;
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%
}

.heading-13 {
    color: #f8f8f8;
    text-align: center;
    margin-bottom: .8rem
}

.container-wrap-x {
    border: 1px solid #fff;
    border-radius: 50px;
    margin-bottom: 3.9rem;
    margin-left: 3.5rem;
    margin-right: 3.5rem
}

.g-text-color-neutral-0-2 {
    color: #fff
}

.row-4 {
    flex-wrap: wrap;
    place-content: stretch center;
    align-items: flex-start;
    margin-left: -16px;
    margin-right: -16px;
    display: flex
}

.row-4.align-center {
    color: #fff;
    align-items: center
}

.button-cursor-7 {
    clear: none;
    color: #4245ff;
    white-space: nowrap;
    background-color: #0000;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd35_arrow-cursor-right.svg);
    background-position: 96%;
    background-repeat: no-repeat;
    background-size: auto;
    flex: 0 auto;
    margin-bottom: 0;
    padding: 0 30px 0 0;
    font-size: 1rem;
    font-weight: 900;
    line-height: 150%;
    text-decoration: none;
    transition: background-position .2s;
    display: inline-block
}

.button-cursor-7:hover {
    color: #0004e1;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccfda_arrow-cursor-hover-right.svg);
    background-position: 100%
}

.button-cursor-7:active {
    color: #0003a1;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccf70_arrow-cursor-pressed-right.svg)
}

.button-cursor-7.cc-blue-lite-learn-more {
    color: #6690ff;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd47e_Vector.webp)
}

.container-22 {
    opacity: 1;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px
}

.container-22.g-mg-bottom-xxlarge.weekly-webinar-header {
    z-index: 2;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd796_game-changers.webp);
    background-position: 0 0;
    background-size: cover;
    border-radius: 50px;
    height: 600px;
    margin-bottom: 0;
    position: relative
}

.container-22.g-mg-bottom-xxlarge.weekly-webinar-header.weekly-webinar-mobile {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd73d_WeeklyDemo.webp);
    display: block
}

.text-block-24 {
    color: #f8f8f8;
    text-align: center;
    margin-bottom: 2rem;
    font-family: Dmsans,sans-serif;
    font-size: 27px;
    font-weight: 300
}

.paragraph-hero-4 {
    color: #575757;
    margin-top: 1.5rem;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 150%
}

.paragraph-hero-4.cc-no-top-margin {
    margin-top: 0
}

.paragraph-hero-4.cc-no-top-margin.g-mg-bottom-large {
    color: #000;
    -webkit-text-stroke-color: black;
    font-style: normal
}

.rad-banner {
    grid-row-gap: 16px;
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    padding: 32px 24px 24px;
    display: flex;
    position: relative;
    overflow: hidden
}

.rad-banner.rad-banner-asset {
    color: #222;
    -webkit-text-stroke-color: #575757;
    background-color: #222;
    border-style: none;
    border-color: #575757
}

.wld-image-curve {
    border-radius: 20px
}

.ebookformpopupwrapper {
    z-index: 12;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    background-color: #0000001c;
    width: 100vw;
    height: 100vh;
    padding-top: 0;
    display: none;
    position: fixed
}

.ebookformpopup {
    z-index: 3;
    background-color: #f8f8f8;
    border: 2px solid #000;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    display: flex;
    position: absolute;
    inset: 42% auto auto 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 20px 5px #ffffff6b
}

.ebookpopupclose {
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 2px 7px;
    position: absolute;
    inset: 3% 2% auto auto
}

.video-wrapper {
    background-color: var(--nimbus);
    transition: opacity .2s
}

.video-wrapper.crop {
    transform: scale(1.01)
}

.video-wrapper.embedded {
    aspect-ratio: 167/104
}

.video-wrapper.fpo {
    opacity: .95;
    filter: saturate(200%)blur(10px);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9d6_fpo.svg);
    background-size: auto
}

.text-underline {
    text-decoration: underline
}

.tab-journey-card-inner {
    z-index: 2;
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-items: flex-start;
    display: flex
}

.tab-journey-text {
    flex-direction: column;
    align-items: flex-start;
    width: 50%
}

.tab-journey-nav {
    border-top: 1px solid var(--neutral-0);
    border-bottom: 1px solid var(--shadow-lite);
    background-color: #0000
}

.tab-journey-link {
    color: var(--neutral-0);
    text-transform: uppercase;
    margin-left: 0;
    margin-right: 0;
    padding: 2rem 0;
    font-size: 14px;
    line-height: 1.25rem;
    transition: all .2s
}

.tab-journey-link:hover {
    color: var(--stratus)
}

.tab-journey-link.w--current {
    color: var(--insight)
}

.tab-card-nav-menu {
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    display: flex
}

.tab-journey-sticky-nav {
    z-index: 99;
    background-color: var(--shadow);
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1.5rem;
    position: sticky;
    top: 0
}

.tab-journey-card {
    color: var(--neutral-0);
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    padding-top: 10rem;
    overflow: hidden
}

.grid-bg {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd8a9_Grid.webp);
    background-position: 50% 0;
    background-size: contain
}

.journey-start-line {
    border-style: none dashed dashed;
    border-width: 2px 1px 1px;
    border-color: var(--stratus)var(--shadow-lite)var(--shadow-lite);
    width: 40%;
    height: 12px;
    margin-top: 2rem
}

.resource-card {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    background-color: var(--nimbus);
    flex-flow: column;
    width: 100%;
    height: 100%;
    min-height: 18rem;
    padding: 2rem;
    display: flex
}

.resource-card.news {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem
}

.legal-container {
    max-width: 870px;
    min-height: 400px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden
}

.header-simple,.partner-block {
    margin-bottom: 2rem
}

.form-description {
    padding-left: 0;
    padding-right: 4rem
}

.quickstack {
    padding: 0
}

.team {
    min-width: 120px;
    margin-bottom: 1rem
}

.team-name {
    margin-bottom: 0
}

.breadcrumb {
    margin-bottom: 1rem
}

.breadcrumb-divider {
    color: var(--stratus)
}

.infinite-marquee-logos-awards {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    flex: none;
    display: flex
}

.infinite-marquee-logos-awards.cc-badges {
    grid-column-gap: 32px;
    padding-right: 32px
}

.marquee-badges-awards {
    flex: none;
    width: 110px;
    height: 110px
}

.image-wrapper {
    margin: 20px
}

.image-wrapper.snowpark {
    width: 160px
}

.image-50,.image-51,.image-52,.image-50-2,.image-51-2,.image-52-2,.image-53 {
    filter: grayscale()
}

.integration-list {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-flow: wrap;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: flex-start;
    display: grid
}

.div-block-196 {
    grid-column-gap: 27px;
    grid-row-gap: 27px;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.compare-columns {
    width: 80%;
    display: flex
}

.compare-block {
    width: 50%;
    padding-right: 2rem
}

.compare-description {
    margin-top: 4.5rem;
    margin-bottom: 2rem;
    padding-right: 2rem
}

.compare-section {
    display: flex
}

.resource-author {
    margin-bottom: 0;
    font-weight: 700
}

.resources-3-columns {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.paragraph-1-10 {
    color: #575757;
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%
}

.date-time {
    border-left: 1px solid var(--shadow-lite);
    margin-bottom: 2rem;
    padding-left: 1rem;
    line-height: 1rem
}

.resources-2-columns {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.hero-img-vid-wrapper {
    background-color: var(--shadow);
    border-radius: 2px;
    max-width: 975px;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden
}

.hero-img-vid-wrapper.home {
    margin-top: 0
}

.hero-img-vid-wrapper.home.smaller {
    max-width: 450px
}

.hero-img-vid-wrapper.overview {
    margin-top: 2rem
}

.hero-dark-img-vid {
    background-color: var(--shadow-lite);
    text-align: center;
    background-image: none;
    padding-top: 5rem;
    overflow: hidden
}

.hero-dark-img-vid.ai {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb41_BG%20Triangle.svg);
    background-position: 50% 111%;
    background-repeat: repeat-x;
    background-size: auto 289px
}

.hero-dark-img-vid.collaboration {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb36_BG%20Trap%20Rectangle.svg);
    background-position: 50% 105%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-dark-img-vid.data-apps {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb35_BG%20Pattern%20Rectangle.svg);
    background-position: 50% 102%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-dark-img-vid.write-back-2 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb40_BG%20Checker.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-dark-img-vid.dashboards {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb41_BG%20Triangle.svg);
    background-position: 50% 112%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-dark-img-vid.python {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb40_BG%20Checker.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-dark-img-vid.embedded-analytics {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb36_BG%20Trap%20Rectangle.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-dark-img-vid.governance {
    background-position: 50% 102%
}

.hero-dark-img-vid.partner-databricks {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66f734ffcea19a16e37a1d1b_BG-Trap-Rectangle-Dark.svg);
    background-position: 50% 100%;
    background-size: auto
}

.hero-dark-img-vid.architecture {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66f734ffcea19a16e37a1d1b_BG-Trap-Rectangle-Dark.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto
}

.hero-dark-img-vid.overview-header {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66f734ffcea19a16e37a1d1b_BG-Trap-Rectangle-Dark.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto;
    padding-top: 0
}

.grid-7 {
    grid-template-rows: auto
}

.grid-internal-two-column {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: #000;
    margin-top: 0;
    margin-bottom: 2rem;
    padding: 0
}

.comparison-heading-bar {
    justify-content: center;
    align-items: flex-start;
    margin-top: auto;
    margin-bottom: auto
}

.comparison-category {
    margin-right: 1rem;
    font-family: Dmsans,sans-serif;
    font-size: 18px;
    font-weight: 600
}

.comparison-header-sticky {
    z-index: 300;
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    border-bottom: 1px solid var(--stratus);
    background-color: var(--stratus);
    padding: 0;
    position: sticky;
    top: 0
}

.quickstack-comparison {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: var(--stratus);
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 0 1px
}

.comparison-cell {
    grid-column-gap: 13px;
    grid-row-gap: 13px;
    background-color: var(--neutral-0);
    flex-flow: row;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem
}

.comparison-cell.feature-label {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    flex-flow: column;
    padding-top: .75rem;
    padding-bottom: 0;
    padding-right: 1rem
}

.quickstack-left-right {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    width: 100%;
    padding: 0
}

.cell-54 {
    grid-column-gap: 13px;
    grid-row-gap: 13px;
    flex-flow: row
}

.text-block-25 {
    line-height: 1.3rem
}

.quick-stack-45 {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    width: 100%;
    height: 100%;
    padding: 0
}

.cell-55 {
    border-style: none solid none none;
    border-width: 1px;
    border-color: black var(--neutral-9)black black
}

.cell-57 {
    grid-column-gap: 20px;
    grid-row-gap: 20px
}

.text-color-nimbus {
    color: var(--nimbus)
}

.link-block-cta {
    margin-bottom: .5rem;
    display: block
}

.cta-icon {
    width: 32px;
    height: 32px;
    margin-bottom: 1rem
}

.cta-guide.section.background-color-shadow-light {
    background-image: none;
    background-repeat: repeat;
    background-size: auto;
    padding-top: 7rem;
    padding-bottom: 3rem;
    display: none
}

.content-bottom-text {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    border-top: 2px none var(--stratus);
    border-right-width: 1px;
    border-right-color: var(--stratus);
    flex-flow: column;
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 2rem;
    display: flex
}

.content-bottom-text.background-color-shadow {
    color: var(--nimbus)
}

.image-55-copy {
    position: absolute;
    inset: auto
}

.div-block-202-copy {
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative
}

.lightbox-link {
    width: 60px;
    height: 60px;
    position: absolute
}

.cell-58,.cell-59 {
    justify-content: center;
    align-items: center
}

.cell-60,.cell-61 {
    justify-content: center;
    align-items: flex-start
}

.section-19 {
    background-color: var(--shadow);
    color: var(--insight);
    padding: 12px 16px
}

.text-block-26 {
    text-align: center;
    font-size: 15px
}

.impact-awards-grid {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 2rem;
    display: grid
}

.quick-stack-46 {
    padding: 0
}

.code-embed-5 {
    width: 100%
}

.image-55-2 {
    border-radius: 110px;
    position: absolute;
    inset: 3% 5% auto auto;
    transform: none;
    box-shadow: 0 3px 11px #00000057
}

.cell-58-2 {
    justify-content: center;
    align-items: flex-start
}

.list-3 {
    padding-left: 16px
}

.double-cta {
    grid-column-gap: 17px;
    grid-row-gap: 17px;
    display: flex
}

.cell-31-2 {
    justify-content: flex-start;
    align-items: flex-start
}

.quickstack-30-70 {
    grid-column-gap: 40px;
    padding-left: 0;
    padding-right: 0
}

.cell-32-2-2 {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    flex-flow: column
}

.div-block-203 {
    color: var(--neutral-4)
}

.div-block-204 {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    display: flex
}

.narrow {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto
}

.cta-block-center {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.tertiary-link-light {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    color: var(--nimbus);
    display: flex
}

.tertiary-link-wrapper {
    margin-top: auto;
    display: flex
}

.content-box {
    border: 2px solid var(--stratus);
    padding-left: 0;
    padding-right: 0
}

.pop-up-modal {
    z-index: 9999;
    width: 100%;
    height: 100%;
    display: none;
    position: fixed;
    top: 0;
    left: 0
}

.pop-up-modal.no-padding {
    display: none
}

.transparent-bg {
    z-index: 1;
    background-color: #000;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0
}

.pop-up-modal-inner {
    z-index: 2;
    background-color: var(--neutral-0);
    width: 100%;
    max-width: 800px;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 2.25rem;
    transition: all .2s;
    position: relative;
    top: 50%;
    overflow: scroll;
    transform: translateY(-50%)
}

.pop-up-modal-close {
    z-index: 2;
    color: var(--nimbus);
    cursor: pointer;
    background-color: #0000;
    padding: 8px 12px;
    font-family: Dmserif;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.25rem;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(0)
}

.feature-padding {
    padding: 4rem 2rem 4rem 4rem
}

.code-embed-6 {
    display: block
}

.tab-journey-card-tab {
    color: var(--shadow);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    padding: 8px 20px;
    font-family: Dmmono,sans-serif;
    font-size: 14px;
    display: inline-block
}

.tab-journey-card-tab.color-sun {
    background-color: var(--sun)
}

.tab-journey-card-tab.color-sky {
    background-color: var(--sky)
}

.tab-journey-card-tab.color-meadow {
    background-color: var(--meadow)
}

.tab-journey-card-tab.color-grass {
    background-color: var(--grass);
    font-family: Dmmono,sans-serif
}

.tab-journey-card-tab.color-nimbus {
    background-color: var(--nimbus)
}

.tab-journey-img {
    width: 40%
}

.tab-journey-cta {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 2rem;
    font-size: 0;
    font-weight: 200;
    display: flex
}

.quote-logo {
    width: 200px;
    margin-bottom: 2rem
}

.customer-story-thumbnail {
    background-color: var(--nimbus);
    text-align: left;
    object-fit: cover;
    object-position: 0% 50%;
    width: 100%;
    max-width: none;
    height: 100%;
    min-height: 180px;
    display: block;
    position: static;
    inset: 0%;
    transform: none
}

.logo-link-wrapper {
    object-fit: fill;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: auto;
    padding-top: 0;
    display: flex;
    position: static
}

.logo-link-wrapper:hover {
    background-color: var(--nimbus)
}

.image-58,.image-59,.image-60 {
    mix-blend-mode: multiply
}

.resource-thumb {
    background-color: var(--nimbus);
    object-fit: fill;
    width: 100%;
    max-width: none;
    height: 100%;
    min-height: 140px;
    display: block;
    position: static;
    inset: 0%;
    transform: none
}

.filter-platform-img {
    z-index: 1;
    width: 100%;
    display: none;
    position: relative
}

.filter-checkbox-line {
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.content-box-subtitle {
    color: var(--shadow-lite);
    text-transform: uppercase;
    margin-bottom: .5rem;
    font-family: Dmmono,sans-serif;
    font-size: .875rem
}

.content-box-subtitle.event-subtitle {
    margin-top: -1.5rem
}

.content-box-subtitle.text-color-light,.content-box-subtitle.white {
    color: var(--neutral-0)
}

.filter-checkbox-label {
    margin-top: 2px;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 1.25rem
}

.paragraph-1138 {
    margin-bottom: -.6rem;
    font-family: Dmsans,sans-serif
}

.page-tab-list {
    padding-top: 1rem;
    padding-left: 1.875rem
}

.content_collection-featured {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.filter-list-item {
    margin-bottom: .75rem
}

.nav-spacer {
    height: .5rem
}

.form-description-copy {
    grid-column-gap: 21px;
    grid-row-gap: 21px;
    flex-flow: column;
    padding-left: 0;
    padding-right: 4rem;
    display: flex
}

.button-flex-center {
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    display: flex
}

.nav-show-hide {
    position: absolute;
    inset: 0% auto auto 0%
}

.div-block-207-copy {
    flex-flow: column;
    display: flex;
    top: 15px
}

.collection-item-4-copy {
    flex: 1;
    justify-content: flex-start;
    align-items: stretch;
    width: auto;
    height: 100%;
    display: flex
}

.template-preview-section {
    display: none
}

.data-apps {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb35_BG%20Pattern%20Rectangle.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.embedded {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb36_BG%20Trap%20Rectangle.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.governance {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb35_BG%20Pattern%20Rectangle.svg);
    background-position: 50% 103%;
    background-repeat: repeat-x;
    background-size: auto 280px
}

.dashboards {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb41_BG%20Triangle.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.grid-card-content {
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    background-color: #3d3d3d;
    border-radius: 8px;
    flex-flow: column;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: auto;
    padding: 2rem;
    transition: all .2s;
    display: block
}

.grid-card-content:hover {
    background-color: #292929;
    transform: scale(1.05)
}

.grid-card-content.text-color-light {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    text-decoration: none;
    display: block
}

.grid-card-content.text-color-light:hover {
    background-color: var(--shadow-lite);
    color: var(--neutral-0);
    transform: scale(1.02)
}

.grid-card-content.text-color-light.dark {
    background-color: var(--shadow)
}

.flex-card-icons {
    justify-content: space-between;
    align-items: center;
    display: flex
}

.image-65 {
    object-fit: fill;
    width: 100%;
    overflow: visible
}

.image-67,.image-68 {
    width: 100%
}

.ribbon-link {
    background-color: #171717;
    justify-content: center;
    align-items: flex-start;
    display: block
}

.ribbon-flex {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    color: #fff;
    text-align: center;
    background-color: #171717;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    place-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 16px;
    display: flex;
    position: relative
}

.ribbon-flex.light {
    background-color: var(--nimbus);
    color: var(--black)
}

.announcement-text {
    color: #fff;
    -webkit-text-stroke-color: #a8e8f3;
    font-weight: 700
}

.button-ribbon {
    color: #000;
    letter-spacing: .1em;
    background-color: #4cec8c;
    border-radius: 24px;
    padding: 4px 14px;
    font-size: 11px;
    font-weight: 900;
    text-decoration: none
}

.margin-bottom-medium-lrg {
    padding-bottom: 5rem
}

.heading-12 {
    margin-bottom: 1rem
}

.customers-about {
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    display: flex
}

.by-the-numbers {
    padding: 0
}

.profile-pic-sigma {
    filter: grayscale()
}

.nav-ad {
    color: var(--nimbus);
    max-width: 280px;
    font-family: Dmsans,sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.6rem
}

.text-block-29 {
    color: var(--stratus);
    text-transform: uppercase;
    font-family: Dmsans,sans-serif;
    font-size: 10px;
    font-weight: 600
}

.text-block-30 {
    background-color: var(--insight);
    color: var(--shadow);
    border-radius: 20px;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 11px
}

.resource-ad {
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 240px;
    margin-top: 2rem;
    padding: 23px 30px;
    display: flex
}

.resource-ad.hidden {
    display: none
}

.h1-hero {
    font-family: Dmmono,sans-serif;
    font-size: 3.75rem;
    font-weight: 400;
    line-height: 4rem
}

.h1-hero.home {
    letter-spacing: -.15rem;
    font-family: Dmsans,sans-serif;
    font-size: 3.8rem;
    line-height: 115%
}

.home-intro-text {
    padding-top: 3px
}

.simple-cta-link {
    text-transform: uppercase;
    margin-bottom: 0;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    text-decoration: none;
    box-shadow: inset 0 -2px #fff
}

.simple-cta-link:hover {
    box-shadow: inset 0 -2px 0 0 var(--insight)
}

.simple-cta-link.is-light {
    box-shadow: inset 0 -2px 0 0 var(--stratus)
}

.simple-cta-link.dark {
    box-shadow: inset 0 -2px 0 0 var(--shadow)
}

.announcements {
    grid-column-gap: .4rem;
    grid-row-gap: .4rem;
    border-top: 1px none var(--stratus);
    flex-flow: column;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    height: 100%;
    margin-bottom: 1rem;
    padding: 1rem 1rem 2rem 0;
    display: flex
}

.pagination {
    margin-top: 31px
}

.resource-thumbnail {
    max-height: 220px;
    margin-bottom: 27px
}

.flex-vertical-center {
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    display: flex
}

.collection-item-4 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    border-top: 1px solid var(--nimbus);
    flex-flow: row;
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    align-items: stretch;
    padding-top: 37px;
    padding-bottom: 37px;
    display: grid
}

.feature-link {
    z-index: 1;
    flex-flow: column;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
    height: 100%;
    transition: all .2s;
    display: flex;
    position: static
}

.container-two-column {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-flow: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    position: relative
}

.div-block-211 {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 20%;
    padding-top: 23px;
    display: flex;
    position: sticky;
    top: 10px
}

.feature-left-nav {
    border-bottom: 1px solid var(--nimbus);
    width: 100%;
    padding: 9px 13px;
    transition: all .2s
}

.feature-left-nav:hover {
    background-color: var(--nimbus)
}

.feature-left-nav.w--current {
    border-bottom-color: var(--nimbus);
    background-color: var(--insight)
}

.featured-feature-link {
    flex-flow: column;
    height: 100%;
    transition: all .2s;
    display: flex
}

.featured-feature-link:hover {
    background-color: var(--sky)
}

.featured-feature-link.hide-on-desktop-show-on-mobile {
    display: none
}

.div-block-212 {
    position: relative
}

.div-block-213 {
    width: 100%
}

.icon-card {
    grid-column-gap: 16px;
    grid-row-gap: 8px;
    background-color: var(--neutral-3);
    border-radius: 4px;
    flex-flow: column;
    grid-template: "icon title""icon description"".cta"/32px 1fr;
    grid-auto-columns: 1fr;
    height: 100%;
    padding: 24px;
    display: flex
}

.large-quote-block {
    margin-left: 1rem;
    margin-right: 1rem
}

.large-quote-block.max {
    max-width: 75%;
    margin-left: auto;
    margin-right: auto
}

.feature-header {
    text-wrap: balance;
    margin-top: 1rem;
    margin-bottom: 1rem
}

.video-feature {
    z-index: 1;
    aspect-ratio: auto;
    object-fit: contain;
    width: 100%;
    height: 100%
}

.features-line-link {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: column;
    width: 100%;
    display: flex
}

.quick-stack-41-copy {
    grid-column-gap: 57px;
    padding: 0
}

.quick-stack-39-2-copy {
    grid-column-gap: 29px;
    grid-row-gap: 32px;
    padding: 0
}

.quickstack-mobile {
    grid-column-gap: 57px;
    padding: 0
}

.role-cell {
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 2rem;
    display: flex
}

.heading-33 {
    line-height: 2.8rem
}

.product-launch {
    text-align: left;
    flex-flow: column;
    margin-left: 4rem;
    margin-right: 4rem;
    display: flex
}

.image-70 {
    max-width: 80%
}

.image-71 {
    max-width: 90%;
    margin-top: -10px
}

.image-72 {
    min-width: 170px
}

.paragraph-1139 {
    margin-bottom: 2rem
}

.image-73 {
    max-width: 90%
}

.text-size-larger {
    font-size: 2.5rem;
    line-height: 120%
}

.footer-related-links {
    flex-flow: wrap;
    display: flex
}

.f-footer-related {
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    margin-top: 3rem;
    margin-left: -.5rem;
    display: block
}

.nav-dropdown-list-related-link {
    background-color: var(--shadow-lite);
    color: #fff;
    width: 48%;
    margin-bottom: .5rem;
    margin-left: .5rem;
    padding: .5rem 1rem;
    font-family: Dmsans,sans-serif;
    font-size: 14px;
    transition: all 40ms;
    display: block
}

.nav-dropdown-list-related-link:hover {
    color: var(--nimbus);
    background-color: #ffffff26
}

.nav-dropdown-list-related-link:active {
    color: #fff
}

.div-block-212-2 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd73d_WeeklyDemo.webp);
    background-position: 0 0;
    background-size: auto
}

.bg-go-live-demo {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd73d_WeeklyDemo.webp);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 60px;
    padding: 10rem 2rem
}

.bg-go-live-demo.text-color-primary {
    border-radius: 20px
}

.margin-bottom-large {
    margin-bottom: 4rem
}

.demo-date {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-bottom: 1rem;
    display: flex
}

.text-style-bold {
    font-weight: 700
}

.div-block-214 {
    grid-column-gap: 80px;
    grid-row-gap: 80px;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.div-block-215,.div-block-216 {
    width: 50%
}

.flex-50 {
    justify-content: space-between;
    align-items: center;
    display: flex
}

.resources-2-columns-copy {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.virtual-demo {
    border: 2px solid var(--stratus);
    padding-left: 0;
    padding-right: 0
}

.virtual-demo.background-color-sky {
    background-color: var(--sky)
}

.virtual-demo.background-color-grass {
    background-color: var(--grass)
}

.virtual-demo.background-color-pink {
    background-color: var(--meadow)
}

.header-center {
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.cta-on-demand {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.button-5 {
    color: #292929;
    text-align: center;
    white-space: nowrap;
    background-color: #f0ff45;
    border: 1px solid #292929;
    border-radius: 8rem;
    padding: .65rem 1.5rem;
    font-weight: 400;
    transition: all .275s,all .2s;
    position: static
}

.button-5:hover {
    color: #f0ff45;
    background-color: #292929
}

.button-5.is-secondary {
    color: #000;
    white-space: nowrap;
    word-break: normal;
    background-color: #0000;
    border: 1px solid #222
}

.button-5.is-secondary:hover {
    background-color: #9fa8a745
}

.button-5.is-secondary.is-white {
    background-color: #fff
}

.pop-up-modal-inner-2 {
    z-index: 2;
    background-color: #fff;
    width: 100%;
    max-width: 800px;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 2.25rem;
    transition: all .2s;
    position: relative;
    top: 50%;
    overflow: scroll;
    transform: translateY(-50%)
}

.pop-up-modal-close-2 {
    z-index: 2;
    color: #292929;
    cursor: pointer;
    background-color: #0000;
    padding: 8px 12px;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.25rem;
    position: absolute;
    top: 0;
    right: 0
}

.template-platform {
    z-index: 4;
    background-color: #fff0;
    border-radius: 0;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
    margin-bottom: 6px;
    margin-right: 6px;
    padding: 0;
    display: flex;
    position: relative
}

.quickstack-comparison-sticky {
    border-bottom: 1px solid #000;
    height: 80px;
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
    position: sticky
}

.jumplinks-wrapper {
    grid-column-gap: 48px;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    display: block
}

.jumplinks-wrapper.cc-home {
    flex-flow: column;
    align-items: flex-start;
    padding-top: 0;
    display: flex
}

.compare-text {
    margin-right: 1rem
}

.underline {
    border-bottom: 1px solid var(--shadow)
}

.image-74 {
    height: 35%
}

.div-block-217 {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    align-items: center;
    display: flex
}

.as-of-date {
    margin-top: 2rem;
    padding-left: 1rem
}

.video-link {
    width: 100%
}

.cell-64 {
    justify-content: center;
    align-items: flex-start
}

.featured-event {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex: 1;
    justify-content: space-between;
    align-items: stretch;
    height: 100%;
    padding: 1rem;
    display: flex
}

.featured-event.background-color-yellow {
    padding-right: 1rem
}

.featured-event.background-color-sky {
    background-color: var(--sky)
}

.featured-event.background-color-sky.background-image {
    opacity: 1
}

.featured-event.background-color-sun {
    background-color: var(--sun)
}

.featured-event.background-color-gray-dark {
    align-items: stretch
}

.featured-event-image {
    aspect-ratio: auto;
    object-fit: contain;
    max-width: 50%
}

.featured-event-image.hide-mobile-portrait,.featured-event-image.data-apps-logo {
    height: 150px;
    margin: 2rem 4rem 2rem 6rem
}

.featured-event-text {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    color: var(--nimbus);
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 2rem;
    margin-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex
}

.featured-event-block {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: var(--shadow-lite);
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    display: flex
}

.featured-events {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    background-color: var(--shadow);
    justify-content: flex-start;
    align-items: stretch;
    margin-bottom: 1rem;
    display: flex
}

.featured-event-link {
    width: 100%
}

.gdoc-embed {
    display: flex
}

.gdoc-embed-mobile {
    display: none
}

.container-23 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: relative
}

.content-box-2 {
    border: 2px solid #9fa8a7;
    padding-left: 0;
    padding-right: 0
}

.content-box-image-2 {
    background-color: #f0f0f0;
    border: 0 #000;
    width: 100%;
    margin-bottom: 0;
    padding-top: 0;
    position: relative;
    overflow: visible
}

.content-bottom-text-2 {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    border-top: 2px #9fa8a7;
    border-right-width: 1px;
    border-right-color: #9fa8a7;
    flex-flow: column;
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 2rem;
    display: flex
}

.content-box-subtitle-2 {
    color: #3d3d3d;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: .875rem
}

.compare-grid-header {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: space-between;
    align-items: stretch;
    display: flex
}

.compare-grid-header.left-aligned {
    justify-content: flex-start
}

.jump-button {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    flex-flow: column;
    align-items: center;
    display: flex
}

.down-caret.transparent {
    opacity: 0
}

.button-row {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    display: flex
}

.button-row.text-style-allcaps.text-size-tiny {
    padding-top: 1rem
}

.paragraph-1140 {
    margin-right: 1rem
}

.feature-as-of {
    background-color: var(--shadow-lite);
    color: var(--nimbus)
}

.div-block-219 {
    margin-left: 1rem;
    padding-top: .5rem;
    padding-bottom: .5rem
}

.buttons-centered {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    display: flex
}

.notification-ribbon-2 {
    background-color: #292929;
    width: 100%
}

.ribbon-link-2 {
    cursor: pointer;
    background-color: #171717;
    justify-content: center;
    align-items: flex-start;
    display: block
}

.link-arrow-small {
    vertical-align: baseline;
    flex-flow: row;
    justify-content: flex-start;
    width: 16px;
    margin-bottom: 2px;
    margin-left: 6px;
    display: inline-flex;
    position: relative;
    inset: 0% 0% 0% auto
}

.link-arrow-small.light {
    filter: drop-shadow(1px 1px #000)hue-rotate(14deg)invert(9%)saturate(128%)
}

.notification-flex-2 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    color: #fff;
    text-align: center;
    background-color: #292929;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    place-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 16px;
    display: flex;
    position: relative
}

.ribbon-cta {
    justify-content: center;
    align-items: center;
    display: flex
}

.ea-atf-15 {
    grid-row-gap: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.hero {
    grid-row-gap: 40px;
    background-color: #f0f0f0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 36px 80px;
    text-decoration: none;
    display: flex
}

.copy {
    grid-row-gap: 18px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 734px;
    padding-left: 40px;
    text-decoration: none;
    display: flex
}

.plans-pricing {
    color: #292929;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 60px;
    font-weight: 400;
    line-height: 110%;
    text-decoration: none
}

.sigma-platform-subscription {
    color: #292929;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;
    text-decoration: none
}

.frame-7513 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 1280px;
    text-decoration: none;
    display: flex
}

.frame-4563 {
    border: 0 solid #9fa8a7;
    border-bottom-width: 1px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-4565 {
    grid-row-gap: 16px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 237px;
    padding: 32px 60px 32px 40px;
    text-decoration: none;
    display: flex
}

.vectors-wrapper {
    object-fit: cover;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    text-decoration: none;
    display: flex
}

.start-free {
    color: #292929;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
    text-decoration: none
}

.frame-4564 {
    grid-row-gap: 8px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-4667 {
    grid-column-gap: 16px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.text {
    color: #292929;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none
}

.frame-4568 {
    grid-row-gap: 16px;
    border: 0 solid #9fa8a7;
    border-left-width: 1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 237px;
    padding: 32px 60px 32px 40px;
    text-decoration: none;
    display: flex
}

.frame-7514 {
    grid-column-gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-7515 {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-4566 {
    grid-row-gap: 16px;
    border-radius: 4px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 237px;
    padding: 32px 40px;
    text-decoration: none;
    display: flex
}

.frame-7516 {
    grid-row-gap: 16px;
    border: 0 solid #9fa8a7;
    border-left-width: 1px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 237px;
    padding: 32px 40px;
    text-decoration: none;
    display: flex
}

.image-185 {
    object-fit: cover
}

.hero-2 {
    grid-row-gap: 56px;
    background-color: #292929;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 743px;
    padding-left: 113px;
    padding-right: 144px;
    display: flex
}

.platform-seat-types {
    color: #f0f0f0;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
    font-weight: 400;
    line-height: 130%;
    text-decoration: none
}

.frame-7517 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 434px;
    text-decoration: none;
    display: flex
}

.frame-7518 {
    grid-column-gap: 50px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 1152px;
    height: 100%;
    text-decoration: none;
    display: flex
}

.frame-7519 {
    grid-row-gap: 16px;
    background-color: #292929;
    border: 1px solid #9fa8a7;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 464px;
    padding-top: 32px;
    padding-left: 40px;
    padding-right: 60px;
    display: flex
}

.frame-48096594 {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-48096598 {
    grid-column-gap: 10px;
    border: 1px solid #f0f0f0;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    display: flex
}

.text-2 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 500;
    line-height: 140%;
    text-decoration: none
}

.text-3 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 140%;
    text-decoration: none
}

.frame-48096599 {
    grid-row-gap: 9px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-top: 13px;
    padding-bottom: 13px;
    text-decoration: none;
    display: flex
}

.consume-content-produced-by-pro-users-features {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none
}

.frame-48096605 {
    grid-row-gap: 9px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 392px;
    text-decoration: none;
    display: flex
}

.frame-48096601 {
    grid-column-gap: 16px;
    flex: 0 auto;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    display: flex
}

.check-filled {
    object-fit: cover
}

.text-4 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none
}

.frame-48096602 {
    grid-column-gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-7262 {
    grid-column-gap: 3.0773px;
    background-color: #292929;
    border: .79px solid #f0f0f0;
    border-radius: 38px;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    height: 38.774px;
    padding: 3.0773px 21px;
    text-decoration: none;
    display: flex
}

.text-5 {
    color: #fff;
    text-align: center;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 18.46px;
    text-decoration: none
}

.frame-4569 {
    grid-row-gap: 16px;
    background-color: #292929;
    border: 1px solid #9fa8a7;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 464px;
    padding: 32px 60px 12px 40px;
    display: flex
}

.frame-48096606 {
    grid-column-gap: 10px;
    background-color: #f0ff45;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    text-decoration: none;
    display: flex
}

.text-6 {
    color: #292929;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 140%;
    text-decoration: none
}

.frame-48096607 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-top: 13px;
    padding-bottom: 13px;
    text-decoration: none;
    display: flex
}

.frame-48096608 {
    grid-column-gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-bottom: 12px;
    text-decoration: none;
    display: flex
}

.frame-48096609 {
    grid-column-gap: 3.0773px;
    background-color: #f0ff45;
    border: .79px solid #f0ff45;
    border-radius: 38px;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    height: 38.774px;
    padding: 3.0773px 21px;
    text-decoration: none;
    display: flex
}

.text-7 {
    color: #292929;
    text-align: center;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 18.46px;
    text-decoration: none
}

.consume-content-produced-by-pro-users-features-0 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
    text-decoration: none
}

.consume-content-produced-by-pro-users-features-1 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none
}

.consume-content-produced-by-pro-users-features-2 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-decoration: underline
}

.frame-5904 {
    background-color: #fff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 100px 108px 140px;
    text-decoration: none;
    display: flex
}

.frame-48096610 {
    grid-column-gap: 32px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 44px;
    text-decoration: none;
    display: flex
}

.compare-seat-licenses {
    color: #292929;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none
}

.frame-48096595 {
    grid-row-gap: 17px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-48096611 {
    grid-column-gap: 32px;
    border: 0 solid #000;
    border-bottom-width: 1px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.text-8 {
    color: #292929;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none
}

.text-9 {
    color: #292929;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none
}

.frame-7521 {
    grid-column-gap: 32px;
    border: 1px solid #292929;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 10px;
    text-decoration: none;
    display: flex
}

.text-10 {
    color: #292929;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 140%;
    text-decoration: none
}

.frame-48096612 {
    grid-column-gap: 32px;
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    text-decoration: none;
    display: flex
}

.view-favorite-workbooks {
    color: #292929;
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1000px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none;
    display: inline-flex
}

.frame-48096596 {
    grid-column-gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    display: flex
}

.check-filled-3 {
    object-fit: cover
}

.text-11 {
    color: #292929;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none
}

.frame-48096613 {
    grid-column-gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 320px;
    text-decoration: none;
    display: flex
}

.frame-48096597 {
    grid-column-gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 447px;
    text-decoration: none;
    display: flex
}

.frame-48096600 {
    grid-column-gap: 277px;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    padding: 16px 124px;
    text-decoration: none;
    display: flex
}

.frame-48096614 {
    grid-column-gap: 3.0773px;
    background-color: #292929;
    border-radius: 38px;
    justify-content: center;
    align-items: center;
    width: 138px;
    height: 38.774px;
    padding: 3.0773px 21px;
    text-decoration: none;
    display: flex
}

.text-12 {
    color: #f0f0f0;
    text-align: center;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 18.46px;
    text-decoration: none
}

.hero-3 {
    grid-row-gap: 56px;
    background-color: #292929;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 743px;
    padding-left: 113px;
    padding-right: 144px;
    display: flex
}

.platform-seat-types-2 {
    color: #f0f0f0;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
    font-weight: 400;
    line-height: 130%;
    text-decoration: none
}

.frame-48096615 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 434px;
    text-decoration: none;
    display: flex
}

.frame-48096616 {
    grid-column-gap: 50px;
    object-fit: fill;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: none;
    height: 100%;
    text-decoration: none;
    display: flex
}

.frame-48096617 {
    grid-row-gap: 16px;
    background-color: #292929;
    border: 1px solid #9fa8a7;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    height: 464px;
    padding-top: 32px;
    padding-left: 40px;
    padding-right: 60px;
    display: flex
}

.frame-48096618 {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-48096619 {
    grid-column-gap: 10px;
    border: 1px solid #f0f0f0;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;
    display: flex
}

.text-13 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 500;
    line-height: 140%;
    text-decoration: none
}

.text-14 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 140%;
    text-decoration: none
}

.frame-48096620 {
    grid-row-gap: 9px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-width: 400px;
    padding-top: 13px;
    padding-bottom: 13px;
    text-decoration: none;
    display: flex
}

.consume-content-produced-by-pro-users-features-3 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none
}

.frame-48096621 {
    grid-row-gap: 9px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 392px;
    text-decoration: none;
    display: flex
}

.frame-48096622 {
    grid-column-gap: 16px;
    flex: 0 auto;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    display: flex
}

.check-filled-4 {
    object-fit: cover
}

.text-15 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none
}

.frame-48096623 {
    grid-column-gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-48096624 {
    grid-column-gap: 3.0773px;
    background-color: #292929;
    border: .79px solid #f0f0f0;
    border-radius: 38px;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    height: 38.774px;
    padding: 3.0773px 21px;
    text-decoration: none;
    display: flex
}

.text-16 {
    color: #fff;
    text-align: center;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 18.46px;
    text-decoration: none
}

.frame-48096625 {
    grid-row-gap: 16px;
    background-color: #292929;
    border: 1px solid #9fa8a7;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    min-width: 400px;
    height: 464px;
    padding: 32px 60px 12px 40px;
    display: flex
}

.frame-48096626 {
    grid-column-gap: 10px;
    background-color: #f0ff45;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    text-decoration: none;
    display: flex
}

.text-17 {
    color: #292929;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 140%;
    text-decoration: none
}

.frame-48096627 {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-top: 13px;
    padding-bottom: 13px;
    text-decoration: none;
    display: flex
}

.frame-48096628 {
    grid-column-gap: 16px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-bottom: 12px;
    text-decoration: none;
    display: flex
}

.frame-48096629 {
    grid-column-gap: 3.0773px;
    background-color: #f0ff45;
    border: .79px solid #f0ff45;
    border-radius: 38px;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    height: 38.774px;
    padding: 3.0773px 21px;
    text-decoration: none;
    display: flex
}

.text-18 {
    color: #292929;
    text-align: center;
    letter-spacing: -.02em;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 18.46px;
    text-decoration: none
}

.consume-content-produced-by-pro-users-features-4 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
    text-decoration: none
}

.consume-content-produced-by-pro-users-features-5 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none
}

.consume-content-produced-by-pro-users-features-6 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%;
    text-decoration: underline
}

.frame-48096630 {
    grid-column-gap: 3.0773px;
    background-color: #292929;
    border: .79px solid #f0f0f0;
    border-radius: 38px;
    flex: 0 auto;
    justify-content: center;
    align-items: center;
    height: 38.774px;
    padding: 3.0773px 21px;
    text-decoration: none;
    display: flex
}

.journey---al-within {
    grid-row-gap: 75px;
    background-color: #292929;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 822px;
    padding-left: 112px;
    padding-right: 112px;
    display: flex
}

.deliver {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 1446px;
    height: 822px;
    text-decoration: none;
    display: flex
}

.frame-7764 {
    grid-row-gap: 72px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 822px;
    padding-left: 113px;
    padding-right: 113px;
    text-decoration: none;
    display: flex
}

.frame-7677 {
    grid-column-gap: 70px;
    border: 0 solid #3d3d3d;
    border-top-width: 2px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 922px;
    padding-top: 48px;
    padding-bottom: 80px;
    padding-right: 58px;
    display: flex
}

.spreadsheets {
    grid-row-gap: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding-top: 32px;
    text-decoration: none;
    display: flex
}

.frame-7615 {
    grid-column-gap: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.pricing-faqs {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 48px;
    font-weight: 400;
    line-height: 120%;
    text-decoration: none
}

.frame-7617 {
    grid-column-gap: 91px;
    border: 0 solid #9fa8a7;
    border-bottom-width: 1px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 30px;
    text-decoration: none;
    display: flex
}

.frame-7618 {
    grid-row-gap: 19px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.text-19 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 140%;
    text-decoration: none
}

.text-20 {
    color: #f0f0f0;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none
}

.frame-5900 {
    grid-row-gap: 42px;
    background-color: #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    padding: 50px 112px 49px 113px;
    text-decoration: none;
    display: flex
}

.frame-7500 {
    grid-column-gap: 82px;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    text-decoration: none;
    display: flex
}

.frame-7674 {
    grid-row-gap: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 554px;
    padding-top: 12px;
    text-decoration: none;
    display: flex
}

.text-21 {
    color: #292929;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none
}

.error-58a95385-287a-98b5-e9d2-06022a5bf5d4 {
    color: #292929;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    text-decoration: none
}

.frame-4971 {
    grid-column-gap: 24px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 176px;
    text-decoration: none;
    display: flex
}

.image-165 {
    object-fit: cover
}

.event-date-large {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 2rem;
    line-height: 2rem;
    display: flex
}

.event-link-large {
    border-bottom: 1px solid var(--stratus);
    width: 100%
}

.event-link-large.light {
    transition: background-color .2s
}

.event-link-large.light:hover {
    background-color: var(--neutral-0)
}

.event-link-large.dark {
    transition: background-color .2s
}

.event-link-large.dark:hover {
    background-color: var(--shadow)
}

.event-link-title {
    justify-content: space-between;
    align-items: center;
    display: flex
}

.event-arrow {
    margin-right: 2rem
}

.event-list {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 1rem
}

.event-card-content {
    margin: 2rem 2rem 3rem
}

.event-card {
    background-color: #fff
}

.grid-image-full {
    aspect-ratio: auto;
    object-fit: cover;
    height: 100%;
    overflow: auto
}

.cell-65 {
    justify-content: flex-start;
    align-items: flex-end
}

.worldtour-header-img {
    height: 500px
}

.worldtour-header {
    margin-top: 5rem
}

.worldtour-header.padding-large {
    padding-top: 2rem
}

.text-size-huge {
    font-size: 5rem;
    line-height: 5rem
}

.worldtour-section-header {
    color: var(--nimbus);
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: 1rem
}

.grid-8 {
    grid-template-rows: auto;
    grid-template-columns: 1fr
}

.sitemap-link {
    color: #fff;
    padding: 0 0 0 .5rem;
    font-family: Dmsans,sans-serif;
    font-size: 14px;
    transition: all 40ms;
    display: block
}

.sitemap-link:hover {
    color: var(--nimbus);
    background-color: #ffffff1a
}

.sitemap-link:active {
    color: #fff
}

.grid-link-dark {
    transition: background-color .2s
}

.grid-link-dark:hover {
    background-color: var(--shadow)
}

.grid-link-light {
    transition: background-color .2s
}

.grid-link-light:hover {
    background-color: var(--neutral-0)
}

.text-style-normal {
    font-weight: 400
}

.grid-link {
    transition: background-color .2s
}

.grid-link:hover {
    background-color: var(--neutral-0)
}

.sigma-databricks-icons {
    height: 30px
}

.worldtour-name-lockup {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 1rem;
    display: flex
}

.worldtour-name-db {
    letter-spacing: .15rem;
    font-weight: 700
}

.loom-ratio {
    aspect-ratio: 1670/1080
}

.library-tags {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    border-top: 1px solid var(--stratus);
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    min-width: 150px;
    margin-top: 0;
    margin-bottom: .5rem;
    padding-top: 1rem;
    display: flex
}

.collection-list-wrapper {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    display: block
}

.collection-list-5 {
    grid-column-gap: 13px;
    grid-row-gap: 13px;
    display: flex
}

.library-tag {
    border: 1px solid var(--shadow-lite);
    text-transform: uppercase;
    padding: .2rem .5rem;
    font-family: Dmmono,sans-serif;
    font-size: .7rem
}

.library-tag.blue {
    background-color: var(--sky)
}

.library-tag.gray {
    background-color: var(--nimbus);
    border-color: #0000
}

.library-platforms {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 1rem;
    display: flex
}

.linbrary-platforms {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-flow: wrap;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.library-use-cases {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: .5rem;
    display: flex
}

.library-video {
    border-radius: 200px;
    width: 50px
}

.width-75 {
    width: 75%
}

.div-block-221 {
    justify-content: center;
    align-items: flex-end;
    position: relative
}

.div-block-222 {
    background-color: var(--insight);
    width: 100%;
    height: 100%;
    position: relative
}

.hide-2 {
    display: none
}

.js-countdown {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    color: var(--insight);
    align-items: center;
    transition: opacity .2s;
    display: none
}

.js-countdown.hide {
    display: none
}

.js-countdown-block {
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    display: flex
}

.js-countdown-block.blue {
    color: var(--sky)
}

.image-186 {
    mix-blend-mode: lighten;
    height: 2rem
}

.lottie-pulse {
    align-items: center;
    height: .8rem;
    display: none
}

.flex-row-1rem {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    display: flex
}

.flex-row-1rem.center-aligned {
    justify-content: flex-start;
    align-items: center
}

.blog-table-of-contents {
    background-color: var(--stratus);
    max-width: 300px;
    margin-bottom: 1rem
}

.chapter-link {
    background-color: #fff;
    margin-top: 1px;
    margin-right: 1px;
    padding: 1rem .5rem;
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.1rem;
    transition: background-color .2s;
    display: block
}

.chapter-link.top {
    margin-top: 0
}

.chapter-link.active {
    background-color: var(--nimbus)
}

.table-of-contents-title {
    letter-spacing: 0;
    text-transform: uppercase;
    margin-top: -1rem;
    margin-bottom: -1rem;
    font-family: Dmmono,sans-serif;
    font-size: .8rem;
    font-weight: 500
}

.blog-table-of-contents-2 {
    width: 200px;
    margin-top: 20rem;
    position: sticky;
    top: 2rem
}

.chapter-link-2 {
    border-top: 1px solid var(--stratus);
    padding-top: .5rem;
    padding-bottom: 1rem;
    font-size: .8rem;
    font-weight: 400;
    line-height: 1rem
}

.block-quote,.block-quote-2 {
    font-size: 1.5rem;
    line-height: 2.5rem
}

.flex-row-center-1rem {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    align-items: center;
    display: flex
}

.product-launch-paragraph {
    width: 60%;
    font-size: 1.5rem;
    line-height: 2rem
}

.product-launch-paragraph.text-color-light.text-size-regular {
    font-size: 1rem
}

.social-link-dark {
    border: 1px solid var(--stratus);
    background-color: var(--shadow);
    border-radius: 8rem
}

.button-social-image {
    object-fit: contain;
    width: 100%;
    height: 3rem
}

.text-color-sky {
    color: var(--sky)
}

.text-style-underline {
    text-decoration: underline
}

.light-link {
    color: var(--nimbus);
    text-decoration: underline;
    box-shadow: 0 2px 5px #0003
}

.light-link:hover {
    color: var(--nimbus)
}

.filter_header {
    background-color: #fff0;
    display: flex
}

.filter-row {
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 1rem;
    display: flex
}

.filter_options_inline {
    flex-flow: wrap;
    display: flex;
    position: relative;
    overflow: visible
}

.filter-inline-item {
    margin-bottom: .5rem;
    display: block
}

.filter-inline-item.key {
    display: flex
}

.inline-filter {
    background-color: var(--nimbus);
    margin-right: .5rem;
    padding: .5rem;
    font-size: 14px
}

.fs-checkbox_button-4-copy {
    border: 1px #000;
    border-radius: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    inset: 0%;
    box-shadow: 1px 1px 3px #0000
}

.fs-checkbox_button-4-copy.w--redirected-checked {
    background-color: #0000;
    background-image: none;
    border-style: none
}

.fs-checkbox_button-4-copy.w--redirected-focus {
    box-shadow: none;
    border-style: none;
    border-radius: 0
}

.fs-checkbox_button-4-copy.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.library-filters-header {
    text-align: center;
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    display: none
}

.borders-image {
    border: 1px solid var(--stratus)
}

.top-aligned-callout {
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.blog-thumb {
    object-fit: fill
}

.blog-collection-list {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.blog-collection-list.top-three {
    grid-template-columns: 1fr 1fr 1fr
}

.blog-nav {
    border-top: 5px solid var(--shadow);
    background-color: var(--nimbus);
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;
    padding-left: .5rem;
    padding-right: .5rem;
    display: flex
}

.blog-nav.white {
    background-color: var(--neutral-0)
}

.blog-nav-link {
    text-transform: uppercase;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: Dmmono,sans-serif;
    font-size: .875rem;
    display: flex
}

.blog-nav-link:hover {
    box-shadow: inset 0 -2px 0 0 var(--shadow-lite)
}

.blog-nav-link.text-color-stratus,.blog-nav-link.text-color-gray {
    color: var(--stratus)
}

.blog-category-list {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.blog-category-list.top-three {
    grid-template-columns: 1fr 1fr 1fr
}

.background-color-sky {
    background-color: var(--sky)
}

.blog-feature-text-block {
    border-bottom: 1px solid var(--shadow-lite);
    margin-bottom: 2rem
}

.blog-feature-text-block:last-child {
    margin-bottom: 0
}

.feature-ad-block-blog {
    background-color: var(--shadow-lite);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68c0a4ad3b3e3ad1e263c6fd_a1c656005b388dec90285e151cff5711_Fall-Launch-Backer.svg);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    padding: 4rem 2rem 6rem 8rem;
    display: flex
}

.feature-ad-block-blog.background-color-sky {
    background-color: var(--sky);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67ab88d4276515c5804ff258_data-apps-conf-backer.svg);
    background-position: 50% 10%;
    background-repeat: no-repeat;
    background-size: auto
}

.blog-feature-image {
    margin-bottom: 3rem
}

.blog-nav-leader {
    color: var(--stratus);
    text-transform: uppercase;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: Dmmono,sans-serif;
    font-size: .875rem;
    display: block
}

.blog-nav-leader.text-color-stratus {
    color: var(--stratus)
}

.blog-nav-list {
    flex-flow: wrap;
    display: flex
}

.blog-search {
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex
}

.blog-search:hover {
    box-shadow: inset 0 -2px 0 0 var(--shadow-lite)
}

.div-block-224 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-flow: wrap;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.collection-list-2-col-cards {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.template-sm-outer {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 2px solid var(--stratus);
    background-color: var(--neutral-0);
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    display: flex
}

.template-sm-image {
    aspect-ratio: auto;
    background-color: var(--nimbus);
    object-fit: cover;
    width: 30%;
    height: 100%
}

.template-sm-title {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 1rem;
    font-size: 1.2rem;
    line-height: 1.4rem
}

.press-interview-thumb {
    width: 250px
}

.blog-category-list-3 {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.blog-category-list-3.top-three {
    grid-template-columns: 1fr 1fr 1fr
}

.image-align-bottom-right {
    object-fit: contain;
    object-position: 100% 100%;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0
}

.image-align-center-right {
    object-fit: contain;
    object-position: 100% 50%;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0
}

.image-align-center-right.background-color-snowflake {
    background-color: #d5eef1
}

.page-tabs-border-section-flex {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 1px solid var(--stratus);
    background-color: var(--neutral-0);
    width: 100%;
    max-width: 1000px;
    min-height: 460px;
    padding: 3rem 3rem 4rem;
    display: flex;
    position: relative;
    overflow: hidden
}

.page-tabs-border-section-flex.page-tabs-callout {
    background-color: var(--insight)
}

.page-tabs-border-section-flex.page-tab-tall {
    height: 650px
}

.partner-databricks {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66f734ffcea19a16e37a1d1b_BG-Trap-Rectangle-Dark.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.image-tall-right {
    object-fit: contain;
    object-position: 100% 50%;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0
}

.page-tabs-quote-callout {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 1px solid var(--stratus);
    background-color: var(--neutral-0);
    width: 60%;
    max-width: 1000px;
    margin-top: 6rem;
    padding: 1rem 3rem 4rem;
    display: flex;
    position: relative;
    overflow: hidden
}

.page-tabs-quote-callout.page-tabs-callout {
    background-color: var(--insight)
}

.page-tabs-quote-callout.page-tab-tall {
    height: 650px
}

.page-tabs-quote-callout.background-color-gray-dark {
    background-color: var(--shadow-lite)
}

.library-box-feature {
    flex-flow: column;
    padding-left: 0;
    padding-right: 0;
    display: flex
}

.library-box-image {
    border-style: solid;
    border-width: 10px 10px 50px;
    border-color: var(--shadow-lite);
    background-color: var(--shadow-lite);
    width: 100%;
    margin-bottom: 2rem;
    padding-top: 0;
    position: relative;
    overflow: visible
}

.library-box-image.customers {
    height: auto;
    max-height: 180px;
    display: flex
}

.library-box-image.blog-thumb {
    max-height: 208px;
    overflow: clip
}

.library-types {
    margin-left: .5rem;
    display: flex;
    position: absolute;
    bottom: -26px
}

.library-bottom-text {
    border-top: 2px none var(--stratus);
    border-right-width: 1px;
    border-right-color: var(--stratus);
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 0;
    padding-right: 1rem;
    display: flex
}

.library-bottom-text.background-color-shadow {
    color: var(--nimbus)
}

.blog-team-picture {
    object-fit: cover;
    border-radius: 50%;
    width: 24px;
    height: 24px
}

.library-platform {
    background-color: var(--neutral-0);
    padding-left: .5rem;
    padding-right: .5rem;
    display: flex;
    position: absolute;
    top: 107%;
    right: 0%
}

.blog-team-wrapper {
    grid-column-gap: .5rem;
    flex-wrap: wrap;
    align-items: center;
    display: flex
}

.library-creator {
    border: 3px solid var(--shadow-lite);
    width: 50px;
    margin-left: .5rem;
    position: absolute;
    top: 85%;
    right: 12px
}

.grid-with-borders-2x2 {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: var(--shadow-lite);
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

.background-color-white {
    background-color: var(--neutral-0)
}

.background-color-white.grid-top-left {
    padding-bottom: 1rem;
    padding-right: 1rem
}

.background-color-white.grid-top-right {
    padding-bottom: 1rem;
    padding-left: 1rem
}

.background-color-white.grid-bottom-left {
    padding-top: 2rem;
    padding-right: 1rem
}

.background-color-white.grid-bottom-right {
    padding-top: 2rem;
    padding-left: 1rem
}

.margin-left-1rem {
    margin-left: 1rem
}

.fullwidth-image-tabs {
    width: 75%
}

.ai-features {
    justify-content: center;
    align-items: flex-end;
    width: 75%;
    min-height: 600px;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.ai-features.hide {
    display: none
}

.tab_menu_link_icon {
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    border-bottom: 4px solid var(--neutral-7);
    text-transform: uppercase;
    background-color: #ddd0;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    display: flex
}

.tab_menu_link_icon.w--current {
    background-color: var(--insight);
    border-color: #000
}

.tab_menu_link_icon.nimbus {
    background-color: var(--nimbus)
}

.tab_menu_link_icon.nimbus.w--current,.tab_menu_link_icon.light.w--current {
    background-color: var(--insight)
}

.tab_menu_icons {
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
    margin-bottom: 3rem;
    padding: .5rem .5rem 0;
    display: flex
}

.tab_menu_icons.background-color-light-2 {
    margin-top: 1rem
}

.tab_menu_icons.background-color-nimbus {
    background-color: var(--nimbus)
}

.tab_menu_icons.background-color-white {
    background-color: var(--neutral-0)
}

.div-block-225 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template: "Area Area-2"". ."". ."/.25fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.text-block-31,.text-block-32,.text-block-33 {
    text-align: left
}

.ai-function-definition {
    background-color: var(--nimbus);
    padding: .5rem 1rem
}

.ai-function-definition.yellow {
    background-color: var(--insight)
}

.ai-function-definition.blue {
    background-color: var(--sky)
}

.ai-function {
    background-color: var(--nimbus);
    justify-content: flex-start;
    align-items: flex-start;
    padding: .5rem 1rem;
    font-family: Dmmono,sans-serif
}

.ai-function.yellow {
    background-color: var(--insight)
}

.ai-function.blue {
    background-color: var(--sky)
}

.text-block-34 {
    padding-top: .5rem;
    padding-left: 1rem;
    padding-right: 1rem
}

.ai-function-header,.ai-function-definition-header {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    text-align: left;
    padding: .5rem 1rem
}

.ai-functions {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    width: 75%;
    margin-left: auto;
    margin-right: auto
}

.ai-function-disclaimer {
    text-align: left;
    font-size: .875rem
}

.prompt-container {
    justify-content: center;
    align-items: center;
    font-family: Dmmono,sans-serif;
    line-height: 1.6rem;
    display: flex
}

.prompt-animation {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    justify-content: center;
    align-items: center;
    min-height: 120px;
    max-height: 120px;
    padding: 2rem;
    display: flex
}

.prompt-animation.hide {
    display: none
}

.prompt-left {
    text-align: right
}

.prompt-right {
    text-align: left
}

.feature-padding-centered {
    padding-top: 2rem;
    padding-left: 4rem;
    padding-right: 4rem
}

.feature-padding-centered.border-color-light {
    border-left-color: var(--stratus);
    justify-content: center;
    align-items: flex-start;
    font-weight: 500
}

.tabs-content {
    min-height: 834px
}

.text-bottom-align {
    margin-top: auto
}

.video-callout {
    padding-top: 3rem
}

.library-type-icon {
    border: 4px solid #000;
    border-radius: 200px;
    width: 50px;
    margin-left: .5rem
}

.library-box-image-sm {
    border: 5px solid var(--shadow-lite);
    background-color: var(--shadow-lite);
    width: 30%;
    height: 100%;
    margin-bottom: 0;
    padding-top: 0;
    position: static;
    overflow: visible
}

.library-box-image-sm.customers {
    height: auto;
    max-height: 180px;
    display: flex
}

.library-box-image-sm.blog-thumb {
    max-height: 208px;
    overflow: clip
}

.library-collection-2col {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.library-collection-2col.top-three {
    grid-template-columns: 1fr 1fr 1fr
}

.library-box-category {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: row;
    margin-bottom: 1rem;
    padding-left: 0;
    padding-right: 0;
    display: flex
}

.library-box-category.card-link {
    justify-content: flex-start;
    align-items: flex-start
}

.library-box-image-small {
    border: 5px solid var(--shadow-lite);
    background-color: var(--shadow-lite);
    width: 100%;
    max-width: 180px;
    max-height: 100px;
    margin-bottom: 0;
    padding-top: 0;
    position: relative;
    overflow: visible
}

.library-box-image-small.customers {
    height: auto;
    max-height: 180px;
    display: flex
}

.library-box-image-small.blog-thumb {
    max-height: 208px;
    overflow: clip
}

.library-platform-small {
    background-color: var(--neutral-0);
    padding: .3rem .5rem;
    display: flex;
    position: relative
}

.library-platform-small.gray {
    background-color: var(--nimbus)
}

.resource-thumb-small {
    background-color: var(--nimbus);
    object-fit: fill;
    width: 100%;
    max-width: none;
    height: 100%;
    display: block;
    transform: none
}

.library-video-small {
    border-radius: 200px;
    width: 26px
}

.library-types-small {
    justify-content: flex-start;
    align-items: flex-end;
    margin-left: .2rem;
    display: flex;
    position: absolute;
    bottom: -12px
}

.library-creator-picture {
    object-fit: cover;
    border-radius: 50%;
    width: 24px;
    height: 24px
}

.library-creator-picture-small {
    object-fit: cover;
    border-radius: 50%;
    width: 18px;
    height: 18px
}

.margin-top-bottom-half {
    margin-top: .5rem
}

.library {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/672e6aeddb6852f22449a9d6_library-header.svg);
    background-position: 100% -3px;
    background-repeat: no-repeat;
    background-size: auto;
    padding-bottom: 0
}

.search-icon-small {
    width: 22px
}

.library-type-small {
    border-radius: 200px;
    width: 40px;
    margin-right: .5rem
}

.library-key {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: flex-end;
    align-items: center;
    display: flex
}

.library-key.hide {
    display: none
}

.library-key.extra {
    margin-top: 1.33rem
}

.library-key-item {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: .5rem;
    display: flex
}

.library-key-item.hide-2 {
    display: none
}

.library-key-icon {
    width: 32px
}

.template-preview-image {
    width: 100%
}

.library-type-large {
    background-color: var(--neutral-0);
    padding-left: .5rem;
    padding-right: .5rem;
    display: flex;
    position: absolute;
    bottom: -36px;
    left: 0%;
    right: auto
}

.library-link.library-box-category {
    min-height: 100px
}

.collection-list-wrapper-2 {
    margin-bottom: 2rem
}

.library-section-head {
    justify-content: space-between;
    align-items: center;
    display: flex
}

.ribbon-cta-2 {
    justify-content: center;
    align-items: center;
    display: flex
}

.notification-flex-3 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    color: #fff;
    text-align: center;
    background-color: #171717;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    place-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 16px;
    display: flex;
    position: relative
}

.js-countdown-2 {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    opacity: 0;
    color: #f0ff45;
    align-items: center;
    transition: opacity .2s;
    display: flex
}

.embed-code.hide {
    display: none
}

.featured-event-title {
    font-size: 1.6rem;
    line-height: 140%
}

.fs-checkbox_key {
    color: #000;
    cursor: pointer;
    border: 2px solid #0000;
    border-radius: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    margin-left: .5rem;
    margin-right: 1.5rem;
    padding: .25rem 0;
    font-weight: 500;
    display: flex;
    position: relative
}

.fs-checkbox_key:hover {
    border-color: #0000
}

.fs-checkbox_key.is-active {
    box-shadow: inset 0 -2px 0 0 var(--shadow-lite)
}

.fs-checkbox_key_button {
    color: #0000;
    border: 1px #000;
    border-radius: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    margin-left: 0;
    display: block;
    position: absolute;
    inset: 0%
}

.fs-checkbox_key_button.w--redirected-checked {
    background-color: #0000;
    background-image: none;
    border-style: none
}

.fs-checkbox_key_button.w--redirected-focus {
    box-shadow: none;
    border-style: none;
    border-radius: 0
}

.fs-checkbox_key_button.w--redirected-focus-visible {
    box-shadow: none;
    outline-offset: 4px;
    outline: 2px solid #9b9b9b
}

.time-left {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    color: var(--insight);
    align-items: center;
    display: flex
}

.wistia-wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden
}

.analytics-stats {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    margin-top: 2rem;
    padding: 0
}

.link-block-15:where(.w-variant-10089934-e25b-f8b2-7538-c5bf942f104f),.bread-link:where(.w-variant-10089934-e25b-f8b2-7538-c5bf942f104f),.bread-link:hover:where(.w-variant-10089934-e25b-f8b2-7538-c5bf942f104f) {
    color: var(--nimbus)
}

.big-stat {
    justify-content: center;
    align-items: flex-start;
    padding: 1rem
}

.big-stat.blue {
    background-color: var(--sky)
}

.big-stat.blue.invert {
    border-top-style: solid;
    border-top-width: 6px;
    border-top-color: var(--sky);
    border-right-style: solid;
    border-right-width: 6px;
    border-right-color: var(--sky);
    border-bottom-style: solid;
    border-bottom-width: 6px;
    border-bottom-color: var(--sky);
    border-left-style: solid;
    border-left-width: 6px;
    border-left-color: var(--sky);
    color: var(--sky);
    background-color: #0000
}

.big-stat.gray {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681a8251cfb80692b1518a7e_32007e5b4b5f4407c98abb7c1d2b4857_black-slant-grid-wide.svg);
    background-position: 0 0;
    background-size: auto 200px;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem
}

.mobile-button {
    margin-top: 2rem;
    display: none
}

.survey-column-left {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start
}

.survey-layout {
    grid-column-gap: 2.5rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    place-items: start stretch;
    display: grid
}

.survey-embed {
    width: 100%
}

.survey-embed.form-border {
    box-shadow: none;
    border: 1px solid #000;
    border-radius: 0
}

.survey-stack {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    padding-left: 0;
    padding-right: 0
}

.show-mobile-landscape-tablet {
    margin-top: 2rem;
    display: none
}

.form-spacer {
    margin-top: 10rem
}

.state-of-bi-start {
    scroll-margin-top: -400px
}

.link-underline {
    border-bottom: 1px solid var(--shadow-lite);
    text-decoration: none
}

.grid-9 {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto
}

.quote-side-by-side {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 1px solid var(--stratus);
    background-color: var(--neutral-0);
    margin-bottom: 4rem;
    padding: 1rem 3rem 4rem;
    display: block;
    position: relative
}

.quote-side-by-side.page-tabs-callout {
    background-color: var(--insight)
}

.quote-side-by-side.page-tab-tall {
    height: 650px
}

.quote-side-by-side.no-backer {
    background-color: #0000;
    border-style: none;
    margin-bottom: 0
}

.quotes-side-by-side {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.cell-66 {
    justify-content: center;
    align-items: flex-start
}

.centered-header {
    text-align: center;
    margin-left: 15%;
    margin-right: 15%
}

.video-2 {
    object-position: 0% 500%;
    width: 100%;
    height: 50%
}

.div-block-226 {
    aspect-ratio: 16/9;
    object-fit: contain;
    display: block
}

.video-3 {
    aspect-ratio: 16/9
}

.role {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdab2_lines-thin.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto
}

.role-subheading {
    color: var(--nimbus);
    max-width: 660px;
    margin-left: auto;
    margin-right: auto
}

.header-image {
    width: 100%;
    max-width: 700px
}

.text-style-sans {
    font-family: Dmsans,sans-serif
}

.text-style-sans.text-color-light.margin-top-bottom-tiny.max-width-350 {
    max-width: 350px
}

.hero-light-img-vid {
    background-color: var(--nimbus);
    text-align: center;
    background-image: none;
    padding-top: 5rem;
    overflow: hidden
}

.hero-light-img-vid.ai {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb41_BG%20Triangle.svg);
    background-position: 50% 111%;
    background-repeat: repeat-x;
    background-size: auto 289px
}

.hero-light-img-vid.collaboration {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb36_BG%20Trap%20Rectangle.svg);
    background-position: 50% 105%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-light-img-vid.data-apps {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb35_BG%20Pattern%20Rectangle.svg);
    background-position: 50% 102%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-light-img-vid.write-back-2 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb40_BG%20Checker.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-light-img-vid.dashboards {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb41_BG%20Triangle.svg);
    background-position: 50% 112%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-light-img-vid.python {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb40_BG%20Checker.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-light-img-vid.embedded-analytics {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb36_BG%20Trap%20Rectangle.svg);
    background-position: 50% 106%;
    background-repeat: repeat-x;
    background-size: auto 300px
}

.hero-light-img-vid.governance {
    background-position: 50% 102%
}

.hero-light-img-vid.partner-databricks {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66f734ffcea19a16e37a1d1b_BG-Trap-Rectangle-Dark.svg);
    background-position: 50% 100%;
    background-size: auto
}

.hero-light-img-vid.architecture {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66f734ffcea19a16e37a1d1b_BG-Trap-Rectangle-Dark.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto
}

.hero-light-img-vid.partner-snowflake {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/678a96b1e5241a2ed5f6dc50_BG-Checker-white.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto
}

.snowflake-icon {
    height: 3rem
}

.padding-top-large {
    margin-top: 4rem
}

.padding-top-large.left-align {
    margin-left: 0
}

.spacer-4rem {
    height: 6rem
}

.industry-logo {
    width: 180px;
    max-width: 180px
}

.industry-logo-wrapper {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    background-color: var(--neutral-0);
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-right: auto;
    padding: 18px
}

.cowan {
    width: 120px
}

.fcs {
    mix-blend-mode: multiply;
    width: 160px
}

.fictiv {
    width: 80px
}

.doordash {
    width: 160px
}

.analyst-disclaimer {
    color: var(--stratus);
    text-align: right;
    margin-top: 1rem;
    font-size: .8rem
}

.dual-demos {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    display: flex
}

.dual-demo {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.sticky-ad,.side-sticky {
    position: sticky;
    top: 2rem
}

.blog-sticky-ad {
    max-width: 200px;
    margin-bottom: 5.7rem
}

.data-apps-conf-header {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    width: 100%;
    max-width: 1000px;
    margin-bottom: 0;
    padding: 3rem 3rem 4rem;
    position: relative;
    overflow: hidden
}

.data-apps-conf-header.page-tabs-callout {
    background-color: var(--insight)
}

.data-apps-stack {
    padding: 0
}

.callout-3-column {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    flex-flow: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.callout-card-dark {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    border: 1px solid var(--shadow-lite);
    background-color: var(--shadow-lite);
    border-radius: 0;
    flex-flow: column;
    align-items: stretch;
    padding: 24px 24px 0;
    transition: all .3s;
    display: flex
}

.callout-card-dark:hover {
    outline-color: var(--shadow-lite);
    outline-offset: 0px;
    background-color: #29292900;
    border-style: solid;
    border-color: #464646;
    outline-width: 10px;
    outline-style: none
}

.callout-card-dark.text-color-light {
    border-color: var(--shadow-lite);
    height: 100%;
    padding: 0
}

.callout-card-dark.text-color-light:hover {
    outline-color: var(--stratus);
    outline-offset: 0px;
    color: var(--stratus);
    border-style: solid;
    outline-width: 0;
    outline-style: solid
}

.callout-flex {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    padding: 2rem;
    display: flex
}

.callout-flex.background-color-nimbus {
    flex-flow: column;
    justify-content: flex-start;
    display: flex
}

.callout-flex.background-color-sky {
    background-color: var(--sky)
}

.callout-flex.background-color-green {
    background-color: var(--grass)
}

.callout-flex.background-color-pink {
    background-color: var(--meadow)
}

.callout-flex.background-color-white-padded {
    background-color: #fff;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0
}

.grid-sessions {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0
}

.grid-sessions.on-dark {
    background-color: var(--neutral-10)
}

.speaker-wrapper {
    grid-column-gap: .5rem;
    flex-flow: row;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex
}

.blog-author-text-wrapper-copy {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex
}

.speaker-logo {
    max-width: 180px;
    height: 40px
}

.speaker-header {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex
}

.speaker-header.hide {
    display: none
}

.speaker-header.empty {
    border-bottom-color: var(--stratus)
}

.data-apps-session-block {
    border: 2px solid var(--shadow-lite);
    background-color: var(--shadow-lite);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67aa8b18e26bfbbc2e23023d_data-apps-texture.svg);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 160px;
    justify-content: flex-start;
    align-items: stretch;
    padding: 1rem 2rem
}

.data-apps-session-block.empty {
    border: 2px none var(--shadow-lite);
    background-color: var(--shadow);
    background-image: none
}

.data-apps-session-block.data-apps-colspan-2 {
    background-size: 20%;
    padding-right: 14rem
}

.data-apps-session-block.large {
    background-size: 320px
}

.session-header {
    margin-top: 1rem;
    margin-bottom: 1rem
}

.data-apps-logos {
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    flex-flow: wrap;
    margin-top: 1rem;
    display: flex
}

.text-color-green {
    color: var(--grass)
}

.data-apps-stats {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    justify-content: center;
    align-items: flex-start;
    display: flex
}

.data-apps-stat {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    display: flex
}

.data-app-stat-num {
    height: 100px
}

.solid-tag {
    background-color: var(--sky);
    color: var(--shadow);
    margin-top: .3rem;
    margin-right: .25rem;
    padding: .25rem .5rem;
    font-family: Dmsans,sans-serif;
    font-size: .75rem;
    font-weight: 600;
    line-height: .9rem
}

.solid-tag.yellow {
    background-color: var(--insight)
}

.solid-tag.green {
    background-color: var(--grass)
}

.solid-tag.pink {
    background-color: var(--meadow)
}

.solid-tag.orange {
    background-color: var(--sun)
}

.data-apps-tags {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    flex-flow: wrap;
    width: 100%;
    display: flex
}

.data-app-stats {
    width: 75%;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0
}

.ribbon-text {
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: .75rem;
    line-height: 120%
}

.ribbon-text.text-align-left.underline-light,.ribbon-text.underline-light {
    border-bottom: 1px solid var(--stratus)
}

.text-color-blue {
    color: var(--sky)
}

.no-margin-top {
    margin-top: 0
}

.blog-feature-header-custom {
    color: var(--nimbus);
    text-wrap-style: balance;
    margin-bottom: 1rem;
    line-height: 120%
}

.blog-feature-header-custom.text-style-thin,.blog-feature-header-custom.text-style-normal {
    font-weight: 400
}

.blog-feature-header-custom.text-style-underline {
    text-decoration: underline
}

.blog-feature-header-custom.width-50-centered {
    width: 50%;
    margin-left: auto;
    margin-right: auto
}

.nav-group-spacer {
    height: 0
}

.h1-media {
    color: var(--nimbus);
    text-align: center;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.5rem;
    line-height: 140%
}

.margin-bottom-huge {
    margin-bottom: 12rem
}

.grid-10 {
    grid-template-rows: auto
}

.overview-gartner-block {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    color: var(--nimbus);
    text-align: left;
    grid-template-rows: auto;
    width: 80%;
    margin: 2rem auto;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem
}

.overview-gartner-block.margin-top-medium {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem
}

.subhead-left {
    color: var(--neutral-0);
    text-align: left;
    letter-spacing: .5px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.75rem
}

.subhead-left.no-margin-bottom {
    margin-bottom: 0
}

.subhead-left.text-color-dark {
    color: var(--shadow-lite)
}

.gartner-block {
    margin-left: auto
}

.gartner-header {
    font-size: 2rem;
    line-height: 120%
}

.overview-image {
    width: 100%
}

.overview-image.right {
    background-color: var(--nimbus);
    object-fit: contain;
    width: 420px;
    right: 0
}

.overview-image.right.lottie-backer {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66919a2cf19b47a964635d25_HP-1_V3.webp);
    background-position: 0%;
    background-size: cover
}

.overview-image.right.bottom-align {
    object-position: 50% 100%;
    width: 430px
}

.overview-image.left {
    object-fit: contain;
    left: 0
}

.overview-image.left.bottom-align {
    object-position: 50% 100%
}

.overview-block {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 1px solid var(--stratus);
    background-color: var(--neutral-0);
    width: 100%;
    max-width: 1000px;
    min-height: 460px;
    padding: 3rem 3rem 4rem;
    display: flex;
    position: relative;
    overflow: hidden
}

.overview-block.page-tabs-callout {
    background-color: var(--insight)
}

.overview-block.page-tab-tall {
    height: 650px
}

.sticky-card {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    border: 1px solid var(--stratus);
    background-color: var(--neutral-0);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 1000px;
    min-height: 260px;
    display: grid;
    position: relative;
    overflow: hidden
}

.sticky-card.page-tabs-callout {
    background-color: var(--insight)
}

.sticky-card.page-tab-tall {
    height: 650px
}

.sticky-card-left {
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 4rem
}

.sticky-card-right {
    background-color: var(--nimbus);
    height: 100%;
    overflow: hidden
}

.sticky-card-right.bottom {
    min-height: 420px
}

.sticky-card-left-copy {
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-left: 4rem
}

.data-apps-schedule {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    color: var(--nimbus);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: .5rem
}

.data-apps-schedule.gated {
    opacity: .5
}

.data-apps-schedule-block {
    background-color: var(--shadow);
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    display: flex
}

.data-apps-schedule-block.partner {
    background-color: var(--sun)
}

.data-apps-schedule-block.main-event {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67cf497227392c6dc76eafad_c8822636df0868a66b3025c52de25b34_data-apps-texture-main-event.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: 250px
}

.data-apps-schedule-block.main-event.gated {
    opacity: .5
}

.data-apps-schedule-block.main-event.da-gate-3 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67c24b16eba17b82c8fe64a1_data-apps-texture-dark.svg);
    background-position: 50% -200%;
    background-size: 250px
}

.data-apps-schedule-block.da-gate-3 {
    background-image: none
}

.data-apps-time-header {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    background-color: var(--shadow);
    color: var(--neutral-0);
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    justify-content: center;
    align-items: flex-start;
    margin-top: .5rem;
    margin-bottom: .5rem;
    padding: 1rem;
    font-family: Dmmono,sans-serif;
    font-size: 12px;
    display: flex
}

.data-apps-time-header.live {
    background-color: var(--sky);
    color: var(--shadow);
    font-size: 14px;
    font-weight: 500;
    display: none
}

.data-apps-main {
    background-color: var(--sky);
    text-align: center;
    margin-top: .5rem;
    margin-bottom: .5rem;
    padding-top: 1rem;
    padding-bottom: 1rem
}

.data-apps-event-link {
    background-color: var(--shadow-lite);
    cursor: pointer;
    border: 1px solid #fff0;
    width: 100%;
    max-width: 400px;
    margin-bottom: 1rem;
    transition-property: background-color;
    transition-duration: .2s;
    transition-timing-function: ease
}

.data-apps-event-link:hover {
    border: 1px solid var(--neutral-0);
    background-color: var(--shadow);
    color: var(--neutral-0)
}

.data-apps-event-link.extend {
    background-color: var(--sky);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67aa8b18e26bfbbc2e23023d_data-apps-texture.svg);
    background-position: 0 -30px;
    background-size: 200px;
    max-width: none
}

.data-apps-duration {
    color: var(--shadow);
    text-transform: uppercase;
    margin-left: 1rem;
    margin-right: 1rem;
    font-family: Dmmono,sans-serif;
    font-size: 12px
}

.data-apps-timeblock {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    background-color: var(--stratus);
    justify-content: center;
    align-items: flex-start;
    transition: background-color .2s;
    display: flex
}

.data-apps-timeblock.gated {
    display: none
}

.data-apps-watch {
    color: var(--shadow);
    text-transform: uppercase;
    border-radius: 20px;
    padding-left: 1rem;
    padding-right: .75rem;
    font-family: Dmmono,sans-serif;
    font-size: 12px
}

.data-apps-schedule-category {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    font-family: Dmmono,sans-serif;
    font-size: 14px
}

.data-apps-schedule-category.main-event {
    color: var(--shadow)
}

.data-apps-event-title {
    color: var(--nimbus);
    margin: 1rem;
    font-size: 18px;
    font-weight: 400;
    line-height: 120%
}

.data-apps-event-title.main-event {
    text-align: center
}

.data-apps-extend {
    background-color: var(--shadow-lite);
    max-width: 400px;
    margin-left: auto;
    margin-right: auto
}

.text-style-mono-bold {
    font-weight: 500
}

.margin-right-large {
    margin-right: 1rem
}

.library-box-video {
    background-color: var(--shadow-lite);
    width: 100%;
    margin-bottom: 0;
    padding-top: 0;
    position: relative;
    overflow: visible
}

.library-box-video.customers {
    height: auto;
    max-height: 180px;
    display: flex
}

.library-box-video.blog-thumb {
    max-height: 208px;
    overflow: clip
}

.legal-embed {
    border: 1px solid #000
}

.mobile-warning {
    display: none
}

.data-apps-company {
    color: var(--nimbus);
    text-transform: uppercase;
    margin: 1rem 1rem .25rem;
    font-family: Dmmono,sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%
}

.legal-h1 {
    text-align: left;
    letter-spacing: -.1rem;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    line-height: 120%
}

.link-border {
    border-bottom: 1px solid #000
}

.da-register {
    display: block
}

.da-live {
    display: none
}

.data-apps-icon {
    width: 40px
}

.data-apps-main-header {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 400px;
    max-width: 400px;
    display: flex
}

.yellow-line {
    background-color: var(--insight);
    width: 100%;
    height: 1px
}

.data-apps-countdown {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    display: flex
}

.data-apps-countdown.justify-space-between {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: flex-start
}

.flex-centered-2rem {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: center;
    align-items: center;
    display: flex
}

.legal-indent {
    margin-left: 2rem
}

.margin-top-bottom-medium {
    margin-top: 4rem;
    margin-bottom: 4rem
}

.legal-table {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding-left: 0;
    padding-right: 0
}

.legal-table-cell {
    border: 1px solid #000;
    padding: .5rem
}

.table-text {
    padding: .5rem
}

.legal-tablle-header {
    background-color: var(--nimbus);
    border: 1px solid #000
}

.column-3,.column-4 {
    border: 1px solid #000
}

.data-apps-start-time {
    color: var(--stratus);
    text-align: left;
    text-transform: uppercase;
    margin: 1rem 1rem 0;
    font-family: Dmmono,sans-serif;
    font-size: 12px;
    font-weight: 400
}

.data-apps-start-time.text-align-center {
    text-align: center
}

.padding-top-bottom-small {
    padding-top: 1rem;
    padding-bottom: 1rem
}

.padding-top-bottom-medium {
    padding-top: 2rem;
    padding-bottom: 2rem
}

.data-apps-callout {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: center;
    align-items: center;
    display: flex
}

.data-apps-logo {
    min-width: 80px;
    max-width: 80px;
    margin-bottom: 1rem
}

.webinar-authors {
    margin-top: 1rem
}

.data-apps-contestant {
    margin-top: .5rem;
    margin-bottom: .5rem
}

.data-apps-judge {
    text-transform: none;
    margin-top: .5rem;
    font-family: Dmsans,sans-serif;
    font-size: 1rem;
    font-weight: 500
}

.appathon-block {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    display: flex
}

.flex-left-2rem {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.webinar-auithors-list {
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start
}

.summit-header {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    width: 100%;
    max-width: 1000px;
    padding: 5rem 3rem 4rem;
    position: relative;
    overflow: hidden
}

.summit-header.page-tabs-callout {
    background-color: var(--insight)
}

.event-description {
    padding: 0
}

.summit-subtagline {
    color: var(--grass);
    text-align: center;
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 120%
}

.summit-subtagline.margin-bottom-large {
    margin-bottom: 4rem
}

.summit-tagline {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 300;
    line-height: 120%
}

.text-style-mono-bld {
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-weight: 500
}

.learn-nav-sticky {
    background-color: #fffc;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 23px;
    display: flex;
    position: sticky;
    top: 10px
}

.learn-left-nav {
    border-bottom: 1px solid var(--nimbus);
    width: 100%;
    padding: 9px 13px;
    transition: all .2s
}

.learn-left-nav:hover {
    background-color: var(--nimbus)
}

.learn-left-nav.w--current {
    border-bottom-color: var(--nimbus);
    background-color: var(--insight)
}

.learn-left-nav.no-border {
    border-bottom-style: none;
    margin-top: 1rem
}

.learn-heading {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 2.6rem;
    display: block
}

.learn-embed {
    border: 1px solid var(--shadow-lite)
}

.learn-category {
    border-bottom: 1px solid var(--stratus);
    margin-top: 0;
    margin-bottom: 2rem;
    padding-top: 4rem;
    padding-bottom: 0
}

.learn-content {
    max-width: 70%;
    margin-left: 1rem
}

.smaller-rich-text {
    padding-top: 0;
    padding-bottom: 0
}

.smaller-rich-text a {
    text-decoration: underline
}

.smaller-rich-text h3 {
    font-size: 2rem
}

.smaller-rich-text h4 {
    font-size: 1.5rem
}

.smaller-rich-text h5 {
    background-color: var(--nimbus);
    margin-bottom: 1rem;
    padding: 1.25rem 2rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5rem
}

.smaller-rich-text h6 {
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.125rem
}

.data-apps-liveblock {
    background-color: var(--stratus);
    justify-content: space-between;
    align-items: flex-start;
    transition: background-color .2s;
    display: flex
}

.data-apps-liveblock.gated {
    display: none
}

.max-width-twothirds {
    max-width: 66%
}

.mardness-promo {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    text-align: left;
    justify-content: flex-start;
    align-items: center;
    max-width: 60%;
    margin-right: 12rem;
    font-family: Dmmono,sans-serif;
    display: flex
}

.session-watch {
    margin-top: 1rem;
    margin-bottom: 1rem
}

.session-watch.da-link-4,.session-watch.da-link-3 {
    display: none
}

.session-watch.da-link-2,.session-watch.da-link-1 {
    display: block
}

.si-partners {
    max-width: 700px;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto
}

.flex-vertical-centered {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: column;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.flex-vertical-centered.margin-bottom-medium {
    margin-top: 4rem
}

.no-margin-bottom-top {
    margin-top: 0;
    margin-bottom: 0
}

.img-top-right {
    width: 400px;
    margin-top: 0;
    margin-left: auto;
    position: absolute;
    inset: 0% 0% auto auto
}

.img-bot-left {
    width: 400px;
    margin-top: 0;
    margin-left: auto;
    position: absolute;
    inset: auto auto 0% 0%
}

.featured-author {
    max-width: 200px;
    margin-bottom: 1rem
}

.padding-top-bottom-large {
    padding-top: 5rem;
    padding-bottom: 5rem
}

.heading-34,.text-style-spacing-snug,.text-style-spacing-snug-2 {
    letter-spacing: -.05em
}

.align-center-3 {
    justify-content: center;
    display: flex
}

.container-24 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: relative
}

.container-24.align-center-3 {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.summit-subtagline-2 {
    color: #4cec8c;
    text-align: center;
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin-bottom: 6rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 120%
}

.text-color-light-2 {
    color: #fff
}

.summit-header-2 {
    color: #f0f0f0;
    background-color: #3d3d3d;
    width: 100%;
    max-width: 1000px;
    padding: 5rem 3rem 4rem;
    position: relative;
    overflow: hidden
}

.centered-tagline {
    text-align: center;
    letter-spacing: .1rem;
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 120%
}

.text-color-pink {
    color: var(--meadow)
}

.event-description-copy {
    padding: 0
}

.awards-header {
    color: #f0f0f0;
    background-color: #3d3d3d;
    width: 100%;
    max-width: 1000px;
    padding: 5rem 3rem 0;
    position: relative;
    overflow: hidden
}

.awards-description {
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    padding: 0
}

.awards-grid-wrapper {
    border-bottom: 1rem solid var(--meadow);
    background-color: var(--nimbus);
    padding: 3rem
}

.align-center-verical {
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.featured-event-texture {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 120px;
    height: 100%;
    min-height: 220px;
    display: flex
}

.featured-event-texture.databricks-texture {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67ded7cb107d9f4286fa5cc5_707c675bcfd0b69a855ec53ae844827b_blue-gradient-texture.svg);
    background-size: auto 300px
}

.featured-event-texture.snowflake-texture {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67d0cd09b542925bd7bfd947_yellow-grid.svg);
    background-position: 50% 10px;
    background-repeat: repeat-x;
    background-size: auto 220px
}

.summit-mark {
    height: 30px
}

.ad-kicker-header {
    text-align: center;
    letter-spacing: 0;
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-weight: 400
}

.image-187 {
    width: 100%
}

.background-color-sky-2 {
    background-color: var(--sky)
}

.resources-2-column {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    flex-flow: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.no-cursor {
    cursor: none
}

.resources-flex-nohover {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    padding: 2rem;
    display: flex
}

.resources-flex-nohover:hover {
    color: var(--nimbus)
}

.resources-flex-nohover.background-color-nimbus {
    flex-flow: column;
    justify-content: flex-start;
    display: flex
}

.resources-flex-nohover.background-color-sky {
    background-color: var(--sky)
}

.resources-flex-nohover.background-color-green {
    background-color: var(--grass)
}

.resources-flex-nohover.background-color-pink {
    background-color: var(--meadow)
}

.resources-flex-nohover.background-color-white {
    background-color: #fff;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0
}

.timestamp {
    color: var(--stratus);
    text-transform: uppercase;
    margin-bottom: 0;
    padding: 0 .5rem 0 0;
    font-family: Dmmono,sans-serif;
    font-size: 12px;
    display: inline-block
}

.timestamp.green {
    background-color: #4cec8c
}

.timestamp.orange {
    background-color: var(--sun);
    padding-top: 0;
    padding-bottom: 0
}

.timestamp.pink {
    text-transform: uppercase;
    background-color: #ffcee6;
    padding-top: 0;
    padding-bottom: 0
}

.timestamp.sky {
    background-color: var(--sky);
    padding-top: 0;
    padding-bottom: 0
}

.timestamp.blue {
    background-color: var(--sky)
}

.timestamp.grey {
    background-color: #c1c8c9
}

.timestamp.yellow {
    background-color: var(--insight)
}

.timestamp.white-outline {
    border: 1px solid var(--neutral-0)
}

.timestamp.grey-stratus {
    background-color: var(--stratus)
}

.timestamp.gray-light {
    background-color: var(--nimbus)
}

.video-chapter {
    z-index: 5;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    position: relative
}

.resources-card-dark-copy {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    border: 1px solid var(--shadow-lite);
    background-color: var(--shadow-lite);
    border-radius: 0;
    flex-flow: column;
    align-items: stretch;
    padding: 24px 24px 0;
    transition: all .3s;
    display: flex
}

.resources-card-dark-copy:hover {
    outline-color: var(--shadow-lite);
    outline-offset: 0px;
    background-color: #29292900;
    border-style: solid;
    border-color: #464646;
    outline-width: 10px;
    outline-style: none
}

.resources-card-dark-copy.text-color-light {
    border-color: var(--shadow-lite);
    height: 100%;
    padding: 0
}

.resources-card-dark-copy.text-color-light:hover {
    outline-color: var(--stratus);
    outline-offset: 0px;
    color: var(--stratus);
    border-style: solid;
    outline-width: 0;
    outline-style: solid
}

.video-chapter-block {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    text-align: left;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
    transition: background-color .2s;
    display: flex
}

.video-chapter-block:hover {
    background-color: var(--black);
    color: var(--nimbus)
}

.div-block-227 {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    text-align: left;
    padding: 2rem
}

.video-chapter-blocks {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    display: flex
}

.sticky-left-list {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 23px;
    display: flex;
    position: sticky;
    top: 10px
}

.sticky-left-nav {
    color: var(--nimbus);
    border-bottom: 1px solid #9fa8a780;
    border-right: 1px solid #0000;
    width: 100%;
    padding: 9px 13px;
    transition-property: all;
    transition-duration: .2s;
    transition-timing-function: ease
}

.sticky-left-nav:hover {
    border-right: 10px solid var(--stratus);
    color: var(--neutral-0)
}

.sticky-left-nav.w--current {
    border-right-width: 10px;
    border-right-color: var(--insight);
    background-color: var(--shadow-lite)
}

.sticky-left-nav.no-border {
    border-bottom-style: none;
    margin-top: 1rem
}

.stick-nav-holder {
    color: var(--nimbus);
    border-bottom: 1px solid #9fa8a780;
    border-right: 1px solid #0000;
    width: 100%;
    min-width: 344px;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-right: 0;
    transition-property: all;
    transition-duration: .2s;
    transition-timing-function: ease
}

.stick-nav-holder:hover {
    border-right: 10px solid var(--stratus);
    color: var(--neutral-0)
}

.stick-nav-holder.w--current {
    border-right-width: 10px;
    border-right-color: var(--insight);
    background-color: var(--shadow-lite)
}

.stick-nav-holder.no-border {
    border-bottom-style: none;
    margin-top: 1rem
}

.sticky-left-header {
    min-width: 310px
}

.margin-top-huge {
    margin-top: 12rem
}

.video-caption {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-flow: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: grid;
    position: relative
}

.video-caption-text-copy {
    width: 20%
}

.video-caption-video-copy {
    width: 80%
}

.event-date-time {
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: 14px
}

.event-card-labels {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    display: flex
}

.event-card-labels.center-aligned {
    justify-content: flex-start;
    align-items: center
}

.poy-frame {
    background-color: var(--neutral-0);
    padding-top: 2rem;
    padding-bottom: 2rem
}

.state-of-bi-book-2025 {
    width: 600px;
    margin-top: auto;
    margin-left: 2rem;
    margin-right: auto
}

.state-of-bi-header {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0
}

.paragraph-1141 {
    background-color: var(--shadow-lite)
}

.flex-align-bottom {
    justify-content: flex-start;
    align-items: flex-end;
    display: flex
}

.huge-stat {
    background-color: var(--neutral-0);
    margin-bottom: 1rem;
    padding: 3rem 1rem 1rem;
    font-family: Dmmono,sans-serif;
    font-size: 5rem;
    font-weight: 300;
    line-height: 100%
}

.huge-stat.orange {
    border-top: 10px solid var(--sun)
}

.huge-stat.yellow {
    border-top: 10px solid var(--insight)
}

.huge-stat.green {
    border-top: 10px solid var(--grass)
}

.text-color-orange {
    color: var(--sun)
}

.state-of-bi-2025-footer {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67ef31b9356d8328aadeaa6f_state-of-bi-dots-gray.svg);
    background-position: 50% 10%;
    background-repeat: repeat-x;
    background-size: auto 250px;
    padding-bottom: 0
}

.icon-large-2 {
    width: 3rem;
    height: 3rem;
    margin-bottom: .5rem
}

.video-header-smaller {
    background-color: var(--shadow);
    border-radius: 2px;
    max-width: 720px;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden
}

.video-header-smaller.home {
    margin-top: 0
}

.video-header-smaller.overview {
    margin-top: 2rem
}

._100m-arr-columns {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template: "content.form"/4fr;
    grid-auto-columns: 2.75fr;
    place-items: start stretch;
    display: grid
}

._100m-arr-grid {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: flex
}

._100m-arr-text {
    background-color: var(--neutral-0);
    height: 100%;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 1rem 1rem 2rem
}

.border-dark-large {
    border: 1rem solid #000
}

.border-dark-medium {
    border: .5rem solid #000
}

._100m-arr-grid-get {
    grid-column-gap: 32px;
    grid-row-gap: 1.5rem;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    margin-top: 2rem;
    display: grid
}

.div-block-228 {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    display: flex
}

._100m-arr-grid-section {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    border: 1px solid var(--shadow-lite);
    background-color: var(--shadow-lite);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: flex
}

._100m-arr-paragraph {
    background-color: var(--neutral-0);
    margin-top: 4rem;
    margin-left: 4rem;
    padding-bottom: 2rem;
    padding-right: 2rem
}

._100m-arr-what-you-get {
    padding: 4rem 2rem 2rem
}

._100m-arr-what-you-get.border-left {
    padding-top: 6rem;
    padding-bottom: 4rem;
    padding-left: 4rem
}

._100m-arr-paragraph-dark {
    background-color: var(--shadow-lite);
    color: var(--neutral-0);
    width: 50%;
    margin-top: 0;
    margin-left: 4rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
    padding-right: 2rem
}

._100m-arr-what-you-get-dark {
    color: var(--nimbus);
    width: 50%;
    padding: 4.5rem 2rem 2rem
}

._100m-arr-what-you-get-dark.border-left {
    padding-top: 6rem;
    padding-bottom: 4rem;
    padding-left: 4rem
}

.blog-feature-header-custom-2nd {
    color: var(--nimbus);
    text-wrap-style: balance;
    font-size: 3rem;
    line-height: 120%
}

.patent-table {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding-left: 0;
    padding-right: 0
}

.patent-name {
    margin-bottom: 0;
    font-size: 1rem
}

.padding-top-larger {
    margin-top: 6rem
}

.grid-sessions-2col {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    color: var(--nimbus);
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0
}

.grid-sessions-2col.on-dark {
    background-color: var(--neutral-10)
}

.session-block-dark {
    background-color: var(--shadow-lite);
    justify-content: flex-start;
    align-items: stretch;
    padding: 1rem 2rem
}

.session-block-dark.empty {
    border: 2px none var(--shadow-lite);
    background-color: var(--shadow);
    background-image: none
}

.session-block-dark.data-apps-colspan-2 {
    background-size: 20%;
    padding-right: 14rem
}

.session-block-dark.large {
    background-size: 320px
}

.session-block-dark.summit-25 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68028448282dace69ed542f1_summit-25-texture-topright.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 50%
}

.session-logo {
    max-width: 160px;
    margin-top: 2rem;
    margin-bottom: 1rem
}

.session-logo.shorter {
    max-width: 130px;
    margin-top: 1rem
}

.session-company {
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem
}

.summit-session-header {
    color: var(--grass);
    margin-right: 2rem
}

.checkmark-transparent {
    opacity: .04;
    outline-offset: 0px;
    outline: 2px dashed #0f8
}

.grid-sessions-3col {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    color: var(--nimbus);
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0
}

.grid-sessions-3col.on-dark {
    background-color: var(--neutral-10)
}

.search-result {
    border-top: 1px solid var(--stratus);
    margin-bottom: 2rem;
    padding: 1rem 1rem 1rem 0
}

.bold-text {
    background-color: var(--insight)
}

.search-wrapper {
    min-height: 400px
}

.search-result-grid {
    grid-template-rows: auto;
    grid-template-columns: 1fr 2fr
}

.search-icon {
    margin-right: -.5rem;
    padding: 10px;
    display: none
}

.spring-showcase-paragraph {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    width: 60%;
    margin-bottom: 2rem;
    padding: 2rem;
    font-size: 1.5rem;
    line-height: 2rem
}

.spring-showcase-paragraph.text-color-light.text-size-regular {
    font-size: 1rem
}

.show-mobile-landscape {
    display: none
}

.video-embed-height {
    min-height: var(--min-height);
    justify-content: space-around;
    align-items: stretch;
    display: flex
}

.img-thicken {
    position: absolute;
    bottom: -.25px;
    right: -.75px
}

.img-thicken-wrap {
    width: 32px;
    height: 32px;
    position: absolute
}

.grid-internal-color {
    height: 100%;
    transition: background-color .2s
}

.grid-internal-color:hover {
    background-color: var(--neutral-0);
    height: 100%
}

.text-wrap-balance {
    text-wrap: balance
}

.div-block-229 {
    max-width: 35%;
    position: relative;
    left: 1rem
}

.video-embed-height-fix {
    min-height: 60vh
}

.c_search_clear-icon {
    width: 1em;
    height: 1.1em
}

.c_search_results {
    z-index: 999;
    height: 0;
    position: absolute;
    inset: auto 0% 0%
}

.c_search_clear-text {
    display: none
}

.c_search_clear {
    z-index: 3;
    color: #000;
    background-color: #e9e9e9;
    border-radius: .5em;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1.5em;
    transition: color .1s,background-color .1s;
    display: flex;
    position: absolute;
    inset: 0% 0% 0% auto
}

.c_search_clear:hover {
    color: #fff;
    background-color: silver
}

.c_search_icon {
    z-index: 2;
    width: 1.6em;
    height: 1.6em;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1.5em;
    position: absolute;
    inset: 0% auto 0% 0%
}

.steps_wrapper {
    max-width: 52em;
    margin-left: auto;
    margin-right: auto;
    padding-top: 4em
}

.c_search_component {
    width: 100%;
    max-width: 40em;
    margin-left: auto;
    margin-right: auto;
    position: relative
}

.container__search-wrapper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 2.5em 5% 8em
}

.c_search_results-container {
    background-color: #fff;
    border-top: 1.5px solid #e6e6e6;
    border-radius: 0 0 .6em .6em;
    max-height: 50em;
    padding-left: 3rem;
    padding-right: 3rem;
    transition: opacity .2s;
    overflow: auto
}

.c_search_button {
    display: none
}

.steps_item {
    padding-top: 3em
}

.c_search_bar {
    position: relative
}

.c_search_input {
    z-index: 1;
    background-color: #fff;
    border: 0 solid #000;
    border-radius: .6em;
    height: 3.5em;
    margin-bottom: 0;
    padding: 0 1.6em 0 3.6em;
    font-size: 1.2em;
    position: relative
}

.c_search_input:focus {
    outline-offset: 0px;
    outline-style: none
}

.steps_image {
    border-radius: .9em;
    width: 100%;
    margin-top: 1em
}

.button-cal-google {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681e64dca31ef5d10f93e318_google-calendar.svg);
    background-position: 20px;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    padding: .65rem 1.5rem .65rem 3.5rem;
    position: static
}

.button-cal-google:hover {
    background-color: #fffc
}

.button-cal-outlook {
    background-color: var(--neutral-0);
    color: var(--black);
    text-align: center;
    white-space: nowrap;
    word-break: normal;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681e668d510f9514b8f5f7ad_outlook-calendar.svg);
    background-position: 20px;
    background-repeat: no-repeat;
    background-size: 26px 26px;
    border: 1px solid #222;
    border-radius: 8rem;
    padding: .65rem 1.5rem .65rem 3.5rem;
    font-family: Dmmono,sans-serif;
    font-weight: 400;
    transition: all .275s,all .2s;
    position: static
}

.button-cal-outlook:hover {
    background-color: #fffc
}

.site-search-input-new {
    background-color: #fff;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd9c_search.svg);
    background-position: 16px;
    background-repeat: no-repeat;
    background-size: auto;
    border: 1px #000;
    border-radius: 4px;
    width: 100%;
    height: auto;
    margin-bottom: 0;
    padding: 13.5px 16px 13.5px 48px;
    font-size: 16px;
    line-height: 150%
}

.site-search-input-new:focus {
    border-color: var(--primary-blue)
}

.c_search_results-container--stay-open {
    background-color: #fff;
    border-top: 1.5px solid #e6e6e6;
    border-radius: 0 0 .6em .6em;
    max-height: 50em;
    padding-left: 3rem;
    padding-right: 3rem;
    transition: opacity .2s
}

.c_search_results--stay-open {
    z-index: 999;
    position: absolute;
    inset: auto 0% 0%
}

.button-cal-ics {
    background-color: var(--neutral-0);
    color: var(--black);
    text-align: center;
    white-space: nowrap;
    word-break: normal;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681e8040cd529264c7f2f9b0_icon-calendar.svg);
    background-position: 20px;
    background-repeat: no-repeat;
    background-size: 28px 28px;
    border: 1px solid #222;
    border-radius: 8rem;
    padding: .65rem 1.5rem .65rem 3.5rem;
    font-family: Dmmono,sans-serif;
    font-weight: 400;
    transition: all .275s,all .2s;
    position: static
}

.button-cal-ics:hover {
    background-color: #fffc
}

.calendar-links {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    align-items: center;
    display: flex
}

.site-search-button-arrow {
    color: #3330;
    background-color: #0000;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccfda_arrow-cursor-hover-right.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto;
    width: 55px;
    position: absolute;
    inset: 0% 0 0% auto
}

.site-search-button-arrow.border {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd98_arrow-neutral-9.svg),linear-gradient(310deg,#00000008,#fff);
    background-position: 50%,0 0;
    background-repeat: no-repeat,repeat;
    background-size: auto,auto;
    border: 2px solid #3d3d3d38;
    border-color: #3d3d3d38 #3d3d3d4a #3d3d3d38 #3d3d3d21;
    border-radius: 2px;
    height: 102%
}

.site-search-button-replace {
    color: #3330;
    background-color: #0000;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccfda_arrow-cursor-hover-right.svg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto;
    width: 55px;
    display: none;
    position: absolute;
    inset: 0% 0 0% auto
}

.site-search-button-replace.border {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccd98_arrow-neutral-9.svg),linear-gradient(310deg,#00000008,#fff);
    background-position: 50%,0 0;
    background-repeat: no-repeat,repeat;
    background-size: auto,auto;
    border: 2px solid #3d3d3d38;
    border-color: #3d3d3d38 #3d3d3d4a #3d3d3d38 #3d3d3d21;
    border-radius: 2px;
    height: 102%
}

.content-item {
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
    position: relative
}

.btn {
    color: #051328;
    cursor: pointer;
    background-color: #e7e7e7;
    border: 1px #000;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 3rem;
    text-decoration: none;
    display: flex;
    position: relative
}

.btn.btn-ten {
    background-color: #00f;
    overflow: hidden
}

.text-span-6 {
    justify-content: space-between;
    display: flex
}

.arrow-wrapper-b4 {
    background-color: #333;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    display: flex;
    position: relative;
    overflow: hidden
}

.text-b4 {
    padding-left: 46px;
    padding-right: 46px;
    font-weight: 500
}

.top-border-b4 {
    background-color: #f65a68;
    width: 100%;
    height: 3px;
    position: absolute;
    inset: 0% auto auto 0%
}

.text-wrapper-b4 {
    background-color: #f65a68;
    justify-content: center;
    align-items: center;
    width: 170px;
    display: flex
}

.button-wrapper-b4 {
    display: flex
}

.button-wrapper-b4.show-message {
    display: block
}

.bottom-border-b4 {
    background-color: #f65a68;
    width: 100%;
    height: 3px;
    position: absolute;
    inset: auto 0% 0% auto
}

.button-6 {
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    width: 340px;
    height: 200px;
    margin: 20px;
    display: flex;
    box-shadow: 1px 1px 8px -1px #dadada
}

.button-6.b4 {
    justify-content: flex-start;
    padding-left: 60px
}

.left-border-b4 {
    background-color: #f65a68;
    width: 3px;
    height: 100%;
    position: absolute;
    inset: 0% auto auto 0%
}

.button-4 {
    color: #fff;
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    box-shadow: 1px 1px 3px #bdbdbd
}

.corner-bottom-left-b13 {
    width: 18px;
    position: absolute;
    inset: auto auto 0% 0%
}

.right-border-b13 {
    background-color: #000;
    width: 4px;
    height: 0;
    position: absolute;
    inset: auto 0% 0% auto
}

.bottom-border-b13 {
    background-color: #000;
    width: 0;
    height: 4px;
    position: absolute;
    inset: auto auto 0% 0%
}

.left-border-b13 {
    background-color: #000;
    width: 4px;
    height: 0;
    position: absolute;
    inset: 0% auto auto 0%
}

.button-13 {
    color: #000;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 60px;
    font-size: 20px;
    text-decoration: none;
    display: flex;
    position: relative
}

.top-border-b13 {
    background-color: #000;
    width: 0;
    height: 4px;
    position: absolute;
    inset: 0% 0% auto auto
}

.corner-top-right-b13 {
    width: 18px;
    position: absolute;
    inset: 0% 0% auto auto
}

.corner-top-left-b13 {
    width: 18px;
    position: absolute;
    inset: 0% auto auto 0%
}

.corner-bottom-right-b13 {
    width: 18px;
    position: absolute;
    inset: auto 0% 0% auto
}

.text-button-b13 {
    text-transform: uppercase;
    font-weight: 600
}

.button-copy {
    border: 1px solid var(--shadow);
    color: var(--shadow);
    text-align: center;
    white-space: nowrap;
    background-color: #f0ff45;
    border-radius: 8rem;
    padding: .65rem 1.5rem;
    font-family: Dmmono,sans-serif;
    font-weight: 400;
    transition: all .275s,all .2s;
    position: static
}

.button-copy:hover {
    background-color: var(--shadow);
    color: var(--insight)
}

.button-copy.is-text {
    color: #000;
    background-color: #0000;
    border: 2px solid #0000
}

.button-copy.is-secondary {
    color: #000;
    white-space: nowrap;
    word-break: normal;
    background-color: #0000;
    border: 1px solid #222;
    font-family: Dmmono,sans-serif
}

.button-copy.is-secondary:hover {
    background-color: #9fa8a745
}

.button-copy.is-secondary.background-is-shadow {
    border-color: var(--nimbus);
    color: var(--nimbus)
}

.button-copy.is-secondary.background-is-shadow:hover {
    background-color: var(--shadow-lite)
}

.button-copy.is-secondary.is-white {
    background-color: var(--neutral-0)
}

.button-copy.is-secondary.is-white:hover {
    background-color: #fffc
}

.button-copy.is-secondary.is-white.button-block {
    margin-bottom: 1rem;
    margin-right: 1rem
}

.button-copy.is-secondary.is-white.button-cal-google {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681e9786eb7f192689e866d3_googlecalendar-black.svg);
    background-size: 24px
}

.button-copy.is-secondary.is-white.button-cal-outlook {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681e978538863926dae1058d_outlook-black.svg);
    background-position: 18px;
    background-size: 28px
}

.button-copy.is-secondary.is-yellow {
    background-color: var(--insight)
}

.button-copy.is-large {
    padding: 1rem 2rem
}

.button-copy.is-large.background-is-shadow:hover {
    background-color: var(--shadow-lite)
}

.button-copy.is-icon {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex
}

.button-copy.is-small {
    padding: .5rem 1.25rem
}

.button-copy.is-small.background-is-shadow:hover {
    background-color: var(--shadow-lite)
}

.button-copy.background-color-black {
    color: var(--neutral-0);
    background-color: #000
}

.button-copy.bacground-is-shadow:hover {
    background-color: var(--shadow-lite)
}

.button-copy.da-live {
    display: none
}

.button-copy.is-dark {
    background-color: var(--shadow);
    color: var(--nimbus)
}

.button-copy.is-green {
    background-color: var(--grass)
}

.button-copy.is-green:hover {
    background-color: var(--shadow)
}

.is-small {
    padding: .3rem .8rem
}

.showcase-message {
    color: var(--neutral-0);
    text-align: center;
    text-wrap: balance;
    width: 60%;
    margin-top: 2.5rem;
    font-size: 1.5rem;
    line-height: 2rem
}

.showcase-style-link {
    color: var(--teal-brand);
    text-decoration: underline
}

.inline-link-light {
    border-bottom: 1px solid var(--neutral-0);
    color: var(--neutral-0);
    text-decoration: none
}

.inline-link-light:hover {
    color: var(--insight)
}

.hidden-search {
    color: var(--shadow-lite);
    text-transform: uppercase;
    margin-bottom: .5rem;
    font-family: Dmmono,sans-serif;
    font-size: .875rem
}

.hidden-search.event-subtitle {
    margin-top: -1.5rem
}

.hidden-search.text-color-light {
    color: var(--neutral-0)
}

.hidden-search-term {
    display: none
}

.momentum-btm {
    max-width: 65%;
    display: flex;
    position: relative;
    left: 2rem;
    right: 1rem
}

.momentum-left-top-v2 {
    max-width: 35vw
}

.margin-top-small-copy {
    margin-top: 2.5rem
}

.margin-top-small-copy.svg {
    min-width: 800px
}

.margin-top-small-copy.width-100 {
    width: 100%
}

.sponsor-session {
    margin-top: 1.5rem;
    margin-bottom: 1rem
}

.video-embed-height--to-delete {
    justify-content: space-around;
    min-height: 600px;
    display: flex
}

.momentum-leader-badges-v2 {
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    justify-content: center;
    align-items: center;
    display: flex
}

.momentum-leader-v2 {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border-top: 1px solid #000;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    margin-left: 0;
    margin-right: auto;
    padding-top: 2.5rem;
    display: flex
}

.text-link-allcaps-3 {
    color: #292929;
    text-transform: uppercase;
    text-decoration: none;
    transition: all .2s;
    box-shadow: inset 0 -2px #292929
}

.text-link-allcaps-3:hover {
    box-shadow: inset 0 -11px #f0ff45
}

.text-link-allcaps-3.no-margin-bottom.text-size-small {
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 500
}

.v-block {
    border: 1px none var(--stratus);
    background-color: var(--neutral-0)
}

.v-logo {
    justify-content: center;
    align-items: center;
    max-width: 140px;
    height: 200px;
    margin: auto;
    display: flex
}

.validation {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: var(--stratus);
    padding: 0
}

.v-quote {
    margin: 2rem 1rem 1rem 2rem
}

.hanging-quotes {
    text-indent: -.55em
}

.v-gartner {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 2rem
}

.v-g2 {
    margin: auto
}

.v-3-1-1 {
    grid-column-gap: .9px;
    grid-row-gap: .9px;
    background-color: var(--stratus);
    grid-template-rows: auto;
    grid-template-columns: 3fr 1fr 1fr
}

.v-grid {
    border: 1px none var(--stratus);
    background-color: var(--neutral-0);
    justify-content: space-between;
    align-items: center;
    min-height: 200px;
    transition: background-color .15s;
    display: flex;
    position: relative;
    overflow: hidden
}

.v-grid.v-icon {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 100px;
    padding: 1rem
}

.v-grid.v-icon.v-link {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/687545370895559fd8c1590c_ac4b6f3fda144f4cda2241b5c13e076a_icon-arrow-green-sm.svg);
    background-position: 100% 15%;
    background-repeat: no-repeat;
    background-size: auto;
    transition: all .2s
}

.v-grid.v-icon.v-link:hover {
    z-index: 10;
    background-color: var(--neutral-4);
    transform: scale(1.08)
}

.v-grid.teepublic-quote {
    border: 10px solid var(--sky);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6838a2e6986722287e39de41_teepublic.webp);
    background-position: 30% 20%;
    background-repeat: no-repeat;
    background-size: auto 270px
}

.v-grid.clay-quote {
    border: 10px solid var(--grass);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6838a398adba036750c8f06a_clay.webp);
    background-position: 30% 20%;
    background-repeat: no-repeat;
    background-size: auto 270px
}

.v-grid.justify-right {
    justify-content: flex-end;
    align-items: center;
    width: 100%
}

.v-grid.border-bottom {
    display: block
}

.v-grid.align-right {
    justify-content: space-between;
    align-items: center
}

.v-1-1-3 {
    grid-column-gap: .9px;
    grid-row-gap: .9px;
    background-color: var(--stratus);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 3fr
}

.v-2-3 {
    grid-column-gap: .9px;
    grid-row-gap: .9px;
    background-color: var(--shadow-lite);
    grid-template-rows: auto;
    grid-template-columns: 2fr 3fr
}

.v-1-1-1-1-1 {
    grid-column-gap: .9px;
    grid-row-gap: .9px;
    background-color: var(--stratus);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr
}

.ai-section {
    width: 100%;
    height: 70vh;
    min-height: 460px;
    position: relative;
    overflow: hidden
}

.ai-section.temp {
    background-color: var(--neutral-9);
    height: 80vh
}

.ai-stack {
    z-index: 1;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden
}

.overlay-content {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0
}

.overlay-header {
    padding-top: 5rem;
    font-size: 6rem;
    font-weight: 300
}

.overlay-subhead {
    color: var(--nimbus);
    text-align: center;
    text-transform: uppercase;
    width: 60%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.3rem
}

.heading-36 {
    line-height: 140%
}

.schedule-grid {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: var(--stratus);
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr
}

.schedule-cell {
    grid-column-gap: .2rem;
    grid-row-gap: .2rem;
    background-color: var(--nimbus);
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 1rem;
    display: flex
}

.schedule-cell.white-cell {
    background-color: var(--neutral-0)
}

.schedule-column {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    display: flex
}

.schedule-minimal {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: var(--stratus);
    justify-content: center;
    align-items: flex-start;
    display: flex
}

.schedule-2col {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    flex-flow: row;
    width: 100%;
    display: flex
}

.text-color-lightgray {
    color: #f0f0f0
}

.quick-stack-menu {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: var(--shadow);
    padding: 1px
}

.menu-stack {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    align-self: flex-start;
    width: 100%;
    margin-bottom: 0;
    padding: 0
}

.menu-stack.top {
    border-top-style: none
}

.menu-cell {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    flex-flow: row;
    justify-content: flex-start;
    align-items: baseline;
    padding-top: 1.25rem;
    transition: background-color .2s
}

.white-arrow {
    width: 2.625rem;
    position: relative;
    top: .25rem
}

.grid-gap-0rem {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    background-color: var(--shadow-lite)
}

.placeholder {
    -webkit-text-stroke-color: transparent;
    transform: none
}

.placeholder.smaller {
    max-height: 280px
}

.stack-links {
    border-top: 1px solid var(--neutral-11);
    color: var(--nimbus);
    cursor: pointer;
    width: 100%;
    padding-left: 2rem;
    transition: background-color .2s,padding .2s cubic-bezier(.661,.001,.187,.995)
}

.stack-links:hover {
    background-color: var(--shadow-lite);
    color: var(--nimbus)
}

.stack-links.active {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    padding-left: 4rem
}

.stack-links.top {
    border-top-style: none;
    border-left: 1px #000
}

.tabbed-menu {
    display: flex
}

.tabs-menu {
    flex-flow: column;
    width: 50%;
    display: flex
}

.tabs-content-9 {
    width: 50%
}

.stack-link {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    border-top: 1px solid var(--stratus);
    background-color: var(--shadow);
    justify-content: space-between;
    align-self: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 0;
    padding: 0;
    display: flex
}

.stack-link:hover {
    background-color: var(--shadow-lite)
}

.stack-link.top {
    border-top-style: none
}

.stack-img {
    z-index: 1;
    margin-left: 2rem;
    margin-right: 1rem;
    display: none;
    position: relative
}

.stack-img._2,.stack-img._3 {
    display: none
}

.stack-img.active {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    opacity: 1;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 85%;
    display: flex
}

.stack-relative {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
    position: relative
}

.nav-link-bg {
    background-color: var(--neutral-0);
    background-image: none;
    position: absolute;
    inset: 0%
}

.nav-link-bg.v2 {
    background-color: #0000;
    background-image: linear-gradient(180deg,transparent 95%,var(--insight)98%,var(--sky)96%,var(--grass))
}

.heading {
    color: #e6ff02
}

.slick-nav-menu {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    box-shadow: none;
    background-color: #0000;
    flex-flow: column;
    min-width: 200px;
    max-width: 325px;
    padding: 0 2rem 0 0;
    display: flex
}

.slick-section {
    color: var(--shadow-lite);
    justify-content: flex-end;
    width: 75vw;
    display: flex;
    position: relative
}

.slick-navbar {
    background-color: #ddd0;
    align-self: flex-start;
    position: sticky;
    top: 2rem;
    left: 0%;
    right: 0%
}

.fullpage-layout {
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.fullpage-layout._250 {
    height: 250dvh
}

.fullpage-layout._200 {
    color: #e6ff02;
    height: 200dvh
}

.fullpage-layout._300 {
    height: 300dvh
}

.fullpage-layout._150 {
    height: 150dvh
}

.slick-padding-global {
    width: 100%;
    padding-left: 0;
    padding-right: 1rem
}

.nav-layout {
    justify-content: flex-start;
    align-items: center;
    display: flex;
    position: absolute
}

.slick-padding {
    padding-left: 0;
    padding-right: 0
}

.slick-nav {
    flex-flow: column;
    align-items: flex-end;
    max-width: 1600px;
    display: flex;
    position: relative;
    inset: auto 0% 0%
}

.slick-container {
    width: 100%;
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto
}

.nav-link-text {
    color: var(--neutral-7);
    position: relative
}

.nav-link-text:hover {
    color: var(--insight)
}

.slick-link {
    color: #292929;
    padding: .25rem 1rem;
    text-decoration: none;
    position: relative;
    overflow: clip
}

.slick-link.v2 {
    border-bottom: 1px solid #000;
    padding: 1.125rem 0
}

.slick-container-medium {
    width: 100%;
    margin-left: auto;
    margin-right: auto
}

.div-block-230 {
    background-color: var(--primary-blue)
}

.header-stack {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute
}

.v-3-2 {
    grid-column-gap: .9px;
    grid-row-gap: .9px;
    background-color: var(--shadow-lite);
    grid-template-rows: auto;
    grid-template-columns: 3fr 2fr
}

.max-width-1248 {
    max-width: 1248px
}

.v-10 {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: var(--stratus);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr
}

.h1-hero-25 {
    text-align: center;
    text-wrap: balance;
    margin-bottom: 2rem;
    font-family: Dmsans,sans-serif;
    font-size: 7rem;
    font-weight: 600;
    line-height: 110%
}

.h1-hero-25.home {
    letter-spacing: -.15rem;
    font-size: 3rem
}

.button-wrapper-center {
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem
}

.home-callouts {
    justify-content: space-between;
    align-items: stretch;
    display: flex
}

.home-callouts.margin-top-small {
    flex-flow: column;
    margin-top: 5rem
}

.home-header-callout {
    background-color: var(--shadow-lite);
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 32.5%;
    min-height: 260px;
    padding: 2rem;
    display: flex
}

.home-header-callout:hover {
    background-color: var(--shadow)
}

.text-link-light {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    color: var(--nimbus);
    flex-flow: wrap;
    display: flex
}

.text-link-light:hover {
    color: var(--insight)
}

.home-25-video {
    z-index: 1;
    margin-top: 4rem;
    position: relative
}

.home-25-video.smaller {
    max-width: 450px
}

.home-25-video.shadow-large {
    border-radius: 8px;
    overflow: hidden
}

.home-header-callout-logo {
    height: 20px;
    margin-bottom: 1rem
}

.home-header-callout-logo.snowflake {
    height: 30px;
    margin-bottom: 0
}

.home-header-callout-logo.peer-insights {
    height: 30px;
    margin-bottom: .5rem
}

.quick-stack-51 {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 0
}

.persona-section {
    background-color: var(--shadow);
    flex-flow: column;
    width: 100%;
    height: 100%;
    min-height: 320px;
    display: flex;
    position: relative;
    overflow: hidden
}

.persona-section:hover {
    background-color: var(--shadow-lite)
}

.persona-stack {
    z-index: 1;
    min-height: 320px;
    overflow: hidden
}

.h2-home {
    text-align: center;
    letter-spacing: -.05em;
    text-wrap: balance;
    margin-left: auto;
    margin-right: auto;
    font-family: Dmsans,sans-serif;
    font-size: 7rem;
    line-height: 100%
}

.h2-home.home-surfaces {
    text-align: left;
    max-width: 90%;
    margin-left: 0;
    margin-right: 0;
    font-weight: 300
}

.h2-home._80--width {
    width: 80%
}

.h2-home.data-apps-smaller {
    font-size: 5.5rem
}

.h3-home-overlay {
    color: var(--nimbus);
    text-align: center;
    letter-spacing: -.02em;
    margin-left: auto;
    margin-right: auto;
    font-family: Dmserif;
    font-size: 5rem;
    line-height: 90%
}

.home-feature-grid {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    grid-template-rows: auto auto auto auto auto auto auto auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 960px;
    margin-left: auto;
    margin-right: auto
}

.home-feature-block {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    background-color: var(--nimbus);
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: .75rem;
    display: flex
}

.home-feature-block.block-link {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/685ac51c51466b069ec32541_summit-texture-bl.svg),url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68028448282dace69ed542f1_summit-25-texture-topright.svg);
    background-position: 0 100%,100% 0;
    background-repeat: no-repeat,no-repeat;
    background-size: auto 100px,auto 100px;
    transition: background-color .2s
}

.home-feature-block.block-link:hover {
    background-color: var(--insight)
}

.home-feature-block.hald {
    width: 50%
}

.home-feature-header {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: stretch;
    display: flex
}

.home-feature-header.hide-mobile-portrait {
    width: 100%
}

.height-6 {
    height: 6px
}

.height-12 {
    height: 12px
}

.height-24 {
    height: 24px
}

.home-feature-text {
    text-align: center;
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: 12px;
    line-height: 1.2rem
}

.home-feature-icon {
    height: 18px
}

.background-color-green {
    background-color: var(--grass)
}

.striped-divider-light {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9e6_light-lines.svg);
    background-position: 50% 0;
    background-repeat: repeat-x;
    background-size: 718px;
    background-attachment: scroll;
    width: 100%;
    height: 100px
}

.striped-divider-light.flipped {
    border-top: 1px solid var(--shadow);
    background-color: var(--shadow-lite);
    transform-style: preserve-3d;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66be51b174d639c73b1a568f_dark-lines.svg);
    background-repeat: repeat-x;
    background-size: auto 150px;
    background-attachment: scroll;
    transform: rotateX(180deg)rotateY(0)rotate(0)
}

.striped-divider-light.flipped.lighter {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd8aa_Frame%207625.webp);
    transform: rotate(0)
}

.striped-divider-light-flipped {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68395a993d38f763ce4ada26_light-lines-flipped.svg);
    background-position: 50% 0;
    background-repeat: repeat-x;
    background-size: 718px;
    background-attachment: scroll;
    width: 100%;
    height: 100px
}

.striped-divider-light-flipped.flipped {
    border-top: 1px solid var(--shadow);
    background-color: var(--shadow-lite);
    transform-style: preserve-3d;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66be51b174d639c73b1a568f_dark-lines.svg);
    background-repeat: repeat-x;
    background-size: auto 150px;
    background-attachment: scroll;
    transform: rotateX(180deg)rotateY(0)rotate(0)
}

.striped-divider-light-flipped.flipped.lighter {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd8aa_Frame%207625.webp);
    transform: rotate(0)
}

.h2-home-overlay {
    color: var(--nimbus);
    text-align: center;
    letter-spacing: -.05em;
    width: 50%;
    font-family: Dmsans,sans-serif;
    font-size: 5rem;
    line-height: 90%
}

.home-subheader {
    text-align: center;
    text-transform: uppercase;
    font-family: Dmmono,sans-serif;
    font-size: 1.3rem
}

.home-subheader.text-size-large.margin-bottom-large {
    font-size: 1.3rem
}

.h3-home-sticky {
    letter-spacing: -.055em;
    margin-left: auto;
    margin-right: auto;
    font-family: Dmsans,sans-serif;
    font-size: 3rem;
    line-height: 110%
}

.v3 {
    background-image: linear-gradient(180deg,transparent 95%,var(--shadow-lite)96%,var(--shadow));
    padding: 1.125rem 0
}

.home-stats-wrapper {
    z-index: 999;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    text-align: center;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    display: flex
}

.button-wrapper-over-video {
    z-index: 900;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding-bottom: 2rem;
    display: flex;
    position: absolute
}

.button-wrapper-over-video.padding-bottom-4rem {
    padding-bottom: 4rem
}

.button-wrapper-over-video.padding-bottom-6rem {
    padding-bottom: 6rem
}

.button-shadow {
    box-shadow: 0 6px 12px 3px #0003
}

.home-img-vid-wrapper {
    background-color: var(--shadow);
    border-radius: 2px;
    max-width: 975px;
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden
}

.home-img-vid-wrapper.home {
    margin-top: 0
}

.home-img-vid-wrapper.home.smaller {
    max-width: 450px
}

.home-img-vid-wrapper.overview {
    margin-top: 2rem
}

.pop-up-modal-video {
    z-index: 2;
    background-color: var(--shadow);
    width: 100%;
    max-width: 130vh;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 2.25rem;
    transition: all .2s;
    position: relative;
    top: 50%;
    transform: translateY(-50%)
}

.quick-stack-52 {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    padding: 0
}

.home-feature-grid-new {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    grid-template-rows: auto auto auto auto auto auto auto;
    grid-template-columns: 1fr 2fr 1fr;
    margin-left: auto;
    margin-right: auto
}

.home-feature-block-double {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.page-tabs-left {
    flex-flow: row;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.page-tabs-sticky-left {
    z-index: 99;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 20px
}

.page-tabs-sticky-left.margin-bottom-medium.text-size-tiny {
    z-index: 300
}

.page-tabs-sticky-left.text-size-tiny {
    position: sticky
}

.page-tabs-nav-wrapper-left {
    background-color: #0000
}

.page-tabs-nav-left {
    float: none;
    vertical-align: baseline;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 4rem;
    padding-right: 1rem;
    display: flex
}

.page-tabs-nav-left.white {
    border: 2px solid var(--nimbus);
    background-color: var(--neutral-0);
    outline-color: var(--nimbus);
    outline-offset: 0px;
    outline-width: 0;
    outline-style: solid;
    box-shadow: 0 2px 20px -9px #0000
}

.page-tabs-nav-link-left {
    border-bottom: 1px solid var(--neutral-8);
    color: var(--shadow-lite);
    text-transform: uppercase;
    width: 180px;
    padding: .5rem 1.75rem .5rem 0;
    font-family: Dmmono,sans-serif;
    font-size: 14px
}

.page-tabs-nav-link-left:hover {
    border-bottom-color: var(--shadow);
    color: var(--shadow)
}

.page-tabs-nav-link-left.w--current {
    border-bottom-width: 1px;
    border-bottom-color: var(--black);
    color: var(--black);
    padding-left: 0;
    font-size: 14px
}

.page-tabs-nav-link-left.shadow {
    color: var(--shadow);
    letter-spacing: .5px;
    font-weight: 600;
    transition: all .2s
}

.page-tabs-nav-link-left.shadow.w--current {
    border-color: var(--shadow);
    background-color: var(--insight);
    letter-spacing: .5px;
    font-weight: 600
}

.page-tabs-border-section-left {
    background-color: var(--neutral-0);
    color: var(--shadow-lite);
    width: 100%;
    max-width: 1000px;
    margin-bottom: 4rem;
    padding: 3rem 3rem 4rem;
    position: relative;
    overflow: hidden
}

.page-tabs-border-section-left.page-tabs-callout {
    background-color: var(--insight)
}

.flex-link {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.text-mono-plain {
    margin-bottom: 0;
    font-family: Dmmono,sans-serif;
    font-size: 1rem
}

.width-50 {
    width: 50%
}

.stars-reviews {
    z-index: 1;
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    position: relative
}

.persona-overlay {
    z-index: 2;
    color: var(--nimbus);
    justify-content: space-between;
    align-items: flex-end;
    width: 100%
}

.persona-label {
    background-color: var(--shadow);
    color: var(--nimbus);
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.2rem;
    font-weight: 400
}

.persona-label:hover {
    color: var(--neutral-0)
}

.all-personas {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.link-100 {
    background-color: var(--shadow-lite);
    color: var(--neutral-8);
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    transition: background-color .2s;
    display: flex
}

.link-100:hover {
    border-color: var(--shadow-lite);
    background-color: var(--shadow);
    color: var(--neutral-0)
}

.data-apps-col {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 24%;
    padding: 0;
    font-size: .9rem;
    position: relative;
    overflow: clip
}

.data-apps-col.no-margins {
    border-bottom: 1px #000;
    margin-top: 0;
    margin-bottom: 0
}

.data-apps-col.apps {
    background-color: var(--neutral-0);
    padding: 1rem 1rem 2rem
}

.data-apps-flex {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin: 2rem .5rem;
    display: flex
}

.app-list-item {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 0;
    padding: .5rem;
    display: flex
}

.data-apps-preview {
    width: 50%;
    margin-left: auto;
    margin-right: auto
}

.div-block-231 {
    text-align: center
}

.home-headline {
    color: var(--nimbus);
    letter-spacing: -.03em;
    font-size: 2.3rem;
    line-height: 120%
}

.home-logo-grid {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 6rem auto 4rem
}

.home-logo-block-quad {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    display: flex
}

.home-logo-double {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    flex-flow: column;
    width: 100%;
    display: flex
}

.home-customer-block {
    border-bottom: 10px solid var(--neutral-0);
    background-color: var(--shadow);
    flex-flow: column;
    display: flex;
    position: relative
}

.home-customer-block:hover {
    border-bottom: 10px solid var(--insight);
    background-color: var(--shadow-lite)
}

.customer-stack {
    z-index: 1;
    width: 100%;
    overflow: hidden
}

.persona-card {
    width: 80%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative
}

.persona-card-content {
    border: 2px solid var(--shadow);
    position: relative
}

.persona-card-content.text-right {
    flex-flow: row-reverse;
    justify-content: space-between;
    align-items: stretch;
    min-height: 20rem;
    display: flex
}

.persona-card-inner {
    background-color: var(--neutral-0);
    justify-content: space-between;
    align-items: stretch;
    min-height: 20rem;
    display: flex;
    position: relative
}

.persona-card-inner.text-right {
    flex-flow: row-reverse;
    min-height: 20rem
}

.persona-holder {
    width: 30%;
    min-height: 320px
}

.persona-divider {
    border-style: none dashed none none;
    border-width: 1px;
    border-color: var(--shadow)var(--shadow-lite);
    width: 1px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    font-family: Dmsans,sans-serif
}

.persona-divider.margin-top-medium {
    border-color: var(--stratus)var(--shadow-lite)var(--stratus)var(--stratus);
    border-left-width: 1px;
    margin-top: 0
}

.ai-overlay {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1248px;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: relative
}

.ai-overlay.background-grid {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd8a9_Grid.webp);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}

.ai-overlay.product-hero {
    z-index: 2;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    transform-origin: 50% 100%;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.ai-overlay.align-center {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.ai-overlay.align-center.margin-top-huge {
    margin-top: 12rem
}

.ai-overlay.grid-bg.margin-top-medium {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb12_grid-2.webp);
    background-position: 50% 36%
}

.ai-overlay.flex-container {
    display: flex
}

.ai-overlay.vertical-flex {
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.ai-overlay.background-color-gray-dark.margin-bottom-medium-lrg {
    margin-bottom: 5rem
}

.ai-overlay.margin-bottom-medium-lrg {
    color: var(--stratus)
}

.ai-overlay.no-padding-mobile.padding-medium.hide-2,.ai-overlay.no-padding-mobile.padding-large.hide-2 {
    display: none
}

.ai-overlay.centered {
    text-align: center;
    max-width: 820px
}

.ai-overlay.persona-overlay {
    margin-top: 15%
}

.home-ai-cta {
    border-bottom: 1px solid var(--stratus);
    background-color: var(--nimbus);
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: block;
    position: relative
}

.heading-37 {
    width: 95%
}

.summit-2-columns {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: .7fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.summit-flex {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    display: flex
}

.summit-flex.background-color-nimbus {
    flex-flow: column;
    justify-content: flex-start;
    display: flex
}

.summit-flex.background-color-sky {
    background-color: var(--sky)
}

.summit-flex.background-color-green {
    background-color: var(--grass)
}

.summit-flex.background-color-pink {
    background-color: var(--meadow)
}

.summit-flex.background-color-white {
    background-color: #fff;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0
}

.summit-flex.align-right {
    justify-content: flex-start;
    align-items: flex-end
}

.summit-flex-left {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    display: flex
}

.summit-flex-left.background-color-nimbus {
    flex-flow: column;
    justify-content: flex-start;
    display: flex
}

.summit-flex-left.background-color-sky {
    background-color: var(--sky)
}

.summit-flex-left.background-color-green {
    background-color: var(--grass)
}

.summit-flex-left.background-color-pink {
    background-color: var(--meadow)
}

.summit-flex-left.background-color-white {
    background-color: #fff;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0
}

.summit-flex-left.align-right {
    justify-content: flex-start;
    align-items: flex-end
}

.dbx-poy-frame {
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem
}

.dbx-summit-2-columns {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1.25fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.image-188 {
    width: 100%
}

.stack-description {
    color: var(--nimbus);
    margin-bottom: 0;
    line-height: 120%
}

.mq-feature-card {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border: 1px solid var(--shadow-lite);
    background-color: var(--shadow-lite);
    border-radius: 0;
    flex-flow: column;
    align-items: stretch;
    padding: 2rem;
    transition: all .3s;
    display: flex
}

.mq-feature-card:hover {
    background-color: var(--shadow)
}

.mq-feature-card.text-color-light {
    border-color: var(--shadow-lite);
    height: 100%;
    padding: 0
}

.mq-feature-card.text-color-light:hover {
    outline-color: var(--stratus);
    outline-offset: 0px;
    color: var(--stratus);
    border-style: solid;
    outline-width: 0;
    outline-style: solid
}

.mq-feature-card.text-color-light.no-hover:hover {
    background-color: var(--shadow-lite);
    outline-color: var(--nimbus);
    color: var(--nimbus)
}

.callout-list {
    padding-left: 1rem
}

.callout-header {
    color: var(--sky);
    letter-spacing: -.055em;
    padding-right: 2rem;
    font-size: 2.5rem;
    line-height: 120%
}

.gartner-logos {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.gartner-customer-logo {
    max-width: 160px;
    max-height: 80px
}

.v-narrow {
    margin-right: 6rem
}

.gartner-mq-hero {
    max-height: 400px
}

.hero-grid-gartner {
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    margin-left: 2rem;
    padding: 0
}

.gartner-mq-event {
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    padding: 0;
    display: grid
}

.gartner-mq-event.margin-small.small-gap {
    grid-column-gap: 1.7rem
}

.gartner-mq-event.justify-content {
    place-items: stretch stretch
}

.is-blue {
    background-color: var(--sky)
}

.is-blue:hover {
    background-color: var(--neutral-0);
    color: var(--shadow)
}

.mq-features-list {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    flex-flow: row;
    grid-template-rows: auto auto auto auto auto auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    max-width: 840px;
    display: grid
}

.mq-feature-header {
    color: var(--sky);
    letter-spacing: -.055em;
    padding-bottom: 1rem;
    padding-right: 2rem;
    font-size: 2rem;
    line-height: 120%
}

.mq-feature-block {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    padding: 2rem;
    display: flex
}

.mq-feature-block.background-color-nimbus {
    flex-flow: column;
    justify-content: flex-start;
    display: flex
}

.mq-feature-block.background-color-sky {
    background-color: var(--sky)
}

.mq-feature-block.background-color-green {
    background-color: var(--grass)
}

.mq-feature-block.background-color-pink {
    background-color: var(--meadow)
}

.mq-feature-block.background-color-white {
    background-color: #fff;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0
}

.mq-feature-block.align-right {
    justify-content: flex-start;
    align-items: flex-end
}

.mq-header-card {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    border: 1px solid var(--shadow-lite);
    background-color: var(--shadow-lite);
    border-radius: 0;
    flex-flow: column;
    align-items: stretch;
    transition: all .3s;
    display: flex
}

.mq-header-card.text-color-light {
    border-color: var(--shadow-lite);
    height: 100%;
    padding: 0
}

.mq-header-card.text-color-light:hover {
    outline-color: var(--stratus);
    outline-offset: 0px;
    color: var(--stratus);
    border-style: solid;
    outline-width: 0;
    outline-style: solid
}

.mq-header-card.text-color-light.no-hover:hover {
    background-color: var(--shadow-lite);
    outline-color: var(--nimbus);
    color: var(--nimbus)
}

.gartner-mq-event-speakers {
    max-height: 300px
}

.sticky-wrapper {
    height: 100%;
    margin-top: 4rem;
    position: relative
}

.cell-68 {
    justify-content: space-between;
    align-items: flex-start
}

.sticky-wrapper-2 {
    height: 100%;
    margin-top: 3rem
}

.shadow-large {
    box-shadow: 0 6px 12px 2px #0003
}

.div-block-232 {
    max-width: 486px
}

.max-680 {
    max-width: 680px
}

.max-440 {
    max-width: 440px
}

.align-right {
    margin-right: 0
}

.v-wide {
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    display: flex
}

.v-edge {
    grid-column-gap: .9px;
    grid-row-gap: .9px;
    flex-flow: column;
    flex: 0 auto;
    grid-template-rows: auto;
    grid-template-columns: 2fr;
    width: 0%;
    display: flex
}

.v-grid-edge {
    border: 1px none var(--stratus);
    background-color: var(--neutral-0);
    justify-content: space-between;
    align-items: center;
    min-height: 200px;
    transition: background-color .15s;
    display: block;
    position: relative
}

.v-grid-edge:hover {
    background-color: var(--nimbus)
}

.v-grid-edge.v-icon {
    cursor: pointer;
    width: 100%;
    height: 100%;
    min-height: 100px
}

.v-grid-edge.teepublic-quote {
    border: 10px solid var(--sky);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6838a2e6986722287e39de41_teepublic.webp);
    background-position: 30% 20%;
    background-repeat: no-repeat;
    background-size: auto 270px
}

.v-grid-edge.clay-quote {
    border: 10px solid var(--grass);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6838a398adba036750c8f06a_clay.webp);
    background-position: 30% 20%;
    background-repeat: no-repeat;
    background-size: auto 270px
}

.v-grid-edge.justify-right {
    justify-content: flex-end;
    align-items: center;
    width: 100%
}

.v-grid-edge.border-bottom {
    width: 100%;
    display: block
}

.div-block-234 {
    display: flex
}

.quote-row {
    background-color: var(--neutral-11)
}

.section-quotes {
    background-color: var(--neutral-0);
    padding-top: 0;
    padding-bottom: 0;
    position: relative
}

.section-quotes.no-padding-bottom.background-color-shadow {
    margin-bottom: 0;
    padding-bottom: 10px
}

.section-quotes.no-padding-bottom._100m-arr-backer {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67f47f7145f1987b2f61c6bd_41f96f80d2140c5b28874822e43ec539_100m-arr-backer.svg);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 100%
}

.section-quotes.background-color-gray-dark {
    display: block
}

.section-quotes.background-color-gray-dark.hide {
    display: none
}

.section-quotes.background-color-gray-dark.bg-scroll {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6827a20f53790f3b5d655eae_pixelated-12.avif);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto;
    height: 100vh
}

.section-quotes.hero-templates {
    background-color: var(--neutral-0)
}

.section-quotes.no-padding-top {
    padding-top: 0
}

.section-quotes.no-padding {
    padding-top: 0;
    padding-bottom: 0
}

.section-quotes.no-padding.border-top.border-bottom.background-color-gray-medium.border-color-light {
    border-bottom-color: var(--stratus)
}

.section-quotes.no-padding.border-top.background-color-light.border-color-light {
    border-top-color: var(--stratus)
}

.section-quotes.no-padding.border-top.background-color-light.border-color-light.border-bottom {
    border-bottom-color: var(--stratus)
}

.section-quotes.no-padding.border-top.background-color-light.hide-2 {
    display: block
}

.section-quotes.no-padding.border-top.backgound-color-white.width-100 {
    width: 100%
}

.section-quotes.no-padding.border-top.background-color-gray-medium.border-color-light,.section-quotes.border-top.background-color-gray-medium.border-color-light,.section-quotes.border-top.background-color-gray-medium-copy.border-color-light {
    border-top-color: var(--stratus)
}

.section-quotes.background-color-yellow.border-bottom.data-apps-callout {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67cf2f05786d4888cee00d65_data-apps-texture-webinar.svg);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: auto 300px
}

.section-quotes.background-color-yellow.padding-top-bottom-medium.da-live {
    display: block
}

.section-quotes.background-color-gray-medium {
    color: var(--nimbus)
}

.section-quotes.background-color-gray-medium.da-live {
    display: block
}

.section-quotes.background-color-gray-medium.data-apps-live {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67cf497227392c6dc76eafad_c8822636df0868a66b3025c52de25b34_data-apps-texture-main-event.svg);
    background-position: 50% 0;
    background-size: auto
}

.section-quotes.background-color-gray-medium.data-apps-live.da-live {
    background-position: 50% 30px;
    background-repeat: repeat-x;
    display: block
}

.section-quotes.background-color-shadow-light.overflow-hidden.no-padding-bottom {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9bd_ai_bg_pattern.svg);
    background-position: 50% 111%;
    background-repeat: repeat-x;
    background-size: auto 280px
}

.section-quotes.background-color-shadow-light.overflow-hidden.no-padding-bottom.self-service {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdab2_lines-thin.svg);
    background-position: 50% 100%;
    height: 400px
}

.section-quotes.background-color-shadow-light.overflow-hidden.python-temp {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdab2_lines-thin.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto;
    padding-bottom: 0
}

.section-quotes.color-nimbus {
    background-color: var(--nimbus)
}

.section-quotes.small-padding {
    padding-top: 0;
    padding-bottom: 0
}

.section-quotes.background-color-gray-light-2 {
    background-color: var(--neutral-3);
    overflow: hidden
}

.section-quotes.background-color-dark {
    background-color: var(--shadow);
    color: var(--nimbus)
}

.section-quotes.background-color-dark.worldtour-snowflake {
    padding-top: 0
}

.section-quotes.background-color-gray-light {
    overflow: hidden
}

.section-quotes.background-color-gray-light-copy-2 {
    background-color: #fcfcfc;
    overflow: hidden
}

.section-quotes.background-color-gray-light-2 {
    overflow: hidden
}

.section-quotes.customer-stories-hero {
    background-color: #858585;
    background-image: linear-gradient(#ffffffd6,#ffffffd6),url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9aa_sigma-footer-pattern1.svg);
    background-position: 0 0,100% 101%;
    background-repeat: repeat,no-repeat;
    background-size: auto,70%;
    justify-content: flex-start;
    align-items: center;
    height: auto;
    min-height: 480px;
    display: flex
}

.section-quotes.background-color-nimbus-2 {
    background-color: #f0f0f0
}

.section-quotes.background-color-nimbus-light {
    background-color: #f3f3f3
}

.section-quotes.section-summit {
    padding-bottom: 7rem
}

.section-quotes.background-color-shadow {
    background-color: var(--shadow)
}

.section-quotes.background-color-shadow.no-padding-bottom {
    padding-bottom: 0
}

.section-quotes.background-color-shadow.no-padding-bottom.da-live {
    display: block
}

.section-quotes.background-color-shadow.no-padding.da-live {
    display: none
}

.section-quotes.background-color-shadow.dark-lines {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cda74_lines-alt.svg);
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: auto
}

.section-quotes.blog {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67001c7c4d13ae59d49e8601_geometry-lines-topleft.svg);
    background-position: 100% -3px;
    background-repeat: no-repeat;
    background-size: auto
}

.section-quotes.background-color-light.no-padding-top.hide-2 {
    display: none
}

.section-quotes.background-color-light.no-margin-top {
    padding-top: 0
}

.section-quotes.background-color-light.yellow-lines {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67200b9131861e7579fb67dd_lines-top-yellow.svg);
    background-position: 50% 0;
    background-repeat: repeat-x;
    background-size: auto
}

.section-quotes.background-color-light.search-block {
    border-bottom: 1px solid var(--stratus);
    display: none
}

.section-quotes.background-color-shadow-light-nopattern {
    color: var(--nimbus)
}

.section-quotes.padding-top-tiny {
    padding-top: 3rem
}

.section-quotes.padding-top-bottom-tiny {
    padding-top: 1rem;
    padding-bottom: 1rem
}

.section-quotes.padding-top-bottom-tiny.background-color-nimbus.hide-2 {
    display: none
}

.section-quotes.background-color-sky {
    background-color: var(--sky)
}

.section-quotes.background-color-sky.worldtour-db {
    padding-top: 0
}

.section-quotes.background-color-sky.product-launch-header {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66e8b90df35ad88da8b15792_product-launch-corner-fall-24.svg);
    background-position: 100% 103%;
    background-repeat: no-repeat;
    background-size: 500px
}

.section-quotes.background-color-white {
    background-color: var(--neutral-0)
}

.section-quotes.background-color-white.border-top.padding-top-bottom-tiny.width-100 {
    width: 100%
}

.section-quotes.margin-bottom-10rem {
    margin-bottom: 10rem
}

.section-quotes.no-margin-top {
    padding-top: 0
}

.section-quotes.padding-top-small {
    padding-top: 2.5rem
}

.section-quotes.product-launch {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6765af4db5e500fb0ee864da_PL-corner.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: 40%;
    margin-left: 0;
    margin-right: 0
}

.section-quotes.product-launch.spring-showcase {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681a8251cfb80692b1518a7e_32007e5b4b5f4407c98abb7c1d2b4857_black-slant-grid-wide.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto 250px
}

.section-quotes.product-launch-past {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6765b0417663a7dcb1b13ed8_PL-corner-white.svg);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 25%
}

.section-quotes.data-apps-conf {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67ab88d4276515c5804ff258_data-apps-conf-backer.svg);
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-size: auto;
    padding-bottom: 0
}

.section-quotes.background-color-grass {
    background-color: var(--grass)
}

.section-quotes.data-apps-event-promo {
    background-color: var(--shadow);
    color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67a29f9e0fb4058b7c39ec4b_data-apps-conf-backer.svg);
    background-position: 100% 10%;
    background-repeat: no-repeat;
    background-size: auto;
    padding-top: 3rem;
    padding-bottom: 3rem
}

.section-quotes.data-apps-header-light {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67cf2feaa1e2fe6ffa9b246f_e33bbfa0eab6d18731bc7a8c4719178e_data-apps-webinar-backer.svg);
    background-position: 100% 0;
    background-repeat: no-repeat;
    background-size: auto 1200px
}

.section-quotes.snowflake-summit-25 {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67d0cd09b542925bd7bfd947_yellow-grid.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: 800px;
    padding-bottom: 0
}

.section-quotes.data-madness-promo {
    background-color: var(--sun);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67d1cfd2b1eaa64c1a7c92cf_data-madness.avif);
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    padding-top: 2rem;
    padding-bottom: 2rem
}

.section-quotes.data-madness-promo.da-live {
    display: none
}

.section-quotes.data-apps-cta {
    background-color: var(--shadow-lite);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cda74_lines-alt.svg);
    background-position: 0 -50px;
    background-repeat: repeat-x;
    background-size: auto;
    padding-bottom: 0
}

.section-quotes.si-partner-logos {
    background-color: var(--shadow);
    color: var(--nimbus);
    padding-top: 1rem;
    padding-bottom: 1rem
}

.section-quotes.snowflake-summit-25-2 {
    background-color: #292929;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67d0cd09b542925bd7bfd947_yellow-grid.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: 800px;
    padding-bottom: 0
}

.section-quotes.customer-awards {
    background-color: #292929;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67dda5555c77e4d961883969_3b7f56d4ed90935afd2a049b63d345b8_awards-2025-pink.svg);
    background-position: 50% 115%;
    background-repeat: repeat-x;
    background-size: auto 500px;
    padding-bottom: 0
}

.section-quotes.databricks-summit-25 {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67ded7cb107d9f4286fa5cc5_707c675bcfd0b69a855ec53ae844827b_blue-gradient-texture.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto 500px;
    padding-bottom: 0
}

.section-quotes.background-color-white-2 {
    background-color: var(--neutral-0)
}

.section-quotes.state-of-bi-2025 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67ef31b9356d8328aadeaa6f_state-of-bi-dots-gray.svg);
    background-position: 50% 103%;
    background-repeat: repeat-x;
    background-size: auto 260px;
    padding-top: 3rem;
    padding-bottom: 0
}

.section-quotes._100m-arr-lower {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67f4b923c82dda32c0ceb0ae_100m-arr-backer-lower.svg);
    background-position: 0 0;
    background-size: 100%;
    display: none
}

.section-quotes._100m-arr-lower-wide {
    border-top: 1px solid var(--shadow-lite);
    border-bottom: 1px solid var(--shadow-lite);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67f4b923c82dda32c0ceb0ae_100m-arr-backer-lower.svg);
    background-position: 0 0;
    background-size: 100%
}

.section-quotes._100m-arr-lower-box {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/67f4b923c82dda32c0ceb0ae_100m-arr-backer-lower.svg);
    background-position: 0 0;
    background-size: 100%;
    padding-bottom: 0
}

.section-quotes.no-bottom {
    padding-bottom: 0
}

.section-quotes.spring-showcase-25 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/681a8251cfb80692b1518a7e_32007e5b4b5f4407c98abb7c1d2b4857_black-slant-grid-wide.svg);
    background-position: 50% 110%;
    background-repeat: repeat-x;
    background-size: auto 550px
}

.section-quotes.bg-scroll {
    background-color: #ced0cc;
    height: 100vh
}

.section-quotes.header-stack-holder {
    overflow: hidden
}

.section-quotes.header-stack-holder.no-padding-bottom {
    height: 80vh
}

.section-quotes.home-grid {
    background-color: var(--nimbus);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6838c213b81f913fa2c84209_d198c470ae4d8c72d6fc48e6170f37f4_grid-dash.svg);
    background-position: 50% -10px;
    background-size: auto;
    padding-bottom: 6.6rem
}

.section-quotes.quote-row {
    background-color: var(--neutral-0);
    padding-top: 0;
    padding-bottom: 0
}

.centered-50 {
    width: 50%;
    margin-left: auto;
    margin-right: auto
}

.home-product-header {
    letter-spacing: 0;
    text-transform: uppercase;
    margin-top: .5rem;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 400
}

.home-product-container {
    border-top: 1px solid var(--stratus);
    background-color: var(--nimbus);
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    position: sticky;
    top: 0
}

.home-product-container.home-product-1 {
    margin-bottom: 14rem
}

.home-product-container.home-product-2 {
    margin-top: -14rem;
    margin-bottom: 14rem;
    top: 4rem
}

.home-product-container.home-product-3 {
    margin-top: -14rem;
    margin-bottom: 14rem;
    top: 8rem
}

.home-product-container.home-product-4 {
    margin-top: -14rem;
    margin-bottom: 14rem;
    top: 12rem
}

.home-product-container.home-product-5 {
    margin-top: -14rem;
    margin-bottom: 14rem;
    top: 16rem
}

.home-product-container.home-product-6 {
    margin-top: -14rem;
    margin-bottom: 14rem;
    top: 0
}

.home-product {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: absolute;
    top: 0
}

.home-product.background-grid {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd8a9_Grid.webp);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover
}

.home-product.product-hero {
    z-index: 2;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    transform-origin: 50% 100%;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.home-product.align-center {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.home-product.align-center.margin-top-huge {
    margin-top: 12rem
}

.home-product.grid-bg.margin-top-medium {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb12_grid-2.webp);
    background-position: 50% 36%
}

.home-product.flex-container {
    display: flex
}

.home-product.vertical-flex {
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.home-product.background-color-gray-dark.margin-bottom-medium-lrg {
    margin-bottom: 5rem
}

.home-product.margin-bottom-medium-lrg {
    color: var(--stratus)
}

.home-product.no-padding-mobile.padding-medium.hide-2,.home-product.no-padding-mobile.padding-large.hide-2 {
    display: none
}

.home-product.centered {
    text-align: center;
    max-width: 820px
}

.home-product.persona-overlay {
    margin-top: 15%
}

.home-product.quote-row {
    background-color: var(--neutral-0)
}

.home-product.home-product-section {
    padding-left: 0;
    padding-right: 0;
    position: sticky;
    top: 0
}

.home-product-title {
    font-size: 5rem;
    line-height: 100%
}

.align-left-middle {
    justify-content: center;
    align-items: flex-start
}

.apps-icon-small {
    max-height: 14px;
    margin-top: .25rem
}

.data-apps-featured {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: wrap;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: stretch;
    margin-bottom: 1rem;
    margin-left: .5rem;
    margin-right: .5rem
}

.grid-11 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr
}

.app-featured {
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    background-color: var(--shadow);
    color: var(--nimbus);
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 1rem;
    padding: 0;
    transition: background-color .2s;
    display: flex
}

.app-featured:hover {
    border-color: var(--stratus);
    background-color: var(--insight);
    color: var(--neutral-0)
}

.app-featured-thumb {
    object-fit: cover;
    object-position: 50% 0%;
    width: 100%;
    min-height: 100px;
    max-height: 160px;
    transition: all .2s
}

.app-featured-title {
    margin-top: .5rem;
    margin-bottom: .2rem;
    font-size: 18px;
    font-weight: 500
}

.app-featured-subtitle {
    text-wrap: pretty;
    font-size: 14px;
    line-height: 120%
}

.app-featured-text {
    background-color: var(--shadow);
    flex-flow: column;
    width: 100%;
    padding-right: 1rem;
    display: flex
}

.empty-blog-tag {
    background-color: #0000;
    padding: 0
}

.announcement-wrapper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
    overflow: hidden
}

.announcement-wrapper.hide-2,.announcement-wrapper.show {
    display: block
}

.hide-if-no-announcement {
    display: none
}

.home-25-headline {
    z-index: 3;
    padding-top: 5rem;
    position: sticky;
    top: 0
}

.home_primary-hero_ix-trigger {
    z-index: -1;
    margin-top: 100vh;
    position: absolute;
    inset: 0%
}

.architecture-cols {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: space-between;
    align-items: flex-start;
    display: flex
}

.architecture-block {
    width: 33%
}

.width-full-align-right {
    justify-content: flex-end;
    width: 100%;
    display: flex
}

.placeholder-description {
    color: var(--stratus);
    text-align: right;
    margin-top: .5rem;
    margin-bottom: 2rem
}

.gartner-insights-img {
    max-height: 200px
}

.live-event-thumb {
    aspect-ratio: 16/9;
    width: 100%;
    height: 180px;
    padding-top: 0%;
    overflow: hidden
}

.live-event-thumb.g-image-zoom-parent.g-mg-bottom-small {
    padding-top: 0%
}

.live-event-thumb.no-scale {
    box-sizing: border-box;
    object-fit: contain
}

.live-event-thumb.img-cover {
    object-fit: cover
}

.surface-img {
    height: 320px
}

.home-differentiator {
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    grid-template-rows: auto;
    grid-template-columns: 1.5fr 2fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: grid
}

.home-diff-sticky {
    z-index: 5;
    border-top: 1px solid var(--stratus);
    border-bottom: 1px solid var(--stratus);
    background-color: var(--neutral-0);
    cursor: pointer;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    position: sticky;
    top: 0
}

.home-diff-sticky.diff1 {
    top: 0
}

.home-diff-sticky.diff2 {
    top: 3.5rem
}

.home-diff-sticky.diff3 {
    top: 7rem
}

.home-diff-sticky.diff4 {
    top: 10.5rem
}

.home-diff-sticky.diff5 {
    top: 14rem
}

.home-diff-block {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.scroll-margin-top-100 {
    scroll-margin-top: 100px
}

.anchor-01 {
    height: 0;
    scroll-margin-top: 60px
}

.anchor-02 {
    height: 0;
    scroll-margin-top: 120px
}

.anchor-03 {
    height: 0;
    scroll-margin-top: 180px
}

.anchor-04 {
    scroll-margin-top: 240px
}

.anchor-05 {
    scroll-margin-top: 300px
}

.home_features-list_image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: opacity .2s
}

.home_features-list_image:hover {
    opacity: .4
}

.home_features-list_hover-content {
    display: none
}

.home_features-list_card-content-bottom {
    color: var(--nimbus);
    flex-direction: column;
    align-items: flex-start;
    display: flex
}

.home_features-list_image-wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    inset: 0%
}

.home_features-list_grid-list {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr
}

.home_features-list_row {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-items: stretch;
    display: flex
}

.button-7 {
    color: #fff;
    text-align: center;
    background-color: #000;
    border: 1px solid #000;
    padding: .75rem 1.5rem;
    text-decoration: none
}

.button-7.is-link {
    color: #000;
    background-color: #0000;
    border-style: none;
    padding: .25rem 0;
    line-height: 1;
    text-decoration: none
}

.button-7.is-link.is-icon {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem
}

.home_features-list_card-content {
    pointer-events: none;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 19rem;
    display: flex;
    position: relative
}

.home_features-list_card {
    border-radius: 0;
    flex-direction: column;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
    min-height: 40vh;
    padding: 2rem;
    text-decoration: none;
    display: flex;
    position: relative;
    overflow: hidden
}

.home_features-list_card.text-color-white {
    background-color: var(--shadow);
    min-height: 40vh;
    transition: opacity .2s
}

.home_features-list_overlay {
    background-color: #00000080;
    position: absolute;
    inset: 0%
}

.home-surfaces-header {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.surfaces {
    background-color: var(--shadow);
    margin-top: 8rem;
    padding-bottom: 15rem;
    position: relative
}

.surfaces.minheight-700 {
    min-height: 700px
}

.surfaces-items {
    background-color: var(--shadow);
    position: relative
}

.surfaces-item-tab {
    z-index: 3;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border-top: 1px solid var(--shadow-lite);
    background-color: var(--shadow);
    color: var(--neutral-0);
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    width: 35%;
    padding: 1.5rem 2rem;
    transition: all .35s;
    display: flex;
    position: relative
}

.surfaces-item-tab:hover {
    background-color: var(--shadow-lite)
}

.surfaces-item-tab.active,.surfaces-item-tab.active:hover {
    color: var(--shadow)
}

.surfaces-item-tab.active.sky {
    background-color: var(--sky)
}

.surfaces-item-tab.active.sun {
    background-color: var(--sun)
}

.surfaces-item-tab.active.meadow {
    background-color: var(--meadow)
}

.surfaces-item-tab.active.grass {
    background-color: var(--grass)
}

.surfaces-item-tab.active.insight {
    background-color: var(--insight)
}

.surfaces-item-tab.active.stratus {
    background-color: var(--stratus)
}

.surfaces-item-tab.first {
    border-top-style: none
}

.surfaces-item-tab.nimbus.active {
    background-color: var(--nimbus)
}

.surfaces-item-content {
    z-index: 1;
    opacity: 0;
    color: var(--neutral-0);
    width: 58%;
    transition: all .35s;
    position: absolute;
    inset: 0% 0% auto auto;
    transform: translate(-20px)
}

.surfaces-item-content.active {
    z-index: 2;
    opacity: 1;
    transform: translate(0)
}

.surfaces-item-img {
    object-fit: contain;
    height: 35rem
}

.surfaces-item-link {
    justify-content: flex-end;
    align-items: center;
    display: flex
}

.surfaces-item-text {
    text-wrap: pretty;
    margin-top: 1.5rem
}

.surfaces-item-h2 {
    letter-spacing: -.03em;
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1.75rem
}

.surfaces-item-arrow2 {
    transition: all .25s;
    display: none
}

.surfaces-item-image {
    text-align: right
}

.surfaces-item-image.center {
    text-align: center
}

.surfaces-content-bg {
    background-color: var(--shadow-lite);
    border-radius: 20px;
    width: 58%;
    height: 29.5rem;
    position: absolute;
    top: 5.5rem;
    right: 0
}

.surfaces-item-title {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    display: flex
}

.home-25-embed {
    border-radius: 8px
}

.subhead-home {
    text-align: center;
    margin-bottom: 2rem
}

.home-25-subhead {
    text-align: center;
    text-wrap: pretty;
    max-width: 960px;
    margin: 3rem auto 2rem;
    font-size: 1.3rem
}

.home-25-subhead.text-size-large.margin-bottom-large {
    font-size: 1.3rem
}

.home-25-subhead.margin-bottom-larger {
    margin-bottom: 6rem
}

.ai-image {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto
}

.data-apps-callout-flex {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: flex
}

.data-apps-callout-right {
    background-color: var(--insight);
    color: var(--shadow-lite);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68548c186a09baced99db066_vertical-slats-dark.svg);
    background-position: 0%;
    background-repeat: no-repeat;
    background-size: auto;
    align-self: center;
    width: 60%;
    height: 300px;
    display: flex
}

.data-apps-callout-left {
    align-self: center;
    width: 40%;
    min-height: 300px;
    display: flex
}

.data-apps-callout-text {
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 30%
}

.data-apps-left {
    align-items: center;
    width: 60%;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 30%;
    display: flex
}

.data-apps-callout-text-copy {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
    width: 60%;
    margin: auto;
    display: flex
}

.data-apps-callout-icon {
    height: 150px
}

.data-apps-callout-title {
    letter-spacing: -.04em;
    font-size: 2rem;
    font-weight: 700;
    line-height: 110%
}

.home-callouts-grid {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-rows: auto;
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    min-height: 450px;
    display: grid
}

.home-callout-large {
    background-color: var(--shadow);
    color: var(--nimbus);
    z-index: 10;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/685582b084b53044941b7ecc_6d6dfdf42b5b39e73c56cefe329fcf18_home-callout-1.svg);
    background-position: 100% 0;
    background-repeat: repeat-y;
    background-size: 28%;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 4rem 6rem 2rem 3rem;
    display: flex
}

.home-callout-small {
    background-color: var(--shadow);
    color: var(--nimbus);
    z-index: 10;
    flex-flow: column;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    display: flex
}

.home-callout-3 {
    background-color: var(--shadow);
    color: var(--nimbus);
    width: 100%
}

.h3-home {
    text-align: left;
    letter-spacing: -.05em;
    text-wrap: balance;
    margin-left: auto;
    margin-right: auto;
    font-family: Dmsans,sans-serif;
    font-size: 4rem;
    line-height: 100%
}

.h3-home.home-surfaces {
    text-align: left;
    max-width: 90%;
    margin-left: 0;
    margin-right: 0;
    font-weight: 300
}

.h3-home.text-align-center {
    text-align: center
}

.diff-links {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    text-transform: uppercase;
    justify-content: flex-end;
    align-items: center;
    font-family: Dmmono,sans-serif;
    display: flex
}

.diff-header {
    justify-content: space-between;
    align-items: center;
    display: flex
}

.diff-separator {
    color: var(--stratus)
}

.diff-link {
    border-top: 5px solid var(--neutral-0);
    border-bottom: 5px solid var(--neutral-0);
    padding: 1.5rem 0;
    font-size: 1rem;
    transition: border-color .2s
}

.diff-link:hover {
    border-bottom: 5px solid var(--insight);
    border-top-width: 5px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
}

.diff-link.w--current {
    border-top: 5px solid var(--neutral-0);
    border-bottom-width: 5px;
    border-bottom-color: var(--shadow-lite);
    color: var(--shadow);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
}

.diff-flex {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    display: flex
}

.diff-arch-block {
    width: 100%
}

.why-choose-sigma {
    letter-spacing: -.04em;
    padding-top: .5rem;
    padding-bottom: .5rem;
    font-size: 1.5rem;
    font-weight: 700
}

.diff-navbar {
    background-color: var(--neutral-0)
}

.flex-vertical-2 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex-direction: column;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.mq-sigma {
    width: 120px
}

.mq-gartner {
    width: 80px
}

.text-pretty {
    text-wrap: pretty
}

.callout-card-sm-content {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem 2rem 3rem;
    display: flex
}

.mq-callout-flex {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.callout-header-sm {
    letter-spacing: -.04em;
    text-wrap: pretty;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 120%
}

.callout-button {
    padding-bottom: 2rem;
    padding-left: 2rem;
    padding-right: 2rem
}

.home-callouts-impact {
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 6rem;
    margin-bottom: 1.5rem;
    display: flex
}

.div-block-237 {
    background-color: var(--shadow);
    width: 100%;
    min-height: 200px
}

.callout-texture {
    overflow: hidden
}

.home-callout-impact {
    background-color: var(--shadow);
    color: var(--nimbus);
    flex-flow: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    display: flex
}

.forrester-block {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: var(--shadow);
    color: var(--nimbus);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.forrester-headline {
    text-wrap: pretty;
    width: 100%;
    margin-bottom: 0
}

.forrester-logo {
    width: 80px
}

.callout-card-tighter {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    display: flex
}

.callout-texture-img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    transform: scale(1.01)
}

.val-grid {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

.val-stack,.validation-stack2 {
    grid-template-columns: 1fr
}

.card-callout {
    background-color: var(--shadow);
    color: var(--nimbus);
    flex-flow: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    display: flex
}

.card-callout:hover {
    color: var(--nimbus)
}

.card-callout.light {
    background-color: var(--nimbus);
    color: var(--shadow)
}

.card-callout.pink {
    background-color: var(--meadow);
    color: var(--shadow)
}

.card-callout.green {
    background-color: var(--grass);
    color: var(--shadow)
}

.card-header {
    height: 400px;
    overflow: hidden
}

.card--content {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 65%;
    padding: 2rem 2rem 3rem;
    display: flex
}

.val-header-img {
    object-fit: fill;
    width: 100%
}

.card-header-text {
    letter-spacing: -.04em;
    text-wrap: balance;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 120%
}

.val-quote {
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 250px;
    padding: 2rem;
    display: flex
}

.val-quote.blue {
    background-color: var(--sky);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6855da4cc845d0eed904d0f6_val-quote-texture-blue.svg);
    background-position: 100% 0;
    background-repeat: repeat-y;
    background-size: 25%
}

.val-quote.orange {
    background-color: var(--sun);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/6855de188d8c3da55da54f70_ab6ffc6a00a4120d635d327602363721_val-quote-texture-orange.svg);
    background-position: 100% 0;
    background-repeat: repeat-y;
    background-size: 25%
}

.val-quote-text {
    width: 60%;
    font-family: Dmmono,sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 150%
}

.val-logo {
    width: 160px;
    max-width: 160px
}

.florida-cancer-holder {
    background-color: var(--neutral-0);
    padding: 12px 12px 1rem
}

.ai-image-1 {
    height: 30%
}

.ai-feature-1 {
    max-height: 350px;
    margin-bottom: 6rem
}

.ai-feature-2 {
    max-width: 600px;
    max-height: 550px
}

.quote-right {
    justify-content: flex-end;
    align-items: center;
    margin-bottom: .5rem;
    display: flex
}

.callout-heading-large {
    letter-spacing: -.04em;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 110%
}

.card-cta {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: auto;
    font-size: 0;
    font-weight: 200;
    text-decoration: none;
    display: flex
}

.card-cta.text-color-light:hover {
    color: var(--insight)
}

.quote-text-medium {
    font-size: 1.25rem;
    line-height: 150%
}

.medium-quote-block {
    margin-left: 1rem;
    margin-right: 1rem
}

.medium-quote-block.max {
    max-width: 60rem
}

.data-apps-list {
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    background-color: var(--shadow);
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr
}

.data-apps-list.hide-mobile-portrait {
    margin-top: 4rem
}

.data-apps-list-col {
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    padding: 0;
    font-size: .9rem
}

.home-25-vid.shadow-large {
    border-radius: 8px;
    overflow: hidden
}

.ai-feature-3 {
    max-width: 600px;
    max-height: 450px
}

.ai-feat-1 {
    margin-left: auto
}

.ai-feature-abs-1 {
    max-height: 350px;
    margin-bottom: 6rem;
    margin-right: 720px;
    position: absolute
}

.ai-feature-abs-2 {
    z-index: 3;
    max-height: 550px;
    padding-top: 4rem;
    position: absolute
}

.ai-feature-abs-3 {
    max-width: 600px;
    max-height: 400px;
    margin-bottom: 50px;
    margin-left: 800px;
    position: absolute
}

.ai-features-abs {
    justify-content: center;
    align-items: flex-end;
    width: 75%;
    min-height: 540px;
    margin-left: auto;
    margin-right: auto;
    display: flex
}

.ai-features-abs.hide {
    display: none
}

.card-logo-block {
    justify-content: space-between;
    align-items: center;
    min-height: 5rem;
    display: flex
}

.card-content-text {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex
}

.home-quote-text {
    font-family: Dmmono,sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 150%
}

.home-quote-text.hanging-quotes {
    text-wrap: pretty
}

.home-quote-text.hanging-quotes.text-size-larger {
    font-size: 1.5rem
}

.home-quote-text.hanging-quotes.text-size-larger.text-align-center.text-wrap-balance {
    text-wrap: balance
}

.home-quote-text.hanging-quotes.text-size-larger.text-wrap-balance {
    text-wrap-style: balance
}

.home-quote-author {
    grid-column-gap: .25rem;
    grid-row-gap: .25rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex
}

.surfaces-item-arrow {
    display: none
}

.home-quote-inline {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    height: 100%;
    padding: 2rem;
    display: flex
}

.surfaces-item-arrow-old {
    margin-top: auto;
    margin-bottom: auto;
    display: none
}

.home-quote-offset {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 150%;
    display: flex
}

.home-quote-offset.hanging-quotes {
    text-wrap: pretty
}

.home-quote-bar {
    background-color: var(--shadow-lite);
    width: 6px;
    min-width: 6px;
    margin-top: 6px;
    margin-bottom: 6px
}

.stars-divider {
    background-color: var(--neutral-8);
    width: 1px;
    min-width: 1px;
    height: 32px
}

.grid-with-borders-2 {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: var(--shadow);
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 0;
    position: relative;
    overflow: clip
}

.grid-with-borders-2.no-margins {
    border-bottom: 1px #000;
    margin-top: 0;
    margin-bottom: 0
}

.grid-with-borders-2.apps {
    background-color: var(--neutral-0);
    padding: 1rem 1rem 2rem
}

.journey-anchor {
    margin-bottom: -99px;
    padding-top: 99px;
    position: relative;
    top: -99px
}

.product-video {
    margin-top: 4rem;
    position: relative
}

.product-video.smaller {
    max-width: 450px
}

.product-video.shadow-large,.product-video-holder.shadow-large {
    border-radius: 8px;
    overflow: hidden
}

.play-button-over {
    z-index: 2;
    position: absolute;
    top: 45%;
    left: 72%
}

.image-189 {
    position: absolute
}

.customer-sidebar {
    justify-content: space-between
}

.meta-image {
    position: absolute;
    inset: 0
}

.meta-image.img-cover {
    object-fit: cover
}

.meta-image-box {
    aspect-ratio: 1.91;
    background-color: var(--nimbus);
    border: 0 #000;
    width: 100%;
    padding-top: 52.356%;
    position: relative;
    overflow: hidden
}

.meta-image-box.customers {
    height: auto;
    max-height: 180px;
    display: flex
}

.meta-image-box.blog-thumb {
    max-height: 208px;
    overflow: clip
}

.meta-image-box.fpo {
    filter: blur(5px)
}

.meta-image-box.background-color-light {
    background-color: var(--nimbus)
}

.fit-image {
    object-fit: contain;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0
}

._3-badge-lockup {
    width: 360px;
    margin-left: 1rem;
    margin-right: 1rem
}

._16x9-image-box {
    aspect-ratio: 16/9;
    background-color: var(--nimbus);
    border: 0 #000;
    width: 100%;
    padding-top: 52.356%;
    position: relative;
    overflow: hidden
}

._16x9-image-box.customers {
    height: auto;
    max-height: 180px;
    display: flex
}

._16x9-image-box.blog-thumb {
    max-height: 208px;
    overflow: clip
}

._16x9-image-box.fpo {
    filter: blur(5px)
}

._16x9-image-box.background-color-light {
    background-color: var(--nimbus)
}

.header-scroll {
    z-index: -1;
    margin-top: 100vh;
    position: absolute;
    inset: 0
}

.gartner-peer-insights {
    max-width: 300px
}

.external-arrow {
    width: 16px;
    margin-bottom: 4px
}

.video-chapter-lead {
    color: var(--nimbus);
    text-align: left;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;
    display: flex
}

.video-chapter-text {
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 600
}

.code-embed-9 {
    color: var(--insight)
}

.div-block-238 {
    justify-content: space-between;
    align-items: center;
    display: flex
}

.section-link-block {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    color: var(--nimbus);
    text-transform: uppercase;
    background-color: #0003;
    border: 1px solid #f0ff4500;
    border-radius: 20px;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: .2rem 1rem .2rem .7rem;
    font-family: Dmmono,sans-serif;
    font-size: 12px;
    transition-property: width,background-color;
    transition-duration: .2s,.2s;
    transition-timing-function: ease,ease;
    display: flex
}

.section-link-block:hover {
    background-color: var(--shadow);
    color: var(--neutral-0)
}

.section-link-block:active {
    border-color: var(--insight)
}

.star-reviews-wrapper {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    position: relative
}

.star-reviews-modal {
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0;
    transition-property: all;
    transition-duration: .3s;
    transition-timing-function: ease;
    display: block;
    position: absolute;
    top: 100%;
    left: 0%;
    right: 0%
}

.star-reviews-modal:hover {
    color: var(--neutral-0)
}

.star-reviews-modal-triangle {
    height: 18px
}

.star-reviews-modal-arrow {
    height: 15px;
    margin-top: 5px
}

.star-reviews-modal-block {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    background-color: var(--shadow);
    justify-content: center;
    align-items: center;
    min-height: 5rem;
    padding: 1rem 1.5rem;
    display: flex
}

.star-reviews-modal-triangle-img {
    height: 12px
}

.text-block-38 {
    border-bottom: 1px solid #0000
}

.star-reviews-modal-text {
    text-align: left;
    padding-bottom: 5px;
    line-height: 22px;
    position: relative
}

.star-reviews-modal-block-inner {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: center;
    align-items: flex-start;
    margin-top: 3px;
    display: flex
}

.star-reviews-modal-inner {
    color: var(--neutral-0);
    display: inline-block;
    position: relative
}

.star-reviews-modal-inner:hover {
    color: var(--neutral-0)
}

.wistia-form-wrapper {
    background-color: var(--neutral-0);
    border: 1px solid #000;
    width: 100%;
    max-width: 700px;
    height: 100%;
    min-height: 430px;
    padding: 1rem
}

.wistia-form-wrapper.g-shadow-100 {
    object-fit: contain
}

.wistia-form-wrapper.margin-bottom-30rem {
    margin-bottom: 30rem
}

.wistia-form-wrapper.light-form {
    border-color: var(--stratus);
    background-color: var(--nimbus);
    max-width: 720px
}

.wistia-form-wrapper.light-form.fill-width {
    width: 100%
}

.wistia-event-wrapper {
    background-color: var(--black);
    border: 1px solid #000;
    width: 100%;
    min-height: 336px;
    margin-bottom: 2rem
}

.wistia-event-wrapper.g-shadow-100 {
    object-fit: contain
}

.wistia-event-wrapper.margin-bottom-30rem {
    margin-bottom: 30rem
}

.wistia-event-wrapper.light-form {
    border-color: var(--stratus);
    background-color: var(--nimbus);
    max-width: 720px
}

.wistia-event-wrapper.light-form.fill-width {
    width: 100%
}

.hero-grid-wistia {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    padding: 0
}

._1px-light {
    border-top-width: 1px;
    border-top-color: var(--stratus)
}

.accordian-container {
    width: 100%;
    margin-left: 0;
    margin-right: auto;
    padding-top: 4px;
    padding-bottom: 4px
}

.button-8 {
    color: #292929;
    text-align: center;
    white-space: nowrap;
    background-color: #f0ff45;
    border: 1px solid #292929;
    border-radius: 8rem;
    padding: .65rem 1.5rem;
    font-family: Dmmono,sans-serif;
    font-weight: 400;
    transition: all .275s,all .2s;
    position: static
}

.button-8:hover {
    background-color: #fff
}

.button-8.is-secondary {
    color: #000;
    white-space: nowrap;
    word-break: normal;
    background-color: #0000;
    border: 1px solid #222;
    font-family: Dmmono,sans-serif
}

.button-8.is-secondary:hover {
    background-color: #9fa8a745
}

.button-8.is-secondary.is-white-empty {
    color: #f0f0f0;
    border-color: #9fa8a7
}

.button-8.is-secondary.is-white {
    background-color: #fff
}

.button-8.is-secondary.is-white:hover {
    background-color: #9fa8a745
}

.button-8.is-secondary.is-white-2 {
    background-color: #fff
}

.button-8.is-secondary.is-white-2:hover {
    background-color: #9fa8a745
}

.video-button-wrapper {
    position: relative
}

.video-button {
    z-index: 999;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    padding-bottom: 2rem;
    display: flex;
    position: absolute
}

.video-button.padding-bottom-4rem {
    padding-bottom: 4rem
}

.video-button.padding-bottom-6rem {
    padding-bottom: 6rem
}

.embed-full {
    width: 100%;
    height: 100%
}

.h1-inline-header {
    margin-bottom: 0;
    font-size: 1.5rem;
    line-height: 1.5rem
}

.inline-header-wrapper {
    margin-left: 2rem
}

.passkey-modal {
    z-index: 9999;
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: fixed;
    top: 0;
    left: 0
}

.passkey-dialogue {
    z-index: 2;
    background-color: var(--shadow);
    max-width: 400px;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 2.25rem;
    transition: all .2s;
    position: relative;
    top: 50%;
    transform: translateY(-50%)
}

.passkey-dialogue.text-color-light {
    padding-bottom: 3.25rem
}

.passkey-form {
    color: var(--black);
    text-align: center;
    margin-top: 1rem
}

.passkey-form.g-text-color-neutral-0 {
    margin-top: 1rem
}

.code-embed-10 {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: column;
    display: flex
}

.feature-single-column-centered {
    justify-content: flex-start;
    align-items: center;
    padding-top: 4rem;
    padding-left: 4rem;
    padding-right: 4rem
}

.feature-single-column-centered.ai-model-backer {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68944ada4caf2f52c7be0f2d_gradient-background.svg);
    background-position: 50% 130%;
    background-repeat: repeat-x;
    background-size: auto
}

.background-color-white-padded-copy {
    background-color: #fff;
    padding-top: 0;
    padding-left: 0;
    padding-right: 0
}

.background-color-wht {
    background-color: #fff
}

.color-subtitle-large {
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    padding: .25rem .75rem;
    font-family: Dmmono,sans-serif;
    font-size: 16px;
    display: inline-block
}

.color-subtitle-large.green {
    background-color: #4cec8c
}

.color-subtitle-large.orange {
    background-color: var(--sun);
    padding-top: 0;
    padding-bottom: 0
}

.color-subtitle-large.pink {
    text-transform: uppercase;
    background-color: #ffcee6;
    padding-top: 0;
    padding-bottom: 0
}

.color-subtitle-large.sky {
    background-color: var(--sky);
    padding-top: 0;
    padding-bottom: 0
}

.color-subtitle-large.blue {
    background-color: var(--sky)
}

.color-subtitle-large.grey {
    background-color: #c1c8c9
}

.color-subtitle-large.yellow {
    background-color: var(--insight)
}

.color-subtitle-large.white-outline {
    border: 1px solid var(--neutral-0)
}

.color-subtitle-large.grey-stratus {
    background-color: var(--stratus)
}

.color-subtitle-large.gray-light {
    background-color: var(--nimbus)
}

.color-subtitle-large.white {
    background-color: var(--neutral-0);
    color: var(--shadow)
}

.featured-event-block-2 {
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: #3d3d3d;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    display: flex
}

.container-25 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: relative
}

.featured-events-2 {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    background-color: #292929;
    justify-content: flex-start;
    align-items: stretch;
    margin-bottom: 1rem;
    display: flex
}

.featured-event-text-2 {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    color: #f0f0f0;
    flex-flow: column;
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 2rem;
    margin-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex
}

.simple-cta-link-2 {
    text-transform: uppercase;
    margin-bottom: 0;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    text-decoration: none;
    box-shadow: inset 0 -2px #fff
}

.simple-cta-link-2:hover {
    box-shadow: inset 0 -2px #f0ff45
}

.simple-cta-link-2-copy {
    text-transform: uppercase;
    margin-bottom: 0;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    text-decoration: none;
    box-shadow: inset 0 -2px #fff
}

.simple-cta-link-2-copy:hover {
    box-shadow: inset 0 -2px #f0ff45
}

.big-data-london {
    max-width: 200px;
    padding-left: 1rem
}

.snowflake-worldtour-25 {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68b09fc673ac230032b254cd_pettern-blue-lines.svg);
    background-position: 50% 200px;
    background-repeat: repeat-x;
    background-size: 318px;
    padding-top: 2rem;
    padding-bottom: 0
}

.worldtour-25-header {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    width: 100%;
    padding: 5rem 3rem 6rem;
    position: relative;
    overflow: hidden
}

.worldtour-25-header.page-tabs-callout {
    background-color: var(--insight)
}

.worldtour-callout {
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    padding: 1rem
}

.worldtour-callout:hover {
    color: var(--neutral-0)
}

.worldtours-callout-wrapper {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    width: 50%;
    display: flex
}

.date-location {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: wrap;
    display: flex
}

.pop-up-modal-temp {
    z-index: 9999;
    width: 100%;
    height: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: fixed;
    top: 0;
    left: 0
}

.pop-up-embed {
    z-index: 2;
    background-color: var(--shadow);
    width: 100%;
    height: 100%;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: .5rem 2.25rem .5rem .5rem;
    transition: all .2s;
    position: relative;
    top: 50%;
    transform: translateY(-50%)
}

.h1-subpage-left {
    text-align: left;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 3.75rem;
    font-weight: 400;
    line-height: 4.25rem
}

.product-header-2col {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    width: 100%;
    height: 400px;
    padding: 0
}

.cell-69,.cell-70 {
    justify-content: center;
    align-items: flex-start
}

.flex-col-1rem {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    justify-content: space-between;
    align-items: flex-start;
    display: flex
}

._2col {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 0
}

.product-shot-frame {
    margin-top: 2.5rem;
    padding-top: 4rem;
    padding-left: 4rem;
    padding-right: 4rem
}

.product-shot-frame.texture-1 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68944ada4caf2f52c7be0f2d_gradient-background.svg);
    background-position: 0 0;
    background-size: auto
}

.ai-block-large {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 1px solid var(--stratus);
    flex-flow: column;
    min-height: 400px;
    padding: 1.5rem;
    display: flex
}

.flex-col-1rem-stretch {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: column;
    justify-content: space-between;
    align-items: stretch;
    display: flex
}

.callout-3-1rem {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-flow: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.presented-by {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: space-between;
    align-items: center;
    font-size: 0;
    font-weight: 200;
    text-decoration: none;
    display: flex
}

.presented-by.text-color-light:hover {
    color: var(--insight)
}

.gray-outline {
    border: 1px solid var(--stratus)
}

.resources-card-light {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    border: 1px solid var(--shadow-lite);
    background-color: var(--neutral-0);
    border-radius: 0;
    flex-flow: column;
    align-items: stretch;
    padding: 0;
    transition: all .2s;
    display: flex
}

.resources-card-light:hover {
    outline-color: var(--shadow-lite);
    outline-offset: 0px;
    background-color: #dadada;
    border-style: solid;
    border-color: #464646;
    outline-width: 10px;
    outline-style: none
}

.resources-card-light.text-color-light {
    border-color: var(--shadow-lite);
    height: 100%;
    padding: 0
}

.resources-card-light.text-color-light:hover {
    outline-color: var(--stratus);
    outline-offset: 0px;
    color: var(--stratus);
    border-style: solid;
    outline-width: 0;
    outline-style: solid
}

.resources-card-light.text-color-light.no-hover:hover {
    background-color: var(--shadow-lite);
    outline-color: var(--nimbus);
    color: var(--nimbus)
}

.play-button {
    z-index: 2;
    position: relative;
    top: -80%;
    left: 35%
}

.text-color-light-3 {
    color: #fff
}

.video-wrapper-2 {
    transition: opacity .2s
}

.video-wrapper-2.crop {
    transform: scale(1.01)
}

.ai-function-2 {
    background-color: #f0f0f0;
    justify-content: flex-start;
    align-items: flex-start;
    padding: .5rem 1rem;
    font-family: Dmmono,sans-serif
}

.image-cover-4 {
    object-fit: cover;
    width: 100%;
    height: 101%;
    transition: all .2s
}

.image-cover-4:hover {
    transform: none
}

.container-26 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: relative
}

.container-26.align-center-4 {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.product-subheading-2 {
    color: #fff;
    text-align: center;
    letter-spacing: .5px;
    text-transform: uppercase;
    text-wrap: balance;
    margin-bottom: 2rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.75rem
}

.underline-2 {
    border-bottom: 1px solid #292929
}

.nav-dropdown-list-2 {
    background-color: #0000;
    inset: 80px auto auto 0
}

.nav-dropdown-list-2.w--open {
    z-index: 1;
    transition: opacity .2s;
    position: absolute
}

.nav-dropdown-list-2.w--open:hover {
    color: #9fa8a7
}

.ai-function-header-2 {
    color: #f0f0f0;
    text-align: left;
    background-color: #3d3d3d;
    padding: .5rem 1rem
}

.simple-cta-link-3 {
    text-transform: uppercase;
    margin-bottom: 0;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    text-decoration: none;
    box-shadow: inset 0 -2px #fff
}

.simple-cta-link-3:hover {
    box-shadow: inset 0 -2px #f0ff45
}

.nav-dropdown_chevron-2 {
    display: none
}

.tertiary-link-light-2 {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    color: #f0f0f0;
    display: flex
}

.hero-img-vid-wrapper-2 {
    background-color: #292929;
    border-radius: 2px;
    max-width: 975px;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden
}

.nav-dropdown-list-column-2 {
    color: #fff;
    width: 25%
}

.border-left-2 {
    border-left: 1px solid #292929
}

.border-left-2.border-right-2.feature-single-column {
    padding-top: 4rem;
    padding-left: 4rem;
    padding-right: 4rem
}

.resources-card-dark-2 {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    background-color: #3d3d3d;
    border: 1px solid #3d3d3d;
    border-radius: 0;
    flex-flow: column;
    align-items: stretch;
    padding: 24px 24px 0;
    transition: all .3s;
    display: flex
}

.resources-card-dark-2:hover {
    outline-offset: 0px;
    background-color: #29292900;
    border-style: solid;
    border-color: #464646;
    outline: 10px #3d3d3d
}

.resources-card-dark-2.text-color-light-3 {
    border-color: #3d3d3d;
    height: 100%;
    padding: 0
}

.resources-card-dark-2.text-color-light-3:hover {
    outline-offset: 0px;
    color: #9fa8a7;
    border-style: solid;
    outline: 0 solid #9fa8a7
}

.ai-function-definition-header-2 {
    color: #f0f0f0;
    text-align: left;
    background-color: #3d3d3d;
    padding: .5rem 1rem
}

.nav-link_text-link-2 {
    color: #171717;
    padding: 28px 0;
    font-family: Dmmono,sans-serif;
    font-size: .9rem;
    font-weight: 500;
    text-decoration: none;
    transition: all .2s;
    display: block;
    position: relative
}

.nav-link_text-link-2:hover {
    color: #9fa8a7
}

.nav-link_text-link-2:focus-visible,.nav-link_text-link-2[data-wf-focus-visible] {
    outline-offset: 1px;
    outline: 2px solid #4245ff
}

.nav-link_text-link-2.nav-mobile-only {
    display: none
}

.no-padding-3 {
    grid-column-gap: 1rem;
    grid-row-gap: 6.3rem;
    grid-template-rows: auto;
    padding: 0
}

.no-padding-3.min-height-400 {
    min-height: 400px
}

.nav-dropdown-list-column_link_img-2 {
    border-left: 1px solid #292929;
    margin-left: .5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: .5rem;
    display: block
}

.nav-dropdown-list-column_link_img-2:hover {
    border-left-color: #9fa8a7
}

.navbar-2 {
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #292929;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding-left: 0%;
    padding-right: 0%;
    display: flex
}

.nav-links_list-2 {
    z-index: 3;
    clear: none;
    margin-bottom: 0;
    list-style-type: none;
    display: flex;
    position: static
}

.border-right-2 {
    border-right: 1px solid #292929
}

.border-right-2.background-color-light-2.cell-position-relative {
    justify-content: flex-end;
    align-items: flex-end
}

.feature-image-l-2 {
    aspect-ratio: 16/9;
    background-color: #9fa8a7;
    border-radius: 0;
    height: auto;
    overflow: hidden
}

.nav-dropdown_toggle-2 {
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    color: #171717;
    cursor: default;
    border-radius: 4px;
    justify-content: flex-start;
    align-items: center;
    padding: 28px 20px 28px 25px;
    font-family: Dmmono,sans-serif;
    font-size: .9rem;
    font-weight: 400;
    transition: all .2s;
    display: flex
}

.nav-dropdown_toggle-2:focus-visible,.nav-dropdown_toggle-2[data-wf-focus-visible] {
    outline-offset: 2px;
    outline: 2px solid #4245ff
}

.nav-dropdown_toggle-2.w--open {
    color: #9fa8a7;
    transition-property: none
}

.nav-dropdown_toggle-2.extra-left {
    padding-left: 50px
}

.nav-dropdown_toggle-2.extra {
    padding-left: 70px;
    padding-right: 45px
}

.paragraph-1142 {
    display: flex
}

.align-center-4 {
    justify-content: center;
    display: flex
}

.paragraph-1143 {
    display: flex
}

.nav-dropdown-list-column_title-2 {
    color: #9fa8a7;
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
    padding-left: .5rem;
    font-family: Dmmono,sans-serif;
    font-size: .8rem
}

.background-color-white-2 {
    background-color: #fff
}

.background-color-white-2.grid-bottom-left {
    padding-top: 2rem;
    padding-right: 1rem
}

.background-color-white-2.grid-bottom-right {
    padding-top: 2rem;
    padding-left: 1rem
}

.background-color-white-2.grid-top-left {
    padding-bottom: 1rem;
    padding-right: 1rem
}

.background-color-white-2.grid-top-right {
    padding-bottom: 1rem;
    padding-left: 1rem
}

.ai-function-definition-2 {
    background-color: #f0f0f0;
    padding: .5rem 1rem
}

.grid-with-borders-2x2-2 {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: #3d3d3d;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

.striped-divider-2 {
    background-color: #292929;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66be5499067782d22fb41677_dark-horizon-lines.svg);
    background-position: 50% 0;
    background-repeat: repeat-x;
    background-size: 718px;
    background-attachment: scroll;
    width: 100%;
    height: 100px
}

.striped-divider-2.flipped {
    transform-style: preserve-3d;
    background-color: #3d3d3d;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66be51b174d639c73b1a568f_dark-lines.svg);
    background-repeat: repeat-x;
    background-size: auto 150px;
    background-attachment: scroll;
    border-top: 1px solid #292929;
    transform: rotateX(180deg)rotateY(0)rotate(0)
}

.text-link-allcaps-4 {
    color: #292929;
    text-transform: uppercase;
    text-decoration: none;
    transition: all .2s;
    box-shadow: inset 0 -2px #292929
}

.text-link-allcaps-4:hover {
    box-shadow: inset 0 -11px #f0ff45
}

.text-link-allcaps-4.no-margin-bottom.text-size-small {
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none
}

.text-link-allcaps-4.no-margin-bottom.text-size-small.text-color-light-3 {
    color: #f0f0f0;
    box-shadow: inset 0 -2px #9fa8a7
}

.text-link-allcaps-4.no-margin-bottom.text-size-small.text-color-light-3:hover {
    box-shadow: inset 0 -4px #f0ff45
}

.nav-dropdown_toggle-carat-2 {
    z-index: 2;
    background-color: #f0ff45;
    border-color: #0000 #0000 #fff;
    width: 100%;
    height: 5px;
    display: none;
    position: absolute;
    top: 79px;
    left: 25px
}

.nav-dropdown-list-column_link-2 {
    color: #fff;
    max-width: 135px;
    margin-bottom: 7px;
    padding: .25rem 0 .25rem .5rem;
    font-family: Dmsans,sans-serif;
    font-size: 14px;
    line-height: 1.1rem;
    transition: all 40ms;
    display: block
}

.nav-dropdown-list-column_link-2:hover {
    color: #fff;
    -webkit-text-stroke-color: #fff;
    background-color: #ffffff1a
}

.nav-dropdown-list-column_link-2:active {
    color: #fff
}

.hero-dark-img-vid-2 {
    text-align: center;
    background-color: #3d3d3d;
    background-image: none;
    padding-top: 5rem;
    overflow: hidden
}

.hero-dark-img-vid-2.ai {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb41_BG%20Triangle.svg);
    background-position: 50% 111%;
    background-repeat: repeat-x;
    background-size: auto 289px
}

.page-tabs-border-section-2 {
    background-color: #fff;
    border: 1px solid #9fa8a7;
    width: 100%;
    max-width: 1000px;
    margin-bottom: 4rem;
    padding: 3rem 3rem 4rem;
    position: relative;
    overflow: hidden
}

.callout-3-column-2 {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    flex-flow: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.tab_menu_link_icon-2 {
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    text-transform: uppercase;
    background-color: #ddd0;
    border-bottom: 4px solid #dbdbdb;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    display: flex
}

.tab_menu_link_icon-2.w--current {
    background-color: #f0ff45;
    border-color: #000
}

.nav-logo-link-block-2 {
    width: 104px
}

.nav-logo-link-block-2:focus-visible,.nav-logo-link-block-2[data-wf-focus-visible] {
    outline-offset: 2px;
    border-radius: 4px;
    outline: 2px solid #4245ff
}

.nav-logo-link-block-2.w--current {
    border-radius: 4px
}

.js-countdown-3 {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    opacity: 0;
    color: #f0ff45;
    align-items: center;
    transition: opacity .2s;
    display: flex
}

.js-countdown-block-2 {
    display: flex
}

.tracking-code,.countdown-code {
    display: none
}

.text-color-stratus {
    color: var(--stratus)
}

.flex-centered-1rem {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.stats-large {
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 1rem;
    font-family: Dmmono,sans-serif;
    font-size: 3rem
}

.stats-large.center-align {
    text-align: center
}

.div-block-239 {
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    display: flex
}

.margin-tb-auto {
    margin-top: auto;
    margin-bottom: auto
}

.stat-wrapper-inline {
    padding: 1rem
}

.video-frame-reveal {
    background-color: var(--shadow-lite);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb35_BG%20Pattern%20Rectangle.svg);
    background-position: 50% 100%;
    background-repeat: repeat-x;
    background-size: auto;
    width: 100%;
    padding-top: 2rem;
    padding-left: 4rem;
    padding-right: 4rem
}

.feature-single-col-centered-wide {
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 4rem;
    padding-left: 0;
    padding-right: 0;
    display: flex
}

.feature-single-col-centered-wide.ai-model-backer {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68944ada4caf2f52c7be0f2d_gradient-background.svg);
    background-position: 50% 130%;
    background-repeat: repeat-x;
    background-size: auto
}

.career-filter-flex {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    justify-content: flex-start;
    align-items: center;
    display: flex
}

.big-headline-25 {
    z-index: 3;
    padding-top: 5rem
}

.masonry-list {
    flex-flow: wrap;
    display: flex
}

.masonry-item {
    max-width: 25%;
    transition: all .2s;
    position: relative
}

.masonry-img {
    object-fit: cover;
    width: 100%;
    height: 100%
}

.collection-item-5,.masonry--item {
    margin-bottom: 25px
}

.masonry--img {
    width: 100%
}

.collection-list-wrapper-3 {
    column-count: 3;
    column-gap: 25px;
    width: 90vw;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto
}

.img {
    width: 100%
}

.grid {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-content: end;
    width: 90vw;
    max-width: 1400px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    display: grid
}

.grid._2 {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-rows: auto;
    max-width: 1300px
}

.content {
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    display: flex;
    position: relative
}

.image {
    cursor: pointer;
    width: 100%;
    transform: translate(0)
}

.carousel {
    display: flex
}

.card-carousel {
    width: 326px;
    height: 450px;
    margin-right: 20px
}

.image-card {
    object-fit: cover;
    width: 100%;
    height: 100%
}

.carousel-copy {
    display: flex
}

.h2-centered {
    text-align: center;
    width: 50%
}

.grid-sessions-1col {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    color: var(--nimbus);
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    max-width: 600px;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0
}

.grid-sessions-1col.on-dark {
    background-color: var(--neutral-10)
}

.gallery {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-flow: wrap;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.gallery-square {
    aspect-ratio: 1;
    object-fit: cover
}

.gallery-cell {
    width: 33%
}

.swiper-img {
    object-fit: contain;
    height: 100%
}

.dog-card {
    flex-flow: column;
    position: relative
}

.dog-tag {
    z-index: 2;
    background-color: var(--shadow-lite);
    color: var(--nimbus);
    text-transform: uppercase;
    width: 100%;
    margin-bottom: 0;
    padding: .5rem .5rem .5rem 1rem;
    font-family: Dmmono,sans-serif;
    font-size: .8rem;
    position: absolute;
    bottom: 0;
    left: 0
}

.text-color-light-3-2 {
    color: #fff
}

.video-wrapper-2-2 {
    transition: opacity .2s
}

.video-wrapper-2-2.crop-2 {
    transform: scale(1.01)
}

.ai-function-2-2 {
    background-color: #f0f0f0;
    justify-content: flex-start;
    align-items: flex-start;
    padding: .5rem 1rem;
    font-family: Dmmono,sans-serif
}

.image-cover-4-2 {
    object-fit: cover;
    width: 100%;
    height: 101%;
    transition: all .2s
}

.image-cover-4-2:hover {
    transform: none
}

.container-26-2 {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1248px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: block;
    position: relative
}

.container-26-2.align-center-4-2 {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex
}

.product-subheading-2-2 {
    color: #fff;
    text-align: center;
    letter-spacing: .5px;
    text-transform: uppercase;
    text-wrap: balance;
    margin-bottom: 2rem;
    font-family: Dmmono,sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.75rem
}

.underline-2-2 {
    border-bottom: 1px solid #292929
}

.nav-dropdown-list-2-2 {
    background-color: #0000;
    inset: 80px auto auto 0
}

.nav-dropdown-list-2-2.w--open {
    z-index: 1;
    transition: opacity .2s;
    position: absolute
}

.nav-dropdown-list-2-2.w--open:hover {
    color: #9fa8a7
}

.ai-function-header-2-2 {
    color: #f0f0f0;
    text-align: left;
    background-color: #3d3d3d;
    padding: .5rem 1rem
}

.simple-cta-link-3-2 {
    text-transform: uppercase;
    margin-bottom: 0;
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    line-height: 1.5rem;
    text-decoration: none;
    box-shadow: inset 0 -2px #fff
}

.simple-cta-link-3-2:hover {
    box-shadow: inset 0 -2px #f0ff45
}

.nav-dropdown_chevron-2-2 {
    display: none
}

.tertiary-link-light-2-2 {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    color: #f0f0f0;
    display: flex
}

.hero-img-vid-wrapper-2-2 {
    background-color: #292929;
    border-radius: 2px;
    max-width: 975px;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden
}

.nav-dropdown-list-column-2-2 {
    color: #fff;
    width: 25%
}

.border-left-2-2 {
    border-left: 1px solid #292929
}

.border-left-2-2.border-right-2-2.feature-single-column-2 {
    padding-top: 4rem;
    padding-left: 4rem;
    padding-right: 4rem
}

.resources-card-dark-2-2 {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    background-color: #3d3d3d;
    border: 1px solid #3d3d3d;
    border-radius: 0;
    flex-flow: column;
    align-items: stretch;
    padding: 24px 24px 0;
    transition: all .3s;
    display: flex
}

.resources-card-dark-2-2:hover {
    outline-offset: 0px;
    background-color: #29292900;
    border-style: solid;
    border-color: #464646;
    outline: 10px #3d3d3d
}

.resources-card-dark-2-2.text-color-light-3-2 {
    border-color: #3d3d3d;
    height: 100%;
    padding: 0
}

.resources-card-dark-2-2.text-color-light-3-2:hover {
    outline-offset: 0px;
    color: #9fa8a7;
    border-style: solid;
    outline: 0 solid #9fa8a7
}

.ai-function-definition-header-2-2 {
    color: #f0f0f0;
    text-align: left;
    background-color: #3d3d3d;
    padding: .5rem 1rem
}

.nav-link_text-link-2-2 {
    color: #171717;
    padding: 28px 0;
    font-family: Dmmono,sans-serif;
    font-size: .9rem;
    font-weight: 500;
    text-decoration: none;
    transition: all .2s;
    display: block;
    position: relative
}

.nav-link_text-link-2-2:hover {
    color: #9fa8a7
}

.nav-link_text-link-2-2:focus-visible,.nav-link_text-link-2-2[data-wf-focus-visible] {
    outline-offset: 1px;
    outline: 2px solid #4245ff
}

.nav-link_text-link-2-2.nav-mobile-only-2 {
    display: none
}

.no-padding-3-2 {
    grid-column-gap: 1rem;
    grid-row-gap: 6.3rem;
    grid-template-rows: auto;
    padding: 0
}

.no-padding-3-2.min-height-400-2 {
    min-height: 400px
}

.nav-dropdown-list-column_link_img-2-2 {
    border-left: 1px solid #292929;
    margin-left: .5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: .5rem;
    display: block
}

.nav-dropdown-list-column_link_img-2-2:hover {
    border-left-color: #9fa8a7
}

.navbar-2-2 {
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #292929;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
    padding-left: 0%;
    padding-right: 0%;
    display: flex
}

.nav-links_list-2-2 {
    z-index: 3;
    clear: none;
    margin-bottom: 0;
    list-style-type: none;
    display: flex;
    position: static
}

.border-right-2-2 {
    border-right: 1px solid #292929
}

.border-right-2-2.background-color-light-2-2.cell-position-relative-2 {
    justify-content: flex-end;
    align-items: flex-end
}

.feature-image-l-2-2 {
    aspect-ratio: 16/9;
    background-color: #9fa8a7;
    border-radius: 0;
    height: auto;
    overflow: hidden
}

.nav-dropdown_toggle-2-2 {
    grid-column-gap: 7px;
    grid-row-gap: 7px;
    color: #171717;
    cursor: default;
    border-radius: 4px;
    justify-content: flex-start;
    align-items: center;
    padding: 28px 20px 28px 25px;
    font-family: Dmmono,sans-serif;
    font-size: .9rem;
    font-weight: 400;
    transition: all .2s;
    display: flex
}

.nav-dropdown_toggle-2-2:focus-visible,.nav-dropdown_toggle-2-2[data-wf-focus-visible] {
    outline-offset: 2px;
    outline: 2px solid #4245ff
}

.nav-dropdown_toggle-2-2.w--open {
    color: #9fa8a7;
    transition-property: none
}

.nav-dropdown_toggle-2-2.extra-left-2 {
    padding-left: 50px
}

.nav-dropdown_toggle-2-2.extra-2 {
    padding-left: 70px;
    padding-right: 45px
}

.paragraph-1142-2 {
    display: flex
}

.align-center-4-2 {
    justify-content: center;
    display: flex
}

.paragraph-1143-2 {
    display: flex
}

.nav-dropdown-list-column_title-2-2 {
    color: #9fa8a7;
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
    padding-left: .5rem;
    font-family: Dmmono,sans-serif;
    font-size: .8rem
}

.background-color-white-2-2 {
    background-color: #fff
}

.background-color-white-2-2.grid-bottom-left-2 {
    padding-top: 2rem;
    padding-right: 1rem
}

.background-color-white-2-2.grid-bottom-right-2 {
    padding-top: 2rem;
    padding-left: 1rem
}

.background-color-white-2-2.grid-top-left-2 {
    padding-bottom: 1rem;
    padding-right: 1rem
}

.background-color-white-2-2.grid-top-right-2 {
    padding-bottom: 1rem;
    padding-left: 1rem
}

.ai-function-definition-2-2 {
    background-color: #f0f0f0;
    padding: .5rem 1rem
}

.grid-with-borders-2x2-2-2 {
    grid-column-gap: 1px;
    grid-row-gap: 1px;
    background-color: #3d3d3d;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

.striped-divider-2-2 {
    background-color: #292929;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66be5499067782d22fb41677_dark-horizon-lines.svg);
    background-position: 50% 0;
    background-repeat: repeat-x;
    background-size: 718px;
    background-attachment: scroll;
    width: 100%;
    height: 100px
}

.striped-divider-2-2.flipped-2 {
    transform-style: preserve-3d;
    background-color: #3d3d3d;
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/66be51b174d639c73b1a568f_dark-lines.svg);
    background-repeat: repeat-x;
    background-size: auto 150px;
    background-attachment: scroll;
    border-top: 1px solid #292929;
    transform: rotateX(180deg)rotateY(0)rotate(0)
}

.text-link-allcaps-4-2 {
    color: #292929;
    text-transform: uppercase;
    text-decoration: none;
    transition: all .2s;
    box-shadow: inset 0 -2px #292929
}

.text-link-allcaps-4-2:hover {
    box-shadow: inset 0 -11px #f0ff45
}

.text-link-allcaps-4-2.no-margin-bottom-2.text-size-small-2 {
    font-family: Dmmono,sans-serif;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none
}

.text-link-allcaps-4-2.no-margin-bottom-2.text-size-small-2.text-color-light-3-2 {
    color: #f0f0f0;
    box-shadow: inset 0 -2px #9fa8a7
}

.text-link-allcaps-4-2.no-margin-bottom-2.text-size-small-2.text-color-light-3-2:hover {
    box-shadow: inset 0 -4px #f0ff45
}

.nav-dropdown_toggle-carat-2-2 {
    z-index: 2;
    background-color: #f0ff45;
    border-color: #0000 #0000 #fff;
    width: 100%;
    height: 5px;
    display: none;
    position: absolute;
    top: 79px;
    left: 25px
}

.nav-dropdown-list-column_link-2-2 {
    color: #fff;
    max-width: 135px;
    margin-bottom: 7px;
    padding: .25rem 0 .25rem .5rem;
    font-family: Dmsans,sans-serif;
    font-size: 14px;
    line-height: 1.1rem;
    transition: all 40ms;
    display: block
}

.nav-dropdown-list-column_link-2-2:hover {
    color: #fff;
    -webkit-text-stroke-color: #fff;
    background-color: #ffffff1a
}

.nav-dropdown-list-column_link-2-2:active {
    color: #fff
}

.hero-dark-img-vid-2-2 {
    text-align: center;
    background-color: #3d3d3d;
    background-image: none;
    padding-top: 5rem;
    overflow: hidden
}

.hero-dark-img-vid-2-2.ai-2 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cdb41_BG%20Triangle.svg);
    background-position: 50% 111%;
    background-repeat: repeat-x;
    background-size: auto 289px
}

.page-tabs-border-section-2-2 {
    background-color: #fff;
    border: 1px solid #9fa8a7;
    width: 100%;
    max-width: 1000px;
    margin-bottom: 4rem;
    padding: 3rem 3rem 4rem;
    position: relative;
    overflow: hidden
}

.callout-3-column-2-2 {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    flex-flow: row;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid
}

.tab_menu_link_icon-2-2 {
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    text-transform: uppercase;
    background-color: #ddd0;
    border-bottom: 4px solid #dbdbdb;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    display: flex
}

.tab_menu_link_icon-2-2.w--current {
    background-color: #f0ff45;
    border-color: #000
}

.nav-logo-link-block-2-2 {
    width: 104px
}

.nav-logo-link-block-2-2:focus-visible,.nav-logo-link-block-2-2[data-wf-focus-visible] {
    outline-offset: 2px;
    border-radius: 4px;
    outline: 2px solid #4245ff
}

.nav-logo-link-block-2-2.w--current {
    border-radius: 4px
}

.ai-block-short {
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    border: 1px solid var(--stratus);
    background-color: var(--nimbus);
    flex-flow: column;
    padding: 1.5rem;
    display: flex
}

.div-block-240 {
    background-color: var(--shadow);
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68b0db9157be2c373b43dbdb_3c681f01c70ca5c888bcf92474196c23_build-with-ai.png);
    background-position: 70%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    min-height: 250px;
    padding-left: 2rem;
    display: flex
}

.div-block-241 {
    text-wrap: balance;
    width: 30%
}

.h2-large {
    text-wrap-style: balance;
    max-width: 850px;
    font-size: 5rem;
    line-height: 5rem
}

.coming-soon-tag {
    text-transform: uppercase;
    background-color: #ffffff1a;
    max-height: 26px;
    margin-top: .2rem;
    margin-left: 1rem;
    padding-left: .5rem;
    padding-right: .5rem;
    font-family: Dmmono,sans-serif;
    font-size: 12px
}

.coming-soon-tag.green {
    background-color: #4cec8c
}

.coming-soon-tag.pink {
    text-transform: uppercase;
    background-color: #ffcee6;
    padding-top: 0;
    padding-bottom: 0
}

.coming-soon-tag.sky {
    background-color: var(--sky);
    padding-top: 0;
    padding-bottom: 0
}

.coming-soon-tag.blue {
    background-color: var(--sky);
    color: var(--shadow)
}

.coming-soon-tag.grey {
    background-color: #c1c8c9
}

.coming-soon-tag.yellow {
    background-color: var(--insight);
    color: var(--shadow)
}

.coming-soon-tag.grey-stratus {
    background-color: var(--stratus)
}

.coming-soon-tag.gray-light {
    background-color: var(--nimbus)
}

.coming-soon-tag.white {
    background-color: var(--neutral-0);
    color: var(--shadow)
}

.coming-soon-tag.blue {
    background-color: #a8e8f3
}

.coming-soon-tag.white-outline {
    border: 1px solid #fff
}

.coming-soon-tag.yellow {
    background-color: #f0ff45
}

.coming-soon-tag.orange {
    background-color: #ff9a74;
    padding-top: 0;
    padding-bottom: 0
}

.coming-soon-tag.blue-2 {
    background-color: #a8e8f3
}

.coming-soon-tag.white-outline-2 {
    border: 1px solid #fff
}

.coming-soon-tag.yellow-2 {
    background-color: #f0ff45
}

.coming-soon-tag.orange-2 {
    background-color: #ff9a74;
    padding-top: 0;
    padding-bottom: 0
}

.product-shot-frame-sm {
    margin-top: 2.5rem;
    margin-left: 8rem;
    margin-right: 8rem;
    padding-top: 4rem;
    padding-left: 4rem;
    padding-right: 4rem
}

.product-shot-frame-sm.texture-1 {
    background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/68944ada4caf2f52c7be0f2d_gradient-background.svg);
    background-position: 0 0;
    background-size: auto
}

.heading-38 {
    text-wrap: pretty
}

.author-name {
    margin-bottom: -.3rem
}

@media screen and (min-width: 1280px) {
    body {
        font-size:18px;
        line-height: 1.75rem
    }

    h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
        line-height: 3.25rem
    }

    h3 {
        margin-bottom: 1rem
    }

    h4 {
        margin-bottom: .75rem;
        font-weight: 500
    }

    h5 {
        margin-bottom: .5rem;
        font-weight: 500
    }

    h6 {
        margin-bottom: .25rem
    }

    p {
        font-size: 1.125rem;
        line-height: 1.75rem
    }

    ol {
        color: var(--shadow);
        font-weight: 400
    }

    blockquote {
        border-top-style: none;
        border-top-width: 0;
        border-left-color: var(--insight);
        margin-top: 57px;
        margin-bottom: 57px;
        padding-top: 23px;
        padding-bottom: 23px
    }

    .container {
        grid-column-gap: 4.7px
    }

    .nav-dropdown_toggle,.nav-link_text-link {
        padding-top: 26px;
        padding-bottom: 26px
    }

    .section.no-padding-bottom {
        padding-bottom: 0
    }

    .section.background-color-nimbus {
        background-color: var(--nimbus)
    }

    .section.hero-templates {
        background-color: #fff
    }

    .section.background-color-gray-medium.data-apps-live.da-live {
        background-position: 50% 100%
    }

    .section.background-color-shadow-light.overflow-hidden.no-padding-bottom {
        background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9d7_bg_pattern_ai.svg);
        background-repeat: repeat-x;
        background-size: auto 280px
    }

    .section.small-padding {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .section.background-color-gray-light {
        background-color: #f0f0f0
    }

    .section.background-color-gray-light-copy-2 {
        background-color: #f8f8f8
    }

    .section.background-color-gray-light-2 {
        background-color: #f0f0f0
    }

    .section.customer-stories-hero {
        border-bottom: 1px none var(--shadow);
        background-color: var(--neutral-10);
        background-image: linear-gradient(#ffffffd6,#ffffffd6),url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9aa_sigma-footer-pattern1.svg);
        background-size: auto,50%
    }

    .section.background-color-nimbus-2,.section.background-color-light {
        background-color: #f0f0f0
    }

    .section.home-quote {
        padding-left: 0
    }

    .section.background-color-light,.section.background-color-light-2-2 {
        background-color: #f0f0f0
    }

    .infinite-marquee-wrapper.g-section-padding-large.padding-t-lrg {
        padding-top: .6rem;
        padding-bottom: .6rem
    }

    .infinite-marquee-logos.cc-badges {
        grid-column-gap: 60px
    }

    .u-img-contain {
        max-width: 140px;
        position: static
    }

    .modal-wrapper {
        display: none
    }

    .subprocessors-table {
        font-family: Dmsans,sans-serif
    }

    .sales-gif {
        position: relative
    }

    .padding-section-medium {
        font-family: Dmsans,sans-serif;
        line-height: 1.5rem
    }

    .text-align-center {
        font-family: Dmsans,sans-serif
    }

    .heading-style-h2 {
        letter-spacing: -1px;
        font-weight: 500
    }

    .text-weight-xbold {
        font-family: Dmsans,sans-serif
    }

    .max-width-medium-2 {
        margin-left: 0
    }

    .text-weight-medium,.text-align-left {
        font-family: Dmsans,sans-serif
    }

    .h1-larger {
        font-size: 4.25rem;
        line-height: 4.3rem
    }

    .text-align-right,.text-weight-light,.text-weight-semibold {
        font-family: Dmsans,sans-serif
    }

    .heading-style-h3 {
        font-size: 2.3rem
    }

    .button {
        font-size: 16px
    }

    .text-style-allcaps.text-size-small.text-color-white.text-family-mono {
        color: var(--nimbus)
    }

    .text-weight-bold {
        font-family: Dmsans,sans-serif
    }

    .dropdown_list {
        display: none
    }

    .filter_empty {
        display: block
    }

    .filter_wrapper {
        display: none
    }

    .heading-small-7.filter-heading-btn {
        font-family: Dmsans,sans-serif
    }

    .f-image-cover {
        box-shadow: none;
        border-radius: 0
    }

    .color-subtitle.pink {
        padding-top: 0;
        padding-bottom: 0
    }

    .color-subtitle.white-outline {
        border-color: var(--neutral-9);
        color: #c7c7c7;
        border-color: #8f8f8f
    }

    .color-subtitle.white-outline-2 {
        color: #c7c7c7;
        border-color: #8f8f8f
    }

    .text-link-allcaps.no-margin-bottom.text-size-small.no-underline {
        box-shadow: inset 0 0 0 0 var(--insight);
        font-weight: 500;
        text-decoration: none
    }

    .text-link-allcaps.no-margin-bottom.text-size-small.no-underline:hover {
        box-shadow: inset 0 -14px 0 0 var(--insight)
    }

    .div-block-141 {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .image-26 {
        margin-bottom: 18px
    }

    .h1-subpage-hero.text-color-light {
        color: var(--nimbus)
    }

    .h1-subpage-hero.text-color-light-3,.h1-subpage-hero.text-color-light-3-2 {
        color: #f0f0f0
    }

    .cta-block {
        grid-column-gap: 4rem;
        grid-row-gap: 4rem;
        justify-content: space-between;
        align-items: center
    }

    .nav-dropdown-list-column_title {
        padding-left: .5rem
    }

    .nav-dropdown-list-column_link {
        max-width: 165px
    }

    .nav-dropdown-list-ad {
        background-position: 110% 120%;
        background-size: auto 60%;
        width: 35%
    }

    .nav-dropdown-list-columns {
        max-width: 1168px;
        margin-left: auto;
        margin-right: auto
    }

    .no-margin-bottom {
        margin-bottom: 0
    }

    .background-color-gray-dark {
        background-color: #292929
    }

    .text-color-light.text-align-center.text-style-mono {
        font-family: Dmmono,sans-serif
    }

    .no-padding-top {
        padding-top: 0
    }

    .content-box-title {
        margin-top: .5rem
    }

    .no-padding {
        grid-column-gap: 4.7rem
    }

    .border-right.background-color-light-2.cell-position-relative {
        justify-content: flex-end;
        align-items: flex-end
    }

    .border-right.background-color-light-2.cell-position-relative.video {
        justify-content: center;
        align-items: center
    }

    .momentum-leader {
        justify-content: space-between;
        align-items: center
    }

    .momentum-leader-badges {
        flex: 1;
        justify-content: flex-start;
        align-items: center
    }

    .white {
        color: var(--nimbus)
    }

    .nav-separator {
        margin-left: .5rem
    }

    .hero-templates-copy {
        background-color: var(--nimbus)
    }

    .blog-home-quickstack {
        border-bottom: 1px solid #000;
        margin-bottom: 46px;
        padding-bottom: 9px
    }

    .lottie-animation-1 {
        z-index: -12
    }

    .attribution {
        margin-bottom: 0;
        line-height: 1.5rem
    }

    .tertiary-link {
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        display: flex
    }

    .link-arrow {
        width: 18px
    }

    .eyebrow {
        font-weight: 500;
        line-height: 20px
    }

    .eyebrow.text-color-nimbus {
        color: var(--nimbus)
    }

    .lottie-animation-2 {
        z-index: -12
    }

    .two-column-40-60 {
        grid-column-gap: 45px;
        padding: 0
    }

    .two-column-40-60.bottom-margin {
        padding-bottom: 69px
    }

    .lottie-animation-3,.lottie-animation-4,.lottie-animation-5 {
        z-index: -12
    }

    .b-card-prev:hover {
        background-color: var(--insight)
    }

    .b-card-slider {
        padding-bottom: 3rem
    }

    .b-card-slide {
        height: 100%
    }

    .b-card-slider-card {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        grid-template-rows: auto;
        grid-template-columns: 2.75rem 1fr;
        grid-auto-columns: 1fr;
        width: auto;
        height: 430px;
        padding-top: 0;
        padding-bottom: 0;
        display: grid
    }

    .b-card-vertical-bar {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        flex-flow: column;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
        max-height: 430px;
        display: flex;
        position: static
    }

    .card-content {
        justify-content: space-between;
        align-items: flex-start;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem
    }

    .b-icon-xsmall-card:hover {
        color: var(--shadow)
    }

    .button-2 {
        font-size: 16px
    }

    .product-hero-image-container {
        margin-top: 6rem
    }

    .tertiary-link-underlined {
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        display: flex
    }

    .no-padding-2 {
        grid-column-gap: 3.3rem
    }

    .u-img-contain-2 {
        max-width: none;
        position: static
    }

    .tab-link-2 {
        padding: 11px 23px
    }

    .tab-link-2.w--current {
        background-color: #f0ff45;
        border: 1px solid #292929;
        border-radius: 20px;
        padding: 3px 23px
    }

    .tab-title-2 {
        color: #292929;
        text-transform: uppercase;
        font-family: Dmsans,sans-serif;
        font-size: 13px;
        font-weight: 600
    }

    .cell-39-2 {
        grid-column-gap: 12px;
        grid-row-gap: 12px;
        justify-content: space-between;
        align-items: flex-start
    }

    .quick-stack-39-2 {
        grid-column-gap: 58px;
        width: 100%;
        padding: 0
    }

    .quick-stack-40-2 {
        grid-column-gap: 31px
    }

    .code-embed {
        background-color: #f7f7f7;
        padding: 60px
    }

    .code-embed-4 {
        justify-content: center;
        align-items: flex-start;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        position: relative
    }

    .tab-menue-white-2 {
        grid-column-gap: 12px;
        grid-row-gap: 12px;
        background-color: #fff;
        border-radius: 50px;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        padding: 0 9px;
        display: flex
    }

    .tab-link-2-2 {
        padding: 11px 23px
    }

    .tab-link-2-2.w--current {
        background-color: #f0ff45;
        border: 1px solid #292929;
        border-radius: 20px;
        padding: 3px 23px
    }

    .tab-title-2-2 {
        color: #292929;
        text-transform: uppercase;
        font-family: Dmsans,sans-serif;
        font-size: 13px;
        font-weight: 600
    }

    .no-padding-2-2 {
        grid-column-gap: 3.3rem
    }

    .u-img-contain-2-2 {
        max-width: none;
        position: static
    }

    .company-logo {
        width: 180px;
        max-width: 180px
    }

    .journey_card_image.right {
        width: 40%
    }

    .journey_card_image_img.left {
        width: auto
    }

    .nav-dropdown-list-column-link {
        max-width: 165px
    }

    .nav-dropdown-list-column-link:hover {
        color: #fff
    }

    .background-color-light-2.hide-on-3-show-on-2 {
        display: none
    }

    .text-style-mono.no-padding,.text-style-mono.hanging-punctuation {
        font-family: Dmmono,sans-serif
    }

    .text-style-mono.text-style-allcaps.text-size-tiny {
        -webkit-text-stroke-color: var(--insight)
    }

    .button-4 {
        font-size: 16px
    }

    .text-style-mono-2 {
        font-family: DM Mono
    }

    .grid-internal {
        margin-top: 0
    }

    .customer-logo-wrapper {
        background-color: var(--neutral-0);
        border-radius: 8px;
        padding: 18px
    }

    .customers-more-about {
        grid-column-gap: 7px;
        grid-row-gap: 7px;
        display: flex
    }

    .customer-link {
        box-shadow: inset 0 -2px 0 0 var(--shadow);
        text-decoration: none;
        transition: all .2s
    }

    .customer-link:hover {
        box-shadow: inset 0 -14px 0 0 var(--insight)
    }

    .customer-rich-text blockquote,.text-block-22-2 {
        font-family: Dmmono,sans-serif
    }

    .tab_menu {
        vertical-align: middle
    }

    .flex-left {
        flex-flow: column
    }

    .striped-divider-gray {
        background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9e6_light-lines.svg);
        background-position: 50% 100%;
        background-repeat: repeat-x;
        background-size: contain;
        background-attachment: scroll
    }

    .grid-col-2-3rem.home {
        max-width: 1200px
    }

    .tab-journey-card-inner {
        grid-auto-columns: 1fr
    }

    .tab-journey-text {
        justify-content: space-between;
        align-items: flex-start
    }

    .resource-card {
        grid-column-gap: 35px;
        grid-row-gap: 35px
    }

    .marquee-badges-awards {
        height: 110px
    }

    .hero-img-vid-wrapper.home {
        max-width: 1200px
    }

    .grid-internal-two-column {
        margin-top: 0
    }

    .quickstack-comparison.no-padding {
        grid-column-gap: 1px
    }

    .cta-block-center {
        justify-content: space-between;
        align-items: center
    }

    .form-description-copy {
        grid-column-gap: 27px;
        grid-row-gap: 27px;
        flex-flow: column;
        display: flex
    }

    .div-block-207-copy {
        position: sticky;
        top: 15px
    }

    .customer-video {
        aspect-ratio: auto
    }

    .nav-ad {
        margin-bottom: .5rem
    }

    .h1-hero.home {
        font-size: 4.5rem;
        line-height: 115%
    }

    .container-two-column {
        grid-column-gap: 4.7px
    }

    .large-quote-block.max {
        max-width: 45rem
    }

    .quick-stack-39-2-copy {
        grid-column-gap: 58px;
        width: 100%;
        padding: 0
    }

    .role-cell {
        grid-column-gap: 12px;
        grid-row-gap: 12px;
        justify-content: flex-start;
        align-items: flex-start
    }

    .nav-dropdown-list-related-link:hover {
        color: #fff
    }

    .bg-go-live-demo.text-color-primary {
        background-size: cover;
        border-radius: 20px
    }

    .demo-date {
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        margin-bottom: 1rem;
        display: flex
    }

    .text-style-bold {
        font-weight: 700
    }

    .button-5 {
        font-size: 16px
    }

    .quickstack-comparison-sticky.no-padding {
        grid-column-gap: 20px
    }

    .container-23 {
        grid-column-gap: 4.7px
    }

    .comparison-grid {
        margin-top: -1rem
    }

    .link-arrow-small {
        width: 18px
    }

    .frame-5904 {
        max-width: 1440px
    }

    .frame-48096597 {
        max-width: none
    }

    .frame-7764 {
        max-width: 1440px
    }

    .div-block-220 {
        background-color: var(--neutral-0)
    }

    .sitemap-link:hover {
        color: #fff
    }

    .text-color-sky {
        color: var(--sky)
    }

    .filter_header {
        display: none
    }

    .blog-nav {
        border-top: 5px solid var(--shadow);
        background-color: var(--nimbus);
        margin-bottom: 1rem
    }

    .blog-nav-list {
        flex-flow: wrap
    }

    .block-quote-3 {
        font-size: 2rem
    }

    .tab_menu_link_icon {
        border-bottom-color: var(--neutral-7)
    }

    .tab_menu_icons {
        vertical-align: middle
    }

    .prompt-left,.prompt-right,.text-block-35 {
        font-size: 16px
    }

    .text-style-sans.text-color-light.margin-top-bottom-tiny.max-width-350 {
        max-width: 350px
    }

    .industry-logo {
        width: 180px;
        max-width: 180px
    }

    .industry-logo-wrapper {
        background-color: var(--neutral-0);
        padding: 18px
    }

    .callout-flex.background-color-shadow-light.text-color-light {
        justify-content: flex-start;
        align-items: flex-start
    }

    .grid-sessions {
        margin-top: 0
    }

    .overview-image.left {
        width: auto
    }

    .learn-heading {
        font-size: 2.3rem
    }

    .list-4,.list-5 {
        font-size: 1.125rem
    }

    .session-watch.da-link-4,.session-watch.da-link-3 {
        display: block
    }

    .container-24 {
        grid-column-gap: 4.7px
    }

    .timestamp.pink {
        padding-top: 0;
        padding-bottom: 0
    }

    .timestamp.white-outline {
        border-color: var(--neutral-9);
        color: var(--neutral-8)
    }

    .video-caption {
        grid-column-gap: 4.7px
    }

    .video-header-smaller.home {
        max-width: 1200px
    }

    .grid-sessions-2col,.grid-sessions-3col {
        margin-top: 0
    }

    .button-cal-google,.button-cal-outlook,.button-cal-ics,.button-copy,.button-copy {
        font-size: 16px
    }

    .showcase-message {
        font-family: Dmsans,sans-serif
    }

    .momentum-btm {
        justify-content: flex-end;
        left: auto;
        right: 1rem
    }

    .momentum-left-top-v2 {
        max-width: 399px
    }

    .v-grid.v-icon {
        min-height: 100px
    }

    .overlay-subhead {
        line-height: 140%
    }

    .quick-stack-menu {
        padding-left: 0;
        padding-right: 0
    }

    .stack-relative {
        justify-content: center;
        align-items: center
    }

    .logos-quotes-block {
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        display: flex
    }

    .v-10 {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
    }

    .quote-box-wrapper {
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        display: flex
    }

    .h1-hero-25.home {
        font-size: 3.7rem
    }

    .logos-quotes-block-2 {
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        display: flex
    }

    .home-img-vid-wrapper.home {
        max-width: 1200px
    }

    .ai-overlay {
        grid-column-gap: 4.7px
    }

    .v-edge {
        background-color: var(--nimbus)
    }

    .v-grid-edge.v-icon {
        min-height: 100px
    }

    .max-1248 {
        width: 100%;
        max-width: 1248px;
        margin-left: auto;
        margin-right: auto
    }

    .section-quotes.no-padding-bottom {
        padding-bottom: 0
    }

    .section-quotes.background-color-nimbus {
        background-color: var(--nimbus)
    }

    .section-quotes.hero-templates {
        background-color: #fff
    }

    .section-quotes.background-color-gray-medium.data-apps-live.da-live {
        background-position: 50% 100%
    }

    .section-quotes.background-color-shadow-light.overflow-hidden.no-padding-bottom {
        background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9d7_bg_pattern_ai.svg);
        background-repeat: repeat-x;
        background-size: auto 280px
    }

    .section-quotes.small-padding {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .section-quotes.background-color-gray-light {
        background-color: #f0f0f0
    }

    .section-quotes.background-color-gray-light-copy-2 {
        background-color: #f8f8f8
    }

    .section-quotes.background-color-gray-light-2 {
        background-color: #f0f0f0
    }

    .section-quotes.customer-stories-hero {
        border-bottom: 1px none var(--shadow);
        background-color: var(--neutral-10);
        background-image: linear-gradient(#ffffffd6,#ffffffd6),url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4cd9aa_sigma-footer-pattern1.svg);
        background-size: auto,50%
    }

    .section-quotes.background-color-nimbus-2,.section-quotes.background-color-light {
        background-color: #f0f0f0
    }

    .home-product {
        grid-column-gap: 4.7px
    }

    .home-diff-sticky.diff2 {
        top: 60px
    }

    .home-diff-sticky.diff3 {
        top: 120px
    }

    .home-diff-sticky.diff4 {
        top: 180px
    }

    .home-diff-sticky.diff5 {
        top: 240px
    }

    .div-block-235 {
        margin-top: 2px
    }

    .button-8 {
        font-size: 16px
    }

    .color-subtitle-large.pink {
        padding-top: 0;
        padding-bottom: 0
    }

    .color-subtitle-large.white-outline {
        border-color: var(--neutral-9);
        color: var(--neutral-8)
    }

    .container-25 {
        grid-column-gap: 4.7px
    }

    .h1-subpage-left.text-color-light {
        color: var(--nimbus)
    }

    .gray-outline {
        border-color: var(--neutral-9);
        color: var(--neutral-8)
    }

    .container-26 {
        grid-column-gap: 4.7px
    }

    .nav-link_text-link-2 {
        padding-top: 26px;
        padding-bottom: 26px
    }

    .no-padding-3 {
        grid-column-gap: 4.7rem
    }

    .border-right-2.background-color-light-2.cell-position-relative {
        justify-content: flex-end;
        align-items: flex-end
    }

    .nav-dropdown_toggle-2 {
        padding-top: 26px;
        padding-bottom: 26px
    }

    .nav-dropdown-list-column_title-2 {
        padding-left: .5rem
    }

    .nav-dropdown-list-column_link-2 {
        max-width: 165px
    }

    .tab_menu_link_icon-2 {
        border-bottom-color: #dbdbdb
    }

    .grid-sessions-1col {
        margin-top: 0
    }

    .container-26-2 {
        grid-column-gap: 4.7px
    }

    .nav-link_text-link-2-2 {
        padding-top: 26px;
        padding-bottom: 26px
    }

    .no-padding-3-2 {
        grid-column-gap: 4.7rem
    }

    .border-right-2-2.background-color-light-2-2.cell-position-relative-2 {
        justify-content: flex-end;
        align-items: flex-end
    }

    .nav-dropdown_toggle-2-2 {
        padding-top: 26px;
        padding-bottom: 26px
    }

    .nav-dropdown-list-column_title-2-2 {
        padding-left: .5rem
    }

    .nav-dropdown-list-column_link-2-2 {
        max-width: 165px
    }

    .tab_menu_link_icon-2-2 {
        border-bottom-color: #dbdbdb
    }

    .coming-soon-tag.pink {
        padding-top: 0;
        padding-bottom: 0
    }

    .coming-soon-tag.white-outline {
        border-color: var(--neutral-9);
        color: #c7c7c7;
        border-color: #8f8f8f
    }

    .coming-soon-tag.white-outline-2 {
        color: #c7c7c7;
        border-color: #8f8f8f
    }

    .author-name {
        margin-bottom: -.5rem
    }
}

@media screen and (max-width: 991px) {
    h2 {
        font-size:2.5rem;
        line-height: 2.9rem
    }

    h4 {
        font-size: 1.25rem;
        line-height: 1.75rem
    }

    h5 {
        line-height: 1.5rem
    }

    h6 {
        line-height: 13px
    }

    .container {
        max-width: none
    }

    .container.background-color-gray-dark.margin-bottom-medium-lrg {
        margin-bottom: 3rem
    }

    .container-small.no-padding.flex-vertical {
        padding-left: 20px;
        padding-right: 20px
    }

    .button-secondary.cc-white:hover {
        border-color: var(--neutral-0);
        color: var(--neutral-0)
    }

    .button-secondary.cc-hero-button {
        margin-left: 10px
    }

    .section-hero-free-trial {
        background-image: none
    }

    .section-hero-free-trial.g-section-padding-medium.new-gray.launch-signup {
        background-size: 75%
    }

    .g-section-padding-medium {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .hero-free-trial_layout {
        grid-row-gap: 3.5rem;
        grid-template: "content""form"/1fr
    }

    .hero-free-trial_features-grid {
        grid-column-gap: 16px
    }

    .about-layout {
        grid-row-gap: 3rem;
        grid-template: "content""figure"/1fr
    }

    .footer.cc-landing {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .footer.section.related {
        margin-bottom: -1rem
    }

    .footer-link:hover {
        text-decoration: none
    }

    .navbar {
        z-index: 100;
        background-color: #fff0;
        height: 72px;
        padding-left: 15px;
        padding-right: 15px
    }

    .footer-landing-layout {
        grid-row-gap: 1rem;
        grid-template: "legal""social-links"/auto;
        justify-items: center
    }

    .footer-landing_legal-layout {
        grid-row-gap: 1rem;
        flex-direction: column
    }

    .home-logos_layout {
        grid-row-gap: 1.5rem;
        flex-wrap: wrap
    }

    .home-customer-logo {
        max-height: 32px
    }

    .buttons-wrapper {
        grid-row-gap: 1rem;
        flex-flow: wrap;
        justify-content: flex-start
    }

    .buttons-wrapper.cc-home {
        justify-content: center;
        display: flex
    }

    .buttons-wrapper.margin-top-tiny {
        flex-flow: column
    }

    .container-large {
        max-width: none;
        padding-left: 40px;
        padding-right: 40px
    }

    .hero-layout {
        grid-template: "title""content"/1fr
    }

    .values-list {
        column-count: 1
    }

    .values-list_item {
        display: block
    }

    .nav-container {
        max-width: none;
        padding-left: 0;
        padding-right: 0
    }

    .nav-links_list {
        background-color: var(--neutral-0);
        flex-direction: column;
        width: 100vw;
        height: 100%;
        padding-bottom: 200px;
        overflow: scroll
    }

    .nav-dropdown_toggle {
        border-bottom: 1px solid var(--neutral-7);
        justify-content: space-between;
        align-items: center;
        padding: 12px 1rem
    }

    .nav-dropdown_toggle.extra,.nav-dropdown_toggle.extra-left {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .nav-button-wrapper {
        display: none
    }

    .nav-dropdown-list {
        height: 0;
        padding-top: 0;
        transition: height .2s
    }

    .nav-dropdown-list.w--open {
        height: auto;
        position: relative;
        top: 0
    }

    .nav-dropdown-list_card-wrapper {
        box-shadow: none;
        min-height: 0;
        padding: 1rem
    }

    .nav-link_text-link {
        border-bottom: 1px solid var(--neutral-7);
        text-align: left;
        padding: 19px 1rem 19px 1.5rem
    }

    .nav-link_text-link.w--current {
        padding-left: 1.5rem
    }

    .nav-dropdown_chevron {
        color: var(--neutral-9);
        width: 36px;
        height: 36px;
        transition: transform .3s ease-in-out;
        display: block
    }

    .nav-hamburger_line {
        background-color: var(--neutral-12);
        width: 20px;
        height: 2px;
        padding: 0;
        position: absolute
    }

    .nav-hamburger_line.cc-1 {
        transform: translateY(-6px)
    }

    .nav-hamburger_line.cc-3 {
        transform: translateY(6px)
    }

    .side-tab-link {
        grid-column-gap: 16px
    }

    .side-tab-link:hover {
        background-color: var(--neutral-0)
    }

    .product-feature-item_image-wrapper {
        padding-top: 74%
    }

    .tabs-demo-usage-menu {
        grid-column-gap: 7.5rem;
        grid-row-gap: 7.5rem
    }

    .resource-content {
        flex-direction: column
    }

    .resource-content__left {
        width: 100%;
        margin-bottom: 3rem
    }

    .resource-content__right {
        width: 100%
    }

    .interactive-demos-nav {
        height: auto;
        padding-top: 20px;
        padding-bottom: 20px
    }

    .interactive-demos-nav_layout {
        grid-row-gap: 24px;
        flex-direction: column
    }

    .interactive-demos-tabs_menu {
        justify-content: flex-start;
        overflow: scroll
    }

    .interactive-demos-tabs_link {
        flex: none
    }

    .partner-item {
        max-width: 13rem;
        min-height: 0
    }

    .section-partner-info {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .resource-wrapper {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .section {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .section.no-padding-bottom {
        padding-bottom: 0
    }

    .section.background-color-yellow.border-bottom.data-apps-callout {
        background-image: none
    }

    .section.background-color-shadow-light.overflow-hidden.no-padding-bottom {
        height: 660px
    }

    .section.blog {
        background-size: 60%
    }

    .section.background-color-sky {
        background-size: 350px
    }

    .section.background-color-sky.worldtour-db {
        background-size: auto 180px
    }

    .section.background-color-sky.product-launch-header {
        background-size: 350px
    }

    .section.background-color-white.no-padding-top.margin-top-large.data {
        margin-top: 4rem
    }

    .section.data-apps-event-promo {
        background-position: 80% 0
    }

    .section.data-apps-header-light {
        background-size: auto 800px
    }

    .section.snowflake-summit-25,.section.snowflake-summit-25-2,.section.customer-awards,.section.databricks-summit-25 {
        background-size: auto 80%
    }

    .section.home-grid {
        padding-bottom: 3.5rem
    }

    .section.mq-form-backer {
        background-image: none;
        background-position: 0 0;
        background-repeat: repeat;
        background-size: auto
    }

    .section.home-quote {
        background-position: 0;
        padding-left: 10rem
    }

    .section.diff-architecture {
        background-size: 350px
    }

    .section.background-color-light,.section.background-color-light-2-2 {
        background-color: #f0f0f0
    }

    .newsroom-link-wrapper:hover {
        background-color: #f8f8f800
    }

    .retailers-card {
        grid-template: "icon""title""description""cta"/1fr
    }

    .text-only-hero-layout {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    .what-is-embedded-analytics-list_item {
        grid-template: "title""content"/1fr
    }

    .collection-filters-layout {
        grid-column-gap: 16px;
        grid-template-columns: 2fr 6fr
    }

    .announcements-list-layout {
        grid-row-gap: 2rem;
        grid-template-columns: 1fr
    }

    .slider-item.cc-width-30pc {
        width: 47.5%
    }

    .slider-track {
        width: 100vw;
        margin-left: -40px;
        padding-left: 40px;
        padding-right: 40px
    }

    .slider-buttons {
        align-items: stretch;
        margin-bottom: 16px;
        padding-top: 0;
        position: static
    }

    .slider-arrow {
        color: var(--neutral-12)
    }

    .col.col-md-4 {
        flex-basis: 33.33%;
        max-width: 33.3333%
    }

    .col.col-lg-4.col-md-6.col-sm-12 {
        padding-left: 0;
        padding-right: 0
    }

    .col.col-md-8 {
        flex-basis: 66.67%;
        max-width: 66.6667%
    }

    .col.col-md-7 {
        flex-basis: 58.33%;
        max-width: 58.3333%
    }

    .col.col-md-10 {
        flex-basis: 83.33%;
        max-width: 83.3333%
    }

    .col.col-md-5 {
        flex-basis: 41.67%;
        max-width: 41.6667%
    }

    .col.col-md-12 {
        flex-basis: 100%;
        max-width: 100%
    }

    .col.col-md-12._2-col-top {
        flex-flow: column
    }

    .col.col-lg-8.blog-header {
        flex-basis: 83.33%;
        max-width: 83.33%
    }

    .col.col-md-6 {
        flex-basis: 50%;
        max-width: 50%
    }

    .col.col-md-first {
        order: -1
    }

    .row.justify-center {
        grid-column-gap: 24px;
        grid-row-gap: 24px;
        margin-left: 0;
        margin-right: 0
    }

    .row.columns._2col-form {
        grid-template-columns: 1fr
    }

    .faqs-side-tab-link {
        grid-column-gap: 16px
    }

    .faqs-side-tab-link:hover {
        background-color: var(--neutral-1)
    }

    .g-show-tablet-below {
        font-size: 32px
    }

    .faqs-side-tab-articles-link {
        grid-column-gap: 16px;
        padding-left: 24px
    }

    .faqs-side-tab-articles-link:hover {
        background-color: var(--neutral-1)
    }

    .logo-aspect-ratio {
        width: 125px
    }

    .logo-contain {
        padding-left: 30px;
        padding-right: 30px
    }

    .hero-default-layout {
        grid-template: "title""figure""cta"/1fr
    }

    .hero-default-layout.python {
        grid-template-columns: 6.5fr
    }

    .flex-horizontal.justify-space-between {
        display: block
    }

    .u-mb-0 {
        margin-bottom: 0
    }

    .g-section-padding-xsmall {
        padding-top: 0;
        padding-bottom: 0
    }

    .navbar-neutral-12 {
        z-index: 100;
        height: 72px;
        position: relative;
        top: 0
    }

    .it-admin-content-layout {
        grid-column-gap: 32px;
        grid-template-columns: 1fr 1fr
    }

    .main-nav-wrapper {
        height: 72px
    }

    .g2-desktop-report-img {
        display: block
    }

    .section-python-features {
        padding-left: 12px;
        padding-right: 12px
    }

    .content-align-center {
        align-items: center
    }

    .pricing-check-cell {
        width: 15%;
        padding-left: 10px;
        padding-right: 10px
    }

    .pricing-description-cell-2 {
        padding: 20px
    }

    .matrix-title {
        font-size: 1.5vw
    }

    .matrix-copy {
        font-size: 2vw
    }

    .tableau-e-book {
        padding-left: 12px;
        padding-right: 12px
    }

    .impact-award-img {
        margin-bottom: 20px
    }

    .padding-section-medium {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .margin-vertical {
        margin-left: 0;
        margin-right: 0
    }

    .padding-section-large {
        padding-top: 6rem;
        padding-bottom: 6rem
    }

    .margin-bottom {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0
    }

    .padding-top {
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0
    }

    .text-rich-text h3 {
        font-size: 2.2rem
    }

    .text-rich-text h4 {
        font-size: 1.6rem
    }

    .text-rich-text h5 {
        font-weight: 500
    }

    .padding-section-large-2 {
        padding-top: 6rem;
        padding-bottom: 6rem
    }

    .spacer-xxhuge {
        padding-top: 8rem
    }

    .spacer-xhuge {
        padding-top: 6rem
    }

    .margin-horizontal {
        margin-top: 0;
        margin-bottom: 0
    }

    .padding-bottom {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    .fs-styleguide_heading-header {
        font-size: 4rem
    }

    .fs-styleguide_section {
        grid-column-gap: 2.5rem;
        grid-template-columns: 1fr
    }

    .padding-vertical {
        padding-left: 0;
        padding-right: 0
    }

    .padding-horizontal {
        padding-top: 0;
        padding-bottom: 0
    }

    .spacer-medium {
        padding-top: 1.5rem
    }

    .spacer-xxlarge {
        padding-top: 4rem
    }

    .spacer-huge {
        padding-top: 5rem
    }

    .margin-xxlarge {
        margin: 4rem
    }

    .h1-larger {
        font-size: 2.5rem;
        line-height: 3.25rem
    }

    .padding-xhuge {
        padding: 6rem
    }

    .padding-xxhuge {
        padding: 8rem
    }

    .padding-large {
        padding: 2.5rem
    }

    .spacer-xlarge {
        padding-top: 3rem
    }

    .margin-xxhuge {
        margin: 8rem
    }

    .fs-styleguide_2-col {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-columns: 1fr
    }

    .margin-large {
        margin: 2.5rem
    }

    .fs-styleguide_heading-medium {
        font-size: 3rem
    }

    .margin-xlarge {
        margin: 3rem
    }

    .button.hide-mobile-tablet {
        display: none
    }

    .button.product-launch-feature-btn {
        margin-top: 50%
    }

    .margin-medium {
        margin: 1.5rem
    }

    .padding-left {
        padding-top: 0;
        padding-bottom: 0;
        padding-right: 0
    }

    .nav_button {
        color: #fff
    }

    .padding-medium {
        padding: 1.5rem
    }

    .padding-xxlarge {
        padding: 4rem
    }

    .fs-styleguide_4-col,.fs-styleguide_3-col {
        grid-template-columns: 1fr
    }

    .margin-huge {
        margin: 5rem
    }

    .margin-top {
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0
    }

    .margin-xhuge {
        margin: 6rem
    }

    .padding-huge {
        padding: 5rem
    }

    .margin-right {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0
    }

    .hide-tablet-2 {
        display: none
    }

    .max-width-full-tablet {
        width: 100%;
        max-width: none
    }

    .padding-xlarge {
        padding: 3rem
    }

    .margin-left {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0
    }

    .spacer-large {
        padding-top: 2.5rem
    }

    .fs-styleguide_1-col {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem
    }

    .padding-right {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0
    }

    .fs-style_form-block-icon {
        width: 2.25rem
    }

    .fs-style_grid-row {
        grid-template-columns: 1fr
    }

    .fs-style_components {
        padding-top: 5rem;
        padding-bottom: 5rem
    }

    .fs-rangeslider_handle-left-4,.fs-rangeslider_handle-left-2 {
        width: 2rem;
        height: 2rem
    }

    .fs-style_row.is-sort {
        grid-auto-flow: row;
        place-items: start
    }

    .fs-style_grid-column {
        grid-template-columns: 1fr
    }

    .fs-style_dropdown {
        max-width: none
    }

    .fs-rangeslider_handle-left-3 {
        width: 2rem;
        height: 2rem
    }

    .footer_wrapper {
        grid-template-columns: 1fr 1fr;
        align-items: flex-start
    }

    .fs-style_form-wrapper {
        grid-row-gap: 1.25rem;
        grid-template-columns: 1fr
    }

    .fs-rangeslider_handle-right-2 {
        width: 2rem;
        height: 2rem
    }

    .fs-style_form-block {
        font-size: 1.5rem
    }

    .fs-rangeslider_handle-right-3,.fs-rangeslider_handle-1 {
        width: 2rem;
        height: 2rem
    }

    .hide_this_block {
        grid-auto-flow: row
    }

    .fs-rangeslider_handle-right-4 {
        width: 2rem;
        height: 2rem
    }

    .footer_grid {
        flex-flow: wrap;
        flex: 1;
        grid-template-columns: 1fr;
        grid-auto-flow: row;
        justify-items: start;
        display: flex
    }

    .content_collection-list {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        grid-template-columns: 1fr 1fr
    }

    .filter_grid {
        grid-template-columns: .66fr 1fr
    }

    .filter_column {
        border-style: solid;
        border-width: 0
    }

    .filter_wrapper,.filter_block {
        width: 100%
    }

    .filter_block-header {
        align-items: start;
        padding-left: 1rem
    }

    .filter_options {
        display: none
    }

    .dropdown-3,.filter-toggle,.sort-by {
        width: 100%
    }

    .f-image-cover {
        object-fit: contain
    }

    .dropdown-carrot {
        display: none
    }

    .grid-col-5 {
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        grid-template-columns: 1fr 1fr 1fr
    }

    .journey-card-line-divider {
        height: 75px
    }

    .striped-divider {
        height: 100px
    }

    .form-h {
        flex-direction: column;
        align-items: stretch
    }

    .email-signup.section {
        padding-top: 5rem;
        padding-bottom: 8rem
    }

    .feature-block {
        width: 100%
    }

    .text-link-allcaps.no-margin-bottom.text-size-small {
        font-size: .9rem
    }

    .tabs-content-4 {
        width: 95%;
        display: block
    }

    .quote {
        font-size: 32px;
        line-height: 38px
    }

    .h1-subpage-hero {
        font-size: 3rem;
        line-height: 3.75rem
    }

    .h1-subpage-hero.text-color-light,.h1-subpage-hero.text-color-light-3,.h1-subpage-hero.text-color-light-3-2 {
        line-height: 3.5rem
    }

    .cta-block {
        text-align: center;
        display: block
    }

    .card-expand-on-hover {
        margin-bottom: 2rem
    }

    .accordian-dropdown {
        width: 100%
    }

    .nav-dropdown-list-column {
        border-top: 0 solid #333;
        border-left: 0 solid #333;
        border-right: 0 solid #333;
        width: 100%;
        padding-top: .15rem;
        padding-bottom: .15rem
    }

    .nav-dropdown-list-column_title {
        margin-bottom: 0;
        padding-left: .5rem
    }

    .nav-dropdown-list-column_links {
        padding-left: .5rem;
        display: none
    }

    .nav-dropdown-list-column_link {
        max-width: 100%;
        padding-left: 0
    }

    .nav-dropdown-list-ad {
        background-position: 100% 120%;
        background-size: auto 70%;
        width: 100%;
        margin-top: 1rem;
        display: block;
        position: relative
    }

    .nav-dropdown-list-columns {
        padding-left: 0;
        padding-right: 0;
        display: block
    }

    .nav-dropdown_text {
        padding-left: .5rem
    }

    .nav-dropdown-list-column_title_wrapper {
        justify-content: space-between;
        align-items: center;
        display: flex
    }

    .team-collection-list {
        grid-template-columns: 1fr 1fr 1fr
    }

    .text-family-mono.text-size-tiny {
        line-height: 1.2rem
    }

    .text-size-xl {
        font-size: 2.5rem;
        line-height: 3rem
    }

    .filter-buttons {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        grid-auto-columns: 1fr;
        display: flex
    }

    .container-9 {
        max-width: none;
        padding-left: 40px;
        padding-right: 40px
    }

    .no-padding.min-height-400 {
        min-height: 360px
    }

    .no-padding.margin-top {
        grid-row-gap: 2rem;
        margin-top: 73px
    }

    .border-left.feature-padding {
        padding: 1.5rem
    }

    .border-right.background-color-light-2.cell-position-relative {
        justify-content: flex-end;
        align-items: flex-end
    }

    .cta-block-buttons {
        margin-top: 2rem
    }

    .background-color-light.padding-small {
        padding-top: 0
    }

    .margin-top-medium {
        margin-top: 3rem
    }

    .margin-top-bottom {
        margin-top: 2rem;
        margin-bottom: 2rem
    }

    .momentum-leader {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        justify-content: flex-start;
        align-items: stretch;
        margin-left: auto;
        margin-right: auto;
        display: flex
    }

    .image-full-width {
        width: auto;
        min-height: auto;
        max-height: none
    }

    .flex-spaceb-flex.margin-top-bottom {
        grid-column-gap: .6rem;
        grid-row-gap: .6rem;
        flex-flow: row;
        justify-content: space-between;
        align-items: stretch;
        display: flex
    }

    .email-form-inputs {
        display: block
    }

    .nav-hamburger {
        box-sizing: content-box;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        padding: 20px 15px 20px 100px;
        display: flex;
        left: 15px
    }

    .page-tabs-sticky {
        display: none
    }

    .lottie-animation-1 {
        top: -10%;
        right: -5%
    }

    .eyebrow {
        font-size: .9rem
    }

    .lottie-animation-2 {
        bottom: -5%;
        left: -5%
    }

    .lottie-animation-3 {
        top: -5%;
        right: -5%
    }

    .lottie-animation-4 {
        bottom: -5%;
        left: -5%
    }

    .lottie-animation-5 {
        top: -5%;
        right: -5%
    }

    .container-10 {
        max-width: none
    }

    .product-hero-image-container {
        flex-flow: column;
        justify-content: center;
        align-items: flex-end;
        display: flex;
        position: relative
    }

    .f-footer-large-grid {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 1rem;
        margin-bottom: 1rem
    }

    .f-footer-block.no-header {
        margin-top: 0
    }

    .quick-stack-38-2-2 {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        height: 300px
    }

    .cell-39-2 {
        justify-content: flex-start;
        align-items: flex-start
    }

    .quick-stack-40-2 {
        grid-column-gap: 32px
    }

    .journey_card_text.left {
        width: auto;
        padding: 3rem 2rem 2rem 3rem
    }

    .journey_card_text.right {
        width: auto;
        padding: 3rem 3rem 2rem 2rem
    }

    .journey_card_image {
        border-top: 1px solid var(--nimbus);
        text-align: center;
        width: auto;
        max-height: 275px
    }

    .journey_card_image.right {
        width: auto;
        padding-left: 26px
    }

    .journey_card_image.left {
        width: auto;
        padding-right: 26px
    }

    .journey_card_inner {
        min-height: 0;
        display: block
    }

    .journey_card_inner.text-right {
        min-height: 0
    }

    .journey_card_image_img.right {
        width: 100%;
        display: inline-block;
        position: relative
    }

    .journey_card_image_img.right.bottom-align {
        width: 100%
    }

    .journey_card_image_img.left {
        width: 100%;
        display: inline-block;
        position: relative
    }

    .journey_card_content {
        border-width: 1px
    }

    .journey_card_color_bar.left {
        border-right-width: 1px
    }

    .journey_card_color_bar.right {
        border-left-width: 1px
    }

    .nav-dropdown-list-column-link {
        max-width: 100%
    }

    .countdown-container {
        max-width: none
    }

    .countdown-grid {
        grid-template-columns: 1fr
    }

    .countdown-side-right {
        border-radius: 16px;
        width: 100%;
        padding-top: 60px;
        padding-bottom: 60px;
        position: relative
    }

    .background-color-light-2.hide-on-3-show-on-2 {
        display: none
    }

    .product-subheading {
        max-width: 590px;
        margin-left: auto;
        margin-right: auto
    }

    .text-style-mono.no-padding.centering-mobile {
        justify-content: center;
        align-items: flex-start
    }

    .image-absolute-contain {
        width: 100%;
        position: absolute
    }

    .customer-rich-text blockquote {
        padding-left: 46px;
        padding-right: 46px;
        font-size: 2.4rem;
        line-height: 2.7rem
    }

    .tab_menu.background-color-nimbus,.tab_menu.background-color-white {
        flex-flow: wrap;
        display: flex
    }

    .tab_menu_link {
        padding-left: 12px;
        padding-right: 12px;
        font-size: 13px
    }

    .wrapper-partner-logo {
        width: 80%
    }

    .container-13 {
        max-width: none;
        padding-left: 40px;
        padding-right: 40px
    }

    .row-3 {
        flex-flow: wrap-reverse
    }

    .template-thumbnail {
        max-width: 100%;
        display: none
    }

    .template-thumbnail.show {
        display: block
    }

    .resources-3-column {
        grid-template-columns: 1fr 1fr
    }

    .page-tabs-border-section {
        margin-bottom: 2rem
    }

    .max-width-half.float-center {
        margin-left: auto;
        margin-right: auto
    }

    .max-width-half.text-align-center {
        max-width: 75%
    }

    .padding-top-tiny.padding-bottom-lrg {
        margin-bottom: 1.1rem
    }

    .striped-divider-gray {
        height: 110px
    }

    .grid-col-2-4rem.margin-bottom-medium {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem
    }

    .padding-top-medium {
        padding-top: 3rem
    }

    .grid-col-2-3rem {
        grid-template-columns: .7fr .75fr
    }

    .row-4 {
        flex-flow: wrap-reverse
    }

    .container-22 {
        max-width: none;
        padding-left: 40px;
        padding-right: 40px
    }

    .container-22.g-mg-bottom-xxlarge.weekly-webinar-header {
        display: none
    }

    .container-22.g-mg-bottom-xxlarge.weekly-webinar-header.weekly-webinar-mobile {
        width: 90%;
        margin-left: 40px;
        margin-right: 40px;
        display: block
    }

    .footer-logo-tagline {
        margin-bottom: 2.5rem
    }

    .tab-journey-sticky-nav {
        display: none
    }

    .tab-journey-card {
        min-height: 0;
        padding-top: 8rem
    }

    .tab-journey-card.first {
        padding-top: 4rem
    }

    .resource-card {
        max-width: 20.5rem;
        min-height: auto;
        padding: 1rem
    }

    .resource-card.tablet-hidden {
        display: none
    }

    .legal-container {
        width: 100%;
        padding-left: .5rem;
        padding-right: .5rem
    }

    .image-wrapper.snowpark {
        display: none
    }

    .compare-description {
        margin-top: 0
    }

    .compare-section {
        flex-flow: column
    }

    .resources-3-columns {
        grid-template-columns: 1fr 1fr
    }

    .hero-img-vid-wrapper {
        max-width: 36rem;
        margin-top: 3rem
    }

    .hero-dark-img-vid {
        padding-top: 3rem
    }

    .hero-dark-img-vid.embedded-analytics {
        background-size: auto 200px
    }

    .comparison-heading-bar {
        flex: 1
    }

    .comparison-header-sticky {
        top: 0
    }

    .quickstack-comparison {
        padding-left: 0;
        padding-right: 0
    }

    .quick-stack-45 {
        padding: 0
    }

    .cell-55 {
        border-right: 1px solid #f0f0f063
    }

    .impact-awards-grid {
        grid-column-gap: 16px
    }

    .image-55-2 {
        inset: -3% 3% auto auto
    }

    .div-block-202-2 {
        position: relative
    }

    .cta-block-center {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem;
        text-align: center;
        display: flex
    }

    .content-box {
        border-width: 1px
    }

    .page-tab-list {
        padding-left: 1rem
    }

    .nav-spacer {
        height: 73px;
        display: none
    }

    .button-flex-center {
        flex-flow: wrap
    }

    .quick-stack-47 {
        grid-row-gap: 48px
    }

    .cell-63 {
        display: flex
    }

    .template-preview-section {
        height: 330px;
        display: block;
        position: relative
    }

    .data-apps,.embedded,.dashboards {
        background-size: auto 200px
    }

    .announcement-text {
        text-align: left
    }

    .margin-bottom-medium-lrg {
        padding-bottom: 3rem
    }

    .by-the-numbers {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    .h1-hero {
        font-size: 2.5rem;
        line-height: 2.9rem
    }

    .h1-hero.home {
        font-size: 2.8rem
    }

    .announcements {
        width: 100%
    }

    .container-two-column {
        max-width: none
    }

    .div-block-211 {
        width: 40%
    }

    .icon-card {
        grid-template: "icon""title""description""cta"/1fr
    }

    .large-quote-block {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .quick-stack-41-copy {
        grid-column-gap: 23px
    }

    .quickstack-mobile {
        grid-column-gap: 26px
    }

    .role-cell {
        justify-content: flex-start;
        align-items: flex-start
    }

    .image-69 {
        height: 100%
    }

    .footer-related-links {
        margin-top: .5rem;
        overflow: hidden
    }

    .f-footer-related {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        grid-template-columns: 1fr;
        margin-top: 1rem;
        margin-bottom: 1rem
    }

    .nav-dropdown-list-related-link {
        width: 100%;
        max-width: 100%
    }

    .div-block-216 {
        width: 100%
    }

    .flex-50 {
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start
    }

    .virtual-demo {
        border-width: 1px
    }

    .quickstack-comparison-sticky {
        padding-left: 0;
        padding-right: 0
    }

    .jumplinks-wrapper {
        grid-row-gap: 1rem;
        flex-flow: wrap;
        justify-content: flex-start
    }

    .jumplinks-wrapper.cc-home {
        justify-content: center;
        display: flex
    }

    .jumplinks-wrapper.margin-top-tiny {
        flex-flow: column
    }

    .featured-events {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column
    }

    .featured-event-link {
        width: 100%
    }

    .container-23 {
        max-width: none
    }

    .button-row.text-style-allcaps.text-size-tiny {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem
    }

    .event-date-large {
        font-size: 2rem
    }

    .cell-65 {
        justify-content: flex-start;
        align-items: flex-end
    }

    .worldtour-header-img {
        height: 360px
    }

    .worldtour-header.padding-large {
        margin-top: 2rem
    }

    .text-size-huge {
        font-size: 4rem;
        line-height: 4rem
    }

    .blog-table-of-contents {
        display: none
    }

    .blog-stack {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .product-launch-paragraph {
        width: 80%
    }

    .filter_header {
        width: 100%
    }

    .filter_options_inline {
        display: block
    }

    .filter_options_inline.library-key {
        display: flex
    }

    .top-aligned-callout {
        flex-flow: column;
        justify-content: flex-start;
        align-items: center
    }

    .callout-text-cta {
        text-align: center
    }

    .blog-collection-list {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .blog-nav {
        flex-flow: wrap;
        padding-top: 1rem
    }

    .blog-nav-link {
        padding-top: 0
    }

    .blog-nav-link:hover {
        box-shadow: none
    }

    .blog-category-list {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .feature-ad-block-blog {
        background-position: -200px 100%;
        background-repeat: repeat-y;
        background-size: auto 90%;
        padding: 2rem 1rem 2rem 2rem
    }

    .blog-nav-leader,.blog-search {
        padding-top: 0
    }

    .template-sm-title {
        font-size: 1rem;
        line-height: 1.2rem
    }

    .press-interview-thumb {
        height: 100%
    }

    .blog-category-list-3 {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .page-tabs-border-section-flex.page-tab-tall {
        height: 500px
    }

    .partner-databricks {
        background-size: auto 200px
    }

    .page-tabs-quote-callout {
        width: 80%;
        margin-bottom: 2rem
    }

    .page-tabs-quote-callout.page-tab-tall {
        height: 500px
    }

    .library-box-feature {
        border-width: 1px;
        width: 100%
    }

    .fullwidth-image-tabs {
        width: 100%
    }

    .tab_menu_link_icon {
        padding-left: 12px;
        padding-right: 12px;
        font-size: 13px
    }

    .tab_menu_icons.background-color-nimbus,.tab_menu_icons.background-color-white {
        flex-flow: wrap;
        display: flex
    }

    .ai-functions {
        width: 100%
    }

    .prompt-container.hide {
        display: none
    }

    .prompt-animation {
        flex-flow: column;
        justify-content: center;
        align-items: center;
        min-height: 200px;
        max-height: 200px
    }

    .prompt-left,.prompt-right {
        text-align: center
    }

    .feature-padding-centered {
        padding: 1.5rem
    }

    .tabs-content {
        min-height: 0
    }

    .video-callout {
        padding-top: 0
    }

    .library-collection-2col {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .library-box-category {
        border-width: 1px
    }

    .library {
        background-size: 60%
    }

    .library-key {
        justify-content: center;
        align-items: center
    }

    .template-preview-image {
        max-width: 100%;
        display: none
    }

    .template-preview-image.show {
        display: block
    }

    .featured-event-title {
        padding-bottom: 0
    }

    .mobile-button {
        display: flex
    }

    .survey-column-left {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .survey-layout {
        grid-row-gap: 3.5rem;
        grid-template: "content""form"/1fr
    }

    .survey-embed.hide-mobile-tablet {
        display: none
    }

    .survey-description {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .show-mobile-landscape-tablet {
        display: flex
    }

    .quote-side-by-side {
        width: 100%;
        margin-bottom: 2rem
    }

    .quote-side-by-side.page-tab-tall {
        height: 500px
    }

    .quotes-side-by-side {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .centered-header {
        margin-left: 0%;
        margin-right: 0%
    }

    .hide-mobile-tablet {
        display: none
    }

    .hero-light-img-vid {
        padding-top: 3rem
    }

    .hero-light-img-vid.embedded-analytics {
        background-size: auto 200px
    }

    .spacer-4rem {
        height: 2rem
    }

    .blog-sticky-ad {
        display: none
    }

    .data-apps-conf-header {
        margin-bottom: 2rem
    }

    .callout-3-column {
        grid-template-columns: 1fr 1fr
    }

    .data-apps-session-block.data-apps-colspan-2 {
        padding-right: 14rem
    }

    .data-apps-session-block.large {
        background-size: 160px
    }

    .data-app-stats {
        width: 100%
    }

    .nav-group-spacer {
        height: 5px;
        display: block
    }

    .subhead-left {
        max-width: 590px;
        margin-left: auto;
        margin-right: auto
    }

    .gartner-header {
        font-size: 1.8rem
    }

    .overview-image {
        max-height: 400px
    }

    .overview-image.right {
        width: 100%;
        display: inline-block;
        position: relative
    }

    .overview-image.right.bottom-align {
        width: 100%
    }

    .overview-image.left {
        width: 100%;
        display: inline-block;
        position: relative
    }

    .overview-block.page-tab-tall,.sticky-card.page-tab-tall {
        height: 500px
    }

    .data-apps-schedule {
        grid-template-columns: 1fr 1fr
    }

    .data-apps-countdown.justify-space-between {
        display: block
    }

    .learn-nav-sticky {
        width: 40%
    }

    .mardness-promo {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        margin-right: 16rem;
        font-size: 14px
    }

    .container-24 {
        max-width: none
    }

    .resources-2-column {
        grid-template-columns: 1fr 1fr
    }

    .sticky-left-list {
        width: 40%
    }

    .video-caption {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        flex-flow: column;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
        max-width: none;
        display: grid
    }

    .state-of-bi-book-2025 {
        width: 400px;
        margin-left: auto
    }

    .video-header-smaller {
        max-width: 36rem;
        margin-top: 3rem
    }

    ._100m-arr-columns {
        grid-row-gap: 3.5rem;
        grid-template: "content""form"/1fr
    }

    ._100m-arr-grid-get {
        grid-column-gap: 16px
    }

    ._100m-arr-grid-section {
        flex-flow: column
    }

    ._100m-arr-paragraph-dark {
        width: auto;
        margin-right: 4rem
    }

    ._100m-arr-what-you-get-dark {
        width: auto;
        margin-left: 2rem;
        margin-right: 2rem
    }

    .blog-feature-header-custom-2nd {
        font-size: 2rem
    }

    .session-block-dark.data-apps-colspan-2 {
        padding-right: 14rem
    }

    .session-block-dark.large {
        background-size: 160px
    }

    .summit-session-header {
        margin-right: 1rem
    }

    .spring-showcase-paragraph {
        width: 80%
    }

    .video-embed-height {
        min-height: 35vh
    }

    .button-copy.hide-mobile-tablet {
        display: none
    }

    .showcase-message {
        width: 80%
    }

    .momentum-btm {
        justify-content: space-between;
        align-items: center;
        max-width: 95.5%;
        display: flex
    }

    .momentum-left-top-v2 {
        text-align: center;
        max-width: 399px
    }

    .momentum-right-btm-v2 {
        text-align: center;
        justify-content: center;
        align-self: center;
        align-items: flex-start;
        min-width: 399px;
        display: flex
    }

    .momentum-leader-v2 {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        display: flex
    }

    .overlay-subhead {
        width: 40%;
        font-size: 1.5rem
    }

    .schedule-block {
        display: flex
    }

    .schedule-minimal {
        flex-flow: row
    }

    .schedule-2col {
        width: 100%;
        margin-bottom: 0;
        display: flex
    }

    .h1-hero-25 {
        font-size: 3.5rem
    }

    .h1-hero-25.home {
        font-size: 2.6rem
    }

    .home-callouts {
        flex-flow: column
    }

    .home-callouts.margin-top-small {
        margin-top: 3rem
    }

    .home-header-callout {
        width: 100%;
        min-height: auto;
        margin-bottom: 1rem
    }

    .persona-stack {
        height: 180px
    }

    .h2-home,.h2-home.data-apps-smaller {
        font-size: 5rem
    }

    .striped-divider-light,.striped-divider-light-flipped {
        height: 100px
    }

    .home-img-vid-wrapper {
        max-width: 36rem;
        margin-top: 3rem
    }

    .page-tabs-sticky-left {
        display: none
    }

    .page-tabs-border-section-left {
        margin-bottom: 2rem
    }

    .stars-reviews {
        flex-flow: column
    }

    .persona-label {
        font-size: .8rem
    }

    .data-apps-col {
        width: 48%
    }

    .home-headline {
        font-size: 2rem
    }

    .home-logo-grid {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        margin-top: 4rem
    }

    .customer-stack {
        height: 180px
    }

    .persona-card {
        width: 95%;
        padding-left: 0;
        padding-right: 0
    }

    .persona-card-content {
        border-width: 1px
    }

    .persona-card-inner {
        min-height: 0;
        display: flex
    }

    .persona-card-inner.text-right {
        min-height: 0
    }

    .persona-holder {
        width: 60%
    }

    .persona-divider {
        height: 75px
    }

    .ai-overlay {
        max-width: none;
        margin-top: 2rem
    }

    .ai-overlay.background-color-gray-dark.margin-bottom-medium-lrg {
        margin-bottom: 3rem
    }

    .dbx-summit-2-columns {
        grid-template-columns: 1.25fr
    }

    .gartner-logos {
        flex-flow: wrap;
        width: 100%
    }

    .gartner-mq-event.margin-bottom-medium {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem
    }

    .mq-features-list {
        grid-template-columns: 1fr 1fr
    }

    .section-quotes {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .section-quotes.no-padding-bottom {
        padding-bottom: 0
    }

    .section-quotes.background-color-yellow.border-bottom.data-apps-callout {
        background-image: none
    }

    .section-quotes.background-color-shadow-light.overflow-hidden.no-padding-bottom {
        height: 660px
    }

    .section-quotes.blog {
        background-size: 60%
    }

    .section-quotes.background-color-light {
        background-color: #f0f0f0
    }

    .section-quotes.background-color-sky {
        background-size: 350px
    }

    .section-quotes.background-color-sky.worldtour-db {
        background-size: auto 180px
    }

    .section-quotes.background-color-sky.product-launch-header {
        background-size: 350px
    }

    .section-quotes.data-apps-event-promo {
        background-position: 80% 0
    }

    .section-quotes.data-apps-header-light {
        background-size: auto 800px
    }

    .section-quotes.snowflake-summit-25,.section-quotes.snowflake-summit-25-2,.section-quotes.customer-awards,.section-quotes.databricks-summit-25 {
        background-size: auto 80%
    }

    .home-product {
        max-width: none
    }

    .home-product.background-color-gray-dark.margin-bottom-medium-lrg {
        margin-bottom: 3rem
    }

    .home-diff-sticky {
        padding-top: .5rem;
        padding-bottom: .5rem
    }

    .home_features-list_image {
        object-fit: cover
    }

    .home_features-list_row {
        flex-direction: column
    }

    .home_features-list_card {
        width: 100%
    }

    .surfaces {
        padding-bottom: 8rem
    }

    .surfaces-item-tab {
        padding-left: 2rem
    }

    .surfaces-item-img {
        height: 25rem
    }

    .surfaces-content-bg {
        height: 22rem
    }

    .data-apps-callout-right {
        background-image: none;
        background-position: 0 0;
        background-repeat: repeat;
        background-size: auto;
        width: 50%
    }

    .data-apps-callout-text {
        width: 80%;
        margin-left: auto;
        margin-right: auto
    }

    .home-callouts-grid {
        grid-template-rows: auto auto;
        grid-template-columns: 1.5fr
    }

    .home-callout-large {
        background-size: 15%
    }

    .card-header {
        height: 350px
    }

    .card--content {
        height: 100%
    }

    .medium-quote-block {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .data-apps-list {
        grid-template-columns: 1fr 1fr
    }

    .ai-feature-abs-1 {
        max-height: 250px;
        margin-right: 480px
    }

    .ai-feature-abs-2 {
        max-height: 420px;
        padding-top: 1rem
    }

    .ai-feature-abs-3 {
        max-height: 350px;
        margin-left: 570px
    }

    .ai-features-abs {
        min-height: 460px
    }

    .home-quote-inline {
        padding: 1.5rem
    }

    .video-chapter-text {
        font-size: 1rem
    }

    .container-25 {
        max-width: none
    }

    .featured-events-2 {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column
    }

    .snowflake-worldtour-25 {
        background-size: auto 80%
    }

    .h1-subpage-left {
        font-size: 3rem;
        line-height: 3.75rem
    }

    .h1-subpage-left.text-color-light {
        line-height: 3.5rem
    }

    .product-header-2col {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        height: 300px
    }

    ._2col {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .callout-3-1rem {
        grid-template-columns: 1fr 1fr
    }

    .nav-hamburger_line-2 {
        background-color: #171717;
        width: 20px;
        height: 2px;
        padding: 0;
        position: absolute
    }

    .nav-hamburger_line-2.cc-3 {
        transform: translateY(6px)
    }

    .nav-hamburger_line-2.cc-1 {
        transform: translateY(-6px)
    }

    .container-26 {
        max-width: none
    }

    .product-subheading-2 {
        max-width: 590px;
        margin-left: auto;
        margin-right: auto
    }

    .nav-dropdown-list-2 {
        height: 0;
        padding-top: 0;
        transition: height .2s
    }

    .nav-dropdown-list-2.w--open {
        height: auto;
        position: relative;
        top: 0
    }

    .nav-dropdown_chevron-2 {
        color: #8f8f8f;
        width: 36px;
        height: 36px;
        transition: transform .3s ease-in-out;
        display: block
    }

    .hero-img-vid-wrapper-2 {
        max-width: 36rem;
        margin-top: 3rem
    }

    .nav-dropdown-list-column-2 {
        border-top: 0 solid #333;
        border-left: 0 solid #333;
        border-right: 0 solid #333;
        width: 100%;
        padding-top: .15rem;
        padding-bottom: .15rem
    }

    .border-left-2.feature-padding {
        padding: 1.5rem
    }

    .nav-link_text-link-2 {
        text-align: left;
        border-bottom: 1px solid #dbdbdb;
        padding: 19px 1rem 19px 1.5rem
    }

    .nav-link_text-link-2.w--current {
        padding-left: 1.5rem
    }

    .no-padding-3.min-height-400 {
        min-height: 360px
    }

    .navbar-2 {
        z-index: 100;
        background-color: #fff0;
        height: 72px;
        padding-left: 15px;
        padding-right: 15px
    }

    .nav-links_list-2 {
        background-color: #fff;
        flex-direction: column;
        width: 100vw;
        height: 100%;
        padding-bottom: 200px;
        overflow: scroll
    }

    .border-right-2.background-color-light-2.cell-position-relative {
        justify-content: flex-end;
        align-items: flex-end
    }

    .nav-dropdown_toggle-2 {
        border-bottom: 1px solid #dbdbdb;
        justify-content: space-between;
        align-items: center;
        padding: 12px 1rem
    }

    .nav-dropdown_toggle-2.extra-left,.nav-dropdown_toggle-2.extra {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .nav-dropdown-list-column_title-2 {
        margin-bottom: 0;
        padding-left: .5rem
    }

    .striped-divider-2 {
        height: 100px
    }

    .text-link-allcaps-4.no-margin-bottom.text-size-small {
        font-size: .9rem
    }

    .nav-dropdown-list-column_link-2 {
        max-width: 100%;
        padding-left: 0
    }

    .hero-dark-img-vid-2 {
        padding-top: 3rem
    }

    .page-tabs-border-section-2 {
        margin-bottom: 2rem
    }

    .callout-3-column-2 {
        grid-template-columns: 1fr 1fr
    }

    .tab_menu_link_icon-2 {
        padding-left: 12px;
        padding-right: 12px;
        font-size: 13px
    }

    .collection-item-5,.masonry--item {
        margin-top: 15px;
        margin-bottom: 15px
    }

    .collection-list-wrapper-3 {
        column-count: 2;
        column-gap: 15px
    }

    .nav-hamburger_line-2-2 {
        background-color: #171717;
        width: 20px;
        height: 2px;
        padding: 0;
        position: absolute
    }

    .nav-hamburger_line-2-2.cc-3-2 {
        transform: translateY(6px)
    }

    .nav-hamburger_line-2-2.cc-1-2 {
        transform: translateY(-6px)
    }

    .container-26-2 {
        max-width: none
    }

    .product-subheading-2-2 {
        max-width: 590px;
        margin-left: auto;
        margin-right: auto
    }

    .nav-dropdown-list-2-2 {
        height: 0;
        padding-top: 0;
        transition: height .2s
    }

    .nav-dropdown-list-2-2.w--open {
        height: auto;
        position: relative;
        top: 0
    }

    .nav-dropdown_chevron-2-2 {
        color: #8f8f8f;
        width: 36px;
        height: 36px;
        transition: transform .3s ease-in-out;
        display: block
    }

    .hero-img-vid-wrapper-2-2 {
        max-width: 36rem;
        margin-top: 3rem
    }

    .nav-dropdown-list-column-2-2 {
        border-top: 0 solid #333;
        border-left: 0 solid #333;
        border-right: 0 solid #333;
        width: 100%;
        padding-top: .15rem;
        padding-bottom: .15rem
    }

    .border-left-2-2.feature-padding-2 {
        padding: 1.5rem
    }

    .nav-link_text-link-2-2 {
        text-align: left;
        border-bottom: 1px solid #dbdbdb;
        padding: 19px 1rem 19px 1.5rem
    }

    .nav-link_text-link-2-2.w--current {
        padding-left: 1.5rem
    }

    .no-padding-3-2.min-height-400-2 {
        min-height: 360px
    }

    .navbar-2-2 {
        z-index: 100;
        background-color: #fff0;
        height: 72px;
        padding-left: 15px;
        padding-right: 15px
    }

    .nav-links_list-2-2 {
        background-color: #fff;
        flex-direction: column;
        width: 100vw;
        height: 100%;
        padding-bottom: 200px;
        overflow: scroll
    }

    .border-right-2-2.background-color-light-2-2.cell-position-relative-2 {
        justify-content: flex-end;
        align-items: flex-end
    }

    .nav-dropdown_toggle-2-2 {
        border-bottom: 1px solid #dbdbdb;
        justify-content: space-between;
        align-items: center;
        padding: 12px 1rem
    }

    .nav-dropdown_toggle-2-2.extra-left-2,.nav-dropdown_toggle-2-2.extra-2 {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .nav-dropdown-list-column_title-2-2 {
        margin-bottom: 0;
        padding-left: .5rem
    }

    .striped-divider-2-2 {
        height: 100px
    }

    .text-link-allcaps-4-2.no-margin-bottom-2.text-size-small-2 {
        font-size: .9rem
    }

    .nav-dropdown-list-column_link-2-2 {
        max-width: 100%;
        padding-left: 0
    }

    .hero-dark-img-vid-2-2 {
        padding-top: 3rem
    }

    .page-tabs-border-section-2-2 {
        margin-bottom: 2rem
    }

    .callout-3-column-2-2 {
        grid-template-columns: 1fr 1fr
    }

    .tab_menu_link_icon-2-2 {
        padding-left: 12px;
        padding-right: 12px;
        font-size: 13px
    }

    .div-block-240 {
        background-position: 260px
    }

    .div-block-241 {
        width: 40%
    }

    .product-shot-frame-sm {
        margin-left: 0;
        margin-right: 0
    }
}

@media screen and (max-width: 767px) {
    h2,h3 {
        font-size:2.25rem;
        line-height: 2.75rem
    }

    .container.vertical-flex {
        flex-flow: column
    }

    .container.product-feature,.container.no-padding-mobile {
        padding-left: 0;
        padding-right: 0
    }

    .container.margin-top-medium.always-something {
        margin-top: 0
    }

    .header-2 {
        font-size: 2.5rem
    }

    .header {
        font-size: 2rem
    }

    .rich-text-2.cc-resources.g-mg-bottom-large {
        max-width: 540px
    }

    .rich-text-2 blockquote {
        float: none;
        width: 100%;
        margin-left: 0
    }

    .paragraph-hero {
        font-size: 1rem
    }

    .header-5 {
        font-size: 2rem
    }

    .container-small {
        padding-left: 24px;
        padding-right: 24px
    }

    .post-summary {
        font-size: 1rem
    }

    .button-secondary.cc-hero-button {
        margin-left: 0
    }

    .section-hero-free-trial.g-section-padding-medium.new-gray.launch-signup {
        background-size: 75%
    }

    .g-section-padding-medium {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .hero-free-trial_layout {
        grid-row-gap: 2.5rem;
        grid-template-areas: "content""form"
    }

    .hero-free-trial_features-grid {
        grid-row-gap: 2rem;
        margin-top: 2rem
    }

    .footer-legal-wrapper {
        margin-bottom: 1rem
    }

    .footer-legal-links-wrapper {
        flex-wrap: wrap
    }

    .navbar {
        z-index: 9999
    }

    .nav-logo-link-block {
        padding-left: 0
    }

    .home-logos_layout {
        grid-row-gap: 1.5rem;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr 1fr
    }

    .home-customer-logo-wrapper {
        height: 64px;
        padding: 0
    }

    .home-customer-logo {
        max-height: 40px
    }

    .buttons-wrapper {
        grid-row-gap: 1rem;
        flex-direction: column
    }

    .buttons-wrapper.cc-home.mobil-buttons-wrapper.mobil-buttons-wrapper-md {
        padding-left: 10px;
        padding-right: 10px
    }

    .no-controls-slider {
        height: 200px
    }

    .container-large {
        padding-left: 24px;
        padding-right: 24px
    }

    .warehouse-link-block {
        height: 150px;
        min-height: 0;
        padding: 40px 24px
    }

    .investors-logo-image {
        width: 90px;
        min-height: 20px;
        max-height: 2rem
    }

    .investors-logo-image.refine {
        min-height: auto;
        max-height: 1.5rem
    }

    .perks-list {
        column-count: 1
    }

    .nav-container {
        padding-left: 0;
        padding-right: 0
    }

    .nav-dropdown-list.w--open {
        border-bottom: 1px solid var(--neutral-7)
    }

    .nav-link_text-link.nav-mobile-only {
        display: block
    }

    .side-tab-link {
        color: var(--neutral-12);
        border: 1px #000;
        padding: 12px 24px 12px 16px;
        display: none
    }

    .side-tab-link.w--current {
        border-style: solid;
        border-color: var(--neutral-6);
        background-image: url(https://cdn.prod.website-files.com/666bbba4ff7240a20f4ccccf/666bbba4ff7240a20f4ccdff_chevron-small.svg);
        background-position: 98%;
        background-repeat: no-repeat;
        background-size: auto;
        border-radius: 4px;
        display: flex
    }

    .product-feature-item_image-wrapper {
        padding-top: 60%
    }

    .hero-figure-wrapper {
        min-height: 200px
    }

    .accordion-item {
        position: relative
    }

    .accordion-trigger {
        border-bottom: 1px solid var(--neutral-7)
    }

    .accordion-trigger.faqs-side-tab-link {
        background-color: var(--neutral-1)
    }

    .accordion-icon {
        color: var(--neutral-12);
        width: 36px;
        height: 36px
    }

    .accordion-icon.faqs-side-tab-link-chevron {
        width: 24px;
        height: 24px
    }

    .accordion-content {
        border-bottom: 1px solid var(--neutral-7);
        overflow: hidden
    }

    .sigma-rich-text h4 {
        font-size: 1.6rem
    }

    .tabs-demo-usage-menu {
        grid-column-gap: 4rem;
        grid-row-gap: 0rem;
        align-items: center
    }

    .section-page-blog {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem
    }

    .blog-page-flex-wrapper.categories {
        flex-wrap: wrap
    }

    .pill-blog-category {
        margin-bottom: .5rem
    }

    .pagination-class {
        grid-column-gap: 8px
    }

    .interactive-demos-nav_layout {
        grid-row-gap: 16px
    }

    .badges-of-honor-layout {
        grid-column-gap: 32px
    }

    .badges-of-honor_image {
        max-width: 80px
    }

    .partner-item {
        max-width: none
    }

    .section-partner-info {
        padding-top: 5rem;
        padding-bottom: 5rem
    }

    .resource-wrapper {
        flex-direction: column;
        align-items: stretch
    }

    .section.background-color-light {
        background-image: none;
        background-position: 0 0;
        background-repeat: repeat;
        background-size: auto
    }

    .section.background-color-light.ai-header {
        background-size: auto 75%;
        padding-top: 2rem;
        padding-bottom: 0
    }

    .section.padding-top-tiny {
        padding-top: 0
    }

    .section.background-color-sky.worldtour-db {
        background-size: auto 180px
    }

    .section.background-color-white.no-padding-top.margin-top-large.data {
        margin-top: 3rem
    }

    .section.data-apps-event-promo {
        background-position: 50% 0;
        background-size: 150%;
        padding-left: 3rem;
        padding-right: 3rem
    }

    .section.data-apps-header-light {
        background-size: auto 600px
    }

    .section.data-madness-promo {
        background-image: none
    }

    .section.ai {
        background-size: auto 90%
    }

    .section.data-apps-section {
        padding-top: 6rem
    }

    .section.home-quote {
        background-image: none;
        background-repeat: repeat;
        background-size: auto;
        padding-left: 0%
    }

    .section.home-quote.orange,.section.home-quote.pink,.section.home-quote.blue,.section.diff-architecture,.section.diff-self-service,.section.background-color-light,.section.background-color-light-2-2 {
        background-image: none;
        background-position: 0 0;
        background-repeat: repeat;
        background-size: auto
    }

    .newsroom-link-wrapper {
        flex: 1;
        padding: 0
    }

    .card {
        padding: 24px
    }

    .collection-filters-layout {
        flex-direction: column;
        grid-template-columns: 2fr;
        display: flex
    }

    .announcements-list-layout {
        flex-direction: column;
        display: flex
    }

    .desktop-tablet-filters {
        display: none
    }

    .dropdown.cc-mobile-only,.dropdown-toggle {
        display: block
    }

    .dropdown-link {
        background-color: #0000
    }

    .slider-item.cc-width-30pc {
        width: 100%
    }

    .slider-track {
        grid-column-gap: 2%;
        margin-left: -24px;
        padding-left: 24px;
        padding-right: 24px
    }

    .slider-arrow {
        top: 0
    }

    .custom-pagination-link {
        width: 40px;
        height: 40px
    }

    .blog-author-share-wrapper {
        grid-row-gap: 1rem;
        flex-direction: column;
        align-items: flex-start
    }

    .how-to-article-footer-wrapper {
        grid-row-gap: 4rem;
        flex-direction: column
    }

    .how-to-article-footer-button-wrapper {
        flex-direction: column
    }

    .integrations-image-wrapper {
        height: 32px
    }

    .integrations-item {
        max-width: none;
        padding: 24px
    }

    .integrations-filter-radio-button-field {
        display: none
    }

    .resources-dropdown {
        display: block
    }

    .col {
        padding-left: 8px;
        padding-right: 8px
    }

    .col.col-sm-12 {
        flex-basis: 100%;
        max-width: 100%
    }

    .col.col-sm-last {
        order: 1
    }

    .col.col-lg-8.blog-header {
        flex-basis: 100%;
        max-width: 100%
    }

    .row {
        margin-left: -8px;
        margin-right: -8px
    }

    .row.justify-center {
        flex-flow: column
    }

    .card-icon-default {
        padding: 16px
    }

    .faqs-side-tab-link {
        border-style: none none solid;
        border-width: 1px;
        border-color: black black var(--neutral-7);
        color: var(--neutral-12);
        padding: 12px 24px 12px 16px
    }

    .faqs-side-tab-link.w--current {
        border-bottom-style: solid;
        border-bottom-color: var(--neutral-7);
        border-left-style: solid;
        border-left-width: 2px
    }

    .g-show-tablet-above {
        display: none
    }

    .faqs-side-tab-articles-link {
        color: var(--neutral-12);
        border: 1px #000;
        padding: 12px 24px 12px 40px
    }

    .faqs-side-tab-articles-link.w--current {
        border-bottom-style: solid;
        border-bottom-color: var(--neutral-7);
        border-left-style: solid;
        border-left-width: 2px
    }

    .infinite-marquee-logos {
        grid-column-gap: 0px
    }

    .infinite-marquee-logos.cc-badges {
        grid-column-gap: 48px;
        padding-right: 48px
    }

    .breadcrumb-list.ebook {
        display: none
    }

    .rich-text-free-trial ul {
        grid-template-columns: 1fr
    }

    .modal-container {
        padding-left: 16px;
        padding-right: 16px
    }

    .modal-close_btn {
        font-size: 1.8rem
    }

    .g-section-padding-xsmall {
        padding-top: .8rem;
        padding-bottom: .8rem
    }

    .navbar-neutral-12 {
        z-index: 9999
    }

    .it-admin-content-layout {
        grid-row-gap: 32px;
        grid-template-columns: 1fr;
        margin-top: 2rem
    }

    .accordion-trigger-nested {
        border-bottom: 1px solid var(--neutral-7)
    }

    .accordion-mobile-trigger {
        justify-content: space-between;
        align-items: flex-start;
        display: flex
    }

    .guide-banner {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem
    }

    .g2-desktop-report-img {
        display: none
    }

    .header-6-2 {
        font-size: 1rem
    }

    .pricing-check-cell {
        padding: 10px 15px
    }

    .pricing-description-cell-2 {
        padding: 15px
    }

    .pricing-rows-titles {
        margin-bottom: 10px
    }

    .matrix-title {
        letter-spacing: 0;
        font-size: 1.7vw
    }

    .pricing-check-column-titles {
        padding-left: 10px;
        padding-right: 10px
    }

    .matrix-copy {
        font-size: 2.1vw
    }

    .quick-stack-10 {
        grid-column-gap: 40px
    }

    .thank-you-toc-cta-card {
        padding: 24px
    }

    .thank-you-toc-wrapper {
        position: relative
    }

    .padding-section-medium {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .margin-vertical {
        margin-left: 0;
        margin-right: 0
    }

    .padding-section-large {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .margin-bottom {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0
    }

    .padding-top {
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0
    }

    .text-rich-text h2 {
        font-size: 2.6rem
    }

    .heading-style-h2 {
        font-size: 2rem
    }

    .fs-styleguide_section-header {
        font-size: .875rem
    }

    .padding-section-large-2 {
        padding-top: 4rem;
        padding-bottom: 4rem
    }

    .heading-style-h6-2 {
        font-size: .75rem
    }

    .spacer-xxhuge {
        padding-top: 4.5rem
    }

    .spacer-xhuge {
        padding-top: 4rem
    }

    .margin-horizontal {
        margin-top: 0;
        margin-bottom: 0
    }

    .padding-bottom {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    .padding-small.margin-bottom-small.mobile-align-center {
        margin-left: auto;
        margin-right: auto
    }

    .padding-vertical {
        padding-left: 0;
        padding-right: 0
    }

    .padding-horizontal {
        padding-top: 0;
        padding-bottom: 0
    }

    .spacer-medium {
        padding-top: 1.25rem
    }

    .spacer-xxlarge {
        padding-top: 3rem
    }

    .spacer-huge {
        padding-top: 3.5rem
    }

    .margin-xxlarge {
        margin: 3rem
    }

    .h1-larger {
        font-size: 2.5rem;
        line-height: 3rem
    }

    .padding-xhuge {
        padding: 4rem
    }

    .padding-xxhuge {
        padding: 4.5rem
    }

    .padding-large {
        padding: 1.5rem
    }

    .max-width-full-mobile-landscape {
        width: 100%;
        max-width: none
    }

    .padding-section-small {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .hide-mobile-landscape {
        display: none
    }

    .spacer-xlarge {
        padding-top: 2rem
    }

    .margin-xxhuge {
        margin: 4.5rem
    }

    .heading-style-h4-2 {
        font-size: 1rem
    }

    .margin-large {
        margin: 1.5rem
    }

    .heading-style-h3 {
        font-size: 1.5rem;
        line-height: 1.9rem
    }

    .fs-styleguide_heading-medium {
        font-size: 2rem
    }

    .margin-xlarge {
        margin: 2rem
    }

    .button.mobile-align-center {
        margin-left: auto;
        margin-right: auto
    }

    .button.margin-left-1rem.home-25-btn2 {
        margin-left: 0
    }

    .button.product-launch-feature-btn {
        margin-top: 40%
    }

    .margin-medium {
        margin: 1.25rem
    }

    .padding-left {
        padding-top: 0;
        padding-bottom: 0;
        padding-right: 0
    }

    .padding-medium {
        padding: 1.25rem
    }

    .padding-xxlarge {
        padding: 3rem
    }

    .text-size-large {
        font-size: 1.25rem
    }

    .heading-style-h5 {
        font-size: .875rem
    }

    .text-style-nowrap {
        white-space: normal
    }

    .margin-huge {
        margin: 3.5rem
    }

    .margin-top {
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0
    }

    .margin-xhuge {
        margin: 4rem
    }

    .padding-huge {
        padding: 3.5rem
    }

    .padding-global {
        padding-left: 1.25rem;
        padding-right: 1.25rem
    }

    .margin-right {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0
    }

    .padding-xlarge {
        padding: 2rem
    }

    .margin-left {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0
    }

    .spacer-large {
        padding-top: 1.5rem
    }

    .padding-right {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0
    }

    .fs-style_dropdown-toggle {
        padding-left: 1.25rem;
        padding-right: 1.25rem
    }

    .heading-medium {
        font-size: 1.5rem
    }

    .fs-style_dropdown-icon {
        margin-right: 1rem
    }

    .fs-style_block {
        padding: 1.75rem
    }

    .fs-radio_column,.fs-style_row {
        grid-auto-flow: row
    }

    .fs-style_row.is-icons {
        grid-auto-flow: column
    }

    .fs-checkbox_row {
        grid-auto-flow: row
    }

    .footer_wrapper {
        flex-direction: column;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center
    }

    .fs-style_form-block {
        font-size: 18px
    }

    .page-padding {
        padding-left: 1.25rem;
        padding-right: 1.25rem
    }

    .footer_grid {
        flex-direction: column;
        margin-top: 24px;
        display: flex
    }

    .fs-style_dropdown-list-grid {
        padding-left: 1.25rem;
        padding-right: 1.25rem
    }

    .content_collection-list {
        grid-row-gap: 1rem;
        grid-template-columns: 1fr 1fr
    }

    .filter_grid {
        grid-template-columns: 1fr
    }

    .filter_block.width-50 {
        width: 100%
    }

    .heading-small-7 {
        font-size: 1rem
    }

    .grid-col-5 {
        grid-column-gap: 10px;
        grid-row-gap: 10px
    }

    .striped-divider {
        height: 85px
    }

    .rotator-text-tab-links {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        background-color: #0000;
        border-radius: 0;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
        display: grid
    }

    .email-signup {
        padding-top: 72px;
        padding-bottom: 72px
    }

    .rotator-tab-link-text {
        color: var(--shadow);
        text-align: center
    }

    .colored_tag {
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        margin-right: 10px;
        display: inline-block
    }

    .testimonial-card-features {
        margin-top: 20px;
        display: none
    }

    .testimonial-card-co {
        margin-top: 10px;
        display: block
    }

    .b-caption-medium {
        margin-right: 8px;
        display: inline
    }

    .quote {
        font-size: 20px;
        line-height: 25px
    }

    .h1-subpage-hero {
        font-size: 2.5rem;
        line-height: 3.25rem
    }

    .h1-subpage-hero.text-color-light,.h1-subpage-hero.text-color-light-3,.h1-subpage-hero.text-color-light-3-2 {
        margin-bottom: .5rem;
        line-height: 3rem
    }

    .accordian-item {
        width: 100%
    }

    .accordian-wrapper {
        width: 100%;
        margin-top: 2rem
    }

    .nav-dropdown-list-ad {
        background-size: auto 90%
    }

    .b-team-avatar {
        width: 100px;
        height: 100px
    }

    .text-family-mono.hanging-punctuation.home-quote-text {
        font-size: 1.75rem;
        line-height: 2.5rem
    }

    .text-family-mono.text-size-tiny {
        line-height: 1rem
    }

    .quick-stack-21 {
        max-width: 100%
    }

    .no-margin-bottom.mobile-center {
        text-align: center
    }

    .home-hero-bg {
        background-size: auto 150px,60%
    }

    .text-color-light.text-align-center.text-wrap-balance {
        text-wrap: balance
    }

    .text-size-xl {
        font-size: 2.25rem;
        line-height: 2.75rem
    }

    .features-stack {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        background-color: #0000;
        margin-top: 2rem;
        margin-bottom: 3rem
    }

    .filter-buttons {
        grid-template-columns: 1fr
    }

    .header--5,.header-5-2 {
        font-size: 2rem
    }

    .container-9 {
        padding-left: 24px;
        padding-right: 24px
    }

    .paragraph-hero-2 {
        font-size: 1rem
    }

    .header-3-2 {
        font-size: 3rem
    }

    .header-5-3 {
        font-size: 2rem
    }

    .no-padding {
        grid-column-gap: 35px;
        grid-row-gap: 35px;
        grid-template-columns: 1fr
    }

    .no-padding.min-height-400 {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .no-padding.grid-gap-4rem {
        grid-column-gap: 35px;
        grid-row-gap: 35px
    }

    .border-left {
        border-left-width: 0
    }

    .border-left.feature-padding {
        padding: 3rem 1rem 2rem
    }

    .border-right {
        border-right-style: none;
        border-right-width: 0
    }

    .border-right.background-color-light-2.cell-position-relative {
        justify-content: flex-end;
        align-items: flex-end
    }

    .border-right.background-color-light-2.cell-position-relative.video {
        padding: 1rem
    }

    .border-right.product-launch-videos {
        justify-content: center;
        align-items: center;
        padding-bottom: 3rem
    }

    .border-right.feature-stat-padding {
        padding-left: 1rem
    }

    .border-top.border-bottom.margin-top-small.margin-bottom-small.padding-top-tiny.padding-bottom-tiny.no-padding-top {
        padding-top: 0
    }

    .background-color-light.padding-small {
        padding-top: 1rem;
        padding-left: 0;
        padding-right: 0
    }

    .momentum-leader-badges {
        margin-bottom: 1rem
    }

    .flex-spaceb-flex.margin-top-bottom {
        grid-column-gap: 1.7rem;
        grid-row-gap: 1.7rem;
        flex-flow: wrap;
        align-content: stretch
    }

    .verticals-tab-left-cell {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .b-card-slider,.b-card-mask {
        width: 100%
    }

    .b-card-slider-card {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .card-content {
        padding-right: 0
    }

    .container-10 {
        padding-left: 0;
        padding-right: 0
    }

    .quickstack-header {
        grid-column-gap: 40px;
        grid-row-gap: 40px
    }

    .f-footer-large-grid {
        grid-column-gap: 24px
    }

    .footer-copyright-social {
        display: block
    }

    .no-padding-2 {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .h3-heading-4 {
        font-size: 40px
    }

    .quick-stack-38-2-2 {
        height: 300px
    }

    .cell-39-2 {
        justify-content: flex-start;
        align-items: flex-start
    }

    .right-arrow-3-2 {
        display: none
    }

    .left-arrow-3-2,.right-arrow-3-2 {
        display: none
    }

    .h3-heading-4-2 {
        font-size: 40px
    }

    .left-arrow-3-2 {
        display: none
    }

    .no-padding-2-2 {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .journey_card {
        width: 100%
    }

    .journey_card_image_img.right.lottie-backer.hide-mobile-landscape {
        display: none
    }

    .margin-top-large.mobile-adjust {
        margin-top: 2rem
    }

    .swiper-wrapper {
        height: 280px
    }

    .icon-regular-2.icon-nudge.transparent {
        display: none
    }

    .countdown-side-right {
        padding: 96px 24px
    }

    .background-color-light-2.hide-on-3-show-on-2 {
        display: block
    }

    .product-subheading {
        width: 100%;
        max-width: 480px;
        font-size: .9rem;
        line-height: 1.4rem
    }

    .image-absolute-contain {
        position: relative
    }

    .job-listing {
        flex-direction: column
    }

    .tab_menu {
        margin-top: 2rem;
        margin-bottom: 2.5rem
    }

    .tab_menu.background-color-light-2 {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        background-color: var(--neutral-0);
        flex-flow: wrap;
        align-items: center;
        display: flex
    }

    .tab_menu.background-color-light-2-2 {
        border-radius: 0
    }

    .tab_menu.background-color-nimbus {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        flex-flow: wrap;
        display: flex
    }

    .tab_menu.background-color-white {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        background-color: #fff0;
        flex-flow: wrap;
        display: flex
    }

    .tab_menu_link {
        font-size: 13px
    }

    .tab_menu_link.light {
        background-color: #fff
    }

    .tab_menu_link.light.w--current {
        background-color: var(--insight)
    }

    .accordion-trigger-2 {
        border-bottom: 1px solid #dbdbdb
    }

    .container-13 {
        padding-left: 24px;
        padding-right: 24px
    }

    .row-3 {
        margin-left: -8px;
        margin-right: -8px
    }

    .card-icon-default-2 {
        padding: 16px
    }

    .resources-3-column {
        grid-template-columns: 1fr
    }

    .logos-grid-col-4 {
        grid-template-columns: 1fr 1fr 1fr
    }

    .max-width-half,.max-width-half.text-align-center.mobile-full {
        max-width: 100%
    }

    .grid-with-borders-alt {
        grid-row-gap: 1px;
        grid-template-columns: 1fr
    }

    .padding-top-tiny.padding-bottom-lrg {
        margin-bottom: .8rem
    }

    .image-absolute-contain-2 {
        width: auto;
        height: auto;
        position: relative
    }

    .striped-divider-gray {
        height: 80px
    }

    .hero-grid-col-2 {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem
    }

    .grid-col-2-4rem {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-columns: 1fr
    }

    .grid-col-2-3rem {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem;
        grid-template-columns: 1fr
    }

    .grid-col-2-3rem.home {
        flex-flow: column;
        display: flex
    }

    .features-stack-cell {
        justify-content: flex-start;
        align-items: center
    }

    .row-4 {
        margin-left: -8px;
        margin-right: -8px
    }

    .container-22 {
        padding-left: 24px;
        padding-right: 24px
    }

    .container-22.g-mg-bottom-xxlarge.weekly-webinar-header.weekly-webinar-mobile {
        margin-left: 29px
    }

    .paragraph-hero-4 {
        font-size: 1rem
    }

    .rad-banner.rad-banner-asset.margin-lr-small {
        margin-left: 10px;
        margin-right: 10px
    }

    .tab-journey-card-inner {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        display: block
    }

    .tab-journey-text {
        width: 100%;
        padding-right: 0
    }

    .tab-journey-card {
        padding-top: 6rem
    }

    .tab-journey-card.first {
        padding-top: 2rem
    }

    .journey-start-line {
        border-left-style: none;
        border-right-style: none
    }

    .resource-card {
        max-width: none
    }

    .resource-card.mobile-hidden {
        display: none
    }

    .legal-container {
        display: block
    }

    .partner-block {
        margin-bottom: 4rem
    }

    .team-name {
        font-size: 1.2rem;
        line-height: 1.2rem
    }

    .infinite-marquee-logos-awards {
        grid-column-gap: 0px
    }

    .infinite-marquee-logos-awards.cc-badges {
        grid-column-gap: 48px;
        padding-right: 48px
    }

    .marquee-badges-awards {
        width: 80px;
        height: 80px
    }

    .compare-columns {
        flex-flow: column
    }

    .compare-block {
        width: 100%
    }

    .resources-3-columns,.resources-2-columns {
        grid-template-columns: 1fr
    }

    .hero-img-vid-wrapper {
        max-width: 28rem;
        margin-top: 2.5rem
    }

    .hero-dark-img-vid.ai {
        background-size: auto 200px
    }

    .hero-dark-img-vid.collaboration {
        background-size: auto 225px
    }

    .hero-dark-img-vid.data-apps {
        background-size: auto 200px
    }

    .hero-dark-img-vid.write-back-2,.hero-dark-img-vid.dashboards,.hero-dark-img-vid.python {
        background-size: auto 225px
    }

    .hero-dark-img-vid.embedded-analytics {
        background-size: auto 159px
    }

    .quickstack-comparison.no-padding {
        grid-column-gap: 1px;
        grid-row-gap: 1px
    }

    .comparison-cell {
        justify-content: flex-start
    }

    .comparison-cell.feature-label {
        background-color: var(--neutral-0);
        flex-flow: row;
        justify-content: space-between;
        display: flex
    }

    .text-block-25 {
        padding-right: 7px;
        font-size: 15px
    }

    .impact-awards-grid {
        grid-row-gap: 2rem;
        grid-template-columns: 1fr;
        margin-top: 2rem
    }

    .div-block-202-2 {
        position: relative
    }

    .pop-up-modal-inner {
        margin-top: 5vh;
        padding-bottom: 5rem
    }

    .tab-journey-img {
        width: 100%;
        margin-top: 2rem
    }

    .customer-story-thumbnail {
        min-height: 250px
    }

    .column-2 {
        padding-left: 0;
        padding-right: 0
    }

    .button-flex-center {
        flex-flow: column
    }

    .data-apps,.embedded {
        background-size: auto 159px
    }

    .governance {
        background-size: auto 200px
    }

    .dashboards {
        background-size: auto 159px
    }

    .image-65 {
        order: -1
    }

    .announcement-text {
        text-align: left
    }

    .by-the-numbers {
        width: 100%
    }

    .quick-stack-49 {
        grid-column-gap: 48px;
        grid-row-gap: 48px
    }

    .resource-ad {
        margin-top: 0
    }

    .div-block-211 {
        width: 27%
    }

    .featured-feature-link.hide-on-desktop-show-on-mobile {
        display: flex
    }

    .large-quote-block {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .large-quote-block.max {
        max-width: 90%
    }

    .feature-header {
        font-size: 1rem
    }

    .video-feature {
        z-index: 1;
        aspect-ratio: 16/9;
        object-fit: contain;
        width: 100%;
        height: 100%
    }

    .quickstack-mobile {
        grid-column-gap: 21px
    }

    .role-cell {
        justify-content: flex-start;
        align-items: flex-start
    }

    .text-size-larger {
        font-size: 1.25rem;
        line-height: 1.5rem
    }

    .f-footer-related {
        grid-column-gap: 24px
    }

    .resources-2-columns-copy {
        grid-template-columns: 1fr
    }

    .pop-up-modal-inner-2 {
        margin-top: 5vh;
        padding-bottom: 5rem
    }

    .quickstack-comparison-sticky {
        padding-left: 0;
        padding-right: 0
    }

    .quickstack-comparison-sticky.no-padding {
        grid-column-gap: 20px;
        grid-row-gap: 20px
    }

    .jumplinks-wrapper {
        grid-row-gap: 1rem;
        flex-direction: column;
        display: none
    }

    .jumplinks-wrapper.cc-home.mobil-buttons-wrapper.mobil-buttons-wrapper-md {
        padding-left: 10px;
        padding-right: 10px
    }

    .comparison-header {
        margin-bottom: .25rem
    }

    .featured-event {
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start
    }

    .featured-event.background-color-sky.background-image {
        margin-top: 1rem
    }

    .featured-event-image.hide-mobile-portrait,.featured-event-image.data-apps-logo {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .featured-event-block {
        width: 100%
    }

    .down-caret {
        display: none
    }

    .button-row.text-style-allcaps.text-size-tiny {
        flex-flow: wrap
    }

    .notification-flex-2 {
        flex-flow: column
    }

    .event-date-large {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        font-size: 1.5rem
    }

    .event-arrow {
        height: 32px;
        margin-right: 0
    }

    .event-list {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .cell-65,.worldtour-header-img {
        display: none
    }

    .blog-collection-list,.blog-category-list {
        grid-row-gap: 1rem;
        grid-template-columns: 1fr 1fr
    }

    .feature-ad-block-blog {
        background-image: none;
        background-repeat: repeat;
        background-size: auto;
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .feature-ad-block-blog.background-color-sky {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .blog-feature-image {
        margin-bottom: 1rem
    }

    .collection-list-2-col-cards {
        grid-template-columns: 1fr
    }

    .blog-category-list-3 {
        grid-row-gap: 1rem;
        grid-template-columns: 1fr 1fr
    }

    .image-align-bottom-right,.image-align-center-right {
        width: auto;
        height: auto;
        position: relative
    }

    .page-tabs-border-section-flex {
        flex-flow: column
    }

    .page-tabs-border-section-flex.page-tab-tall {
        height: auto
    }

    .partner-databricks {
        background-size: auto 159px
    }

    .image-tall-right {
        width: auto;
        height: auto;
        position: relative
    }

    .page-tabs-quote-callout {
        flex-flow: column;
        width: 100%
    }

    .page-tabs-quote-callout.page-tab-tall {
        height: auto
    }

    .grid-with-borders-2x2 {
        grid-row-gap: 1px;
        grid-template-columns: 1fr
    }

    .background-color-white.grid-top-right {
        padding-top: 2rem;
        padding-left: 0
    }

    .background-color-white.grid-bottom-right {
        padding-left: 0
    }

    .ai-features {
        flex-flow: column;
        width: 100%
    }

    .tab_menu_link_icon {
        font-size: 13px
    }

    .tab_menu_link_icon.light {
        background-color: #fff
    }

    .tab_menu_link_icon.light.w--current {
        background-color: var(--insight)
    }

    .tab_menu_icons {
        margin-top: 2rem;
        margin-bottom: 2.5rem
    }

    .tab_menu_icons.background-color-light-2 {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        background-color: var(--neutral-0);
        flex-flow: wrap;
        align-items: center;
        display: flex
    }

    .tab_menu_icons.background-color-light-2-2 {
        border-radius: 0
    }

    .tab_menu_icons.background-color-nimbus {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        flex-flow: wrap;
        display: flex
    }

    .tab_menu_icons.background-color-white {
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        background-color: #fff0;
        flex-flow: wrap;
        display: flex
    }

    .ai-function-definition {
        text-align: left
    }

    .feature-padding-centered {
        padding: 3rem 1rem 2rem
    }

    .library-collection-2col {
        grid-row-gap: 1rem;
        grid-template-columns: 1fr
    }

    .library-key {
        justify-content: center;
        align-items: center
    }

    .library-section-head {
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 2rem
    }

    .featured-event-title {
        font-size: 1.8rem;
        line-height: 2rem
    }

    .mobile-button {
        justify-content: space-between;
        align-items: flex-start;
        display: flex
    }

    .survey-column-left {
        margin-left: 0
    }

    .survey-layout {
        grid-row-gap: 2.5rem;
        grid-template-areas: "content""form"
    }

    .code-embed-7 {
        width: 100%
    }

    .show-mobile-landscape-tablet {
        justify-content: center;
        align-items: flex-start;
        display: flex
    }

    .quote-side-by-side {
        flex-flow: column;
        width: 100%
    }

    .quote-side-by-side.page-tab-tall {
        height: auto
    }

    .quotes-side-by-side {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem;
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    .hide-mobile-tablet {
        display: none
    }

    .hero-light-img-vid.ai {
        background-size: auto 200px
    }

    .hero-light-img-vid.collaboration {
        background-size: auto 225px
    }

    .hero-light-img-vid.data-apps {
        background-size: auto 200px
    }

    .hero-light-img-vid.write-back-2,.hero-light-img-vid.dashboards,.hero-light-img-vid.python {
        background-size: auto 225px
    }

    .hero-light-img-vid.embedded-analytics {
        background-size: auto 159px
    }

    .dual-demos {
        flex-flow: column
    }

    .cell-67 {
        justify-content: flex-start;
        align-items: flex-start
    }

    .data-apps-desc {
        min-width: 420px
    }

    .callout-3-column {
        grid-template-columns: 1fr
    }

    .data-apps-session-block.data-apps-colspan-2 {
        padding-right: 2rem
    }

    .data-apps-stats {
        justify-content: space-between;
        align-items: flex-start
    }

    .data-app-stat-num {
        height: 75px
    }

    .data-app-stats {
        grid-column-gap: 5rem;
        grid-row-gap: 5rem;
        width: 80%
    }

    .blog-feature-header-custom {
        margin-top: 0
    }

    .h1-media {
        letter-spacing: -.1rem;
        width: 100%;
        font-size: 2rem
    }

    .subhead-left {
        max-width: 480px;
        font-size: .9rem;
        line-height: 1.4rem
    }

    .overview-block {
        flex-flow: column;
        min-height: 260px
    }

    .overview-block.page-tab-tall {
        height: auto
    }

    .sticky-card {
        flex-flow: column;
        grid-template-columns: 1fr;
        min-height: 0
    }

    .sticky-card.page-tab-tall {
        height: auto
    }

    .sticky-card-left {
        padding-left: 3rem;
        padding-right: 3rem
    }

    .sticky-card-right {
        display: none
    }

    .data-apps-schedule {
        grid-template-columns: 1fr
    }

    .mobile-warning {
        text-align: center;
        margin-top: 1rem;
        display: block
    }

    .text-block-37 {
        font-size: 13px
    }

    .data-apps-callout {
        flex-flow: column
    }

    .learn-nav-sticky {
        width: 27%;
        display: none
    }

    .learn-heading {
        font-size: 1.5rem;
        line-height: 1.9rem
    }

    .smaller-rich-text h4 {
        font-size: 1.6rem
    }

    .mardness-promo {
        max-width: 100%;
        margin-right: 0
    }

    .si-partners {
        max-width: 400px
    }

    .awards-grid-wrapper {
        padding: 2rem
    }

    .featured-event-texture {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem
    }

    .resources-2-column {
        grid-template-columns: 1fr
    }

    .sticky-left-list {
        width: 27%;
        display: none
    }

    .huge-stat {
        padding-top: 1rem;
        padding-left: 1rem
    }

    .video-header-smaller {
        margin-top: 2.5rem;
        margin-left: 2rem;
        margin-right: 2rem
    }

    ._100m-arr-columns {
        grid-row-gap: 2.5rem;
        grid-template-areas: "content""form"
    }

    ._100m-arr-grid {
        flex-flow: column
    }

    ._100m-arr-what {
        background-color: var(--neutral-0);
        margin-left: 2rem;
        margin-right: 2rem;
        padding: 1rem 1rem 2rem
    }

    ._100m-arr-header {
        margin-left: 3rem;
        margin-right: 3rem
    }

    ._100m-arr-grid-get {
        grid-row-gap: 2rem;
        margin-top: 2rem
    }

    ._100m-arr-grid-section {
        flex-flow: column
    }

    ._100m-arr-what-you-get {
        background-color: var(--neutral-0);
        margin-left: 2rem;
        margin-right: 2rem;
        padding: 1rem 1rem 2rem
    }

    ._100m-arr-paragraph-dark {
        margin-top: 0;
        padding-right: 0
    }

    ._100m-arr-what-you-get-dark {
        margin-left: 2rem;
        margin-right: 2rem;
        padding: 1rem 2rem 2rem
    }

    .session-block-dark.data-apps-colspan-2 {
        padding-right: 2rem
    }

    .summit-session-header {
        margin-right: 0
    }

    .search-result-grid {
        grid-template-columns: 1fr
    }

    .show-mobile-landscape {
        display: block
    }

    .video-embed-height {
        min-height: 28vh
    }

    .button-cal-google,.button-cal-outlook,.button-cal-ics {
        display: block
    }

    .button-copy.mobile-align-center {
        margin-left: auto;
        margin-right: auto
    }

    .momentum-left-top-v2 {
        max-width: 49vw
    }

    .momentum-leader-badges-v2 {
        margin-bottom: 1rem
    }

    .v-3-1-1 {
        grid-template-rows: auto minmax(0,1fr);
        grid-template-columns: 1fr
    }

    .v-1-1-3,.v-2-3,.v-1-1-1-1-1 {
        grid-template-columns: 1fr
    }

    .overlay-subhead {
        width: 40%;
        margin-top: 0;
        font-size: 1rem
    }

    .schedule-minimal {
        flex-flow: column
    }

    .grid-gap-0rem {
        display: none
    }

    .slick-section {
        width: 100vw
    }

    .slick-navbar {
        display: none
    }

    .slick-padding-global {
        padding-left: 1.25rem;
        padding-right: 0
    }

    .v-3-2 {
        grid-template-columns: 1fr
    }

    .v-10 {
        grid-template-columns: 1fr 1fr 1fr 1fr
    }

    .h1-hero-25 {
        font-size: 4rem
    }

    .button-wrapper-center.margin-top-medium.home-25-buttons {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        align-items: center;
        margin-top: 2rem;
        display: flex
    }

    .home-callouts {
        flex-flow: column
    }

    .home-header-callout {
        margin-bottom: 1rem
    }

    .persona-section,.persona-section:hover {
        border-bottom-style: none
    }

    .persona-stack {
        height: 300px
    }

    .h2-home {
        font-size: 3.5rem
    }

    .h2-home._80--width {
        width: 100%
    }

    .h2-home.data-apps-smaller {
        font-size: 3.5rem
    }

    .home-feature-grid {
        grid-template-columns: 1fr 1fr 1fr
    }

    .striped-divider-light,.striped-divider-light-flipped {
        height: 85px
    }

    .h2-home-overlay {
        font-size: 3rem
    }

    .home-stats-wrapper {
        flex-flow: wrap
    }

    .home-img-vid-wrapper {
        max-width: 28rem;
        margin-top: 2.5rem
    }

    .pop-up-modal-video {
        margin-top: 5vh;
        padding-bottom: 5rem
    }

    .home-feature-grid-new {
        grid-template-columns: 1fr 2fr 1fr
    }

    .all-personas {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    .hide-5th-persona {
        display: none
    }

    .data-apps-preview {
        width: 100%
    }

    .home-logo-grid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-top: 3rem
    }

    .home-customer-block,.home-customer-block:hover {
        border-bottom-style: none
    }

    .customer-stack {
        height: 300px
    }

    .persona-card {
        width: 100%
    }

    .persona-divider {
        display: none
    }

    .ai-overlay {
        margin-top: 4rem
    }

    .ai-overlay.vertical-flex {
        flex-flow: column
    }

    .ai-overlay.product-feature,.ai-overlay.no-padding-mobile {
        padding-left: 0;
        padding-right: 0
    }

    .show-mobile-portrait {
        display: none
    }

    .summit-2-columns {
        grid-template-columns: 1fr
    }

    .summit-flex-left {
        justify-content: flex-start;
        align-items: center
    }

    .dbx-summit-2-columns {
        grid-template-columns: 1fr
    }

    .gartner-logos {
        grid-column-gap: 3rem;
        grid-row-gap: 3rem;
        flex-flow: wrap;
        width: 80%
    }

    .hero-grid-gartner {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem
    }

    .gartner-mq-event {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        grid-template-columns: 1fr
    }

    .mq-features-list,.v-edge {
        grid-template-columns: 1fr
    }

    .section-quotes.padding-top-tiny {
        padding-top: 0
    }

    .section-quotes.background-color-sky.worldtour-db {
        background-size: auto 180px
    }

    .section-quotes.data-apps-event-promo {
        background-position: 50% 0;
        background-size: 150%;
        padding-left: 3rem;
        padding-right: 3rem
    }

    .section-quotes.data-apps-header-light {
        background-size: auto 600px
    }

    .section-quotes.data-madness-promo {
        background-image: none
    }

    .home-product.vertical-flex {
        flex-flow: column
    }

    .home-product.product-feature,.home-product.no-padding-mobile {
        padding-left: 0;
        padding-right: 0
    }

    .data-apps-featured {
        grid-template-columns: 1fr 1fr
    }

    .home-25-headline {
        position: relative
    }

    .live-event-thumb {
        height: 240px
    }

    .home-differentiator {
        grid-template-columns: 1.5fr;
        margin-top: 0;
        margin-bottom: 0
    }

    .home_features-list_grid-list {
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem
    }

    .home_features-list_row {
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
        flex-direction: column;
        grid-template-columns: 1fr
    }

    .home_features-list_card {
        grid-template-columns: 1fr;
        width: 100%;
        padding: 1.5rem
    }

    .surfaces {
        margin-top: 3rem;
        padding-bottom: 0
    }

    .surfaces-item {
        border-top: 1px solid var(--stratus);
        overflow: hidden
    }

    .surfaces-item.first {
        border-top-style: none
    }

    .surfaces-item-tab {
        border-top-style: none;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
        transition-duration: 0s
    }

    .surfaces-item-content {
        width: 100%;
        height: 0;
        padding-top: 0;
        padding-bottom: 0;
        position: relative;
        transform: translate(0)
    }

    .surfaces-item-content.active {
        height: auto;
        display: block
    }

    .surfaces-item-img {
        height: 25rem;
        padding-top: .5rem
    }

    .surfaces-item-link {
        padding-bottom: 3rem
    }

    .surfaces-item-arrow2 {
        color: var(--neutral-0);
        font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 1.5rem;
        display: block
    }

    .html-arrow {
        color: var(--stratus);
        font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-size: 1.5rem
    }

    .surfaces-content-bg {
        display: none
    }

    .home-25-subhead.margin-bottom-larger {
        margin-bottom: 3rem
    }

    .ai-image {
        width: 100%
    }

    .data-apps-callout-flex {
        flex-flow: column
    }

    .data-apps-callout-right {
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 240px
    }

    .data-apps-callout-left {
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        min-height: 240px
    }

    .diff-flex {
        flex-flow: column
    }

    .diff-arch-block.security {
        margin-top: 2rem
    }

    .home-callouts-impact {
        flex-flow: column;
        margin-top: 4rem
    }

    .forrester-block {
        display: block
    }

    .callout-texture-img {
        object-fit: cover;
        width: 100%;
        height: 2.5rem
    }

    .forrester-image-block {
        display: none
    }

    .val-grid {
        grid-template-columns: 1fr
    }

    .card-header {
        height: 300px
    }

    .card--content {
        height: auto
    }

    .val-header-img {
        width: 100%
    }

    .quote-text-medium {
        font-size: 1.75rem;
        line-height: 2.5rem
    }

    .medium-quote-block {
        margin-left: 2rem;
        margin-right: 2rem
    }

    .ai-feature-abs-1 {
        margin-right: 260px
    }

    .ai-feature-abs-2 {
        margin-left: 230px
    }

    .ai-feature-abs-3 {
        display: none
    }

    .ai-features-abs {
        width: 100%
    }

    .surfaces-item-arrow {
        display: block;
        position: relative
    }

    .home-quote-inline {
        padding: 1.25rem
    }

    .stars-divider {
        display: none
    }

    .training-grid.margin-top-medium {
        grid-template-columns: 1fr
    }

    .hero-grid-wistia {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem
    }

    .passkey-dialogue {
        margin-top: 5vh;
        padding-bottom: 5rem
    }

    .passkey-dialogue.text-color-light,.featured-event-block-2,.worldtours-callout-wrapper {
        width: 100%
    }

    .pop-up-embed {
        margin-top: 5vh;
        padding-bottom: 5rem
    }

    .h1-subpage-left {
        text-align: center;
        font-size: 2.5rem;
        line-height: 3.25rem
    }

    .h1-subpage-left.text-color-light {
        margin-bottom: .5rem;
        line-height: 3rem
    }

    .product-header-2col {
        height: 300px
    }

    ._2col {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem
    }

    .product-shot-frame.texture-1 {
        padding-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem
    }

    .callout-3-1rem {
        grid-template-columns: 1fr
    }

    .container-26.no-padding-mobile {
        padding-left: 0;
        padding-right: 0
    }

    .product-subheading-2 {
        max-width: 480px;
        font-size: .9rem;
        line-height: 1.4rem
    }

    .nav-dropdown-list-2.w--open {
        border-bottom: 1px solid #dbdbdb
    }

    .hero-img-vid-wrapper-2 {
        max-width: 28rem;
        margin-top: 2.5rem
    }

    .border-left-2 {
        border-left-width: 0
    }

    .border-left-2.feature-padding {
        padding: 3rem 1rem 2rem
    }

    .nav-link_text-link-2.nav-mobile-only {
        display: block
    }

    .no-padding-3 {
        grid-column-gap: 35px;
        grid-row-gap: 35px;
        grid-template-columns: 1fr
    }

    .no-padding-3.min-height-400 {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .navbar-2 {
        z-index: 9999
    }

    .border-right-2 {
        border-right-style: none;
        border-right-width: 0
    }

    .border-right-2.background-color-light-2.cell-position-relative {
        justify-content: flex-end;
        align-items: flex-end
    }

    .background-color-white-2.grid-bottom-right {
        padding-left: 0
    }

    .background-color-white-2.grid-top-right {
        padding-top: 2rem;
        padding-left: 0
    }

    .ai-function-definition-2 {
        text-align: left
    }

    .grid-with-borders-2x2-2 {
        grid-row-gap: 1px;
        grid-template-columns: 1fr
    }

    .striped-divider-2 {
        height: 85px
    }

    .hero-dark-img-vid-2.ai {
        background-size: auto 200px
    }

    .callout-3-column-2 {
        grid-template-columns: 1fr
    }

    .tab_menu_link_icon-2 {
        font-size: 13px
    }

    .nav-logo-link-block-2 {
        padding-left: 0
    }

    .mobile-align-center {
        justify-content: flex-start;
        align-items: center
    }

    .mobile-text-align-center {
        text-align: center
    }

    .big-headline-25 {
        position: relative
    }

    .collection-item-5,.masonry--item {
        margin-top: 15px;
        margin-bottom: 15px
    }

    .collection-list-wrapper-3 {
        column-gap: 15px
    }

    .container-26-2.no-padding-mobile-2 {
        padding-left: 0;
        padding-right: 0
    }

    .product-subheading-2-2 {
        max-width: 480px;
        font-size: .9rem;
        line-height: 1.4rem
    }

    .nav-dropdown-list-2-2.w--open {
        border-bottom: 1px solid #dbdbdb
    }

    .hero-img-vid-wrapper-2-2 {
        max-width: 28rem;
        margin-top: 2.5rem
    }

    .border-left-2-2 {
        border-left-width: 0
    }

    .border-left-2-2.feature-padding-2 {
        padding: 3rem 1rem 2rem
    }

    .nav-link_text-link-2-2.nav-mobile-only-2 {
        display: block
    }

    .no-padding-3-2 {
        grid-column-gap: 35px;
        grid-row-gap: 35px;
        grid-template-columns: 1fr
    }

    .no-padding-3-2.min-height-400-2 {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .navbar-2-2 {
        z-index: 9999
    }

    .border-right-2-2 {
        border-right-style: none;
        border-right-width: 0
    }

    .border-right-2-2.background-color-light-2-2.cell-position-relative-2 {
        justify-content: flex-end;
        align-items: flex-end
    }

    .background-color-white-2-2.grid-bottom-right-2 {
        padding-left: 0
    }

    .background-color-white-2-2.grid-top-right-2 {
        padding-top: 2rem;
        padding-left: 0
    }

    .ai-function-definition-2-2 {
        text-align: left
    }

    .grid-with-borders-2x2-2-2 {
        grid-row-gap: 1px;
        grid-template-columns: 1fr
    }

    .striped-divider-2-2 {
        height: 85px
    }

    .hero-dark-img-vid-2-2.ai-2 {
        background-size: auto 200px
    }

    .callout-3-column-2-2 {
        grid-template-columns: 1fr
    }

    .tab_menu_link_icon-2-2 {
        font-size: 13px
    }

    .nav-logo-link-block-2-2 {
        padding-left: 0
    }

    .div-block-240 {
        background-position: 200px
    }

    .product-shot-frame-sm.texture-1 {
        padding-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem
    }

    .mobile-margin-bottom {
        margin-bottom: 2rem
    }
}

@media screen and (max-width: 479px) {
    h1 {
        font-size:2.2rem;
        line-height: 2.9rem
    }

    h2,h3 {
        font-size: 2rem;
        line-height: 2.4rem
    }

    blockquote {
        font-size: 1.2rem;
        line-height: 2rem
    }

    .paragraph-1.g-text-align-center {
        text-align: left
    }

    .paragraph-1.g-mg-bottom-large {
        margin-bottom: 1.3rem
    }

    .paragraph-2.g-mg-bottom-large._404 {
        width: 90%
    }

    .button-primary.cc-hero-button {
        padding-left: 27px
    }

    .button-primary.cc-hero-button:hover {
        background-color: #0004e1;
        border-color: #0004e1
    }

    .header.g-mg-bottom-small.g-text-align-center {
        margin-top: 0
    }

    .g-text-align-center.header-6 {
        font-size: 24px;
        line-height: 33.6px
    }

    .rich-text-2.cc-resources.g-mg-bottom-large {
        max-width: 280px
    }

    .container-small.feature-category,.container-small.learn-category {
        padding-left: 0;
        padding-right: 0
    }

    .section-hero-free-trial.g-section-padding-medium.new-gray.launch-signup {
        background-size: 100%
    }

    .hubspot-form-wrapper {
        padding: 18px
    }

    .buttons-wrapper.cc-home {
        flex: 1
    }

    .buttons-wrapper.cc-home.mobil-buttons-wrapper {
        padding-left: 10px;
        padding-right: 10px
    }

    .investors-logo-image {
        width: 130px
    }

    .nav-links_list-item,.nav-dropdown_toggle {
        font-family: Dmmono,sans-serif
    }

    .nav-link_text-link.nav-mobile-only {
        background-color: var(--nimbus)
    }

    .sigma-rich-text h3 {
        font-size: 1.9rem;
        line-height: 2.1rem
    }

    .sigma-rich-text h4 {
        font-size: 1.5rem;
        line-height: 1.7rem
    }

    .sigma-rich-text h5 {
        font-weight: 500
    }

    .sigma-rich-text h6 {
        font-weight: 600
    }

    .contact_offices-layout {
        grid-template-columns: 1fr
    }

    .blog-page-flex-wrapper {
        flex-wrap: wrap
    }

    .utility-page-wrap {
        height: 60vh
    }

    .utility-page-content {
        grid-column-gap: 38px;
        grid-row-gap: 38px
    }

    .partner-item {
        flex-flow: wrap;
        align-items: stretch;
        display: flex
    }

    .partner-image-wrapper {
        margin-bottom: 0
    }

    .section-partner-info {
        padding-top: 3rem;
        padding-bottom: 3rem
    }

    .section.customer-stories-hero {
        min-height: auto
    }

    .section.background-color-light.ai-header {
        background-size: auto 60%
    }

    .section.padding-top-tiny {
        padding-top: 0
    }

    .section.background-color-sky,.section.background-color-sky.product-launch-header {
        background-size: 300px
    }

    .section.data-apps-event-promo {
        background-size: 250%
    }

    .section.data-apps-header-light {
        background-size: auto 400px
    }

    .section.ai {
        background-size: auto 70%
    }

    .section.home-quote {
        background-image: none;
        background-repeat: repeat;
        background-size: auto
    }

    .section.home-quote.blue,.section.diff-ai-workflows {
        background-image: none;
        background-position: 0 0;
        background-repeat: repeat;
        background-size: auto
    }

    .blog-author-wrapper {
        flex-wrap: wrap
    }

    .how-to-article-footer-button-wrapper {
        width: 100%
    }

    .col {
        flex-basis: 100%;
        max-width: 100%
    }

    .row.justify-center {
        flex-flow: column
    }

    .row.align-center.justify-between {
        padding-top: 0
    }

    .g-show-tablet-below {
        font-size: 24px;
        line-height: 33.6px
    }

    .hero-default-layout.python {
        grid-template-columns: 6.5fr
    }

    .breadcrumb-list.ebook {
        display: none
    }

    .u-mb-0 {
        margin-bottom: 0
    }

    .g-section-padding-xsmall {
        padding-top: 0;
        font-size: 24px;
        line-height: 33.6px
    }

    .video {
        width: 100%
    }

    .subprocessors-table-heading {
        grid-column-gap: 8px
    }

    .ai-blog-card {
        flex-direction: column;
        display: flex
    }

    .header-4.g-mg-bottom-large.free-trial-form-mb-text {
        font-size: 2rem
    }

    .blog-authors-collection-list {
        flex-flow: column
    }

    .section-python-features {
        padding-left: 12px;
        padding-right: 12px
    }

    .div-block-27,.grid-4 {
        grid-template-columns: 1fr
    }

    .div-block-29 {
        padding: 1rem 0 1rem .5rem
    }

    .content-align-center {
        align-items: center
    }

    .grid-section {
        padding: 0
    }

    .pricing-check-cell {
        padding: 5px
    }

    .pricing-description-cell-2 {
        padding: 10px
    }

    .matrix-title {
        font-size: 2.5vw
    }

    .pricing-check-column-titles {
        padding-left: 5px;
        padding-right: 5px
    }

    .matrix-copy {
        font-size: 3.5vw
    }

    .tableau-e-book {
        padding-left: 12px;
        padding-right: 12px
    }

    .ebook-embedded-img {
        padding-top: 20px
    }

    .quick-stack-10 {
        grid-column-gap: 20px;
        grid-row-gap: 20px
    }

    .navigation {
        display: none
    }

    .margin-vertical {
        margin-left: 0;
        margin-right: 0
    }

    .margin-bottom {
        margin-top: 0;
        margin-left: 0;
        margin-right: 0
    }

    .padding-top {
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0
    }

    .text-rich-text h3 {
        font-size: 1.7rem;
        line-height: 1.9rem
    }

    .text-rich-text h4 {
        font-size: 1.3rem;
        line-height: 1.6rem
    }

    .text-rich-text h5 {
        font-size: 1.1rem;
        line-height: 1.3rem
    }

    .text-rich-text h1 {
        font-size: 2.4rem;
        line-height: 2.6rem
    }

    .margin-horizontal {
        margin-top: 0;
        margin-bottom: 0
    }

    .padding-bottom {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    .padding-vertical {
        padding-left: 0;
        padding-right: 0
    }

    .padding-horizontal {
        padding-top: 0;
        padding-bottom: 0
    }

    .h1-larger {
        letter-spacing: -.1rem;
        font-size: 2.2rem;
        line-height: 2.5rem
    }

    .max-width-full-mobile-portrait {
        width: 100%;
        max-width: none
    }

    .button {
        display: block
    }

    .button.is-secondary.is-white-empty.margin-top-small.explore {
        margin-top: 0
    }

    .button.pop-up-modal_btn.hide-mobile-landscape {
        display: none
    }

    .button.show-mobile-portrait {
        display: block
    }

    .padding-left {
        padding-top: 0;
        padding-bottom: 0;
        padding-right: 0
    }

    .text-style-allcaps.text-style-mono.text-style-bold.feature-label {
        display: none
    }

    .padding-medium {
        padding-left: 0;
        padding-right: 0
    }

    .padding-medium.background-color-white.mobile-padding {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .margin-top {
        margin-bottom: 0;
        margin-left: 0;
        margin-right: 0
    }

    .margin-right {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0
    }

    .hide-mobile-portrait {
        display: none
    }

    .margin-left {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0
    }

    .fs-styleguide_row {
        flex-wrap: wrap
    }

    .padding-right {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0
    }

    .fs-style_dropdown-toggle {
        font-size: 15px
    }

    .fs-style_block-header {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start
    }

    .fs-style_block {
        border-style: none;
        padding: 0
    }

    .fs-style_components {
        padding: 4rem 5vw
    }

    .footer_logo {
        width: 8.5rem
    }

    .fs-style_list-item {
        grid-auto-flow: row
    }

    .fs-style_interaction {
        margin-top: 12px
    }

    .footer_grid {
        grid-row-gap: 1.5rem
    }

    .content_collection-list {
        grid-row-gap: 1rem;
        grid-template-columns: 1fr
    }

    .content_collection-list._2-column {
        grid-template-columns: 1fr
    }

    .filter_block.no-border {
        width: 100%;
        margin-bottom: 1rem
    }

    .sort-by {
        flex-flow: column
    }

    .grid-col-5 {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        grid-template-columns: 1fr 1fr 1fr
    }

    .striped-divider {
        height: 50px
    }

    .rotator-text-tab-links {
        grid-auto-columns: 1fr
    }

    .rotator-tab-link {
        text-align: center;
        padding-left: 15px;
        padding-right: 15px
    }

    .rotator-tab-link.w--current {
        margin-left: 0;
        margin-right: 0;
        padding-left: 15px;
        padding-right: 15px
    }

    .card_swiper_inner {
        padding-top: 5rem;
        padding-bottom: 2rem
    }

    .card_swiper_content {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px
    }

    .email-signup.section {
        background-size: auto 100px,auto 100px;
        padding-top: 4.5rem;
        padding-bottom: 8.5rem
    }

    .feature-block {
        display: flex
    }

    .text-link-allcaps.no-margin-bottom.text-size-small {
        font-size: .9rem;
        line-height: 1.3rem
    }

    .h1-subpage-hero.text-color-light,.h1-subpage-hero.text-color-light-3,.h1-subpage-hero.text-color-light-3-2 {
        margin-bottom: 1rem;
        line-height: 2.5rem
    }

    .cta-block {
        flex-flow: column;
        display: flex
    }

    .nav-dropdown-list-ad {
        text-align: center;
        background-position: 105% 105%;
        background-size: auto 88%
    }

    .timeline-stack {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem
    }

    .timeline-cell {
        padding-top: .35rem
    }

    .b-team-avatar {
        width: 100px;
        height: 100px
    }

    .team-collection-list {
        grid-column-gap: 25px;
        grid-template-columns: 1fr 1fr
    }

    .text-family-mono.hanging-punctuation {
        font-size: 1.5rem
    }

    .text-family-mono.text-size-tiny {
        line-height: 1rem
    }

    .quick-stack-21 {
        grid-row-gap: 26px
    }

    .text-color-light.mobile-adjust {
        font-size: 2.8rem;
        line-height: 3.2rem
    }

    .text-size-xl {
        font-size: 1.75rem;
        line-height: 2.5rem
    }

    .filter-buttons {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        grid-auto-flow: column
    }

    .header-5-2.g-font-weight-regular-400.g-text-color-neutral-0.g-mg-bottom-xlarge.launch {
        margin-top: 1rem;
        font-size: 1.5rem
    }

    .no-padding.margin-top.no-margin-mobile {
        margin-top: 0
    }

    .border-left.border-right.mobile-padding-fix {
        padding-top: 4rem;
        padding-left: 1rem;
        padding-right: 1rem
    }

    .border-left.feature-padding {
        padding-top: 2.25rem;
        padding-bottom: 1.25rem;
        padding-right: 1rem
    }

    .border-right.background-color-light-2.cell-position-relative {
        justify-content: space-between;
        align-items: flex-end
    }

    .border-top.border-bottom.margin-top-small.margin-bottom-small.padding-top-tiny.padding-bottom-tiny.no-padding-top {
        padding-top: 0
    }

    .cta-block-buttons {
        flex-flow: column;
        justify-content: center;
        align-items: stretch
    }

    .background-color-light.padding-small,.background-color-light.padding-top-small {
        padding-top: 1rem
    }

    .grid-with-borders {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem
    }

    .momentum-leader-badges {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        justify-content: space-between;
        align-items: center
    }

    .eyebrow {
        line-height: 23px
    }

    .verticals-tab-left-cell {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .square-tag-card-1 {
        padding: 5px 10px
    }

    .b-card-slider-card {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        grid-template-columns: 1rem 1fr;
        padding-left: 1rem;
        padding-right: 1rem
    }

    .card-content {
        padding-top: 2rem;
        padding-bottom: 2rem
    }

    .card-link {
        display: block
    }

    .card-link.compact {
        flex-flow: column
    }

    .quickstack-header {
        grid-column-gap: 40px;
        grid-row-gap: 40px
    }

    .f-footer-large-grid {
        grid-template-columns: 1fr 1fr
    }

    .quick-stack-38-2-2 {
        height: 100%
    }

    .quick-stack-40-2 {
        grid-column-gap: 32px
    }

    .quick-stack-38-2 {
        grid-column-gap: 35px;
        grid-row-gap: 35px
    }

    .company-logo {
        max-width: 130px
    }

    .journey_card_text.left {
        padding-left: 2rem
    }

    .journey_card_image.right.hide-mobile {
        display: none
    }

    .journey_card_image.right.wider {
        width: 100%
    }

    .journey_card_image.left.hide-mobile {
        display: none
    }

    .swiper-wrapper {
        height: 180px
    }

    .countdown-side-right {
        padding-top: 56px;
        padding-bottom: 56px
    }

    .product-subheading {
        font-size: .875rem;
        line-height: 1.4rem
    }

    .customer-page-title {
        font-size: 2.1rem;
        line-height: 2.1rem
    }

    .customer-rich-text blockquote {
        margin-top: 51px;
        margin-bottom: 51px;
        padding-top: 14px;
        padding-bottom: 14px;
        padding-left: 20px;
        font-size: 1.1rem;
        line-height: 1.9rem
    }

    .job-location {
        padding-right: 0
    }

    .lottie-loading-animation-2 {
        width: 80%
    }

    .tab_menu.background-color-light-2-2 {
        border-radius: 0
    }

    .tab_menu_link {
        font-size: 12px
    }

    .tab_menu_link.light {
        transition: all .2s
    }

    .tab_menu_link.light:hover {
        background-color: #ffffff80
    }

    .tab_menu_link.light.w--current {
        background-color: var(--insight)
    }

    .row-3 {
        flex-flow: wrap-reverse
    }

    .announcement-ribbon {
        position: relative
    }

    .list-gid-col-2.margin-top-small {
        grid-template-columns: 1fr
    }

    .page-tabs-border-section {
        margin-top: 2.5rem;
        padding: 1.5rem 1rem
    }

    .page-tabs-border-section.no-style {
        margin-top: 0
    }

    .logos-grid-col-4 {
        grid-column-gap: 2rem;
        grid-template-columns: 1fr 1fr
    }

    .max-width-half.text-align-center.mobile-left {
        text-align: left;
        align-self: flex-start
    }

    .padding-top-tiny.padding-bottom-lrg {
        margin-bottom: .6rem
    }

    .heading-21 {
        line-height: 2.75rem
    }

    .momentum-badge {
        width: 30%
    }

    .striped-divider-gray {
        height: 45px
    }

    .margin-top-bottom-tiny-2 {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem
    }

    .tertiary-link-dark {
        text-decoration: none
    }

    .background-rad-banner {
        background-color: #000
    }

    .heading-13,.container-wrap-x {
        display: none
    }

    .row-4 {
        flex-flow: wrap-reverse
    }

    .container-22.g-mg-bottom-xxlarge.weekly-webinar-header.weekly-webinar-mobile {
        background-position: 0 0;
        width: 95%;
        margin-left: 10px;
        margin-right: 10px;
        display: none
    }

    .text-block-24 {
        line-height: 27px
    }

    .rad-banner.rad-banner-asset.margin-lr-small {
        margin-left: 20px;
        margin-right: 20px
    }

    .ebookformpopupwrapper {
        -webkit-backdrop-filter: blur(3px);
        backdrop-filter: blur(3px);
        background-color: #ffffff1f;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        margin-top: 3rem;
        display: none;
        position: absolute
    }

    .ebookformpopup {
        width: 98vw;
        margin-right: auto;
        position: relative;
        top: auto;
        left: auto;
        transform: none
    }

    .tab-journey-card-inner {
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        grid-template-columns: 1rem 1fr
    }

    .tab-journey-card {
        padding-top: 4rem
    }

    .resource-card.mobile-hidden {
        display: none
    }

    .partner-block {
        margin-bottom: 4rem
    }

    .team-name {
        font-size: 1.1rem
    }

    .breadcrumb {
        margin-left: 0;
        display: none
    }

    .integration-list {
        grid-template-columns: 1fr
    }

    .resources-3-columns {
        grid-template-columns: 1fr;
        grid-auto-flow: row
    }

    .hero-img-vid-wrapper {
        max-width: 20.5rem;
        margin-top: 2rem
    }

    .hero-img-vid-wrapper.home {
        max-width: 22.5rem
    }

    .hero-dark-img-vid.ai,.hero-dark-img-vid.collaboration,.hero-dark-img-vid.data-apps,.hero-dark-img-vid.write-back-2,.hero-dark-img-vid.dashboards,.hero-dark-img-vid.python {
        background-size: auto 150px
    }

    .hero-dark-img-vid.embedded-analytics {
        background-size: auto 120px
    }

    .grid-7 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    .comparison-heading-bar.left {
        display: none
    }

    .quickstack-comparison {
        margin-left: 0;
        margin-right: 0;
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    .quickstack-comparison.no-padding {
        grid-column-gap: 1px;
        grid-row-gap: 1px;
        margin-left: 0;
        margin-right: 0
    }

    .comparison-cell {
        flex-flow: column
    }

    .quickstack-left-right {
        flex: 0 auto;
        width: 100%
    }

    .cell-53 {
        padding-left: 0;
        padding-right: 0
    }

    .cell-54 {
        flex-flow: column
    }

    .text-block-25 {
        padding-right: 12px;
        font-size: 11px;
        line-height: 1.1rem
    }

    .quick-stack-45 {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .cell-56 {
        padding-left: 12px
    }

    .cell-57 {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .image-55-copy {
        top: -9%
    }

    .impact-awards-grid {
        grid-template-columns: 1fr
    }

    .image-55-2 {
        width: 48px
    }

    .cta-block-center {
        flex-flow: column;
        display: flex
    }

    .tab-journey-card-tab {
        padding: 5px 10px
    }

    .customer-story-thumbnail {
        min-height: 180px
    }

    .content_collection-featured {
        grid-template-columns: 1fr
    }

    .template-preview-section {
        height: 150px
    }

    .data-apps,.embedded {
        background-size: auto 120px
    }

    .governance {
        background-size: auto 150px
    }

    .dashboards {
        background-size: auto 120px
    }

    .ribbon-flex {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        flex-flow: column
    }

    .announcement-text {
        text-align: center
    }

    .button-ribbon {
        margin-bottom: 10px
    }

    .quick-stack-49 {
        padding: 0
    }

    .logo-contain-sml {
        justify-content: center;
        align-items: center;
        width: 100%;
        display: flex
    }

    .quick-stack-50 {
        padding-left: 0;
        padding-right: 0
    }

    .resource-ad {
        margin-top: 0
    }

    .h1-hero {
        font-size: 2rem;
        line-height: 2.4rem
    }

    .h1-hero.home {
        font-size: 2.2rem;
        line-height: 120%
    }

    .home-intro-text {
        margin-bottom: 18px
    }

    .simple-cta-link {
        font-size: .9rem
    }

    .announcements {
        margin-bottom: .125rem;
        padding-bottom: 1rem;
        display: flex
    }

    .resource-thumbnail {
        margin-bottom: -2px
    }

    .heading-32 {
        line-height: 2.6rem
    }

    .collection-item-4 {
        grid-template-columns: 1fr
    }

    .container-two-column {
        margin-right: 0
    }

    .div-block-211 {
        display: none
    }

    .product-launch {
        margin-left: 0;
        margin-right: 0
    }

    .image-69 {
        width: 100%
    }

    .f-footer-related {
        grid-template-columns: 1fr
    }

    .nav-dropdown-list-related-link {
        width: 100%;
        margin-right: .5rem
    }

    .cta-on-demand {
        flex-flow: column
    }

    .quickstack-comparison-sticky {
        margin-left: 0;
        margin-right: 0;
        padding-top: 0;
        padding-left: 0;
        padding-right: 0
    }

    .quickstack-comparison-sticky.no-padding {
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        margin-left: 0;
        margin-right: 0
    }

    .jumplinks-wrapper.cc-home {
        flex: 1
    }

    .jumplinks-wrapper.cc-home.mobil-buttons-wrapper {
        padding-left: 10px;
        padding-right: 10px
    }

    .featured-event.background-color-sky.background-image {
        justify-content: flex-start;
        align-items: center;
        padding-right: 1rem
    }

    .featured-event-image.data-apps-logo {
        height: 120px;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0;
        display: none
    }

    .featured-event-text {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 1rem
    }

    .featured-event-block {
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start
    }

    .gdoc-embed,.gdoc-embed-mobile {
        display: block
    }

    .button-row.text-style-allcaps.text-size-tiny {
        justify-content: center;
        align-items: flex-start
    }

    .notification-ribbon-2 {
        position: relative
    }

    .notification-flex-2 {
        flex-flow: column
    }

    .ribbon-cta {
        margin-bottom: 0
    }

    .event-date-large {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem;
        flex-flow: column;
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 1.1rem
    }

    .event-list {
        grid-column-gap: 0px;
        grid-row-gap: 0px
    }

    .worldtour-header-img {
        display: none
    }

    .text-size-huge {
        font-size: 3rem;
        line-height: 3rem
    }

    .worldtour-section-header {
        margin-left: 1rem;
        margin-right: 1rem
    }

    .flex-row-1rem {
        flex-flow: column
    }

    .blog-stack {
        padding-left: 0;
        padding-right: 0
    }

    .block-quote,.block-quote-2 {
        font-size: 1.2rem;
        line-height: 2rem
    }

    .product-launch-paragraph {
        width: 100%;
        font-size: 1.2rem;
        line-height: 1.5rem
    }

    .filter-row {
        flex-flow: column
    }

    .filter_options_inline.library-key {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column
    }

    .library-filters-header {
        padding-top: 1rem;
        padding-bottom: 1rem;
        display: block
    }

    .top-aligned-callout {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem
    }

    .blog-collection-list,.blog-category-list {
        grid-row-gap: 1rem;
        grid-template-columns: 1fr
    }

    .feature-ad-block-blog {
        background-image: none;
        background-position: 0 0;
        background-repeat: repeat;
        background-size: auto;
        overflow: hidden
    }

    .blog-category-list-3 {
        grid-row-gap: 1rem;
        grid-template-columns: 1fr
    }

    .page-tabs-border-section-flex {
        padding: 1.5rem 1rem
    }

    .page-tabs-border-section-flex.page-tab-tall {
        margin-top: 0
    }

    .partner-databricks {
        background-size: auto 120px
    }

    .page-tabs-quote-callout {
        margin-top: 2.5rem;
        padding: 0 2rem 1.5rem
    }

    .library-box-image {
        border-bottom-width: 35px
    }

    .library-bottom-text {
        padding-right: 0
    }

    .blog-team-wrapper {
        flex-wrap: wrap
    }

    .tab_menu_link_icon {
        font-size: 12px
    }

    .tab_menu_link_icon.light {
        transition: all .2s
    }

    .tab_menu_link_icon.light:hover {
        background-color: #ffffff80
    }

    .tab_menu_link_icon.light.w--current {
        background-color: var(--insight)
    }

    .tab_menu_icons.background-color-light-2-2 {
        border-radius: 0
    }

    .ai-function-definition,.ai-function-definition-header {
        display: none
    }

    .feature-padding-centered {
        padding-top: 2.25rem;
        padding-bottom: 1.25rem;
        padding-right: 1rem
    }

    .library-collection-2col {
        grid-row-gap: 1rem;
        grid-template-columns: 1fr
    }

    .library-box-category {
        flex-flow: column
    }

    .library-box-image-small,.library-box-image-small.card-link-url {
        max-width: 100%;
        max-height: 100%
    }

    .library-types-small {
        top: 80%
    }

    .library-key {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-flow: wrap;
        justify-content: center;
        align-items: flex-start;
        margin-top: 1rem
    }

    .library-type-large {
        display: none
    }

    .ribbon-cta-2 {
        margin-bottom: 1rem
    }

    .notification-flex-3 {
        flex-flow: column;
        padding-top: 0
    }

    .survey-description {
        padding-left: 0;
        padding-right: 0
    }

    .quote-side-by-side {
        margin-top: 2.5rem;
        margin-bottom: 0;
        padding: 0 2rem 1.5rem
    }

    .cell-66 {
        padding-top: 2rem
    }

    .hero-light-img-vid.ai,.hero-light-img-vid.collaboration,.hero-light-img-vid.data-apps,.hero-light-img-vid.write-back-2,.hero-light-img-vid.dashboards,.hero-light-img-vid.python {
        background-size: auto 150px
    }

    .hero-light-img-vid.embedded-analytics {
        background-size: auto 120px
    }

    .industry-logo {
        max-width: 130px
    }

    .data-apps-conf-header {
        margin-top: 2.5rem;
        padding: 1.5rem 1rem
    }

    .data-apps-desc {
        min-width: 280px
    }

    .callout-3-column {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .speaker-wrapper {
        flex-wrap: wrap
    }

    .data-apps-session-block.data-apps-colspan-2 {
        background-size: 40%
    }

    .data-apps-stats {
        flex-flow: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 4rem
    }

    .data-apps-stat {
        margin-bottom: 4rem
    }

    .data-app-stat-num {
        height: 65px
    }

    .data-app-stats {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem;
        width: 85%;
        margin-bottom: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0
    }

    .no-margin-top {
        margin-top: 0
    }

    .blog-feature-header-custom {
        text-align: left
    }

    .overview-gartner-block {
        grid-template-columns: 1fr;
        padding-left: 0
    }

    .overview-gartner-block.margin-top-medium {
        text-align: center;
        grid-template-columns: 1fr
    }

    .subhead-left {
        font-size: .875rem;
        line-height: 1.4rem
    }

    .gartner-block {
        margin-right: auto
    }

    .overview-block {
        padding: 1.5rem 1rem
    }

    .overview-block.page-tab-tall {
        margin-top: 0
    }

    .sticky-card {
        padding: 1.5rem 1rem
    }

    .sticky-card.page-tab-tall {
        margin-top: 0
    }

    .sticky-card-left {
        padding: 1rem
    }

    .data-apps-time-header {
        flex-flow: column;
        justify-content: space-between;
        align-items: center
    }

    .library-box-video {
        border-bottom-width: 35px
    }

    .data-apps-main-header {
        min-width: 200px
    }

    .data-apps-logo {
        display: none
    }

    .appathon-block {
        flex-flow: column
    }

    .summit-header {
        margin-top: 2.5rem;
        padding: 1.5rem 1rem
    }

    .summit-tagline {
        font-size: 3rem
    }

    .learn-nav-sticky {
        display: none
    }

    .learn-content {
        max-width: 199%;
        margin-right: 1rem
    }

    .smaller-rich-text h3 {
        font-size: 1.9rem;
        line-height: 2.1rem
    }

    .smaller-rich-text h4 {
        font-size: 1.5rem;
        line-height: 1.7rem
    }

    .smaller-rich-text h5 {
        font-weight: 500
    }

    .smaller-rich-text h6 {
        font-weight: 600
    }

    .smaller-rich-text.margin-top-tiny.margin-bottom-huge {
        margin-bottom: 6rem
    }

    .mardness-promo {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-flow: column
    }

    .summit-header-2,.awards-header {
        margin-top: 2.5rem;
        padding: 1.5rem 1rem
    }

    .featured-event-texture {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        display: none
    }

    .sticky-left-list {
        display: none
    }

    .event-card-labels {
        flex-flow: column
    }

    .video-header-smaller {
        max-width: 20.5rem;
        margin-top: 2rem
    }

    .video-header-smaller.home {
        max-width: 22.5rem
    }

    ._100m-arr-text,._100m-arr-what,._100m-arr-header {
        margin-left: 1rem;
        margin-right: 1rem
    }

    ._100m-arr-grid-get {
        grid-template-columns: 1fr
    }

    ._100m-arr-paragraph,._100m-arr-what-you-get,._100m-arr-paragraph-dark {
        margin-left: 1rem;
        margin-right: 1rem
    }

    ._100m-arr-what-you-get-dark {
        margin-left: 1rem;
        margin-right: 1rem;
        padding-left: 0;
        padding-right: 0
    }

    .blog-feature-header-custom-2nd {
        font-size: 2rem
    }

    .session-block-dark {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .session-block-dark.data-apps-colspan-2 {
        background-size: 40%
    }

    .spring-showcase-paragraph {
        width: 100%;
        padding-left: .5rem;
        padding-right: .5rem;
        font-size: 1.2rem;
        line-height: 1.5rem
    }

    .video-embed-height {
        min-height: 18vh
    }

    .calendar-links {
        flex-flow: wrap;
        justify-content: center;
        align-items: center
    }

    .button-6 {
        width: 310px;
        margin-left: 5px;
        margin-right: 5px
    }

    .showcase-message {
        width: 100%;
        font-size: 1.2rem;
        line-height: 1.5rem
    }

    .momentum-btm {
        text-align: center;
        flex-flow: column;
        max-width: none;
        left: 0;
        right: 0
    }

    .momentum-left-top-v2 {
        max-width: none
    }

    .momentum-leader-badges-v2 {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        justify-content: space-between;
        align-items: center
    }

    .momentum-leader-v2 {
        align-items: stretch
    }

    .overlay-content {
        position: relative
    }

    .overlay-header {
        line-height: 100%
    }

    .overlay-subhead {
        width: 100%;
        font-size: 1rem
    }

    .schedule-grid {
        grid-template-rows: auto auto auto auto auto
    }

    .schedule-2col {
        flex-flow: column
    }

    .quick-stack-menu {
        padding-left: 0;
        padding-right: 0
    }

    .menu-stack {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem
    }

    .menu-cell {
        padding-top: .35rem
    }

    .stack-link {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem
    }

    .slick-nav-menu {
        grid-column-gap: .25rem;
        grid-row-gap: .25rem;
        padding: .5rem
    }

    .slick-link {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .v-10 {
        grid-template-columns: 1fr 1fr 1fr
    }

    .h1-hero-25 {
        font-size: 3.7rem;
        line-height: 100%
    }

    .h1-hero-25.home {
        font-size: 2rem;
        line-height: 120%
    }

    .button-wrapper-center {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        display: flex
    }

    .home-callouts {
        flex-flow: column
    }

    .home-25-video {
        flex-flow: column-reverse;
        margin-top: 2rem;
        display: flex
    }

    .persona-stack {
        height: 280px
    }

    .h2-home,.h2-home.data-apps-smaller {
        font-size: 3rem
    }

    .home-feature-grid {
        grid-template-columns: 1fr 1fr
    }

    .striped-divider-light,.striped-divider-light-flipped {
        height: 50px
    }

    .h2-home-overlay {
        margin-left: 0;
        font-size: 2.5rem
    }

    .home-subheader {
        width: 100%;
        font-size: 1rem
    }

    .h3-home-sticky {
        padding-left: .5rem;
        padding-right: .5rem
    }

    .home-stats-wrapper {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-flow: column;
        margin-bottom: 4rem
    }

    .button-wrapper-over-video {
        margin-top: 2rem;
        padding-bottom: 0;
        position: relative
    }

    .home-img-vid-wrapper {
        max-width: 20.5rem;
        margin-top: 2rem
    }

    .home-img-vid-wrapper.home {
        max-width: 22.5rem
    }

    .home-feature-grid-new {
        grid-template-columns: 1fr 1fr
    }

    .home-feature-block-double {
        flex-flow: column
    }

    .page-tabs-border-section-left {
        margin-top: 2.5rem;
        padding: 1.5rem 1rem
    }

    .stars-reviews {
        flex-flow: row;
        font-size: 1.25rem
    }

    .all-personas {
        grid-template-columns: 1fr
    }

    .hide-5th-persona {
        display: block
    }

    .data-apps-col {
        width: 100%;
        margin-top: 0;
        margin-bottom: 0;
        padding-bottom: 0
    }

    .data-apps-flex {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem
    }

    .home-logo-grid {
        grid-template-columns: 1fr 1fr;
        margin-top: 2rem
    }

    .home-logo-block-quad {
        flex-flow: column
    }

    .home-logo-double {
        flex-flow: row
    }

    .customer-stack {
        height: 280px
    }

    .persona-card-content {
        border-style: none
    }

    .persona-card-inner,.persona-card-inner.text-right {
        flex-flow: column
    }

    .persona-holder {
        width: 100%
    }

    .ai-overlay {
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 8rem;
        display: flex
    }

    .show-mobile-portrait {
        display: block
    }

    .gartner-logos {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        flex-flow: wrap;
        justify-content: center;
        align-items: center
    }

    .section-quotes.customer-stories-hero {
        min-height: auto
    }

    .section-quotes.padding-top-tiny {
        padding-top: 0
    }

    .section-quotes.background-color-sky,.section-quotes.background-color-sky.product-launch-header {
        background-size: 300px
    }

    .section-quotes.data-apps-event-promo {
        background-size: 250%
    }

    .section-quotes.data-apps-header-light {
        background-size: auto 400px
    }

    .data-apps-featured {
        grid-column-gap: 0rem;
        grid-row-gap: 0rem;
        grid-template-columns: 1fr;
        margin-bottom: 0
    }

    .app-featured {
        padding-bottom: 2.5rem
    }

    .app-featured:hover {
        background-color: var(--shadow)
    }

    .announcement-wrapper {
        position: relative
    }

    .home-25-headline {
        padding-top: 3rem;
        position: relative
    }

    .live-event-thumb {
        height: 140px
    }

    .home_features-list_row {
        grid-template-columns: 1fr
    }

    .surfaces-item-link {
        padding-top: 1rem
    }

    .home-25-subhead {
        width: 100%;
        font-size: 1rem
    }

    .data-apps-callout-icon {
        display: none
    }

    .home-callout-large {
        background-image: none;
        background-position: 0 0;
        background-repeat: repeat;
        background-size: auto;
        padding-left: 2rem;
        padding-right: 2rem
    }

    .h3-home {
        font-size: 3.5rem
    }

    .callout-card-sm-content {
        padding-bottom: 1rem
    }

    .forrester-block {
        grid-template-columns: 1fr
    }

    .forrester-image-block {
        overflow: hidden
    }

    .card-header {
        height: 180px
    }

    .ai-feature-2 {
        max-width: 250px
    }

    .data-apps-list {
        grid-template-columns: 1fr
    }

    .ai-feature-3 {
        max-width: 250px
    }

    .ai-feature-abs-1 {
        display: none
    }

    .ai-feature-abs-2 {
        max-width: 320px;
        margin-left: 0
    }

    .ai-feature-abs-3 {
        max-width: 250px
    }

    .ai-features-abs {
        min-height: 340px
    }

    .home-quote-inline {
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        padding-left: 1rem;
        padding-right: 1rem
    }

    .home-quote-inline.background-color-white.mobile-padding {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .stars-divider {
        display: none
    }

    .grid-with-borders-2 {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem
    }

    .product-video {
        flex-flow: column-reverse;
        margin-top: 2rem;
        display: flex
    }

    ._3-badge-lockup {
        width: 80%;
        margin-left: auto;
        margin-right: auto
    }

    .star-reviews-modal {
        opacity: 1;
        visibility: visible;
        height: auto;
        display: none
    }

    .star-reviews-modal.active {
        display: block
    }

    .wistia-form-wrapper,.wistia-event-wrapper {
        padding: 18px
    }

    .button-8 {
        display: block
    }

    .button-8.is-secondary.is-white-empty.margin-top-small.explore {
        margin-top: 0
    }

    .video-button {
        margin-top: 2rem;
        padding-bottom: 0;
        position: relative
    }

    .featured-event-block-2 {
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start
    }

    .featured-event-text-2 {
        grid-column-gap: .5rem;
        grid-row-gap: .5rem;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 1rem
    }

    .simple-cta-link-2,.simple-cta-link-2-copy {
        font-size: .9rem
    }

    .worldtour-25-header {
        margin-top: 2.5rem;
        padding: 1.5rem 1rem
    }

    .h1-subpage-left.text-color-light {
        margin-bottom: 1rem;
        line-height: 2.5rem
    }

    .product-header-2col,._2col {
        height: 100%
    }

    .product-shot-frame.texture-1 {
        padding-top: .5rem;
        padding-left: .5rem;
        padding-right: .5rem
    }

    .ai-block-large {
        min-height: 300px
    }

    .product-subheading-2 {
        font-size: .875rem;
        line-height: 1.4rem
    }

    .simple-cta-link-3 {
        font-size: .9rem
    }

    .hero-img-vid-wrapper-2 {
        max-width: 20.5rem;
        margin-top: 2rem
    }

    .border-left-2.feature-padding {
        padding-top: 2.25rem;
        padding-bottom: 1.25rem;
        padding-right: 1rem
    }

    .ai-function-definition-header-2 {
        display: none
    }

    .nav-link_text-link-2.nav-mobile-only {
        background-color: #f0f0f0
    }

    .border-right-2.background-color-light-2.cell-position-relative {
        justify-content: space-between;
        align-items: flex-end
    }

    .nav-dropdown_toggle-2 {
        font-family: Dmmono,sans-serif
    }

    .ai-function-definition-2 {
        display: none
    }

    .striped-divider-2 {
        height: 50px
    }

    .text-link-allcaps-4.no-margin-bottom.text-size-small {
        font-size: .9rem;
        line-height: 1.3rem
    }

    .hero-dark-img-vid-2.ai {
        background-size: auto 150px
    }

    .page-tabs-border-section-2 {
        margin-top: 2.5rem;
        padding: 1.5rem 1rem
    }

    .tab_menu_link_icon-2 {
        font-size: 12px
    }

    .mobile-align-center {
        justify-content: flex-start;
        align-items: center
    }

    .career-filter-flex {
        flex-flow: column
    }

    .big-headline-25 {
        padding-top: 3rem;
        position: relative
    }

    .collection-list-wrapper-3 {
        column-count: 1
    }

    .quick-stack-53 {
        padding-left: 0;
        padding-right: 0
    }

    .product-subheading-2-2 {
        font-size: .875rem;
        line-height: 1.4rem
    }

    .simple-cta-link-3-2 {
        font-size: .9rem
    }

    .hero-img-vid-wrapper-2-2 {
        max-width: 20.5rem;
        margin-top: 2rem
    }

    .border-left-2-2.feature-padding-2 {
        padding-top: 2.25rem;
        padding-bottom: 1.25rem;
        padding-right: 1rem
    }

    .ai-function-definition-header-2-2 {
        display: none
    }

    .nav-link_text-link-2-2.nav-mobile-only-2 {
        background-color: #f0f0f0
    }

    .border-right-2-2.background-color-light-2-2.cell-position-relative-2 {
        justify-content: space-between;
        align-items: flex-end
    }

    .nav-dropdown_toggle-2-2 {
        font-family: Dmmono,sans-serif
    }

    .ai-function-definition-2-2 {
        display: none
    }

    .striped-divider-2-2 {
        height: 50px
    }

    .text-link-allcaps-4-2.no-margin-bottom-2.text-size-small-2 {
        font-size: .9rem;
        line-height: 1.3rem
    }

    .hero-dark-img-vid-2-2.ai-2 {
        background-size: auto 150px
    }

    .page-tabs-border-section-2-2 {
        margin-top: 2.5rem;
        padding: 1.5rem 1rem
    }

    .tab_menu_link_icon-2-2 {
        font-size: 12px
    }

    .div-block-240 {
        background-image: none;
        background-position: 0 0;
        background-repeat: repeat;
        background-size: auto
    }

    .div-block-241 {
        width: 100%
    }

    .product-shot-frame-sm.texture-1 {
        padding-top: .5rem;
        padding-left: .5rem;
        padding-right: .5rem
    }
}

#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e034e-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e037f-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e03b0-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e03e1-0f4cccce {
    grid-template-rows: auto auto auto auto auto auto auto auto;
    grid-template-columns: 1fr
}

#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0432-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0435-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0444-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0450-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0453-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e045f-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0462-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e046e-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0471-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e047d-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0480-0f4cccce {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7e0733a5-9e6c-b41b-1f2b-3fd442d38647-61e1dc7a {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-a4e07877-dcc1-b9eb-ff5b-4fd9dc487909-dc487907 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-fd9727ec-c70c-5240-4f7b-cdedef535210-0f4ccd58,#w-node-fd9727ec-c70c-5240-4f7b-cdedef53521d-0f4ccd58,#w-node-fd9727ec-c70c-5240-4f7b-cdedef53522a-0f4ccd58,#w-node-fd9727ec-c70c-5240-4f7b-cdedef535237-0f4ccd58 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-fd9727ec-c70c-5240-4f7b-cdedef535251-0f4ccd58,#w-node-_78309dc9-84b4-e3a4-75f9-43044f5399be-22645f51 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-f1eae84e-768b-e838-c0af-32f02a18c002-22645f51 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-f1eae84e-768b-e838-c0af-32f02a18c003-22645f51 {
    grid-template-rows: 1fr;
    grid-template-columns: .5fr 1fr
}

#w-node-c276599e-5afa-be07-18e4-ad37aa7e49cc-aa7e49c8,#w-node-c276599e-5afa-be07-18e4-ad37aa7e49d8-aa7e49c8,#w-node-c276599e-5afa-be07-18e4-ad37aa7e49e4-aa7e49c8 {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-_2273738e-4884-a9c8-33e9-ae3eadae2ee3-0f4ccd5c {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_0718f2c6-8f31-c89e-1045-6c0a5f5d9ce3-0f4ccd5c {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_3d1a62ea-3de0-75ff-903d-835550f61ea4-0f4ccd5d {
    grid-template-rows: auto;
    grid-template-columns: 1fr
}

#w-node-_8604d654-8b7a-6c72-ea15-3de009efe891-0f4ccd5d,#w-node-_091d4cc4-1491-8c73-b1f0-54e36f8ebee3-0f4ccd5d {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr 1fr
}

#w-node-_19c50abd-cc58-f4d1-a4bf-14aad8d527e2-0f4ccd5d {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_0ce3c0d8-df2a-da57-2f73-675d414a26f4-0f4ccd5d {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_8c0d7651-eb0a-e889-baeb-253d467c9963-0f4ccd5f,#w-node-def87e6f-c67e-42ad-fa8b-9d2851d6f75f-0f4ccd5f {
    grid-template-rows: auto;
    grid-template-columns: .5fr .75fr
}

#w-node-_8f403e1a-cbb4-a2cd-fa40-5c8fc606ca6c-0f4ccd5f {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-c7fd7a27-971b-830c-df74-7c0b9312e27e-0f4ccd5f,#w-node-a0e3329c-51bb-664c-253b-d5bd9e1f9315-0f4ccd5f,#w-node-_81c7735a-d9fe-f749-1254-9b508d5aa009-0f4ccd5f,#w-node-_498adb3b-776e-d433-d2d1-547678fb6cc3-0f4ccd5f,#w-node-_984d51c3-229b-9edf-c1a4-b817f95012db-0f4ccd5f,#w-node-f7475645-aea6-4189-9ebd-b635b1448d07-0f4ccd5f,#w-node-_7d1d3e53-7ea4-1fff-2c35-29605b66cbdc-0f4ccd5f,#w-node-e7dbd627-c048-dd3b-f525-bc6a4654be5d-0f4ccd5f,#w-node-_4cbbe6ac-2806-01a9-ce62-944632680bf1-0f4ccd5f {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr 1fr
}

#w-node-_4c6979db-8c1a-1527-2f37-000bf3908615-0f4ccd5f {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr
}

#w-node-_6bb62485-deb8-7891-110f-4767176cbe22-0f4ccd63,#w-node-_6bb62485-deb8-7891-110f-4767176cbe23-0f4ccd63 {
    grid-template-rows: auto;
    grid-template-columns: .75fr
}

#w-node-_2985cfcc-79de-d380-625d-da94da00e966-0f4ccd63 {
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: grid
}

#w-node-f1340a19-8111-3ffd-ae44-5f4aa92d5bc3-0f4ccd63,#w-node-f1340a19-8111-3ffd-ae44-5f4aa92d5bc4-0f4ccd63 {
    grid-template-rows: auto;
    grid-template-columns: .75fr
}

#w-node-b9f3e637-22e1-d7cf-1d80-3955c235dc21-0f4ccd7e {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_0d0703e3-5957-b35b-1497-10e6c3f5826b-0f4ccd7e {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-d76c80a0-40bc-f5c9-c849-a0abe2dce896-0f4ccdd5 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-cb51b149-6b83-f27f-87c1-30ce5a2e7c2b-0f4ccdd9 {
    grid-template-rows: auto auto;
    grid-template-columns: .5fr 2.25fr .25fr
}

#w-node-_26f262b9-f426-1b68-b556-659fa2379a6b-0f4ccde0 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_8e6f911e-e08f-040a-08a1-41a4c20d22a3-0f4ccde0 {
    grid-template-rows: auto;
    grid-template-columns: 2fr 1fr
}

#w-node-cc14a54e-7d7b-c800-d7da-431c6da11c2e-0f4ccde0 {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr
}

#w-node-_219bcafc-10c9-57df-7064-563f96a5a5f0-0f4ccde2 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ce1e4e1d-f77e-7d55-cc9b-eb104de15f71-0f4cce5e {
    grid-template-rows: auto;
    grid-template-columns: .75fr 1fr
}

#w-node-_50d6ff0c-fdd2-b94f-25cb-3b725036fc72-5036fc6b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_379a0b8b-96a1-a048-9792-14e8ef9eded5-0f4cce66 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-cc4f2f50-fe2f-a241-c273-5376b858f420-0f4cce66 {
    grid-template-rows: auto;
    grid-template-columns: 1.5fr 1.5fr
}

#w-node-_76acd78a-71f4-97cc-aab5-9a3553285fd6-0f4cce67 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_93826d2b-4cf8-84fb-453d-525038fc484d-0f4ccea4 {
    grid-area: content
}

#w-node-_93826d2b-4cf8-84fb-453d-525038fc485e-0f4ccea4,#w-node-_93826d2b-4cf8-84fb-453d-525038fc4863-0f4ccea4,#w-node-_93826d2b-4cf8-84fb-453d-525038fc4868-0f4ccea4,#w-node-_93826d2b-4cf8-84fb-453d-525038fc486d-0f4ccea4 {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-_93826d2b-4cf8-84fb-453d-525038fc4874-0f4ccea4 {
    grid-area: form
}

#w-node-_1a588580-8dbd-8597-774f-997c4b944485-0f4ccea7,#w-node-bf86a465-cad3-c63d-59df-a0af3ebe2a0d-0f4ccea7,#w-node-ba6d02cd-ccb2-6968-b63a-4df318c4a8e0-0f4ccea7,#w-node-b1c0a29c-872b-1331-427d-4336ae21cc23-0f4ccea7,#w-node-_9a4d11e7-90b2-012a-17a7-eded11b9e827-0f4ccea7,#w-node-b61d18dc-79bf-ea06-49eb-66fa96e025d2-0f4ccea7 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_6aa976db-33fe-6238-516d-00fcc75244a9-0f4ccea8,#w-node-_6aa976db-33fe-6238-516d-00fcc75244aa-0f4ccea8,#w-node-_8a32d8a9-66ff-8dae-4ca1-198afd0b995e-0f4ccea8,#w-node-_8a32d8a9-66ff-8dae-4ca1-198afd0b995f-0f4ccea8 {
    grid-template-rows: auto;
    grid-template-columns: .75fr
}

#w-node-f239989b-d4d2-1802-2b44-a9b032d3a9ef-0f4cceae,#w-node-f239989b-d4d2-1802-2b44-a9b032d3a9f0-0f4cceae {
    grid-template-rows: auto;
    grid-template-columns: .5fr .75fr
}

#w-node-_0ac5dd94-4725-3639-95f0-81be0bd3e1b7-0f4cceb0 {
    grid-area: content
}

#w-node-_1393c1b0-dc95-a932-127f-9c8ec5aa1a9a-0f4cceb0,#w-node-_1393c1b0-dc95-a932-127f-9c8ec5aa1a9f-0f4cceb0,#w-node-_1393c1b0-dc95-a932-127f-9c8ec5aa1aa4-0f4cceb0,#w-node-_1393c1b0-dc95-a932-127f-9c8ec5aa1aa9-0f4cceb0 {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-_0ac5dd94-4725-3639-95f0-81be0bd3e1c4-0f4cceb0 {
    grid-area: form
}

#w-node-_9b409716-0508-1683-165a-bffd7f405bc6-0f4cceb0 {
    grid-area: content
}

#w-node-_047205e9-0118-140f-10d0-bba2f039c8ad-0f4cceb0 {
    grid-area: figure
}

#w-node-_0e74e5fa-b956-aee8-9b59-42b6aac8ab97-0f4cceb0,#w-node-_0e74e5fa-b956-aee8-9b59-42b6aac8ab99-0f4cceb0,#w-node-_0e74e5fa-b956-aee8-9b59-42b6aac8ab9b-0f4cceb0,#w-node-_0e74e5fa-b956-aee8-9b59-42b6aac8ab9d-0f4cceb0,#w-node-_0e74e5fa-b956-aee8-9b59-42b6aac8ab9f-0f4cceb0,#w-node-_0e74e5fa-b956-aee8-9b59-42b6aac8aba1-0f4cceb0 {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-_995cd983-a445-fbd9-073f-1637197bd26e-0f4cceb3,#w-node-_995cd983-a445-fbd9-073f-1637197bd26f-0f4cceb3 {
    grid-template-rows: auto;
    grid-template-columns: .75fr
}

#w-node-c290f097-b95a-1fee-c784-d772c8f75023-0f4cceb4 {
    place-self: start
}

#w-node-_1b47f99f-b12a-e492-a54f-552ab715c438-0f4cceb4 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ec4eb049-b84d-b2ec-9b40-e0c15d795430-0f4cceb8 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_98d9ba7c-04e3-319e-956f-6526fb2f24fd-0f4cceb8 {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e85a1f28-c0ae-b79e-92f6-571a95a4a7b5-0f4cceb9,#w-node-ab6a5b77-a050-2b5e-95a6-2d36f2b88bb1-0f4cceb9,#w-node-_1c2e90d9-d37a-bc97-d384-eb8dcddc7d56-0f4cceb9 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_69c941eb-5666-f3de-532c-ddcc53ade69b-0f4cceb9 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_82d47102-aae2-1617-7d06-800e7b67244e-0f4cceba {
    grid-area: content
}

#w-node-_82d47102-aae2-1617-7d06-800e7b67245f-0f4cceba,#w-node-_82d47102-aae2-1617-7d06-800e7b672464-0f4cceba,#w-node-_82d47102-aae2-1617-7d06-800e7b672469-0f4cceba,#w-node-_82d47102-aae2-1617-7d06-800e7b67246e-0f4cceba {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-_82d47102-aae2-1617-7d06-800e7b672475-0f4cceba {
    grid-area: form
}

#w-node-_9b409716-0508-1683-165a-bffd7f405bc6-0f4cceba {
    grid-area: content
}

#w-node-_047205e9-0118-140f-10d0-bba2f039c8ad-0f4cceba {
    grid-area: figure
}

#w-node-_267443e9-2eee-f1f0-bc41-e0c18787b176-0f4ccebb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_28a21a01-c5e7-a32c-f22e-0013adc3da53-0f4ccebb,#w-node-_48ac1382-7c3f-9957-67c7-cca4de30888f-0f4ccebd,#w-node-_25c33414-75be-d7dd-0171-93a34cde4fd8-0f4ccebd,#w-node-_2f7f4fa1-44a1-ea90-c6c1-7803974842e0-0f4ccebd,#w-node-f71e19be-62c3-2001-1d3b-e3f5a10b1d52-0f4ccebd,#w-node-_5c56cbe8-280d-9e80-911c-b9ca61aca4a2-0f4ccebd,#w-node-dbcc37e3-02be-b340-8538-3daaaa2faf95-0f4ccebd,#w-node-_3fbfec1a-fe7f-36e0-1b36-989275bc1f48-0f4ccebd {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-f3ed2dbb-93f4-0874-048a-aadc63005464-0f4ccec0,#w-node-f3ed2dbb-93f4-0874-048a-aadc6300546a-0f4ccec0,#w-node-f3ed2dbb-93f4-0874-048a-aadc63005470-0f4ccec0,#w-node-f3ed2dbb-93f4-0874-048a-aadc63005476-0f4ccec0,#w-node-_8f659840-78b4-73e1-fc9d-b7bc814a47ef-0f4ccec0,#w-node-_4212bc1c-bbee-a553-dee3-4351db237147-0f4ccec0,#w-node-_99b9e5db-03a8-515d-4c7f-a0ef0f080c37-0f4ccec0,#w-node-c1bffa8f-2087-efc9-e36c-ab92476bc1f9-0f4ccec0 {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-e62c9b54-8630-6c80-4214-d94dc52861da-0f4ccec6,#w-node-b605e264-fc51-f4ac-c250-69eda455706a-0f4ccec6,#w-node-_0edb5111-a419-0b48-244d-791d5a64e275-0f4ccec6,#w-node-_9123c31a-b9a7-82f0-651f-fdf5a193c3e6-0f4ccec6,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa42-0f4ccedf {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa89-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa91-0f4ccedf {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa97-0f4ccedf {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658facd-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fad7-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fae3-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658faef-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fafb-0f4ccedf {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_216839af-8a1d-ac2b-7216-36b22f3b190d-0f4ccf04 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e6a420ad-b37f-b63b-3489-6b1d67125f91-0f4ccf04,#w-node-e6a420ad-b37f-b63b-3489-6b1d67125f9a-0f4ccf04,#w-node-e6a420ad-b37f-b63b-3489-6b1d67125fa5-0f4ccf04 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-b983b0f7-ebd6-ce60-f8e0-378dfbf55656-0f4ccf05 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-efd322a6-554f-ac1a-a897-6f34428b5204-0f4ccf05,#w-node-efd322a6-554f-ac1a-a897-6f34428b520e-0f4ccf05,#w-node-efd322a6-554f-ac1a-a897-6f34428b5218-0f4ccf05 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_2cccbbe5-99de-e5ce-7027-fcb82024bb04-0f4ccf06 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_2cccbbe5-99de-e5ce-7027-fcb82024bb8f-0f4ccf06,#w-node-_2cccbbe5-99de-e5ce-7027-fcb82024bb99-0f4ccf06,#w-node-_2cccbbe5-99de-e5ce-7027-fcb82024bba5-0f4ccf06,#w-node-_185f6751-3840-d0e3-7cfd-c38f15f01607-0f4ccf07 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_185f6751-3840-d0e3-7cfd-c38f15f0160d-0f4ccf07 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab0ef-0f4ccf07 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab0f9-0f4ccf07,#w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab105-0f4ccf07,#w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab111-0f4ccf07 {
    grid-template-rows: auto;
    grid-template-columns: .75fr 1fr
}

#w-node-_85b42df5-c8d1-f1c4-aed1-fa2ef01906c6-0f4ccf08 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_13d5ae3f-f9ca-a0da-4181-6b3463f2b912-0f4ccf08 {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-_04b65ec5-6636-196a-7c0c-41344aed04d2-0f4ccf0b {
    grid-area: title;
    align-self: center
}

#w-node-_04b65ec5-6636-196a-7c0c-41344aed04d7-0f4ccf0b {
    grid-area: figure;
    align-self: center
}

#w-node-_04b65ec5-6636-196a-7c0c-41344aed04d9-0f4ccf0b {
    grid-area: cta
}

#w-node-_5c1bced6-66a8-3d93-b800-4916c5a1f558-0f4ccf0b {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_03e74009-2ab6-a075-706a-0af75afee114-0f4ccf0c {
    grid-area: title;
    align-self: center
}

#w-node-_03e74009-2ab6-a075-706a-0af75afee119-0f4ccf0c {
    grid-area: figure;
    align-self: center
}

#w-node-_03e74009-2ab6-a075-706a-0af75afee11c-0f4ccf0c {
    grid-area: cta
}

#w-node-_374bde6a-9aee-7cc8-b98f-4503f259b70f-0f4ccf2b,#w-node-_9966229b-14d5-42bb-7516-ca11aabe9801-0f4ccf78,#w-node-_1f0eddac-d449-4b60-4bda-9811e2cb2265-0f4ccf78,#w-node-_9966229b-14d5-42bb-7516-ca11aabe980e-0f4ccf78,#w-node-_9966229b-14d5-42bb-7516-ca11aabe981b-0f4ccf78 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_9966229b-14d5-42bb-7516-ca11aabe9842-0f4ccf78 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-c98786ca-7e81-4a58-6b6d-259e6fb79472-0f4ccf79 {
    grid-area: title;
    align-self: center
}

#w-node-c98786ca-7e81-4a58-6b6d-259e6fb79479-0f4ccf79 {
    grid-area: figure;
    align-self: center
}

#w-node-_0cef2134-1e27-43d5-7171-4efbb581f641-0f4ccf79 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-cd10606f-badb-72f9-30f0-99499a7738c7-0f4ccf79,#w-node-cd10606f-badb-72f9-30f0-99499a7738d0-0f4ccf79 {
    grid-area: description
}

#w-node-_60566853-e64b-ab8b-3dee-fbfe31b1c5bf-0f4ccf79 {
    place-self: end start
}

#w-node-_60566853-e64b-ab8b-3dee-fbfe31b1c5c3-0f4ccf79,#w-node-cd10606f-badb-72f9-30f0-99499a7738d8-0f4ccf79,#w-node-cd10606f-badb-72f9-30f0-99499a7738e0-0f4ccf79 {
    grid-area: description
}

#w-node-cd10606f-badb-72f9-30f0-99499a7738bb-0f4ccf79 {
    place-self: end start
}

#w-node-cd10606f-badb-72f9-30f0-99499a7738bf-0f4ccf79 {
    grid-area: description
}

#w-node-e5c18659-2524-a722-ef3c-4c93b675afe9-0f4ccf7a,#w-node-ccc7ae2d-671c-4ab5-3b9f-1e7819d3710b-0f4ccf7a,#w-node-c62da234-cee1-7a36-3da8-9852136c6483-0f4ccf7a {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_40d92222-e52e-c544-ad0d-18722b27ba40-0f4ccf7a {
    grid-template-rows: auto;
    grid-template-columns: 1fr
}

#w-node-_2e5c8707-e330-f2b4-ea0d-b80fa1b79cf3-0f4ccf7b,#w-node-_4304cbbd-1365-5aeb-d126-4a7b901bf662-0f4ccf7b {
    grid-template-rows: auto;
    grid-template-columns: .75fr
}

#w-node-ef18d95c-e05d-ca41-bfa8-1738ada69af2-0f4ccf7b {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: grid
}

#w-node-_6fcf0c98-71a4-ee7f-9014-829df2ec4dc0-0f4ccf7b,#w-node-_6fcf0c98-71a4-ee7f-9014-829df2ec4dc1-0f4ccf7b {
    grid-template-rows: auto;
    grid-template-columns: .75fr
}

#w-node-ec54a53f-c7a0-18b8-03cc-85bde52e3c2a-0f4ccf87,#w-node-_96a390e4-0a2c-c38e-ab4a-66ebe35eff6b-0f4ccf87,#w-node-_33b0ed1d-3c6a-a918-4cb3-b6d47f3860eb-0f4ccf87,#w-node-_9627b700-55ec-5ab0-b1a5-e689976a2b12-0f4ccf87 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_285444c9-890e-f194-69bb-c4922b11a9a9-0f4ccf87 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_35d2370e-c12f-ecac-3184-b1a6e4d91722-0f4ccf87 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_577398bb-2119-80a7-a407-baf3a050a9ad-0f4ccf93,#w-node-_532f3998-19f3-7162-687e-293679b51dc2-0f4ccf93,#w-node-_0b4ecd22-38b5-b0cb-7440-e36f22331afa-0f4ccf93,#w-node-dc85b0bb-84c9-e31c-8fc1-cdc5268c9366-0f4ccf93,#w-node-ae6dba18-dd27-10fd-ecd8-6f595ac6cf97-0f4ccff8,#w-node-_5f7d2f76-1e89-2cbc-f951-d95301825efb-0f4ccff8,#w-node-_891d31a7-f512-ad19-9acd-42692fda9cf2-0f4ccff8,#w-node-_7b010b15-3ac1-519f-dc6c-984bd6e8409c-0f4ccff8,#w-node-e7fb8307-675e-d78e-3593-2b9beedbfc87-0f4ccff8 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_455a35f3-800a-2208-82c3-c03deba851a4-0f4ccff8 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_7881dab9-507c-5dc1-1b6f-8631cecdc182-0f4cd027,#w-node-d64b40a3-f344-ef47-20c1-fda38c6708e8-0f4cd027,#w-node-a6608209-176a-1c88-9e06-9c22d79f33b2-0f4cd027,#w-node-b42c2933-83c4-dade-7cd0-a619a095a450-0f4cd027,#w-node-_94a937ae-8098-0f86-cb6f-dc50abcc0134-0f4cd027,#w-node-_5697b669-05fd-4e9e-c105-8de6118e2a40-0f4cd029 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_22211cd2-498c-46f7-db46-868eefc6d960-0f4cd02a {
    grid-area: Area
}

#w-node-_22211cd2-498c-46f7-db46-868eefc6d96b-0f4cd02a {
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_45455535-be01-83e3-a549-ba4f57a650c1-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e8f67a8e-488f-1f6d-a489-d871875f3b32-0f4cd02c {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-ea9da8e3-183a-9ac3-d3b5-028e91528860-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e659b35d-b000-ad2b-057f-151f22575981-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1e9dd6d3-5a2c-c523-79a5-104655344090-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_120c5914-7a23-edd7-dad1-a9cccac2926a-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_96325b7a-a712-8f4f-8920-2fcd954ac4da-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_96325b7a-a712-8f4f-8920-2fcd954ac4df-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_0adbe8c8-e62e-e4a4-8afb-87e20aab75a0-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_0adbe8c8-e62e-e4a4-8afb-87e20aab75a7-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_46f6d4a5-4e93-bb12-9fd4-d88c6517c190-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_46f6d4a5-4e93-bb12-9fd4-d88c6517c197-0f4cd02c {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_15b5f6ba-cca3-78a5-1978-11de1077465b-0f4cd02c {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-b5b5e153-61a8-8c00-4c89-9b9aacab0353-0f4cd031,#w-node-_9e8a5f0f-3d5f-46c0-f7f6-e70cbc7b93ca-0f4cd031,#w-node-_73755bef-053a-6b0c-526e-46f326d5d20b-0f4cd031,#w-node-_79883fa9-5f41-3b71-a48b-ac0d7d3ddd4a-0f4cd031,#w-node-_5c4e35e7-b447-b2f8-3278-a8805247ffd1-0f4cd031,#w-node-_17fa8488-484d-36ee-1cd0-20e14b7f7914-0f4cd031 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_9977fc73-b8d0-574f-80cd-ad7cecf6c6fd-0f4cd031 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-cff3a550-4205-b09e-f5ad-b3a5f9e0b4a7-0f4cd031 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-f6df9937-6e65-413b-d4b7-5f277d392103-0f4cd034 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_68835dfd-620a-77d3-0506-42a6668460c2-97e59c9f {
    grid-area: 1/1/2/2
}

#w-node-_68835dfd-620a-77d3-0506-42a6668460cb-97e59c9f {
    grid-area: 2/1/3/2
}

#w-node-_7e16b075-b2a8-fffa-4b85-fb0d454c7774-06c304bb,#w-node-dff24f07-502e-0e7d-8665-af9b24faac45-06c304bb {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a763-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af0-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80afe-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b07-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b0c-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b15-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b1a-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_664f9644-d83f-bc84-71fb-a0de653e1819-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_664f9644-d83f-bc84-71fb-a0de653e181e-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-efff74fb-9f83-8932-66e4-5b258375bb5e-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-efff74fb-9f83-8932-66e4-5b258375bb63-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_38d44c3a-84a4-c162-7ba4-d2125f015019-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_38d44c3a-84a4-c162-7ba4-d2125f01501e-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd9895f-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd98964-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee3-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee8-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f3255f-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f32564-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_9a1dbd9f-7d75-8c75-7158-1e75b4c8203c-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_9a1dbd9f-7d75-8c75-7158-1e75b4c82041-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_765bc131-ec9c-cab0-4f01-af1076608397-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_765bc131-ec9c-cab0-4f01-af107660839c-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24a39b39-3ba4-98a1-3158-1340f421ceed-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24a39b39-3ba4-98a1-3158-1340f421cef2-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e2a85af7-acce-d87f-3bb2-3da5aafec97f-06c304bb {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e2a85af7-acce-d87f-3bb2-3da5aafec984-06c304bb,#w-node-_432c1ae0-4e9f-ce4b-522c-e722983aba63-983aba61 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-aa9c7fc1-1dd6-f7c9-c2a6-1af00bac28d8-0bac28ad,#w-node-aa9c7fc1-1dd6-f7c9-c2a6-1af00bac28c6-0bac28ad,#w-node-aa9c7fc1-1dd6-f7c9-c2a6-1af00bac28cf-0bac28ad,#w-node-aa9c7fc1-1dd6-f7c9-c2a6-1af00bac28e3-0bac28ad,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef09-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef12-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef17-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef20-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef25-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef2e-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef33-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef3c-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef41-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef4a-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef4f-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef58-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef5d-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef66-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef6b-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef74-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef79-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef82-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef87-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef90-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef95-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef9e-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81efa3-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81efac-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81efb1-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81efba-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81efbf-d93a57ec {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_0efc3c6a-30a0-ff69-3513-e206b5e10e74-b5e10e74,#w-node-_0efc3c6a-30a0-ff69-3513-e206b5e10e7a-b5e10e74 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a763-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af0-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_5a99443d-f5d2-349d-8211-1ae33c9cd368-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_5a99443d-f5d2-349d-8211-1ae33c9cd36d-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80afe-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b07-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b0c-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b15-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b1a-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-efff74fb-9f83-8932-66e4-5b258375bb5e-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-efff74fb-9f83-8932-66e4-5b258375bb63-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd9895f-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd98964-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-fbbfc966-03e5-38a0-dc0d-6d92e58823b7-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-fbbfc966-03e5-38a0-dc0d-6d92e58823bc-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee3-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee8-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f3255f-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f32564-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031a1-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031a8-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031b1-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031b6-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031bf-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031c4-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031cd-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031d2-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031db-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031e0-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031e9-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031ee-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031f7-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031fc-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03205-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f0320a-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03213-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03218-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03221-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03226-1ee8ab75 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_93826d2b-4cf8-84fb-453d-525038fc484d-1daf1efa {
    grid-area: content
}

#w-node-_93826d2b-4cf8-84fb-453d-525038fc485e-1daf1efa,#w-node-_93826d2b-4cf8-84fb-453d-525038fc4863-1daf1efa,#w-node-_93826d2b-4cf8-84fb-453d-525038fc4868-1daf1efa,#w-node-_93826d2b-4cf8-84fb-453d-525038fc486d-1daf1efa {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-b33d3126-c74c-5d2f-7fe7-c5595e6ad0b6-1daf1efa {
    grid-area: span 1/span 2/span 1/span 2
}

#w-node-_93826d2b-4cf8-84fb-453d-525038fc4874-1daf1efa {
    grid-area: form
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a763-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af0-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80afe-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b07-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b0c-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b15-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b1a-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_664f9644-d83f-bc84-71fb-a0de653e1819-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_664f9644-d83f-bc84-71fb-a0de653e181e-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-efff74fb-9f83-8932-66e4-5b258375bb5e-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-efff74fb-9f83-8932-66e4-5b258375bb63-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_2218c074-1c12-0ec1-0300-446aae4cbe35-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_2218c074-1c12-0ec1-0300-446aae4cbe3a-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd9895f-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd98964-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee3-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee8-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f3255f-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f32564-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_9a1dbd9f-7d75-8c75-7158-1e75b4c8203c-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_9a1dbd9f-7d75-8c75-7158-1e75b4c82041-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24a39b39-3ba4-98a1-3158-1340f421ceed-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24a39b39-3ba4-98a1-3158-1340f421cef2-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e2a85af7-acce-d87f-3bb2-3da5aafec97f-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e2a85af7-acce-d87f-3bb2-3da5aafec984-a7936135,#w-node-_07300cdb-47dc-4cc1-61f4-7e1f16c9e125-a7936135,#w-node-_07300cdb-47dc-4cc1-61f4-7e1f16c9e126-a7936135 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-b071ec17-db8c-b9b3-a91f-dd40420c807a-a15bd327 {
    grid-area: 1/1/2/2
}

#w-node-b071ec17-db8c-b9b3-a91f-dd40420c8083-a15bd327 {
    grid-area: 2/1/3/2
}

#w-node-_6ebdc109-f05c-e732-bbae-b7b2f0b69caf-1fda0ac1,#w-node-_6e805810-a2b5-61a9-c856-101295dbd5de-1fda0ac1,#w-node-d4303160-68af-39bf-f80e-ecd53683ceac-1fda0ac1,#w-node-_24c3760b-1f2e-0f9d-a620-4200979a721c-1fda0ac1,#w-node-_21138e35-f910-6bfb-eeda-e664b120d11c-1fda0ac1,#w-node-_5ea264d1-f76d-cfe1-8349-2d5edbdc71c4-6ee40eae,#w-node-_47182220-cea5-a4b7-7a2e-789783fb620b-6ee40eae,#w-node-_73b5819e-f80a-2f88-66a3-a6f0be26292f-6ee40eae,#w-node-d06b012c-daa3-5e41-1473-24e6c29e3fde-6ee40eae,#w-node-f2657e25-d9bb-7f2d-b579-27aeb2184d53-6ee40eae,#w-node-_715d96f7-da46-87ac-93ef-7e1f48a9cdb4-6ee40eae,#w-node-c904d554-232f-595d-f533-5fdce0052c09-6ee40eae,#w-node-_27f16ce6-74a2-643b-28a7-b9e331ead58b-6ee40eae,#w-node-_6c422f68-7647-9f1c-60b2-e532badce36f-6ee40eae,#w-node-fb15ec8d-2c9c-6245-53a1-b20cd8a8dc06-6ee40eae,#w-node-_5ea264d1-f76d-cfe1-8349-2d5edbdc71c4-24decc60,#w-node-_47182220-cea5-a4b7-7a2e-789783fb620b-24decc60,#w-node-f2657e25-d9bb-7f2d-b579-27aeb2184d53-24decc60,#w-node-c904d554-232f-595d-f533-5fdce0052c09-24decc60,#w-node-_0f000dc5-ce4d-2e17-7177-b8d09225c783-24decc60,#w-node-_9e8a5f0f-3d5f-46c0-f7f6-e70cbc7b93ca-66b13cc8,#w-node-b5b5e153-61a8-8c00-4c89-9b9aacab0353-66b13cc8,#w-node-_40382a9e-53b9-e55f-af32-6b2d119ca5e4-66b13cc8 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1445dcf2-082d-a310-dc7f-61f18b021947-66b13cc8 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef09-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef2e-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef33-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-d9dc04e4-9fcf-164c-44b9-53d3909dad01-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-d9dc04e4-9fcf-164c-44b9-53d3909dad06-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef3c-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef41-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef4a-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef4f-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef58-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef5d-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef66-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef6b-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef74-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef79-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef82-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef87-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef90-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef95-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef9e-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81efa3-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81efac-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81efb1-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_41bed0d2-224b-5088-e8d4-36558f559445-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_41bed0d2-224b-5088-e8d4-36558f55944a-e6793b15 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-d9451ec5-76dd-2835-ea57-51365a210505-8e5cebe6 {
    grid-template-rows: auto auto auto auto auto auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_3de50a3a-d5ef-140e-3fb2-8db06af42442-dd93f165 {
    grid-template-rows: auto auto auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-f42f7608-43e8-c72f-8361-133b6253d703-dd93f165 {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr 2.75fr 1fr 1fr 1fr
}

#w-node-_78bbe42c-bb7a-d2cc-c55f-8e2ddaf7dbf5-831d1be6 {
    grid-template-rows: auto auto auto auto auto auto auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_78bbe42c-bb7a-d2cc-c55f-8e2ddaf7dbf7-831d1be6 {
    grid-column: span 2/span 2
}

#w-node-_9dd438f7-6017-80df-a461-9bc74c74310e-831d1be6 {
    grid-template-rows: auto auto auto auto auto auto auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_9dd438f7-6017-80df-a461-9bc74c74310f-831d1be6 {
    grid-column: span 2/span 2
}

#w-node-_61021712-1937-3d0d-c668-7b9e00d333b4-831d1be6 {
    grid-template-rows: auto auto auto auto auto auto auto auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_7dab1097-9526-b8d8-a6a5-24fcae9b623b-ad18cff9 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_799e0eb7-75cd-b4d7-f95c-0696f489ae55-ad18cff9 {
    place-self: start
}

#w-node-_88927dc7-3d06-aebc-1dac-0846c9b10077-ad18cff9 {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7dab1097-9526-b8d8-a6a5-24fcae9b623b-6c614461 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_05594b7a-b779-842a-f787-ab3998c56ac1-6c614461 {
    place-self: start
}

#w-node-d419edcc-14d4-3149-0451-a93ebf4d8722-6c614461 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-f1f148d8-8142-cb26-d19c-34abb2d5901a-f22ea012 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 3.75fr
}

#w-node-b86d0310-4089-a905-638a-0a0f1239cab5-ae4fe6fc,#w-node-_28187b26-86b6-db3a-2438-f1d8c5025e98-ae4fe6fc,#w-node-_72bb99c0-692d-1959-d34c-c31ef0d4927d-ae4fe6fc,#w-node-_7810c274-e949-acae-aae6-8aa8b4290874-ae4fe6fc {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-cd5122f8-0001-276d-0aea-f605f6c0252b-b9c8595c,#w-node-cd5122f8-0001-276d-0aea-f605f6c0252f-b9c8595c,#w-node-cd5122f8-0001-276d-0aea-f605f6c02533-b9c8595c,#w-node-cd5122f8-0001-276d-0aea-f605f6c02537-b9c8595c,#w-node-cd5122f8-0001-276d-0aea-f605f6c0253b-b9c8595c,#w-node-bc511423-cc9d-3443-8625-33ea9392c90a-b9c8595c,#w-node-bc511423-cc9d-3443-8625-33ea9392c90c-b9c8595c,#w-node-bc511423-cc9d-3443-8625-33ea9392c910-b9c8595c,#w-node-bc511423-cc9d-3443-8625-33ea9392c914-b9c8595c,#w-node-bc511423-cc9d-3443-8625-33ea9392c918-b9c8595c {
    grid-area: span 1/span 1/span 1/span 1
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a763-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-b4f446b9-1be2-441d-952b-62830698dba9-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-b4f446b9-1be2-441d-952b-62830698dbae-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af0-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cee-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cf3-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa524e-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa5253-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-b0c257c0-6321-aa8d-e633-368d519c60ee-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-b0c257c0-6321-aa8d-e633-368d519c60f3-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1332944d-3f82-2c2f-64c8-b12386820a79-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1332944d-3f82-2c2f-64c8-b12386820a7e-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f375-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f37a-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f0-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f5-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_0da067c0-c068-d778-40f3-f401591351c2-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_0da067c0-c068-d778-40f3-f401591351c7-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2ccdd-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2cce2-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_02d1c048-07f3-eccc-fc32-05016eb486c2-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_02d1c048-07f3-eccc-fc32-05016eb486c7-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d2-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d7-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb1-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb6-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_45d2a883-1426-f35b-3d61-f304077a3002-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_45d2a883-1426-f35b-3d61-f304077a3007-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d2-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d7-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_10ae8dba-066b-c68c-88cf-74faf81f6ffa-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_10ae8dba-066b-c68c-88cf-74faf81f6fff-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd08-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd0d-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_863c901f-dd72-0ddd-dfa7-498072db7353-373bc54b {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr;
    display: none
}

#w-node-_863c901f-dd72-0ddd-dfa7-498072db7358-373bc54b,#w-node-_5cbd274b-f2e4-6f20-279a-1da693f740f7-db3acda9,#w-node-_5edeffa9-325e-bfce-f9be-eb94a78b34c0-db3acda9,#w-node-ed64cff8-f977-879a-935e-5eb59043f690-db3acda9,#w-node-_8f29f66f-dca7-0056-0e8d-75e3fcb21083-db3acda9,#w-node-_9e9a817a-c5ed-2987-4819-7402a0cc8de4-db3acda9 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7a59495d-e737-9e86-d760-e774eb6ee761-db3acda9 {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_5cbd274b-f2e4-6f20-279a-1da693f740f7-c94a0769,#w-node-_5edeffa9-325e-bfce-f9be-eb94a78b34c0-c94a0769,#w-node-ed64cff8-f977-879a-935e-5eb59043f690-c94a0769,#w-node-_8f29f66f-dca7-0056-0e8d-75e3fcb21083-c94a0769 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7a59495d-e737-9e86-d760-e774eb6ee761-c94a0769 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_5ea264d1-f76d-cfe1-8349-2d5edbdc71c4-17c9af5d,#w-node-_47182220-cea5-a4b7-7a2e-789783fb620b-17c9af5d,#w-node-_0f000dc5-ce4d-2e17-7177-b8d09225c783-17c9af5d,#w-node-_3eef8296-9e30-bd34-be16-d58c4605b4bf-17c9af5d,#w-node-_91e0615f-23b2-4d4f-5290-0752aac420cc-9515ede8 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-f3327c40-f70f-0b26-1308-f72c8d20dc29-9515ede8 {
    grid-template-rows: auto;
    grid-template-columns: 2fr 1fr
}

#w-node-f3327c40-f70f-0b26-1308-f72c8d20dc2e-9515ede8 {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr
}

#w-node-_91e0615f-23b2-4d4f-5290-0752aac420cc-7d087568 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-f3327c40-f70f-0b26-1308-f72c8d20dc29-7d087568 {
    grid-template-rows: auto;
    grid-template-columns: 2fr 1fr
}

#w-node-f3327c40-f70f-0b26-1308-f72c8d20dc2e-7d087568 {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr
}

#w-node-_42c0c7f2-97bc-7951-5e1a-e8edb4e2cebc-916ad371 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_68835dfd-620a-77d3-0506-42a6668460c2-d28a61ab {
    grid-area: 1/1/2/2
}

#w-node-_68835dfd-620a-77d3-0506-42a6668460cb-d28a61ab {
    grid-area: 2/1/3/2
}

#w-node-_6b90173a-d4e7-7bb7-0bf6-949341099382-cb713311 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_0a571bd4-9464-c43f-f986-fb0d1f3d34cd-cb713311 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef09-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef2e-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef33-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-bc1bad30-c8bf-8f57-8dc3-bb6349a5c5cf-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-bc1bad30-c8bf-8f57-8dc3-bb6349a5c5d4-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_8943c64b-2a8a-3393-241a-e93dac2d4834-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_8943c64b-2a8a-3393-241a-e93dac2d4839-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_15244bc1-0083-f751-fc20-6a3dbde2b76a-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_15244bc1-0083-f751-fc20-6a3dbde2b76f-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7b492752-778c-cdde-da2e-6f2f0ec3b3a1-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_7b492752-778c-cdde-da2e-6f2f0ec3b3a6-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-db734c2b-cf54-8e8b-a46c-824cfd32908f-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-db734c2b-cf54-8e8b-a46c-824cfd329094-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_35d0932b-e359-2ae5-9d09-843cb09d802f-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_35d0932b-e359-2ae5-9d09-843cb09d8034-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_78c18ab1-dd93-96f4-f37f-4cfb22b60eb6-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_78c18ab1-dd93-96f4-f37f-4cfb22b60ebb-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ed5821e8-d48a-f870-a154-7fa06710e83d-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-ed5821e8-d48a-f870-a154-7fa06710e842-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_35d01bf4-7749-3941-8af5-d997709f8afe-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_35d01bf4-7749-3941-8af5-d997709f8b03-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_3a3e0bbd-1f1c-50ee-8651-53198f267e33-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_3a3e0bbd-1f1c-50ee-8651-53198f267e38-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_14568a1e-940d-4cc6-edaa-ee59f105c001-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_14568a1e-940d-4cc6-edaa-ee59f105c006-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_78627eeb-b96b-5571-8863-5970fd754c74-cb713311 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_78627eeb-b96b-5571-8863-5970fd754c79-cb713311,#w-node-_510141c7-8e52-0e59-cbfb-e72ab4048a20-f11bd18e,#w-node-f51a3e10-521a-1102-1361-6c0018614dcd-f11bd18e {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_0512164f-a7e6-c8b0-bcc5-730db169d1c5-f11bd18e {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_0512164f-a7e6-c8b0-bcc5-730db169d1c6-f11bd18e {
    grid-template-rows: 1fr;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a763-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-b4f446b9-1be2-441d-952b-62830698dba9-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-b4f446b9-1be2-441d-952b-62830698dbae-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af0-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-b0c257c0-6321-aa8d-e633-368d519c60ee-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-b0c257c0-6321-aa8d-e633-368d519c60f3-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cee-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cf3-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1332944d-3f82-2c2f-64c8-b12386820a79-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1332944d-3f82-2c2f-64c8-b12386820a7e-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f375-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f37a-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e7eb0992-f06c-c073-fbf5-dafa133640f8-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e7eb0992-f06c-c073-fbf5-dafa133640fe-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_0da067c0-c068-d778-40f3-f401591351c2-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_0da067c0-c068-d778-40f3-f401591351c7-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2ccdd-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2cce2-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f0-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f5-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_45d2a883-1426-f35b-3d61-f304077a3002-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_45d2a883-1426-f35b-3d61-f304077a3007-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d2-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d7-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_2b3d2298-d972-f7be-b458-228408d02ad8-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_2b3d2298-d972-f7be-b458-228408d02ade-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa524e-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa5253-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_02d1c048-07f3-eccc-fc32-05016eb486c2-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_02d1c048-07f3-eccc-fc32-05016eb486c7-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d2-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d7-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_72792f8f-92b2-93f9-04fd-84091a12dad2-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_72792f8f-92b2-93f9-04fd-84091a12dad8-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb1-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb6-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_10ae8dba-066b-c68c-88cf-74faf81f6ffa-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_10ae8dba-066b-c68c-88cf-74faf81f6fff-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_5b30b112-8b7d-f10a-382c-dca6a8decae2-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_5b30b112-8b7d-f10a-382c-dca6a8decae8-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_0f158421-b59c-3d2b-d42c-0e9e22d41170-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_0f158421-b59c-3d2b-d42c-0e9e22d41176-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd08-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd0d-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_6af6bd7e-ef8d-788f-8089-5c34db4bade1-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_6af6bd7e-ef8d-788f-8089-5c34db4bade7-cdce3809 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_6b90173a-d4e7-7bb7-0bf6-949341099382-e4d88f28,#w-node-_239f2319-c0ed-35de-b59e-6a1a6accd154-e4d88f28 {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef09-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef12-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_24506774-c0c9-b01a-0daa-28898d81ef17-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-d8f2bfd7-e014-69a8-cd4b-d0981c9a85ae-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-d8f2bfd7-e014-69a8-cd4b-d0981c9a85b4-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-d6cbc080-7d1c-c5fc-4f15-3da1c769db6c-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-d6cbc080-7d1c-c5fc-4f15-3da1c769db71-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_281b0828-3076-3a3a-8fed-ae14493eb116-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_281b0828-3076-3a3a-8fed-ae14493eb11b-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_1674ff8c-2738-a6eb-8c45-e2672acffd62-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_1674ff8c-2738-a6eb-8c45-e2672acffd68-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ef72ad61-e13f-ab52-ffa3-83f71ededb53-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-ef72ad61-e13f-ab52-ffa3-83f71ededb59-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_87d7e26d-88e9-4125-7d72-daf424abaf31-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_87d7e26d-88e9-4125-7d72-daf424abaf36-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-ed24a3d9-7970-a912-3f91-630d90addde6-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-ed24a3d9-7970-a912-3f91-630d90adddeb-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_609b7159-1685-26c2-62ff-7fb9a116534b-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_609b7159-1685-26c2-62ff-7fb9a1165350-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-f46f8153-b57f-1df0-31a6-c6af0734760d-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-f46f8153-b57f-1df0-31a6-c6af07347612-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_201f5c7a-c26b-0971-5b65-208ccc4e5f04-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_201f5c7a-c26b-0971-5b65-208ccc4e5f09-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_80beb7cd-a93a-184b-44f3-a8ed7696c484-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_80beb7cd-a93a-184b-44f3-a8ed7696c489-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_6f4d6cf8-1a0c-9e3a-1ae0-e6944e1db101-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_6f4d6cf8-1a0c-9e3a-1ae0-e6944e1db106-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-abeeb971-bf7c-d4d3-be3a-5849583d86a6-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-abeeb971-bf7c-d4d3-be3a-5849583d86ab-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_0f1a3abc-d1a2-54b9-e4b0-b56841e18bc3-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_0f1a3abc-d1a2-54b9-e4b0-b56841e18bc8-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-bf2dcff1-5242-ae21-96d7-ba7cb82d5913-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-bf2dcff1-5242-ae21-96d7-ba7cb82d5918-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-bd69a36c-d005-9e3e-91f9-65b37b97f091-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-bd69a36c-d005-9e3e-91f9-65b37b97f096-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_6420859d-981f-47bd-1c98-1dc985ee3a6a-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_6420859d-981f-47bd-1c98-1dc985ee3a6f-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_56bd7efb-5159-6770-9e71-818c232cb736-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_56bd7efb-5159-6770-9e71-818c232cb73b-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_16d94bde-1657-094b-c328-531d1c7c54f6-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_16d94bde-1657-094b-c328-531d1c7c54fb-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7d927c2f-fe7b-e717-daca-1438ad66f822-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_7d927c2f-fe7b-e717-daca-1438ad66f827-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7ad0c64d-3e48-5350-5c1d-9cb73b07dfc3-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_7ad0c64d-3e48-5350-5c1d-9cb73b07dfc8-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_2dedce8d-20ac-6ee5-3d1d-f48b6a91c923-e4d88f28 {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_2dedce8d-20ac-6ee5-3d1d-f48b6a91c928-e4d88f28,#w-node-f8ab83d3-25d6-2caa-bc42-a4544baaa118-558a2d41,#w-node-_03c2074e-5907-34b0-b1c6-3436cf1a6a1c-558a2d41,#w-node-_5954f7ee-3e60-9e44-1873-10a1f0c6c914-558a2d41,#w-node-_3069559c-fde7-dc7b-4201-721bd8e90274-558a2d41,#w-node-e989cf34-e172-c98c-495f-2d4216d6ea37-558a2d41,#w-node-_9c07dd07-8490-5a03-9f09-d11f8c8d59c4-558a2d41,#w-node-c204075a-61d7-ae11-cd18-f869436f12b2-558a2d41,#w-node-c204075a-61d7-ae11-cd18-f869436f12b3-558a2d41,#w-node-_5597f6b7-8429-90e1-916b-f6ddd0fba883-558a2d41,#w-node-_5597f6b7-8429-90e1-916b-f6ddd0fba884-558a2d41,#w-node-_4c6a544d-c7b9-aa93-6905-a0196ad107d0-558a2d41,#w-node-_4c6a544d-c7b9-aa93-6905-a0196ad107d1-558a2d41,#w-node-bfecf8f6-c57d-abca-6c51-97a87b3970e1-558a2d41,#w-node-bfecf8f6-c57d-abca-6c51-97a87b3970e2-558a2d41,#w-node-_4fffe76b-d842-c7a2-79f3-f94446afd493-558a2d41,#w-node-_4fffe76b-d842-c7a2-79f3-f94446afd494-558a2d41,#w-node-fd053fcc-0e5e-0639-56e6-c4ac0f68a026-558a2d41,#w-node-fd053fcc-0e5e-0639-56e6-c4ac0f68a027-558a2d41,#w-node-_3c2d7317-9d94-d1b2-8480-5e3e780491a5-558a2d41,#w-node-_3c2d7317-9d94-d1b2-8480-5e3e780491a6-558a2d41 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_60d15bc3-abd7-f962-a00b-38c4c2a97eda-558a2d41 {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr
}

#w-node-_590d9f8e-ae67-0052-a678-82e4c58245df-f18257b6,#w-node-_590d9f8e-ae67-0052-a678-82e4c58245e0-f18257b6,#w-node-a47f4c73-42b0-1bbe-4af4-a7a7622e81d3-f18257b6,#w-node-a47f4c73-42b0-1bbe-4af4-a7a7622e81d4-f18257b6,#w-node-_159dfa57-ed52-b351-c960-d27f80af8477-f18257b6,#w-node-_3069559c-fde7-dc7b-4201-721bd8e90274-f18257b6,#w-node-f2771e11-2f39-7bb4-3b6b-8def738b6a16-f18257b6,#w-node-f2771e11-2f39-7bb4-3b6b-8def738b6a17-f18257b6,#w-node-db2c13be-bf4d-6b33-21f9-5a834d6f1f3a-f18257b6,#w-node-db2c13be-bf4d-6b33-21f9-5a834d6f1f3b-f18257b6,#w-node-_8ef7e916-7b8e-25b2-0e08-1a846d0c397a-f18257b6,#w-node-_8ef7e916-7b8e-25b2-0e08-1a846d0c397b-f18257b6,#w-node-c0297bfa-9584-21d3-ef24-db02e3540ea8-f18257b6,#w-node-_9c07dd07-8490-5a03-9f09-d11f8c8d59c4-f18257b6,#w-node-e34351ba-cf74-3792-2b17-3de32da28191-f18257b6,#w-node-e34351ba-cf74-3792-2b17-3de32da28192-f18257b6,#w-node-_60829fad-7164-9110-b463-7f144f9ed942-f18257b6,#w-node-_60829fad-7164-9110-b463-7f144f9ed943-f18257b6,#w-node-c62a23b7-86e3-f4b3-01d4-fcd6ef36cbc9-f18257b6,#w-node-c62a23b7-86e3-f4b3-01d4-fcd6ef36cbca-f18257b6 {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_7b7e71c6-632b-d396-f61c-cefa8d4a9a3b-f18257b6,#w-node-c4a73f35-82b1-a630-2476-97fe762b35ed-9678e83c,#w-node-_9b7dfeab-fb85-0147-fa13-dfa89d400992-9678e83c,#w-node-_2e306e26-cc93-f946-3db9-2af0eec715fc-9678e83c {
    grid-template-rows: auto;
    grid-template-columns: 1fr
}

#w-node-_9977fc73-b8d0-574f-80cd-ad7cecf6c6fd-9678e83c {
    grid-template-rows: auto;
    grid-template-columns: .5fr 1fr
}

#w-node-_22211cd2-498c-46f7-db46-868eefc6d960-8f27c7c8 {
    grid-area: Area
}

#w-node-_22211cd2-498c-46f7-db46-868eefc6d96b-8f27c7c8 {
    grid-template-rows: auto auto auto auto auto auto;
    grid-template-columns: 1fr 1fr
}

#w-node-_5ea264d1-f76d-cfe1-8349-2d5edbdc71c4-ca983ebc,#w-node-_47182220-cea5-a4b7-7a2e-789783fb620b-ca983ebc,#w-node-_0f000dc5-ce4d-2e17-7177-b8d09225c783-ca983ebc,#w-node-_3eef8296-9e30-bd34-be16-d58c4605b4bf-ca983ebc,#w-node-_2003a2d2-b6d9-7c7c-46ba-6dcda6520374-ca983ebc,#w-node-_663f69ac-4230-a3f2-d7f9-add44eb6af6b-ca983ebc {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr
}

@media screen and (min-width: 1280px) {
    #w-node-cc14a54e-7d7b-c800-d7da-431c6da11c2e-0f4ccde0 {
        grid-template-rows:auto;
        grid-template-columns: 1fr
    }

    #w-node-_267443e9-2eee-f1f0-bc41-e0c18787b176-0f4ccebb {
        grid-template-rows: auto;
        grid-template-columns: .5fr 1fr
    }

    #w-node-_48ac1382-7c3f-9957-67c7-cca4de30888f-0f4ccebd,#w-node-_25c33414-75be-d7dd-0171-93a34cde4fd8-0f4ccebd,#w-node-_2f7f4fa1-44a1-ea90-c6c1-7803974842e0-0f4ccebd,#w-node-f71e19be-62c3-2001-1d3b-e3f5a10b1d52-0f4ccebd,#w-node-_5c56cbe8-280d-9e80-911c-b9ca61aca4a2-0f4ccebd,#w-node-dbcc37e3-02be-b340-8538-3daaaa2faf95-0f4ccebd,#w-node-_3fbfec1a-fe7f-36e0-1b36-989275bc1f48-0f4ccebd {
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa89-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa91-0f4ccedf {
        grid-template-rows: auto;
        grid-template-columns: .5fr 1fr
    }

    #w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa97-0f4ccedf {
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_185f6751-3840-d0e3-7cfd-c38f15f01607-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: .5fr 1fr
    }

    #w-node-_185f6751-3840-d0e3-7cfd-c38f15f0160d-0f4ccf07,#w-node-_577398bb-2119-80a7-a407-baf3a050a9ad-0f4ccf93,#w-node-_532f3998-19f3-7162-687e-293679b51dc2-0f4ccf93,#w-node-_0b4ecd22-38b5-b0cb-7440-e36f22331afa-0f4ccf93,#w-node-dc85b0bb-84c9-e31c-8fc1-cdc5268c9366-0f4ccf93 {
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_96325b7a-a712-8f4f-8920-2fcd954ac4da-0f4cd02c {
        grid-template-rows: auto;
        grid-template-columns: .75fr 1.5fr
    }

    #w-node-_15b5f6ba-cca3-78a5-1978-11de1077465b-0f4cd02c {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-06c304bb,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef20-d93a57ec,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031cd-1ee8ab75,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-a7936135 {
        grid-template-rows: auto;
        grid-template-columns: .75fr 1.5fr
    }

    #w-node-f3327c40-f70f-0b26-1308-f72c8d20dc2e-9515ede8,#w-node-f3327c40-f70f-0b26-1308-f72c8d20dc2e-7d087568 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }
}

@media screen and (max-width: 991px) {
    #w-node-a4e07877-dcc1-b9eb-ff5b-4fd9dc487909-dc487907,#w-node-_78309dc9-84b4-e3a4-75f9-43044f5399be-22645f51 {
        grid-template-rows:auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-f1eae84e-768b-e838-c0af-32f02a18c003-22645f51 {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr
    }

    #w-node-def87e6f-c67e-42ad-fa8b-9d2851d6f75f-0f4ccd5f {
        grid-template-rows: auto;
        grid-template-columns: .5fr .5fr
    }

    #w-node-cb51b149-6b83-f27f-87c1-30ce5a2e7c2b-0f4ccdd9 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-ce1e4e1d-f77e-7d55-cc9b-eb104de15f71-0f4cce5e {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_50d6ff0c-fdd2-b94f-25cb-3b725036fc72-5036fc6b {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-f239989b-d4d2-1802-2b44-a9b032d3a9f0-0f4cceae,#w-node-efd322a6-554f-ac1a-a897-6f34428b5204-0f4ccf05 {
        grid-template-rows: auto;
        grid-template-columns: .5fr .5fr
    }

    #w-node-_2cccbbe5-99de-e5ce-7027-fcb82024bb04-0f4ccf06 {
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab0ef-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: .75fr 1fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab0f9-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: .5fr .5fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab105-0f4ccf07,#w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab111-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: .75fr 1fr
    }

    #w-node-_21138e35-f910-6bfb-eeda-e664b120d11c-1fda0ac1 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-d9451ec5-76dd-2835-ea57-51365a210505-8e5cebe6,#w-node-_88927dc7-3d06-aebc-1dac-0846c9b10077-ad18cff9,#w-node-d419edcc-14d4-3149-0451-a93ebf4d8722-6c614461 {
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-f1f148d8-8142-cb26-d19c-34abb2d5901a-f22ea012,#w-node-b86d0310-4089-a905-638a-0a0f1239cab5-ae4fe6fc {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_0512164f-a7e6-c8b0-bcc5-730db169d1c6-f11bd18e {
        grid-template-rows: 1fr;
        grid-template-columns: 1fr
    }

    #w-node-_7b7e71c6-632b-d396-f61c-cefa8d4a9a3b-f18257b6 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }
}

@media screen and (max-width: 767px) {
    #w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0432-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0435-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0444-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0450-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0453-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e045f-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0462-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e046e-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0471-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e047d-0f4cccce,#w-node-_1f01fc8e-2622-5d0c-528c-75e3cc2e0480-0f4cccce {
        grid-template-rows:auto;
        grid-template-columns: 1fr
    }

    #w-node-a4e07877-dcc1-b9eb-ff5b-4fd9dc487909-dc487907 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-fd9727ec-c70c-5240-4f7b-cdedef535210-0f4ccd58,#w-node-fd9727ec-c70c-5240-4f7b-cdedef53521d-0f4ccd58,#w-node-fd9727ec-c70c-5240-4f7b-cdedef53522a-0f4ccd58,#w-node-fd9727ec-c70c-5240-4f7b-cdedef535237-0f4ccd58 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-fd9727ec-c70c-5240-4f7b-cdedef535251-0f4ccd58 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_78309dc9-84b4-e3a4-75f9-43044f5399be-22645f51 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_2273738e-4884-a9c8-33e9-ae3eadae2ee3-0f4ccd5c {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_0718f2c6-8f31-c89e-1045-6c0a5f5d9ce3-0f4ccd5c {
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_3d1a62ea-3de0-75ff-903d-835550f61ea4-0f4ccd5d {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_19c50abd-cc58-f4d1-a4bf-14aad8d527e2-0f4ccd5d,#w-node-_0ce3c0d8-df2a-da57-2f73-675d414a26f4-0f4ccd5d {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-def87e6f-c67e-42ad-fa8b-9d2851d6f75f-0f4ccd5f {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-_8f403e1a-cbb4-a2cd-fa40-5c8fc606ca6c-0f4ccd5f {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_2985cfcc-79de-d380-625d-da94da00e966-0f4ccd63 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-b9f3e637-22e1-d7cf-1d80-3955c235dc21-0f4ccd7e {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_0d0703e3-5957-b35b-1497-10e6c3f5826b-0f4ccd7e {
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_26f262b9-f426-1b68-b556-659fa2379a6b-0f4ccde0 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_8e6f911e-e08f-040a-08a1-41a4c20d22a3-0f4ccde0 {
        grid-template-rows: auto;
        grid-template-columns: 2fr
    }

    #w-node-_219bcafc-10c9-57df-7064-563f96a5a5f0-0f4ccde2 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_219bcafc-10c9-57df-7064-563f96a5a5f2-0f4ccde2 {
        order: -9999
    }

    #w-node-_50d6ff0c-fdd2-b94f-25cb-3b725036fc72-5036fc6b {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_379a0b8b-96a1-a048-9792-14e8ef9eded5-0f4cce66 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_379a0b8b-96a1-a048-9792-14e8ef9edf0b-0f4cce66 {
        order: -9999
    }

    #w-node-cc4f2f50-fe2f-a241-c273-5376b858f420-0f4cce66 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-cc4f2f50-fe2f-a241-c273-5376b858f423-0f4cce66 {
        order: -9999
    }

    #w-node-_76acd78a-71f4-97cc-aab5-9a3553285fd6-0f4cce67 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_76acd78a-71f4-97cc-aab5-9a355328600c-0f4cce67 {
        order: -9999
    }

    #w-node-_1a588580-8dbd-8597-774f-997c4b944485-0f4ccea7,#w-node-bf86a465-cad3-c63d-59df-a0af3ebe2a0d-0f4ccea7,#w-node-ba6d02cd-ccb2-6968-b63a-4df318c4a8e0-0f4ccea7,#w-node-b1c0a29c-872b-1331-427d-4336ae21cc23-0f4ccea7,#w-node-_9a4d11e7-90b2-012a-17a7-eded11b9e827-0f4ccea7,#w-node-b61d18dc-79bf-ea06-49eb-66fa96e025d2-0f4ccea7,#w-node-f239989b-d4d2-1802-2b44-a9b032d3a9f0-0f4cceae {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_1b47f99f-b12a-e492-a54f-552ab715c438-0f4cceb4 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-ec4eb049-b84d-b2ec-9b40-e0c15d795430-0f4cceb8 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_98d9ba7c-04e3-319e-956f-6526fb2f24fd-0f4cceb8 {
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr
    }

    #w-node-e85a1f28-c0ae-b79e-92f6-571a95a4a7b5-0f4cceb9,#w-node-ab6a5b77-a050-2b5e-95a6-2d36f2b88bb1-0f4cceb9,#w-node-_1c2e90d9-d37a-bc97-d384-eb8dcddc7d56-0f4cceb9 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_69c941eb-5666-f3de-532c-ddcc53ade69b-0f4cceb9 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_267443e9-2eee-f1f0-bc41-e0c18787b176-0f4ccebb {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-e62c9b54-8630-6c80-4214-d94dc52861da-0f4ccec6 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-e62c9b54-8630-6c80-4214-d94dc52861db-0f4ccec6 {
        order: 9999
    }

    #w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa42-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa89-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fa91-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658facd-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fad7-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fae3-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658faef-0f4ccedf,#w-node-dd5c62fb-b78f-5fb9-6b69-895d9658fafb-0f4ccedf,#w-node-_216839af-8a1d-ac2b-7216-36b22f3b190d-0f4ccf04,#w-node-e6a420ad-b37f-b63b-3489-6b1d67125f91-0f4ccf04,#w-node-e6a420ad-b37f-b63b-3489-6b1d67125f9a-0f4ccf04,#w-node-e6a420ad-b37f-b63b-3489-6b1d67125fa5-0f4ccf04,#w-node-b983b0f7-ebd6-ce60-f8e0-378dfbf55656-0f4ccf05 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-efd322a6-554f-ac1a-a897-6f34428b5204-0f4ccf05 {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-efd322a6-554f-ac1a-a897-6f34428b520b-0f4ccf05 {
        order: -9999
    }

    #w-node-efd322a6-554f-ac1a-a897-6f34428b520e-0f4ccf05 {
        grid-template-rows: auto;
        grid-template-columns: .5fr 1fr
    }

    #w-node-_2cccbbe5-99de-e5ce-7027-fcb82024bb04-0f4ccf06 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_2cccbbe5-99de-e5ce-7027-fcb82024bb8f-0f4ccf06 {
        grid-template-rows: auto;
        grid-template-columns: .5fr
    }

    #w-node-_185f6751-3840-d0e3-7cfd-c38f15f01607-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab0ef-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: .75fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab0f9-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: .5fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab105-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: .75fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab111-0f4ccf07,#w-node-_85b42df5-c8d1-f1c4-aed1-fa2ef01906c6-0f4ccf08 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_85b42df5-c8d1-f1c4-aed1-fa2ef01906c7-0f4ccf08 {
        order: 9999
    }

    #w-node-_5c1bced6-66a8-3d93-b800-4916c5a1f558-0f4ccf0b {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_374bde6a-9aee-7cc8-b98f-4503f259b70f-0f4ccf2b,#w-node-_9966229b-14d5-42bb-7516-ca11aabe9801-0f4ccf78,#w-node-_1f0eddac-d449-4b60-4bda-9811e2cb2265-0f4ccf78,#w-node-_9966229b-14d5-42bb-7516-ca11aabe980e-0f4ccf78,#w-node-_9966229b-14d5-42bb-7516-ca11aabe981b-0f4ccf78 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_9966229b-14d5-42bb-7516-ca11aabe9842-0f4ccf78,#w-node-ef18d95c-e05d-ca41-bfa8-1738ada69af2-0f4ccf7b {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-ec54a53f-c7a0-18b8-03cc-85bde52e3c2a-0f4ccf87,#w-node-_96a390e4-0a2c-c38e-ab4a-66ebe35eff6b-0f4ccf87,#w-node-_33b0ed1d-3c6a-a918-4cb3-b6d47f3860eb-0f4ccf87,#w-node-_9627b700-55ec-5ab0-b1a5-e689976a2b12-0f4ccf87 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_285444c9-890e-f194-69bb-c4922b11a9a9-0f4ccf87 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_35d2370e-c12f-ecac-3184-b1a6e4d91722-0f4ccf87,#w-node-ae6dba18-dd27-10fd-ecd8-6f595ac6cf97-0f4ccff8,#w-node-_5f7d2f76-1e89-2cbc-f951-d95301825efb-0f4ccff8,#w-node-_891d31a7-f512-ad19-9acd-42692fda9cf2-0f4ccff8,#w-node-_7b010b15-3ac1-519f-dc6c-984bd6e8409c-0f4ccff8,#w-node-e7fb8307-675e-d78e-3593-2b9beedbfc87-0f4ccff8 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_455a35f3-800a-2208-82c3-c03deba851a4-0f4ccff8 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_7881dab9-507c-5dc1-1b6f-8631cecdc182-0f4cd027,#w-node-d64b40a3-f344-ef47-20c1-fda38c6708e8-0f4cd027,#w-node-a6608209-176a-1c88-9e06-9c22d79f33b2-0f4cd027,#w-node-b42c2933-83c4-dade-7cd0-a619a095a450-0f4cd027,#w-node-_94a937ae-8098-0f86-cb6f-dc50abcc0134-0f4cd027,#w-node-_5697b669-05fd-4e9e-c105-8de6118e2a40-0f4cd029,#w-node-_45455535-be01-83e3-a549-ba4f57a650c1-0f4cd02c,#w-node-ea9da8e3-183a-9ac3-d3b5-028e91528860-0f4cd02c,#w-node-_1e9dd6d3-5a2c-c523-79a5-104655344090-0f4cd02c,#w-node-_96325b7a-a712-8f4f-8920-2fcd954ac4da-0f4cd02c,#w-node-_0adbe8c8-e62e-e4a4-8afb-87e20aab75a0-0f4cd02c,#w-node-_46f6d4a5-4e93-bb12-9fd4-d88c6517c190-0f4cd02c {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_15b5f6ba-cca3-78a5-1978-11de1077465b-0f4cd02c {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-b5b5e153-61a8-8c00-4c89-9b9aacab0353-0f4cd031,#w-node-_9e8a5f0f-3d5f-46c0-f7f6-e70cbc7b93ca-0f4cd031,#w-node-_73755bef-053a-6b0c-526e-46f326d5d20b-0f4cd031,#w-node-_79883fa9-5f41-3b71-a48b-ac0d7d3ddd4a-0f4cd031,#w-node-_5c4e35e7-b447-b2f8-3278-a8805247ffd1-0f4cd031,#w-node-_17fa8488-484d-36ee-1cd0-20e14b7f7914-0f4cd031,#w-node-_9977fc73-b8d0-574f-80cd-ad7cecf6c6fd-0f4cd031 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-cff3a550-4205-b09e-f5ad-b3a5f9e0b4a7-0f4cd031 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-f6df9937-6e65-413b-d4b7-5f277d392103-0f4cd034 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_7e16b075-b2a8-fffa-4b85-fb0d454c7774-06c304bb,#w-node-dff24f07-502e-0e7d-8665-af9b24faac45-06c304bb {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-06c304bb,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-06c304bb,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-06c304bb,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b07-06c304bb,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b15-06c304bb,#w-node-_664f9644-d83f-bc84-71fb-a0de653e1819-06c304bb,#w-node-efff74fb-9f83-8932-66e4-5b258375bb5e-06c304bb,#w-node-_38d44c3a-84a4-c162-7ba4-d2125f015019-06c304bb,#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd9895f-06c304bb,#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee3-06c304bb,#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f3255f-06c304bb,#w-node-_9a1dbd9f-7d75-8c75-7158-1e75b4c8203c-06c304bb,#w-node-_765bc131-ec9c-cab0-4f01-af1076608397-06c304bb,#w-node-_24a39b39-3ba4-98a1-3158-1340f421ceed-06c304bb,#w-node-e2a85af7-acce-d87f-3bb2-3da5aafec97f-06c304bb,#w-node-_432c1ae0-4e9f-ce4b-522c-e722983aba63-983aba61,#w-node-aa9c7fc1-1dd6-f7c9-c2a6-1af00bac28d8-0bac28ad,#w-node-aa9c7fc1-1dd6-f7c9-c2a6-1af00bac28c6-0bac28ad,#w-node-aa9c7fc1-1dd6-f7c9-c2a6-1af00bac28cf-0bac28ad,#w-node-aa9c7fc1-1dd6-f7c9-c2a6-1af00bac28e3-0bac28ad,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef12-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef20-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef2e-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef3c-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef4a-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef58-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef66-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef74-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef82-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef90-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef9e-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81efac-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81efba-d93a57ec {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_0efc3c6a-30a0-ff69-3513-e206b5e10e74-b5e10e74,#w-node-_0efc3c6a-30a0-ff69-3513-e206b5e10e7a-b5e10e74 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-1ee8ab75,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-1ee8ab75,#w-node-_5a99443d-f5d2-349d-8211-1ae33c9cd368-1ee8ab75,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-1ee8ab75,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b07-1ee8ab75,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b15-1ee8ab75,#w-node-efff74fb-9f83-8932-66e4-5b258375bb5e-1ee8ab75,#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd9895f-1ee8ab75,#w-node-fbbfc966-03e5-38a0-dc0d-6d92e58823b7-1ee8ab75,#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee3-1ee8ab75,#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f3255f-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031a1-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031b1-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031bf-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031cd-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031db-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031e9-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031f7-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03205-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03213-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03221-1ee8ab75,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-a7936135,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-a7936135,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-a7936135,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b07-a7936135,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b15-a7936135,#w-node-_664f9644-d83f-bc84-71fb-a0de653e1819-a7936135,#w-node-efff74fb-9f83-8932-66e4-5b258375bb5e-a7936135,#w-node-_2218c074-1c12-0ec1-0300-446aae4cbe35-a7936135,#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd9895f-a7936135,#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee3-a7936135,#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f3255f-a7936135,#w-node-_9a1dbd9f-7d75-8c75-7158-1e75b4c8203c-a7936135,#w-node-_24a39b39-3ba4-98a1-3158-1340f421ceed-a7936135,#w-node-e2a85af7-acce-d87f-3bb2-3da5aafec97f-a7936135,#w-node-_6ebdc109-f05c-e732-bbae-b7b2f0b69caf-1fda0ac1,#w-node-_6e805810-a2b5-61a9-c856-101295dbd5de-1fda0ac1,#w-node-d4303160-68af-39bf-f80e-ecd53683ceac-1fda0ac1,#w-node-_24c3760b-1f2e-0f9d-a620-4200979a721c-1fda0ac1,#w-node-_21138e35-f910-6bfb-eeda-e664b120d11c-1fda0ac1 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_21138e35-f910-6bfb-eeda-e664b120d150-1fda0ac1 {
        order: -9999
    }

    #w-node-_5ea264d1-f76d-cfe1-8349-2d5edbdc71c4-6ee40eae,#w-node-_47182220-cea5-a4b7-7a2e-789783fb620b-6ee40eae,#w-node-_73b5819e-f80a-2f88-66a3-a6f0be26292f-6ee40eae,#w-node-d06b012c-daa3-5e41-1473-24e6c29e3fde-6ee40eae,#w-node-f2657e25-d9bb-7f2d-b579-27aeb2184d53-6ee40eae,#w-node-_715d96f7-da46-87ac-93ef-7e1f48a9cdb4-6ee40eae,#w-node-c904d554-232f-595d-f533-5fdce0052c09-6ee40eae,#w-node-_27f16ce6-74a2-643b-28a7-b9e331ead58b-6ee40eae,#w-node-_6c422f68-7647-9f1c-60b2-e532badce36f-6ee40eae,#w-node-fb15ec8d-2c9c-6245-53a1-b20cd8a8dc06-6ee40eae,#w-node-_5ea264d1-f76d-cfe1-8349-2d5edbdc71c4-24decc60,#w-node-_47182220-cea5-a4b7-7a2e-789783fb620b-24decc60,#w-node-f2657e25-d9bb-7f2d-b579-27aeb2184d53-24decc60,#w-node-c904d554-232f-595d-f533-5fdce0052c09-24decc60,#w-node-_0f000dc5-ce4d-2e17-7177-b8d09225c783-24decc60,#w-node-_9e8a5f0f-3d5f-46c0-f7f6-e70cbc7b93ca-66b13cc8,#w-node-b5b5e153-61a8-8c00-4c89-9b9aacab0353-66b13cc8,#w-node-_40382a9e-53b9-e55f-af32-6b2d119ca5e4-66b13cc8 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_1445dcf2-082d-a310-dc7f-61f18b021947-66b13cc8 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef2e-e6793b15,#w-node-d9dc04e4-9fcf-164c-44b9-53d3909dad01-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef3c-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef4a-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef58-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef66-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef74-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef82-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef90-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef9e-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81efac-e6793b15,#w-node-_41bed0d2-224b-5088-e8d4-36558f559445-e6793b15 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-d9451ec5-76dd-2835-ea57-51365a210505-8e5cebe6 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #zeb.w-node-_8900e962-7b86-64af-a6d6-5b3afd1121ee-8e5cebe6 {
        grid-column: span 1/span 1
    }

    #w-node-_3de50a3a-d5ef-140e-3fb2-8db06af42442-dd93f165,#w-node-f42f7608-43e8-c72f-8361-133b6253d703-dd93f165,#w-node-_78bbe42c-bb7a-d2cc-c55f-8e2ddaf7dbf5-831d1be6,#w-node-_9dd438f7-6017-80df-a461-9bc74c74310e-831d1be6,#w-node-_61021712-1937-3d0d-c668-7b9e00d333b4-831d1be6 {
        grid-template-rows: auto auto auto auto auto auto auto;
        grid-template-columns: .5fr 1fr
    }

    #w-node-_7dab1097-9526-b8d8-a6a5-24fcae9b623b-ad18cff9 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_88927dc7-3d06-aebc-1dac-0846c9b10077-ad18cff9 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_7dab1097-9526-b8d8-a6a5-24fcae9b623b-6c614461 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-d419edcc-14d4-3149-0451-a93ebf4d8722-6c614461 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-b86d0310-4089-a905-638a-0a0f1239cab5-ae4fe6fc,#w-node-_28187b26-86b6-db3a-2438-f1d8c5025e98-ae4fe6fc,#w-node-_72bb99c0-692d-1959-d34c-c31ef0d4927d-ae4fe6fc,#w-node-_7810c274-e949-acae-aae6-8aa8b4290874-ae4fe6fc,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-373bc54b,#w-node-b4f446b9-1be2-441d-952b-62830698dba9-373bc54b,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-373bc54b,#w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cee-373bc54b,#w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa524e-373bc54b,#w-node-b0c257c0-6321-aa8d-e633-368d519c60ee-373bc54b,#w-node-_1332944d-3f82-2c2f-64c8-b12386820a79-373bc54b,#w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f375-373bc54b,#w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f0-373bc54b,#w-node-_0da067c0-c068-d778-40f3-f401591351c2-373bc54b,#w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2ccdd-373bc54b,#w-node-_02d1c048-07f3-eccc-fc32-05016eb486c2-373bc54b,#w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d2-373bc54b,#w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb1-373bc54b,#w-node-_45d2a883-1426-f35b-3d61-f304077a3002-373bc54b,#w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d2-373bc54b,#w-node-_10ae8dba-066b-c68c-88cf-74faf81f6ffa-373bc54b,#w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd08-373bc54b,#w-node-_863c901f-dd72-0ddd-dfa7-498072db7353-373bc54b,#w-node-_5cbd274b-f2e4-6f20-279a-1da693f740f7-db3acda9,#w-node-_5edeffa9-325e-bfce-f9be-eb94a78b34c0-db3acda9,#w-node-ed64cff8-f977-879a-935e-5eb59043f690-db3acda9,#w-node-_8f29f66f-dca7-0056-0e8d-75e3fcb21083-db3acda9,#w-node-_9e9a817a-c5ed-2987-4819-7402a0cc8de4-db3acda9 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_7a59495d-e737-9e86-d760-e774eb6ee761-db3acda9 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_5cbd274b-f2e4-6f20-279a-1da693f740f7-c94a0769,#w-node-_5edeffa9-325e-bfce-f9be-eb94a78b34c0-c94a0769,#w-node-ed64cff8-f977-879a-935e-5eb59043f690-c94a0769,#w-node-_8f29f66f-dca7-0056-0e8d-75e3fcb21083-c94a0769 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_7a59495d-e737-9e86-d760-e774eb6ee761-c94a0769 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_5ea264d1-f76d-cfe1-8349-2d5edbdc71c4-17c9af5d,#w-node-_47182220-cea5-a4b7-7a2e-789783fb620b-17c9af5d,#w-node-_0f000dc5-ce4d-2e17-7177-b8d09225c783-17c9af5d,#w-node-_3eef8296-9e30-bd34-be16-d58c4605b4bf-17c9af5d,#w-node-_91e0615f-23b2-4d4f-5290-0752aac420cc-9515ede8 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-f3327c40-f70f-0b26-1308-f72c8d20dc29-9515ede8 {
        grid-template-rows: auto;
        grid-template-columns: 2fr
    }

    #w-node-_91e0615f-23b2-4d4f-5290-0752aac420cc-7d087568 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-f3327c40-f70f-0b26-1308-f72c8d20dc29-7d087568 {
        grid-template-rows: auto;
        grid-template-columns: 2fr
    }

    #w-node-_42c0c7f2-97bc-7951-5e1a-e8edb4e2cebc-916ad371 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_6b90173a-d4e7-7bb7-0bf6-949341099382-cb713311,#w-node-_0a571bd4-9464-c43f-f986-fb0d1f3d34cd-cb713311 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-cb713311,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef2e-cb713311,#w-node-bc1bad30-c8bf-8f57-8dc3-bb6349a5c5cf-cb713311,#w-node-_8943c64b-2a8a-3393-241a-e93dac2d4834-cb713311,#w-node-_15244bc1-0083-f751-fc20-6a3dbde2b76a-cb713311,#w-node-_7b492752-778c-cdde-da2e-6f2f0ec3b3a1-cb713311,#w-node-db734c2b-cf54-8e8b-a46c-824cfd32908f-cb713311,#w-node-_35d0932b-e359-2ae5-9d09-843cb09d802f-cb713311,#w-node-_78c18ab1-dd93-96f4-f37f-4cfb22b60eb6-cb713311,#w-node-ed5821e8-d48a-f870-a154-7fa06710e83d-cb713311,#w-node-_35d01bf4-7749-3941-8af5-d997709f8afe-cb713311,#w-node-_3a3e0bbd-1f1c-50ee-8651-53198f267e33-cb713311,#w-node-_14568a1e-940d-4cc6-edaa-ee59f105c001-cb713311,#w-node-_78627eeb-b96b-5571-8863-5970fd754c74-cb713311,#w-node-_510141c7-8e52-0e59-cbfb-e72ab4048a20-f11bd18e,#w-node-f51a3e10-521a-1102-1361-6c0018614dcd-f11bd18e,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-cdce3809,#w-node-b4f446b9-1be2-441d-952b-62830698dba9-cdce3809,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-cdce3809,#w-node-b0c257c0-6321-aa8d-e633-368d519c60ee-cdce3809,#w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cee-cdce3809,#w-node-_1332944d-3f82-2c2f-64c8-b12386820a79-cdce3809,#w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f375-cdce3809,#w-node-e7eb0992-f06c-c073-fbf5-dafa133640f8-cdce3809,#w-node-_0da067c0-c068-d778-40f3-f401591351c2-cdce3809,#w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2ccdd-cdce3809,#w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f0-cdce3809,#w-node-_45d2a883-1426-f35b-3d61-f304077a3002-cdce3809,#w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d2-cdce3809,#w-node-_2b3d2298-d972-f7be-b458-228408d02ad8-cdce3809,#w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa524e-cdce3809,#w-node-_02d1c048-07f3-eccc-fc32-05016eb486c2-cdce3809,#w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d2-cdce3809,#w-node-_72792f8f-92b2-93f9-04fd-84091a12dad2-cdce3809,#w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb1-cdce3809,#w-node-_10ae8dba-066b-c68c-88cf-74faf81f6ffa-cdce3809,#w-node-_5b30b112-8b7d-f10a-382c-dca6a8decae2-cdce3809,#w-node-_0f158421-b59c-3d2b-d42c-0e9e22d41170-cdce3809,#w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd08-cdce3809,#w-node-_6af6bd7e-ef8d-788f-8089-5c34db4bade1-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_6b90173a-d4e7-7bb7-0bf6-949341099382-e4d88f28,#w-node-_239f2319-c0ed-35de-b59e-6a1a6accd154-e4d88f28 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-e4d88f28,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef12-e4d88f28,#w-node-d8f2bfd7-e014-69a8-cd4b-d0981c9a85ae-e4d88f28,#w-node-d6cbc080-7d1c-c5fc-4f15-3da1c769db6c-e4d88f28,#w-node-_281b0828-3076-3a3a-8fed-ae14493eb116-e4d88f28,#w-node-_1674ff8c-2738-a6eb-8c45-e2672acffd62-e4d88f28,#w-node-ef72ad61-e13f-ab52-ffa3-83f71ededb53-e4d88f28,#w-node-_87d7e26d-88e9-4125-7d72-daf424abaf31-e4d88f28,#w-node-ed24a3d9-7970-a912-3f91-630d90addde6-e4d88f28,#w-node-_609b7159-1685-26c2-62ff-7fb9a116534b-e4d88f28,#w-node-f46f8153-b57f-1df0-31a6-c6af0734760d-e4d88f28,#w-node-_201f5c7a-c26b-0971-5b65-208ccc4e5f04-e4d88f28,#w-node-_80beb7cd-a93a-184b-44f3-a8ed7696c484-e4d88f28,#w-node-_6f4d6cf8-1a0c-9e3a-1ae0-e6944e1db101-e4d88f28,#w-node-abeeb971-bf7c-d4d3-be3a-5849583d86a6-e4d88f28,#w-node-_0f1a3abc-d1a2-54b9-e4b0-b56841e18bc3-e4d88f28,#w-node-bf2dcff1-5242-ae21-96d7-ba7cb82d5913-e4d88f28,#w-node-bd69a36c-d005-9e3e-91f9-65b37b97f091-e4d88f28,#w-node-_6420859d-981f-47bd-1c98-1dc985ee3a6a-e4d88f28,#w-node-_56bd7efb-5159-6770-9e71-818c232cb736-e4d88f28,#w-node-_16d94bde-1657-094b-c328-531d1c7c54f6-e4d88f28,#w-node-_7d927c2f-fe7b-e717-daca-1438ad66f822-e4d88f28,#w-node-_7ad0c64d-3e48-5350-5c1d-9cb73b07dfc3-e4d88f28,#w-node-_2dedce8d-20ac-6ee5-3d1d-f48b6a91c923-e4d88f28,#w-node-f8ab83d3-25d6-2caa-bc42-a4544baaa118-558a2d41,#w-node-_03c2074e-5907-34b0-b1c6-3436cf1a6a1c-558a2d41,#w-node-_5954f7ee-3e60-9e44-1873-10a1f0c6c914-558a2d41,#w-node-_3069559c-fde7-dc7b-4201-721bd8e90274-558a2d41,#w-node-e989cf34-e172-c98c-495f-2d4216d6ea37-558a2d41,#w-node-_9c07dd07-8490-5a03-9f09-d11f8c8d59c4-558a2d41,#w-node-c204075a-61d7-ae11-cd18-f869436f12b2-558a2d41,#w-node-c204075a-61d7-ae11-cd18-f869436f12b3-558a2d41,#w-node-_5597f6b7-8429-90e1-916b-f6ddd0fba883-558a2d41,#w-node-_5597f6b7-8429-90e1-916b-f6ddd0fba884-558a2d41,#w-node-_4c6a544d-c7b9-aa93-6905-a0196ad107d0-558a2d41,#w-node-_4c6a544d-c7b9-aa93-6905-a0196ad107d1-558a2d41,#w-node-bfecf8f6-c57d-abca-6c51-97a87b3970e1-558a2d41,#w-node-bfecf8f6-c57d-abca-6c51-97a87b3970e2-558a2d41,#w-node-_4fffe76b-d842-c7a2-79f3-f94446afd493-558a2d41,#w-node-_4fffe76b-d842-c7a2-79f3-f94446afd494-558a2d41,#w-node-fd053fcc-0e5e-0639-56e6-c4ac0f68a026-558a2d41,#w-node-fd053fcc-0e5e-0639-56e6-c4ac0f68a027-558a2d41,#w-node-_3c2d7317-9d94-d1b2-8480-5e3e780491a5-558a2d41,#w-node-_3c2d7317-9d94-d1b2-8480-5e3e780491a6-558a2d41,#w-node-_590d9f8e-ae67-0052-a678-82e4c58245df-f18257b6,#w-node-_590d9f8e-ae67-0052-a678-82e4c58245e0-f18257b6,#w-node-a47f4c73-42b0-1bbe-4af4-a7a7622e81d3-f18257b6,#w-node-a47f4c73-42b0-1bbe-4af4-a7a7622e81d4-f18257b6,#w-node-_159dfa57-ed52-b351-c960-d27f80af8477-f18257b6,#w-node-_3069559c-fde7-dc7b-4201-721bd8e90274-f18257b6,#w-node-f2771e11-2f39-7bb4-3b6b-8def738b6a16-f18257b6,#w-node-f2771e11-2f39-7bb4-3b6b-8def738b6a17-f18257b6,#w-node-db2c13be-bf4d-6b33-21f9-5a834d6f1f3a-f18257b6,#w-node-db2c13be-bf4d-6b33-21f9-5a834d6f1f3b-f18257b6,#w-node-_8ef7e916-7b8e-25b2-0e08-1a846d0c397a-f18257b6,#w-node-_8ef7e916-7b8e-25b2-0e08-1a846d0c397b-f18257b6,#w-node-c0297bfa-9584-21d3-ef24-db02e3540ea8-f18257b6,#w-node-_9c07dd07-8490-5a03-9f09-d11f8c8d59c4-f18257b6,#w-node-e34351ba-cf74-3792-2b17-3de32da28191-f18257b6,#w-node-e34351ba-cf74-3792-2b17-3de32da28192-f18257b6,#w-node-_60829fad-7164-9110-b463-7f144f9ed942-f18257b6,#w-node-_60829fad-7164-9110-b463-7f144f9ed943-f18257b6,#w-node-c62a23b7-86e3-f4b3-01d4-fcd6ef36cbc9-f18257b6,#w-node-c62a23b7-86e3-f4b3-01d4-fcd6ef36cbca-f18257b6 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_7b7e71c6-632b-d396-f61c-cefa8d4a9a3b-f18257b6 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-c4a73f35-82b1-a630-2476-97fe762b35ed-9678e83c,#w-node-_9b7dfeab-fb85-0147-fa13-dfa89d400992-9678e83c,#w-node-_2e306e26-cc93-f946-3db9-2af0eec715fc-9678e83c,#w-node-_9977fc73-b8d0-574f-80cd-ad7cecf6c6fd-9678e83c,#w-node-_5ea264d1-f76d-cfe1-8349-2d5edbdc71c4-ca983ebc,#w-node-_47182220-cea5-a4b7-7a2e-789783fb620b-ca983ebc,#w-node-_0f000dc5-ce4d-2e17-7177-b8d09225c783-ca983ebc,#w-node-_3eef8296-9e30-bd34-be16-d58c4605b4bf-ca983ebc,#w-node-_2003a2d2-b6d9-7c7c-46ba-6dcda6520374-ca983ebc,#w-node-_663f69ac-4230-a3f2-d7f9-add44eb6af6b-ca983ebc {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }
}

@media screen and (max-width: 479px) {
    #w-node-a4e07877-dcc1-b9eb-ff5b-4fd9dc487909-dc487907,#w-node-fd9727ec-c70c-5240-4f7b-cdedef535251-0f4ccd58,#w-node-_78309dc9-84b4-e3a4-75f9-43044f5399be-22645f51 {
        grid-template-rows:auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_2273738e-4884-a9c8-33e9-ae3eadae2ee3-0f4ccd5c {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_0718f2c6-8f31-c89e-1045-6c0a5f5d9ce3-0f4ccd5c {
        grid-template-rows: auto auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_8604d654-8b7a-6c72-ea15-3de009efe891-0f4ccd5d,#w-node-_091d4cc4-1491-8c73-b1f0-54e36f8ebee3-0f4ccd5d {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_19c50abd-cc58-f4d1-a4bf-14aad8d527e2-0f4ccd5d,#w-node-_0ce3c0d8-df2a-da57-2f73-675d414a26f4-0f4ccd5d {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-c7fd7a27-971b-830c-df74-7c0b9312e27e-0f4ccd5f,#w-node-a0e3329c-51bb-664c-253b-d5bd9e1f9315-0f4ccd5f {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_81c7735a-d9fe-f749-1254-9b508d5aa009-0f4ccd5f,#w-node-_498adb3b-776e-d433-d2d1-547678fb6cc3-0f4ccd5f,#w-node-_984d51c3-229b-9edf-c1a4-b817f95012db-0f4ccd5f,#w-node-f7475645-aea6-4189-9ebd-b635b1448d07-0f4ccd5f,#w-node-_7d1d3e53-7ea4-1fff-2c35-29605b66cbdc-0f4ccd5f,#w-node-e7dbd627-c048-dd3b-f525-bc6a4654be5d-0f4ccd5f,#w-node-_4cbbe6ac-2806-01a9-ce62-944632680bf1-0f4ccd5f,#w-node-_4c6979db-8c1a-1527-2f37-000bf3908615-0f4ccd5f {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_2985cfcc-79de-d380-625d-da94da00e966-0f4ccd63 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-d76c80a0-40bc-f5c9-c849-a0abe2dce896-0f4ccdd5,#w-node-_26f262b9-f426-1b68-b556-659fa2379a6b-0f4ccde0 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_50d6ff0c-fdd2-b94f-25cb-3b725036fc72-5036fc6b {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-f239989b-d4d2-1802-2b44-a9b032d3a9f0-0f4cceae {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1b47f99f-b12a-e492-a54f-552ab715c438-0f4cceb4,#w-node-_69c941eb-5666-f3de-532c-ddcc53ade69b-0f4cceb9 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_267443e9-2eee-f1f0-bc41-e0c18787b178-0f4ccebb {
        order: -9999
    }

    #w-node-_28a21a01-c5e7-a32c-f22e-0013adc3da53-0f4ccebb,#w-node-e62c9b54-8630-6c80-4214-d94dc52861da-0f4ccec6,#w-node-b605e264-fc51-f4ac-c250-69eda455706a-0f4ccec6 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-b983b0f7-ebd6-ce60-f8e0-378dfbf55666-0f4ccf05 {
        order: -9999
    }

    #w-node-efd322a6-554f-ac1a-a897-6f34428b5204-0f4ccf05 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-efd322a6-554f-ac1a-a897-6f34428b520b-0f4ccf05 {
        order: -9999
    }

    #w-node-_2cccbbe5-99de-e5ce-7027-fcb82024bb04-0f4ccf06,#w-node-_185f6751-3840-d0e3-7cfd-c38f15f01607-0f4ccf07,#w-node-_185f6751-3840-d0e3-7cfd-c38f15f0160d-0f4ccf07,#w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab0ef-0f4ccf07,#w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab0f9-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab102-0f4ccf07 {
        order: -9999
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab105-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: .75fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab111-0f4ccf07 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-e188b6ab-d9d3-f82f-1e16-0734dd9ab11a-0f4ccf07 {
        order: -9999
    }

    #w-node-_85b42df5-c8d1-f1c4-aed1-fa2ef01906c6-0f4ccf08 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_5c1bced6-66a8-3d93-b800-4916c5a1f558-0f4ccf0b,#w-node-_9966229b-14d5-42bb-7516-ca11aabe9842-0f4ccf78 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_0cef2134-1e27-43d5-7171-4efbb581f641-0f4ccf79,#w-node-e5c18659-2524-a722-ef3c-4c93b675afe9-0f4ccf7a,#w-node-ccc7ae2d-671c-4ab5-3b9f-1e7819d3710b-0f4ccf7a,#w-node-c62da234-cee1-7a36-3da8-9852136c6483-0f4ccf7a {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-ef18d95c-e05d-ca41-bfa8-1738ada69af2-0f4ccf7b,#w-node-_285444c9-890e-f194-69bb-c4922b11a9a9-0f4ccf87,#w-node-_455a35f3-800a-2208-82c3-c03deba851a4-0f4ccff8 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_45455535-be01-83e3-a549-ba4f57a650d0-0f4cd02c {
        order: -9999
    }

    #w-node-ea9da8e3-183a-9ac3-d3b5-028e91528860-0f4cd02c {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-ea9da8e3-183a-9ac3-d3b5-028e91528861-0f4cd02c {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_1e9dd6d3-5a2c-c523-79a5-104655344090-0f4cd02c {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_120c5914-7a23-edd7-dad1-a9cccac2926b-0f4cd02c {
        grid-row: span 1/span 1
    }

    #w-node-_96325b7a-a712-8f4f-8920-2fcd954ac4da-0f4cd02c,#w-node-_0adbe8c8-e62e-e4a4-8afb-87e20aab75a0-0f4cd02c {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_46f6d4a5-4e93-bb12-9fd4-d88c6517c190-0f4cd02c {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-_15b5f6ba-cca3-78a5-1978-11de1077465b-0f4cd02c,#w-node-cff3a550-4205-b09e-f5ad-b3a5f9e0b4a7-0f4cd031,#w-node-_7e16b075-b2a8-fffa-4b85-fb0d454c7774-06c304bb,#w-node-dff24f07-502e-0e7d-8665-af9b24faac45-06c304bb {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-06c304bb {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae2-06c304bb {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a764-06c304bb {
        grid-row: span 1/span 1
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-06c304bb {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af1-06c304bb {
        grid-row: span 1/span 1
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-06c304bb,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b07-06c304bb {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b15-06c304bb,#w-node-_664f9644-d83f-bc84-71fb-a0de653e1819-06c304bb,#w-node-efff74fb-9f83-8932-66e4-5b258375bb5e-06c304bb,#w-node-_38d44c3a-84a4-c162-7ba4-d2125f015019-06c304bb,#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd9895f-06c304bb,#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee3-06c304bb,#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f3255f-06c304bb,#w-node-_9a1dbd9f-7d75-8c75-7158-1e75b4c8203c-06c304bb,#w-node-_765bc131-ec9c-cab0-4f01-af1076608397-06c304bb,#w-node-_24a39b39-3ba4-98a1-3158-1340f421ceed-06c304bb,#w-node-e2a85af7-acce-d87f-3bb2-3da5aafec97f-06c304bb {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-_432c1ae0-4e9f-ce4b-522c-e722983aba6d-983aba61 {
        order: -9999
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-d93a57ec {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef05-d93a57ec {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef0a-d93a57ec {
        grid-row: span 1/span 1
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef12-d93a57ec {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef18-d93a57ec {
        grid-row: span 1/span 1
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef20-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef2e-d93a57ec {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef3c-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef4a-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef58-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef66-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef74-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef82-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef90-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef9e-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81efac-d93a57ec,#w-node-_24506774-c0c9-b01a-0daa-28898d81efba-d93a57ec {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-_0efc3c6a-30a0-ff69-3513-e206b5e10e74-b5e10e74,#w-node-_0efc3c6a-30a0-ff69-3513-e206b5e10e7a-b5e10e74 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae2-1ee8ab75 {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a764-1ee8ab75 {
        grid-row: span 1/span 1
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af1-1ee8ab75 {
        grid-row: span 1/span 1
    }

    #w-node-_5a99443d-f5d2-349d-8211-1ae33c9cd368-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_5a99443d-f5d2-349d-8211-1ae33c9cd36e-1ee8ab75 {
        grid-row: span 1/span 1
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-1ee8ab75,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b07-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b15-1ee8ab75,#w-node-efff74fb-9f83-8932-66e4-5b258375bb5e-1ee8ab75,#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd9895f-1ee8ab75,#w-node-fbbfc966-03e5-38a0-dc0d-6d92e58823b7-1ee8ab75,#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee3-1ee8ab75,#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f3255f-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031a1-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031a2-1ee8ab75 {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031a9-1ee8ab75 {
        grid-row: span 1/span 1
    }

    #w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031b1-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031b7-1ee8ab75 {
        grid-row: span 1/span 1
    }

    #w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031bf-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031c5-1ee8ab75 {
        grid-row: span 1/span 1
    }

    #w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031cd-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031db-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031e9-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f031f7-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03205-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03213-1ee8ab75,#w-node-e9b5f1c2-849e-8d5c-5a9c-607386f03221-1ee8ab75 {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-a7936135 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae2-a7936135 {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a764-a7936135 {
        grid-row: span 1/span 1
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-a7936135 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af1-a7936135 {
        grid-row: span 1/span 1
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af9-a7936135,#w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b07-a7936135 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80b15-a7936135,#w-node-_664f9644-d83f-bc84-71fb-a0de653e1819-a7936135,#w-node-efff74fb-9f83-8932-66e4-5b258375bb5e-a7936135,#w-node-_2218c074-1c12-0ec1-0300-446aae4cbe35-a7936135,#w-node-_7ba5eb87-e7a4-d2a7-daed-add34cd9895f-a7936135,#w-node-_99d4f4a4-e880-eca4-c08d-508d5b394ee3-a7936135,#w-node-ac3274bd-7b9d-7446-f181-dd5ad4f3255f-a7936135,#w-node-_9a1dbd9f-7d75-8c75-7158-1e75b4c8203c-a7936135,#w-node-_24a39b39-3ba4-98a1-3158-1340f421ceed-a7936135,#w-node-e2a85af7-acce-d87f-3bb2-3da5aafec97f-a7936135 {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-_07300cdb-47dc-4cc1-61f4-7e1f16c9e125-a7936135 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_1445dcf2-082d-a310-dc7f-61f18b021947-66b13cc8 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-e6793b15 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef05-e6793b15 {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef0a-e6793b15 {
        grid-row: span 1/span 1
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef2e-e6793b15,#w-node-d9dc04e4-9fcf-164c-44b9-53d3909dad01-e6793b15 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef3c-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef4a-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef58-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef66-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef74-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef82-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef90-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81ef9e-e6793b15,#w-node-_24506774-c0c9-b01a-0daa-28898d81efac-e6793b15,#w-node-_41bed0d2-224b-5088-e8d4-36558f559445-e6793b15 {
        grid-template-rows: auto;
        grid-template-columns: 1.25fr
    }

    #w-node-d9451ec5-76dd-2835-ea57-51365a210505-8e5cebe6 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #project-management.w-node-f1b4a0b5-eccc-5f48-ff49-675756668335-8e5cebe6,#zeb.w-node-_8900e962-7b86-64af-a6d6-5b3afd1121ee-8e5cebe6 {
        grid-column: span 1/span 1
    }

    #w-node-_7dab1097-9526-b8d8-a6a5-24fcae9b623b-ad18cff9 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_88927dc7-3d06-aebc-1dac-0846c9b10077-ad18cff9 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_7dab1097-9526-b8d8-a6a5-24fcae9b623b-6c614461 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-d419edcc-14d4-3149-0451-a93ebf4d8722-6c614461 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae2-373bc54b {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a764-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-b4f446b9-1be2-441d-952b-62830698dba9-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-b4f446b9-1be2-441d-952b-62830698dbaf-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af1-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cee-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cf4-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa524e-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa5254-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-b0c257c0-6321-aa8d-e633-368d519c60ee-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-b0c257c0-6321-aa8d-e633-368d519c60f4-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_1332944d-3f82-2c2f-64c8-b12386820a79-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1332944d-3f82-2c2f-64c8-b12386820a7f-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f375-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f37b-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f0-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f6-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_0da067c0-c068-d778-40f3-f401591351c2-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_0da067c0-c068-d778-40f3-f401591351c8-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2ccdd-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2cce3-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_02d1c048-07f3-eccc-fc32-05016eb486c2-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_02d1c048-07f3-eccc-fc32-05016eb486c8-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d2-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d8-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb1-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb7-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_45d2a883-1426-f35b-3d61-f304077a3002-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_45d2a883-1426-f35b-3d61-f304077a3008-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d2-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d8-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_10ae8dba-066b-c68c-88cf-74faf81f6ffa-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_10ae8dba-066b-c68c-88cf-74faf81f7000-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd08-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd0e-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_863c901f-dd72-0ddd-dfa7-498072db7353-373bc54b {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_863c901f-dd72-0ddd-dfa7-498072db7359-373bc54b {
        grid-row: span 1/span 1
    }

    #w-node-_7a59495d-e737-9e86-d760-e774eb6ee761-db3acda9,#w-node-_7a59495d-e737-9e86-d760-e774eb6ee761-c94a0769 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_91e0615f-23b2-4d4f-5290-0752aac420cc-9515ede8,#w-node-_91e0615f-23b2-4d4f-5290-0752aac420cc-7d087568 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_6b90173a-d4e7-7bb7-0bf6-949341099382-cb713311,#w-node-_0a571bd4-9464-c43f-f986-fb0d1f3d34cd-cb713311 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-cb713311 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef05-cb713311 {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef0a-cb713311 {
        grid-row: span 1/span 1
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef2e-cb713311,#w-node-bc1bad30-c8bf-8f57-8dc3-bb6349a5c5cf-cb713311,#w-node-_8943c64b-2a8a-3393-241a-e93dac2d4834-cb713311,#w-node-_15244bc1-0083-f751-fc20-6a3dbde2b76a-cb713311,#w-node-_7b492752-778c-cdde-da2e-6f2f0ec3b3a1-cb713311,#w-node-db734c2b-cf54-8e8b-a46c-824cfd32908f-cb713311,#w-node-_35d0932b-e359-2ae5-9d09-843cb09d802f-cb713311,#w-node-_78c18ab1-dd93-96f4-f37f-4cfb22b60eb6-cb713311,#w-node-ed5821e8-d48a-f870-a154-7fa06710e83d-cb713311,#w-node-_35d01bf4-7749-3941-8af5-d997709f8afe-cb713311,#w-node-_3a3e0bbd-1f1c-50ee-8651-53198f267e33-cb713311,#w-node-_14568a1e-940d-4cc6-edaa-ee59f105c001-cb713311,#w-node-_78627eeb-b96b-5571-8863-5970fd754c74-cb713311 {
        grid-template-rows: auto;
        grid-template-columns: 1fr
    }

    #w-node-_510141c7-8e52-0e59-cbfb-e72ab4048a2c-f11bd18e {
        order: -9999
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae1-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80ae2-cdce3809 {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_736539c1-1a70-ae0a-09b5-ece0b7e8a764-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-b4f446b9-1be2-441d-952b-62830698dba9-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-b4f446b9-1be2-441d-952b-62830698dbaf-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80aeb-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1a232b5f-d83b-0c87-15ed-5ae179b80af1-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-b0c257c0-6321-aa8d-e633-368d519c60ee-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-b0c257c0-6321-aa8d-e633-368d519c60f4-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cee-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_4e52ad4a-08e8-6c53-f2c3-507eac5f4cf4-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_1332944d-3f82-2c2f-64c8-b12386820a79-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1332944d-3f82-2c2f-64c8-b12386820a7f-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f375-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-ea60a6d6-2065-b2e0-ea29-5b1d6e07f37b-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-e7eb0992-f06c-c073-fbf5-dafa133640f8-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-e7eb0992-f06c-c073-fbf5-dafa133640ff-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_0da067c0-c068-d778-40f3-f401591351c2-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_0da067c0-c068-d778-40f3-f401591351c8-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2ccdd-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-e5aab2bc-56d3-e33d-ee22-c2c75ba2cce3-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f0-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1b7db90c-6edd-06d4-4346-fbc8d86f08f6-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_45d2a883-1426-f35b-3d61-f304077a3002-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_45d2a883-1426-f35b-3d61-f304077a3008-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d2-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_3ab15885-6151-3a3c-c9b1-53b3bf22c8d8-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_2b3d2298-d972-f7be-b458-228408d02ad8-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_2b3d2298-d972-f7be-b458-228408d02adf-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa524e-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_7423b58e-abf6-07f5-d1c9-4f3b17fa5254-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_02d1c048-07f3-eccc-fc32-05016eb486c2-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_02d1c048-07f3-eccc-fc32-05016eb486c8-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d2-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-d8f05fd1-fcfb-d030-4a51-1cb8d89877d8-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_72792f8f-92b2-93f9-04fd-84091a12dad2-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_72792f8f-92b2-93f9-04fd-84091a12dad9-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb1-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_848868bf-64a7-04d6-6b85-aa5e8312beb7-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_10ae8dba-066b-c68c-88cf-74faf81f6ffa-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_10ae8dba-066b-c68c-88cf-74faf81f7000-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_5b30b112-8b7d-f10a-382c-dca6a8decae2-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_5b30b112-8b7d-f10a-382c-dca6a8decae9-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_0f158421-b59c-3d2b-d42c-0e9e22d41170-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_0f158421-b59c-3d2b-d42c-0e9e22d41177-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd08-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-c7c03b71-95a0-4f3e-5fd7-8bb0a10cfd0e-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_6af6bd7e-ef8d-788f-8089-5c34db4bade1-cdce3809 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_6af6bd7e-ef8d-788f-8089-5c34db4bade8-cdce3809 {
        grid-row: span 1/span 1
    }

    #w-node-_6b90173a-d4e7-7bb7-0bf6-949341099382-e4d88f28,#w-node-_239f2319-c0ed-35de-b59e-6a1a6accd154-e4d88f28 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef04-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef05-e4d88f28 {
        grid-area: span 1/span 1/span 1/span 1
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef0a-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef12-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_24506774-c0c9-b01a-0daa-28898d81ef18-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-d8f2bfd7-e014-69a8-cd4b-d0981c9a85ae-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-d8f2bfd7-e014-69a8-cd4b-d0981c9a85b5-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-d6cbc080-7d1c-c5fc-4f15-3da1c769db6c-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-d6cbc080-7d1c-c5fc-4f15-3da1c769db72-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_281b0828-3076-3a3a-8fed-ae14493eb116-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_281b0828-3076-3a3a-8fed-ae14493eb11c-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_1674ff8c-2738-a6eb-8c45-e2672acffd62-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_1674ff8c-2738-a6eb-8c45-e2672acffd69-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-ef72ad61-e13f-ab52-ffa3-83f71ededb53-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-ef72ad61-e13f-ab52-ffa3-83f71ededb5a-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_87d7e26d-88e9-4125-7d72-daf424abaf31-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_87d7e26d-88e9-4125-7d72-daf424abaf37-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-ed24a3d9-7970-a912-3f91-630d90addde6-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-ed24a3d9-7970-a912-3f91-630d90adddec-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_609b7159-1685-26c2-62ff-7fb9a116534b-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_609b7159-1685-26c2-62ff-7fb9a1165351-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-f46f8153-b57f-1df0-31a6-c6af0734760d-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-f46f8153-b57f-1df0-31a6-c6af07347613-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_201f5c7a-c26b-0971-5b65-208ccc4e5f04-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_201f5c7a-c26b-0971-5b65-208ccc4e5f0a-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_80beb7cd-a93a-184b-44f3-a8ed7696c484-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_80beb7cd-a93a-184b-44f3-a8ed7696c48a-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_6f4d6cf8-1a0c-9e3a-1ae0-e6944e1db101-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_6f4d6cf8-1a0c-9e3a-1ae0-e6944e1db107-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-abeeb971-bf7c-d4d3-be3a-5849583d86a6-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-abeeb971-bf7c-d4d3-be3a-5849583d86ac-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_0f1a3abc-d1a2-54b9-e4b0-b56841e18bc3-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_0f1a3abc-d1a2-54b9-e4b0-b56841e18bc9-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-bf2dcff1-5242-ae21-96d7-ba7cb82d5913-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-bf2dcff1-5242-ae21-96d7-ba7cb82d5919-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-bd69a36c-d005-9e3e-91f9-65b37b97f091-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-bd69a36c-d005-9e3e-91f9-65b37b97f097-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_6420859d-981f-47bd-1c98-1dc985ee3a6a-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_6420859d-981f-47bd-1c98-1dc985ee3a70-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_56bd7efb-5159-6770-9e71-818c232cb736-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_56bd7efb-5159-6770-9e71-818c232cb73c-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_16d94bde-1657-094b-c328-531d1c7c54f6-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_16d94bde-1657-094b-c328-531d1c7c54fc-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_7d927c2f-fe7b-e717-daca-1438ad66f822-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_7d927c2f-fe7b-e717-daca-1438ad66f828-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_7ad0c64d-3e48-5350-5c1d-9cb73b07dfc3-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_7ad0c64d-3e48-5350-5c1d-9cb73b07dfc9-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_2dedce8d-20ac-6ee5-3d1d-f48b6a91c923-e4d88f28 {
        grid-template-rows: auto;
        grid-template-columns: 1.5fr
    }

    #w-node-_2dedce8d-20ac-6ee5-3d1d-f48b6a91c929-e4d88f28 {
        grid-row: span 1/span 1
    }

    #w-node-_7b7e71c6-632b-d396-f61c-cefa8d4a9a3b-f18257b6 {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr
    }
}