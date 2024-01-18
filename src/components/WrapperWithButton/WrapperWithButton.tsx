import React from "react"
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode
}

export const WrapperWithButton: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <Button type="primary" onClick={handleBack}>Go back</Button>
      {children}
    </div>
  )
}