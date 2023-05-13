var SETTINGS = {
  navBarTravelling: false,
  navBarTravelDirection: "",
  navBarTravelDistance: 150,
};

var colours = {
  0: "#131313",
};

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

var pnAdvancerLeft = document.getElementById("pnAdvancerLeft");
var pnAdvancerRight = document.getElementById("pnAdvancerRight");
var line_selected_item = document.getElementById("line-selected-item");
var slider_menu_wrapper_2 = document.getElementById("slider-menu-wrapper-2");
var slider_menu = document.getElementById("slider-menu");

slider_menu_wrapper_2.setAttribute("data-overflowing", determineOverflow(slider_menu, slider_menu_wrapper_2));

moveIndicator(slider_menu_wrapper_2.querySelector('[aria-selected="true"]'), colours[0]);

var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  slider_menu_wrapper_2.setAttribute("data-overflowing", determineOverflow(slider_menu, slider_menu_wrapper_2));
}

slider_menu_wrapper_2.addEventListener("scroll", function () {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
      window.requestAnimationFrame(function () {
          doSomething(last_known_scroll_position);
          ticking = false;
      });
  }
  ticking = true;
});

pnAdvancerLeft.addEventListener("click", function () {
  if (SETTINGS.navBarTravelling === true) {
      return;
  }
  if (determineOverflow(slider_menu, slider_menu_wrapper_2) === "left" || determineOverflow(slider_menu, slider_menu_wrapper_2) === "both") {
      var availableScrollLeft = slider_menu_wrapper_2.scrollLeft;
      if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
          slider_menu.style.transform = "translateX(" + availableScrollLeft + "px)";
      } else {
          slider_menu.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
      }
      slider_menu.classList.remove("slider-menu-no-transition");
      SETTINGS.navBarTravelDirection = "left";
      SETTINGS.navBarTravelling = true;
  }
  slider_menu_wrapper_2.setAttribute("data-overflowing", determineOverflow(slider_menu, slider_menu_wrapper_2));
});

pnAdvancerRight.addEventListener("click", function () {
  if (SETTINGS.navBarTravelling === true) {
      return;
  }
  if (determineOverflow(slider_menu, slider_menu_wrapper_2) === "right" || determineOverflow(slider_menu, slider_menu_wrapper_2) === "both") {
      var navBarRightEdge = slider_menu.getBoundingClientRect().right;
      var navBarScrollerRightEdge = slider_menu_wrapper_2.getBoundingClientRect().right;
      var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);
      if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
          slider_menu.style.transform = "translateX(-" + availableScrollRight + "px)";
      } else {
          slider_menu.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
      }
      slider_menu.classList.remove("slider-menu-no-transition");
      SETTINGS.navBarTravelDirection = "right";
      SETTINGS.navBarTravelling = true;
  }
  slider_menu_wrapper_2.setAttribute("data-overflowing", determineOverflow(slider_menu, slider_menu_wrapper_2));
});

slider_menu.addEventListener(
  "transitionend",
  function () {
      var styleOfTransform = window.getComputedStyle(slider_menu, null);
      var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");
      var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
      slider_menu.style.transform = "none";
      slider_menu.classList.add("slider-menu-no-transition");
      if (SETTINGS.navBarTravelDirection === "left") {
          slider_menu_wrapper_2.scrollLeft = slider_menu_wrapper_2.scrollLeft - amount;
      } else {
          slider_menu_wrapper_2.scrollLeft = slider_menu_wrapper_2.scrollLeft + amount;
      }
      SETTINGS.navBarTravelling = false;
  },
  false
);

slider_menu.addEventListener("click", function (e) {
  var links = [].slice.call(document.querySelectorAll(".menu-item"));
  links.forEach(function (item) {
      item.setAttribute("aria-selected", "false");
  });
  e.target.setAttribute("aria-selected", "true");
  moveIndicator(e.target, colours[links.indexOf(e.target)]);
});

function moveIndicator(item, color) {
  var textPosition = item.getBoundingClientRect();
  var container = slider_menu.getBoundingClientRect().left;
  var distance = textPosition.left - container;
  var scroll = slider_menu.scrollLeft;
  line_selected_item.style.transform = "translateX(" + (distance + scroll) + "px) scaleX(" + textPosition.width * 0.01 + ")";

  if (color) {
      line_selected_item.style.backgroundColor = color;
  }
}

function determineOverflow(content, container) {
  var containerMetrics = container.getBoundingClientRect();
  var containerMetricsRight = Math.floor(containerMetrics.right);
  var containerMetricsLeft = Math.floor(containerMetrics.left);
  var contentMetrics = content.getBoundingClientRect();
  var contentMetricsRight = Math.floor(contentMetrics.right);
  var contentMetricsLeft = Math.floor(contentMetrics.left);
  if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
      return "both";
  } else if (contentMetricsLeft < containerMetricsLeft) {
      return "left";
  } else if (contentMetricsRight > containerMetricsRight) {
      return "right";
  } else {
      return "none";
  }
}

(function (root, factory) {
  if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
      factory(exports);
  } else {
      factory((root.dragscroll = {}));
  }
})(this, function (exports) {
  var _window = window;
  var _document = document;
  var mousemove = "mousemove";
  var mouseup = "mouseup";
  var mousedown = "mousedown";
  var EventListener = "EventListener";
  var addEventListener = "add" + EventListener;
  var removeEventListener = "remove" + EventListener;
  var newScrollX, newScrollY;

  var dragged = [];
  var reset = function (i, el) {
      for (i = 0; i < dragged.length; ) {
          el = dragged[i++];
          el = el.container || el;
          el[removeEventListener](mousedown, el.md, 0);
          _window[removeEventListener](mouseup, el.mu, 0);
          _window[removeEventListener](mousemove, el.mm, 0);
      }

      dragged = [].slice.call(_document.getElementsByClassName("dragscroll"));
      for (i = 0; i < dragged.length; ) {
          (function (el, lastClientX, lastClientY, pushed, scroller, cont) {
              (cont = el.container || el)[addEventListener](
                  mousedown,
                  (cont.md = function (e) {
                      if (!el.hasAttribute("nochilddrag") || _document.elementFromPoint(e.pageX, e.pageY) == cont) {
                          pushed = 1;
                          lastClientX = e.clientX;
                          lastClientY = e.clientY;

                          e.preventDefault();
                      }
                  }),
                  0
              );

              _window[addEventListener](
                  mouseup,
                  (cont.mu = function () {
                      pushed = 0;
                  }),
                  0
              );

              _window[addEventListener](
                  mousemove,
                  (cont.mm = function (e) {
                      if (pushed) {
                          (scroller = el.scroller || el).scrollLeft -= newScrollX = -lastClientX + (lastClientX = e.clientX);
                          scroller.scrollTop -= newScrollY = -lastClientY + (lastClientY = e.clientY);
                          if (el == _document.body) {
                              (scroller = _document.documentElement).scrollLeft -= newScrollX;
                              scroller.scrollTop -= newScrollY;
                          }
                      }
                  }),
                  0
              );
          })(dragged[i++]);
      }
  };

  if (_document.readyState == "complete") {
      reset();
  } else {
      _window[addEventListener]("load", reset, 0);
  }
  exports.reset = reset;
});
