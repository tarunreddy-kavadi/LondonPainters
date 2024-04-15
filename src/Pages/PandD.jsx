import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'
import { PnDData, slideData2 } from '../data'

const Contianer = styled.div`
max-height: 300rem;
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
    overflow: visible;
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
    display: grid;
    height: 170rem;
    grid-template-rows: 25rem 40rem 25rem 40rem;
    max-width: 72rem;
    padding-left: 11rem ;

    `;
const BgImage = styled.div`
    max-height: 25rem;
    background-image: url(${props => props.data.bg});
    background-size: cover;
    color: white;
    display: grid;
    padding-left:4rem;
   grid-template-rows: 10rem;
   align-items:end;
    `;
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

                <ExternalWall>
                    {
                        slideData2.map((props) => (props.id === 2) && <BgImage data={props}> <h1>External Wall Coating And Painting Specialists</h1></BgImage>)
                    }
                    <p style={{ fontSize: '1rem', lineHeight: '2rem' }}>As a premier provider of External Wall Coatings and Painting services, Universal Painters excels in delivering outstanding results for properties across residential, commercial, and industrial sectors. Our external wall coatings are known for their exceptional benefits, making them a top choice for property owners in various regions.<br />

                        Opting for our external wall coatings means reaping the benefits of improved insulation and enhanced energy efficiency for buildings of all types. These coatings are specifically formulated to control temperature and reduce energy usage, fostering a comfortable environment in homes, offices, and industrial facilities year-round. They act as a thermal barrier, keeping spaces warm in winter and cool in summer, which translates to significant savings on heating and cooling costs. <br />

                        Beyond their insulation capabilities, our external wall coatings provide robust protection against environmental elements. Their durability and weather resistance ensure long-term performance and preservation of your property’s exterior. These coatings are adept at resisting rain, wind, and UV rays, preventing damage, cracking, and fading, and keeping your property in prime condition for years.<br />

                        Moreover, we offer a diverse range of colors and finishes in our external wall coatings, allowing you to enhance the visual appeal of any building. Whether you’re looking for a smooth, textured, or decorative finish, our coatings can dramatically transform the appearance of your property, adding curb appeal and increasing its market value.<br />

                        Choosing Universal Painters for your external wall coating needs ensures that your building, be it residential, commercial, or industrial, is in the hands of our experienced team. We guarantee professional installation, backed by our commitment to expertise and customer satisfaction. We take pride in delivering top-tier results, ensuring your property is well-protected, insulated, and visually stunning.<br />

                        Contact us today to explore external wall coating options and learn how they can revolutionise the look and feel of your building.</p>
                    {
                        slideData2.map((props) => (props.id === 1) && <BgImage data={props}><h1>Are External Wall Coatings A Good Option For My Home?</h1></BgImage>)
                    }
                    <p style={{ fontSize: '1rem', lineHeight: '2rem' }}>
                        Elevate the exterior of your property, be it residential, commercial, or industrial, with Universal Painters’ superior external wall coatings. These high-quality coatings are an excellent choice for property owners aiming to improve both the visual appeal and resilience of their buildings. <br />

                        Selecting our external wall coatings means embracing robust protection against harsh environmental factors. These coatings serve as a formidable barrier, shielding your building from rain, wind, UV rays, and other damaging conditions. Embrace a future free from the worries of cracks, fading, and frequent upkeep, as our coatings offer a strong and lasting defense, ensuring your property remains visually appealing throughout the years.<br />

                        Beyond protection, our coatings are also remarkable for their energy-saving properties. Thanks to their advanced insulation capabilities, they help in maintaining consistent temperatures and reducing heat loss, which leads to lower energy use and reduced heating costs. Enjoy a more comfortable indoor environment while contributing positively to the environment.<br />

                        Our external wall coatings are not just practical; they come in a wide array of striking colors and finishes to match your unique style and boost the curb appeal of your property. Whether you prefer a smooth, sleek look or a textured, decorative one, we have the ideal solution to realise your vision and leave a lasting impact.<br />

                        At Universal Painters, we pride ourselves on our professionalism, expertise, and dedication to customer satisfaction. Our team of experienced specialists ensures that the installation of your external wall coatings is executed with utmost precision and quality. You can trust that your property, regardless of its type, is in capable hands that prioritise excellence and meticulous attention to detail.<br />

                        Experience the transformative effect of external wall coatings and give your property the upgrade it deserves.<br />

                        Reach out to Universal Painters today to arrange a consultation and discover the extensive possibilities for enhancing the aesthetics, protection, and energy efficiency of your building.


                    </p>
                </ExternalWall>
            </Content>
        </Contianer>
    </Layout >

}

export default PandD
