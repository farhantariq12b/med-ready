import { Box, Typography, Stack, LinearProgress } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import QuizList from './QuizList';
import ProtocolImage from '../assets/protocol-image.svg';

const DetailSection = () => {
	const quizNames = ['Name of the quiz', 'Name of the quiz'];
	return (
		<Box className="detail-section">
			<Stack
				className="mb-18"
				direction="row"
				alignItems="center"
				justifyContent="space-evenly"
			>
				<div className="back-icon mr-18">
					<KeyboardArrowLeftIcon />
				</div>
				<Typography className="heading">
					MedReady Injection Training: Flare Protocol
				</Typography>
			</Stack>
			<Box className="mb-18" display="flex" alignItems="center">
				<Box width="100%" mr={1}>
					<LinearProgress
						className="linear-progress"
						variant="determinate"
						value={0}
					/>
				</Box>
				<Box minWidth={35}>
					<Typography variant="body2" color="textSecondary">
						0/4
					</Typography>
				</Box>
			</Box>
			<img src={ProtocolImage} className="protocol-img mb-18" />
			<QuizList quizNames={quizNames} />
		</Box>
	);
};

export default DetailSection;
