const content = document.querySelector("#content");


class Paragraph {
    constructor(tagType) {
        this.id = 'id-' + Math.random().toString(36).slice(2);
        this.tagType = tagType;
        this.element = document.createElement(this.tagType);
        this.classes = [];
    }

    setClasses(...classes) {
        this.classes = this.classes.concat(classes);
        this.element.classList.add(...classes);
    }

    resetClasses() {
        this.classes = [];
        this.element.className = "";
    }

    updateText(text) {
        this.element.textContent = text;
    }
}
class Content {
    constructor(selectorId) {
        this.selectorId = selectorId;
        this.element = document.querySelector(this.selectorId);
        this.paragraphs = [];

    }

    addChild(tagType, content="") {
        const paragraph = new Paragraph(tagType);
        paragraph.updateText(content);
        this.element.appendChild(paragraph.element);
        this.paragraphs.push(paragraph);
        
    }
    clearContent() {
        this.element.innerHTML = '';
    }


    getParagraphs() {
        return this.paragraphs;
    }
}


export {Paragraph, Content};