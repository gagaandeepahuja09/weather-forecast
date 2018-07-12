import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const chart = (props) => (
	<div>
		<Sparklines height = {120} width = {180} data = {props.data} >
					<SparklinesLine color = {props.color} />
					<SparklinesSpots />
		</Sparklines>
	</div>
);

export default chart;