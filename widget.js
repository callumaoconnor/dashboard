const htmlContent = `<a class="circle-widget-trigger" href="#">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0h24v24H0V0z" fill="none"/>
<path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/>
  </svg>
</a>
<div class="circle-widget-overlay hidden" style="visibility: hidden;">
  <a href="#" class="button-close">
    Close
  </a>
  <iframe id="circleWidgetIframe">
</div>
`;

let widgetWrapper;

const show = config => {
  let body;
  let widgetIframe = document.getElementById("circleWidgetIframe");
  // append css to head
  const scriptUrl = new URL(document.currentScript.src);
  let scriptTag =
    '<link id="circleWidgetStylesheet" rel="stylesheet" href="//' +
    scriptUrl.host +
    '/external/widget.css" />';
  scriptTag +=
    '<style type="text/css">:root {--brand: ' +
    config.brand_color +
    "; }</style>";
  let widgetScripts = document.getElementById("circleWidgetStylesheet");

  if (!widgetIframe) {
    // convert plain HTML string into DOM elements
    let temporary = document.createElement("div");
    temporary.innerHTML = htmlContent;

    // append elements to body
    body = document.getElementsByTagName("body")[0];
    while (temporary.children.length > 0) {
      body.appendChild(temporary.children[0]);
    }
  }

  if (!widgetScripts) {
    document
      .getElementsByTagName("head")[0]
      .insertAdjacentHTML("beforeend", scriptTag);
  }

  // load iFrame
  widgetIframe = document.getElementById("circleWidgetIframe");

  let postSlug = "";
  let spaceSlug = "";

  if (config.post_slug) {
    postSlug = config.post_slug;
  }

  if (config.space_slug) {
    spaceSlug = config.space_slug;
  } else if (config.channel_slug) {
    spaceSlug = config.channel_slug;
  }

  widgetIframe.src =
    "//" +
    scriptUrl.host +
    "/widget/iframe/" +
    config.community_public_uid +
    "?space_slug=" +
    spaceSlug +
    "&post_slug=" +
    postSlug;

  // activate triggers
  let widgetTrigger = document.getElementsByClassName(
    "circle-widget-trigger",
  )[0];
  widgetTrigger.removeEventListener("click", open);
  widgetTrigger.addEventListener("click", open);
};

const open = ev => {
  if (ev) {
    ev.preventDefault();
  }
  widgetWrapper = document.getElementsByClassName("circle-widget-overlay")[0];
  widgetWrapper.classList.add("shown");
  widgetWrapper.classList.remove("hidden");
  widgetWrapper.style.visibility = "visible";
  widgetWrapper.addEventListener("click", close);
  document
    .getElementById("circleWidgetIframe")
    .contentWindow.postMessage("widgetReload", "*");
};

const close = ev => {
  if (ev) {
    ev.preventDefault();
  }
  widgetWrapper.classList.add("hidden");
  widgetWrapper.classList.remove("shown");
  widgetWrapper.style.visibility = "hidden";
  widgetWrapper.removeEventListener("click", close);
};

window.CircleWidget = {};
window.CircleWidget.open = open;
window.CircleWidget.close = close;

const supportedAPI = ["init", "setDefaults"]; // enlist all methods supported by API (e.g. `mw('event', 'user-login');`)

/**
 The main entry of the application
 */
const app = window => {
  console.log("circleWidget starting");

  // set default configurations
  let configurations = {};

  // all methods that were called till now and stored in queue
  // needs to be called now
  let globalObject = window[window["circleWidget"]];
  let queue = globalObject.q;

  if (queue) {
    for (var i = 0; i < queue.length; i++) {
      if (supportedAPI.indexOf(queue[i][0]) !== -1) {
        configurations = extendObject(configurations, queue[i][1]);
        console.log("circleWidget started", configurations);
      } else apiHandler(queue[i][0], queue[i][1]);
    }
  }

  // override temporary (until the app loaded) handler
  // for widget's API calls
  globalObject = apiHandler;
  globalObject.configurations = configurations;

  show({
    community_public_uid: globalObject.configurations.community_public_uid,
    brand_color: globalObject.configurations.brand_color,
    space_slug: globalObject.configurations.space_slug,
    channel_slug: globalObject.configurations.channel_slug,
    post_slug: globalObject.configurations.post_slug,
  });
};

/**
 Method that handles all API calls
 */
const apiHandler = (api, params) => {
  if (!api) throw Error("API method required");

  if (supportedAPI.indexOf(api) === -1)
    throw Error(`Method ${api} is not supported`);

  console.log(`Handling API call ${api}`, params);

  switch (api) {
    // TODO: add API implementation
    // case 'message':
    //   break;
    default:
      console.warn(`No handler defined for ${api}`);
  }
};

const extendObject = (a, b) => {
  for (var key in b) if (b.hasOwnProperty(key)) a[key] = b[key];
  return a;
};

app(window);
