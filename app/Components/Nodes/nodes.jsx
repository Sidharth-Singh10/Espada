import React from 'react';

function VerticalTrackingLine() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative h-full">
        <div className="absolute left-1/2 h-full bg-black w-2"></div>
        <div className="absolute left-1/2 top-20 transform -translate-x-1/2 w-10 h-10 bg-black rounded-full"></div>
        <div className="absolute left-1/2 top-20 transform -translate-x-1/2 ml-4 text-xs">This is a Node 1</div>
        <div className="absolute left-1/2 top-40 transform -translate-x-1/2 w-10 h-10 bg-black rounded-full"></div>
        <div className="absolute left-1/2 top-40 transform -translate-x-1/2 ml-4 text-xs">This is a Node 2</div>
        <div className="absolute left-1/2 top-60 transform -translate-x-1/2 w-10 h-10 bg-black rounded-full"></div>
        <div className="absolute left-1/2 top-60 transform -translate-x-1/2 ml-4 text-xs">This is a Node 3</div>
        <div className="absolute left-1/2 top-80 transform -translate-x-1/2 w-10 h-10 bg-black rounded-full"></div>
        <div className="absolute left-1/2 top-80 transform -translate-x-1/2 ml-4 text-xs">This is a Node 4</div>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-10 h-10 bg-black rounded-full"></div>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 ml-4 text-xs">This is a Node 5</div>
      </div>
    </div>
  );
}

export default VerticalTrackingLine;