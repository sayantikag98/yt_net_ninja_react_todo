// import {useState, useEffect} from "react";

export default function Footer(){
    // useEffect(()=>{
    //     console.log("Hello Sayantika");
    // });
    // const [name, setName] = useState("Sayantika");

    // useEffect(()=>{
    //     setName(localStorage.getItem("name"));
    // },[])

    // useEffect(()=>{
    //     localStorage.setItem("name",name);
    // },[name]);


    // const handleClick = (name, event) => {
    //     if (name === "Sayantika") setName("Ghosh");
    //     else setName("Sayantika");
    // };


    return (
        <footer>
            Copyright &copy; {new Date().getFullYear()}
            {/* <button onClick = {(event)=>{handleClick(name, event);}}>{name}</button> */}
        </footer>
    );
}