function addClass(element, classToAdd) {
    return element.className += ` ${classToAdd}`;
}

function removeClass(element, classToRemove) {
    return element.className = element.className.replace(classToRemove, "").trim();
}

function append(element, stuffToAppend) {
    return element.innerHTML += stuffToAppend;
}

/* ????? */
function remove(element, stuffToRemove = null) {
    if (stuffToRemove) {
        for (let i = 0; i <= stuffToRemove.length; i++) {
            element.removeChild(stuffToRemove[i]);
        }
    }
    else {
        return element.remove();
    }
}

function text(element) {
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
    }(element))
}

function attr(element, attribute, value = null) {
    if (value == null) {
        return element.getAttribute(attribute);
    }
    else
        element.setAttribute(attribute, value);
}

function children(element){
    return element.childNodes;
}

function empty(element){
    element.innerHTML = null;
}

function css(element, property, value = null){
    if (value == null){
        var styles = window.getComputedStyle(element);
        return styles.getPropertyValue(property);
    }
    else{
        element.setAttribute(property, value);
    }
}

function click(element, func){
    element.addEventListener('click', func, false);
}

function $(sel) {
    return new JQR(sel);
}

class JQR {
    constructor(sel) {
        this.elements = document.querySelectorAll(sel);
    }

    addClass(classToAdd){
        for (var i = 0; i < this.elements.length; i++)
            addClass(this.elements[i], classToAdd);
    }

    removeClass(classToRemove){
        for (var i = 0; i < this.elements.length; i++)
            removeClass(this.elements[i], classToRemove);
    }

    append(stuffToAppend) {
        for (var i = 0; i < this.elements.length; i++)
            append(this.elements[i], stuffToAppend);
    }

    remove(stuffToRemove = null){
        for (var i = 0; i < this.elements.length; i++)
            remove(this.elements[i], stuffToRemove);
    }

    text(){
        var txt = "";
        for (var i = 0; i < this.elements.length; i++){
            txt += text(this.elements[i]);
        }
        return txt;
    }

    css(property, value=null){
        if (value == null){
            var styles = "";
            for (var i = 0; i < this.elements.length; i++)
                styles += css(this.elements[i], property);
            return styles
        }else{
            css(this.elements[i], property, value);
        }
    }
    
    each(func){
        this.elements.forEach(func);
    }

    click(func){
        for (var i = 0; i < this.elements.length; i++)
            click(this.elements[i], func);
    }

    attr(attribute, value = null){
        for (var i = 0; i < this.elements.length; i++)
            attr(this.elements[i], attribute, value);
    }

    children(){
        var elem;
        for (var i = 0; i < this.elements.length; i++)
            elem += children(this.elements[i]);
        return elem;
    }


    empty(){
        for (var i = 0; i < this.elements.length; i++)
            empty(this.elements[i]);
    }
}