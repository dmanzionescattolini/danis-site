import {
    MDBContainer, MDBRow, MDBCol,
    MDBCard, MDBCardBody,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function About() {
    const danielAboutMeText = <MDBTypography blockquote className='mb-0 w-100 overflow-y-scroll'>
        <p className="text-justify text-wrap">
            Hello, my name is Daniel, and I love the movies. I&apos;ve been making movies any way that I can for almost 8 years now. This has usually meant writing them, directing them, acting in them, editing them and everything else in between.
        </p>

        <p className="lead text-justify text-wrap">
            Taking on so many roles every time has been challenging. And it has likely led to finishing fewer projects than I would have done had I pursued a different filmmaking strategy. The making of each one of these projects was difficult in new and unexpected ways. But, each time, I emerged on the other side with a movie, a ton of practical experience, and a new set of stories.
        </p>
        <p className="lead text-justify text-wrap">
            The Yellow Dinosaur name is a testament to this approach. I&apos;ve had a small yellow plastic sauropod hanging from my rearview mirror for almost a decade now. And that dinosaur has been my only companion for large chunks of these projects, accompanying me every time I drove to the middle of nowhere to scout a location or to obtain a hard-to-find prop.
        </p>
        <p className="lead text-justify text-wrap">
            When I decided to publish these films here on my new website, I felt it was important to tell the stories of their productions as well. The hope is that, by providing a glimpse into the tumultuous process each of these projects went through, you can fully enjoy them for the labors of love that they are.
        </p>
        <p className="lead text-justify text-wrap">
            Going forward, I hope to move away from this one-man approach and instead collaborate with other like-minded artists. I treasure the memories and the lessons each one of these solo experiences has provided, and I am secure in the knowledge that, if the project demands it, I can do it again. But, I also can&apos;t wait to see what I can make when I combine my skills with other passionate filmmakers. The possibilities are endless.
        </p>
        <p className="lead text-justify text-wrap">
            Please email me at Daniel@YellowDinosaur.io if you would like to collaborate on a project. I look forward to hearing from you.
        </p>
        <footer className='blockquote-footer'>
            <cite title='Dan Signature'>Dan</cite>
        </footer>
    </MDBTypography>;
    const danielProfilePicLink = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Dan+About+Me+Page.jpg";
    return (

        

            <MDBRow bg="light" className="vw-100 vh-100 w-100 h-100 overflow-scroll position-fixed p-0 m-0 d-flex flex-row justify-content-evenly">

                <MDBCol xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} id="about-me-col-1">
                    <img alt={"Daniel's Profile Pic"} src={danielProfilePicLink} className="bg-image img-fluid w-100 h-auto overflow-hidden"></img>
                </MDBCol>
                <MDBCol xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex flex-column justify-content-center align-items-center">
                    <MDBCard className="w-100">
                        <MDBCardBody className="d-flex flex-column justify-content-center align-items-center">
                            <p className="m-3 p-5 lead bg-light text-muted text-justify overflow-y-scroll bg-sand">{danielAboutMeText}</p>
                        </MDBCardBody>

                    </MDBCard>
                </MDBCol>


            </MDBRow>







        






    );
} 