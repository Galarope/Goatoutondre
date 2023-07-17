class Rock {
    static numOfRocks = 0;
    static rockIndice = [];

    static generateRocks(area) {

        while (this.numOfRocks <= 5)
            this.numOfRocks = Math.floor(Math.random() * 15);
        
        let newRock = 0;
        for (let i = 0; i < this.numOfRocks; i++) {
            while (newRock === 0 || this.rockIndice.includes(newRock))
                newRock = Math.floor(Math.random() * (area - 1));
            
            this.rockIndice[i] = newRock;
        }

        return this.rockIndice;
    }

    static positionRocks(squares) {
        for (let i = 0; i < this.rockIndice.length; i++) {
            squares[rockIndice[i]].classList.remove("grass");
            squares[rockIndice[i]].classList.add("rock");
        }
    };

}

export default Rock;