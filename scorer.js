export default class Scorer {
    constructor() {
        this.scores = {
            team1: 0,
            team2: 0
        }
        this.scoreRange = {
            min: 0,
            max: 25
        }
        console.log(this.scores)
        this.bindEvents()
        this.renderScores()
    }


    bindEvents() {
        const buttons = Array.from(document.getElementsByClassName('digit'));
        buttons.forEach(b => {
            b.addEventListener('click', this.updateScore.bind(this))
        })
    }

    updateScore(e) {
        const {target: {dataset}} = e
        // debugger
        const action = dataset.action
        const team = dataset.team
        console.log('dataset', dataset, action, team)
        const action2Method = {
            add: () => {
                this.scores[team] < this.scoreRange.max ? this.scores[team]++ : this.scores[team]
            },
            minus: () => {
                this.scores[team] > this.scoreRange.min ? this.scores[team]-- : this.scores[team]
            }
        }
        action2Method[action]()
        this.renderScores()
    }

    renderScores() {
        const score1Str = this.scores.team1.toString().padStart(2, '0')
        const score2Str = this.scores.team2.toString().padStart(2, '0')
        console.log(score1Str, score2Str)
        const team1Digit1 = document.querySelector('[data-team="team1"][data-action="minus"]')
        const team1Digit2 = document.querySelector('[data-team="team1"][data-action="add"]')
        const team2Digit1 = document.querySelector('[data-team="team2"][data-action="minus"]')
        const team2Digit2 = document.querySelector('[data-team="team2"][data-action="add"]')

        team1Digit1.innerText = score1Str.charAt(0);
        team1Digit2.innerText = score1Str.charAt(1);
        team2Digit1.innerText = score2Str.charAt(0);
        team2Digit2.innerText = score2Str.charAt(1);
    }
}