var

class commentEntryManager {
    constructor(info) {
    }
    static parseToDOM(htmlstring) {
        const tpl = document.createElement('template');
        tpl.innerHTML = htmlstring;
        return tpl.content;
    }
}

class commentManager {
    constructor(info) {
        this.commentNumber = info.commentNumber || 10;
        this.comments = info.comments || {
            url: null,
            number: 0,
            overview: [],
            contents: []
        };
    }
    addComment(info) {
        const id = ++this.comments.number;
        this.comments.overview.push({
            id: id,
            username: info.username || "Anonymous",
            usericon: info.usericon
            date: info.date || new Date(),
            quote: {
                exist: info.quoted,
                toolbar: info.quoted && info.toolbar,
                id: info.quote_id,
                text: info.quote_text,
            },
        })
        this.comments.contents.push({
            id: id,

        })
    }
}