import { useRouter } from "next/router"
export default function Projects() {
    const test = useRouter()
    console.log('teste', test);
    return (
    <div>
       <h1>Hello {test.query.id}</h1> 
    </div>
    )
  }
  