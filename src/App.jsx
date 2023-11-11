import "./app.css"
import { Button, Table, Card } from '@mui/joy'
import olymps from './olymps'



function App() {
  return (
    
    <div className="center">
      <div>
        <h1>Список олимпиад</h1>
        <Table size={'md'} style={{ color: 'white', borderRadius: '10px' }} sx={{ width: "70%" }} borderAxis={"none"} variant={"outlined"}>
          <thead>
            <tr>
                <td style={{ width: '5rem' }}>Дата</td>
                <td style={{ width: '3rem' }}>Время</td>
                <td>Событие</td>
                <td>Сайт</td>
            </tr>
          </thead>
          <tbody>
            {olymps.map((row) => (
              <tr key={row.event}>
                <td style={{ width: '5rem' }}>{row.date}</td>
                <td style={{ width: '3rem' }}>{row.time}</td>
                <td>{row.event}</td>
                <td style={{ width: '3rem' }}><a href={`https://${row.url}`}><Button>{row.url.split("/")[0]} →</Button></a></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default App
