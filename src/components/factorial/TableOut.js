import React from 'react'

const TableOut = (props) => {
  const { factorial } = props;
  console.log('props de tableout: ', props);
  return (
    <>
      {props.showElement &&
          (<table className="table">
          <thead>
            <tr>
              <th scope="col">N ° !</th>
              <th scope="col">r e s</th>
            </tr>
          </thead>
          <tbody>
            {factorial.map((row, i) => {
              return (
                <tr key={i}>
                  <td>{i} ! = </td>
                  <td>{row}</td>
                </tr>
              )
            })}
          </tbody>
        </table>)}
    </>
  )
}

export default TableOut; 
