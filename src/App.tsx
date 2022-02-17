import React, { useEffect, useState } from 'react';

interface IObj {
  id: string
  name: string
}

type TObj = {
  name: string
}

const sample = [
  { "id": "234", "name": "Smith", address: "Tokyo Shibuya High Building ", zip: "012-1023" },
  { "id": "345", "name": "Karen Abe", address: "Hokkaido Sapporo City ", zip: "070-1232" },
]

const cols = [1, 1, 3, 1];
const colSum = cols.reduce((p, c) => p += c);

function App() {
  return (
    <>
      <div className="box w-full p-2 border-2 text-center text-gray-400 font-sans font-bold">
        <div>[親] grid grid-rows-1 grid-cols-SUM grid-flow-col gap-y-1</div>
        <div>[子] col-span-N</div>
      </div>
      <div className="flex flex-col p-1 bg-gray-100 ">
        {
          sample.map(item => {
            const cssTR = `grid grid-rows-1 grid-cols-${colSum} grid-flow-col gap-y-1 mx-1 mb-2 shadow round`
            return (
              <>
                <div className={cssTR}>
                  {Object.entries(item).map(([key, val], idx) => {
                    const cssTD = `col-span-${cols[idx]} text-start p-2 text-gray-500 bg-white`
                    return <div className={cssTD}>{val}</div>
                  })}
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
