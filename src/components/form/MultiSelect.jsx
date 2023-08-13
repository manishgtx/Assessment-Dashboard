import {useState} from 'react'
import Label from '../common/Label'
import crossIcon from '../../assets/images/form/Vector.svg'
const MultiSelect = ({setSkills,skills}) => {
  const [input,setInput] = useState('')
  const handleAdd = (e) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 999999 + 1)
    console.log(id)
    setSkills([...skills,{id,title:input}])
    setInput('')
  }

  const handleDelete = (id) => {
    const data = skills.filter((skill)=> skill.id !== id)
    setSkills(data)
  }
  return (
    <div className='flex flex-col gap-[10px] bg-white'>
        <Label>Skills</Label>
        <form onSubmit={handleAdd}>
            <div className='flex items-start p-4 border gap-[10px] flex-wrap rounded-t-lg min-h-[100px] max-h-[140px] overflow-y-auto'>
                {skills.map((skill) => {
                  return <div key={skill.id} className='flex items-center bg-primary-accent-2 px-[10px] py-2 rounded-3xl gap-2'>
                  <p className='text-xs font-medium text-primary-blue-1'>{skill.title}</p>
                  <img src={crossIcon} alt="" className='cursor-pointer' onClick={() => handleDelete(skill.id)}/>
              </div>
                })}
                
            </div>
            <input type="text" placeholder='Type here' value={input} onChange={(e) => setInput(e.target.value)} className='inputBox w-full p-[15px] border border-t-0 border-primary-blackish-2 rounded-b-lg text-primary-blue-1 focus:outline-none'/>
        </form>
    </div>
  )
}

export default MultiSelect