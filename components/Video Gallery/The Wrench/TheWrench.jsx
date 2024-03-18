import FilmTemplate from "../../Templates/FilmTemplate.jsx";

export const TheWrench = () => {

    return (
      <>
        <FilmTemplate
          clip="https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/The+wrench+clip.mp4"
          date={"March 1, 2016"}
          cast={["Lady Actress", "Sir Actor"]}
          title="The Wrench"
          image=
            "https://pagina-mama.s3.amazonaws.com/assets2/daniel/The+Wrench/Still.png"

        />
      </>
    );
}
