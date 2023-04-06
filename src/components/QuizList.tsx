import { Box, Stack, Typography } from '@mui/material';
import questionIcon from '../assets/question-icon.svg';

interface Quiz {
	quizNames: string[];
}

const QuizList = ({ quizNames }: Quiz) => {
	return (
		<Box className="quiz-list">
			{quizNames.map((quizName, index) => (
				<Stack
					key={index}
					className="mb-30"
					direction="row"
					alignItems="center"
					justifyContent="left"
				>
					<img src={questionIcon} className="quiz-img" />

					<Typography className="quiz-name">{quizName}</Typography>
				</Stack>
			))}
		</Box>
	);
};

export default QuizList;
