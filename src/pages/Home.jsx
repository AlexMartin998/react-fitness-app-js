import Box from '@mui/material/Box';

import { HeroBanner } from '../components/HeroBanner';
import { SerachExercises } from '../components/SerachExercises';
import { Exercises } from '../components/Exercises';

export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SerachExercises />
      <Exercises />
    </Box>
  );
};
