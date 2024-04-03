


export default class ProjectParams {

    clip = "";
    fullLengthVideo=  "";
    cast = [];
    date = {date: Date};
    process = [""];
    director = "Daniel Grzywacz";
    blurb = "";
    still = "";
    title = "";


    constructor(clip, fullLengthVideo, cast, date, process, director, blurb, still, title) {
        this.clip = clip || "";
        this.fullLengthVideo = fullLengthVideo || "";
        this.cast = cast || [""];
        this.date = date || {date: Date.now().toString()};
        this.process = process;
        this.director = director;
        this.blurb = blurb;
        this.still = still;
        this.title = title;
    }
}