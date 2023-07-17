class Square {
    element = null;
    prevStatus = null;
    neighbors = [];
    status;

    constructor(index) {
        //this.status = status;
        this.index = index;
        this.element = document.createElement("div");
        //this.element.textContent = index;
    }

    setStatus(status) {
        this.prevStatus = this.status;
        this.status = status;
        if(this.prevStatus)
          this.element.classList.remove(this.prevStatus);
        if(status !== "")
          this.element.classList.add(this.status);
    }
  
    setLastSession(lastSession) {
      this.lastSession = lastSession;
    }
  
    getStatus() {
        return this.status;
    }

    getIndex() {
        return this.index;
    }

    addNeighbors(squares, directions, width, exclusion) {
        let neighbors = [];

        for (let i = 0; i < directions.length; i++) {
            const neighbor = squares[this.index + directions[i]] ? squares[this.index + directions[i]] : null;
          if (
            neighbor &&
            !exclusion.includes(neighbor.getIndex()) &&
            !exclusion.includes(this.index)
          ) {
            if (this.index % width === 0) {
              if (directions[i] !== -1)
                neighbors.push(this.index + directions[i]);
            } else if (this.index % width === width - 1) {
              if (directions[i] !== 1)
                neighbors.push(this.index + directions[i]);
            } else if (this.index + width >= width * width) {
              if (directions[i] !== width)
                neighbors.push(this.index + directions[i]);
            } else neighbors.push(this.index + directions[i]);
          }
        }

      this.neighbors = neighbors;
    }

    getNeighbors() {
        return this.neighbors;
    }

    render() {
        return this.element;
    }
}

export default Square;