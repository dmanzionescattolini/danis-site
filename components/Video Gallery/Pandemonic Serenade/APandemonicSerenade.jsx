import {useState} from "react";
import FilmTemplate from "../../Templates/FilmTemplate.jsx";
const dateNow = Date.now();
export default function APandemonicSerenade() {
  dateNow.setDate()
  const [date, setDate] = useState(dateNow);
  return <FilmTemplate
    date={dateNow}
    blurb={"A feature-length hellish comedy about an exorcist’s apprentice who discovers her roommate has fallen for the ageless demon who moved into their building. Marion finds herself stuck in the middle as she attempts to navigate the forces of good and evil before its too late for best friend."}
    director="Daniel Grzywacz"
    duration={{ value: 105, units: "minutes" }}
    title="A Pandemic Serenade"
    clip=
    {"https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/APS+Clip.mp4"}
    process={["Heading into 2019, I had been working as a freelance filmmaker for a little while and I wanted to follow up Three Bullets with a much more ambitious project. I wanted to apply the lessons I had learned in the desert and during post production, and apply them to a feature-length project: A Pandemonic Serenade.", "I spent the next few months reading Paradise Lost, The Divine Comedy, Revelations, Faust, and any historical accounts of demons and interactions with hell that I could get my hands on.I watched every demon - related film I could find.And I wrote a script, absolutely chock full of historical references and direct quotes from Milton and Dante.I then constructed an entire demon hunter’s office in my living room, and we got to work.The first block of shooting in that set was the smoothest I’ve ever experienced.And then I found out my lease was up a month earlier than expected.","The initial plan was to use my apartment, re - dressed as different rooms, to shoot all the interiors of the film.But all of a sudden, that plan was out the window and we had to scramble.I put together a makeshift set to quickly shoot all the scenes located in the “Neighbor’s Apartment” and then immediately started packing everything into boxes as soon as we wrapped.One actor got my bookcases.Another got a chair.I started sleeping on a friend’s couch while I figured out where I could shoot the rest of the film.","We finally found an airbnb in another part of the city that I could stay in and use to shoot the rest of the project.So I moved in and started building that set.It was a beautiful, quiet, little apartment that became a focus of frenzied activity for the next week or so.We’d shoot a large chunk of the day, then I’d turn around and prepare effects for the next day, or shoot B roll, or even shoot my side of scenes that we hadn’t had time to shoot with the actors there.I had to use every piece of filmmaking magic I could muster, and I had to learn so much more there in the moment.The summer heat in that apartment would combine with the lights and leave us sweating buckets throughout.My mother and sister were pressganged as emergency crew members for the frenetic last few days and, finally, we wrapped just in time.","I then moved across the entire country and made a rough cut.And then the pandemic hit.Long story short, A Pandemonic Serenade, has never been completed.The sound hasn’t been fixed, the color hasn’t been graded and no score was ever made.So much of it is so rough, so clearly a product of a chaotic and rushed production, that it wouldn’t be fair to the sections that were made the way I envisioned.I moved on to other projects.","Right now, I have a hard time envisioning myself diving back into APS and completing it into the feature length film it was intended to be.However, I have several ideas for using the footage in other ways and I won’t be surprised when the film fittingly claws itself out of its current purgatorio and unleashes itself upon an unsuspecting world.But until then, it remains a key chapter of my filmmaking history and the source of an absolute wealth of knowledge and experience that I’ve used on every project since."]}
  cast ={ [{castMember: "Natasha Simone", role: "Zoe"}, {castMember: "Bree Wernicke",role:"Marion"}, {castMember: "Quincy Everidge", role: "Gremory"},{castMember:"Daniel Grzywacz", role: "Matty"}]}
  still =
    "https://pagina-mama.s3.amazonaws.com/assets2/daniel/A+Pandemonic+Serenade/Still.png"

    runtime= {{ value:77, units: "minutes" }}
    

    />;
}