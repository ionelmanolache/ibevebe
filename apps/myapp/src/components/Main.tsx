import { useAppContext } from '../hooks'
import { changeName } from '../app/reducer'

const Main: React.FC = () => {

    const ctx = useAppContext();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        ctx.appDispatch(changeName(e.target.value))
    }

    return (
        <div className="main">
            <div className="header">hello {ctx.name}!</div>
            <input type="text" onChange={onChange}
                placeholder='Enter your name' />
        </div>
    )
}

export default Main;