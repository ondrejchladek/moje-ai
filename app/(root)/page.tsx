// import { Collection } from "@/components/shared/Collection"
// import { navLinks } from "@/constants"
// import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs"

const Home = async () => {
  // const page = Number(searchParams?.page) || 1;
  //const searchQuery = (searchParams?.query as string) || '';

 // const images = await getAllImages({ page, searchQuery})

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          <div>Moje AI</div>Nejlepší český AI asistent
        </h1>
        <ul className="flex-center w-full gap-20">
        </ul>
      </section>
    </>
  )
}

export default Home