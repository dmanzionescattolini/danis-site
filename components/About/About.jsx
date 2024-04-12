import {

    MDBCard,
    MDBCardBody,
    MDBCardImage,

    MDBTypography
} from 'mdb-react-ui-kit';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function About() {
    const danielAboutMeText =
        <blockquote className="">
            <p className=" small text-muted text-indent text-justify">
                Hello, my name is Daniel, and I love the movies. I&apos;ve been making movies any way that I can for almost 8 years now. This has usually meant writing them, directing them, acting in them, editing them and everything else in between.
            </p><p className=" small text-muted text-indent text-justify">

                Taking on so many roles every time has been challenging. And it has likely led to finishing fewer projects than I would have done had I pursued a different filmmaking strategy. The making of each one of these projects was difficult in new and unexpected ways. But, each time, I emerged on the other side with a movie, a ton of practical experience, and a new set of stories.
            </p><p className=" small text-muted text-indent text-justify">
                The Yellow Dinosaur name is a testament to this approach. I&apos;ve had a small text-muted text-indent text-justify yellow plastic sauropod hanging from my rearview mirror for almost a decade now. And that dinosaur has been my only companion for large chunks of these projects, accompanying me every time I drove to the middle of nowhere to scout a location or to obtain a hard-to-find prop.
            </p><p className=" small text-muted text-indent text-justify">
                When I decided to publish these films here on my new website, I felt it was important to tell the stories of their productions as well. The hope is that, by providing a glimpse into the tumultuous process each of these projects went through, you can fully enjoy them for the labors of love that they are.
            </p><p className=" small text-muted text-indent text-justify">
                Going forward, I hope to move away from this one-man approach and instead collaborate with other like-minded artists. I treasure the memories and the lessons each one of these solo experiences has provided, and I am secure in the knowledge that, if the project demands it, I can do it again. But, I also can&apos;t wait to see what I can make when I combine my skills with other passionate filmmakers. The possibilities are endless.
            </p><p className=" small text-muted text-indent text-justify">
                Please email me at <a href="mail:Daniel@YellowDinosaur.io">daniel@yellowdinosaur.io</a> if you would like to collaborate on a project. I look forward to hearing from you.
            </p>
            <br></br>
            <footer className="blockquote-footer text-right float-right w-100">
            <cite className="text-muted text-right">Dan</cite>
            </footer>
        </blockquote>
        ;
    const danielProfilePicLink = "https://pagina-mama.s3.amazonaws.com/assets2/daniel/Dan+About+Me+Page.jpg";
    return (

        <section className="card mb-3 " >
            <div className="clearfix">
                <div className="float-start">
                    <img src={danielProfilePicLink} className="img-fluid img-thumbnail rounded-start p-4 w-100" style={{minWidth:"400px!important"}} alt="Daniel Grzywacz" />
                </div>
                <div className="float-none">
                    <div className="card-body">
                        <p className="card-title mt-3 fs-2 text-center mb-3">Daniel Grzywacz</p>
                        {danielAboutMeText}
                       
                    </div>
                </div>
            </div>
        </section>


    );
}








