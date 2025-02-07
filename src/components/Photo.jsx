/* eslint-disable react/prop-types */
export default function Photo({ PhotoServiceData }) {
  console.log(PhotoServiceData);
  return (
    <section className="pt-24" id="photoServices">
      <p className="text-center my-3">
        <i className="text-center font-extrabold uppercase text-[1.5rem] text-red-500 my-5">
          Photos Services
        </i>
      </p>
      <article className="bg-gray-200 rounded-2xl flex flex-wrap lg:justify-start justify-center items-center gap-4 p-4 m-2 py-10">
        {PhotoServiceData.map((element) => {
          return (
            <article
              key={element.id}
              className="w-[300px] h-[220px] hover:border-2 hover:border-red-400 rounded-2xl bg-red-200 hover:bg-red-300  overflow-hidden"
            >
              <a href={`${element.link}`} target="_blank">
                <img
                  src={element.imageUrl}
                  alt="photo-related-service-image"
                  className="rounded overflow-hidden"
                  width={300}
                  height={100}
                />
              </a>
              <p className="text-center font-bold text-[0.9rem] overflow-hidden">
                {element.title}
              </p>
            </article>
          );
        })}
      </article>
    </section>
  );
}
