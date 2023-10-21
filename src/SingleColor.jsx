import React from 'react';
import { toast } from 'react-toastify';

function SingleColor({color,index}) {
    const {hex, weight}= color;
    const saveToClipboard = async()=>{
        if(navigator.clipboard){

            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success('Successfully copied')
            } catch (error) {
                toast.error('Failed to copy')
            }
        }
        else{
            toast.error('Unable to Copy')
        }
    }
  return (
    <article className={index>10?'color color-light':'color'} onClick={saveToClipboard} style={{background:`#${hex}`}}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>#{hex}</p>
    </article>
  )
}

export default SingleColor