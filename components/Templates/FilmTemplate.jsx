import {MDBContainer} from "mdb-react-ui-kit";

export const FilmTemplate = (params) => {
    const title = params.title;
    const image = params.image;

    return (
        <MDBContainer fluid >

            <header id={"banner-film"} >
                <div
                    className='p-5 text-center bg-image mt-0'
                    style={{
                        backgroundImage: `url('${image}')`,
                        height: `70vh`
                    }}
                >
                        <div className='d-flex justify-content-start align-items-end pb-0 h-100'>
                            <div className='text-white'>
                                <h2 className={"mb-0  display-3 fw-medium  ms-3  pt-0"}>{title}</h2>

                            </div>

                    </div>

                </div>
            </header>
        </MDBContainer>
    )
}
