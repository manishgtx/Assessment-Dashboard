import React from 'react'
import MenuItem from './MenuItem'
import { sideNavItems } from '../../meta/sideNav'
const MenuItemsContainer = () => {
  return (
    <ul>
        {sideNavItems.map((singleItem,index) => {
            if(index === sideNavItems.length - 1){
                return (
                    <>
                    <hr className='mb-4 border-dashed border-b-1 border-primary-blackish-1'/>
                    <MenuItem key={singleItem.id} {...singleItem} length={sideNavItems.length - 1} index={index}/>
                    </>
                )
            }
                return <MenuItem key={singleItem.id} {...singleItem} length={sideNavItems.length - 1} index={index}/>
            }
        )}
    </ul>
  )
}

export default MenuItemsContainer