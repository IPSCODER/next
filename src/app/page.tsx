"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const [loading,setLoading] = useState(false);
  const fetchDataFromApi = async () =>{
    try{
      setLoading(true)
      const response = await fetch("/api/products",{
        headers:{
          Accept: "application/json",
          method: "GET"
        }
      });

      if (response) {
        const data = await response.json()
        console.log(data);
      }
    } catch(err){
      console.log(err);
    } finally{
      setLoading(false)
    }
  }

  useEffect(() =>{
    fetchDataFromApi()
  },[])

  return (
   <>
   
   </>
  );
}
