import React from "react";

export default function SignInLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)
{
    return(
      <div>
      <p className="text-center border">20% for next 20 days</p>
      {children}
      </div>
    );
}