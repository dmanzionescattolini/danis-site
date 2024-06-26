import FilmTemplate from "../../Templates/FilmTemplate"; 
export const ThreeBulletsForBombay = () => {
  return (
    <>
      <FilmTemplate
        date={2016}
        className="overflow-y-scroll"
        fullLengthVideo=
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/FullLength.mp4" blurb="A blood-soaked supernatural western about a woman lost in the desert after a heist gone wrong. With three bullets in her gun and a talking rock by her side, can she make it back to civilization before her co-conspirators catch up with her? Alice Bright will give it her best three shots."
        director="Daniel Grzywacz"
        runtime={{ value: 21, units: "minutes" }}
        cast={[{ castMember: "Bree Wernicke", role: "Alice" }, { castMember: "Phil Shea", role: "Cadwallader" }, { castMember: "Landon McDonald", role: "Red" }]}
        process={["In 2016, I decided I wanted to make a movie. I had never written a screenplay nor had I any experience in making a film beyond joining a friend’s production for a day to help out. But I had ideas, I had energy to spare, I had the stubbornness to keep trying until I figured it out, and, most important, I had a camera.", "So, I wrote 20 - odd pages of a western, I put a cast together, and a small crew.I put together whatever money I could spare, found props, costumes and bought equipment.I pored over dozens of movies I loved and tried to figure out how I could copy the lighting or the staging or the framing and poured those ideas into the project.I got my Prius stuck in a canyon while scouting locations, and ended up using that one in the film. I bought my prop gun out of the trunk of an old man’s car in the parking lot of a dairy queen an hour from my house.", "When everything was ready, we went out in the August heat and I learned how to shoot a movie on the fly. The first day was out by The Salton Sea. I think it was about 110 degrees that day and all I had thought to bring for everyone was some waters and some small portable fans. The next day, I went to Kmart and bought a large pop-up shade for my actors to hide under.", "If you look at the footage from the first few days, most of it is shot with the wrong shutter speed. A lot of shots aren’t properly focused and the audio isn’t great. But, using those elements I was able to cobble together some usable scenes and, more importantly, learn a ton of what I needed for the next few shoot days up in Kern County.", "I still remember when we shot the campfire scene, somehow managing to light these shots using only firelight and somehow managing to not end up with grainy-as-hell footage despite shooting them on my basic Canon DSLR. When we were done, we put out the fire and suddenly we were surrounded by the most stunning night sky, the stars putting on a show to celebrate the crazy thing we were trying to do.", "Post-production was a similar experience: A lot of trial and error and improvisation as I learned editing, and sound, and color. Ryan McWilliams composed a beautiful, haunting score that elevated every frame it played with. The finished film was.. uneven. The product of someone trying to learn 30 new skills at the same time. No festivals were interested and, later, I often played with the idea of cutting it down into a sleeker, faster-paced version.", "But now, so many years after filming, I can’t help but love Three Bullets. It is the very start of my filmmaking journey, preserved, in a yellow-tinged ode to Sergio Leone and Indiana Jones. Making it, I fell in love with the act of making movies, and those memories are brought back with every frame. Published here, in its entirety, for the first time, I hope that Alice, Red the Rock and their little adventure in the California desert bring you as much joy as making it did for all of us. "]}
        title={"Three Bullets to Bombay Beach"}
        still={
          "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/Still.png"
        }
      />
    </>
  );
}
