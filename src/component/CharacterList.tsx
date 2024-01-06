import useFetch from "@/hooks/useFetch";
import Loader from "./Loader";
import Character from "./Character";

export default function CharacterList() {
  const data = useFetch("https://rickandmortyapi.com/api/character");

  console.log(data);
  

  return (
    <>
      {data.loading ? (
        <Loader />
      ) : (
        // <>
        //   <section className="mx-auto w-[90%] max-w-[1440px]">
        //     <div className="my-6 grid grid-cols-auto gap-4">
        //       {data.characters.map((item:any) => (
        //         <Character item={item} key={item.id} />
        //       ))}
        //     </div>
        //   </section>
        // </>
        <></>
      )}
    </>
  );
}
