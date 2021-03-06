class Segment {
    constructor(source, destination) {
        this.source = source;
        this.destination = destination;
    }

    updateLine(padding = 0) {
        let line = Utils.findPathForView(this, padding);
        this.begin = line.begin;
        this.end = line.end;
    }
}