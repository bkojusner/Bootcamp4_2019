import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding} = this.props;
		const build = data[selectedBuilding];
		return (
			<div>
				<p>
					<h2>{build.name}</h2>
					<b>code:</b> {build.code}<br/>
					<b>address:</b> {build.address}<br/>
					<b>coordinates:</b> <br/>
					&nbsp;	Latitude: {build.coordinates.latitude}<br/>
					&nbsp;	Longitude: {build.coordinates.longitude}<br/>
				</p>

			</div>
		);
		/*return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);*/
	}
}
export default ViewBuilding;