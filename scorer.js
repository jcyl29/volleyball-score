export default class Scorer {
    constructor() {
        this.scores = {
            team1: 0,
            team2: 0
        }
        console.log(this.scores)
        this.bindEvents()
    }

    bindEvents () {
        const buttons = Array.from(document.getElementsByClassName('digit'));
        buttons.forEach(b => {
            b.addEventListener('click', (e) => console.log(e.target, e.target.classList))
        })

    }
}