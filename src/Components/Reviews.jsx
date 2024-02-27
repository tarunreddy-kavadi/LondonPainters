import React from 'react'
import styled from 'styled-components'
import { CommentData } from '../data'

const Container = styled.div`
height: 100rem;
display: flex;
flex-direction: column;
`;
const ContainerReviews = styled.div`
height: 42rem;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Image = styled.img`
`
const ImageReview = styled.div`
display: flex;
flex-direction: column;
padding: 0rem 8rem 0rem 15rem;
h1{
    color: blue;
    font-size: 3rem;
};
h2{

    font-size:1.9rem;
};


`;
const CommentContianer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding:0rem 12rem 0rem 12rem;
`
const CommentCard = styled.div`
    height:33rem;
    width:15rem;
    padding: 3rem;
    border-radius: .5rem;
    box-shadow:0.9rem 0.9rem 0.9rem 0.9rem rgba(0,0,0,0.16);
    img{
        height: 3rem;
        width:3rem;
        border-radius: 12rem;
    };
    


`

const Reviews = () => {

    return <Container>
        <ContainerReviews>
            <Image src="https://universalpainters.co.uk/wp-content/uploads/2021/03/roofing-img-04.jpg" alt='house'></Image>
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

                    <img src={data.img} />
                    {data.user}

                </CommentCard>
            })}
        </CommentContianer>
    </Container >
}

export default Reviews
