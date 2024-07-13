import React, { useState } from 'react'

function Color() {
    const [colorType, setColorType] = useState('hex');
    const [color, setColor] = useState("red");

    const values = [0, 1, 2, 3, 4 ,5 ,6 , 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    const generator = (len) => {
        return Math.floor(Math.random() * 100 % len)
    }
    const handleColorChange = () => {
        if(colorType === "hex"){
            let createColor = '#';
            for(let i = 0; i < 6; ++i){
                // console.log("random",Math.floor(Math.random() * 100 % 16));
                createColor += values[generator(16)];
            }

            console.log(createColor)
            setColor(createColor)
        }
        else{
            const r = generator(256);
            const g = generator(256);
            const b = generator(256);

            setColor(`rgb(${r},${g},${b})`)
        }
    }
  return (
    <div style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column'
    }}>
        <div>
            <button onClick={() => setColorType("hex")}>hex</button>
            <button onClick={() => setColorType("rgb")}>rgb</button>
            <button onClick={handleColorChange}>change color</button>
        </div>
        <h1>
            {colorType} {color}
        </h1>
    </div>
  )
}

export default Color
