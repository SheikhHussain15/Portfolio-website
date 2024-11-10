import Footer from '@/component/footer'
import Styles from './page.module.css'

export default function About() {
    return (
        <>
            <h1 className='text-center text-5xl mt-5 text-lime-200 mb-8 mt-9 font-serif'>About Me</h1>
            <div>

                <div className='bg-lime-300 w-3/4 h-52 rounded-md mb-20 m-auto border-8 border-green-950 p-3'>
                    <h2 className='text-3xl  text-slate-900 m-3 mb-6 font-light font-serif'>Personal Information</h2>
                    <p className='font-mono text-lg text-green-950 ml-4 mr-4'>My name is <strong>Hussain Raza</strong>. My Father name is <strong>Mazher ahmed</strong> and age is 17. My D.O.B is 27/11/2007. I'm born in <strong>Karachi</strong> and also live in <strong>Karachi</strong></p>
                </div>

                <div className='bg-lime-300 w-3/4 h-52 rounded-md mb-20 m-auto border-8 border-green-950 p-3'>
                    <h2 className='text-3xl  text-slate-900 m-3 mb-6 font-light font-serif'>Education</h2>
                    <p className='font-mono text-lg text-green-950 ml-4 mr-4'>I have completed Matric in 2022 from <strong>Public Secondary School,karachi </strong>. I started Web development course in 2022 and I'm  doing AI Metaverse,Web 3.0 in GIAIC and successfully passed Quarter 01</p>
                </div>


                <div className='bg-lime-300 w-3/4 h-52 rounded-md mb-20 m-auto border-8 border-green-950 p-3'>
                    <h2 className='text-3xl  text-slate-900 m-3 mb-6 font-light font-serif'>Skills</h2>
                    <p className='font-mono text-lg text-green-950 ml-4 mr-4'>Web Designing & Development(HTML,CSS,Javascript,Typeesript,NextJs,Python) || Graphic Designing(Photoshop,Illustrator,InPage,Canva) || MS Office(Word,PowerPoint,Excel)</p>
                </div>

            </div>
            <Footer />
        </>
    )
}