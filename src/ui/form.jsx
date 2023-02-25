import { Input, TextArea} from '../ui'

const Form = ({title, setTitle, description, setDescription, body, setBody}) => {
  return (
    <div>
      <form>
        <Input label={'Title'} state={title} setState={setTitle}/> <br />
        <TextArea label={'Description'} state={description} setState={setDescription} /> <br />
        <TextArea label={'Body'} state={body} setState={setBody} height={'300px'} />
        <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
            Create
        </button>
      </form>
    </div>
  )
}

export default Form