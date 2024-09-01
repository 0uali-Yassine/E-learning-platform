import { useGlobalContext } from '../../../../Context';
import semanticSvg from '../../../../assets/SemanticVSNonSemantic_Diagram_Updated_1.svg';
function NvHTML10({course}) {
  
  const {nextStepsLessons} = useGlobalContext();
  const nextStep =  () => {
    nextStepsLessons();
  };
  
  return (
    <div className='flex flex-col gap-[20px] main-font select-none px-[10px] paraLearn'>
        <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
        <h1 className='text-[20px] font-bold header-font text-center'>Semantic HTML</h1>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Introduction to Semantic HTML</h1>
          <p>
            When building web pages, we use a combination of non-semantic HTML and <em>Semantic HTML</em>. The word semantic means 
            “relating to meaning,” so semantic elements provide information
            about the content between the opening and closing tags.
          </p>

          <p>
            By using Semantic HTML, we select HTML elements based on their meaning,
             not on how they are presented. Elements such as <span className='bg-gray-300 px-[3px] font-mono'>{`<div>`}</span> and <span className='bg-gray-300 px-[3px] font-mono'>{`<span>`}</span> are not semantic elements since they provide no context as to what is inside of those tags.
          </p>
          <p>
            For example, instead of using a <span className='bg-gray-300 px-[3px] font-mono'>{`<div>`}</span> element to contain our header information, we could use a <span className='bg-gray-300 px-[3px] font-mono'>{`<header>`}</span> element,
            which is used as a heading section. By using a <span className='bg-gray-300 px-[3px] font-mono'>{`<header>`}</span> tag instead of a <span className='bg-gray-300 px-[3px] font-mono'>{`<div>`}</span>,
            we provide context as to what information is inside of the opening and closing tag.
          </p>
          <p className='header-font font-semibold'>
            Why use Semantic HTML?
          </p>
          <ul className='marker:text-sky-400 list-disc pl-7'>
            <li>
              <strong>Accessibility</strong>: Semantic HTML makes webpages accessible for mobile devices 
              and for people with disabilities as well. This is because screen
              readers and browsers are able to interpret the code better.
            </li>
            <li>
              <strong>SEO</strong>: It improves the website SEO, or <em>Search Engine Optimization</em>,
              which is the process of increasing the number of people that visit your webpage. With better SEO, 
              search engines are better able to identify the content of your website and weight the most important content appropriately.
            </li>
            <li>
              <strong>Easy to Understand</strong>: Semantic HTML also makes the website’s source code easier to read for other web developers.
            </li>
          </ul>
          <p>
            To better understand this, you can think of comparing non-semantic HTML to going into a 
            store with no signs on the aisles. Since the aisles aren’t labeled, you don’t know what products are 
            in those aisles. However, stores that do have signs
            for each aisle make it a lot easier to find the items you need, just like Semantic HTML.
          </p>
          <h1 className='text-red-400 text-center header-font'>Instructions</h1>
          <p>
            Analyze the diagram and take note of key differences between non-semantic and semantic code.
          </p>
          <img src={semanticSvg} alt="svg" className='w-[80%] m-auto'/>
          <h1 className='hreadr-font text-center text-[17px]'><em className='text-red-400'>Note:</em>This section is not completed yet...!</h1>

        </div>

        <button onClick={nextStep} className='border border-black mb-[5px] register bg-yellow-300 p-[5px] header-font font-medium'>Next</button>
    </div>
  )
}

export default NvHTML10;