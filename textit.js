class Textit {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        // Characters ordered roughly by frequency in Turkish/English to minimize clicks
        this.chars = [
            [
                // Most common letters grouped
                ["aeinrlt", "kmdyusbo"],
                ["AEINRLT", "KMDYUSBO"],
            ],
            [
                [
                    // Less common letters grouped
                    ["çgğhıj", "öpqşüvwxyz"],
                    ["ÇGĞHIİJ", "ÖPQŞÜVWXYZ"]
                ],
                [
                    "0123456789",
                    [
                        ".,:;()@!\"",
                        " $#%&'*+-/<=>?[\\]^_`{|}~"
                    ]
                ]
            ]
        ];
        this.activeTexit = this.chars;
        this.activeChar = "";

        // Basic dictionary for autocomplete
        this.dictionary = ["merhaba", "nasılsın", "iyi", "evet", "hayır", "lütfen", "teşekkürler", "bugün", "hava", "güzel", "ben", "sen", "biz"];
        this.currentWord = "";

        this.initDOM();
        this.render();
    }

    array2char(o) {
        let t = "";
        if (Array.isArray(o)) {
            for (let i = 0; i < o.length; i++) {
                t += this.array2char(o[i]);
            }
        } else {
            t += o;
        }
        return t;
    }

    divActiveTexit() {
        if (this.activeTexit.length === 2) return this.activeTexit;

        let middle_i = Math.floor(this.activeTexit.length / 2);
        let a1 = [];
        let a2 = [];
        for (let i = 0; i < this.activeTexit.length; i++) {
            if (i < middle_i) a1.push(this.activeTexit[i]);
            else a2.push(this.activeTexit[i]);
        }
        return [a1, a2];
    }

    texit(i) {
        if (i === 0 || i === 1) {
            this.activeTexit = this.divActiveTexit()[i];
            let c = this.array2char(this.activeTexit);
            if (c.length === 1) {
                this.activeChar = c;
                this.activeTexit = this.chars;
            }
            this.render();
        }
    }

    reset() {
        if (this.array2char(this.activeTexit) === this.array2char(this.chars)) {
            let t = this.possibleText.innerText;
            this.possibleText.innerHTML = t.replace(/.$/, '');
            this.currentWord = this.currentWord.slice(0, -1);
            this.updateSuggestions();
        }
        this.activeTexit = this.chars;
        this.render();
    }

    initDOM() {
        this.container.innerHTML = `
            <div class="textit-wrapper">
                <div class="textit-autocomplete"></div>
                <div class="textit-controls">
                    <button class="textit-btn textit-btn-left">&lt;</button>
                    <button class="textit-btn textit-btn-reset">-</button>
                    <button class="textit-btn textit-btn-right">&gt;</button>
                </div>
                <div class="textit-groups">
                    <div class="textit-group textit-group-0"></div>
                    <div class="textit-group textit-group-1"></div>
                </div>
                <div class="textit-text-container">
                    <div class="textit-text"></div>
                </div>
            </div>
        `;

        this.btnLeft = this.container.querySelector('.textit-btn-left');
        this.btnReset = this.container.querySelector('.textit-btn-reset');
        this.btnRight = this.container.querySelector('.textit-btn-right');

        this.autocompleteContainer = this.container.querySelector('.textit-autocomplete');
        this.group0 = this.container.querySelector('.textit-group-0');
        this.group1 = this.container.querySelector('.textit-group-1');

        this.possibleText = this.container.querySelector('.textit-text');

        this.btnLeft.addEventListener('click', () => this.animateAndTexit(0));
        this.btnRight.addEventListener('click', () => this.animateAndTexit(1));
        this.btnReset.addEventListener('click', () => this.reset());

        this.group0.addEventListener('click', () => this.animateAndTexit(0));
        this.group1.addEventListener('click', () => this.animateAndTexit(1));
        this.possibleText.addEventListener('click', () => this.reset());

        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(event) {
        if (event.key === 'ArrowLeft' || event.key === 'a' || event.key === 'A') {
            this.animateAndTexit(0);
        } else if (event.key === 'ArrowRight' || event.key === 'd' || event.key === 'D') {
            this.animateAndTexit(1);
        } else if (event.key === 'Backspace' || event.key === '-' || event.key === '_') {
            this.reset();
        }
    }

    renderCharsAsGrid(charsStr) {
        let html = '<div class="textit-group-chars">';
        for (let i = 0; i < charsStr.length; i++) {
            let char = charsStr[i];
            if (char === ' ') char = '&nbsp;';
            html += `<span>${char}</span>`;
        }
        html += '</div>';
        return html;
    }

    updateSuggestions() {
        this.autocompleteContainer.innerHTML = '';
        if (this.currentWord.length > 0) {
            const matches = this.dictionary.filter(word => word.startsWith(this.currentWord.toLowerCase()) && word !== this.currentWord.toLowerCase());
            matches.slice(0, 3).forEach(word => {
                const suggestionEl = document.createElement('div');
                suggestionEl.className = 'textit-suggestion';
                suggestionEl.textContent = word;
                suggestionEl.addEventListener('click', () => {
                    const remainingPart = word.substring(this.currentWord.length);
                    this.possibleText.innerHTML += remainingPart + ' ';
                    this.currentWord = "";
                    this.updateSuggestions();
                });
                this.autocompleteContainer.appendChild(suggestionEl);
            });
        }
    }

    render() {
        let texits = this.divActiveTexit();

        // Remove animation classes if present
        this.group0.classList.remove('splitting-left', 'splitting-right');
        this.group1.classList.remove('splitting-left', 'splitting-right');

        // Force reflow
        void this.group0.offsetWidth;
        void this.group1.offsetWidth;

        this.group0.innerHTML = this.renderCharsAsGrid(this.array2char(texits[0]));
        this.group1.innerHTML = this.renderCharsAsGrid(this.array2char(texits[1]));
        if (this.activeChar !== "") {
            this.possibleText.innerHTML += this.activeChar;
            if (this.activeChar === " ") {
                this.currentWord = "";
            } else {
                this.currentWord += this.activeChar;
            }
            this.activeChar = "";
            this.updateSuggestions();
        }
    }

    animateAndTexit(i) {
        if (i === 0) {
            this.group1.classList.add('splitting-right');
        } else {
            this.group0.classList.add('splitting-left');
        }

        setTimeout(() => {
            this.texit(i);
        }, 150); // half of css transition
    }
}
