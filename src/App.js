import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Routes, Route} from 'react-router-dom'
import { ArticleDetail, Login, Main, Navbar, Register } from './components';
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

  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = getItem('token')
    if(token) {
      getUser()
    }
    getArticles()
  }, [])

  return(
    <div>
      <Navbar/>
      <div className='container'>
       <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='article/:slug' element={<ArticleDetail/>} />
       </Routes>
      </div>
    </div>
  )
}

export default App;