import svg from '../assets/undraw_profile_data_re_v81r.svg';

function Contact() {
  return (
    <div className='w-[80%] border bg-white m-auto shadow-md mt-[30px] p-[10px]'>

      <div className='conatact w-full flex justify-between items-center gap-[10px] main-font'>
        <div className='w-[50%]'>
          <img src={svg} alt="svg"  className='w-full object-cover'/>
        </div>

        <form onSubmit={ e => e.preventDefault()} className='flex flex-col p-[10px] gap-[10px]'>
          <h1 className='header-font text-[19px] font-bold'>Contact</h1>
          <p className='text-[14px]'>
            Our manager will contact you within 30 minutes and answer all your question
          </p>

          <div className='flex flex-col gap-[5px]'>
            <label htmlFor="nameLabel" className='text-[15px] font-medium'>Name Label</label>
            <input id='nameLabel' type="text" className='w-[200px] text-[14px] px-[5px] py-[3px] rounded-md outline-none border border-black' required/>
          </div>

          <div className='flex flex-col gap-[5px]'>
            <label htmlFor="phoneLabel" className='text-[15px] font-medium'>Phone Label</label>
            <input id='phoneLabel' type="text" className='w-[200px] text-[14px] px-[5px] py-[3px] rounded-md outline-none border border-black' required/>
          </div>

          <div className='flex flex-col gap-[5px]'>
            <label htmlFor="emailLabel" className='text-[15px] font-medium'>Email Label</label>
            <input id='emailLabel' type="text" className='w-[200px] text-[14px] px-[5px] py-[3px] rounded-md outline-none border border-black' required/>
          </div>

          <div className='flex flex-col gap-[5px]'>
            <label htmlFor="messageLabel" className='text-[15px] font-medium'>Message Label</label>
            <textarea name="messageLabel" id="messageLabel" className='outline-none border border-black rounded-md' required></textarea>
            <button className='register bg-yellow-300 py-[5px]'>Send</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Contact;