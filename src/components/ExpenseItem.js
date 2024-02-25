import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import plus_sign from "../images/plus-sign.png";
import minus_sign from "../images/minus-sign.png";

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

	const imagesList = [
	  {
	    id: 1,
	    src: plus_sign,
	    alt: "Plus",
	  },
	  {
	    id: 2,
	    src: minus_sign,
	    alt: "Minus",
	  }
	];

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
		
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td align="center"><img src={plus_sign} height={20} width={20}  onClick={event=> increaseAllocation(props.name)}/></td>
        <td align="center"><img src={minus_sign} height={20} width={20}  onClick={event=> decreaseAllocation(props.name)}/></td>
        <td align="center"><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
