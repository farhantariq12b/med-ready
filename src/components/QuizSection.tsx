import { Box, LinearProgress, Typography } from '@mui/material';
import Question from './Question';

const QuizSection = () => {
	return (
		<Box className="quiz-section">
			<Typography className="activity-heading mb-12">
				Name of the quiz activity
			</Typography>
			<Typography className="sub-heading mb-30">
				Aenean pulvinar elit neque. Mauris sodales pharetra mi quis porttitor
			</Typography>
			<Box className="mb-18" display="flex" alignItems="center">
				<Box width="32%" mr={1}>
					<LinearProgress
						className="question-progress-bar"
						variant="determinate"
						value={50}
					/>
				</Box>
				<Box minWidth={35}>
					<Typography variant="body2" color="textSecondary">
						1 of 2
					</Typography>
				</Box>
			</Box>
			<Question />
		</Box>
	);
};

export default QuizSection;
