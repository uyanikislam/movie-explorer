import Movies from '@/components/Movies';
import React from 'react'

const Page = async({params}) => {
    const keyword = params.keyword;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=554a94fc23039dcee2b077dfcbeae578&query=${keyword}&language=en-US&include_adult=false`)
    const data = await res.json();

    console.log(data?.results, "data")
  
    return (
    <div>
      {
        !data?.results ?
        <div>Not Found</div> :
        <div className='flex items-center flex-wrap gap-3'>
            {

                data?.results?.map((dt,i) => (
                    <Movies key={i} dt={dt}/>
                ))

            }

        </div>
      }
    </div>
  )
}

export default Page
