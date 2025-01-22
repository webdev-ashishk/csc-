/* eslint-disable react/prop-types */
export default function Download({ DownloadServices }) {
  console.log(DownloadServices);
  return (
    <section className="">
      <p className="text-center my-4">
        <i className="text-4xl text-green-400 font-extrabold text-center uppercase my-5">
          Download Services
        </i>
      </p>
      <hr />
      <article className="bg-gray-100 rounded-lg flex flex-wrap justify-center items-center gap-4 p-4 m-2">
        {DownloadServices.map((element) => {
          return (
            <article
              key={element.id}
              className="w-[300px] h-[200px] border-2 rounded-lg m-2 p-2 bg-green-100 hover:bg-green-200"
            >
              <img
                src={element.imageUrl}
                alt="download-image"
                className="rounded-2xl"
              />
              <p className="text-2xl font-bold text-center">{element.title}</p>
            </article>
          );
        })}
      </article>
    </section>
  );
}
