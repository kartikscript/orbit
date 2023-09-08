import React from "react";
import SectionBox from "./SectionBox";
export default function Section(){
return ( <section className="my-20">
    <div className="flex h-6/12 p-10 bg-black text-white rounded-3xl">
      <div>
       
      
       <p className="text-4xl font-bold ">Dedicating Team Of <br/>Customer Satisfaction<br/><span className="inline-block">Experts</span> </p>
       <button className="px-2 py-2 rounded-full bg-white/25" >Go &rarr;</button>
        <p>
Introducing our latest design project: a landing page for a revolutionary software dedicated to elevating customer experiences. Dive into a layout that mirrors the software&apos;s promise that mirrors the software&apos;s promise: intuitive, responsive,<br/> and user-centric.</p>
      </div>

      <img src='/icons/section1.jpg' className=" w-3/12 "/>
    </div>
    <section className="w-10/12 mx-auto mt-20">
    <div className="  flex justify-between">
      <p className="text-4xl font-bold ">A Powerful CRM <br/>That Handle It All</p>
<p>Introducing our latest design project: Dive into a layout that<br/> mirrors the software&apos;s promise: intuitive, responsive, and user-centric.</p> 
    </div>
    <div className="flex gap-5 mt-12">
    <SectionBox/>
    <SectionBox/>
    <SectionBox/>
    </div>

    <div className="flex justify-between items-center gap-16 mt-20">
      <div className="w-6/12 grid grid-cols-2 gap-5">
          <div className="   bg-black text-white text-center p-4 rounded-2xl">
          <p className="text-4xl">10K+</p>
          <p>people are reaching  aggresion</p>
</div>
<div className=" row-span-2 self-center  bg-black text-white text-center p-4 rounded-2xl">
          <p className="text-4xl">10K+</p>
          <p>people are reaching  aggresion</p>
</div> <div className="   bg-black text-white text-center p-4 rounded-2xl">
          <p className="text-4xl">10K+</p>
          <p>people are reaching  aggresion</p>
</div>
      </div>
      <div>
<p className="text-5xl pb-6 font-bold">Our Number<br/> Speaks For Itself</p>
<p>Introducing our rors the software&apos;s promise: intuitive, responsive, and user-centric.</p> 
<button className='border-2 mt-5 rounded-full border-black/6 text-black/70 p-1 border-solid'>Get Started</button>
      </div>
    </div>

    <article className="bg-blue-100 text-center rounded-2xl mt-20 py-10">
<p className="text-4xl font-bold ">Rated As The Best Platform</p>
<p className="text-black/80">Introducing our rors  ot because the mine the leif nfia <br/>jsnds the software&apos;s promise: intuitive, <br/>responsive, and user-centric.</p> 
<div className="flex justify-around items-end w-6/12 mx-auto pt-6 ">
  <p className="">4.9<br/>⭐⭐⭐⭐⭐<br/>captoria</p>
  <img src='/images/article.jpg'  className="w-2/12 rounded-3xl scale-150  translate-y-12 "/>
  <p>4.8<br/>⭐⭐⭐⭐<br/>captoria</p>

</div>
    </article>
    </section>
  </section>)
}