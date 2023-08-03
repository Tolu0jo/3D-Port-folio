import React,  {useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style';
import {EarthCanvas} from  "./canvas";
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
const Contact = () => {
  const formRef = useRef();
  const [loading,setLoading]=useState(false);
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  });
 const handleChange=()=>{

 }
 const handleSubmit=()=>{
  
 }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex
    gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn("left","tween",0.2,1)}>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")