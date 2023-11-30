import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { CallApi } from '../utils/CallApi';
import { useNavigate, createSearchParams, Navigate } from 'react-router-dom'

const Search = () => {
  const [Suggestions, setSuggestions] = useState(null);
  const [Searchterm, setSearchterm] = useState('');
  const [category, setCategory] = useState('All')
  const navigate = useNavigate();

  const onhandleSubmit = (e) => { 
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${
        createSearchParams({
          category:`${category}`,
          Searchterm:`${Searchterm}` 
        })
      }`
    })

    setSearchterm("");
    setCategory("All");
   };

  const getSuggestions = () => {
    CallApi(`data/suggestions.json`)
    .then((suggestionResults) =>{
      setSuggestions(suggestionResults);
    })
  }

  useEffect(() =>{
    getSuggestions();
  }, []);

  return (
    <div className='w-[100%]'>
        <div className='flex items-center h-10 bg-amazonclone-yellow rounded'>
            <select onChange={(e) => setCategory(e.target.value)}
            className='p-2 bg-gray-300 text-black border text-xs xl:text-sm'>
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option>Mobiles</option>
            </select>
            <input className='flex grow items-center h-[100%] rounded-l text-black' type='text' 
            value={Searchterm} onChange={(e) =>setSearchterm(e.target.value)}/>
            <button onClick={onhandleSubmit} className='w-[45px]'>
                <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900' />
            </button> 
        </div>
        {
          Suggestions && 
          <div className='bg-white text-black w-full z-40 absolute'>
            {
              Suggestions.filter((suggestion) =>{
                const currentsearchterm = Searchterm.toLowerCase();
                const title = suggestion.title.toLowerCase();
                return(
                  currentsearchterm &&
                  title.startsWith(currentsearchterm) &&
                  title !== currentsearchterm
                ) 
              })
              .slice(0,10)
              .map((suggestion)=>{
                <div key={suggestion.id} onClick={() => setSearchterm(suggestion.title)}>
                  {suggestion.title}
                </div>
              })
            }
          </div>
        }
    </div>
  )
}

export default Search