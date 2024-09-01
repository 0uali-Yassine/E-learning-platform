import { useGlobalContext } from "../../../../Context";

function NvCSS3({course}) {
  const {nextStepsLessons} = useGlobalContext();
  
  const nextStep = ()=> {
    nextStepsLessons();
  }

  return (
    <div className='flex flex-col gap-[20px] main-font select-none px-[10px] paraLearn'>
      <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
      <h1 className='text-[20px] font-bold header-font text-center'>Selector</h1>

      <div className='flex flex-col gap-[10px]'>
       <h1 className='text-[20px] font-bold header-font'>Class</h1>
        <p>
          CSS is not limited to selecting elements by their type. As you know, HTML elements can also have <span className="underline text-blue-400 hover:underline-offset-0">attributes</span>. 
          When working with HTML and CSS a <span className="underline hover:underline-offset-0 text-blue-400">class</span> attribute is one of the most common ways to select an element.
        </p>
        <p>
         For example, consider the following HTML:
        </p>
        <div className='w-[350px] text-center bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<p `}</span><span className="text-[#B4D353]">class</span><span className="text-red-500">=</span>
          <span className="text-[#ffe083]">'brand'</span><span className="text-red-500">{`>`}</span>Sole Shoe Company
          <span className="text-red-500">{`</p>`}</span>
        </div>
        <p>
         The paragraph element in the example above has a <span className="bg-gray-300 px-[3px]">class</span> attribute within 
         the opening tag of the <span className="bg-gray-300 px-[3px]">{`<p>`}</span> element. The class attribute is set to <span className="bg-gray-300 px-[3px]">'brand'</span>. To select this element using CSS, we can create a ruleset with a class selector of <span className="bg-gray-300 px-[3px]">.brand</span>.
        </p>
        <div className='w-[150px]  bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-green-300">.brand</span> <span>{`{`}</span>
          <br />
          <br />
          <br />
          <span>{`}`}</span>
        </div>
        <p>
          To select an HTML element by its class using CSS, a period (<span className="bg-gray-300 px-[3px]">.</span>) must be prepended to the class’s name. In the example above, the class is <span className="bg-gray-300 px-[3px]">brand</span>, so the CSS selector for it is <span className="bg-gray-300 px-[3px]">.brand</span>.
        </p>
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Multiple Classes</h1>
        <p>
          We can use CSS to select an HTML element’s <span className="font-mono bg-gray-300 px-[3px]">class</span> attribute by name. And so far, we’ve selected elements using only one class name per element. If every HTML element had a single class, all the style information for each element would require a new class.
        </p>
        <p>
          Luckily, it’s possible to add more than one class name to an HTML element’s <span className="font-mono bg-gray-300 px-[3px]">class</span> attribute.
        </p>
        <p>
          For instance, perhaps there’s a heading element that needs to be green and bold. You could write two CSS rulesets like so:
        </p>
        <div className='w-[250px]  bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-green-300">.bold</span> <span>{`{`}</span>
          <br />
          <span className="ml-[15px] text-[#83fff5]">font-weight: </span><span className="text-[#b3ccff]">bold</span>;
          <br />
          <span>{`}`}</span>
          <br />
          <span className="text-green-300">.green</span> <span>{`{`}</span>
          <br />
          <span className="ml-[15px] text-[#83fff5]">color: </span><span className="text-[#b3ccff]">green</span>;
          <br />
          <span>{`}`}</span>
        </div>
        <p>
          Then, you could include both of these classes on one HTML element like this:
        </p>
        <div className='w-[fit-content]  bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<h1 `}</span><span className="text-[#B4D353]">class</span><span className="text-red-500">=</span>
          <span className="text-[#ffe083]">'bold green'</span><span className="text-red-500">{`>`}</span>....<span className="text-red-500">{`</h1>`}</span>
        </div>
        <p>
          We can add multiple classes to an HTML element’s class attribute by separating
          them with a space. This enables us to mix and match CSS classes to create many
          unique styles without writing a custom <span className="bg-gray-300 px-[3px] font-mono">class</span> for every style combination needed.
        </p>
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>ID</h1>
        <p>
          Oftentimes it’s important to select a single element with CSS to give it its own unique style. If an HTML element needs to be styled uniquely, we can give it an ID using the <span className="bg-gray-300 px-[3px] font-mono">id</span> attribute.
        </p>
        <div className='w-[fit-content]  bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<h1 `}</span><span className="text-[#B4D353]">id</span><span className="text-red-500">=</span>
          <span className="text-[#ffe083]">'large-title'</span><span className="text-red-500">{`>`}</span>....<span className="text-red-500">{`</h1>`}</span>
        </div>
        <p>
          In contrast to <span className="bg-gray-300 px-[3px] font-mono">class</span> which accepts multiple values, 
          and can be used broadly throughout an HTML document, an element’s <span className="bg-gray-300 px-[3px] font-mono">id</span> can only have a single value, and only be used once per page.
        </p>
        <p>
          To select an element’s ID with CSS, we prepend the <span className="bg-gray-300 px-[3px] font-mono">id</span> name with a number sign (<span className="bg-gray-300 px-[3px] font-mono">#</span>). For instance, if we wanted to select the HTML element in the example above, it would look like this:
        </p>
        <div className='w-[250px]  bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span>#large-title</span> <span>{`{`}</span>
          <br />
          <br />
          <span>{`}`}</span>
        </div>
        <p>
         The <span className="bg-gray-300 px-[3px] font-mono">id</span> name is <span className="bg-gray-300 px-[3px] font-mono">large-title</span>, 
         therefore the CSS selector for it is <span className="bg-gray-300 px-[3px] font-mono">#large-title</span>.
        </p>
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Attribute</h1>
        <p>
          You may remember that some HTML elements use attributes to add extra detail or functionality to the element. Some familiar attributes may be <span className="bg-gray-300 px-[3px] font-mono">href</span> and <span className="bg-gray-300 px-[3px] font-mono">src</span>, 
          but there are <span className="text-blue-400 underline">many more</span>—including <span className="bg-gray-300 px-[3px] font-mono">class</span> and <span className="bg-gray-300 px-[3px] font-mono">id</span> !
        </p>
        <p>
          The <em>attribute selector</em> can be used to target HTML elements that already contain attributes. 
          Elements of the same type can be targeted differently by their attribute or attribute value. This alleviates the need to add new code, like the <span className="bg-gray-300 px-[3px] font-mono">class</span> or <span className="bg-gray-300 px-[3px] font-mono">id</span> attributes.
        </p>
        <p>
          Attributes can be selected similarly to types, classes, and IDs.
        </p>
        <div className='w-[250px]  bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span>[<span className="text-red-500">href</span>]</span><span>{`{`}</span>
          <br />
          <span className="text-[#B4D353] ml-[35px]">font-size:</span><span className="text-[#B4D353]">20px</span><span>;</span>
          <br />
          <span>{`}`}</span>
        </div>
        <p>
         The most basic syntax is an attribute surrounded by square brackets. In the above example: [<span className="bg-gray-300 px-[3px] font-mono">href</span>] would target all elements with an
         <span className="bg-gray-300 px-[3px] font-mono">href</span> attribute and set the <span className="bg-gray-300 px-[3px] font-mono">font-size</span> to <span className="bg-gray-300 px-[3px] font-mono">20px</span>.
        </p>
        <p>
          And it can get <span className="text-blue-400 underline">more granular</span> from there by adding type and/or attribute values. 
          One way is by using <span className="bg-gray-300 px-[3px] font-mono">type[attribute*=value]</span>. In short, this code selects an element where the attribute contains any instance of the specified value. Let’s take a look at an example.
        </p>
        <div className='w-[fit-content]  bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">{`<img `}</span><span className="text-[#B4D353]">src</span><span className="text-red-500">=</span>
          <span className="text-[#ffe083]">'/images/seasons/cold/winter.jpg'</span><span className="text-red-500">{`>`}</span>
          <br />
          <span className="text-red-500">{`<img `}</span><span className="text-[#B4D353]">src</span><span className="text-red-500">=</span>
          <span className="text-[#ffe083]">'/images/seasons/warm/summer.jpg'</span><span className="text-red-500">{`>`}</span>
        </div>
        <p>
          The HTML code above renders two <span title="Displays an image on the web page." className="bg-gray-300 cursor-pointer px-[3px] font-mono underline">{`<img>`}</span> elements, 
          each containing a <span className="bg-gray-300 px-[3px] font-mono">src</span> attribute with a value equaling a link to an image file.
        </p>
        <div className='w-[250px]  bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">img</span><span>[</span><span className="text-[#B3CCFF]">src</span>*=<span className="text-[#FFE083]">'winter'</span><span>]</span> <span>{`{`}</span>
          <br />
          <span className="ml-[15px] text-[#83fff5]">height: </span><span className="text-[#FF8973]">50px</span>;
          <br />
          <span>{`}`}</span>
          <br />
          <br />
          <span className="text-red-500">img</span><span>[</span><span className="text-[#B3CCFF]">src</span>*=<span className="text-[#FFE083]">'summer'</span><span>]</span> <span>{`{`}</span>
          <br />
          <span className="ml-[15px] text-[#83fff5]">height: </span><span className="text-[#FF8973]">100px</span>;
          <br />
          <span>{`}`}</span>
        </div>
        <p>
         Now take a look at the above CSS code. The <em>attribute selector</em> is used to target each image individually.
        </p>
        <ul className=" marker:text-sky-400 list-disc pl-7">
          <li>
            The first ruleset looks for an <span className="bg-gray-300 px-[3px] font-mono">img</span> element with an attribute of <span className="bg-gray-300 px-[3px] font-mono">src</span>that contains the string <span className="bg-gray-300 px-[3px] font-mono">'winter'</span>, and sets the <span className="bg-gray-300 px-[3px] font-mono">height</span> to <span className="bg-gray-300 px-[3px] font-mono">50px</span>.
          </li>
          <li>
            The second ruleset looks for an <span className="bg-gray-300 px-[3px] font-mono">img</span> element with an attribute of src that contains the string <span className="bg-gray-300 px-[3px] font-mono">'summer'</span>, and sets the <span className="bg-gray-300 px-[3px] font-mono">height</span> to <span className="bg-gray-300 px-[3px] font-mono">100px</span>.
          </li>
        </ul>
        <p>
          Notice how no new HTML markup (like a class or id) needed to be added, and we were still able to modify the styles of each image independently. This is one advantage to using the attribute selector!
        </p>
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Pseudo-class</h1>
        <p>
          You may have observed how the appearance of certain elements can change, or be in a different state, after certain user interactions. For instance:
        </p>
        <ul className=" marker:text-sky-400 list-disc pl-7">
          <li>
            When you click on an <span className="bg-gray-300 px-[3px] font-mono">{`<input>`}</span> element, 
            and a blue border is added showing that it is in <em>focus</em>.
          </li>
          <li>
           When you click on a blue <span className="bg-gray-300 px-[3px] font-mono">{`<a>`}</span> link to <em>visit</em> to another page, but when you return the link’s text is purple.
          </li>
          <li>
           When you’re filling out a form and the submit button is grayed out and <em>disabled</em>. But when all of the fields have been filled out, 
           the button has color showing that it’s <em>active</em>.
          </li>
        </ul>
        <p>
          These are all examples of pseudo-class selectors in action! In fact, <span className="bg-gray-300 px-[3px] font-mono">:focus</span>, <span className="bg-gray-300 px-[3px] font-mono">:visited</span>, <span className="bg-gray-300 px-[3px] font-mono">:disabled</span>, 
          and <span className="bg-gray-300 px-[3px] font-mono">:active</span> are all pseudo-classes. Factors such as user interaction, site navigation, and position in 
          the document tree can all give elements a different state with pseudo-class.
        </p>
        <p>
          A pseudo-class can be attached to any selector. It is always written as a colon <span className="bg-gray-300 px-[3px] font-mono">:</span> followed by a name. For example <span className="bg-gray-300 px-[3px] font-mono">p:hover</span>.
        </p>
        <div className='w-[250px]  bg-[#10162F] text-white font-mono p-[5px] m-auto'>
          <span className="text-red-500">p:hover</span><span>{`{`}</span>
          <br />
          <span className="text-[#B4D353] ml-[35px]">font-size:</span><span className="text-[#B4D353]">20px</span><span>;</span>
          <br />
          <span>{`}`}</span>
        </div>
        <p>
          In the above code, whenever the mouse hovers over a paragraph element, that paragraph will have a font size to 20px.
        </p>
      </div>

      <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[20px] font-bold header-font'>Classes and IDs</h1>
        <p>
          CSS can select HTML elements by their type, class, and ID. CSS classes and IDs have different purposes, 
          which can affect which one you use to style HTML elements.
        </p>
        <p>
          CSS classes are meant to be reused over many elements. By writing CSS classes, you can style elements in a variety of ways by mixing classes. 
          For instance, imagine a page with two headlines. One headline needs to be bold and blue, and the other needs to be bold and green. Instead of writing separate CSS rules for 
          each headline that repeat each other’s code, it’s better to write a <span className="bg-gray-300 px-[3px] font-mono">.bold</span> CSS rule, a <span className="bg-gray-300 px-[3px] font-mono">.green</span> CSS rule, 
          and a .blue CSS rule. Then you can give one headline the <span className="bg-gray-300 px-[3px] font-mono">bold green</span> classes, and the other the <span className="bg-gray-300 px-[3px] font-mono">bold blue</span> classes.
        </p>
        <p>
          While classes are meant to be used many times, an ID is meant to style only one element. As you’ll learn in the next exercise, 
          IDs override the styles of types and classes. Since IDs override these styles, 
          they should be used sparingly and only on elements that need to always appear the same.
        </p>
        <h1 className="text-red-300 text-center">this course is not done yet!</h1>
      </div>



      <button onClick={nextStep} className='border mb-[5px] border-black font-medium register bg-yellow-300 p-[5px] header-font'>Next</button>
    </div>
  )
}

export default NvCSS3;