// import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi'
// import React, { useEffect, useState } from 'react'
// import { styles } from '../../../styles/style';
// import { HiMinus, HiPlus } from 'react-icons/hi';

// type Props = {}

// const FAQ = (props: Props) => {
//     const {data} = useGetHeroDataQuery("FAQ", {});
//     console.log('this is faq data:',data);
//     const [activeQuestion, setActiveQuestion] = useState(null);
//     const [questions, setQuestions] = useState<any[]>([]);


//     useEffect(() => {
//       if(data){
//         setQuestions(data.layout.faq);
//       }
//     }, [data]);

//     const toggleQuestion = (id:any) => {
//         setActiveQuestion(activeQuestion === id? null: id);
//     }
    

//   return (
//     <div>
//         <div className='w-[90%] 800px:w-[80%] m-auto'>
//             <h1 className={`${styles.title} 800px:text-[40px]`}>
//                 Frequently asked questions    
//             </h1>
//             <div className='mt-12'>
//                 <dl className='space-y-8'>
//                     {
//                         questions.map((q)=>(
//                             <div key={q.id}
//                             className={`${q.id !== questions[0]?._id && "border-t"} border-gray-200 pt-6`}>
//                                 <dt className='text-lg'>
//                                     <button className='flex items-center justify-between w-full text-left focus:outline-none' onClick={()=> toggleQuestion(q._id)}>
//                                     <span className='font-medium text-black dark:text-white'>
//                                         {q.question}
//                                     </span>
//                                     <span className='ml-6 flex-shrink-0'>
//                                         {
//                                             activeQuestion === q._id ? (
//                                                 <HiMinus className='h-6 w-6 text-black dark:text-white' />) : (
//                                                     <HiPlus className=' h-6 w-6 text-black dark:text-white' />)
//                                         }
//                                     </span>
//                                     </button>
//                                 </dt>
//                             {
//                                 activeQuestion === q._id && (
//                                     <dd className=' mt-2 pr-12'>
//                                         <p className='text-base font-Poppins text-black dark:text-white'>
//                                             {q.answer}
//                                         </p>
//                                     </dd>
//                                 )
//                             }
//                             </div>
//                         ))
//                     }
//                 </dl>
//             </div>
//             <br />
//             <br />
//             <br />
//         </div>
//     </div>
//   )
// }

// export default FAQ

import React, { useState } from 'react';
import { styles } from '../../../styles/style';
import { HiMinus, HiPlus } from 'react-icons/hi';

const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [
        {
            id: 1,
            question: "What courses are offered on eShikhon?",
            answer: "eShikhon offers a wide range of courses covering various subjects such as programming, design, business, language learning, and more. You can explore our course catalog to see all available options."
        },
        {
            id: 2,
            question: "How can I enroll in a course?",
            answer: "To enroll in a course on eShikhon, you need to sign up for an account if you haven't already. Once logged in, you can browse through the courses, select the one you're interested in, and follow the enrollment process."
        },
        {
            id: 3,
            question: "Are the courses free?",
            answer: "Some courses on eShikhon are free, while others may require payment. You can check the course details to see if there are any fees associated with it."
        },
        {
            id: 4,
            question: "What courses are available on eShikhon?",
            answer: "eShikhon offers a wide range of courses covering subjects such as programming, design, business, language learning, and more. You can explore our course catalog to see all available options."
        },
        {
            id: 5,
            question: "How can I enroll in a course?",
            answer: "To enroll in a course on eShikhon, you need to sign up for an account if you haven't already. Once logged in, you can browse through the courses, select the one you're interested in, and follow the enrollment process."
        },
        // Add more questions as needed
    ];

    const toggleQuestion = (id:any) => {
        setActiveQuestion(activeQuestion === id ? null : id);
    };

    return (
        <div>
            <div className='w-[90%] 800px:w-[80%] m-auto'>
                <h1 className={`${styles.title} 800px:text-[40px]`}>
                    Frequently <span className='text-purple-600'>asked</span> questions
                </h1>
                <div className='mt-12'>
                    <dl className='space-y-8'>
                        {questions.map((q) => (
                            <div key={q.id} className={`${q.id !== questions[0].id && "border-t"} border-gray-200 pt-6`}>
                                <dt className='text-lg'>
                                    <button className='flex items-center justify-between w-full text-left focus:outline-none' onClick={() => toggleQuestion(q.id)}>
                                        <span className='font-medium text-black dark:text-white'>
                                            {q.question}
                                        </span>
                                        <span className='ml-6 flex-shrink-0'>
                                            {activeQuestion === q.id ? (
                                                <HiMinus className='h-6 w-6 text-black dark:text-white' />) : (
                                                <HiPlus className=' h-6 w-6 text-black dark:text-white' />)
                                            }
                                        </span>
                                    </button>
                                </dt>
                                {activeQuestion === q.id && (
                                    <dd className=' mt-2 pr-12'>
                                        <p className='text-base font-Poppins text-black dark:text-white'>
                                            {q.answer}
                                        </p>
                                    </dd>
                                )}
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default FAQ;
