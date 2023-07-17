class MinPriorityQueue {
    nodeEntries = [];
    size = 0;

    push(nodeEntry) {
        
        this.nodeEntries[this.size++] = nodeEntry;

        let p1 = 0;
        let p2 = this.size - 1;
        while (p1 < this.size) {
            if (this.nodeEntries[p1].priority > this.nodeEntries[p2].priority)
                this.swap(p1, p2, this.nodeEntries);
            
            p1 += 1;
        }
    }

    pop() {
        this.size -= 1;
        return this.nodeEntries.shift();
    }

    swap(first, second, array) {
        let temp = array[first];
        array[first] = array[second];
        array[second] = temp;
    }

    isEmpty() {
        return this.size === 0;
    }
}

export default MinPriorityQueue;