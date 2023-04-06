import { Box, Button, List, ListItem, Typography } from '@mui/material';

const Question = () => {
	const options = [
		'Lorem ipsum dolor sit amet',
		'Lorem ipsum dolor sit amet',
		'Lorem ipsum dolor sit amet',
		'Lorem ipsum dolor sit amet',
	];
	return (
		<Box className="question-container">
			<Typography className="question-heading mb-18">Question 1</Typography>
			<Typography className="mb-14">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation?
			</Typography>
			<List className="options-list">
				{options.map((option, index) => (
					<ListItem key={index} className="option mb-14">
						{option}
					</ListItem>
				))}
			</List>
			<Box className="submit-btn-container">
				<Button className="submit-btn" variant="outlined" disabled>
					Submit
				</Button>
			</Box>
		</Box>
	);
};

export default Question;
