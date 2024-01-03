import { Card, CardMedia, Stack, CardContent, Typography } from '@mui/material'
// import {CardActions, Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const FitnessNews = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
    
    // const newsData={
    //     "page": 1,
    //     "news": [
    //         {
    //             "title": "'Intelligent, Interactive, Individualized': Former Gold's Gym and ...",
    //             "body": "Now co-founders Brandon Bean and Omeed Shams are eying franchise partnerships to expand their category-opening concept that leverages tech and innovation to '...",
    //             "date": "Sep 7, 2023",
    //             "url": "https://dallasinnovates.com/intelligent-interactive-individualized-former-golds-gyms-ceo-and-kwest-app-visionary-launch-ai-driven-smart-fitness-studio/",
    //             "source": "Dallas Innovates",
    //             "image": "https://audiospace-1-u9912847.deta.app/getnewspic?id=sZ6eEpTE8IgQIB2ZuYdz1703149882.16548"
    //         },
    //         {
    //             "title": "Welcome to the AI gym staffed by virtual trainers",
    //             "body": "Although each class at the Las Colinas studio is currently observed by a fitness professional, that supervisor doesn't need to be a trainer, says Brandon...",
    //             "date": "Oct 9, 2023",
    //             "url": "https://www.technologyreview.com/2023/10/09/1081333/welcome-to-the-ai-gym-staffed-by-virtual-trainers/",
    //             "source": "MIT Technology Review",
    //             "image": "https://audiospace-1-u9912847.deta.app/getnewspic?id=EApXCxj2HXOxHFYYjs3h1703149882.2277699"
    //         },
    //         {
    //             "title": "Capabilities And Challenges Of AI-Enabled Fitness Applications",
    //             "body": "Modern AI-enabled fitness approaches are typically divided into two categories: algorithms that support athletes with workout programming, fatigue tracking,...",
    //             "date": "Sep 13, 2023",
    //             "url": "https://www.forbes.com/sites/forbestechcouncil/2023/09/13/capabilities-and-challenges-of-ai-enabled-fitness-applications/",
    //             "source": "Forbes",
    //             "image": "https://audiospace-1-u9912847.deta.app/getnewspic?id=WzNXNbEP5tQWTWmYtOhB1703149882.301024"
    //         },
    //         {
    //             "title": "Avenda Health's Revolutionary AI Mapping Tool for Prostate ...",
    //             "body": "Fitness/Wellness · Health Care ... Avenda Health's Revolutionary AI Mapping Tool for Prostate Cancer Achieves Landmark Category III CPT Code Designation...",
    //             "date": "1 month ago",
    //             "url": "https://www.prnewswire.com/news-releases/avenda-healths-revolutionary-ai-mapping-tool-for-prostate-cancer-achieves-landmark-category-iii-cpt-code-designation-301973699.html",
    //             "source": "PR Newswire",
    //             "image": "https://audiospace-1-u9912847.deta.app/getnewspic?id=zUzXJgPsOI5QuDVNr9uT1703149882.3643703"
    //         },
    //         {
    //             "title": "2024 Grammy Awards: 10 Biggest Changes",
    //             "body": "AI (Artificial Intelligence) Protocols Added. In a sign of the times, the ... This new category joins five existing categories for jazz – best improvised jazz...",
    //             "date": "Jun 16, 2023",
    //             "url": "https://www.billboard.com/lists/2024-grammy-awards-changes-harvey-mason-jr/",
    //             "source": "Billboard",
    //             "image": "https://audiospace-1-u9912847.deta.app/getnewspic?id=1Dg7YhOgwx0eXGvvZCAq1703149882.4290202"
    //         },
    //         {
    //             "title": "High aerobic fitness at age 18 linked to lower risk of several ...",
    //             "body": "Preliminary data presented at the annual meeting of the American Association for Cancer Research showed that cancer mortality rates in all categories were, on...",
    //             "date": "Aug 16, 2023",
    //             "url": "https://www.news-medical.net/news/20230816/High-aerobic-fitness-at-age-18-linked-to-lower-risk-of-several-types-of-cancer.aspx",
    //             "source": "News Medical",
    //             "image": "https://audiospace-1-u9912847.deta.app/getnewspic?id=SeLhN1VWdaVhNtXt0oGP1703149882.4989722"
    //         },
    //         {
    //             "title": "Peloton’s relaunch of its entire brand includes a workout app overhaul with 3 tiers—including a free one",
    //             "body": "The free app will feature more than 50 classes in a dozen fitness categories. Live classes will not be included, but the featured classes will be refreshed...",
    //             "date": "May 24, 2023",
    //             "url": "https://fortune.com/2023/05/24/peloton-revamps-workout-app-relaunch-brand-three-tiers-free-premium/",
    //             "source": "Fortune",
    //             "image": "https://audiospace-1-u9912847.deta.app/getnewspic?id=EDCHjUTGHFli9lzZrD2q1703149882.5611696"
    //         },
    //         {
    //             "title": "Vivante Health Named Quarterfinalist in 2 Digital Health ...",
    //             "body": "Placement in the Best Use of AI in Health Tech category reflects GIThrive's use of artificial intelligence and machine learning to generate personalized...",
    //             "date": "Sep 12, 2023",
    //             "url": "https://www.prnewswire.com/news-releases/vivante-health-named-quarterfinalist-in-2-digital-health-awards-categories-301924749.html",
    //             "source": "PR Newswire",
    //             "image": "https://audiospace-1-u9912847.deta.app/getnewspic?id=Eiw8PktifQgu2PtpooRt1703149882.6122658"
    //         },
    //         {
    //             "title": "Exercise bike brand expands B2B with Peloton for Business",
    //             "body": "... Category Statistics & Trends · North America's Top Online Retailers · U.S. ... AI will Change Ecommerce · 2023 Annual Fulfillment Report · Leading Ecommerce...",
    //             "date": "Aug 22, 2023",
    //             "url": "https://www.digitalcommerce360.com/2023/08/22/peloton-for-business-b2b/",
    //             "source": "Digital Commerce 360",
    //             "image": "https://audiospace-1-u9912847.deta.app/getnewspic?id=PlMHibmy5zRSvBGcG8Is1703149882.6679604"
    //         }
    //     ]
    // }
    function getCurrentdate() {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Note: Months are zero-based
        const year = currentDate.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;

        return formattedDate;
    }

    async function fetchFitnessNews(){
      let headersList = {
        "Accept": "*/*",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
        "Content-Type": "application/json"
       }
       
        let bodyContent = JSON.stringify({
          "query": "AI",
          "page": 1,
          "time_bounded": true,
          "from_date": "01/11/2023",
          "to_date": getCurrentdate(),
          "location": "",
          "category": "fitness",
          "source": ""
      });
    
       
       let response = await fetch("https://newsnow.p.rapidapi.com/newsv2", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
        setNewsData(data?.news)
        setIsLoading(false);
       console.log("news..",data);
       
    }

    useEffect(() => {
      fetchFitnessNews();
    }, [])

  return (
    isLoading?<h1>Loading...</h1>:
    <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'},marginTop:'30px'}}
        flexWrap="wrap" justifyContent="center">
            {
                newsData.map((news)=>(
                    <Stack direction={'row'}>
                        <Link to={news.url} className='removeunderline'>
                        <Card sx={{ maxWidth: 345, borderRadius:'20px'}}>
                        <CardMedia className='image-card'
                            component="img"
                            // alt="green iguana"
                            height="250"
                            width= "250"
                            image={news.image}
                            
                        />
                        <CardContent >
                            <Typography className='text-card' gutterBottom variant="h6" component="div">
                            {news.title}
                            </Typography>
                            <Typography variant="body4" color="text.secondary">
                            {news.body}
                            </Typography>
                        </CardContent>
                        <CardContent>
                           <Typography variant='body6' color="GrayText">{news.source} <br/>{news.date}</Typography>
                        </CardContent>
                        
                        {/* <CardActions>
                            <Button >{item.bodyPart}</Button>
                            <Button > {item.target}</Button>
                        </CardActions> */}
                        </Card>
                        </Link>
                    </Stack>
                ))
            }
        </Stack>
    
  )
}

export default FitnessNews
