var $ = function (selector) {
    if (selector[0] == '.') {
        return document.getElementsByClassName(selector.split('.')[1])
    }
    else if (selector[0] == '#') {
        return document.getElementById(selector.split('#')[1])
    }
    else {
        return document.getElementsByTagName(selector);
    }
}

document.getElementById("f").inn

function addClass(elements, classToAdd) {
    return elements.className += ` ${classToAdd}`;
}

function removeClass(elements, classToRemove) {
    return elements.className.replace(classToRemove, "").trim();
}

function append(elements, stuffToAppend) {
    return elements.innerHTML += stuffToAppend;
}

/* ????? */
function remove(elements, stuffToRemove = null) {
    if (stuffToRemove) {
        for (let i = 0; i <= stuffToRemove.length; i++) {
            elements.removeChild(stuffToRemove[i]);
        }
    }
    else {
        return elements.remove();
    }
}

function text(elements) {
    (function rec(el) {
        var childs = el.childNodes, i = childs.length;
        var str = "";
        while (i--) {
            console.log
            if (childs[i].nodeType === 1) {
                str += rec(childs[i]);
            } else {
                console.log(childs[i]);
                console.log(childs[i].nodeValue);
                str += childs[i].nodeValue;
            }
        }
        return str;
    }(elements))
}

function attr(element, attribute, value = null) {
    if (value == null) {
        return element.getAttribute(attribute);
    }
    else
        element.setAttribute(attribute, value);
}
