export function getDOMElement(selector) {
    if (!selector) {
        throw "'selector' is required";
    }

    if (selector[0] === '.') {
        const elements = document.getElementsByClassName(selector.substr(1));

        if (elements && elements.length) {
            elements[0].appendChild(this.canvas);
        } else {
            throw "element not found";
        }
    } else if (selector[0] === "#") {
        const element = document.getElementById(selector.substr(1));

        if (element) {
            element.appendChild(this.canvas);
        } else {
            throw "element not found";
        }
    } else {
        throw "unknown selector";
    }
}