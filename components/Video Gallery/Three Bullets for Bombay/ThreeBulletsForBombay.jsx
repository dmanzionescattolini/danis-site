import {FilmTemplate} from "../../Templates/FilmTemplate.jsx";

export const ThreeBulletsForBombay = () => {
    return (
      <>
        <FilmTemplate
          clip={
            "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/3BBB+Clip.mp4"
          }
          
          date={"March 1, 2016"}
          cast={["Lady Actress", "Sir Actor"]}
          title={"Three Bullets for Bombay"}
          image={
            "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Three+Bullets+to+Bombay+Beach/Still.png"
          }
        />
      </>
    );
}
