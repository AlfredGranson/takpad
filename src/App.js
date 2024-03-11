import { ApiClient, ApiProvider } from 'jsonapi-react'
import schema from './schema'
import { useQuery } from 'jsonapi-react'
import './App.css';

const client = new ApiClient({
  url: 'http://localhost:3000/api/v1',
  schema,
})

function Pages() {
  const { data, meta, error, isLoading, isFetching } = useQuery('pages')

  if(data){
    return (
        data.map(page => <li>{page.title}</li>)
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          We here..
        </p>
        <ApiProvider client={client}>
          <Pages />
        </ApiProvider>
      </header>
    </div>
  );
}

export default App;
