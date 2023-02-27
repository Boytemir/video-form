import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Routes, Route} from 'react-router-dom'
import { ArticleDetail, CreateArticle, Login, Main, Navbar, Register } from './components';
import { getItem } from './helpers/persistance-storage';
import ArticleService from './service/article';
import AuthService from './service/auth';
import { getArticlesStart, getArticleSuccess } from './slice/article';
import { signUserSuccess } from './slice/auth';

function App() {
  const dispatch = useDispatch()

  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = getItem('token')
    if(token) {
      getUser()
    }
  }, [])

  return(
    <div>
      <Navbar/>
      <div className='container'>
       <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/article/:slug' element={<ArticleDetail/>} />
        <Route path='/create-article' element={<CreateArticle/>} />
       </Routes>
      </div>
    </div>
  )
}

export default App;