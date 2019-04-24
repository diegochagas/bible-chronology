import React from 'react';
import './GenealogyTable.css';

export default class GenealogyTable extends React.Component {
  render(){
    return(
      <div className="genealogy-table">
        <h3>{this.props.tableTitle}</h3>
        <table className="genealogy">
          <thead>
            <tr>
              <th className="years">Data Anno Domini - AD (AC - Antes de Cristo)</th>
              <th className="years">Data Anno Mundi - AM</th>
              <th className="events">Evento</th>
            </tr>
          </thead>
          <tbody>
            {this.props.genealogies.map(genealogy => {
              return (
                <tr key={genealogy.AnnoMundi}>
                  <td>{genealogy.AnnoDomini}</td>
                  <td>{genealogy.AnnoMundi}</td>
                  <td>{genealogy.Events}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
