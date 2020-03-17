function addClass(element, classToAdd) {
    return element.className += ` ${classToAdd}`;
}

function removeClass(element, classToRemove) {
    return element.className = element.className.replace(classToRemove, "").trim();
}

function append(element, addableElements) {
    return element.innerHTML += addableElements;
}

function remove(element, removeableElements = null) {
    if (removeableElements) {
        removeableElements.forEach(element => element.removeChild(element))
    } else {
        return element.remove();
    }
}

function text(element) {
    (function rec(el) {
        let childs = el.childNodes;
        let i = childs.length;
        let str = "";
        while (i--) {
            if (childs[i].nodeType === 1) {
                str += rec(childs[i]);
            } else {
                str += childs[i].nodeValue;
            }
        }
        return str;
    }(element))
}

function attr(element, attribute, value = null) {
    if (value === null) {
        return element.getAttribute(attribute);
    } else {
        element.setAttribute(attribute, value);
    }
}

function children(element) {
    return element.childNodes;
}

function empty(element) {
    element.innerHTML = null;
}

function css(element, property, value = null) {
    if (value === null) {
        let styles = window.getComputedStyle(element);
        return styles.getPropertyValue(property);
    } else {
        element.setAttribute(property, value);
    }
}

function click(element, func) {
    element.addEventListener('click', func, false);
}

function toggle(element) {
    if (element.style.visibility !== "hidden") {
        element.style.visibility = "hidden";
    } else {
        element.style.visibility = "visible";
    }
}

function wrap(element, tags) {
    let startTagsIndex = tags.indexOf('/') - 1;
    element.outerHTML = `${tags.substr(0, startTagsIndex)}${element.parentNode.innerHTML}${tags.substr(startTagsIndex - 1, tags.length)}`;
}

function $(sel) {
    return new JQR(sel);
}

class JQR {
    constructor(sel) {
        this.elements = document.querySelectorAll(sel);
    }

    addClass(classToAdd) {
        this.elements.forEach(element => addClass(element, classToAdd));
    }

    removeClass(classToRemove) {
        this.elements.forEach(element => removeClass(element, classToRemove));
    }

    append(addableElements) {
        this.elements.forEach(element => addClass(element, addableElements));
    }

    remove(removeableElements = null) {
        this.elements.forEach(element => remove(element, removeableElements));
    }

    text() {
        let txt = "";
        for (let i = 0; i < this.elements.length; i++) {
            txt += text(this.elements[i]);
        }
        return txt;
    }

    attr(attribute, value = null) {
        this.elements.forEach(element => attr(element, attribute, value));
    }

    children() {
        let elem;
        for (let i = 0; i < this.elements.length; i++)
            elem += children(this.elements[i]);
        return elem;
    }

    empty() {
        this.elements.forEach(element => empty(element));
    }

    css(property, value = null) {
        if (value === null) {
            let styles = "";
            for (let i = 0; i < this.elements.length; i++)
                styles += css(this.elements[i], property);
            return styles
        } else {
            css(this.elements[i], property, value);
        }
    }

    click(func) {
        this.elements.forEach(element => click(element, func));
    }

    each(func) {
        this.elements.forEach(func);
    }

    wrap(tags) {
        this.elements.forEach(element => wrap(element, tags));
    }
}