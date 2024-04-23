import './App.css';
import schema from './schema'
import { useQuery } from 'jsonapi-react'
import { ApiClient, ApiProvider } from 'jsonapi-react'
import { Routes, Route, useParams } from 'react-router-dom';

const client = new ApiClient({
  url: 'http://localhost:3000/api/v1',
  schema,
})

function Pages() {
  const { id } = useParams()

  const { data, meta, error, isLoading, isFetching } = useQuery(['folders', {
    filter: {
      folder_id: "null"
    }
  }])

  if(data){
    return (
        data.map(folder => <li key={folder.id}><a href={"folder/"+folder.id}>{folder.name}</a></li>)
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
