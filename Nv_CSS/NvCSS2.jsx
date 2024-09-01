import { useGlobalContext } from "../../../../Context";


function NvCSS2({course}) {
  const {nextStepsLessons} = useGlobalContext();
  
  const nextStep = ()=> {
    nextStepsLessons();
  }

  return (
    <div className='flex flex-col gap-[20px] main-font select-none px-[10px] paraLearn'>
      <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
      <h1 className='text-[20px] font-bold header-font text-center'>Setup and Syntax</h1>
      
      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Type</h1>
        <p>
          Remember that <em>declarations</em> are a fundamental part of CSS because they
          apply a style to a selected element. But how do you decide which elements will
          get the style? With a <span title="Selectors are used to style HTML elements according to their type and/or attribute(s)." className="text-blue-400 underline">selector</span>.
        </p>
        <p>
          A selector is used to target the specific HTML element(s) to be styled by the declaration.
          One selector you may already be familiar with is the <em>type</em> selector.
          Just like its name suggests, the type selector matches the <em>type</em> of the element in the HTML document.
        </p>
        <p>
          In the previous lesson, you changed the color of a paragraph element.
        </p>
        <div className='w-[150px] bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">p </span><span>{`{`}</span>
          <br />
          <span className="text-[#83FFF5] ml-[15px]">color</span>:<span className="text-[#B3CCFF]">green</span>;
          <br />
          <span className="ml-[10px]">{`}`}</span>
        </div>
        <p>
          This is an instance of using the type selector! The element type is <span className="bg-gray-300 px-[3px] font-mono">p</span>, which comes from the HTML <span className="bg-gray-300 px-[3px] font-mono">{`<p>`}</span> element.
        </p>
        <p>
         Some important notes on the type selector:
        </p>
        <ul className='marker:text-sky-400 list-disc pl-7'>
          <li>The type selector does not include the angle brackets.</li>
          <li>
           Since element types are often referred to by their opening tag name, the type selector is sometimes referred to as the tag <em>name</em> or <em>element</em> selector.
          </li>
        </ul>
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Universal</h1>
        <p>
         You learned how the <em>type selector</em> selects all elements of a given type. 
         Well, the <em>universal selector</em> selects all elements of <em>any</em> type.
        </p>
        <p>
         Targeting all of the elements on the page has a few specific use cases, 
         such as resetting default browser styling, or selecting all <span  className="text-blue-400 underline">children</span> 
         of a parent element. Don’t worry if you don’t understand the use cases right now—we will get to them later on in our Learn CSS journey.
        </p>
        <p>
          The universal selector uses the <span className="bg-gray-300 px-[3px] font-mono">*</span> character in the same place where you specified the type selector in a ruleset, like so:
        </p>
        <div className='w-[150px] bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">* </span><span>{`{`}</span>
          <br />
          <span className="text-[#83FFF5] ml-[15px]">font-family</span>:<span className="text-[#B3CCFF]"> Verdana</span>;
          <br />
          <span className="ml-[10px]">{`}`}</span>
        </div>
        <p>
          In the code above, every text element on the page will have its <span title="Shorthand property that sets different properties for an element's font in a single declaration." className="text-blue-400 underline">font</span>
          changed to <span className="bg-gray-300 px-[3px] font-mono">Verdana</span>.
        </p>
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Internal Stylesheet</h1>
        <p>
          As previously stated, inline styles are not the best way to style HTML elements. 
          If you wanted to style, for example, multiple <span className="bg-gray-300 px-[3px] font-mono">{`<h1>`}</span> <span className="text-blue-400 underline" title="Represents a text heading for a section of content, with <h1> being the highest level of heading and <h6> being the lowest.">elements</span>, you would have to add inline styling to each element manually. In addition, you would also have to maintain the HTML code when additional <span>{`<h1>`}</span> elements are added.
        </p>
        <p>
          Fortunately, HTML allows you to write CSS code in its own dedicated section with a <span className="bg-gray-300 px-[3px] font-mono">{`<style>`}</span> element nested inside of the <span className="bg-gray-300 px-[3px] font-mono">{`<head>`}</span> element. The CSS code inside the <span className="bg-gray-300 px-[3px] font-mono">{`<style>`}</span> element
          is often referred to as an <em>internal stylesheet</em>.
        </p>
        <p>
          An internal stylesheet has certain benefits and use cases over inlines styles, but once again, it’s not best practice (we’ll get there, we promise). Understanding how to use internal stylesheets is nonetheless helpful knowledge to have.
        </p>
        <p>
        To create an internal stylesheet, a <span className="bg-gray-300 px-[3px] font-mono">{`<style>`}</span> 
        element must be placed inside of the <span className="bg-gray-300 px-[3px] font-mono">{`<head>`}</span> element.
        </p>

        <div className='w-[150px] bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<head>`}</span>
          <br />
          <span className="text-red-500 ml-[15px]">{`<style>`}</span>
          <br />
          <br />
          <span className="text-red-500 ml-[15px]">{`</style>`}</span>
          <br />
          <span className="text-red-500">{`</head>`}</span>
        </div>
        <p>
          After adding opening and closing <span className="bg-gray-300 px-[3px] font-mono">{`<style>`}</span> tags in the head section, you can begin writing CSS code.
        </p>
        <div className='w-[250px] bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<head>`}</span>
          <br />
          <span className="text-red-500 ml-[15px]">{`<style>`}</span>
          <br />
          <span className="text-red-500 ml-[25px]">p </span><span>{`{`}</span>
          <br />
          <span className="text-[#B4D353] ml-[35px]">font-size:</span><span className="text-[#B4D353]">20px</span><span>;</span>
          <br />
          <span className="text-[#B4D353] ml-[35px]">color:</span><span className="text-red-500">red</span><span>;</span>
          <br />
          <span className="ml-[25px]">{`}`}</span>
          <br />
          <span className="text-red-500 ml-[15px]">{`</style>`}</span>
          <br />
          <span className="text-red-500">{`</head>`}</span>
        </div>
        <p>
          The CSS code in the example above changes the color of all paragraph 
          text to red and also changes the size of the text to 20 pixels. Note how the syntax of the CSS code matches
         (for the most part) the syntax you used for inline styling. The main difference is that you can specify which elements to apply the styling.
        </p>
      </div>

      <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>External Stylesheet</h1>
          <p>
            Developers avoid mixing code by storing HTML and CSS code in separate files (HTML files contain only HTML code, and CSS files contain only CSS code).
          </p>
          <p>
            You can create an external stylesheet by using the <span className="bg-gray-300 px-[3px] font-mono">.css</span> file name extension, like so: <span className="bg-gray-300 px-[3px] font-mono">style.css</span>
          </p>
          <p>
            With an external stylesheet, you can write all the CSS code needed to style a page without sacrificing the readability and maintainability of your HTML file.
          </p>
      </div>

    
      <button onClick={nextStep} className='border mb-[5px] border-black font-medium register bg-yellow-300 p-[5px] header-font'>Next</button>
    </div>
  )
}

export default NvCSS2;