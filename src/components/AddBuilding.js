import React from 'react';

class AddBuilding extends React.Component {
    
    submit(){
        this.props.dataUpdate(this.props.dataUpdate);
    }

	render() {
        return (
            <form>
            <input 
            type="text" 
            placeholder = "Enter Name, Code, Address, and Coordinates"
            onDoubleClick = {this.submit.bind(this)}
            />
        </form>
        );
	}
}
export default AddBuilding;