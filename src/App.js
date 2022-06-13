import { Table } from 'react-bootstrap'
function App() {
  return (
    <>
      <h1>This is my first page.</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>UserName</th>
            <th>UserLastName</th>
            <th>Email</th>
            <th>MobileNo.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>1</td>
          <td>Anku</td>
          <td>Singh</td>
          <td>Singhanku67@gmail.com</td>
          <td>9340660871</td>
          </tr>
          <tr>
          <td>2</td>
          <td>Prince</td>
          <td>Singh</td>
          <td>SinghPrince@gmail.com</td>
          <td>6232299099</td>
          </tr>
          

        </tbody>
      </Table>
    </>
  );
}


export default App;
