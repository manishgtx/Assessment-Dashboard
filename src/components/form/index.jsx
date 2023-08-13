import {useState} from 'react'
import closeIcon from '../../assets/images/form/cross.svg'
import InputText from './InputText'
import Button from '../common/Button'
import DropDown from '../common/DropDown'
import MultiSelect from './MultiSelect'
import { descOptions } from '../../meta/form'
import { purposeOfTest } from '../../meta/form'
import {motion,AnimatePresence} from 'framer-motion'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { closeModal,addAssessment } from '../../store'
const Form = () => {
    const [name,setName] = useState('')
    const [purpose,setPurpose] = useState('')
    const [desc,setDesc] = useState('')
    const [skills,setSkills] = useState([])
    const [duration,setDuration] = useState('')
    const modal = useSelector((state) => state.assignment.modal)
    const backdrop = {
        visible: {opacity:1},
        hidden: {opacity: 0}
    }
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(closeModal())
    }
    const handleAddAssessment = () => {
        const id = Math.floor(Math.random() * 999999 + 1)
        dispatch(addAssessment({id,name,purpose,desc,skills}))
    }
  return (
    <AnimatePresence>
        {modal && 
            <motion.div className='fixed backdrop flex items-center justify-center z-[99999] min-h-screen w-full bottom-0 left-0 bg-black/50 modalContainer' variants={backdrop} initial="hidden" animate="visible" transition={{ duration: 0.2, delay: 0.3 }} exit={{ opacity: 0}}>
            
            <motion.div className='modal' initial={{y:'100%',opacity:1}} animate={{y:0}} transition={{ duration: 0.5, delay: 0.3 }} exit={{ y: "100%"}}>
        <div className='flex items-center justify-between border-b p-[15px] border-primary-blackish-2'>
            <h4 className='text-[14px] font-semibold text-primary-blue-1'>Sub-Section Details</h4>
            <div className='w-[40px] h-[40px] bg-primary-red-1 flex items-center justify-center rounded-full' onClick={handleCloseModal}>
                <img src={closeIcon} className='' alt="" /> 
            </div>
        </div>
        <div className='px-[15px] pt-[15px] pb-20 flex flex-col gap-4 formSelect max-h-[75%] overflow-y-auto bg-white'>
            <InputText value={name} onChange={setName}  label='Type Here' placeholder='Type Here'/>
            <DropDown label='Purpose of the test is' options={purposeOfTest} optionSelected={purpose} selectOption={setPurpose}/>
            <DropDown label='Purpose of the test is' options={descOptions} optionSelected={desc} selectOption={setDesc}/>
            <MultiSelect setSkills={setSkills} skills={skills}/>
            <InputText  value={duration} onChange={setDuration} label='Duration' placeholder='HH:MM:SS'/>
        </div>
        <div className='px-[15px] py-[15px] absolute lg:static bottom-0 w-full'>
            <Button handleClick={handleAddAssessment}/>
        </div>
        </motion.div>
        
        </motion.div>}
        
    </AnimatePresence>
  )
}

export default Form