import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
// import { Await } from 'react-router-dom';



const Exercises = ({}) => {  
    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const [isLoading,setIsLoading]=useState(true);
    const exercisesPerPage =9;
    // const [open, setOpen] = React.useState(false);

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice
    (indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value);
    
        window.scrollTo({ top: 1800, behavior:'smooth'})
      }
    // let isLoading = true;
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=1000';
     
    const exerciseOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }

    
    const fetchExerciseData = async(link) =>{
      

        try {
            const response = await fetch(link, exerciseOptions);
            const result = await response.json();
            console.log("exercise result ",result);

            // const searchedExercises = result.filter(
            //     (exercise) => exercise.name.toLowerCase().includes(search)
            //     || exercise.target.toLowerCase().includes(search)
            //     || exercise.equipment.toLowerCase().includes(search)
            //     || exercise.bodyPart.toLowerCase().includes(search)
        
            //   );
            //   console.log("searchedExercises...",searchedExercises);
              setSearch('');
              setExercises(result)
              setIsLoading(false);

        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const handleSearch = async () => {
        setIsLoading(true);
        if(search && exercises) {
            const searchedExercises = exercises.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
        
              );
            //   console.log("searchedExercises...",searchedExercises);
              setSearch('');
              setExercises(searchedExercises)
              setIsLoading(false);
        }
        // return exerciseData;
    }
   
useEffect(() => {
    fetchExerciseData(url);
}, []);




// if (isLoading) {
//     return (
//         <h1> Loading...</h1>
//     )
// }
// {
//     "bodyPart": "waist",
//     "equipment": "body weight",
//     "gifUrl": "https://v2.exercisedb.io/image/ak0doyBeXm1uVy",
//     "id": "0001",
//     "name": "3/4 sit-up",
//     "target": "abs",
//     "secondaryMuscles": [
//         "hip flexors",
//         "lower back"
//     ],
//     "instructions": [
//         "Lie flat on your back with your knees bent and feet flat on the ground.",
//         "Place your hands behind your head with your elbows pointing outwards.",
//         "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
//         "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
//         "Repeat for the desired number of repetitions."
//     ]
// }
  return (
    
    <>
    <Box  mt='20px'
    textAlign='center'>
        <input className='searchbar'
            placeholder='Search Exercises e.g chest, shoulder'
            type='text'  
            // style={{ fontSize: '18px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}

        />
        <button 
            className='Searchbutton'
            onClick={handleSearch}
            // sx={{
            //     bgcolor: '#fff',
            //     marginLeft:'10px',
            //     border:'none',
            //     borderRadius: '15px',
            //     fontSize: '15px',
            //     height: '30px'
                
            // }}
        > Search</button>
    
    </Box>
    {
        isLoading?<h1>Loading...</h1>:
        <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'},marginTop:'30px'}}
        flexWrap="wrap" justifyContent="center">
            {
               exercises && exercises.slice(0, 12).map((item)=>(
                    <Stack direction={'row'}>
                        <Card sx={{ maxWidth: 345, borderRadius:'20px'}}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="275"
                            // width="280"
                            image={item.gifUrl}
                            
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.instructions}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button >{item.bodyPart}</Button>
                            <Button > {item.target}</Button>
                        </CardActions>
                        </Card>
                    </Stack>
                ))
            }
        </Stack>
        
    }

    {/* <Stack mt= "100px" alignItems= "center">
          {exercises && exercises.length > 9 && (
            <Pagination
              color="#f3e5f5"
              shape="rounded"
              defaultPage = {1}
              count={Math.ceil(exercises.length / exercisesPerPage) || 1}
              page = {currentPage}
              onChange = {paginate}

            />
          )}
        
      </Stack> */}
        

    </>
  
  )
}

export default Exercises