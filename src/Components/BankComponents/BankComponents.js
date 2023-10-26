import React, { useContext } from 'react'
import './BankComponents.css'
import { Link } from 'react-router-dom'
import backSVG from './Assets/B.svg'
import { ProfileContext } from '../Profile/Profile';
import {MenuHeader}  from '../GameComponents/Body/MenuHeader/MenuHeader';



export const BankComponents = () => {
	const [value, setValue] = React.useState(0)
	const p = useContext(ProfileContext)


	return (
		<div className='BankComponents'>
            <MenuHeader>Bank</MenuHeader>
			<div className='BankComponentsBody'>
				<div>
					<input value={value} onChange={(e) => setValue(e.target.value)}  label="% of your salary"></input>
				</div>
			</div>
		</div>
	)
}
