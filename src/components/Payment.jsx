/* eslint-disable react/prop-types */

export default function Payment({ PaymentData }) {
  return (
    <section className="py-10">
      <h1
        className="text-center font-extrabold  text-[2rem] text-blue-800 my-5"
        id="space-mono-bold-italic"
      >
        Payment!
      </h1>
      <article className="p-8 m-2 bg-gray-200 rounded-2xl flex flex-wrap lg:justify-start justify-center items-center shadow-lg shadow-blue-600 py-12">
        {PaymentData.map((element) => {
          return (
            <article
              key={element.id}
              className="rounded-2xl bg-blue-200 hover:bg-blue-400 inline-block overflow-hidden  border-2 hover:border-blue-800 ml-5 my-2 w-[300] h-[300]"
            >
              <a href={element.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={element.imageUrl}
                  alt="payment image"
                  width={300}
                  height={200}
                  className=""
                />
                <p className="p-2 text-center text-[0.9rem] font-semibold">
                  {element.title}
                </p>
              </a>
            </article>
          );
        })}
      </article>
    </section>
  );
}
