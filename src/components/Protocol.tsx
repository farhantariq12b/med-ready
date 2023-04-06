import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import DetailSection from './DetailSection';
import QuizSection from './QuizSection';

const Protocol = () => {
	return (
		<Box>
			<Grid className="grid" container spacing={2}>
				<Grid className="detail-grid" item md={3} xs={4}>
					<DetailSection />
				</Grid>
				<Grid className="quiz-grid" item md={9} xs={8}>
					<QuizSection />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Protocol;
