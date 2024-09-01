import React, { useState } from 'react'
import { useGlobalContext } from '../../../../Context';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import titlesvg from '../../../../assets/htmlcss1-diagram__sitetitle_Updated_1.svg';

function NvHTML3({course}) {
  const {nextStepsLessons} = useGlobalContext();
  const [hint,setHint] = useState(false);

  const nextStep = async ()=>{
    nextStepsLessons();
  }

  return (
    <div className='flex flex-col gap-[10px] main-font select-none p-[10px] paraLearn'>
        <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[25px] header-font text-center'>HTML Document Standars</h1>
          <h1 className='text-[20px] font-bold header-font'>Preparing for HTML</h1>
          <p className='paraLearn'>
            Now that we’ve learned about some of the most common HTML <span title='Elements are discrete components within an HTML document that generally consist of at least one tag but can have two tags with optional content.' className='text-blue-400 underline cursor-pointer'>elements</span>,
           it’s time to learn how to set up an HTML file.
          </p>
          <p className='paraLearn'>
            HTML files require certain elements to set up the document properly. We can let web browsers know that we are using HTML by starting our document with a document type declaration.
          </p>
          <div className='flex flex-col gap-[5px]'>
            <p className='paraLearn'>
             The declaration looks like this:
            </p>
            <div className='w-[300px] h-[100px] bg-[#10162F] font-mono p-[5px] m-auto'>
                <span className='text-gray-400 ml-[10px]'>{`<!DOCTYPE html>`}</span>
            </div>
          </div>
          <p className='paraLearn'>
            This declaration is an instruction, and it must be the first line of code in your HTML document.
            It tells the browser what type of document to expect,
            along with what version of HTML is being used in the document. For now, the browser will correctly assume that the <span className='bg-gray-300 px-[3px]'>html</span> in <span className='bg-gray-300 px-[3px]'>{`<!DOCTYPE html>`}</span> 
            is referring to HTML5, as it is the current standard.
          </p>
          <p>
            In the future, however, a new standard will override HTML5.
            To make sure your document is forever interpreted correctly,
            always include <span className='bg-gray-300 px-[3px]'>{`<!DOCTYPE html>`}</span>
            at the very beginning of your HTML documents.
          </p>
          <p>
          Lastly, HTML code is always saved in a file with an <strong>.html</strong> extension.
          </p>
          <h1 className='text-red-400 text-center header-font'>Instructions</h1>
          <p>
            1.Add the <span className='bg-gray-300 px-[3px]'>{`<!DOCTYPE html>`}</span> declaration as the very first line of code at the top of the <strong>index.html</strong> file.
          </p>
          <div className='flex justify-between p-[5px] header-font items-center w-[300px] border border-black rounded-md bg-yellow-200' onClick={()=> setHint(prev => !prev)}>
              <p className='header-font font-medium'>{!hint ? 'Stuck? Get a hint':'hint'}</p>
              {
                hint ? <MdKeyboardArrowUp size={30}/> :  <MdKeyboardArrowDown size={30}/>
              }
          </div>
          <div className={`${hint ? 'flex':'hidden'} w-[300px] h-auto flex-col gap-[5px] bg-yellow-100`}>
            <p className='paraLearn w-[300px] p-[5px]'>
              Don’t forget the exclamation mark <strong>!</strong> The
              exclamation mark is part of the construct for creating a markup declaration back in HTML 4. In HTML 5 it has no role or meaning other than triggering 
              a “standard-mode” in browsers.
            </p>
          </div>
         
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>The <span>{`<html>`}</span> Tag</h1>
          <p className='paraLearn'>
            The <span className='bg-gray-300 px-[3px]'>{`<!DOCTYPE html>`}</span> declaration provides the browser with two pieces of information (the type of document and the HTML version to expect),
            but it doesn’t actually add any HTML structure or content.
          </p>
          <p className='paraLearn'>
          To create HTML structure and content, we must add opening and closing <span title="Represents the entire HTML document" className='bg-gray-300 px-[5px]'>{`<html>`}</span> tags after declaring
           <span className='bg-gray-300 px-[5px]'>{`<!DOCTYPE html>`}</span>:
          </p>
          <div className='w-[300px] h-[110px] bg-[#10162F] font-mono p-[5px] m-auto'>
                <span className='text-gray-400 ml-[10px]'>{`<!DOCTYPE html>`}</span>
                <br />
                <span className='text-red-500 ml-[5px]'>{`<html>`}</span>
                <br />
                <br />
                <span className='text-red-500 ml-[5px]'>{`</html>`}</span>
          </div>
          <p className='paraLearn'>
            Anything between the opening <span className='bg-gray-300 px-[3px]'>{`<html>`}</span> and closing <span className='bg-gray-300 px-[3px]'>{`</html>`}</span> tags will be interpreted as HTML code. Without these tags, it’s possible
           that browsers could incorrectly interpret your HTML code.
          </p>
          <h1 className='text-red-400 text-center header-font'>Instructions</h1>
          <p className='paraLearn'>
            1.
            Add the opening and closing <span className='bg-gray-300 px-[3px]'>{`<html>`}</span> tags below the 
            <span className='bg-gray-300 px-[3px]'>{`<!DOCTYPE html>`}</span> tag.
          </p>
          <div className='flex justify-between p-[5px] header-font items-center w-[300px] border border-black rounded-md bg-yellow-200' onClick={()=> setHint(prev => !prev)}>
              <p className='header-font font-medium'>{!hint ? 'Stuck? Get a hint':'hint'}</p>
              {
                hint ? <MdKeyboardArrowUp size={30}/> :  <MdKeyboardArrowDown size={30}/>
              }
          </div>
          <div className={`${hint ? 'flex':'hidden'} w-[300px] h-auto flex-col gap-[5px] bg-yellow-100`}>
            <p className='p-[5px]'>
              Place the <span className='bg-gray-300 px-[3px]'>{`<html></html>`}</span> tags below the <span className='bg-gray-300 px-[3px]'>{`<!DOCTYPE html>`}</span> tag.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>The Head</h1>
          <p>
           So far you’ve done two things to set up the file properly:
          </p>
          <ul className='marker:text-sky-400 list-disc pl-7'>
            <li>
              Declared to the browser that your code is HTML with <span className='bg-gray-300 px-[3px]'>{`<!DOCTYPE html>`}</span>
            </li>
            <li>
              Added the HTML element (<span className='bg-gray-300 px-[3px]'>{`<html>`}</span>) that will contain the rest of your code.
            </li>
          </ul>
          <p>
            We have added these elements to the Brown Bears page you previously created. Now, let’s also give the browser some information about the page itself.
            We can do this by adding a <span title='Represents a collection of metadata related to the current document. It is an immediate child of the `<html>` element and may include other tags such as <title>, <link>, <style>, and <script>.' className='bg-gray-300 px-[3px] cursor-pointer underline hover:underline-none'>{`<head>`}</span> element.
          </p>
          <p>
            Remember the <span className='bg-gray-300 px-[3px]'>{`<body>`}</span> tag? The <span className='bg-gray-300 px-[3px]'>{`<head>`}</span> element is part of this HTML metaphor. 
            It goes above our <span className='bg-gray-300 px-[3px]'>{`<body>`}</span> element.
          </p>
          <p>
            The <span className='bg-gray-300 px-[3px]'>{`<head>`}</span> element contains the metadata for a web page. Metadata is information about the page that
            isn’t displayed directly on the web page. Unlike the information inside of the <span className='bg-gray-300 px-[3px]'>{`<body>`}</span> tag, the metadata in the head is information about the page itself. 
            You’ll see an example of this in the next exercise.
          </p>
          <div className='flex flex-col gap-[5px]'>
            <p>
              The opening and closing head tags typically appear as the first item after your first HTML tag:
            </p>
            <div  className='w-[300px] h-[110px] bg-[#10162F] font-mono p-[5px] m-auto'>
              <span  className='text-red-500 ml-[5px]'>{`<head>`}</span>
              <br />
              <span  className='text-red-500 ml-[5px]'>{`</head>`}</span>
            </div>
            <h1 className='text-red-400 text-center header-font'>Instructions</h1>
            <p>
              1. Place the <span className='bg-gray-300 px-[3px]'>{`<head>`}</span> element below the opening <span className='bg-gray-300 px-[5px]'>{`<html>`}</span> tag.
            </p>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] font-bold header-font'>Page Titles</h1>
            <p>
              What kind of metadata about the web page can the <span className='bg-gray-300 px-[3px]'>{`<head>`}</span> element contain?
            </p>
            <p>
              A browser’s tab displays the title specified in the <span className='bg-gray-300 undeline px-[3px]'>{`<title>`}</span> tag. The <span className='bg-gray-300 px-[3px]'>{`<title>`}</span>
               tag is always inside of the <span className='bg-gray-300 px-[3px]'>{`<head>`}</span>.
            </p>
            <div className='w-[300px] h-[140px] text-white bg-[#10162F] font-mono p-[5px] m-auto'>
              <span className='text-gray-300'>{`<!DOCTYPE html>`}</span>
              <br />
              <span className='text-red-400'>{`<html>`}</span>
              <br />
              <span className='text-red-400 ml-[10px]'>{`<head>`}</span>
              <br />
              <span className='text-red-400 ml-[20px]'>{`<title>`}</span>My Coding Journal<span className='text-red-400'>{`</title>`}</span>
              <br />
              <span className='text-red-400 ml-[10px]'>{`</head>`}</span>
              <br />
              <span className='text-red-400'>{`</html>`}</span>
            </div>
            <p>
              If we were to open a file containing the HTML code in the example above,
              the browser would display the words <span className='bg-gray-300 px-[3px]'>{`My Coding Journal`}</span> in the title bar (or in the tab’s title).
            </p>
            <h1 className='text-red-400 text-center header-font'>Instructions</h1>
              <p>
              1.
              Add “Your Name” as the title of your web page by using the <span className='bg-gray-300 px-[3px]'>{`<title>`}</span> element,
              </p>
              <img src={titlesvg} alt="svg" className='h-[190px] w-full border border-black' />
          </div>

          <div className='flex flex-col gap-[10px]'>
            <h1 className='text-[20px] font-bold header-font'>Linking to Other Web Pages</h1>
            <p>
             One of the powerful aspects of HTML (and the Internet), is the ability to link to other web pages.
            </p>
            <p>
              You can add <span title='Links are used in HTML to add features to a web page including styling, functionality, hyperlinks, and navigation.' className='text-blue-400 underline cursor-pointer'>links</span> to a web page by adding an
              anchor element <span title='Creates a link to another page or to a location in the current page.' className='bg-gray-300 px-[3px] underline cursor-pointer'>{`<a>`}</span> and including the text of the link in between the
               opening and closing <span title='A tag is a set of characters constituting a formatted command for a web page.' className='text-blue-400 underline cursor-pointer'>tags</span>.
            </p>
          </div>
          <div className='w-[300px] h-auto text-white bg-[#10162F] font-mono p-[5px] m-auto'>
            <span className='text-red-400'>{`<a>`}</span>This Is A Link To Wikipedia<span className='text-red-400'>{`</a>`}</span>
          </div>
          <p>
            Wait a minute! Technically, the link in the example above is incomplete. How exactly is the link above supposed to work if there is no URL that will lead users to the actual Wikipedia page?
          </p>
          <p>
            The anchor element in the example above is incomplete without the <span className='bg-gray-300 px-[3px]'>href</span>
             attribute. This attribute stands for <em>hypertext reference</em> and is used to link to a <em>path</em>, or the address to where a file is located (whether it is on your computer or another location).
            The paths provided to the <span className='bg-gray-300 px-[3px]'>href</span> attribute are often URLs.
          </p>
          <div className='w-[360px] h-auto text-white bg-[#10162F] font-mono p-[5px] m-auto'>
              <span className='text-red-400'>{`<a `}</span><span className='text-[#B4D353]'>href</span>=<span className='text-[#FFE083]'>"https://www.wikipedia.org/"</span>
              <span className='text-red-400'>{`>`}</span>This Is A Link To Wikipedia
              <span className='text-red-400'>{`</a>`}</span>
          </div>
          <p>
              In the example above, the <span className='bg-gray-300 px-[3px]'>href</span> attribute has been set to the value
             of the URL <span className='bg-gray-300 px-[3px]'>https://www.wikipedia.org/</span>. The example now shows the correct use of an anchor element.
          </p>
          <p>
            When reading technical documentation, you may come across the term <em>hyperlink</em>. Not to worry, this is simply the technical term for link. These terms are often used interchangeably.
          </p>
        </div>
        
        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Opening Links in a New Window</h1>
          <p>
            Have you ever clicked on a link and observed the resulting web page 
            open in a new browser window? If so, you can thank the <span className='bg-gray-300 px-[3px]'>{`<a>`}</span> element’s <span className='bg-gray-300 px-[3px]'>target</span> attribute.
          </p>
          <p>
            The target attribute specifies how a <span className='bg-gray-30 px-[3px]'>link</span> should open.
          </p>
          <p>
           It’s possible that one or more links on your web page link to an entirely different website. In that case, you may want users to read the linked website, but hope that they return to your web page. This is exactly when the <span className='bg-gray-300 px-[3px]'>target</span> attribute is useful!
          </p>
          <p>
            For a link to open in a new window, the <span className='bg-gray-300 px-[3px]'>target</span> attribute requires a value of <span className='bg-gray-300 px-[3px]'>_blank</span>.
            The target attribute can be added directly to the opening tag of the
            anchor element, just like the <span className='bg-gray-300 px-[3px]'>href</span> attribute.
          </p>
          <div className='w-[360px] h-auto text-white bg-[#10162F] font-mono p-[5px] m-auto'>
              <span className='text-red-400'>{`<a `}</span><span className='text-[#B4D353]'>href</span>=<span className='text-[#FFE083]'>"https://www.wikipedia.org/"</span>
              <span className='text-[#B4D353]'> target</span>=<span className='text-[#FFE083]'>"_blank"</span>
              <span className='text-red-400'>{`>`}</span>This Is A Link To Wikipedia
              <span className='text-red-400'>{`</a>`}</span>
          </div>
          <p>
            In the example above, setting the <span className='bg-gray-300 px-[3px]'>target</span> attribute to <span className='bg-gray-300 px-[3px]'>"_blank"</span> instructs the browser to open the relevant Wikipedia page in a new window.
          </p>
          <p>
            In this exercise, we’ve used the terminology “open in a new window.” It’s likely that you are using a modern
             browser that opens up websites in new tabs,
            rather than new windows. Before the advent of browsers with tabs, additional browser windows had to be opened to
             view more websites. The <span className='bg-gray-300 px-[3px]'>target="_blank"</span> attribute, when used in modern browsers, will open new websites in a new tab.
          </p>

        </div>


        <button onClick={nextStep} className='border border-black register bg-yellow-300 p-[5px] header-font font-medium'>Next</button>
    </div>
  )
}

export default NvHTML3;