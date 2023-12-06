"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@nextui-org/react";

export default function FormButton({ children, ...props }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending} {...props}>
      {children}
    </Button>
  );
}
