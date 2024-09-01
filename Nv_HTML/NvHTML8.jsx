import { useGlobalContext } from '../../../../Context';
import inputRequired from '../../../../assets/required field.webp';

function NvHTML8({course}) {
  
  const {nextStepsLessons} = useGlobalContext();
  const nextStep =  () => {
    nextStepsLessons();
  };
  
  return (
    <div className='flex flex-col gap-[20px] main-font select-none px-[10px] paraLearn'>
        <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
        <h1 className='text-[20px] font-bold header-font text-center'>Form Validation</h1>
        <div className='flex flex-col gap-[10px]'>
         <h1 className='text-[20px] font-bold header-font'>Introduction to HTML Form Validation</h1>
          <p>
            Ever wonder how a login page actually works? Or why the 
            combination of a username and password grants you access to
            a website? The answers lie in validation. Validation is the concept of checking 
            user provided data against the required data.
          </p>
          <p>
          There are different types of validation. One type is <em>server-side validation</em>, 
          this happens when data is sent to another machine (typically a server)
           for validation. An example of this type of validation is the usage of a login page. The form on the login page accepts username and password input, then sends the data to a server that checks that the pair matches up correctly.
          </p>
          <p>
            On the other hand, we use <em>client-side validation</em> if we want to check the data on the browser (the client). This validation occurs before data is sent to the server. Different browsers implement client-side validation differently,
            but it leads to the same outcome.
          </p>
          <p>
            Shared among the different browsers are the benefits of using HTML5’s
            built-in client-side validation. It saves us time from having to send information to the server and wait
            for the server to send back confirmation or rejection of the data. This can also help us protect our server from malicious code or data from a malicious user. It also allows us to quickly give feedback to users for specific fields rather than having them fill in a form
            again if the data they input into the form was rejected.
          </p>
          <p>
          In this lesson, we’ll learn how to add some validation checks to our <span className='bg-gray-300 px-[3px] font-mono'>{`<form>`}</span>s!
          </p>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Requiring an Input</h1>
          <p>
            Sometimes we have fields in our <span className='bg-gray-300 px-[3px] font-mono'>{`<form>`}</span>s which are not optional, i.e. there must be information provided before we can submit it. To enforce this rule, we can add the required attribute to an <span className='font-mono bg-gray-300 px-[3px]'>{`<input>`}</span> element.
          </p>
          <p>
            Take for example:
          </p>
          <div className='w-auto bg-[#10162F] text-white font-mono p-[5px] m-auto'>
            <span className='text-red-500'>{`<form `}</span><span className='text-[#B4D353]'>action</span>=<span className='text-[#FFE083]'>"/example.html" </span><span className='text-[#B4D353]'>method</span>=<span className='text-[#FFE083]'>"POST"</span><span className='text-red-500'>{`>`}</span>
            <br />
            <span className='text-red-500 ml-[15px]'>{`<label `}</span><span className='text-[#B4D353]'>for</span>=<span className='text-[#FFE083]'>"allergies"</span><span>{`>`}</span>Do you have any dietary restrictions?<span className='text-red-500'>{`</label>`}</span>
            <br />
            <span className='text-red-500 ml-[15px]'>{`<br>`}</span>
            <br />
            <span className='text-red-500 ml-[15px]'>{`<input `}</span><span className='text-[#B4D353]'>id</span>=<span className='text-[#FFE083]'>"allergies" </span><span className='text-[#B4D353]'>name</span>=<span className='text-[#FFE083]'>"allergies" </span>
            <span className='text-[#B4D353]'>type</span>=<span className='text-[#FFE083]'>"text" </span><span className='text-[#B4D353]'>required</span><span>{`>`}</span>
            <br />
            <span className='text-red-500 ml-[15px]'>{`<br>`}</span>
            <br />
            <span className='text-red-500 ml-[15px]'>{`<input `}</span><span className='text-[#B4D353]'>type</span>=<span className='text-[#FFE083]'>"submit" </span> <span className='text-[#B4D353]'>value</span>=<span className='text-[#FFE083]'>"submit"</span><span className='text-red-500'>{'>'}</span>
            <br />
            <span className='text-red-500'>{`</form>`}</span>
          </div>
          <p>
          This renders a text box, and if we try to submit the <span className='bg-gray-300 px-[3px] font-mono'>{`<form>`}</span> without filling it out we get this message:
          </p>
          <img src={inputRequired} alt="svg" className='w-[50%] m-auto' />
          <p>
            The styling of the message varies from browser to browser,
            the picture above depicts the message in a Chrome browser.
            We’ll also continue to show these messages as they appear in Chrome in later exercises.
          </p>
          <p>
            Let’s see how it shows up in your browser!
          </p>
          <h1 className='hreadr-font text-center text-[17px]'><em className='text-red-400'>Note:</em>This section is not completed yet...!</h1>
          
        </div>


        <button onClick={nextStep} className='border mb-[5px] border-black font-medium register bg-yellow-300 p-[5px] header-font'>Next</button>
    </div>
  )
}

export default NvHTML8;