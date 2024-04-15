import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { PnDData, slideData2 } from '../data'

const Contianer = styled.div`
height: 150rem;
`
const TitleBgImg = styled.div`
display: flex;
height:25rem;
width:98.9vw;
background-image: url("https://universalpainters.co.uk/wp-content/uploads/2023/09/external-wall-cotings.png");
background-repeat: no-repeat;
background-size: cover;
`
const Overlay = styled.div`
display:flex;
height:25rem;
    width:100vw;
    background-color: black;
    opacity: 0.5;
    color: white;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 3.5rem;
    }
`
const Content = styled.div`
padding: 7rem 5rem 5rem 5rem ;
`
const Title = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`
const CardsContainer = styled.div`
padding:5rem;
display: flex;
flex-direction: column;
align-items: center;
`
const Cards = styled.div`
    padding:1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
const Card = styled.div`
display: grid;
grid-template-rows: 12rem 4rem 15rem;
padding:2.5rem;
height:30rem;
width:20rem;
justify-content: center;
border-radius: 1.5rem;

&:hover{
box-shadow:0px 204px 204px -60px rgba(0, 0, 0, 0.16);}
`
const Image = styled.img`
    height: 10rem;
    width: 10rem;
`
const Heading = styled.h3`
font-size:1.5rem;
`
const Desc = styled.p`
font-size: large;
color:rgb(142, 145, 170);
`
const ExternalWall = styled.div`
    
`
const BgImage = styled.div`
height: 45rem;
width: 50rem;
 background-image: url(${props => props.data.bg});
`
const PandD = () => {
    return <Layout>
        <Contianer>
            <TitleBgImg>
                <Overlay><h1>Painting And Decorating</h1></Overlay>
            </TitleBgImg>
            <Content>
                <Title>
                    <h1>External Wall Coating Specialists</h1>
                    <h3>What Are External Wall Coatings?</h3>
                </Title>
                <CardsContainer>
                    <Cards>
                        {PnDData.map((props) => {
                            return <Cards key={props.id}>
                                <Card>
                                    <Image src={props.img} />
                                    <Heading>{props.title}</Heading>
                                    <Desc>{props.desc}</Desc>
                                </Card>
                            </Cards>
                        })}
                    </Cards>
                </CardsContainer>
            </Content>
            <ExternalWall>
                {
                    slideData2.map((props) => {
                        return (props.id === (2 && 3)) ? <BgImage data={props}>hi there</BgImage> : "no image found"
                    })
                }

            </ExternalWall>

        </Contianer>
    </Layout>

}

export default PandD
