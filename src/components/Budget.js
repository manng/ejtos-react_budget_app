import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
 	const { dispatch , currency, budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
     const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
   const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses)
        {
			alert("The budget cannot be below the already allocated expenses: " + currency + totalExpenses);
			setNewBudget(totalExpenses);
			dispatch({type: 'SET_BUDGET', payload: totalExpenses});
		} 
		else 
		{		
			setNewBudget(event.target.value);
	    	dispatch({type: 'SET_BUDGET', payload: event.target.value});
	    }
    }
    return (
	<div className='alert alert-secondary'>
		<span>Budget: {currency}</span>
		<input type="number" 
		       step="10" 
		       value={newBudget} 
		       max="20000" 
		       onChange={handleBudgetChange}></input>
	</div>
    );
};
export default Budget;
