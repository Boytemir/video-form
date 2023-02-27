import { useSelector } from 'react-redux'
import { Input, TextArea} from '../ui'

const Form = (props) => {

  const {isLoading} = useSelector(state => state.article)

  const {title, setTitle, description, setDescription, body, setBody, formSubmit} = props
  return (
    <div>
      <form onSubmit={formSubmit}>
        <Input label={'Title'} state={title} setState={setTitle}/> <br />
        <TextArea label={'Description'} state={description} setState={setDescription} /> <br />
        <TextArea label={'Body'} state={body} setState={setBody} height={'300px'} />
        <button className="w-100 btn btn-lg btn-primary mt-3" disabled={isLoading} type="submit">
            {isLoading ? 'Loading...' : 'Create'}
        </button>
      </form>
    </div>
  )
}

export default Form