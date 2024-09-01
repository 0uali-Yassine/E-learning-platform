import React from 'react'
import { NavLink } from 'react-router-dom';

function About() {
  return (
    <div className='about flex flex-col gap-[10px] w-[70%] mx-auto mt-[30px] shadow-md border select-none main-font text-[15px] p-[30px]'>
      <div>
        <h1 className='header-font text-[18px] font-bold'>About Us</h1>
        <p>
          Welcome to <span className='header-font font-medium underline'> Educate</span>, where education meets innovation.
        </p>
      </div>

      <div>
        <h1 className='header-font text-[18px] font-bold'>Who We Are</h1>
        <p>
          At <span className='header-font font-medium underline'> Educate</span>, we are a dedicated team passionate 
          about transforming the way you learn. Our platform is designed to provide a seamless educational
           experience by integrating front-end,
          backend, and data synchronization technologies, ensuring a smooth and efficient learning journey.
        </p>
      </div>

      <div>
        <h1 className='header-font text-[18px] font-bold'>Our Mission</h1>
        <p>
          Our mission is to empower learners and educators by offering a robust,
           user-friendly e-learning platform that meets their needs in today's digital age.
            We strive to create a dynamic environment that fosters growth,
           knowledge, and connectivity.
        </p>

      </div>
      
      <div>
        <h1 className='header-font text-[18px] font-bold'>What We Offer</h1>
        <ul   className='marker:text-yellow-400 list-disc pl-7 space-y-3'>
          <li>
            <span className='header-font font-medium'>Engaging Front-End Design:</span> Our intuitive and responsive interface ensures that you can easily navigate and utilize the platform,
            whether you’re accessing it from a desktop or a mobile device.
          </li>
          <li>
            <span className='header-font font-medium'>Powerful Backend Infrastructure:</span> Built on cutting-edge technology, our backend is secure,
            reliable, and scalable, capable of handling diverse educational content and user activities.
          </li>
          <li>
            <span className='header-font font-medium'>Seamless Data Sync:</span> We prioritize data integrity and real-time synchronization,
            ensuring that your progress and information are always up-to-date and accessible across all devices.
          </li>
          <li></li>
        </ul>
      </div>

      <div>
        <h1 className='header-font text-[18px] font-bold'>Why Choose Us?</h1>
        <ul  className='marker:text-violet-400 list-disc pl-7 space-y-3'>
          <li>
            <span className='header-font font-medium'>Learner-Centric Design:</span> We place the learner at the heart of our development process,
            constantly refining our platform based on your feedback and evolving educational needs.
          </li>
          <li>
            <span  className='header-font font-medium'>Comprehensive Course Offerings:</span> From beginner to advanced levels, 
            our diverse range of courses covers a wide array of subjects to cater to all types of learners.
          </li>
          <li>
            <span className='header-font font-medium'>Expert Instructors:</span> Our courses are designed and delivered by industry
            experts and experienced educators, ensuring high-quality content and effective learning experiences.
          </li>
        </ul>
      </div>

      <div className='flex flex-col gap-[8px]'>
        <h1 className='header-font text-[20px] font-bold'>Join Us on Our Learning Journey</h1>
        <p>
          We invite you to explore <span className='header-font font-medium underline'>Educate</span> and discover how our platform can enhance your educational experience. Whether you're a student, a professional seeking to upskill,
          or an educator looking for innovative teaching tools, there's something here for everyone.
        </p>
        <p>
          Thank you for choosing  <span className='header-font font-medium underline'>Educate</span>. 
          Together, let’s make learning accessible, engaging, and effective.
        </p>
        <p>
          For any inquiries or support, please contact us at  <NavLink to='/contact' className='font-bold header-font hover:underline'>Contact</NavLink>.
        </p>
      </div>

    </div>
  )
}

export default About;