import React from 'react'
import styled from 'styled-components'
import { CommentData } from '../data'
import ResponsiveSetup from '../Responsive/ResponsiveSetup';
import bgImage from '../assets/image15.jpeg'


const Container = styled.div`

display: flex;
flex-direction: column;
`;
const ContainerReviews = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap:5rem;
`;
const Image = styled.img`
max-width:50%;

${ResponsiveSetup({
    display: 'none'
})}
`;

const ImageReview = styled.div`
display: flex;
flex-direction: column;
max-width: 50%;

h1{
    color: blue;
    font-size: 3rem;
};
h2{
    font-size:1.9rem;
};
${ResponsiveSetup({

    marginTop: '5rem',
    maxWidth: '100%',
    backgroundImage: `url(${bgImage})`,
    backgroundsize: 'cover',
    backgroundPosition: 'center'
})}
`;
const CommentContianer = styled.div`
    display: flex;
    max-width:100%;
    justify-content:center;
    flex-direction: row;
    padding:3rem 0rem 0rem 0rem;
    gap:2rem;
    ${ResponsiveSetup({
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0rem 0rem 0rem 0rem'

})}
`
const CommentCard = styled.div`
display: flex;
flex-wrap: wrap;
word-wrap: break-word;
    min-height:30rem;
    max-width:15rem;
    padding: 3rem;
    border-radius: .5rem;
    box-shadow:0.9rem 0.9rem 0.9rem 0.9rem rgba(0,0,0,0.16);
    img{
        height: 3rem;
        width:3rem;
        border-radius: 12rem;
    };
    ${ResponsiveSetup({
    marginTop: '4rem',
    minHeight: '20rem',
    maxWidth: '30rem',
})
    }
`;
const Accreditations = styled.div`
display: flex;
justify-content: center;
gap:5rem;
margin:5rem;
/* padding: 9rem 15rem 0rem 15rem; */
${ResponsiveSetup({
    flexDirection: 'column'
})}
`;
const Image1 = styled.img`
display:flex;
min-height: 25rem;
max-width: 50%;
${ResponsiveSetup({
    maxWidth: '100%'
})}
    
`;
const Desc = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;
    word-wrap: break-word;
    h1{
        font-size: 3rem;
    };
    p{
        font-size: 1.1rem;
    }
    ${ResponsiveSetup({
    maxWidth: '100%'
})}
`

const Reviews = () => {

    return <Container>
        <ContainerReviews>
            <Image src={bgImage} alt='house'></Image>

            <ImageReview>
                <h1>Reviews</h1>
                ⭐⭐⭐⭐⭐
                <h2>“I had the pleasure of hiring the Universal Painters for a recent project. From start to finish, they demonstrated the utmost professionalism and skill. </h2>

                <h2>  I wholeheartedly recommend this painting company to anyone in need of professional painting services. ”</h2>
                <p>Anna Patricia <br />
                    Manager of Finance Consultant</p>
            </ImageReview>
        </ContainerReviews>
        <CommentContianer>
            {CommentData.map((data) => {
                return <CommentCard key={data.id}>

                    <h2>{data.title}</h2>
                    ⭐⭐⭐⭐⭐
                    <p>{data.desc}</p>

                    <img src={data.img} alt='incoming-image' />
                    {data.user}

                </CommentCard>
            })}
        </CommentContianer>
        <Accreditations>
            <Image1 src="https://universalpainters.co.uk/wp-content/uploads/2023/09/7105ecc280de2e40aa63c1709e4e47bc.png-1536x960.webp" alt='house' />
            <Desc>
                <h1>Accreditations</h1>
                <p>At Universal Painting Company, we take pride in our commitment to excellence and professionalism in the world of painting services. Our dedication to quality and customer satisfaction has earned us a range of prestigious accreditations, affirming our position as a trusted leader in the industry. These accreditations serve as a testament to our unwavering standards of craftsmanship and commitment to ethical business practices.</p>
            </Desc>
        </Accreditations>
    </Container >
}

export default Reviews
