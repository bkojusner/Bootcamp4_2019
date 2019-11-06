import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';

var listSz = 148

class App extends React.Component {
  modData = this.props.data;

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 99999,
      data: this.modData
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value});
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({selectedBuilding: id});
  }

  dataUpdate(building) {
    listSz++;

    const input = {
      id: (listSz),
      name: building[0],
      code: building[1],
      address: building[2],
      coordinates: {
          latitude: parseFloat(building[3]),
          longitude: parseFloat(building[4])
      }
    }

    this.modData.push(input);
    this.setState({data: this.modData})
  }

  dataRemove(id) {
    this.modData.splice(id - 1, 1);

    listSz--;

    for(var i = id - 1; i < listSz; i++){
      this.modData[i].id = this.modData[i].id - 1;
    }

    this.setState({data: this.modData});
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
        filterText = {this.state.filterText}
        filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">

            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data = {this.state.data}
                    filterText = {this.state.filterText}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>

            <div className="column2">
              <ViewBuilding 
              data = {this.state.data}
              selectedBuilding = {this.state.selectedBuilding}
              />
              <RemoveBuilding
				      selectedBuilding = {this.state.selectedBuilding}
				      dataRemove = {this.dataRemove.bind(this)}
			        />
            </div>
          </div>
          <div className="row">
            </div>
            <h2>Add Building</h2>
              <AddBuilding
              dataUpdate = {this.state.dataUpdate}
              />
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
