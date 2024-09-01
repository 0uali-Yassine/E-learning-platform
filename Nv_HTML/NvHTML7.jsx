import { useGlobalContext } from '../../../../Context';

function NvHTML7({course}) {
  
  const {nextStepsLessons} = useGlobalContext();
  const nextStep =  () => {
    nextStepsLessons();
  };
  
  return (
    <div className='flex flex-col gap-[10px] main-font select-none px-[10px] paraLearn'>
        <h1 className='text-[20px] text-center'>{course?.lessonName}</h1>
        <h1 className='text-[20px]  header-font text-center'>HTML Form</h1>

       <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Introduction to HTML Forms</h1>
          <p>
            Forms are a part of everyday life. When we use a physical form in real life, we write down information and give it to someone to process. Think of the times you’ve had to fill out information for various applications like a job, or a bank account, or dropped off a completed suggestion card — each instance is a form!
          </p>
          <p>
            Just like a physical form, an HTML <span className='bg-gray-300 px-[3px]'>{`<form>`}</span> element is responsible for collecting information to send somewhere else. Every time we browse the internet we come into contact with many forms and we might not even realize it. There’s a good chance that if you’re typing into a text field or providing an input, the field that you’re typing into is part of a <span className='bg-gray-300 px-[3px]'>{`<form>`}</span>!
          </p>
          <p>
          In this lesson, we’ll go over the structure and syntax of a <span className='bg-gra-300 px-[3px]'>{`<form>`}</span> and the many elements that populate it.
          </p>
         
          
       </div>

       <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>How a Form Works</h1>
          <p>
           We can think of the internet as a network of computers which send
            and receive information. Computers need an <em>HTTP request</em> to know how to communicate. The HTTP request instructs the receiving computer how to handle the incoming information. More information can be found in our article
           about <span className='text-blue-400 undeline'>HTTP requests</span>.
          </p>
          <p>
            The <span className='bg-gray-300 px-[3px]'>{`<form>`}</span> element is a great tool for collecting information, but then we need to send that information somewhere else for processing. We need to supply the <span className='bg-gray-300 px-[3px]'>{`<form>`}</span> element with both the location of where the <span className='bg-gray-300 px-[3px]'>{`<form>`}</span>‘s information goes and what HTTP request to make. Take a look at the sample <span className='bg-gray-300 px-[3px]'>{`<form>`}</span> below:
          </p>
          <div className='w-auto bg-[#10162F] text-white font-mono p-[5px] m-auto'>
            <span className='text-red-500'>{`<form `}</span>
            <span className='text-[#B4D353]'>action</span>=<span className='text-[#FFE083]'>"/example.html"</span>
            <span className='text-[#B4D353]'>method</span>=<span className='text-[#FFE083]'>"POST"</span>
            <span className='text-red-500'>{`>`}</span>
            <span className='text-red-500'>{`</form>`}</span>
          </div>
          <p>
            In the above example, we’ve created the skeleton for a <span className='bg-gray-300 px-[3px]'>{`<form>`}</span> that will send information to <strong>example.html</strong> as a POST request:
          </p>
          <ul className='paraLearn marker:text-sky-400 list-disc pl-7'>
            <li>The <span className='font-mono bg-gray-300 px-[3px]'>action</span> attribute determines where the information is sent.</li>
            <li>The <span className='font-mono bg-gray-300 px-[3px]'>method</span> attribute is assigned a HTTP verb that is included in the HTTP request.</li>
          </ul>
          <p>
              Note: HTTP verbs like POST do not need to be capitalized for the request to work, but it’s done so out of convention. In the example above we could have written <span className='bg-gray-300 px-[3px] font-mono'>method="post"</span> and it would still work.
          </p>
          <h1 className='hreadr-font text-center text-[17px]'><em className='text-red-400'>Note:</em>This section is not completed yet...!</h1>
       </div>



        <button onClick={nextStep} className='border mb-[5px] border-black font-medium register bg-yellow-300 p-[5px]'>Next</button>
    </div>
  )
}

export default NvHTML7;