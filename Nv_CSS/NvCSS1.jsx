import { useGlobalContext } from "../../../../Context";
import anatomyCss from '../../../../assets/CSS_Anatomy-v2-nobgfill.svg';

function NvCSS1({course}) {
  const {nextStepsLessons} = useGlobalContext();
  
  const nextStep = ()=> {
    nextStepsLessons();
  }

  return (
    <div className='flex flex-col gap-[20px] main-font select-none px-[10px] paraLearn'>
      <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
      <h1 className='text-[20px] font-bold header-font text-center'>Setup and Syntax</h1>
      
      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Intro to CSS</h1>
        <p>
          While <span className="text-blue-400 underline">HTML</span> is the fundamental structure of every web page,
          it can be visually unappealing on its own. Cascading Style Sheets or CSS is
          a language web developers use to style the HTML content on a web page. If you’re interested in modifying <span title="The CSS color property sets the text color: css h1 { color: aqua; } It can be set with one of the following:" className="text-blue-400 underline">colors</span>,
          <span title="Shorthand property that sets different properties for an element's font in a single declaration." className="text-blue-400 underline">font</span> types, font sizes, images, element positioning,
          and more, CSS is the tool for the job!
        </p>
        <p>
          In this lesson, you’ll learn how to set up your CSS file structure and select which HTML elements you wish to style.
        </p>
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>CSS Anatomy</h1>
        <p>
          The diagram on the right shows two different methods,
          or syntaxes, for writing CSS code. The first syntax shows CSS applied as
           a <em>ruleset</em>, while the second shows it written as an <em>inline style</em>. Two different methods of writing CSS may seem a bit intimidating at first, but it’s not as bad as it looks!
        </p>
        <p>
          Both methods contain common features in their <span title="The anatomy of CSS syntax applies to rulesets or inline styles, the two methods of incorporating CSS into an HTML document." className="text-blue-400 underline">anatomy</span>.
           Notice how both syntaxes contain a declaration. Declarations are the core of CSS. 
           They apply a style to the selected element. Here, the <span className="bg-gray-300 px-[3px] font-mono">{`<p>`}</span> element has been selected in both syntaxes and will be styled to display the text in blue.
        </p>
        <p>
          Understanding that a declaration is used to style a selected element is
          key to learning how to style HTML documents with CSS! The terms below explain
           each of the labels in the diagram on the right.
        </p>
        <p className="header-font font-semibold">
          Ruleset Terms:
        </p>
        <ul className='marker:text-sky-400 list-disc pl-7'>
          <li>
            <em>Selector</em>—The beginning of the ruleset used to target the element that will be styled.
          </li>
          <li>
            <em>Declaration Block</em>—The code in-between (and including) the curly braces (<span className="bg-gray-300 px-[3px] font-mono">{`{ }`}</span>) that contains the CSS declaration(s).
          </li>
          <li>
            <em>Declaration</em>—The group name for a property and value pair that applies a style to the selected element.
          </li>
          <li>
           <em>Property</em>—The first part of the declaration that signifies what visual characteristic of the element is to be modified.
          </li>
          <li>
            <em>Value</em>—The second part of the declaration that signifies the value of the property.
          </li>
        </ul>
        <p className="header-font font-semibold">
          Inline Style Terms:
        </p>
        <ul className='marker:text-sky-400 list-disc pl-7'>
          <li>
            <em>Opening Tag</em>—The start of an <span className="text-blue-400 underline">HTML element</span>. This is the element that will be styled.
          </li>
          <li>
            <em>Attribute</em>—The style <span className="text-blue-400 underline">attribute</span> is used to add CSS inline styles to an HTML element.
          </li>
          <li>
            <em>Declaration</em>—The group name for a property and value pair that applies a style to the selected element
          </li>
          <li>
            <em>Property</em>—The first part of the declaration that signifies what visual characteristic of the element is to be modified.
          </li>
          <li>
            <em>Value</em>—The second part of the declaration that signifies the value of the property.
          </li>
        </ul>
        <p>
          Don’t worry about memorizing all of these—you will get acquainted with them more
          and more as the course progresses! Feel free to come back and use this exercise
          as a reference later on.
        </p>
        <h1 className='text-red-400 text-center header-font'>Instructions</h1>
        <p>
          Study the diagrams to become familiar with the CSS syntax and the new terms that will be used throughout the course.
        </p>
        <div className="bg-[#10162F] w-[80%] m-auto">
          <img src={anatomyCss} alt="svg"  />
        </div>
        
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Inline Styles</h1>
        <p>
          Although CSS is a different language than HTML, it’s possible to write CSS code directly within HTML code using <em>inline styles</em>.
        </p>
        <p>
          To style an HTML element, you can add the <span className="bg-gray-300 px-[3px] font-mono">style</span> attribute directly to the opening tag.
          After you add the attribute, you can set it equal to the CSS style(s) you’d like applied to that element.
        </p>
        <div className=' bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<p `}</span><span className='text-[#B4D353]'>style</span>=<span className='text-[#FFE083]'>'color:red;'</span><span>{`>`}</span>
          I'm learning to code!<span className="text-red-500">{`<p>`}</span>
        </div>
        <p>
          The code in the example above demonstrates how to use inline styling. The paragraph element
          has a <span className="bg-gray-300 px-[3px] font-mono">style</span> attribute within its opening tag. Next, 
          the <span className="bg-gray-300 px-[3px] font-mono">style</span> attribute is set equal to <span className="bg-gray-300 px-[3px] font-mono">color: red;</span>, which will set the color of the paragraph text to red within the browser.
        </p>
        <p>
          If you’d like to add more than one style with inline styles,
          simply keep adding to the <span className="bg-gray-300 px-[3px] font-mono">style</span> attribute.
           Make sure to end the styles with a semicolon (<span className="bg-gray-300 px-[3px] font-mono">;</span>).
        </p>
        <div className=' bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<p `}</span><span className='text-[#B4D353]'>style</span>=<span className='text-[#FFE083]'>'color:red; font-size: 20px;'</span><span>{`>`}</span>
          I'm learning to code!<span className="text-red-500">{`<p>`}</span>
        </div>
        <p>
          It’s important to know that inline styles are a quick way of directly styling
          an HTML element, but are rarely used when creating websites.
          But you may encounter circumstances where inline styling is necessary, 
          so understanding how it works, and recognizing it in HTML code is good knowledge to have. Soon you’ll learn the proper way to add CSS code!
        </p>
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Internal Stylesheet</h1>
        <p>
          As previously stated, inline styles are not the best way to style HTML elements.
          If you wanted to style, for example, multiple <span className="bg-gray-300 px-[3px] font-mono">{`<h1>`}</span> <span title="Represents a text heading for a section of content, with <h1> being the highest level of heading and <h6> being the lowest." className="text-blue-400 underline">elements</span>,
          you would have to add inline styling to each element manually. 
          In addition, you would also have to maintain the HTML code when additional <span className="bg-gray-300 px-[3px] font-mono">{`<h1>`}</span> elements are added
        </p>
        <p>
          Fortunately, HTML allows you to write CSS code in its own dedicated section with a <span className="bg-gray-300 px-[3px] font-mono underline">{`<style>`}</span> element nested inside of the <span title="Represents a collection of metadata related to the current document. It is an immediate child of the `<html>` element and may include other tags such as <title>, <link>, <style>, and <script>." className="bg-gray-300 px-[3px] font-mono underline">{`<head>`}</span> element. 
          The CSS code inside the <span className="bg-gray-300 px-[3px] font-mono">{`<style>`}</span> element is often referred to as an <em>internal stylesheet</em>.
        </p>
        <p>
          An internal stylesheet has certain benefits and use cases over inlines styles, 
          but once again, it’s not best practice (we’ll get there, we promise). 
          Understanding how to use internal stylesheets is nonetheless helpful knowledge to have.
        </p>
        <p>
          To create an internal stylesheet, a <span className="bg-gray-300 px-[3px] font-mono">{`<style>`}</span> element must be placed inside of the <span className="bg-gray-300 px-[3px] font-mono">{`<head>`}</span> element.
        </p>
        <div className='w-[300px] bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<head>`}</span>
          <br />
          <span className="text-red-500 ml-[15px]">{`<style>`}</span>
          <br />
          <br />
          <br />
          <br />
          <span className="text-red-500 ml-[15px]">{`</style>`}</span>
          <br />
          <span className="text-red-500">{`</head>`}</span>
        </div>
        <p>
        After adding opening and closing <span className="bg-gray-300 px-[3px] font-mono">{`<style>`}</span> tags in the head section, you can begin writing CSS code.
        </p>
        <div className='w-[300px] bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<head>`}</span>
          <br />
          <span className="text-red-500 ml-[15px]">{`<style>`}</span>
          <br />
          <span className="text-red-500 ml-[30px]">p</span> <span>{`{`}</span>
          <br />
          <span className='text-[#B4D353] ml-[50px]'>color:</span><span className="text-red-500">red</span>;
          <br />
          <span className='text-[#B4D353] ml-[50px]'>font-size:20px</span>;
          <br />
          <span className="ml-[32px]">{`}`}</span>
          <br />
          <span className="text-red-500 ml-[15px]">{`</style>`}</span>
          <br />
          <span className="text-red-500">{`</head>`}</span>
        </div>
        <p>
          The CSS code in the example above changes the color of all paragraph
          text to red and also changes the size of the text to 20 pixels.
          Note how the syntax of the CSS code matches (for the most part) the syntax you used for inline styling. 
          The main difference is that you can specify which elements to apply the styling. 
        </p>
        <h1 className='hreadr-font text-center text-[17px]'><em className='text-red-400'>Note:</em>This section is not completed yet...!</h1>
      </div>

      <button onClick={nextStep} className='border mb-[5px] border-black font-medium register bg-yellow-300 p-[5px] header-font'>Next</button>
    </div>
  )
}

export default NvCSS1;