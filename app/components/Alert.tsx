import React from "react";
import { TiWarningOutline } from "react-icons/ti";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface AlertProps {
  type: 'success' | 'error';
  message: string;
}
const Alert = ({ type, message }: AlertProps) => {

  const setColors = () => {
    if (type == 'error') return 'bg-pink-100 text-pink-900 border-pink-200';
    return 'bg-emerald-100 text-emerald-900 border-emerald-200'
  }
  return (
   <div className={`rounded-md text-sm p-2 flex items-center my-1 border ${setColors()}`}>
      {type === 'error' ? <TiWarningOutline className="me-1"/> : <BsFillCheckCircleFill className="me-1"/>} {message}
   </div>
  );
};

export default Alert;
