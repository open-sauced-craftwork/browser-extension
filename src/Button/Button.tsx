import { useEffect } from "react";
import "./Button.css"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    username?: string;
  }

export default function Button(props: ButtonProps) {
    const url = "https://insights.opensauced.pizza/user/";
    return(
        <a href={url + props.username + "/contributions"} target="_blank" rel="noopener noreferrer" className="opensauced-btn">View on OpenSauced</a>
    )
}