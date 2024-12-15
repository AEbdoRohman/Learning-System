import React from 'react'

const BlogPage = () => {
  return (
    <section>
        <div className='min-h-[100vh] bg-[url("/src/assets/images/background.png")] bg-cover bg-center'>
                <div className='pt-[4.8rem] container '>
                    <div className='flex items-center flex-col justify-center px-[5%] py-[3%]'>
                        <h1 className='block text-[2rem] font-[700] text-mainColor px-[5%] mt-[2%] text-center'>بعض النصائح التي سوف تفيدك و تطور من مهاراتك الدراسية و الفنية و العملية </h1>
                        <div className=' mt-[1%] text-gray-600 font-semibold flex'><p>2024</p><p className='px-[5px]'>يونيه</p><p>13</p></div>
                        <img src="/src/assets/images/modawana.jpg" alt="image" className='shadow-lg mt-[3%] w-[75%] rounded-lg'  />
                    </div>
                    
                    <div className='mt-[2%] mb-[8%] py-[3%] px-[5%] shadow-lg  bg-[#f3f4f6] rounded-lg text-[1.25rem] text-center'>
                    <h1 className='block text-[2rem] font-[700] mb-[3%] text-mainColor px-[5%] mt-[2%] text-center'> محتوي المدونة </h1>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facere aspernatur voluptatem iure iste maxime vel consequuntur mollitia! Est praesentium voluptatem veniam. Vel sunt neque ut temporibus rerum nesciunt exercitationem omnis quis pariatur eveniet? Nesciunt voluptatibus ex odio eius veniam blanditiis aperiam obcaecati nam molestiae qui odit nostrum quod cupiditate, enim ea sint omnis neque quos. Possimus fugiat molestiae ad.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus dignissimos officiis in debitis quis mollitia voluptatum dolores quisquam nihil, molestias nobis quaerat similique! Maiores praesentium earum eaque iusto! Alias doloribus mollitia ipsum autem praesentium fuga ab deserunt neque at reprehenderit quasi est impedit sequi voluptatem, maxime qui, incidunt pariatur.
                    </div>
                </div>
        </div>
    </section>
  )
}

export default BlogPage