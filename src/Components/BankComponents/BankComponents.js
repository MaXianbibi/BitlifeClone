import React from 'react'
import './BankComponents.css'
import { MenuHeader } from '../GameComponents/Body/MenuHeader/MenuHeader';


const InvestButton = () => {
	const svgPig = <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M640-532q11 0 19.5-8.5T668-560q0-11-8.5-19.5T640-588q-11 0-19.5 8.5T612-560q0 11 8.5 19.5T640-532ZM320-632h200v-22H320v22ZM219-172q-28-102-57.5-202T132-580q0-70 49-119t119-49h226q25-33 58.5-56.5T660-828q3 0 5.5 2.5t2.5 5.5q0 1-.5 2t-.5 2q-8 20-12.5 41t-8.5 42l125 125h57v189l-103 34-64 213H532v-80H348v80H219Zm17-22h90v-80h228v80h91l62-207 99-34v-151h-44L626-722q0-22 3.5-42t10.5-39q-31 8-56 28.5T543-726H300q-61.286 0-103.643 42.357T154-580q0 99.719 27.5 194.86Q209-290 236-194Zm244-305Z" /></svg>;

	return (
		<div className='InvestBody'>
			<div className='InvestButtonContainer'>
				{svgPig}
			</div>
			<p>INVEST</p>
		</div>
	);
}

export const BankComponents = () => {
	return (
		<div className='BankComponents'>
			<MenuHeader>Bank</MenuHeader>
			<div className='BankComponentsBody'>
				<InvestButton/>
			</div>
		</div>
	)
}
