import { Link } from "react-router-dom"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ReviewsIcon from '@mui/icons-material/Reviews';
import BookIcon from '@mui/icons-material/Book';


export const slideData1 = [
    {
        id: 1,
        bg: "https://universalpainters.co.uk/wp-content/uploads/2023/09/external-wall-cotings.png",
        title: "External Painting",
        desc: "As a leading provider of External Wall Coatings and Painting services, Universal Painters is committed to delivering superior results for your property.",
        link: <Link to="" style={{ color: "white", textDecoration: 'none' }}>Learn more</Link>
    },
    {
        id: 2,
        bg: "https://universalpainters.co.uk/wp-content/uploads/2023/09/internal-paints.png",
        title: "Internal Insulation",
        desc: "At Universal Painters, we offer an innovative solution for internal insulation with our high-quality insulation paint.",
        link: <Link to="" style={{ color: "white", textDecoration: 'none' }}>Learn more</Link>
    },
    {
        id: 3,
        bg: "https://universalpainters.co.uk/wp-content/uploads/2023/09/background.png",
        title: "Thermal Cork",
        desc: "At Universal Painters, we specialise in thermal cork spray and cork rendering, offering exceptional solutions for your home’s exterior.",
        link: <Link to="" style={{ color: "white", textDecoration: 'none' }}>Learn more</Link>
    },
];
export const slideData2 = [
    {
        id: 1,
        bg: "https://universalpainters.co.uk/wp-content/uploads/2023/09/1-1.png",
        title: "K-Rend Silicone",
        desc: "Universal Painters is your local K-rend and silicone rendering specialists. With over 30 years of experience in the industry, we take pride in delivering professional and reliable services to our valued customers.",
        link: <Link to="" style={{ color: "white", textDecoration: 'none' }}>Learn more</Link>
    },
    {
        id: 2,
        bg: "https://universalpainters.co.uk/wp-content/uploads/2023/09/3-1-1.png",
        title: "Damp Solutions",
        desc: "Universal Painters is a leading provider of damp services, offering comprehensive solutions to address and resolve damp-related issues in your property. ",
        link: <Link to="" style={{ color: "white", textDecoration: 'none' }}>Learn more</Link>
    },
    {
        id: 3,
        bg: "https://universalpainters.co.uk/wp-content/uploads/2023/09/commercial-background1.png",
        title: "Commercial Contracts",
        desc: "Universal Painters is a trusted provider of intumescent painting services, offering comprehensive solutions to enhance fire safety in your property.",
        link: <Link to="" style={{ color: "white", textDecoration: 'none' }}>Learn more</Link>
    }

]

export const CardsData = [
    {
        id: 1,
        title: 'Over 30 Years Experience',
        desc: 'With over 30 years of experience in the industry, we bring a wealth of knowledge and expertise to every job we undertake. Our extensive experience allows us to tackle even the most complex projects with confidence, ensuring exceptional results that exceed your expectations.',
        img: <EmojiEventsIcon style={{ color: "blue", fontSize: "2.5rem", backgroundColor: "whitesmoke", borderRadius: "10rem", padding: "0.5rem" }} />
    },
    {
        id: 2,
        title: 'Fully Insured',
        desc: 'At Universal Painters, we prioritise the safety and peace of mind of our clients. Thats why we are fully insured, giving you the confidence that any unexpected incidents or damages will be covered.Public Liability insures we can take on any size project.',
        img: <WbSunnyIcon style={{ color: "blue", fontSize: "2.5rem", backgroundColor: "whitesmoke", borderRadius: "10rem", padding: "0.5rem" }} />
    },
    {
        id: 3,
        title: 'Approved Tradesmen',
        desc: 'Our team consists of highly skilled and qualified tradesmen who have been approved through rigorous assessments and certifications. With their expertise and attention to detail, you can trust that your project will be handled professionally and to the highest standards.',
        img: <HandshakeIcon style={{ color: "blue", fontSize: "2.5rem", backgroundColor: "whitesmoke", borderRadius: "10rem", padding: "0.5rem" }} />
    },

]
export const CommentData = [
    {
        id: 1,
        title: "Painting exterior of house…",
        desc: "Gary and the team where fantastic. Professional, clean, tidy and nothing was too much trouble. The attention to detail for the works carried out was exceptional. Even when a few extra bits were added they were very accommodating and even making suggestions that were excellent but added to their workload. I would recommend Universal Painters without hesitation. Excellent workmanship and very professional.",
        img: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1708905600&semt=ais",
        user: "Bruce"
    },
    {
        id: 2,
        title: "Practical, helpful approach…",
        desc: "This isn’t the first time Gary has completed work for us so we knew what to expect before he arrived. He’s always been extremely helpful and knowledgable, quick to respond and, as we’ve had work done by him before, we know it works. Gary has been able to advise exactly what needs doing and has made it work within four budget. He also always provides advice for the trades completely the next stages – plastering, decorating etc. Highly recommend Gary for damp proofing services.",
        img: "https://hips.hearstapps.com/ell.h-cdn.co/assets/16/01/1600x1066/gallery-1451933912-scandal-1.jpg?resize=1200:*",
        user: "Lucia"
    },
    {
        id: 3,
        title: "Practical, helpful approach…",
        desc: "The boss Gary was very friendly and knowledgable and provided us with a very competitive quotation in writing and within 24 hours of his on site survey. We found his team to be very hard working but they made time to explain the processes and keep us informed. The complete job looks great and comes with a 20 year warranty. No money was requested up front and we were happy to pay in full (via bank transfer) as soon as the job was completed. Top marks, they are a great little company.",
        img: "https://img.freepik.com/free-photo/handsome-elderly-businessman-suit_144627-1175.jpg?size=626&ext=jpg",
        user: "Chris"
    },
]

export const ExperienceData = [
    {
        id: 1,
        desc: "30 Years Experience",

    },
    {
        id: 2,
        desc: "All Work 100% Guaranteed",

    },
    {
        id: 3,
        desc: "Fully Insured Company",

    },
    {
        id: 4,
        desc: "No Call Out Charges",

    },
    {
        id: 5,
        desc: "No Hidden Costs",

    },
    {
        id: 6,
        desc: "100% Recommend Us",

    },
]
export const ReviewData = [
    {
        id: 1,
        title: "Painted alley wall 75 Verified Review",
        desc: "Very happy with the work Would have them back again Will recommend them to family and friends",
        loc: "HP1 December 2023"
    },
    {
        id: 2,
        title: "Painted alley wall 75 Verified Review",
        desc: "Very happy with the work Would have them back again Will recommend them to family and friends",
        loc: "HP1 December 2023"
    },
    {
        id: 3,
        title: "Painted alley wall 75 Verified Review",
        desc: "Very happy with the work Would have them back again Will recommend them to family and friends",
        loc: "HP1 December 2023"
    },
    {
        id: 4,
        title: "Painted alley wall 75 Verified Review",
        desc: "Very happy with the work Would have them back again Will recommend them to family and friends",
        loc: "HP1 December 2023"
    },
    {
        id: 5,
        title: "Painted alley wall 75 Verified Review",
        desc: "Very happy with the work Would have them back again Will recommend them to family and friends",
        loc: "HP1 December 2023"
    },
    {
        id: 6,
        title: "Painted alley wall 75 Verified Review",
        desc: "Very happy with the work Would have them back again Will recommend them to family and friends",
        loc: "HP1 December 2023"
    },
]
export const FaqData = [
    {
        id: 1,
        question: "What is an external coating ?",
        ans: `An external wall coating is a protective and decorative coating applied to the exterior walls of a building. It acts as a barrier, providing long-lasting protection against weathering, moisture, UV rays, and other environmental factors. It can also enhance the aesthetics of your home, offering a fresh and attractive appearance.`
    },
    {
        id: 2,
        question: "What are the benefits of exrternal wall coatings?",
        ans: `External wall coatings offer several benefits. They provide durable protection against the elements, preventing damage from rain, wind, and sunlight. They can also improve the thermal efficiency of your home, reducing heat loss and potentially lowering energy bills. Additionally, these coatings are available in a variety of colours and finishes, allowing you to enhance the curb appeal and value of your property.`
    },
    {
        id: 3,
        question: "How long does an external wall coating last ?",
        ans: `The lifespan of an external wall coating depends on various factors, such as the type of coating used, the quality of application, and the climate in which the property is located. However, high-quality coatings applied by professionals can last anywhere from 10 to 20 years or more with proper maintenance and care.`
    },
    {
        id: 4,
        question: "Will an external wall coating hide cracks and imperfections on my walls ?",
        ans: `Yes, external wall coatings can help conceal minor cracks and imperfections on your walls. The coating forms a smooth and even surface, providing a fresh appearance and improving the overall aesthetics of your home. However, it’s important to note that significant structural issues may require separate repairs before the coating is applied.`
    },
    {
        id: 5,
        question: "Can I choose the color and finish of my external wall coating ?",
        ans: `Yes, external wall coatings are available in a wide range of colours and finishes to suit your preferences and complement the style of your home. Whether you prefer a smooth, textured, or decorative finish, there are options to match your desired look and enhance the overall appearance of your property.`
    },
    {
        id: 6,
        question: "Is the application of external wall coatings discruptive to my daily life ?",
        ans: `Professional application of external wall coatings is typically a straightforward process that minimises disruption to your daily life. Experienced installers work efficiently to complete the coating application with minimal inconvenience. However, it’s advisable to discuss the specific details and timeline with your chosen coating provider for a clear understanding of the process.`
    },
    {
        id: 7,
        question: "How do I maintain an external wall coating ?",
        ans: `External wall coatings require minimal maintenance. Regular cleaning with mild detergent and water can help keep the coating looking fresh and remove any dirt or grime. It’s important to avoid abrasive cleaners or high-pressure washing, as they may damage the coating. Additionally, periodic inspections by professionals can identify any potential issues that may require attention.`
    },
    {
        id: 8,
        question: "Can external wall coatings be applied to any type of wall surface ?",
        ans: `External wall coatings can be applied to various wall surfaces, including brick, render, concrete, and more. However, it’s essential to assess the condition of the existing wall and ensure it is suitable for coating application. Professional coating providers can evaluate your specific situation and recommend the most appropriate solution for your property.

`
    }
]

export const PnDData = [
    {
        id: 1,
        img: "https://universalpainters.co.uk/wp-content/uploads/2023/09/6.png",
        title: "Improved Insulation",
        desc: "Wall coatings, especially those with thermal properties, offer enhanced insulation for your home. They help to reduce heat transfer, keeping your interiors cooler in the summer and warmer in the winter. This can lead to energy savings by reducing the reliance on heating and cooling systems."
    },
    {
        id: 2,
        img: "https://universalpainters.co.uk/wp-content/uploads/2023/09/5.png",
        title: "Enhanced Protection",
        desc: "Wall coatings provide an additional layer of protection for your home’s exterior surfaces, shielding them from weather elements such as rain, wind, and UV rays. This helps to prevent damage, cracking, and fading, ensuring your walls stay in good condition for longer."
    },
    {
        id: 3,
        img: "https://universalpainters.co.uk/wp-content/uploads/2023/09/4.png",
        title: "Aesthetic and Stylish Finish",
        desc: "Wall coatings come in a wide range of colours and finishes, allowing you to transform the appearance of your home and give it a fresh, updated look. Whether you prefer a smooth or textured finish, there is a coating option to suit your style and enhance your home’s curb appeal."
    },
    {
        id: 4,
        img: "https://universalpainters.co.uk/wp-content/uploads/2023/09/3-1.png",
        title: "Low Maintenance",
        desc: "Once applied, wall coatings require minimal maintenance. They are easy to clean and resistant to dirt, grime, and pollutants. A simple wash or gentle pressure wash is usually sufficient to keep your walls looking clean and vibrant. This saves you time and effort on regular maintenance tasks."
    },
    {
        id: 5,
        img: "https://universalpainters.co.uk/wp-content/uploads/2023/09/2-1.png",
        title: "Moisture Protection",
        desc: "Wall coatings act as a barrier against moisture infiltration, preventing water damage, dampness, and mould growth. This is particularly beneficial for homes located in areas with high humidity or prone to heavy rainfall. The coatings create a waterproof seal, keeping your walls dry and protected."
    },
    {
        id: 6,
        img: "https://universalpainters.co.uk/wp-content/uploads/2023/09/1-1-1.png",
        title: "High Durability",
        desc: "Wall coatings are designed to withstand the test of time. They are highly durable and resistant to wear and tear, ensuring that your walls maintain their appearance and integrity for years to come. This eliminates the need for frequent repainting or repairs, saving you time and money in the long run."
    },

]
export const MenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
        iconOpen: <ArrowDropDownIcon />,
        iconClose: <ArrowDropUpIcon />
    },
    {
        title: 'About',
        path: '/',
        icon: <HomeIcon />,
        iconOpen: <ArrowDropDownIcon />,
        iconClose: <ArrowDropUpIcon />,
        subNav: [
            {
                title: 'FAQ',
                path: '',
                icon: <QuestionAnswerIcon />
            },
            {
                title: 'Reviews',
                path: '',
                icon: <ReviewsIcon />
            },
            {
                title: 'Blogs',
                path: '',
                icon: <BookIcon />
            }
        ]
    }

]










