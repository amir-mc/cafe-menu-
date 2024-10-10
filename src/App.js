import Header from './Header/header';
import './App.css';
import CategoryList from './Category/categoryList';
import Loding from './Loding/loding';
import {useState} from 'react';
import Fastfood from './Fast/fast';

import useAxios from './useAxios';



function App() {

  const [url, setUrl]= useState('/FastFood/list');
  const [fastFoodItem , ,loading] = useAxios({
    url
  });
  
  
    const filterItems = (categoryId) => {
      setUrl( `/FastFood/list/${categoryId ? '?categoryId=' + categoryId:'' }`);
    }
  
    const searchItem = async(term) => {
     setUrl(`/FastFood/search/${term ? '?term=' + term : ""}`)
    }; 
  
  
    const renderContent = () => { 
      if(loading){
        return <Loding theme="dark"/>
      }
  
      if(fastFoodItem.length===0){
        return(
          <>
          <div className='alert alert-warning text-center'>
            برای کلید واژه ی فوق هیچ ایتمی یافت نشد
          </div>
         
          </>
        )
      }
  
  
        return <Fastfood fastFoodItem = {fastFoodItem}/>;
    }



  return (
    <div className='wrapper bg-fadad-dark'>
      <Header></Header>
  
      <CategoryList  filterItems={filterItems} searchItem={searchItem} >
       
      </CategoryList>
      <div className="container">
        {
          renderContent()
        }
      </div>

    </div>
 
);
}

export default App;
