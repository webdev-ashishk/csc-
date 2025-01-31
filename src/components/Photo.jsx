/* eslint-disable react/prop-types */
export default function Photo({ PhotoServiceData }) {
  console.log(PhotoServiceData);
  return (
    <section className="pt-24" id="photoServices">
      <p className="text-center my-3">
        <i className="text-center font-extrabold uppercase text-4xl text-red-500 my-5">
          Photos Services
        </i>
      </p>
      <article className="bg-gray-200 rounded-lg flex flex-wrap justify-start items-center gap-4 p-4 m-2">
        {PhotoServiceData.map((element) => {
          return (
            <article
              key={element.id}
              className="w-[300px] h-[220px] border-2 rounded-lg bg-red-100 hover:bg-red-300 p-4 m-2 overflow-hidden"
            >
              <a href={`${element.link}`} target="_blank">
                <img
                  src={element.imageUrl}
                  alt="photo-related-service-image"
                  className="rounded-2xl"
                  width={300}
                  height={200}
                />
              </a>{' '}
              <p className="text-center font-bold text-1xl overflow-hidden">
                {element.title}
              </p>
            </article>
          );
        })}
      </article>
    </section>
  );
}
