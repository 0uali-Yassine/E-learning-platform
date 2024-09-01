import React, { useState } from 'react'
import { useGlobalContext } from '../../../../Context';
import AnatomyHtml from "../../../../assets/anatomyHtml.png";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function NvHTML1({course}) {
  const [hint,setHint] = useState(false);
  const {nextStepsLessons} = useGlobalContext();
  const nextStep =  () => {
    nextStepsLessons();
  };
  
  return (
    <div className='flex flex-col gap-[20px] main-font select-none px-[10px]'>
        <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Introduction to HTML</h1>
          <p className='paraLearn'>Welcome to the world of code! Last year,
            millions of learners from our community started with HTML. 
            Why? HTML is the skeleton of all web pages. It’s often the first language learned by developers, marketers, 
            and designers and is core to front-end development work. If this is your first time touching code,
            we’re excited for what you’re about to create.
            </p>
            <p className='paraLearn'>
              So what exactly is HTML? HTML provides structure to the content
              appearing on a website, such as <span className='text-blue-400 underline'>images</span>, text, or <span className='text-blue-400 underline'>videos</span>. 
              Right-click on any page on the internet, choose “Inspect,” 
              and you’ll see HTML in a panel of your screen.
            </p>
            <p className='paraLearn'>
              HTML stands for HyperText Markup Language:
            </p>
            <ul className='paraLearn marker:text-sky-400 list-disc pl-7'>
              <li>A markup language is a computer language that defines the structure and presentation of raw text.</li>
              <li>In HTML, the computer can interpret raw text that is wrapped in HTML <span title='Elements are discrete components within an HTML document that generally consist of at least one tag but can have two tags with optional content.' className='text-blue-400 underline cursor-pointer'>elements</span>.</li>
              <li>HyperText is text displayed on a computer or device that provides access to other text through <span title='Links are used in HTML to add features to a web page including styling, functionality, hyperlinks, and navigation.' className='text-blue-400 underline'>Links</span>, also known as hyperlinks.
              You probably clicked on a couple of hyperlinks on your way to this Educate course.</li>
            </ul>
            <p className='paraLearn'>
            Learning HTML is the first step in creating websites, but even a bit of knowledge can help you inject code snippets into newsletter, blog or website templates. As you continue learning, you can layer HTML with CSS and JavaScript to create visually compelling and dynamic websites. But for now, we’re going to focus on how to add and modify basic content on a page, like text, images, and videos. 
            Don’t worry if the websites look ugly — we’re just getting started.
          </p>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>HTML Anatomy</h1>
          <img src={AnatomyHtml} className='w-[300px] m-auto' alt="anatomy" />
          <p className='paraLearn'>
            HTML is composed of elements. These <span className='text-blue-400 underline'>elements</span> structure the webpage and define its content. Let’s take a look at how they’re written
          </p>
          <p className='paraLearn'>
            The diagram to the right displays an HTML paragraph element.
            As we can see, the paragraph element is made up of:
          </p>
          <ul className='paraLearn marker:text-sky-400 list-disc pl-7'>
            <li>An opening tag <span className='bg-gray-300'>{`(<p>)`}</span></li>
            <li>The content (“Hello World!” text)</li>
            <li>A closing tag <span className='bg-gray-300'>{`(<p>)`}</span></li>
          </ul>
          <p className='paralearn'>
            A tag and the content between it is called an HTML element. There are many tags that we can use to organize and display text and other types of content, like images.
          </p>
          <p className='paralearn'>
              Let’s quickly review each part of the element pictured:
          </p>
          <ul className='paraLearn marker:text-sky-400 list-disc pl-7'>
            <li>HTML element (or simply, element) — a unit of content in an HTML document formed by HTML tags and the text or media it contains.</li>
            <li>HTML Tag — the element name, surrounded by an opening <span className='bg-gray-300'>{`(<)`}</span> and closing <span className='bg-gray-300'>{`(>)`}</span> angle bracket.</li>
            <li>Opening Tag — the first HTML tag used to start an HTML element. The tag type is surrounded by opening and closing angle brackets.</li>
            <li>Content — The information (text or other elements) contained between the opening and closing tags of an HTML element.</li>
            <li>Closing tag — the second HTML tag used to end an HTML element. Closing tags have a forward slash (/) inside of them, directly after the left angle bracket.</li>
          </ul>
          
          <h1 className='text-red-400 text-center header-font'>Instructions</h1>
          <p className='paraLearn'>
            Study the diagram to the Top to learn about the anatomy of HTML syntax. When you’re done, continue to the next exercise.
          </p>
        </div>


        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>The Body</h1>
          <p className='paraLearn'>
          One of the key HTML elements we use to build a webpage is the body <span title='Elements are discrete components within an HTML document that generally consist of at least one tag but can have two tags with optional content.' className='text-blue-400 underline cursor-pointer'>element</span>. 
          Only content inside the opening and closing body <span title='A tag is a set of characters constituting a formatted command for a web page.' className='text-blue-400 underline cursor-pointer'>tags</span> can be displayed to the screen.
           Here’s what opening and closing body tags look like:
          </p>
          <div className='w-[300px] bg-[#10162F] font-mono p-[5px] m-auto'>
            <span className='text-[#BE1809]'>{`<body>`}</span>
            <br />
            <br />
            <span className='text-[#BE1809]'>{`</body>`}</span>
          </div>
          <p className='paraLearn'>
            Once the file has a body, 
            many different types of content – including text,
           <span title='While many websites are primarily text, embedding images using HTML within a site allows for more lively pages that can be more attractive and informative to visitors.' className='text-blue-400'>images</span>, and buttons – can be added to the body.
          </p>
          <div className='w-[300px] bg-[#10162F] p-[5px] m-auto font-mono'>
            <span className='text-[#BE1809]'>{`<body>`}</span>
            <p className='text-[#BE1809] ml-[15px]'>{`<p>`}<span className='text-white'>What's up, doc?</span>{`<p>`}</p>
            <span className='text-[#BE1809]'>{`</body>`}</span>
          </div>
          <h1 className='text-red-400 text-center header-font'>Instructions</h1>
          <ul className='paraLearn marker:text-sky-400 list-decimal pl-7'>
            <li>Add a body to your web page using the <span className='bg-gray-300'>{`<body>`}</span> element.</li>
            <li>
              <p>
                  Add the following code between your opening and closing body tags:
              </p>
              <div className='w-[300px] bg-[#10162F] p-[5px]  font-mono text-white'>
                <span className='text-[#BE1809]'>{`<p>`}</span>
                "Life is very short and what we have to do must be done in the now." - Audre Lorde
                <span className='text-[#BE1809]'>{`</p>`}</span>
               </div>
            </li>
          </ul>
            <div className='flex justify-between p-[5px] header-font items-center w-[300px] border border-black rounded-md bg-yellow-200' onClick={()=> setHint(prev => !prev)}>
              <p>Stuck? Get a hint</p>
              {
                hint ? <MdKeyboardArrowUp size={30}/> :  <MdKeyboardArrowDown size={30}/>
              }
            </div>
            <div className={`${hint ? 'flex':'hidden'} w-[300px] flex-col gap-[5px] bg-yellow-100`}>
              <p className='paralearn'>It should look something like:</p>
              <div className='w-[300px] bg-[#10162F] p-[5px] font-mono'>
                <span className='text-[#BE1809]'>{`<body>`}</span>
                <p className='text-[#BE1809] ml-[15px]'>{`<p>`}<span className='text-white'>
                "Life is very short and what we have to do must be done in the now." - Audre Lorde
                </span>{`<p>`}
                </p>
                <span className='text-[#BE1809]'>{`</body>`}</span>
              </div>
            </div>
        </div>

        <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] font-bold header-font'>HTML Structure</h1>
            <p className='paralearn'>
              HTML is organized as a collection of family tree relationships. As you saw in the last exercise, we placed <span className='text-gray-400'>{`<p>`}</span> tags within <span className='text-gray-400'>{`<body>`}</span> tags.
              When an element is contained inside another element,
              it is considered the child of that element. The child element is said to be nested inside of the parent element.
            </p>
            <div className='w-[300px] bg-[#10162F] p-[5px] font-mono'>
              <span className='text-[#BE1809]'>{`<body>`}</span>
              <p className='text-[#BE1809] ml-[15px]'>{`<p>`}<span className='text-white'>
                "Life is very short and what we have to do must be done in the now." - Audre Lorde
                </span>{`<p>`}
              </p>
              <span className='text-[#BE1809]'>{`</body>`}</span>
            </div>
            <p className='paralearn'>
              In the example above, the <span className='text-gray-400'>{`<p>`}</span> element is nested inside the <span className='text-gray-400'>{`<body>`}</span> element. The <span className='text-gray-400'>{`<p>`}</span> element is considered a child of the <span className='text-gray-400'>{`<body>`}</span> element,
              and the <span className='text-gray-400'>{`<body>`}</span> element is considered the parent.
              You can also see that we’ve added two spaces of indentation (using the <span className='bg-white px-[5px] text-center border border-black'>space</span> bar) for better readability.
            </p>
            <p>Since there can be multiple levels of nesting, this analogy can be extended to grandchildren, great-grandchildren,
               and beyond. The relationship between elements and their ancestor and descendent elements is known as hierarchy.
            </p>
            <div>
              <p className='paralearn'>
              Let’s consider a more complicated example that uses some new tags:
              </p>
              <div className='w-[400px] bg-[#10162F] p-[5px] font-mono'>
                <span className='text-[#BE1809]'>{`<body>`}</span>
                <br />
                <span className='text-[#BE1809] ml-[15px]'>{`<div>`}</span>
                <p className='text-[#BE1809] ml-[30px]'>{`<p>`}<span className='text-white'>
                  Sibling to h1, but also grandchild of body
                  </span>{`<p>`}
                </p>
                <p className='text-white ml-[30px]'>
                  <span className='text-[#BE1809]'>{`<h1>`}</span>
                  Sibling to p, but also grandchild of body
                  <span className='text-[#BE1809]'>{`<h1>`}</span>
                </p>
                <span className='text-[#BE1809] ml-[15px]'>{`</div>`}</span>
                <br />
                <span className='text-[#BE1809]'>{`</body>`}</span>
            </div>
            <div>
              <p className='paralearn'>
              In this example, the <span className='text-gray-400'>{`<body>`}</span> element is the parent of the <span className='text-gray-400'>{`<div>`}</span> element. Both the <span className='text-gray-400'>{`<h1>`}</span> and  elements are children of the <span className='text-gray-400'>{`<div>`}</span> element.
               Because the <span className='text-gray-400'>{`<h1>`}</span> and <span className='text-gray-400'>{`<p>`}</span> elements are at the same level, they are considered siblings and are both grandchildren of the <span className='text-gray-400'>{`<body>`}</span> element.
              </p>
              <p className='paralearn'>
                Understanding HTML hierarchy is important because child
                elements can inherit behavior and styling from their parent element.
                You’ll learn more about webpage hierarchy when you start digging into CSS.
              </p>
            </div>
            </div>

            <h1 className='text-red-400 text-center header-font'>Instructions</h1>
            <p className='paralearn'>
              1.Add the paragraph below as a child of the <span className='bg-gray-400 px-[5px]'>div</span> element.
            </p>
            <div className='w-[300px] bg-[#10162F] p-[5px] font-mono'>
              <p className='text-white'>
                <span className='text-[#BE1809]'>{`<p>`}</span>
                  This paragraph is a child of the <span className='bg-gray-300 px-[5px]'>div</span> element that you will make in your text editore and a grandchild of the body element
                <span className='text-[#BE1809]'>{`<p>`}</span>
              </p>
            </div>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Headings</h1>
          <p className='paralearn'>
            Headings in HTML are similar to headings in other types of media. For example, in newspapers,
            large headings are typically used to capture a reader’s attention. Other times,
            headings are used to describe content, like the title of a movie or an educational article.
          </p>
          <p className='paralearn'>
            HTML follows a similar pattern. In HTML, there are six different headings, or heading elements.
            <span title='There are 6 heading elements in HTML. They are labeled 1-6, with 1 being the largest sized heading and 6 being the smallest. These are great for labeling different sections in a website.' className='text-blue-400 underline cursor-pointer'>Headings</span> can be used for a variety of purposes, like titling sections, articles, or other forms of content.
          </p>

          <div className='flex flex-col gap-[5px]'>
            <p className='paralearn'>The following is the list of heading elements available in HTML. They are ordered from largest to smallest in size.</p>
            <ul className='paraLearn marker:text-sky-400 list-disc pl-7'>
              <li><span className='bg-gray-300'>{`<h1>`}</span> -- used for main headings. All other smaller headings are used for subheadings.</li>
              <li><span className='bg-gray-300'>{`<h2>`}</span></li>
              <li><span className='bg-gray-300'>{`<h3>`}</span></li>
              <li><span className='bg-gray-300'>{`<h4>`}</span></li>
              <li><span className='bg-gray-300'>{`<h5>`}</span></li>
              <li><span className='bg-gray-300'>{`<h6>`}</span></li>
            </ul>
          </div>
        </div>
          <div className='flex flex-col gap-[5px]'>
            <p className='paralearn'>The following example code uses a headline intended to capture a reader’s attention.
              It uses the largest heading available, the main heading element:
            </p>
            <div className='w-[300px] text-white bg-[#10162F] p-[5px] font-mono'>
                  <span className='text-[#BE1809]'>{`<h1>`}</span>
                    BREAKING NEWS
                  <span className='text-[#BE1809]'>{`</h1>`}</span>
            </div>
            <h1 className='text-red-400 text-center headr-font'>Instructions</h1>
            <p className='paralearn'>
              1.Now that you know how to structure HTML elements,
              we’ll spend the rest of the lesson building an informational website using some of the most common HTML elements like this:
            </p>
            <div className='w-[300px] text-white bg-[#10162F] p-[5px] font-mono'>
              <span className='text-[#BE1809]'>{`<body>`}</span>
              <br />
              <span className='text-[#BE1809] ml-[15px]'>{`<h1>`}</span>The Brown Bear<span className='text-[#BE1809] ml-[15px]'>{`</h1>`}</span>
              <br />
              <span className='text-[#BE1809] ml-[15px]'>{`<h2>`}</span>
                About Brown Bears
              <span className='text-[#BE1809] ml-[15px]'>{`</h2>`}</span>
              <br />
              <span className='text-[#BE1809] ml-[15px]'>{`<h3>`}</span>
                Species
              <span className='text-[#BE1809] ml-[15px]'>{`</h3>`}</span>
              <br />
              <span className='text-[#BE1809]'>{`</body>`}</span>
            </div>
        </div>
        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Divs</h1>
          <p className='paralearn'>
          One of the most popular elements in HTML is the <span className='text-gray-400'>{`<div>`}</span> element. <span title='Represents a generic division of content. It has no semantic meaning, but will separate its contents from the rest of the document.' className='text-gray-400 underline cursor-pointer'>{`<div>`}</span> 
          is short for “division” or a container that divides the page into sections.
             These sections are very useful for grouping elements in your HTML together
          </p>
          <div className='w-[300px] text-white bg-[#10162F] p-[5px] font-mono'>
              <span className='text-[#BE1809]'>{`<body>`}</span>
              <br />
              <span className='text-[#BE1809] ml-[15px]'>{`<div>`}</span>
              <br />
              <span className='text-[#BE1809] ml-[25px]'>{`<h1>`}</span>The Brown Bear<span className='text-[#BE1809]'>{`</h1>`}</span>
              <br />
              <span className='text-[#BE1809] ml-[25px]'>{`<p>`}</span>
                Species
              <span className='text-[#BE1809] '>{`</p>`}</span>
              <br />
              <span className='text-[#BE1809] ml-[15px]'>{`</div>`}</span>
              <br />
              <span className='text-[#BE1809]'>{`</body>`}</span>
            </div>
            <p>
            <span className='text-gray-400'>{`<div>`}</span>s don’t inherently have a visual representation, but they are very useful when we want to apply custom styles to our HTML elements. <span className='text-gray-400'>{`<div>`}</span>s allow us to group HTML 
            elements to apply the same styles for all HTML elements inside. We can also style the <span className='text-gray-400'>{`<div>`}</span> element as a whole.
             You can see how this can be done in the Next <span className='text-blue-400 underline'>CSS course</span>.
            </p>
            <p>
            <span className='text-gray-400'>{`<div>`}</span>s can contain any text or other HTML elements,
             such as links, images, or videos.
              Remember to always add two spaces of indentation when you nest elements inside of <span className='text-gray-400'>{`<div>`}</span>s for better readability.
            </p>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Attributes</h1>
          <p className='paralearn'>
            If we want to expand an element’s tag, we can do so using an attribute. <span title='Attributes can be added to the opening tag of an HTML element to change its default behavior or provide additional data about it.' className='text-blue-400 underline cursor-pointer'>Attributes</span> are content added to the opening tag of an element and can be used in several different ways, from providing information to changing styling. Attributes are made up of the following two parts:
          </p>
          <ul className='marker:text-sky-400 list-disc pl-5'>
            <li>The <span className='font-mono'>name</span> of the attribute </li>
            <li>The <span className='font-mono'>value</span> of the attribute </li>
          </ul>
          <p className='paralearn'>
           One commonly used attribute is the <span className='bg-gray-300 px-[5px]'>id</span>. We can use the id attribute to specify different content (such as <span className='text-gray-400'>{`<div>`}</span>s) and is really helpful when you use an element more than once.
          <span className='bg-gray-300 px-[5px]'>id</span>s have several different purposes in HTML, but for now, we’ll focus on how they can help us identify content on our page.
          </p>
          <div>
            <p className='paralearn'>
              When we add an <span className='bg-gray-300 px-[5px]'>id</span>s to a <span className='text-gray-300'>{`<div>`}</span>, we place it in the opening tag:
            </p>
            <div  className='w-[300px] text-white bg-[#10162F] p-[5px] font-mono'>
            <span className='text-[#BE1809]'>{'<div '}</span>
            <span className='text-[#B4D353]'>{'id='}</span>
            <span className='text-[#FFE083]'>{'"intro"'}</span>
            <span className='text-[#BE1809]'>{'>'}</span>
              <br />
              <span className='text-[#BE1809] ml-[15px]'>{`<h1>`}</span>Introduction<span>{`</h1>`}</span>
              <br />
              <span className='text-[#BE1809]'>{`</div>`}</span>
            </div>
            <h1 className='text-red-400 text-center header-font'>Instructions</h1>
            <p className='paralearn'>
              1.Add an <span className='bg-gray-300 px-[5px]'>id</span> attribute with the value "introduction" to the <span className='text-gray-400'>{`<div>`}</span>
              that you well make.like the example in the top.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Displaying Text</h1>
          <p className='paralearn'>
            If you want to display text in HTML, you can use a paragraph or span:
          </p>
          <ul className='marker:text-sky-400 list-disc pl-7 paralearn'>
            <li><span title='Contains and displays a block of text that defines a paragraph.' className='text-blue-400 underline cursor-pointer'>Paragraphs (</span> <span title='Contains and displays a block of text that defines a paragraph.' className='bg-gray-300 underline cursor-pointer'>{`<p>`}</span><span className='text-blue-400 underline cursor-pointer'>)</span> contain a block of plain text.</li>
            <li><span title='Used for grouping related text or elements for styling and scripting.' className='bg-gray-300 underline cursor-pointer'>{`<span>`}</span> contains short pieces of text or other HTML. They are used to separate small pieces of content that are on the same line as other content. </li>
          </ul>
          <div className='flex flex-col gap-[5px]'>
            <p className='paralearn'>Take a look at each of these elements in action below:</p>
            <div className='w-[400px] text-white bg-[#10162F] p-[5px] font-mono'>
              <p>
                <span className='text-[#BE1809]'>{`<div>`}</span>
                <br />
                <span className='text-[#BE1809] ml-[15px]'>{`<h1>`}</span>Technology<span className='text-[#BE1809]'>{`</h1>`}</span>
                <br />
                <span className='text-[#BE1809]'>{`</div>`}</span>
                <br />
                <span className='text-[#BE1809]'>{`<div>`}</span>
                <br />
                <span className='text-[#BE1809] ml-[15px]'>{`<p>`}</span>
                <span className='text-[#BE1809]'>{`<span>`}</span>
                Self-driving cars
                <span className='text-[#BE1809]'>{`</span>`}</span>
                are anticipated to replace up to 2 million jobs over the next two decades.
                <span className='text-[#BE1809] '>{`</p>`}</span>
                <br />
                <span className='text-[#BE1809]'>{`</div>`}</span>
              </p>
            </div>
            <p className='paralearn'>
              In the example above, there are two different <span className='bg-gray-300 px-[5px]'>{`<div>`}</span>. The second <span className='bg-gray-300 px-[5px]'>{`<div>`}</span>
              contains a <span className='bg-gray-300 px-[5px]'>{`<p>`}</span> with <span className='bg-gray-300 px-[5px]'>{`<span>Self-driving cars</span>`}</span> .
              This <span className='bg-gray-300 px-[5px]'>{`<span>`}</span> element separates “Self-driving cars” from the rest of the text in the paragraph.
            </p>
            <p className='paralearn'>
              It’s best to use a <span className='bg-gray-300 px-[5px]'>{`<span>`}</span> element when you want to target a specific piece of content that is inline, or on the same line as other text.
               If you want to divide your content into blocks, it’s better to use a <span className='bg-gray-300 px-[5px]'>{`<div>`}</span>.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Styling Text</h1>
          <p className='paralearn'>
            You can also style text using HTML tags. The <span className='bg-gray-300 px-[5px]'>{`<em>`}</span> tag emphasizes text, while the <span className='bg-gray-300 px-[5px]'>{`<strong>`}</span> tag highlights important text.
          </p>

          <div className='flex flex-col gap-[5px]'>
            <p className='paralearn'>
              Later, when you begin to style websites, you will decide how you want browsers to display content within <span className='bg-gray-300 px-[5px]'>{`<em>`}</span> 
              and <span className='bg-gray-300 px-[5px]'>{`<strong>`}</span> tags. Browsers, however, have built-in style sheets that will generally style these tags in the following ways:
            </p>
            <ul className='ml-[15px] marker:text-sky-400 list-disc pl-5 paralearn'>
              <li>The <span className='bg-gray-300 px-[5px]'>{`<em>`}</span> tag will generally render as  <em className='text-[18px]'>italic</em> emphasis.</li>
              <li>The <span className='bg-gray-300 px-[5px]'>{`<strong>`}</span> will generally render as <strong>bold</strong> emphasis.</li>
            </ul>
          </div>
          
          <div className='flex flex-col gap-[5px]'>
              <p className='paralearn'>
                Take a look at each style in action:
              </p>
              <div className='w-[400px] text-white bg-[#10162F] p-[5px] font-mono'>
                <p>
                  <span className='text-[#BE1809]'>{'<p>'}</span>
                  <span className='text-[#BE1809]'>{'<strong>'}</span>The Nile River<span className='text-[#BE1809]'>{'</strong>'}</span>is the <span className='text-[#BE1809]'>{'<em>'}</span>longest<span className='text-[#BE1809]'>{'</em>'}</span>
                    river in the world, measuring over 6,850 kilometers long (approximately 4,260 miles).
                  <br />
                  <span className='text-[#BE1809]'>{'</p>'}</span>
                </p>
              </div>
          </div>
          <p className='paralearn'>
            In this example, the <span className='bg-gray-300 px-[5px]'>{'<strong>'}</span> and <span className='bg-gray-300 px-[5px]'>{'<em>'}</span> tags are used to emphasize the text to produce the following:
          </p>
          <p className='paralearn'>
            <strong>The Nile River </strong>is the <em> longest </em>
            river in the world, measuring over 6,850 kilometers long (approximately 4,260 miles).
          </p>
          <p className='paralearn'>
            As we can see, “The Nile River” is bolded and “longest” is in italics.
          </p>
        </div>
        
        <button onClick={nextStep} className='border border-black font-medium register bg-yellow-300 p-[5px]'>Next</button>
    </div>
  )
}

export default NvHTML1;