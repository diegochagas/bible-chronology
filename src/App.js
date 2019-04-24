import React from 'react';
import './App.css';
import GenealogyTable from './components/GenealogyTable';
import { getGenesisGenealogies, getExodusGenealogies } from './actions';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount(){
    this.props.getGenesisGenealogies();
    this.props.getExodusGenealogies();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>A Cronologia Bíblica</h1>
          <h2>A data do dilúvio na história bíblica</h2>
        </header>
        <GenealogyTable tableTitle="Genealogias de Gênesis" genealogies={this.props.genesis} />
        <GenealogyTable tableTitle="Genealogias do Êxodo" genealogies={this.props.exodus} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { genesis: state.genesis, exodus: state.exodus };
}

export default connect(mapStateToProps, {getGenesisGenealogies, getExodusGenealogies})(App);
