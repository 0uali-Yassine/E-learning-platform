import { useState } from "react";
import { useGlobalContext } from "../../../../Context";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import tablesvg from '../../../../assets/table_example.webp';

function NvHTML5({course}) {
    const {nextStepsLessons} = useGlobalContext();
  const [hint,setHint] = useState(false);

    const nextStep =  () => {
        nextStepsLessons();
    };

  return (
    <div className='flex flex-col gap-[10px] main-font select-none paraLearn p-[10px]'>
        <h1 className='text-[20px] text-center header-font'>{course?.lessonName}</h1>
        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[25px] header-font text-center'>HTML Tables</h1>
          <h1 className='text-[20px] font-bold header-font'>Introduction to Tables</h1>
          <p>
            There are many websites on the Internet that display information like stock prices, sports scores, invoice data, and more. This data is tabular in nature, meaning that a table is often the best way of presenting the data. 
          </p>
          <p>
            In this part of the course, we’ll learn how to use the HTML <span className="bg-gray-300 px-[3px]">{`<table>`}</span> element to present information in a two-dimensional table to the users.
          </p>
          <p className="font-medium">
            Let’s get started!
          </p>
          
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Create a Table</h1>
          <p>
            Before displaying data, we must first create the table that will contain the data by using the <span className="bg-gray-300 px-[3px]">{`<table>`}</span> element.
          </p>
          <div className='w-[300px] h-[100px] bg-[#10162F] font-mono p-[5px] m-auto'>
            <span className="text-red-500">{`<table>`}</span>
            <br />
            <br />
            <span className="text-red-500">{`</table>`}</span>
          </div>
          <p>
            The <span className="bg-gray-300 px-[3px]">{`<table>`}</span> element will contain all of the tabular data we plan on displaying.
          </p>
          <h1 className='text-red-400 text-center header-font'>Instructions</h1>
          <p>
            1.In index.html, create a table between the  body tag.
          </p>
          <div className='flex justify-between p-[5px] header-font items-center w-[300px] border border-black rounded-md bg-yellow-200' onClick={()=> setHint(prev => !prev)}>
              <p className='header-font font-medium'>{!hint ? 'Stuck? Get a hint':'hint'}</p>
              {
                hint ? <MdKeyboardArrowUp size={30}/> :  <MdKeyboardArrowDown size={30}/>
              }
          </div>
          <div className={`${hint ? 'flex':'hidden'} w-[300px] h-auto flex-col gap-[5px] bg-yellow-100`}>
              <div className='w-[300px] h-[110px] bg-[#10162F] font-mono p-[5px] m-auto'>
                <span className="text-red-500">{`<body>`}</span>
                <br />
                <span className="text-red-500 ml-[15px]">{`<table>`}</span>
                <br />
                <span className="text-red-500 ml-[15px]">{`</table>`}</span>
                <br />
                <span className="text-red-500">{`</body>`}</span>
              </div>
          </div>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Table Rows</h1>
          <p>
            In many programs that use tables, the table is already predefined for you, meaning that it contains the <span className="text-blue-400 underline hover:underline-none"> rows, columns, and cells that will hold data</span>. In HTML, all of these components must be created.
          </p>
          <p>
            The first step in entering data into the table is to add rows using the table row element: <span className="bg-gray-300 px-[3px]">{`<tr>`}</span>.
          </p>
          <div className='w-[300px] h-auto bg-[#10162F] font-mono p-[5px] m-auto'>
            <span className="text-red-500">{`<table>`}</span>
            <br />
            <span className="text-red-500 ml-[15px]">{`<tr>`}</span>
            <br />
            <span className="text-red-500 ml-[15px]">{`</tr>`}</span>
            <br />
            <span className="text-red-500 ml-[15px]">{`<tr>`}</span>
            <br />
            <span className="text-red-500 ml-[15px]">{`</tr>`}</span>
            <br />
            <span className="text-red-500">{`</table>`}</span>
          </div>
          <p>
            In the example above, two rows have been added to the table.
          </p>
          <h1 className='text-red-400 text-center header-font'>Instructions</h1>
          <p>
          1.
          Add two rows to the table in <strong>index.html</strong>.
          </p>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[25px] header-font text-center'>Table Data</h1>
          <p>
            Rows aren’t sufficient to add data to a table. Each cell element must also be defined. In HTML, you can add data using the table data element: <span className="bg-gray-300 px-[3px]">{`<td>`}</span>.
          </p>
          <div className='w-[300px] bg-[#10162F] text-white font-mono p-[5px] m-auto'>
              <span className="text-red-500">{`<table>`}</span>
              <br />
              <span className="text-red-500 ml-[15px]">{`<tr>`}</span>
              <br />
              <span className='text-red-500 ml-[30px]'>{`<td>`}</span>
                20
              <span className='text-red-500 '>{`</td>`}</span>
              <br />
              <span className='text-red-500 ml-[30px]'>{`<td>`}</span>
                79
              <span className='text-red-500 '>{`</td>`}</span>
              <br />
              <span className="text-red-500 ml-[15px]">{`</tr>`}</span>
              <br />
              <span className="text-red-500">{`</table>`}</span>
          </div>
          <p>
          In the example above, two data points ( <span className="bg-gray-300 px-[3px]">20</span>and <span className="bg-gray-300 px-[3px]">79</span> ) were entered in the one row that exists. By adding two data points, we created two cells of data.
          </p>
          <p>
           If the table were displayed in the browser, it would show a table with one row and two columns.
          </p>
          <h1 className='text-red-400 text-center header-font'>Instructions</h1>
          <div className="flex flex-col gap-[5px]">
            <p>
              1.
              In the second row, add three cells of data. The cells should contain the following data, in order:
            </p>
            <ul className="marker:text-sky-400 list-disc pl-7">
              <li>Adam’s Greenwork</li>
              <li>18</li>
              <li>Package Items</li>
            </ul>
          </div>
          <div className='flex justify-between p-[5px] header-font items-center w-[300px] border border-black rounded-md bg-yellow-200' onClick={()=> setHint(prev => !prev)}>
              <p className='header-font font-medium'>{!hint ? 'Stuck? Get a hint':'hint'}</p>
              {
                hint ? <MdKeyboardArrowUp size={30}/> :  <MdKeyboardArrowDown size={30}/>
              }
          </div>
          <div className={`${hint ? 'flex':'hidden'} w-[300px] h-auto flex-col gap-[5px] bg-yellow-100`}>
            <p className="p-[5px]">
              The table should look something like:
            </p>
            <div className='w-[300px] bg-[#10162F] text-white font-mono p-[5px] m-auto'>
              <span className="text-red-500">{`<table>`}</span>
              <br />
              <span className="text-red-500 ml-[15px]">{`<tr>`}</span>
              <br />
              <span className='text-red-500 ml-[30px]'>{`<td>`}</span>
                /////
              <span className='text-red-500 '>{`</td>`}</span>
              <br />
              <span className='text-red-500 ml-[30px]'>{`<td>`}</span>
                /////
              <span className='text-red-500 '>{`</td>`}</span>
              <br />
              <span className='text-red-500 ml-[30px]'>{`<td>`}</span>
                /////
              <span className='text-red-500 '>{`</td>`}</span>
              <br />
              <span className="text-red-500 ml-[15px]">{`</tr>`}</span>
              <br />
              <span className="text-red-500">{`</table>`}</span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[10px]'>
          <h1 className='text-[20px] font-bold header-font'>Table Headings</h1>
          <p>
            Table data doesn’t make much sense without titles to describe what the data represents.
          </p>
          <p>
            To add titles to rows and columns, you can use the table heading element: <span className="bg-gray-300 px-[3px]">{`<th>`}</span>.
          </p>
          <p>
            The table heading element is used just like a table data element, except with a relevant title. Just like table data, a table heading must be placed within a table row.
          </p>
          <div className='w-auto bg-[#10162F] text-white font-mono p-[5px] m-auto'>
              <span className="text-red-500">{`<table>`}</span>
              <br />
              <span className="text-red-500 ml-[15px]">{`<tr>`}</span>
              <br />
              <span className="text-red-500 ml-[30px]">{`<th></th>`}</span>
              <br />
              <span className="text-red-500 ml-[30px]">{`<th`}</span><span className="text-[#B4D353]"> scope</span>=<span className='text-[#FFE083] '>"col"</span><span className="text-red-500">{`>`}</span>Saturday<span className="text-red-500 ml-[30px]">{`</th>`}</span>
              <br />
              <span className="text-red-500 ml-[30px]">{`<th`}</span><span className="text-[#B4D353]"> scope</span>=<span className='text-[#FFE083] '>"col"</span><span className="text-red-500">{`>`}</span>Sunday<span className="text-red-500 ml-[30px]">{`</th>`}</span>
              <br />
              <span className="text-red-500 ml-[15px]">{`</tr>`}</span>
              <br />
              <span className="text-red-500 ml-[15px]">{`<tr>`}</span>
              <br />
              <span className="text-red-500 ml-[30px]">{`<th`}</span><span className="text-[#B4D353]"> scope</span>=<span className='text-[#FFE083] '>"row"</span><span className="text-red-500">{`>`}</span>Temperature<span className="text-red-500 ml-[30px]">{`</th>`}</span>
              <br />
              <span className="text-red-500 ml-[30px]">{`<td>`}</span>73
              <span className="text-red-500">{`</td>`}</span>
              <br />
              <span className="text-red-500 ml-[30px]">{`<td>`}</span>81
              <span className="text-red-500">{`</td>`}</span>
              <br />
              <span className="text-red-500 ml-[15px]">{`</tr>`}</span>
              <br />
              <span className="text-red-500">{`</table>`}</span>
            </div>
            <p>
             What happened in the code above?
            </p>
            <p>
              First, a new row was added to hold the three headings: a blank heading,
               a <span className="bg-gray-300 px-[3px] font-mono">Saturday</span> heading, and a 
               <span className="bg-gray-300 px-[3px] font-mono">Sunday</span> heading. The blank heading creates the extra table cell necessary to align the table headings correctly over the data they correspond to.
            </p>
            <p>
             In the second row, one table heading was added as a row title: <span className="bg-gray-300 px-[3px] font-mono">Temperature</span>.
            </p>
            <div className="flex flex-col gap-[5px]">
              <p>
              When rendered, this code will appear similar to the image below:
              </p>
              <img src={tablesvg} alt="svg" className="w-[80%] m-auto"/>
            </div>
            <p>
             Note, also, the use of the scope attribute, which can take one of two values:
            </p>
            <ul  className='marker:text-sky-400 list-decimal pl-7 paralearn'>
              <li>
                <span className="bg-gray-300 px-[3px]">row</span> - this value makes it clear that the heading is for a row.
              </li>
              <li>
              <span className="bg-gray-300 px-[3px]">col</span> - this value makes it clear that the heading is for a column.
              </li>
            </ul>
            <p>
              HTML code for tables may look a little strange at first, but analyzing it piece by piece helps make the code more understandable.
            </p>
            <h1 className="header-font text-center font-semibold">Not complete yet... </h1>
        </div>



        <button onClick={nextStep} className='border border-black register bg-yellow-300 p-[5px] header-font font-medium'>Next</button>
    </div>
  )
}

export default NvHTML5;