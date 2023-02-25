import { useState } from 'react'
import {Form} from '../ui'

const CreateArticle = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
  return (
    <div className='text-center'>
        <h1 className="fs-2">Create article</h1>
        <div className='w-75 mx-auto'>
           <Form title={title} setTitle={setTitle} description={description} setDescription={setDescription} body={body} setBody={setBody} />
        </div>
    </div>
  )
}

export default CreateArticle