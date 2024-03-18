import { styles } from '../../../app/styles/style';
import Image from 'next/image';
import React from 'react';
import ReviewCard from '../Review/ReviewCard';
type Props = {}

export const reviews = [
    {
        name: "Shazid Karim",
        avatar:"https://randomuser.me/api/portraits/men/1.jpg",
        profession: 'student | Daffodil International University',
        comment: 'Taking this course was an incredibly rewarding experience. The instructors clear explanations and engaging teaching style made complex topics easy to understand. I appreciated the hands-on projects and real-world examples, which helped solidify my understanding of the material. Additionally, the course community was supportive and provided valuable insights and feedback. Overall, I highly recommend this course to anyone looking to deepen their knowledge in [subject/topic]!',
    },
    {
        name: "Shazid Karim",
        avatar:"https://randomuser.me/api/portraits/men/1.jpg",
        profession: 'student | Daffodil International University',
        comment: 'I recently completed this course and I must say it exceeded my expectations. The content was comprehensive and well-organized, covering everything from basics to advanced concepts. What I found particularly valuable were the practical exercises and quizzes that reinforced learning at every step. The instructors passion for the subject shone through in every lecture, making the material engaging and enjoyable to learn. The course also provided ample opportunities for interaction and discussion with fellow students, fostering a sense of community and collaboration. Overall, I feel much more confident in [subject/topic] after completing this course. Highly recommended for anyone looking to upskill or delve deeper into the field!"',
    },
    {
        name: "Shazid Karim",
        avatar:"https://randomuser.me/api/portraits/men/1.jpg",
        profession: 'student | Daffodil International University',
        comment: 'I cannot recommend this course highly enough! The instructors expertise and dedication to teaching were evident throughout the entire learning journey. The course content was not only comprehensive but also up-to-date with the latest industry trends. The practical projects and assignments were challenging yet rewarding, allowing me to apply what I learned in real-world scenarios. What truly sets this course apart is the supportive community it fosters. The forums and discussion boards provided an invaluable platform for sharing insights, troubleshooting problems, and connecting with peers from around the globe. Whether youre a beginner or an experienced professional, this course offers something for everyone. Enroll today and take your skills to the next level!"',
    },
    {
        name: "Shazid Karim",
        avatar:"https://randomuser.me/api/portraits/men/1.jpg",
        profession: 'student | Daffodil International University',
        comment: 'I cant say enough good things about this course! From start to finish, it was an enriching and enlightening experience. The instructors passion for the subject was contagious, making every lesson engaging and exciting. The course content was well-organized and comprehensive, covering all the essential topics and providing valuable insights into advanced concepts. What truly stood out for me was the hands-on approach to learning."',
    },
    {
        name: "Shazid Karim",
        avatar:"https://randomuser.me/api/portraits/men/1.jpg",
        profession: 'student | Daffodil International University',
        comment: 'I cannot recommend this course highly enough! The instructors expertise and dedication to teaching were evident throughout the entire learning journey. The course content was not only comprehensive but also up-to-date with the latest industry trends. The practical projects and assignments were challenging yet rewarding, allowing me to apply what I learned in real-world scenarios.',
    },
    {
        name: "Shazid Karim",
        avatar:"https://randomuser.me/api/portraits/men/1.jpg",
        profession: 'student | Daffodil International University',
        comment: 'Embarking on this course journey was one of the best decisions Ive made for my professional development. Let me start by praising the instructor - their depth of knowledge and ability to convey complex concepts in an accessible manner is truly remarkable. Each module was meticulously crafted, offering a perfect balance of theory and practical application. What sets this course apart is the emphasis on hands-on learning. The interactive exercises and real-world projects not only reinforced the theoretical concepts but also provided invaluable practical experience. Furthermore, the course materials were comprehensive and well-structured, making it easy to follow along and reference back to key concepts',
    },
]

const Reviews = (props: Props) => {
  return (
    <div className='w-[90%] 800px:w-[85%] m-auto'>
        <div className='w-full items-center 800px:flex'>
            <div className='800px:w-[50%] w-full'>
                <Image 
                src={require("../../../public/business image.jpg")}
                alt='business image'
                height={500}
                width={500}
                >   

                </Image>
            </div>
            <div className='800px:w-[50%] w-full'>
                <h3 className={`${styles.title} lg:text-4xl`}>
                    Our Students Are <span className='text-purple-600'> Our Strength</span>{" "}
                    <br />  See What they say about Us
                </h3>
                <br />
                <p className={styles.label}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                </p>
            </div>
            <br />
            <br />
        </div>
        <br />
        <br />
            <div className='grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]'>
                {
                    reviews && reviews.map((i,index)=><ReviewCard item={i} key = {index}/>)
                }
            </div>

    </div>
  )
}

export default Reviews