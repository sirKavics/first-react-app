import { useParams } from 'react-router-dom';

function Users() {
    console.log(useParams())
    const { username } = useParams()
    
    return <h1>{ username }</h1>
}

export default Users; 