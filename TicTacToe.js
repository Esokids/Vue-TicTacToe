var app = new Vue({
    el: "#app",
    data() {
        return {
            flag: true, // flag true -> X ; flag false -> O
            status: "Next player: X",
        };
    },
    methods: {
        handleClicked: function (event) {
            if (this.flag && event.target.innerHTML !== "X" && event.target.innerHTML !== "O") {
                event.target.innerHTML = "X";

                this.flag = false;
                this.status = "Next player: O";
                this.checkWinner("X");
            } else {
                if (event.target.innerHTML !== "X" && event.target.innerHTML !== "O") {
                    event.target.innerHTML = "O";

                    this.flag = true;
                    this.status = "Next player: X";
                    this.checkWinner("O");
                }
            }
        },
        resetClicked: function () {
            for (let i = 0; i < 9; i++) {
                document.getElementsByClassName("square")[i].innerHTML = "&nbsp;";
            }
            this.status = "Next player: X";
        },
        checkWinner: function (player) {
            let cells = document.getElementsByClassName("square");

            // Horrizontal rows
            if (cells[0].innerHTML == player && cells[1].innerHTML == player && cells[2].innerHTML == player) this.status = `Player ${player} Win !!`;
            if (cells[3].innerHTML == player && cells[4].innerHTML == player && cells[5].innerHTML == player) this.status = `Player ${player} Win !!`;
            if (cells[6].innerHTML == player && cells[7].innerHTML == player && cells[8].innerHTML == player) this.status = `Player ${player} Win !!`;
            if (cells[0].innerHTML == player && cells[3].innerHTML == player && cells[6].innerHTML == player) this.status = `Player ${player} Win !!`;
            // Vertical rows
            if (cells[1].innerHTML == player && cells[4].innerHTML == player && cells[7].innerHTML == player) this.status = `Player ${player} Win !!`;
            if (cells[2].innerHTML == player && cells[5].innerHTML == player && cells[8].innerHTML == player) this.status = `Player ${player} Win !!`;
            // Diagonals
            if (cells[0].innerHTML == player && cells[4].innerHTML == player && cells[8].innerHTML == player) this.status = `Player ${player} Win !!`;
            if (cells[2].innerHTML == player && cells[4].innerHTML == player && cells[6].innerHTML == player) this.status = `Player ${player} Win !!`;
        },
    },
});
