import FilmTemplate from "../../Templates/FilmTemplate.jsx";

export const RacketsAllTheWayDown = () => {
    return (


        //   const { clip, still, fullLengthFilmLink, title, cast, process, director, runtime } = params;
        <>
            <FilmTemplate
            clip="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Rackets+Clip.mp4"
                title={"Rackets All the Way Down"}
                runtime={{value:8, unit:"minutes"}}
                director={"Daniel Grzywacz"}
                cast={[{castMember:"Daniel Grzywacz",role:"John Rainster"}]}

                image={"https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/Still.png"}
                fullLengthVideo={"https://pagina-mama.s3.amazonaws.com/assets2/daniel/Rackets+All+the+Way+Down/FullLength.mp4"}
            blurb={"A meta-mockumentary about a former rodeo clown that participates in the 48 Hour Film Festival by making a film about a crime family of rackets. Rackets All the Way Down reveals his slow descent into madness as he grapples with destiny during a whirlwind filmmaking weekend."}
 process ={["After the overwhelmingly positive response to The Wrench, I enthusiastically signed up for the 48 Hour fest in Dallas a few months later. After asking around, it became clear that none of my friends were available to come up to Dallas that weekend, so I decided to challenge myself even further and make this new film entirely by myself.","I loaded everything up into my trusty Prius and started the three-hour trek up to Dallas the day before the event started. I made it less than an hour before one of my tires exploded. I managed to safely get off the road and get a tow but it was clear that it wouldn’t be an easy fix and I needed to get to Dallas ASAP. Fiona, my roommate and one of the stars of The Wrench, came to the rescue and offered her car for the weekend. I accepted her incredibly generous offer, loaded up her car, and made it to Dallas with a couple hours to spare.","I started the weekend with a lot of ambition. Not only did I want to prove that I could make the entire thing myself, but I wanted to improve on the things I had already been recognized for with The Wrench. So, on top of the film itself, I also planned to write and produce a full song with lyrics, to try and compete with my award-winning instrumental theme for The Wrench.","I started filming the next morning and things went smoothly. I experimented with improvisation for my scenes, in the hopes of getting a more natural result. To do this, since I was alone, I started recording several takes each time, running through my lines over and over. This was most fun, and effective, when I did my shots with the bouquet of rackets. I ended up recording a much longer and elaborate speech about the drama my racket mafia was facing, which I ended up cutting to the much more streamlined version that made the film. When I finished shooting everything I wanted for that first day, I set out to start writing my song that night. I paced around that apartment for hours trying to put words together, learning the hard way just how challenging it was to write a full song. When I finally finished writing and recording something passable, it was the last day and I was running really behind on everything I still needed to shoot. I felt stupid for wasting so much time on the song and completely demoralized with how much more I still needed to do in such a limited time. But then it occurred to me I could channel those emotions into the movie. I recorded some additional interview scenes, expressing my very real frustrations and, rewriting on the fly, adapted that low point for my character. The second half of the film quickly fell into place around this new idea. Those last few hours were an exhilarating blur. By the time my hard drive overheated during the furious last hour of editing, I had already overcome enough obstacles that it barely fazed me. After a few minutes, I pulled my computer back out of the fridge, finished the film and submitted with minutes to spare. It didn’t end up winning any awards, and almost led me to have a mental breakdown, but out all the films I’ve made, Rackets is my favorite to watch. I find it very funny, cohesive and well-executed and it is usually the first one I’ll share with anyone that wants to see my work."
]}
               />
            
        </>)


}
