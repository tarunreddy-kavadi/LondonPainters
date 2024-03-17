import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { PnDData } from '../data'

const Contianer = styled.div`
height: 100rem;
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
padding:1.5rem;
height:30rem;
width:20rem;

align-items: center;
border:1px solid black;
`
const Image = styled.img`
    height: 6rem;
    width: 10rem;
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
                                    <h3>{props.title}</h3>
                                    <p>{props.desc}</p>
                                </Card>
                            </Cards>
                        })}
                    </Cards>
                </CardsContainer>
            </Content>
        </Contianer>
    </Layout>

}

export default PandD
