import * as React from 'react';
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../../state management/actions/cartItems.js';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect, { SelectChangeEvent } from '@mui/material/Select';

export function CartItem({ cartItems, product }) {

  const dispatch = useDispatch();
  const handleAddOne = (item) => () => dispatch(addCartItem(cartItems, item))
  const handleRemoveOne = (item) => () => dispatch(removeCartItem(cartItems, item))
  const handleChange = () => { }
  const doSomething = (e) => {
    // e.preventDefault();
    // console.log('hey')
    
   }
  const handleTenPlus = () => { console.log('10+ function works') }

  return (
    <div className="box flex py-6 sm:py-10">
      {/* <Button>This is a Material UI button</Button> */}

      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="box object-cover object-center w-24 h-24 rounded-md sm:w-48 sm:h-48 flex-shrink-0"
        onClick={doSomething}
      />

      <div className="box flex flex-col justify-between flex-1 ml-4 sm:ml-6">
        <div className="box relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className=' box'>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                  {product.name}
                </a>
              </h3>
            </div>
            <div className="flex mt-1 text-sm">
              <p className="text-gray-500">{product.color}</p>
              {product.size ? (
                <p className="pl-4 ml-4 text-gray-500 border-l border-gray-200">{product.size}</p>
              ) : null}
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
          </div>

          <div className="box mt-4 sm:mt-0 sm:pr-9">

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Quantity
                </InputLabel>
                <NativeSelect
                  defaultValue={product.qty}
                  inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                  }}
                >
                  <MenuItem value={1} >1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10+</MenuItem>
                </NativeSelect>
              </FormControl>
            </Box>

            <div className="absolute top-0 right-0">
              <button onClick={handleRemoveOne(product)} type="button" className="inline-flex p-2 -m-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Remove</span>
                <XIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            
          </div>
        </div>

        <div className="box flex mt-4 space-x-2 text-sm text-gray-700">
          {product.inStock ? (
            <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
          ) : (
            <ClockIcon className="flex-shrink-0 w-5 h-5 text-gray-300" aria-hidden="true" />
          )}

          <span>{product.inStock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
        </div>
      </div>
    </div>
  )
}
