import {

    MDBCard,
    MDBCardBody,
    MDBCardImage,

    MDBTypography
} from 'mdb-react-ui-kit';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function About() {
    const danielAboutMeText = <MDBTypography blockquote className='mb-0 text-justify overflow-y-scroll h-100'>
        <p className="text-muted text-justify small mb-2 mx-3 text-indent fs-6 px-1">
            Hello, my name is Daniel, and I love the movies. I&apos;ve been making movies any way that I can for almost 8 years now. This has usually meant writing them, directing them, acting in them, editing them and everything else in between.
        </p>
        <br></br>

        <p className="text-muted text-justify small mb-2 mx-3 text-indent fs-6 px-1">
            Taking on so many roles every time has been challenging. And it has likely led to finishing fewer projects than I would have done had I pursued a different filmmaking strategy. The making of each one of these projects was difficult in new and unexpected ways. But, each time, I emerged on the other side with a movie, a ton of practical experience, and a new set of stories.
        </p>
        <br></br>
        <p className="text-muted text-justify small mb-2 mx-3 text-indent fs-6 px-1">
            The Yellow Dinosaur name is a testament to this approach. I&apos;ve had a small yellow plastic sauropod hanging from my rearview mirror for almost a decade now. And that dinosaur has been my only companion for large chunks of these projects, accompanying me every time I drove to the middle of nowhere to scout a location or to obtain a hard-to-find prop.
        </p>
        <br></br>
        <p className="text-muted text-justify small mb-2 mx-3 text-indent fs-6 px-1">
            When I decided to publish these films here on my new website, I felt it was important to tell the stories of their productions as well. The hope is that, by providing a glimpse into the tumultuous process each of these projects went through, you can fully enjoy them for the labors of love that they are.
        </p>
        <br></br>
        <p className="text-muted text-justify small mb-2 mx-3 text-indent fs-6 px-1">
            Going forward, I hope to move away from this one-man approach and instead collaborate with other like-minded artists. I treasure the memories and the lessons each one of these solo experiences has provided, and I am secure in the knowledge that, if the project demands it, I can do it again. But, I also can&apos;t wait to see what I can make when I combine my skills with other passionate filmmakers. The possibilities are endless.
        </p>
        <br></br>

        <footer className='blockquote-footer'>
            <p className="text-muted text-justify small mb-2 mx-3 text-indent fs-6 px-1">
                Please email me at <a href="mail:Daniel@YellowDinosaur.io">daniel@yellowdinosaur.io</a> if you would like to collaborate on a project. I look forward to hearing from you.
            </p>
            <cite title='Dan Signature'>Dan</cite>
            <br></br>
            <br></br>
        </footer>
    </MDBTypography>;
    const danielProfilePicLink = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Dan+About+Me+Page.jpg";
    return (
        <>{(window.screen.width > 600) &&
            <div className="d-flex  media">
                <div className="p-2 flex-fill bg-image w-100 h-100 min-vh-100" style={{ backgroundImage: `url('${danielProfilePicLink}')`, backgroundPositionY: "0%" }}>
                    <br></br>
                </div>
                <div className="p-2 bg-white w-100 min-vw-50 mw-100 flex-fill vh-100 overflow-y-scroll media-object">
                    <h1 className="text-center display-5 p-3">Daniel Grzywacz</h1>
                    {danielAboutMeText}</div>
            </div>
            ||
            <div className="card overflow-y-scroll h-100">
                <div className="bg-image hover-overlay ripple h-100" data-ripple-color="light">
                    <img
                        src={danielProfilePicLink}
                        className="img-fluid w-100 d-flex justify-self-center"
                    />
                    <a href="#!">
                        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                    </a>
                </div>
                <div className="card-body overflow-y-scroll vh-100">
                    <h5 className="card-title text-center">Daniel Grzywacz</h5>
                    <div className="card-text overflow-y-scroll">
                        {danielAboutMeText}
                    </div>
                </div>
            </div>
        }
            <FloatingWhatsApp avatar="https://pagina-mama.s3.amazonaws.com/assets2/daniel/Dan+About+Me+Page.jpg" accountName='Yellow Dinosaur Productions' phoneNumber='+1 (310) 938 2260'></FloatingWhatsApp>
</>
    );


}








