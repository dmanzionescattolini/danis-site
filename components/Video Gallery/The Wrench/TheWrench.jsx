import FilmTemplate from "../../Templates/FilmTemplate";
export const TheWrench = () => {

  return (
    <>
      <FilmTemplate
        clip="https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4"
        runtime={{ value: 6, units: "minutes" }}
        cast={[{ castMember: "Daniel Grzywacz", role: "The Expert" }, { castMember: "Fiona Hayden", role: "Miss Panner" }]}
        date={2022}
        title="The Wrench"
        still=
        "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/Still.png"
        blurb="Filmed over the course of one whirlwind weekend, The Wrench is an award-winning foray into the world of Superheroes and sensible workwear. The film offers a glimpse into the titular hero’s quest to throw a wrench in the works of an evil mastermind called The Expert."
        process={["In 2022, after a couple of years of pandemic-induced hiatus, I found myself living in Texas. I’d spent most of my creative energy in the previous couple of years on writing. Writing several drafts of a screenplay that I eventually put to the side. I had been adapting to life in the lone star state for a few months and not explored any creative pursuits when my good friend brought the 48 Hour Film Fest to my attention.", "Even though it was only about two weeks away, and I had a cross-country road trip planned just a few days after, I decided to participate and see what came out of it. The concept was straightforward enough, and I felt it played to my strengths as a filmmaker: namely my abilities to improvise and wear many hats at once while working quickly. And the prospect of seeing my work exhibited on the big screen for the first time was very exciting.", "The big day arrived and the prompts were announced. My film had to include a wrench as a prop and needed to fall under the genre of a superhero film. So, taking the approach of playing to my prompts as much as possible, I headed home to feverishly prepare to film a story about a wrench-themed superhero. I recruited my roommate Fiona and our neighbor Mo, both non-actors, to fill out the cast and I went to Home Depot to gather supplies, including both the titular Wrench’s full superhero costume and the famous wrench itself.", "The festival was held in June, which in Texas means relentless heat and humidity. It didn’t help matters had decided to film all of my interiors in either the air conditioning-free garage or in the yard where we periodically had to stop and bring the camera indoors to let it cool down. I wish I knew why it has consistently been the height of summer every time I’ve found myself filming a project but, across my films, the safe bet is to assume everyone involved in a particular shot is sweating their asses off.", "As the last couple of hours of the originally-assigned 48 were winding down, I had a short film cut together. But it felt incomplete. So I decided to add some flourishes. I first added some titles that mimicked ‘70s television shows. That completed the look visually, but I realized that the film was missing music. For Three Bullets, Ryan composed several beautiful pieces of music. The plan was the same for Pandemonic, though we never reached that stage in the production. But with only a couple hours to go,there wasn’t time for anything that elaborate.", "So I went into the garage with my audio recorder and a pile of wrenches and recorded as many different noises as I could with them. I banged them together, I banged them on the floor and every other combination I could think of. Time was so limited, I uploaded the sound files directly into Final Cut and  made a beat directly in the same file I had been using to cut the footage together. I finished with less than  an hour to go and submitted.", "The Wrench was not supposed to be anything special. I was excited at the prospect of making a tangible  film after a couple of years of exclusively writing, but I didn’t expect it to be particularly good. So I was blown away when it went ahead and won three awards in the competition. Best Use of Prop, Best Graphics and Titling, and Best Original Song. The most recognition, by far, any of my projects has received to date."]}

        fullLengthVideo="https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/FullLength.mp4"

      />
    </>
  );
}
