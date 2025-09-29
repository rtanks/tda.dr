import {BsCaretDown} from "react-icons/bs";
import { transformFormat } from "../../services/func/transformFunc";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: transformFormat(5),
  },
  {
    value: 10,
    label: transformFormat(10),
  },
  {
    value: 15,
    label: transformFormat(15),
  },
  {
    value: 20,
    label: transformFormat(20),
  },
  {
    value: 30,
    label: transformFormat(30),
  },
  {
    value: 40,
    label: transformFormat(40),
  },
  {
    value: 50,
    label: transformFormat(50),
  },
  {
    value: 60,
    label: transformFormat(60),
  },
  {
    value: 70,
    label: transformFormat(70),
  },
  {
    value: 80,
    label: transformFormat(80),
  },
  {
    value: 100,
    label: transformFormat(90),
  },
];

function valueText(value) {
  return `${value}°C`;
}
export default function ProgressBar({getValue}) {
    return (
        <div className="w-[90%] h-16 mt-4 mx-auto">
            <Box sx={{ width: 360 }}>
              <Slider
                aria-label="Always visible"
                defaultValue={0}
                getAriaValueText={valueText}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
                valueLabelFormat={(value) => (
                    <BsCaretDown size={24}/>
                )}
                sx={{
                  color: 'success.main',           
                  height: 8,                       
                  '& .MuiSlider-track': {
                    border: 'none',
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.3,
                    backgroundColor: 'grey.400',
                  },
                  '& .MuiSlider-thumb': {
                    width: '10px',
                    height: '10px'
                  },
                  '& .MuiSlider-valueLabel': {
                      backgroundColor: '#0000',
                      height: '22px',
                      width: '28px',
                      color: 'black',
                      transform: 'translateY(-50%) rotate(0deg)',
                      fontSize: '0.75rem',
                      '& *': {
                        background: 'transparent',
                      },
                    },
                }}
                onChange={(e) => {getValue(e.target.value == 100 ? 90 : e.target.value);console.log(e.target.value == 100 ? 90 : e.target.value);}}
              />
            </Box>
        </div>
    )
}
// const numberMarker = [5,10,20,30,40,50,60,70,80,90]
// const myProgress = (e) => {
//     console.log(Math.ceil(e.nativeEvent.offsetX / 4) + "min")//time in minute
//     setValue(e.nativeEvent.offsetX)
//     getValue(Math.ceil(e.nativeEvent.offsetX / 4))
// }
// return (
//     <div dir="ltr" className="w-[93%] h-16 mx-auto flex flex-col justify-center items-center">
//         <div className="w-[360px] relative h-5 mb-0.5">
//             <BsCaretDown size={24} className={`absolute top-0`} style={{left: value == 0? "-10px": `${value-13}px`}}/>
//         </div>
//         <div onClick={(e) => myProgress(e)} className="w-[360px] h-[5px] bg-gray-200 rounded-[10px] mb-1">
//             <div className={`h-full bg-[#27C840] rounded-[10px]`} style={{width: `${value}px`}}></div>
//         </div>
//         <div className="w-full pl-1 flex flex-row justify-between text-[13px] text-[#676767]">
//             {
//                 numberMarker.map(num => <span key={num}>{transformFormat(num)}</span>)
//             }
//         </div>
//     </div>
// )